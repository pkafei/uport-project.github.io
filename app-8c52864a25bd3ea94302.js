webpackJsonp([231608221292675],{

/***/ 1698:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	exports.apiRunner = apiRunner;
	exports.apiRunnerAsync = apiRunnerAsync;
	var plugins = [{
	  plugin: __webpack_require__(1985),
	  options: { "plugins": [] }
	}, {
	  plugin: __webpack_require__(1976),
	  options: { "plugins": [], "trackingId": "UA-82159716-1" }
	}, {
	  plugin: __webpack_require__(1977),
	  options: { "plugins": [], "color": "#5c50ca" }
	}, {
	  plugin: __webpack_require__(1975),
	  options: { "plugins": [] }
	}, {
	  plugin: __webpack_require__(1980),
	  options: { "plugins": [] }
	}, {
	  plugin: __webpack_require__(1979),
	  options: { "plugins": [] }
	}];
	// During bootstrap, we write requires at top of this file which looks
	// basically like:
	// var plugins = [
	//   {
	//     plugin: require("/path/to/plugin1/gatsby-browser.js"),
	//     options: { ... },
	//   },
	//   {
	//     plugin: require("/path/to/plugin2/gatsby-browser.js"),
	//     options: { ... },
	//   },
	// ]
	
	function apiRunner(api, args, defaultReturn) {
	  var results = plugins.map(function (plugin) {
	    if (plugin.plugin[api]) {
	      var result = plugin.plugin[api](args, plugin.options);
	      return result;
	    }
	  });
	
	  // Filter out undefined results.
	  results = results.filter(function (result) {
	    return typeof result !== 'undefined';
	  });
	
	  if (results.length > 0) {
	    return results;
	  } else if (defaultReturn) {
	    return [defaultReturn];
	  } else {
	    return [];
	  }
	}
	
	function apiRunnerAsync(api, args, defaultReturn) {
	  return plugins.reduce(function (previous, next) {
	    return next.plugin[api] ? previous.then(function () {
	      return next.plugin[api](args, next.options);
	    }) : previous;
	  }, Promise.resolve());
	}

/***/ }),

/***/ 1817:
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	
	var _exports$json;
	
	// prefer default export if available
	var preferDefault = function preferDefault(m) {
	  return m && m.default || m;
	};
	
	exports.components = {
	  "component---node-modules-gatsby-plugin-offline-app-shell-js": __webpack_require__(1935),
	  "component---src-templates-content-jsx": __webpack_require__(1940),
	  "component---src-templates-category-jsx": __webpack_require__(1939),
	  "component---src-pages-about-jsx": __webpack_require__(1937),
	  "component---src-pages-index-jsx": __webpack_require__(1938)
	};
	
	exports.json = (_exports$json = {
	  "layout-index.json": __webpack_require__(9),
	  "offline-plugin-app-shell-fallback.json": __webpack_require__(1959)
	}, _exports$json["layout-index.json"] = __webpack_require__(9), _exports$json["attestcredentials.json"] = __webpack_require__(1942), _exports$json["layout-index.json"] = __webpack_require__(9), _exports$json["gettingstarted.json"] = __webpack_require__(1952), _exports$json["layout-index.json"] = __webpack_require__(9), _exports$json["readme.json"] = __webpack_require__(1965), _exports$json["layout-index.json"] = __webpack_require__(9), _exports$json["requestcredentials.json"] = __webpack_require__(1966), _exports$json["layout-index.json"] = __webpack_require__(9), _exports$json["signtransactions.json"] = __webpack_require__(1969), _exports$json["layout-index.json"] = __webpack_require__(9), _exports$json["clients.json"] = __webpack_require__(1946), _exports$json["layout-index.json"] = __webpack_require__(9), _exports$json["overview.json"] = __webpack_require__(1960), _exports$json["layout-index.json"] = __webpack_require__(9), _exports$json["platform.json"] = __webpack_require__(1963), _exports$json["layout-index.json"] = __webpack_require__(9), _exports$json["protocol.json"] = __webpack_require__(1964), _exports$json["layout-index.json"] = __webpack_require__(9), _exports$json["uport-connect-docs.json"] = __webpack_require__(1972), _exports$json["layout-index.json"] = __webpack_require__(9), _exports$json["uport-js-docs.json"] = __webpack_require__(1973), _exports$json["layout-index.json"] = __webpack_require__(9), _exports$json["messages-index.json"] = __webpack_require__(1954), _exports$json["layout-index.json"] = __webpack_require__(9), _exports$json["messages-privatechain.json"] = __webpack_require__(1955), _exports$json["layout-index.json"] = __webpack_require__(9), _exports$json["messages-sharereq.json"] = __webpack_require__(1956), _exports$json["layout-index.json"] = __webpack_require__(9), _exports$json["messages-shareresp.json"] = __webpack_require__(1957), _exports$json["layout-index.json"] = __webpack_require__(9), _exports$json["messages-verification.json"] = __webpack_require__(1958), _exports$json["layout-index.json"] = __webpack_require__(9), _exports$json["rest-apis-fuel-server.json"] = __webpack_require__(1967), _exports$json["layout-index.json"] = __webpack_require__(9), _exports$json["rest-apis-relay-server.json"] = __webpack_require__(1968), _exports$json["layout-index.json"] = __webpack_require__(9), _exports$json["pki-identitydocument.json"] = __webpack_require__(1961), _exports$json["layout-index.json"] = __webpack_require__(9), _exports$json["pki-index.json"] = __webpack_require__(1962), _exports$json["layout-index.json"] = __webpack_require__(9), _exports$json["transports-index.json"] = __webpack_require__(1970), _exports$json["layout-index.json"] = __webpack_require__(9), _exports$json["transports-push.json"] = __webpack_require__(1971), _exports$json["layout-index.json"] = __webpack_require__(9), _exports$json["flows-index.json"] = __webpack_require__(1947), _exports$json["layout-index.json"] = __webpack_require__(9), _exports$json["flows-privatechain.json"] = __webpack_require__(1948), _exports$json["layout-index.json"] = __webpack_require__(9), _exports$json["flows-selectivedisclosure.json"] = __webpack_require__(1949), _exports$json["layout-index.json"] = __webpack_require__(9), _exports$json["flows-tx.json"] = __webpack_require__(1950), _exports$json["layout-index.json"] = __webpack_require__(9), _exports$json["flows-verification.json"] = __webpack_require__(1951), _exports$json["layout-index.json"] = __webpack_require__(9), _exports$json["categories-guides.json"] = __webpack_require__(1943), _exports$json["layout-index.json"] = __webpack_require__(9), _exports$json["categories-reference.json"] = __webpack_require__(1945), _exports$json["layout-index.json"] = __webpack_require__(9), _exports$json["categories-overview.json"] = __webpack_require__(1944), _exports$json["layout-index.json"] = __webpack_require__(9), _exports$json["about.json"] = __webpack_require__(1941), _exports$json["layout-index.json"] = __webpack_require__(9), _exports$json["index.json"] = __webpack_require__(1953), _exports$json);
	
	exports.layouts = {
	  "layout---index": __webpack_require__(1936)
	};

/***/ }),

/***/ 1818:
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	
	exports.__esModule = true;
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _propTypes = __webpack_require__(3);
	
	var _propTypes2 = _interopRequireDefault(_propTypes);
	
	var _loader = __webpack_require__(1748);
	
	var _loader2 = _interopRequireDefault(_loader);
	
	var _emitter = __webpack_require__(1677);
	
	var _emitter2 = _interopRequireDefault(_emitter);
	
	var _apiRunnerBrowser = __webpack_require__(1698);
	
	var _shallowCompare = __webpack_require__(2139);
	
	var _shallowCompare2 = _interopRequireDefault(_shallowCompare);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var DefaultLayout = function DefaultLayout(_ref) {
	  var children = _ref.children;
	  return _react2.default.createElement(
	    "div",
	    null,
	    children()
	  );
	};
	
	// Pass pathname in as prop.
	// component will try fetching resources. If they exist,
	// will just render, else will render null.
	
	var ComponentRenderer = function (_React$Component) {
	  _inherits(ComponentRenderer, _React$Component);
	
	  function ComponentRenderer(props) {
	    _classCallCheck(this, ComponentRenderer);
	
	    var _this = _possibleConstructorReturn(this, _React$Component.call(this));
	
	    var location = props.location;
	
	    // Set the pathname for 404 pages.
	    if (!_loader2.default.getPage(location.pathname)) {
	      location = _extends({}, location, {
	        pathname: "/404.html"
	      });
	    }
	
	    _this.state = {
	      location: location,
	      pageResources: _loader2.default.getResourcesForPathname(location.pathname)
	    };
	    return _this;
	  }
	
	  ComponentRenderer.prototype.componentWillReceiveProps = function componentWillReceiveProps(nextProps) {
	    var _this2 = this;
	
	    // During development, always pass a component's JSON through so graphql
	    // updates go through.
	    if (true) {
	      if (nextProps && nextProps.pageResources && nextProps.pageResources.json) {
	        this.setState({ pageResources: nextProps.pageResources });
	      }
	    }
	    if (this.state.location.pathname !== nextProps.location.pathname) {
	      var pageResources = _loader2.default.getResourcesForPathname(nextProps.location.pathname);
	      if (!pageResources) {
	        var location = nextProps.location;
	
	        // Set the pathname for 404 pages.
	        if (!_loader2.default.getPage(location.pathname)) {
	          location = _extends({}, location, {
	            pathname: "/404.html"
	          });
	        }
	
	        // Page resources won't be set in cases where the browser back button
	        // or forward button is pushed as we can't wait as normal for resources
	        // to load before changing the page.
	        _loader2.default.getResourcesForPathname(location.pathname, function (pageResources) {
	          _this2.setState({
	            location: location,
	            pageResources: pageResources
	          });
	        });
	      } else {
	        this.setState({
	          location: nextProps.location,
	          pageResources: pageResources
	        });
	      }
	    }
	  };
	
	  ComponentRenderer.prototype.componentDidMount = function componentDidMount() {
	    var _this3 = this;
	
	    // Listen to events so when our page gets updated, we can transition.
	    // This is only useful on delayed transitions as the page will get rendered
	    // without the necessary page resources and then re-render once those come in.
	    _emitter2.default.on("onPostLoadPageResources", function (e) {
	      if (_loader2.default.getPage(_this3.state.location.pathname) && e.page.path === _loader2.default.getPage(_this3.state.location.pathname).path) {
	        _this3.setState({ pageResources: e.pageResources });
	      }
	    });
	  };
	
	  ComponentRenderer.prototype.shouldComponentUpdate = function shouldComponentUpdate(nextProps, nextState) {
	    // 404
	    if (!nextState.pageResources) {
	      return true;
	    }
	    // Check if the component or json have changed.
	    if (!this.state.pageResources && nextState.pageResources) {
	      return true;
	    }
	    if (this.state.pageResources.component !== nextState.pageResources.component) {
	      return true;
	    }
	
	    if (this.state.pageResources.json !== nextState.pageResources.json) {
	      return true;
	    }
	
	    // Check if location has changed on a page using internal routing
	    // via matchPath configuration.
	    if (this.state.location.key !== nextState.location.key && nextState.pageResources.page && (nextState.pageResources.page.matchPath || nextState.pageResources.page.path)) {
	      return true;
	    }
	
	    return (0, _shallowCompare2.default)(this, nextProps, nextState);
	  };
	
	  ComponentRenderer.prototype.render = function render() {
	    var pluginResponses = (0, _apiRunnerBrowser.apiRunner)("replaceComponentRenderer", {
	      props: _extends({}, this.props, { pageResources: this.state.pageResources }),
	      loader: _loader.publicLoader
	    });
	    var replacementComponent = pluginResponses[0];
	    // If page.
	    if (this.props.page) {
	      if (this.state.pageResources) {
	        return replacementComponent || (0, _react.createElement)(this.state.pageResources.component, _extends({
	          key: this.props.location.pathname
	        }, this.props, this.state.pageResources.json));
	      } else {
	        return null;
	      }
	      // If layout.
	    } else if (this.props.layout) {
	      return replacementComponent || (0, _react.createElement)(this.state.pageResources && this.state.pageResources.layout ? this.state.pageResources.layout : DefaultLayout, _extends({
	        key: this.state.pageResources && this.state.pageResources.layout ? this.state.pageResources.layout : "DefaultLayout"
	      }, this.props));
	    } else {
	      return null;
	    }
	  };
	
	  return ComponentRenderer;
	}(_react2.default.Component);
	
	ComponentRenderer.propTypes = {
	  page: _propTypes2.default.bool,
	  layout: _propTypes2.default.bool,
	  location: _propTypes2.default.object
	};
	
	exports.default = ComponentRenderer;
	module.exports = exports["default"];

