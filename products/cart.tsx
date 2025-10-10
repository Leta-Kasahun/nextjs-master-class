import Link from "next/link";

interface Product {
  id: number;
  name: string;
  price: number;
}

interface CartProps {
  cart?: Product[];
}

export default function Cart({ cart = [] }: CartProps) {
  const total = cart.reduce((sum, item) => sum + item.price, 0);

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <header className="mb-6">
        <Link href="/" className="px-4 py-2 bg-purple-500 text-white rounded">
          Back to Shop
        </Link>
      </header>

      <h1 className="text-2xl font-bold mb-4">Your Cart</h1>
      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div>
          {cart.map((item, index) => (
            <div key={index} className="p-4 bg-white rounded shadow mb-2">
              {item.name} - ${item.price}
            </div>
          ))}
          <h2 className="mt-4 text-xl font-bold">Total: ${total}</h2>
        </div>
      )}
    </div>
  );
}
