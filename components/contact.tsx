"use client";

import type React from "react";
import { useState } from "react";
import { motion } from "framer-motion";
import { Send, Mail, Phone, MapPin } from "lucide-react";
import { BlurFade } from "./blur-fade";
import { BorderBeam } from "./border-beam";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);

    try {
      const response = await fetch("https://formspree.io/f/mpwdyalk", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setIsSubmitted(true);
        setFormData({ name: "", email: "", phone: "", message: "" });
        setTimeout(() => setIsSubmitted(false), 5000);
      } else {
        throw new Error("Failed to send the message. Please try again.");
      }
    } catch (err) {
      setError(
        err instanceof Error ? err.message : "An unexpected error occurred.",
      );
    }
  };

  return (
    <section id="contact" className="py-20 relative bg-white dark:bg-gray-900">
      {/* Background circles */}
      <div className="absolute inset-0 overflow-hidden z-0">
        <div className="absolute top-[45%] right-0 w-[300px] h-[300px] md:w-[500px] md:h-[500px] rounded-full bg-gradient-to-br from-brand-blue to-blue-500 opacity-80 translate-x-1/20 -translate-y-1/2"></div>
        <div className="absolute bottom-[30%] left-0 w-[300px] h-[300px] md:w-[500px] md:h-[500px] rounded-full bg-gradient-to-br from-brand-orange to-yellow-500 opacity-80 -translate-x-1/20 translate-y-1/2"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-block">
            <div className="group rounded-full border border-black/5 dark:border-white/5 bg-white dark:bg-gray-800 text-base transition-all ease-in hover:cursor-pointer hover:bg-gray-50 dark:hover:bg-gray-700">
              <div className="relative overflow-hidden rounded-full">
                <h2 className="inline-flex items-center justify-center px-4 py-1 text-sm uppercase tracking-wider text-brand-blue transition ease-out">
                  Contact Us
                </h2>
                <div className="absolute inset-0 z-0">
                  <div className="animate-[shine_3s_ease-in-out_infinite] absolute -inset-[100%] h-[500%] w-[50%] -rotate-45 bg-gradient-to-r from-transparent via-white/20 to-transparent rounded-full" />
                </div>
              </div>
            </div>
          </div>
          <h3 className="text-3xl md:text-4xl font-bold mb-4 text-[#0a2540] dark:text-white">
            Let's Start Your Brand Journey
          </h3>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Ready to give your brand the bounce it needs? Get in touch with us
            today to discuss your project.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-12 max-w-6xl mx-auto backdrop-blur-md">
          <div className="lg:w-1/2">
            <BlurFade delay={0.1} inView className="h-full">
              <div className="relative glass-effect rounded-xl p-8 h-full overflow-hidden">
                <BorderBeam
                  size={80}
                  colorFrom="#1E90FF"
                  colorTo="#0066CC"
                  duration={8}
                  initialOffset={20}
                />
                <div className="relative z-20">
                  <h4 className="text-2xl font-bold mb-6 text-brand-blue dark:text-white">
                    Get in Touch
                  </h4>

                  {isSubmitted ? (
                    <motion.div
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.3 }}
                      className="text-center py-12"
                    >
                      <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                        <Send size={24} className="text-green-600" />
                      </div>
                      <h5 className="text-xl font-bold mb-2 text-white">
                        Message Sent!
                      </h5>
                      <p className="text-gray-300">
                        Thank you for reaching out. We'll get back to you
                        shortly!
                      </p>
                    </motion.div>
                  ) : (
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div>
                        <label
                          htmlFor="name"
                          className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
                        >
                          Your Name
                        </label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 rounded-lg border border-gray-600 bg-gray-100 dark:bg-gray-700/20 focus:outline-none focus:ring-2 focus:ring-brand-blue focus:border-transparent text-white"
                          placeholder="John Doe"
                        />
                      </div>

                      <div>
                        <label
                          htmlFor="email"
                          className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
                        >
                          Your Email
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 rounded-lg border border-gray-600 bg-gray-100 dark:bg-gray-700/20 focus:outline-none focus:ring-2 focus:ring-brand-blue focus:border-transparent text-white"
                          placeholder="john@example.com"
                        />
                      </div>

                      <div>
                        <label
                          htmlFor="phone"
                          className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
                        >
                          Your Phone Number (Optional)
                        </label>
                        <input
                          type="tel"
                          id="phone"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          className="w-full px-4 py-3 rounded-lg border border-gray-600 bg-gray-100 dark:bg-gray-700/20 focus:outline-none focus:ring-2 focus:ring-brand-blue focus:border-transparent text-white"
                          placeholder="+44 123 456 7890"
                        />
                        <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
                          Prefer a call? Leave your number, and we’ll reach out within 24 hours!
                        </p>
                      </div>

                      <div>
                        <label
                          htmlFor="message"
                          className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
                        >
                          Your Message
                        </label>
                        <textarea
                          id="message"
                          name="message"
                          value={formData.message}
                          onChange={handleChange}
                          required
                          rows={5}
                          className="w-full px-4 py-3 rounded-lg border border-gray-600 bg-gray-100 dark:bg-gray-700/20 focus:outline-none focus:ring-2 focus:ring-brand-blue focus:border-transparent text-white"
                          placeholder="Tell us about your project..."
                        ></textarea>
                      </div>

                      {error && (
                        <p className="text-red-500 text-sm text-center">
                          {error}
                        </p>
                      )}

                      <motion.button
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        type="submit"
                        className="btn-secondary w-full py-3 px-6 rounded-lg text-white font-medium"
                      >
                        <div className="flex items-center justify-center">
                          <span>Send Message</span>
                          <Send size={18} className="ml-2" />
                        </div>
                      </motion.button>
                    </form>
                  )}
                </div>
              </div>
            </BlurFade>
          </div>

          <div className="lg:w-1/2">
            <BlurFade delay={0.3} inView className="h-full">
              <div className="relative glass-effect rounded-xl p-8 h-full overflow-hidden flex flex-col justify-center">
                <BorderBeam
                  size={80}
                  colorFrom="#FF6200"
                  colorTo="#FF8C00"
                  duration={8}
                  initialOffset={60}
                  reverse={true}
                />
                <div className="relative z-20">
                  <h4 className="text-2xl font-bold mb-6 text-brand-orange dark:text-white">
                    Contact Information
                  </h4>

                  <div className="space-y-8">
                    <div className="flex items-start p-4 rounded-lg">
                      <div className="w-12 h-12 bg-brand-blue/10 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                        <Mail size={20} className="text-brand-blue" />
                      </div>
                      <div>
                        <h5 className="font-bold mb-2 text-gray-900 dark:text-white text-lg">
                          Email Us
                        </h5>
                        <p className="text-gray-600 dark:text-gray-300 mb-2 text-sm">
                          For general inquiries:
                        </p>
                        <a
                          href="mailto:info@brandbounce.com"
                          className="text-brand-blue hover:underline text-lg font-semibold"
                        >
                          info@brandbounce.com
                        </a>
                      </div>
                    </div>

                    <div className="flex items-start p-4 rounded-lg">
                      <div className="w-12 h-12 bg-brand-orange/10 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                        <Send size={20} className="text-brand-orange" />
                      </div>
                      <div>
                        <h5 className="font-bold mb-2 text-gray-900 dark:text-white text-lg">
                          Reach Out to Us
                        </h5>
                        <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                          We’re a <span className="font-semibold text-brand-orange">global team</span> ready to make your brand pop! You don’t need to call us—we’ll call you. Just leave your contact info (including your phone number if you’d like a call) in the contact form, and we’ll get back to you within 24 hours.
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start hidden">
                      <div className="w-12 h-12 bg-brand-blue/10 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                        <MapPin size={20} className="text-brand-blue hidden" />
                      </div>
                      <div>
                        <h5 className="font-bold mb-1 text-gray-900 dark:text-white">
                          Visit Us
                        </h5>
                        <p className="text-gray-600 dark:text-gray-300">
                          123 Creative Street
                          <br />
                          London, UK
                          <br />
                          EC1A 1BB
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="mt-12">
                    <h5 className="font-bold mb-4 text-gray-900 dark:text-white">
                      Follow Us
                    </h5>
                    <div className="flex space-x-4">
                      <a
                        href="#"
                        className="w-10 h-10 bg-gray-200 dark:bg-gray-800 rounded-full flex items-center justify-center hover:bg-brand-blue hover:text-white transition-colors"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="20"
                          height="20"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="text-gray-600 dark:text-gray-300 hover:text-white"
                        >
                          <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                        </svg>
                      </a>
                      <a
                        href="#"
                        className="w-10 h-10 bg-gray-200 dark:bg-gray-800 rounded-full flex items-center justify-center hover:bg-brand-blue hover:text-white transition-colors"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="20"
                          height="20"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="text-gray-600 dark:text-gray-300 hover:text-white"
                        >
                          <rect
                            x="2"
                            y="2"
                            width="20"
                            height="20"
                            rx="5"
                            ry="5"
                          ></rect>
                          <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                          <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                        </svg>
                      </a>
                      <a
                        href="#"
                        className="w-10 h-10 bg-gray-200 dark:bg-gray-800 rounded-full flex items-center justify-center hover:bg-brand-blue hover:text-white transition-colors"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="20"
                          height="20"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="text-gray-600 dark:text-gray-300 hover:text-white"
                        >
                          <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path>
                        </svg>
                      </a>
                      <a
                        href="#"
                        className="w-10 h-10 bg-gray-200 dark:bg-gray-800 rounded-full flex items-center justify-center hover:bg-brand-blue hover:text-white transition-colors"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="20"
                          height="20"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="text-gray-600 dark:text-gray-300 hover:text-white"
                        >
                          <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                          <rect x="2" y="9" width="4" height="12"></rect>
                          <circle cx="4" cy="4" r="2"></circle>
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </BlurFade>
          </div>
        </div>
      </div>

      <style jsx>{`
        .hidden {
          display: none;
        }
      `}</style>
    </section>
  );
};

export default Contact;