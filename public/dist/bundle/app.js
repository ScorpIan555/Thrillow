/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	function webpackJsonpCallback(data) {
/******/ 		var chunkIds = data[0];
/******/ 		var moreModules = data[1];
/******/ 		var executeModules = data[2];
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(data);
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/
/******/ 		// add entry modules from loaded chunk to deferred list
/******/ 		deferredModules.push.apply(deferredModules, executeModules || []);
/******/
/******/ 		// run deferred modules when all chunks ready
/******/ 		return checkDeferredModules();
/******/ 	};
/******/ 	function checkDeferredModules() {
/******/ 		var result;
/******/ 		for(var i = 0; i < deferredModules.length; i++) {
/******/ 			var deferredModule = deferredModules[i];
/******/ 			var fulfilled = true;
/******/ 			for(var j = 1; j < deferredModule.length; j++) {
/******/ 				var depId = deferredModule[j];
/******/ 				if(installedChunks[depId] !== 0) fulfilled = false;
/******/ 			}
/******/ 			if(fulfilled) {
/******/ 				deferredModules.splice(i--, 1);
/******/ 				result = __webpack_require__(__webpack_require__.s = deferredModule[0]);
/******/ 			}
/******/ 		}
/******/ 		return result;
/******/ 	}
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 	// Promise = chunk loading, 0 = chunk loaded
/******/ 	var installedChunks = {
/******/ 		1: 0
/******/ 	};
/******/
/******/ 	var deferredModules = [];
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	var jsonpArray = window["webpackJsonp"] = window["webpackJsonp"] || [];
/******/ 	var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
/******/ 	jsonpArray.push = webpackJsonpCallback;
/******/ 	jsonpArray = jsonpArray.slice();
/******/ 	for(var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
/******/ 	var parentJsonpFunction = oldJsonpFunction;
/******/
/******/
/******/ 	// add entry module to deferred list
/******/ 	deferredModules.push([251,0]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ 106:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__(27);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (props) {

	return _react2.default.createElement(
		_reactRedux.Provider,
		{ store: props.store },
		props.component
	);
};

/***/ }),

/***/ 110:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.LocationSearchInput = exports.Results = exports.LandingPage = exports.Nav = exports.Users = undefined;

var _Users = __webpack_require__(232);

var _Users2 = _interopRequireDefault(_Users);

var _Nav = __webpack_require__(204);

var _Nav2 = _interopRequireDefault(_Nav);

var _LandingPage = __webpack_require__(127);

var _LandingPage2 = _interopRequireDefault(_LandingPage);

var _Results = __webpack_require__(122);

var _Results2 = _interopRequireDefault(_Results);

var _LocationSearchInput = __webpack_require__(119);

var _LocationSearchInput2 = _interopRequireDefault(_LocationSearchInput);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.Users = _Users2.default;
exports.Nav = _Nav2.default;
exports.LandingPage = _LandingPage2.default;
exports.Results = _Results2.default;
exports.LocationSearchInput = _LocationSearchInput2.default; /* * * * * * * * * * * * * * * * * * * * * * * * * * *
                                                             	Export container components here
                                                             * * * * * * * * * * * * * * * * * * * * * * * * * * * *
                                                             */

/***/ }),

/***/ 119:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _reactPlacesAutocomplete = __webpack_require__(88);

var _reactPlacesAutocomplete2 = _interopRequireDefault(_reactPlacesAutocomplete);

var _reactRedux = __webpack_require__(27);

var _actions = __webpack_require__(47);

var _actions2 = _interopRequireDefault(_actions);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var LocationSearchInput = function (_Component) {
  _inherits(LocationSearchInput, _Component);

  function LocationSearchInput(props) {
    _classCallCheck(this, LocationSearchInput);

    var _this = _possibleConstructorReturn(this, (LocationSearchInput.__proto__ || Object.getPrototypeOf(LocationSearchInput)).call(this, props));

    _this.state = {
      // // Initialize component with address string utilized in Google Geolocate API
      // address: '',
      // // Initialize component with latLng object which stores latitude and longitude results from Geolocate API
      // latLng: {}
    };
    return _this;
  }

  _createClass(LocationSearchInput, [{
    key: 'render',
    value: function render() {
      var _this2 = this;

      console.log('this.state:', this.state);
      console.log('this.props:', this.props);

      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(
          _reactPlacesAutocomplete2.default,
          {
            value: this.props.value,
            onChange: this.props.onChange,
            onSelect: this.props.onSelect,
            onClick: this.props.onClick
          },
          function (_ref) {
            var getInputProps = _ref.getInputProps,
                suggestions = _ref.suggestions,
                getSuggestionItemProps = _ref.getSuggestionItemProps;
            return _react2.default.createElement(
              'div',
              null,
              _react2.default.createElement(
                'div',
                { className: 'col-auto' },
                _react2.default.createElement('i', { className: 'icon-magnifying-glass h4 text-body' })
              ),
              _react2.default.createElement(
                'div',
                { className: 'col' },
                _react2.default.createElement('input', getInputProps({
                  placeholder: 'Search Places ...',
                  className: 'location-search-input'
                })),
                _react2.default.createElement(
                  'div',
                  { className: 'autocomplete-dropdown-container' },
                  suggestions.map(function (suggestion) {
                    var className = suggestion.active ? 'suggestion-item--active' : 'suggestion-item';
                    // inline style for demonstration purpose
                    var style = suggestion.active ? { backgroundColor: '#fafafa', cursor: 'pointer' } : { backgroundColor: '#ffffff', cursor: 'pointer' };
                    return _react2.default.createElement(
                      'div',
                      getSuggestionItemProps(suggestion, { className: className, style: style }),
                      _react2.default.createElement(
                        'span',
                        null,
                        suggestion.description
                      )
                    );
                  })
                )
              ),
              _react2.default.createElement(
                'div',
                { className: 'col-auto' },
                _react2.default.createElement(
                  'button',
                  { className: 'btn btn-lg btn-success', onClick: _this2.props.onClick },
                  'Search'
                )
              )
            );
          }
        )
      );
    }
  }]);

  return LocationSearchInput;
}(_react.Component);

var stateToProps = function stateToProps(state) {
  return {};
};

var dispatchToProps = function dispatchToProps(dispatch) {
  return {};
};

exports.default = (0, _reactRedux.connect)(stateToProps, dispatchToProps)(LocationSearchInput);

/***/ }),

/***/ 120:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (props) {
  console.log(props);
  var imageLat = props.lat;
  var imageLng = props.lng;
  // console.log(imageLat)
  // console.log(imageLng)

  // Pass image-related props into local variables which will be componsed into a full url string for use as src prop
  // Build the image path string that each listing will pull from the Google Maps Street View API
  var imagePath = 'https://maps.googleapis.com/maps/api/streetview';
  var imageSize = 'size=400x400';
  var imageQueryPathArray = [imagePath, imageSize];
  var imageQueryPath = imageQueryPathArray.join('?');
  // console.log(imageQueryPath)
  // Compose location using the lat/long props passed in from Results.js
  var imageLocation = 'location=' + imageLat + ',' + imageLng;
  var imageFOVHeadingPitchApiKey = '&fov=90&heading=235&pitch=10&key=AIzaSyAGZkIyl-VNKwjTWBFFP_xb_R8nK2GQmzs';
  var imageFOVHeadingPitchApiKeyArray = [imageQueryPath, imageLocation, imageFOVHeadingPitchApiKey];
  var imageUrlComposed = imageFOVHeadingPitchApiKeyArray.join('&');
  // console.log(imageUrlComposed)

  return _react2.default.createElement(
    'div',
    null,
    _react2.default.createElement('img', { style: localStyle,
      alt: 'Image',
      src: imageUrlComposed,
      className: 'img-fluid rounded'
    })
  );
};

