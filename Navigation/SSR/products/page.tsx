import React from 'react';

async function ProductPages() {
    //this demonestrates the rela world example by fetching data from the fakestoreapi to implemets ssr in the nextjs
    
  const res = await fetch('https://fakestoreapi.com/products');
  const products = await res.json();

  return (
    <div className="max-w-6xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6">Products</h1>
      <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.map((product) => (
          <li
            key={product.id}
            className="border rounded-lg p-4 flex flex-col items-center shadow hover:shadow-lg transition"
          >
            <img
              src={product.image}
              alt={product.title}
              className="w-32 h-32 object-contain mb-4"
            />
            <div className="text-center">
              <h2 className="font-semibold">{product.title}</h2>
              <p className="text-lg font-bold mt-2">${product.price}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ProductPages;
