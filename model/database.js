let mongoose = require("mongoose");
const server = "13.232.19.13:27017";
const DatabaseName = "test";
const uri = `mongodb://${server}/${DatabaseName}`;
class Database {
  constructor() {
    mongoose
      .connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
      .then(() => {
        console.log("connected");
      })
      .catch(err => {
        console.log("error" + err);
      });
  }
}
module.exports = new Database();
