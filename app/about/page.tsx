import { Description } from "@/components/about/Description";
import { Skills } from "@/components/about/Skills";

export default function Page() {
  return (
    <main className="w-full h-screen pt-4">
      <div className="flex flex-col pt-20 h-full">
        <h1 className="text-center text-6xl sm:text-8xl font-bold mb-4">
          About
        </h1>
        <Description />
        <Skills />
      </div>
    </main>
  );
}