var localStyle = {
  height: '200px',
  width: '200px'
};

/***/ }),

/***/ 121:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (props) {
    return _react2.default.createElement(
        "footer",
        { className: "bg-gray text-light footer-long" },
        _react2.default.createElement(
            "div",
            { className: "container" },
            _react2.default.createElement(
                "div",
                { className: "row" },
                _react2.default.createElement(
                    "div",
                    { className: "col-12 col-md-3" },
                    _react2.default.createElement("img", { alt: "Image", src: "dist/assets/img/play-now.jpg", style: { width: 50, height: 50 }, className: "mb-4" }),
                    _react2.default.createElement(
                        "p",
                        { className: "text-muted" },
                        "\xA9 2018 Van Daley Industries, LLC"
                    )
                ),
                _react2.default.createElement(
                    "div",
                    { className: "col-12 col-md-9" },
                    _react2.default.createElement(
                        "span",
                        { className: "h5" },
                        "Zillow Brands: "
                    ),
                    _react2.default.createElement(
                        "div",
                        { className: "row no-gutters" },
                        _react2.default.createElement(
                            "div",
                            { className: "col-6 col-lg-3" },
                            _react2.default.createElement(
                                "h6",
                                null,
                                "Navigate"
                            ),
                            _react2.default.createElement(
                                "ul",
                                { className: "list-unstyled" },
                                _react2.default.createElement(
                                    "li",
                                    null,
                                    _react2.default.createElement(
                                        "a",
                                        { href: "index.html" },
                                        "Overview"
                                    )
                                ),
                                _react2.default.createElement(
                                    "li",
                                    null,
                                    _react2.default.createElement(
                                        "a",
                                        { href: "pages-landing.html" },
                                        "Landing Pages"
                                    )
                                ),
                                _react2.default.createElement(
                                    "li",
                                    null,
                                    _react2.default.createElement(
                                        "a",
                                        { href: "pages-app.html" },
                                        "App Pages"
                                    )
                                ),
                                _react2.default.createElement(
                                    "li",
                                    null,
                                    _react2.default.createElement(
                                        "a",
                                        { href: "pages-inner.html" },
                                        "Inner Pages"
                                    )
                                )
                            )
                        ),
                        _react2.default.createElement(
                            "div",
                            { className: "col-6 col-lg-3" },
                            _react2.default.createElement(
                                "h6",
                                null,
                                "Platform"
                            ),
                            _react2.default.createElement(
                                "ul",
                                { className: "list-unstyled" },
                                _react2.default.createElement(
                                    "li",
                                    null,
                                    _react2.default.createElement(
                                        "a",
                                        { href: "#" },
                                        "Mac OS & iOS"
                                    )
                                ),
                                _react2.default.createElement(
                                    "li",
                                    null,
                                    _react2.default.createElement(
                                        "a",
                                        { href: "#" },
                                        "Android & Chrome OS"
                                    )
                                ),
                                _react2.default.createElement(
                                    "li",
                                    null,
                                    _react2.default.createElement(
                                        "a",
                                        { href: "#" },
                                        "Windows"
                                    )
                                ),
                                _react2.default.createElement(
                                    "li",
                                    null,
                                    _react2.default.createElement(
                                        "a",
                                        { href: "#" },
                                        "Linux"
                                    )
                                )
                            )
                        ),
                        _react2.default.createElement(
                            "div",
                            { className: "col-6 col-lg-3" },
                            _react2.default.createElement(
                                "h6",
                                null,
                                "Community"
                            ),
                            _react2.default.createElement(
                                "ul",
                                { className: "list-unstyled" },
                                _react2.default.createElement(
                                    "li",
                                    null,
                                    _react2.default.createElement(
                                        "a",
                                        { href: "#" },
                                        "Forum"
                                    )
                                ),
                                _react2.default.createElement(
                                    "li",
                                    null,
                                    _react2.default.createElement(
                                        "a",
                                        { href: "#" },
                                        "Knowledgebase"
                                    )
                                ),
                                _react2.default.createElement(
                                    "li",
                                    null,
                                    _react2.default.createElement(
                                        "a",
                                        { href: "#" },
                                        "Hire an expert"
                                    )
                                ),
                                _react2.default.createElement(
                                    "li",
                                    null,
                                    _react2.default.createElement(
                                        "a",
                                        { href: "#" },
                                        "FAQ"
                                    )
                                ),
                                _react2.default.createElement(
                                    "li",
                                    null,
                                    _react2.default.createElement(
                                        "a",
                                        { href: "#" },
                                        "Contact"
                                    )
                                )
                            )
                        ),
                        _react2.default.createElement(
                            "div",
                            { className: "col-6 col-lg-3" },
                            _react2.default.createElement(
                                "h6",
                                null,
                                "Company"
                            ),
                            _react2.default.createElement(
                                "ul",
                                { className: "list-unstyled" },
                                _react2.default.createElement(
                                    "li",
                                    null,
                                    _react2.default.createElement(
                                        "a",
                                        { href: "#" },
                                        "About company"
                                    )
                                ),
                                _react2.default.createElement(
                                    "li",
                                    null,
                                    _react2.default.createElement(
                                        "a",
                                        { href: "#" },
                                        "History"
                                    )
                                ),
                                _react2.default.createElement(
                                    "li",
                                    null,
                                    _react2.default.createElement(
                                        "a",
                                        { href: "#" },
                                        "Team"
                                    )
                                ),
                                _react2.default.createElement(
                                    "li",
                                    null,
                                    _react2.default.createElement(
                                        "a",
                                        { href: "#" },
                                        "Investment"
                                    )
                                )
                            )
                        )
                    )
                )
            )
        )
    );
};

/***/ }),

/***/ 122:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _presentation = __webpack_require__(87);

var _reactRedux = __webpack_require__(27);

var _actions = __webpack_require__(47);

