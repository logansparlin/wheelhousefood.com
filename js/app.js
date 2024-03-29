---
---


/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	__webpack_require__(1);
	__webpack_require__(5);

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(2);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(4)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!../css-loader/index.js!../autoprefixer-loader/index.js!./normalize.css", function() {
				var newContent = require("!!../css-loader/index.js!../autoprefixer-loader/index.js!./normalize.css");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(3)();
	exports.push([module.id, "/*! normalize.css v3.0.3 | MIT License | github.com/necolas/normalize.css */\n\n/**\n * 1. Set default font family to sans-serif.\n * 2. Prevent iOS and IE text size adjust after device orientation change,\n *    without disabling user zoom.\n */\n\nhtml {\n  font-family: sans-serif; /* 1 */\n  -ms-text-size-adjust: 100%; /* 2 */\n  -webkit-text-size-adjust: 100%; /* 2 */\n}\n\n/**\n * Remove default margin.\n */\n\nbody {\n  margin: 0;\n}\n\n/* HTML5 display definitions\n   ========================================================================== */\n\n/**\n * Correct `block` display not defined for any HTML5 element in IE 8/9.\n * Correct `block` display not defined for `details` or `summary` in IE 10/11\n * and Firefox.\n * Correct `block` display not defined for `main` in IE 11.\n */\n\narticle,\naside,\ndetails,\nfigcaption,\nfigure,\nfooter,\nheader,\nhgroup,\nmain,\nmenu,\nnav,\nsection,\nsummary {\n  display: block;\n}\n\n/**\n * 1. Correct `inline-block` display not defined in IE 8/9.\n * 2. Normalize vertical alignment of `progress` in Chrome, Firefox, and Opera.\n */\n\naudio,\ncanvas,\nprogress,\nvideo {\n  display: inline-block; /* 1 */\n  vertical-align: baseline; /* 2 */\n}\n\n/**\n * Prevent modern browsers from displaying `audio` without controls.\n * Remove excess height in iOS 5 devices.\n */\n\naudio:not([controls]) {\n  display: none;\n  height: 0;\n}\n\n/**\n * Address `[hidden]` styling not present in IE 8/9/10.\n * Hide the `template` element in IE 8/9/10/11, Safari, and Firefox < 22.\n */\n\n[hidden],\ntemplate {\n  display: none;\n}\n\n/* Links\n   ========================================================================== */\n\n/**\n * Remove the gray background color from active links in IE 10.\n */\n\na {\n  background-color: transparent;\n}\n\n/**\n * Improve readability of focused elements when they are also in an\n * active/hover state.\n */\n\na:active,\na:hover {\n  outline: 0;\n}\n\n/* Text-level semantics\n   ========================================================================== */\n\n/**\n * Address styling not present in IE 8/9/10/11, Safari, and Chrome.\n */\n\nabbr[title] {\n  border-bottom: 1px dotted;\n}\n\n/**\n * Address style set to `bolder` in Firefox 4+, Safari, and Chrome.\n */\n\nb,\nstrong {\n  font-weight: bold;\n}\n\n/**\n * Address styling not present in Safari and Chrome.\n */\n\ndfn {\n  font-style: italic;\n}\n\n/**\n * Address variable `h1` font-size and margin within `section` and `article`\n * contexts in Firefox 4+, Safari, and Chrome.\n */\n\nh1 {\n  font-size: 2em;\n  margin: 0.67em 0;\n}\n\n/**\n * Address styling not present in IE 8/9.\n */\n\nmark {\n  background: #ff0;\n  color: #000;\n}\n\n/**\n * Address inconsistent and variable font size in all browsers.\n */\n\nsmall {\n  font-size: 80%;\n}\n\n/**\n * Prevent `sub` and `sup` affecting `line-height` in all browsers.\n */\n\nsub,\nsup {\n  font-size: 75%;\n  line-height: 0;\n  position: relative;\n  vertical-align: baseline;\n}\n\nsup {\n  top: -0.5em;\n}\n\nsub {\n  bottom: -0.25em;\n}\n\n/* Embedded content\n   ========================================================================== */\n\n/**\n * Remove border when inside `a` element in IE 8/9/10.\n */\n\nimg {\n  border: 0;\n}\n\n/**\n * Correct overflow not hidden in IE 9/10/11.\n */\n\nsvg:not(:root) {\n  overflow: hidden;\n}\n\n/* Grouping content\n   ========================================================================== */\n\n/**\n * Address margin not present in IE 8/9 and Safari.\n */\n\nfigure {\n  margin: 1em 40px;\n}\n\n/**\n * Address differences between Firefox and other browsers.\n */\n\nhr {\n  box-sizing: content-box;\n  height: 0;\n}\n\n/**\n * Contain overflow in all browsers.\n */\n\npre {\n  overflow: auto;\n}\n\n/**\n * Address odd `em`-unit font size rendering in all browsers.\n */\n\ncode,\nkbd,\npre,\nsamp {\n  font-family: monospace, monospace;\n  font-size: 1em;\n}\n\n/* Forms\n   ========================================================================== */\n\n/**\n * Known limitation: by default, Chrome and Safari on OS X allow very limited\n * styling of `select`, unless a `border` property is set.\n */\n\n/**\n * 1. Correct color not being inherited.\n *    Known issue: affects color of disabled elements.\n * 2. Correct font properties not being inherited.\n * 3. Address margins set differently in Firefox 4+, Safari, and Chrome.\n */\n\nbutton,\ninput,\noptgroup,\nselect,\ntextarea {\n  color: inherit; /* 1 */\n  font: inherit; /* 2 */\n  margin: 0; /* 3 */\n}\n\n/**\n * Address `overflow` set to `hidden` in IE 8/9/10/11.\n */\n\nbutton {\n  overflow: visible;\n}\n\n/**\n * Address inconsistent `text-transform` inheritance for `button` and `select`.\n * All other form control elements do not inherit `text-transform` values.\n * Correct `button` style inheritance in Firefox, IE 8/9/10/11, and Opera.\n * Correct `select` style inheritance in Firefox.\n */\n\nbutton,\nselect {\n  text-transform: none;\n}\n\n/**\n * 1. Avoid the WebKit bug in Android 4.0.* where (2) destroys native `audio`\n *    and `video` controls.\n * 2. Correct inability to style clickable `input` types in iOS.\n * 3. Improve usability and consistency of cursor style between image-type\n *    `input` and others.\n */\n\nbutton,\nhtml input[type=\"button\"], /* 1 */\ninput[type=\"reset\"],\ninput[type=\"submit\"] {\n  -webkit-appearance: button; /* 2 */\n  cursor: pointer; /* 3 */\n}\n\n/**\n * Re-set default cursor for disabled elements.\n */\n\nbutton[disabled],\nhtml input[disabled] {\n  cursor: default;\n}\n\n/**\n * Remove inner padding and border in Firefox 4+.\n */\n\nbutton::-moz-focus-inner,\ninput::-moz-focus-inner {\n  border: 0;\n  padding: 0;\n}\n\n/**\n * Address Firefox 4+ setting `line-height` on `input` using `!important` in\n * the UA stylesheet.\n */\n\ninput {\n  line-height: normal;\n}\n\n/**\n * It's recommended that you don't attempt to style these elements.\n * Firefox's implementation doesn't respect box-sizing, padding, or width.\n *\n * 1. Address box sizing set to `content-box` in IE 8/9/10.\n * 2. Remove excess padding in IE 8/9/10.\n */\n\ninput[type=\"checkbox\"],\ninput[type=\"radio\"] {\n  box-sizing: border-box; /* 1 */\n  padding: 0; /* 2 */\n}\n\n/**\n * Fix the cursor style for Chrome's increment/decrement buttons. For certain\n * `font-size` values of the `input`, it causes the cursor style of the\n * decrement button to change from `default` to `text`.\n */\n\ninput[type=\"number\"]::-webkit-inner-spin-button,\ninput[type=\"number\"]::-webkit-outer-spin-button {\n  height: auto;\n}\n\n/**\n * 1. Address `appearance` set to `searchfield` in Safari and Chrome.\n * 2. Address `box-sizing` set to `border-box` in Safari and Chrome.\n */\n\ninput[type=\"search\"] {\n  -webkit-appearance: textfield; /* 1 */\n  box-sizing: content-box; /* 2 */\n}\n\n/**\n * Remove inner padding and search cancel button in Safari and Chrome on OS X.\n * Safari (but not Chrome) clips the cancel button when the search input has\n * padding (and `textfield` appearance).\n */\n\ninput[type=\"search\"]::-webkit-search-cancel-button,\ninput[type=\"search\"]::-webkit-search-decoration {\n  -webkit-appearance: none;\n}\n\n/**\n * Define consistent border, margin, and padding.\n */\n\nfieldset {\n  border: 1px solid #c0c0c0;\n  margin: 0 2px;\n  padding: 0.35em 0.625em 0.75em;\n}\n\n/**\n * 1. Correct `color` not being inherited in IE 8/9/10/11.\n * 2. Remove padding so people aren't caught out if they zero out fieldsets.\n */\n\nlegend {\n  border: 0; /* 1 */\n  padding: 0; /* 2 */\n}\n\n/**\n * Remove default vertical scrollbar in IE 8/9/10/11.\n */\n\ntextarea {\n  overflow: auto;\n}\n\n/**\n * Don't inherit the `font-weight` (applied by a rule above).\n * NOTE: the default cannot safely be changed in Chrome and Safari on OS X.\n */\n\noptgroup {\n  font-weight: bold;\n}\n\n/* Tables\n   ========================================================================== */\n\n/**\n * Remove most spacing between table cells.\n */\n\ntable {\n  border-collapse: collapse;\n  border-spacing: 0;\n}\n\ntd,\nth {\n  padding: 0;\n}\n", ""]);

