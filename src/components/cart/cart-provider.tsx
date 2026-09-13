"use client";

import { createContext, useContext, useEffect, useRef, useState, type ReactNode } from "react";
import { CartDrawer } from "./cart-drawer";

const CART_STORAGE_KEY = "nubia-storefront-cart-v1";

export type CartLine = {
  productId: string;
  productName: string;
  editionId: string;
  editionLabel: string;
  quantity: number;
  unitPriceMinor: number;
  currency: string;
};

type CartContextValue = {
  lines: CartLine[];
  itemCount: number;
  isOpen: boolean;
  addItem: (item: CartLine) => void;
  removeItem: (productId: string, editionId: string) => void;
  openCart: (trigger?: HTMLElement | null) => void;
  closeCart: () => void;
};

const CartContext = createContext<CartContextValue | null>(null);

function isCartLine(value: unknown): value is CartLine {
  if (!value || typeof value !== "object") return false;
  const line = value as Partial<CartLine>;
  return typeof line.productId === "string" && typeof line.productName === "string" &&
    typeof line.editionId === "string" && typeof line.editionLabel === "string" &&
    Number.isInteger(line.quantity) && (line.quantity ?? 0) > 0 &&
    Number.isInteger(line.unitPriceMinor) && (line.unitPriceMinor ?? -1) >= 0 &&
    typeof line.currency === "string";
}

export function CartProvider({ children }: { children: ReactNode }) {
  const [lines, setLines] = useState<CartLine[]>([]);
  const [isOpen, setIsOpen] = useState(false);
  const [hydrated, setHydrated] = useState(false);
  const [announcement, setAnnouncement] = useState("");
  const returnFocus = useRef<HTMLElement | null>(null);

  useEffect(() => {
    let restored: CartLine[] = [];
    try {
      const stored = window.localStorage.getItem(CART_STORAGE_KEY);
      if (stored) {
        const parsed: unknown = JSON.parse(stored);
        if (Array.isArray(parsed)) restored = parsed.filter(isCartLine);
      }
    } catch {
      window.localStorage.removeItem(CART_STORAGE_KEY);
    }
    const restoreCart = window.setTimeout(() => {
      setLines(restored);
      setHydrated(true);
    }, 0);
    return () => window.clearTimeout(restoreCart);
  }, []);

  useEffect(() => {
    if (!hydrated) return;
    window.localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(lines));
  }, [hydrated, lines]);

  function addItem(item: CartLine) {
    setLines((current) => {
      const match = current.find((line) => line.productId === item.productId && line.editionId === item.editionId);
      if (!match) return [...current, item];
      return current.map((line) => line === match ? { ...line, quantity: Math.min(10, line.quantity + item.quantity) } : line);
    });
    setAnnouncement(`${item.quantity} ${item.editionLabel} ${item.productName} added to the prototype cart.`);
  }

  function removeItem(productId: string, editionId: string) {
    setLines((current) => current.filter((line) => line.productId !== productId || line.editionId !== editionId));
    setAnnouncement("Item removed from the prototype cart.");
  }

  function openCart(trigger?: HTMLElement | null) {
    returnFocus.current = trigger ?? null;
    setIsOpen(true);
  }

  function closeCart() {
    setIsOpen(false);
    window.requestAnimationFrame(() => returnFocus.current?.focus());
  }

  const value = {
    lines,
    itemCount: lines.reduce((total, line) => total + line.quantity, 0),
    isOpen,
    addItem,
    removeItem,
    openCart,
    closeCart,
  };

  return (
    <CartContext.Provider value={value}>
      {children}
      <p className="sr-only" role="status" aria-live="polite" aria-atomic="true">{announcement}</p>
      <CartDrawer />
    </CartContext.Provider>
  );
}

export function useCart() {
  const context = useContext(CartContext);
  if (!context) throw new Error("useCart must be used inside CartProvider");
  return context;
}
