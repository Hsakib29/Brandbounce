"use client";
import { Check } from "lucide-react";
import { BlurFade } from "./blur-fade";

const services = [
  {
    category: "Brand Identity Design",
    color: "service-category-blue",
    price: "Starting at £100",
    deliverables: [
      "Logo concept",
      "Color palette",
      "Typography guide",
      "Revision rounds",
      "Delivery timeline",
    ],
  },
  {
    category: "Visual Content Creation",
    color: "service-category-orange",
    price: "Starting at £50",
    deliverables: [
      "Design assets",
      "Revision rounds",
      "Final digital files",
      "Delivery timeline",
    ],
  },
  {
    category: "Video Editing and Motion",
    color: "service-category-navy",
    price: "Starting at £70",
    deliverables: [
      "Video cuts and transitions",
      "Revision rounds",
      "Final video file",
      "Delivery timeline",
    ],
  },
  {
    category: "Social Media Marketing",
    color: "service-category-gray",
    price: "Starting at £90",
    deliverables: [
      "Social media posts",
      "Revision rounds",
      "Campaign schedule",
      "Ongoing support",
    ],
  },
];

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
            Affordable Branding Packages{" "}
            <span className="text-brand-orange">Tailored to Your Budget!</span>
          </h3>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            At BrandBounce, we're all about making your startup or small
            business pop with bold, memorable designs—without breaking the bank!
          </p>
        </div>

        <div className="mb-16 text-center">
          <h4 className="text-2xl font-bold mb-8 text-gray-900 dark:text-white tracking-tight">
            Individual Services
          </h4>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <BlurFade key={index} delay={0.1 + index * 0.1} inView>
                <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden h-full">
                  <div className={`service-category-card ${service.color}`}>
                    <h5 className="text-white text-xl font-bold">
                      {service.category}
                    </h5>
                  </div>

                  <div className="p-6 grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* Left - Price Range */}
                    <div className="flex flex-col justify-between bg-gradient-to-br from-brand-blue/10 to-white dark:from-gray-800 dark:to-gray-900 border border-brand-blue/20 dark:border-white/10 p-6 rounded-xl shadow-md">
                      <div>
                        <h6 className="text-lg font-semibold text-brand-blue mb-2">
                          Price Range
                        </h6>
                        <p className="text-3xl font-bold text-brand-blue">
                          {service.price}
                        </p>
                      </div>
                      <div className="mt-4">
                        <p className="text-sm text-gray-600 dark:text-gray-300">
                          Choose a plan based on your needs and budget. All
                          packages include quality assurance and timely
                          delivery.
                        </p>
                      </div>
                    </div>

                    {/* Right - Deliverables */}
                    <div className="bg-white dark:bg-gray-700 border border-gray-200 dark:border-gray-600 p-6 rounded-xl shadow-sm">
                      <h6 className="text-lg font-semibold text-brand-orange mb-4">
                        What's Included
                      </h6>
                      <ul className="space-y-3">
                        {service.deliverables.map((deliverable, i) => (
                          <li key={i} className="flex items-start">
                            <Check
                              className="text-brand-orange mr-3 mt-1"
                              size={20}
                            />
                            <span className="text-sm text-gray-700 dark:text-gray-200">
                              {deliverable}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </BlurFade>
            ))}
          </div>
        </div>

        <BlurFade delay={0.5} inView>
          <div className="bg-[#0a2540] rounded-xl shadow-xl p-8 text-white">
            <h4 className="text-2xl font-bold mb-4">
              BrandBounce Bounce Starter Kit
            </h4>
            <p className="mb-6">
              Get the full bounce with our all-in-one package—and save!
            </p>

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
                      <span>
                        1 Month of Growth Package Social Media Marketing (£200
                        value)
                      </span>
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
                      <span>
                        Custom Quotes: Need more? Email us for a bespoke quote.
                      </span>
                    </li>
                    <li className="flex items-start">
                      <Check className="mr-2 flex-shrink-0" size={18} />
                      <span>
                        Extra Revisions: £15 per round beyond what's included.
                      </span>
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
  );
};

export default Pricing;
