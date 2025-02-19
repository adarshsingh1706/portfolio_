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
      Parking: Always a Hassle, Never a Spot
      </p>
      <p className="font-normal text-base text-white"></p>
      <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
      Parking is a major issue due to limited availability, high costs, and increased traffic congestion. Finding a spot can be frustrating, especially in busy areas where demand exceeds supply.
      </p>
    </div>
  );
};
 
const SkeletonTwo = () => {
  return (
    <div>
      <p className="font-bold md:text-4xl text-xl text-white">
      Solving Parking, One Spot at a Time!
      </p>
      <p className="font-normal text-base text-white"></p>
      <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
      Finding a parking spot can be a nightmare, but Parkit makes it easier by providing real-time availability and seamless booking. 
      </p>
    </div>
  );
};
const SkeletonThree = () => {
  return (
    <div>
      <p className="font-bold md:text-4xl text-xl text-white">
      Smart Parking Assistant
      </p>
      <p className="font-normal text-base text-white"></p>
      <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
      Parking doesn’t have to be a frustrating experience. Parkit uses advanced technology to guide you to the nearest available spot, saving time and fuel. Whether in a busy city or a crowded mall, Parkit ensures you park smarter, faster, and stress-free.


      </p>
    </div>
  );
};
const SkeletonFour = () => {
  return (
    <div>
      <p className="font-bold md:text-4xl text-xl text-white">
      Razorpay Integration with Parkit
      </p>
      <p className="font-normal text-base text-white"></p>
      <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
      We have integrated Razorpay into our Parkit web app, allowing users to make seamless online payments based on parking hours. With multiple payment options like UPI, cards, and net banking, transactions are quick and hassle-free.
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

<div class="text-white text-3xl font-bold bg-black-900 p-6 rounded-lg text-center">
Tap on a card to explore details!
</div>

      <div className="h-screen py-20 w-full">
      <LayoutGrid cards={cards} />
    </div>
    </>
  );
}
