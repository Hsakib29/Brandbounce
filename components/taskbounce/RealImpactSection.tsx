"use client";

import Image from "next/image";

export default function RealImpactSection() {
  return (
    <section className="relative w-full h-auto min-h-[600px] bg-slate-900 text-white overflow-hidden">
      {/* Background image with gradient overlay */}
      <div className="absolute inset-0 -z-10">
        <Image
          src="https://images.pexels.com/photos/3184297/pexels-photo-3184297.jpeg?auto=compress&cs=tinysrgb&w=1470&h=980"
          alt="Team collaborating on a project"
          fill
          className="object-cover opacity-80"
          quality={80}
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#26A69A]/90 via-[#26A69A]/70 to-transparent" />
      </div>

      {/* Content container */}
      <div className="relative max-w-7xl mx-auto px-6 py-24 sm:px-12">
        {/* Heading */}
        <h2 className="text-4xl sm:text-5xl font-bold font-montserrat mb-6">
          Real Work, Real Impact
        </h2>

        {/* Description */}
        <p className="text-lg sm:text-xl font-sourcesans max-w-2xl mb-10">
          Behind every delegated task is a dedicated professional. At TaskBounce,
          we power growth for founders, creatives, and teams — one task at a time.
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
            <p className="text-base mt-1 font-sourcesans">Client Satisfaction</p>
          </div>
          <div>
            <h3 className="text-3xl font-bold text-orange-400">24 hr</h3>
            <p className="text-base mt-1 font-sourcesans">Avg Onboarding Time</p>
          </div>
          <div>
            <h3 className="text-3xl font-bold text-orange-400">£0.10</h3>
            <p className="text-base mt-1 font-sourcesans">Per Entry Lead Lists</p>
          </div>
        </div>
      </div>
    </section>
  );
}