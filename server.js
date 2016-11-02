// Defaults
import express from "express"
import bodyParser from "body-parser"
import compression from "compression"
import path from "path"
import Development from "./development"

// Config
const isDeveloping = process.env.NODE_ENV !== "production"
const port = isDeveloping ? 3000 : process.env.PORT

const app = express()
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(compression())
app.listen(port, function() {
  const host = this.address().address
  const port = this.address().port
  console.log("Server listening on http://%s:%s", host, port)
})

// Development / Webpack
if (isDeveloping) {
  console.log("In Development Mode")
  Development(app)
}

// ROUTES - Catch All
app.use(express.static(__dirname + "/dist"))
app.get("*", function response(req, res) {
  res.sendFile(path.join(__dirname, "dist/index.html"))
})