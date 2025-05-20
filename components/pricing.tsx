// pricing.tsx
"use client";
import { Check } from "lucide-react";
import { BlurFade } from "./blur-fade";
import PriceDisplay, { ServicePrice } from "./PriceDisplay"; // Import the new PriceDisplay and its types

// --- Pre-converted Prices Data ---
// You will need to manually pre-convert these prices.
// Exchange rates used for demonstration (adjust as needed):
// 1 GBP = 1.25 USD
// 1 GBP = 1.15 EUR (for example, if you add EUR)

interface ServiceItem {
  category: string;
  color: string;
  prices: ServicePrice; // Use the new ServicePrice type for single prices
  deliverables: string[];
}

const services: ServiceItem[] = [
  {
    category: "Logo Design",
    color: "service-category-blue",
    prices: {
      GBP: 175,
      USD: 218.75, // 175 * 1.25
      EUR: 201.25, // 175 * 1.15
    },
    deliverables: [
      "Starter: 2 concepts, 1 revision, PNG/JPEG files",
      "Core: 4 concepts, 2 revisions, vector & guidelines",
      "Premium: 6 concepts, 3 revisions, full identity kit",
    ],
  },
  {
    category: "Branding",
    color: "service-category-orange",
    prices: {
      GBP: 450,
      USD: 562.5, // 450 * 1.25
      EUR: 517.5, // 450 * 1.15
    },
    deliverables: [
      "Brand Strategy: Research, positioning, audience, values",
      "Visual Identity: Logo, palette, typography, templates",
      "Full Package: Strategy + Identity (10% off when bundled)",
    ],
  },
  {
    category: "Video Editing",
    color: "service-category-navy",
    // Keep as string if the internal pricing like "£50/min" is what needs to be displayed
    // The PriceDisplay will attempt to replace the symbol.
    prices: {
      GBP: "£150", // Changed from range to single starting price
      USD: "$187.50", // 150 * 1.25 (as a starting point string)
      EUR: "€172.50", // 150 * 1.15 (as a starting point string)
    },
    deliverables: [
      "Basic: £50/min, cuts, text overlays, 1 revision", // These might still show GBP unless separately converted
      "Standard: £100/min, motion graphics, 2 revisions",
      "Premium: £200/min, VFX, sound mixing, 3 revisions",
    ],
  },
  {
    category: "Social Media Marketing",
    color: "service-category-gray",
    prices: {
      GBP: 250,
      USD: 312.5, // 250 * 1.25
    },
    deliverables: [
      "Setup: 3 platforms, content plan",
      "Starter: £450/mo, 6 posts, engagement, 1 platform", // Still GBP
      "Premium: £1350/mo, 18 posts, full ads & reporting", // Still GBP
    ], // <-- CORRECTED: Removed the 'Z' here
  },
  {
    category: "Graphic Design",
    color: "service-category-blue",
    prices: {
      GBP: 75,
      USD: 93.75, // 75 * 1.25
    },
    deliverables: [
      "Starter: 1 design item, 1 revision",
      "Core: Multi-page, infographics",
      "Premium: Bespoke collateral, style guide",
    ],
  },
];

// --- Pricing Component ---
const Pricing = () => {
  // Pre-converted price for the Starter Kit
  const starterKitPrice = {
    GBP: 750,
    USD: 937.5, // 750 * 1.25
    EUR: 862.5, // 750 * 1.15
  };

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
            At BrandBounce, we deliver bold design and strategy solutions for
            small businesses—smartly priced for your goals and growth.
          </p>
        </div>

        <div className="mb-16 text-center">
          <h4 className="text-2xl font-bold mb-8 text-gray-900 dark:text-white tracking-tight">
            Individual Services
          </h4>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <BlurFade key={index} delay={0.1 + index * 0.1} inView>
                <div
                  className={`bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden h-full ${
                    service.category === "Graphic Design" ? "md:col-span-2" : ""
                  }`}
                >
                  <div className={`service-category-card ${service.color}`}>
                    <h5 className="text-white text-xl font-bold">
                      {service.category}
                    </h5>
                  </div>

                  <div className="p-6 grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="flex flex-col justify-between bg-gradient-to-br from-brand-blue/10 to-white dark:from-gray-800 dark:to-gray-900 border border-brand-blue/20 dark:border-white/10 p-6 rounded-xl shadow-md">
                      <div>
                        <h6 className="text-lg font-semibold text-brand-blue mb-2">
                          Starting Price
                        </h6>

                        <p className="text-3xl font-bold text-brand-blue">
                          {/* Use PriceDisplay component here */}
                          <PriceDisplay priceData={service.prices} />
                        </p>
                      </div>
                      <div className="mt-4">
                        <p className="text-sm text-gray-600 dark:text-gray-300">
                          Designed for flexibility and value across business
                          stages.
                        </p>
                      </div>
                    </div>

                    <div className="bg-white dark:bg-gray-700 border border-gray-200 dark:border-gray-600 p-6 rounded-xl shadow-sm">
                      <h6 className="text-lg font-semibold text-brand-orange mb-4">
                        What’s Included
                      </h6>
                      <ul className="space-y-3">
                        {service.deliverables.map((item, i) => (
                          <li key={i} className="flex items-start">
                            <Check
                              className="text-brand-orange mr-3 mt-1"
                              size={20}
                            />
                            <span className="text-sm text-gray-700 dark:text-gray-200">
                              {item}
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

        {/* Existing Starter Kit section remains as-is below */}

        <BlurFade delay={0.5} inView>
          <div className="bg-[#0a2540] rounded-xl shadow-xl p-8 text-white">
            <h4 className="text-2xl font-bold mb-4">BrandBounce Starter Kit</h4>
            <p className="mb-6">
              Kickstart your brand with our all-in-one package—perfect for small
              businesses and startups.
            </p>

            <div className="bg-white/10 p-6 rounded-lg backdrop-blur-sm">
              <div className="flex flex-col md:flex-row justify-between items-center mb-6">
                <div>
                  <p className="text-3xl font-bold">
                    {/* Use PriceDisplay for the Starter Kit price */}
                    <PriceDisplay priceData={starterKitPrice} />
                  </p>
                  <p className="text-lg">Save 15% vs. individual pricing</p>
                </div>
                <div>
                  <p className="text-lg">Timeline: 2–3 weeks</p>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h5 className="font-bold mb-3">Includes:</h5>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <Check className="mr-2 flex-shrink-0" size={18} />
                      <span>Logo Design (Starter Tier)</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="mr-2 flex-shrink-0" size={18} />
                      <span>Brand Discovery (Lite)</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="mr-2 flex-shrink-0" size={18} />
                      <span>Social Media Setup (1 platform)</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="mr-2 flex-shrink-0" size={18} />
                      <span>1 Custom Graphic Design Asset</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <h5 className="font-bold mb-3">Benefits:</h5>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <Check className="mr-2 flex-shrink-0" size={18} />
                      <span>15% package discount</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="mr-2 flex-shrink-0" size={18} />
                      <span>Priority onboarding</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="mr-2 flex-shrink-0" size={18} />
                      <span>Cohesive brand foundation</span>
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
