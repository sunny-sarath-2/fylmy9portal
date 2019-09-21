let express = require("express");
let app = express();
require("./model/database");
var jwt = require("jsonwebtoken");
var path = require("path");

const api = require("./routes/api.route");
app.use(express.json([{ limit: "250000" }]));
app.use(express.static("public"));
app.use("/api", api);
app.get("*", (req, res) => {
  res.sendFile(path.resolve(__dirname + "/public", "", "index.html"));
});
app.listen(8080, () => {
  console.log("running on 8080");
});
