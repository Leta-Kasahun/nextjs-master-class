import {prisma} from '@/lib/prisma'
import { NextResponse } from 'next/server';
import { cacheLife, cacheTag, updateTag } from "next/cache";
import { getProducts } from '@/lib/helper';
import nextAppLoader from 'next/dist/build/webpack/loaders/next-app-loader';
export async function GET(){
  try {
    const products=getProducts();
    return NextResponse.json(products,{status:200});

    
  } catch (error) {
    console.log("get product error");
    return NextResponse.json({error:"failed to fetch"},{status:500});
    
  }
}
export async function POST( req:Request){
    try {
      const {name,quantity,price}=await req.json();
      if(!name||quantity==null ||price==null)return NextResponse.json({error:"All fields are requred"});
      const product=create({data:{name,quantity,price}});
    
      return NextResponse.json(product,{status:201});
        
    } catch (error) {
        console.log("Error: ",error);
        
    }
}

export async function PUT(req:Request){
    const {id,name,quantity,price}=await req.json();
    if(!name||quantity==null||price==null)return NextResponse.json({error:"all are requred"});
    const product=await prisma.product.update({
        where:{id},
        data:{name,quantity,price}
    })
    updateTag("products");
    return NextResponse.json(product)

}

export async function DELETE(req:Request){
    const {id}=await req.json();
    if(!id)return NextResponse.json({error:"Id is requred"});
    await prisma.product.delete({where:{id}});
    updateTag("products");
    return NextResponse.json({message:"product is deleted"});
}