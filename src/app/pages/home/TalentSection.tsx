"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Globe, Users, Rocket, Award, ShieldCheck } from "lucide-react";

export default function TalentSection() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0.3]);
  const scale = useTransform(scrollYProgress, [0, 0.6], [1, 0.97]);

  const talents = [
    {
      icon: <Globe className="w-6 h-6" />,
      title: "Global Network",
      description: "Access top talent from 100+ countries across all timezones",
      color: "text-blue-500",
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Elite Professionals",
      description: "Only the top 3% of applicants make it through our vetting",
      color: "text-purple-500",
    },
    {
      icon: <Rocket className="w-6 h-6" />,
      title: "Rapid Scaling",
      description: "Scale your team up or down in days, not months",
      color: "text-emerald-500",
    },
    {
      icon: <Award className="w-6 h-6" />,
      title: "Proven Excellence",
      description: "Trusted by Fortune 500 companies and startups alike",
      color: "text-amber-500",
    },
    {
      icon: <ShieldCheck className="w-6 h-6" />,
      title: "Secure Collaboration",
      description: "Enterprise-grade security for all your projects",
      color: "text-indigo-500",
    },
  ];

  return (
    <section
      ref={ref}
      className="relative min-h-[100vh] py-16 md:py-24 overflow-hidden bg-gradient-to-b from-white to-gray-50 dark:from-gray-950 dark:to-gray-900"
    >
      <div className="relative flex items-center justify-center min-h-[calc(100vh-4rem)] md:min-h-screen px-4">
        <motion.div
          style={{ y, opacity, scale }}
          className="container max-w-7xl mx-auto"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center">
            <div className="space-y-6 text-center lg:text-left">
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="text-3xl md:text-5xl font-extrabold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-500 dark:from-blue-400 dark:to-purple-400"
              >
                Leverage World-class Talent
              </motion.h2>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                className="text-base md:text-lg text-gray-600 dark:text-gray-300 max-w-xl mx-auto lg:mx-0"
              >
                We are the largest, globally-distributed network of top
                business, design, and technology talent, ready to tackle your
                most important initiatives.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
              >
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-cyan-500 to-purple-500 hover:from-cyan-600 hover:to-purple-600 text-white font-semibold px-6 py-3 md:px-8 md:py-4 rounded-full"
                >
                  Explore Our Talent Pool
                </Button>
              </motion.div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
              {talents.map((talent, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
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
                  <Card className="h-full bg-white dark:bg-gray-800/50 backdrop-blur-sm border-none shadow-lg hover:shadow-xl transition-all duration-300">
                    <CardHeader className="flex flex-row items-center gap-4 pb-2">
                      <div
                        className={`p-3 rounded-full ${talent.color.replace(
                          "text",
                          "bg"
                        )}/20`}
                      >
                        {talent.icon}
                      </div>
                      <CardTitle
                        className={`text-lg md:text-xl ${talent.color}`}
                      >
                        {talent.title}
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm md:text-base text-gray-600 dark:text-gray-300">
                        {talent.description}
                      </p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>

      {/* Background elements */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.1 }}
        transition={{ duration: 1.5 }}
        className="absolute inset-0 pointer-events-none"
      >
        <div className="absolute top-1/4 left-1/6 w-48 h-48 md:w-64 md:h-64 rounded-full bg-blue-500 blur-3xl opacity-30 animate-pulse" />
        <div className="absolute top-1/3 right-1/6 w-64 h-64 md:w-96 md:h-96 rounded-full bg-purple-500 blur-3xl opacity-20 animate-pulse delay-1000" />
      </motion.div>
    </section>
  );
}
