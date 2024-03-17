"use client";

import { Button } from "@/components/ui/button";
import Image from "next/image";
import { ShopCarousel } from "./ShopCarousel";
import { useRouter } from "next/navigation";

const trustOrgs = [
  {
    id: "237hdwde",
    title: "",
    href: "https://www.who.int",
    description: "",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c2/WHO_logo.svg/1991px-WHO_logo.svg.png",
  },
  {
    id: "4237fwde",
    title: "",
    href: "https://unicef.or.th/en/donate",
    description: "",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/f/fb/UNICEF_Logo_%28cropped%29.png",
  },
  {
    id: "237h323de",
    title: "",
    href: "https://www.redcross.org.mm/my_MM",
    description: "",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/0/05/Myanmar_Red_Cross_Society_logo.png",
  },
  {
    id: "ehwefeffe",
    title: "",
    href: "https://www.who.int",
    description: "",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c2/WHO_logo.svg/1991px-WHO_logo.svg.png",
  },
];

export default function Hero() {
  const route = useRouter();
  return (
    <>
      <div className="py-10">
        <div className="grid grid-cols-1">
          <div className="py-16 text-center">
            <Image
              src="https://company.nutrione.co.kr/res/images/global_store_shwe.png"
              width={200}
              height={200}
              className="mx-auto"
              alt="Shwe Ohh"
            />
            <h1 className="mx-auto scroll-m-20 text-4xl font-extrabold leading-10 tracking-tight lg:max-w-3xl lg:text-5xl">
              အသဲကွဲရင် ပျောက်တယ်ဆိုတဲ့ဆေး Free delivery ဖြင့် Order
              မှာယူနိုင်ပါပြီ။
            </h1>
            <p className="mx-auto max-w-2xl text-xl leading-7 text-gray-500 [&:not(:first-child)]:mt-6">
              အချိန်ကုန် လွယ်ကူစွာဖြင့် ဆေးဝါးများကို တစ်နေရာတည်းမှာ
              ဝယ်နိုင်ပါပြီ
            </p>
            <div className="mt-10 flex justify-center gap-2">
              <Button className=" px-10 py-6">အခုဝယ်မည်</Button>
              <Button className=" px-10 py-6" variant="outline">
                ဆေးဝါးရှာမည်
              </Button>
            </div>
          </div>

          <div className="mt-20">
            <h2 className="text-center text-3xl font-bold">
              ကျွုပ်တို့ကို ယုံကြည်သော အဖွဲ့အစည်းများ ↘︎
            </h2>

            <div className="mt-10 grid lg:grid-cols-2 ">
              <ShopCarousel />

              <div className="mt-10 grid grid-cols-2 items-center justify-center gap-5 lg:mt-0 lg:grid-cols-2">
                {trustOrgs.map((trustorg: any) => (
                  <Image
                    key={trustorg.id}
                    src={trustorg.image}
                    width={100}
                    height={100}
                    className="mx-auto"
                    alt="Picture of the author"
                    onClick={() => route.push(trustorg.href)}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
