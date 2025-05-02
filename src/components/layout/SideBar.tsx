"use client";
import React from "react";
import { Button } from "../ui/button";
import { NAVSIDEBAR } from "@/constants/navsidebar";
import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";

const SideBar = () => {
  const pathName = usePathname();
  return (
    <div className="bg-[#1A1919] h-full py-10">
      <div className="flex flex-col gap-10 w-full px-5 mt-20">
        {NAVSIDEBAR.map((val) => (
          <Button  key={val.title}>
            {val.title}
          </Button>
        ))}
      </div>
    </div>
  );
};

export default SideBar;
