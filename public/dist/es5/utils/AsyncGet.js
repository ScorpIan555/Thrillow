"use strict";

var _interopRequire = function (obj) { return obj && obj.__esModule ? obj["default"] : obj; };

var superagent = _interopRequire(require("superagent"));

var AsyncGet = function (url, params, actionType) {
  return function (dispatch) {
    return superagent.get(url).set("Accept", "application/json").then(function (res) {
      console.log("superagent log - res:  " + JSON.stringify(res));
      if (actionType != null) {
        dispatch({
          type: actionType,
          data: res
        });
      }
      return data;
    })["catch"](function (err) {
      console.log(err.message);
    });
  };
};

module.exports = {

  AsyncGet: AsyncGet

};