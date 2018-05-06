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
/******/ 	deferredModules.push([236,0]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ 102:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__(47);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (props) {

	return _react2.default.createElement(
		_reactRedux.Provider,
		{ store: props.store },
		props.component
	);
};

/***/ }),

/***/ 106:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _constants = __webpack_require__(107);

var _constants2 = _interopRequireDefault(_constants);

var _utils = __webpack_require__(217);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* * * * * * * * * * * * * * * * * * * * * * * * * * *
	Here are a few sample actions for User managment.
	Feel free to remove and replace with your own actions
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
	}

};

/***/ }),

/***/ 107:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
/* * * * * * * * * * * * * * * * * * * * * * * * * * *
	Here are a few sample constants for typical actions.
	You may want to extends these to the other data
	types for your project (e.g. BLOG_POST_CREATED, BLOG_POST_UPDATED, etc)
* * * * * * * * * * * * * * * * * * * * * * * * * * * *
*/

exports.default = {

	USERS_RECEIVED: 'USERS_RECEIVED',
	USER_CREATED: 'USER_CREATED',
	USER_LOGGED_IN: 'USER_LOGGED_IN',
	CURRENT_USER_RECEIVED: 'CURRENT_USER_RECEIVED'

};

/***/ }),

/***/ 191:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__(47);

var _reactBootstrap = __webpack_require__(114);

var _reactDropzone = __webpack_require__(113);

var _reactDropzone2 = _interopRequireDefault(_reactDropzone);

var _actions = __webpack_require__(106);

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
            showSignUpModal: false
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

/***/ 197:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _server = __webpack_require__(196);

var _server2 = _interopRequireDefault(_server);

var _ServerEntry = __webpack_require__(102);

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

/***/ 198:
/***/ (function(module) {

module.exports = {"name":"thrillow","version":"0.0.0","server":false,"private":true,"scripts":{"dev":"webpack --mode development -w","build":"npm run clean && NODE_ENV=production webpack -p && gulp prod","clean":"rm -rf ./public/dist","postinstall":"npm run build"},"dependencies":{"turbo360":"latest","vertex360":"latest","bluebird":"^3.5.1","debug":"2.6.9","dotenv":"^5.0.1","moment":"^2.20.1","nodemon":"^1.17.1","react":"^16.2.0","react-bootstrap":"^0.32.1","react-dom":"^16.2.0","react-dropzone":"^4.2.8","react-redux":"^5.0.7","react-time":"^4.3.0","redux":"^3.7.2","redux-thunk":"^2.2.0","superagent":"^3.8.2","accepts":"^1.3.5","array-flatten":"1.1.1","body-parser":"1.18.2","content-disposition":"0.5.2","content-type":"^1.0.4","cookie":"0.3.1","cookie-signature":"1.0.6","depd":"^1.1.2","encodeurl":"^1.0.2","escape-html":"^1.0.3","etag":"^1.8.1","finalhandler":"1.1.1","fresh":"0.5.2","merge-descriptors":"1.0.1","methods":"^1.1.2","on-finished":"^2.3.0","parseurl":"^1.3.2","path-to-regexp":"0.1.7","proxy-addr":"^2.0.3","qs":"6.5.1","range-parser":"^1.2.0","safe-buffer":"5.1.1","send":"0.16.2","serve-static":"1.13.2","setprototypeof":"1.1.0","statuses":"^1.4.0","type-is":"^1.6.16","utils-merge":"1.0.1","vary":"^1.1.2"},"devDependencies":{"babel-core":"^6.26.0","babel-loader":"^7.1.3","babel-preset-env":"^1.6.1","babel-preset-react":"^6.24.1","chai":"^4.1.2","chai-http":"^3.0.0","cross-env":"^5.1.4","gulp":"^3.9.1","gulp-6to5":"^3.0.0","gulp-autoprefixer":"^5.0.0","gulp-clean-css":"^3.9.2","gulp-concat":"^2.6.1","gulp-less":"^4.0.0","gulp-rename":"^1.2.2","gulp-sass":"^3.1.0","gulp-uglify":"^3.0.0","json-loader":"^0.5.7","mocha":"^5.0.1","mocha-jscs":"^5.0.1","mocha-jshint":"^2.3.1","rimraf":"^2.6.2","uglifyjs-webpack-plugin":"^1.2.2","webpack":"^4.1.1","webpack-cli":"^2.0.10"},"deploy":["."],"format":"vertex","app":""};

/***/ }),

/***/ 216:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _turbo = __webpack_require__(215);

var _turbo2 = _interopRequireDefault(_turbo);

var _package = __webpack_require__(198);

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

/***/ 217:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.renderComponents = exports.ServerEntry = exports.TurboClient = undefined;

var _TurboClient = __webpack_require__(216);

var _TurboClient2 = _interopRequireDefault(_TurboClient);

var _ServerEntry = __webpack_require__(102);

var _ServerEntry2 = _interopRequireDefault(_ServerEntry);

var _renderComponents = __webpack_require__(197);

var _renderComponents2 = _interopRequireDefault(_renderComponents);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.TurboClient = _TurboClient2.default;
exports.ServerEntry = _ServerEntry2.default;
exports.renderComponents = _renderComponents2.default;

/***/ }),

/***/ 218:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__(47);

var _actions = __webpack_require__(106);

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

/***/ 219:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.Nav = exports.Users = undefined;

var _Users = __webpack_require__(218);

var _Users2 = _interopRequireDefault(_Users);

var _Nav = __webpack_require__(191);

var _Nav2 = _interopRequireDefault(_Nav);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* * * * * * * * * * * * * * * * * * * * * * * * * * *
	Export container components here
* * * * * * * * * * * * * * * * * * * * * * * * * * * *
*/

exports.Users = _Users2.default;
exports.Nav = _Nav2.default;

/***/ }),

/***/ 220:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _containers = __webpack_require__(219);

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
          'Home Container'
        )
      );
    }
  }]);

  return Home;
}(_react.Component);

exports.default = Home;

/***/ }),

/***/ 223:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _constants = __webpack_require__(107);

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

/***/ 224:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.userReducer = undefined;

var _userReducer = __webpack_require__(223);

var _userReducer2 = _interopRequireDefault(_userReducer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.userReducer = _userReducer2.default; /* * * * * * * * * * * * * * * * * * * * * * * * * * *
                                             	Export your reducers here
                                             * * * * * * * * * * * * * * * * * * * * * * * * * * * *
                                             */

/***/ }),

/***/ 227:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _redux = __webpack_require__(76);

var _reduxThunk = __webpack_require__(225);

var _reduxThunk2 = _interopRequireDefault(_reduxThunk);

var _reducers = __webpack_require__(224);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var store;
exports.default = {

	configure: function configure(initialState) {
		// initialState can be null

		var reducers = (0, _redux.combineReducers)({ // insert reducers here
			user: _reducers.userReducer
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

/***/ 236:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(9);

var _reactDom2 = _interopRequireDefault(_reactDom);

var _stores = __webpack_require__(227);

var _stores2 = _interopRequireDefault(_stores);

var _reactRedux = __webpack_require__(47);

var _Home = __webpack_require__(220);

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

/***/ })

/******/ });
//# sourceMappingURL=app.map