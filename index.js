const config = require("./localConfig")
const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser")
const routes = require("./routes")

const serverPort = 3001;;


mongoose
  .connect(config.databaseURI, { useNewUrlParser: true })
  .then(() => {

    const app = express()
    app.use(bodyParser.json());
    app.use("/api", routes)

    app.listen(serverPort, () => {
      console.log(`Server has started on port: ${serverPort}`)
    })
  })