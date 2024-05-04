import Button from "@/components/button";
import Project from "@/types/Project";
import Image from "next/image";
import { FC, useState } from "react";
import Link from "next/link";
import { useAddLikesMutation } from "@/lib/slices/projects/projectsApi";
import { useUser } from "@clerk/nextjs";

interface ProjectCardProps {
  project: Project;
}

const ProjectCard: FC<ProjectCardProps> = ({ project }) => {
  const { user } = useUser();
  const [addLikes] = useAddLikesMutation();
  const [likes, setLikes] = useState<string[]>(project.likes || []);

  const handleAddLike = async () => {
    if (user?.fullName) {
      const userHasLiked = likes.includes(user.fullName);

      let updatedLikes;
      if (userHasLiked) {
        updatedLikes = likes.filter(like => like !== user.fullName);
      } else {
        updatedLikes = [...likes, user.fullName];
      }

      setLikes(updatedLikes);

      const updatedData = { ...project, likes: updatedLikes };

      try {
        await addLikes({ id: project.id, data: updatedData });
        console.log('Project likes updated successfully');
      } catch (err) {
        console.error('Error updating project likes:', err);
      }
    }
  };

  return (
    <article className="px-2 py-5 border-r-2 border-b-4 border-l-2 border-headline border-t-[0.5px] rounded-xl flex flex-col justify-between">
      <Image
        src={project.image && project.image[0] ? project.image[0] : 'projectImage.svg'}
        alt="Project Image"
        width={431}
        height={100}
        className="rounded-lg"
      />
      <div className="flex mt-4 justify-between px-3 items-center">
        <Link href={`/project/${project.id}`}>
          <Button width={175} height={49} text="Show project" active={true} />
        </Link>
        <div className="flex gap-6 items-center">
          <span className="flex gap-2 text-textSecondary text-[16px] font-medium">
            <Image
              src="heart.svg"
              alt="heart"
              width={25}
              height={25}
              onClick={handleAddLike}
            />
            {likes.length}
          </span>
          <span className="flex gap-2 text-textSecondary text-[16px] font-medium">
            <Image
              src="eye.svg"
              alt="eye"
              width={25}
              height={25}
            />
            {project.visits}
          </span>
        </div>
      </div>
    </article>
  );
};

export default ProjectCard;