/***/ }),
/* 3 */
/***/ (function(module, exports) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	// css base code, injected by the css-loader
	module.exports = function() {
		var list = [];

		// return the list of modules as css string
		list.toString = function toString() {
			var result = [];
			for(var i = 0; i < this.length; i++) {
				var item = this[i];
				if(item[2]) {
					result.push("@media " + item[2] + "{" + item[1] + "}");
				} else {
					result.push(item[1]);
				}
			}
			return result.join("");
		};

		// import a list of modules into the list
		list.i = function(modules, mediaQuery) {
			if(typeof modules === "string")
				modules = [[null, modules, ""]];
			var alreadyImportedModules = {};
			for(var i = 0; i < this.length; i++) {
				var id = this[i][0];
				if(typeof id === "number")
					alreadyImportedModules[id] = true;
			}
			for(i = 0; i < modules.length; i++) {
				var item = modules[i];
				// skip already imported module
				// this implementation is not 100% perfect for weird media query combinations
				//  when a module is imported multiple times with different media queries.
				//  I hope this will never occur (Hey this way we have smaller bundles)
				if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
					if(mediaQuery && !item[2]) {
						item[2] = mediaQuery;
					} else if(mediaQuery) {
						item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
					}
					list.push(item);
				}
			}
		};
		return list;
	};


