"use client";

import type React from "react";

import { cn } from "@/lib/utils";
import { useRef } from "react";

// Create a simple Marquee component since we don't have access to the registry
const Marquee = ({
  children,
  className,
  reverse = false,
  pauseOnHover = false,
}: {
  children: React.ReactNode;
  className?: string;
  reverse?: boolean;
  pauseOnHover?: boolean;
}) => {
  return (
    <div
      className={cn(
        "flex w-full overflow-hidden [--duration:20s]",
        pauseOnHover && "hover:[animation-play-state:paused]",
        className,
      )}
    >
      <div
        className={cn(
          "flex animate-marquee gap-4 py-4",
          reverse && "animate-marquee-reverse",
        )}
      >
        {children}
        {children}
      </div>
    </div>
  );
};

// Convert existing testimonials to the new format
const reviews = [
  {
    name: "Sarah Johnson",
    username: "Bloom Boutique",
    body: "BrandBounce transformed our small boutique's image completely! Their logo design perfectly captured our aesthetic, and their social media strategy has brought in so many new customers. Worth every penny!",
    img: "/images/profileicon1.webp?height=100&width=100",
  },
  {
    name: "Michael Chen",
    username: "TechStart",
    body: "As a tech startup, we needed branding that felt innovative but approachable. The team at BrandBounce delivered exactly that! Their process was smooth, and they really took the time to understand our vision.",
    img: "/images/profileicon2.webp?height=100&width=100",
  },
  {
    name: "Emma Williams",
    username: "Sunrise Cafe",
    body: "Our cafe needed a fresh look, and BrandBounce delivered beyond our expectations. The new branding has customers taking photos of our coffee cups for Instagram! Their creativity and attention to detail is outstanding.",
    img: "/images/profileicon3.webp?height=100&width=100",
  },
  {
    name: "James Taylor",
    username: "Fitness First",
    body: "The promo video BrandBounce created for our gym has been our most successful marketing asset to date. They captured the energy of our brand perfectly, and the editing quality was professional and dynamic.",
    img: "/images/profileicon4.webp?height=100&width=100",
  },
  {
    name: "Lisa Wong",
    username: "Urban Eats",
    body: "The menu design BrandBounce created for our restaurant has received so many compliments from customers. They perfectly captured our urban vibe while keeping the design clean and easy to read.",
    img: "/images/profileicon5.webp?height=100&width=100",
  },
  {
    name: "Alex Rodriguez",
    username: "AR Photography",
    body: "Working with BrandBounce was a game-changer for my photography business. Their branding package gave me a cohesive look across all platforms that truly represents my style.",
    img: "/images/profileicon6.webp?height=100&width=100",
  },
];

const firstRow = reviews.slice(0, reviews.length / 2);
const secondRow = reviews.slice(reviews.length / 2);

const ReviewCard = ({
  img,
  name,
  username,
  body,
}: {
  img: string;
  name: string;
  username: string;
  body: string;
}) => {
  return (
    <figure
      className={cn(
        "relative h-full w-64 cursor-pointer overflow-hidden rounded-xl border p-4",
        // light styles
        "border-gray-950/[.1] bg-gray-950/[.01] hover:bg-gray-950/[.05]",
        // dark styles
        "dark:border-gray-50/[.1] dark:bg-gray-50/[.10] dark:hover:bg-gray-50/[.15]",
      )}
    >
      <div className="flex flex-row items-center gap-2">
        <img
          className="rounded-full"
          width="32"
          height="32"
          alt=""
          src={img || "/placeholder.svg"}
        />
        <div className="flex flex-col">
          <figcaption className="text-sm font-medium dark:text-white">
            {name}
          </figcaption>
          <p className="text-xs font-medium text-brand-blue">{username}</p>
        </div>
      </div>
      <blockquote className="mt-2 text-sm dark:text-gray-300">
        {body}
      </blockquote>
    </figure>
  );
};

const Testimonials = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <section className="py-20 bg-gray-50 dark:bg-gray-900 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-8 md:mb-0 text-left">
            <div className="inline-block">
              <div className="group rounded-full border border-black/5 dark:border-white/5 bg-white dark:bg-gray-800 text-base transition-all ease-in hover:cursor-pointer hover:bg-gray-50 dark:hover:bg-gray-700">
                <div className="relative overflow-hidden rounded-full">
                  <h2 className="inline-flex items-center justify-center px-4 py-1 text-sm uppercase tracking-wider text-brand-blue transition ease-out">
                    Testimonials
                  </h2>
                  <div className="absolute inset-0 z-0">
                    <div className="animate-[shine_3s_ease-in-out_infinite] absolute -inset-[100%] h-[500%] w-[50%] -rotate-45 bg-gradient-to-r from-transparent via-white/20 to-transparent rounded-full" />
                  </div>
                </div>
              </div>
            </div>
            <h3 className="text-3xl md:text-4xl font-bold text-[#0a2540] dark:text-white">
              What Our Clients Say
            </h3>
            <p className="text-gray-600 dark:text-gray-300 mt-4 max-w-md">
              Don't just take our word for it. Here's what our clients have to
              say about working with BrandBounce.
            </p>
          </div>

          <div className="md:w-1/2">
            <div
              className="relative flex w-full flex-col items-center justify-center overflow-hidden"
              ref={containerRef}
            >
              <Marquee pauseOnHover className="[--duration:20s]">
                {firstRow.map((review) => (
                  <ReviewCard key={review.username} {...review} />
                ))}
              </Marquee>
              <Marquee reverse pauseOnHover className="[--duration:20s]">
                {secondRow.map((review) => (
                  <ReviewCard key={review.username} {...review} />
                ))}
              </Marquee>
              <div className="pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r from-gray-50 dark:from-gray-900"></div>
              <div className="pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l from-gray-50 dark:from-gray-900"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
