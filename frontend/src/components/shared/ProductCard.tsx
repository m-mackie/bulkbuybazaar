'use client';

import Image from "next/image";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";



export type Product = {
  id: string;
  title: string;
  price: number;
  image: string;
  description?: string;
};

type Props = {
  product: Product;
  onAddToCart?: (id: string) => void;
};

export function ProductCard({ product, onAddToCart }: Props) {
  return (
    <Card className="w-full max-w-sm border shadow-sm">
      <div className="relative w-full h-64">
        <Image
          src={product.image}
          alt={product.title}
          fill
          className="object-cover rounded-t-md"
        />
      </div>
      <CardContent className="p-4">
        <h3 className="text-lg font-semibold mb-1">{product.title}</h3>
        <p className="text-gray-700 text-sm">${product.price.toFixed(2)}</p>
      </CardContent>
      <CardFooter className="p-4 pt-0">
        <Button onClick={() => onAddToCart?.(product.id)} className="w-full">
          Add to Cart
        </Button>
      </CardFooter>
    </Card>
  );
}
