const express = require("express");
// const cors = require("cors");
const morgan = require("morgan");
const dotenv = require("dotenv");
const mongo = require("mongoose");
const app = express();
dotenv.config();

const route = require("./router/route/toDoroutes");
// const { options } = require("./router/route/toDoroutes");

// app.use(cors());
app.use(morgan("dev"));
app.use("/", route);

///steps of connection to mongo database
const options = { useNewUrlParser: true, useUnifiedTopology: true };
const url = "mongodb://localhost:27017";
mongo
  .connect(url, options)
  .then(console.log("connected with db"))
  .catch((err) => console.log(err));
// const connect =mongo.connection;
//connect.on('err',console.error.bind(console, 'MongoDB connection error:'))
const todo=require("./model/todo");
const userInfo=require("./model/userInfo");
const PORT = process.env.PORT || 4000;

app.listen(PORT, () => {
  console.log(`our server run on port ${PORT}`);
});
