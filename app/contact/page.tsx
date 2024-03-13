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
            သုံးစွဲသူများအားလုံးကို လွယ်ကူအဆင်ပြေစေဖို့
            ကျွန်တော်တို့အသင့်ရှိပါတယ်
          </p>
        </div>
      </div>
      <Card className="border-0 py-10 shadow-none lg:py-32">
        <CardHeader>
          <CardTitle>စာများပေးပို့မည်</CardTitle>
          <CardDescription>Company ကိုတိုက်ရိုက်စာပေးပို့မည်</CardDescription>
        </CardHeader>
        <CardContent>
          <form>
            <div className="grid w-full items-center gap-4">
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="name">အမည်</Label>
                <Input id="name" placeholder="သင့်ရဲ့အမည်ထည့်ပါ" />
              </div>
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="name">အီးမေး</Label>
                <Input id="name" placeholder="အီးမေး" />
              </div>
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="name">စာသား</Label>
                <Input id="name" placeholder="စာသားများထည့်ပါ" />
              </div>
            </div>
          </form>
        </CardContent>
        <CardFooter className="flex justify-between">
          <Button variant="outline" className="hidden border-0"></Button>
          <Button className="w-full">ပေးပို့မည်</Button>
        </CardFooter>
      </Card>
    </div>
  );
}