var _actions2 = _interopRequireDefault(_actions);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Results = function (_Component) {
  _inherits(Results, _Component);

  function Results() {
    _classCallCheck(this, Results);

    var _this = _possibleConstructorReturn(this, (Results.__proto__ || Object.getPrototypeOf(Results)).call(this));

    _this.state = {
      // location: {}
    };
    return _this;
  }

  _createClass(Results, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      console.log('Results componentDidMount, this.props: ', this.props);
      // geocodeByAddress(address)
      //   .then(results => getLatLng(results[0]))
      //   // .then(latLng => console.log('latLng', latLng) )
      //   .then(latLng => this.setState({latLng}) )
      //   .catch(error => console.error('Error', error))

      var params = {
        address: this.props.listing.all[0].address, //
        citystatezip: this.props.listing.all[1].citystatezip, //
        count: this.props.listing.all[2].count, //
        zpid: this.props.listing.all[3].zpid
      };

      this.props.getZillowListingResults(params).then(this.props.getZillowCompsResults(params));
      console.log('ZPID:  ', JSON.stringify(params.zpid));
    }
  }, {
    key: 'render',
    value: function render() {
      // Capture principal listing
      // Capture latitude and longitude from stateToProps (Zillow)
      var listingLat = this.props.latLng || [];
      var listingLng = this.props.latLng || [];
      // Capture latitude and longitude from stateToProps (Google Maps)
      // let listingLat = this.props.listing.all[0].latLng[0].lat || []
      // let listingLng = this.props.listing.all[0].latLng[0].lng || []
      // Logs
      console.log('this.props:  ', this.props);
      console.log('this.props.listing:  ', this.props.listing);
      console.log('this.props.comps:  ', this.props.comps);
      console.log('this.props.listing.latLng:  ', this.props.listing.latLng);
      console.log('this.props.latLng:  ', this.props.latLng);
      console.log('listingLat ', listingLat);
      console.log('listingLng ', listingLng);
      // console.log(typeof(this.props.listing))
      // console.log(typeof(listingLng))

      // Capture comps array
      var comps = this.props.comps.all.comparables || [];

      console.log('comps: ', comps);

      return _react2.default.createElement(
        'section',
        null,
        _react2.default.createElement(
          'div',
          { className: 'container' },
          _react2.default.createElement(
            'div',
            { className: 'row justify-content-center text-center section-intro' },
            _react2.default.createElement(
              'div',
              { className: 'col-12 col-md-9 col-lg-8' },
              _react2.default.createElement(
                'span',
                { className: 'title-decorative' },
                'Perfect for Startups'
              ),
              _react2.default.createElement(
                'h3',
                { className: 'display-4' },
                'Potential rental deals'
              ),
              _react2.default.createElement(
                'span',
                { className: 'lead' },
                '803 rentals listed under their Rent Zestimate in New York'
              )
            )
          ),
          _react2.default.createElement(
            'ul',
            { className: 'feature-list feature-list-lg' },
            _react2.default.createElement(
              'li',
              { className: 'row justify-content-center align-items-center' },
              _react2.default.createElement(_presentation.Listing, { lat: listingLat.lat, lng: listingLng.lng })
            ),
            _react2.default.createElement(
              'li',
              { className: 'row justify-content-center align-items-center' },
              _react2.default.createElement(
                'button',
                { type: 'button', 'class': 'btn btn-primary btn-lg' },
                'Show Listings'
              )
            )
          ),
          _react2.default.createElement(
            'div',
            { className: 'row justify-content-center text-center section-intro' },
            _react2.default.createElement(
              'div',
              { className: 'col-12 col-md-9 col-lg-8' },
              _react2.default.createElement(
                'span',
                { className: 'title-decorative' },
                'Perfect for Startups'
              ),
              _react2.default.createElement(
                'h3',
                { className: 'display-4' },
                'Potential rental deals'
              ),
              _react2.default.createElement(
                'span',
                { className: 'lead' },
                '803 rentals listed under their Rent Zestimate in New York'
              )
            )
          ),
          _react2.default.createElement(
            'ul',
            { className: 'feature-list feature-list-lg' },
            _react2.default.createElement(
              'li',
              { className: 'row justify-content-center align-items-center' },
              comps.map(function (comp, i) {
                return _react2.default.createElement(
                  'div',
                  { className: 'col-sm' },
                  _react2.default.createElement(_presentation.Listing, { key: comp.zpid, lat: comp.address[0].latitude[0], lng: comp.address[0].longitude[0] })
                );
              })
            ),
            _react2.default.createElement(
              'li',
              { className: 'row justify-content-center align-items-center' },
              _react2.default.createElement(
                'button',
                { type: 'button', 'class': 'btn btn-primary btn-lg' },
                'Show Listings'
              )
            )
          )
        )
      );
    }
  }]);

  return Results;
}(_react.Component);

var stateToProps = function stateToProps(state) {
  return {
    listing: state.listing,
    comps: state.comps,
    latLng: state.listing.latLng
  };
};

var dispatchToProps = function dispatchToProps(dispatch) {
  return {
    getZillowListingResults: function getZillowListingResults(params) {
      return dispatch(_actions2.default.getZillowListingResults(params));
    },
    getZillowCompsResults: function getZillowCompsResults(params) {
      return dispatch(_actions2.default.getZillowCompsResults(params));
    }
  };
};

exports.default = (0, _reactRedux.connect)(stateToProps, dispatchToProps)(Results);

/***/ }),

/***/ 127:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _reactPlacesAutocomplete = __webpack_require__(88);

var _reactPlacesAutocomplete2 = _interopRequireDefault(_reactPlacesAutocomplete);

var _actions = __webpack_require__(47);

var _actions2 = _interopRequireDefault(_actions);

var _reactRedux = __webpack_require__(27);

