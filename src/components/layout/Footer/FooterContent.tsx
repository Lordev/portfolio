import { motion, MotionValue, useTransform } from 'framer-motion'
import { useEffect, useRef, useState } from 'react'
import Image from 'next/image'
import FooterBar from './FooterBar'

interface FooterContentProps {
    scrollYProgress: MotionValue<number>
}

export default function FooterContent({ scrollYProgress }: FooterContentProps) {
    const y = useTransform(scrollYProgress, [0, 1], ['-30%', '30%'])
    const [height, setHeight] = useState<number | null>(null)


    const container = useRef<HTMLDivElement>(null)

    useEffect(() => {
        if (container.current) {
            const handleResize = () => {
                setHeight(container.current?.getBoundingClientRect().height ?? 0)
            }
            handleResize()

            window.addEventListener('resize', handleResize)

            return () => {
                window.removeEventListener('resize', handleResize)
            }
        }
    }, [height])

    return (
        <motion.div
            className="absolute bottom-0 left-0 w-full h-screen"
            style={{ y }}
        >
            <Image
                src={'/_shared/background.png'}
                className="object-cover object-center -z-10"
                alt=""
                fill
            />
            <div className="flex flex-col justify-center h-full">
                <div
                    className="text-display font-display uppercase text-primary-500  gap-y-16 gap-x-24 lg:grid-cols-12 lg:grid row in-container max-lg:flex max-lg:flex-col max-lg:mb-120"
                    style={{
                        marginBottom: `${height}px`,
                    }}
                >
                    <div className="col-start-4">Ideas?</div>
                    <div className="col-start-6 row-start-2 xs:self-end">
                        Build?
                    </div>
                    <div className="col-start-4 row-start-3 col-span-6">
                        Chat?
                    </div>
                </div>
            </div>
            <div
                className="row in-container lg:grid lg:grid-cols-12   border-t-1 border-gray-300 bg-blend-hue bg-white/2 backdrop-blur-sm max-lg:flex max-lg:flex-col max-lg:gap-24 py-24  absolute bottom-0"
                ref={container}
            >
                <FooterBar />
            </div>
        </motion.div>
    )
}
