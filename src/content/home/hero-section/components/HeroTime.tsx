'use client'
import { motion, easeOut } from 'framer-motion'
import { useState, useEffect } from 'react'

export default function HeroTime() {
    const [time, setTime] = useState<string | null>(null)

    useEffect(() => {
        const update = () =>
            setTime(
                new Date().toLocaleTimeString('en-GB', {
                    hour: '2-digit',
                    minute: '2-digit',
                    second: '2-digit',
                })
            )
        update()
        const id = setInterval(update, 1000)
        return () => clearInterval(id)
    }, [])

    if (!time) return null

    return (
        <motion.div
            className="absolute left-40 bottom-40 border-b border-neutral-700 pb-8 max-lg:hidden z-10 flex flex-col gap-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 1, ease: easeOut }}
        >
            <p className="text-label-md font-label text-neutral-300 tabular-nums">
                {time}
            </p>
            <p className="text-label-sm font-label uppercase text-neutral-500">
                Rotterdam, The Netherlands
            </p>
        </motion.div>
    )
}
