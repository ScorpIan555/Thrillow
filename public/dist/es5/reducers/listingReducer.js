"use strict";

var _interopRequire = function (obj) { return obj && obj.__esModule ? obj["default"] : obj; };

var constants = _interopRequire(require("../constants"));

/* * * * * * * * * * * * * * * * * * * * * * * * * * *
	Listing reducer for state management of listing results pulled from Zillow API
* * * * * * * * * * * * * * * * * * * * * * * * * * * *
*/

var initialState = {
	all: {
		address: "22 Dale Street",
		citystatezip: "Windsor Locks, CT",
		latLng: {
			lat: 41.9334208,
			lng: -72.65713199999999
		}
	}

};

module.exports = function (_x, action) {
	var state = arguments[0] === undefined ? initialState : arguments[0];
	var newState = Object.assign({}, state);
	var payload = action.data;

	switch (action.type) {

		case constants.ZILLOW_LISTING_RECEIVED:
			// Capture request/response objects
			newState.req = payload.body.data.request;
			newState.all = payload.body.data.response.results.result;
			// Console log request/response objects
			console.log("listing reducer REQ: " + JSON.stringify(newState.req));
			console.log("listing reducer RES: " + JSON.stringify(newState.all));
			// Capture lat/long objects
			newState.all.latitude = payload.body.data.response.results.result[0].address[0].latitude[0];
			newState.all.longitude = payload.body.data.response.results.result[0].address[0].longitude[0];
			// Console log latitude/longitude objects
			console.log("listing reducer LATITUDE: " + JSON.stringify(newState.all.latitude));
			console.log("listing reducer LONGITUDE: " + JSON.stringify(newState.all.longitude));

			return newState;

		case constants.ADDRESS_INPUT_RECEIVED_FROM_USER_INPUT:
			// Capture address object input by user into search box
			newState.userInputAddress = payload.body.data.response.results.result;
			console.log("ADDRESS_INPUT_RECEIVED_FROM_USER_INPUT:  ", newState.userInputAddress);
			console.log("ADDRESS_INPUT_RECEIVED_FROM_USER_INPUT:  ", JSON.stringify(newState.userInputAddress));

		case constants.LAT_LONG_RECEIVED_FROM_SEARCH_BOX:
			// Capture latLng object input by user into search box
			console.log("LAT_LONG_RECEIVED_FROM_SEARCH_BOX!");
			return newState;

		default:
			return state;
	}
};