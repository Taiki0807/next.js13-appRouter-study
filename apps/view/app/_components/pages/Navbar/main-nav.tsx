"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { cn } from "@/lib/utils";

import { siteConfig } from "./Navbar-item";

export function MainNav() {
  const pathname = usePathname();

  return (
    <div className="mr-4 hidden md:flex">
      <Link href="/" className="mr-6 flex items-center space-x-2">
        <h1 className="hidden text-lg font-bold sm:inline-block">{siteConfig.name}</h1>
      </Link>
      <nav className="flex items-center space-x-6 text-sm font-medium">
        <Link
          href="/"
          className={cn(
            "transition-colors hover:text-foreground/80",
            pathname === "/" ? "text-foreground" : "text-foreground/60"
          )}
        >
          Home
        </Link>
        <Link
          href="/dashboard"
          className={cn(
            "transition-colors hover:text-foreground/80",
            pathname?.startsWith("/docs/components") ? "text-foreground" : "text-foreground/60"
          )}
        >
          Dashboard
        </Link>
        <Link
          href="/contact"
          className={cn(
            "transition-colors hover:text-foreground/80",
            pathname?.startsWith("/examples") ? "text-foreground" : "text-foreground/60"
          )}
        >
          Contact
        </Link>
        <Link
          href={siteConfig.links.github}
          className={cn("hidden text-foreground/60 transition-colors hover:text-foreground/80 lg:block")}
        >
          GitHub
        </Link>
      </nav>
    </div>
  );
}
