const fs = require("fs")
const path = require("path")
const { v4: uuidv4 } = require("uuid")

const updateDB = array => {
  fs.writeFileSync(
    path.join(__dirname, "../db/db.json"),
    JSON.stringify(array, null, 2)
  )
}

const createNote = (body, array) => {
  const { title, text } = body
  if (
    typeof title !== "string" ||
    title.length === 0 ||
    typeof text !== "string" ||
    text.length === 0
  )
    return false

  const newNote = { title, text, id: uuidv4() }
  array.push(newNote)
  updateDB(array)

  return newNote
}

const deleteNote = (id, array) => {
  const index = array.findIndex(note => note.id === id)
  if (index === -1) return false

  const note = array[index]
  array.splice(index, 1)
  updateDB(array)

  return note
}

module.exports = { createNote, deleteNote }
