"use client";

import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { ChevronsUp } from "lucide-react";

export default function BackToTopButton() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 500) {
        setShow(true);
      } else {
        setShow(false);
      }
    });
  });

  const jumToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      {show && (
        <Button
          onClick={jumToTop}
          variant={"outline"}
          className="fixed z-50 lg:bottom-9 bottom-3 lg:right-9 right-3 w-13 h-13 rounded-[100]"
        >
          <ChevronsUp className="size-8" />
        </Button>
      )}
    </>
  );
}
