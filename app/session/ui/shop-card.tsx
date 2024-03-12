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

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

export default function ShopCard() {
  return (
    <>
      <Card>
        <CardHeader>
          <CardTitle>နို့မုန့်</CardTitle>
          <CardDescription>အသက် (၂၀) အရွယ်များမပါ</CardDescription>
        </CardHeader>
        <CardContent>
          <Image
            src="https://www.walgreens.com/images/adaptive/sp2/3775825_030324_HP_Tile_1.jpg"
            width={500}
            height={500}
            alt="Picture of the author"
          />
        </CardContent>
        <CardFooter>
          <Dialog>
            <DialogTrigger className="w-full">
              <Button className="w-full">Buy $1,000</Button>
            </DialogTrigger>
            <DialogContent className="max-w-6xl">
              <DialogHeader>
                <DialogTitle>ထုတ်ကုန် အသေးစိတ်</DialogTitle>
              </DialogHeader>
              <DialogDescription>
                <div className="grid grid-cols-2 gap-5">
                  <div className="overflow-hidden rounded-xl border">
                    <Image
                      src="https://www.walgreens.com/images/adaptive/sp2/3775825_030324_HP_Tile_1.jpg"
                      width={500}
                      height={500}
                      alt="Picture of the author"
                      className=" w-full"
                    />
                  </div>
                  <div className="font-bold">
                    <div className="">
                      <h4 className="scroll-m-20 text-4xl font-semibold tracking-tight lg:text-6xl">
                        နို့မုန့်
                      </h4>
                      <p className="text-base leading-7 [&:not(:first-child)]:mt-6">
                        အသဲကွဲနေသူများအတွက် အသဲကွဲရင်ပျောက်တယ်ဆိုတဲ့ဆေးကို
                        အမြို့မြို့အနယ်အနယ်ရှိ ဆေးဆိုင်များတွင်
                        အားပေးလို့ရပါပြီး။
                      </p>
                    </div>
                    <div className=" mt-5">
                      <div className="">USD 1,000</div>
                      <Button className="w-full">Pay</Button>
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
