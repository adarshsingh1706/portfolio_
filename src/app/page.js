import Image from "next/image";
import profilePic from "../../public/profile2.jpg"; // Ensure the image is inside the `public` folder
import { ProjectCarousel } from "@/components/ProjectCarousel";
import { CoverDemo } from "@/components/ProjectHead";
import ExpandableCardDemo from "@/components/expandable-card-demo-standard";
import { SkillsSection } from "@/components/skills";
import { FlipWords } from "@/components/ui/flip-words";
import { FloatingDockDemo } from "@/components/TopTab";
import { TechArticlesGrid } from "@/components/Articles";





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
  <div className="text-center md:text-left md:w-[55%] ml-5"> {/* Increased width & margin */}
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
 {/* Adjusted width & alignment */}
    <Image
      src={profilePic}
      alt="Adarsh Singh"
      width={250}
      height={250}
      className="rounded-full border-4 border-white shadow-lg"
    />
  </div>
</div>


      {/* Other Sections */}
      <CoverDemo />

      <div className="mt-10 w-full flex justify-center">
        <ProjectCarousel />
      </div>

      <ExpandableCardDemo />

<br/>
<br/>



<h2 className="text-3xl md:text-4xl font-bold text-center text-white my-8">
  New in Tech
</h2>



      <TechArticlesGrid />



      <br />
      <br />

      

      <SkillsSection />
    </>
  );
}
