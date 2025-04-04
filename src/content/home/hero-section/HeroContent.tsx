"use client";
import {
  motion,
  useTransform,
  MotionValue,
  easeIn,
} from "framer-motion";
import Image from "next/image";

interface HeroContentProps {
  scrollYProgress: MotionValue<number>;
}

export default function HeroContent({
  scrollYProgress,
}: HeroContentProps) {
  const transformYText = useTransform(scrollYProgress, [0, 1], ["0vw", "80vw"]);
  

  const opacityText = (
    useTransform(scrollYProgress, [0.7, 1], [1, 0], {
      damping: 1000,
      stiffness: 200,
    })
  );

  const rotate360 = (
    useTransform(scrollYProgress, [0, 1], [0, 180], {
      damping: 100,
      stiffness: 20,
    })
  );

  return (
    <>
      d
      <motion.div
        style={{
          y: useTransform(scrollYProgress, [0, 1], ['0%', '100%'], easeIn),
        }}
        className="absolute w-full top-0 left-0 h-1126"
      >
        <Image
          src="/hero/hero-background.png"
          layout="fill"
          alt=""
        />
      </motion.div>
      <div className="absolute top-700 left-800 w-800 h-800 bg-radial from-purple-950 to-50% to-[var--background] rounded-md -z-10"></div>
         <motion.div
        style={{
          y: useTransform(scrollYProgress, [0, 1], [0, -500]),
        }}
      >
      </motion.div>
      <div className="mt-140 w-1208 mx-auto h-600 gap-24 relative">
        <h5 className="text-fluid-h5 uppercase tracking-widest mb-32">
          <div className="">Lorenzo</div>
          <div className="ml-138">Sallons</div>
        </h5>
        <h1 className="text-fluid-display1 font-display uppercase text-primary-500 text-center row-start-2 col-start-4">
          Builds
        </h1>
        <div className="flex mt-32 justify-between">
          <div className="text-neutral-700">
            <p className="text-fluid-body-sm">based in</p>
            <p className="uppercase ml-48 text-fluid-body-sm">Rotterdam</p>
          </div>
          <h5 className="text-fluid-h5 uppercase tracking-widest mb-32 flex items-end  flex-col">
            <div className="mr-90">Creative</div>
            <div>Solutions</div>
            <div className="mr-58">Digital</div>
            <div className="mr-58">Memories</div>
          </h5>
        </div>
        <div className="rotate-90 text-fluid-body-sm tracking-widest absolute left-0 top-1/2 -translate-y-1/2 uppercase text-neutral-700 -ml-50">
          <p className="text-fluid-body-sm">Frontend</p>
          <p className="text-fluid-body-sm ml-44">Developer</p>
        </div>
      </div>
      <div className="flex justify-between mt-180 items-end">
        <p className="underline">
          Local time: 21:39 {"("}9.39PM{")"}
        </p>
      </div>
    </>
  );
}
