"use client";
import { motion, useSpring, useTransform, MotionValue } from "framer-motion";
import Image from "next/image";

interface AnimatedContentProps {
  scrollYProgress: MotionValue<number>;
}

export default function AnimatedContent({
  scrollYProgress,
}: AnimatedContentProps) {

  const transformYText = useSpring(useTransform(scrollYProgress, [0, 1], [0, -20], {
    damping: 1000,
    stiffness: 200,
  }));

  const rotate360 = useSpring(useTransform(scrollYProgress, [0, 1], [0, 90], {
    damping: 100,
    stiffness: 20
  }));

  return (
    <div>
      <motion.div
        className="z-0 absolute top-120"
        style={{
          y: transformYText,
        }}
      >
        <Image
          src="/hero/text-hero.svg"
          alt=""
          width={1403}
          height={536}
          className="w-1403 h-536"
        />
      </motion.div>
      <motion.div
        className="absolute z-10 top-120 mix-blend-hard-light h-full w-full"
        style={{
          // backgroundColor: "red",
          y: transformYText,
          zIndex: 10,
          WebkitMaskImage: "url('/hero/hero-image.png')",
          maskImage: "url('/hero/hero-image.png')",
          WebkitMaskSize: "contain",
          maskSize: "52.1% 95%",
          WebkitMaskRepeat: "no-repeat",
          maskRepeat: "no-repeat",
          WebkitMaskPosition: "right",
          maskPosition: "40% -90%",
        }}
      >
        <Image
          src="/hero/text-hero.svg"
          alt=""
          width={1403}
          height={536}
          className="w-1403 h-536"
        />
      </motion.div>

      <motion.div
        className="absolute top-120 right-[var(--p-fluid-md)]"
        style={{
          // y: transformYSpinningText,
          rotate: rotate360,
        }}
      >
      </motion.div>
    </div>
  );
}
