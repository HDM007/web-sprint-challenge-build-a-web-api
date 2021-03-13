const express = require('express');
const {validateAction, validateActionContent} = require("./actions-middleware")
// Write your "actions" router here!

const Action = require("./actions-model")

const router = express.Router();

router.get("/", (req, res, next) => {
    Action.get()
    .then( actions => {
        res.json(actions)
    })
    .catch(next)
})
router.get("/:id", validateAction, (req, res) => {
    res.json(req.action)
})
router.post("/", (req, res, next) => {
    Action.insert(req.body)
    .then(action => {
        res.status(201).json(action);
    })
    .catch(next)
})
router.put("/:id", validateAction, validateActionContent, (req, res, next) => {
    Action.update(req.params.id, req.body)
    .then(action => {
        res.status(200).json(action)
    })
    .catch(next)
})
router.delete("/:id", validateAction, (req, res, next) => {
    Action.remove(req.params.id)
    .then(action => {
        res.status(200).json(action)
    })
    .catch(next);
});

module.exports = router;