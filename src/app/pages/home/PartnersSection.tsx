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
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0.3]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.98]);

  return (
    <section
      ref={ref}
      className="relative  pt-10 overflow-hidden bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-950"
    >
      <div className="sticky top-0 h-screen w-full flex items-center justify-center">
        <motion.div
          style={{ y, opacity, scale }}
          className="container px-4 md:px-6"
        >
          <div className="flex flex-col items-center text-center mb-16">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-4xl md:text-5xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-500 dark:from-blue-400 dark:to-purple-400"
            >
              Featured Partners & Clients
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-xl text-muted-foreground max-w-3xl mt-6"
            >
              Clients and partners we`ve worked with frequently recommend us to
              others thanks to our individual approach to tech problems.
            </motion.p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {partners.map((partner, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.6,
                  delay: 0.2 + index * 0.1,
                  type: "spring",
                  damping: 10,
                  stiffness: 100,
                }}
                whileHover={{
                  y: -5,
                  transition: { duration: 0.2 },
                }}
              >
                <Card className="h-full hover:shadow-lg transition-all duration-300 group">
                  <CardHeader className="pb-4">
                    <div className="flex items-center gap-4">
                      <div className="w-16 h-16 rounded-lg bg-gradient-to-br from-gray-100 to-white dark:from-gray-800 dark:to-gray-900 p-3 flex items-center justify-center">
                        {/* Replace with actual logo */}
                        <div className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-500">
                          {partner.name
                            .split(" ")
                            .map((word) => word[0])
                            .join("")}
                        </div>
                      </div>
                      <div>
                        <CardTitle>{partner.name}</CardTitle>
                        <p className="text-sm text-muted-foreground">
                          {partner.industry}
                        </p>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="relative">
                      <Quote className="absolute -top-2 left-0 w-4 h-4 text-gray-300 dark:text-gray-700" />
                      <p className="pl-6 italic text-muted-foreground">
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
            className="flex justify-center mt-16"
          >
            <Button
              size="lg"
              variant="outline"
              className="bg-gradient-to-r from-cyan-500 to-purple-500 hover:from-cyan-600 hover:to-purple-600 text-white font-semibold px-8 py-3 rounded-full"
            >
              View All Case Studies
              <ChevronRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Button>
          </motion.div>
        </motion.div>
      </div>

      {/* Animated background elements */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.1 }}
        transition={{ duration: 1.5 }}
        className="absolute inset-0 pointer-events-none overflow-hidden"
      >
        <div className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-blue-500 blur-[120px] opacity-20" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full bg-purple-500 blur-[150px] opacity-15" />
      </motion.div>
    </section>
  );
}
