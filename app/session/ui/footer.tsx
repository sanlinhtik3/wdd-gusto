export default function Footer() {
  return (
    <>
      <footer className="mt-40 border-t bg-white p-4 md:p-8 lg:p-10 dark:bg-gray-800">
        <div className="mx-auto max-w-screen-xl text-center">
          <a
            href="#"
            className="flex items-center justify-center text-2xl font-semibold text-gray-900 dark:text-white"
          >
            ရွှေအိုးဆေးဆိုင်
          </a>
          <p className="my-6 text-gray-500 dark:text-gray-400">
            ဆေးပေါင်း 4000+ ကို အမြို့မြို့အနယ်နယ်ရှိ ရွှေအိုးဆိုင်ခွဲများတွင်
            ဝယ်ယူရရှိနိုင်ပါပြီ
          </p>
          {/* <ul className="mb-6 flex flex-wrap items-center justify-center text-gray-900 dark:text-white">
            <li>
              <a href="#" className="mr-4 hover:underline md:mr-6 ">
                About
              </a>
            </li>
            <li>
              <a href="#" className="mr-4 hover:underline md:mr-6">
                Premium
              </a>
            </li>
            <li>
              <a href="#" className="mr-4 hover:underline md:mr-6 ">
                Campaigns
              </a>
            </li>
            <li>
              <a href="#" className="mr-4 hover:underline md:mr-6">
                Blog
              </a>
            </li>
            <li>
              <a href="#" className="mr-4 hover:underline md:mr-6">
                Affiliate Program
              </a>
            </li>
            <li>
              <a href="#" className="mr-4 hover:underline md:mr-6">
                FAQs
              </a>
            </li>
            <li>
              <a href="#" className="mr-4 hover:underline md:mr-6">
                Contact
              </a>
            </li>
          </ul> */}
          <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
            © 2024-2025{" "}
            <a href="#" className="hover:underline">
              San Lin Htike™
            </a>
            . All Rights Reserved.
          </span>
        </div>
      </footer>
    </>
  );
}
