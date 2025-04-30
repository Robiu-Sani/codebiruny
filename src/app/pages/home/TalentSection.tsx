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

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0.2]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.95]);

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
    <section ref={ref} className="relative h-auth overflow-hidden">
      <div className="sticky top-0 h-screen w-full flex items-center justify-center">
        <motion.div
          style={{ y, opacity, scale }}
          className="container px-4 md:px-6"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="text-4xl md:text-5xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-500 dark:from-blue-400 dark:to-purple-400"
              >
                Leverage World-class Talent
              </motion.h2>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="text-xl text-muted-foreground"
              >
                We are the largest, globally-distributed network of top
                business, design, and technology talent, ready to tackle your
                most important initiatives.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-cyan-500 to-purple-500 hover:from-cyan-600 hover:to-purple-600 text-white font-semibold px-8 py-3 rounded-full"
                >
                  Explore Our Talent Pool
                </Button>
              </motion.div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {talents.map((talent, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.6,
                    delay: 0.2 + index * 0.1,
                    type: "spring",
                    damping: 10,
                    stiffness: 100,
                  }}
                  whileHover={{ y: -5 }}
                >
                  <Card className="h-full hover:shadow-lg transition-shadow">
                    <CardHeader className="flex flex-row items-center gap-4 pb-2">
                      <div
                        className={`p-3 rounded-full ${talent.color.replace(
                          "text",
                          "bg"
                        )}/20`}
                      >
                        {talent.icon}
                      </div>
                      <CardTitle className={talent.color}>
                        {talent.title}
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground">
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
        transition={{ duration: 1 }}
        className="absolute inset-0 pointer-events-none"
      >
        <div className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-blue-500 blur-[100px] opacity-30" />
        <div className="absolute top-1/3 right-1/4 w-96 h-96 rounded-full bg-purple-500 blur-[150px] opacity-20" />
      </motion.div>
    </section>
  );
}