/***/ }),

/***/ 1677:
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	
	var _mitt = __webpack_require__(2031);
	
	var _mitt2 = _interopRequireDefault(_mitt);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var emitter = (0, _mitt2.default)();
	module.exports = emitter;

/***/ }),

/***/ 1819:
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	
	var _reactRouterDom = __webpack_require__(1696);
	
	var _stripPrefix = __webpack_require__(1749);
	
	var _stripPrefix2 = _interopRequireDefault(_stripPrefix);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	// TODO add tests especially for handling prefixed links.
	var pageCache = {};
	
	module.exports = function (pages) {
	  var pathPrefix = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "";
	  return function (rawPathname) {
	    var pathname = decodeURIComponent(rawPathname);
	
	    // Remove the pathPrefix from the pathname.
	    var trimmedPathname = (0, _stripPrefix2.default)(pathname, pathPrefix);
	
	    // Remove any hashfragment
	    if (trimmedPathname.split("#").length > 1) {
	      trimmedPathname = trimmedPathname.split("#").slice(0, -1).join("");
	    }
	
	    // Remove search query
	    if (trimmedPathname.split("?").length > 1) {
	      trimmedPathname = trimmedPathname.split("?").slice(0, -1).join("");
	    }
	
	    if (pageCache[trimmedPathname]) {
	      return pageCache[trimmedPathname];
	    }
	
	    var foundPage = void 0;
	    // Array.prototype.find is not supported in IE so we use this somewhat odd
	    // work around.
	    pages.some(function (page) {
	      if (page.matchPath) {
	        // Try both the path and matchPath
	        if ((0, _reactRouterDom.matchPath)(trimmedPathname, { path: page.path }) || (0, _reactRouterDom.matchPath)(trimmedPathname, {
	          path: page.matchPath
	        })) {
	          foundPage = page;
	          pageCache[trimmedPathname] = page;
	          return true;
	        }
	      } else {
	        if ((0, _reactRouterDom.matchPath)(trimmedPathname, {
	          path: page.path,
	          exact: true
	        })) {
	          foundPage = page;
	          pageCache[trimmedPathname] = page;
	          return true;
	        }
	
	        // Finally, try and match request with default document.
	        if ((0, _reactRouterDom.matchPath)(trimmedPathname, {
	          path: page.path + "index.html"
	        })) {
	          foundPage = page;
	          pageCache[trimmedPathname] = page;
	          return true;
	        }
	      }
	
	      return false;
	    });
	
	    return foundPage;
	  };
	};

/***/ }),

/***/ 1820:
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	
	var _createBrowserHistory = __webpack_require__(1725);
	
	var _createBrowserHistory2 = _interopRequireDefault(_createBrowserHistory);
	
	var _apiRunnerBrowser = __webpack_require__(1698);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var pluginResponses = (0, _apiRunnerBrowser.apiRunner)("replaceHistory");
	var replacementHistory = pluginResponses[0];
	var history = replacementHistory || (0, _createBrowserHistory2.default)();
	module.exports = history;

/***/ }),

/***/ 1941:
/***/ (function(module, exports, __webpack_require__) {

	__webpack_require__(
	      6
	    );
	    module.exports = function(cb) { return __webpack_require__.e/* nsure */(273950069227526, function(_, error) {
	        if (error) {
	          console.log('bundle loading error', error)
	          cb(true)
	        } else {
	          cb(null, function() { return __webpack_require__(1987) })
	        }
	      });
	     }
	    

/***/ }),

/***/ 1942:
/***/ (function(module, exports, __webpack_require__) {

	__webpack_require__(
	      6
	    );
	    module.exports = function(cb) { return __webpack_require__.e/* nsure */(246800441601102, function(_, error) {
	        if (error) {
	          console.log('bundle loading error', error)
	          cb(true)
	        } else {
	          cb(null, function() { return __webpack_require__(1988) })
	        }
	      });
	     }
	    

/***/ }),

/***/ 1943:
/***/ (function(module, exports, __webpack_require__) {

	__webpack_require__(
	      6
	    );
	    module.exports = function(cb) { return __webpack_require__.e/* nsure */(202352299308606, function(_, error) {
	        if (error) {
	          console.log('bundle loading error', error)
	          cb(true)
	        } else {
	          cb(null, function() { return __webpack_require__(1989) })
	        }
	      });
	     }
	    

/***/ }),

/***/ 1944:
/***/ (function(module, exports, __webpack_require__) {

	__webpack_require__(
	      6
	    );
	    module.exports = function(cb) { return __webpack_require__.e/* nsure */(170944719107013, function(_, error) {
	        if (error) {
	          console.log('bundle loading error', error)
	          cb(true)
	        } else {
	          cb(null, function() { return __webpack_require__(1990) })
	        }
	      });
	     }
	    

/***/ }),

/***/ 1945:
/***/ (function(module, exports, __webpack_require__) {

	__webpack_require__(
	      6
	    );
	    module.exports = function(cb) { return __webpack_require__.e/* nsure */(256493623014370, function(_, error) {
	        if (error) {
	          console.log('bundle loading error', error)
	          cb(true)
	        } else {
	          cb(null, function() { return __webpack_require__(1991) })
	        }
	      });
	     }
	    

/***/ }),

/***/ 1946:
/***/ (function(module, exports, __webpack_require__) {

	__webpack_require__(
	      6
	    );
	    module.exports = function(cb) { return __webpack_require__.e/* nsure */(80240100688149, function(_, error) {
	        if (error) {
	          console.log('bundle loading error', error)
	          cb(true)
	        } else {
	          cb(null, function() { return __webpack_require__(1992) })
	        }
	      });
	     }
	    

/***/ }),

/***/ 1947:
/***/ (function(module, exports, __webpack_require__) {

	__webpack_require__(
	      6
	    );
	    module.exports = function(cb) { return __webpack_require__.e/* nsure */(62904430750163, function(_, error) {
	        if (error) {
	          console.log('bundle loading error', error)
	          cb(true)
	        } else {
	          cb(null, function() { return __webpack_require__(1993) })
	        }
	      });
	     }
	    

/***/ }),

/***/ 1948:
/***/ (function(module, exports, __webpack_require__) {

	__webpack_require__(
	      6
	    );
	    module.exports = function(cb) { return __webpack_require__.e/* nsure */(30628851550408, function(_, error) {
	        if (error) {
	          console.log('bundle loading error', error)
	          cb(true)
	        } else {
	          cb(null, function() { return __webpack_require__(1994) })
	        }
	      });
	     }
	    

/***/ }),

/***/ 1949:
/***/ (function(module, exports, __webpack_require__) {

	__webpack_require__(
	      6
	    );
	    module.exports = function(cb) { return __webpack_require__.e/* nsure */(7684017376232, function(_, error) {
	        if (error) {
	          console.log('bundle loading error', error)
	          cb(true)
	        } else {
	          cb(null, function() { return __webpack_require__(1995) })
	        }
	      });
	     }
	    

/***/ }),

/***/ 1950:
/***/ (function(module, exports, __webpack_require__) {

	__webpack_require__(
	      6
	    );
	    module.exports = function(cb) { return __webpack_require__.e/* nsure */(152895332068772, function(_, error) {
	        if (error) {
	          console.log('bundle loading error', error)
	          cb(true)
	        } else {
	          cb(null, function() { return __webpack_require__(1996) })
	        }
	      });
	     }
	    

/***/ }),

/***/ 1951:
/***/ (function(module, exports, __webpack_require__) {

	__webpack_require__(
	      6
	    );
	    module.exports = function(cb) { return __webpack_require__.e/* nsure */(204089239007054, function(_, error) {
	        if (error) {
	          console.log('bundle loading error', error)
	          cb(true)
	        } else {
	          cb(null, function() { return __webpack_require__(1997) })
	        }
	      });
	     }
	    

/***/ }),

/***/ 1952:
/***/ (function(module, exports, __webpack_require__) {

	__webpack_require__(
	      6
	    );
	    module.exports = function(cb) { return __webpack_require__.e/* nsure */(270147642465682, function(_, error) {
	        if (error) {
	          console.log('bundle loading error', error)
	          cb(true)
	        } else {
	          cb(null, function() { return __webpack_require__(1998) })
	        }
	      });
	     }
	    

/***/ }),

/***/ 1953:
/***/ (function(module, exports, __webpack_require__) {

	__webpack_require__(
	      6
	    );
	    module.exports = function(cb) { return __webpack_require__.e/* nsure */(142629428675168, function(_, error) {
	        if (error) {
	          console.log('bundle loading error', error)
	          cb(true)
	        } else {
	          cb(null, function() { return __webpack_require__(1999) })
	        }
	      });
	     }
	    

/***/ }),

/***/ 9:
/***/ (function(module, exports, __webpack_require__) {

	__webpack_require__(
	      6
	    );
	    module.exports = function(cb) { return __webpack_require__.e/* nsure */(60335399758886, function(_, error) {
	        if (error) {
	          console.log('bundle loading error', error)
	          cb(true)
	        } else {
	          cb(null, function() { return __webpack_require__(1728) })
	        }
	      });
	     }
	    

/***/ }),

/***/ 1954:
/***/ (function(module, exports, __webpack_require__) {

	__webpack_require__(
	      6
	    );
	    module.exports = function(cb) { return __webpack_require__.e/* nsure */(177822788491773, function(_, error) {
	        if (error) {
	          console.log('bundle loading error', error)
	          cb(true)
	        } else {
	          cb(null, function() { return __webpack_require__(2000) })
	        }
	      });
	     }
	    

/***/ }),

