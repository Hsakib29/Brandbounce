"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { FadeInSection } from "@/components/ui/fade-in-section"
import {
  Mail,
  Database,
  Calendar,
  FileSpreadsheet,
  ShoppingCart,
  PenTool,
  Users,
  BarChart4,
  ShoppingBag,
  ClipboardList,
  MessageSquare,
  Megaphone,
  Edit,
} from "lucide-react"
import { motion } from "framer-motion"

export function ServicesSection() {
  return (
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
              <TabsList className="grid w-full grid-cols-3 bg-gradient-to-r from-[#26A69A]/10 to-[#FF7043]/10 relative">
                <TabsTrigger value="virtual" className="data-[state=active]:bg-white relative group">
                  <span>Virtual Assistance</span>
                  <motion.div
                    className="absolute inset-0 bg-[#26A69A]/10 opacity-0 group-hover:opacity-100 rounded-sm pointer-events-none"
                    initial={{ opacity: 0 }}
                    whileHover={{ opacity: 1 }}
                    transition={{ duration: 0.2 }}
                  />
                  <div className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 text-xs text-[#26A69A] opacity-0 group-hover:opacity-100 whitespace-nowrap">
                    Click to view
                  </div>
                </TabsTrigger>
                <TabsTrigger value="data" className="data-[state=active]:bg-white relative group">
                  <span>Data & E-Commerce</span>
                  <motion.div
                    className="absolute inset-0 bg-[#FF7043]/10 opacity-0 group-hover:opacity-100 rounded-sm pointer-events-none"
                    initial={{ opacity: 0 }}
                    whileHover={{ opacity: 1 }}
                    transition={{ duration: 0.2 }}
                  />
                  <div className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 text-xs text-[#FF7043] opacity-0 group-hover:opacity-100 whitespace-nowrap">
                    Click to view
                  </div>
                </TabsTrigger>
                <TabsTrigger value="creative" className="data-[state=active]:bg-white relative group">
                  <span>Creative Tasks</span>
                  <motion.div
                    className="absolute inset-0 bg-[#26A69A]/10 opacity-0 group-hover:opacity-100 rounded-sm pointer-events-none"
                    initial={{ opacity: 0 }}
                    whileHover={{ opacity: 1 }}
                    transition={{ duration: 0.2 }}
                  />
                  <div className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 text-xs text-[#26A69A] opacity-0 group-hover:opacity-100 whitespace-nowrap">
                    Click to view
                  </div>
                </TabsTrigger>
              </TabsList>

              {/* Virtual Assistance Tab */}
              <TabsContent value="virtual" className="mt-10">
                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
                  <motion.div whileHover={{ scale: 1.03 }} transition={{ type: "spring", stiffness: 400 }}>
                    <Card className="border-none shadow-md h-full">
                      <CardHeader className="pb-2">
                        <div className="rounded-full bg-[#26A69A]/10 p-2 w-12 h-12 flex items-center justify-center mb-4">
                          <Mail className="h-6 w-6 text-[#26A69A]" />
                        </div>
                        <CardTitle className="text-lg">Remote Virtual Assistance</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <CardDescription className="text-base">
                          General administrative support, scheduling, and communication management.
                        </CardDescription>
                      </CardContent>
                    </Card>
                  </motion.div>

                  <motion.div whileHover={{ scale: 1.03 }} transition={{ type: "spring", stiffness: 400 }}>
                    <Card className="border-none shadow-md h-full">
                      <CardHeader className="pb-2">
                        <div className="rounded-full bg-[#26A69A]/10 p-2 w-12 h-12 flex items-center justify-center mb-4">
                          <ClipboardList className="h-6 w-6 text-[#26A69A]" />
                        </div>
                        <CardTitle className="text-lg">Online Survey Coordination</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <CardDescription className="text-base">
                          Organizing and managing surveys, including participant outreach and data collection logistics.
                        </CardDescription>
                      </CardContent>
                    </Card>
                  </motion.div>

                  <motion.div whileHover={{ scale: 1.03 }} transition={{ type: "spring", stiffness: 400 }}>
                    <Card className="border-none shadow-md h-full">
                      <CardHeader className="pb-2">
                        <div className="rounded-full bg-[#26A69A]/10 p-2 w-12 h-12 flex items-center justify-center mb-4">
                          <Users className="h-6 w-6 text-[#26A69A]" />
                        </div>
                        <CardTitle className="text-lg">Sales Operations Support</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <CardDescription className="text-base">
                          Assisting with sales processes, CRM management, and client follow-ups.
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
                        <CardTitle className="text-lg">Calendar Management</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <CardDescription className="text-base">
                          Scheduling appointments, organizing meetings, and managing your time efficiently.
                        </CardDescription>
                      </CardContent>
                    </Card>
                  </motion.div>
                </div>
              </TabsContent>

              {/* Data & E-Commerce Tab */}
              <TabsContent value="data" className="mt-10">
                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                  <motion.div whileHover={{ scale: 1.03 }} transition={{ type: "spring", stiffness: 400 }}>
                    <Card className="border-none shadow-md h-full">
                      <CardHeader className="pb-2">
                        <div className="rounded-full bg-[#FF7043]/10 p-2 w-12 h-12 flex items-center justify-center mb-4">
                          <Users className="h-6 w-6 text-[#FF7043]" />
                        </div>
                        <CardTitle className="text-lg">Lead Generation & Research</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <CardDescription className="text-base">
                          Identifying and researching potential clients or customers.
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
                        <CardTitle className="text-lg">Data Entry & Annotation</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <CardDescription className="text-base">
                          Inputting, organizing, and labeling data for various applications.
                        </CardDescription>
                      </CardContent>
                    </Card>
                  </motion.div>

                  <motion.div whileHover={{ scale: 1.03 }} transition={{ type: "spring", stiffness: 400 }}>
                    <Card className="border-none shadow-md h-full">
                      <CardHeader className="pb-2">
                        <div className="rounded-full bg-[#FF7043]/10 p-2 w-12 h-12 flex items-center justify-center mb-4">
                          <BarChart4 className="h-6 w-6 text-[#FF7043]" />
                        </div>
                        <CardTitle className="text-lg">Market Research & Analysis</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <CardDescription className="text-base">
                          Collecting and analyzing market data to inform business strategies.
                        </CardDescription>
                      </CardContent>
                    </Card>
                  </motion.div>

                  <motion.div whileHover={{ scale: 1.03 }} transition={{ type: "spring", stiffness: 400 }}>
                    <Card className="border-none shadow-md h-full">
                      <CardHeader className="pb-2">
                        <div className="rounded-full bg-[#FF7043]/10 p-2 w-12 h-12 flex items-center justify-center mb-4">
                          <ShoppingBag className="h-6 w-6 text-[#FF7043]" />
                        </div>
                        <CardTitle className="text-lg">Amazon/eBay Listing Management</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <CardDescription className="text-base">
                          Creating and optimizing product listings on e-commerce platforms.
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
                        <CardTitle className="text-lg">Order Processing & Dispatch</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <CardDescription className="text-base">
                          Handling order fulfillment, shipping, and logistics.
                        </CardDescription>
                      </CardContent>
                    </Card>
                  </motion.div>

                  <motion.div whileHover={{ scale: 1.03 }} transition={{ type: "spring", stiffness: 400 }}>
                    <Card className="border-none shadow-md h-full">
                      <CardHeader className="pb-2">
                        <div className="rounded-full bg-[#FF7043]/10 p-2 w-12 h-12 flex items-center justify-center mb-4">
                          <FileSpreadsheet className="h-6 w-6 text-[#FF7043]" />
                        </div>
                        <CardTitle className="text-lg">Store Bookkeeping & Maintenance</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <CardDescription className="text-base">
                          Managing financial records and maintaining e-commerce store operations.
                        </CardDescription>
                      </CardContent>
                    </Card>
                  </motion.div>
                </div>
              </TabsContent>

              {/* Creative Tasks Tab */}
              <TabsContent value="creative" className="mt-10">
                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
                  <motion.div whileHover={{ scale: 1.03 }} transition={{ type: "spring", stiffness: 400 }}>
                    <Card className="border-none shadow-md h-full">
                      <CardHeader className="pb-2">
                        <div className="rounded-full bg-[#26A69A]/10 p-2 w-12 h-12 flex items-center justify-center mb-4">
                          <MessageSquare className="h-6 w-6 text-[#26A69A]" />
                        </div>
                        <CardTitle className="text-lg">Social Media Management</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <CardDescription className="text-base">
                          Developing and executing social media strategies, including content creation and engagement.
                        </CardDescription>
                      </CardContent>
                    </Card>
                  </motion.div>

                  <motion.div whileHover={{ scale: 1.03 }} transition={{ type: "spring", stiffness: 400 }}>
                    <Card className="border-none shadow-md h-full">
                      <CardHeader className="pb-2">
                        <div className="rounded-full bg-[#26A69A]/10 p-2 w-12 h-12 flex items-center justify-center mb-4">
                          <Megaphone className="h-6 w-6 text-[#26A69A]" />
                        </div>
                        <CardTitle className="text-lg">Digital Marketing Campaigns</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <CardDescription className="text-base">
                          Designing and managing online advertising and promotional campaigns.
                        </CardDescription>
                      </CardContent>
                    </Card>
                  </motion.div>

                  <motion.div whileHover={{ scale: 1.03 }} transition={{ type: "spring", stiffness: 400 }}>
                    <Card className="border-none shadow-md h-full">
                      <CardHeader className="pb-2">
                        <div className="rounded-full bg-[#26A69A]/10 p-2 w-12 h-12 flex items-center justify-center mb-4">
                          <Edit className="h-6 w-6 text-[#26A69A]" />
                        </div>
                        <CardTitle className="text-lg">Content Writing & Editing</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <CardDescription className="text-base">
                          Crafting and refining written content for websites, blogs, or marketing materials.
                        </CardDescription>
                      </CardContent>
                    </Card>
                  </motion.div>

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
                          Creating social media graphics, simple flyers, and presentation slides.
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
  )
}
