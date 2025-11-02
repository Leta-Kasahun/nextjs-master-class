"use client"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { toast } from "sonner"
export default function AddProductPage(){
    const [name,setName]=useState("");
    const [quantity,setQuantity]=useState<number|"">("")
    const [price,setPrice]=useState<number|"">("");
    const [loading,setLoading]=useState<boolean>(false);

 const handleSubmit=async (e:React.FormEvent) => {
    e.preventDefault();
    if(!name||quantity==null||price==null){
        toast.error("All field are requered");
        return ;
    }

    setLoading(true);
    try {
        const res=await  fetch("api/product",{
            method:"POST",
            headers:{"Content-Type":"application/json"},
            body:JSON.stringify({name,quantity,price})
        })

        if(!res.ok) throw new Error("Faild to create product");
        const product=await res.json()
        toast.success("product is added ");
        setName("");
        setQuantity(0);
        setPrice(0);
        
    } catch (error) {
        toast.error((error as Error).message);
        
    }
    finally{
        setLoading(false)
    }
    
 }



 return (
    <>
    <form onSubmit={handleSubmit} className="space-y-6 max-w-md mx-auto p-4">
    <div>
         <Label htmlFor="name">Product Name</Label>
      <Input
      id="name"
      value={name}
      onChange={(e)=>setName(e.target.value)}
      
      />
    </div>
  <div>
     <Label htmlFor="quantity">Product Quntity</Label>
      <Input
  type="number"
  value={quantity}
  onChange={(e) => setQuantity(e.target.value === "" ? "" : Number(e.target.value))}
/>
  </div>

 <div>
     <Label htmlFor="price">Product Price</Label>
      <Input
  type="number"
  value={price}
  onChange={(e) => setPrice(e.target.value === "" ? "" : Number(e.target.value))}
/>
  </div>
  <Button type="submit"disabled={loading}className="w-full">{loading?"Adding...":"Add Product"}</Button>
    </form>
    
    
    </>
 )
}