/***/ 1955:
/***/ (function(module, exports, __webpack_require__) {

	__webpack_require__(
	      6
	    );
	    module.exports = function(cb) { return __webpack_require__.e/* nsure */(243640092835604, function(_, error) {
	        if (error) {
	          console.log('bundle loading error', error)
	          cb(true)
	        } else {
	          cb(null, function() { return __webpack_require__(2001) })
	        }
	      });
	     }
	    

/***/ }),

/***/ 1956:
/***/ (function(module, exports, __webpack_require__) {

	__webpack_require__(
	      6
	    );
	    module.exports = function(cb) { return __webpack_require__.e/* nsure */(38866269104888, function(_, error) {
	        if (error) {
	          console.log('bundle loading error', error)
	          cb(true)
	        } else {
	          cb(null, function() { return __webpack_require__(2002) })
	        }
	      });
	     }
	    

/***/ }),

/***/ 1957:
/***/ (function(module, exports, __webpack_require__) {

	__webpack_require__(
	      6
	    );
	    module.exports = function(cb) { return __webpack_require__.e/* nsure */(252393354029329, function(_, error) {
	        if (error) {
	          console.log('bundle loading error', error)
	          cb(true)
	        } else {
	          cb(null, function() { return __webpack_require__(2003) })
	        }
	      });
	     }
	    

/***/ }),

/***/ 1958:
/***/ (function(module, exports, __webpack_require__) {

	__webpack_require__(
	      6
	    );
	    module.exports = function(cb) { return __webpack_require__.e/* nsure */(12345387087794, function(_, error) {
	        if (error) {
	          console.log('bundle loading error', error)
	          cb(true)
	        } else {
	          cb(null, function() { return __webpack_require__(2004) })
	        }
	      });
	     }
	    

/***/ }),

/***/ 1959:
/***/ (function(module, exports, __webpack_require__) {

	__webpack_require__(
	      6
	    );
	    module.exports = function(cb) { return __webpack_require__.e/* nsure */(210333531512890, function(_, error) {
	        if (error) {
	          console.log('bundle loading error', error)
	          cb(true)
	        } else {
	          cb(null, function() { return __webpack_require__(2005) })
	        }
	      });
	     }
	    

/***/ }),

/***/ 1960:
/***/ (function(module, exports, __webpack_require__) {

	__webpack_require__(
	      6
	    );
	    module.exports = function(cb) { return __webpack_require__.e/* nsure */(186075399241898, function(_, error) {
	        if (error) {
	          console.log('bundle loading error', error)
	          cb(true)
	        } else {
	          cb(null, function() { return __webpack_require__(2006) })
	        }
	      });
	     }
	    

/***/ }),

/***/ 1961:
/***/ (function(module, exports, __webpack_require__) {

	__webpack_require__(
	      6
	    );
	    module.exports = function(cb) { return __webpack_require__.e/* nsure */(97596731410516, function(_, error) {
	        if (error) {
	          console.log('bundle loading error', error)
	          cb(true)
	        } else {
	          cb(null, function() { return __webpack_require__(2007) })
	        }
	      });
	     }
	    

/***/ }),

/***/ 1962:
/***/ (function(module, exports, __webpack_require__) {

	__webpack_require__(
	      6
	    );
	    module.exports = function(cb) { return __webpack_require__.e/* nsure */(238243837096664, function(_, error) {
	        if (error) {
	          console.log('bundle loading error', error)
	          cb(true)
	        } else {
	          cb(null, function() { return __webpack_require__(2008) })
	        }
	      });
	     }
	    

/***/ }),

/***/ 1963:
/***/ (function(module, exports, __webpack_require__) {

	__webpack_require__(
	      6
	    );
	    module.exports = function(cb) { return __webpack_require__.e/* nsure */(105941455707979, function(_, error) {
	        if (error) {
	          console.log('bundle loading error', error)
	          cb(true)
	        } else {
	          cb(null, function() { return __webpack_require__(2009) })
	        }
	      });
	     }
	    

/***/ }),

/***/ 1964:
/***/ (function(module, exports, __webpack_require__) {

	__webpack_require__(
	      6
	    );
	    module.exports = function(cb) { return __webpack_require__.e/* nsure */(144098425606694, function(_, error) {
	        if (error) {
	          console.log('bundle loading error', error)
	          cb(true)
	        } else {
	          cb(null, function() { return __webpack_require__(2010) })
	        }
	      });
	     }
	    

/***/ }),

/***/ 1965:
/***/ (function(module, exports, __webpack_require__) {

	__webpack_require__(
	      6
	    );
	    module.exports = function(cb) { return __webpack_require__.e/* nsure */(108843741544816, function(_, error) {
	        if (error) {
	          console.log('bundle loading error', error)
	          cb(true)
	        } else {
	          cb(null, function() { return __webpack_require__(2011) })
	        }
	      });
	     }
	    

/***/ }),

/***/ 1966:
/***/ (function(module, exports, __webpack_require__) {

	__webpack_require__(
	      6
	    );
	    module.exports = function(cb) { return __webpack_require__.e/* nsure */(181327578594543, function(_, error) {
	        if (error) {
	          console.log('bundle loading error', error)
	          cb(true)
	        } else {
	          cb(null, function() { return __webpack_require__(2012) })
	        }
	      });
	     }
	    

/***/ }),

/***/ 1967:
/***/ (function(module, exports, __webpack_require__) {

	__webpack_require__(
	      6
	    );
	    module.exports = function(cb) { return __webpack_require__.e/* nsure */(167726636431011, function(_, error) {
	        if (error) {
	          console.log('bundle loading error', error)
	          cb(true)
	        } else {
	          cb(null, function() { return __webpack_require__(2013) })
	        }
	      });
	     }
	    

/***/ }),

/***/ 1968:
/***/ (function(module, exports, __webpack_require__) {

	__webpack_require__(
	      6
	    );
	    module.exports = function(cb) { return __webpack_require__.e/* nsure */(66966604528536, function(_, error) {
	        if (error) {
	          console.log('bundle loading error', error)
	          cb(true)
	        } else {
	          cb(null, function() { return __webpack_require__(2014) })
	        }
	      });
	     }
	    

/***/ }),

/***/ 1969:
/***/ (function(module, exports, __webpack_require__) {

	__webpack_require__(
	      6
	    );
	    module.exports = function(cb) { return __webpack_require__.e/* nsure */(252886233907149, function(_, error) {
	        if (error) {
	          console.log('bundle loading error', error)
	          cb(true)
	        } else {
	          cb(null, function() { return __webpack_require__(2015) })
	        }
	      });
	     }
	    

/***/ }),

/***/ 1970:
/***/ (function(module, exports, __webpack_require__) {

	__webpack_require__(
	      6
	    );
	    module.exports = function(cb) { return __webpack_require__.e/* nsure */(65094799387117, function(_, error) {
	        if (error) {
	          console.log('bundle loading error', error)
	          cb(true)
	        } else {
	          cb(null, function() { return __webpack_require__(2016) })
	        }
	      });
	     }
	    

/***/ }),

/***/ 1971:
/***/ (function(module, exports, __webpack_require__) {

	__webpack_require__(
	      6
	    );
	    module.exports = function(cb) { return __webpack_require__.e/* nsure */(206233136822402, function(_, error) {
	        if (error) {
	          console.log('bundle loading error', error)
	          cb(true)
	        } else {
	          cb(null, function() { return __webpack_require__(2017) })
	        }
	      });
	     }
	    

/***/ }),

/***/ 1972:
/***/ (function(module, exports, __webpack_require__) {

	__webpack_require__(
	      6
	    );
	    module.exports = function(cb) { return __webpack_require__.e/* nsure */(223958208751350, function(_, error) {
	        if (error) {
	          console.log('bundle loading error', error)
	          cb(true)
	        } else {
	          cb(null, function() { return __webpack_require__(2018) })
	        }
	      });
	     }
	    

/***/ }),

/***/ 1973:
/***/ (function(module, exports, __webpack_require__) {

	__webpack_require__(
	      6
	    );
	    module.exports = function(cb) { return __webpack_require__.e/* nsure */(207399335127251, function(_, error) {
	        if (error) {
	          console.log('bundle loading error', error)
	          cb(true)
	        } else {
	          cb(null, function() { return __webpack_require__(2019) })
	        }
	      });
	     }
	    

/***/ }),

/***/ 1936:
/***/ (function(module, exports, __webpack_require__) {

	__webpack_require__(
	      6
	    );
	    module.exports = function(cb) { return __webpack_require__.e/* nsure */(79611799117203, function(_, error) {
	        if (error) {
	          console.log('bundle loading error', error)
	          cb(true)
	        } else {
	          cb(null, function() { return __webpack_require__(1821) })
	        }
	      });
	     }
	    

/***/ }),

