"use client"
import { Check } from "lucide-react"
import { BlurFade } from "./blur-fade"

const individualServices = [
  {
    category: "Logo Design",
    color: "service-category-blue",
    plans: [
      {
        title: "Basic Logo",
        price: "£40",
        features: ["1 logo concept", "1 round of revisions", "Final logo in PNG and JPEG", "3-5 days delivery"],
      },
      {
        title: "Enhanced Logo Package",
        price: "£120",
        features: [
          "2 logo concepts",
          "2 rounds of revisions",
          "Final logo in PNG, JPEG, SVG",
          "Basic color palette",
          "1-2 weeks delivery",
        ],
      },
    ],
  },
  {
    category: "Video Editing",
    color: "service-category-orange",
    plans: [
      {
        title: "Basic Edit (Up to 1 Minute)",
        price: "£30",
        features: ["Basic cuts and transitions", "1 round of revision", "Final video in MP4", "2-4 days delivery"],
      },
      {
        title: "Pro Edit (1-3 Minutes)",
        price: "£90",
        features: [
          "Advanced editing (effects, audio sync)",
          "2 rounds of revisions",
          "Final video in MP4",
          "4-6 days delivery",
        ],
      },
    ],
  },
  {
    category: "Branding",
    color: "service-category-navy",
    plans: [
      {
        title: "Basic Branding",
        price: "£100",
        features: ["1 logo concept", "Color palette", "Typography guide", "1 round of revision", "2-3 weeks delivery"],
      },
      {
        title: "Full Branding Package",
        price: "£300",
        features: [
          "2 logo concepts",
          "Color palette",
          "Typography guide",
          "Business card design",
          "2 rounds of revisions",
          "3-4 weeks delivery",
        ],
      },
    ],
  },
  {
    category: "Social Media Marketing",
    color: "service-category-gray",
    plans: [
      {
        title: "Monthly Starter Package",
        price: "£70/month",
        features: ["4 social media posts (graphics only)", "1 round of revision", "Basic schedule", "Ongoing support"],
      },
      {
        title: "Growth Package",
        price: "£200/month",
        features: [
          "8 posts (graphics and captions)",
          "1 short video (up to 1 minute)",
          "Monthly strategy call",
          "Basic analytics",
          "Ongoing support",
        ],
      },
    ],
  },
]

const Pricing = () => {
  return (
    <section id="pricing" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="inline-block">
            <div className="group rounded-full border border-black/5 dark:border-white/5 bg-white dark:bg-gray-800 text-base transition-all ease-in hover:cursor-pointer hover:bg-gray-50 dark:hover:bg-gray-700">
              <div className="relative overflow-hidden rounded-full">
                <h2 className="inline-flex items-center justify-center px-4 py-1 text-sm uppercase tracking-wider text-brand-blue transition ease-out">
                  Pricing
                </h2>
                <div className="absolute inset-0 z-0">
                  <div className="animate-[shine_3s_ease-in-out_infinite] absolute -inset-[100%] h-[500%] w-[50%] -rotate-45 bg-gradient-to-r from-transparent via-white/20 to-transparent rounded-full" />
                </div>
              </div>
            </div>
          </div>
          <h3 className="text-3xl md:text-4xl font-bold mb-4 text-[#0a2540] dark:text-white">
            Affordable Packages Starting at Just <span className="text-brand-orange">£20</span>
          </h3>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            At BrandBounce, we're all about making your startup or small business pop with bold, memorable
            designs—without breaking the bank!
          </p>
        </div>

        <div className="mb-16">
          <h4 className="text-2xl font-bold mb-8 text-gray-900 dark:text-white">Individual Services</h4>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {individualServices.map((service, index) => (
              <BlurFade key={index} delay={0.1 + index * 0.1} inView>
                <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden h-full">
                  <div className={`service-category-card ${service.color}`}>
                    <h5 className="text-white text-xl font-bold">{service.category}</h5>
                  </div>

                  <div className="p-6 grid grid-cols-1 lg:grid-cols-2 gap-6">
                    {service.plans.map((plan, planIndex) => (
                      <div key={planIndex} className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg">
                        <h6 className="font-bold mb-2 text-gray-900 dark:text-white">{plan.title}</h6>
                        <p className="text-2xl font-bold text-brand-blue mb-4">{plan.price}</p>
                        <ul className="space-y-2">
                          {plan.features.map((feature, featureIndex) => (
                            <li key={featureIndex} className="flex items-start">
                              <Check className="text-brand-orange mr-2 flex-shrink-0" size={18} />
                              <span className="text-sm text-gray-700 dark:text-gray-300">{feature}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </div>
              </BlurFade>
            ))}
          </div>
        </div>

        <BlurFade delay={0.5} inView>
          <div className="bg-[#0a2540] rounded-xl shadow-xl p-8 text-white">
            <h4 className="text-2xl font-bold mb-4">BrandBounce Bounce Starter Kit</h4>
            <p className="mb-6">Get the full bounce with our all-in-one package—and save!</p>

            <div className="bg-white/10 p-6 rounded-lg backdrop-blur-sm">
              <div className="flex flex-col md:flex-row justify-between items-center mb-6">
                <div>
                  <p className="text-3xl font-bold">£500</p>
                  <p className="text-lg">Save 10% (£50 off)</p>
                </div>
                <div>
                  <p className="text-lg">Timeline: 6-8 weeks</p>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h5 className="font-bold mb-3">Includes:</h5>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <Check className="mr-2 flex-shrink-0" size={18} />
                      <span>Full Branding Package (£300 value)</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="mr-2 flex-shrink-0" size={18} />
                      <span>1 Pro Video Edit (up to 1 minute, £90 value)</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="mr-2 flex-shrink-0" size={18} />
                      <span>1 Month of Growth Package Social Media Marketing (£200 value)</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="mr-2 flex-shrink-0" size={18} />
                      <span>3 Graphic Design Assets (£60 value)</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <h5 className="font-bold mb-3">Good to Know:</h5>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <Check className="mr-2 flex-shrink-0" size={18} />
                      <span>Custom Quotes: Need more? Email us for a bespoke quote.</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="mr-2 flex-shrink-0" size={18} />
                      <span>Extra Revisions: £15 per round beyond what's included.</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="mr-2 flex-shrink-0" size={18} />
                      <span>Rush Fees: Add 15% for 48-hour delivery.</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </BlurFade>
      </div>
    </section>
  )
}

export default Pricing
