const app = require("../server/src/app.js");

module.exports = (req, res) => {
  return app(req, res);
};