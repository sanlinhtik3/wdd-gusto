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

type Branch = {
  id: string;
  branchName: string;
  image: string;
  description: string;
};

export default function BranchCard({ branch }: { branch: Branch }) {
  return (
    <>
      <Card>
        <CardHeader>
          <CardTitle>{branch.branchName}</CardTitle>
          <CardDescription>{branch.description}</CardDescription>
        </CardHeader>
        <CardContent>
          {/* <Image
            src={branch.image}
            width={500}
            height={500}
            alt="Picture of the author"
          /> */}
        </CardContent>
        <CardFooter>
          <Dialog>
            <DialogTrigger className="w-full">
              <Button className="w-full">အသေးစိတ်ကြည့်မည်</Button>
            </DialogTrigger>
            <DialogContent className="max-w-6xl !rounded-3xl">
              <DialogHeader>
                <DialogTitle></DialogTitle>
              </DialogHeader>
              <DialogDescription>
                <div className="grid grid-cols-2 gap-5">
                  <div className="overflow-hidden rounded-xl border">
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5288.85717890963!2d96.12891625035947!3d16.8065412041433!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30c1eb47993876fb%3A0x2b01c7e59b3b56b7!2zU2h3ZSBPaGggUGhhcm1hY3kg4YCb4YC94YC-4YCx4YCh4YCt4YCv4YC44oCM4YCG4YCx4YC44YCG4YCt4YCv4YCE4YC6IEt5dW4gVGF3IEJyYW5jaA!5e0!3m2!1sen!2sth!4v1710302897968!5m2!1sen!2sth"
                      width={500}
                      height={500}
                      allowFullScreen
                      loading="lazy"
                      className="w-full"
                      referrerPolicy="no-referrer-when-downgrade"
                    ></iframe>
                  </div>
                  <div>
                    <div className="rounded-2xl bg-gray-50 p-5">
                      <h4 className="scroll-m-20 text-4xl font-semibold tracking-tight text-gray-950 lg:text-6xl">
                        {branch.branchName}
                      </h4>
                      <p className="text-base leading-7 [&:not(:first-child)]:mt-6">
                        {branch.description}
                      </p>
                    </div>

                    <div className=" mt-5">
                      <Button className="w-full py-6">ဆက်သွယ်မည်</Button>
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
