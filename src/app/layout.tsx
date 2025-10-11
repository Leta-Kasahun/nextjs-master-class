import type { Metadata } from "next";

import "./globals.css";
import Nav from "./_components/Nav";


export const metadata: Metadata = {
  title: "contact manager",
  description: "simple contact manager application",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <div className="bg-gray-100 min-h-screen">
          <Nav/>
          <main className="px-4 py-8 mx-auto">
            {children}
          </main>
        </div>
      </body>
    </html>
  );
}
