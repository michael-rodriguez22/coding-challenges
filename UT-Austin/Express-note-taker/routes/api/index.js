const router = require("express").Router()
const notes = require("../../db/db.json")
const { createNote } = require("../../lib")

router.get("/notes", (req, res) => res.json(notes))

router.post("/notes", (req, res) => {
  const newNote = createNote(req.body, notes)
  return newNote
    ? res.status(200).json(newNote)
    : res.status(400).json({ message: "Invalid Note" })
})

router.get("*", (req, res) => {
  res.status(400).json({ message: `Invalid API Route: ${req.originalUrl}` })
})

module.exports = router
