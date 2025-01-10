import { Button } from "../../../generalComponents/Button";

export const CTA = () => {
  return (
    <section className="px-6  pb-20 md:pb-[100px] md:mt-5 lg:max-w-[1110px] lg:mx-auto lg:px-0">
      <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
        <h2 className="text-[32px] leading-[36px]  md:text-[48px] md:leading-[56px] md:tracking-[-0.369px] font-dm-serif text-center text-secondary-san-juan-blue">
          Ready to Start?
        </h2>
        <div className="flex flex-col gap-4 md:w-[445px] md:mx-auto lg:mx-0">
          <div className="flex flex-col gap-4 md:flex-row md:w-full md:relative md:h-[48px]">
            <input
              type="text"
              placeholder="Enter email address"
              className="text-body-copy-1 font-bold text-secondary-light-san-juan-blue py-4 px-6 rounded-full bg-white md:absolute md:inset-0 md:w-full shadow-primaryBtnHover"
            />
            <div
              className={"md:absolute md:right-0 md:top-0 md:bottom-0 md:z-20 "}
            >
              <Button
                label={"Schedule a Demo"}
                className={
                  "md:h-[48px] md:flex md:items-center md:justify-center w-full"
                }
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
