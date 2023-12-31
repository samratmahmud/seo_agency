import Buttons from "@/components/common/Buttons";
import Link from "next/link";
import React from "react";

const data = [
  {
    thumbnail: "/images/team5.png",
    name: "Adrew Smith",
    position: "Senior SEO Manager",
  },
  {
    thumbnail: "/images/team6.png",
    name: "Jones Jack",
    position: "Strategy Director",
  },
  {
    thumbnail: "/images/team7.png",
    name: "Marsal Straw",
    position: "SEO Content Writer",
  },
];

function Employe() {
  return (
    <section>
      <div className="container lg:my-32 md:my-24 my-20">
        <div className="flex lg:flex-row flex-col justify-between gap-6 items-center md:mb-20 mb-10">
          <h2 className="2xl:text-9xl xl:text-3xl md:text-13xl sm:text-14xl text-15xl font-bold font-Familjen xl:max-w-[624px] max-w-[484px] text-center">
            Increase revenue with custom SEO
          </h2>
          <Link href="">
            <Buttons
              classNames="h-[60px]"
              className="py-1.5 px-8"
              name1="Meet our team"
              name2="Meet our team"
            />
          </Link>
        </div>
        <div className="grid xl:grid-cols-3 md:grid-cols-2 gap-6">
          {data.map(({name, position, thumbnail}, index) => (
            <div
              data-aos="fade-up"
              data-aos-duration={`${index * 1000}`}
              key={index}
              className="border border-black px-5 pt-5 rounded-xl"
            >
              <div className="overflow-hidden rounded-xl">
                <img
                  className="w-full rounded-xl scale-100 hover:scale-105  duration-500"
                  src={thumbnail}
                  alt=""
                />
              </div>
              <div className="text-center p-[30px]">
                <h3 className="text-xl mb-2.5 font-bold">{name}</h3>
                <p className="text-lg">{position}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Employe;
