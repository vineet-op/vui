"use client"

import TextStagger from "@/components/custom/TextStagger/TextStagger";


export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-lime-300">
      <TextStagger href="#">Twitter</TextStagger>
      <TextStagger href="#">Instagram</TextStagger>
      <TextStagger href="#">WhatsApp</TextStagger>
      <TextStagger href="#">Facebook</TextStagger>
    </div>
  );
}
