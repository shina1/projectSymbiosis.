const app = require("./app");

// server

const port = 8000;
app.listen(port, () => {
  console.log("Running on port" + " " + port);
});

module.exports = app;