var _containers = __webpack_require__(110);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var LandingPage = function (_Component) {
  _inherits(LandingPage, _Component);

  function LandingPage() {
    _classCallCheck(this, LandingPage);

    var _this = _possibleConstructorReturn(this, (LandingPage.__proto__ || Object.getPrototypeOf(LandingPage)).call(this));

    _this.state = {
      // Initialize component with address string utilized in Google Geolocate API
      address: '',
      // Initialize component with latLng object which stores latitude and longitude results from Geolocate API
      latLng: {}
    };
    return _this;
  }

  _createClass(LandingPage, [{
    key: 'onButtonClick',
    value: function onButtonClick(address, event) {
      // event.preventDefault()
      console.log('Address Search Executed.event :', event);
      console.log('Address Search Executed!', address);

      this.handleSelect(address);
    }

    // Handle change for controlled component

  }, {
    key: 'handleChange',
    value: function handleChange(address) {

      this.setState({ address: address });
      // Log state change
      console.log(JSON.stringify(this.state.address));
      console.log(JSON.stringify(address));
    }

    // Handle user input to search box

  }, {
    key: 'handleSelect',
    value: function handleSelect(address) {
      var _this2 = this;

      address == 'null' ? address = this.state.address : address;
      console.log('address: ', address);
      console.log('typeof(address):', typeof address === 'undefined' ? 'undefined' : _typeof(address));
      // Call Google Maps Geolocator API, returns an object w/ a lat/lng properties
      (0, _reactPlacesAutocomplete.geocodeByAddress)(address).then(function (results) {
        return (0, _reactPlacesAutocomplete.getLatLng)(results[0]);
      })
      // Simulatneously, asynchronously call both the dispatchToStore & the Zillow API call
      .then(function (latLng) {
        return _this2.addressCalls(latLng, address);
      }).catch(function (error) {
        return console.error('Error', error);
      });
    }

    // 1) Dispatch coordinates from Google Geolocate API to store for use in client
    // 2) Dispatch call to Zillow API thru the back-end

  }, {
    key: 'addressCalls',
    value: function addressCalls(latLng, address) {
      var _this3 = this;

      console.log('addressCalls.latLng: ', latLng);
      console.log('addressCalls.address: ', address);
      // Send coordinates from Geolocate API to store asynchronously thru Redux
      this.props.dispatchLatLngFromSearchBoxToStore(latLng);

      // Split address from search box for input into Zillow API
      var paramsAddress = address.split(',', 1);
      // Split citystatezip from search box for input into Zillow API
      var arrayFromAddressAndCitystatezip = address.split(',');
      var paramsCitystatezip = arrayFromAddressAndCitystatezip[1] + ',' + arrayFromAddressAndCitystatezip[2];
      // Store Zillow API parameters in client, to be passed into back-end
      var params = {
        address: paramsAddress,
        citystatezip: paramsCitystatezip
        // Call Zillow 'GetSearchResults' API, return listing results
      };this.props.getZillowListingResults(params).then(function (listingResults) {
        // Capture parameters needed to call Zillow 'GetComps' API, return comp results
        params.zpid = listingResults.body.data.response.results.result[0].zpid[0];
        // Set required parameter 'count'
        params.count = 3;
        // Call Zillow 'GetComps' API, return comp results
        _this3.props.getZillowCompsResults(params);
      });
    }
  }, {
    key: 'render',
    value: function render() {

      var addressValue = this.state.address;
      var addressValueType = _typeof(this.state.address);
      console.log('addressValue: ', addressValue);
      console.log('addressValueType: ', addressValueType);
      console.log('props:  ', this.props);

      return _react2.default.createElement(
        'section',
        { className: 'bg-dark text-white space-xlg' },
        _react2.default.createElement('img', { alt: 'Image', src: 'dist/assets/img/laith-abdulkareem-96120-unsplash.jpg', className: 'bg-image opacity-40' }),
        _react2.default.createElement(
          'div',
          { className: 'container' },
          _react2.default.createElement(
            'div',
            { className: 'row text-center justify-content-center section-intro' },
            _react2.default.createElement(
              'div',
              { className: 'col-12 col-md-10 col-lg-8' },
              _react2.default.createElement(
                'h1',
                { className: 'display-3' },
                'Welcome to Thrillow'
              ),
              _react2.default.createElement(
                'span',
                { className: 'lead' },
                'A Zillow Knockoff... And not even the good kind!'
              )
            )
          ),
          _react2.default.createElement(
            'div',
            { className: 'row text-center ' },
            _react2.default.createElement(
              'div',
              { className: 'col' },
              _react2.default.createElement(
                'a',
                { href: '#', className: 'btn btn-outline-secondary mb-1 text-white opacity-80' },
                'BUY'
              ),
              _react2.default.createElement(
                'a',
                { href: '#', className: 'btn btn-outline-secondary mb-1 text-white' },
                'RENT'
              ),
              _react2.default.createElement(
                'a',
                { href: '#', className: 'btn btn-outline-secondary mb-1 text-white' },
                'SELL'
              ),
              _react2.default.createElement(
                'a',
                { href: '#', className: 'btn btn-outline-secondary mb-1 text-white' },
                'ZESTIMATE'
              )
            )
          ),
          _react2.default.createElement(
            'div',
            { className: 'row justify-content-center' },
            _react2.default.createElement(
              'div',
              { className: 'col-12 col-md-10 col-lg-8' },
              _react2.default.createElement(
                'div',
                { className: 'card card-sm' },
                _react2.default.createElement(
                  'div',
                  { className: 'card-body row no-gutters align-items-center' },
                  _react2.default.createElement(_containers.LocationSearchInput, { value: addressValue, onChange: this.handleChange.bind(this), onSelect: this.handleSelect.bind(this), onClick: this.onButtonClick.bind(this, addressValue), className: 'form-control form-control-lg form-control-borderless', type: 'search', placeholder: 'Search topics or keywords' })
                )
              )
            )
          )
        )
      );
    }
  }]);

  return LandingPage;
}(_react.Component);

var stateToProps = function stateToProps(state) {};

var dispatchToProps = function dispatchToProps(dispatch) {
  return {
    // Dispatch Zillow 'GetSearchResults' API call to '/homes' route
    getZillowListingResults: function getZillowListingResults(params) {
      return dispatch(_actions2.default.getZillowListingResults(params));
    },
    // Dispatch Zillow 'GetSearchResults' API call to '/comps' route
    getZillowCompsResults: function getZillowCompsResults(params) {
      return dispatch(_actions2.default.getZillowCompsResults(params));
    },
    // Dispatch latLng object returned from Google Maps Geolocate API call to store
    dispatchLatLngFromSearchBoxToStore: function dispatchLatLngFromSearchBoxToStore(latLng) {
      return dispatch(_actions2.default.dispatchLatLngFromSearchBoxToStore(latLng));
    }
  };
};

exports.default = (0, _reactRedux.connect)(stateToProps, dispatchToProps)(LandingPage);

/***/ }),

/***/ 204:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__(27);

var _reactBootstrap = __webpack_require__(118);

var _reactDropzone = __webpack_require__(117);

var _reactDropzone2 = _interopRequireDefault(_reactDropzone);

var _actions = __webpack_require__(47);

var _actions2 = _interopRequireDefault(_actions);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Nav = function (_Component) {
    _inherits(Nav, _Component);

    function Nav() {
        _classCallCheck(this, Nav);

        var _this = _possibleConstructorReturn(this, (Nav.__proto__ || Object.getPrototypeOf(Nav)).call(this));

        _this.state = {
            showEditModal: false,
            showLoginModal: false,
            showSignupModal: false
        };
        return _this;
    }

    _createClass(Nav, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            console.log('Nav component did mount!');
        }
    }, {
        key: 'render',
        value: function render() {
            return _react2.default.createElement(
                'div',
                { className: 'nav-container' },
                _react2.default.createElement(
                    'div',
                    { className: 'bg-light navbar-light', 'data-sticky': 'top' },
                    _react2.default.createElement(
                        'div',
                        { className: 'container' },
                        _react2.default.createElement(
                            'nav',
                            { className: 'navbar navbar-expand-lg' },
                            _react2.default.createElement(
                                'a',
                                { className: 'navbar-brand', href: '/' },
                                _react2.default.createElement('img', { alt: 'Wingman', src: 'dist/assets/img/logo-white.svg' })
                            ),
                            _react2.default.createElement(
                                'button',
                                { className: 'navbar-toggler', type: 'button', 'data-toggle': 'collapse', 'data-target': '#navbarNav', 'aria-controls': 'navbarNav', 'aria-expanded': 'false', 'aria-label': 'Toggle navigation' },
                                _react2.default.createElement('i', { className: 'icon-menu h4' })
                            ),
                            _react2.default.createElement(
                                'div',
                                { className: 'collapse navbar-collapse justify-content-between', id: 'navbarNav' },
                                _react2.default.createElement(
                                    'ul',
                                    { className: 'navbar-nav' },
                                    _react2.default.createElement(
                                        'li',
                                        { className: 'nav-item' },
                                        _react2.default.createElement(
                                            'a',
                                            { className: 'nav-link' },
                                            'Buy'
                                        )
                                    ),
                                    _react2.default.createElement(
                                        'li',
                                        { className: 'nav-item' },
                                        _react2.default.createElement(
                                            'a',
                                            { href: 'index.html', className: 'nav-link' },
                                            'Rent'
                                        )
                                    ),
                                    _react2.default.createElement(
                                        'li',
                                        { className: 'nav-item' },
                                        _react2.default.createElement(
                                            'a',
                                            { href: 'index.html', className: 'nav-link' },
                                            'Sell'
                                        )
                                    ),
                                    _react2.default.createElement(
                                        'li',
                                        { className: 'nav-item' },
                                        _react2.default.createElement(
                                            'a',
                                            { href: 'index.html', className: 'nav-link' },
                                            'Mortgages'
                                        )
                                    ),
                                    _react2.default.createElement(
                                        'li',
                                        { className: 'nav-item' },
                                        _react2.default.createElement(
                                            'a',
                                            { href: 'index.html', className: 'nav-link' },
                                            'Agent Finder'
                                        )
                                    )
                                ),
                                _react2.default.createElement(
                                    'ul',
                                    { className: 'navbar-nav' },
                                    _react2.default.createElement(
                                        'li',
                                        { className: 'nav-item' },
                                        _react2.default.createElement(
                                            'a',
                                            { href: '#' },
                                            'Sign up'
                                        ),
                                        _react2.default.createElement(
                                            'span',
                                            null,
                                            '\xA0or\xA0'
                                        ),
                                        _react2.default.createElement(
                                            'a',
                                            { href: '#' },
                                            'Sign in'
                                        )
                                    )
                                )
                            )
                        )
                    )
                )
            );
        }
    }]);

    return Nav;
}(_react.Component);

