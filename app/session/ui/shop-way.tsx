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
    title: "Pickup in a little as 30 minutes",
    description: "မိုက်လိုက်တာ သားရယ်",
    image:
      "https://www.walgreens.com/images/adaptive/sp2/3775825_030324_HP_Shop_Your_Way_1.png",
  },
  {
    id: "03r4ru43",
    title: "FREE 1 hour delivery",
    description: "မိုက်လိုက်တာ သားရယ်",
    image:
      "https://www.walgreens.com/images/adaptive/sp2/3775825_030324_HP_Shop_Your_Way_2.png",
  },
  {
    id: "348rjfre",
    title: "Cash to pay",
    description: "အိမ်ရောက်ရင် ပေး",
    image:
      "https://www.walgreens.com/images/adaptive/sp2/3775825_030324_HP_Shop_Your_Way_3.png",
  },
  {
    id: "fjrelf7f",
    title: "Deposit",
    description: "လမ်းမှာတွေ့ရင် ပေး",
    image:
      "https://www.walgreens.com/images/adaptive/sp2/3775825_030324_HP_Shop_Your_Way_4.png",
  },
  {
    id: "fjr3sf7f",
    title: "Credit Card",
    description: "လမ်းမှာတွေ့ရင် ပေး",
    image:
      "https://www.walgreens.com/images/adaptive/sp2/3775825_030324_HP_Shop_Your_Way_5.png",
  },
];

export default function ShopWay() {
  return (
    <>
      <div className="mt-40">
        <h2 className="mt-10 scroll-m-20 pb-2 text-center text-3xl font-semibold tracking-tight transition-colors first:mt-0">
          Shop Walgreens your way
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
