"use client";

import Image from "next/image";
import { BlurFade } from "./blur-fade";

const teamMembers = [
  {
    name: "Mehdi Hasan",
    role: "Founder",
    avatar: "/placeholder.svg?height=100&width=100",
  },
  {
    name: "Chris Wilson",
    role: "Project Manager",
    avatar: "/placeholder.svg?height=100&width=100",
  },
  {
    name: "Emily Brown",
    role: "Designer",
    avatar: "/placeholder.svg?height=100&width=100",
  },
  {
    name: "David Johnson",
    role: "Designer",
    avatar: "/placeholder.svg?height=100&width=100",
  },
];

const About = () => {
  return (
    <section id="about" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="inline-block">
            <div className="group rounded-full border border-black/5 dark:border-white/5 bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700 transition-all ease-in">
              <div className="relative overflow-hidden rounded-full">
                <h2 className="inline-flex items-center justify-center px-4 py-1 text-sm uppercase tracking-wider text-brand-blue">
                  Who We Are
                </h2>
                <div className="absolute inset-0 z-0">
                  <div className="animate-[shine_3s_ease-in-out_infinite] absolute -inset-[100%] h-[500%] w-[50%] -rotate-45 bg-gradient-to-r from-transparent via-white/20 to-transparent rounded-full" />
                </div>
              </div>
            </div>
          </div>
          <h3 className="text-3xl md:text-4xl font-bold mb-4 text-[#0a2540] dark:text-white">
            Bouncing Brands to Life
          </h3>
        </div>

        {/* About Content */}
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="lg:w-1/2">
            <BlurFade delay={0.1} inView>
              <p className="text-gray-600 dark:text-gray-300 mb-6 text-lg">
                BrandBounce is a playful and creative agency dedicated to
                helping startups and small businesses stand out with bold,
                memorable branding. We believe that every brand deserves to make
                a splash, and we're here to make that happen—whether it's
                through a fresh logo, eye-catching videos, or a full brand
                overhaul.
              </p>
            </BlurFade>
            <BlurFade delay={0.2} inView>
              <p className="text-gray-600 dark:text-gray-300 mb-6 text-lg">
                With a focus on fun, energy, and growth, we bring your vision to
                life and give your business the bounce it needs to thrive. From
                startups looking to make their mark to small businesses ready to
                level up, we tailor our services to fit your unique needs.
              </p>
            </BlurFade>
            <BlurFade delay={0.3} inView>
              <p className="text-gray-600 dark:text-gray-300 text-lg">
                Let's elevate your brand together—because great design should be
                as exciting as your business!
              </p>
            </BlurFade>
          </div>

          {/* Embedded Vimeo Video */}
          <div className="lg:w-1/2">
            <BlurFade delay={0.4} inView>
              <div className="w-[400px] h-[300px] rounded-xl overflow-hidden shadow-xl mx-auto">
                <iframe
                  src="https://player.vimeo.com/video/1080096527?autoplay=1&loop=1&muted=1&background=1"
                  width="400"
                  height="300"
                  className="w-full h-full"
                  frameBorder="0"
                  allow="autoplay; fullscreen; picture-in-picture"
                  allowFullScreen
                  loading="lazy"
                  title="BrandBounce Video"
                ></iframe>
              </div>
            </BlurFade>
          </div>
        </div>

        {/* Team Section */}
        <div className="mt-16">
          <h4 className="text-2xl font-bold text-center mb-10 text-gray-900 dark:text-white">
            Meet Our Team
          </h4>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {teamMembers.map((member, index) => (
              <BlurFade key={index} delay={0.5 + index * 0.1} inView>
                <div className="text-center">
                  <div className="w-24 h-24 mx-auto mb-4 relative">
                    <Image
                      src={member.avatar}
                      alt={member.name}
                      fill
                      className="rounded-full object-cover border-4 border-pink-200 dark:border-pink-900"
                    />
                  </div>
                  <h5 className="font-bold text-gray-900 dark:text-white">
                    {member.name}
                  </h5>
                  <p className="text-gray-600 dark:text-gray-400 text-sm">
                    {member.role}
                  </p>
                </div>
              </BlurFade>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
