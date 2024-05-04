import Image from "next/image";
import gradientStyleHeadline from "../utils/gradientStyles";
import Button from "@/components/button";
import Project from "@/types/Project";
import { FC } from "react";
import Link from "next/link";

interface ProjectCardProps {
  project: Project;
};

const ProjectCardHome: FC<ProjectCardProps> = ({project}) => {
  return project && (
    <article className="pt-[40px] md:pt-[72px] lg:pt-[119px] px-[12px] md:px-[20px] lg:px-[39px] pb-[42px] border-r-4 border-b-4 border-l-4 border-headline
      rounded-[30px] border-t-[0.5px] max-w-[720px]">
      <div className="grid gap-[8px]">
        <Image 
          src="/stars.svg"
          alt="stars"
          width={25}
          height={25}
        />
  
        <h6
          className="uppercase font-bold"
          style={gradientStyleHeadline}
        >
          welcome to click craft
        </h6>
      </div>

      <h3 className="text-textSecondary text-[26px] md:text-[34px] lg:text-[44px] font-bold mt-[20px]">
        {project.title}
      </h3>

      <p
        className="text-[16px] md:text-[26px] text-textPrimary w-[70%]
          md:text-start md:col-start-2 md:row-start-3 mt-[24px]"
      >
        {project.description}
      </p>

      <Image
        src={project.image && project.image[0] ? project.image[0] : '/projectImage.svg'}
        alt={project.title}
        width={666}
        height={356}
        className="mt-[30px] md:mt-[40px] lg:mt-[75px] rounded-lg"
      />
      <div className="mt-8">
        <Link href={`/project/${project.id}`}>
          <Button px={4} py={3} text={"Show Project"} />
        </Link>
      </div>
    </article>
  );
};

export default ProjectCardHome;