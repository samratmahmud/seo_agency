import StepItems from "@/components/template/StepItems";
import React from "react";

const stepPAge = [
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
      <div className="container my-32">
        <div className="flex gap-20">
          <div data-aos="fade-up" className="relative">
            <img
              className="border border-black rounded-t-full"
              src="images/thumb3.png"
              alt=""
            />
            <div className="absolute bottom-0 -left-[25%]">
              <img src="/images/shape3.png" alt="" />
            </div>
          </div>
          <div>
            <h2 className="text-5xl font-bold font-Familjen mb-6">
              Our simplified & impactful steps
            </h2>
            <p className="text-lg mb-[60px]">
              We will work to understand more about user's business and goals &
              create a simple step-by-step SEO plan to help them.
            </p>
            <div className="flex flex-col gap-8">
              {stepPAge.map((item, index) => (
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
