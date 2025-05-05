import { motion, MotionStyle } from 'framer-motion';
import { ProjectData } from '@/lib/types';
import ProjectMockup from './ProjectMockup';

interface ProjectMockupsProps {
  data: ProjectData[];
  motionStyle: MotionStyle;
}

export default function ProjectMockups({ data, motionStyle }: ProjectMockupsProps) {

  return (
    <motion.div 
      className="absolute lg:top-356 left-0 right-0 z-10 w-full lg:w-6/10 mx-auto overflow-hidden h-full" 
      style={motionStyle}
      initial="hidden"
      animate="visible"
    >
      {data.map((project) => (
        <div key={project.title}>
          <ProjectMockup project={project} />
        </div>
      ))}
    </motion.div>
  );
}

