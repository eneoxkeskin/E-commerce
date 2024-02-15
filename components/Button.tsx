import React from "react";

interface Props {
  color: string;
  variant: "text" | "outlined" | "contained";
  children: React.ReactNode;
  onClick?: () => void;
}

export const Button = ({ color, variant, children, onClick }: Props) => {
  const buttonClasses = `px-4 py-2 font-bold border rounded ${variant === "contained" ? `bg-orange-500 text-white` : `border-orange-500 text-orange-500`} mt-4`;

  return (
    <button onClick={onClick} className={buttonClasses}>
      {children}
    </button>
  );
};