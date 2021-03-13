const Project = require("../projects/projects-model");


const validateProject = async (req, res, next) => {
    try {
        const project = await Project.get(req.params.id);
        if (!project) {
          res.status(404).json({ message: "sorry, no such project exists" });
        } else {
          req.project = project;
          next();
        }
      } catch (err) {
        next(err);
      }
}

const validateProjectContent = (req, res, next) => {
    if (!req.body) {
        res.status(400).json({ message: "project data is required" });
      } else if (!req.body.description || !req.body.description.trim()) {
        res.status(400).json({ message: "description is required" });
      } else if (!req.body.name || !req.body.name.trim()) {
        res.status(400).json({ message: "name is required" });
      } else {
        next();
      }
}

module.exports = {
    validateProject,
    validateProjectContent
}