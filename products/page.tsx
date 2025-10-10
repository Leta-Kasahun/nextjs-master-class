"use client";

import { useState } from "react";
import Link from "next/link";

interface Product {
  id: number;
  name: string;
  price: number;
}

export default function ProductPage() {
  const [cart, setCart] = useState<Product[]>([]);

  const products: Product[] = [
    { id: 1, name: "Laptop", price: 1200 },
    { id: 2, name: "Headphones", price: 150 },
    { id: 3, name: "Smartphone", price: 800 },
    { id: 4, name: "Smartwatch", price: 250 },
  ];

  const addToCart = (product: Product) => {
    setCart([...cart, product]);
  };

  return (
    <div>
      <header className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold text-gray-800">Products</h1>
        <Link href="/cart" className="px-4 py-2 bg-purple-500 text-white rounded">
          Cart ({cart.length})
        </Link>
      </header>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {products.map((product) => (
          <div
            key={product.id}
            className="bg-white p-4 rounded-lg shadow hover:shadow-lg transition"
          >
            <h2 className="text-xl font-semibold">{product.name}</h2>
            <p className="text-gray-600">${product.price}</p>
            <button
              onClick={() => addToCart(product)}
              className="mt-4 px-4 py-2 bg-purple-500 text-white rounded hover:bg-purple-600"
            >
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
