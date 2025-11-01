// app/home/components/LiveCounter.tsx
export default async function LiveCounter() {
  const res = await fetch("https://dummyjson.com/counter", {
    cache: "no-store", // always fresh
  });
  const data = await res.json();

  return <p>Live counter: {data.value}</p>;
}
