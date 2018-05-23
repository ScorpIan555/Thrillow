"use strict";

var _interopRequire = function (obj) { return obj && obj.__esModule ? obj["default"] : obj; };

var _prototypeProperties = function (child, staticProps, instanceProps) { if (staticProps) Object.defineProperties(child, staticProps); if (instanceProps) Object.defineProperties(child.prototype, instanceProps); };

var _get = function get(object, property, receiver) { var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc && desc.writable) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _inherits = function (subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; };

var _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };

var _react = require("react");

var React = _interopRequire(_react);

var Component = _react.Component;
var _reactPlacesAutocomplete = require("react-places-autocomplete");

var PlacesAutocomplete = _interopRequire(_reactPlacesAutocomplete);

var geocodeByAddress = _reactPlacesAutocomplete.geocodeByAddress;
var getLatLng = _reactPlacesAutocomplete.getLatLng;
var actions = _interopRequire(require("../../actions"));

var connect = require("react-redux").connect;
var LocationSearchInput = require("../containers").LocationSearchInput;
var LandingPage = (function (Component) {
  function LandingPage() {
    _classCallCheck(this, LandingPage);

    _get(Object.getPrototypeOf(LandingPage.prototype), "constructor", this).call(this);
    this.state = {
      // Initialize component with address string utilized in Google Geolocate API
      address: "",
      // Initialize component with latLng object which stores latitude and longitude results from Geolocate API
      latLng: {}
    };
  }

  _inherits(LandingPage, Component);

  _prototypeProperties(LandingPage, null, {
    onButtonClick: {
      value: function onButtonClick(address, event) {
        // event.preventDefault()
        console.log("Address Search Executed.event :", event);
        console.log("Address Search Executed!", address);

        this.handleSelect(address);
      },
      writable: true,
      configurable: true
    },
    handleChange: {


      // Handle change for controlled component
      value: function handleChange(address) {
        this.setState({ address: address });
        // Log state change
        console.log(JSON.stringify(this.state.address));
        console.log(JSON.stringify(address));
      },
      writable: true,
      configurable: true
    },
    handleSelect: {

      // Handle user input to search box
      value: function handleSelect(address) {
        var _this = this;
        address == "null" ? address = this.state.address : address;
        console.log("address: ", address);
        console.log("typeof(address):", typeof address);
        // Call Google Maps Geolocator API, returns an object w/ a lat/lng properties
        geocodeByAddress(address).then(function (results) {
          return getLatLng(results[0]);
        })
        // Simulatneously, asynchronously call both the dispatchToStore & the Zillow API call
        .then(function (latLng) {
          return _this.addressCalls(latLng, address);
        })["catch"](function (error) {
          return console.error("Error", error);
        });
      },
      writable: true,
      configurable: true
    },
    addressCalls: {

      // 1) Dispatch coordinates from Google Geolocate API to store for use in client
      // 2) Dispatch call to Zillow API thru the back-end
      value: function addressCalls(latLng, address) {
        var _this = this;
        console.log("addressCalls.latLng: ", latLng);
        console.log("addressCalls.address: ", address);
        // Send coordinates from Geolocate API to store asynchronously thru Redux
        this.props.dispatchLatLngFromSearchBoxToStore(latLng);

        // Split address from search box for input into Zillow API
        var paramsAddress = address.split(",", 1);
        // Split citystatezip from search box for input into Zillow API
        var arrayFromAddressAndCitystatezip = address.split(",");
        var paramsCitystatezip = arrayFromAddressAndCitystatezip[1] + "," + arrayFromAddressAndCitystatezip[2];
        // Store Zillow API parameters in client, to be passed into back-end
        var params = {
          address: paramsAddress,
          citystatezip: paramsCitystatezip
        };
        // Call Zillow 'GetSearchResults' API, return listing results
        this.props.getZillowListingResults(params).then(function (listingResults) {
          // Capture parameters needed to call Zillow 'GetComps' API, return comp results
          params.zpid = listingResults.body.data.response.results.result[0].zpid[0];
          // Set required parameter 'count'
          params.count = 3;
          // Call Zillow 'GetComps' API, return comp results
          _this.props.getZillowCompsResults(params);
        });
      },
      writable: true,
      configurable: true
    },
    render: {
      value: function render() {
        var addressValue = this.state.address;
        var addressValueType = typeof this.state.address;
        console.log("addressValue: ", addressValue);
        console.log("addressValueType: ", addressValueType);
        console.log("props:  ", this.props);

        return React.createElement(
          "section",
          { className: "bg-dark text-white space-xlg" },
          React.createElement("img", { alt: "Image", src: "https://lh3.googleusercontent.com/nVm77oyczOjVhgG9WKKp0YOT30gTCO7we42YJ9aCCPn2XkuLKVG__1DUZ7G4HNTagNMQ0aRkX0M2t3ocqOQsfCXfH84", className: "bg-image opacity-40" }),
          React.createElement(
            "div",
            { className: "container" },
            React.createElement(
              "div",
              { className: "row text-center justify-content-center section-intro" },
              React.createElement(
                "div",
                { className: "col-12 col-md-10 col-lg-8" },
                React.createElement(
                  "h1",
                  { className: "display-3" },
                  "Welcome to Thrillow"
                ),
                React.createElement(
                  "span",
                  { className: "lead" },
                  "A Zillow Knockoff... And not even the good kind!"
                )
              )
            ),
            React.createElement(
              "div",
              { className: "row text-center " },
              React.createElement(
                "div",
                { className: "col" },
                React.createElement(
                  "a",
                  { href: "#", className: "btn btn-outline-secondary mb-1 text-white opacity-80" },
                  "BUY"
                ),
                React.createElement(
                  "a",
                  { href: "#", className: "btn btn-outline-secondary mb-1 text-white" },
                  "RENT"
                ),
                React.createElement(
                  "a",
                  { href: "#", className: "btn btn-outline-secondary mb-1 text-white" },
                  "SELL"
                ),
                React.createElement(
                  "a",
                  { href: "#", className: "btn btn-outline-secondary mb-1 text-white" },
                  "ZESTIMATE"
                )
              )
            ),
            React.createElement(
              "div",
              { className: "row justify-content-center" },
              React.createElement(
                "div",
                { className: "col-12 col-md-10 col-lg-8" },
                React.createElement(
                  "div",
                  { className: "card card-sm" },
                  React.createElement(
                    "div",
                    { className: "card-body row no-gutters align-items-center" },
                    React.createElement(LocationSearchInput, { value: addressValue, onChange: this.handleChange.bind(this), onSelect: this.handleSelect.bind(this), onClick: this.onButtonClick.bind(this, addressValue), className: "form-control form-control-lg form-control-borderless", type: "search", placeholder: "Search topics or keywords" })
                  )
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

  return LandingPage;
})(Component);

var stateToProps = function (state) {};

var dispatchToProps = function (dispatch) {
  return {
    // Dispatch Zillow 'GetSearchResults' API call to '/homes' route
    getZillowListingResults: function (params) {
      return dispatch(actions.getZillowListingResults(params));
    },
    // Dispatch Zillow 'GetSearchResults' API call to '/comps' route
    getZillowCompsResults: function (params) {
      return dispatch(actions.getZillowCompsResults(params));
    },
    // Dispatch latLng object returned from Google Maps Geolocate API call to store
    dispatchLatLngFromSearchBoxToStore: function (latLng) {
      return dispatch(actions.dispatchLatLngFromSearchBoxToStore(latLng));
    }
  };
};

module.exports = connect(stateToProps, dispatchToProps)(LandingPage);