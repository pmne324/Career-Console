"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
   const pathname = usePathname();
  return (
    <header className="w-full bg-[#050816] border-b border-teal-400/20">
      <nav className="max-w-6xl mx-auto flex items-center justify-between px-6 py-4">
        {/* LEFT – logo / brand */}
        <div className="flex items-center gap-2">
          <div className="h-8 w-8 rounded-full border border-teal-400 flex items-center justify-center text-xs">
            {/* You can put an icon or initials here */}
            <span className="font-bold text-teal-400">SH</span>
          </div>
          <span className="font-semibold text-white tracking-wide">
            Career Console
          </span>
        </div>

        {/* MIDDLE – menu items */}
        <div className="flex items-center gap-8 text-sm">
          <NavLink href="/" label="About" active={pathname === "/"} />
          <NavLink href="/career" label="Career" active={pathname === "/career"} />
          <NavLink href="/contact" label="Contact" active={pathname === "/contact"}/>
        </div>

        {/* RIGHT – button */}
        <div>
          <button className="rounded-full bg-teal-400 px-4 py-2 text-sm font-medium text-black hover:bg-teal-300 transition">
            View my resume
          </button>
        </div>
      </nav>
    </header>
  );
}

type NavLinkProps = {
  href: string;
  label: string;
  active?: boolean;
};

function NavLink({ href, label, active }: NavLinkProps) {
  return (
    <Link
      href={href}
      className={
        "pb-1 transition-colors " +
        (active
          ? "text-teal-400 border-b-2 border-teal-400"
          : "text-gray-300 hover:text-white")
      }
    >
      {label}
    </Link>
  );
}