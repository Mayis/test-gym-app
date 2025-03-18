import React, { ButtonHTMLAttributes, PropsWithChildren } from "react";

type Variant = "primary" | "secondary";

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: Variant;
}

const buttonContainerStyles: Record<Variant, string> = {
  primary: "bg-green-light shadow-[0px_0px_15px_5px_rgba(214,254,78,0.5)] hover:shadow-[0px_0px_15px_10px_rgba(214,254,78,0.5)]",
  secondary: "bg-transparent text-white hover:border-green-light"
};

function Button({ variant = "primary", children, ...props }: PropsWithChildren<Props>) {
  return (
    <button
      {...props}
      className={`cursor-pointer rounded-3xl border border-transparent px-8 py-2 transition-all duration-300 ${buttonContainerStyles[variant]}`}
    >
      <span className="font-tektur-extrabold text-md"> {children}</span>
    </button>
  );
}

export default Button;
