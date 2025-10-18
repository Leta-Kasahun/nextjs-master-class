import React from "react";
import Link from "next/link";
type Product={
    id:number,
    title:string,
    price:number,
    image:string,
}

async function fetchProducts():Promise<Product[]> {
    const res=await fetch('https://fakestoreapi.com/products');
    const products:Product[]=await res.json();
    return products;
    
}

async function ProductChunk({products}:{products:Product[]}) {
    return (
        <>
      {
        products.map((product)=>(
            <li key={product.id}
             className="border rounded-lg p-4 flex flex-col items-center shadow hover:shadow-lg transition">
    <img
            src={product.image}
            alt={product.title}
            className="w-32 h-32 object-contain mb-4"
          />
          <h2 className="font-semibold font-sans">{product.title}</h2>
          <p className="text-base sm:text-lg md:text-2xl">${product.price}</p>
          <Link
            href={`/streaming/products/${product.id}`}
            className="mt-2 text-blue-500 hover:underline"
          >
            View Details
          </Link> 

            </li>
        ))
      }
        </>
    )
    
}



export default async function ProductPage() {
  const products = await fetchProducts();

  const firstChunk = products.slice(0,5);
  const secondChunk = products.slice(5,10);
  const thirdChunk = products.slice(10);

  return (
    <div className="max-w-6xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6">Products</h1>
      <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
       <ProductChunk products={firstChunk}/>
       <ProductChunk products={secondChunk}/>
       <ProductChunk products={thirdChunk}/>
      </ul>
    </div>
  );
}
