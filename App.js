require("dotenv").config();
let express = require("express");
const app = express();
const sequelize = require("./db");

let log = require("./controllers/logcontroller");
let user = require("./controllers/usercontroller");

sequelize.sync();

app.use(require("./middleware/headers"));
app.use(express.json());

app.use("/user", user);
app.use("/log", log);

app.listen(3000, function () {
  console.log("app is listening on port 3000");
});
