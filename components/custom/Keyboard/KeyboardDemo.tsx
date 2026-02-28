"use client"

import Keyboard from "@/components/custom/Keyboard/Keyboard";

export default function KeyboardDemo() {
  return (
    <div className="max-w-full h-full flex items-center justify-center bg-neutral-950 p-2">
      <div className="scale-50 sm:scale-60 md:scale-70 lg:scale-70">
        <Keyboard className="max-w-6xl" />
      </div>
    </div>
  );
}
