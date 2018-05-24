"use strict";

var _interopRequire = function (obj) { return obj && obj.__esModule ? obj["default"] : obj; };

var _prototypeProperties = function (child, staticProps, instanceProps) { if (staticProps) Object.defineProperties(child, staticProps); if (instanceProps) Object.defineProperties(child.prototype, instanceProps); };

var _get = function get(object, property, receiver) { var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc && desc.writable) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _inherits = function (subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; };

var _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };

var _react = require("react");

var React = _interopRequire(_react);

var Component = _react.Component;
var UserLocator = (function (Component) {
  function UserLocator() {
    _classCallCheck(this, UserLocator);

    _get(Object.getPrototypeOf(UserLocator.prototype), "constructor", this).call(this);
    this.state = {
      regionName: "",
      zipCode: ""
    };
  }

  _inherits(UserLocator, Component);

  _prototypeProperties(UserLocator, null, {
    componentDidMount: {
      value: function componentDidMount() {
        var _this = this;
        // https://ipstack.com/quickstart
        // https://ipstack.com/documentation
        var baseUrl = "http://api.ipstack.com/check";
        var accessKey = "access_key=32795b80a1f644674d7ae6ecfaa713da"; // const accessKey = process.env.IPSTACK_API_KEY
        console.log("URL: " + JSON.stringify(accessKey));

        var joinUrl = [baseUrl, accessKey];

        var url = joinUrl.join("?");
        console.log("URL: " + JSON.stringify(url));

        fetch(url).then(function (response) {
          return response.json();
        }).then(function (responseJson) {
          console.log(responseJson);
          console.log(JSON.stringify(responseJson));
          _this.setState({
            regionName: responseJson.region_name,
            zipCode: responseJson.zip
          });
        })["catch"](function (err) {
          return console.log(err);
        });
      },
      writable: true,
      configurable: true
    },
    render: {
      value: function render() {
        return React.createElement(
          "div",
          null,
          "User Locator Component "
        );
      },
      writable: true,
      configurable: true
    }
  });

  return UserLocator;
})(Component);

module.exports = UserLocator;