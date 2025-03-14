import { SkillsCard } from "@/components/features/about/SkillsCard";
export function Skills() {
  const programmingLanguages = [
    { name: "JavaScript", experience: "3 years" },
    { name: "C++", experience: "2 years" },
    { name: "Python", experience: "2 years" },
    { name: "MATLAB", experience: "1 year" },
    { name: "Swift", experience: "6 months" },
    { name: "TypeScript", experience: "1 month" },
    { name: "Golang", experience: "1 month" },
  ];

  const technologies = [
    { name: "React" },
    { name: "Next.js" },
    { name: "Tailwind CSS" },
    { name: "Node.js" },
    { name: "Express" },
    { name: "Flask" },
    { name: "PostgreSQL" },
    { name: "MySQL" },
  ];

  return (
    <div className="container mx-auto pt-20 space-y-16 px-4">
      <div>
        <h2 className="text-6xl font-bold mb-8">Programming languages</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {programmingLanguages.map((lang) => (
            <SkillsCard
              key={lang.name}
              name={lang.name}
              experience={lang.experience}
            />
          ))}
        </div>
      </div>
      <div>
        <h2 className="text-6xl font-bold mb-8">Technologies</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {technologies.map((tech) => (
            <SkillsCard
              key={tech.name}
              name={tech.name}
              experience={tech.experience}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
