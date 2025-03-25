'use client';


import { ProductCard } from "@/components/shared/ProductCard";

const mockProduct = {
  id: "1",
  title: "Bulk Toilet Paper",
  price: 19.99,
  image: "https://placehold.co/400x300.png?text=Toilet+Paper",

};

export default function ShopPage() {
  return (
    <main className="p-8">
      <h1 className="text-3xl font-bold mb-6">Shop</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
      <ProductCard product={mockProduct} onAddToCart={(id) => console.log(id)} />
      <ProductCard product={mockProduct} onAddToCart={(id) => console.log(id)} />
      <ProductCard product={mockProduct} onAddToCart={(id) => console.log(id)} />
       

          
      </div>
    </main>
  );
}
