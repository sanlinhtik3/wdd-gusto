import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

type Data = any;

const data: Data[] = [
  {
    id: "7r32r3f",
    title: "ဆိုင်မှ ဝယ်ယူခြင်း",
    description: "Step 1",
    image:
      "https://www.walgreens.com/images/adaptive/sp2/3775825_030324_HP_Shop_Your_Way_1.png",
  },
  {
    id: "03r4ru43",
    title: "ပို့ဆောင်ခ တစ်နာရီ အခမဲ့",
    description: "Step 2",
    image:
      "https://www.walgreens.com/images/adaptive/sp2/3775825_030324_HP_Shop_Your_Way_2.png",
  },
  {
    id: "348rjfre",
    title: "လူတွေ့ပေးခြင်း",
    description: "Step 3",
    image:
      "https://www.walgreens.com/images/adaptive/sp2/3775825_030324_HP_Shop_Your_Way_3.png",
  },
  {
    id: "fjrelf7f",
    title: "တစ်ဝက်ငွေပေးချေခြင်း",
    description: "Step 4",
    image:
      "https://www.walgreens.com/images/adaptive/sp2/3775825_030324_HP_Shop_Your_Way_4.png",
  },
  {
    id: "fjr3sf7f",
    title: "Credit Card ဖြင့်ပေးခြင်း",
    description: "Step 5",
    image:
      "https://www.walgreens.com/images/adaptive/sp2/3775825_030324_HP_Shop_Your_Way_5.png",
  },
];

export default function ShopWay() {
  return (
    <>
      <div className="mt-40">
        <h2 className="mt-10 scroll-m-20 pb-2 text-center text-3xl font-semibold tracking-tight transition-colors first:mt-0">
          ပေးပို့သည့် အဆင့်များ
        </h2>
      </div>
      <div className="mt-4 grid gap-3 lg:grid-cols-5">
        {data.map((data) => (
          <Card className="border-0 text-center shadow-none">
            <CardHeader>
              <CardImage>
                <img src={data.image} className="w-full" />
              </CardImage>
              <CardTitle>{data.title}</CardTitle>
              <CardDescription>{data.description}</CardDescription>
            </CardHeader>
          </Card>
        ))}
      </div>
    </>
  );
}

function CardImage({ children }: any) {
  return (
    <div className="mx-auto w-36 overflow-hidden rounded-full border">
      {children}
    </div>
  );
}
