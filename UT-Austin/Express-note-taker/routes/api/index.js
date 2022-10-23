const router = require("express").Router()
const notes = require("../../db/db.json")
const { createNote, deleteNote } = require("../../lib")

router.get("/notes", (req, res) => res.json(notes))

router.post("/notes", (req, res) => {
  const newNote = createNote(req.body, notes)
  return newNote
    ? res.status(200).json(newNote)
    : res.status(400).json({ message: "Invalid Note" })
})

router.delete("/notes/:id", (req, res) => {
  const deletedNote = deleteNote(req.params.id, notes)
  return deletedNote
    ? res.status(200).json(deletedNote)
    : res.status(404).json({ message: "No note found with this ID" })
})

router.get("*", (req, res) => {
  res.status(400).json({ message: `Invalid API Route: ${req.originalUrl}` })
})

module.exports = router
