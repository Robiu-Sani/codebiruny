"use client";

import { BiSearch } from "react-icons/bi";
import { TbActivity } from "react-icons/tb";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";

export default function SearchAndButton() {
  const { theme, setTheme, systemTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  const currentTheme = theme === "system" ? systemTheme : theme;

  return (
    <div className="flex justify-end items-center gap-1">
      <div className="w-[280px] h-[30px] rounded-md pl-2 cursor-pointer border flex justify-between items-center">
        <div className="flex justify-start text-gray-500 items-center gap-2">
          <BiSearch />
          <p className="text-sm">Search Our Services...</p>
        </div>
        <div className="px-2 flex justify-center items-center rounded-md h-[24px] border mr-[2px]">
          <TbActivity />
        </div>
      </div>
      <Button
        variant="outline"
        className="h-[30px] w-[30px]"
        size="icon"
        onClick={() => setTheme(currentTheme === "dark" ? "light" : "dark")}
      >
        {currentTheme === "dark" ? (
          <Sun className="h-[1.2rem] w-[1.2rem]" />
        ) : (
          <Moon className="h-[1.2rem] w-[1.2rem]" />
        )}
      </Button>
    </div>
  );
}