/***/ 1748:
/***/ (function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {"use strict";
	
	exports.__esModule = true;
	exports.publicLoader = undefined;
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _findPage = __webpack_require__(1819);
	
	var _findPage2 = _interopRequireDefault(_findPage);
	
	var _emitter = __webpack_require__(1677);
	
	var _emitter2 = _interopRequireDefault(_emitter);
	
	var _stripPrefix = __webpack_require__(1749);
	
	var _stripPrefix2 = _interopRequireDefault(_stripPrefix);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var findPage = void 0;
	
	var syncRequires = {};
	var asyncRequires = {};
	var pathScriptsCache = {};
	var resourceStrCache = {};
	var resourceCache = {};
	var pages = [];
	// Note we're not actively using the path data atm. There
	// could be future optimizations however around trying to ensure
	// we load all resources for likely-to-be-visited paths.
	var pathArray = [];
	var pathCount = {};
	var pathPrefix = "";
	var resourcesArray = [];
	var resourcesCount = {};
	var preferDefault = function preferDefault(m) {
	  return m && m.default || m;
	};
	var prefetcher = void 0;
	var inInitialRender = true;
	var fetchHistory = [];
	var failedPaths = {};
	var failedResources = {};
	var MAX_HISTORY = 5;
	
	// Prefetcher logic
	if (false) {
	  prefetcher = require("./prefetcher")({
	    getNextQueuedResources: function getNextQueuedResources() {
	      return resourcesArray.slice(-1)[0];
	    },
	    createResourceDownload: function createResourceDownload(resourceName) {
	      fetchResource(resourceName, function () {
	        resourcesArray = resourcesArray.filter(function (r) {
	          return r !== resourceName;
	        });
	        prefetcher.onResourcedFinished(resourceName);
	      });
	    }
	  });
	  _emitter2.default.on("onPreLoadPageResources", function (e) {
	    prefetcher.onPreLoadPageResources(e);
	  });
	  _emitter2.default.on("onPostLoadPageResources", function (e) {
	    prefetcher.onPostLoadPageResources(e);
	  });
	}
	
	var sortResourcesByCount = function sortResourcesByCount(a, b) {
	  if (resourcesCount[a] > resourcesCount[b]) {
	    return 1;
	  } else if (resourcesCount[a] < resourcesCount[b]) {
	    return -1;
	  } else {
	    return 0;
	  }
	};
	
	var sortPagesByCount = function sortPagesByCount(a, b) {
	  if (pathCount[a] > pathCount[b]) {
	    return 1;
	  } else if (pathCount[a] < pathCount[b]) {
	    return -1;
	  } else {
	    return 0;
	  }
	};
	
	var fetchResource = function fetchResource(resourceName) {
	  var cb = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : function () {};
	
	  if (resourceStrCache[resourceName]) {
	    process.nextTick(function () {
	      cb(null, resourceStrCache[resourceName]);
	    });
	  } else {
	    // Find resource
	    var resourceFunction = void 0;
	    if (resourceName.slice(0, 12) === "component---") {
	      resourceFunction = asyncRequires.components[resourceName];
	    } else if (resourceName.slice(0, 9) === "layout---") {
	      resourceFunction = asyncRequires.layouts[resourceName];
	    } else {
	      resourceFunction = asyncRequires.json[resourceName];
	    }
	
	    // Download the resource
	    resourceFunction(function (err, executeChunk) {
	      resourceStrCache[resourceName] = executeChunk;
	      fetchHistory.push({
	        resource: resourceName,
	        succeeded: !err
	      });
	
	      if (!failedResources[resourceName]) {
	        failedResources[resourceName] = err;
	      }
	
	      fetchHistory = fetchHistory.slice(-MAX_HISTORY);
	      cb(err, executeChunk);
	    });
	  }
	};
	
	var getResourceModule = function getResourceModule(resourceName, cb) {
	  if (resourceCache[resourceName]) {
	    process.nextTick(function () {
	      cb(null, resourceCache[resourceName]);
	    });
	  } else if (failedResources[resourceName]) {
	    process.nextTick(function () {
	      cb(failedResources[resourceName]);
	    });
	  } else {
	    fetchResource(resourceName, function (err, executeChunk) {
	      if (err) {
	        cb(err);
	      } else {
	        var module = preferDefault(executeChunk());
	        resourceCache[resourceName] = module;
	        cb(err, module);
	      }
	    });
	  }
	};
	
	var appearsOnLine = function appearsOnLine() {
	  var isOnLine = navigator.onLine;
	  if (typeof isOnLine === "boolean") {
	    return isOnLine;
	  }
	
	  // If no navigator.onLine support assume onLine if any of last N fetches succeeded
	  var succeededFetch = fetchHistory.find(function (entry) {
	    return entry.succeeded;
	  });
	  return !!succeededFetch;
	};
	
	var handleResourceLoadError = function handleResourceLoadError(path, message) {
	  console.log(message);
	
	  if (!failedPaths[path]) {
	    failedPaths[path] = message;
	  }
	
	  if (appearsOnLine() && window.location.pathname.replace(/\/$/g, "") !== path.replace(/\/$/g, "")) {
	    window.location.pathname = path;
	  }
	};
	
	var mountOrder = 1;
	var queue = {
	  empty: function empty() {
	    pathArray = [];
	    pathCount = {};
	    resourcesCount = {};
	    resourcesArray = [];
	    pages = [];
	    pathPrefix = "";
	  },
	  addPagesArray: function addPagesArray(newPages) {
	    pages = newPages;
	    if (true) {
	      if (true) pathPrefix = ("/docs-site");
	    }
	    findPage = (0, _findPage2.default)(newPages, pathPrefix);
	  },
	  addDevRequires: function addDevRequires(devRequires) {
	    syncRequires = devRequires;
	  },
	  addProdRequires: function addProdRequires(prodRequires) {
	    asyncRequires = prodRequires;
	  },
	  dequeue: function dequeue() {
	    return pathArray.pop();
	  },
	  enqueue: function enqueue(rawPath) {
	    // Check page exists.
	    var path = (0, _stripPrefix2.default)(rawPath, pathPrefix);
	    if (!pages.some(function (p) {
	      return p.path === path;
	    })) {
	      return false;
	    }
	
	    var mountOrderBoost = 1 / mountOrder;
	    mountOrder += 1;
	    // console.log(
	    // `enqueue "${path}", mountOrder: "${mountOrder}, mountOrderBoost: ${mountOrderBoost}`
	    // )
	
	    // Add to path counts.
	    if (!pathCount[path]) {
	      pathCount[path] = 1;
	    } else {
	      pathCount[path] += 1;
	    }
	
	    // Add path to queue.
	    if (!queue.has(path)) {
	      pathArray.unshift(path);
	    }
	
	    // Sort pages by pathCount
	    pathArray.sort(sortPagesByCount);
	
	    // Add resources to queue.
	    var page = findPage(path);
	    if (page.jsonName) {
	      if (!resourcesCount[page.jsonName]) {
	        resourcesCount[page.jsonName] = 1 + mountOrderBoost;
	      } else {
	        resourcesCount[page.jsonName] += 1 + mountOrderBoost;
	      }
	
	      // Before adding, checking that the JSON resource isn't either
	      // already queued or been downloading.
	      if (resourcesArray.indexOf(page.jsonName) === -1 && !resourceStrCache[page.jsonName]) {
	        resourcesArray.unshift(page.jsonName);
	      }
	    }
	    if (page.componentChunkName) {
	      if (!resourcesCount[page.componentChunkName]) {
	        resourcesCount[page.componentChunkName] = 1 + mountOrderBoost;
	      } else {
	        resourcesCount[page.componentChunkName] += 1 + mountOrderBoost;
	      }
	
	      // Before adding, checking that the component resource isn't either
	      // already queued or been downloading.
	      if (resourcesArray.indexOf(page.componentChunkName) === -1 && !resourceStrCache[page.jsonName]) {
	        resourcesArray.unshift(page.componentChunkName);
	      }
	    }
	
	    // Sort resources by resourcesCount.
	    resourcesArray.sort(sortResourcesByCount);
	    if (false) {
	      prefetcher.onNewResourcesAdded();
	    }
	
	    return true;
	  },
	  getResources: function getResources() {
	    return {
	      resourcesArray: resourcesArray,
	      resourcesCount: resourcesCount
	    };
	  },
	  getPages: function getPages() {
	    return {
	      pathArray: pathArray,
	      pathCount: pathCount
	    };
	  },
	  getPage: function getPage(pathname) {
	    return findPage(pathname);
	  },
	  has: function has(path) {
	    return pathArray.some(function (p) {
	      return p === path;
	    });
	  },
	  getResourcesForPathname: function getResourcesForPathname(path) {
	    var cb = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : function () {};
	
	    if (inInitialRender && navigator && navigator.serviceWorker && navigator.serviceWorker.controller && navigator.serviceWorker.controller.state === "activated") {
	      // If we're loading from a service worker (it's already activated on
	      // this initial render) and we can't find a page, there's a good chance
	      // we're on a new page that this (now old) service worker doesn't know
	      // about so we'll unregister it and reload.
	      if (!findPage(path)) {
	        navigator.serviceWorker.getRegistrations().then(function (registrations) {
	          // We would probably need this to
	          // prevent unnecessary reloading of the page
	          // while unregistering of ServiceWorker is not happening
	          if (registrations.length) {
	            for (var _iterator = registrations, _isArray = Array.isArray(_iterator), _i = 0, _iterator = _isArray ? _iterator : _iterator[Symbol.iterator]();;) {
	              var _ref;
	
	              if (_isArray) {
	                if (_i >= _iterator.length) break;
	                _ref = _iterator[_i++];
	              } else {
	                _i = _iterator.next();
	                if (_i.done) break;
	                _ref = _i.value;
	              }
	
	              var registration = _ref;
	
	              registration.unregister();
	            }
	            window.location.reload();
	          }
	        });
	      }
	    }
	    inInitialRender = false;
	    // In development we know the code is loaded already
	    // so we just return with it immediately.
	    if (true) {
	      var page = findPage(path);
	      if (!page) return cb();
	      var pageResources = {
	        component: syncRequires.components[page.componentChunkName],
	        json: syncRequires.json[page.jsonName],
	        layout: syncRequires.layouts[page.layout],
	        page: page
	      };
	      cb(pageResources);
	      return pageResources;
	      // Production code path
	    } else {
	      if (failedPaths[path]) {
	        handleResourceLoadError(path, "Previously detected load failure for \"" + path + "\"");
	
	        return cb();
	      }
	
	      var _page = findPage(path);
	
	      if (!_page) {
	        handleResourceLoadError(path, "A page wasn't found for \"" + path + "\"");
	
	        return cb();
	      }
	
	      // Use the path from the page so the pathScriptsCache uses
	      // the normalized path.
	      path = _page.path;
	
	      // Check if it's in the cache already.
	      if (pathScriptsCache[path]) {
	        process.nextTick(function () {
	          cb(pathScriptsCache[path]);
	          _emitter2.default.emit("onPostLoadPageResources", {
	            page: _page,
	            pageResources: pathScriptsCache[path]
	          });
	        });
	        return pathScriptsCache[path];
	      }
	
	      _emitter2.default.emit("onPreLoadPageResources", { path: path });
	      // Nope, we need to load resource(s)
	      var component = void 0;
	      var json = void 0;
	      var layout = void 0;
	      // Load the component/json/layout and parallel and call this
	      // function when they're done loading. When both are loaded,
	      // we move on.
	      var done = function done() {
	        if (component && json && (!_page.layoutComponentChunkName || layout)) {
	          pathScriptsCache[path] = { component: component, json: json, layout: layout, page: _page };
	          var _pageResources = { component: component, json: json, layout: layout, page: _page };
	          cb(_pageResources);
	          _emitter2.default.emit("onPostLoadPageResources", {
	            page: _page,
	            pageResources: _pageResources
	          });
	        }
	      };
	      getResourceModule(_page.componentChunkName, function (err, c) {
	        if (err) {
	          handleResourceLoadError(_page.path, "Loading the component for " + _page.path + " failed");
	        }
	        component = c;
	        done();
	      });
	      getResourceModule(_page.jsonName, function (err, j) {
	        if (err) {
	          handleResourceLoadError(_page.path, "Loading the JSON for " + _page.path + " failed");
	        }
	        json = j;
	        done();
	      });
	
	      _page.layoutComponentChunkName && getResourceModule(_page.layout, function (err, l) {
	        if (err) {
	          handleResourceLoadError(_page.path, "Loading the Layout for " + _page.path + " failed");
	        }
	        layout = l;
	        done();
	      });
	
	      return undefined;
	    }
	  },
	  peek: function peek(path) {
	    return pathArray.slice(-1)[0];
	  },
	  length: function length() {
	    return pathArray.length;
	  },
	  indexOf: function indexOf(path) {
	    return pathArray.length - pathArray.indexOf(path) - 1;
	  }
	};
	
	var publicLoader = exports.publicLoader = {
	  getResourcesForPathname: queue.getResourcesForPathname
	};
	
	exports.default = queue;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(96)))

/***/ }),

