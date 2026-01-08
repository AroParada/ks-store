import Link from "next/link";
import { ThemeSwitcher } from "./theme-switcher";

export function Header() {
  return (
    <header className="w-full border-b border-b-foreground/10">
      <nav className="w-full max-w-7xl mx-auto flex justify-between items-center p-4 px-6">
        <div className="flex items-center gap-8">
          <Link href="/" className="text-2xl font-bold hover:opacity-80 transition-opacity">
            KS Store
          </Link>
          <div className="hidden md:flex items-center gap-6">
            <Link href="/items" className="hover:text-foreground/80 transition-colors">
              Items
            </Link>
            <Link href="/about" className="hover:text-foreground/80 transition-colors">
              About
            </Link>
            <Link href="/contact" className="hover:text-foreground/80 transition-colors">
              Contact
            </Link>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <ThemeSwitcher />
        </div>
      </nav>
    </header>
  );
}
