import * as React from "react";

import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";

const images = [
  {
    id: "329r8jfwe",
    image:
      "https://blogs.icrc.org/law-and-policy/wp-content/uploads/sites/102/2018/01/SARC-picture-1180x620.jpg",
  },
  {
    id: "32093rff",
    image:
      "https://img.resized.co/newstalk/eyJkYXRhIjoie1widXJsXCI6XCJodHRwczpcXFwvXFxcL21lZGlhLnJhZGlvY21zLm5ldFxcXC91cGxvYWRzXFxcLzIwMTlcXFwvMDZcXFwvMDYxMDM4MzhcXFwvSUNSQy5qcGdcIixcIndpZHRoXCI6OTcwLFwiaGVpZ2h0XCI6NDg1LFwiZGVmYXVsdFwiOlwiaHR0cHM6XFxcL1xcXC93d3cubmV3c3RhbGsuY29tXFxcL2ltYWdlc1xcXC9kZWZhdWx0X25vX2ltYWdlLnBuZz92PTNcIixcIm9wdGlvbnNcIjpbXX0iLCJoYXNoIjoiYmQ1MzBmZTZkMGUyNmU0ZDM2Y2MyZWU3ZjVmMjhjOTYxMDllMTM4MCJ9/ireland-to-co-chair-international-committee-of-the-red-cross-group.jpg",
  },
];

export function ShopCarousel() {
  return (
    <Carousel className="w-full">
      <CarouselContent>
        {images.map((image, index) => (
          <CarouselItem key={image.id}>
            <div>
              <Card>
                <CardContent className="flex items-center justify-center overflow-hidden rounded-2xl p-0">
                  <Image
                    src={image.image}
                    width={500}
                    height={500}
                    className="w-full object-cover"
                    alt="Picture of the author"
                  />
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
}
