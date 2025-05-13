"use client"
import {
  ArrowRight,
  CheckCircle,
  Database,
  Layout,
  Mail,
  Calendar,
  FileSpreadsheet,
  ShoppingCart,
  PenTool,
  Clock,
  Users,
  BarChart,
} from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { FadeInSection } from "@/components/ui/fade-in-section"
import { BrandBouncePromo } from "@/components/brandbounce-promo"
import { motion } from "framer-motion"

export default function TaskbouncePage() {
  return (
    <>
      {/* Hero Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-br from-white to-gray-50 overflow-hidden relative">
        {/* Decorative elements */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#26A69A]/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#FF7043]/10 rounded-full blur-3xl"></div>

        <div className="container mx-auto px-4 md:px-6 relative">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
            <FadeInSection>
              <div className="space-y-4">
                <div className="inline-block rounded-lg bg-gradient-to-r from-[#26A69A]/20 to-[#FF7043]/20 px-3 py-1 text-sm font-medium">
                  A BrandBounce Company
                </div>
                <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl">
                  <span className="text-[#26A69A]">Task</span>
                  <span className="text-[#FF7043]">bounce</span>
                </h1>
                <p className="text-xl text-gray-600 md:text-2xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Outsourced Productivity, Powered by Global Talent
                </p>
                <p className="text-gray-500 md:text-xl">
                  Affordable, high-quality virtual assistance for startups, creatives, and SMEs.
                </p>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Button className="bg-[#FF7043] hover:bg-[#F4511E] text-white group relative overflow-hidden">
                    <span className="relative z-10">Get Your First 5 Hours for £1.99/hour</span>
                    <motion.div
                      className="absolute inset-0 bg-[#F4511E]"
                      initial={{ x: "-100%" }}
                      whileHover={{ x: 0 }}
                      transition={{ type: "tween", ease: "easeInOut", duration: 0.3 }}
                    />
                  </Button>
                </div>
              </div>
            </FadeInSection>

            <FadeInSection delay={0.2}>
              <div className="flex justify-center">
                <div className="relative w-full max-w-md">
                  <div className="absolute -left-4 -top-4 h-72 w-72 rounded-full bg-[#26A69A]/10 blur-3xl"></div>
                  <div className="absolute -bottom-4 -right-4 h-72 w-72 rounded-full bg-[#FF7043]/10 blur-3xl"></div>
                  <motion.div
                    className="relative rounded-xl border bg-white p-8 shadow-lg"
                    initial={{ y: 0 }}
                    animate={{ y: [0, -10, 0] }}
                    transition={{ duration: 5, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
                  >
                    <div className="space-y-4">
                      <div className="flex items-center gap-4">
                        <div className="rounded-full bg-[#26A69A]/10 p-2">
                          <CheckCircle className="h-6 w-6 text-[#26A69A]" />
                        </div>
                        <div>
                          <h3 className="font-semibold">Email Management</h3>
                          <p className="text-sm text-gray-500">From £2.99/hour</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-4">
                        <div className="rounded-full bg-[#26A69A]/10 p-2">
                          <Database className="h-6 w-6 text-[#26A69A]" />
                        </div>
                        <div>
                          <h3 className="font-semibold">Data Entry</h3>
                          <p className="text-sm text-gray-500">From £2.99/hour</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-4">
                        <div className="rounded-full bg-[#26A69A]/10 p-2">
                          <Layout className="h-6 w-6 text-[#26A69A]" />
                        </div>
                        <div>
                          <h3 className="font-semibold">Basic Design</h3>
                          <p className="text-sm text-gray-500">From £4.99/hour</p>
                        </div>
                      </div>
                      <div className="flex justify-center">
                        <p className="text-sm text-gray-500">24/5 Support Available</p>
                      </div>
                    </div>
                  </motion.div>
                </div>
              </div>
            </FadeInSection>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="w-full py-12 bg-gradient-to-r from-[#26A69A]/10 to-[#FF7043]/10">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
            <FadeInSection delay={0.1}>
              <div className="bg-white rounded-lg p-6 text-center shadow-md">
                <div className="flex justify-center mb-2">
                  <Clock className="h-8 w-8 text-[#26A69A]" />
                </div>
                <h3 className="text-3xl font-bold text-gray-800">24/5</h3>
                <p className="text-sm text-gray-500">Support Coverage</p>
              </div>
            </FadeInSection>

            <FadeInSection delay={0.2}>
              <div className="bg-white rounded-lg p-6 text-center shadow-md">
                <div className="flex justify-center mb-2">
                  <Users className="h-8 w-8 text-[#FF7043]" />
                </div>
                <h3 className="text-3xl font-bold text-gray-800">50+</h3>
                <p className="text-sm text-gray-500">Skilled Professionals</p>
              </div>
            </FadeInSection>

            <FadeInSection delay={0.3}>
              <div className="bg-white rounded-lg p-6 text-center shadow-md">
                <div className="flex justify-center mb-2">
                  <BarChart className="h-8 w-8 text-[#26A69A]" />
                </div>
                <h3 className="text-3xl font-bold text-gray-800">99%</h3>
                <p className="text-sm text-gray-500">Client Satisfaction</p>
              </div>
            </FadeInSection>

            <FadeInSection delay={0.4}>
              <div className="bg-white rounded-lg p-6 text-center shadow-md">
                <div className="flex justify-center mb-2">
                  <ArrowRight className="h-8 w-8 text-[#FF7043]" />
                </div>
                <h3 className="text-3xl font-bold text-gray-800">1 Day</h3>
                <p className="text-sm text-gray-500">Average Onboarding</p>
              </div>
            </FadeInSection>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="w-full py-12 md:py-24 lg:py-32 bg-white relative overflow-hidden">
        <div className="absolute top-1/2 left-0 w-64 h-64 bg-[#26A69A]/5 rounded-full blur-3xl"></div>
        <div className="absolute top-1/4 right-0 w-64 h-64 bg-[#FF7043]/5 rounded-full blur-3xl"></div>

        <div className="container mx-auto px-4 md:px-6 relative">
          <FadeInSection>
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-gradient-to-r from-[#26A69A]/20 to-[#FF7043]/20 px-3 py-1 text-sm font-medium">
                  Why Taskbounce?
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  Delegate with Confidence
                </h2>
                <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Our unique approach combines global talent with local quality standards.
                </p>
              </div>
            </div>
          </FadeInSection>

          <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 md:grid-cols-3 lg:gap-12 mt-12">
            <FadeInSection delay={0.1}>
              <motion.div whileHover={{ y: -10 }} transition={{ type: "spring", stiffness: 300 }}>
                <Card className="border-none shadow-lg h-full bg-gradient-to-b from-white to-[#26A69A]/5">
                  <CardHeader className="pb-2">
                    <div className="rounded-full bg-[#26A69A]/10 p-2 w-12 h-12 flex items-center justify-center mb-4">
                      <CheckCircle className="h-6 w-6 text-[#26A69A]" />
                    </div>
                    <CardTitle className="text-xl">BrandBounce-Backed Trust</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-base">
                      Leverage the reputation of BrandBounce for quality assurance.
                    </CardDescription>
                  </CardContent>
                </Card>
              </motion.div>
            </FadeInSection>

            <FadeInSection delay={0.2}>
              <motion.div whileHover={{ y: -10 }} transition={{ type: "spring", stiffness: 300 }}>
                <Card className="border-none shadow-lg h-full bg-gradient-to-b from-white to-[#FF7043]/5">
                  <CardHeader className="pb-2">
                    <div className="rounded-full bg-[#FF7043]/10 p-2 w-12 h-12 flex items-center justify-center mb-4">
                      <Layout className="h-6 w-6 text-[#FF7043]" />
                    </div>
                    <CardTitle className="text-xl">Global Talent, Local Rates</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-base">
                      Bangladesh-based pros deliver Western-standard work at £2.99–£9.99/hour.
                    </CardDescription>
                  </CardContent>
                </Card>
              </motion.div>
            </FadeInSection>

            <FadeInSection delay={0.3}>
              <motion.div whileHover={{ y: -10 }} transition={{ type: "spring", stiffness: 300 }}>
                <Card className="border-none shadow-lg h-full bg-gradient-to-b from-white to-[#26A69A]/5">
                  <CardHeader className="pb-2">
                    <div className="rounded-full bg-[#26A69A]/10 p-2 w-12 h-12 flex items-center justify-center mb-4">
                      <ArrowRight className="h-6 w-6 text-[#26A69A]" />
                    </div>
                    <CardTitle className="text-xl">Seamless Scalability</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-base">
                      Ramp up/down support in minutes, no hiring hassles.
                    </CardDescription>
                  </CardContent>
                </Card>
              </motion.div>
            </FadeInSection>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="w-full py-12 md:py-24 lg:py-32 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6">
          <FadeInSection>
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-gradient-to-r from-[#26A69A]/20 to-[#FF7043]/20 px-3 py-1 text-sm font-medium">
                  Our Services
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">What We Can Do For You</h2>
                <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  From administrative tasks to creative support, we've got you covered.
                </p>
              </div>
            </div>
          </FadeInSection>

          <FadeInSection delay={0.2}>
            <div className="mx-auto mt-12">
              <Tabs defaultValue="virtual" className="w-full">
                <TabsList className="grid w-full grid-cols-3 bg-gradient-to-r from-[#26A69A]/10 to-[#FF7043]/10">
                  <TabsTrigger value="virtual" className="data-[state=active]:bg-white">
                    Virtual Assistance
                  </TabsTrigger>
                  <TabsTrigger value="data" className="data-[state=active]:bg-white">
                    Data & E-Commerce
                  </TabsTrigger>
                  <TabsTrigger value="creative" className="data-[state=active]:bg-white">
                    Creative Tasks
                  </TabsTrigger>
                </TabsList>
                <TabsContent value="virtual" className="mt-6">
                  <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                    <motion.div whileHover={{ scale: 1.03 }} transition={{ type: "spring", stiffness: 400 }}>
                      <Card className="border-none shadow-md h-full">
                        <CardHeader className="pb-2">
                          <div className="rounded-full bg-[#26A69A]/10 p-2 w-12 h-12 flex items-center justify-center mb-4">
                            <Mail className="h-6 w-6 text-[#26A69A]" />
                          </div>
                          <CardTitle className="text-lg">Email Management</CardTitle>
                        </CardHeader>
                        <CardContent>
                          <CardDescription className="text-base">
                            Inbox organization, response drafting, and follow-up management.
                          </CardDescription>
                        </CardContent>
                      </Card>
                    </motion.div>

                    <motion.div whileHover={{ scale: 1.03 }} transition={{ type: "spring", stiffness: 400 }}>
                      <Card className="border-none shadow-md h-full">
                        <CardHeader className="pb-2">
                          <div className="rounded-full bg-[#26A69A]/10 p-2 w-12 h-12 flex items-center justify-center mb-4">
                            <Database className="h-6 w-6 text-[#26A69A]" />
                          </div>
                          <CardTitle className="text-lg">CRM/Data Entry</CardTitle>
                        </CardHeader>
                        <CardContent>
                          <CardDescription className="text-base">
                            Salesforce, HubSpot, and other CRM management and data entry.
                          </CardDescription>
                        </CardContent>
                      </Card>
                    </motion.div>

                    <motion.div whileHover={{ scale: 1.03 }} transition={{ type: "spring", stiffness: 400 }}>
                      <Card className="border-none shadow-md h-full">
                        <CardHeader className="pb-2">
                          <div className="rounded-full bg-[#26A69A]/10 p-2 w-12 h-12 flex items-center justify-center mb-4">
                            <Calendar className="h-6 w-6 text-[#26A69A]" />
                          </div>
                          <CardTitle className="text-lg">Travel Planning</CardTitle>
                        </CardHeader>
                        <CardContent>
                          <CardDescription className="text-base">
                            Research, booking, and itinerary management for business and personal travel.
                          </CardDescription>
                        </CardContent>
                      </Card>
                    </motion.div>
                  </div>
                </TabsContent>

                <TabsContent value="data" className="mt-6">
                  <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                    <motion.div whileHover={{ scale: 1.03 }} transition={{ type: "spring", stiffness: 400 }}>
                      <Card className="border-none shadow-md h-full">
                        <CardHeader className="pb-2">
                          <div className="rounded-full bg-[#FF7043]/10 p-2 w-12 h-12 flex items-center justify-center mb-4">
                            <FileSpreadsheet className="h-6 w-6 text-[#FF7043]" />
                          </div>
                          <CardTitle className="text-lg">Spreadsheet Management</CardTitle>
                        </CardHeader>
                        <CardContent>
                          <CardDescription className="text-base">
                            Cleanup, formatting, and basic automation of Excel and Google Sheets.
                          </CardDescription>
                        </CardContent>
                      </Card>
                    </motion.div>

                    <motion.div whileHover={{ scale: 1.03 }} transition={{ type: "spring", stiffness: 400 }}>
                      <Card className="border-none shadow-md h-full">
                        <CardHeader className="pb-2">
                          <div className="rounded-full bg-[#FF7043]/10 p-2 w-12 h-12 flex items-center justify-center mb-4">
                            <ShoppingCart className="h-6 w-6 text-[#FF7043]" />
                          </div>
                          <CardTitle className="text-lg">Product Uploads</CardTitle>
                        </CardHeader>
                        <CardContent>
                          <CardDescription className="text-base">
                            Shopify, Amazon, and other e-commerce platform product management.
                          </CardDescription>
                        </CardContent>
                      </Card>
                    </motion.div>

                    <motion.div whileHover={{ scale: 1.03 }} transition={{ type: "spring", stiffness: 400 }}>
                      <Card className="border-none shadow-md h-full">
                        <CardHeader className="pb-2">
                          <div className="rounded-full bg-[#FF7043]/10 p-2 w-12 h-12 flex items-center justify-center mb-4">
                            <Database className="h-6 w-6 text-[#FF7043]" />
                          </div>
                          <CardTitle className="text-lg">Lead List Building</CardTitle>
                        </CardHeader>
                        <CardContent>
                          <CardDescription className="text-base">
                            Custom lead generation and list building at just £0.10 per entry.
                          </CardDescription>
                        </CardContent>
                      </Card>
                    </motion.div>
                  </div>
                </TabsContent>

                <TabsContent value="creative" className="mt-6">
                  <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                    <motion.div whileHover={{ scale: 1.03 }} transition={{ type: "spring", stiffness: 400 }}>
                      <Card className="border-none shadow-md h-full">
                        <CardHeader className="pb-2">
                          <div className="rounded-full bg-[#26A69A]/10 p-2 w-12 h-12 flex items-center justify-center mb-4">
                            <PenTool className="h-6 w-6 text-[#26A69A]" />
                          </div>
                          <CardTitle className="text-lg">Basic Canva Designs</CardTitle>
                        </CardHeader>
                        <CardContent>
                          <CardDescription className="text-base">
                            Social media graphics, simple flyers, and presentation slides.
                          </CardDescription>
                        </CardContent>
                      </Card>
                    </motion.div>

                    <motion.div whileHover={{ scale: 1.03 }} transition={{ type: "spring", stiffness: 400 }}>
                      <Card className="border-none shadow-md h-full">
                        <CardHeader className="pb-2">
                          <div className="rounded-full bg-[#26A69A]/10 p-2 w-12 h-12 flex items-center justify-center mb-4">
                            <Layout className="h-6 w-6 text-[#26A69A]" />
                          </div>
                          <CardTitle className="text-lg">Website Updates</CardTitle>
                        </CardHeader>
                        <CardContent>
                          <CardDescription className="text-base">
                            Content updates, basic formatting, and image optimization.
                          </CardDescription>
                        </CardContent>
                      </Card>
                    </motion.div>

                    <motion.div whileHover={{ scale: 1.03 }} transition={{ type: "spring", stiffness: 400 }}>
                      <Card className="border-none shadow-md h-full">
                        <CardHeader className="pb-2">
                          <div className="rounded-full bg-[#26A69A]/10 p-2 w-12 h-12 flex items-center justify-center mb-4">
                            <CheckCircle className="h-6 w-6 text-[#26A69A]" />
                          </div>
                          <CardTitle className="text-lg">Competitor Reports</CardTitle>
                        </CardHeader>
                        <CardContent>
                          <CardDescription className="text-base">
                            Detailed analysis of competitor branding, messaging, and positioning.
                          </CardDescription>
                        </CardContent>
                      </Card>
                    </motion.div>
                  </div>
                </TabsContent>
              </Tabs>
            </div>
          </FadeInSection>
        </div>
      </section>

      {/* BrandBounce Promo Section */}
      <BrandBouncePromo />

      {/* Pricing Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <FadeInSection>
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-gradient-to-r from-[#26A69A]/20 to-[#FF7043]/20 px-3 py-1 text-sm font-medium">
                  Pricing
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  Affordable Rates, Premium Quality
                </h2>
                <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Flexible pricing options to suit your needs and budget.
                </p>
              </div>
            </div>
          </FadeInSection>

          <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 md:grid-cols-3 lg:gap-12 mt-12">
            <FadeInSection delay={0.1}>
              <motion.div whileHover={{ y: -10 }} transition={{ type: "spring", stiffness: 300 }}>
                <Card className="border-none shadow-lg h-full relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-b from-[#26A69A]/5 to-transparent"></div>
                  <CardHeader className="relative">
                    <CardTitle className="text-xl">Hourly Rates</CardTitle>
                    <CardDescription className="text-base">Pay only for what you use</CardDescription>
                  </CardHeader>
                  <CardContent className="relative">
                    <div className="text-4xl font-bold">
                      £2.99<span className="text-lg font-normal text-gray-500">/hour</span>
                    </div>
                    <p className="text-sm text-gray-500 mt-2">Basic administrative tasks</p>
                    <ul className="mt-4 space-y-2">
                      <li className="flex items-center">
                        <CheckCircle className="mr-2 h-4 w-4 text-[#26A69A]" />
                        <span>Email management</span>
                      </li>
                      <li className="flex items-center">
                        <CheckCircle className="mr-2 h-4 w-4 text-[#26A69A]" />
                        <span>Data entry</span>
                      </li>
                      <li className="flex items-center">
                        <CheckCircle className="mr-2 h-4 w-4 text-[#26A69A]" />
                        <span>Calendar management</span>
                      </li>
                    </ul>
                    <div className="mt-6">
                      <Button className="w-full bg-[#26A69A] hover:bg-[#1E8A7E] relative overflow-hidden group">
                        <span className="relative z-10">Get Started</span>
                        <motion.div
                          className="absolute inset-0 bg-[#1E8A7E]"
                          initial={{ x: "-100%" }}
                          whileHover={{ x: 0 }}
                          transition={{ type: "tween", ease: "easeInOut", duration: 0.3 }}
                        />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </FadeInSection>

            <FadeInSection delay={0.2}>
              <motion.div whileHover={{ y: -10 }} transition={{ type: "spring", stiffness: 300 }}>
                <Card className="border-none shadow-lg h-full relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-b from-[#FF7043]/5 to-transparent"></div>
                  <div className="absolute -top-4 left-0 right-0 mx-auto w-fit bg-[#FF7043] text-white px-3 py-1 rounded-full text-sm font-medium">
                    Most Popular
                  </div>
                  <CardHeader className="relative">
                    <CardTitle className="text-xl">Task Packs</CardTitle>
                    <CardDescription className="text-base">Pre-purchased task bundles</CardDescription>
                  </CardHeader>
                  <CardContent className="relative">
                    <div className="text-4xl font-bold">
                      £29<span className="text-lg font-normal text-gray-500">/pack</span>
                    </div>
                    <p className="text-sm text-gray-500 mt-2">500 data entries or equivalent</p>
                    <ul className="mt-4 space-y-2">
                      <li className="flex items-center">
                        <CheckCircle className="mr-2 h-4 w-4 text-[#FF7043]" />
                        <span>Lead list building</span>
                      </li>
                      <li className="flex items-center">
                        <CheckCircle className="mr-2 h-4 w-4 text-[#FF7043]" />
                        <span>Product uploads</span>
                      </li>
                      <li className="flex items-center">
                        <CheckCircle className="mr-2 h-4 w-4 text-[#FF7043]" />
                        <span>Research tasks</span>
                      </li>
                    </ul>
                    <div className="mt-6">
                      <Button className="w-full bg-[#FF7043] hover:bg-[#F4511E] relative overflow-hidden group">
                        <span className="relative z-10">Get Started</span>
                        <motion.div
                          className="absolute inset-0 bg-[#F4511E]"
                          initial={{ x: "-100%" }}
                          whileHover={{ x: 0 }}
                          transition={{ type: "tween", ease: "easeInOut", duration: 0.3 }}
                        />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </FadeInSection>

            <FadeInSection delay={0.3}>
              <motion.div whileHover={{ y: -10 }} transition={{ type: "spring", stiffness: 300 }}>
                <Card className="border-none shadow-lg h-full relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-b from-[#26A69A]/5 to-transparent"></div>
                  <CardHeader className="relative">
                    <CardTitle className="text-xl">Retainers</CardTitle>
                    <CardDescription className="text-base">Monthly dedicated support</CardDescription>
                  </CardHeader>
                  <CardContent className="relative">
                    <div className="text-4xl font-bold">
                      £99<span className="text-lg font-normal text-gray-500">/month</span>
                    </div>
                    <p className="text-sm text-gray-500 mt-2">20 hours of support</p>
                    <ul className="mt-4 space-y-2">
                      <li className="flex items-center">
                        <CheckCircle className="mr-2 h-4 w-4 text-[#26A69A]" />
                        <span>Dedicated assistant</span>
                      </li>
                      <li className="flex items-center">
                        <CheckCircle className="mr-2 h-4 w-4 text-[#26A69A]" />
                        <span>Priority support</span>
                      </li>
                      <li className="flex items-center">
                        <CheckCircle className="mr-2 h-4 w-4 text-[#26A69A]" />
                        <span>All service types</span>
                      </li>
                    </ul>
                    <div className="mt-6">
                      <Button className="w-full bg-[#26A69A] hover:bg-[#1E8A7E] relative overflow-hidden group">
                        <span className="relative z-10">Get Started</span>
                        <motion.div
                          className="absolute inset-0 bg-[#1E8A7E]"
                          initial={{ x: "-100%" }}
                          whileHover={{ x: 0 }}
                          transition={{ type: "tween", ease: "easeInOut", duration: 0.3 }}
                        />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </FadeInSection>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="w-full py-12 md:py-24 lg:py-32 bg-gray-50 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#26A69A]/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#FF7043]/10 rounded-full blur-3xl"></div>

        <div className="container mx-auto px-4 md:px-6 relative">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
            <FadeInSection>
              <div>
                <div className="space-y-2">
                  <div className="inline-block rounded-lg bg-gradient-to-r from-[#26A69A]/20 to-[#FF7043]/20 px-3 py-1 text-sm font-medium">
                    About Taskbounce
                  </div>
                  <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Our Story</h2>
                </div>
                <div className="mt-4 space-y-4">
                  <p className="text-gray-500">
                    Founded in 2024, Taskbounce is a BrandBounce-backed service offering affordable, high-quality
                    virtual assistance and back-office support.
                  </p>
                  <p className="text-gray-500">
                    Based in Dhaka, Bangladesh, we harness global talent to deliver Western-standard work at local
                    rates. With 24/5 coverage, AI-enhanced quality control, and encrypted security, we empower startups,
                    creatives, and SMEs to scale effortlessly.
                  </p>
                </div>
                <div className="mt-6 flex flex-col gap-2 min-[400px]:flex-row">
                  <Button className="bg-[#26A69A] hover:bg-[#1E8A7E] relative overflow-hidden group">
                    <span className="relative z-10">Learn More About Us</span>
                    <motion.div
                      className="absolute inset-0 bg-[#1E8A7E]"
                      initial={{ x: "-100%" }}
                      whileHover={{ x: 0 }}
                      transition={{ type: "tween", ease: "easeInOut", duration: 0.3 }}
                    />
                  </Button>
                </div>
              </div>
            </FadeInSection>

            <FadeInSection delay={0.2}>
              <div className="flex justify-center">
                <div className="relative w-full max-w-md">
                  <div className="absolute -left-4 -top-4 h-72 w-72 rounded-full bg-[#26A69A]/10 blur-3xl"></div>
                  <div className="absolute -bottom-4 -right-4 h-72 w-72 rounded-full bg-[#FF7043]/10 blur-3xl"></div>
                  <motion.div
                    className="relative rounded-xl border bg-white p-8 shadow-lg"
                    initial={{ rotate: 0 }}
                    animate={{ rotate: [0, 1, 0, -1, 0] }}
                    transition={{ duration: 5, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
                  >
                    <div className="space-y-4">
                      <div className="flex items-center gap-4">
                        <div className="rounded-full bg-[#26A69A]/10 p-2">
                          <CheckCircle className="h-6 w-6 text-[#26A69A]" />
                        </div>
                        <div>
                          <h3 className="font-semibold">24/5 Support</h3>
                          <p className="text-sm text-gray-500">Always available when you need us</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-4">
                        <div className="rounded-full bg-[#FF7043]/10 p-2">
                          <CheckCircle className="h-6 w-6 text-[#FF7043]" />
                        </div>
                        <div>
                          <h3 className="font-semibold">AI-Enhanced QC</h3>
                          <p className="text-sm text-gray-500">Quality control at every step</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-4">
                        <div className="rounded-full bg-[#26A69A]/10 p-2">
                          <CheckCircle className="h-6 w-6 text-[#26A69A]" />
                        </div>
                        <div>
                          <h3 className="font-semibold">Encrypted Security</h3>
                          <p className="text-sm text-gray-500">Your data is always protected</p>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                </div>
              </div>
            </FadeInSection>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="w-full py-12 md:py-24 lg:py-32 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <FadeInSection>
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-gradient-to-r from-[#26A69A]/20 to-[#FF7043]/20 px-3 py-1 text-sm font-medium">
                  Get in Touch
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  Ready to Delegate with Confidence?
                </h2>
                <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Contact us today to get started with your virtual assistance needs.
                </p>
              </div>
            </div>
          </FadeInSection>

          <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 md:grid-cols-2 lg:gap-12 mt-12">
            <FadeInSection delay={0.1}>
              <div>
                <Card className="border-none shadow-lg h-full bg-gradient-to-br from-white to-[#26A69A]/5">
                  <CardHeader>
                    <CardTitle>Contact Information</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex items-center">
                      <Mail className="mr-2 h-5 w-5 text-[#26A69A]" />
                      <span>hello@taskbounce.com</span>
                    </div>
                    <div className="flex items-center">
                      <Calendar className="mr-2 h-5 w-5 text-[#26A69A]" />
                      <span>24/5 Support Available</span>
                    </div>
                    <div className="mt-6">
                      <Button className="w-full bg-[#FF7043] hover:bg-[#F4511E] relative overflow-hidden group">
                        <span className="relative z-10">Book a Call</span>
                        <motion.div
                          className="absolute inset-0 bg-[#F4511E]"
                          initial={{ x: "-100%" }}
                          whileHover={{ x: 0 }}
                          transition={{ type: "tween", ease: "easeInOut", duration: 0.3 }}
                        />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </FadeInSection>

            <FadeInSection delay={0.2}>
              <div>
                <Card className="border-none shadow-lg h-full bg-gradient-to-br from-white to-[#FF7043]/5">
                  <CardHeader>
                    <CardTitle>Send Us a Message</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <form className="space-y-4">
                      <div className="grid grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Input placeholder="First Name" className="border-[#26A69A]/20 focus:border-[#26A69A]" />
                        </div>
                        <div className="space-y-2">
                          <Input placeholder="Last Name" className="border-[#26A69A]/20 focus:border-[#26A69A]" />
                        </div>
                      </div>
                      <div className="space-y-2">
                        <Input placeholder="Email" className="border-[#26A69A]/20 focus:border-[#26A69A]" />
                      </div>
                      <div className="space-y-2">
                        <Input placeholder="Subject" className="border-[#26A69A]/20 focus:border-[#26A69A]" />
                      </div>
                      <div className="space-y-2">
                        <textarea
                          className="flex min-h-[100px] w-full rounded-md border border-[#26A69A]/20 bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:border-[#26A69A] focus-visible:ring-2 focus-visible:ring-[#26A69A]/20 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                          placeholder="Your Message"
                        />
                      </div>
                      <Button className="w-full bg-[#26A69A] hover:bg-[#1E8A7E] relative overflow-hidden group">
                        <span className="relative z-10">Send Message</span>
                        <motion.div
                          className="absolute inset-0 bg-[#1E8A7E]"
                          initial={{ x: "-100%" }}
                          whileHover={{ x: 0 }}
                          transition={{ type: "tween", ease: "easeInOut", duration: 0.3 }}
                        />
                      </Button>
                    </form>
                  </CardContent>
                </Card>
              </div>
            </FadeInSection>
          </div>
        </div>
      </section>
    </>
  )
}
