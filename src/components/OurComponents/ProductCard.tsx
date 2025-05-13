import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { HeartIcon, PlusIcon } from "lucide-react";
import { Card, CardContent, CardFooter } from "@/components/ui/card";

type Product = {
  name: string;
  href: string;
  image: string;
  price: string;
  tech: string;
};

export default function ProductCard({ product }: { product: Product }) {
  return (
    <Card className="lg:col-span-1 md:col-span-2 col-span-4 group relative p-0 overflow-hidden">
      <figure className="group-hover:opacity-90">
        <Button
          variant="ghost"
          size="icon"
          className="bg-white/70 absolute top-3 end-3 rounded-full dark:text-black"
        >
          <HeartIcon className="size-4" />
        </Button>
        <Image
          className="w-full"
          src={product.image}
          width={300}
          height={100}
          alt={product.name}
        />
      </figure>
      <CardContent className="px-4 py-0">
        <div className="flex flex-col gap-3 justify-between">
          <h3 className="text-lg truncate">
            <Link href={product.href}>
              <span aria-hidden="true" className="absolute inset-0" />
              {product.name}
            </Link>
          </h3>
          <p className="text-sm text-muted-foreground">{product.tech}</p>
          <p className="text-lg font-semibold">{product.price}</p>
        </div>
      </CardContent>
      <CardFooter className="p-0 border-t">
        <Button variant="ghost" className="w-full pb-8">
          <PlusIcon className="size-4 me-1" /> Add to Card
        </Button>
      </CardFooter>
    </Card>
  );
}
