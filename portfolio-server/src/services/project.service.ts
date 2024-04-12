import Project from "../models/project.model";
import getRandomId from "../utlis/getRandomId";
import uploadImages from "../utlis/cloudinary";

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
  let uploadedImages: string[] = [];

  uploadImages(images)
    .then((uploadedUrls: any) => {
      uploadedImages = uploadedUrls
    })
    .catch((error: any) => {
      console.error(error);
    });

  return Project.create({
    id,
    uploadedImages,
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
  let uploadedImages: string[] = [];

  uploadImages(images)
    .then((uploadedUrls: any) => {
      uploadedImages = uploadedUrls
    })
    .catch((error: any) => {
      console.error(error);
    });
  
  await Project.update({
    title,
    uploadedImages,
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