/***/ 2020:
/***/ (function(module, exports) {

	module.exports = [{"componentChunkName":"component---node-modules-gatsby-plugin-offline-app-shell-js","layout":"layout---index","layoutComponentChunkName":"component---src-layouts-index-jsx","jsonName":"offline-plugin-app-shell-fallback.json","path":"/offline-plugin-app-shell-fallback/"},{"componentChunkName":"component---src-templates-content-jsx","layout":"layout---index","layoutComponentChunkName":"component---src-layouts-index-jsx","jsonName":"attestcredentials.json","path":"/attestcredentials"},{"componentChunkName":"component---src-templates-content-jsx","layout":"layout---index","layoutComponentChunkName":"component---src-layouts-index-jsx","jsonName":"gettingstarted.json","path":"/gettingstarted"},{"componentChunkName":"component---src-templates-content-jsx","layout":"layout---index","layoutComponentChunkName":"component---src-layouts-index-jsx","jsonName":"readme.json","path":"/readme"},{"componentChunkName":"component---src-templates-content-jsx","layout":"layout---index","layoutComponentChunkName":"component---src-layouts-index-jsx","jsonName":"requestcredentials.json","path":"/requestcredentials"},{"componentChunkName":"component---src-templates-content-jsx","layout":"layout---index","layoutComponentChunkName":"component---src-layouts-index-jsx","jsonName":"signtransactions.json","path":"/signtransactions"},{"componentChunkName":"component---src-templates-content-jsx","layout":"layout---index","layoutComponentChunkName":"component---src-layouts-index-jsx","jsonName":"clients.json","path":"/clients"},{"componentChunkName":"component---src-templates-content-jsx","layout":"layout---index","layoutComponentChunkName":"component---src-layouts-index-jsx","jsonName":"overview.json","path":"/overview"},{"componentChunkName":"component---src-templates-content-jsx","layout":"layout---index","layoutComponentChunkName":"component---src-layouts-index-jsx","jsonName":"platform.json","path":"/platform"},{"componentChunkName":"component---src-templates-content-jsx","layout":"layout---index","layoutComponentChunkName":"component---src-layouts-index-jsx","jsonName":"protocol.json","path":"/protocol"},{"componentChunkName":"component---src-templates-content-jsx","layout":"layout---index","layoutComponentChunkName":"component---src-layouts-index-jsx","jsonName":"uport-connect-docs.json","path":"/uport-connect-docs"},{"componentChunkName":"component---src-templates-content-jsx","layout":"layout---index","layoutComponentChunkName":"component---src-layouts-index-jsx","jsonName":"uport-js-docs.json","path":"/uport-js-docs"},{"componentChunkName":"component---src-templates-content-jsx","layout":"layout---index","layoutComponentChunkName":"component---src-layouts-index-jsx","jsonName":"messages-index.json","path":"/messages/index"},{"componentChunkName":"component---src-templates-content-jsx","layout":"layout---index","layoutComponentChunkName":"component---src-layouts-index-jsx","jsonName":"messages-privatechain.json","path":"/messages/privatechain"},{"componentChunkName":"component---src-templates-content-jsx","layout":"layout---index","layoutComponentChunkName":"component---src-layouts-index-jsx","jsonName":"messages-sharereq.json","path":"/messages/sharereq"},{"componentChunkName":"component---src-templates-content-jsx","layout":"layout---index","layoutComponentChunkName":"component---src-layouts-index-jsx","jsonName":"messages-shareresp.json","path":"/messages/shareresp"},{"componentChunkName":"component---src-templates-content-jsx","layout":"layout---index","layoutComponentChunkName":"component---src-layouts-index-jsx","jsonName":"messages-verification.json","path":"/messages/verification"},{"componentChunkName":"component---src-templates-content-jsx","layout":"layout---index","layoutComponentChunkName":"component---src-layouts-index-jsx","jsonName":"rest-apis-fuel-server.json","path":"/rest-apis/fuel-server"},{"componentChunkName":"component---src-templates-content-jsx","layout":"layout---index","layoutComponentChunkName":"component---src-layouts-index-jsx","jsonName":"rest-apis-relay-server.json","path":"/rest-apis/relay-server"},{"componentChunkName":"component---src-templates-content-jsx","layout":"layout---index","layoutComponentChunkName":"component---src-layouts-index-jsx","jsonName":"pki-identitydocument.json","path":"/pki/identitydocument"},{"componentChunkName":"component---src-templates-content-jsx","layout":"layout---index","layoutComponentChunkName":"component---src-layouts-index-jsx","jsonName":"pki-index.json","path":"/pki/index"},{"componentChunkName":"component---src-templates-content-jsx","layout":"layout---index","layoutComponentChunkName":"component---src-layouts-index-jsx","jsonName":"transports-index.json","path":"/transports/index"},{"componentChunkName":"component---src-templates-content-jsx","layout":"layout---index","layoutComponentChunkName":"component---src-layouts-index-jsx","jsonName":"transports-push.json","path":"/transports/push"},{"componentChunkName":"component---src-templates-content-jsx","layout":"layout---index","layoutComponentChunkName":"component---src-layouts-index-jsx","jsonName":"flows-index.json","path":"/flows/index"},{"componentChunkName":"component---src-templates-content-jsx","layout":"layout---index","layoutComponentChunkName":"component---src-layouts-index-jsx","jsonName":"flows-privatechain.json","path":"/flows/privatechain"},{"componentChunkName":"component---src-templates-content-jsx","layout":"layout---index","layoutComponentChunkName":"component---src-layouts-index-jsx","jsonName":"flows-selectivedisclosure.json","path":"/flows/selectivedisclosure"},{"componentChunkName":"component---src-templates-content-jsx","layout":"layout---index","layoutComponentChunkName":"component---src-layouts-index-jsx","jsonName":"flows-tx.json","path":"/flows/tx"},{"componentChunkName":"component---src-templates-content-jsx","layout":"layout---index","layoutComponentChunkName":"component---src-layouts-index-jsx","jsonName":"flows-verification.json","path":"/flows/verification"},{"componentChunkName":"component---src-templates-category-jsx","layout":"layout---index","layoutComponentChunkName":"component---src-layouts-index-jsx","jsonName":"categories-guides.json","path":"/categories/guides/"},{"componentChunkName":"component---src-templates-category-jsx","layout":"layout---index","layoutComponentChunkName":"component---src-layouts-index-jsx","jsonName":"categories-reference.json","path":"/categories/reference/"},{"componentChunkName":"component---src-templates-category-jsx","layout":"layout---index","layoutComponentChunkName":"component---src-layouts-index-jsx","jsonName":"categories-overview.json","path":"/categories/overview/"},{"componentChunkName":"component---src-pages-about-jsx","layout":"layout---index","layoutComponentChunkName":"component---src-layouts-index-jsx","jsonName":"about.json","path":"/about/"},{"componentChunkName":"component---src-pages-index-jsx","layout":"layout---index","layoutComponentChunkName":"component---src-layouts-index-jsx","jsonName":"index.json","path":"/"}]

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _apiRunnerBrowser = __webpack_require__(1698);
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactDom = __webpack_require__(1785);
	
	var _reactDom2 = _interopRequireDefault(_reactDom);
	
	var _reactRouterDom = __webpack_require__(1696);
	
	var _gatsbyReactRouterScroll = __webpack_require__(1984);
	
	var _domready = __webpack_require__(1918);
	
	var _domready2 = _interopRequireDefault(_domready);
	
	var _history = __webpack_require__(1727);
	
	var _history2 = __webpack_require__(1820);
	
	var _history3 = _interopRequireDefault(_history2);
	
	var _emitter = __webpack_require__(1677);
	
	var _emitter2 = _interopRequireDefault(_emitter);
	
	var _pages = __webpack_require__(2020);
	
	var _pages2 = _interopRequireDefault(_pages);
	
	var _redirects = __webpack_require__(2021);
	
	var _redirects2 = _interopRequireDefault(_redirects);
	
	var _componentRenderer = __webpack_require__(1818);
	
	var _componentRenderer2 = _interopRequireDefault(_componentRenderer);
	
	var _asyncRequires = __webpack_require__(1817);
	
	var _asyncRequires2 = _interopRequireDefault(_asyncRequires);
	
	var _loader = __webpack_require__(1748);
	
	var _loader2 = _interopRequireDefault(_loader);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	if (true) {
	  __webpack_require__(1841);
	}
	
	window.___history = _history3.default;
	
	window.___emitter = _emitter2.default;
	
	_loader2.default.addPagesArray(_pages2.default);
	_loader2.default.addProdRequires(_asyncRequires2.default);
	window.asyncRequires = _asyncRequires2.default;
	window.___loader = _loader2.default;
	window.matchPath = _reactRouterDom.matchPath;
	
	// Convert to a map for faster lookup in maybeRedirect()
	var redirectMap = _redirects2.default.reduce(function (map, redirect) {
	  map[redirect.fromPath] = redirect;
	  return map;
	}, {});
	
	var maybeRedirect = function maybeRedirect(pathname) {
	  var redirect = redirectMap[pathname];
	
	  if (redirect != null) {
	    _history3.default.replace(redirect.toPath);
	    return true;
	  } else {
	    return false;
	  }
	};
	
	// Check for initial page-load redirect
	maybeRedirect(window.location.pathname);
	
	// Let the site/plugins run code very early.
	(0, _apiRunnerBrowser.apiRunnerAsync)("onClientEntry").then(function () {
	  // Let plugins register a service worker. The plugin just needs
	  // to return true.
	  if ((0, _apiRunnerBrowser.apiRunner)("registerServiceWorker").length > 0) {
	    __webpack_require__(1822);
	  }
	
	  var navigateTo = function navigateTo(to) {
	    var location = (0, _history.createLocation)(to, null, null, _history3.default.location);
	    var pathname = location.pathname;
	
	    var redirect = redirectMap[pathname];
	
	    // If we're redirecting, just replace the passed in pathname
	    // to the one we want to redirect to.
	    if (redirect) {
	      pathname = redirect.toPath;
	    }
	    var wl = window.location;
	
	    // If we're already at this location, do nothing.
	    if (wl.pathname === location.pathname && wl.search === location.search && wl.hash === location.hash) {
	      return;
	    }
	
	    // Listen to loading events. If page resources load before
	    // a second, navigate immediately.
	    function eventHandler(e) {
	      if (e.page.path === _loader2.default.getPage(pathname).path) {
	        _emitter2.default.off("onPostLoadPageResources", eventHandler);
	        clearTimeout(timeoutId);
	        window.___history.push(location);
	      }
	    }
	
	    // Start a timer to wait for a second before transitioning and showing a
	    // loader in case resources aren't around yet.
	    var timeoutId = setTimeout(function () {
	      _emitter2.default.off("onPostLoadPageResources", eventHandler);
	      _emitter2.default.emit("onDelayedLoadPageResources", { pathname: pathname });
	      window.___history.push(location);
	    }, 1000);
	
	    if (_loader2.default.getResourcesForPathname(pathname)) {
	      // The resources are already loaded so off we go.
	      clearTimeout(timeoutId);
	      window.___history.push(location);
	    } else {
	      // They're not loaded yet so let's add a listener for when
	      // they finish loading.
	      _emitter2.default.on("onPostLoadPageResources", eventHandler);
	    }
	  };
	
	  // window.___loadScriptsForPath = loadScriptsForPath
	  window.___navigateTo = navigateTo;
	
	  // Call onRouteUpdate on the initial page load.
	  (0, _apiRunnerBrowser.apiRunner)("onRouteUpdate", {
	    location: _history3.default.location,
	    action: _history3.default.action
	  });
	
	  var initialAttachDone = false;
	  function attachToHistory(history) {
	    if (!window.___history || initialAttachDone === false) {
	      window.___history = history;
	      initialAttachDone = true;
	
	      history.listen(function (location, action) {
	        if (!maybeRedirect(location.pathname)) {
	          // Make sure React has had a chance to flush to DOM first.
	          setTimeout(function () {
	            (0, _apiRunnerBrowser.apiRunner)("onRouteUpdate", { location: location, action: action });
	          }, 0);
	        }
	      });
	    }
	  }
	
	  function shouldUpdateScroll(prevRouterProps, _ref) {
	    var pathname = _ref.location.pathname;
	
	    var results = (0, _apiRunnerBrowser.apiRunner)("shouldUpdateScroll", {
	      prevRouterProps: prevRouterProps,
	      pathname: pathname
	    });
	    if (results.length > 0) {
	      return results[0];
	    }
	
	    if (prevRouterProps) {
	      var oldPathname = prevRouterProps.location.pathname;
	
	      if (oldPathname === pathname) {
	        return false;
	      }
	    }
	    return true;
	  }
	
	  var AltRouter = (0, _apiRunnerBrowser.apiRunner)("replaceRouterComponent", { history: _history3.default })[0];
	  var DefaultRouter = function DefaultRouter(_ref2) {
	    var children = _ref2.children;
	    return _react2.default.createElement(
	      _reactRouterDom.Router,
	      { history: _history3.default },
	      children
	    );
	  };
	
	  var ComponentRendererWithRouter = (0, _reactRouterDom.withRouter)(_componentRenderer2.default);
	
	  _loader2.default.getResourcesForPathname(window.location.pathname, function () {
	    var Root = function Root() {
	      return (0, _react.createElement)(AltRouter ? AltRouter : DefaultRouter, null, (0, _react.createElement)(_gatsbyReactRouterScroll.ScrollContext, { shouldUpdateScroll: shouldUpdateScroll }, (0, _react.createElement)(ComponentRendererWithRouter, {
	        layout: true,
	        children: function children(layoutProps) {
	          return (0, _react.createElement)(_reactRouterDom.Route, {
	            render: function render(routeProps) {
	              attachToHistory(routeProps.history);
	              var props = layoutProps ? layoutProps : routeProps;
	
	              if (_loader2.default.getPage(props.location.pathname)) {
	                return (0, _react.createElement)(_componentRenderer2.default, _extends({
	                  page: true
	                }, props));
	              } else {
	                return (0, _react.createElement)(_componentRenderer2.default, {
	                  page: true,
	                  location: { pathname: "/404.html" }
	                });
	              }
	            }
	          });
	        }
	      })));
	    };
	
	    var NewRoot = (0, _apiRunnerBrowser.apiRunner)("wrapRootComponent", { Root: Root }, Root)[0];
	    (0, _domready2.default)(function () {
	      return _reactDom2.default.render(_react2.default.createElement(NewRoot, null), typeof window !== "undefined" ? document.getElementById("___gatsby") : void 0, function () {
	        (0, _apiRunnerBrowser.apiRunner)("onInitialClientRender");
	      });
	    });
	  });
	});

/***/ }),

