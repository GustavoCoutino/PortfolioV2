import Link from "next/link";
import Image from "next/image";
import { projects } from "@/lib/data/projects";

export function RecentProjects() {
  return (
    <div className="pt-15 flex flex-col justify-center w-full md:w-2/3 mx-auto md:px-0 px-4">
      <h1 className="mb-6 text-center font-bold text-3xl sm:text-4xl">
        Recent projects
      </h1>
      <div className="flex gap-6 flex-col md:flex-row">
        {projects.slice(0, 2).map((item) => (
          <div
            key={item.name}
            className="rounded-lg flex flex-col bg-white/5 backdrop-blur-sm shadow-md border border-white/10 overflow-hidden"
          >
            <h1 className="text-xl font-bold bg-white text-black p-4">
              {item.name}
            </h1>
            <div className="w-full aspect-video md:h-64 md:w-96 mx-auto overflow-hidden relative">
              <Image
                src={item.img}
                alt={item.name}
                fill
                sizes="(max-width: 768px) 100vw, 384px"
                className="object-cover"
                priority
              />
            </div>
            <p className="p-4">{item.description}</p>
          </div>
        ))}
      </div>
      <h2 className="text-center pt-10 text-2xl pb-20">
        <Link href="/projects">See all projects</Link>
      </h2>
    </div>
  );
}
