"use client"

import { motion, AnimatePresence } from "motion/react"
import {
    Card,
    CardContent,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { useState } from "react"
import { X } from "lucide-react"

export interface ExpandableCardDetailSection {
    attributes?: { label: string; value: string }[]
    stats?: Record<string, number>
    statsMax?: number
}

export interface ExpandableCardsProps<T> {
    items: T[]
    getItemId: (item: T) => string | number
    getTitle: (item: T) => string
    getSubtitle?: (item: T) => string
    getImage: (item: T) => string
    getTags?: (item: T) => string[]
    getCardClassName: (item: T) => string
    getDetailSections?: (item: T) => ExpandableCardDetailSection
    containerClassName?: string
    cardsGridClassName?: string
    cardWrapperClassName?: string
}

const DEFAULT_CARD_CLASS = "bg-gradient-to-br from-gray-400 to-gray-600"
const DEFAULT_STATS_MAX = 100

export default function ExpandableCards<T>({
    items,
    getItemId,
    getTitle,
    getSubtitle,
    getImage,
    getTags,
    getCardClassName,
    getDetailSections,
    containerClassName,
    cardsGridClassName,
    cardWrapperClassName = "w-64 h-80",
}: ExpandableCardsProps<T>) {
    const [selectedItem, setSelectedItem] = useState<T | null>(null)

    const openModal = (item: T) => setSelectedItem(item)
    const closeModal = () => setSelectedItem(null)

    return (
        <div
            className={
                containerClassName ??
                "w-screen  sm:h-screen lg:h-screen xl:h-screen flex flex-col justify-center"
            }
        >
            <motion.div className=" justify-center items-center flex gap-4 font-sans">
                <AnimatePresence>
                    <motion.div
                        className={
                            cardsGridClassName ??
                            "flex gap-4 flex-wrap justify-center"
                        }
                        initial={{
                            opacity: 0,
                            scale: 0.8,
                            filter: "blur(10px)",
                            y: 50,
                        }}
                        animate={{
                            opacity: 1,
                            scale: 1,
                            filter: "blur(0px)",
                            y: 0,
                        }}
                        exit={{
                            opacity: 0,
                            scale: 0.8,
                            filter: "blur(10px)",
                            y: -50,
                        }}
                        transition={{
                            duration: 0.3,
                            delay: 0.1,
                            ease: "easeInOut",
                        }}
                    >
                        {items.map((item) => {
                            const id = getItemId(item)
                            const cardClass = getCardClassName(item) || DEFAULT_CARD_CLASS
                            const tags = getTags?.(item) ?? []
                            return (
                                <motion.div
                                    key={String(id)}
                                    layoutId={`expandable-card-${id}`}
                                    className="h-full"
                                >
                                    <Card
                                        onClick={() => openModal(item)}
                                        className={`${cardClass} text-white ${cardWrapperClassName} cursor-pointer`}
                                    >
                                        <CardHeader>
                                            <CardTitle className="flex justify-between items-center">
                                                {getTitle(item)}
                                                {getSubtitle && (
                                                    <span className="text-sm opacity-80">
                                                        {getSubtitle(item)}
                                                    </span>
                                                )}
                                            </CardTitle>
                                            {tags.length > 0 && (
                                                <div className="flex gap-2">
                                                    {tags.map((tag, index) => (
                                                        <span
                                                            key={index}
                                                            className="px-2 py-1 rounded-full text-xs"
                                                        >
                                                            {tag.trim()}
                                                        </span>
                                                    ))}
                                                </div>
                                            )}
                                        </CardHeader>
                                        <CardContent className="flex justify-center">
                                            <img
                                                src={getImage(item)}
                                                alt={getTitle(item)}
                                                className="w-34 h-34 rounded-full p-2"
                                            />
                                        </CardContent>
                                        <CardFooter>
                                            <p className="text-center font-semibold w-full text-sm opacity-80">
                                                {getTitle(item)}
                                            </p>
                                        </CardFooter>
                                    </Card>
                                </motion.div>
                            )
                        })}
                    </motion.div>
                </AnimatePresence>

                <AnimatePresence>
                    {selectedItem && (
                        <motion.div
                            className="fixed inset-0 flex items-center justify-center z-50 p-4"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={closeModal}
                        >
                            <motion.div
                                layoutId={`expandable-card-${getItemId(selectedItem)}`}
                                className={`${getCardClassName(selectedItem) || DEFAULT_CARD_CLASS} text-white rounded-2xl shadow-2xl max-w-md w-full max-h-[90vh] overflow-y-auto`}
                                onClick={(e) => e.stopPropagation()}
                                initial={{ scale: 0.8 }}
                                animate={{ scale: 1 }}
                                exit={{ scale: 0.8 }}
                                transition={{
                                    type: "spring",
                                    damping: 25,
                                    stiffness: 300,
                                }}
                            >
                                <div className="flex justify-end p-4">
                                    <motion.button
                                        onClick={closeModal}
                                        className="bg-white/20 rounded-full p-2 hover:bg-white/30 transition-colors"
                                        whileHover={{ scale: 1.1 }}
                                        whileTap={{ scale: 0.9 }}
                                    >
                                        <X size={20} className="cursor-pointer" />
                                    </motion.button>
                                </div>

                                <motion.div
                                    className="flex justify-center px-8"
                                    initial={{ y: 20, opacity: 0 }}
                                    animate={{ y: 0, opacity: 1 }}
                                    transition={{ delay: 0.2 }}
                                >
                                    <img
                                        src={getImage(selectedItem)}
                                        alt={getTitle(selectedItem)}
                                        className="w-40 h-40 bg-white/20 rounded-full p-4"
                                    />
                                </motion.div>

                                <div className="p-8 pt-4 space-y-6">
                                    <motion.div
                                        initial={{ y: 20, opacity: 0 }}
                                        animate={{ y: 0, opacity: 1 }}
                                        transition={{ delay: 0.3 }}
                                    >
                                        <h2 className="text-3xl font-bold text-center">
                                            {getTitle(selectedItem)}
                                        </h2>
                                        {getSubtitle && (
                                            <p className="text-center opacity-80">
                                                {getSubtitle(selectedItem)}
                                            </p>
                                        )}
                                    </motion.div>

                                    {getDetailSections && (() => {
                                        const detail = getDetailSections(selectedItem)
                                        const hasAttributes =
                                            detail.attributes && detail.attributes.length > 0
                                        const hasStats =
                                            detail.stats &&
                                            Object.keys(detail.stats).length > 0
                                        if (!hasAttributes && !hasStats) return null

                                        const statsMax =
                                            detail.statsMax ?? DEFAULT_STATS_MAX
                                        return (
                                            <>
                                                {hasAttributes && (
                                                    <motion.div
                                                        className="grid grid-cols-2 gap-4 text-sm"
                                                        initial={{ y: 20, opacity: 0 }}
                                                        animate={{ y: 0, opacity: 1 }}
                                                        transition={{ delay: 0.5 }}
                                                    >
                                                        {detail.attributes!.map(
                                                            (attr) => (
                                                                <div
                                                                    key={attr.label}
                                                                    className="bg-white/10 rounded-lg p-3"
                                                                >
                                                                    <p className="opacity-80">
                                                                        {attr.label}
                                                                    </p>
                                                                    <p className="font-semibold">
                                                                        {attr.value}
                                                                    </p>
                                                                </div>
                                                            )
                                                        )}
                                                    </motion.div>
                                                )}
                                                {hasStats && (
                                                    <motion.div
                                                        initial={{ y: 20, opacity: 0 }}
                                                        animate={{ y: 0, opacity: 1 }}
                                                        transition={{ delay: 0.6 }}
                                                    >
                                                        <h3 className="font-semibold mb-2">
                                                            Stats
                                                        </h3>
                                                        <div className="space-y-2">
                                                            {Object.entries(
                                                                detail.stats!
                                                            ).map(
                                                                ([stat, value], index) => (
                                                                    <div
                                                                        key={stat}
                                                                        className="flex justify-between items-center"
                                                                    >
                                                                        <span className="capitalize opacity-80">
                                                                            {stat}
                                                                        </span>
                                                                        <div className="flex items-center gap-2">
                                                                            <div className="w-20 bg-white/20 rounded-full h-2">
                                                                                <motion.div
                                                                                    className="bg-white rounded-full h-2"
                                                                                    initial={{ width: 0 }}
                                                                                    animate={{
                                                                                        width: `${Math.min(
                                                                                            100,
                                                                                            (value / statsMax) * 100
                                                                                        )}%`,
                                                                                    }}
                                                                                    transition={{
                                                                                        delay:
                                                                                            0.7 +
                                                                                            index * 0.1,
                                                                                        duration: 0.5,
                                                                                    }}
                                                                                />
                                                                            </div>
                                                                            <span className="text-sm w-8">
                                                                                {value}
                                                                            </span>
                                                                        </div>
                                                                    </div>
                                                                )
                                                            )}
                                                        </div>
                                                    </motion.div>
                                                )}
                                            </>
                                        )
                                    })()}
                                </div>
                            </motion.div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </motion.div>
        </div>
    )
}
