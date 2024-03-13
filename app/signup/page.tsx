import * as React from "react";
import Image from "next/image";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Link from "next/link";

export default function Page() {
  return (
    <div className="mx-5 mt-20 grid max-w-screen-xl gap-10 rounded-3xl border p-5 lg:mx-auto lg:grid-cols-2">
      <div className="flex hidden items-center justify-center rounded-2xl bg-green-50 lg:block">
        <div className="p-20">
          <Image
            src="https://company.nutrione.co.kr/res/images/global_store_shwe.png"
            width={200}
            height={100}
            alt="Shwe Ohh"
          />
          <p className="leading-7 text-gray-400 [&:not(:first-child)]:mt-6">
            ရွှေအိုးမှာ ဈေးဝယ်ဖို့ရန် သင့်ရဲ့ အချက်အလက်များ
            ဖြည့်သွင်းပေးဖို့လိုအပ်ပါတယ်။ သင့်ရဲ့ အချက်အလက်များ ပေါက်ကြားဖို့
            အချက်အလက်များကို Open ထားပြီး အထူးဂရုပြု ထိန်းထားမှာဖြစ်ပါတယ်။
          </p>
        </div>
      </div>
      <Card className="border-0 py-10 shadow-none lg:py-32">
        <CardHeader>
          <CardTitle>အကောင့်ဖွင့်မည်</CardTitle>
          <CardDescription>ခလုပ်တစ်ချက်ဖြင့် အကောင့်ဖွင့်မည်</CardDescription>
        </CardHeader>
        <CardContent>
          <form>
            <div className="grid w-full items-center gap-4">
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="name">အမည်</Label>
                <Input id="name" placeholder="သင့်ရဲ့အမည်ထည့်ပါ" />
              </div>
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="name">လျှို့ဝှက်စကားလုံး</Label>
                <Input id="name" placeholder="လျှို့ဝှက်စကားလုံးထည့်ပါ" />
              </div>
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="name">အတည်ပြု လျှို့ဝှက်စကားလုံး</Label>
                <Input
                  id="name"
                  placeholder="အတည်ပြု  လျှို့ဝှက်စကားလုံးထည့်ပါ"
                />
              </div>
            </div>
          </form>
        </CardContent>
        <CardFooter className="flex justify-between">
          <Button variant="outline" className="hidden border-0"></Button>
          <Button className="w-full">အကောင့်ဖွင့်မည်</Button>
        </CardFooter>
        <div className="mx-5 border-t" />
        <div className=" py-5 text-center">
          <Link href="/signin">အကောင့်ဝင်မည်</Link>
        </div>
        <div className="mx-5 border-t" />
        <div className=" space-y-2 px-5 pt-5">
          <Button variant="outline" className="w-full py-6">
            <Image
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Google_%22G%22_logo.svg/768px-Google_%22G%22_logo.svg.png"
              width={20}
              height={20}
              className="mr-1"
              alt="Shwe Ohh"
            />
            Google
          </Button>
          <Button variant="outline" className="w-full py-6">
            <Image
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Facebook_Logo_%282019%29.png/480px-Facebook_Logo_%282019%29.png"
              width={20}
              height={20}
              className="mr-1"
              alt="Shwe Ohh"
            />
            Facebook
          </Button>
        </div>
      </Card>
    </div>
  );
}
