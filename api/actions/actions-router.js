const express = require('express');
// Write your "actions" router here!

const Action = require("./actions-model")

const router = express.Router();

router.get("/", (req, res, next) => {

})
router.get("/:id", (req, res) => {

})
router.post("/", (req, res, next) => {

})
router.put("/:id", (req, res, next) => {

})
router.delete("", (req, res, next) => {

});

module.exports = router;