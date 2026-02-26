"use client"

import { useState, useMemo } from "react";
import MousePointer from "@/lib/MousePointer";
import { motion } from "motion/react"

// Inline SVG mask (white circle = visible area). No external mask.svg required.
const DEFAULT_MASK_SVG = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><circle cx="50" cy="50" r="50" fill="white"/></svg>'

function getMaskDataUrl(svg = DEFAULT_MASK_SVG) {
    return `data:image/svg+xml,${encodeURIComponent(svg)}`
}

export interface MaskHoverProps {
    /** Optional class for the root container */
    className?: string
    /** Hero line shown behind the mask (e.g. "Hello 👋 I am ...") */
    heroContent?: React.ReactNode
    /** Content revealed inside the spotlight on hover */
    maskRevealContent?: React.ReactNode
    /** Background of the page: Tailwind class (e.g. "bg-neutral-950") or CSS color (e.g. "#0a0a0a") */
    backgroundColor?: string
    /** Spotlight circle background color */
    maskBackgroundColor?: string
    /** Base text color inside the mask */
    maskTextColor?: string
    /** Mask circle size when not hovered (px) */
    initialMaskSize?: number
    /** Mask circle size when hovered (px) */
    hoverMaskSize?: number
    /** Mask position/size transition duration in seconds */
    maskTransitionDuration?: number
    /** Mask transition easing (e.g. "backOut", "easeInOut") */
    maskTransitionEase?: string
    /** Custom SVG for mask shape (default: circle). Use fill="white" for visible area. */
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
    <>
        <span className="text-black">What I do ? </span>
        <span className="text-white"> I craft </span>
        <span className="text-black">digital experiences</span>
        <span className="text-white"> that breathe life into the web 🌟</span>
    </>
)

export default function MaskHover({
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
}: MaskHoverProps) {
    const { x, y } = MousePointer()
    const [hover, isHovered] = useState(false)
    const size = hover ? hoverMaskSize : initialMaskSize
    const maskDataUrl = useMemo(() => getMaskDataUrl(maskSvg), [maskSvg])

    return (
        <div className={`relative max-h-full max-w-screen flex justify-center items-center flex-col text-center ${backgroundColor} ${className ?? ""}`.trim()}>
            <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ staggerChildren: 0.2, delayChildren: 0.3 }}
                className="h-screen w-screen flex justify-center items-center font-sans text-4xl font-bold tracking-tighter text-white"
            >
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    {heroContent}
                </motion.div>
            </motion.div>

            <motion.div
                animate={{
                    webkitMaskPosition: `${x - size / 2}px ${y - size / 2}px`,
                    webkitMaskSize: `${size}px ${size}px`,
                    maskPosition: `${x - size / 2}px ${y - size / 2}px`,
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
                className="absolute inset-0 h-screen w-screen flex justify-center items-center font-sans text-4xl font-bold tracking-tighter pointer-events-none"
            >
                <div
                    onMouseEnter={() => isHovered(true)}
                    onMouseLeave={() => isHovered(false)}
                    className="relative group pointer-events-auto inline-flex items-baseline justify-center whitespace-nowrap text-center"
                >
                    {maskRevealContent}
                </div>
            </motion.div>
        </div>
    )
}
