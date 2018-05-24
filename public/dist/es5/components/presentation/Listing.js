"use strict";

var _interopRequire = function (obj) { return obj && obj.__esModule ? obj["default"] : obj; };

var _react = require("react");

var React = _interopRequire(_react);

var Component = _react.Component;
module.exports = function (props) {
  console.log("LISTING COMPONENT PROPS:", props);
  var imageLat = props.lat;
  var imageLng = props.lng;
  // console.log(imageLat)
  // console.log(imageLng)

  // Pass image-related props into local variables which will be componsed into a full url string for use as src prop
  // Build the image path string that each listing will pull from the Google Maps Street View API
  var imagePath = "https://maps.googleapis.com/maps/api/streetview";
  var imageSize = "size=400x400";
  var imageQueryPathArray = [imagePath, imageSize];
  var imageQueryPath = imageQueryPathArray.join("?");
  // Compose location using the lat/long props passed in from Results.js
  var imageLocation = "location=" + imageLat + "," + imageLng;
  var imageFOVHeadingPitchApiKey = "&fov=90&heading=235&pitch=10&key=AIzaSyAGZkIyl-VNKwjTWBFFP_xb_R8nK2GQmzs";
  // const imageFOVHeadingPitchApiKey = '&fov=90&heading=235&pitch=10&key=${process.env.IMAGE_API_KEY}'
  var imageFOVHeadingPitchApiKeyArray = [imageQueryPath, imageLocation, imageFOVHeadingPitchApiKey];
  var imageUrlComposed = imageFOVHeadingPitchApiKeyArray.join("&");
  // console.log('IMAGE_API_KEY: ', process.env.IMAGE_API_KEY)

  return React.createElement(
    "div",
    null,
    React.createElement("img", { style: localStyle,
      alt: "Image",
      src: imageUrlComposed,
      className: "img-fluid rounded"
    })
  );
};

var localStyle = {
  height: "200px",
  width: "200px"
};