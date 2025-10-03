import Link from "next/link";
import "./globals.css";

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>
        <header className="min-h-20 bg-gray-600 text-white flex items-center justify-between px-4">
          <Link href="/"><span>Home</span></Link>
          <Link href="/register"><span>Register</span></Link>
          <Link href="/dashboard"><span>Dashboard</span></Link>
        </header>

        <main className="min-h-100 bg-gray-300">
          {children}
        </main>

        <footer className="min-h-30 bg-gray-600 text-2xl text-white text-center flex items-center justify-center">
          &copy; {new Date().getFullYear()} All rights reserved
        </footer>
      </body>
    </html>
  );
}
