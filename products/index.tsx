import { useState } from "react";
import ProductCard from "./ProductCard";
import Link from "next/link";

interface Product {
  id: number;
  name: string;
  price: number;
}

export default function Home() {
  const [cart, setCart] = useState<Product[]>([]);

  const products: Product[] = [
    { id: 1, name: "Product A", price: 25 },
    { id: 2, name: "Product B", price: 40 },
    { id: 3, name: "Product C", price: 60 },
  ];

  const addToCart = (product: Product) => {
    setCart([...cart, product]);
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <header className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold">My Shop</h1>
        <Link href="/cart" className="px-4 py-2 bg-purple-500 text-white rounded">
          Cart ({cart.length})
        </Link>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} addToCart={addToCart} />
        ))}
      </div>
    </div>
  );
}
