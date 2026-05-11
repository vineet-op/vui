"use client";
import React from "react";
import { cn } from "@/lib/utils";
import { ArrowRight } from "lucide-react";
import { motion } from "motion/react";
import { useRouter } from "next/navigation";

const HeroWithScales = () => {
  const router = useRouter();

  return (
    <div className="relative w-full h-screen overflow-hidden [--pattern:var(--color-neutral-300)]">
      <div className="max-w-7xl mx-auto w-full h-full flex items-center justify-center relative">
        <HorizontalScale className="absolute top-0 w-screen mx-auto" />
        <HorizontalScale className="absolute bottom-0 w-screen mx-auto" />

        <VerticalScale className="absolute left-0 h-screen mx-auto" />
        <VerticalScale className="absolute right-0 h-screen mx-auto" />

        <div className="p-10 size-full">
          <div className="relative p-10 size-full flex flex-col  justify-between">
            <img
              src="https://images.unsplash.com/photo-1686593686409-43456910d65c?fm=jpg&q=60&w=3000&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cHVycGxlJTIwYmFja2dyb3VuZHxlbnwwfHwwfHx8MA%3D%3D"
              className="absolute inset-0 w-full h-full object-cover mask-radial-from-95% mask-b-from-95% mask-t-from-95% select-none pointer-events-none"
            />
            <nav className="flex items-center justify-between relative z-20">
              <motion.div
                initial={{ opacity: 0, y: 20, filter: "blur(8px)" }}
                animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="flex items-center gap-6 justify-between w-full"
              >
                <h2 className="tracking-tighter font-bold text-white">VUI</h2>
                <div className="flex items-center gap-8 text-white text-xs lg:text-sm">
                  <a href="https://x.com/Vineet2OP" className="font-sans">
                    Created by Vineet ♥️
                  </a>
                </div>
              </motion.div>
            </nav>

            <div className="flex flex-col z-20 pb-10">
              <motion.h1
                initial={{ opacity: 0, y: 20, filter: "blur(8px)" }}
                animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="text-neutral-100 text-3xl font-sans sm:text-5xl md:text-7xl font-medium tracking-tighter max-w-xl"
              >
                Build beautiful interfaces with VUI
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 20, filter: "blur(8px)" }}
                animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                transition={{ duration: 0.6, ease: "easeOut", delay: 0.15 }}
                className="tracking-tight text-neutral-200 text-base font-sans sm:text-lg md:text-xl max-w-2xl mt-4"
              >
                A collection of stunning components built with Tailwind, Shadcn
                UI and Motion that speeds up your shipping process.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20, filter: "blur(8px)" }}
                animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                transition={{ duration: 0.6, ease: "easeOut", delay: 0.3 }}
                className="flex items-center mt-6 pn-10 gap-2 relative z-20"
              >
                <motion.button
                  onClick={() => router.push("/docs")}
                  whileTap={{ scale: 0.98 }}
                  className="px-3 py-1.5 sm:px-3.5 sm:py-2 md:px-4 md:py-2 cursor-pointer bg-white text-neutral-950 border border-neutral-200 shadow-sm flex items-center gap-2 rounded-md font-sans"
                >
                  <span className="font-medium text-xs sm:text-sm whitespace-nowrap">
                    Browse Components
                  </span>
                  <ArrowRight className="w-3 h-3 sm:w-4 sm:h-4" />
                </motion.button>
                <motion.button
                  whileTap={{ scale: 0.98 }}
                  className="px-3 py-1.5 sm:px-3.5 sm:py-2 md:px-4 md:py-2 cursor-pointer text-white flex items-center gap-2 rounded-md font-sans"
                >
                  <a
                    href="https://github.com/vineet-op/vui"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-medium text-xs sm:text-sm whitespace-nowrap"
                  >
                    Star on Github
                  </a>
                  <ArrowRight className="w-3 h-3 sm:w-4 sm:h-4" />
                </motion.button>
              </motion.div>
            </div>
            <Lines className="absolute top-0  mask-b-from-10% inset-x-0" />
            <Lines className="absolute bottom-0  mask-t-from-10% inset-x-0" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroWithScales;

const Lines = ({ className }: { className?: string }) => {
  return (
    <div
      className={cn(
        "h-10 w-full bg-[repeating-linear-gradient(to_bottom,var(--pattern)_0,var(--pattern)_1px,transparent_1px,transparent_0.5rem)]",
        className,
      )}
    />
  );
};

const HorizontalScale = ({ className }: { className?: string }) => {
  return (
    <div
      className={cn(
        "h-10 w-full bg-[repeating-linear-gradient(315deg,var(--pattern)_0,var(--pattern)_1px,transparent_1px,transparent_50%)] bg-[size:10px_10px] bg-fixed border-y border-[var(--pattern)]",
        className,
      )}
    />
  );
};

const VerticalScale = ({ className }: { className?: string }) => {
  return (
    <div
      className={cn(
        "h-screen w-10 bg-[repeating-linear-gradient(315deg,var(--pattern)_0,var(--pattern)_1px,transparent_1px,transparent_50%)] bg-[size:10px_10px] bg-fixed border-x border-[var(--pattern)]",
        className,
      )}
    />
  );
};
