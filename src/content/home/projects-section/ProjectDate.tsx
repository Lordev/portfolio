import { motion } from 'framer-motion'
import { revealText } from '@/lib/utils/motion'

export default function ProjectDate({ yearBuilt }: { yearBuilt: number }) {
    return (
        <div className="col-span-1 max-lg:hidden">
            <motion.div className="">
                <div className="relative text-end">
                    <h6 className="uppercase  text-label-sm text-neutral-300">
                        {'['}year{']'}
                    </h6>
                    <motion.p
                        initial="hidden"
                        animate="visible"
                        variants={revealText}
                        className="text-label-sm 0 mt-8"
                    >
                        {yearBuilt}
                    </motion.p>
                </div>
            </motion.div>
        </div>
    )
}
