const Project = require("../models/Project");

exports.getAllProjects = async (req, res, next) => {
  try {
    const [projects, _] = await Project.findAll();
    res.status(200).json({ projects });
  } catch (error) {
    console.log(error);
    next(error);
  }
};
