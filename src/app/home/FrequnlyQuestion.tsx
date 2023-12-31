import QuestionProps from "@/components/template/QuestionProps";
import React from "react";

const questionAnswer = [
  {
    question: "What is SEO?",
    answer:
      "SEO, or Search Engine Optimization, is a set of strategies and techniques aimed at improving a website's visibility in search engine results pages (SERPs) to increase organic (non-paid) traffic.",
  },
  {
    question: "Why is SEO important for my website?",
    answer:
      "SEO is essential because it helps your website rank higher in search results, making it more visible to potential visitors. This can lead to increased organic traffic, better brand exposure, and potential business growth.",
  },
  {
    question: "How long does it take to see results from SEO?",
    answer:
      "SEO is an ongoing process, and the time it takes to see results can vary based on factors like the competitiveness of your industry and the specific strategies you use. Generally, it can take several months to see significant improvements.",
  },
  {
    question: "How can I improve my website's load speed for SEO?",
    answer:
      "You can enhance website speed by optimizing images, using content delivery networks (CDNs), reducing unnecessary plugins, and enabling browser caching, among other techniques.",
  },
  {
    question: "How can I track the success of my SEO efforts?",
    answer:
      "You can track SEO success by using tools like Google Analytics and Google Search Console. Monitor key metrics, such as organic traffic, keyword rankings, click-through rates, and conversion rates.",
  },
];

function FrequnlyQuestion() {
  const [tab, setTab] = React.useState(0);
  return (
    <section>
      <div className="container lg:my-32 md:my-24 my-20">
        <h2 className="2xl:text-9xl xl:text-3xl md:text-13xl sm:text-14xl text-15xl -tracking-[1px] font-Familjen font-bold lg:mb-20 md:mb-[60px] mb-10 2xl:max-w-[800px] max-w-[600px] text-center m-auto">
          Increase revenue with custom SEO
        </h2>
        <div>
          {questionAnswer.map(({question, answer}, index) => (
            <div className="group">
              <QuestionProps
                key={index}
                question={question}
                answer={answer}
                isActive={tab === index}
                handelClick={() => setTab(index)}
              />
              <hr className="border border-black lg:my-[30px] my-5 group-last:hidden" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default FrequnlyQuestion;
