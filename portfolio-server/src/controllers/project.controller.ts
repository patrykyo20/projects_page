import projectService from "../services/project.service";
import ControllerAction from "../types/controllerAction";
import cloudinary from "../utlis/cloudinary";

const getAllProjects: ControllerAction = async (req, res) => {
  try {
    const { page, pagePerSize, order, sort } = req.query;

    const pageNumber = page ? parseInt(page as string, 10) : undefined;
    const pagePerSizeNumber = pagePerSize ? parseInt(pagePerSize as string, 10) : undefined;

    console.log(page, pagePerSize, order, sort)

    const allProjects = await projectService.get(
      pageNumber,
      pagePerSizeNumber,
      order as string,
      sort as string
    );

    if (!allProjects) {
      res.status(404).send('Not Found: The specified entity does not exist');
      return;
    }

    res.send(allProjects);
  } catch (error) {
    console.log(error);
    res.status(500).send('Internal Server Error');
  }
};

const getProjectsLength: ControllerAction = async (req, res) => {
  try {
    const projectLength = await projectService.getLength();

    res.json({ length: projectLength });
  } catch (error) {
    res.status(500).send('Internal Server Error');
  }
};


const getOneProject: ControllerAction = async (req, res) => {
  try {
    const { id } = req.params;

    const project = await projectService.getOne(+id);
    
    res.status(201);
    res.send(project);
  } catch (error) {
    console.log(error);
  };
};

const postProject: ControllerAction = async (req, res) => {
  try {
      const { image, title, description, technologies, repository, linkedin, userId } = req.body;

      if (!image || !title || !description || !repository || !linkedin || !userId || !Array.isArray(technologies)) {
          return res.status(400).json({ error: 'Invalid data' });
      }

      const uploadedResponse = await cloudinary.v2.uploader.upload(image, {
          upload_preset: 'dev_setups',
      });

      const newProject = await projectService.create(
          uploadedResponse.secure_url,
          title,
          description,
          technologies,
          repository,
          linkedin,
          userId
      );

      res.status(201).send(newProject);
  } catch (error) {
      console.error('Błąd podczas tworzenia projektu:', error);
      res.status(500).send('Wewnętrzny błąd serwera');
  }
};

const patchProject: ControllerAction = async (req, res) => {
  try {
    const { id } = req.params;

    const {
      image,
      title,
      likes,
      visits,
      description,
      technologies,
      repository,
      linkedin,
    } = req.body;

    console.log(likes)

    if (!(
      title &&
      description &&
      technologies &&
      repository &&
      linkedin)) {
      return res.status(400);
    };

    console.log(likes)

    const updateProject = await projectService.update(
      +id,
      image,
      title,
      likes, 
      visits,
      description,
      technologies,
      repository,
      linkedin,
    );


    res.status(201);
    res.send(updateProject);
  } catch (error) {
    console.log(error);
  };
};

const deleteProject: ControllerAction = async (req, res) => {
  try {
    const { id } = req.params;

    await projectService.remove(+id);

    res.sendStatus(204);
    res.send("project was deleted");
  } catch (error) {
    console.log(error);
  };
};

const projectController = {
  getAllProjects,
  getProjectsLength,
  getOneProject,
  postProject,
  patchProject,
  deleteProject
};

export default projectController;