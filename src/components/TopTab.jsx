

import React from "react";
import { FloatingDock } from "@/components/ui/floating-dock";
import {
  IconBrandGithub,
  IconBrandX,
  IconBrandLinkedin,
  IconBrandInstagram,
  IconPhoneCall,
} from "@tabler/icons-react";
import Image from "next/image";

export function FloatingDockDemo() {
  const links = [
    {
      title: "GitHub",
      icon: (
        <IconBrandGithub className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "https://github.com/adarshsingh1706",
    },
    {
      title: "X (Twitter)",
      icon: (
        <IconBrandX className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "https://x.com/Adarsh__tech",
    },
    {
      title: "LeetCode",
      icon: (
        <Image
          src="https://upload.wikimedia.org/wikipedia/commons/1/19/LeetCode_logo_black.png"
          width={20}
          height={20}
          alt="LeetCode Logo"
        />
      ),
      href: "https://leetcode.com/u/Adarsh0617/",
    },
    {
      title: "LinkedIn",
      icon: (
        <IconBrandLinkedin className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "https://www.linkedin.com/in/adarsh-singh-742ab9248/",
    },
    {
      title: "Instagram",
      icon: (
        <IconBrandInstagram className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "https://instagram.com/your-instagram",
    },
    {
      title: "Phone",
      icon: (
        <IconPhoneCall className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "+91 8817847399", // Replace with your phone number
    },
  ];

  return (
    <FloatingDock 
  className="w-full" // Ensure it takes full width
  mobileClassName="translate-y-20" 
  items={links} 
/>

  );
}
