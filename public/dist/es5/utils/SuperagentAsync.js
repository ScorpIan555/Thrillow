"use strict";

var _interopRequire = function (obj) { return obj && obj.__esModule ? obj["default"] : obj; };

var superagent = _interopRequire(require("superagent"));

var asyncGet = function (url, params, actionType) {
  return function (dispatch) {
    return superagent.get(url).query(params).set("Accept", "application/json").then(function (data) {
      console.log("superagent log - res:  ", data);
      console.log("superagent log - res:  " + JSON.stringify(data));
      if (actionType != null) {
        dispatch({
          type: actionType,
          params: params,
          data: data
        });
        // console.log(params)
        console.log(data);
        return data;
      }
    })["catch"](function (err) {
      console.log(err.message);
      console.log(err);
    });
  };
};

module.exports = {

  asyncGet: asyncGet

};