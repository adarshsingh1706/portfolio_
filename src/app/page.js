import BackgroundBeamsWithCollision from "@/components/BackgroundEffect";
import Image from "next/image";
import profilePic from "../../public/profile2.jpg"; // Ensure the image is inside the `public` folder
import {ProjectCarousel} from "@/components/ProjectCarousel";
import { CoverDemo } from "@/components/ProjectHead";

export default function Home() {
  return (
    <>
    <div className="relative h-screen w-full overflow-hidden">
      <BackgroundBeamsWithCollision />
      <div className="absolute inset-0 flex flex-col md:flex-row items-center justify-center text-white px-6">
        
        {/* Left - Text Content */}
        <div className="text-center md:text-left md:w-1/2">
          <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-indigo-500 via-purple-600 to-pink-500 text-transparent bg-clip-text pb-3">
            Adarsh Singh
          </h1>
          <p className="mt-4 text-lg md:text-xl text-gray-300 opacity-80">
            Building cool stuff with Next.js, Aceternity UI & Tailwind CSS
          </p>
        </div>

        {/* Right - Profile Picture */}
        <div className="mt-8 md:mt-0 md:w-1/2 flex justify-center">
          <Image 
            src={profilePic} 
            alt="Adarsh Singh" 
            width={250} // Adjust size as needed
            height={250} 
            className="rounded-full border-4 border-white-500 shadow-lg"
          />
        </div>
        
      </div>
    </div>

<CoverDemo/>

    
    <div className="mt-10 w-full flex justify-center">
          <ProjectCarousel />
        </div>
    </>
  );
}
