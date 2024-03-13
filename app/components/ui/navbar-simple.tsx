import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";

export default function NavbarSimple() {
  return (
    <div className="sticky top-0 mx-auto max-w-screen-xl bg-white bg-opacity-55 px-5 backdrop-blur-xl">
      <div className="mx-auto flex max-w-screen-2xl items-center justify-between border-b py-5 ">
        <div className="flex items-center gap-20">
          <div>
            <Image
              src="https://company.nutrione.co.kr/res/images/global_store_shwe.png"
              width={50}
              height={60}
              alt="Shwe Ohh"
            />
          </div>
          <div className="hidden lg:block">
            <ul className="flex items-center gap-5 text-gray-500">
              <li>
                <Link href="/">မူလနေရာ</Link>
              </li>
              <li>
                <Link href="/branch">ဆေးဆိုင်များ</Link>
              </li>
              <li>
                <Link href="/medical">ဆေးဝါးများ</Link>
              </li>
              <li>
                <Link href="/contact">ဆက်သွယ်မယ်</Link>
              </li>
              <li>
                <Link href="/about">ကျွန်တော်တို့အကြောင်း</Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="flex items-center gap-5">
          <Button asChild>
            <Link href="signin">အကောင့်ဝင်မည်</Link>
          </Button>
          <Button className="hidden lg:flex" variant="outline">
            <Link href="signup">အကောင့်ဖန်တီးမည်</Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
