// app/layout.tsx
import "./globals.css";
import Link from "next/link";

export const metadata = {
  title: "FakeStore App",
  description: "Built with Next.js 16 (Server + Client Rendering)",
};

// 🧩 Root layout wraps every route
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-gray-100 text-gray-900">
        <header className="bg-black text-white p-4 flex justify-between">
          <h1 className="font-bold text-lg">🛍️ FakeStore</h1>
          <nav className="space-x-4">
            <Link href="/">Home</Link>
            <Link href="/products">Products</Link>
            <Link href="/about">About</Link>
          </nav>
        </header>

        <main className="p-6">{children}</main>

        <footer className="bg-gray-900 text-white text-center p-3 mt-6">
          © 2025 FakeStore | Built with Next.js 16
        </footer>
      </body>
    </html>
  );
}
