import Image from "next/image";
import profilePic from "../../public/profile2.jpg";
import { ProjectCarousel } from "@/components/ProjectCarousel";
import { CoverDemo } from "@/components/ProjectHead";
import ExpandableCardDemo from "@/components/expandable-card-demo-standard";
import { SkillsSection } from "@/components/skills";
import { FlipWords } from "@/components/ui/flip-words";
import { FloatingDockDemo } from "@/components/TopTab";
import { TechArticlesGrid } from "@/components/Articles";
import { InfiniteMovingCards } from "@/components/ui/infinite-moving-cards";
import LampDemo from "@/components/ui/lamp";




const words = ["scalable", "intuitive", "cutting-edge", "AI-driven"];

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      
      <div className="absolute top-5 right-20 z-50">
        <FloatingDockDemo />
      </div>

      <div className="relative h-screen w-full overflow-hidden bg-black flex flex-col md:flex-row items-center justify-center px-6">
        {/* Left - FlipWords Section */}
        <div className="text-center md:text-left md:w-[55%] ml-5">
          {" "}
      
          <div className="h-[40rem] flex justify-center md:justify-start items-center px-4">
            <div className="text-4xl mx-auto font-normal text-neutral-600 dark:text-neutral-400">
              Hey, I'm{" "}
              <span className="font-bold text-white">Adarsh Singh</span>. <br />
              I build <FlipWords words={words} /> solutions that make an impact.
            </div>
          </div>
        </div>

        {/* Right - Profile Picture */}
        <div className="mr-12 md:mt-0 md:w-[45%] flex justify-end">
          
          <Image
            src={profilePic}
            alt="Adarsh Singh"
            width={250}
            height={250}
            className="rounded-full border-4 border-white shadow-lg"
          />
        </div>
      </div>

      
      <CoverDemo />

      <div className="mt-10 w-full flex justify-center">
        <ProjectCarousel />
      </div>

      <br />
      <br />

      <h2 className="text-3xl md:text-4xl font-bold text-center text-white my-8">
        New in Tech
      </h2>

      <TechArticlesGrid />

      <br />
      <br />

      <h2 className="text-3xl md:text-4xl font-bold text-center text-white my-8">
        CEO's Corner
      </h2>
      <ExpandableCardDemo />

     

      <SkillsSection />


<br/>
<br/>

<LampDemo/>
    

      <InfiniteMovingCards
        items={[
          {
            name: "Quick Tech Insights",
            title: "Real-Time Apps",
            quote:
              "Why WebSockets are better than HTTP polling? WebSockets maintain a persistent connection, reducing overhead and latency for real-time interactions.",
          },
          {
            name: "One-Minute Breakdowns",
            title: "WebRTC Explained",
            quote:
              "How does WebRTC handle peer-to-peer connections? It uses STUN/TURN servers to bypass NAT restrictions and establish a direct link between users.",
          },
          {
            name: "Mistakes I Made & What I Learned",
            title: "DB Optimization",
            quote:
              "Once I forgot to index my SQL queries. The result? 10x slower API calls! Always optimize your DB queries.",
          },
          {
            name: "Underrated Tech Tips",
            title: "Next.js Performance",
            quote:
              "Did you know? In Next.js, you can prefetch links with <Link prefetch> for faster navigation.",
          },
          {
            name: "Tech Myths Busted",
            title: "AI & Developers",
            quote:
              "Myth: AI will replace all developers. Truth: AI helps automate tasks, but creativity and problem-solving still need humans.",
          },
          {
            name: "The Power of Caching",
            title: "Speed Up APIs",
            quote:
              "Use Redis or Memcached to cache database queries and reduce load times by over 50%.",
          },

          {
            name: "Edge Computing is Here",
            title: "Future of Cloud",
            quote:
              "Edge computing reduces latency by processing data closer to users instead of relying on centralized data centers.",
          },
        ]}
      />
    </>
  );
}
