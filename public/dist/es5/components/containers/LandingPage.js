"use strict";

var _interopRequire = function (obj) { return obj && obj.__esModule ? obj["default"] : obj; };

var _prototypeProperties = function (child, staticProps, instanceProps) { if (staticProps) Object.defineProperties(child, staticProps); if (instanceProps) Object.defineProperties(child.prototype, instanceProps); };

var _get = function get(object, property, receiver) { var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc && desc.writable) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _inherits = function (subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; };

var _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };

var _react = require("react");

var React = _interopRequire(_react);

var Component = _react.Component;
var actions = _interopRequire(require("../../actions"));

var connect = require("react-redux").connect;
var LocationSearchInput = require("../containers").LocationSearchInput;
var LandingPage = (function (Component) {
    function LandingPage() {
        _classCallCheck(this, LandingPage);

        _get(Object.getPrototypeOf(LandingPage.prototype), "constructor", this).call(this);
        this.state = {};
    }

    _inherits(LandingPage, Component);

    _prototypeProperties(LandingPage, null, {
        render: {
            value: function render() {
                return React.createElement(
                    "section",
                    { className: "bg-dark text-white space-xlg" },
                    React.createElement("img", { alt: "Image", src: "dist/assets/img/laith-abdulkareem-96120-unsplash.jpg", className: "bg-image opacity-40" }),
                    React.createElement(
                        "div",
                        { className: "container" },
                        React.createElement(
                            "div",
                            { className: "row text-center justify-content-center section-intro" },
                            React.createElement(
                                "div",
                                { className: "col-12 col-md-10 col-lg-8" },
                                React.createElement(
                                    "h1",
                                    { className: "display-3" },
                                    "Welcome to Thrillow"
                                ),
                                React.createElement(
                                    "span",
                                    { className: "lead" },
                                    "A Zillow Knockoff... And not even the good kind!"
                                )
                            )
                        ),
                        React.createElement(
                            "div",
                            { className: "row text-center " },
                            React.createElement(
                                "div",
                                { className: "col" },
                                React.createElement(
                                    "a",
                                    { href: "#", className: "btn btn-outline-secondary mb-1 text-white opacity-80" },
                                    "BUY"
                                ),
                                React.createElement(
                                    "a",
                                    { href: "#", className: "btn btn-outline-secondary mb-1 text-white" },
                                    "RENT"
                                ),
                                React.createElement(
                                    "a",
                                    { href: "#", className: "btn btn-outline-secondary mb-1 text-white" },
                                    "SELL"
                                ),
                                React.createElement(
                                    "a",
                                    { href: "#", className: "btn btn-outline-secondary mb-1 text-white" },
                                    "ZESTIMATE"
                                )
                            )
                        ),
                        React.createElement(
                            "div",
                            { className: "row justify-content-center" },
                            React.createElement(
                                "div",
                                { className: "col-12 col-md-10 col-lg-8" },
                                React.createElement(
                                    "form",
                                    { className: "card card-sm" },
                                    React.createElement(
                                        "div",
                                        { className: "card-body row no-gutters align-items-center" },
                                        React.createElement(
                                            "div",
                                            { className: "col-auto" },
                                            React.createElement("i", { className: "icon-magnifying-glass h4 text-body" })
                                        ),
                                        React.createElement(
                                            "div",
                                            { className: "col" },
                                            React.createElement(LocationSearchInput, { className: "form-control form-control-lg form-control-borderless", type: "search", placeholder: "Search topics or keywords" })
                                        ),
                                        React.createElement(
                                            "div",
                                            { className: "col-auto" },
                                            React.createElement(
                                                "button",
                                                { className: "btn btn-lg btn-success", type: "submit" },
                                                "Search"
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

    return LandingPage;
})(Component);

var stateToProps = function (state) {};

var dispatchToProps = function (dispatch) {
    return {};
};

module.exports = connect(stateToProps, dispatchToProps)(LandingPage);
// getZillowRequest: () => dispatch(actions.getZillowRequest())