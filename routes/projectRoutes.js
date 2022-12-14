const express = require("express");
const projectControllers = require("../controllers/projectControllers");
const router = express.Router();

// @route GET && POST - /posts/
router.route("/").get(projectControllers.getAllProjects);

module.exports = router;
