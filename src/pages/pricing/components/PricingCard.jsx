import iconCheck from "../../../assets/shared/desktop/icon-check.svg";
import { Button } from "../../../generalComponents/Button";

export const PricingCard = ({ pricing }) => {
  return (
    <div className="flex flex-col items-center text-center lg:text-left">
      <div>
        <h3 className="text-[24px] leading-[32px] tracking-[-0.185px] text-primary-pink font-dm-serif md:leading-[40px]lg:text-[32px] lg:leading-[40px] lg:tracking-[-0.246px]">
          {pricing.name}
        </h3>
        <p className="text-secondary-light-san-juan-blue text-[15px] leading-[28px] font-normal mt-4">
          {pricing.description}
        </p>
        <p className="text-secondary-san-juan-blue font-dm-serif text-[56px] leading-[72px] tracking-[-0.431px] font-normal mt-2 md:text-[48px] lg:text-[56px] lg:leading-[72px]">
          {pricing.price}
        </p>
      </div>

      {/* SEPARATOR */}
      <div className="w-full h-[1px] bg-secondary-san-juan-blue my-6"></div>

      {/* FEATURES */}
      <div className="flex flex-col gap-2 lg:items-start lg:w-full">
        {pricing.features.map((feature) => (
          <div
            key={feature.id}
            className="flex items-center gap-6 lg:items-start lg:w-full"
          >
            {feature.isIncluded && (
              <span>
                <img src={iconCheck} alt="Check Icon" />
              </span>
            )}
            <span
              className={`text-base leading-[28px] font-normal ${
                feature.isIncluded
                  ? "text-secondary-san-juan-blue"
                  : "text-secondary-light-san-juan-blue ml-[35px]"
              }`}
            >
              {feature.title}
            </span>
          </div>
        ))}
      </div>

      {/* SEPARATOR */}
      <div className="w-full h-[1px] bg-secondary-san-juan-blue my-6"></div>

      <div>
        <Button label="Request Access" variant="secondaryDark" />
      </div>
    </div>
  );
};
