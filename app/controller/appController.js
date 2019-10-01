const AppController = {
  commonVaidator(objectKeys, values) {
    let error = {};
    let errorCount = 0;
    let status = true;
    values.map((field, keys) => {
      typeof field == "string" || typeof field == "object"
        ? field == ""
          ? (error[objectKeys[keys]] = field)
          : null
        : null;
    });
    errorCount = Object.values(error);
    errorCount == 0 ? null : (status = false);
    return { status: status, fields: error, count: errorCount };
  },
  loginChecker() {
    let token = localStorage.getItem("jwt");
    console.log(token);
    let result = false;
    token == null ? null : (result = true);
    return result;
  },
  setlogin(token) {
    localStorage.setItem("jwt", token);
  }
};
export default AppController;
