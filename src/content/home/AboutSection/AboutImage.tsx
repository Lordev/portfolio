import Image from "next/image";
import { motion, useSpring, useTransform } from "framer-motion";

interface AboutImageProps {
  scrollYProgress: number;
}

export default function AboutImage({scrollYProgress} : AboutImageProps) {
  return (
    <motion.div className="col-start-5 col-span-2"
      style={{
        y: useSpring(useTransform(scrollYProgress, [0.5, 1], [0, 50], {
          damping: 1000,
          stiffness: 200,
        })),
  
      }}
    >
      <Image src="/about/img-headshot.png" width={900} height={900} alt="" />
    </motion.div>
  );
}
