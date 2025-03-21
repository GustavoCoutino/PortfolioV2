import Link from "next/link";
import Image from "next/image";
import { Project } from "@/lib/types/project";
import { Skill } from "@/lib/types/project";
export function ProjectItem(props: { project: Project }) {
  const { project } = props;
  const skills: Skill[] = project.skills;
  return (
    <div
      key={project.name}
      className="rounded-lg flex flex-col bg-white/5 backdrop-blur-sm shadow-md border border-white/10 overflow-hidden"
    >
      <h1 className="text-xl font-bold bg-white text-black p-4">
        {project.name}
      </h1>
      <div className="w-full aspect-video overflow-hidden relative">
        <Image
          src={project.img}
          alt={project.name}
          fill
          sizes="(max-width: 768px) 100vw, 384px"
          className="object-cover"
          priority
        />
      </div>
      <p className="p-4 font-bold">{project.description}</p>
      {project.githubUrl && (
        <Link
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-row p-4 items-center"
          href={project.githubUrl}
        >
          <Image
            className="bg-white rounded-sm h-6 w-6 mr-2"
            src="/images/githublogo.png"
            alt="githublogo"
            width={6}
            height={6}
          />
          <p className="hover:text-blue-500 transition p-4">
            Github repository
          </p>
        </Link>
      )}
      <div>
        <h3 className="text-lg font-semibold mb-2 ps-4">Skills</h3>
        <div className="grid md:grid-cols-2 grid-cols-1 gap-2 px-4 py-4">
          {skills.map((skill) => (
            <div
              key={skill.name}
              className="flex items-center gap-2 bg-white/10 hover:bg-white/20 transition px-3 py-2 rounded-md"
            >
              <Image
                src={skill.url}
                alt={skill.name}
                className="bg-white rounded-sm h-6 w-6"
                width={6}
                height={6}
              />
              <span>{skill.name}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
