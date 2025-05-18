"use client";

import { FC, useEffect, useState } from "react";

const slideImages = [
  "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40",
  "https://images.unsplash.com/photo-1516321318423-f06f85e504b3",
  "https://images.unsplash.com/photo-1522071820081-009f0129c71c",
];

const RealImpactSection: FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slideImages.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative w-full h-auto min-h-[600px] text-white overflow-hidden bg-dark-slate-gray">
      {/* Background Slideshow with Overlay */}
      <div className="absolute inset-0 z-0">
        {slideImages.map((url, index) => (
          <div
            key={index}
            className={`slide absolute inset-0 bg-cover bg-center transition-opacity duration-1000 ${
              index === currentSlide ? "opacity-100" : "opacity-0"
            }`}
            style={{ backgroundImage: `url('${url}')` }}
          />
        ))}
        {/* Semi-transparent overlay to improve contrast */}
        <div className="absolute inset-0 bg-black/60 z-10" />
      </div>

      {/* Content container */}
      <div className="relative max-w-7xl mx-auto px-6 py-24 sm:px-12">
        {/* Heading */}
        <h2 className="text-4xl sm:text-5xl font-bold font-montserrat mb-6">
          Real Work, Real Impact
        </h2>

        {/* Description */}
        <p className="text-lg sm:text-xl font-sourcesans max-w-2xl mb-10">
          Behind every delegated task is a dedicated professional. At
          TaskBounce, we power growth for founders, creatives, and teams — one
          task at a time.
        </p>

        {/* Testimonial blockquote */}
        <blockquote className="text-xl italic border-l-4 border-orange-500 pl-4 mb-10 font-sourcesans">
          “I went from inbox chaos to inbox zero in 48 hours. TaskBounce is the
          secret weapon I didn’t know I needed.”
          <br />
          <span className="text-sm not-italic font-semibold block mt-2">
            — Hannah R., UK Startup Founder
          </span>
        </blockquote>

        {/* Stats grid */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-center font-montserrat">
          <div>
            <h3 className="text-3xl font-bold text-orange-400">+97%</h3>
            <p className="text-base mt-1 font-sourcesans">
              Client Satisfaction
            </p>
          </div>
          <div>
            <h3 className="text-3xl font-bold text-orange-400">24 hr</h3>
            <p className="text-base mt-1 font-sourcesans">
              Avg Onboarding Time
            </p>
          </div>
          <div>
            <h3 className="text-3xl font-bold text-orange-400">£0.10</h3>
            <p className="text-base mt-1 font-sourcesans">
              Per Entry Lead Lists
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RealImpactSection;
