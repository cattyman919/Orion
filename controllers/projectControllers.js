const Project = require("../models/Project");
const ArraySeparator = require("./components/arraySeparator");
exports.getAllProjects = async (req, res, next) => {
  try {
    const [projects, _] = await Project.findAll();

    projects.map((project) => {
      // Convert String to Array of String
      let languangesArray = ArraySeparator.SeparatorFunction(project.languages);
      project.languages = languangesArray;
      return project;
    });
    res.status(200).json(projects);
  } catch (error) {
    console.log(error);
    next(error);
  }
};
