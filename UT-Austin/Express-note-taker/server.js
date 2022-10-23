const express = require("express")
const app = express()

app.use(express.json())
app.use(express.static("public"))
app.use(express.urlencoded({ extended: true }))

const routes = require("./routes")
app.use("/", routes)

const { PORT = 3001 } = process.env
app.listen(PORT, () => console.log(`Server started on port ${PORT}`))
