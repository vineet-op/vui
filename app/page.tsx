"use client"

import { motion } from "motion/react"
import { ArrowRight, Github, Star } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import Image from "next/image"

export default function Page() {
  return (
    <div className="relative min-h-screen w-full bg-black flex items-center justify-center px-4 overflow-hidden">
      {/* Gradient mesh background */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-purple-900/20 via-black to-black" />

      {/* Animated gradient orbs */}
      <motion.div
        className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-purple-500/20 rounded-full blur-[120px]"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.5, 0.7, 0.5],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-blue-500/50 rounded-full blur-[120px]"
        animate={{
          scale: [1.2, 1, 1.2],
          opacity: [0.5, 0.7, 0.5],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Grid pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,.08)_2px,transparent_2px),linear-gradient(90deg,rgba(255,255,255,.08)_2px,transparent_2px)] bg-[size:80px_80px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,#000,transparent)]" />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto text-center mt-8 lg:mt-0">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-8"
        >
          <motion.div
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 backdrop-blur-sm border border-white/10 text-white/90 text-sm font-normal font-sans"
            whileHover={{ scale: 1.05, backgroundColor: "rgba(255,255,255,0.1)" }}
            transition={{ type: "spring", stiffness: 400 }}
          >
            <div className="flex items-center gap-1.5">
              <Star className="w-3.5 h-3.5 fill-yellow-400 text-yellow-400" />
              <span className="text-white/60">New components added weekly</span>
            </div>
          </motion.div>
        </motion.div>

        {/* Main heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mb-6"
        >
          <h1 className="text-4xl sm:text-6xl mx-auto md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white  tracking-tight font-sans leading-none">
            Build beautiful
          </h1>
          <div className="relative inline-block">
            <h1 className="text-4xl sm:text-6xl md:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-tight leading-none">
              <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent font-sans">
                interfaces with VUI
              </span>
            </h1>
            {/* Animated underline */}
            <motion.div
              className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-purple-500 via-pink-500 to-blue-500 rounded-full font-sans"
              initial={{ scaleX: 0, opacity: 0 }}
              animate={{ scaleX: 1, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.5 }}
            />
            {/* Glow effect */}
            <motion.div
              className="absolute -bottom-4 left-0 right-0 h-8 bg-gradient-to-r from-purple-500/50 via-pink-500/50 to-blue-500/50 blur-xl"
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.5 }}
              transition={{ duration: 0.8, delay: 0.5 }}
            />
          </div>
        </motion.div>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-base sm:text-xl md:text-lg text-white/80 mb-12 max-w-6xl mx-auto leading-relaxed font-sans mt-12"
        >
          A collection of stunning components built with{" "}
          <span className="inline-flex items-center gap-1.5 text-white font-semibold">
            Tailwind CSS
            <Image
              src="/tailwind-svgrepo-com.svg"
              alt="Tailwind CSS"
              width={24}
              height={24}
              className="inline-block"
            />
          </span>{" "}
          <span className="inline-flex items-center gap-1.5 text-white font-semibold">
            Shadcn
            <Image
              src="/cover.jpg"
              alt="Shadcn UI"
              width={24}
              height={24}
              className="inline-block rounded-sm"
            />
          </span> and{" "}
          <span className=" items-center gap-1.5 text-white font-semibold">
            Motion
            {" "}
            <Image
              src="/motion.png"
              alt="Framer Motion"
              width={20}
              height={20}
              className="inline-block rounded-sm"
            />
          </span>
          <br />
          that speeds up your shipping process.
        </motion.p>


        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex flex-row sm:flex-row gap-2 justify-center items-center mb-20"
        >
          <Link href="/docs">
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button
                className="group cursor-pointer relative overflow-hidden bg-white text-black hover:bg-white/90 px-4 py-3 text-sm rounded-full shadow-2xl shadow-white/20 font-sans"
              >
                <span className="relative z-10 flex items-center gap-2">
                  Browse Components
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </span>
              </Button>
            </motion.div>
          </Link>

          <Link href="https://github.com/vineet-op/vui" target="_blank">
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button
                variant="outline"
                className="group cursor-pointer bg-white/5 backdrop-blur-sm border-white/10 text-white hover:bg-white/10 hover:border-white/20 px-4 py-3 text-sm rounded-full font-sans"
              >
                <Github className="mr-2 w-4 h-4" />
                Star on GitHub
              </Button>
            </motion.div>
          </Link>
        </motion.div>


        {/* Floating particles */}
        {[...Array(30)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-white rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -30, 0],
              opacity: [0, 1, 0],
              scale: [0, 1, 0],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 5,
              ease: "easeInOut",
            }}
          />
        ))}

        {/* Bottom gradient line */}
        <motion.div
          initial={{ scaleX: 0, opacity: 0 }}
          animate={{ scaleX: 1, opacity: 1 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="absolute bottom-0 left-0 right-0 h-[4px] bg-gradient-to-r from-transparent via-white/20 to-transparent"
        />
      </div>
    </div>
  )
}
