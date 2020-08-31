const express = require("express");
const mongoose = require("mongoose");
const users = require("./routes/api/users");
const auth = require("./routes/api/auth");
const profile = require("./routes/api/profile");
const posts = require("./routes/api/posts");
const passport = require("passport");
const cors = require("cors");

const bodyParser = require("body-parser");

const app = express();

//MiddleWares
app.use(cors());
app.use(
  bodyParser.urlencoded({
    extended: false,
  })
);
app.use(bodyParser.json());

//Passport Middleware
app.use(passport.initialize());

//Passport Config
require("./config/passport")(passport);

//Connection DB
const db = require("./config/keys").mongoURI;

//Connect to MongoDb
mongoose
  .connect(db)
  .then(() => console.log("Db Connected"))
  .catch((err) => console.error(err));

// Use Routes
app.use("/api/users", users);
app.use("/api/profile", profile);
app.use("/api/posts", posts);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server has been started on ${PORT}`));
