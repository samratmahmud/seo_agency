import StepItems from "@/components/template/StepItems";
import React from "react";

const stepPage = [
  {
    title: "Keyword Research and On-Page Optimization",
    contain:
      "Start by researching and selecting relevant keywords and phrases that your target audience is likely to use.",
  },
  {
    title: "Off-Page SEO and Link Building",
    contain:
      "Start by researching and selecting relevant keywords and phrases that your target audience is likely to use.",
  },
  {
    title: "Regular Monitoring and Content Creation",
    contain:
      "Start by researching and selecting relevant keywords and phrases that your target audience is likely to use.",
  },
];

function StepsPlan() {
  const [tab, setTab] = React.useState(0);
  return (
    <section>
      <div className="container lg:my-32 md:my-24 my-20">
        <div className="flex lg:flex-row flex-col justify-between md:gap-20 gap-10">
          <div>
            <div data-aos="fade-up" className="relative">
              <img
                className="border border-black rounded-t-full"
                src="images/thumb3.png"
                alt=""
              />
              <div className="absolute bottom-0 -left-[20%] hidden md:block">
                <img src="/images/shape3.png" alt="" />
              </div>
            </div>
          </div>
          <div className="max-w-[624px] m-auto lg:mr-0">
            <h2 className="2xl:text-9xl xl:text-3xl md:text-13xl sm:text-14xl text-15xl font-bold font-Familjen mb-6 text-center lg:text-left">
              Our simplified & impactful steps
            </h2>
            <p className="md:text-lg text-base mb-[60px] text-center lg:text-left">
              We will work to understand more about user's business and goals &
              create a simple step-by-step SEO plan to help them.
            </p>
            <div className="flex flex-col gap-8">
              {stepPage.map((item, index) => (
                <StepItems
                  key={index}
                  index={index + 1}
                  title={item.title}
                  contain={item.contain}
                  isActived={tab === index}
                  handelClick={() => setTab(index)}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default StepsPlan;
