import { TypewriterEffectSmooth } from "@/components/ui/typewriter-effect";

const words = [
  {
    text: "Park ",
  },
  {
    text: "it ",
  },
  {
    text: "easy ",
  },
  {
    text: "with ",
  },
  {
    text: "Parkit.",
    className: "text-blue-500 dark:text-blue-500",
  },
];

export default function ParkItPage() {
  return (
    <>
      <div className="flex flex-col items-center justify-center h-[40rem]  ">
        <p className="text-neutral-600 dark:text-neutral-200 text-xs sm:text-base  ">
          Never let parking bother you again
        </p>
        <TypewriterEffectSmooth words={words} />
        <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 space-x-0 md:space-x-4">
          <button className="w-40 h-10 rounded-xl bg-black border dark:border-white border-transparent text-white text-sm">
            <a
              href="https://parkit-mu.vercel.app/"
              target="_blank" 
              rel="noopener noreferrer"
              className="w-40 h-10 rounded-xl bg-black border dark:border-white border-transparent text-white text-sm flex items-center justify-center"
            >
              Link
            </a>
          </button>
          <button className="w-40 h-10 rounded-xl bg-white text-black border border-black  text-sm ">
            <a
              href="https://github.com/AritraBag04/Parkit"
              target="_blank"
              rel="noopener noreferrer"
              className="w-40 h-10 rounded-xl bg-white text-black border border-black text-sm flex items-center justify-center"
            >
              Github
            </a>
          </button>
        </div>
      </div>
    </>
  );
}
