"use client";
import React from "react";
import CountUp from "react-countup";

const SuccesResultProps = [
  {
    className: "text-blue-400",
    number: <CountUp end={13} start={0} duration={10} />,
    icon: ".",
    icon2: "+",
    description: "Years of experience",
  },
  {
    className: "text-orenge-300",
    number: <CountUp end={85} start={0} duration={10} />,
    icon: ".",
    icon2: "%",
    description: "Average Conversion Rate",
  },
  {
    className: "text-fuchsia-300",
    number: <CountUp end={60} start={0} duration={10} />,
    icon: ".",
    icon2: "m",
    description: "Traffic Generated",
  },
  {
    className: "text-yellow-300",
    number: <CountUp end={100} start={0} duration={10} />,
    icon: ".",
    icon2: "%",
    description: "Client satisfaction score",
  },
];

function SuccesResult() {
  return (
    <section className="bg-black py-20">
      <div className="container ">
        <h2 className="text-lg font-semibold text-white text-center mb-10">
          Our results speak for our ability to succeed
        </h2>
        <div className="flex flex-wrap md:justify-between justify-center gap-5">
          {SuccesResultProps.map(
            ({number, description, icon, icon2, className}, index) => (
              <div key={index} className="text-center">
                <div
                  className={`text-5xl uppercase flex font-bold font-Familjen mb-1.5 ${className}`}
                >
                  <span className="-mt-5 mr-3">{icon}</span>
                  <span>{number}</span>
                  <span>{icon2}</span>
                </div>
                <div className="text-white text-base">{description}</div>
              </div>
            )
          )}
        </div>
      </div>
    </section>
  );
}

export default SuccesResult;
