export interface NavItem {
  name: string;
  href: string;
}

export const navItems: NavItem[] = [
  { name: "Home", href: "/" },
  { name: "About", href: "#About" },
  { name: "Services", href: "#Service" },
  { name: "Testimoni", href: "#Testimoni" },
  { name: "Contact", href: "#Footer" },
];