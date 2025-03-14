"use client";
import { projects } from "@/lib/data/projects";
import { ProjectItem } from "@/components/features/project/ProjectItem";
export function ProjectContainer() {
  return (
    <div className="pt-14 w-2/3 mx-auto grid grid-cols-2 gap-4">
      {projects.map((item) => (
        <ProjectItem key={item.name} project={item} />
      ))}
    </div>
  );
}
