import { NavbarDemo } from "../components/ui/navbar-demo";
import ShopCard from "../session/ui/shop-card";

export default function Page() {
  return (
    <div className="flex flex-col items-center justify-center mx-auto max-w-6xl">
      <NavbarDemo />
      <div className="mt-20">
        <h1 className="text-4xl font-bold">Shop</h1>
        <p className="text-xl">This is the shop page</p>

        <div className="">
          <div className="mt-5 grid gap-3 lg:grid-cols-4">
            {Array(20)
              .fill(null)
              .map((_, index) => (
                <ShopCard key={index} />
              ))}
          </div>
        </div>
      </div>
    </div>
  );
}
