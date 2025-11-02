import React from 'react';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <h1 className="text-center font-extralight m-10">Dashboard Navbar</h1>
      {children}
    </div>
  );
}
