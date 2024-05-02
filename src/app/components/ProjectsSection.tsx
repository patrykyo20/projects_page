'use client';

import Project from "./Project";
import { useGetAllProjectsQuery } from '../../lib/slices/projects/projectsApi';

const ProjectSection = () => {
  return (
    <section className="px-[31px] md:px-[40px] lg:px-[200px] py-[135px]"> 
      <h1
        className="text-textSecondary text-center text-[20px] md:text-[54px] mt-[12px] md:mt-[135px] font-bold"
      >
        Top Rated Portfolios
      </h1>
      <div className="mt-[135px] flex flex-wrap gap-[30px] justify-center">
        <Project />
        <Project />
        <Project />
        <Project />
      </div>
    </section>
  );
};

export default ProjectSection;