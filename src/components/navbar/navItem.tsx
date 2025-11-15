import { navItems } from "./navList";

export default function NavItems() {
  return (
    <ul className="flex flex-col md:flex-row gap-4 md:gap-8 text-lg font-medium">
      {navItems.map((item) => (
        <li key={item.name}>
          <a
            href={item.href}
            className="hover:text-yellow-300 transition text-white font-light"
          >
            {item.name}
          </a>
        </li>
      ))}
    </ul>
  );
}
