import ShopCard from "./shop-card";

export default function Shop() {
  return (
    <>
      <div className="mt-36">
        <h2 className="mt-10 scroll-m-20 pb-2 text-3xl font-semibold tracking-tight transition-colors first:mt-0">
          The Joke Tax Chronicles
        </h2>
      </div>
      <div className="mt-5 grid gap-3 lg:grid-cols-4">
        {Array(4)
          .fill(null)
          .map((_, index) => (
            <ShopCard key={index} />
          ))}
      </div>
    </>
  );
}