/***/ 2021:
/***/ (function(module, exports) {

	module.exports = []

/***/ }),

/***/ 1822:
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	
	var _emitter = __webpack_require__(1677);
	
	var _emitter2 = _interopRequireDefault(_emitter);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var pathPrefix = "/";
	if (true) {
	  pathPrefix = ("/docs-site") + "/";
	}
	
	if ("serviceWorker" in navigator) {
	  navigator.serviceWorker.register(pathPrefix + "sw.js").then(function (reg) {
	    reg.addEventListener("updatefound", function () {
	      // The updatefound event implies that reg.installing is set; see
	      // https://w3c.github.io/ServiceWorker/#service-worker-registration-updatefound-event
	      var installingWorker = reg.installing;
	      console.log("installingWorker", installingWorker);
	      installingWorker.addEventListener("statechange", function () {
	        switch (installingWorker.state) {
	          case "installed":
	            if (navigator.serviceWorker.controller) {
	              // At this point, the old content will have been purged and the fresh content will
	              // have been added to the cache.
	              // We reload immediately so the user sees the new content.
	              // This could/should be made configurable in the future.
	              window.location.reload();
	            } else {
	              // At this point, everything has been precached.
	              // It's the perfect time to display a "Content is cached for offline use." message.
	              console.log("Content is now available offline!");
	              _emitter2.default.emit("sw:installed");
	            }
	            break;
	
	          case "redundant":
	            console.error("The installing service worker became redundant.");
	            break;
	        }
	      });
	    });
	  }).catch(function (e) {
	    console.error("Error during service worker registration:", e);
	  });
	}

/***/ }),

/***/ 1749:
/***/ (function(module, exports) {

	"use strict";
	
	exports.__esModule = true;
	
	/**
	 * Remove a prefix from a string. Return the input string if the given prefix
	 * isn't found.
	 */
	
	exports.default = function (str) {
	  var prefix = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "";
	
	  if (str.substr(0, prefix.length) === prefix) return str.slice(prefix.length);
	  return str;
	};
	
	module.exports = exports["default"];

/***/ }),

/***/ 1918:
/***/ (function(module, exports, __webpack_require__) {

	/*!
	  * domready (c) Dustin Diaz 2014 - License MIT
	  */
	!function (name, definition) {
	
	  if (true) module.exports = definition()
	  else if (typeof define == 'function' && typeof define.amd == 'object') define(definition)
	  else this[name] = definition()
	
	}('domready', function () {
	
	  var fns = [], listener
	    , doc = document
	    , hack = doc.documentElement.doScroll
	    , domContentLoaded = 'DOMContentLoaded'
	    , loaded = (hack ? /^loaded|^c/ : /^loaded|^i|^c/).test(doc.readyState)
	
	
	  if (!loaded)
	  doc.addEventListener(domContentLoaded, listener = function () {
	    doc.removeEventListener(domContentLoaded, listener)
	    loaded = 1
	    while (listener = fns.shift()) listener()
	  })
	
	  return function (fn) {
	    loaded ? setTimeout(fn, 0) : fns.push(fn)
	  }
	
	});


/***/ }),

/***/ 6:
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	
	/* global document: false, __webpack_require__: false */
	patch();
	
	function patch() {
	  var head = document.querySelector("head");
	  var ensure = __webpack_require__.e;
	  var chunks = __webpack_require__.s;
	  var failures;
	
	  __webpack_require__.e = function (chunkId, callback) {
	    var loaded = false;
	    var immediate = true;
	
	    var handler = function handler(error) {
	      if (!callback) return;
	
	      callback(__webpack_require__, error);
	      callback = null;
	    };
	
	    if (!chunks && failures && failures[chunkId]) {
	      handler(true);
	      return;
	    }
	
	    ensure(chunkId, function () {
	      if (loaded) return;
	      loaded = true;
	
	      if (immediate) {
	        // webpack fires callback immediately if chunk was already loaded
	        // IE also fires callback immediately if script was already
	        // in a cache (AppCache counts too)
	        setTimeout(function () {
	          handler();
	        });
	      } else {
	        handler();
	      }
	    });
	
	    // This is |true| if chunk is already loaded and does not need onError call.
	    // This happens because in such case ensure() is performed in sync way
	    if (loaded) {
	      return;
	    }
	
	    immediate = false;
	
	    onError(function () {
	      if (loaded) return;
	      loaded = true;
	
	      if (chunks) {
	        chunks[chunkId] = void 0;
	      } else {
	        failures || (failures = {});
	        failures[chunkId] = true;
	      }
	
	      handler(true);
	    });
	  };
	
	  function onError(callback) {
	    var script = head.lastChild;
	
	    if (script.tagName !== "SCRIPT") {
	      if (typeof console !== "undefined" && console.warn) {
	        console.warn("Script is not a script", script);
	      }
	
	      return;
	    }
	
	    script.onload = script.onerror = function () {
	      script.onload = script.onerror = null;
	      setTimeout(callback, 0);
	    };
	  }
	}

/***/ }),

/***/ 1974:
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	
	var _gatsbyLink = __webpack_require__(36);
	
	module.exports = function (root, cb) {
	  root.addEventListener("click", function (ev) {
	    if (ev.button !== 0 || ev.altKey || ev.ctrlKey || ev.metaKey || ev.shiftKey || ev.defaultPrevented) {
	      return true;
	    }
	
	    var anchor = null;
	    for (var n = ev.target; n.parentNode; n = n.parentNode) {
	      if (n.nodeName === "A") {
	        anchor = n;
	        break;
	      }
	    }
	    if (!anchor) return true;
	
	    // Don't catch links where a target (other than self) is set
	    // e.g. _blank.
	    if (anchor.target && anchor.target.toLowerCase() !== "_self") return true;
	
	    // Don't catch links pointed to the same page but with a hash.
	    if (anchor.pathname === window.location.pathname && anchor.hash !== "") {
	      return true;
	    }
	
	    // Dynamically created anchor links (href="#my-anchor") do not always have pathname on IE
	    if (anchor.pathname === "") {
	      return true;
	    }
	
	    // Don't catch links pointed at what look like file extensions (other than
	    // .htm/html extensions).
	    if (anchor.pathname.search(/^.*\.((?!htm)[a-z0-9]{1,5})$/i) !== -1) {
	      return true;
	    }
	
	    // IE clears the host value if the anchor href changed after creation, e.g.
	    // in React. Creating a new anchor element to ensure host value is present
	    var a1 = document.createElement("a");
	    a1.href = anchor.href;
	
	    // In IE, the default port is included in the anchor host but excluded from
	    // the location host.  This affects the ability to directly compare
	    // location host to anchor host.  For example: http://example.com would
	    // have a location.host of 'example.com' and an anchor.host of
	    // 'example.com:80' Creating anchor from the location.href to normalize the
	    // host value.
	    var a2 = document.createElement("a");
	    a2.href = window.location.href;
	
	    if (a1.host !== a2.host) return true;
	
	    // For when pathPrefix is used in an app and there happens to be a link
	    // pointing to the same domain but outside of the app's pathPrefix. For
	    // example, a Gatsby app lives at https://example.com/myapp/, with the
	    // pathPrefix set to `/myapp`. When adding an absolute link to the same
	    // domain but outside of the /myapp path, for example, <a
	    // href="https://example.com/not-my-app"> the plugin won't catch it and
	    // will navigate to an external link instead of doing a pushState resulting
	    // in `https://example.com/myapp/https://example.com/not-my-app`
	    var re = new RegExp("^" + a2.host + (0, _gatsbyLink.withPrefix)("/"));
	    if (!re.test("" + a1.host + a1.pathname)) return true;
	
	    // TODO: add a check for absolute internal links in a callback or here,
	    // or always pass only `${a1.pathname}${a1.hash}`
	    // to avoid `https://example.com/myapp/https://example.com/myapp/here` navigation
	
	    ev.preventDefault();
	
	    cb(anchor.getAttribute("href"));
	    return false;
	  });
	};

