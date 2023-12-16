import React from "react";

interface itemsPrpos {
  title: string;
  contain: string;
  index: number;
  isActived?: boolean;
  handelClick?: () => void;
}

function StepItems(props: itemsPrpos) {
  const {title, contain, index, isActived, handelClick} = props;

  return (
    <div onClick={handelClick} className="flex gap-5">
      <div>
        <div
          className={`text-xl font-semibold p-1 flex justify-center items-center w-12 h-12 rounded-full -mt-2 ${
            isActived
              ? "bg-yellow-300 border border-yellow-300"
              : "border border-black"
          }`}
        >
          {index}
        </div>
      </div>
      <div>
        <h3 className="text-lg font-semibold mb-4 cursor-pointer">{title}</h3>
        {isActived && <p className="text-lg">{contain}</p>}
      </div>
    </div>
  );
}

export default StepItems;