var localStyle = {
    input: {
        border: '1px solid #ddd',
        marginBottom: 12
    },
    dropzone: {
        marginRight: 16
    },
    textarea: {
        border: '1px solid #ddd',
        height: 160
    },
    icon: {
        width: 32, borderRadius: 24, float: 'right'
    },
    modal: {
        padding: 20
    }
};

var stateToProps = function stateToProps(state) {
    return {};
};

var dispatchToProps = function dispatchToProps(dispatch) {
    return {};
};

exports.default = (0, _reactRedux.connect)(stateToProps, dispatchToProps)(Nav);

/***/ }),

/***/ 205:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _superagent = __webpack_require__(14);

var _superagent2 = _interopRequireDefault(_superagent);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var asyncGet = function asyncGet(url, params, actionType) {
  return function (dispatch) {
    return _superagent2.default.get(url).query(params).set('Accept', 'application/json').then(function (data) {
      // console.log('superagent log - res:  ', data)
      // console.log('superagent log - res:  ' + JSON.stringify(data))
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
    }).catch(function (err) {
      console.log(err.message);
      console.log(err);
    });
  };
};

var asyncSend = function asyncSend(url, params, actionType) {
  return function (dispatch) {
    return _superagent2.default.get(url).query(params).set('Accept', 'application/json').then(function (data) {
      console.log('superagent log - res:  ', data);
      console.log('superagent log - res:  ' + JSON.stringify(data));
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
    }).catch(function (err) {
      console.log(err.message);
      console.log(err);
    });
  };
};

exports.default = {

  asyncGet: asyncGet

};

/***/ }),

/***/ 211:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _server = __webpack_require__(210);

var _server2 = _interopRequireDefault(_server);

var _ServerEntry = __webpack_require__(106);

var _ServerEntry2 = _interopRequireDefault(_ServerEntry);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (initialState, component) {
	var app = _react2.default.createElement(component);
	var provider = _react2.default.createElement(_ServerEntry2.default, { component: app, store: initialState });

	return {
		// https://reactjs.org/docs/react-dom-server.html
		// Render a React element to its initial HTML. React will return an HTML string. You can use this method to generate HTML on the server and send the markup down on the initial request for faster page loads and to allow search engines to crawl your pages for SEO purposes.
		react: _server2.default.renderToString(provider),
		// retrieve initialState value and convert into JSON string
		initial: JSON.stringify(initialState.getState())
	};
};

/***/ }),

/***/ 212:
/***/ (function(module) {

module.exports = {"name":"thrillow","version":"0.0.0","server":false,"private":true,"scripts":{"dev":"webpack --mode development -w","build":"npm run clean && NODE_ENV=production webpack -p && gulp prod","clean":"rm -rf ./public/dist","postinstall":"npm run build"},"dependencies":{"accepts":"^1.3.5","array-flatten":"1.1.1","bluebird":"^3.5.1","body-parser":"1.18.2","content-disposition":"0.5.2","content-type":"^1.0.4","cookie":"0.3.1","cookie-signature":"1.0.6","debug":"2.6.9","depd":"^1.1.2","dotenv":"^5.0.1","encodeurl":"^1.0.2","escape-html":"^1.0.3","etag":"^1.8.1","finalhandler":"1.1.1","fresh":"0.5.2","merge-descriptors":"1.0.1","methods":"^1.1.2","moment":"^2.20.1","node-zillow":"^1.0.1","nodemon":"^1.17.1","on-finished":"^2.3.0","parseurl":"^1.3.2","path-to-regexp":"0.1.7","proxy-addr":"^2.0.3","qs":"6.5.1","range-parser":"^1.2.0","react":"^16.2.0","react-bootstrap":"^0.32.1","react-dom":"^16.2.0","react-dropzone":"^4.2.8","react-places-autocomplete":"^7.1.1","react-redux":"^5.0.7","react-time":"^4.3.0","redux":"^3.7.2","redux-thunk":"^2.2.0","safe-buffer":"5.1.1","send":"0.16.2","serve-static":"1.13.2","setprototypeof":"1.1.0","statuses":"^1.4.0","superagent":"^3.8.2","turbo360":"latest","type-is":"^1.6.16","utils-merge":"1.0.1","vary":"^1.1.2","vertex360":"latest"},"devDependencies":{"babel-core":"^6.26.0","babel-loader":"^7.1.3","babel-preset-env":"^1.6.1","babel-preset-react":"^6.24.1","chai":"^4.1.2","chai-http":"^3.0.0","cross-env":"^5.1.4","gulp":"^3.9.1","gulp-6to5":"^3.0.0","gulp-autoprefixer":"^5.0.0","gulp-clean-css":"^3.9.2","gulp-concat":"^2.6.1","gulp-less":"^4.0.0","gulp-rename":"^1.2.2","gulp-sass":"^3.1.0","gulp-uglify":"^3.0.0","json-loader":"^0.5.7","mocha":"^5.0.1","mocha-jscs":"^5.0.1","mocha-jshint":"^2.3.1","rimraf":"^2.6.2","uglifyjs-webpack-plugin":"^1.2.2","webpack":"^4.1.1","webpack-cli":"^2.0.10"},"deploy":["."],"format":"vertex","app":""};

/***/ }),

/***/ 230:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _turbo = __webpack_require__(229);

var _turbo2 = _interopRequireDefault(_turbo);

var _package = __webpack_require__(212);

