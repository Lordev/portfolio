import { ProjectData } from "@/lib/types";

interface ProjectsHeadingProps {
  data: ProjectData[];
}

export default function ProjectsHeading({ data }: ProjectsHeadingProps) {
  return (
    <h2 className="text-heading-lg uppercase mb-120 lg:mb-64 mix-blend-difference flex text-nowrap justify-between max-lg:flex-col max-lg:gap-24 col-start-4 col-span-9 lg:items-center h-fit">
      <span className="font-thin relative">My selected</span>
      <div className="w-full h-4 bg-neutral-100 mx-24 max-lg:hidden"></div>
      <div className="relative max-lg:before:content-[''] max-lg:before:h-4 max-lg:before:w-80 max-lg:before:bg-neutral-100 max-lg:before:absolute max-lg:before:top-1/2 max-lg:before:translate-y-1/2 max-lg:before:-ml-148 max-lg:ml-252 max-sm:ml-120 max-sm:before:-ml-100 lg:mr-64">
        Projects
        <span className="text-label-sm absolute right-0 text-neutral-300 font-label lg:top-1/2 lg:-translate-y-1/2 lg:-mr-64 max-lg:bottom-0">
          {`[+${data.length}]`}
        </span>
      </div>
    </h2>
  );
}
