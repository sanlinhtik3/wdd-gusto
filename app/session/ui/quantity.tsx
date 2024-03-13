"use client";

import * as React from "react";
import { Button } from "@/components/ui/button";

export default function Quantity() {
  const [quantity, setQuantity] = React.useState(0);

  const price = 5000;

  function dec() {
    if (quantity > 0) {
      setQuantity((prev) => prev - 1);
    }
  }

  function inc() {
    setQuantity((prev) => prev + 1);
  }

  return (
    <div>
      <h2 className="mt-10 scroll-m-20 pb-2 text-3xl font-semibold tracking-tight transition-colors first:mt-0">
        စုစုပေါင်းကျသင့်ငွေ {quantity * price} ကျပ်
      </h2>
      <p className="scroll-m-20 pb-2 text-base font-semibold tracking-tight transition-colors first:mt-0">
        အရေအတွက် ({quantity})
      </p>
      <div className="flex items-center gap-2">
        <Button onClick={dec}>-</Button>
        <Button onClick={inc}>+</Button>
      </div>
    </div>
  );
}
