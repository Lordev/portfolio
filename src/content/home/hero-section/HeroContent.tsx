"use client";
import { motion, useTransform, MotionValue, easeIn } from "framer-motion";
import Image from "next/image";

interface HeroContentProps {
  scrollYProgress: MotionValue<number>;
}

export default function HeroContent({
  scrollYProgress,
}: HeroContentProps) {
  return (
    <div className="grid grid-cols-[1fr_auto_1fr] relative h-1080">
      <div className="border-r-1 border-r-neutral-700 relative">
        <Image
        className="absolute -translate w-296 h-268 -x-1/2 left-0 bottom-160 -z-10"
        src={"/_shared/img-wireframe-box.svg"} alt="" width={296} height={268}
        
        />
      <div className="flex justify-between mt-180 items-end z-10">
        {/* <p className="underline">
          Local time: 21:39 {"("}9.39PM{")"}
        </p> */}
        <div className="text-neutral-700 absolute top-160 left-0 [writing-mode:vertical-rl] ">
            <p className="text-label-sm uppercase font-mono leading-tight">an eye for the</p>
            <p className="text-label-sm uppercase font-mono leading-tight mt-16">little details</p>
          </div>
        </div>
      </div>
      <motion.div
        style={{
          y: useTransform(scrollYProgress, [0, 1], ['0%', '50%'], easeIn),
        }}
        className="absolute -translate-x-1/2 left-1/2  top-0 h-full -z-10 col-start-2 col-end-3 w-full "
      >
        <Image
          src="/hero/hero-background.png"
          layout="fill"
          objectFit="cover"
          alt=""
        />
      </motion.div>
      <div className="gap-24 relative flex justify-end col-start-2 col-end-2 w-946">
        <div className="absolute left-1/2 -translate-x-1/2 bottom-80 after:content:">
          <span className="uppercase font-mono text-label-md">scroll down</span>
        </div>
        <div className="text-fluid-display1 font-display uppercase text-primary-500 flex flex-col gap-16 items-end mt-84">
          <div className="mr-32">Create.</div>
          <div className="mr-524">Code.</div>
          <div className="-mr-6">Deliver.</div>
        </div>
        <h1 className="text-fluid-body uppercase absolute bottom-440 left-498">
          <div>Frontend <span className="font-normal">developer</span></div> 
          <div className="ml-58">creating <span className="font-normal">digital art</span> </div>
        </h1>
      </div>

      <div className=" col-start-3 border-l-1 border-l-neutral-700 relative">
        <div className="border-l-1 flex flex-col gap-24 pl-24 ml-108 mt-[calc(var(--header-height)+calc(var(--spacing)*28))]">
          <a
            href="#"
            className="hover:text-primary transition-colors text-label-lg font-mono uppercase "
          >
            Projects
          </a>
          <a
            href="#"
            className="hover:text-primary transition-colors text-label-lg font-mono uppercase "
          >
            About
          </a>
          <a
            href="#"
            className="hover:text-primary transition-colors text-label-lg font-mono uppercase "
          >
            Contact
          </a>
          </div>
        <div className="text-neutral-700 absolute bottom-160 right-0 [writing-mode:vertical-rl]">
            <p className="text-label-sm uppercase font-mono leading-none">based in Rotterdam</p>
          </div>
        </div>
    </div>
  );
}
