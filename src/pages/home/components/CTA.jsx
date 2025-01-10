export const CTA = () => {
  return (
    <section className="px-6  pb-20">
      <div className="flex flex-col gap-8">
        <h2 className="text-[32px] leading-[36px] font-dm-serif text-center text-secondary-san-juan-blue">
          Ready to Start?
        </h2>
        <div className="flex flex-col gap-4">
          <input
            type="text"
            placeholder="Enter email address"
            className="text-body-copy-1 font-bold text-secondary-light-san-juan-blue py-4 px-6 rounded-full bg-white"
          />
          <button className="bg-primary-pink text-primary-water-white text-body-copy-1 font-bold leading-normal tracking-[-0.115px] py-4 px-6 rounded-full">
            Schedule a Demo
          </button>
        </div>
      </div>
    </section>
  );
};
