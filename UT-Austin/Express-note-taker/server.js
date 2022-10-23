const express = require("express")
const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(express.static("public"))

const path = require("path")

app.get("/", (req, res) =>
  res.sendFile(path.join(__dirname, "public/index.html"))
)

app.get("/notes", (req, res) =>
  res.sendFile(path.join(__dirname, "public/notes.html"))
)

const { PORT = 3001 } = process.env

app.listen(PORT, () => console.log(`Server started on port ${PORT}`))