var _package2 = _interopRequireDefault(_package);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var APP_ID = _package2.default.app || '';

var postRequest = function postRequest(resource, params, actionType) {
	return function (dispatch) {
		return (0, _turbo2.default)({ site_id: APP_ID }).create(resource, params).then(function (data) {
			if (actionType != null) {
				dispatch({
					type: actionType,
					data: data
				});
			}

			return data;
		}).catch(function (err) {
			throw err;
		});
	};
};

var getRequest = function getRequest(resource, params, actionType) {
	return function (dispatch) {
		return (0, _turbo2.default)({ site_id: APP_ID }).fetch(resource, params).then(function (data) {
			if (actionType != null) {
				dispatch({
					type: actionType,
					params: params, // can be null
					data: data
				});
			}

			return data;
		}).catch(function (err) {
			throw err;
		});
	};
};

var putRequest = function putRequest(resource, entity, params, actionType) {
	return function (dispatch) {
		return (0, _turbo2.default)({ site_id: APP_ID }).update(resource, entity, params).then(function (data) {
			if (actionType != null) {
				dispatch({
					type: actionType,
					data: data
				});
			}

			return data;
		}).catch(function (err) {
			throw err;
		});
	};
};

var deleteRequest = function deleteRequest(resource, entity, actionType) {
	return function (dispatch) {
		return (0, _turbo2.default)({ site_id: APP_ID }).remove(resource, entity).then(function (data) {
			if (actionType != null) {
				dispatch({
					type: actionType,
					data: data
				});
			}

			return data;
		}).catch(function (err) {
			throw err;
		});
	};
};

var createUser = function createUser(credentials, actionType) {
	return function (dispatch) {
		return (0, _turbo2.default)({ site_id: APP_ID }).createUser(credentials).then(function (data) {
			if (actionType != null) {
				dispatch({
					type: actionType,
					data: data
				});
			}

			return data;
		}).catch(function (err) {
			throw err;
		});
	};
};

var login = function login(credentials, actionType) {
	return function (dispatch) {
		return (0, _turbo2.default)({ site_id: APP_ID }).login(credentials).then(function (data) {
			if (actionType != null) {
				dispatch({
					type: actionType,
					data: data
				});
			}

			return data;
		}).catch(function (err) {
			throw err;
		});
	};
};

var currentUser = function currentUser(actionType) {
	return function (dispatch) {
		return (0, _turbo2.default)({ site_id: APP_ID }).currentUser().then(function (data) {
			if (actionType != null) {
				dispatch({
					type: actionType,
					data: data
				});
			}

			return data;
		}).catch(function (err) {
			throw err;
		});
	};
};

var uploadFile = function uploadFile(file) {
	return (0, _turbo2.default)({ site_id: APP_ID }).uploadFile(file); // returns a Promise
};

exports.default = {

	getRequest: getRequest,
	postRequest: postRequest,
	putRequest: putRequest,
	deleteRequest: deleteRequest,
	createUser: createUser,
	login: login,
	currentUser: currentUser,
	uploadFile: uploadFile

};

/***/ }),

/***/ 231:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.SuperagentAsync = exports.renderComponents = exports.ServerEntry = exports.TurboClient = undefined;

var _TurboClient = __webpack_require__(230);

var _TurboClient2 = _interopRequireDefault(_TurboClient);

var _ServerEntry = __webpack_require__(106);

var _ServerEntry2 = _interopRequireDefault(_ServerEntry);

var _renderComponents = __webpack_require__(211);

var _renderComponents2 = _interopRequireDefault(_renderComponents);

var _SuperagentAsync = __webpack_require__(205);

var _SuperagentAsync2 = _interopRequireDefault(_SuperagentAsync);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.TurboClient = _TurboClient2.default;
exports.ServerEntry = _ServerEntry2.default;
exports.renderComponents = _renderComponents2.default;
exports.SuperagentAsync = _SuperagentAsync2.default;

/***/ }),

/***/ 232:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__(27);

var _actions = __webpack_require__(47);

var _actions2 = _interopRequireDefault(_actions);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
	This container serves primarily as an example of how to execute basic
	user tasks like login, logout, etc. Feel free to re-purpose this componenet 
	for your own project or create your own components using the functions 
	from here as a guide.
* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
*/

var Users = function (_Component) {
	_inherits(Users, _Component);

	function Users() {
		_classCallCheck(this, Users);

		var _this = _possibleConstructorReturn(this, (Users.__proto__ || Object.getPrototypeOf(Users)).call(this));

		_this.state = {
			error: null,
			user: {
				username: ''
			}
		};
		return _this;
	}

	// On mount, we fetch all current users on the backend (this.props.fetchUsers) then 
	// check if there is a currently logged-in user (this.props.currentUser)


	_createClass(Users, [{
		key: 'componentDidMount',
		value: function componentDidMount() {
			var _this2 = this;

			this.props.fetchUsers({}).then(function (response) {
				return _this2.props.currentUser(); // get the logged-in user, if any
			}).then(function (response) {}).catch(function (err) {
				console.log('ERROR: ' + err.message);
			});
		}

		// This function updates a user:

	}, {
		key: 'updateUser',
		value: function updateUser(field, event) {
			if (event) event.preventDefault();

			var updated = Object.assign({}, this.state.user);
			updated[field] = event.target.value;
			this.setState({
				user: updated
			});
		}

		// This function creates a new user and adds it to the Turbo backend:

	}, {
		key: 'submitUser',
		value: function submitUser(event) {
			if (event) event.preventDefault();

			if (this.state.user.username.length == 0) {
				alert('Please Enter a Username');
				return;
			}

			this.props.addUser(this.state.user).then(function (response) {}).catch(function (err) {
				alert(err.message);
			});
		}

		// This function logs in the user on the Turbo backend:

	}, {
		key: 'loginUser',
		value: function loginUser(event) {
			if (event) event.preventDefault();

			if (this.state.user.username.length == 0) {
				alert('Please Enter a Username');
				return;
			}

			if (this.state.user.password == null) {
				alert('Please Enter a Password');
				return;
			}

			this.props.loginUser(this.state.user).then(function (response) {
				console.log('LOGIN: ' + JSON.stringify(response));
			}).catch(function (err) {
				alert(err.message);
			});
		}
	}, {
		key: 'render',
		value: function render() {
			var usersList = this.props.users.all || [];

			var joinTurbo = _react2.default.createElement(
				'div',
				null,
				_react2.default.createElement(
					'a',
					{ target: '_blank', href: 'https://www.velocity360.io/turbo' },
					'Join Turbo!'
				)
			);

			return _react2.default.createElement(
				'div',
				null,
				_react2.default.createElement(
					'div',
					{ className: 'row' },
					_react2.default.createElement(
						'div',
						{ className: 'col-md-6' },
						_react2.default.createElement(
							'h3',
							{ className: 'topmargin-sm nobottommargin' },
							'Add User'
						),
						_react2.default.createElement('input', { className: 'form-control', onChange: this.updateUser.bind(this, 'username'), type: 'text', placeholder: 'username' }),
						_react2.default.createElement('br', null),
						_react2.default.createElement('input', { className: 'form-control', onChange: this.updateUser.bind(this, 'password'), type: 'password', placeholder: 'password' }),
						_react2.default.createElement('br', null),
						_react2.default.createElement(
							'button',
							{ className: 'btn btn-info', onClick: this.submitUser.bind(this) },
							'Submit'
						)
					),
					_react2.default.createElement(
						'div',
						{ className: 'col-md-6' },
						_react2.default.createElement(
							'h4',
							{ className: 'topmargin-sm nobottommargin' },
							'Current Users'
						),
						_react2.default.createElement(
							'ol',
							{ style: { paddingLeft: 16 } },
							usersList.map(function (user, i) {
								return _react2.default.createElement(
									'li',
									{ key: user.id },
									user.username
								);
							})
						)
					)
				),
				_react2.default.createElement(
					'div',
					{ className: 'row' },
					_react2.default.createElement(
						'div',
						{ className: 'col-md-6' },
						_react2.default.createElement(
							'h3',
							{ className: 'topmargin-sm nobottommargin' },
							'Login User'
						),
						_react2.default.createElement('input', { className: 'form-control', onChange: this.updateUser.bind(this, 'username'), type: 'text', placeholder: 'username' }),
						_react2.default.createElement('br', null),
						_react2.default.createElement('input', { className: 'form-control', onChange: this.updateUser.bind(this, 'password'), type: 'password', placeholder: 'password' }),
						_react2.default.createElement('br', null),
						_react2.default.createElement(
							'button',
							{ className: 'btn btn-info', onClick: this.loginUser.bind(this) },
							'Log In'
						)
					),
					this.props.users.currentUser == null ? null : _react2.default.createElement(
						'div',
						{ className: 'col-md-6' },
						_react2.default.createElement(
							'h4',
							{ className: 'topmargin-sm' },
							'Currently Logged In As: ',
							this.props.users.currentUser.username
						),
						_react2.default.createElement(
							'button',
							{ className: 'btn btn-info' },
							'Log Out'
						)
					)
				)
			);
		}
	}]);

	return Users;
}(_react.Component);

