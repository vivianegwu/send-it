"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

require("dotenv/config");

var _express = _interopRequireDefault(require("express"));

var _console = _interopRequireDefault(require("console"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var app = (0, _express.default)();
var PORT = process.env.PORT || 3000;
app.get('/', function (req, res) {
  return res.status(200).send('SendIT App');
});
app.listen(PORT, function () {
  return _console.default.log('Running on', PORT);
});
var _default = app;
exports.default = _default;