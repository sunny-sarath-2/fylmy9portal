let mongoose = require("mongoose");
const server = "119.81.124.216:27017";
const DatabaseName = "fylmy9";
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
