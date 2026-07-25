import React from "react";

interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
}

export function Button({
  children,
  onClick,
}: ButtonProps) {
  return (
    <button
      onClick={onClick}
      className="
        px-6
        py-3
        rounded-xl
        bg-black
        text-white
        font-semibold
        hover:opacity-80
        transition
      "
    >
      {children}
    </button>
  );
}
