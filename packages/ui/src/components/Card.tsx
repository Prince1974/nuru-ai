import React from "react";

interface CardProps {
  children: React.ReactNode;
  className?: string;
}

export function Card({ children, className = "" }: CardProps) {
  return (
    <div
      className={`
        rounded-2xl
        border
        border-gray-200
        bg-white
        text-gray-900
        p-6
        shadow-sm
        transition
        hover:shadow-md
        ${className}
      `}
    >
      {children}
    </div>
  );
}
