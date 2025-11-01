import React from 'react'
import Image from 'next/image'
import { Card, CardHeader, CardContent } from '@/components/ui/card';
import Link from 'next/link';
async function page() {
    const res=await fetch("https://dummyjson.com/products",
       {cache: "no-store"}
    )

    const data=await res.json();
    const product=data.products;

  return (

    <div className='p-6 w-1/2 m-auto'>
       <h1 className='text-center text-blue-500 p-20'>Catched products for one minutes after one minites it fetches fresh products</h1> 
       {
        product.map((p:any)=>(
            <Link
            key={p.id}
            href={`/products/${p.id}`}>
                <Card>
            <CardHeader>
              <h1 className='text-center text-slate-600'>{p.title}</h1>
            </CardHeader>
            <CardContent>
              <Image
              src={p.thumbnail}
              alt={p.title}
              width={100}
              height={100}
              className='max-auto object-container'
              />
              <p>product price is : ${p.price}{}</p>
            </CardContent>
        </Card>
            </Link>
        ))
       }
    </div>
  )
}

export default page