const Action = require("../actions/actions-model");

const validateAction = async (req, res, next) => {
    try {
        const action = await Action.get(req.params.id);
        if (!action) {
          res.status(404).json({ message: "No such action" });
        } else {
          req.action = action;
          next();
        }
      } catch (err) {
        next(err);
      }
}

const validateActionContent = (req, res, next) => {
    if (!req.body) {
        res.status(400).json({ message: "action data required" });
      } else if (!req.body.description || !req.body.description.trim()) {
        res.status(400).json({ message: "description is required" });
      } else if (!req.body.notes || !req.body.notes.trim()) {
        res.status(400).json({ message: "notes field is required" });
      } else if (!req.body.project_id) {
        res.status(400).json({ message: "project_id field is required" });
      } else {
        next();
      }
}

module.exports = {
    validateAction,
    validateActionContent
}