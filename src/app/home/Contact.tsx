import Buttons from "@/components/common/Buttons";
import TextFild from "@/components/common/TextFild";
import React from "react";

const contactData = [
  {
    icon: "/images/icons8-call-24.png",
    title: "+088-234-6849",
  },
  {
    icon: "/images/icons8-email-24.png",
    title: "example@gmail.com",
  },
  {
    icon: "/images/icons8-location-48.png",
    title: "Haward Street,10203 USA",
  },
];

function Contact() {
  return (
    <section className="bg-black">
      <div className="container lg:py-32 md:py-24 py-20 flex lg:flex-row flex-col gap-6">
        <div>
          <h2 className="2xl:text-9xl xl:text-3xl md:text-13xl sm:text-14xl text-15xl font-bold font-Familjen text-gray-200 mb-6 text-center lg:text-left">
            Want to boost your business with our SEO expertise?
          </h2>
          <p className="md:text-lg text-base text-gray-200 mb-11 text-center lg:text-left max-w-[594px]">
            Experienced SEO experts proven strategies & innovative techniques to
            increase your website's visibility, drive organic traffic, and
            improve your digital performance and grow your online reach.
          </p>
          <div className="text-11xl font-Familjen font-bold mb-7 text-gray-200 text-center lg:text-left">
            Contact us directly:
          </div>
          <div className="flex flex-wrap justify-center lg:justify-start gap-8">
            {contactData.map(({icon, title}, index) => (
              <label
                role="button"
                key={index}
                className="flex items-center gap-3"
              >
                <div className="bg-yellow-300 w-10 h-10 flex items-center justify-center rounded-full p-2">
                  <img src={icon} alt="" />
                </div>
                <div className="text-lg font-semibold text-gray-200">
                  {title}
                </div>
              </label>
            ))}
          </div>
        </div>
        <div className="bg-gray-200 md:p-10 p-7 rounded-xl lg:max-w-[516px] w-full">
          <h3 className="text-11xl font-bold font-Familjen mb-2.5">
            Send us a message
          </h3>
          <p className="text-12xl mb-7">
            Fill out the form and our expert will get back to you with a free
            analysis and proposal
          </p>
          <form className="flex flex-col gap-6 mb-10">
            <TextFild type="text" placeholder="Enter full name" />
            <TextFild type="email" placeholder="Enter email address" />
            <TextFild
              className="pb-6"
              type="text"
              placeholder="Write us your questions"
            />
          </form>
          <div>
            <Buttons
              classNames="h-[60px]"
              className="py-1.5 text-center"
              name1="Submit now"
              name2="Submit now"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
