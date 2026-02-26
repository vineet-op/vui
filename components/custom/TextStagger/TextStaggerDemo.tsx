"use client"

import TextStagger from "@/components/custom/TextStagger/TextStagger";

export default function TextStaggerDemo() {
  return (
    <div className="w-full h-full flex items-center justify-center bg-lime-300 p-8">
      <TextStagger href="#" className="relative block overflow-hidden whitespace-nowrap text-4xl font-black uppercase sm:text-6xl md:text-7xl font-sans text-black">
        Text Stagger
      </TextStagger>
    </div>
  );
}
