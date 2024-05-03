import Image from "next/image";
import Navbar from "./components/Navbar/Navbar";
import Product from "./components/Products/Product";

export default function Home() {
  return (
    <div>
      <Navbar />
      <Product />
    </div>
  );
}
