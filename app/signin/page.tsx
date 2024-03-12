import * as React from "react";

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

export default function Page() {
  return (
    <div className="mx-auto mt-40 grid max-w-screen-xl grid-cols-2 gap-10 rounded-3xl border p-5">
      <div className="flex items-center justify-center rounded-2xl bg-black">
        <div className=" p-5">
          <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight text-white lg:text-5xl">
            ရွှေအိုးထဲကို ဝင်မည်
          </h1>
          <p className="leading-7 text-gray-400 [&:not(:first-child)]:mt-6">
            ရွှေအိုးမှာ ဈေးဝယ်ဖို့ရန် သင့်ရဲ့ အချက်အလက်များ
            ဖြည့်သွင်းပေးဖို့လိုအပ်ပါတယ်။ သင့်ရဲ့ အချက်အလက်များ ပေါက်ကြားဖို့
            အချက်အလက်များကို Open ထားပြီး အထူးဂရုပြု ထိန်းထားမှာဖြစ်ပါတယ်။
          </p>
        </div>
      </div>
      <Card className=" border-0 py-40">
        <CardHeader>
          <CardTitle>အကောင့်ဝင်မည်</CardTitle>
          <CardDescription>ခလုပ်တစ်ချက်ဖြင့် အကောင့်ဝင်မည်</CardDescription>
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
            </div>
          </form>
        </CardContent>
        <CardFooter className="flex justify-between">
          <Button variant="outline" className="border-0">
            စကားဝှက်မေ့သွားသည်
          </Button>
          <Button>အထဲသို့ဝင်မည်</Button>
        </CardFooter>
        <div className=" space-y-2 border-t pt-5">
          <Button variant="outline" className="w-full">
            Google
          </Button>
          <Button variant="outline" className="w-full">
            GitHub
          </Button>
        </div>
      </Card>
    </div>
  );
}
