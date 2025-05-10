"use client"
import { Eye, Search, Wand2, Package, Sparkles, HeadphonesIcon } from "lucide-react"
import { BlurFade } from "./blur-fade"

const processSteps = [
  {
    title: "Vision Kickoff",
    description:
      "We start by diving into your brand's story, goals, and audience. Together, we define a bold vision to shape a unique identity that resonates.",
    icon: Eye,
    color: "bg-brand-orange",
  },
  {
    title: "Creative Research",
    description:
      "We conduct in-depth research into your industry, competitors, and audience to uncover insights that fuel a standout brand strategy.",
    icon: Search,
    color: "bg-brand-blue",
  },
  {
    title: "Design Magic",
    description:
      "Our team crafts striking designs—logos, social media assets, and more—that capture your brand's essence with creativity and flair.",
    icon: Wand2,
    color: "bg-brand-orange",
  },
  {
    title: "Brand Delivery",
    description:
      "Removes the development focus and instead emphasizes delivering branding assets with guidance on usage.",
    icon: Package,
    color: "bg-brand-blue",
  },
  {
    title: "Ongoing Spark",
    description:
      'Combines the launch and support steps into one, focusing on continued creative support. "Spark" ties back to BrandBounce\'s tagline, and "bouncing with fresh ideas" reflects the brand\'s playful, energetic tone.',
    icon: Sparkles,
    color: "bg-brand-orange",
  },
  {
    title: "Support",
    description:
      "We keep a close relationship and communication with your team so we can help you with future design or development needs in the long term.",
    icon: HeadphonesIcon,
    color: "bg-brand-blue",
  },
]

const Process = () => {
  return (
    <section className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="inline-block">
            <div className="group rounded-full border border-black/5 dark:border-white/5 bg-white dark:bg-gray-800 text-base transition-all ease-in hover:cursor-pointer hover:bg-gray-50 dark:hover:bg-gray-700">
              <div className="relative overflow-hidden rounded-full">
                <h2 className="inline-flex items-center justify-center px-4 py-1 text-sm uppercase tracking-wider text-brand-blue transition ease-out">
                  Navigating Success Together
                </h2>
                <div className="absolute inset-0 z-0">
                  <div className="animate-[shine_3s_ease-in-out_infinite] absolute -inset-[100%] h-[500%] w-[50%] -rotate-45 bg-gradient-to-r from-transparent via-white/20 to-transparent rounded-full" />
                </div>
              </div>
            </div>
          </div>
          <h3 className="text-3xl md:text-4xl font-bold mb-4 text-[#0a2540] dark:text-white">
            Crafting Your Brand with Creativity That Pops
          </h3>
        </div>

        <div className="relative max-w-3xl mx-auto">
          {processSteps.map((step, index) => (
            <BlurFade
              key={index}
              delay={0.1 + index * 0.1}
              inView
              className={`${step.color} text-white p-6 rounded-xl mb-6 shadow-lg transform ${
                index % 2 === 0 ? "translate-x-0" : "translate-x-8"
              }`}
              style={{
                marginTop: index === 0 ? "0" : "-20px",
                zIndex: 20 - index,
              }}
              initial={{
                opacity: 0,
                x: index % 2 === 0 ? -50 : 50,
              }}
              animate={{
                opacity: 1,
                x: index % 2 === 0 ? 0 : 32, // 32px = translate-x-8
              }}
            >
              <div className="flex items-center gap-3 mb-2">
                <step.icon size={24} />
                <h4 className="text-xl font-bold">{step.title}</h4>
              </div>
              <p className="ml-9">{step.description}</p>
            </BlurFade>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Process
