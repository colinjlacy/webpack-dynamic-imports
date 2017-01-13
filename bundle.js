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
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _common = __webpack_require__(1);

	var _Platform = __webpack_require__(2);

	// log out the common file, our constant variable
	/**
	 * Created by colinjlacy on 1/11/17.
	 */
	(0, _common.LogCommon)();

	// log out the platform, the dependent variable
	(0, _Platform.PrintPlatform)();

/***/ },
/* 1 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.PrintConstant = PrintConstant;
	/**
	 * Created by colinjlacy on 1/11/17.
	 */
	function PrintConstant() {
	  var el = document.getElementById('constant');
	  el.innerHTML = 'The constant file has loaded...';
	}

/***/ },
/* 2 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.PrintPlatform = PrintPlatform;
	/**
	 * Created by colinjlacy on 1/11/17.
	 */
	function PrintPlatform() {
	  var el = document.getElementById('platform');
	  el.innerHTML = 'Web';
	}

/***/ }
/******/ ]);