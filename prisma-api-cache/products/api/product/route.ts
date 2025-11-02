import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { name, quantity, price } = body;

    if (!name || quantity == null || price == null) {
      return NextResponse.json({ error: "missing required fields" }, { status: 400 });
    }

    const product = await prisma.product.create({
      data: { name, quantity, price },
    });

    return NextResponse.json(product, { status: 201 });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: "Server Error" }, { status: 500 });
  }
}

// GET all products
export async function GET() {
  const products = await prisma.product.findMany();
  return NextResponse.json(products);
}
