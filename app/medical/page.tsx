import { medicals } from "@/seed/data";
import ShopCard from "../session/ui/shop-card";

export default function Page() {
  return (
    <>
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-center">
        <div className="mt-20">
          <h1 className="text-4xl font-bold">ဆေးဝါးများ</h1>
          <p className="text-xl">စုံလင်းသော ဆေးဝါးများ</p>

          <div className="">
            <div className="mt-5 grid gap-3 lg:grid-cols-4">
              {medicals.map((medical, index) => (
                <ShopCard key={index} medical={medical} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
