"use client";
import { TypewriterEffectSmooth } from "@/components/ui/typewriter-effect";
import React, { useState, useRef, useEffect } from "react";
import { LayoutGrid } from "@/components/ui/layout-grid";

/* for hero section */
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


/* for layout grid */
const SkeletonOne = () => {
  return (
    <div>
      <p className="font-bold md:text-4xl text-xl text-white">
        House in the woods
      </p>
      <p className="font-normal text-base text-white"></p>
      <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
        A serene and tranquil retreat, this house in the woods offers a peaceful
        escape from the hustle and bustle of city life.
      </p>
    </div>
  );
};
 
const SkeletonTwo = () => {
  return (
    <div>
      <p className="font-bold md:text-4xl text-xl text-white">
        House above the clouds
      </p>
      <p className="font-normal text-base text-white"></p>
      <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
        Perched high above the world, this house offers breathtaking views and a
        unique living experience. It&apos;s a place where the sky meets home,
        and tranquility is a way of life.
      </p>
    </div>
  );
};
const SkeletonThree = () => {
  return (
    <div>
      <p className="font-bold md:text-4xl text-xl text-white">
        Greens all over
      </p>
      <p className="font-normal text-base text-white"></p>
      <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
        A house surrounded by greenery and nature&apos;s beauty. It&apos;s the
        perfect place to relax, unwind, and enjoy life.
      </p>
    </div>
  );
};
const SkeletonFour = () => {
  return (
    <div>
      <p className="font-bold md:text-4xl text-xl text-white">
        Rivers are serene
      </p>
      <p className="font-normal text-base text-white"></p>
      <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
        A house by the river is a place of peace and tranquility. It&apos;s the
        perfect place to relax, unwind, and enjoy life.
      </p>
    </div>
  );
};
 
const cards = [
  {
    id: 1,
    content: <SkeletonOne />,
    className: "md:col-span-2 h-[280px]",
    thumbnail:
      "/layout1.jpg",
  },
  {
    id: 2,
    content: <SkeletonTwo />,
    className: "col-span-1 h-[280px]",
    thumbnail:
      "/layout2.jpg",
  },
  {
    id: 3,
    content: <SkeletonThree />,
    className: "col-span-1 h-[280px]",
    thumbnail:
      "/layout3.jpg",
  },
  {
    id: 4,
    content: <SkeletonFour />,
    className: "md:col-span-2 h-[280px]",
    thumbnail:
      "/layout4.jpg",
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

{/* Layout Grid */}

<p className="text-center text-lg font-medium text-neutral-600 dark:text-neutral-200 mb-6">
  Click on a card to explore more details!
</p>

      <div className="h-screen py-20 w-full">
      <LayoutGrid cards={cards} />
    </div>
    </>
  );
}
