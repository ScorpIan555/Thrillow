"use strict";

var _interopRequire = function (obj) { return obj && obj.__esModule ? obj["default"] : obj; };

var constants = _interopRequire(require("../constants"));

var _utils = require("../utils");

var TurboClient = _utils.TurboClient;
var SuperagentAsync = _utils.SuperagentAsync;


/* * * * * * * * * * * * * * * * * * * * * * * * * * *
	Application actions dispatched from Components for API calls and Redux, state management
* * * * * * * * * * * * * * * * * * * * * * * * * * * *
*/

module.exports = {

	fetchUsers: function (params) {
		return function (dispatch) {
			return dispatch(TurboClient.getRequest("user", params, constants.USERS_RECEIVED));
		};
	},

	addUser: function (params) {
		return function (dispatch) {
			return dispatch(TurboClient.postRequest("user", params, constants.USER_CREATED));
		};
	},

	// Unlike addUser, register() also maintains a session for login state. After calling
	// TurboClient.createUser(), the new user is logged in as well:
	register: function (params) {
		return function (dispatch) {
			return dispatch(TurboClient.createUser(params, constants.USER_CREATED));
		};
	},

	loginUser: function (credentials) {
		return function (dispatch) {
			return dispatch(TurboClient.login(credentials, constants.CURRENT_USER_RECEIVED));
		};
	},

	currentUser: function () {
		return function (dispatch) {
			return dispatch(TurboClient.currentUser(constants.CURRENT_USER_RECEIVED));
		};
	},

	getZillowListingResults: function (params) {
		return function (dispatch) {
			// console.log('getZillowResults from actions/index.js - url:  ' + console.log(url))
			// console.log('getZillowListingResults from actions/index.js - params:  ', params)
			return dispatch(SuperagentAsync.asyncGet("/homes", params, constants.ZILLOW_LISTING_RECEIVED));
		};
	},

	getZillowCompsResults: function (params) {
		return function (dispatch) {
			console.log("getZillowCompsResults from actions/index.js - params:  ", params);
			return dispatch(SuperagentAsync.asyncGet("/comps", params, constants.ZILLOW_COMPS_RECEIVED));
		};
	},

	dispatchLatLngFromSearchBoxToStore: function (latLngFromGeocodeApi) {
		var params = latLngFromGeocodeApi;
		console.log("dispatchLatLngFromSearchBoxToStore ", latLngFromGeocodeApi);
		console.log("dispatchLatLngFromSearchBoxToStore ", params);
		// return dispatch => {
		// 	return dispatch(SuperagentAsync.asyncGet('/homes/addressCall', params, constants.LAT_LONG_RECEIVED_FROM_SEARCH_BOX))
		// }
		// return dispatch => {
		// 	return dispatch(SuperagentAsync.asyncSend(params, constants.LAT_LONG_RECEIVED_FROM_SEARCH_BOX))
		// }
		return function (dispatch) {
			return dispatch({
				type: constants.LAT_LONG_RECEIVED_FROM_SEARCH_BOX,
				data: latLngFromGeocodeApi
			});
		};
	}

	// sendAddress: (latLngFromGeocodeApi) => {
	// 	return {
	// 		type: constants.LAT_LONG_RECEIVED_FROM_SEARCH_BOX,
	// 		data: latLngFromGeocodeApi
	// 	}
	// }
	// }

};