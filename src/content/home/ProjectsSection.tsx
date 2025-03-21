import SectionHeading from "@/components/ui/SectionHeading";
import Image from "next/image";
import Chip from "@/components/ui/Chip";

export default function ProjectsSection() {
  return (
    <section className="row in-container relative">
      <div className="py-120 grid grid-cols-3 gap-24">
        <div className="relative col-span-2">
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
        <div className="flex flex-col justify-between">
          <SectionHeading title="Projects" />
          <div className="flex flex-col gap-48">
            <div className="flex flex-col gap-32">
              <h6 className="text-nowrap uppercase font-medium text-body-col-3 text-fluid-h6">
                StrategySphere Advisors
              </h6>
              <hr className="border-primary-800 border-b-2 w-92" />
            </div>
            <div className="flex flex-col gap-24">
              <div>
                <p className="text-gray-400 text-body-col-3">
                   I developed a modern, responsive website for Strategysphere
                  Advisors, handling full-stack development with TypeScript,
                  React, and Next.js. The design visuals was created using
                  Figma. I integrated Sanity.io as a headless CMS for the blog
                  section, enabling easy updates and scalability
                </p>
              </div>
              <div className="flex flex-wrap gap-16">
                <Chip label="TypeScript" />
                <Chip label="React" />
                <Chip label="Tailwind CSS" />
                <Chip label="Next.js" />
                <Chip label="Node.js" />
                <Chip label="Figma" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
