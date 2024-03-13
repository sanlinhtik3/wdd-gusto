import Shop from "./session/ui/shop";
import Hero from "./session/ui/hero";
import ShopToMore from "./session/ui/shop-to-more";
import ShopWay from "./session/ui/shop-way";
import Footer from "./session/ui/footer";

export default function Home() {
  return (
    <div className="mx-auto max-w-6xl">
      <div className="px-5">
        <Hero />
        <ShopWay />
        <ShopToMore />
        <Shop />
        <Footer />
      </div>
    </div>
  );
}
