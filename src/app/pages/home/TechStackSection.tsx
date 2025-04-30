"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Code,
  Server,
  Smartphone,
  Database,
  GitBranch,
  Cloud,
} from "lucide-react";

export default function TechStackSection() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  // Scroll-based animations
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "25%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.85], [1, 0.25]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.97]);

  const techStack = [
    {
      category: "Frontend",
      icon: <Code className="w-8 h-8" />,
      technologies: [
        { name: "React", color: "text-cyan-500" },
        { name: "Next.js", color: "text-gray-900 dark:text-gray-100" },
        { name: "TypeScript", color: "text-blue-600" },
        { name: "Tailwind CSS", color: "text-teal-500" },
      ],
      color: "from-cyan-500 to-blue-500",
    },
    {
      category: "Backend",
      icon: <Server className="w-8 h-8" />,
      technologies: [
        { name: "Node.js", color: "text-green-500" },
        { name: "Express", color: "text-gray-700 dark:text-gray-300" },
        { name: "NestJS", color: "text-red-500" },
        { name: "GraphQL", color: "text-pink-500" },
      ],
      color: "from-purple-500 to-indigo-500",
    },
    {
      category: "Mobile",
      icon: <Smartphone className="w-8 h-8" />,
      technologies: [
        { name: "React Native", color: "text-cyan-500" },
        { name: "Flutter", color: "text-blue-400" },
        { name: "Swift", color: "text-orange-500" },
        { name: "Kotlin", color: "text-purple-500" },
      ],
      color: "from-emerald-500 to-teal-500",
    },
    {
      category: "Database",
      icon: <Database className="w-8 h-8" />,
      technologies: [
        { name: "PostgreSQL", color: "text-blue-600" },
        { name: "MongoDB", color: "text-green-500" },
        { name: "Redis", color: "text-red-600" },
        { name: "Firebase", color: "text-yellow-500" },
      ],
      color: "from-amber-500 to-orange-500",
    },
    {
      category: "DevOps",
      icon: <GitBranch className="w-8 h-8" />,
      technologies: [
        { name: "Docker", color: "text-blue-500" },
        { name: "Kubernetes", color: "text-blue-600" },
        { name: "AWS", color: "text-orange-500" },
        { name: "CI/CD", color: "text-gray-600 dark:text-gray-400" },
      ],
      color: "from-indigo-500 to-blue-500",
    },
    {
      category: "Cloud",
      icon: <Cloud className="w-8 h-8" />,
      technologies: [
        { name: "AWS", color: "text-orange-500" },
        { name: "Azure", color: "text-blue-600" },
        { name: "Google Cloud", color: "text-red-500" },
        { name: "Vercel", color: "text-gray-900 dark:text-gray-100" },
      ],
      color: "from-pink-500 to-red-500",
    },
  ];

  return (
    <section
      ref={ref}
      className="relative pt-28 overflow-hidden bg-gradient-to-t from-gray-100 to-white dark:from-gray-900 dark:to-gray-950"
    >
      <div className="sticky top-0 h-screen flex items-center justify-center">
        <motion.div
          style={{ y, opacity, scale }}
          className="container px-4 md:px-8 max-w-7xl"
        >
          <div className="text-center mb-16">
            <motion.h2
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="text-4xl md:text-6xl font-extrabold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-cyan-500 to-purple-500"
            >
              <div className="text-4xl md:text-5xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-500 dark:from-blue-400 dark:to-purple-400">
                Our Technology Arsenal
              </div>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
              className="text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto mt-6"
            >
              Harnessing the power of modern technologies to build innovative,
              scalable, and high-performance solutions.
            </motion.p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {techStack.map((tech, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.7,
                  delay: index * 0.1,
                  type: "spring",
                  stiffness: 100,
                }}
                whileHover={{
                  y: -10,
                  scale: 1.03,
                  transition: { duration: 0.3 },
                }}
              >
                <Card className="relative h-full overflow-hidden bg-white dark:bg-gray-800/50 backdrop-blur-sm border-none shadow-xl hover:shadow-2xl transition-all duration-300">
                  <div
                    className={`absolute inset-0 bg-gradient-to-r ${tech.color} opacity-5`}
                  />
                  <CardHeader className="flex flex-row items-center gap-4">
                    <motion.div
                      className={`p-3 rounded-full bg-gradient-to-r ${tech.color} bg-opacity-20`}
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.5 }}
                    >
                      {tech.icon}
                    </motion.div>
                    <CardTitle className="text-2xl font-bold text-gray-800 dark:text-gray-100">
                      {tech.category}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      {tech.technologies.map((item, i) => (
                        <motion.div
                          key={i}
                          initial={{ opacity: 0, x: -30 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{
                            delay: 0.3 + index * 0.1 + i * 0.08,
                            duration: 0.5,
                          }}
                          className="flex items-center gap-3"
                        >
                          <span
                            className={`h-2 w-2 rounded-full bg-gradient-to-r ${tech.color}`}
                          />
                          <span className={`text-sm font-medium ${item.color}`}>
                            {item.name}
                          </span>
                        </motion.div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex justify-center mt-16"
          >
            <Button
              size="lg"
              className="bg-gradient-to-r from-cyan-500 to-purple-500 hover:from-cyan-600 hover:to-purple-600 text-white font-semibold px-8 py-3 rounded-full"
            >
              Discover Our Tech
            </Button>
          </motion.div>
        </motion.div>
      </div>

      {/* Animated background elements */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.12 }}
        transition={{ duration: 2 }}
        className="absolute inset-0 pointer-events-none"
      >
        <div className="absolute top-1/4 left-1/6 w-80 h-80 rounded-full bg-cyan-500 blur-3xl opacity-20 animate-pulse" />
        <div className="absolute bottom-1/4 right-1/6 w-96 h-96 rounded-full bg-purple-500 blur-3xl opacity-15 animate-pulse delay-1000" />
        <div className="absolute top-3/4 left-1/3 w-64 h-64 rounded-full bg-teal-500 blur-3xl opacity-18 animate-pulse delay-2000" />
      </motion.div>
    </section>
  );
}
