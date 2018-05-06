"use strict";

var _interopRequire = function (obj) { return obj && obj.__esModule ? obj["default"] : obj; };

var _react = require("react");

var React = _interopRequire(_react);

var Component = _react.Component;
module.exports = function (props) {
  return React.createElement(
    "div",
    { className: "col-sm" },
    React.createElement("img", { alt: "Image", src: "dist/assets/img/graphic-product-kin.jpg", className: "img-fluid rounded" })
  );
};