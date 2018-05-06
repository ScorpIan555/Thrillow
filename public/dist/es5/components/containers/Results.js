"use strict";

var _interopRequire = function (obj) { return obj && obj.__esModule ? obj["default"] : obj; };

var _prototypeProperties = function (child, staticProps, instanceProps) { if (staticProps) Object.defineProperties(child, staticProps); if (instanceProps) Object.defineProperties(child.prototype, instanceProps); };

var _get = function get(object, property, receiver) { var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc && desc.writable) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _inherits = function (subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; };

var _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };

var _react = require("react");

var React = _interopRequire(_react);

var Component = _react.Component;
var Listing = require("../presentation").Listing;
var connect = require("react-redux").connect;
var actions = _interopRequire(require("../../actions"));

var Results = (function (Component) {
  function Results() {
    _classCallCheck(this, Results);

    _get(Object.getPrototypeOf(Results.prototype), "constructor", this).call(this);
    this.state = {
      listing: [],
      location: {}
    };
  }

  _inherits(Results, Component);

  _prototypeProperties(Results, null, {
    componentDidMount: {
      value: function componentDidMount() {
        console.log("Results componentDidMount");
      },
      writable: true,
      configurable: true
    },
    render: {
      value: function render() {
        // const listings = this.props.listing.all || []
        // console.log(JSON.stringify(listings))
        //
        // console.log(this.state)

        return React.createElement(
          "section",
          null,
          React.createElement(
            "div",
            { className: "container" },
            React.createElement(
              "div",
              { className: "row justify-content-center text-center section-intro" },
              React.createElement(
                "div",
                { className: "col-12 col-md-9 col-lg-8" },
                React.createElement(
                  "span",
                  { className: "title-decorative" },
                  "Perfect for Startups"
                ),
                React.createElement(
                  "h3",
                  { className: "display-4" },
                  "Potential rental deals"
                ),
                React.createElement(
                  "span",
                  { className: "lead" },
                  "803 rentals listed under their Rent Zestimate in New York"
                )
              )
            ),
            React.createElement(
              "ul",
              { className: "feature-list feature-list-lg" },
              React.createElement(
                "li",
                { className: "row justify-content-center align-items-center" },
                React.createElement(Listing, null),
                React.createElement(Listing, null),
                React.createElement(Listing, null)
              ),
              React.createElement(
                "li",
                { className: "row justify-content-center align-items-center" },
                React.createElement(
                  "button",
                  { type: "button", "class": "btn btn-primary btn-lg" },
                  "Show Listings"
                )
              )
            )
          )
        );
      },
      writable: true,
      configurable: true
    }
  });

  return Results;
})(Component);




var stateToProps = function (state) {
  return {};
};

var dispatchToProps = function (dispatch) {
  return {};
};

module.exports = connect(stateToProps, dispatchToProps)(Results);
// listing: state.listing
// getZillowResults: (params) => dispatch(actions.getZillowResults(params)),
// getLocation: () => dispatch(actions.getLocation())