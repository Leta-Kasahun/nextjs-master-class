interface Product {
  id: number;
  name: string;
  price: number;
}

interface ProductCardProps {
  product: Product;
  addToCart: (product: Product) => void;
}

export default function ProductCard({ product, addToCart }: ProductCardProps) {
  return (
    <div className="bg-white p-4 rounded shadow">
      <h2 className="text-xl font-bold">{product.name}</h2>
      <p className="text-gray-700">${product.price}</p>
      <button
        onClick={() => addToCart(product)}
        className="mt-4 px-4 py-2 bg-purple-500 text-white rounded hover:bg-purple-600"
      >
        Add to Cart
      </button>
    </div>
  );
}