/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	var stylesInDom = {},
		memoize = function(fn) {
			var memo;
			return function () {
				if (typeof memo === "undefined") memo = fn.apply(this, arguments);
				return memo;
			};
		},
		isOldIE = memoize(function() {
			return /msie [6-9]\b/.test(window.navigator.userAgent.toLowerCase());
		}),
		getHeadElement = memoize(function () {
			return document.head || document.getElementsByTagName("head")[0];
		}),
		singletonElement = null,
		singletonCounter = 0;

	module.exports = function(list, options) {
		if(false) {
			if(typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
		}

		options = options || {};
		// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
		// tags it will allow on a page
		if (typeof options.singleton === "undefined") options.singleton = isOldIE();

		var styles = listToStyles(list);
		addStylesToDom(styles, options);

		return function update(newList) {
			var mayRemove = [];
			for(var i = 0; i < styles.length; i++) {
				var item = styles[i];
				var domStyle = stylesInDom[item.id];
				domStyle.refs--;
				mayRemove.push(domStyle);
			}
			if(newList) {
				var newStyles = listToStyles(newList);
				addStylesToDom(newStyles, options);
			}
			for(var i = 0; i < mayRemove.length; i++) {
				var domStyle = mayRemove[i];
				if(domStyle.refs === 0) {
					for(var j = 0; j < domStyle.parts.length; j++)
						domStyle.parts[j]();
					delete stylesInDom[domStyle.id];
				}
			}
		};
	}

	function addStylesToDom(styles, options) {
		for(var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];
			if(domStyle) {
				domStyle.refs++;
				for(var j = 0; j < domStyle.parts.length; j++) {
					domStyle.parts[j](item.parts[j]);
				}
				for(; j < item.parts.length; j++) {
					domStyle.parts.push(addStyle(item.parts[j], options));
				}
			} else {
				var parts = [];
				for(var j = 0; j < item.parts.length; j++) {
					parts.push(addStyle(item.parts[j], options));
				}
				stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
			}
		}
	}

	function listToStyles(list) {
		var styles = [];
		var newStyles = {};
		for(var i = 0; i < list.length; i++) {
			var item = list[i];
			var id = item[0];
			var css = item[1];
			var media = item[2];
			var sourceMap = item[3];
			var part = {css: css, media: media, sourceMap: sourceMap};
			if(!newStyles[id])
				styles.push(newStyles[id] = {id: id, parts: [part]});
			else
				newStyles[id].parts.push(part);
		}
		return styles;
	}

	function createStyleElement() {
		var styleElement = document.createElement("style");
		var head = getHeadElement();
		styleElement.type = "text/css";
		head.appendChild(styleElement);
		return styleElement;
	}

	function createLinkElement() {
		var linkElement = document.createElement("link");
		var head = getHeadElement();
		linkElement.rel = "stylesheet";
		head.appendChild(linkElement);
		return linkElement;
	}

	function addStyle(obj, options) {
		var styleElement, update, remove;

		if (options.singleton) {
			var styleIndex = singletonCounter++;
			styleElement = singletonElement || (singletonElement = createStyleElement());
			update = applyToSingletonTag.bind(null, styleElement, styleIndex, false);
			remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true);
		} else if(obj.sourceMap &&
			typeof URL === "function" &&
			typeof URL.createObjectURL === "function" &&
			typeof URL.revokeObjectURL === "function" &&
			typeof Blob === "function" &&
			typeof btoa === "function") {
			styleElement = createLinkElement();
			update = updateLink.bind(null, styleElement);
			remove = function() {
				styleElement.parentNode.removeChild(styleElement);
				if(styleElement.href)
					URL.revokeObjectURL(styleElement.href);
			};
		} else {
			styleElement = createStyleElement();
			update = applyToTag.bind(null, styleElement);
			remove = function() {
				styleElement.parentNode.removeChild(styleElement);
			};
		}

		update(obj);

		return function updateStyle(newObj) {
			if(newObj) {
				if(newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap)
					return;
				update(obj = newObj);
			} else {
				remove();
			}
		};
	}

	var replaceText = (function () {
		var textStore = [];

		return function (index, replacement) {
			textStore[index] = replacement;
			return textStore.filter(Boolean).join('\n');
		};
	})();

	function applyToSingletonTag(styleElement, index, remove, obj) {
		var css = remove ? "" : obj.css;

		if (styleElement.styleSheet) {
			styleElement.styleSheet.cssText = replaceText(index, css);
		} else {
			var cssNode = document.createTextNode(css);
			var childNodes = styleElement.childNodes;
			if (childNodes[index]) styleElement.removeChild(childNodes[index]);
			if (childNodes.length) {
				styleElement.insertBefore(cssNode, childNodes[index]);
			} else {
				styleElement.appendChild(cssNode);
			}
		}
	}

	function applyToTag(styleElement, obj) {
		var css = obj.css;
		var media = obj.media;
		var sourceMap = obj.sourceMap;

		if(media) {
			styleElement.setAttribute("media", media)
		}

		if(styleElement.styleSheet) {
			styleElement.styleSheet.cssText = css;
		} else {
			while(styleElement.firstChild) {
				styleElement.removeChild(styleElement.firstChild);
			}
			styleElement.appendChild(document.createTextNode(css));
		}
	}

	function updateLink(linkElement, obj) {
		var css = obj.css;
		var media = obj.media;
		var sourceMap = obj.sourceMap;

		if(sourceMap) {
			// http://stackoverflow.com/a/26603875
			css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
		}

		var blob = new Blob([css], { type: "text/css" });

		var oldSrc = linkElement.href;

		linkElement.href = URL.createObjectURL(blob);

		if(oldSrc)
			URL.revokeObjectURL(oldSrc);
	}