var stateToProps = function stateToProps(state) {
	return {
		users: state.user
	};
};

var dispatchToProps = function dispatchToProps(dispatch) {
	return {
		fetchUsers: function fetchUsers(params) {
			return dispatch(_actions2.default.fetchUsers(params));
		},
		addUser: function addUser(params) {
			return dispatch(_actions2.default.addUser(params));
		},
		loginUser: function loginUser(credentials) {
			return dispatch(_actions2.default.loginUser(credentials));
		},
		currentUser: function currentUser() {
			return dispatch(_actions2.default.currentUser());
		}
	};
};

exports.default = (0, _reactRedux.connect)(stateToProps, dispatchToProps)(Users);

/***/ }),

/***/ 233:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _containers = __webpack_require__(110);

var _presentation = __webpack_require__(87);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /* * * * * * * * * * * * * * * * * * * * * * * * * * *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               	This is the Home component rendered in the index.js entry point
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               * * * * * * * * * * * * * * * * * * * * * * * * * * * *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               */

var Home = function (_Component) {
  _inherits(Home, _Component);

  function Home() {
    _classCallCheck(this, Home);

    var _this = _possibleConstructorReturn(this, (Home.__proto__ || Object.getPrototypeOf(Home)).call(this));

    _this.state = {};
    return _this;
  }

  _createClass(Home, [{
    key: 'render',
    value: function render() {

      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(_containers.Nav, null),
        _react2.default.createElement(
          'div',
          { className: 'main-container' },
          _react2.default.createElement(_containers.LandingPage, null),
          _react2.default.createElement(_containers.Results, null),
          _react2.default.createElement(_presentation.Footer, null)
        )
      );
    }
  }]);

  return Home;
}(_react.Component);

exports.default = Home;

/***/ }),

/***/ 236:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _constants = __webpack_require__(53);

var _constants2 = _interopRequireDefault(_constants);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* * * * * * * * * * * * * * * * * * * * * * * * * * *
	Listing reducer for state management of listing results pulled from Zillow API
* * * * * * * * * * * * * * * * * * * * * * * * * * * *
*/

var initialState = {
  all: []
};

exports.default = function () {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var action = arguments[1];

  var newState = Object.assign({}, state);
  var payload = action.data;

  switch (action.type) {

    case _constants2.default.ZILLOW_COMPS_RECEIVED:
      console.log('ZILLOW_COMPS_RECEIVED!');

      // Capture request/response objects
      newState['req'] = payload.body.data.request;
      newState['all'] = payload.body.data.response.properties;
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

/***/ }),

/***/ 237:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _constants = __webpack_require__(53);

var _constants2 = _interopRequireDefault(_constants);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* * * * * * * * * * * * * * * * * * * * * * * * * * *
	Listing reducer for state management of listing results pulled from Zillow API
* * * * * * * * * * * * * * * * * * * * * * * * * * * *
*/

var initialState = {
	all: [{ address: '22 Dale Street' }, { citystatezip: 'Windsor Locks, CT' }, { count: 3 }, { zpid: '58162520' }],
	latLng: {
		lat: 41.9334208,
		lng: -72.6571319
	}
};

exports.default = function () {
	var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
	var action = arguments[1];

	var newState = Object.assign({}, state);
	var payload = action.data;

	switch (action.type) {

		case _constants2.default.ZILLOW_LISTING_RECEIVED:
			console.log('ZILLOW_LISTING_RECEIVED!');

			// Capture request/response objects
			newState['req'] = payload.body.data.request;
			newState['all'] = payload.body.data.response.results.result;
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

		case _constants2.default.LAT_LONG_RECEIVED_FROM_SEARCH_BOX:
			// Capture address object input by user into search box
			newState['latLng'] = payload;
			// Console log response objects
			console.log('ADDRESS_INPUT_RECEIVED_FROM_USER_INPUT:  ', newState['latLng']);
			console.log('ADDRESS_INPUT_RECEIVED_FROM_USER_INPUT:  ', JSON.stringify(newState['latLng']));

			return newState;

		default:
			return state;
	}
};

/***/ }),

/***/ 238:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _constants = __webpack_require__(53);

var _constants2 = _interopRequireDefault(_constants);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* * * * * * * * * * * * * * * * * * * * * * * * * * *
	This is a sample reducer or user management. If you remove 
	and use your own reducers, remember to update the store 
	file (../stores/index.js) with your reducers.
* * * * * * * * * * * * * * * * * * * * * * * * * * * *
*/

var initialState = {
	all: null,
	currentUser: null // signed in user
};

exports.default = function () {
	var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
	var action = arguments[1];

	var newState = Object.assign({}, state);

	switch (action.type) {

		case _constants2.default.CURRENT_USER_RECEIVED:
			newState['currentUser'] = action.data;
			return newState;

		case _constants2.default.USERS_RECEIVED:
			newState['all'] = action.data;
			return newState;

		case _constants2.default.USER_CREATED:
			var array = newState.all ? Object.assign([], newState.all) : [];
			array.unshift(action.data);
			newState['all'] = array;
			return newState;

		default:
			return state;
	}
};

/***/ }),

