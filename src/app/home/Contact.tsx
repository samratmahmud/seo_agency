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
      <div className="container py-32 flex gap-[76px]">
        <div>
          <h2 className="text-9xl font-bold font-Familjen text-gray-200 mb-6">
            Want to boost your business with our SEO expertise?
          </h2>
          <p className="text-lg text-gray-200 mb-11">
            Experienced SEO experts proven strategies & innovative techniques to
            increase your website's visibility, drive organic traffic, and
            improve your digital performance and grow your online reach.
          </p>
          <div className="text-11xl font-Familjen font-bold mb-7 text-gray-200">
            Contact us directly:
          </div>
          <div className="flex flex-wrap gap-8">
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
        <div className="bg-gray-200 p-10 rounded-xl max-w-[516px] w-full">
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
