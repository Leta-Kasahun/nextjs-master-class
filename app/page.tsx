import Header from "./components/Header";
import Content from "./components/Content";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <div className="flex flex-col items-center gap-4 min-h-screen">
      <Header />
      <Content />
      <Footer />
    </div>
  );
}
