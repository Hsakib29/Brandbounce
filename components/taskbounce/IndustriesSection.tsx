"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";

// Define types for industry card data
interface IndustryCard {
  title: string;
  icon: string;
  description: string;
  imageUrl: string;
  altText: string;
}

const industries: IndustryCard[] = [
  {
    title: "Tech & Startups",
    icon: "🏢",
    description:
      "Scale your dev team with on-demand engineers, UX designers, and interim CTOs.",
    imageUrl: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3",
    altText: "Developer at a standup meeting",
  },
  {
    title: "E-Commerce",
    icon: "📦",
    description:
      "Flexible logistics, marketing, and customer support specialists for peak seasons.",
    imageUrl:
      "https://images.pexels.com/photos/4480505/pexels-photo-4480505.jpeg",
    altText: "Warehouse worker scanning inventory",
  },
  {
    title: "Healthcare",
    icon: "🏥",
    description:
      "HIPAA-compliant developers and consultants for sensitive projects.",
    imageUrl: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d",
    altText: "Doctor reviewing data on tablet",
  },
  // Add more industries as needed
  {
    title: "Finance",
    icon: "💰",
    description:
      "Secure data analysts and compliance experts for financial operations.",
    imageUrl: "https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f",
    altText: "Financial analyst reviewing charts",
  },
  {
    title: "Nonprofits",
    icon: "🤝",
    description:
      "Grant writers and event coordinators to amplify your mission.",
    imageUrl:
      "https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg",
    altText: "Team collaborating at a nonprofit meeting",
  },
  {
    title: "Education",
    icon: "📚",
    description:
      "Curriculum developers and administrative support for educational institutions.",
    imageUrl: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c",
    altText: "Educators planning in a classroom",
  },
];

const IndustriesSection: React.FC = () => {
  const scrollToContact = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const contactSection = document.getElementById("contact");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="w-full py-16 bg-[#F5F5F5] text-[#37474F]">
      {/* Hero Header */}
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-4xl font-bold text-[#26A69A] mb-4 font-['Montserrat']">
          Industry-Tailored Expertise
        </h2>
        <p className="text-lg text-[#37474F] mb-12 font-['Source_Sans_Pro']">
          TaskBounce connects you with specialists who speak your industry’s
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
              <div className="relative h-48">
                <Image
                  src={industry.imageUrl}
                  alt={industry.altText}
                  fill
                  style={{ objectFit: "cover" }}
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
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
          No matter your sector, we’ll match you with the right talent.
        </p>
        <Link
          href="/contact"
          className="inline-block bg-[#FF7043] text-white py-3 px-6 rounded-md hover:bg-[#26A69A] transition-colors duration-300 font-['Montserrat'] font-bold"
          onClick={scrollToContact} // Add the onClick handler here
        >
          Get Industry-Specific Help →
        </Link>
      </div>
    </section>
  );
};

export default IndustriesSection;
