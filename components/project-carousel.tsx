'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';

const projects = [
  {
    id: 1,
    name: 'Bunker',
    type: 'Branding',
    image:
      'https://images.unsplash.com/photo-1530651788726-1dbf58eeef1f?auto=format&fit=crop&w=882&q=80',
  },
  {
    id: 2,
    name: 'Words Remain',
    type: 'Web Design',
    image:
      'https://images.unsplash.com/photo-1559386484-97dfc0e15539?auto=format&fit=crop&w=1234&q=80',
  },
  {
    id: 3,
    name: 'Falling Out',
    type: 'UI/UX',
    image:
      'https://images.unsplash.com/photo-1533461502717-83546f485d24?auto=format&fit=crop&w=900&q=60',
  },
];

export default function ProjectCarousel() {
  const [active, setActive] = useState(0);

  const handleClick = (index: number) => {
    setActive(index);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setActive((prev) => (prev + 1) % projects.length);
    }, 4000); // Change every 4 seconds
    return () => clearInterval(interval);
  }, []);

  const getPositionClass = (index: number) => {
    if (index === active) return 'z-10 scale-100 opacity-100';
    if (index === (active + 1) % projects.length)
      return 'translate-x-[40%] scale-90 opacity-50 z-0';
    if (index === (active + projects.length - 1) % projects.length)
      return '-translate-x-[40%] scale-90 opacity-50 z-0';
    return 'hidden';
  };

  return (
    <div className="w-full max-w-[800px] h-[600px] flex flex-col items-center justify-center">
      <div className="relative w-full h-[80%] mb-6">
        {projects.map((project, index) => (
          <div
            key={project.id}
            onClick={() => handleClick(index)}
            className={`absolute top-0 left-0 right-0 mx-auto w-[60%] h-full transition-all duration-500 ease-in-out transform cursor-pointer ${getPositionClass(
              index
            )}`}
          >
            <Image
              src={project.image}
              alt={project.name}
              fill
              className="rounded-xl object-cover shadow-md"
            />
          </div>
        ))}
      </div>
      <div className="bg-white rounded-lg px-4 py-3 shadow-md w-full max-w-xs text-center">
        <h2 className="text-xl font-semibold text-gray-800">{projects[active].name}</h2>
        <p className="text-sm text-gray-500">{projects[active].type}</p>
      </div>
    </div>
  );
}
