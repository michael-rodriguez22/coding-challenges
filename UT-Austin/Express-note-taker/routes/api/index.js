const router = require("express").Router()
const notes = require("../../db/db.json")

router.get("/notes", (req, res) => res.json(notes))

router.get("*", (req, res) => {
  res.status(400).json({ message: `Invalid API Route: ${req.originalUrl}` })
})

module.exports = router
