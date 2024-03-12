import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function NavbarSimple() {
  return (
    <div className=" sticky top-0 bg-white bg-opacity-55 backdrop-blur-xl ">
      <div className="mx-auto flex max-w-screen-2xl items-center justify-between border-b py-5 ">
        <div className="flex items-center gap-20">
          <div>ရွေအိုး</div>
          <div>
            <ul className="flex items-center gap-10">
              <li>အိမ််</li>
              <li>ဆေးဆိုင်</li>
              <li>ဆက်သွယ်မယ်</li>
              <li>ကျွန်ုပ်တို့အကြောင်း</li>
            </ul>
          </div>
        </div>
        <div className="flex items-center gap-5">
          <Button asChild>
            <Link href="signin">Signin</Link>
          </Button>
          <Button variant="outline">
            <Link href="signin">Signup</Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