/***/ }),

/***/ 1975:
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	
	var _gatsbyLink = __webpack_require__(36);
	
	var _catchLinks = __webpack_require__(1974);
	
	var _catchLinks2 = _interopRequireDefault(_catchLinks);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.onClientEntry = function () {
	  (0, _catchLinks2.default)(window, function (href) {
	    (0, _gatsbyLink.navigateTo)(href);
	  });
	};

/***/ }),

/***/ 1976:
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	
	exports.onRouteUpdate = function (_ref) {
	  var location = _ref.location;
	
	  // Don't track while developing.
	  if (false) {
	    window.ga("set", "page", (location || {}).pathname);
	    window.ga("send", "pageview");
	  }
	};

/***/ }),

/***/ 1977:
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	
	var _extends2 = __webpack_require__(1750);
	
	var _extends3 = _interopRequireDefault(_extends2);
	
	var _nprogress = __webpack_require__(2032);
	
	var _nprogress2 = _interopRequireDefault(_nprogress);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var defaultOptions = { color: "#29d" };
	
	exports.onClientEntry = function (a) {
	  var pluginOptions = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
	
	  // Merge default options with user defined options in `gatsby-config.js`
	  var options = (0, _extends3.default)({}, defaultOptions, pluginOptions);
	
	  window.___emitter.on("onDelayedLoadPageResources", function () {
	    _nprogress2.default.configure(options);
	    _nprogress2.default.start();
	  });
	  window.___emitter.on("onPostLoadPageResources", function () {
	    _nprogress2.default.done();
	  });
	
	  // Inject styles.
	  var styles = "\n    #nprogress {\n     pointer-events: none;\n    }\n    #nprogress .bar {\n      background: " + options.color + ";\n      position: fixed;\n      z-index: 1031;\n      top: 0;\n      left: 0;\n      width: 100%;\n      height: 2px;\n    }\n    #nprogress .peg {\n      display: block;\n      position: absolute;\n      right: 0px;\n      width: 100px;\n      height: 100%;\n      box-shadow: 0 0 10px " + options.color + ", 0 0 5px " + options.color + ";\n      opacity: 1.0;\n      -webkit-transform: rotate(3deg) translate(0px, -4px);\n      -ms-transform: rotate(3deg) translate(0px, -4px);\n      transform: rotate(3deg) translate(0px, -4px);\n    }\n    #nprogress .spinner {\n      display: block;\n      position: fixed;\n      z-index: 1031;\n      top: 15px;\n      right: 15px;\n    }\n    #nprogress .spinner-icon {\n      width: 18px;\n      height: 18px;\n      box-sizing: border-box;\n      border: solid 2px transparent;\n      border-top-color: " + options.color + ";\n      border-left-color: " + options.color + ";\n      border-radius: 50%;\n      -webkit-animation: nprogress-spinner 400ms linear infinite;\n      animation: nprogress-spinner 400ms linear infinite;\n    }\n    .nprogress-custom-parent {\n      overflow: hidden;\n      position: relative;\n    }\n    .nprogress-custom-parent #nprogress .spinner,\n    .nprogress-custom-parent #nprogress .bar {\n      position: absolute;\n    }\n    @-webkit-keyframes nprogress-spinner {\n      0% {\n        -webkit-transform: rotate(0deg);\n      }\n      100% {\n        -webkit-transform: rotate(360deg);\n      }\n    }\n    @keyframes nprogress-spinner {\n      0% {\n        transform: rotate(0deg);\n      }\n      100% {\n        transform: rotate(360deg);\n      }\n    }\n";
	
	  var node = document.createElement("style");
	  node.id = "nprogress-styles";
	  node.innerHTML = styles;
	  document.head.appendChild(node);
	};

/***/ }),

/***/ 1935:
/***/ (function(module, exports, __webpack_require__) {

	__webpack_require__(
	      6
	    );
	    module.exports = function(cb) { return __webpack_require__.e/* nsure */(99219681209289, function(_, error) {
	        if (error) {
	          console.log('bundle loading error', error)
	          cb(true)
	        } else {
	          cb(null, function() { return __webpack_require__(1978) })
	        }
	      });
	     }
	    

/***/ }),

/***/ 1979:
/***/ (function(module, exports) {

	"use strict";
	
	exports.registerServiceWorker = function () {
	  return true;
	};

/***/ }),

/***/ 1980:
/***/ (function(module, exports) {

	"use strict";
	
	exports.onRouteUpdate = function (_ref) {
	  var location = _ref.location;
	
	  if (typeof twttr !== "undefined" && window.twttr.widgets && typeof window.twttr.widgets.load === "function") {
	    window.twttr.widgets.load();
	  }
	};

/***/ }),

/***/ 1985:
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	
	var scrollToHash = function scrollToHash(offsetY) {
	  // Make sure React has had a chance to flush to DOM first.
	  setTimeout(function () {
	    var hash = window.decodeURI(window.location.hash.replace("#", ""));
	    if (hash !== "") {
	      var element = document.getElementById(hash);
	      if (element) {
	        var offset = element.offsetTop;
	        window.scrollTo(0, offset - offsetY);
	      }
	    }
	  }, 10);
	};
	
	exports.onClientEntry = function (args, pluginOptions) {
	  var offsetY = 0;
	  if (pluginOptions.offsetY) {
	    offsetY = pluginOptions.offsetY;
	  }
	  // This code is only so scrolling to header hashes works in development.
	  // For production, the equivalent code is in gatsby-ssr.js.
	  if (true) {
	    scrollToHash(offsetY);
	  }
	};
	
	exports.onRouteUpdate = function (args, pluginOptions) {
	  var offsetY = 0;
	  if (pluginOptions.offsetY) {
	    offsetY = pluginOptions.offsetY;
	  }
	
	  scrollToHash(offsetY);
	};

/***/ }),

/***/ 2031:
/***/ (function(module, exports) {

	function n(n){return n=n||Object.create(null),{on:function(c,e){(n[c]||(n[c]=[])).push(e)},off:function(c,e){n[c]&&n[c].splice(n[c].indexOf(e)>>>0,1)},emit:function(c,e){(n[c]||[]).slice().map(function(n){n(e)}),(n["*"]||[]).slice().map(function(n){n(c,e)})}}}module.exports=n;
	//# sourceMappingURL=mitt.js.map

/***/ }),

