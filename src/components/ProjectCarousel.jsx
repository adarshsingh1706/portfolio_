"use client";

import Carousel from "@/components/ui/carousel";
import Link from "next/link";

export function ProjectCarousel() {
  const slideData = [
    { title: "Parkit", button: "Explore Component", src: "/parkit.jpg", slug: "parkit" },
    { title: "Remote Patient Monitoring System", button: "Explore Component", src: "/rpms.jpg", slug: "rpms" },
    { title: "Digital Invoice Processing", button: "Explore Component", src: "/dip.jpg", slug: "dip" },
    { title: "Chat Here", button: "Explore Component", src: "/chat.jpg", slug: "chat-y" },
  ];

  return (
    <div className="relative overflow-hidden w-full h-full py-20">
      <Carousel
        slides={slideData.map((slide) => ({
          ...slide,
          button: <Link href={`/projects/${slide.slug}`}>{slide.button}</Link>,
        }))}
      />
    </div>
  );
}
