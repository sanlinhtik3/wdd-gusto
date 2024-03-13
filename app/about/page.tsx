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
      <div>
        <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
          ကျွန်တော်တို့အကြောင်း
        </h1>
        <p className="leading-7 [&:not(:first-child)]:mt-6">
          အရွှေအိုးသည် ၂၀၁၈ ခုနှစ်မှ စတင်ခဲ့တာဖြစ်ပြီး နိုင်ငံပေါင်း (၁၀၀) မှာ
          ဆိုင်ခွဲပေါင်း ၆၀၀၀၀ ကိုဖွင့်လှစ်ထားပြီးဖြစ်ပါတယ်။ လက်ရှိမှာလည်း
          ဆက်လက်ချိတ်ဆိက်ဆောင်ရွက်နေဆဲဖြစ်ပါတယ်။
        </p>

        <p className="leading-7 [&:not(:first-child)]:mt-6">
          မြန်မာနိုင်ငံရှိ ပြည်သူများ မိမိနေအိမ်မှ အလွယ်တကူ လိုအပ်သော
          ဆေးပစ္စည်းများကို ဝယ်ယူစေနိုင်စေရန် ဖွင့်လှစ်ထားခြင်းဖြစ်ပါတယ်။
        </p>
      </div>
    </div>
  );
}
