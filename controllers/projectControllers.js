const Project = require("../models/Project");

exports.getAllProject = async (req, res, next) => {
  try {
    const [projects, _] = await Post.findAll();
    res.status(200).json({ projects });
  } catch (error) {
    console.log(error);
    next(error);
  }
};
