import React from "react";

interface ButtonsProps extends React.HTMLAttributes<HTMLDivElement> {
  name1: string;
  name2: string;
  classNames?: string;
}

function Buttons(props: ButtonsProps) {
  const {name1, name2, className, classNames} = props;
  return (
    <div className={`h-[50px] rounded-[50px] overflow-hidden ${classNames}`}>
      <div
        className={`flex flex-col hover:-translate-y-[50px] duration-200 bg-praimary px-[26px] whitespace-nowrap ${className}`}
      >
        <span className="text-md font-semibold">{name1}</span>
        <span className="text-md font-semibold">{name2}</span>
      </div>
    </div>
  );
}

export default Buttons;
