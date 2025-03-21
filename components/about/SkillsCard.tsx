import React from "react";

interface SkillsCardProps {
  name: string;
  experience?: string;
}

export function SkillsCard({ name, experience }: SkillsCardProps) {
  return (
    <div className="bg-white bg-opacity-75 backdrop-blur-sm rounded-lg p-4 shadow-md transition-all duration-300 hover:shadow-lg hover:scale-105 hover:bg-opacity-90">
      <div className="flex justify-between items-center">
        <h3 className="font-semibold text-xl text-black">{name}</h3>
        {experience && <span className="text-gray-600">{experience}</span>}
      </div>
    </div>
  );
}
