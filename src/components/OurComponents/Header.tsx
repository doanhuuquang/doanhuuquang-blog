import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ShoppingCart, ScanFace } from "lucide-react";
import * as React from "react";
import HamburgerMenuToogle from "@/components/OurComponents/HamburgerMenuToogle";
import ThemeToggle from "@/components/OurComponents/ThemeToggle";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";

export default function Header() {
  const menu = [
    { name: "Thiết kế website", href: "/" },
    { name: "Source code", href: "/" },
    { name: "Videos", href: "/" },
    { name: "Blog", href: "/" },
    { name: "Liên hệ", href: "/" },
  ];

  return (
    <header className="w-full border-b-1 border-dashed backdrop-blur-sm bg-background/90 sticky z-50 top-0 left-0">
      <div className="lg:px-8 px-3 h-17 flex items-center justify-between gap-2 md:gap-4 m-auto max-w-[1400px] xl:border-l-1 xl:border-r-1 border-dashed">
        <div className="flex items-center gap-10">
          {/* Hamburger menu toggle*/}
          <div className="lg:hidden w-[24px] h-[24px]">
            <HamburgerMenuToogle />
          </div>

          {/* Logo */}
          <Link href={"/"}>
            <h3 className="font-bold text-2xl">quangdh</h3>
          </Link>

          {/* Menu */}
          <NavigationMenu className="hidden lg:flex">
            <NavigationMenuList>
              {menu.map((item) => (
                <NavigationMenuItem key={item.name}>
                  <Link
                    key={item.name}
                    href={item.href}
                    className="text-sm font-medium text-muted-foreground hover:text-primary"
                  >
                    {item.name}
                  </Link>
                </NavigationMenuItem>
              ))}
            </NavigationMenuList>
          </NavigationMenu>
        </div>

        <div className="flex items-center gap-4">
          {/* Button group */}
          <div className="flex items-center gap-4 max-[450px]:hidden">
            <Button variant={"outline"}>
              <ScanFace />
              <span>Đăng nhập</span>
            </Button>
            <Button>
              <ShoppingCart />
              <span>Giỏ hàng</span>
            </Button>
          </div>
          {/* Theme toggle */}
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
}
