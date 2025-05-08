import { ShoppingCart, ScanFace, AlignJustify } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
  SheetFooter,
} from "@/components/ui/sheet";

export default function HamburgerMenuToogle() {
  const menu = [
    { name: "Thiết kế website", href: "/" },
    { name: "Source code", href: "/" },
    { name: "Videos", href: "/" },
    { name: "Blog", href: "/" },
    { name: "Liên hệ", href: "/" },
  ];

  return (
    <Sheet>
      <SheetTrigger>
        <AlignJustify />
      </SheetTrigger>
      <SheetContent side="left">
        <SheetHeader>
          <SheetTitle className="border-b-1 border-dashed pb-3">
            Menu
          </SheetTitle>
        </SheetHeader>
        {/* Menu item */}
        <div className="flex grow flex-col gap-2 p-4">
          {menu.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="text-sm font-medium text-muted-foreground hover:text-primary transition-all duration-300"
            >
              {item.name}
            </Link>
          ))}
        </div>
        {/* Button group */}
        <SheetFooter>
          <div className="flex flex-col items-center gap-4">
            {/* Button group */}
            <Button variant={"outline"} className="w-full">
              <ScanFace />
              <span>Đăng nhập</span>
            </Button>
            <Button className="w-full">
              <ShoppingCart />
              <span>Giỏ hàng</span>
            </Button>
          </div>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
}
