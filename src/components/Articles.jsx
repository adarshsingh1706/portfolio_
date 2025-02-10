"use client";
import { Box, Lock, Search, Settings, Sparkles } from "lucide-react";
import { GlowingEffect } from "@/components/ui/glowing-effect";
import { useRouter } from "next/navigation";

export function TechArticlesGrid() {
  const articles = [
    {
      id: 1,
      area: "md:[grid-area:1/1/2/7] xl:[grid-area:1/1/2/5]",
      icon: <Box className="h-4 w-4 text-black dark:text-neutral-400" />,
      title: "Latest Trends in AI",
      description: "Explore the newest developments in AI and Machine Learning.",
      link: "/articles/ai-trends",
    },
    {
      id: 2,
      area: "md:[grid-area:1/7/2/13] xl:[grid-area:2/1/3/5]",
      icon: <Settings className="h-4 w-4 text-black dark:text-neutral-400" />,
      title: "Building Scalable Web Apps",
      description: "How to architect scalable and efficient web applications.",
      link: "/articles/scalable-web-apps",
    },
    {
      id: 3,
      area: "md:[grid-area:2/1/3/7] xl:[grid-area:1/5/3/8]",
      icon: <Lock className="h-4 w-4 text-black dark:text-neutral-400" />,
      title: "Cybersecurity Best Practices",
      description: "Stay safe online with these top cybersecurity tips.",
      link: "/articles/cybersecurity-tips",
    },
    {
      id: 4,
      area: "md:[grid-area:2/7/3/13] xl:[grid-area:1/8/2/13]",
      icon: <Sparkles className="h-4 w-4 text-black dark:text-neutral-400" />,
      title: "Future of Blockchain",
      description: "The potential of blockchain beyond cryptocurrencies.",
      link: "/articles/blockchain-future",
    },
    {
      id: 5,
      area: "md:[grid-area:3/1/4/13] xl:[grid-area:2/8/3/13]",
      icon: <Search className="h-4 w-4 text-black dark:text-neutral-400" />,
      title: "The Rise of Quantum Computing",
      description: "How quantum computing will change the tech landscape.",
      link: "/articles/quantum-computing",
    },
  ];

  return (
    <ul className="mx-[10%] grid grid-cols-1 grid-rows-none gap-4 md:grid-cols-12 md:grid-rows-3 lg:gap-4 xl:max-h-[34rem] xl:grid-rows-2">

      {articles.map((article) => (
        <GridItem key={article.id} {...article} />
      ))}
    </ul>
  );
}

const GridItem = ({ area, icon, title, description, link }) => {
  const router = useRouter();

  return (
    <li className={`min-h-[14rem] list-none ${area}`}>
      <div
        className="relative h-full rounded-2.5xl border p-2 md:rounded-3xl md:p-3 cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-800"
        onClick={() => router.push(link)}
      >
        <GlowingEffect spread={40} glow={true} disabled={false} proximity={64} inactiveZone={0.01} />
        <div className="relative flex h-full flex-col justify-between gap-6 overflow-hidden rounded-xl border-0.75 p-6 dark:shadow-[0px_0px_27px_0px_#2D2D2D] md:p-6">
          <div className="relative flex flex-1 flex-col justify-between gap-3">
            <div className="w-fit rounded-lg border border-gray-600 p-2">{icon}</div>
            <div className="space-y-3">
              <h3 className="pt-0.5 text-xl font-semibold text-black dark:text-white">{title}</h3>
              <h2 className="text-sm text-black dark:text-neutral-400">{description}</h2>
            </div>
          </div>
        </div>
      </div>
    </li>
  );
};