/***/ 239:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.compsReducer = exports.listingReducer = exports.userReducer = undefined;

var _userReducer = __webpack_require__(238);

var _userReducer2 = _interopRequireDefault(_userReducer);

var _listingReducer = __webpack_require__(237);

var _listingReducer2 = _interopRequireDefault(_listingReducer);

var _compsReducer = __webpack_require__(236);

var _compsReducer2 = _interopRequireDefault(_compsReducer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.userReducer = _userReducer2.default;
exports.listingReducer = _listingReducer2.default;
exports.compsReducer = _compsReducer2.default; /* * * * * * * * * * * * * * * * * * * * * * * * * * *
                                               	Export your reducers here
                                               * * * * * * * * * * * * * * * * * * * * * * * * * * * *
                                               */

/***/ }),

/***/ 242:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _redux = __webpack_require__(78);

var _reduxThunk = __webpack_require__(240);

var _reduxThunk2 = _interopRequireDefault(_reduxThunk);

var _reducers = __webpack_require__(239);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var store;
exports.default = {

	configure: function configure(initialState) {
		// initialState can be null

		var reducers = (0, _redux.combineReducers)({ // insert reducers here
			user: _reducers.userReducer,
			listing: _reducers.listingReducer,
			comps: _reducers.compsReducer
		});

		if (initialState) {
			store = (0, _redux.createStore)(reducers, initialState, (0, _redux.applyMiddleware)(_reduxThunk2.default));

			return store;
		}

		store = (0, _redux.createStore)(reducers, (0, _redux.applyMiddleware)(_reduxThunk2.default));

		return store;
	},

	currentStore: function currentStore() {
		return store;
	}
};

/***/ }),

/***/ 251:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(9);

var _reactDom2 = _interopRequireDefault(_reactDom);

var _stores = __webpack_require__(242);

var _stores2 = _interopRequireDefault(_stores);

var _reactRedux = __webpack_require__(27);

var _Home = __webpack_require__(233);

var _Home2 = _interopRequireDefault(_Home);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* * * * * * * * * * * * * * * * * * * * * * * * * * *
	This is the entry point of the React app with Redux implemented
* * * * * * * * * * * * * * * * * * * * * * * * * * * *
*/

var app = _react2.default.createElement(
	_reactRedux.Provider,
	{ store: _stores2.default.configure(null) },
	_react2.default.createElement(_Home2.default, null)
);

_reactDom2.default.render(app, document.getElementById('root'));

/***/ }),

/***/ 47:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _constants = __webpack_require__(53);

var _constants2 = _interopRequireDefault(_constants);

var _utils = __webpack_require__(231);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* * * * * * * * * * * * * * * * * * * * * * * * * * *
	Application actions dispatched from Components for API calls and Redux, state management
* * * * * * * * * * * * * * * * * * * * * * * * * * * *
*/

exports.default = {

	fetchUsers: function fetchUsers(params) {
		return function (dispatch) {
			return dispatch(_utils.TurboClient.getRequest('user', params, _constants2.default.USERS_RECEIVED));
		};
	},

	addUser: function addUser(params) {
		return function (dispatch) {
			return dispatch(_utils.TurboClient.postRequest('user', params, _constants2.default.USER_CREATED));
		};
	},

	// Unlike addUser, register() also maintains a session for login state. After calling
	// TurboClient.createUser(), the new user is logged in as well:
	register: function register(params) {
		return function (dispatch) {
			return dispatch(_utils.TurboClient.createUser(params, _constants2.default.USER_CREATED));
		};
	},

	loginUser: function loginUser(credentials) {
		return function (dispatch) {
			return dispatch(_utils.TurboClient.login(credentials, _constants2.default.CURRENT_USER_RECEIVED));
		};
	},

	currentUser: function currentUser() {
		return function (dispatch) {
			return dispatch(_utils.TurboClient.currentUser(_constants2.default.CURRENT_USER_RECEIVED));
		};
	},

	getZillowListingResults: function getZillowListingResults(params) {
		return function (dispatch) {
			// console.log('getZillowResults from actions/index.js - url:  ' + console.log(url))
			// console.log('getZillowListingResults from actions/index.js - params:  ', params)
			return dispatch(_utils.SuperagentAsync.asyncGet('/homes', params, _constants2.default.ZILLOW_LISTING_RECEIVED));
		};
	},

	getZillowCompsResults: function getZillowCompsResults(params) {
		return function (dispatch) {
			console.log('getZillowCompsResults from actions/index.js - params:  ', params);
			return dispatch(_utils.SuperagentAsync.asyncGet('/comps', params, _constants2.default.ZILLOW_COMPS_RECEIVED));
		};
	},

	dispatchLatLngFromSearchBoxToStore: function dispatchLatLngFromSearchBoxToStore(latLngFromGeocodeApi) {
		var params = latLngFromGeocodeApi;
		console.log('dispatchLatLngFromSearchBoxToStore ', latLngFromGeocodeApi);
		console.log('dispatchLatLngFromSearchBoxToStore ', params);
		// return dispatch => {
		// 	return dispatch(SuperagentAsync.asyncGet('/homes/addressCall', params, constants.LAT_LONG_RECEIVED_FROM_SEARCH_BOX))
		// }
		// return dispatch => {
		// 	return dispatch(SuperagentAsync.asyncSend(params, constants.LAT_LONG_RECEIVED_FROM_SEARCH_BOX))
		// }
		return function (dispatch) {
			return dispatch({
				type: _constants2.default.LAT_LONG_RECEIVED_FROM_SEARCH_BOX,
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

/***/ }),

/***/ 53:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
/* * * * * * * * * * * * * * * * * * * * * * * * * * *
	Application constants
* * * * * * * * * * * * * * * * * * * * * * * * * * * *
*/

exports.default = {

	USERS_RECEIVED: 'USERS_RECEIVED',
	USER_CREATED: 'USER_CREATED',
	USER_LOGGED_IN: 'USER_LOGGED_IN',
	CURRENT_USER_RECEIVED: 'CURRENT_USER_RECEIVED',
	ZILLOW_LISTING_RECEIVED: 'ZILLOW_LISTING_RECEIVED',
	ADDRESS_RECEIVED_FROM_SEARCH_BOX: 'ADDRESS_RECEIVED_FROM_SEARCH_BOX',
	LAT_LONG_RECEIVED_FROM_SEARCH_BOX: 'LAT_LONG_RECEIVED_FROM_SEARCH_BOX',
	ZILLOW_COMPS_RECEIVED: 'ZILLOW_COMPS_RECEIVED'

};

/***/ }),

/***/ 87:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Listing = exports.Footer = undefined;

var _Footer = __webpack_require__(121);

var _Footer2 = _interopRequireDefault(_Footer);

var _Listing = __webpack_require__(120);

var _Listing2 = _interopRequireDefault(_Listing);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* * * * * * * * * * * * * * * * * * * * * * * * * * *
	Export presentation components here
* * * * * * * * * * * * * * * * * * * * * * * * * * * *
*/

exports.Footer = _Footer2.default;
exports.Listing = _Listing2.default;

/***/ })

/******/ });
//# sourceMappingURL=app.map