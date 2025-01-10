import illustrationEasyToImplement from "../../../assets/home/mobile/illustration-easy-to-implement.svg";
import illustrationSimpleUI from "../../../assets/home/desktop/illustration-simple-ui.svg";
import iconPersonalFinances from "../../../assets/home/desktop/icon-personal-finances.svg";
import iconBankingAndCoverage from "../../../assets/home/desktop/icon-banking-and-coverage.svg";
import iconConsumerPayments from "../../../assets/home/desktop/icon-consumer-payments.svg";

export const Features = () => {
  return (
    <section className="py-20 pt-6">
      <div>
        <div>
          <img
            src={illustrationEasyToImplement}
            alt="Easy Implementation Illustration"
            className="w-full"
          />
        </div>

        <div className="-mt-10 px-6">
          <h2 className="text-[32px] leading-[36px] font-dm-serif text-center text-secondary-san-juan-blue">
            Easy to implement
          </h2>
          <p className="mt-4 text-secondary-light-san-juan-blue text-[15px] leading-[28px] font-normal text-center">
            Our API comes with just a few lines of code. You’ll be up and
            running in no time. We built our documentation page to integrate
            payments functionality with ease.
          </p>
        </div>
      </div>
      <div className="mt-20">
        <div>
          <img
            src={illustrationSimpleUI}
            alt="Simple UI Illustration"
            className="w-full"
          />
        </div>

        <div className="px-6">
          <h2 className="text-[32px] leading-[36px] font-dm-serif text-center text-secondary-san-juan-blue">
            Simple UI & UX
          </h2>
          <p className="mt-4 text-secondary-light-san-juan-blue text-[15px] leading-[28px] font-normal text-center">
            Our pre-built form is easy to integrate in your app or website’s
            checkout flow and designed to optimize conversion.
          </p>
        </div>
      </div>

      <div className="mt-20 px-6 flex flex-col gap-12">
        {/* FEATURE 1 START */}
        <div className="flex flex-col items-center text-center gap-8">
          <div>
            <img src={iconPersonalFinances} alt="Personal finances icon" />
          </div>
          <div className="flex flex-col gap-4">
            <h3 className="text-secondary-san-juan-blue font-bold tracking-[-0.138px] text-[18px] leading-[25px]">
              Personal Finances
            </h3>
            <p className="text-[15px] font-normal leading-[25px] tracking-[-0.115px] text-secondary-light-san-juan-blue">
              Consolidate financial data from multiple sources and categorize
              transactions up to 2 years of history. Analyze reports to
              reconcile activities in your account.{" "}
            </p>
          </div>
        </div>
        {/* FEATURE 1 END */}

        {/* FEATURE 2 START */}
        <div className="flex flex-col items-center text-center gap-8">
          <div>
            <img src={iconBankingAndCoverage} alt="Personal finances icon" />
          </div>
          <div className="flex flex-col gap-4">
            <h3 className="text-secondary-san-juan-blue font-bold tracking-[-0.138px] text-[18px] leading-[25px]">
              Banking & Coverage
            </h3>
            <p className="text-[15px] font-normal leading-[25px] tracking-[-0.115px] text-secondary-light-san-juan-blue">
              With our platform, you can speed up account onboarding and support
              ongoing payments for checking, savings, credit card, and brokerage
              accounts.{" "}
            </p>
          </div>
        </div>
        {/* FEATURE 2 END */}

        {/* FEATURE 3 START */}
        <div className="flex flex-col items-center text-center gap-8">
          <div>
            <img src={iconConsumerPayments} alt="Personal finances icon" />
          </div>
          <div className="flex flex-col gap-4">
            <h3 className="text-secondary-san-juan-blue font-bold tracking-[-0.138px] text-[18px] leading-[25px]">
              Consumer Payments
            </h3>
            <p className="text-[15px] font-normal leading-[25px] tracking-[-0.115px] text-secondary-light-san-juan-blue">
              It’s easier to set up secure bank payments with us through a flow
              designed with the user experience in mind. Customers could
              instantly authenticate their account.{" "}
            </p>
          </div>
        </div>
        {/* FEATURE 3 END */}
      </div>
    </section>
  );
};
