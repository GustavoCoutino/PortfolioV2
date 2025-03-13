import { Intro } from "@/components/layout/Intro";
import { RecentProjects } from "@/components/layout/RecentProjects";
import { Footer } from "@/components/layout/Footer";
export default function Home() {
  return (
    <main className="top-4 w-full h-screen">
      <div className="flex flex-col pt-20 h-full">
        <Intro />
        <RecentProjects />
        <Footer />
      </div>
    </main>
  );
}
