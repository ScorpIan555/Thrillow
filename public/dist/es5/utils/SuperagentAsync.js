"use strict";

var _interopRequire = function (obj) { return obj && obj.__esModule ? obj["default"] : obj; };

var superagent = _interopRequire(require("superagent"));

var asyncGet = function (url, params, actionType) {
  return function (dispatch) {
    return superagent.get(url).query(params).set("Accept", "application/json").then(function (data) {
      // if(url == '/comps' && data.body.data.response.results.result == undefined) {
      //   console.log('blank comps', JSON.stringify(data))
      //   data.body.data.response.results.result = '1'
      // } else {
      if (actionType != null) {
        dispatch({
          type: actionType,
          params: params,
          data: data
        });
        // console.log(params)
        console.log(data);
        console.log(JSON.stringify(data.body.data.response.results));
        return data;
      }
      // }
    })["catch"](function (err) {
      console.log(err.message);
      console.log(err);
    });
  };
};

var asyncSend = function (latLng, actionType) {
  return function (dispatch) {
    return superagent.get("homes/addressCall").query(latLng).set("Accept", "application/json").then(function (data) {
      // console.log('superagent log - res:  ', data)
      // console.log('superagent log - res:  ' + JSON.stringify(data))
      if (actionType != null) {
        dispatch({
          type: actionType,
          latLng: latLng,
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

  asyncGet: asyncGet,
  asyncSend: asyncSend

};