/***/ 2032:
/***/ (function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_RESULT__;/* NProgress, (c) 2013, 2014 Rico Sta. Cruz - http://ricostacruz.com/nprogress
	 * @license MIT */
	
	;(function(root, factory) {
	
	  if (true) {
	    !(__WEBPACK_AMD_DEFINE_FACTORY__ = (factory), __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? (__WEBPACK_AMD_DEFINE_FACTORY__.call(exports, __webpack_require__, exports, module)) : __WEBPACK_AMD_DEFINE_FACTORY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	  } else if (typeof exports === 'object') {
	    module.exports = factory();
	  } else {
	    root.NProgress = factory();
	  }
	
	})(this, function() {
	  var NProgress = {};
	
	  NProgress.version = '0.2.0';
	
	  var Settings = NProgress.settings = {
	    minimum: 0.08,
	    easing: 'ease',
	    positionUsing: '',
	    speed: 200,
	    trickle: true,
	    trickleRate: 0.02,
	    trickleSpeed: 800,
	    showSpinner: true,
	    barSelector: '[role="bar"]',
	    spinnerSelector: '[role="spinner"]',
	    parent: 'body',
	    template: '<div class="bar" role="bar"><div class="peg"></div></div><div class="spinner" role="spinner"><div class="spinner-icon"></div></div>'
	  };
	
	  /**
	   * Updates configuration.
	   *
	   *     NProgress.configure({
	   *       minimum: 0.1
	   *     });
	   */
	  NProgress.configure = function(options) {
	    var key, value;
	    for (key in options) {
	      value = options[key];
	      if (value !== undefined && options.hasOwnProperty(key)) Settings[key] = value;
	    }
	
	    return this;
	  };
	
	  /**
	   * Last number.
	   */
	
	  NProgress.status = null;
	
	  /**
	   * Sets the progress bar status, where `n` is a number from `0.0` to `1.0`.
	   *
	   *     NProgress.set(0.4);
	   *     NProgress.set(1.0);
	   */
	
	  NProgress.set = function(n) {
	    var started = NProgress.isStarted();
	
	    n = clamp(n, Settings.minimum, 1);
	    NProgress.status = (n === 1 ? null : n);
	
	    var progress = NProgress.render(!started),
	        bar      = progress.querySelector(Settings.barSelector),
	        speed    = Settings.speed,
	        ease     = Settings.easing;
	
	    progress.offsetWidth; /* Repaint */
	
	    queue(function(next) {
	      // Set positionUsing if it hasn't already been set
	      if (Settings.positionUsing === '') Settings.positionUsing = NProgress.getPositioningCSS();
	
	      // Add transition
	      css(bar, barPositionCSS(n, speed, ease));
	
	      if (n === 1) {
	        // Fade out
	        css(progress, { 
	          transition: 'none', 
	          opacity: 1 
	        });
	        progress.offsetWidth; /* Repaint */
	
	        setTimeout(function() {
	          css(progress, { 
	            transition: 'all ' + speed + 'ms linear', 
	            opacity: 0 
	          });
	          setTimeout(function() {
	            NProgress.remove();
	            next();
	          }, speed);
	        }, speed);
	      } else {
	        setTimeout(next, speed);
	      }
	    });
	
	    return this;
	  };
	
	  NProgress.isStarted = function() {
	    return typeof NProgress.status === 'number';
	  };
	
	  /**
	   * Shows the progress bar.
	   * This is the same as setting the status to 0%, except that it doesn't go backwards.
	   *
	   *     NProgress.start();
	   *
	   */
	  NProgress.start = function() {
	    if (!NProgress.status) NProgress.set(0);
	
	    var work = function() {
	      setTimeout(function() {
	        if (!NProgress.status) return;
	        NProgress.trickle();
	        work();
	      }, Settings.trickleSpeed);
	    };
	
	    if (Settings.trickle) work();
	
	    return this;
	  };
	
	  /**
	   * Hides the progress bar.
	   * This is the *sort of* the same as setting the status to 100%, with the
	   * difference being `done()` makes some placebo effect of some realistic motion.
	   *
	   *     NProgress.done();
	   *
	   * If `true` is passed, it will show the progress bar even if its hidden.
	   *
	   *     NProgress.done(true);
	   */
	
	  NProgress.done = function(force) {
	    if (!force && !NProgress.status) return this;
	
	    return NProgress.inc(0.3 + 0.5 * Math.random()).set(1);
	  };
	
	  /**
	   * Increments by a random amount.
	   */
	
	  NProgress.inc = function(amount) {
	    var n = NProgress.status;
	
	    if (!n) {
	      return NProgress.start();
	    } else {
	      if (typeof amount !== 'number') {
	        amount = (1 - n) * clamp(Math.random() * n, 0.1, 0.95);
	      }
	
	      n = clamp(n + amount, 0, 0.994);
	      return NProgress.set(n);
	    }
	  };
	
	  NProgress.trickle = function() {
	    return NProgress.inc(Math.random() * Settings.trickleRate);
	  };
	
	  /**
	   * Waits for all supplied jQuery promises and
	   * increases the progress as the promises resolve.
	   *
	   * @param $promise jQUery Promise
	   */
	  (function() {
	    var initial = 0, current = 0;
	
	    NProgress.promise = function($promise) {
	      if (!$promise || $promise.state() === "resolved") {
	        return this;
	      }
	
	      if (current === 0) {
	        NProgress.start();
	      }
	
	      initial++;
	      current++;
	
	      $promise.always(function() {
	        current--;
	        if (current === 0) {
	            initial = 0;
	            NProgress.done();
	        } else {
	            NProgress.set((initial - current) / initial);
	        }
	      });
	
	      return this;
	    };
	
	  })();
	
	  /**
	   * (Internal) renders the progress bar markup based on the `template`
	   * setting.
	   */
	
	  NProgress.render = function(fromStart) {
	    if (NProgress.isRendered()) return document.getElementById('nprogress');
	
	    addClass(document.documentElement, 'nprogress-busy');
	    
	    var progress = document.createElement('div');
	    progress.id = 'nprogress';
	    progress.innerHTML = Settings.template;
	
	    var bar      = progress.querySelector(Settings.barSelector),
	        perc     = fromStart ? '-100' : toBarPerc(NProgress.status || 0),
	        parent   = document.querySelector(Settings.parent),
	        spinner;
	    
	    css(bar, {
	      transition: 'all 0 linear',
	      transform: 'translate3d(' + perc + '%,0,0)'
	    });
	
	    if (!Settings.showSpinner) {
	      spinner = progress.querySelector(Settings.spinnerSelector);
	      spinner && removeElement(spinner);
	    }
	
	    if (parent != document.body) {
	      addClass(parent, 'nprogress-custom-parent');
	    }
	
	    parent.appendChild(progress);
	    return progress;
	  };
	
	  /**
	   * Removes the element. Opposite of render().
	   */
	
	  NProgress.remove = function() {
	    removeClass(document.documentElement, 'nprogress-busy');
	    removeClass(document.querySelector(Settings.parent), 'nprogress-custom-parent');
	    var progress = document.getElementById('nprogress');
	    progress && removeElement(progress);
	  };
	
	  /**
	   * Checks if the progress bar is rendered.
	   */
	
	  NProgress.isRendered = function() {
	    return !!document.getElementById('nprogress');
	  };
	
	  /**
	   * Determine which positioning CSS rule to use.
	   */
	
	  NProgress.getPositioningCSS = function() {
	    // Sniff on document.body.style
	    var bodyStyle = document.body.style;
	
	    // Sniff prefixes
	    var vendorPrefix = ('WebkitTransform' in bodyStyle) ? 'Webkit' :
	                       ('MozTransform' in bodyStyle) ? 'Moz' :
	                       ('msTransform' in bodyStyle) ? 'ms' :
	                       ('OTransform' in bodyStyle) ? 'O' : '';
	
	    if (vendorPrefix + 'Perspective' in bodyStyle) {
	      // Modern browsers with 3D support, e.g. Webkit, IE10
	      return 'translate3d';
	    } else if (vendorPrefix + 'Transform' in bodyStyle) {
	      // Browsers without 3D support, e.g. IE9
	      return 'translate';
	    } else {
	      // Browsers without translate() support, e.g. IE7-8
	      return 'margin';
	    }
	  };
	
	  /**
	   * Helpers
	   */
	
	  function clamp(n, min, max) {
	    if (n < min) return min;
	    if (n > max) return max;
	    return n;
	  }
	
	  /**
	   * (Internal) converts a percentage (`0..1`) to a bar translateX
	   * percentage (`-100%..0%`).
	   */
	
	  function toBarPerc(n) {
	    return (-1 + n) * 100;
	  }
	
	
	  /**
	   * (Internal) returns the correct CSS for changing the bar's
	   * position given an n percentage, and speed and ease from Settings
	   */
	
	  function barPositionCSS(n, speed, ease) {
	    var barCSS;
	
	    if (Settings.positionUsing === 'translate3d') {
	      barCSS = { transform: 'translate3d('+toBarPerc(n)+'%,0,0)' };
	    } else if (Settings.positionUsing === 'translate') {
	      barCSS = { transform: 'translate('+toBarPerc(n)+'%,0)' };
	    } else {
	      barCSS = { 'margin-left': toBarPerc(n)+'%' };
	    }
	
	    barCSS.transition = 'all '+speed+'ms '+ease;
	
	    return barCSS;
	  }
	
	  /**
	   * (Internal) Queues a function to be executed.
	   */
	
	  var queue = (function() {
	    var pending = [];
	    
	    function next() {
	      var fn = pending.shift();
	      if (fn) {
	        fn(next);
	      }
	    }
	
	    return function(fn) {
	      pending.push(fn);
	      if (pending.length == 1) next();
	    };
	  })();
	
	  /**
	   * (Internal) Applies css properties to an element, similar to the jQuery 
	   * css method.
	   *
	   * While this helper does assist with vendor prefixed property names, it 
	   * does not perform any manipulation of values prior to setting styles.
	   */
	
	  var css = (function() {
	    var cssPrefixes = [ 'Webkit', 'O', 'Moz', 'ms' ],
	        cssProps    = {};
	
	    function camelCase(string) {
	      return string.replace(/^-ms-/, 'ms-').replace(/-([\da-z])/gi, function(match, letter) {
	        return letter.toUpperCase();
	      });
	    }
	
	    function getVendorProp(name) {
	      var style = document.body.style;
	      if (name in style) return name;
	
	      var i = cssPrefixes.length,
	          capName = name.charAt(0).toUpperCase() + name.slice(1),
	          vendorName;
	      while (i--) {
	        vendorName = cssPrefixes[i] + capName;
	        if (vendorName in style) return vendorName;
	      }
	
	      return name;
	    }
	
	    function getStyleProp(name) {
	      name = camelCase(name);
	      return cssProps[name] || (cssProps[name] = getVendorProp(name));
	    }
	
	    function applyCss(element, prop, value) {
	      prop = getStyleProp(prop);
	      element.style[prop] = value;
	    }
	
	    return function(element, properties) {
	      var args = arguments,
	          prop, 
	          value;
	
	      if (args.length == 2) {
	        for (prop in properties) {
	          value = properties[prop];
	          if (value !== undefined && properties.hasOwnProperty(prop)) applyCss(element, prop, value);
	        }
	      } else {
	        applyCss(element, args[1], args[2]);
	      }
	    }
	  })();
	
	  /**
	   * (Internal) Determines if an element or space separated list of class names contains a class name.
	   */
	
	  function hasClass(element, name) {
	    var list = typeof element == 'string' ? element : classList(element);
	    return list.indexOf(' ' + name + ' ') >= 0;
	  }
	
	  /**
	   * (Internal) Adds a class to an element.
	   */
	
	  function addClass(element, name) {
	    var oldList = classList(element),
	        newList = oldList + name;
	
	    if (hasClass(oldList, name)) return; 
	
	    // Trim the opening space.
	    element.className = newList.substring(1);
	  }
	
	  /**
	   * (Internal) Removes a class from an element.
	   */
	
	  function removeClass(element, name) {
	    var oldList = classList(element),
	        newList;
	
	    if (!hasClass(element, name)) return;
	
	    // Replace the class name.
	    newList = oldList.replace(' ' + name + ' ', ' ');
	
	    // Trim the opening and closing spaces.
	    element.className = newList.substring(1, newList.length - 1);
	  }
	
	  /**
	   * (Internal) Gets a space separated list of the class names on the element. 
	   * The list is wrapped with a single space on each end to facilitate finding 
	   * matches within the list.
	   */
	
	  function classList(element) {
	    return (' ' + (element.className || '') + ' ').replace(/\s+/gi, ' ');
	  }
	
	  /**
	   * (Internal) Removes an element from the DOM.
	   */
	
	  function removeElement(element) {
	    element && element.parentNode && element.parentNode.removeChild(element);
	  }
	
	  return NProgress;
	});
	


/***/ }),

/***/ 2139:
/***/ (function(module, exports) {

	"use strict";
	
	exports.__esModule = true;
	// Pulled from react-compat
	// https://github.com/developit/preact-compat/blob/7c5de00e7c85e2ffd011bf3af02899b63f699d3a/src/index.js#L349
	function shallowDiffers(a, b) {
	  for (var i in a) {
	    if (!(i in b)) return true;
	  }for (var _i in b) {
	    if (a[_i] !== b[_i]) return true;
	  }return false;
	}
	
	exports.default = function (instance, nextProps, nextState) {
	  return shallowDiffers(instance.props, nextProps) || shallowDiffers(instance.state, nextState);
	};
	
	module.exports = exports["default"];

/***/ }),

/***/ 1937:
/***/ (function(module, exports, __webpack_require__) {

	__webpack_require__(
	      6
	    );
	    module.exports = function(cb) { return __webpack_require__.e/* nsure */(144251824217401, function(_, error) {
	        if (error) {
	          console.log('bundle loading error', error)
	          cb(true)
	        } else {
	          cb(null, function() { return __webpack_require__(1829) })
	        }
	      });
	     }
	    

/***/ }),

/***/ 1938:
/***/ (function(module, exports, __webpack_require__) {

	__webpack_require__(
	      6
	    );
	    module.exports = function(cb) { return __webpack_require__.e/* nsure */(213534597649335, function(_, error) {
	        if (error) {
	          console.log('bundle loading error', error)
	          cb(true)
	        } else {
	          cb(null, function() { return __webpack_require__(1830) })
	        }
	      });
	     }
	    

/***/ }),

/***/ 1939:
/***/ (function(module, exports, __webpack_require__) {

	__webpack_require__(
	      6
	    );
	    module.exports = function(cb) { return __webpack_require__.e/* nsure */(129745722219136, function(_, error) {
	        if (error) {
	          console.log('bundle loading error', error)
	          cb(true)
	        } else {
	          cb(null, function() { return __webpack_require__(1831) })
	        }
	      });
	     }
	    

/***/ }),

/***/ 1940:
/***/ (function(module, exports, __webpack_require__) {

	__webpack_require__(
	      6
	    );
	    module.exports = function(cb) { return __webpack_require__.e/* nsure */(244850935622216, function(_, error) {
	        if (error) {
	          console.log('bundle loading error', error)
	          cb(true)
	        } else {
	          cb(null, function() { return __webpack_require__(1832) })
	        }
	      });
	     }
	    

/***/ })

});
//# sourceMappingURL=app-8c52864a25bd3ea94302.js.map