/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

throw new Error("Module build failed: SyntaxError: C:\\Users\\DeLL\\Desktop\\lti\\reactjs-course\\router-demo-app\\src\\components\\Indecision.jsx: Support for the experimental syntax 'jsx' isn't currently enabled (46:13):\n\n\u001b[0m \u001b[90m 44 | \u001b[39m    render() {\u001b[0m\n\u001b[0m \u001b[90m 45 | \u001b[39m        \u001b[36mreturn\u001b[39m (\u001b[0m\n\u001b[0m\u001b[31m\u001b[1m>\u001b[22m\u001b[39m\u001b[90m 46 | \u001b[39m            \u001b[33m<\u001b[39m\u001b[33mdiv\u001b[39m className\u001b[33m=\u001b[39m\u001b[32m\"in\"\u001b[39m\u001b[33m>\u001b[39m\u001b[0m\n\u001b[0m \u001b[90m    | \u001b[39m            \u001b[31m\u001b[1m^\u001b[22m\u001b[39m\u001b[0m\n\u001b[0m \u001b[90m 47 | \u001b[39m            \u001b[33m<\u001b[39m\u001b[33mHeader\u001b[39m \u001b[33m/\u001b[39m\u001b[33m>\u001b[39m\u001b[0m\n\u001b[0m \u001b[90m 48 | \u001b[39m            { sum(\u001b[35m4\u001b[39m\u001b[33m,\u001b[39m\u001b[35m7\u001b[39m)\u001b[0m\n\u001b[0m \u001b[90m 49 | \u001b[39m                \u001b[0m\n\nAdd @babel/preset-react (https://git.io/JfeDR) to the 'presets' section of your Babel config to enable transformation.\nIf you want to leave it as-is, add @babel/plugin-syntax-jsx (https://git.io/vb4yA) to the 'plugins' section to enable parsing.\n    at Parser._raise (C:\\Users\\DeLL\\Desktop\\lti\\reactjs-course\\router-demo-app\\node_modules\\@babel\\parser\\lib\\index.js:748:17)\n    at Parser.raiseWithData (C:\\Users\\DeLL\\Desktop\\lti\\reactjs-course\\router-demo-app\\node_modules\\@babel\\parser\\lib\\index.js:741:17)\n    at Parser.expectOnePlugin (C:\\Users\\DeLL\\Desktop\\lti\\reactjs-course\\router-demo-app\\node_modules\\@babel\\parser\\lib\\index.js:9116:18)\n    at Parser.parseExprAtom (C:\\Users\\DeLL\\Desktop\\lti\\reactjs-course\\router-demo-app\\node_modules\\@babel\\parser\\lib\\index.js:10569:22)\n    at Parser.parseExprSubscripts (C:\\Users\\DeLL\\Desktop\\lti\\reactjs-course\\router-demo-app\\node_modules\\@babel\\parser\\lib\\index.js:10150:23)\n    at Parser.parseUpdate (C:\\Users\\DeLL\\Desktop\\lti\\reactjs-course\\router-demo-app\\node_modules\\@babel\\parser\\lib\\index.js:10130:21)\n    at Parser.parseMaybeUnary (C:\\Users\\DeLL\\Desktop\\lti\\reactjs-course\\router-demo-app\\node_modules\\@babel\\parser\\lib\\index.js:10119:17)\n    at Parser.parseExprOps (C:\\Users\\DeLL\\Desktop\\lti\\reactjs-course\\router-demo-app\\node_modules\\@babel\\parser\\lib\\index.js:9989:23)\n    at Parser.parseMaybeConditional (C:\\Users\\DeLL\\Desktop\\lti\\reactjs-course\\router-demo-app\\node_modules\\@babel\\parser\\lib\\index.js:9963:23)\n    at Parser.parseMaybeAssign (C:\\Users\\DeLL\\Desktop\\lti\\reactjs-course\\router-demo-app\\node_modules\\@babel\\parser\\lib\\index.js:9926:21)\n    at C:\\Users\\DeLL\\Desktop\\lti\\reactjs-course\\router-demo-app\\node_modules\\@babel\\parser\\lib\\index.js:9893:39\n    at Parser.allowInAnd (C:\\Users\\DeLL\\Desktop\\lti\\reactjs-course\\router-demo-app\\node_modules\\@babel\\parser\\lib\\index.js:11547:12)\n    at Parser.parseMaybeAssignAllowIn (C:\\Users\\DeLL\\Desktop\\lti\\reactjs-course\\router-demo-app\\node_modules\\@babel\\parser\\lib\\index.js:9893:17)\n    at Parser.parseParenAndDistinguishExpression (C:\\Users\\DeLL\\Desktop\\lti\\reactjs-course\\router-demo-app\\node_modules\\@babel\\parser\\lib\\index.js:10752:28)\n    at Parser.parseExprAtom (C:\\Users\\DeLL\\Desktop\\lti\\reactjs-course\\router-demo-app\\node_modules\\@babel\\parser\\lib\\index.js:10470:21)\n    at Parser.parseExprSubscripts (C:\\Users\\DeLL\\Desktop\\lti\\reactjs-course\\router-demo-app\\node_modules\\@babel\\parser\\lib\\index.js:10150:23)\n    at Parser.parseUpdate (C:\\Users\\DeLL\\Desktop\\lti\\reactjs-course\\router-demo-app\\node_modules\\@babel\\parser\\lib\\index.js:10130:21)\n    at Parser.parseMaybeUnary (C:\\Users\\DeLL\\Desktop\\lti\\reactjs-course\\router-demo-app\\node_modules\\@babel\\parser\\lib\\index.js:10119:17)\n    at Parser.parseExprOps (C:\\Users\\DeLL\\Desktop\\lti\\reactjs-course\\router-demo-app\\node_modules\\@babel\\parser\\lib\\index.js:9989:23)\n    at Parser.parseMaybeConditional (C:\\Users\\DeLL\\Desktop\\lti\\reactjs-course\\router-demo-app\\node_modules\\@babel\\parser\\lib\\index.js:9963:23)\n    at Parser.parseMaybeAssign (C:\\Users\\DeLL\\Desktop\\lti\\reactjs-course\\router-demo-app\\node_modules\\@babel\\parser\\lib\\index.js:9926:21)\n    at Parser.parseExpressionBase (C:\\Users\\DeLL\\Desktop\\lti\\reactjs-course\\router-demo-app\\node_modules\\@babel\\parser\\lib\\index.js:9871:23)\n    at C:\\Users\\DeLL\\Desktop\\lti\\reactjs-course\\router-demo-app\\node_modules\\@babel\\parser\\lib\\index.js:9865:39\n    at Parser.allowInAnd (C:\\Users\\DeLL\\Desktop\\lti\\reactjs-course\\router-demo-app\\node_modules\\@babel\\parser\\lib\\index.js:11541:16)\n    at Parser.parseExpression (C:\\Users\\DeLL\\Desktop\\lti\\reactjs-course\\router-demo-app\\node_modules\\@babel\\parser\\lib\\index.js:9865:17)\n    at Parser.parseReturnStatement (C:\\Users\\DeLL\\Desktop\\lti\\reactjs-course\\router-demo-app\\node_modules\\@babel\\parser\\lib\\index.js:12045:28)\n    at Parser.parseStatementContent (C:\\Users\\DeLL\\Desktop\\lti\\reactjs-course\\router-demo-app\\node_modules\\@babel\\parser\\lib\\index.js:11724:21)\n    at Parser.parseStatement (C:\\Users\\DeLL\\Desktop\\lti\\reactjs-course\\router-demo-app\\node_modules\\@babel\\parser\\lib\\index.js:11676:17)\n    at Parser.parseBlockOrModuleBlockBody (C:\\Users\\DeLL\\Desktop\\lti\\reactjs-course\\router-demo-app\\node_modules\\@babel\\parser\\lib\\index.js:12258:25)\n    at Parser.parseBlockBody (C:\\Users\\DeLL\\Desktop\\lti\\reactjs-course\\router-demo-app\\node_modules\\@babel\\parser\\lib\\index.js:12249:10)");

/***/ })
/******/ ]);