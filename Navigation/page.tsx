'use client';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

export default function NavigationHome() {
  const router = useRouter();

  return (
    <div className="max-w-4xl mx-auto p-6 text-center">
      <h1 className="text-4xl font-bold mb-6">Welcome to Our Store</h1>
      <p className="mb-6 text-lg">Explore our latest products instantly.</p>

      {/* Prefetching via Link */}
      <Link
        href="/Navigation/SSR/products"
        className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition mr-4"
      >
        View Products
      </Link>

      {/* Client-side navigation via button */}
      <button
        onClick={() => router.push('/Navigation/SRR/products')}
        className="bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition"
      >
        Go to Products
      </button>
    </div>
  );
}
