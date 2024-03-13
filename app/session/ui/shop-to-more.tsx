import ShopCard from "./shop-card";

const medicals = [
  {
    id: "382r90393",
    image:
      "https://www.netmeds.com/images/product-v1/150x150/1033882/medisynth_kofeez_cough_syrup_120_ml_0_1.jpg",
    title: "ခေါင်းမူးပျောက်ဆေး",
    description: "ခေါင်းမူးတဲ့အသခါ သောက်သုံးနိုင်တယ်",
    price: "၁၀၀၀၀",
  },
  {
    id: "343434",
    image:
      "https://www.netmeds.com/images/product-v1/150x150/835774/accu_chek_instant_test_strips_50_s_0.jpg",
    title: "ခေါင်းကိုက်ပျောက်ဆေး",
    description: "ခေါင်းကိုက်တဲ့အခါ သောက်သုံးနိုင်တယ်",
    price: "၈၀၀၀",
  },
  {
    id: "34grgr",
    image:
      "https://www.netmeds.com/images/product-v1/150x150/831983/medisynth_rheuma_saj_massage_oil_60_ml_0.jpg",
    title: "ခေါင်းကိုက်ပျောက်ဆေး",
    description: "ခေါင်းကိုက်တဲ့အခါ သောက်သုံးနိုင်တယ်",
    price: "၈၀၀၀",
  },
  {
    id: "34grgr",
    image:
      "https://www.netmeds.com/images/product-v1/150x150/831983/medisynth_rheuma_saj_massage_oil_60_ml_0.jpg",
    title: "ခေါင်းကိုက်ပျောက်ဆေး",
    description: "ခေါင်းကိုက်တဲ့အခါ သောက်သုံးနိုင်တယ်",
    price: "၈၀၀၀",
  },
];

export default function ShopToMore() {
  return (
    <>
      <div className="mt-36">
        <h2 className="mt-10 scroll-m-20 pb-2 text-3xl font-semibold tracking-tight transition-colors first:mt-0">
          အသက် (၁၀) နှစ်အောက် အရွယ်များအတွက်
        </h2>
        <p className="leading-7">
          အသက် (၁၀) နှစ်အထက် အရွယ်များအတွက် သောက်သုံးရန်ဆေးဝါး
          အမျိုးအစားဖြစ်ပါတယ်။
        </p>
      </div>
      <div className="mt-5 grid gap-3 lg:grid-cols-4">
        {medicals.map((medical, index) => (
          <ShopCard key={index} medical={medical} />
        ))}
      </div>
    </>
  );
}
