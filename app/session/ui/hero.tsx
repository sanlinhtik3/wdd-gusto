"use client";

import { Button } from "@/components/ui/button";
import Image from "next/image";

const trustOrgs = [
  {
    id: "237hdwde",
    title: "",
    description: "",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c2/WHO_logo.svg/1991px-WHO_logo.svg.png",
  },
  {
    id: "4237fwde",
    title: "",
    description: "",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/f/fb/UNICEF_Logo_%28cropped%29.png",
  },
  {
    id: "237h323de",
    title: "",
    description: "",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/0/05/Myanmar_Red_Cross_Society_logo.png",
  },
  {
    id: "ehwefeffe",
    title: "",
    description: "",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c2/WHO_logo.svg/1991px-WHO_logo.svg.png",
  },
];

export default function Hero() {
  return (
    <>
      <div className="py-48">
        <div className="grid grid-cols-1">
          <div className=" py-16 text-center">
            <h1 className="mx-auto max-w-3xl scroll-m-20 text-4xl font-extrabold leading-10 tracking-tight lg:text-5xl">
              အသဲကွဲရင် ပျောက်တယ်ဆိုတဲ့ဆေး Free delivery ဖြင့် Order
              မှာယူနိုင်ပါပြီ။
            </h1>
            <p className="mx-auto max-w-2xl text-xl leading-7 [&:not(:first-child)]:mt-6">
              ဘာပဲ ဝယ်ဝယ် အကုန်ရ
            </p>
            <div className="mt-10 flex justify-center gap-2">
              <Button>အခုဝယ်မည်</Button>
              <Button variant="outline">ဆေးဝါးရှာမည်</Button>
            </div>
          </div>

          <div className="mt-20">
            <h2 className="text-center text-3xl font-bold">
              ကျွုပ်တို့ကို ယုံကြည်သော အဖွဲ့အစည်းများ ↘︎
            </h2>

            <div className="mt-10 grid justify-center gap-5 lg:grid-cols-4">
              {trustOrgs.map((trustorg: any) => (
                <Image
                  key={trustorg.id}
                  src={trustorg.image}
                  width={100}
                  height={100}
                  className="mx-auto"
                  alt="Picture of the author"
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
