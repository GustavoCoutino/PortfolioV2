"use client";
import { projects } from "@/lib/data/projects";
import { ProjectItem } from "@/components/project/ProjectItem";
export function ProjectContainer() {
  return (
    <div className="pt-14 w-2/3 mx-auto grid md:grid-cols-2 grid-cols-1 gap-4">
      {projects.map((item) => (
        <ProjectItem key={item.name} project={item} />
      ))}
    </div>
  );
}
