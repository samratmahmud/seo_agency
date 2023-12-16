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
        className="flex gap-3 justify-between cursor-pointer"
      >
        <h2 className="text-10xl font-bold font-Familjen">{question}</h2>
        <button>
          <img
            className={`${show ? "-rotate-180  duration-500" : "duration-500"}`}
            src="/images/icons8-arrow-up-24.png"
            alt=""
          />
        </button>
      </div>
      {show && <p className="text-lg pt-4 mr-[6%]">{answer}</p>}
    </div>
  );
}

export default QuestionProps;
