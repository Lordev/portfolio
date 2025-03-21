import SectionHeading from "@/components/ui/SectionHeading";
import Image from "next/image";
import Chip from "@/components/ui/Chip";

export default function ProjectsSection() {
  return (
    <section className="row in-container relative">
      <div className="absolute left-0 top-0 w-screen pl-[var(--p-fluid-md)]">
        <div className="relative w-512 h-376 ">
          <div className="absolute w-3/4">
            <h5 className="text-fluid-h5">
              “I’m a web enthusiast who loves turning ideas into interactive
              experiences.”
            </h5>
          </div>
          <div className="absolute -left-120 -top-120 w-full h-full">
            <Image
              src={"/projects/blob.svg"}
              alt="Project 1"
              layout="fill"
              className="-z-10 "
            />
          </div>
        </div>
      </div>

      <div className="float-right">
        <SectionHeading title="Projects" />
      </div>
      <div className="py-240">
        <div className="relative">
          <Image
            className="w-full"
            src="/projects/strategysphere-frame.png"
            height={918}
            width={1680}
            alt="Project 1"
          />
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
            <button className="px-24 py-24 rounded-full border-5 border-primary-500 uppercase font-bold font-commissioner text-label-lg">
              Know more
            </button>
          </div>
        </div>
        <div className="w-4/5 mx-auto grid py-32 grid-cols-[repeat(2,auto)]">
          <div className="border-primary-500 border-r-2 h-full min-h-106 pr-32 flex items-center">
            <h6 className="text-nowrap uppercase font-medium text-body-col-3 text-fluid-h6">
              StrategySphere Advisors
            </h6>
          </div>
          <div className="grid grid-cols-2 gap-24 items-center px-48">
            <div>
              <p className="text-gray-400 text-body-col-3">
              I created this modern website for Strategysphere Advisors, a consulting office.
              </p>
            </div>
            <div className="flex flex-wrap gap-16">
              <Chip label="TypeScript" />
              <Chip label="React" />
              <Chip label="Tailwind CSS" />
              <Chip label="Next.js" />
              <Chip label="Node.js" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
