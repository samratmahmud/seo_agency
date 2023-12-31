import React from "react";

interface questionAnswer {
  question: string;
  answer: string;
  isActive: boolean;
  handelClick?: () => void;
}

function QuestionProps(props: questionAnswer) {
  const {question, answer, isActive = false} = props;
  const [show, setShow] = React.useState(isActive);
  const handelClick = () => {
    setShow((show) => !show);
  };

  return (
    <div>
      <div
        onClick={handelClick}
        className="flex gap-1 justify-between cursor-pointer"
      >
        <h2 className="lg:text-10xl md:text-11xl text-xl font-bold font-Familjen">
          {question}
        </h2>
        <div className="flex-shrink-0">
          <button>
            <img
              className={`pt-2 ${
                show ? "-rotate-180  duration-500" : "duration-500"
              }`}
              src="/images/icons8-arrow-up-24.png"
              alt=""
            />
          </button>
        </div>
      </div>
      {show && <p className="lg:text-lg text-base pt-4 mr-[6%]">{answer}</p>}
    </div>
  );
}

export default QuestionProps;
