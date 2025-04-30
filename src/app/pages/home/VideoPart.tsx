"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Code,
  Cpu,
  Database,
  LayoutTemplate,
  MessageCircle,
  TestTube2,
} from "lucide-react";

export default function VideoPart() {
  const [activeIndex, setActiveIndex] = useState(0);

  const worksystem = [
    {
      icon: MessageCircle,
      title: "Discovery",
      description:
        "Collaborative sessions to gather requirements and define project goals.",
    },
    {
      icon: LayoutTemplate,
      title: "Prototyping",
      description:
        "Crafting wireframes and interactive prototypes to shape the vision.",
    },
    {
      icon: Database,
      title: "Data Architecture",
      description:
        "Designing robust and scalable data models for seamless performance.",
    },
    {
      icon: Cpu,
      title: "Framework Setup",
      description:
        "Leveraging our custom framework for accelerated development.",
    },
    {
      icon: Code,
      title: "Coding",
      description:
        "Writing clean, modular code using cutting-edge technologies.",
    },
    {
      icon: TestTube2,
      title: "Quality Assurance",
      description:
        "Comprehensive testing to deliver a polished, bug-free product.",
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) =>
        prevIndex === worksystem.length ? 0 : prevIndex + 1
      );
    }, 4000);
    return () => clearInterval(interval);
  }, [worksystem.length]);

  const handleDotClick = (index: number) => {
    setActiveIndex(index);
  };

  return (
    <section className="w-full container mx-auto py-12 md:py-16 lg:py-24 bg-gradient-to-b from-white to-gray-50 dark:from-gray-950 dark:to-gray-900">
      <div className="container px-4 md:px-6 max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Video Section */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative w-full max-w-2xl mx-auto lg:mx-0 aspect-video overflow-hidden rounded-2xl shadow-2xl border border-gray-200 dark:border-gray-800"
          >
            <video
              className="h-full w-full object-cover"
              autoPlay
              loop
              muted
              playsInline
            >
              <source src="/video/v1.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent pointer-events-none" />
          </motion.div>

          {/* Work Process Section */}
          <div className="flex flex-col justify-center space-y-2">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="space-y-2 text-center lg:text-left"
            >
              <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-cyan-500 to-purple-500">
                Our Process
              </h2>
              <p className="text-base md:text-lg text-gray-600 dark:text-gray-300 max-w-md mx-auto lg:mx-0">
                A streamlined approach to deliver exceptional results, every
                step of the way.
              </p>
            </motion.div>

            {/* Carousel for Mobile, Stack for Desktop */}
            <div className="relative w-full h-[200px] overflow-hidden">
              <AnimatePresence initial={false}>
                <motion.div
                  key={activeIndex}
                  className="absolute inset-0 flex flex-col md:flex-row items-center justify-center gap-4 md:gap-6 px-4"
                  initial={{ opacity: 0, x: 100 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -100 }}
                  transition={{ duration: 0.5, ease: "easeInOut" }}
                >
                  {worksystem.map((item, idx) => {
                    const Icon = item.icon;
                    const isActive = idx === activeIndex;

                    return (
                      <Card
                        key={`${item.title}-${idx}`}
                        className={`
                          w-full min-w-[250px] max-w-[250px] -py-10 transition-all duration-300
                          ${
                            isActive
                              ? "scale-100 opacity-100 shadow-xl z-10"
                              : "scale-95 opacity-60 md:opacity-80"
                          }
                          bg-white dark:bg-gray-800/80 backdrop-blur-sm border-none
                        `}
                      >
                        <CardHeader className="flex flex-row items-center gap-3">
                          <motion.div
                            className={`
                              p-3 rounded-full
                              ${
                                isActive
                                  ? "bg-gradient-to-r from-cyan-500 to-purple-500"
                                  : "bg-gray-200 dark:bg-gray-700"
                              }
                            `}
                            animate={isActive ? { rotate: 360 } : { rotate: 0 }}
                            transition={{ duration: 1 }}
                          >
                            <Icon
                              className={`
                                w-6 h-6
                                ${
                                  isActive
                                    ? "text-white"
                                    : "text-gray-500 dark:text-gray-400"
                                }
                              `}
                            />
                          </motion.div>
                          <CardTitle
                            className={`
                              text-lg font-semibold
                              ${
                                isActive
                                  ? "text-cyan-600 dark:text-cyan-400"
                                  : "text-gray-600 dark:text-gray-400"
                              }
                            `}
                          >
                            {item.title}
                          </CardTitle>
                        </CardHeader>
                        <CardContent>
                          <p
                            className={`
                              text-sm
                              ${
                                isActive
                                  ? "text-gray-700 dark:text-gray-200"
                                  : "text-gray-500 dark:text-gray-400"
                              }
                            `}
                          >
                            {item.description}
                          </p>
                        </CardContent>
                      </Card>
                    );
                  })}
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Pagination Dots */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="flex justify-center gap-2 mt-4"
            >
              {worksystem.map((_, idx) => (
                <Button
                  key={idx}
                  variant="ghost"
                  size="sm"
                  onClick={() => handleDotClick(idx)}
                  className={`
                    h-2 w-2 p-0 rounded-full transition-all duration-300
                    ${
                      activeIndex === idx
                        ? "bg-gradient-to-r from-cyan-500 to-purple-500 scale-125"
                        : "bg-gray-300 dark:bg-gray-600"
                    }
                  `}
                  aria-label={`Go to step ${idx + 1}`}
                />
              ))}
            </motion.div>
          </div>
        </div>
      </div>

      {/* Animated Background Elements */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.1 }}
        transition={{ duration: 2 }}
        className="absolute inset-0 pointer-events-none"
      >
        <div className="absolute top-1/4 left-1/6 w-64 h-64 rounded-full bg-cyan-500 blur-3xl opacity-20 animate-pulse" />
        <div className="absolute bottom-1/4 right-1/6 w-80 h-80 rounded-full bg-purple-500 blur-3xl opacity-15 animate-pulse delay-1000" />
      </motion.div>
    </section>
  );
}
