"use client";

import { createContext, useContext, useEffect, useRef, useState, type ReactNode } from "react";
import { CartDrawer } from "./cart-drawer";

const CART_STORAGE_KEY = "nubia-storefront-cart-v1";
const MAXIMUM_CART_QUANTITY = 10;

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
  hydrated: boolean;
  isOpen: boolean;
  addItem: (item: CartLine) => void;
  setItem: (item: CartLine) => void;
  updateQuantity: (productId: string, editionId: string, quantity: number) => void;
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
        if (Array.isArray(parsed)) {
          restored = parsed.filter(isCartLine).map((line) => ({
            ...line,
            quantity: Math.min(MAXIMUM_CART_QUANTITY, line.quantity),
          }));
        }
      }
    } catch {
      try {
        window.localStorage.removeItem(CART_STORAGE_KEY);
      } catch {
        // Storage can be unavailable entirely; continue with an in-memory cart.
      }
    }
    const restoreCart = window.setTimeout(() => {
      setLines(restored);
      setHydrated(true);
    }, 0);
    return () => window.clearTimeout(restoreCart);
  }, []);

  useEffect(() => {
    if (!hydrated) return;
    try {
      window.localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(lines));
    } catch {
      // The in-memory cart remains usable when storage is unavailable or full.
    }
  }, [hydrated, lines]);

  function addItem(item: CartLine) {
    setLines((current) => {
      const match = current.find((line) => line.productId === item.productId && line.editionId === item.editionId);
      if (!match) return [...current, item];
      return current.map((line) => line === match ? { ...line, quantity: Math.min(MAXIMUM_CART_QUANTITY, line.quantity + item.quantity) } : line);
    });
    setAnnouncement(`${item.quantity} ${item.editionLabel} ${item.productName} added to the prototype cart.`);
  }

  function setItem(item: CartLine) {
    setLines((current) => {
      const quantity = Math.min(MAXIMUM_CART_QUANTITY, Math.max(1, item.quantity));
      const matchIndex = current.findIndex((line) => line.productId === item.productId && line.editionId === item.editionId);
      if (matchIndex === -1) return [...current, { ...item, quantity }];
      return current.map((line, index) => index === matchIndex ? { ...item, quantity } : line);
    });
    setAnnouncement(`${item.editionLabel} ${item.productName} updated in the prototype cart.`);
  }

  function updateQuantity(productId: string, editionId: string, quantity: number) {
    const safeQuantity = Math.min(MAXIMUM_CART_QUANTITY, Math.max(1, quantity));
    setLines((current) => current.map((line) =>
      line.productId === productId && line.editionId === editionId
        ? { ...line, quantity: safeQuantity }
        : line
    ));
    setAnnouncement(`Prototype cart quantity updated to ${safeQuantity}.`);
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
    hydrated,
    isOpen,
    addItem,
    setItem,
    updateQuantity,
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
