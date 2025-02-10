import { cn } from "@/lib/utils";
import {
  IconBrandNextjs,
  IconBrandReact,
  IconBrandNodejs,
  IconDatabase,
  IconServer,
  IconBrandTailwind,
  IconCloud,
  IconBrandMongodb,
  IconCode,
  IconBrandHtml5,
  IconBrandCpp,
  IconBrandGithub
} from "@tabler/icons-react";

export function SkillsSection() {
  const skills = [
    { title: "Next.js", description: "React framework for building fast web apps.", icon: <IconBrandNextjs size={40} /> },
    { title: "React.js", description: "Component-based UI library for dynamic UIs.", icon: <IconBrandReact size={40} /> },
    { title: "Node.js", description: "JavaScript runtime for scalable backend services.", icon: <IconBrandNodejs size={40} /> },
    { title: "SQL", description: "Structured query language for database management.", icon: <IconDatabase size={40} /> },
    { title: "Express.js", description: "Minimalist backend framework for Node.js.", icon: <IconServer size={40} /> },
    { title: "Tailwind CSS", description: "Utility-first CSS framework for rapid UI design.", icon: <IconBrandTailwind size={40} /> },
    { title: "Firebase", description: "Google's backend-as-a-service for apps.", icon: <IconCloud size={40} /> },
    { title: "MongoDB", description: "NoSQL database for flexible data storage.", icon: <IconBrandMongodb size={40} /> },
    { title: "JavaScript", description: "The language of the web, powering dynamic apps.", icon: <IconCode size={40} /> },
    { title: "HTML & CSS", description: "The foundation of every web page.", icon: <IconBrandHtml5 size={40} /> },
    { title: "C++", description: "High-performance programming language.", icon: <IconBrandCpp size={40} /> },
    { title: "Git & GitHub", description: "Version control and collaboration for developers.", icon: <IconBrandGithub size={40} /> },

  ];

  return (
    <div className="max-w-7xl mx-auto py-10 relative z-10">
      <h2 className="text-white text-center text-4xl sm:text-5xl font-bold tracking-wide animate-fade-up mb-10">
        My Tech Stack
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
        {skills.map((skill, index) => (
          <SkillCard key={skill.title} {...skill} index={index} />
        ))}
      </div>
    </div>
  );
}

const SkillCard = ({ title, description, icon, index }) => {
  return (
    <div
      className={cn(
        "flex flex-col lg:border-r py-10 relative group/feature dark:border-neutral-800",
        (index === 0 || index === 4) && "lg:border-l dark:border-neutral-800",
        index < 4 && "lg:border-b dark:border-neutral-800"
      )}
    >
      {index < 4 && (
        <div className="opacity-0 group-hover/feature:opacity-100 transition duration-200 absolute inset-0 h-full w-full bg-gradient-to-t from-neutral-100 dark:from-neutral-800 to-transparent pointer-events-none" />
      )}
      {index >= 4 && (
        <div className="opacity-0 group-hover/feature:opacity-100 transition duration-200 absolute inset-0 h-full w-full bg-gradient-to-b from-neutral-100 dark:from-neutral-800 to-transparent pointer-events-none" />
      )}
      <div className="mb-4 relative z-10 px-10 text-neutral-600 dark:text-neutral-400">{icon}</div>
      <div className="text-lg font-bold mb-2 relative z-10 px-10">
        <div className="absolute left-0 inset-y-0 h-6 group-hover/feature:h-8 w-1 rounded-tr-full rounded-br-full bg-neutral-300 dark:bg-neutral-700 group-hover/feature:bg-blue-500 transition-all duration-200 origin-center" />
        <span className="group-hover/feature:translate-x-2 transition duration-200 inline-block text-neutral-800 dark:text-neutral-100">
          {title}
        </span>
      </div>
      <p className="text-sm text-neutral-600 dark:text-neutral-300 max-w-xs relative z-10 px-10">{description}</p>
    </div>
  );
};
