import { UserButton } from "@clerk/nextjs";

import { MainNav } from "./main-nav";

export const Navbar = () => {
  return (
    <header className="supports-backdrop-blur:bg-background/60 sticky top-0 z-40 w-full border-b bg-background/95 backdrop-blur">
      <div className="container flex h-14 items-center">
        <MainNav />
        <div className="flex flex-1 items-center justify-between md:justify-end">
          <UserButton afterSignOutUrl="/" />
        </div>
      </div>
    </header>
  );
};
