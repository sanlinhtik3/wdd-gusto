"use client";

import React, { useState } from "react";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

function OnBoard() {
  return (
    <div className="rounded-2xl bg-gray-100 p-10">
      <div className="grid grid-cols-2 gap-10">
        <div className="h-full">
          <h2 className="mt-10 scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight transition-colors first:mt-0">
            Make your selef at home.
          </h2>
          <p className="leading-7 text-gray-600 [&:not(:first-child)]:mt-6">
            Once upon a time, in a far-off land, there was a very lazy king who
            spent all day lounging on his throne. One day, his advisors came to
            him with a problem: the kingdom was running out of money.
          </p>
        </div>
        <div className="rounded-2xl bg-white p-10">
          <div className="space-y-5">
            <div className="h-5 rounded-full bg-gray-300"></div>
            <div className="space-y-3">
              <div className="h-3 w-2/3 rounded-full bg-gray-300"></div>
              <div className="h-3 w-2/5 rounded-full bg-gray-300"></div>
              <div className="h-3 w-2/3 rounded-full bg-gray-300"></div>
            </div>
            <div className="flex gap-4">
              <div className="h-10 w-28 rounded-xl bg-gray-300"></div>
              <div className="h-10 w-28 rounded-xl bg-gray-300"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function OnBoard1() {
  return (
    <>
      <h1>Hello Page1</h1>
    </>
  );
}

function OnBoard2() {
  return (
    <>
      <h1>Hello Page2</h1>
    </>
  );
}

export default function Page() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const onNextClick = () => {
    setCurrentSlide(currentSlide + 1);
  };

  const onPrevClick = () => {
    setCurrentSlide(currentSlide - 1);
  };

  return (
    <div className="mx-auto mt-20 max-w-5xl">
      <div>
        {currentSlide === 0 && <OnBoard />}
        {currentSlide === 1 && <OnBoard1 />}
        {currentSlide === 2 && <OnBoard2 />}
      </div>
      <div className="mt-5">
        {currentSlide > 0 && <Button onClick={onPrevClick}>Previous</Button>}
        {currentSlide < 2 && <Button onClick={onNextClick}>Next</Button>}
      </div>
    </div>
  );
}
