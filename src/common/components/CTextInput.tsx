import React from "react";

type Props = {
  id: string;
  type: string;
  placeholder: string;
  color: "normal" | "failure";
  errorText?: string;
  className?: string;
  registerFunc?: any;
};

const CTextInput = React.forwardRef<HTMLInputElement, Props>(
  ({ className, errorText, registerFunc, ...props }, ref) => {
    const normalColor =
      "bg-gray-50 border-gray-300 text-gray-900 focus:ring-pignus-500 focus:border-pignus-500";
    const redColor =
      "bg-red-50 border-red-500 text-red-900 focus:ring-red-500 focus:border-red-500";

    const baseColor = props.color === "normal" ? normalColor : redColor;
    const baseClassName = `${baseColor} border text-sm rounded-lg  block w-full p-2.5 ${className}`;

    return (
      <>
        <input
          ref={ref}
          {...registerFunc}
          {...props}
          className={baseClassName}
        />
        {errorText && (
          <span className="font-medium text-red-500">{errorText}</span>
        )}
      </>
    );
  }
);

export default CTextInput;
