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

var __ = wp.i18n.__;
var registerBlockType = wp.blocks.registerBlockType;


function Icon() {
	return wp.element.createElement(
		"svg",
		{ xmlns: "http://www.w3.org/2000/svg", version: "1.1", viewBox: "0 0 750 750", width: "750.0pt", height: "750.0pt" },
		wp.element.createElement("path", { d: "M 372.36 55.34 C 456.74 55.19 542.31 55.32 626.82 55.28 C 626.82 60.60 626.81 65.93 626.82 71.25 C 634.65 71.29 642.49 71.25 650.32 71.28 C 650.31 123.58 650.34 175.89 650.30 228.19 C 592.96 228.21 535.62 228.20 478.28 228.20 C 478.28 241.01 478.29 253.83 478.28 266.65 C 510.37 266.64 542.47 266.65 574.56 266.64 C 574.58 277.22 574.58 287.79 574.56 298.37 C 533.26 298.36 491.97 298.33 450.67 298.43 C 450.68 322.50 450.68 346.57 450.67 370.63 C 471.33 370.67 491.99 370.64 512.65 370.65 C 512.77 390.16 512.61 409.67 512.58 429.18 C 504.61 429.10 496.63 429.28 488.67 429.12 C 487.93 428.75 487.63 428.12 487.78 427.24 C 487.80 418.94 487.80 410.66 487.80 402.36 C 475.42 402.37 463.05 402.34 450.67 402.37 C 450.67 421.38 450.69 440.39 450.66 459.39 C 442.67 459.39 434.67 459.36 426.67 459.40 C 426.67 478.68 426.70 497.96 426.65 517.25 C 416.63 517.21 406.61 517.24 396.59 517.23 C 396.56 526.57 396.64 535.91 396.55 545.25 C 385.09 545.23 373.64 545.24 362.18 545.24 C 362.24 588.22 362.04 631.23 362.19 674.21 C 374.05 674.19 385.90 674.21 397.76 674.20 C 397.75 681.04 397.76 687.88 397.76 694.73 C 378.95 694.69 360.14 694.77 341.33 694.77 C 341.39 663.59 341.41 632.42 341.39 601.24 C 335.86 601.23 330.33 601.25 324.80 601.23 C 324.77 591.89 324.79 582.56 324.79 573.23 C 316.09 573.24 307.38 573.23 298.68 573.24 C 298.67 582.57 298.71 591.91 298.66 601.24 C 285.15 601.24 271.64 601.24 258.14 601.24 C 258.16 607.21 258.09 613.19 258.20 619.16 C 270.05 619.15 281.90 619.17 293.75 619.15 C 293.76 626.00 293.75 632.84 293.76 639.68 C 274.95 639.68 256.14 639.70 237.33 639.70 C 237.33 618.40 237.46 597.10 237.37 575.80 C 226.10 575.80 214.83 575.80 203.56 575.80 C 203.55 566.73 203.57 557.67 203.55 548.60 C 192.83 548.61 182.10 548.60 171.38 548.61 C 171.37 537.94 171.38 527.28 171.37 516.61 C 163.37 516.60 155.37 516.60 147.37 516.61 C 147.37 507.27 147.37 497.94 147.37 488.61 C 138.04 488.60 128.70 488.60 119.37 488.61 C 119.37 479.28 119.37 469.95 119.37 460.61 C 112.80 460.59 106.24 460.63 99.68 460.59 C 99.69 412.48 99.68 364.36 99.68 316.25 C 107.35 316.23 115.01 316.25 122.68 316.24 C 122.69 325.57 122.66 334.90 122.69 344.23 C 134.69 344.24 146.69 344.24 158.68 344.24 C 158.69 353.57 158.67 362.90 158.69 372.23 C 168.02 372.24 177.35 372.23 186.68 372.23 C 186.68 381.58 186.66 390.92 186.69 400.27 C 203.38 400.25 220.07 400.24 236.77 400.28 C 236.82 390.95 236.78 381.62 236.79 372.30 C 250.12 372.23 263.45 372.28 276.77 372.27 C 276.82 362.95 276.78 353.63 276.79 344.31 C 292.78 344.24 308.77 344.29 324.76 344.28 C 324.81 334.96 324.77 325.63 324.78 316.31 C 332.77 316.22 340.77 316.28 348.76 316.27 C 348.68 234.59 348.77 152.97 348.78 71.31 C 356.61 71.22 364.45 71.30 372.28 71.26 C 372.37 65.96 372.16 60.64 372.36 55.34 Z", fill: "#555D66" }),
		wp.element.createElement("path", { d: "M 401.44 96.23 C 411.55 96.03 421.70 96.22 431.82 96.15 C 431.82 106.30 431.83 116.45 431.81 126.60 C 421.67 126.59 411.53 126.61 401.38 126.59 C 401.42 116.48 401.28 106.34 401.44 96.23 Z", fill: "#ffffff" })
	);
}

registerBlockType('blockasaurus/blockasaurus', {
	title: __('Block-a-saurus!'),
	icon: wp.element.createElement(Icon, null),
	category: 'common',
	edit: function edit() {
		return wp.element.createElement("img", { src: "/wp-content/plugins/block-a-saurus/dino-cover.png", alt: "" });
	},
	save: function save() {
		return wp.element.createElement(
			"p",
			null,
			"Block-a-saurus block goes here."
		);
	}
});

/***/ })
/******/ ]);