/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(6);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(4)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!../node_modules/css-loader/index.js!../node_modules/autoprefixer-loader/index.js!../node_modules/sass-loader/index.js!./entry.scss", function() {
				var newContent = require("!!../node_modules/css-loader/index.js!../node_modules/autoprefixer-loader/index.js!../node_modules/sass-loader/index.js!./entry.scss");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(3)();
	exports.push([module.id, "@import url(https://fonts.googleapis.com/css?family=Mallanna|Raleway);", ""]);
	exports.push([module.id, "\n:root {\n  --gamboge: #EFA30F; }\n\n/**\n * Syntax highlighting styles\n */\n.highlight {\n  background: #fff; }\n  .highlight .c {\n    color: #998;\n    font-style: italic; }\n  .highlight .err {\n    color: #a61717;\n    background-color: #e3d2d2; }\n  .highlight .k {\n    font-weight: bold; }\n  .highlight .o {\n    font-weight: bold; }\n  .highlight .cm {\n    color: #998;\n    font-style: italic; }\n  .highlight .cp {\n    color: #999;\n    font-weight: bold; }\n  .highlight .c1 {\n    color: #998;\n    font-style: italic; }\n  .highlight .cs {\n    color: #999;\n    font-weight: bold;\n    font-style: italic; }\n  .highlight .gd {\n    color: #000;\n    background-color: #fdd; }\n  .highlight .gd .x {\n    color: #000;\n    background-color: #faa; }\n  .highlight .ge {\n    font-style: italic; }\n  .highlight .gr {\n    color: #a00; }\n  .highlight .gh {\n    color: #999; }\n  .highlight .gi {\n    color: #000;\n    background-color: #dfd; }\n  .highlight .gi .x {\n    color: #000;\n    background-color: #afa; }\n  .highlight .go {\n    color: #888; }\n  .highlight .gp {\n    color: #555; }\n  .highlight .gs {\n    font-weight: bold; }\n  .highlight .gu {\n    color: #aaa; }\n  .highlight .gt {\n    color: #a00; }\n  .highlight .kc {\n    font-weight: bold; }\n  .highlight .kd {\n    font-weight: bold; }\n  .highlight .kp {\n    font-weight: bold; }\n  .highlight .kr {\n    font-weight: bold; }\n  .highlight .kt {\n    color: #458;\n    font-weight: bold; }\n  .highlight .m {\n    color: #099; }\n  .highlight .s {\n    color: #d14; }\n  .highlight .na {\n    color: #008080; }\n  .highlight .nb {\n    color: #0086B3; }\n  .highlight .nc {\n    color: #458;\n    font-weight: bold; }\n  .highlight .no {\n    color: #008080; }\n  .highlight .ni {\n    color: #800080; }\n  .highlight .ne {\n    color: #900;\n    font-weight: bold; }\n  .highlight .nf {\n    color: #900;\n    font-weight: bold; }\n  .highlight .nn {\n    color: #555; }\n  .highlight .nt {\n    color: #000080; }\n  .highlight .nv {\n    color: #008080; }\n  .highlight .ow {\n    font-weight: bold; }\n  .highlight .w {\n    color: #bbb; }\n  .highlight .mf {\n    color: #099; }\n  .highlight .mh {\n    color: #099; }\n  .highlight .mi {\n    color: #099; }\n  .highlight .mo {\n    color: #099; }\n  .highlight .sb {\n    color: #d14; }\n  .highlight .sc {\n    color: #d14; }\n  .highlight .sd {\n    color: #d14; }\n  .highlight .s2 {\n    color: #d14; }\n  .highlight .se {\n    color: #d14; }\n  .highlight .sh {\n    color: #d14; }\n  .highlight .si {\n    color: #d14; }\n  .highlight .sx {\n    color: #d14; }\n  .highlight .sr {\n    color: #009926; }\n  .highlight .s1 {\n    color: #d14; }\n  .highlight .ss {\n    color: #990073; }\n  .highlight .bp {\n    color: #999; }\n  .highlight .vc {\n    color: #008080; }\n  .highlight .vg {\n    color: #008080; }\n  .highlight .vi {\n    color: #008080; }\n  .highlight .il {\n    color: #099; }\n\n* {\n  box-sizing: border-box; }\n\nbody {\n  background-color: var(--gamboge);\n  font-family: 'Mallanna';\n  line-height: 1.3; }\n\nh1, h2, h3, h4, h5, h6 {\n  display: inline-block;\n  font-family: 'Mallanna';\n  font-weight: 400;\n  margin: 0 0 0.5em 0; }\n\nh1 {\n  border-bottom: 1.5px solid black;\n  margin-bottom: 1em; }\n\na {\n  color: black; }\n\np {\n  margin: 0 0 1em 0;\n  text-align: justify; }\n\ntable {\n  width: 100%; }\n\n.wrapper {\n  background-color: white;\n  border-radius: 0 0 5px 5px;\n  box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);\n  margin: 0 auto 2em;\n  max-width: 800px; }\n  @media (max-width: 450px) {\n    .wrapper {\n      margin-bottom: 0; } }\n  .wrapper > * {\n    padding: 2em; }\n\n.site-header {\n  background-image: url(\"{{ '/images/logo.jpg' | prepend: site.baseurl }}\");\n  background-position: 50%;\n  background-repeat: no-repeat;\n  background-size: 100%;\n  height: 250px; }\n  @media (max-width: 450px) {\n    .site-header {\n      height: 175px; } }\n\n.site-title {\n  display: block;\n  height: 100%;\n  text-indent: -9999px;\n  width: 100%; }\n\n.site-nav {\n  border-color: black;\n  border-style: solid;\n  border-width: 1.5px 0;\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-pack: center;\n      justify-content: center;\n  margin: 0 2em;\n  padding: 0; }\n  @media (max-width: 450px) {\n    .site-nav {\n      -ms-flex-pack: justify;\n          justify-content: space-between;\n      margin: 0 1em;\n      padding: 0.5em; } }\n  .site-nav a {\n    display: inline-block;\n    margin: 0 1em;\n    padding: 1em;\n    text-decoration: none; }\n    @media (max-width: 450px) {\n      .site-nav a {\n        margin: 0;\n        padding: 0.5em 0.25em; } }\n    .site-nav a[disabled] {\n      color: rgba(0, 0, 0, 0.3);\n      cursor: default;\n      pointer-events: none;\n      position: relative; }\n      .site-nav a[disabled]:before {\n        border-color: transparent transparent #8ec557 transparent;\n        border-style: solid;\n        border-width: 0.5em;\n        content: '';\n        left: 50%;\n        position: absolute;\n        top: 50%;\n        transform: translate(-50%, 0); }\n      .site-nav a[disabled]:after {\n        background-color: #8ec557;\n        border-radius: 3px;\n        color: white;\n        content: 'COMING SOON!';\n        font-size: 0.8em;\n        padding: 0.25em 0.75em;\n        position: absolute;\n        left: 50%;\n        text-shadow: 1px 1px 1px rgba(0, 0, 0, 0.1);\n        top: 50%;\n        transform: translate(-50%, 1em);\n        white-space: nowrap; }\n\n.post-content img {\n  border: 1px solid black;\n  border-radius: 3px;\n  max-width: 100%; }\n\n.site-footer {\n  background-color: black;\n  border-radius: 0 0 5px 5px;\n  color: white;\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-wrap: wrap;\n      flex-wrap: wrap;\n  padding: 1em; }\n  @media (max-width: 450px) {\n    .site-footer {\n      border-radius: 0;\n      -ms-flex-pack: distribute;\n          justify-content: space-around; } }\n  .site-footer .site-copyright {\n    -ms-flex: 1;\n        flex: 1; }\n    @media (max-width: 450px) {\n      .site-footer .site-copyright {\n        -ms-flex: 0 0 100%;\n            flex: 0 0 100%;\n        font-size: 0.9em;\n        margin-top: 0.5em;\n        -ms-flex-order: 100;\n            order: 100;\n        text-align: center; } }\n  .site-footer a {\n    color: white;\n    margin: 0 0 0 1em;\n    text-decoration: none; }\n\n.flex {\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-wrap: wrap;\n      flex-wrap: wrap; }\n\n.flex > div {\n  -ms-flex: 1 0;\n      flex: 1 0;\n  margin: 0 1em; }\n  @media (max-width: 450px) {\n    .flex > div {\n      -ms-flex: 1 0 100%;\n          flex: 1 0 100%;\n      margin: 0; } }\n\n.flex > div:first-child {\n  margin-left: 0; }\n\n.flex > div:last-child {\n  margin-right: 0; }\n\n.menu {\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-wrap: wrap;\n      flex-wrap: wrap;\n  margin: 0 -1em; }\n\n.menu-section {\n  -ms-flex: 0 0 100%;\n      flex: 0 0 100%;\n  margin: 2em 0;\n  padding: 0 1em; }\n\n.menu-title {\n  margin: 0; }\n\n.menu-description {\n  display: inline;\n  font-style: italic;\n  margin: 0 0 1em; }\n  .menu-description table {\n    font-size: 0.9em;\n    font-style: normal;\n    margin-top: 1em; }\n    .menu-description table em {\n      display: inline-block;\n      font-style: normal;\n      border-bottom: 1px solid lightgrey; }\n  .menu-description ul {\n    font-size: 0.9em;\n    margin: 0 0 1em;\n    padding: 0 0 0 1.5em; }\n\n.menu-items {\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-wrap: wrap;\n      flex-wrap: wrap;\n  margin: 0 -1em; }\n\n.menu-item {\n  -ms-flex: 0 0 50%;\n      flex: 0 0 50%;\n  padding: 1.5em 1em; }\n  @media (max-width: 450px) {\n    .menu-item {\n      -ms-flex: 0 0 100%;\n          flex: 0 0 100%; } }\n\n.Sides, .Drinks, .SoupsSides, .Appetizers, .Bakery, .CoffeeDrinks {\n  -ms-flex: 0 0 50%;\n      flex: 0 0 50%; }\n  @media (max-width: 450px) {\n    .Sides, .Drinks, .SoupsSides, .Appetizers, .Bakery, .CoffeeDrinks {\n      -ms-flex: 0 0 100%;\n          flex: 0 0 100%; } }\n  .Sides .menu-items, .Drinks .menu-items, .SoupsSides .menu-items, .Appetizers .menu-items, .Bakery .menu-items, .CoffeeDrinks .menu-items {\n    -ms-flex-direction: column;\n        flex-direction: column;\n    font-size: 0.8em; }\n  .Sides .menu-item__price, .Drinks .menu-item__price, .SoupsSides .menu-item__price, .Appetizers .menu-item__price, .Bakery .menu-item__price, .CoffeeDrinks .menu-item__price {\n    -ms-flex: 0 0 50px;\n        flex: 0 0 50px;\n    text-align: left; }\n\n.CoffeeDrinks .menu-item {\n  display: grid;\n  grid-template-columns: 1fr min-content;\n  grid-template-rows: min-content min-content;\n  grid-gap: 0px;\n  grid-template-areas: \"name price\" \"desc price\"; }\n\n.CoffeeDrinks .menu-item__name {\n  display: block;\n  grid-area: name; }\n\n.CoffeeDrinks .menu-item__description {\n  grid-area: desc; }\n\n.CoffeeDrinks .menu-item__variants {\n  display: block;\n  grid-area: price;\n  margin: 0;\n  white-space: nowrap; }\n  .CoffeeDrinks .menu-item__variants span {\n    display: block; }\n\n@media all and (-ms-high-contrast: none) {\n  .CoffeeDrinks .menu-item {\n    display: -ms-grid;\n    -ms-grid-columns: 1fr min-content;\n    -ms-grid-rows: min-content min-content; }\n  .CoffeeDrinks .menu-item__variants {\n    -ms-grid-row: 1;\n    -ms-grid-row-span: 2;\n    -ms-grid-column: 2;\n    -ms-grid-column-span: 1; }\n  .CoffeeDrinks .menu-item__name {\n    -ms-grid-row: 1;\n    -ms-grid-row-span: 1;\n    -ms-grid-column: 1;\n    -ms-grid-column-span: 1; }\n  .CoffeeDrinks .menu-item__description {\n    -ms-grid-row: 2;\n    -ms-grid-row-span: 1;\n    -ms-grid-column: 1;\n    -ms-grid-column-span: 1; } }\n\n.menu-item__name {\n  -ms-flex-align: center;\n      align-items: center;\n  display: -ms-flexbox;\n  display: flex;\n  font-size: 1.3em;\n  -ms-flex-pack: justify;\n      justify-content: space-between; }\n\n.menu-item__description,\n.menu-item__variants {\n  display: block;\n  font-size: 0.9em;\n  margin: 0 0 0.5em; }\n\n.menu-item__variants {\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-pack: justify;\n      justify-content: space-between; }\n", ""]);

/***/ })
/******/ ]);