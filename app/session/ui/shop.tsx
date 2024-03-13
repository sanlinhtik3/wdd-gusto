import ShopCard from "./shop-card";

const medicals = [
  {
    id: "382r90393",
    image:
      "https://www.netmeds.com/images/product-v1/150x150/835964/dr_willmar_schwabe_dizester_tonic_500_ml_0.jpg",
    title: "ခေါင်းမူးပျောက်ဆေး",
    description: "ခေါင်းမူးတဲ့အသခါ သောက်သုံးနိုင်တယ်",
    price: "၁၀၀၀၀",
  },
  {
    id: "343434",
    image:
      "https://www.netmeds.com/images/product-v1/150x150/914704/durex_invisible_super_ultra_thin_condoms_for_men_10s_0_0.jpg",
    title: "ခေါင်းကိုက်ပျောက်ဆေး",
    description: "ခေါင်းကိုက်တဲ့အခါ သောက်သုံးနိုင်တယ်",
    price: "၈၀၀၀",
  },
  {
    id: "34grgr",
    image:
      "https://www.netmeds.com/images/product-v1/150x150/388215/volini_spray_100gm_46243_0_2.jpg",
    title: "ဗိုက်အောင့်ပျောက်ဆေး",
    description: "ခေါင်းကိုက်တဲ့အခါ သောက်သုံးနိုင်တယ်",
    price: "၈၀၀၀",
  },
  {
    id: "34grgr",
    image:
      "https://www.netmeds.com/images/product-v1/150x150/411206/dabur_chyawanprakash_sugarfree_500_gm_0.jpg",
    title: "အကြောပြေလိမ်းဆေး",
    description: "ခေါင်းကိုက်တဲ့အခါ သောက်သုံးနိုင်တယ်",
    price: "၈၀၀၀",
  },
];

export default function Shop() {
  return (
    <>
      <div className="mt-36">
        <h2 className="mt-10 scroll-m-20 pb-2 text-3xl font-semibold tracking-tight transition-colors first:mt-0">
          အသက် (၁၀) နှစ်ထက် အရွယ်များအတွက်
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
