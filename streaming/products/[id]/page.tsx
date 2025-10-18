type Product={
    id:number;
    title:string;
    price:number;
    description:string;
    image:string;
}

interface Props{
    params:{id:string}
}

export default async function ProductDetails({params}:Props) {
    const res=await fetch(`https://fakestoreapi.com/products/${params.id}`);
    const product:Product=await res.json();

      return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-4">{product.title}</h1>
      <img
        src={product.image}
        alt={product.title}
        className="w-64 h-64 object-contain mb-4"
      />
      <p className="text-lg font-semibold mb-2">${product.price}</p>
      <p>{product.description}</p>
    </div>
  );
}