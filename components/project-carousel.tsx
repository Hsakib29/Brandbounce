"use client"

import { useState, useEffect } from "react"
import Image from "next/image"

interface Project {
  title: string
  category: string
  image: string
}

interface ProjectCarouselProps {
  projects: Project[]
}

const ProjectCarousel = ({ projects }: ProjectCarouselProps) => {
  const [activeItem, setActiveItem] = useState(0)

  const handleItemChange = (index: number) => {
    setActiveItem(index)
  }

  // Auto-rotate carousel every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveItem((current) => (current + 1) % projects.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [projects.length])

  return (
    <div className="project-carousel-container">
      <div className="project-carousel-inputs">
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

      <div className="project-carousel-cards">
        {projects.map((project, index) => (
          <label
            key={index}
            className="project-carousel-card"
            htmlFor={`item-${index + 1}`}
            id={`project-${index + 1}`}
          >
            <div className="relative w-full h-full rounded-xl overflow-hidden">
              <Image src={project.image || "/placeholder.svg"} alt={project.title} fill className="object-cover" />
            </div>
          </label>
        ))}
      </div>

      <div className="project-carousel-info">
        <div className="project-carousel-upper-part">
          <div className="project-carousel-info-area" id="project-info-area">
            {projects.map((project, index) => (
              <label
                key={index}
                className="project-carousel-project-info"
                id={`project-info-${index + 1}`}
                style={{ opacity: activeItem === index ? 1 : 0 }}
              >
                <div className="project-carousel-title dark:text-white">{project.title}</div>
                <div className="project-carousel-sub-line">
                  <div className="project-carousel-subtitle">{project.category}</div>
                </div>
              </label>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProjectCarousel
