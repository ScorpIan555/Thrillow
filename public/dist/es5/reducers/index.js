"use strict";

var _interopRequire = function (obj) { return obj && obj.__esModule ? obj["default"] : obj; };

/* * * * * * * * * * * * * * * * * * * * * * * * * * *
	Export your reducers here
* * * * * * * * * * * * * * * * * * * * * * * * * * * *
*/


var userReducer = _interopRequire(require("./userReducer"));

var listingReducer = _interopRequire(require("./listingReducer"));

exports.userReducer = userReducer;
exports.listingReducer = listingReducer;
Object.defineProperty(exports, "__esModule", {
	value: true
});