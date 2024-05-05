'use client';

import Image from "next/image";
import { useUser } from "@clerk/nextjs";
import Button from "@/components/button";
import Link from "next/link";
import { useGetUserProjectsQuery } from "@/lib/slices/projects/projectsApi";
import ProjectCard from "@/app/components/ProjectCard";
import Carousel from "@/app/components/Carousel";
import Project from "@/types/Project";
import SkeletonProjectCard from "@/app/components/SkeletonProjectCard";
import Skeleton from "@/components/skeleton";

const UserPage = () => {
  const { user } = useUser();

  const page = 1; 
  const pagePerSize = 2;
  const order = 'asc';
  const sort = 'visits'; 
  
  const { data: projects, error, isLoading } = useGetUserProjectsQuery({
    userId: user ? user.id : undefined,
    page,
    pagePerSize,
    order,
    sort,
  });

  return (
    <main className="grid place-items-center min-h-screen relative mt-24">
      <section
        className="w-[90%] xl:w-[68%] px-[22px] xl:px-[144px] pt-[100px] xl:pt-[138px] pb-[64px] border-t-2 border-l-2 border-r-2 border-headline
        border-b-4 rounded-t-20 rounded-r-20 rounded-l-20 rounded-xl shadow-customShadow relative max-w-[1300px]"
      >
        {user ? (
          <Image
            src={user?.imageUrl}
            alt={"userImage"}
            width={250}
            height={250}
            className="absolute left-1/2 transform -translate-x-1/2 w-[125px] h-[125px] xl:w-[200px] xl:h-[200px] rounded-full top-[-2%] md:top-[-15%]"
            style={{ left: 'calc(50%)' }}
          />
        ) : (
          <div
            className="absolute left-1/2 transform -translate-x-1/2 w-[125px] h-[125px] xl:w-[200px] xl:h-[200px] rounded-full top-[-2%] md:top-[-15%]"
            style={{ left: 'calc(50%)' }}  
          >
            <Skeleton width={200} height={200} />
          </div>
        )}
          <div
            className="absolute right-[20px] xl:right-[40px] top-[150px] md:top-[60px] xl:top-[60px]"
          >
            <Button px={4} py={2} text={"Edit profile"} active={true} />
          </div>

            {user ? 
              <h1 className="text-center text-textSecondary text-[34px] font-bold">
                {user?.fullName}
              </h1> 
              : 
              <div className="flex justify-center">
                <Skeleton width={150} height={45} />
              </div>
            }
            <div className="flex flex-col md:flex-row gap-5 justify-between mt-[50px] items-center">
              <h3 className="text-textSecondary text-[34px] font-bold">
                My Portfolios
              </h3>
            <div className="flex flex-wrap gap-8">
              <Link href={`/portfolios/${user?.id}`}>
                <Button px={4} py={2} text={"Show all projects"} />
              </Link>
              <Link href={"/create-project"}>
                <Button px={4} py={2} text={"Create portfolios"} active={true} />
            </Link>
          </div>
        </div>
        <div className="mt-[20px] flex flex-col md:flex-row justify-between gap-5">
          {projects && projects.length > 0 ? (
            projects.slice(0, 2).map((project: Project) => (
              <ProjectCard key={project.id} project={project} />
            ))
          ) : (
            Array.from({ length: 2 }).map((_, index) => (
              <SkeletonProjectCard key={index} />
            ))
          )}
        </div>
      </section>
    </main>
  );
};

export default UserPage;