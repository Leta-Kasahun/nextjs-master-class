import Link from "next/link";
import Image from "next/image";
import { Card, CardContent, CardHeader } from "@/components/ui/card";

export default async function ProductPage() {
  const response = await fetch("https://fakestoreapi.com/products");
  const products = await response.json();

  return (
    <div>
      <h3 className="text-lg mb-4 font-semibold">All Products</h3>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {products.map((p: any) => (
          <Link key={p.id} href={`/products/${p.id}`}>
            <Card>
              <CardHeader>
                <h4 className="text-sm mt-2">{p.title}</h4>
              </CardHeader>
              <CardContent>
                <Image
                  src={p.image}
                  alt={p.title}
                  width={150}
                  height={150}
                  className="object-contain mx-auto"
                />
                <p className="text-green-600 font-semibold">${p.price}</p>
              </CardContent>
            </Card>
          </Link>
        ))}
      </div>
    </div>
  );
}
