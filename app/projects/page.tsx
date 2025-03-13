import { ProjectContainer } from "@/components/features/project/ProjectContainer";
export default function Page() {
  return (
    <main className="w-full h-screen pt-4">
      <div className="flex flex-col pt-20 h-full">
        <h1 className="text-center text-6xl sm:text-8xl font-bold mb-4">
          Projects
        </h1>
        <ProjectContainer />
      </div>
    </main>
  );
}
