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
      location: {}
    };
  }

  _inherits(Results, Component);

  _prototypeProperties(Results, null, {
    componentDidMount: {
      value: function componentDidMount() {
        console.log("Results componentDidMount");
        // geocodeByAddress(address)
        //   .then(results => getLatLng(results[0]))
        //   // .then(latLng => console.log('latLng', latLng) )
        //   .then(latLng => this.setState({latLng}) )
        //   .catch(error => console.error('Error', error))

        var params = {
          address: this.props.listing.all.address, // move to listingReducer
          citystatezip: this.props.listing.all.citystatezip, // move to listingReducer
          latLng: this.props.listing.all.latLng // move to listingReducer

        };

        var zillowData = this.props.getZillowListingResults(params);

        // console.log("Results.js this.props.listing  :" + JSON.stringify(this.props.listing))
        console.log("zillowData: ", zillowData);
        console.log("zillowData: ", JSON.stringify(zillowData));

        this.setState({
          listing: zillowData
        });
      },
      writable: true,
      configurable: true
    },
    render: {
      value: function render() {
        // Capture latitude and longitude from stateToProps
        var listingLat = this.props.listing.all !== null ? this.props.listing.all.latitude : null;
        var listingLng = this.props.listing.all !== null ? this.props.listing.all.longitude : null;
        // Logs
        // console.log(this.state)
        // console.log(this.props.listing)
        console.log(listingLat);
        console.log(listingLng);
        // console.log(typeof(this.props.listing))
        // console.log(typeof(listingLng))

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
                React.createElement(Listing, { lat: listingLat, lng: listingLng })
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
            ),
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
                React.createElement(
                  "div",
                  { className: "col-sm" },
                  React.createElement(Listing, { lat: listingLat, lng: listingLng })
                ),
                React.createElement(
                  "div",
                  { className: "col-sm" },
                  React.createElement(Listing, { lat: listingLat, lng: listingLng })
                ),
                React.createElement(
                  "div",
                  { className: "col-sm" },
                  React.createElement(Listing, { lat: listingLat, lng: listingLng })
                )
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
  return {
    listing: state.listing
  };
};

var dispatchToProps = function (dispatch) {
  return {
    getZillowListingResults: function (params) {
      return dispatch(actions.getZillowListingResults(params));
    } };
};

module.exports = connect(stateToProps, dispatchToProps)(Results);
// getLocation: () => dispatch(actions.getLocation())