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
var connect = require("react-redux").connect;
var actions = _interopRequire(require("../../actions"));

var LocationSearchInput = (function (Component) {
  function LocationSearchInput(props) {
    _classCallCheck(this, LocationSearchInput);

    _get(Object.getPrototypeOf(LocationSearchInput.prototype), "constructor", this).call(this, props);
    this.state = {};
  }

  _inherits(LocationSearchInput, Component);

  _prototypeProperties(LocationSearchInput, null, {
    handleChange: {

      // Handle change for controlled component
      value: function handleChange(address) {
        this.setState({ address: address });
        // Log state change
        console.log(JSON.stringify(this.state.address));
      },
      writable: true,
      configurable: true
    },
    render: {
      value: function render() {
        console.log("this.state:", this.state);
        console.log("this.props:", this.props);

        return React.createElement(
          PlacesAutocomplete,
          {
            value: this.props.value,
            onChange: this.props.onChange,
            onSelect: this.props.onSelect

          },
          function (_ref) {
            var getInputProps = _ref.getInputProps;
            var suggestions = _ref.suggestions;
            var getSuggestionItemProps = _ref.getSuggestionItemProps;
            return React.createElement(
              "div",
              null,
              React.createElement("input", getInputProps({
                placeholder: "Search Places ...",
                className: "location-search-input"
              })),
              React.createElement(
                "div",
                { className: "autocomplete-dropdown-container" },
                suggestions.map(function (suggestion) {
                  var className = suggestion.active ? "suggestion-item--active" : "suggestion-item";
                  var style = suggestion.active ? { backgroundColor: "#fafafa", cursor: "pointer" } : { backgroundColor: "#ffffff", cursor: "pointer" };
                  return React.createElement(
                    "div",
                    getSuggestionItemProps(suggestion, { className: className, style: style }),
                    React.createElement(
                      "span",
                      null,
                      suggestion.description
                    )
                  );
                })
              )
            );
          }
        );
      },
      writable: true,
      configurable: true
    }
  });

  return LocationSearchInput;
})(Component);

var stateToProps = function (state) {
  return {};
};

var dispatchToProps = function (dispatch) {
  return {};
};

module.exports = connect(stateToProps, dispatchToProps)(LocationSearchInput);
// // Initialize component with address string utilized in Google Geolocate API
// address: '',
// // Initialize component with latLng object which stores latitude and longitude results from Geolocate API
// latLng: {}
// inline style for demonstration purpose