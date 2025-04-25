import Image from 'next/image'
import { motion, useTransform } from 'framer-motion'
import { useEffect, useRef, useState } from 'react'
import LinkLine from '@/components/ui/LinkLine'

interface FooterContentProps {
    scrollYProgress: number
}

export default function FooterContent({ scrollYProgress }: FooterContentProps) {
    const y = useTransform(scrollYProgress, [0, 1], ['-30%', '30%'])
    const [height, setHeight] = useState<number | null>(null)
    const [mobile, setMobile] = useState<boolean>(false)

    const container = useRef<HTMLDivElement>(null)

    useEffect(() => {
        if (container.current) {
            const handleResize = () => {
                setHeight(container.current?.getBoundingClientRect().height)
            }
            const isMobile = window.innerWidth < 768
            setMobile(isMobile)
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
                    className="text-display font-display uppercase text-primary-500  gap-24 lg:grid-cols-12 lg:grid row in-container max-lg:flex max-lg:flex-col max-lg:mb-120"
                    style={{
                        marginTop: !mobile && `${height}px`,
                        marginBottom: mobile && `${height}px`,
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
                className="row in-container lg:grid lg:grid-cols-12   border-t-1 border-gray-300 bg-blend-hue bg-white/2 backdrop-blur-sm max-lg:flex max-lg:flex-col max-lg:gap-24 py-24  absolute lg:top-0 max-lg:bottom-0"
                ref={container}
            >
                <div className="col-span-5">
                    <h6 className="text-label-sm text-neutral-300 uppercase ">
                        My socials
                    </h6>
                    <div className="flex mt-10 gap-10 ">
                        <LinkLine
                            href="https://github.com/lordev/"
                            label="Github"
                        />
                        <div className="w-16 relative">
                            <div className="border-t-2 border-gray-500 absolute top-1/2 -translate-y-1/2 w-full "></div>
                        </div>
                        <LinkLine
                            href="https://www.linkedin.com/in/lorenzo-sallons-383945176/"
                            label="Linkedin"
                        />
                    </div>
                </div>
                <div className="col-span-4 flex-col flex">
                    <h6 className="text-label-sm text-neutral-300 uppercase ">
                        Get in touch
                    </h6>
                    <div className="flex mt-10 gap-10">
                        <LinkLine
                            href="mailto:lorenzo.sallons.dev@gmail.com"
                            label="lorenzo.sallons.dev@gmail.com"
                        />
                    </div>
                </div>
                <div className="col-span-2 col-start-11 flex lg:justify-end text-end">
                    <h6 className="text-label-sm text-neutral-300 uppercase">
                        © {new Date().getFullYear()} Lorenzo Sallons.
                        <br />
                    </h6>
                </div>
            </div>
        </motion.div>
    )
}
