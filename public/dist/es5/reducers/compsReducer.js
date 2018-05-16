"use strict";

var _interopRequire = function (obj) { return obj && obj.__esModule ? obj["default"] : obj; };

var constants = _interopRequire(require("../constants"));

/* * * * * * * * * * * * * * * * * * * * * * * * * * *
	Listing reducer for state management of listing results pulled from Zillow API
* * * * * * * * * * * * * * * * * * * * * * * * * * * *
*/

var initialState = {
  all: [] };

module.exports = function (_x, action) {
  var state = arguments[0] === undefined ? initialState : arguments[0];
  var newState = Object.assign({}, state);
  var payload = action.data;

  switch (action.type) {

    case constants.ZILLOW_COMPS_RECEIVED:
      console.log("ZILLOW_COMPS_RECEIVED!");

      // Capture request/response objects
      newState.req = payload.body.data.request;
      newState.all = payload.body.data.response.properties;
      newState.all.principal = payload.body.data.response.properties.principal;
      newState.all.comparables = payload.body.data.response.properties.comparables[0].comp;

      // Console log request/response objects
      console.log("compsReducer REQ: " + JSON.stringify(newState.req));
      console.log("compsReducer PRINCIPAL: " + JSON.stringify(newState.all.principal));
      console.log("compsReducer COMPARABLES: " + JSON.stringify(newState.all.comparables));

      return newState;

    default:
      return state;
  }
};