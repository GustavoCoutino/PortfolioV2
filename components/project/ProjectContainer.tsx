"use client";
import { projects } from "@/lib/data/projects";
import { ProjectItem } from "@/components/project/ProjectItem";
export function ProjectContainer() {
  return (
    <div className="pt-14 container mx-auto px-4 w-2/3">
      <div className="grid md:grid-cols-2 grid-cols-1 gap-6">
        {projects.map((item) => (
          <ProjectItem key={item.name} project={item} />
        ))}
      </div>
    </div>
  );
}
