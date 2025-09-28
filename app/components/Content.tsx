'use client';
import { useState } from 'react';

export default function Content() {
  const [clicked, setClicked] = useState(false);

  const handleClick = () => setClicked(!clicked);

  return (
    <div className="p-6 text-center max-w-xl">
      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">Section 1</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">Section 2</h2>
        <p>
          Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">Section 3</h2>
        <p>
          Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
        </p>
      </section>

      <button
        className="mt-4 px-4 py-2 bg-green-500 text-white rounded"
        onClick={handleClick}
      >
        {clicked ? "You clicked me!" : "Click Me"}
      </button>
    </div>
  );
}
