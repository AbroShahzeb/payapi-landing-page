import { Navbar } from "../../layout/navbar";
import bgPatterCircle from "../../assets/shared/desktop/bg-pattern-circle.svg";
import { CTA } from "../home/components/CTA";
import { Footer } from "../../layout/footer";
import teamMemberMobile from "../../assets/about/mobile/image-team-members.jpg";
import teamMemberTablet from "../../assets/about/tablet/image-team-members.jpg";
import teamMemberDesktop from "../../assets/about/desktop/image-team-members.jpg";

export const About = () => {
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

      <div className="px-6  md:px-10 lg:max-w-[920px] lg:mx-auto lg:px-0">
        <div className="lg:max-w-[730px] lg:flex lg:items-start">
          <h1 className="text-[32px] leading-[36px] font-dm-serif tracking-[-0.246px] font-normal text-secondary-san-juan-blue text-center md:mt-10 lg:text-[56px] lg:leading-[56px] lg:text-left md:max-w-[573px] md:mx-auto md:text-[48px] md:leading-[56px] md:tracking-[-0.369px] lg:max-w-full">
            We empower innovators by delivering access to the financial system
          </h1>
        </div>

        <div className="mt-10 flex flex-col gap-4 items-center text-center md:mt-[54px] md:flex-row md:items-start lg:mt-[50px]">
          <h3 className="text-[24px] leading-[32px] text-secondary-san-juan-blue font-dm-serif tracking-[-0.185px] font-normal md:w-[223px] md:text-left md:flex-shrink-0 md:gap-[10px]">
            Our Vision
          </h3>
          <p className="text-[15px] leading-[28px] text-secondary-light-san-juan-blue font-normal md:text-left">
            Our main goal is to build beautiful consumer experiences along with
            developer-friendly infrastructure. The result is an intelligent tool
            that gives everyone the ability to create amazing products that
            solve big problems. We are deeply focused on democratizing financial
            services through technology.
          </p>
        </div>

        <div className="mt-10 flex flex-col gap-4 items-center text-center md:mt-[64px] md:flex-row md:items-start lg:mt-[56px]">
          <h3 className="text-[24px] leading-[32px] text-secondary-san-juan-blue font-dm-serif tracking-[-0.185px] font-normal md:w-[223px] md:text-left md:flex-shrink-0 md:gap-[10px]">
            Our Business
          </h3>
          <p className="text-[15px] leading-[28px] text-secondary-light-san-juan-blue font-normal md:text-left">
            At the core of our platform is the technical infrastructure APIs
            that connect consumers. Our innovative product provides key insights
            for businesses and individuals, as well as robust reporting for
            traditional financial institutions and developers.
          </p>
        </div>
      </div>

      <div className="relative">
        <img src={teamMemberMobile} className="md:hidden mt-[76px] w-full" />
        <img
          src={teamMemberTablet}
          className="hidden md:block lg:hidden w-full mt-[90px]"
        />
        <img
          src={teamMemberDesktop}
          className="hidden lg:block w-full mt-[100px] relative z-20"
        />

        <div className="absolute top-1/2 left-0 -translate-y-1/2 -translate-x-1/2 z-10 hidden lg:block">
          <img
            src={bgPatterCircle}
            alt="Background Circle Pattern"
            className="w-[780px] h-[780px]"
          />
        </div>
      </div>

      <div className="px-6 md:px-10 lg:px-0 lg:max-w-[1110px] lg:mx-auto">
        {/* SEPARATOR */}
        <div className="w-full h-[1px] bg-secondary-san-juan-blue/25  mt-12 md:hidden"></div>

        <div className="flex flex-col gap-8 items-center text-center py-4 md:flex-row md:gap-[10px] md:py-0 lg:gap-[30px]">
          <div className="flex flex-col items-center text-center md:flex-1 md:text-left md:items-start">
            <div className="hidden md:block w-full h-[1px] bg-secondary-san-juan-blue/25  mt-12 mb-[44px] lg:mb-4 lg:mt-[72px]"></div>
            <p className="text-base leading-[28px] text-secondary-san-juan-blue/70">
              Team Members
            </p>
            <h4 className="text-[56px] leading-[72px] tracking-[-0.431px] text-primary-pink font-dm-serif">
              300+
            </h4>
            <div className="hidden md:block w-full h-[1px] bg-secondary-san-juan-blue/25  mt-4"></div>
          </div>

          <div className="flex flex-col items-center text-center md:flex-1 md:text-left md:items-start">
            <div className="hidden md:block w-full h-[1px] bg-secondary-san-juan-blue/25  mt-12 mb-[44px] lg:mb-4 lg:mt-[72px]"></div>
            <p className="text-base leading-[28px] text-secondary-san-juan-blue/70">
              Offices in the US
            </p>
            <h4 className="text-[56px] leading-[72px] tracking-[-0.431px] text-primary-pink font-dm-serif">
              3
            </h4>
            <div className="hidden md:block w-full h-[1px] bg-secondary-san-juan-blue/25  mt-4"></div>
          </div>

          <div className="flex flex-col items-center text-center md:flex-1 md:text-left md:items-start">
            <div className="hidden md:block w-full h-[1px] bg-secondary-san-juan-blue/25  mt-12 mb-[44px] lg:mb-4 lg:mt-[72px]"></div>
            <p className="text-base leading-[28px] text-secondary-san-juan-blue/70">
              Transactions analyzed
            </p>
            <h4 className="text-[56px] leading-[72px] tracking-[-0.431px] text-primary-pink font-dm-serif">
              10M+
            </h4>
            <div className="hidden md:block w-full h-[1px] bg-secondary-san-juan-blue/25  mt-4"></div>
          </div>
        </div>

        {/* SEPARATOR */}
        <div className="w-full h-[1px] bg-secondary-san-juan-blue/25  mb-12 md:hidden"></div>
      </div>

      <div className="px-6 lg:max-w-[920px] lg:mx-auto mb-12 md:px-10 md:mb-[72px] lg:px-0 lg:mb-[80px]">
        <div className="mt-10 flex flex-col gap-4 items-center text-center md:mt-[64px] md:flex-row md:items-start">
          <h3 className="text-[24px] leading-[32px] text-secondary-san-juan-blue font-dm-serif tracking-[-0.185px] font-normal md:w-[223px] md:text-left md:flex-shrink-0 md:gap-[10px]">
            The Culture
          </h3>
          <p className="text-[15px] leading-[28px] text-secondary-light-san-juan-blue font-normal md:text-left">
            We strongly believe there's always an opportunity to learn from each
            other outside of day-to-day work, whether it's company-wide
            offsites, internal hackathons, or co-worker meetups. We always value
            cross-team collaboration and diversity of thought, no matter the job
            title.
          </p>
        </div>

        <div className="mt-10 flex flex-col gap-4 items-center text-center md:mt-[64px] md:flex-row md:items-start">
          <h3 className="text-[24px] leading-[32px] text-secondary-san-juan-blue font-dm-serif tracking-[-0.185px] font-normal md:w-[223px] md:text-left md:flex-shrink-0 md:gap-[10px]">
            The People
          </h3>
          <p className="text-[15px] leading-[28px] text-secondary-light-san-juan-blue font-normal md:text-left">
            We're all passionate about building a more efficient and inclusive
            financial infrastructure together. At PayAPI, we have diverse
            backgrounds and skills.
          </p>
        </div>
      </div>

      <div className="px-6 md:px-10">
        <CTA />
      </div>

      <Footer />
    </main>
  );
};
