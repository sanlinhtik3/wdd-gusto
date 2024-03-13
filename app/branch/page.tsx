import BranchCard from "../session/ui/branch-card";

type Branch = {
  id: string;
  branchName: string;
  image: string;
  description: string;
};

const branchs = [
  {
    id: "83290j3f",
    branchName: "ရန်ကုန်",
    image: "",
    description:
      "ရန်ကုန်မြို့တောင်ဘက်ရှိဆေးဆိုင်များတွေင် Discount များဖြင့် ဝယ်ယူနိုင်ပါပြီ",
  },
  {
    id: "83290j3f",
    branchName: "မန္တလေး",
    image: "",
    description:
      "မန္တလေးမြို့တောင်ဘက်ရှိဆေးဆိုင်များတွေင် Discount များဖြင့် ဝယ်ယူနိုင်ပါပြီ",
  },
  {
    id: "83830r8fe",
    branchName: "တနင်္သာရီမြို့",
    image: "",
    description:
      "တနင်္သာရီမြို့တောင်ဘက်ရှိဆေးဆိုင်များတွေင် Discount များဖြင့် ဝယ်ယူနိုင်ပါပြီ",
  },
];

export default function Home() {
  return (
    <div className="mx-auto max-w-6xl">
      <div className="px-5">
        <div className="mt-36">
          <h2 className="mt-10 scroll-m-20 pb-2 text-3xl font-semibold tracking-tight transition-colors first:mt-0">
            အမြို့မြို့အနယ်နယ်ရှိ ဆေးဆိုင်များ
          </h2>
          <p className="leading-7">မြို့နယ်စုံမှ ရွှေအိုး ဆေးဆိုင်ခွဲမျာား</p>
        </div>
        <div className="mt-5 grid gap-3 lg:grid-cols-4">
          {branchs.map((branch, index) => (
            <BranchCard key={index} branch={branch} />
          ))}
        </div>
      </div>
    </div>
  );
}
