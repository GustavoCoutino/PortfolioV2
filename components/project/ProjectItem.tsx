"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Project } from "@/lib/types/project";
import { Skill } from "@/lib/types/project";
export function ProjectItem(props: { project: Project }) {
  const { project } = props;
  const skills: Skill[] = project.skills;
  const [openSkills, setOpenSkills] = useState<boolean>(false);

  const handleSkills = () => {
    setOpenSkills(!openSkills);
  };
  return (
    <div
      key={project.name}
      className="rounded-lg flex flex-col bg-white/5 backdrop-blur-sm shadow-md border border-white/10 overflow-hidden"
    >
      <h1 className="text-xl font-bold bg-white text-black p-4">
        {project.name}
      </h1>
      <div className="w-full aspect-video overflow-hidden relative group">
        <Image
          src={project.img}
          alt={project.name}
          fill
          sizes="(max-width: 768px) 100vw, 384px"
          className="object-cover transition-all duration-300 group-hover:scale-105 group-hover:brightness-75"
          priority
        />
        {project.githubUrl && (
          <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <Link
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-opacity-70 p-4 rounded-full transform transition-transform duration-300 hover:scale-110"
            >
              <Image
                src="/images/githublogo.png"
                alt="View on GitHub"
                width={40}
                height={40}
                className="w-10 h-10"
              />
            </Link>
          </div>
        )}
      </div>
      <p className="p-4 font-bold">{project.description}</p>
      <section className="mt-2">
        <div className="flex justify-between items-center px-4 py-2 border-b border-white/20">
          <h3 className="text-lg font-semibold">Skills</h3>
          <button
            onClick={handleSkills}
            className="w-6 h-6 flex items-center justify-center rounded-full hover:bg-white/10 transition-colors"
          >
            <span
              className={`text-xl transition-transform duration-300 ${
                openSkills ? "rotate-45" : ""
              }`}
            >
              +
            </span>
          </button>
        </div>
        <div
          className={`grid md:grid-cols-2 grid-cols-1 gap-2 px-4 overflow-hidden transition-all duration-300 ease-in-out ${
            openSkills ? "max-h-96 opacity-100 py-4" : "max-h-0 opacity-0 py-0"
          }`}
        >
          {skills.map((skill) => (
            <div
              key={skill.name}
              className="flex items-center gap-2 bg-white/10 hover:bg-white/20 transition px-3 py-2 rounded-md"
            >
              <Image
                src={skill.url}
                alt={skill.name}
                className="rounded-sm h-6 w-6"
                width={6}
                height={6}
              />
              <span>{skill.name}</span>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
