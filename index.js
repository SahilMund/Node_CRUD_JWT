const express = require("express");
const app = express();
const mongoose = require("mongoose");
const { mongoURL } = require("./config/key");
//for reading body json data
app.use(express.json());

//connect to DB

mongoose
  .connect(mongoURL, {
    useCreateIndex: true,
    useUnifiedTopology: true,
    useNewUrlParser: true,
  })
  .then(() => console.log("Mondodb Connected...."))
  .catch((err) => console.error(err));

//model register
require("./models/user");
require("./models/note");

//Route Middleware

app.use("/api/user", require("./routes/authRoute"));

app.use("/api/post", require("./routes/crudRoute"));

app.get("/", (req, res) => {
  res.send("Server  working...........");
});

// Listening to the port

const port = process.env.PORT || 3000;

app.listen(port, () => console.log(`Server running on ${port}....`));
