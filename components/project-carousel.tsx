"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import clsx from "clsx";

interface Project {
  title: string;
  category: string;
  image: string;
  textColor?: string; // Optional: allows per-project text color
}

interface ProjectCarouselProps {
  projects: Project[];
}

const ProjectCarousel = ({ projects }: ProjectCarouselProps) => {
  const [activeItem, setActiveItem] = useState(0);

  const handleItemChange = (index: number) => {
    setActiveItem(index);
  };

  // Auto-rotate every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveItem((current) => (current + 1) % projects.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [projects.length]);

  const getTransformClass = (index: number) => {
    const diff = (index - activeItem + projects.length) % projects.length;

    if (diff === 0) return "translate-x-0 scale-100 opacity-100 z-20";
    if (diff === 1 || diff === -projects.length + 1)
      return "translate-x-[40%] scale-90 opacity-40 z-10";
    if (diff === projects.length - 1)
      return "-translate-x-[40%] scale-90 opacity-40 z-10";
    return "hidden";
  };

  return (
    <div className="project-carousel-container w-full h-[400px] flex items-center justify-center relative overflow-hidden">
      {projects.map((project, index) => (
        <label
          key={index}
          className={clsx(
            "project-carousel-card absolute transition-all duration-500 ease-in-out w-[60%] h-full cursor-pointer",
            getTransformClass(index),
          )}
          htmlFor={`item-${index + 1}`}
        >
          <div className="relative w-full h-full rounded-xl overflow-hidden shadow-lg">
            <Image
              src={project.image || "/placeholder.svg"}
              alt={project.title}
              fill
              className="object-cover rounded-xl"
            />
          </div>
        </label>
      ))}

      {/* Radio inputs to allow manual interaction */}
      <div className="absolute bottom-4 flex gap-2 z-30">
        {projects.map((_, index) => (
          <input
            key={index}
            type="radio"
            name="slider"
            id={`item-${index + 1}`}
            checked={activeItem === index}
            onChange={() => handleItemChange(index)}
            className="hidden"
          />
        ))}
      </div>

      {/* Info section */}
      <div
        className="absolute bottom-16 text-center z-30 w-full"
        style={{ color: projects[activeItem]?.textColor || "#fff" }}
      >
        <div className="text-xl font-semibold">
          {projects[activeItem]?.title}
        </div>
        <div className="text-sm opacity-80">
          {projects[activeItem]?.category}
        </div>
      </div>
    </div>
  );
};

export default ProjectCarousel;
