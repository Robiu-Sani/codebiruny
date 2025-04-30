"use client";

import {
  Code,
  Cpu,
  Database,
  LayoutTemplate,
  MessageCircle,
  TestTube2,
} from "lucide-react";
import { useAutoAnimate } from "@formkit/auto-animate/react";
import { useEffect, useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function VideoPart() {
  const [parent] = useAutoAnimate();
  const [activeIndex, setActiveIndex] = useState(0);

  const worksystem = [
    {
      icon: MessageCircle,
      title: "Discuss",
      description:
        "We start with thorough requirements gathering and brainstorming sessions",
    },
    {
      icon: LayoutTemplate,
      title: "Make Frame",
      description:
        "Creating wireframes and prototypes to visualize the concept",
    },
    {
      icon: Database,
      title: "Database Design",
      description: "Structuring efficient data models for optimal performance",
    },
    {
      icon: Cpu,
      title: "EIRFRAME",
      description: "Our proprietary framework for rapid development",
    },
    {
      icon: Code,
      title: "Development",
      description: "Clean, maintainable code with modern technologies",
    },
    {
      icon: TestTube2,
      title: "Testing",
      description: "Rigorous QA process to ensure flawless performance",
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % worksystem.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [worksystem.length]);

  const visibleItems = [
    worksystem[(activeIndex - 1 + worksystem.length) % worksystem.length],
    worksystem[activeIndex],
    worksystem[(activeIndex + 1) % worksystem.length],
  ];

  return (
    <section className="w-full py-12 md:py-24 lg:py-32">
      <div className="container grid grid-cols-1 lg:grid-cols-2 gap-8 px-4 md:px-6">
        <div className="flex justify-center">
          <div className="relative aspect-video w-full max-w-2xl overflow-hidden rounded-xl shadow-lg border">
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
          </div>
        </div>

        <div className="flex flex-col justify-center space-y-5">
          <div className="space-y-2 ml-5">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
              How We Work
            </h2>
            <p className="text-muted-foreground">
              Our proven process delivers exceptional results every time
            </p>
          </div>

          <div className="relative h-[280px] w-full overflow-hidden">
            <div
              ref={parent}
              className="absolute inset-0 flex flex-col items-center justify-center gap-1 transition-all duration-500"
            >
              {visibleItems.map((item, idx) => {
                const Icon = item.icon;
                const isActive = idx === 1;
                const isPrev = idx === 0;
                const isNext = idx === 2;

                return (
                  <Card
                    key={`${item.title}-${activeIndex}`}
                    className={`
                      w-full max-w-md transition-all duration-500
                      ${
                        isActive
                          ? "z-10 scale-100 opacity-100 shadow-lg translate-y-0"
                          : "scale-95 opacity-80"
                      }
                      ${
                        isPrev
                          ? "-translate-y-2"
                          : isNext
                          ? "translate-y-2"
                          : ""
                      }
                    `}
                  >
                    <CardHeader>
                      <div className="flex items-center gap-2">
                        <div
                          className={`
                            p-3 rounded-full transition-colors
                            ${isActive ? "bg-primary/10" : "bg-muted"}
                            ${isActive ? "animate-spin-once" : ""}
                          `}
                        >
                          <Icon
                            className={`
                              w-6 h-6
                              ${
                                isActive
                                  ? "text-primary"
                                  : "text-muted-foreground"
                              }
                            `}
                          />
                        </div>
                        <CardTitle
                          className={
                            isActive ? "text-primary" : "text-muted-foreground"
                          }
                        >
                          {item.title}
                        </CardTitle>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className={isActive ? "" : "text-muted-foreground"}>
                        {item.description}
                      </p>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>

          <div className="flex justify-center gap-2">
            {worksystem.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setActiveIndex(idx)}
                className={`
                  h-2 rounded-full transition-all duration-300
                  ${activeIndex === idx ? "w-6 bg-primary" : "w-3 bg-muted"}
                `}
                aria-label={`Go to step ${idx + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
