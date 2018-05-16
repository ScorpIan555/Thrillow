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
    this.state = {};
  }

  _inherits(Results, Component);

  _prototypeProperties(Results, null, {
    componentDidMount: {
      value: function componentDidMount() {
        console.log("Results componentDidMount, this.props: ", this.props);
        // geocodeByAddress(address)
        //   .then(results => getLatLng(results[0]))
        //   // .then(latLng => console.log('latLng', latLng) )
        //   .then(latLng => this.setState({latLng}) )
        //   .catch(error => console.error('Error', error))

        var params = {
          address: this.props.listing.all[0].address, //
          citystatezip: this.props.listing.all[1].citystatezip, //
          count: this.props.listing.all[2].count, //
          zpid: this.props.listing.all[3].zpid
        };

        this.props.getZillowListingResults(params).then(this.props.getZillowCompsResults(params));

        console.log("ZPID:  ", JSON.stringify(params.zpid));
      },
      writable: true,
      configurable: true
    },
    render: {
      value: function render() {
        // Capture principal listing
        // Capture latitude and longitude from stateToProps (Zillow)
        var listingLat = this.props.latLng || [];
        var listingLng = this.props.latLng || [];
        // Capture latitude and longitude from stateToProps (Google Maps)
        // let listingLat = this.props.listing.all[0].latLng[0].lat || []
        // let listingLng = this.props.listing.all[0].latLng[0].lng || []
        // Logs
        console.log("this.props:  ", this.props);
        console.log("this.props.listing:  ", this.props.listing);
        console.log("this.props.comps:  ", this.props.comps);
        console.log("this.props.listing.latLng:  ", this.props.listing.latLng);
        console.log("this.props.latLng:  ", this.props.latLng);
        console.log("listingLat ", listingLat);
        console.log("listingLng ", listingLng);
        // console.log(typeof(this.props.listing))
        // console.log(typeof(listingLng))

        // Capture comps array
        var comps = this.props.comps.all.comparables || [];

        console.log("comps: ", comps);

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
                React.createElement(Listing, { lat: listingLat.lat, lng: listingLng.lng })
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
                comps.map(function (comp, i) {
                  return React.createElement(
                    "div",
                    { className: "col-sm" },
                    React.createElement(Listing, { key: comp.zpid, lat: comp.address[0].latitude[0], lng: comp.address[0].longitude[0] })
                  );
                })
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
    listing: state.listing,
    comps: state.comps,
    latLng: state.listing.latLng
  };
};

var dispatchToProps = function (dispatch) {
  return {
    getZillowListingResults: function (params) {
      return dispatch(actions.getZillowListingResults(params));
    },
    getZillowCompsResults: function (params) {
      return dispatch(actions.getZillowCompsResults(params));
    }
  };
};

module.exports = connect(stateToProps, dispatchToProps)(Results);
// location: {}