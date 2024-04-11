import projectService from "../services/project.service";
import ControllerAction from "../types/controllerAction";

const getAllProjects: ControllerAction = async (req, res) => {
  try {
    const allProjects = await projectService.get();

    if (!allProjects) {
      res.status(404).send('Not Found: The specified entity does not exist');

      return;
    }

    res.send(allProjects)
    console.log(allProjects)
  } catch (error) {
    console.log(error);
  }
}

const postProject: ControllerAction = async (req, res) => {
  try {
    const {
      images,
      title,
      description,
      technologies,
      repository,
      linkedin,
      userId
    } = req.body;

    if (!(images &&
      title &&
      description &&
      technologies &&
      repository &&
      linkedin)) {
      return res.status(400);
    };
    
    const newProject = await projectService.create(
      images,
      title,
      description,
      technologies,
      repository,
      linkedin,
      userId,
    );

    res.status(201)
    res.send(newProject)
  } catch (error) {
    console.log(error)
  };
};

const patchProject: ControllerAction = async (req, res) => {
  try {
    const { id } = req.params;
    const {
      images,
      title,
      description,
      technologies,
      repository,
      linkedin,
    } = req.body;

    if (!(images &&
      title &&
      description &&
      technologies &&
      repository &&
      linkedin)) {
      return res.status(400);
    };

    const updateProject = await projectService.update(
      +id,
      images,
      title,
      description,
      technologies,
      repository,
      linkedin,
    );

    res.status(201)
    res.send(updateProject)
  } catch (error) {
    console.log(error)
  };
};

const deleteProject: ControllerAction = async (req, res) => {
  const { id } = req.params;

  try {
    await projectService.remove(+id);

    res.sendStatus(204);
    res.send("project was deleted");
  } catch (error) {
    console.log(error)
  }
}

const projectController = {
  getAllProjects,
  postProject,
  patchProject,
  deleteProject
};

export default projectController;