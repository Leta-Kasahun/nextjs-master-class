'use client'
import Link from "next/link"
import { useRouter } from "next/navigation"

export default function Home(){
    const router=useRouter();
    return(
        <div className="bg-gray-200 max-w-4xl mx-auto p-6 text-center">
        <h1 className="text-4xl font-bold mb-6">Welcome to Streaming Store</h1>
         <p className="mb-6 text-lg">Explore my products with instant streaming!</p>
     <Link
        href="/streaming/products"
        className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition mr-4"
      >View Products</Link>


{/* using dynamick prorammig to navigate */}
<button onClick={()=>router.push('streaming/products')}
    className="bg-green-500 text-white px-6 py-3  rounded shadow-lg hover:bg-green-700 transition">
  Go to Products
</button>
        </div>
    )
}