"use client"
import { useEffect,useState } from "react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";

interface Product{
  id:number;
  name:string;
  quantity:number;
  price:number;
  createAt:string;
}
export default function ProductPage(){
 const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
useEffect(()=>{
const fetchProducts=async ()=>{
  const res=await fetch("/products/api/product");
  const data:Product[]=await res.json()
  setProducts(data);
  setLoading(false);
};
fetchProducts()

},[]);

if (loading) return <p>Loading...</p>;
return (
  <div className="space-y-5">
    {products.map((product)=>(
      <Card key={product.id}>
        <CardHeader>
          <CardTitle>
            {product.name}
          </CardTitle>
        </CardHeader>
     <CardContent>
      Quantity: {product.quantity}<br/>
      Price: ${product.price}
     </CardContent>
      </Card>
    ))}

  </div>
)
}