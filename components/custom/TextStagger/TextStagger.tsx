"use client"
import { motion } from "motion/react"


const TextStagger = ({ children, href, className, duration = 0.25, staggerDelay = 0.025 }: {
    children: string,
    href: string,
    className?: string,
    duration?: number,
    staggerDelay?: number
}) => {
    return (
        <motion.a
            initial="initial"
            whileHover="hovered"
            className={className || "relative block overflow-hidden whitespace-nowrap text-4xl font-black uppercase sm:text-7xl md:text-8xl lg:text-8xl font-sans text-black"}
            href={href}>

            <div>
                {children.split("").map((l, i) => (
                    <motion.span
                        className="inline-block"
                        variants={{
                            initial: {
                                y: 0,
                            },
                            hovered: {
                                y: "-100%"
                            }
                        }}
                        transition={{
                            duration: duration,
                            ease: "easeInOut",
                            delay: staggerDelay * i
                        }}
                        key={i}>{l === " " ? "\u00A0" : l}</motion.span>
                ))}
            </div>


            <div className="absolute inset-0">
                {children.split("").map((l, i) => (
                    <motion.span
                        className="inline-block"
                        variants={{
                            initial: {
                                y: "100%",
                            },
                            hovered: {
                                y: "0"
                            },
                        }}
                        transition={{
                            duration: duration,
                            ease: "easeInOut",
                            delay: staggerDelay * i
                        }} key={i}>{l === " " ? "\u00A0" : l}</motion.span>
                ))}
            </div>
        </motion.a>
    )
}

export default TextStagger