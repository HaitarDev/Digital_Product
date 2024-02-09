"use client";
import { Menu, X } from "lucide-react";

import NavItems from "./NavItems";
import { useEffect, useState } from "react";
import Sidebar from "./Sidebar";
import { Button } from "../ui/button";
import SidebarCart from "./SidebarCart";
import { Separator } from "../ui/separator";

function Navbar() {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const handleOpen = () => {
    setIsOpen((prev) => !prev);
  };

  // apply remove sidebar with escape
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) {
        setIsOpen(false);
      }
    };
    document.addEventListener("keydown", handler);

    return () => document.removeEventListener("keydown", handler);
  }, [isOpen]);

  return (
    <header className=" shadow-sm border-b border-muted h-14 sticky top-0 z-50 bg-white/95">
      <div className=" m mx-auto px-6 md:max-w-screen-lg  sm:px-6 md:px-10 lg:max-w-screen-lg h-full flex items-center justify-between">
        <div className="flex items-center md:gap-10 lg:gap-20">
          <h2 className="text-xl font-semibold">Assets Products</h2>
          <div className="hidden md:flex gap-3">
            <NavItems />
          </div>
        </div>
        <div className="flex items-center gap-5">
          <Button>Login</Button>
          <SidebarCart />
          <Separator orientation="vertical" className="block md:hidden h-6" />
          {/* only on small */}
          {!isOpen ? (
            <Menu className="md:hidden cursor-pointer" onClick={handleOpen} />
          ) : (
            <X className="md:hidden cursor-pointer" onClick={handleOpen} />
          )}
        </div>
      </div>
      {isOpen ? (
        <div
          className="absolute bg-black/80 min-h-screen w-full h-full overflow-hidden "
          onClick={handleOpen}
        ></div>
      ) : null}
      <Sidebar isOpen={isOpen} />
    </header>
  );
}
export default Navbar;
