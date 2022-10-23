const fs = require("fs")
const path = require("path")
const { v4: uuidv4 } = require("uuid")

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

  fs.writeFileSync(
    path.join(__dirname, "../db/db.json"),
    JSON.stringify(array, null, 2)
  )

  return newNote
}

module.exports = { createNote }
