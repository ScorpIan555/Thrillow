"use strict";

var _interopRequire = function (obj) { return obj && obj.__esModule ? obj["default"] : obj; };

var React = _interopRequire(require("react"));

var ReactDOMServer = _interopRequire(require("react-dom/server"));

var ServerEntry = _interopRequire(require("./ServerEntry"));

module.exports = function (initialState, component) {
	var app = React.createElement(component);
	var provider = React.createElement(ServerEntry, { component: app, store: initialState });

	return {
		// https://reactjs.org/docs/react-dom-server.html
		// Render a React element to its initial HTML. React will return an HTML string. You can use this method to generate HTML on the server and send the markup down on the initial request for faster page loads and to allow search engines to crawl your pages for SEO purposes.
		react: ReactDOMServer.renderToString(provider),
		// retrieve initialState value and convert into JSON string
		initial: JSON.stringify(initialState.getState())
	};
};