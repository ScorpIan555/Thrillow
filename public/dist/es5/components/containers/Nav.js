"use strict";

var _interopRequire = function (obj) { return obj && obj.__esModule ? obj["default"] : obj; };

var _prototypeProperties = function (child, staticProps, instanceProps) { if (staticProps) Object.defineProperties(child, staticProps); if (instanceProps) Object.defineProperties(child.prototype, instanceProps); };

var _get = function get(object, property, receiver) { var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc && desc.writable) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _inherits = function (subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; };

var _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };

var _react = require("react");

var React = _interopRequire(_react);

var Component = _react.Component;
var connect = require("react-redux").connect;
var Modal = require("react-bootstrap").Modal;
var Dropzone = _interopRequire(require("react-dropzone"));

var actions = _interopRequire(require("../../actions"));

var Nav = (function (Component) {
    function Nav() {
        _classCallCheck(this, Nav);

        _get(Object.getPrototypeOf(Nav.prototype), "constructor", this).call(this);
        this.state = {
            showEditModal: false,
            showLoginModal: false,
            showSignUpModal: false
        };
    }

    _inherits(Nav, Component);

    _prototypeProperties(Nav, null, {
        componentDidMount: {
            value: function componentDidMount() {
                console.log("Nav component did mount!");
            },
            writable: true,
            configurable: true
        },
        render: {
            value: function render() {
                return React.createElement(
                    "div",
                    { className: "nav-container" },
                    React.createElement(
                        "div",
                        { className: "bg-light navbar-light", "data-sticky": "top" },
                        React.createElement(
                            "div",
                            { className: "container" },
                            React.createElement(
                                "nav",
                                { className: "navbar navbar-expand-lg" },
                                React.createElement(
                                    "a",
                                    { className: "navbar-brand", href: "/" },
                                    React.createElement("img", { alt: "Wingman", src: "dist/assets/img/logo-white.svg" })
                                ),
                                React.createElement(
                                    "button",
                                    { className: "navbar-toggler", type: "button", "data-toggle": "collapse", "data-target": "#navbarNav", "aria-controls": "navbarNav", "aria-expanded": "false", "aria-label": "Toggle navigation" },
                                    React.createElement("i", { className: "icon-menu h4" })
                                ),
                                React.createElement(
                                    "div",
                                    { className: "collapse navbar-collapse justify-content-between", id: "navbarNav" },
                                    React.createElement(
                                        "ul",
                                        { className: "navbar-nav" },
                                        React.createElement(
                                            "li",
                                            { className: "nav-item" },
                                            React.createElement(
                                                "a",
                                                { className: "nav-link" },
                                                "Buy"
                                            )
                                        ),
                                        React.createElement(
                                            "li",
                                            { className: "nav-item" },
                                            React.createElement(
                                                "a",
                                                { href: "index.html", className: "nav-link" },
                                                "Rent"
                                            )
                                        ),
                                        React.createElement(
                                            "li",
                                            { className: "nav-item" },
                                            React.createElement(
                                                "a",
                                                { href: "index.html", className: "nav-link" },
                                                "Sell"
                                            )
                                        ),
                                        React.createElement(
                                            "li",
                                            { className: "nav-item" },
                                            React.createElement(
                                                "a",
                                                { href: "index.html", className: "nav-link" },
                                                "Mortgages"
                                            )
                                        ),
                                        React.createElement(
                                            "li",
                                            { className: "nav-item" },
                                            React.createElement(
                                                "a",
                                                { href: "index.html", className: "nav-link" },
                                                "Agent Finder"
                                            )
                                        )
                                    ),
                                    React.createElement(
                                        "ul",
                                        { className: "navbar-nav" },
                                        React.createElement(
                                            "li",
                                            { className: "nav-item" },
                                            React.createElement(
                                                "a",
                                                { href: "#" },
                                                "Sign up"
                                            ),
                                            React.createElement(
                                                "span",
                                                null,
                                                " or "
                                            ),
                                            React.createElement(
                                                "a",
                                                { href: "#" },
                                                "Sign in"
                                            )
                                        )
                                    )
                                )
                            )
                        )
                    )
                );
            },
            writable: true,
            configurable: true
        }
    });

    return Nav;
})(Component);

var localStyle = {
    input: {
        border: "1px solid #ddd",
        marginBottom: 12
    },
    dropzone: {
        marginRight: 16
    },
    textarea: {
        border: "1px solid #ddd",
        height: 160
    },
    icon: {
        width: 32, borderRadius: 24, float: "right"
    },
    modal: {
        padding: 20
    }
};

var stateToProps = function (state) {
    return {};
};

var dispatchToProps = function (dispatch) {
    return {};
};

module.exports = connect(stateToProps, dispatchToProps)(Nav);