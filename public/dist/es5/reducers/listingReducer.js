"use strict";

var _interopRequire = function (obj) { return obj && obj.__esModule ? obj["default"] : obj; };

var constants = _interopRequire(require("../constants"));

/* * * * * * * * * * * * * * * * * * * * * * * * * * *
	Listing reducer for state management of listing results pulled from Zillow API
* * * * * * * * * * * * * * * * * * * * * * * * * * * *
*/

var initialState = {
	all: [{ address: "22 Dale Street" }, { citystatezip: "06096" }, { count: 3 }, { zpid: "58162520" }],
	latLng: {
		lat: 41.9334208,
		lng: -72.6571319
	}
};

module.exports = function (_x, action) {
	var state = arguments[0] === undefined ? initialState : arguments[0];
	var newState = Object.assign({}, state);
	var payload = action.data;

	switch (action.type) {

		case constants.ZILLOW_LISTING_RECEIVED:
			console.log("ZILLOW_LISTING_RECEIVED!");

			// Capture request/response objects
			newState.req = payload.body.data.request;
			newState.all = payload.body.data.response.results.result;
			// Console log request/response objects
			console.log("listingReducer REQ: " + JSON.stringify(newState.req));
			console.log("listingReducer REQ: ", newState);
			console.log("listingReducer RES: " + JSON.stringify(newState.all));
			console.log("listingReducer RES: ", newState.all);

			// Capture lat/long objects
			newState.all.latitude = payload.body.data.response.results.result[0].address[0].latitude[0];
			newState.all.longitude = payload.body.data.response.results.result[0].address[0].longitude[0];
			// Console log latitude/longitude objects
			console.log("listingReducer LATITUDE: " + JSON.stringify(newState.all.latitude));
			console.log("listingReducer LONGITUDE: " + JSON.stringify(newState.all.longitude));

			return newState;

		case constants.LAT_LONG_RECEIVED_FROM_SEARCH_BOX:
			// Capture address object input by user into search box
			newState.latLng = payload.body.latLng;
			// Console log response objects
			console.log("ADDRESS_INPUT_RECEIVED_FROM_USER_INPUT:  ", newState.latLng);
			console.log("ADDRESS_INPUT_RECEIVED_FROM_USER_INPUT:  ", JSON.stringify(newState.latLng));

			return newState;

		default:
			return state;
	}
};