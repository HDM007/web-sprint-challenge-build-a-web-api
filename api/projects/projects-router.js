const express = require("express");
const {validateProject, validateProjectContent} = require("../middleware/projectMiddleware")
// Write your "projects" router here!

const Project = require("./projects-model");

const router = express.Router();



router.get("/", (req, res, next) => {
    Project.get()
    .then(actions => {
        res.json(actions)
    })
    .catch(next)
})

router.get("/:id", validateProject, (req, res) => {
    res.json(req.project)
})
router.post("/", (req, res, next) => {
    Project.insert(req.body)
    .then(project => {
        res.status(201).json(project)
    }).catch(next)
})

router.put("/:id", validateProject, validateProjectContent, (req, res, next) => {
    Project.update(req.params.id, req.body)
    .then((project) => {
      res.status(200).json(project);
    })
    .catch(next);
})
router.delete("", validateProject, (req, res, next) => {
    Project.remove(req.params.id)
    .then((project) => {
      res.status(200).json(project);
    }).catch(next);
});

module.exports = router;