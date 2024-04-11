import Project from "../models/project.model";
import getRandomId from "../utlis/getRandomId";

const get = async () => {
  const allProjects = await Project.findAll();

  return allProjects;
};

const getOne = async (id: number) => {
  const oneProject = await Project.findByPk(id)

  return oneProject;
}

const create = async (
  images: string[],
  title: string,
  description: string,
  technologies: string[],
  repository: string,
  linkedin: string,
  userId: string,
) => {
  const id = getRandomId();
  const likes: string[] = [];
  const visits = 0;

  return Project.create({
    id,
    images,
    title,
    likes,
    visits,
    description,
    technologies,
    repository,
    linkedin,
    userId,
  });
};

const update = async (
  id: number,
  images: string[],
  title: string,
  description: string,
  technologies: string[],
  repository: string,
  linkedin: string,
) => {
  await Project.update({
    title,
    images,
    description,
    technologies,
    repository,
    linkedin,
  }, { where: { id } });

  const updatedProject = await Project.findByPk(id);
  
  return updatedProject;
};

const remove = async (id: number) => {
  await Project.destroy({ where: { id }})
};

const projectService = {
  get,
  getOne,
  create,
  update,
  remove,
};

export default projectService;