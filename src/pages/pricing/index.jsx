import { Navbar } from "../../layout/navbar";
import bgPatterCircle from "../../assets/shared/desktop/bg-pattern-circle.svg";
import { PricingCard } from "./components/PricingCard";
import { CTA } from "../home/components/CTA";
import { Footer } from "../../layout/footer";

const pricings = [
  {
    id: 0,
    name: "Free Plan",
    description:
      "Build and test using our core set of products with up to 100 API requests",
    price: "$0.00",
    features: [
      {
        id: 0,
        title: "Transactions",
        isIncluded: true,
      },
      {
        id: 1,
        title: "Auth",
        isIncluded: true,
      },
      {
        id: 2,
        title: "Identity",
        isIncluded: true,
      },
      {
        id: 3,
        title: "Investments",
        isIncluded: false,
      },
      {
        id: 4,
        title: "Assets",
        isIncluded: false,
      },
      {
        id: 5,
        title: "Liabilities",
        isIncluded: false,
      },
      {
        id: 6,
        title: "Income",
        isIncluded: false,
      },
    ],
  },
  {
    id: 1,
    name: "Basic Plan",
    description:
      "Launch your project with unlimited requests and no contractual minimums ",
    price: "$249.00",
    features: [
      {
        id: 0,
        title: "Transactions",
        isIncluded: true,
      },
      {
        id: 1,
        title: "Auth",
        isIncluded: true,
      },
      {
        id: 2,
        title: "Identity",
        isIncluded: true,
      },
      {
        id: 3,
        title: "Investments",
        isIncluded: true,
      },
      {
        id: 4,
        title: "Assets",
        isIncluded: true,
      },
      {
        id: 5,
        title: "Liabilities",
        isIncluded: false,
      },
      {
        id: 6,
        title: "Income",
        isIncluded: false,
      },
    ],
  },
  {
    id: 2,
    name: "Premium Plan",
    description:
      "Get tailored solutions, volume pricing, and dedicated support for your team",
    price: "$499.00",
    features: [
      {
        id: 0,
        title: "Transactions",
        isIncluded: true,
      },
      {
        id: 1,
        title: "Auth",
        isIncluded: true,
      },
      {
        id: 2,
        title: "Identity",
        isIncluded: true,
      },
      {
        id: 3,
        title: "Investments",
        isIncluded: true,
      },
      {
        id: 4,
        title: "Assets",
        isIncluded: true,
      },
      {
        id: 5,
        title: "Liabilities",
        isIncluded: true,
      },
      {
        id: 6,
        title: "Income",
        isIncluded: true,
      },
    ],
  },
];

export const Pricing = () => {
  return (
    <main className="min-h-screen w-full bg-[#EDF3F8] relative overflow-hidden ">
      <div className="absolute w-[780px] h-[780px] top-0 left-0 md:right-0 md:left-auto -translate-y-[calc(100%-100px)] md:translate-x-[calc(100%-300px)] lg:-translate-y-[calc(100%-250px)] lg:translate-x-[calc(100%-550px)]">
        <img
          src={bgPatterCircle}
          alt="Background Circle Pattern"
          className="md:w-[949px] md:h-[949px] lg:w-[780px] lg:h-[780px]"
        />
      </div>

      <Navbar />

      <div className="px-6 lg:max-w-[1110px] lg:mx-auto">
        <h1 className="text-[32px] leading-[36px] font-dm-serif tracking-[-0.246px] font-normal text-secondary-san-juan-blue text-center md:mt-10 lg:text-[56px] lg:leading-[56px] lg:text-left">
          Pricing
        </h1>

        <div className="flex flex-col gap-12 px-6 mt-12  mb-20 lg:mb-[100px] md:flex-row md:px-10 md:mt-[70px] md:gap-[10px] lg:gap-[30px] lg:px-0">
          {pricings.map((pricing) => (
            <PricingCard pricing={pricing} key={pricing.id} />
          ))}
        </div>
      </div>

      <CTA />
      <Footer />
    </main>
  );
};
