import React from "react";

interface AgentCardProps {
  name: string;
  description: string;
  category: string;
  capabilities: string[];
}


export function AgentCard({
  name,
  description,
  category,
  capabilities
}: AgentCardProps) {

  return (
    <div className="
      rounded-2xl
      border
      bg-white
      p-6
      shadow-sm
      hover:shadow-lg
      transition
    ">

      <h3 className="
        text-xl
        font-bold
        text-gray-900
      ">
        {name}
      </h3>


      <p className="
        mt-3
        text-gray-700
        leading-relaxed
      ">
        {description}
      </p>


      <span className="
        inline-block
        mt-4
        rounded-full
        bg-green-100
        px-3
        py-1
        text-sm
        font-medium
        text-green-700
      ">
        {category}
      </span>


      <ul className="
        mt-4
        space-y-2
        text-gray-700
      ">

        {capabilities.map((item)=>(
          <li key={item}>
            ✓ {item}
          </li>
        ))}

      </ul>

    </div>
  );
}