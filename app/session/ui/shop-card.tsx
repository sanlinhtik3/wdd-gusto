import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";

import { Badge } from "@/components/ui/badge";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import Quantity from "./quantity";
import { medical } from "@/type";

export default function ShopCard({ medical }: { medical: medical }) {
  return (
    <>
      <Card>
        <CardHeader>
          <CardTitle>{medical.title}</CardTitle>
          <CardDescription>{medical.description}</CardDescription>
        </CardHeader>
        <CardContent>
          <Image
            src={medical.image}
            width={500}
            height={500}
            alt="Picture of the author"
          />
        </CardContent>
        <CardFooter>
          <Dialog>
            <DialogTrigger className="w-full">
              <Button className="w-full">ဝယ်မည် {medical.price} ကျပ်</Button>
            </DialogTrigger>
            <DialogContent className="max-w-6xl !rounded-3xl">
              <DialogHeader>
                <DialogTitle></DialogTitle>
              </DialogHeader>
              <DialogDescription>
                <div className="grid grid-cols-2 gap-5">
                  <div className="overflow-hidden rounded-xl border">
                    <Image
                      src={medical.image}
                      width={500}
                      height={500}
                      alt="Picture of the author"
                      className="w-full"
                    />
                  </div>
                  <div>
                    <div className="rounded-2xl bg-gray-50 p-5">
                      <h4 className="scroll-m-20 text-4xl font-semibold tracking-tight text-gray-950 lg:text-6xl">
                        နို့မုန့်
                      </h4>
                      <p className="text-base leading-7 [&:not(:first-child)]:mt-6">
                        အသဲကွဲနေသူများအတွက် အသဲကွဲရင်ပျောက်တယ်ဆိုတဲ့ဆေးကို
                        အမြို့မြို့အနယ်အနယ်ရှိ ဆေးဆိုင်များတွင်
                        အားပေးလို့ရပါပြီး။
                      </p>
                      <div className="mb-5 mt-10 text-3xl font-bold">
                        (၅,၀၀၀) ကျပ်
                      </div>

                      <div className="rounded-2xl bg-gray-200 p-5">
                        <h4 className="mb-3 text-xl font-semibold tracking-tight">
                          ငွေပေးချေနိုင်သော အမျိုးအစားများ
                        </h4>

                        <div className="flex gap-3">
                          <Badge>KBZ Pay</Badge>
                          <Badge>Wave Pay</Badge>
                          <Badge>UAB Pay</Badge>
                        </div>
                      </div>

                      <div className="mt-5 rounded-2xl bg-gray-200 p-5">
                        <Quantity />
                      </div>
                    </div>

                    <div className=" mt-5">
                      <Button className="w-full py-6">ငွေပေးချေမည်</Button>
                    </div>
                  </div>
                </div>
              </DialogDescription>
            </DialogContent>
          </Dialog>
        </CardFooter>
      </Card>
    </>
  );
}
