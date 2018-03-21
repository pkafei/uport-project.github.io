webpackJsonp([129745722219136],{

/***/ 1826:
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	
	exports.__esModule = true;
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _gatsbyLink = __webpack_require__(36);
	
	var _gatsbyLink2 = _interopRequireDefault(_gatsbyLink);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var PostListing = function (_React$Component) {
	  _inherits(PostListing, _React$Component);
	
	  function PostListing() {
	    _classCallCheck(this, PostListing);
	
	    return _possibleConstructorReturn(this, _React$Component.apply(this, arguments));
	  }
	
	  PostListing.prototype.getPostList = function getPostList() {
	    var postList = [];
	    this.props.postEdges.forEach(function (postEdge) {
	      postList.push({
	        path: postEdge.node.fields.slug,
	        title: postEdge.node.frontmatter.title,
	        excerpt: postEdge.node.excerpt,
	        timeToRead: postEdge.node.timeToRead
	      });
	    });
	    return postList;
	  };
	
	  PostListing.prototype.render = function render() {
	    var postList = this.getPostList();
	    return _react2.default.createElement(
	      "div",
	      null,
	      /* Your post list here. */
	      postList.map(function (post) {
	        return _react2.default.createElement(
	          _gatsbyLink2.default,
	          { to: post.path, key: post.path },
	          _react2.default.createElement(
	            "h1",
	            null,
	            post.title
	          )
	        );
	      })
	    );
	  };
	
	  return PostListing;
	}(_react2.default.Component);
	
	exports.default = PostListing;
	module.exports = exports["default"];

/***/ }),

/***/ 1831:
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	
	exports.__esModule = true;
	exports.pageQuery = undefined;
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactHelmet = __webpack_require__(41);
	
	var _reactHelmet2 = _interopRequireDefault(_reactHelmet);
	
	var _PostListing = __webpack_require__(1826);
	
	var _PostListing2 = _interopRequireDefault(_PostListing);
	
	var _SiteConfig = __webpack_require__(38);
	
	var _SiteConfig2 = _interopRequireDefault(_SiteConfig);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var CategoryTemplate = function (_React$Component) {
	  _inherits(CategoryTemplate, _React$Component);
	
	  function CategoryTemplate() {
	    _classCallCheck(this, CategoryTemplate);
	
	    return _possibleConstructorReturn(this, _React$Component.apply(this, arguments));
	  }
	
	  CategoryTemplate.prototype.render = function render() {
	    var category = this.props.pathContext.category;
	    var postEdges = this.props.data.allMarkdownRemark.edges;
	    return _react2.default.createElement(
	      "div",
	      { className: "category-container" },
	      _react2.default.createElement(_reactHelmet2.default, {
	        title: "Posts in category \"" + category + "\" | " + _SiteConfig2.default.siteTitle
	      }),
	      _react2.default.createElement(_PostListing2.default, { postEdges: postEdges })
	    );
	  };
	
	  return CategoryTemplate;
	}(_react2.default.Component);
	
	/* eslint no-undef: "off"*/
	
	
	exports.default = CategoryTemplate;
	var pageQuery = exports.pageQuery = "** extracted graphql fragment **";

/***/ })

});
//# sourceMappingURL=component---src-templates-category-jsx-e241e6647070050167c1.js.map