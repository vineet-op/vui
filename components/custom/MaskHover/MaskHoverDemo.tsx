"use client"

import { useState, useMemo, useRef, useEffect } from "react";
import { motion } from "motion/react"

const DEFAULT_MASK_SVG = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><circle cx="50" cy="50" r="50" fill="white"/></svg>'

function getMaskDataUrl(svg = DEFAULT_MASK_SVG) {
    return `data:image/svg+xml,${encodeURIComponent(svg)}`
}

export interface MaskHoverDemoProps {
    className?: string
    heroContent?: React.ReactNode
    maskRevealContent?: React.ReactNode
    backgroundColor?: string
    maskBackgroundColor?: string
    maskTextColor?: string
    initialMaskSize?: number
    hoverMaskSize?: number
    maskTransitionDuration?: number
    maskTransitionEase?: string
    maskSvg?: string
}

const defaultHeroContent = (
    <>
        Hello👋 I am <motion.span className="text-amber-500">Vineet</motion.span> a Frontend{" "}
        <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="text-blue-400"
        >
            Designer
        </motion.span>{" "}
        and{" "}
        <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.7 }}
            className="text-green-400"
        >
            Developer
        </motion.span>{" "}
        🎨
    </>
)

const defaultMaskRevealContent = (
    <div className="flex flex-col items-center justify-center">
        <span className="text-black">What I do ? </span>
        <span className="text-white"> I craft </span>
        <span className="text-black">digital experiences</span>
        <span className="text-white"> that breathe life into the web 🌟</span>
    </div>
)

export default function MaskHoverDemo({
    className,
    heroContent = defaultHeroContent,
    maskRevealContent = defaultMaskRevealContent,
    backgroundColor = "bg-neutral-950",
    maskBackgroundColor = "lightcoral",
    maskTextColor = "#171717",
    initialMaskSize = 40,
    hoverMaskSize = 400,
    maskTransitionDuration = 0.3,
    maskTransitionEase = "backOut",
    maskSvg = DEFAULT_MASK_SVG,
}: MaskHoverDemoProps) {
    const containerRef = useRef<HTMLDivElement>(null)
    const [position, setPosition] = useState({ x: 0, y: 0 })
    const [hover, isHovered] = useState(false)
    const size = hover ? hoverMaskSize : initialMaskSize
    const maskDataUrl = useMemo(() => getMaskDataUrl(maskSvg), [maskSvg])

    useEffect(() => {
        const container = containerRef.current
        if (!container) return

        const updateMousePosition = (e: MouseEvent) => {
            const rect = container.getBoundingClientRect()
            setPosition({
                x: e.clientX - rect.left,
                y: e.clientY - rect.top
            })
        }

        container.addEventListener("mousemove", updateMousePosition)
        return () => container.removeEventListener("mousemove", updateMousePosition)
    }, [])

    const isCssColor = /^#|^rgb|^var\(|^oklch|^hsl/.test(backgroundColor)

    return (
        <div
            ref={containerRef}
            className={isCssColor ? `relative w-full h-full flex justify-center items-center flex-col text-center overflow-hidden ${className ?? ""}`.trim() : `relative w-full h-full flex justify-center items-center flex-col text-center overflow-hidden ${backgroundColor} ${className ?? ""}`.trim()}
            style={isCssColor ? { background: backgroundColor } : undefined}
        >
            <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ staggerChildren: 0.2, delayChildren: 0.3 }}
                className="w-full h-full flex justify-center items-center font-sans text-2xl md:text-4xl font-bold tracking-tighter text-white"
            >
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5 }}
                    className="px-4"
                >
                    {heroContent}
                </motion.div>
            </motion.div>

            <motion.div
                animate={{
                    webkitMaskPosition: `${position.x - size / 2}px ${position.y - size / 2}px`,
                    webkitMaskSize: `${size}px ${size}px`,
                    maskPosition: `${position.x - size / 2}px ${position.y - size / 2}px`,
                    maskSize: `${size}px ${size}px`,
                }}
                transition={{
                    type: "tween",
                    ease: maskTransitionEase as "backOut",
                    duration: maskTransitionDuration,
                }}
                style={{
                    WebkitMaskImage: `url("${maskDataUrl}")`,
                    WebkitMaskRepeat: "no-repeat",
                    maskImage: `url("${maskDataUrl}")`,
                    maskRepeat: "no-repeat",
                    background: maskBackgroundColor,
                    color: maskTextColor,
                }}
                className="absolute inset-0 w-full h-full flex justify-center items-center font-sans text-2xl md:text-4xl font-bold tracking-tighter pointer-events-none"
            >
                <div
                    onMouseEnter={() => isHovered(true)}
                    onMouseLeave={() => isHovered(false)}
                    className="relative group pointer-events-auto inline-flex items-baseline justify-center whitespace-nowrap text-center px-4"
                >
                    {maskRevealContent}
                </div>
            </motion.div>
        </div>
    )
}
