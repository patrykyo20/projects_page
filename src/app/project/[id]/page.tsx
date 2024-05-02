'use client';

import { useGetProjectQuery } from "@/lib/slices/projects/projectsApi";
import Image from "next/image";

const ProjectPage = ({ params }: { params: { id: number } }) => {
  const {id} = { id: params.id };

  const { data: project, error, isLoading, refetch } = useGetProjectQuery(id);

  console.log(project)

  return project ? (
    <>
      <h1
        className="text-textSecondary text-center text-[40px] md:text-[54px] mt-[12px] md:mt-[12px] font-bold"
      >
        {project.title}
      </h1>

      <section className="mt-20 grid justify-center w-full">
        <article className="max-w-[1500px] grid grid-cols-2 gap-20">
          <Image src={project.image?.[0] || '/projectImage.svg'} alt={project.title || ''} width={700} height={400} />
        
          <div>
            <h6 className="text-textSecondary text-[26px] font-semibold">{project.title}</h6>
            <h6 className="text-textSecondary text-[20px] mt-4">About</h6>
            <p className="text-textPrimary text-[20px] mt-2">{project.description}</p>
            <h6 className="text-textSecondary text-[20px] mt-4">Technologies</h6>
            <div className="flex gap-2 flex-wrap">
            {project.technologies.map((technology: string) => (
              <p className="text-[18px] text-headline" key={technology}>{technology}</p>
            ))}
            </div>
            <h6 className="text-textSecondary text-[20px] mt-4">Socials</h6>
            <div className="flex gap-4 mt-2">
              <Image src={'/github.svg'} alt="github" width={25} height={25} />
              <Image src={'/linkedin.svg'} alt="github" width={25} height={25} />
            </div>
          </div>
        </article>
      </section>  
    </>
  ) : (
    <div>No project found</div>
  );
};

export default ProjectPage;
