import { motion, MotionStyle } from "framer-motion";
import { ProjectData } from "@/lib/types";
import ProjectsHeading from "./ProjectsHeading";

interface HeadingSectionProps {
    data: ProjectData[];
    motionStyle: MotionStyle;
}

export default function HeadingSection({ data, motionStyle } : HeadingSectionProps) {
    return (
        <motion.div
            className="sticky lg:top-0 top-72 pt-24 z-30 bg-gradient-to-b from-background from-50% to-transparent lg:grid lg:grid-cols-12 gap-x-24 "
            style={motionStyle}
        >
            <ProjectsHeading data={data} />
            <div className="absolute top-[80vh] h-[80vh]" />
        </motion.div>
    );
}

