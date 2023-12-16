import React, {DetailedHTMLProps} from "react";

interface TextFildProps
  extends DetailedHTMLProps<
    React.InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  > {}

function TextFild(props: TextFildProps) {
  const {type, placeholder, className} = props;
  return (
    <label>
      <input
        className={`text-md font-semibold placeholder:text-black py-1.5 w-full focus:outline-none ${className}`}
        type={type}
        placeholder={placeholder}
      />
      <hr className="border border-gray-400" />
    </label>
  );
}

export default TextFild;
