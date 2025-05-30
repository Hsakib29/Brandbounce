"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";

interface IndustryCard {
  title: string;
  icon: string;
  description: string;
  imagePath: string;
  altText: string;
  width: number;
  height: number;
}

const industries: IndustryCard[] = [
  {
    title: "Tech & Startups",
    icon: "🏢",
    description:
      "Scale your dev team with on-demand engineers, UX designers, and interim CTOs.",
    imagePath: "/images/techstartup.webp",
    altText: "Developer at a standup meeting",
    width: 400,
    height: 300,
  },
  {
    title: "E-Commerce",
    icon: "📦",
    description:
      "Flexible logistics, marketing, and customer support specialists for peak seasons.",
    imagePath: "/images/ecommerce.webp",
    altText: "Warehouse worker scanning inventory",
    width: 400,
    height: 300,
  },
  {
    title: "Healthcare",
    icon: "🏥",
    description:
      "HIPAA-compliant developers and consultants for sensitive projects.",
    imagePath: "/images/healthcare.webp",
    altText: "Doctor reviewing data on tablet",
    width: 400,
    height: 300,
  },
  {
    title: "Finance",
    icon: "💰",
    description:
      "Secure data analysts and compliance experts for financial operations.",
    imagePath: "/images/finance.webp",
    altText: "Financial analyst reviewing charts",
    width: 400,
    height: 300,
  },
  {
    title: "Nonprofits",
    icon: "🤝",
    description:
      "Grant writers and event coordinators to amplify your mission.",
    imagePath: "/images/nonprofit.webp",
    altText: "Team collaborating at a nonprofit meeting",
    width: 400,
    height: 300,
  },
  {
    title: "Education",
    icon: "📚",
    description:
      "Curriculum developers and administrative support for educational institutions.",
    imagePath: "/images/education.webp",
    altText: "Educators planning in a classroom",
    width: 400,
    height: 300,
  },
];

const IndustriesSection = () => {
  const scrollToContact = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="w-full py-16 bg-[#F5F5F5] text-[#37474F]">
      {/* Hero Header */}
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-4xl font-bold text-[#26A69A] mb-4 font-['Montserrat']">
          Industry-Tailored Expertise
        </h2>
        <p className="text-lg text-[#37474F] mb-12 font-['Source_Sans_Pro']">
          TaskBounce connects you with specialists who speak your industry's
          language.
        </p>
      </div>

      {/* Industry Grid */}
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {industries.map((industry, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300"
            >
              <div className="relative h-48 w-full">
                <Image
                  src={industry.imagePath}
                  alt={industry.altText}
                  width={industry.width}
                  height={industry.height}
                  className="object-cover w-full h-full"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  priority={index < 3}
                />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold text-[#26A69A] mb-2 font-['Montserrat']">
                  {industry.icon} {industry.title}
                </h3>
                <p className="text-[#37474F] font-['Source_Sans_Pro']">
                  {industry.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Stats Bar */}
      <div className="container mx-auto px-4 mt-12">
        <div className="flex flex-col md:flex-row justify-around items-center bg-[#26A69A] text-white py-8 rounded-lg">
          <div className="text-center mb-6 md:mb-0">
            <p className="text-3xl font-bold font-['Montserrat']">500+</p>
            <p className="font-['Source_Sans_Pro']">
              Projects delivered in 12 industries
            </p>
          </div>
          <div className="text-center mb-6 md:mb-0">
            <p className="text-3xl font-bold font-['Montserrat']">95%</p>
            <p className="font-['Source_Sans_Pro']">Client retention rate</p>
          </div>
          <div className="text-center">
            <p className="text-3xl font-bold font-['Montserrat']">48h</p>
            <p className="font-['Source_Sans_Pro']">Average match time</p>
          </div>
        </div>
      </div>

      {/* CTA Footer */}
      <div className="container mx-auto px-4 mt-12 text-center">
        <p className="text-lg text-[#37474F] mb-6 font-['Source_Sans_Pro']">
          No matter your sector, we'll match you with the right talent.
        </p>
        <Link
          href="/contact"
          className="inline-block bg-[#FF7043] text-white py-3 px-6 rounded-md hover:bg-[#26A69A] transition-colors duration-300 font-['Montserrat'] font-bold"
          onClick={scrollToContact}
        >
          Get Industry-Specific Help →
        </Link>
      </div>
    </section>
  );
};

export default IndustriesSection;
