"use client";
import { projects } from "@/lib/data/projects";
import { ProjectItem } from "@/components/features/project/ProjectItem";
export function ProjectContainer() {
  return (
    <div className="w-screen margin-auto">
      {projects.map((item) => (
        <ProjectItem key={item.name} project={item} />
      ))}
    </div>
  );
}
