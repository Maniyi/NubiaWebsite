// Enable a destination only when its page milestone is implemented and verified.
export const navigation = [
  { label: "Home", href: "/", implemented: true },
  { label: "Learn", href: "/learn", implemented: false },
  { label: "Explore", href: "/explore", implemented: false },
  { label: "Pieces", href: "/pieces", implemented: false },
  { label: "Shop", href: "/shop", implemented: false },
] as const;

export const activeNavigation = navigation.filter((item) => item.implemented);
