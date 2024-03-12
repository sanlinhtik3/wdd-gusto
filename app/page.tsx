import Image from "next/image";
import Shop from "./session/ui/shop";
import { NavbarDemo } from "./components/ui/navbar-demo";
import Hero from "./session/ui/hero";
import ShopToMore from "./session/ui/shop-to-more";
import ShopWay from "./session/ui/shop-way";
import Footer from "./session/ui/footer";

export default function Home() {
  return (
    <div className="mx-auto max-w-6xl">
      <NavbarDemo />
      <Hero />
      <ShopWay />
      <ShopToMore />
      <Shop />
      <Footer />
    </div>
  );
}
