"use strict";

var _interopRequire = function (obj) { return obj && obj.__esModule ? obj["default"] : obj; };

var constants = _interopRequire(require("../constants"));

/* * * * * * * * * * * * * * * * * * * * * * * * * * *
	Listing reducer for state management of listing results pulled from Zillow API
* * * * * * * * * * * * * * * * * * * * * * * * * * * *
*/

var initialState = {
  all: null,
  listingZwid: ""
};

module.exports = function (_x, action) {
  var state = arguments[0] === undefined ? initialState : arguments[0];
  var newState = Object.assign({}, state);
  var payload = action.data;

  switch (action.type) {
    case constants.ZILLOW_COMPS_RECEIVED:
      console.log("ZILLOW_COMPS_RECEIVED!");

      return newState;

    default:
      return state;
  }
};