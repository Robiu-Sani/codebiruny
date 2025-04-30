"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ChevronRight, Quote } from "lucide-react";

const partners = [
  {
    name: "TechNova",
    logo: "/logos/technova.svg",
    testimonial:
      "Their team solved complex scalability issues that had plagued us for months.",
    industry: "Cloud Computing",
  },
  {
    name: "Finova",
    logo: "/logos/finova.svg",
    testimonial:
      "The most reliable tech partner we've worked with in the past decade.",
    industry: "Financial Services",
  },
  {
    name: "HealthStack",
    logo: "/logos/healthstack.svg",
    testimonial:
      "Compliant, secure, and innovative - exactly what healthcare tech needs.",
    industry: "Healthcare",
  },
  {
    name: "EduTech Global",
    logo: "/logos/edutech.svg",
    testimonial:
      "Transformed our learning platform with cutting-edge solutions.",
    industry: "Education",
  },
  {
    name: "GreenFuture",
    logo: "/logos/greenfuture.svg",
    testimonial:
      "Sustainable tech solutions that actually deliver on their promises.",
    industry: "Clean Energy",
  },
  {
    name: "RetailAI",
    logo: "/logos/retailai.svg",
    testimonial: "Revolutionized our customer experience with AI integration.",
    industry: "E-Commerce",
  },
];

export default function PartnersSection() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  // Scroll animations
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.9], [1, 0.3]);
  const scale = useTransform(scrollYProgress, [0, 0.6], [1, 0.95]);

  return (
    <section
      ref={ref}
      className="relative min-h-[100vh] py-16 md:py-24 overflow-hidden bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-950"
    >
      <div className="relative flex items-center justify-center min-h-[calc(100vh-4rem)] md:min-h-screen px-4">
        <motion.div
          style={{ y, opacity, scale }}
          className="container max-w-7xl mx-auto"
        >
          <div className="flex flex-col items-center text-center mb-12 md:mb-16">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="text-3xl md:text-5xl font-extrabold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-500 dark:from-blue-400 dark:to-purple-400"
            >
              Featured Partners & Clients
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
              className="text-base md:text-lg text-gray-600 dark:text-gray-300 max-w-2xl mt-4"
            >
              Clients and partners frequently recommend us for our tailored
              approach to solving complex tech challenges.
            </motion.p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {partners.map((partner, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.6,
                  delay: 0.2 + index * 0.1,
                  type: "spring",
                  stiffness: 100,
                }}
                whileHover={{
                  y: -5,
                  transition: { duration: 0.3 },
                }}
              >
                <Card className="h-full bg-white dark:bg-gray-800/50 backdrop-blur-sm border-none shadow-lg hover:shadow-xl transition-all duration-300 group">
                  <CardHeader className="pb-4">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 md:w-16 md:h-16 rounded-lg bg-gradient-to-br from-gray-100 to-white dark:from-gray-800 dark:to-gray-900 p-2 md:p-3 flex items-center justify-center">
                        {/* Replace with actual logo */}
                        <div className="text-xl md:text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-500">
                          {partner.name
                            .split(" ")
                            .map((word) => word[0])
                            .join("")}
                        </div>
                      </div>
                      <div>
                        <CardTitle className="text-lg md:text-xl">
                          {partner.name}
                        </CardTitle>
                        <p className="text-sm text-gray-600 dark:text-gray-400">
                          {partner.industry}
                        </p>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="relative">
                      <Quote className="absolute -top-2 left-0 w-4 h-4 text-gray-300 dark:text-gray-700" />
                      <p className="pl-6 italic text-sm md:text-base text-gray-600 dark:text-gray-300">
                        {partner.testimonial}
                      </p>
                      <Quote className="absolute bottom-0 right-0 w-4 h-4 text-gray-300 dark:text-gray-700 transform rotate-180" />
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex justify-center mt-12 md:mt-16"
          >
            <Button
              size="lg"
              className="bg-gradient-to-r from-cyan-500 to-purple-500 hover:from-cyan-600 hover:to-purple-600 text-white font-semibold px-6 py-3 md:px-8 md:py-4 rounded-full"
            >
              View All Case Studies
              <ChevronRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
            </Button>
          </motion.div>
        </motion.div>
      </div>

      {/* Animated background elements */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.1 }}
        transition={{ duration: 1.5 }}
        className="absolute inset-0 pointer-events-none"
      >
        <div className="absolute top-1/4 left-1/6 w-48 h-48 md:w-64 md:h-64 rounded-full bg-blue-500 blur-3xl opacity-20 animate-pulse" />
        <div className="absolute bottom-1/4 right-1/6 w-64 h-64 md:w-96 md:h-96 rounded-full bg-purple-500 blur-3xl opacity-15 animate-pulse delay-1000" />
      </motion.div>
    </section>
  );
}
