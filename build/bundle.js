/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
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
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
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
/******/ 	return __webpack_require__(__webpack_require__.s = 18);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return cssAnswerArr; });
var cssAnswerArr = [
  {
    A0: `p {
    color: red;
  }
  `.replace(/\s+/g, "")
  },

  {
    A1: `.colortext {
    color: red;
  }
  `.replace(/\s+/g, "")
  },

  {
    A2: `h1, p {
    color: red;
  }
  `.replace(/\s+/g, "")
  },

  {
    A3: `<link rel="stylesheet" type="text/css" href="mystyle.css">`.replace(
      /\s+/g,
      ""
    )
  },

  {
    A4: `<style>
body {
  background-color: linen;
}
</style>
`.replace(/\s+/g, "")
  },

  { A5: `<body style="background-color: linen">`.replace(/\s+/g, "") },

  {
    A6: `body {
    background-color: linen;
  }
  h1 {
    background-color: lightblue;
  }
  `.replace(/\s+/g, "")
  },

  {
    A7: `body {
    background-image: url("paper.gif");
  }
  `.replace(/\s+/g, "")
  },

  {
    A8: `body {
    background-image: url("gradient_bg_vertical.png");
background-repeat: repeat-y;
}
`.replace(/\s+/g, "")
  },

  {
    A9: `body {
    background-image: url("img_tree.png");
    background-repeat: no-repeat;
    background-position: top right;
  }
  `.replace(/\s+/g, "")
  },

  {
    A10: `body {
    background: url("img_tree.png") no-repeat top right;
  }
  `.replace(/\s+/g, "")
  },

  {
    A11: `p {
    border-style: dotted;
    border-width: 4px;
  }
  `.replace(/\s+/g, "")
  },

  {
    A12: `p {
    border-color: red;
    border-style: dotted;
    border-width: 4px;
  }  
  `.replace(/\s+/g, "")
  },

  {
    A13: `p {
    border-top-style: dotted;
    border-top-width: 4px;
    border-top-color: red;
  }
  `.replace(/\s+/g, "")
  },

  {
    A14: `p {
    border: 10px solid green;
  }
  `.replace(/\s+/g, "")
  },

  {
    A15: `h1 {
    margin-left: 20px;
  }
  `.replace(/\s+/g, "")
  },

  {
    A16: `h1 {
    
    margin: 25px;
  }
  `.replace(/\s+/g, "")
  },

  {
    A17: `h1 {

  margin: 50px 25px;
}
`.replace(/\s+/g, "")
  },

  {
    A18: `h1 {
  margin: auto;
}
`.replace(/\s+/g, "")
  },

  {
    A19: `p {
  padding-top: 30px;
}
`.replace(/\s+/g, "")
  },

  {
    A20: `p {
  padding: 50px;
}
`.replace(/\s+/g, "")
  },

  {
    A21: `p {
  padding: 25px 50px;
}
`.replace(/\s+/g, "")
  },

  {
    A22: `h1 {
  height: 100px;
}
`.replace(/\s+/g, "")
  },

  {
    A23: `h1 {
  width: 50%;
}
`.replace(/\s+/g, "")
  },

  {
    A24: ` div {
  width: 200px;
}
`.replace(/\s+/g, "")
  },

  {
    A25: `div {
  padding: 25px;
}
`.replace(/\s+/g, "")
  },

  {
    A26: `div {
  border: 25px solid navy;
}
`.replace(/\s+/g, "")
  },

  {
    A27: `div {
  margin: 25px;
}
`.replace(/\s+/g, "")
  },

  {
    A28: `p {
  outline-style: solid;
  outline-width: 5px;
}
`.replace(/\s+/g, "")
  },

  {
    A29: `p {
  outline-color: green;
}
`.replace(/\s+/g, "")
  },

  {
    A30: `p {
  outline: red dotted 10px;
}
`.replace(/\s+/g, "")
  },

  {
    A31: `body {
  color: red;
}

h1 {
  color: blue;
}
`.replace(/\s+/g, "")
  },

  {
    A32: `h1 {
  text-align: center;
}
`.replace(/\s+/g, "")
  },

  {
    A33: `a {
  text-decoration: none;
}
`.replace(/\s+/g, "")
  },

  {
    A34: `h1 {
  text-transform: uppercase;
}
p {
  text-transform: capitalize;
}
`.replace(/\s+/g, "")
  },

  {
    A35: `p {
  text-indent: 20px;
}
`.replace(/\s+/g, "")
  },

  {
    A36: `body {
  font-family: "Courier New";
}

h1 {
  font-family: Verdana;
}
`.replace(/\s+/g, "")
  },

  {
    A37: `p {
  font-style: italic;
}
`.replace(/\s+/g, "")
  },

  {
    A38: `body {
  font-size: 20px;
}

h1 {
  font-size: 3em;
}
`.replace(/\s+/g, "")
  },

  {
    A39: `p {
  font-weight: bold;
}
`.replace(/\s+/g, "")
  },

  {
    A40: `p {
  font: italic 20px Verdana;
}
`.replace(/\s+/g, "")
  },

  {
    A41: `a {
  color: green;
}
`.replace(/\s+/g, "")
  },

  {
    A42: `a:link {
  color: red;
}

a:visited {
  color: blue;
}
`.replace(/\s+/g, "")
  },

  {
    A43: `
a:link {
  text-decoration: none;
}
a:visited {
  text-decoration: none;
}
a:hover {
  text-decoration: underline;
}
a:active {
  text-decoration: underline;
}
`.replace(/\s+/g, "")
  },

  {
    A44: `
a:link {
  background-color: lightblue;
}
a:visited {
  background-color: lightblue;
}
a:hover {
  background-color: yellow;
}
a:active {
  background-color: yellow;
}
`.replace(/\s+/g, "")
  },

  {
    A45: `ul {
  list-style-type: square;
}

ol {
  list-style-type: upper-roman;
}
`.replace(/\s+/g, "")
  },

  {
    A46: `ul {
  list-style-image: url('sqpurple.gif');
}
`.replace(/\s+/g, "")
  },

  {
    A47: `ul {
  list-style: circle inside url('img_marker.png');
}
`.replace(/\s+/g, "")
  },

  {
    A48: `ul {
  list-style-type: none;
}
`.replace(/\s+/g, "")
  },

  {
    A49: `table, th, td {
  border: 2px solid green;
}
`.replace(/\s+/g, "")
  },

  {
    A50: `table {
  border-collapse: collapse;
}
`.replace(/\s+/g, "")
  },

  {
    A51: `table {
  width: 100%;
}
`.replace(/\s+/g, "")
  },

  {
    A52: `td {
  text-align: right;
}
`.replace(/\s+/g, "")
  },

  {
    A53: `th {
  background-color: lightblue;
}
`.replace(/\s+/g, "")
  },

  {
    A54: `h1 {
  visibility: hidden;
}
`.replace(/\s+/g, "")
  },

  {
    A55: `h1 {
  display: none;
}
`.replace(/\s+/g, "")
  },

  {
    A56: `li {
  display: inline;
}
`.replace(/\s+/g, "")
  },

  {
    A57: `strong {
  display:block;
}
`.replace(/\s+/g, "")
  },

  {
    A58: `h1 {
  position: fixed;
  top: 50px;
  right: 50px;
}
`.replace(/\s+/g, "")
  },

  {
    A59: `h1 {
  position: relative;
  top: 30px;
  left: -20px;
}`.replace(/\s+/g, "")
  },

  {
    A60: `h1 {
  position: absolute;
  top: 100px;
  left: 50px;
}
`.replace(/\s+/g, "")
  },

  {
    A61: `img {
  position: absolute;
  left: 0px;
  top: 0px;
  z-index: -1;
}
`.replace(/\s+/g, "")
  },

  {
    A62: `.container {
  position: relative;
}

.topleft {
  position: absolute;
  left: 30px;
  top: 15px;
}
`.replace(/\s+/g, "")
  },

  {
    A63: `div {
  background-color: #eee;
  width: 200px;
  height: 70px;
  border: 1px dotted black;
  overflow: scroll;
}
`.replace(/\s+/g, "")
  },

  {
    A64: `div {
  background-color: lightblue;
  width: 200px;
  height: 200px;
  overflow: hidden;
}
`.replace(/\s+/g, "")
  },

  {
    A65: `div {
  background-color: #eee;
  width: 150px;
  height: 70px;
  border: 1px dotted black;
  white-space: nowrap;
  overflow-x: scroll;
}
`.replace(/\s+/g, "")
  },

  {
    A66: `div {
  margin-left: auto;
  margin-right: auto;
  width: 300px;
  background-color: #b0e0e6;
}
`.replace(/\s+/g, "")
  },

  {
    A67: `div {
  position: absolute;
  right: 0px;
  width: 300px;
  background-color: #b0e0e6;
}
`.replace(/\s+/g, "")
  },

  {
    A68: `div p {
  color: red;
}
`.replace(/\s+/g, "")
  },

  {
    A69: `div > p {
  color: red;
}
`.replace(/\s+/g, "")
  },

  {
    A70: `div + p {
  color: red;
}
`.replace(/\s+/g, "")
  },

  {
    A71: `div ~ p {
  color: red;
}
`.replace(/\s+/g, "")
  },

  {
    A72: `
a:link {
  background-color: lightblue;
}
a:visited {
  background-color: lightblue;
}
a:hover {
  background-color: yellow;
}
a:active {
  background-color: yellow;
}
`.replace(/\s+/g, "")
  },

  {
    A73: `p.highlight:hover {
  background-color: lightblue;
}
`.replace(/\s+/g, "")
  },

  {
    A74: `p:first-child {
  background-color: lightblue;
}
`.replace(/\s+/g, "")
  },

  {
    A75: `input:focus {
  background-color: lightblue;
}
`.replace(/\s+/g, "")
  },

  {
    A76: `p::first-line {
  color: red;
}
`.replace(/\s+/g, "")
  },

  {
    A77: `p::first-letter {
  color: red;
  font-size: xx-large;
}
`.replace(/\s+/g, "")
  },

  {
    A78: `p::before{
  content: url(smiley.gif);
}
p::after{
  content: url(smiley.gif);
}
`.replace(/\s+/g, "")
  },

  {
    A79: `img {
  opacity: 0.4;
}
`.replace(/\s+/g, "")
  },

  {
    A80: `img {
  opacity: 0.4;
}
img:hover {
  opacity: 1.0;
}
`.replace(/\s+/g, "")
  },

  {
    A81: `a[target] {
  background-color: lightblue;
}
`.replace(/\s+/g, "")
  },

  {
    A82: `[title~="red"] {
  border: 5px solid red;
}
`.replace(/\s+/g, "")
  },

  {
    A83: `[title^="red"] {
  border: 5px solid red;
}
`.replace(/\s+/g, "")
  },

  {
    A84: `[title$="flower"] {
  border: 5px solid red;
}
`.replace(/\s+/g, "")
  },

  {
    A85: `[title*="flow"] {
  border: 5px solid red;
}
`.replace(/\s+/g, "")
  },

  {
    A86: `div {
  border-radius: 25px;
  background: #73AD21;
  padding: 20px; 
  width: 200px;
 
}
`.replace(/\s+/g, "")
  },

  {
    A87: `div {
  border-bottom-left-radius: 25px;
  background: #73AD21;
  padding: 20px; 
  width: 200px;  
}
`.replace(/\s+/g, "")
  },

  {
    A88: `div { 
  border: 10px solid transparent;
  border-image: url(border.png) 30 round;
}
`.replace(/\s+/g, "")
  },

  {
    A89: `div { 
  border: 10px solid transparent;
  border-image: url(border.png) 30 stretch;
}
`.replace(/\s+/g, "")
  },

  {
    A90: `body {
  background-image: url(img_flwr.gif), url(paper.gif);
}
`.replace(/\s+/g, "")
  },

  {
    A91: `body {
  background:url(img_flwr.gif);
  background-size: 100px 80px;
  background-repeat: no-repeat;
}
`.replace(/\s+/g, "")
  },

  {
    A92: `html { 
  background: url(img_flower.jpg) no-repeat center center fixed;
  background-size: cover;
}
`.replace(/\s+/g, "")
  },

  {
    A93: `div { 
  border: 10px solid black;
  padding: 35px;
  background: url(img_flwr.gif);
  background-repeat: no-repeat;
  background-origin: content-box;
}
`.replace(/\s+/g, "")
  },

  {
    A94: `div { 
  border: 10px dotted black;
  padding: 35px;
  background: lightblue;
  background-clip: padding-box;
}
`.replace(/\s+/g, "")
  },

  {
    A95: `h1 {
  background-color: rgba(0,255,0,0.3);
}
`.replace(/\s+/g, "")
  },

  {
    A96: `h1 {
  background-color: hsl(0,100%,50%);
}
`.replace(/\s+/g, "")
  },

  {
    A97: `h1 {
  background-color: hsla(0,100%,50%,0.3);
}
`.replace(/\s+/g, "")
  },

  {
    A98: `h1 {
  background-color: red;
  opacity: 0.4;
}
`.replace(/\s+/g, "")
  },

  {
    A99: `div {
  background-image: linear-gradient(white, green);
}
`.replace(/\s+/g, "")
  },

  {
    A100: `div {
  background-image: linear-gradient(to bottom right, white, green);
}
`.replace(/\s+/g, "")
  },

  {
    A101: `div {
  background-image: linear-gradient(70deg, white, green);
}
`.replace(/\s+/g, "")
  },

  {
    A102: `div {
  background-image: linear-gradient(white, red, blue, green);
}
`.replace(/\s+/g, "")
  },

  {
    A103: `div {
  background-image: linear-gradient(rgba(0,255,0,0.2), rgba(0,255,0,1));
}
`.replace(/\s+/g, "")
  },

  {
    A104: `div {
  background-image: radial-gradient(white, green);
}
`.replace(/\s+/g, "")
  },

  {
    A105: `div {
  background-image: radial-gradient(circle, white, green);
}
`.replace(/\s+/g, "")
  },

  {
    A106: `h1 {
  text-shadow: 2px 2px;
}
`.replace(/\s+/g, "")
  },

  {
    A107: `h1 {
  text-shadow: 2px 2px 5px green;
}
`.replace(/\s+/g, "")
  },

  {
    A108: `h1 {
  text-shadow: 2px 2px 5px green, 0 0 10px red;
}
`.replace(/\s+/g, "")
  },

  {
    A109: `div {
  box-shadow: 10px 10px;
}
`.replace(/\s+/g, "")
  },

  {
    A110: `div {
  box-shadow: 10px 10px 5px grey;
}
`.replace(/\s+/g, "")
  },

  {
    A111: `p {
  white-space: nowrap; 
  width: 200px; 
  border: 1px solid #000000;
  overflow: hidden;
  text-overflow: ellipsis;
}
`.replace(/\s+/g, "")
  },

  {
    A112: `p {
  width: 150px; 
  border: 1px solid #000000;
  word-wrap: break-word;
}
`.replace(/\s+/g, "")
  },

  {
    A113: `p {
  width: 150px; 
  border: 1px solid #000000;
  word-break: break-all;
}
`.replace(/\s+/g, "")
  },

  {
    A114: `@font-face {
  font-family: sansation;
  src: url(sansation_light.woff);
}
`.replace(/\s+/g, "")
  },

  {
    A115: `@font-face {
  font-family: sansation;
  src: url(sansation_bold.woff);
  font-weight: bold;
}
`.replace(/\s+/g, "")
  },

  {
    A116: `div {
  width: 100px;
  height: 100px;
  background-color: lightblue;
  border: 1px solid black;
  transform: translate(100px,200px);
}
`.replace(/\s+/g, "")
  },

  {
    A117: `div {
  width: 100px;
  height: 100px;
  margin: 50px;
  background-color: lightblue;
  border: 1px solid black;
  transform: rotate(45deg);
}
`.replace(/\s+/g, "")
  },

  {
    A118: `div {
  width: 100px;
  height: 100px;
  margin: 50px;
  background-color: lightblue;
  border: 1px solid black;
  transform: scale(0.5,2);
}
`.replace(/\s+/g, "")
  },

  {
    A119: `div {
  width: 100px;
  height: 100px;
  margin: 50px;
  background-color: lightblue;
  border: 1px solid black;
  transform: skew(20deg, 30deg);
}
`.replace(/\s+/g, "")
  },

  {
    A120: `div {
  width: 100px;
  height: 100px;
  background-color: lightblue;
  border: 1px solid black;
  transform: rotateX(150deg);
}
`.replace(/\s+/g, "")
  },

  {
    A121: `div {
  width: 100px;
  height: 100px;
  background-color: lightblue;
  border: 1px solid black;
  transform: rotateY(120deg);
}
`.replace(/\s+/g, "")
  },

  {
    A122: `div {
  width: 100px;
  height: 100px;
  background-color: lightblue;
  border: 1px solid black;
  transform: rotateZ(90deg);
}
`.replace(/\s+/g, "")
  },

  {
    A123: `div {
  width: 100px;
  height: 100px;
  background: red;
  transition: width 2s;
}

div:hover {
  width: 300px;
}
`.replace(/\s+/g, "")
  },

  {
    A124: `div {
  width: 100px;
  height: 100px;
  background: red;
  transition: width 2s;
  transition-timing-function: ease-in-out;
}

div:hover {
  width: 300px;
}
`.replace(/\s+/g, "")
  },

  {
    A125: `div {
  width: 100px;
  height: 100px;
  background: red;
  transition: width 2s;
  transition-delay: 0.5s;
}

div:hover {
  width: 300px;
}
`.replace(/\s+/g, "")
  },

  {
    A126: `div {
  width: 100px;
  height: 100px;
  background: red;
  transition: background 2s, transform 2s;
}

div:hover {
  background: blue;
  transform: rotate(180deg);
}
`.replace(/\s+/g, "")
  },

  {
    A127: `div {
  width: 100px;
  height: 100px;
  background: red;
  transition: width 2s ease-in-out 0.5s;
}

div:hover {
  width: 400px;
}
`.replace(/\s+/g, "")
  },

  {
    A128: `div {
  width: 100px;
  height: 100px;
  background-color: red;
  animation-name: example;
  animation-duration: 2s;
}

@keyframes example {
  from {background-color: red;}
  to {background-color: blue;}
}
`.replace(/\s+/g, "")
  },

  {
    A129: `div {
  width: 100px;
  height: 100px;
  position: relative;
  background-color: red;
  animation-name: example;
  animation-duration: 4s;
}

@keyframes example {
  0%   {background-color: red; left:0px; top:0px;}
  25%  {background-color: blue; left:0px; top:200px;}
  50%  {background-color: green; left:200px; top:200px;}
  75%  {background-color: yellow; left:200px; top:0px;}
  100% {background-color: red; left:0px; top:0px;}
}
`.replace(/\s+/g, "")
  },

  {
    A130: `div {
  width: 100px;
  height: 100px;
  position: relative;
  background-color: red;
  animation-name: example;
  animation-duration: 2s;
  animation-delay: 1s;
}

@keyframes example {
  0%   {background-color: red; left:0px;}
  50%  {background-color: yellow; left:200px;}
  100% {background-color: red; left:0px;}
}
`.replace(/\s+/g, "")
  },

  {
    A131: `div {
  width: 100px;
  height: 100px;
  position: relative;
  background-color: red;
  animation-name: example;
  animation-duration: 2s;
  animation-iteration-count: infinite;
}

@keyframes example {
  0%   {background-color: red; left:0px;}
  50%  {background-color: yellow; left:200px;}
  100% {background-color: red; left:0px;}
}
`.replace(/\s+/g, "")
  },

  {
    A132: `div {
  width: 100px;
  height: 100px;
  position: relative;
  background-color: red;
  animation-name: example;
  animation-duration: 4s;
  animation-iteration-count: infinite;
  animation-direction: alternate;   
}

@keyframes example {
  0%   {background-color: red; left:0px; top:0px;}
  25%  {background-color: blue; left:0px; top:200px;}
  50%  {background-color: green; left:200px; top:200px;}
  75%  {background-color: yellow; left:200px; top:0px;}
  100% {background-color: red; left:0px; top:0px;}
}
`.replace(/\s+/g, "")
  },

  {
    A133: `div {
  width: 100px;
  height: 100px;
  position: relative;
  background-color: red;
  animation-name: example;
  animation-duration: 4s;
  animation-timing-function: ease-in-out;
}

@keyframes example {
  0%   {background-color: red; left:0px;}
  50%  {background-color: yellow; left:200px;}
  100% {background-color: red; left:0px;}
}
`.replace(/\s+/g, "")
  }
];


/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return cssQuestionArr; });
var cssQuestionArr = [
  `0.Change the color of all &ltp&gt elements to "red".<br>
   &ltp&gtThis is a paragraph.&lt/p&gt<br>
  &ltp&gtThis is another paragraph.&lt/p&gt`,

  `1.Change the color of all elements with the class "colortext", to "red"<tb>t
  &ltp class="colortext"&gtThis is another paragraph.&lt/p&gt<br>
  &ltp class="colortext"&gtThis is also a paragraph.&lt/p&gt
  `,

  `2.Change the color of all &ltp&gt and &lth1&gt elements, to "red". Group the selectors to minimize code.<br>
  &lth1&gtThis is a heading&lt/h1&gt<br>
  &lth2&gtThis is a smaller heading&lt/h2&gt<br>
  &ltp&gtThis is a paragraph.&lt/p&gt<br>
  &ltp&gtThis is another paragraph.&lt/p&gt<br>
  `,

  `3.Add an external style sheet with the URL: "mystyle.css".`,

  `4.Set "background-color: linen" for the page, using an internal style sheet.`,

  `5.Set "background-color: linen" for the page, using an inline style.`,

  `6.Set the background color for the page to "linen" and the background color for &lth1&gt to "lightblue".`,

  `7.Set "paper.gif" as the background image of the page.`,

  `8.Set "gradient_bg_vertical.png" as the background image of the page, and repeat it vertically only.`,

  `9.Specify that the background image should be shown once, in the top right corner. img_tree.png`,

  `10.Use the shorthand background property to set background image to "img_tree.png", show it once, in the top right corner.`,

  `11.Set a "4px", "dotted" border for &ltp&gt.<br>
  &ltp&gtThis is a paragraph.&lt/p&gt`,

  `12.Set the border color for &ltp&gt to "red".<br>
  &ltp&gtThis is a paragraph.&lt/p&gt<br>
  p {<br>
    border-style: dotted;<br>
    border-width: 4px;<br>
  }  `,

  `13.Change the 3 border properties, so that they only show the border on the top side.<br> 
  &ltp&gtThis is a paragraph.&lt/p&gt.<br>
   p {<br>
      border-style: dotted;<br>
      border-width: 4px;<br>
      border-color: red;<br>
    }
  `,

  `14.With the border property: Set the border for p to "10px", "solid" and "green".<br>
   &ltp&gtThis is a paragraph.&lt/p&gt
  `,

  `15.Set the left margin of &lth1&gt to "20px".<br>
  &lth1&gtThis is a Heading&lt/h1&gt`,

  `16.Set all margins for &lth1&gt to "25px".<br>
  &lth1&gtThis is a Heading&lt/h1&gt`,

  `17.Use the margin property to set the top and bottom margins for &lth1&gt to "50px", and left and right margins to "25px". <br>
  &lth1&gtThis is a Heading&lt/h1&gt`,

  `18.Use the margin property to center align the &lth1&gt element.<br>
  &lth1&gtThis is a Heading&lt/h1&gt`,

  `19.Set the top padding of &ltp&gt to "30px".<br>
  &ltp&gtThis is a paragraph.&lt/p&gt `,

  `20.Set all paddings for &ltp&gt to "50px".<br>
  &ltp&gtThis is a paragraph.&lt/p&gt`,

  `21.Use the padding property to set the top and bottom paddings for &ltp&gt to "25px", and left and right paddings to "50px". <br>
  &ltp&gtThis is a paragraph.&lt/p&gt`,

  `22.Set the height of &lth1&gt to "100px".<br>
  &lth1&gtThis is a Heading&lt/h1&gt`,

  `23.Set the width of &lth1&gt to "50%".<br>
  &lth1&gtThis is a Heading&lt/h1&gt`,

  `24.Set the width of the div to "200px".<br>
  &ltdiv&gtLorem ipsum dolor sit amet. &lt/div&gt`,

  `25.Set the padding of the div to "25px".<br>
  &ltdiv&gtLorem ipsum dolor sit amet. &lt/div&gt`,

  `26.Set the border of the div to "25px solid navy".<br>
  &ltdiv&gtLorem ipsum dolor sit amet. &lt/div&gt`,

  `27.Set the margin of the div to "25px".<br>
  &ltdiv&gtLorem ipsum dolor sit amet. &lt/div&gt`,

  `28.Set a "solid", "5px" outline for &ltp&gt.<br>
  &ltp&gtThis is a paragraph.&lt/p&gt`,

  `29.Set the outline color for &ltp&gt to "green".<br>
  &ltp&gtThis is a paragraph.&lt/p&gt`,

  `30.With the outline property: Set the outline for p to "red", "dotted" and "10px".<br>
  &ltp&gtThis is a paragraph.&lt/p&gt`,

  `31.Set the text color for the page to "red", and the text color for &lth1&gt to "blue".<br>
  &lth1&gtThis is a Heading&lt/h1&gt`,

  `32.Center align the &lth1&gt element.<br>
  &lth1&gtThis is a Heading&lt/h1&gt`,

  `33.Remove the underline from the link.<br>
  &ltp&gt&lta href="css_text.asp"&gtCSS text tutorial&lt/a&gt&lt/p&gt`,

  `34.Style text in &lth1&gt to uppercase letters, and text in &ltp&gt to capitalized letters.<br>
  &lth1&gtThis is a Heading&lt/h1&gt<br>
  &ltp&gtThis is a paragraph.&lt/p&gt
  `,

  `35.Indent the first line of the &ltp&gt element with 20px.<br>
  &ltp&gtLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua &lt/p&gt`,

  `36.Set the font family for the page to "Courier New", and the font family for &lth1&gt to "Verdana".<br>
  &lth1&gtThis is a Heading&lt/h1&gt`,

  `37.Show &ltp&gt elements as "italic" text.<br>
  &ltp&gtThis is a paragraph.&lt/p&gt`,

  `38.Set the font size for the page to "20px", and the font size for &lth1&gt to "3em".<br>
  &lth1&gtThis is a Heading&lt/h1&gt`,

  `39.Set &ltp&gt elements as "bold" text.<br>
  &ltp&gtThis is a paragraph.&lt/p&gt`,

  `40.With the font property: Set the &ltp&gt to "italic", "20px" and "Verdana".<br>
  &ltp&gtThis is a paragraph.&lt/p&gt`,

  `41.Set the color for links to "green".<br>
  &ltp&gt&lta href="https://www.google.com"&gtgoogle.com&lt/a&gt&lt/p&gt`,

  `42.Set the color for unvisited links to "red", and the color for visited links "blue".<br>
  &ltp&gt&lta href="https://www.google.com"&gtgoogle.com&lt/a&gt&lt/p&gt`,

  `43.Remove underlines for visited and unvisited links, and specify "underline" for the hover and active link states.<br>
  &ltp&gt&lta href="https://www.google.com"&gtgoogle.com&lt/a&gt&lt/p&gt`,

  `44.Set the background color for visited and unvisited links to "lightblue", and the background color for the hover and active link states to "yellow"<tb>t
  &ltp&gt&lta href="https://www.google.com"&gtgoogle.com&lt/a&gt&lt/p&gt`,

  `45.Set the list style for unordered lists to "square", and the list style for ordered lists to "upper-roman".
  &ltp&gtThis is an unordered list:<br>
  &lt/p&gt<br>
  &ltul&gt<br>
    &ltli&gtCoffee&lt/li&gt<br>
    &ltli&gtTea&lt/li&gt<br>
    &ltli&gtCoca Cola&lt/li&gt<br>
  &lt/ul&gt<br>
  <br>
  &ltp&gtThis is an ordered list:&lt/p&gt<br>
  &ltol&gt<br>
    &ltli&gtCoffee&lt/li&gt<br>
    &ltli&gtTea&lt/li&gt<br>
    &ltli&gtCoca Cola&lt/li&gt<br>
  &lt/ol&gt<br>
  `,

  `46.Set the image "sqpurple.gif" as the list item marker for the unordered list.<br>
  &ltp&gtThis is an unordered list:<br>
  &lt/p&gt<br>
  &ltul&gt<br>
    &ltli&gtCoffee&lt/li&gt<br>
    &ltli&gtTea&lt/li&gt<br>
    &ltli&gtCoca Cola&lt/li&gt<br>
  &lt/ul&gt<br>
  <br>
  &ltp&gtThis is an ordered list:&lt/p&gt<br>
  &ltol&gt<br>
    &ltli&gtCoffee&lt/li&gt<br>
    &ltli&gtTea&lt/li&gt<br>
    &ltli&gtCoca Cola&lt/li&gt<br>
  &lt/ol&gt<br>`,

  `47.With the list-style property: Set the unordered list marker to "img_marker.png", with a backup style of "circle", and display the markers inside the content flow.<br>
  &lt/p&gt<br>
  &ltul&gt<br>
    &ltli&gtCoffee&lt/li&gt<br>
    &ltli&gtTea&lt/li&gt<br>
    &ltli&gtCoca Cola&lt/li&gt<br>
  &lt/ul&gt<br>
  `,

  `48.Remove the bullets/markers from the list items.
  <br>
  &lt/p&gt<br>
  &ltul&gt<br>
    &ltli&gtCoffee&lt/li&gt<br>
    &ltli&gtTea&lt/li&gt<br>
    &ltli&gtCoca Cola&lt/li&gt<br>
  &lt/ul&gt<br>
  `,

  `49.Set the border to "2px solid green" for table, th and td elements.<br>
  &lttable&gt<br>
  &lttr&gt<br>
    &ltth&gtFirstname&lt/th&gt<br>
    &ltth&gtLastname&lt/th&gt<br>
  &lt/tr&gt<br>
  &lttr&gt<br>
    &lttd&gtPeter&lt/td&gt<br>
    &lttd&gtGriffin&lt/td&gt<br>
  &lt/tr&gt<br>
  &lttr&gt<br>
    &lttd&gtLois&lt/td&gt<br>
    &lttd&gtGriffin&lt/td&gt<br>
  &lt/tr&gt<br>
  &lt/table&gt<br>
  `,

  `50.Collapse the table borders into a single border.<br>
  &lttable&gt<br>
  &lttr&gt<br>
    &ltth&gtFirstname&lt/th&gt<br>
    &ltth&gtLastname&lt/th&gt<br>
  &lt/tr&gt<br>
  &lttr&gt<br>
    &lttd&gtPeter&lt/td&gt<br>
    &lttd&gtGriffin&lt/td&gt<br>
  &lt/tr&gt<br>
  &lttr&gt<br>
    &lttd&gtLois&lt/td&gt<br>
    &lttd&gtGriffin&lt/td&gt<br>
  &lt/tr&gt<br>
  &lt/table&gt<br>
  `,

  `51.Set the width of the table to "100%".<br>
  &lttable&gt<br>
  &lttr&gt<br>
    &ltth&gtFirstname&lt/th&gt<br>
    &ltth&gtLastname&lt/th&gt<br>
  &lt/tr&gt<br>
  &lttr&gt<br>
    &lttd&gtPeter&lt/td&gt<br>
    &lttd&gtGriffin&lt/td&gt<br>
  &lt/tr&gt<br>
  &lttr&gt<br>
    &lttd&gtLois&lt/td&gt<br>
    &lttd&gtGriffin&lt/td&gt<br>
  &lt/tr&gt<br>
  &lt/table&gt<br>
  `,

  `52.Set the text alignment in &lttd&gt elements to "right".<br>
  &lttable&gt<br>
  &lttr&gt<br>
    &ltth&gtFirstname&lt/th&gt<br>
    &ltth&gtLastname&lt/th&gt<br>
  &lt/tr&gt<br>
  &lttr&gt<br>
    &lttd&gtPeter&lt/td&gt<br>
    &lttd&gtGriffin&lt/td&gt<br>
  &lt/tr&gt<br>
  &lttr&gt<br>
    &lttd&gtLois&lt/td&gt<br>
    &lttd&gtGriffin&lt/td&gt<br>
  &lt/tr&gt<br>
  &lt/table&gt<br>
  `,

  `53.Set the background color of &ltth&gt elements to "lightblue".<br>
  &lttable&gt<br>
  &lttr&gt<br>
    &ltth&gtFirstname&lt/th&gt<br>
    &ltth&gtLastname&lt/th&gt<br>
  &lt/tr&gt<br>
  &lttr&gt<br>
    &lttd&gtPeter&lt/td&gt<br>
    &lttd&gtGriffin&lt/td&gt<br>
  &lt/tr&gt<br>
  &lttr&gt<br>
    &lttd&gtLois&lt/td&gt<br>
    &lttd&gtGriffin&lt/td&gt<br>
  &lt/tr&gt<br>
  &lt/table&gt<br>`,

  `54.Hide the &lth1&gt element. It should still take up the same space as before.<br>
  &lth1&gtThis is a Heading&lt/h1&gt`,

  `55.Hide the &lth1&gt element. It should not take up any space.<br>
  &lth1&gtThis is a Heading&lt/h1&gt`,

  `56.Display the list items as inline elements.<br>
  &ltul&gt<br>
  &ltli&gtApple&lt/li&gt<br>
  &ltli&gtOrange&lt/li&gt<br>
  &ltli&gtPear&lt/li&gt<br>
  &lt/ul&gt<br>
  `,

  `57.Display the &ltstrong&gt elements as block elements.<br>
  &ltp&gtThis is a &ltstrong&gtparagraph&lt/strong&gt, with some words more &ltstrong&gtimportant&lt/strong&gt than others &lt/p&gt`,

  `58.Position the &lth1&gt element relative to the browser window. 50px from the top, and 50px from the right.`,

  `59.Position the &lth1&gt element 20px left, and 30px down, relative to its normal position.`,

  `60.Position the &lth1&gt element 50px from the left, and 100px from the top, relative to the HTML page.
  `,

  `61.Position the &ltimg&gt element behind the text.<br>
  &lth1&gtThis is a Heading&lt/h1&gt<br>
  &ltp&gtThis is a paragraph.&lt/p&gt<br>
  &ltp&gtThis is another paragraph.&lt/p&gt<br>
  &ltimg src="w3css.gif" width="100" height="140"&gt
  `,

  `62.Position the element with the "topleft" class 30px from the left, and 15px from the top, relative to its container.<br>
  &ltdiv class="container"&gt<br>
  &ltimg src="img_5terre.jpg" alt="Cinque Terre" width="1000" height="300"&g<tb>t
  &ltdiv class="topleft"&gtTop Left&lt/div&gt<br>
  &lt/div&gt
  `,

  `63.Add a scrollbar to the &ltdiv&gt element.<br>
  div {<br>
    background-color: #eee;<br>
    width: 200px;<br>
    height: 70px;<br>
    border: 1px dotted black;<br>
    <br>
  }
  `,

  `64.Specify that the overflowing text in the &ltdiv&gt element should not be visible, not even with scrolling.<br>
  div {<br>
    background-color: lightblue;<br>
    width: 200px;<br>
    height: 200px;<br>
    <br>
  }
  `,

  `65.Add a horizontal scrollbar to &ltdiv&gt.<br>
  div {<br>
    background-color: #eee;<br>
    width: 150px;<br>
    height: 70px;<br>
    border: 1px dotted black;<br>
    white-space: nowrap;<br>
    <br>
  }
  `,

  `66.Center align the &ltdiv&gt element using margins.<br>
  div {<br>
    <br>
    <br>
    width: 300px;<br>
    background-color: #b0e0e6;<br>
  }
  `,

  `67.Position the &ltdiv&gt element all the way to the right using absolute positioning.<br>
  div {<br>
    <br>
    <br>
    width: 300px;<br>
    background-color: #b0e0e6;<br>
  }
  `,

  `68.Change the color of all &ltp&gt elements, that are descendants of &ltdiv&gt elements, to "red".<br>
  &ltdiv&gt<br>
    &ltp&gtThis is a paragraph inside a div element.&lt/p&gt<br>
    &ltp&gtThis is another paragraph inside a div element.&lt/p&gt<br>
    &ltspan&gt&ltp&gtThis a paragraph inside a span element, inside a div element.&lt/p&gt&lt/span&gt<br>
  &lt/div&gt<br>
  &ltp&gtThis is a paragraph, not inside a div element.&lt/p&gt<br>
  &ltp&gtThis is another paragraph, not inside a div element.&lt/p&gt<br>
  `,

  `69.Change the color of all &ltp&gt elements, that are immediate children of &ltdiv&gt elements, to "red".<br>
  &ltdiv&gt<br>
    &ltp&gtThis is a paragraph inside a div element.&lt/p&gt<br>
    &ltp&gtThis is another paragraph inside a div element.&lt/p&gt<br>
    &ltspan&gt&ltp&gtThis a paragraph inside a span element, inside a div element.&lt/p&gt&lt/span&gt<br>
  &lt/div&gt<br>
  `,

  `70.Change the color of &ltp&gt elements, that are the adjacent (immediately following) sibling of a &ltdiv&gt element, to "red".<br>
  &ltdiv&gt<br>
    &ltp&gtThis is a paragraph inside a div element.&lt/p&gt<br>
    &ltp&gtThis is another paragraph inside a div element.&lt/p&gt<br>
    &ltspan&gt&ltp&gtThis a paragraph inside a span element, inside a div element.&lt/p&gt&lt/span&gt<br>
  &lt/div&gt<br>
  `,

  `71.Change the color of &ltp&gt elements, that are the siblings of a &ltdiv&gt element, to "red".<br>
  &ltdiv&gt<br>
    &ltp&gtThis is a paragraph inside a div element.&lt/p&gt<br>
    &ltp&gtThis is another paragraph inside a div element.&lt/p&gt<br>
    &ltspan&gt&ltp&gtThis a paragraph inside a span element, inside a div element.&lt/p&gt&lt/span&gt<br>
  &lt/div&gt<br>
  `,

  `72.Set the background color for visited and unvisited links to "lightblue", and the background color for the hover and active link states to "yellow<tb>t
  &ltp&gt&lta href="https://www.google.com"&gtgoogle.com&lt/a&gt&lt/p&gt`,

  `73.Change the background color, when a user hovers over p elements, with the class "highlight", to "lightblue".<br>
  &ltp&gtThis is a paragraph.&lt/p&gt<br>
  &ltp class="highlight"&gtThis is another paragraph.&lt/p&gt
  `,

  `74.Set the background color of &ltp&gt elements, that are the first child of any element, to "lightblue".<br>
  &ltbody&gt<br>
  &ltp&gtThis is a paragraph.&lt/p&gt<br>
  &ltp&gtThis is also a paragraph&lt/p&gt<br>
  &lt/body&gt<br>
  `,

  `75.Set the background color of &ltinput&gt elements that are in focus (clicked or active), to "lightblue".<br>
  &ltform action="/action_page.php" method="get"&gt<br>
    First name: &ltinput type="text" name="fname"&gt<br>
    Last name: &ltinput type="text" name="lname"&gt<br>
    &ltinput type="submit" value="Submit"&gt<br>
  &lt/form&gt
  `,

  `76.Set text color to red, for the first line of the &ltp&gt element.<br>
  &ltp&gtIn my younger and more vulnerable years my father gave me some advice  <br> that I've been turning over in my mind ever since.&lt/p&gt`,

  `77.Set text color to "red", and the text size to "xx-large", for the first letter of the &ltp&gt element.<br>
  &ltp&gtIn my younger and more vulnerable years my father gave me some advice that I've been turning over in my mind ever since.&lt/p&gt`,

  `78.Insert the image "smiley.gif" before, and after &ltp&gt elements, using the ::before and ::after pseudo-elements.<br>
  &lth1&gtThis is a Heading&lt/h1&gt<br>
  &ltp&gtThis is a paragraph.&lt/p&gt<br>
  &ltp&gtThis is another paragraph.&lt/p&gt<br>
  `,

  `79.Set the transparency/opacity of the &ltimg&gt element to "0.4".<br>
  &ltimg src="klematis.jpg" width="150" height="113"&gt`,

  `80.Remove the transparency/opacity of the &ltimg&gt element when the user hovers over it with the mouse pointer.<br>
  &ltimg src="klematis.jpg" width="150" height="113"&gt<br>
  img {<br>
    opacity: 0.4;<br>
  }`,

  `81.Set the background-color to "lightblue" for elements with a "target" attribute.<br>
  &lta href="https://www.google.com"&gtgoogle.com&lt/a&gt<br>
  &lta href="http://www.disney.com" target="_blank"&gtdisney.com&lt/a&gt<br>
  &lta href="http://www.wikipedia.org" target="_top"&gtwikipedia.org&lt/a&g<tb>t
  `,
  `82.Set a border 5px solid red , around elements with a "title" attribute containing the word "red".<br>
  &ltimg src="klematis_small.jpg" title="two red flowers" width="107" height="90"&gt<br>
  &ltimg src="klematis2_small.jpg" title="purple flower" width="107" height="80"&gt<br>
  &ltimg src="klematis3_small.jpg" title="red flower" width="116" height="90"&gt<br>
  &ltimg src="klematis4_small.jpg" title="two white flowers" width="120" height="90"&gt
  `,

  `83.Set a border 5px solid red, around elements with a "title" attribute starting with "red".<br>
  
  &ltimg src="klematis_small.jpg" title="two red flowers" width="107" height="90"&gt<br>
  &ltimg src="klematis2_small.jpg" title="purple flower" width="107" height="80"&gt<br>
  &ltimg src="klematis3_small.jpg" title="red flower" width="116" height="90"&gt<br>
  &ltimg src="klematis4_small.jpg" title="two white flowers" width="120" height="90"&gt<br>
  `,

  `84.Set a border 5px solid red, around elements with a "title" attribute ending with the word "flower" (not flowers).<br>
  
  &ltimg src="klematis_small.jpg" title="two red flowers" width="107" height="90"&gt<br>
  &ltimg src="klematis2_small.jpg" title="purple flower" width="107" height="80"&gt<br>
  &ltimg src="klematis3_small.jpg" title="red flower" width="116" height="90"&gt<br>
  &ltimg src="klematis4_small.jpg" title="two white flowers" width="120" height="90"&gt<br>
  `,

  `85.Set a border 5px solid red, around elements with a "title" attribute containing the value "flow".<br>
  
  &ltimg src="klematis_small.jpg" title="two red flowers" width="107" height="90"&gt<br>
  &ltimg src="klematis2_small.jpg" title="purple flower" width="107" height="80"&gt<br>
  &ltimg src="klematis3_small.jpg" title="red flower" width="116" height="90"&gt<br>
  &ltimg src="klematis4_small.jpg" title="two white flowers" width="120" height="90"&gt<br>
  `,

  `86.Give the &ltdiv&gt element rounded corners (use the shorthand property and the value "25px").<br>
  &ltdiv&gtThis is a div element. It has some text.&lt/div&gt<br>
  div {<br>
    <br>
    background: #73AD21;<br>
    padding: 20px; <br>
    width: 200px;<br>
  }`,

  `87.Give the &ltdiv&gt element a rounded corner (25px radius) on the bottom left side.<br>
  &ltdiv&gtThis is a div element. It has some text.&lt/div&gt<br>
  div {<br>
    <br>
    background: #73AD21;<br>
    padding: 20px; <br>
    width: 200px;  <br>
  }`,
  `88.Give the &ltdiv&gt element an image border using the image "border.png". Slice the image at 30px and repeat it.<br>
  &ltdiv&gtThis is a div element. It has some text.&lt/div&gt<br>
  div { <br>
    border: 10px solid transparent;<br>
    <br>
  }
  `,

  `89.Give the &ltdiv&gt element an image border using the image "border.png". Slice the image at 30px and stretch it.<br>
  &ltdiv&gtThis is a div element. It has some text.&lt/div&gt<br>
  div { <br>
    border: 10px solid transparent;<br>
    <br>
  }
  `,

  `90.Add a second background image ("img_flwr.gif") to the &ltbody&gt element. Make sure that "img_flwr.gif" is displayed on top of the current background image.<br>
  &lth1&gtThis is a Heading&lt/h1&gt<br>
  &ltp&gtThis is a paragraph.&lt/p&gt<br>
  &ltp&gtThis is another paragraph.&lt/p&gt<br>
  `,

  `91.Change the size of the background image to: width 100px, height 80px<tb>t
  &lth1&gtThis is a Heading&lt/h1&gt<br>
  &ltp&gtThis is a paragraph.&lt/p&gt<br>
  &ltp&gtThis is another paragraph.&lt/p&gt<br>
  body {<br>
    background:url(img_flwr.gif);<br>
    <br>
    background-repeat: no-repeat;<br>
  }
  `,

  `92.Change the size of the background image so it always fits the entire page.<br>
  &lth1&gtThis is a Heading&lt/h1&gt<br>
  &ltp&gtThis is a paragraph.&lt/p&gt<br>
  &ltp&gtThis is another paragraph.&lt/p&gt<br>
  html { <br>
    background: url(img_flower.jpg) <br>
    <br>
  }
  `,

  `93.Specify that the background image position should start from the upper left corner of the content-box.<br>
  &ltdiv&gt<br>
    &lth1&gtThis is a Heading&lt/h1&gt<br>
    &ltp&gtThis is a paragraph.&lt/p&gt<br>
    &ltp&gtThis is another paragraph.&lt/p&gt<br>
  &lt/div&gt<br>
  div { <br>
    border: 10px solid black;<br>
    padding: 35px;<br>
    background: url(img_flwr.gif);<br>
    background-repeat: no-repeat;<br>
    <br>
  }
  `,

  `94.Specify that the "painting area" of the background should be to the outside edge of the padding.<br>
  &ltdiv&gt<br>
    &lth1&gtThis is a Heading&lt/h1&gt<br>
    &ltp&gtThis is a paragraph.&lt/p&gt<br>
    &ltp&gtThis is another paragraph.&lt/p&gt<br>
  &lt/div&gt<br>
  div { <br>
    border: 10px dotted black;<br>
    padding: 35px;<br>
    background: lightblue;<br>
    <br>
  }
  
  `,

  `95.Set the opacity for the background color of the &lth1&gt element to "0.3" by using a RGBA color instead of RGB.<br>
  &lth1&gtThis is a Heading&lt/h1&gt<br>
  h1 {<br>
    background-color: rgb(0,255,0);<br>
  }
  `,

  `96.Set the following HSL color as the background of the &lth1&gt element: Set the Hue to red (0), Saturation to 100%, and lightness to 50%.<br>
  &lth1&gtThis is a Heading&lt/h1&gt`,

  `97.Set the opacity for the background color of the &lth1&gt element to "0.3" by using a HSLA color instead of HSL.<br>
  &lth1&gtThis is a Heading&lt/h1&gt<br>
  h1 {<br>
    background-color: hsl(0,100%,50%);<br>
  }
  `,

  `98.Set the transparency/opacity of the &lth1&gt element to "0.4".<br>
  &lth1&gtThis is a Heading&lt/h1&gt<br>
  h1 {<br>
    background-color: red;<br>
  }`,

  `99.Set a linear gradient background for the &ltdiv&gt element, going from the top to bottom, transitioning from "white" to "green".<br>
  &ltdiv style="height:200px"&gt&lt/div&gt<br>
  `,

  `100.Set a linear gradient background for the &ltdiv&gt element, going from the top left to the bottom right, transitioning from "white" to "green"<tb>t
  &ltdiv style="height:200px"&gt&lt/div&gt`,

  `101.Set a linear gradient background for the &ltdiv&gt element, going at a 70 degree angle, transitioning from "white" to "green".<br>
  &ltdiv style="height:200px"&gt&lt/div&gt<br>
  div {<br>
    background-image: linear-gradient(white, green);<br>
  }
  `,

  `102.Set a linear gradient background for the &ltdiv&gt element, going from the top to bottom, transitioning from "white" to "red" to "blue" to "green"<tb>t
  &ltdiv style="height:200px"&gt&lt/div&gt`,

  `103.Set a linear gradient background for the &ltdiv&gt element, going from the top to bottom, transitioning from "rgba(0,255,0,0.2)" to "rgba(0,255,0,1)".<br>
  &ltdiv style="height:200px"&gt&lt/div&gt`,

  `104.Set a radial gradient background for the &ltdiv&gt element, transitioning from "white" to "green".<br>
  &ltdiv style="height:200px"&gt&lt/div&gt`,

  `105.Set a radial gradient background for the &ltdiv&gt element, with a circle shape, transitioning from "white" to "green".<br>
  &ltdiv style="height:200px"&gt&lt/div&gt<br>
  div {<br>
    background-image: radial-gradient(white, green);<br>
  }
  `,

  `106.Set a "2px" horizontal, and "2px" vertical, text shadow for the &lth1&gt element.<br>
  &lth1&gtThis is a Heading&lt/h1&gt`,

  `107.Change the color of the text shadow to "green", and set a "5px" blur radius.<br>
  &lth1&gtThis is a Heading&lt/h1&gt<br>
  h1 {<br>
    text-shadow: 2px 2px;<br>
  }
  `,

  `108.Add a new shadow (do not remove the current one) to the &lth1&gt element with: no horizontal or vertical shadow, 10px blur, and a red color.<br>
  &lth1&gtThis is a Heading&lt/h1&gt<br>
  h1 {<br>
    text-shadow: 2px 2px 5px green;<br>
  }
  `,

  `109.Set a "10px" horizontal, and "10px" vertical, box shadow for the &ltdiv&gt element.<br>
  &ltdiv style="background-color: lightblue; width: 350px; padding: 15px;"&g<tb>t
  &lth1&gtThis is a Heading&lt/h1&gt<br>
  &ltp&gtThis is a paragraph.&lt/p&gt<br>
  &ltp&gtThis is another paragraph.&lt/p&gt<br>
  &lt/div&gt
  `,

  `110.Change the color of the box shadow to "grey", and set a "5px" blur<tb>t
  &ltdiv style="background-color: lightblue; width: 350px; padding: 15px;&gt <br>
  <tb>
  &lth1&gtThis is a Heading&lt/h1&gt<br>
  &ltp&gtThis is a paragraph.&lt/p&gt<br>
  &ltp&gtThis is another paragraph.&lt/p&gt<br>
  &lt/div&gt<br>
  <br>
  div {<br>
    box-shadow: 10px 10px;<br>
  }
  `,

  `111.Specify that the overflowed content for the &ltp&gt element should be signaled with an ellipsis (...)<br>
  &ltp&gtThis paragraph contains a very long word: supercalifragilisticexpialidocious.&lt/p&gt<br>
  p {<br>
    white-space: nowrap; <br>
    width: 200px; <br>
    border: 1px solid #000000;<br>
    overflow: hidden;<br>
    <br>
  }
  `,

  `112.Specify that text in the &ltp&gt element should wrap, even if it needs to split in the middle of a word.<br>
  &ltp&gtThis paragraph contains a very long word: supercalifragilisticexpialidocious.&lt/p&gt<br>
  p {<br>
    width: 150px; <br>
    border: 1px solid #000000;<br>
    <br>
  }
  `,

  `113.Specify that text in the &ltp&gt element can break between any two letters.<br>
  &ltp&gtThis paragraph contains a very long word: super-cali-fragi-listic-expialidocious.&lt/p&gt<br>
  p {<br>
    width: 150px; <br>
    border: 1px solid #000000;<br>
    <br>
  }
  `,

  `114.Add a web font with the name "sansation" and the URL "sansation_light.woff".<br>
  body {<br>
    font-family: sansation;<br>
    
  }
  `,

  `115.Add @font-face rule for bold characters of the "sansation" font. Use the URL "sansation_bold.woff".<br>
  @font-face {<br>
    font-family: sansation;<br>
    src: url(sansation_light.woff);<br>
    <br>
  }<br>
  <br>
  body {<br>
    font-family: sansation;<br>
  }<br>
  &ltp&gtThis is &ltstrong&gtanother&lt/strong&gt paragraph.&lt/p&gt
  `,

  `116.With the transform property, move the &ltdiv&gt element 100px to the right, and 200px down.<br>
  div {<br>
    width: 100px;<br>
    height: 100px;<br>
    background-color: lightblue;<br>
    border: 1px solid black;<br>
    <br>
  }<br>
  &ltdiv&gt&lt/div&gt<br>
  `,

  `117.With the transform property, rotate the &ltdiv&gt element 45 degrees<tb>t
  div {<br>
    width: 100px;<br>
    height: 100px;<br>
    margin: 50px;<br>
    background-color: lightblue;<br>
    border: 1px solid black;<br>
    <br>
  }
  `,

  `118.With the transform property, change the size of the &ltdiv&gt to half its width, but double its height.
  div {<br>
    width: 100px;<br>
    height: 100px;<br>
    margin: 50px;<br>
    background-color: lightblue;<br>
    border: 1px solid black;<br>
    <br>
  }
  `,

  `119.With the transform property, skew the &ltdiv&gt element 20 degrees along the X-axis, and 30 degrees along the Y-axis.<br>
  div {<br>
    width: 100px;<br>
    height: 100px;<br>
    margin: 50px;<br>
    background-color: lightblue;<br>
    border: 1px solid black;<br>
    <br>
  }
  `,

  `120.With the transform property, rotate the &ltdiv&gt element 150deg around its X-axis.<br>
  div {<br>
    width: 100px;<br>
    height: 100px;<br>
    background-color: lightblue;<br>
    border: 1px solid black;<br>
    <br>
  }<br>
  &ltdiv&gtThis is a div element&lt/div&gt
  `,

  `121.With the transform property, rotate the &ltdiv&gt element 120deg around its Y-axis.<br>
  div {<br>
    width: 100px;<br>
    height: 100px;<br>
    background-color: lightblue;<br>
    border: 1px solid black;<br>
    <br>
  }<br>
  &ltdiv&gtThis is a div element&lt/div&gt<br>
  `,

  `122.With the transform property, rotate the &ltdiv&gt element 90deg around its Z-axis.<br>
  div {<br>
    width: 100px;<br>
    height: 100px;<br>
    background-color: lightblue;<br>
    border: 1px solid black;<br>
    <br>
  }<br>
  &ltdiv&gtThis is a div element&lt/div&gt<br>
  `,

  `123.Add a 2 second transition effect for width changes of the &ltdiv&gt element.<br>
  div {<br>
    width: 100px;<br>
    height: 100px;<br>
    background: red;<br>
    <br>
  }<br>
  div:hover {<br>
    width: 300px;<br>
  }<br>
  &ltdiv&gt&lt/div&gt<br>
  <br>
  &ltp&gtHover over the div element above.&lt/p&gt<br>
  
  `,

  `124.Specify that the transition of the &ltdiv&gt element should have a "ease-in-out" speed curve.<br>
  div {<br>
    width: 100px;<br>
    height: 100px;<br>
    background: red;<br>
    transition: width 2s;<br>
    <br>
  }<br>
  <br>
  div:hover {<br>
    width: 300px;<br>
  }<br>
  &ltdiv&gt&lt/div&gt<br>
  <br>
  &ltp&gtHover over the div element above.&lt/p&gt<br>
  
  `,

  `125.Specify that the transition of the &ltdiv&gt element should have a "0.5" second delay before starting.<br>
  div {<br>
    width: 100px;<br>
    height: 100px;<br>
    background: red;<br>
    transition: width 2s;<br>
    <br>
  }<br>
  <br>
  div:hover {<br>
    width: 300px;<br>
  }<br>
  &ltdiv&gt&lt/div&gt<br>
  <br>
  &ltp&gtHover over the div element above.&lt/p&gt<br>
  `,

  `126.Add a 2 second transition effect for background, and transform changes of the &ltdiv&gt element.<br>
  div {<br>
    width: 100px;<br>
    height: 100px;<br>
    background: red;<br>
    <br>
  }<br>
  <br>
  div:hover {<br>
    background: blue;<br>
    transform: rotate(180deg);<br>
  }<br>
  &ltdiv&gt&lt/div&gt<br>
  <br>
  &ltp&gtHover over the div element above.&lt/p&gt<br>
  `,

  `127.Using the transition shorthand property, specify width changes for the &ltdiv&gt element should have:
  "2" second duration, "ease-in-out" speed curve, and a "0.5" second delay before starting.<br>
  div {<br>
    width: 100px;<br>
    height: 100px;<br>
    background: red;<br>
    <br>
  }<br>
  <br>
  div:hover {<br>
    width: 400px;<br>
  }<br>
  &ltdiv&gt&lt/div&gt<br>
  <br>
  &ltp&gtHover over the div element above.&lt/p&gt<br>
  `,

  `128.Add a 2 second animation for the &ltdiv&gt element, which changes the color from red to blue. Call the animation "example"<br>
  div {<br>
    width: 100px;<br>
    height: 100px;<br>
    background-color: red;<br>
    <br>
    <br>
  }<br>
  <br>
  @keyframes example {<br>
    <br>
  }
  `,

  `129.
  Add the following 5 steps to the animation "example" (using 0%, 25%, 50%, 75%, and 100%):<br>
  1.	0% - Set background color to "red", left position to "0px", top position to: "0px"<br>
  2.	25% - Set background color to "blue", left position to "0px", top position to: "200px"<br>
  3.	50% - Set background color to "green", left position to "200px", top position to: "200px"<br>
  4.	75% - Set background color to "yellow", left position to "200px", top position to: "0px"<br>
  5.	100% - Set background color to "red", left position to "0px", top position to: "0px"<br>
  div {<br>
    width: 100px;<br>
    height: 100px;<br>
    position: relative;<br>
    background-color: red;<br>
    animation-name: example;<br>
    animation-duration: 4s;<br>
  }<br>
  <br>
  @keyframes example {<br>
  }
  
  `,

  `130.Specify that the animation of the &ltdiv&gt element should have a "1" second delay before starting.<br>
  div {<br>
    width: 100px;<br>
    height: 100px;<br>
    position: relative;<br>
    background-color: red;<br>
    animation-name: example;<br>
    animation-duration: 2s;<br>
    <br>
  }<br>
  <br>
  @keyframes example {<br>
    0%   {background-color: red; left:0px;}<br>
    50%  {background-color: yellow; left:200px;}<br>
    100% {background-color: red; left:0px;}<br>
  }
  
  `,

  `131.Specify that the animation of the &ltdiv&gt element should continue to loop for ever.<br>
  div {<br>
    width: 100px;<br>
    height: 100px;<br>
    position: relative;<br>
    background-color: red;<br>
    animation-name: example;<br>
    animation-duration: 2s;<br>
    <br>
  }<br>
  <br>
  @keyframes example {<br>
    0%   {background-color: red; left:0px;}<br>
    50%  {background-color: yellow; left:200px;}<br>
    100% {background-color: red; left:0px;}<br>
  }
  `,

  `132.Specify that the animation of the &ltdiv&gt element should alternate between running forwards and backwards.<br>
  div {<br>
    width: 100px;<br>
    height: 100px;<br>
    position: relative;<br>
    background-color: red;<br>
    animation-name: example;<br>
    animation-duration: 4s;<br>
    animation-iteration-count: infinite;  <br>
    <br>
  }<br>
  <br>
  @keyframes example {<br>
    0%   {background-color: red; left:0px; top:0px;}<br>
    25%  {background-color: blue; left:0px; top:200px;}<br>
    50%  {background-color: green; left:200px; top:200px;}<br>
    75%  {background-color: yellow; left:200px; top:0px;}<br>
    100% {background-color: red; left:0px; top:0px;}<br>
  }
  `,

  `133.Specify that the animation of the &ltdiv&gt element should have a "ease-in-out" speed curve.<br>
  div {<br>
    width: 100px;<br>
    height: 100px;<br>
    position: relative;<br>
    background-color: red;<br>
    animation-name: example;<br>
    animation-duration: 4s;<br>
    <br>
  }<br>
  <br>
  @keyframes example {<br>
    0%   {background-color: red; left:0px;}<br>
    50%  {background-color: yellow; left:200px;}<br>
    100% {background-color: red; left:0px;}<br>
  }
  `
];


/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return htmlAnswerArr; });
var htmlAnswerArr = [
  { A0: '<p title="tooltip">Answer</p>'.replace(/\s+/g, "") },

  { A1: '<img src="answer.jpg" width="250" height="400">'.replace(/\s+/g, "") },

  {
    A2: '<a href="https://www.google.com">This is a link</a>'.replace(
      /\s+/g,
      ""
    )
  },

  {
    A3: '<a href="http://www.wwf.org.uk">This is a link</a>'.replace(/\s+/g, "")
  },

  {
    A4: '<img src="test.jpg" alt="answer.com" width="135" height="50">'.replace(
      /\s+/g,
      ""
    )
  },

  { A5: "<h1>London</h1>".replace(/\s+/g, "") },

  { A6: "<h1>London</h1> <hr> <p>Test</p>".replace(/\s+/g, "") },

  {
    A7: "<h1>Hello</h1> <h2>Hello</h2> <h3>Hello</h3> <h4>Hello</h4> <h5>Hello</h5> <h6>Hello</h6>".replace(
      /\s+/g,
      ""
    )
  },

  {
    A8: "<h1>Universal Studios Presents</h1> <h2>Jurassic Park</h2> <h3>About</h3> <p>On the Island of Isla Nublar, a new park has been built: Jurassic Park is a theme park of cloned dinosaurs!!</p>".replace(
      /\s+/g,
      ""
    )
  },

  { A9: "<p>Hello World!</p>".replace(/\s+/g, "") },

  {
    A10: "<p> My Bonnie lies over the ocean.<br> My Bonnie lies over the sea.<br> My Bonnie lies over the ocean.<br> Oh, bring back my Bonnie to me.</p>".replace(
      /\s+/g,
      ""
    )
  },

  {
    A11: "<pre> My Bonnie lies over the ocean.<br> My Bonnie lies over the sea.<br> My Bonnie lies over the ocean.<br> Oh, bring back my Bonnie to me.</pre>".replace(
      /\s+/g,
      ""
    )
  },

  { A12: '<p style="color:blue">This is a paragraph.</p>'.replace(/\s+/g, "") },

  {
    A13: '<p style="font-family:courier">This is a paragraph.</p>'.replace(
      /\s+/g,
      ""
    )
  },

  {
    A14: '<p style="text-align:center">This is a paragraph.</p>'.replace(
      /\s+/g,
      ""
    )
  },

  {
    A15: '<p style="font-size:50px">This is a paragraph.</p>'.replace(
      /\s+/g,
      ""
    )
  },

  {
    A16: '<body style="background-color:yellow"><p>This is a paragraph.</p></body>'.replace(
      /\s+/g,
      ""
    )
  },

  {
    A17: '<html><body style="text-align:center"><h1>This is a heading</h1><h2>This is also a heading</h2><p>This is a paragraph.</p><p>This is also paragraph.</p></body></html>'.replace(
      /\s+/g,
      ""
    )
  },

  {
    A18: "<p>This mission is to stop the <strong> degradation </strong> of our planets natural environment.</p>".replace(
      /\s+/g,
      ""
    )
  },

  {
    A19: "<p>Tokyo is the capital of Japan, the center of the Greater Tokyo Area, and the most populous <em>metropolitan</em> area in the world.</p>".replace(
      /\s+/g,
      ""
    )
  },

  { A20: "<p>HTML is <mark>FUN</mark> to learn!</p>".replace(/\s+/g, "") },

  {
    A21: "<p>H<sub>2</sub>O is the scientific term for water.</p>".replace(
      /\s+/g,
      ""
    )
  },

  { A22: "<p>I am so <q>cool</q>.</p>".replace(/\s+/g, "") },

  {
    A23: '<blockquote cite="http://www.worldwildlife.org/who/index.html"> For 50 years, WWF has been protecting the future of nature. </blockquote>'.replace(
      /\s+/g,
      ""
    )
  },

  { A24: ' <bdo dir="rtl">What a beautiful day!</bdo>'.replace(/\s+/g, "") },

  {
    A25: '<p>The <abbr title="World Health Organization">WHO</abbr> was founded in 1948.</p>'.replace(
      /\s+/g,
      ""
    )
  },

  {
    A26: "<!-- Do not display this text in the browser -->".replace(/\s+/g, "")
  },

  {
    A27: "<style> body {background-color:yellow;}</style>".replace(/\s+/g, "")
  },

  {
    A28: '<p id="special">I want to be a special paragraph!</p>'.replace(
      /\s+/g,
      ""
    )
  },

  {
    A29: '<p class="intro">This is a paragraph.</p><p class="intro">This is a paragraph.</p>'.replace(
      /\s+/g,
      ""
    )
  },

  {
    A30: '<a href="https://www.google.com">Visit our HTML tutorial.</a>'.replace(
      /\s+/g,
      ""
    )
  },

  { A31: '<a href="html_images.asp">HTML Images</a>'.replace(/\s+/g, "") },

  {
    A32: '<a href="html_images.asp" target="_blank">HTML Images</a>'.replace(
      /\s+/g,
      ""
    )
  },

  {
    A33: '<a href="html_images.asp" target="_blank" style="text-decoration:none">HTML Images</a>'.replace(
      /\s+/g,
      ""
    )
  },

  {
    A34: '<a href="https://www.google.com"> <img src="smiley.gif" alt="HTML tutorial" style="width:42px;height:42px;border:0"></a>'.replace(
      /\s+/g,
      ""
    )
  },

  {
    A35: '<img src="programming.gif" alt="Computer Man" width="96" height="96">'.replace(
      /\s+/g,
      ""
    )
  },

  {
    A36: '<img src="html5.gif" alt="HTML5 Icon" style="width:256px;height:256px;">'.replace(
      /\s+/g,
      ""
    )
  },

  {
    A37: '<img src="smiley.gif" alt="Smiley face" style="float:left;width:42px;height:42px;">'.replace(
      /\s+/g,
      ""
    )
  },

  {
    A38: '<img src="pic_trulli.jpg" style="width:304px;height:228px;">'.replace(
      /\s+/g,
      ""
    )
  },

  {
    A39: '<img src="google.jpg" alt="google.com" width="135" height="50">'.replace(
      /\s+/g,
      ""
    )
  },

  { A40: "<caption>Names</caption>".replace(/\s+/g, "") },

  {
    A41: "<dl> <dt>Coffee</dt> <dd>- black hot drink</dd> <dt>Milk</dt> <dd>- white cold drink</dd> </dl>".replace(
      /\s+/g,
      ""
    )
  },
  {
    A42: '<input type="text" name="firstname" value="John" disabled>'.replace(
      /\s+/g,
      ""
    )
  },

  { A43: '<input type="button" value="OK">'.replace(/\s+/g, "") },

  {
    A44: '<form> <input type="radio" name="gender" value="male"> Male <input type="radio" name="gender" value="female"> Female </form>'.replace(
      /\s+/g,
      ""
    )
  },

  {
    A45: '<select name="cars"> <option value="volvo">Volvo</option> <option value="ford">Ford</option> <option value="fiat">Fiat</option> <option value="audi">Audi</option> </select>'.replace(
      /\s+/g,
      ""
    )
  },

  { A46: '<textarea name="note"></textarea>'.replace(/\s+/g, "") },

  {
    A47: '<button type="button" onclick="alert("Hello World!")"> Click Me!</button>'.replace(
      /\s+/g,
      ""
    )
  },

  { A48: '<input type="text">'.replace(/\s+/g, "") },

  { A49: '<input type="submit">'.replace(/\s+/g, "") },

  {
    A50: '<input type="text" name="firstname" value="John">'.replace(/\s+/g, "")
  },

  {
    A51: '<input type="text" name="firstname" value="John" size="40">'.replace(
      /\s+/g,
      ""
    )
  },

  {
    A52: '<input type="text" name="fname" placeholder="First name">'.replace(
      /\s+/g,
      ""
    )
  },

  { A53: "&ltp&gtThis is a paragraph.&lt/p&gt".replace(/\s+/g, "") }
];


/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return htmlQuestionArr; });
var htmlQuestionArr = [
  `0.Add a tooltip to the paragraph  with the text "tooltip".<br>
&ltp&gtAnswer&lt/p&gt`,

  `1.Change the size of the image to 250 pixels wide and 400 pixels tall.<br>
&ltimg src="answer.jpg"&gt`,

  `2.Transform the text "This is a link" into a link that goes to "https://www.google.com".`,

  `3.Change the destination of the link to "www.wwf.org.uk".<br>
&lta href="https://www.google.com"&gtThis is a link&lt/a&gt`,

  `4.The image does not exist. Specify the alternate text "answer.com" for the image.<br>
 &ltimg src="test.jpg" width="135" height="50"&gt`,

  `5.Add a heading with the text "London".`,

  `6.Add a horizontal rule between the heading "London" and the paragraph "Test".`,

  `7.Add six headings to the document with the text "Hello". Start with the most important heading and end with the least important heading.`,

  `8.Mark up the following text with appropriate tags. "Universal Studios Presents" is the most important content. "Jurassic Park" is the next most important content.  "About" is of lesser importance than Jurassic Park.  The last sentence is just a paragraph.`,

  `9.Add a paragraph the text "Hello World!".`,

  `10.Fix the display of the poem . Display the poem over 4 lines using &ltbr&gt elements.<br>
&ltp&gt My Bonnie lies over the ocean. My Bonnie lies over the sea. My Bonnie lies over the ocean. Oh, bring back my Bonnie to me.&lt/p&gt`,

  `11.Fix the display of this poem. Display the poem as suggested in the code using &ltpre&gt.<br>
 &ltp&gt My Bonnie lies over the ocean.&ltbr&gt<br>
  My Bonnie lies over the sea.&ltbr&gt<br>
  My Bonnie lies over the ocean.&ltbr&gt<br>
  Oh, bring back my Bonnie to me.&lt/p&gt`,

  `12.Change the text color of the paragraph to "blue".<br>
&ltp style="color:red"&gtThis is a paragraph.&lt/p&gt`,

  `13.Change the font of the paragraph to "courier".<br>
&ltp&gtThis is a paragraph.&lt/p&gt`,

  `14.Center align the paragraph.<br>
&ltp&gtThis is a paragraph.&lt/p&gt`,

  `15.Change the text size of the paragraph to 50px.<br>
&ltp&gtThis is a paragraph.&lt/p&gt`,

  `16.Change the background color of the page to yellow.<br>
&ltbody&gt<br>
&ltp&gtThis is a paragraph.&lt/p&gt<br>
&lt/body&gt`,

  `17.Center align all content on the page.<br>
&lthtml&gt<br>
&ltbody&gt<br>
&lth1&gtThis is a heading&lt/h1&gt<br>
&lth2&gtThis is also a heading&lt/h2&gt<br>
&ltp&gtThis is a paragraph.&lt/p&gt<br>
&ltp&gtThis is also paragraph.&lt/p&gt<br>
&lt/body&gt<br>
&lt/html&gt`,

  `18.Add extra importance to the word "degradation" in the paragraph below.<br>
&ltp&gtThis mission is to stop the degradation of our planets natural environment.&lt/p&gt`,

  `19.Emphasize the word "metropolitan" in the text below.<br>
 &ltp&gt<br>Tokyo is the capital of Japan, <br> 
 the center of the Greater Tokyo Area,<br>
 and the most populous metropolitan area in the world.<br>
 &lt/p&gt `,

  `20.Highlight the word "FUN" in the text below.<br>
&ltp&gtHTML is FUN to learn!&lt/p&gt`,

  `21.Apply subscript formatting to the number "2" in the text below.<br>
&ltp&gtH2O is the scientific term for water.&lt/p&gt`,

  `22.Use an HTML element to add quotation marks around the letters "cool".<br>
&ltp&gtI am so cool.&lt/p&gt`,

  `23.The text should be a quoted section. Add the proper HTML element to it, and specify that it is quoted from the following URL: http://www.worldwildlife.org/who/index.html. For 50 years, WWF has been protecting the future of nature. `,

  `24.Make the text go right-to-left. What a beautiful day!`,

  `25.The letters "WHO" in the text is an abbreviation of "World Health Organization". <br> Use an HTML element to provide the specified abbreviation of "WHO". <br> &ltp&gtThe WHO was founded in 1948.&lt/p&gt`,

  `26.Add comment tags around the "Do not display this text in the browser" text.`,

  `27.Change the background color of the page  to yellow.<br>
&ltstyle&gt body {background-color:lightgrey;}&lt/style&gt`,

  `28.Add an id with the value "special" to the paragraph.<br>
&ltp&gtI want to be a special paragraph!&lt/p&gt`,

  `29.Add the "intro" class to &ltp&gt elements.<br>
&ltp&gtThis is a paragraph.&lt/p&gt<br>
&ltp&gtThis is a paragraph.&lt/p&gt`,

  `30.Make the link go to https://www.google.com.<br>
 &lta&gtVisit our HTML tutorial.&lt/a&gt`,

  `31.Change the link to a local link.<br>
&lta href="https://www.google.com/html/html_images.asp"&gtHTML Images&lt/a&gt`,

  `32.Change the link to open in a new window.<br>
&lta href="html_images.asp"&gtHTML Images&lt/a&gt`,

  `33.Remove the underline from the link.<br>
&lta href="html_images.asp" target="_blank"&gtHTML Images&lt/a&gt`,

  `34.Add a link to the image (make it go "https://www.google.com" if you click on it).<br>
&ltimg src="smiley.gif" alt="HTML tutorial" style="width:42px;height:42px;border:0"&gt`,

  `35.Double the width and height of the image.<br>
&ltimg src="programming.gif" alt="Computer Man" width="48" height="48"&gt`,

  `36.Double the width and height of the image.<br>
&ltimg src="html5.gif" alt="HTML5 Icon" style="width:128px;height:128px;"&gt`,

  `37.Make the image float to the left of the paragraph.<br>
&ltp&gt &ltimg src="smiley.gif" alt="Smiley face" style="width:42px;height:42px;"&gt<br>
A paragraph with an image.<br>
A paragraph with an image.<br>
A paragraph with an image.<br>
A paragraph with an image.<br>
A paragraph with an image.<br>
A paragraph with an image.<br>
&lt/p&gt`,

  `38.Change the image address to "pic_trulli.jpg".<br>
&ltimg src="img_the_scream.jpg" style="width:304px;height:228px;"&gt `,

  `39.The image is unavailable on purpose. Specify an alternate text of "google.com" to be used,so it can be read by screen readers.<br>
&ltimg src="google.jpg" width="135" height="50"&gt`,

  `40.Add a caption with the letters "Names" `,

  `41.Complete the description list below. Each name should have a description.&ltdl&gt dt&gtCoffee&lt/dt&gt &ltdt&gtMilk&lt/dt&gt &lt/dl&gt`,

  `42.Disable the input field.&ltinput type="text" name="firstname" value="John"&gt`,

  `43.Make a HTML form containing an &ltinput&gt element with type="button", and value="OK".`,

  `44.Add 2 radio buttons to the form. One for "male", and one for "female", both with name="gender".`,

  `45.Add a drop down list with name="cars" to the form. <br>
Include the following options: "volvo", "ford", "fiat", and "audi".`,

  `46.Add a text area with name="note" to the form.`,

  `47.Set the display text of the &ltbutton&gt to: "Click Me!".`,

  `48.Create an input field for text.`,

  `49.Create a submit button.`,

  `50.Specify an initial value of "John" for the input field.<br>
&ltinput type="text" name="firstname"&gt`,

  `51.Change the size of the input field to display up to 40 characters.<br>
&ltinput type="text" name="firstname" value="John"&gt`,

  `52.Add the text "First name" as a hint to the user of what can be entered in the input field.<br>
&ltinput type="text" name="fname"&gt`,

  `53.Display HTML code in html. <br>
&ltp&gtThis is a paragraph.&lt/p&gt`
];


/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return javascriptAnswerArr; });
var javascriptAnswerArr = [
  {
    A0: `var myName;
  `.replace(/\s+/g, "")
  },

  {
    A1: `var a = 7;
var b = a;`.replace(/\s+/g, "")
  },

  { A2: `var a = 9;`.replace(/\s+/g, "") },

  {
    A3: `var a = 5;
var b = 10;
var c = "I am a";
a = a + 1;
b = b + 5;
c = c + " String!";
`.replace(/\s+/g, "")
  },

  {
    A4: `
var studlyCapVar ;
var properCamelCase;
var titleCaseOver;

var studlyCapVar = 10;
var properCamelCase = "A String";
var titleCaseOver = 9000;`.replace(/\s+/g, "")
  },

  {
    A5: `var sum = 10 + 10;
`.replace(/\s+/g, "")
  },

  {
    A6: `var difference = 45 - 33;

`.replace(/\s+/g, "")
  },

  {
    A7: `var product = 8 * 10;

`.replace(/\s+/g, "")
  },

  {
    A8: `var quotient = 66 / 33;

`.replace(/\s+/g, "")
  },

  {
    A9: `var myVar = 87;
myVar++;`.replace(/\s+/g, "")
  },

  {
    A10: `var myVar = 11;
myVar--;`.replace(/\s+/g, "")
  },

  { A11: `var myDecimal = 5.7;`.replace(/\s+/g, "") },

  { A12: `var product = 2.0 * 2.5;`.replace(/\s+/g, "") },

  { A13: `var quotient = 4.4 / 2.0;`.replace(/\s+/g, "") },

  { A14: `var remainder = 11 % 3;`.replace(/\s+/g, "") },

  {
    A15: `var a = 3;
var b = 17;
var c = 12;

a +=12;
b += 9;
c +=7;`.replace(/\s+/g, "")
  },

  {
    A16: `var a = 11;
var b = 9;
var c = 3;

a -= 6;
b -= 15;
c -= 1;`.replace(/\s+/g, "")
  },

  {
    A17: `var a = 5;
var b = 12;
var c = 4.6;

a *=5;
b *= 3;
c *=10;
`.replace(/\s+/g, "")
  },

  {
    A18: `var a = 48;
var b = 108;
var c = 33;

a /=12;
b /=4;
c /=11;
`.replace(/\s+/g, "")
  },

  {
    A19: `var myFirstName = "first name";
var myLastName = "last name";
`.replace(/\s+/g, "")
  },

  {
    A20: `var myStr = "I am a \"double quoted\" string inside \"double quotes\".";`.replace(
      /\s+/g,
      ""
    )
  },

  {
    A21: `var myStr = '<a href="http://www.example.com" target="_blank">Link</a>';`.replace(
      /\s+/g,
      ""
    )
  },

  {
    A22: `var myStr = "\'FirstLine\n\t\SecondLine\nThirdLine";`.replace(
      /\s+/g,
      ""
    )
  },

  {
    A23: `var myStr="This is the start. " + "This is the end.";`.replace(
      /\s+/g,
      ""
    )
  },

  {
    A24: `var myStr = "This is the first sentence. ";
myStr += "This is the second sentence.";`.replace(/\s+/g, "")
  },

  {
    A25: `var myName  = "your name";
var myStr = "My name is " + myName +  " and I am well!";`.replace(/\s+/g, "")
  },

  {
    A26: `var someAdjective = "awesome!";
var myStr = "Learning to code is ";
 myStr +=someAdjective; `.replace(/\s+/g, "")
  },

  {
    A27: `var lastNameLength = 0;
var lastName = "Lovelace";
lastNameLength = lastName.length;`.replace(/\s+/g, "")
  },

  {
    A28: `var firstLetterOfLastName = "";
var lastName = "Lovelace";
firstLetterOfLastName = lastName[0];`.replace(/\s+/g, "")
  },

  {
    A29: `
var myStr = "Jello World";
myStr = "Hello World";`.replace(/\s+/g, "")
  },

  {
    A30: `var lastName = "Lovelace";
var thirdLetterOfLastName = lastName[2];`.replace(/\s+/g, "")
  },

  {
    A31: `var lastName = "Lovelace";
var lastLetterOfLastName = lastName[lastName.length - 1];`.replace(/\s+/g, "")
  },

  {
    A32: `var lastName = "Lovelace";
var secondToLastLetterOfLastName = lastName[lastName.length - 2];`.replace(
      /\s+/g,
      ""
    )
  },

  {
    A33: `function wordBlanks(myNoun, myAdjective, myVerb, myAdverb) {
  var result = "";
  result+= "My "+myAdjective+" "+myNoun+" "+myVerb+" very "+myAdverb+".";
return result;
}
wordBlanks("dog", "big", "ran", "quickly");`.replace(/\s+/g, "")
  },

  { A34: `var myArray = ["test", 0];`.replace(/\s+/g, "") },

  {
    A35: `var myArray = [["the universe", 42], ["everything", 101010]];`.replace(
      /\s+/g,
      ""
    )
  },

  {
    A36: `var myArray = [50,60,70];
var myData = myArray[0];`.replace(/\s+/g, "")
  },

  {
    A37: `var myArray = [18,64,99];
myArray[0] = 45;`.replace(/\s+/g, "")
  },

  {
    A38: `var myArray = [[1,2,3], [4,5,6], [7,8,9], [[10,11,12], 13, 14]];
var myData = myArray[2][1];`.replace(/\s+/g, "")
  },

  {
    A39: `var myArray = [["John", 23], ["cat", 2]];
myArray.push(["dog", 3]);`.replace(/\s+/g, "")
  },

  {
    A40: `var myArray = [["John", 23], ["cat", 2]];
var removedFromMyArray = myArray.pop();`.replace(/\s+/g, "")
  },

  {
    A41: `var myArray = [["John", 23], ["dog", 3]];
var removedFromMyArray = myArray.shift();`.replace(/\s+/g, "")
  },

  {
    A42: `var myArray = [["John", 23], ["dog", 3]];
myArray.shift();
myArray.unshift( ["Paul",35]);`.replace(/\s+/g, "")
  },

  {
    A43: `var myList = [["Canned Beans", 3],["Milk Galon", 1],["Cereal", 2],["Toilet Paper", 12],["Sack of Rice", 1]];`.replace(
      /\s+/g,
      ""
    )
  },

  {
    A44: `function reusableFunction() {
  console.log("Hi World");
}

reusableFunction();`.replace(/\s+/g, "")
  },

  {
    A45: `function functionWithArgs(a, b) {
  console.log(a + b);
}
functionWithArgs(10, 5);`.replace(/\s+/g, "")
  },

  {
    A46: `
var myGlobal = 10;

function fun1() {
  oopsGlobal = 5;
  
}

function fun2() {
  var output = "";
  if (typeof myGlobal != "undefined") {
    output += "myGlobal: " + myGlobal;
  }
  if (typeof oopsGlobal != "undefined") {
    output += " oopsGlobal: " + oopsGlobal;
  }
  console.log(output);
}`.replace(/\s+/g, "")
  },

  {
    A47: `function myLocalScope() {
  var myVar;
  console.log(myVar);
}
myLocalScope();`.replace(/\s+/g, "")
  },

  {
    A48: `var outerWear = "T-Shirt";
function myOutfit() {
  var outerWear = "sweater";
  return outerWear;
}
myOutfit();`.replace(/\s+/g, "")
  },

  {
    A49: `function timesFive(num) {
  return num * 5;
}`.replace(/\s+/g, "")
  },

  {
    A50: `function addFive() {
  sum += 5;
}`.replace(/\s+/g, "")
  },

  {
    A51: `var processed = 0;

function processArg(num) {
  return (num + 3) / 5;
}
processed = processArg(7);`.replace(/\s+/g, "")
  },
  {
    A52: `function nextInLine(arr, item) {
  arr.push(item);
  var removed = arr.shift();
  return removed;  
}
var testArr = [1,2,3,4,5];

console.log("Before: " + JSON.stringify(testArr));
console.log(nextInLine(testArr, 6));
console.log("After: " + JSON.stringify(testArr));`.replace(/\s+/g, "")
  },

  {
    A53: `function welcomeToBooleans() {
  return true; 
  }`.replace(/\s+/g, "")
  },

  {
    A54: `
function trueOrFalse(wasThatTrue) {
  if (wasThatTrue) 
   {
    return "Yes, that was true";
    }
  return "No, that was false";
 
 }`.replace(/\s+/g, "")
  },

  {
    A55: `function testEqual(val) {
  if (val == 12) { 
    return "Equal";
  }
  return "Not Equal";
}
testEqual(10);`.replace(/\s+/g, "")
  },

  {
    A56: `
function testStrict(val) {
  if (val === 7) { 
    return "Equal";
  }
  return "Not Equal";
}
testStrict(10);`.replace(/\s+/g, "")
  },

  {
    A57: `
function compareEquality(a, b) {
	if (a === b) {
		return  "Equal";
	}
	return  "Not Equal";
}
compareEquality(10, "10");`.replace(/\s+/g, "")
  },

  {
    A58: `function testNotEqual(val) {
  if (val != 99) 
    return "Not Equal";
  
  return "Equal";
}`.replace(/\s+/g, "")
  },

  {
    A59: `function testStrictNotEqual(val) {
  if (val !== 17) {
    return "Not Equal";
  }
  return "Equal";
}
testStrictNotEqual(10);`.replace(/\s+/g, "")
  },

  {
    A60: `function testGreaterThan(val) {
  if (val > 100) { 
    return "Over 100";
  }

  if (val > 10) { 
    return "Over 10";
  }

  return "10 or Under";
}

// Change this value to test
testGreaterThan(10);`.replace(/\s+/g, "")
  },

  {
    A61: `function testGreaterOrEqual(val) {
  if (val >= 20){
    return "20 or Over";
  }
  if (val >= 10){
    return "10 or Over";
  }
  return "Less than 10";
}`.replace(/\s+/g, "")
  },

  {
    A62: `function testLessThan(val) {
  if (val < 25){
    return "Under 25";
  }
  if (val < 55){
    return "Under 55";
  }
  return "55 or Over";
}`.replace(/\s+/g, "")
  },

  {
    A63: `function testLessOrEqual(val) {
  if (val <= 12){
    return "Smaller Than or Equal to 12";
  }
  if (val <= 24){
    return "Smaller Than or Equal to 24";
  }
  return "More Than 24";
}`.replace(/\s+/g, "")
  },

  {
    A64: `function testLogicalAnd(val) {
  if (val <= 50 && val >= 25) {
      return "Yes";
  }
  return "No";
}
testLogicalAnd(10);`.replace(/\s+/g, "")
  },

  {
    A65: `function testLogicalOr(val) {
if ( val < 10 || val > 20 ) {
    return "Outside";
}
  return "Inside";
}
testLogicalOr(15);`.replace(/\s+/g, "")
  },

  {
    A66: `function testElse(val) {
  var result = "";
  if (val > 5) {
  return "Bigger than 5";
  
  } else {
  return "5 or Smaller";
  }
  return result;
  }
  testElse(4);`.replace(/\s+/g, "")
  },

  {
    A67: `function testElseIf(val) {
  if (val > 10) {
    return "Greater than 10";
  }
  else if (val < 5) {
    return "Smaller than 5";
  }
  else {
  return "Between 5 and 10";
  }
}
testElseIf(7);`.replace(/\s+/g, "")
  },

  {
    A68: `function orderMyLogic(val) {
  if (val < 5) {
  return "Less than 5";
  } else if (val < 10) {
  return "Less than 10";
  } else {
  return "Greater than or equal to 10";
  }
  }`.replace(/\s+/g, "")
  },

  {
    A69: `function testSize(num) {
  if (num < 5){
    return "Tiny";
  }
  else if (num < 10) {
    return "Small";
  }
  else if (num < 15){
    return "Medium";
  }
  else if (num < 20){
    return "Large";
  }
  else {
    return "Huge";
  }
}
testSize(7);`.replace(/\s+/g, "")
  },

  {
    A70: `function golfScore(par, strokes) {
  if (strokes == 1){
    return "Hole-in-one!";
  } else if (strokes <= par -2){
    return "Eagle";
  } else if (strokes == par -1) {
    return "Birdie";
  } else if (strokes == par) {
    return "Par";
  } else if (strokes == par +1) {
    return "Bogey";
  } else if (strokes == par +2) {
    return "Double Bogey";
  } else {
    return "Go Home!";
  }
}
golfScore(5, 4);`.replace(/\s+/g, "")
  },

  {
    A71: `function caseInSwitch(val) {
  var answer = "";
  switch(val) {
    case 1:
      return "alpha";
      break;
    case 2:
      return "beta";
      break;
    case 3:
      return "gamma";
      break;
    case 4:
      return "delta";
      break;
  }
  return answer;  
}
caseInSwitch(1);`.replace(/\s+/g, "")
  },

  {
    A72: `function switchOfStuff(val) {
  var answer = "";
  
  switch(val){
    case 'a': answer = 'apple'; 
    break;
    case 'b': answer = 'bird'; 
    break;
    case 'c': answer = 'cat'; 
    break;
    default: answer = 'stuff';
  }
  
  return answer;  
}
switchOfStuff(1);
`.replace(/\s+/g, "")
  },

  {
    A73: `function sequentialSizes(val) {
  var answer = "";
  switch(val){
    case 1: case 2: case 3:
      answer = "Low";
      break;
    case 4: case 5: case 6:
      answer = "Mid";
      break;
    case 7: case 8: case 9:
      answer = "High";
  } 
  return answer;  
}
sequentialSizes(1);`.replace(/\s+/g, "")
  },

  {
    A74: `function chainToSwitch(val) {
  var answer = "";

  switch(val) {
    case "bob":
      answer = "Marley";
      break;
    case 42:
      answer = "The Answer";
      break;
    case 1:
      answer = "There is no #1";
      break;
    case 99:
      answer = "Missed me by this much!";
      break;
    case 7:
      answer = "Ate Nine";
  }
  return answer;
}
chainToSwitch(7);`.replace(/\s+/g, "")
  },

  {
    A75: `function isLess(a, b) {
  return a <= b;
}
isLess(10, 15);`.replace(/\s+/g, "")
  },

  {
    A76: `
function abTest(a, b) {
  if (a < 0 || b < 0) return undefined;

return Math.round(Math.pow(Math.sqrt(a) + Math.sqrt(b), 2));
}
abTest(2,2);`.replace(/\s+/g, "")
  },

  {
    A77: `var count = 0;

function cc(card) {
  var regex = /[JQKA]/;
  if (card > 1 && card < 7){count++;}
  else if (card === 10 || String(card).match(regex)){count--;}

  if (count > 0) return count + " Bet";
  return count + " Hold";

}
cc(2); cc(3); cc(7); cc('K'); cc('A');`.replace(/\s+/g, "")
  },

  {
    A78: `
var myDog = {
    "name": "Camper",
  "legs": 4,
  "tails": 1,
  "friends": ["everything!"]
};`.replace(/\s+/g, "")
  },

  {
    A79: `var testObj = {
  "hat": "ballcap",
  "shirt": "jersey",
  "shoes": "cleats"
};
var hatValue = testObj.hat;  
var shirtValue = testObj.shirt; `.replace(/\s+/g, "")
  },

  {
    A80: `var testObj = {
  "an entree": "hamburger",
  "my side": "veggies",
  "the drink": "water"
};
var entreeValue = testObj["an entree"];  
var drinkValue = testObj["the drink"];`.replace(/\s+/g, "")
  },

  {
    A81: `
var testObj = {
  12: "Namath",
  16: "Montana",
  19: "Unitas"
};
var playerNumber = 16; 
var player = testObj[playerNumber];   `.replace(/\s+/g, "")
  },

  {
    A82: `
var myDog = {
  "name": "Coder",
  "legs": 4,
  "tails": 1,
  "friends": ["freeCodeCamp Campers"]
};
myDog.name = "Happy Coder";`.replace(/\s+/g, "")
  },

  {
    A83: `var myDog = {
  "name": "Happy Coder",
  "legs": 4,
  "tails": 1,
  "friends": ["freeCodeCamp Campers"]
};
myDog.bark = "woof";`.replace(/\s+/g, "")
  },

  {
    A84: `
var myDog = {
  "name": "Happy Coder",
  "legs": 4,
  "tails": 1,
  "friends": ["freeCodeCamp Campers"],
  "bark": "woof"
};
delete myDog.tails;
`.replace(/\s+/g, "")
  },

  {
    A85: `function phoneticLookup(val) {
  var result ="";
  
  var lookup= {
  
    "alpha":"Adams",
  
    "bravo": "Boston",
  
    "charlie": "Chicago",
  
    "delta":"Denver",
  
   "echo": "Easy",
  
    "foxtrot": "Frank",
  };
  
  result = lookup[val];
  
  return result;
  }
  
  phoneticLookup("charlie");`.replace(/\s+/g, "")
  },

  {
    A86: `
var myObj = {
  gift: "pony",
  pet: "kitten",
  bed: "sleigh"
};
function checkObj(checkProp) {

  if (myObj.hasOwnProperty(checkProp) === true) {
    return myObj[checkProp];
  } else {
    return "Not Found";
  }
}
checkObj("gift");`.replace(/\s+/g, "")
  },

  {
    A87: `var myMusic = [
  {
    "artist": "Billy Joel",
    "title": "Piano Man",
    "release_year": 1973,
    "formats": [ 
      "CD",
      "8T",
      "LP"
    ],
    "gold": true
  },
  {
    "artist": "Deep Purple",
    "title": "Smoke on the water",
    "release_year": 1976,
    "formats": [ 
      "CD",
      "8T",
      "LP"
    ],
  }
 ];`.replace(/\s+/g, "")
  },

  {
    A88: `
var myStorage = {
  "car": {
    "inside": {
      "glove box": "maps",
      "passenger seat": "crumbs"
     },
    "outside": {
      "trunk": "jack"
    }
  }
};

var gloveBoxContents = myStorage.car.inside['glove box'];
`.replace(/\s+/g, "")
  },

  {
    A89: `
var myPlants = [
  { 
    type: "flowers",
    list: [
      "rose",
      "tulip",
      "dandelion"
    ]
  },
  {
    type: "trees",
    list: [
      "fir",
      "pine",
      "birch"
    ]
  }  
];

var secondTree = myPlants[1].list[1];`.replace(/\s+/g, "")
  },

  {
    A90: `
var collection = {
    "2548": {
      "album": "Slippery When Wet",
      "artist": "Bon Jovi",
      "tracks": [ 
        "Let It Rock", 
        "You Give Love a Bad Name" 
      ]
    },
    "2468": {
      "album": "1999",
      "artist": "Prince",
      "tracks": [ 
        "1999", 
        "Little Red Corvette" 
      ]
    },
    "1245": {
      "artist": "Robert Palmer",
      "tracks": [ ]
    },
    "5439": {
      "album": "ABBA Gold"
    }
};
var collectionCopy = JSON.parse(JSON.stringify(collection));

function updateRecords(id, prop, value) {
  if (prop === "tracks" && value !== "") {
   if(collection[id][prop]) {
    collection[id][prop].push(value);
   }
   else {
    collection[id][prop]=[value];
   }
  } else if (value !== "") {
    collection[id][prop] = value;
  } else {
    delete collection[id][prop];
  }

  return collection;
}
updateRecords(5439, "artist", "ABBA");
`.replace(/\s+/g, "")
  },

  {
    A91: `var myArray = [];
var i = 0;
while (i <= 4){
    myArray.push(i);
    i++;
}`.replace(/\s+/g, "")
  },

  {
    A92: `var myArray = [];
for(var i=1; i<=5; i++){
myArray.push(i);
}`.replace(/\s+/g, "")
  },

  {
    A93: `var myArray = [];
for (var i = 1; i < 10; i += 2) {
myArray.push(i);
}`.replace(/\s+/g, "")
  },

  {
    A94: `var myArray = [];

for (var i = 9; i > 0; i-=2){
  myArray.push(i)
}`.replace(/\s+/g, "")
  },

  {
    A95: `var myArr = [ 2, 3, 4, 5, 6];
var total = 0;

for (var i = 0; i < myArr.length; i++) {
  total += myArr[i];
}`.replace(/\s+/g, "")
  },

  {
    A96: `function multiplyAll(arr) {
  var product = 1;
  for(var i=0; i < arr.length; i++){
    for (var j=0; j < arr[i].length; j++){
      product = product * arr[i][j];
    }
  }
  return product;
}
multiplyAll([[1,2],[3,4],[5,6,7]]);`.replace(/\s+/g, "")
  },

  {
    A97: `var myArray = [];
var i = 10;
do {
  myArray.push(i);
  i++;
} while (i < 5)`.replace(/\s+/g, "")
  },

  {
    A98: `var contacts = [
  {
      "firstName": "Akira",
      "lastName": "Laine",
      "number": "0543236543",
      "likes": ["Pizza", "Coding", "Brownie Points"]
  },
  {
      "firstName": "Harry",
      "lastName": "Potter",
      "number": "0994372684",
      "likes": ["Hogwarts", "Magic", "Hagrid"]
  },
  {
      "firstName": "Sherlock",
      "lastName": "Holmes",
      "number": "0487345643",
      "likes": ["Intriguing Cases", "Violin"]
  },
  {
      "firstName": "Kristian",
      "lastName": "Vos",
      "number": "unknown",
      "likes": ["JavaScript", "Gaming", "Foxes"]
  }
];


function lookUpProfile(name, prop){
for (var x = 0; x < contacts.length; x++){
  if (contacts[x].firstName === name) {
      if (contacts[x].hasOwnProperty(prop)) {
          return contacts[x][prop];
      } else {
          return "No such property";
      }
  }
}
return "No such contact";

}
lookUpProfile("Akira", "likes");`.replace(/\s+/g, "")
  },

  {
    A99: `function randomFraction() {
  var result = 0;
  while (result === 0) {
    result = Math.random();
  }

  return result;  

}`.replace(/\s+/g, "")
  },

  {
    A100: `var randomNumberBetween0and19 = Math.floor(Math.random() * 20);

function randomWholeNum() {

  return Math.floor(Math.random() * 10);
}`.replace(/\s+/g, "")
  },

  {
    A101: `function randomRange(myMin, myMax) {

  return Math.floor(Math.random() * (myMax - myMin + 1) + myMin);

}
var myRandom = randomRange(5, 15);`.replace(/\s+/g, "")
  },

  {
    A102: `function convertToInteger(str) {

  return parseInt(str);
  }
  
  convertToInteger("10011");`.replace(/\s+/g, "")
  },

  {
    A103: `function convertToInteger(str) {
  var radix = 2;
  return parseInt(str, radix);
  }
  
  convertToInteger("10011");`.replace(/\s+/g, "")
  },

  {
    A104: `function checkEqual(a, b) {
  return a === b ? true : false;
}
checkEqual(1, 2);`.replace(/\s+/g, "")
  },

  {
    A105: `function checkSign(num) {
  return (
    num > 0 ? "positive" :
    num < 0 ? "negative" :
    "zero"
  );
}`.replace(/\s+/g, "")
  }
];


/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return javascriptBasicAlgorithmAnswerArr; });
var javascriptBasicAlgorithmAnswerArr = [
  {
    A0: `function convertToF(celsius) {
      var fahrenheit = (celsius * (9/5)) + 32;

      if ( typeof fahrenheit !== 'undefined' ) {
      return fahrenheit;
      } else {
        return 'fahrenheit not defined';
      }
    }
    convertToF(30);
  `.replace(/\s+/g, "")
  },

  {
    A1: `function reverseString(str) {
      return str.split('').reverse().join('');
    }
    
    reverseString("hello");`.replace(/\s+/g, "")
  },

  { A2: `function factorialize(num) {
    if (num === 0) { return 1; }
    return num * factorialize(num-1);
  }
  
  factorialize(5);`.replace(/\s+/g, "") },

  {
    A3: `function findLongestWordLength(str) {

      str = str.split(" ");
    
      if(str.length == 1){
        return str[0].length;
      }
    
      if(str[0].length >= str[1].length){
        str.splice(1,1);
        return findLongestWordLength(str.join(" "));
      }
    
      if(str[0].length <= str[1].length){
       
        return findLongestWordLength(str.slice(1,str.length).join(" "));
      }
    }

findLongestWordLength("The quick brown fox jumped over the lazy dog");
`.replace(/\s+/g, "")
  },

  {
    A4: `function findLongestWordLength(s) {
      return s.split(' ')
        .reduce(function(x, y) {
          return Math.max(x, y.length)
        }, 0);
    }

findLongestWordLength("The quick brown fox jumped over the lazy dog");`.replace(/\s+/g, "")
  },

  {
    A5: `function findLongestWordLength(str) {
      var words = str.split(' ');
      var maxLength = 0;
    
      for (var i = 0; i < words.length; i++) {
        if (words[i].length > maxLength) {
          maxLength = words[i].length;
        }
      }
    
      return maxLength;
    }

findLongestWordLength("The quick brown fox jumped over the lazy dog");
`.replace(/\s+/g, "")
  },

  {
    A6: `function largestOfFour(arr) {
      return arr.map(Function.apply.bind(Math.max, null));
    }
    
    largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);
`.replace(/\s+/g, "")
  },

  {
    A7: `function largestOfFour(arr) {
      return arr.map(function(group){
        return group.reduce(function(prev, current) {
          return (current > prev) ? current : prev;
        });
      });
    }
    
    largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);
`.replace(/\s+/g, "")
  },

  {
    A8: `function largestOfFour(arr) {
      var results = [];
      for (var n = 0; n < arr.length; n++) {
        var largestNumber = arr[n][0];
        for (var sb = 1; sb < arr[n].length; sb++) {
          if (arr[n][sb] > largestNumber) {
            largestNumber = arr[n][sb];
          }
        }
    
        results[n] = largestNumber;
      }
    
      return results;
    }
    
    largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]); 
`.replace(/\s+/g, "")
  },

  {
    A9: `function confirmEnding(str, target) {
      return str.slice(str.length - target.length) === target;
    }
    
    confirmEnding("He has to give me a new name", "name");`.replace(/\s+/g, "")
  },

  {
    A10: `function repeatStringNumTimes(str, num) {
      if(num < 0){
        return "";
        }
      if(num === 1){
        return str;
      }
      else{
        return str + repeatStringNumTimes(str, num - 1);  }
}
    
repeatStringNumTimes("abc", 3); `.replace(/\s+/g, "")
  },


  { A11: `function repeatStringNumTimes(str, num) {
    var accumulatedStr = '';
  
    while (num > 0) {
      accumulatedStr += str;
      num--;
    }
  
    return accumulatedStr;
  }
  
  repeatStringNumTimes("abc", 3);`.replace(/\s+/g, "") },

  
  { A12: `function truncateString(str, num) {
    if (str.length > num && num > 3) {
    return str.slice(0, (num)) + '...';
    } else if (str.length > num && num <= 3) {
    return str.slice(0, num) + '...';
    } else {
    return str;
    }
    }
    
    truncateString("A-tisket a-tasket A green and yellow basket", 8);`.replace(/\s+/g, "") },

  { A13: `function findElement(arr, func) {
    let num = 0;
    
    for(var i = 0; i < arr.length; i++) {
      num = arr[i];
      if (func(num)) {
        return num;
      }
    }
    
    return undefined;
  }
  
  findElement([1, 2, 3, 4], num => num % 2 === 0);`.replace(/\s+/g, "") },

  
  { A14: `function booWho(bool) {
    return typeof bool === 'boolean';
  }
  booWho(null);`.replace(/\s+/g, "") },

  {
    A15: `function titleCase(str) {
      return str.toLowerCase().replace(/(^|\s)\S/g, (L) => L.toUpperCase());
    }
    
    titleCase("I'm a little tea pot");`.replace(/\s+/g, "")
  },

  {
    A16: `function titleCase(str) {
      var convertToArray = str.toLowerCase().split(" ");
      var result = convertToArray.map(function(val){
          return val.replace(val.charAt(0), val.charAt(0).toUpperCase());
      });
      return result.join(" ");
    }
    
    titleCase("I'm a little tea pot");
    `.replace(/\s+/g, "")
  },

  {
    A17: `String.prototype.replaceAt = function(index, character) {
      return this.substr(0, index) + character + this.substr(index+character.length);
  };
  
  function titleCase(str) {
      var newTitle = str.split(' ');
      var updatedTitle = [];
      for (var st in newTitle) {
          updatedTitle[st] = newTitle[st].toLowerCase().replaceAt(0, newTitle[st].charAt(0).toUpperCase());
      }
      return updatedTitle.join(' ');
  }
titleCase("I'm a little tea pot");
`.replace(/\s+/g, "")
  },

  {
    A18: `
    function frankenSplice(arr1, arr2, n) {
      let localArray = arr2.slice();
      for (let i = 0; i < arr1.length; i++) {
        localArray.splice(n, 0, arr1[i]);
        n++;
      }
      return localArray;
    }
    
    frankenSplice([1, 2, 3], [4, 5, 6], 1);
    
`.replace(/\s+/g, "")
  },

  {
    A19: `function bouncer(arr) {
      return arr.filter(Boolean);
    }
    
    bouncer([7, "ate", "", false, 9]);
`.replace(/\s+/g, "")
  },

  {
    A20: `function getIndexToIns(arr, num) {

      return arr.concat(num).sort((a,b) => a-b).indexOf(num);
      
      }
      
      getIndexToIns([40, 60], 50);
    `.replace(
      /\s+/g,
      ""
    )
  },

  {
    A21: `function getIndexToIns(arr, num) {
      arr.push(num);
      arr.sort(function(a, b){return a-b});
      return arr.indexOf(num);
    }
    
    getIndexToIns([40, 60], 50);`.replace(
      /\s+/g,
      ""
    )
  },

  {
    A22: `function getIndexToIns(arr, num) {
      var times = arr.length; 
      var count = 0; 
      for (var i=0;i<times;i++){
        if(num>arr[i]){count++;} }
        return count; 
    }
    
    getIndexToIns([40, 60], 50);
    `.replace(
      /\s+/g,
      ""
    )
  },

  {
    A23: `function mutation(arr) {
      var test = arr[1].toLowerCase();
      var target = arr[0].toLowerCase();
      for (var i=0;i<test.length;i++) {
        if (target.indexOf(test[i]) < 0)
          return false;
      }
      return true;
     }
    
    mutation(["hello", "hey"]);
    `.replace(
      /\s+/g,
      ""
    )
  },

  {
    A24: `function mutation(arr) {
      return arr[1].toLowerCase()
        .split('')
        .every(function(letter) {
          return arr[0].toLowerCase()
            .indexOf(letter) != -1;
        });
    }
    
    mutation(["hello", "hey"]);`.replace(/\s+/g, "")
  },

  {
    A25: `function chunkArrayInGroups(arr, size) {
      if (arr.length <= size){
        return [arr];
      }
      else {
        return [arr.slice(0,size)].concat(chunkArrayInGroups(arr.slice(size),size));
      }
    }

chunkArrayInGroups(["a", "b", "c", "d"], 2);`.replace(/\s+/g, "")
  },

  {
    A26: `function chunkArrayInGroups(arr, size) {
      var newArr = [];
      while (arr.length) {
        newArr.push(arr.splice(0,size));
      }
      return newArr;
    }
chunkArrayInGroups(["a", "b", "c", "d"], 2);`.replace(/\s+/g, "")
  },

  {
    A27: `
    function chunkArrayInGroups(arr, size) {
      var arr2 = [];
      for (var i = 0; i < arr.length; i+=size) {
    	arr2.push(arr.slice(i , i+size));
      }
      return arr2;
    }
chunkArrayInGroups(["a", "b", "c", "d"], 2);
    `.replace(/\s+/g, "")
  },

  {
    A28: `function chunkArrayInGroups(arr, size) {

      var temp = [];
      var result = [];

      for (var a = 0; a < arr.length; a++) {
        if (a % size !== size - 1)
          temp.push(arr[a]);
        else {
          temp.push(arr[a]);
          result.push(temp);
          temp = [];
        }
      }

      if (temp.length !== 0)
        result.push(temp);
      return result;
    }
chunkArrayInGroups(["a", "b", "c", "d"], 2);`.replace(/\s+/g, "")
  }
];


/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return javascriptBasicAlgorithmQuestionArr; });
var javascriptBasicAlgorithmQuestionArr = [
  `0.The algorithm to convert from Celsius to Fahrenheit is the temperature in Celsius times 9/5, plus 32.<br>
  <br>

  You are given a variable celsius representing a temperature in Celsius. Use the variable fahrenheit already defined and assign it the Fahrenheit temperature equivalent to the given Celsius temperature. <br>
  Use the algorithm mentioned above to help convert the Celsius temperature to Fahrenheit.<br>
  <br>

  
  Don't worry too much about the function and return statements as they will be covered in future challenges. For now, only use operators that you have already learned.<br>
  <br>

  function convertToF(celsius) {<br>
    let fahrenheit;<br>
    return fahrenheit;<br>
  }<br>
  <br>
  convertToF(30);`,

  `1.Reverse the provided string.<br>
  <br>
  You may need to turn the string into an array before you can reverse it.<br>
  <br>
  Your result must be a string.<br><br>
  function reverseString(str) {<br>
    return str;<br>
  }<br>
  <br>
  reverseString("hello");`,

  `2.Return the factorial of the provided integer.<br>
  <br>
  If the integer is represented with the letter n, a factorial is the product of all positive integers less than or equal to n.<br>
  <br>
  Factorials are often represented with the shorthand notation n!<br>
  <br>
  For example: 5! = 1 * 2 * 3 * 4 * 5 = 120<br>
  <br>
  Only integers greater than or equal to zero will be supplied to the function.<br><br>
  function factorialize(num) {<br>
    return num;<br>
  }<br>
  <br>
  factorialize(5);`,

  `3.Return the length of the longest word in the provided sentence.<br>
  <br>
  Your response should be a number.<br><br>
  function findLongestWordLength(str) {<br>
    return str.length;<br>
  }<br>
  <br>
  findLongestWordLength("The quick brown fox jumped over the lazy dog");<br>
 <b> Using recursiveness </b>`,

  `4.Return the length of the longest word in the provided sentence.<br>
  <br>
  Your response should be a number.<br><br>
  function findLongestWordLength(str) {<br>
    return str.length;<br>
  }<br>
  <br>
  findLongestWordLength("The quick brown fox jumped over the lazy dog");<br>
  <b>Using .reduce()</b>
`,

  `5.Return the length of the longest word in the provided sentence.<br>
  <br>
  Your response should be a number.<br><br>
  function findLongestWordLength(str) {<br>
    return str.length;<br>
  }<br>
  <br>
  findLongestWordLength("The quick brown fox jumped over the lazy dog");<br>
  <b>Basic solution</b>`,

  `6.Return an array consisting of the largest number from each provided sub-array. For simplicity, the provided array will contain exactly 4 sub-arrays.<br>
  <br>
  Remember, you can iterate through an array with a simple for loop, and access each member with array syntax arr[i].<br><br>
  function largestOfFour(arr) {<br>
    // You can do this!<br>
    return arr;<br>
  }<br>
  <br>
  largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);<br>
  <b>Advanced Declarative approach </b>
  `,

  `7.Return an array consisting of the largest number from each provided sub-array. For simplicity, the provided array will contain exactly 4 sub-arrays.<br>
  <br>
  Remember, you can iterate through an array with a simple for loop, and access each member with array syntax arr[i].<br><br>
  function largestOfFour(arr) {<br>
    // You can do this!<br>
    return arr;<br>
  }<br>
  <br>
  largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);<br>
  <b>Intermediate Declarative approach </b>
  
  `,

  `8.Return an array consisting of the largest number from each provided sub-array. For simplicity, the provided array will contain exactly 4 sub-arrays.<br>
  <br>
  Remember, you can iterate through an array with a simple for loop, and access each member with array syntax arr[i].<br><br>
  function largestOfFour(arr) {<br>
    // You can do this!<br>
    return arr;<br>
  }<br>
  <br>
  largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);<br>
  <b>Basic solution</b>
`,

  `9.Check if a string (first argument, str) ends with the given target string (second argument, target).<br>
  <br>
  This challenge can be solved with the .endsWith() method, which was introduced in ES2015. But for the purpose of this challenge, we would like you to use one of the JavaScript substring methods instead.<br><br>
  function confirmEnding(str, target) {<br>
    // "Never give up and good luck will find you."<br>
    // -- Falcor<br>
    return str;<br>
  }<br>
  <br>
  confirmEnding("Bastian", "n");`,

  `10.Repeat a given string str (first argument) for num times (second argument). Return an empty string if num is not a positive number.<br><br>
  function repeatStringNumTimes(str, num) {<br>
    // repeat after me<br>
    return str;<br>
  }<br>
  <br>
  repeatStringNumTimes("abc", 3);<br>
  <br>
  <b>Intermediate solution</b>`,

  
  `11.Repeat a given string str (first argument) for num times (second argument). Return an empty string if num is not a positive number.<br><br>
  function repeatStringNumTimes(str, num) {<br>
    // repeat after me<br>
    return str;<br>
  }<br>
  <br>
  repeatStringNumTimes("abc", 3);<br>
  <br>
  <b>Basic solution</b>`,
  
  `12.Truncate a string (first argument) if it is longer than the given maximum string length (second argument). <br>Return the truncated string with a ... ending.<br><br>
  function truncateString(str, num) {<br>
    // Clear out that junk in your trunk<br>
    return str;<br>
  }<br>
  <br>
  truncateString("A-tisket a-tasket A green and yellow basket", 8);
  `,

  `13.Create a function that looks through an array (first argument) and returns the first element in the array that passes a truth test (second argument). If no element passes the test, return undefined.<br><br>
  function findElement(arr, func) {<br>
    let num = 0;<br>
    return num;<br>
  }<br>
  <br>
  findElement([1, 2, 3, 4], num => num % 2 === 0);
  `,

  `14.Check if a value is classified as a boolean primitive. Return true or false.<br>
  <br>
  Boolean primitives are true and false.<br><br>
  function booWho(bool) {<br>
    // What is the new fad diet for ghost developers? The Boolean.<br>
    return bool;<br>
  }<br>
  <br>
  booWho(null);
  `,

  `15.Return the provided string with the first letter of each word capitalized. Make sure the rest of the word is in lower case.<br>
  <br>
  For the purpose of this exercise, you should also capitalize connecting words like "the" and "of".<br><br>
  function titleCase(str) {<br>
    return str;<br>
  }<br>
  <br>
  titleCase("I'm a little tea pot");<br>
  <b>Advanced solution</b>
  `,

  `16.Return the provided string with the first letter of each word capitalized. Make sure the rest of the word is in lower case.<br>
  <br>
  For the purpose of this exercise, you should also capitalize connecting words like "the" and "of".<br><br>
  function titleCase(str) {<br>
    return str;<br>
  }<br>
  <br>
  titleCase("I'm a little tea pot");<br>
  <b>Intermediate solution</b>
  `,

  `17.Return the provided string with the first letter of each word capitalized. Make sure the rest of the word is in lower case.<br>
  <br>
  For the purpose of this exercise, you should also capitalize connecting words like "the" and "of".<br><br>
  function titleCase(str) {<br>
    return str;<br>
  }<br>
  <br>
  titleCase("I'm a little tea pot");<br>
  <b>Basic solution</b>`,

  `18.You are given two arrays and an index.<br>
  <br>
  Use the array methods slice and splice to copy each element of the first array into the second array, in order.<br>
  <br>
  Begin inserting elements at index n of the second array.<br>
  <br>
  Return the resulting array. The input arrays should remain the same after the function runs.<br><br>
  function frankenSplice(arr1, arr2, n) {<br>
    // It's alive. It's alive!<br>
    return arr2;<br>
  }<br>
  <br>
  frankenSplice([1, 2, 3], [4, 5, 6], 1);`,

  `19.Remove all falsy values from an array.<br>
  <br>
  Falsy values in JavaScript are false, null, 0, "", undefined, and NaN.<br>
  <br>
  Hint: Try converting each value to a Boolean.<br><br>
  function bouncer(arr) {<br>
    // Don't show a false ID to this bouncer.<br>
    return arr;<br>
  }<br>
  <br>
  bouncer([7, "ate", "", false, 9]);
  `,

  `20.Return the lowest index at which a value (second argument) should be inserted into an array (first argument) once it has been sorted. The returned value should be a number.<br>
  <br>
  For example, getIndexToIns([1,2,3,4], 1.5) should return 1 because it is greater than 1 (index 0), but less than 2 (index 1).<br>
  <br>
  Likewise, getIndexToIns([20,3,5], 19) should return 2 because once the array has been sorted it will look like [3,5,20] and 19 is less than 20 (index 2) and greater than 5 (index 1).<br><br>
  function getIndexToIns(arr, num) {<br>
    // Find my place in this sorted array.<br>
    return num;<br>
  }<br>
  <br>
  getIndexToIns([40, 60], 50);<br>
  <b>Advanced solution</b>
  `,

  `21.Return the lowest index at which a value (second argument) should be inserted into an array (first argument) once it has been sorted. The returned value should be a number.<br>
  <br>
  For example, getIndexToIns([1,2,3,4], 1.5) should return 1 because it is greater than 1 (index 0), but less than 2 (index 1).<br>
  <br>
  Likewise, getIndexToIns([20,3,5], 19) should return 2 because once the array has been sorted it will look like [3,5,20] and 19 is less than 20 (index 2) and greater than 5 (index 1).<br><br>
  function getIndexToIns(arr, num) {<br>
    // Find my place in this sorted array.<br>
    return num;<br>
  }<br>
  <br>
  getIndexToIns([40, 60], 50);<br>
  <b>Intermediate solution</b>
  `,

  `22.Return the lowest index at which a value (second argument) should be inserted into an array (first argument) once it has been sorted. The returned value should be a number.<br>
  <br>
  For example, getIndexToIns([1,2,3,4], 1.5) should return 1 because it is greater than 1 (index 0), but less than 2 (index 1).<br>
  <br>
  Likewise, getIndexToIns([20,3,5], 19) should return 2 because once the array has been sorted it will look like [3,5,20] and 19 is less than 20 (index 2) and greater than 5 (index 1).<br><br>
  function getIndexToIns(arr, num) {<br>
    // Find my place in this sorted array.<br>
    return num;<br>
  }<br>
  <br>
  getIndexToIns([40, 60], 50);<br>
  <b>Basic solution</b>`,

  `23.Return true if the string in the first element of the array contains all of the letters of the string in the second element of the array.<br>
  <br>
  For example, ["hello", "Hello"], should return true because all of the letters in the second string are present in the first, ignoring case.<br>
  <br>
  The arguments ["hello", "hey"] should return false because the string "hello" does not contain a "y".<br>
  <br>
  Lastly, ["Alien", "line"], should return true because all of the letters in "line" are present in "Alien".<br><br>
  function mutation(arr) {<br>
    return arr;<br>
  }<br>
  <br>
  mutation(["hello", "hey"]);<br>
  <b>Basic solution</b>
  `,

  `24.Return true if the string in the first element of the array contains all of the letters of the string in the second element of the array.<br>
  <br>
  For example, ["hello", "Hello"], should return true because all of the letters in the second string are present in the first, ignoring case.<br>
  <br>
  The arguments ["hello", "hey"] should return false because the string "hello" does not contain a "y".<br>
  <br>
  Lastly, ["Alien", "line"], should return true because all of the letters in "line" are present in "Alien".<br><br>
  function mutation(arr) {<br>
    return arr;<br>
  }<br>
  <br>
  mutation(["hello", "hey"]);<br>
  <b>Intermediate solution</b>
  `,

  `25.Write a function that splits an array (first argument) into groups the length of size (second argument) and returns them as a two-dimensional array.<br><br>
  function chunkArrayInGroups(arr, size) {<br>
    // Break it up.<br>
    return arr;<br>
  }<br>
  <br>
  chunkArrayInGroups(["a", "b", "c", "d"], 2);<br>
  <b>Advanced Solution</b>
  `,

  `26.Write a function that splits an array (first argument) into groups the length of size (second argument) and returns them as a two-dimensional array.<br><br>
  function chunkArrayInGroups(arr, size) {<br>
    // Break it up.<br>
    return arr;<br>
  }<br>
  <br>
  chunkArrayInGroups(["a", "b", "c", "d"], 2);<br>
  <b>Advanced Solution</b>`,

  `27.Write a function that splits an array (first argument) into groups the length of size (second argument) and returns them as a two-dimensional array.<br><br>
  function chunkArrayInGroups(arr, size) {<br>
    // Break it up.<br>
    return arr;<br>
  }<br>
  <br>
  chunkArrayInGroups(["a", "b", "c", "d"], 2);<br>
  <b>Intermediate Solution</b>`,

  `28.Write a function that splits an array (first argument) into groups the length of size (second argument) and returns them as a two-dimensional array.<br><br>
  function chunkArrayInGroups(arr, size) {<br>
    // Break it up.<br>
    return arr;<br>
  }<br>
  <br>
  chunkArrayInGroups(["a", "b", "c", "d"], 2);<br>
  <b>Basic Solution</b>`
];


/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return javascriptBasicDataStructureAnswerArr; });
var javascriptBasicDataStructureAnswerArr = [
  {
    A0: `let yourArray = ["a", 2, true, "c", null, {name: "john"}];
  `.replace(/\s+/g, "")
  },

  {
    A1: `let myArray = ["a", "b", "c", "d"];
    myArray[1] = "anything we want";
    console.log(myArray);
    `.replace(/\s+/g, "")
  },

  { A2: `function mixedNumbers(arr) {
  arr.unshift('I',2,'three');
  arr.push(7,'VIII', 9);
    return arr;
  }
  console.log(mixedNumbers(['IV', 5, 'six']));`.replace(/\s+/g, "") },

  {
    A3: `function popShift(arr) {
      let popped = arr.pop();
      let shifted = arr.shift();
      return [shifted, popped];
    }
    
    console.log(popShift(['challenge', 'is', 'not', 'complete']));
`.replace(/\s+/g, "")
  },

  {
    A4: `function sumOfTen(arr) {
      arr.splice(1,2);
      return arr.reduce((a, b) => a + b);
    }
    console.log(sumOfTen([2, 5, 1, 5, 2, 1]));`.replace(/\s+/g, "")
  },

  {
    A5: `function htmlColorNames(arr) {
      arr.splice(0, 2, "DarkSalmon", "BlanchedAlmond");
      return arr;
    } 
    console.log(htmlColorNames(['DarkGoldenRod', 'WhiteSmoke', 'LavenderBlush', 'PaleTurqoise', 'FireBrick']));
`.replace(/\s+/g, "")
  },

  {
    A6: `function forecast(arr) {
      return arr.slice(2,4);
      }
      console.log(forecast(['cold', 'rainy', 'warm', 'sunny', 'cool', 'thunderstorms']));
`.replace(/\s+/g, "")
  },

  {
    A7: `function copyMachine(arr, num) {
      let newArr = [];
      while (num >= 1) {
        newArr.push([...arr]);
        num--;
      }
      return newArr;
    }
    console.log(copyMachine([true, false, true], 2));
`.replace(/\s+/g, "")
  },

  {
    A8: `function spreadOut() {
      let fragment = ['to', 'code'];
      let sentence = ["learning", ...fragment, "is", "fun"]; 
      return sentence;
    }
    console.log(spreadOut());
`.replace(/\s+/g, "")
  },

  {
    A9: `function quickCheck(arr, elem) {
      return arr.indexOf(elem) >= 0 ? true : false;
      }
      console.log(quickCheck(['squash', 'onions', 'shallots'], 'mushrooms')); `.replace(/\s+/g, "")
  },

  {
    A10: `function filteredArray(arr, elem) {
      let newArr = [];
     for (let i = 0; i < arr.length; i++) { 
        if (arr[i].indexOf(elem)==-1){ 
              newArr.push(arr[i]); 
                };
              };
      return newArr;
    };
    console.log(filteredArray([[3, 2, 3], [1, 6, 3], [3, 13, 26], [19, 3, 9]], 3)); `.replace(/\s+/g, "")
  },


  { A11: `let myNestedArray = [
    ['unshift', false, 1, 2, 3, 'complex', 'nested'],
    ['loop', 'shift', 6, 7, 1000, 'method'],
    ['concat', false, true, 'spread', 'array',["deep"]],
    ['mutate', 1327.98, 'splice', 'slice', 'push', [["deeper"]]],
    ['iterate', 1.3849, 7, '8.4876', 'arbitrary', 'depth', [[["deepest"]]] ]
  ];`.replace(/\s+/g, "") },

  
  { A12: `let foods = {
    apples: 25,
    oranges: 32,
    plums: 28
  };
  foods['bananas'] = 13;
  foods['grapes'] = 35;
  foods['strawberries'] = 27;
  console.log(foods);`.replace(/\s+/g, "") },

  { A13: `let userActivity = {
    id: 23894201352,
    date: 'January 1, 2017',
    data: {
      totalUsers: 51,
      online: 42
    }
  };
  userActivity.data.online = 45;
  
  console.log(userActivity);`.replace(/\s+/g, "") },

  { A14: `let foods = {
    apples: 25,
    oranges: 32,
    plums: 28,
    bananas: 13,
    grapes: 35,
    strawberries: 27
  };
  
  function checkInventory(scannedItem) {
    return foods[scannedItem];
  }
  console.log(checkInventory("apples"));`.replace(/\s+/g, "") },

  {
    A15: `let foods = {
      apples: 25,
      oranges: 32,
      plums: 28,
      bananas: 13,
      grapes: 35,
      strawberries: 27
    };
    delete foods.oranges;
    delete foods.plums;
    delete foods.strawberries;
    console.log(foods);`.replace(/\s+/g, "")
  },

  {
    A16: `let users = {
      Alan: {
        age: 27,
        online: true
      },
      Jeff: {
        age: 32,
        online: true
      },
      Sarah: {
        age: 48,
        online: true
      },
      Ryan: {
        age: 19,
        online: true
      }
    };
    
    function isEveryoneHere(obj) {
      return (users.hasOwnProperty('Alan','Jeff','Sarah','Ryan')) ? true : false;
    }
    
    console.log(isEveryoneHere(users));
    
    `.replace(/\s+/g, "")
  },

  {
    A17: `let users = {
      Alan: {
        age: 27,
        online: false
      },
      Jeff: {
        age: 32,
        online: true
      },
      Sarah: {
        age: 48,
        online: false
      },
      Ryan: {
        age: 19,
        online: true
      }
    };
    
    function countOnline(obj) {
      let online = 0;
      for(let user in obj){
        if(obj[user].online == true) {
          online += 1;
        }
      }
      return online;
    }
    
    console.log(countOnline(users));
`.replace(/\s+/g, "")
  },

  {
    A18: `
    let users = {
      Alan: {
        age: 27,
        online: false
      },
      Jeff: {
        age: 32,
        online: true
      },
      Sarah: {
        age: 48,
        online: false
      },
      Ryan: {
        age: 19,
        online: true
      }
    };
    
    function getArrayOfUsers(obj) {
      return Object.keys(users);
    }
    
    console.log(getArrayOfUsers(users));
    
`.replace(/\s+/g, "")
  },

  {
    A19: `let user = {
      name: 'Kenneth',
      age: 28,
      data: {
        username: 'kennethCodesAllDay',
        joinDate: 'March 26, 2016',
        organization: 'freeCodeCamp',
        friends: [
          'Sam',
          'Kira',
          'Tomo'
        ],
        location: {
          city: 'San Francisco',
          state: 'CA',
          country: 'USA'
        }
      }
    };
    
    function addFriend(userObj, friend) { 
      userObj.data.friends.push(friend);
      return userObj.data.friends;
    }
    
    console.log(addFriend(user, 'Pete'));
`.replace(/\s+/g, "")
  }
];


/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return javascriptBasicDataStructureQuestionArr; });
var javascriptBasicDataStructureQuestionArr = [
  `0.We have defined a variable called yourArray. Complete the statement by assigning an array of at least 5 elements in length to the yourArray variable. Your array should contain at least one string, one number, and one boolean.<br>
  let yourArray; // change this line
  
  `,

  `1.In order to complete this challenge, set the 2nd position (index 1) of myArray to anything you want, besides "b".<br>
  let myArray = ["a", "b", "c", "d"];<br>
  // change code below this line<br>
  <br>
  //change code above this line<br>
  console.log(myArray);`,

  `2.We have defined a function, mixedNumbers, which we are passing an array as an argument. Modify the function by using push() and unshift() to add 'I', 2, 'three' to the beginning of the array and 7, 'VIII', 9 to the end so that the returned array contains representations of the numbers 1-9 in order.<br>
  function mixedNumbers(arr) {<br>
    // change code below this line<br>
    <br>
    // change code above this line<br>
    return arr;<br>
  }<br>
  <br>
  // do not change code below this line<br>
  console.log(mixedNumbers(['IV', 5, 'six']));
  `,

  `3.We have defined a function, popShift, which takes an array as an argument and returns a new array. Modify the function, using pop() and shift(), to remove the first and last elements of the argument array, and assign the removed elements to their corresponding variables, so that the returned array contains their values.<br>
  function popShift(arr) {<br>
    let popped; // change this line<br>
    let shifted; // change this line<br>
    return [shifted, popped];<br>
  }<br>
  <br>
  // do not change code below this line<br>
  console.log(popShift(['challenge', 'is', 'not', 'complete']));`,

  `4.We've defined a function, sumOfTen, which takes an array as an argument and returns the sum of that array's elements. Modify the function, using splice(), so that it returns a value of 10.<br>
  function sumOfTen(arr) {<br>
    // change code below this line<br>
    <br>
    // change code above this line<br>
    return arr.reduce((a, b) => a + b);<br>
  }<br>
  <br>
  // do not change code below this line<br>
  console.log(sumOfTen([2, 5, 1, 5, 2, 1]));<br>
  
  
`,

  `5.We have defined a function, htmlColorNames, which takes an array of HTML colors as an argument. Modify the function using splice() to remove the first two elements of the array and add 'DarkSalmon' and 'BlanchedAlmond' in their respective places.<br>
  function htmlColorNames(arr) {<br>
    // change code below this line<br>
    <br>
    // change code above this line<br>
    return arr;<br>
  } <br>
  <br>
  // do not change code below this line<br>
  console.log(htmlColorNames(['DarkGoldenRod', 'WhiteSmoke', 'LavenderBlush', 'PaleTurqoise', 'FireBrick']));<br>
  
  `,

  `6.We have defined a function, forecast, that takes an array as an argument. Modify the function using slice() to extract information from the argument array and return a new array that contains the elements 'warm' and 'sunny'.<br>
  function forecast(arr) {<br>
    // change code below this line<br>
    <br>
    return arr;<br>
  }<br>
  <br>
  // do not change code below this line<br>
  console.log(forecast(['cold', 'rainy', 'warm', 'sunny', 'cool', 'thunderstorms']));<br>
  `,

  `7.We have defined a function, copyMachine which takes arr (an array) and num (a number) as arguments. The function is supposed to return a new array made up of num copies of arr. We have done most of the work for you, but it doesn't work quite right yet. Modify the function using spread syntax so that it works correctly (hint: another method we have already covered might come in handy here!).<br>
  function copyMachine(arr, num) {<br>
    let newArr = [];<br>
    while (num >= 1) {<br>
      // change code below this line<br>
      <br>
      // change code above this line<br>
      num--;<br>
    }<br>
    return newArr;<br>
  }<br>
  <br>
  // change code here to test different cases:<br>
  console.log(copyMachine([true, false, true], 2));<br>
  
  `,

  `8.We have defined a function spreadOut that returns the variable sentence, modify the function using the spread operator so that it returns the array ['learning', 'to', 'code', 'is', 'fun'].<br>
  function spreadOut() {<br>
    let fragment = ['to', 'code'];<br>
    let sentence; // change this line<br>
    return sentence;<br>
  }<br>
  <br>
  // do not change code below this line<br>
  console.log(spreadOut());<br>
  
  
`,

  `9.indexOf() can be incredibly useful for quickly checking for the presence of an element on an array. We have defined a function, quickCheck, that takes an array and an element as arguments. Modify the function using indexOf() so that it returns true if the passed element exists on the array, and false if it does not.<br>
  function quickCheck(arr, elem) {<br>
    // change code below this line<br>
    <br>
    // change code above this line<br>
  }<br>
  <br>
  // change code here to test different cases:<br>
  console.log(quickCheck(['squash', 'onions', 'shallots'], 'mushrooms'));<br>
  
  `,

  `10.We have defined a function, filteredArray, which takes arr, a nested array, and elem as arguments, and returns a new array. elem represents an element that may or may not be present on one or more of the arrays nested within arr. Modify the function, using a for loop, to return a filtered version of the passed array such that any array nested within arr containing elem has been removed.<br>
  function filteredArray(arr, elem) {<br>
    let newArr = [];<br>
    // change code below this line<br>
    <br>
    // change code above this line<br>
    return newArr;<br>
  }<br>
  <br>
  // change code here to test different cases:<br>
  console.log(filteredArray([[3, 2, 3], [1, 6, 3], [3, 13, 26], [19, 3, 9]], 3));<br>
  `,

  
  `11.We have defined a variable, myNestedArray, set equal to an array. Modify myNestedArray, using any combination of strings, numbers, and booleans for data elements, so that it has exactly five levels of depth (remember, the outer-most array is level 1). Somewhere on the third level, include the string 'deep', on the fourth level, include the string 'deeper', and on the fifth level, include the string 'deepest'.<br>
  let myNestedArray = [<br>
    // change code below this line<br>
    ['unshift', false, 1, 2, 3, 'complex', 'nested'],<br>
    ['loop', 'shift', 6, 7, 1000, 'method'],<br>
    ['concat', false, true, 'spread', 'array'],<br>
    ['mutate', 1327.98, 'splice', 'slice', 'push'],<br>
    ['iterate', 1.3849, 7, '8.4876', 'arbitrary', 'depth']<br>
    // change code above this line<br>
  ];<br>
  `,
  
  `12.Using the same syntax, we can also add new key-value pairs to objects. We've created a foods object with three entries. Add three more entries: bananas with a value of 13, grapes with a value of 35, and strawberries with a value of 27.<br>
  let foods = {<br>
    apples: 25,<br>
    oranges: 32,<br>
    plums: 28<br>
  };<br>
  <br>
  // change code below this line<br>
  <br>
  // change code above this line<br>
  <br>
  console.log(foods);<br>
  
  `,

  `13.Here we've defined an object, userActivity, which includes another object nested within it. You can modify properties on this nested object in the same way you modified properties in the last challenge. Set the value of the online key to 45.<br>
  let userActivity = {<br>
    id: 23894201352,<br>
    date: 'January 1, 2017',<br>
    data: {<br>
      totalUsers: 51,<br>
      online: 42<br>
    }<br>
  };<br>
  <br>
  // change code below this line<br>
  <br>
  // change code above this line<br>
  <br>
  console.log(userActivity);
  `,

  `14.We've defined a function, checkInventory, which receives a scanned item as an argument. Return the current value of the scannedItem key in the foods object. You can assume that only valid keys will be provided as an argument to checkInventory.<br>
  let foods = {<br>
    apples: 25,<br>
    oranges: 32,<br>
    plums: 28,<br>
    bananas: 13,<br>
    grapes: 35,<br>
    strawberries: 27<br>
  };<br>
  // do not change code above this line<br>
  <br>
  function checkInventory(scannedItem) {<br>
    // change code below this line<br>
    <br>
  }<br>
  <br>
  // change code below this line to test different cases:<br>
  console.log(checkInventory("apples"));<br>
  
  
  `,

  `15.Use the delete keyword to remove the oranges, plums, and strawberries keys from the foods object.<br>
  let foods = {<br>
    apples: 25,<br>
    oranges: 32,<br>
    plums: 28,<br>
    bananas: 13,<br>
    grapes: 35,<br>
    strawberries: 27<br>
  };<br>
  <br>
  // change code below this line<br>
  <br>
  // change code above this line<br>
  <br>
  console.log(foods);<br>
  `,

  `16.We've created an object, users, with some users in it and a function isEveryoneHere, which we pass the users object to as an argument. Finish writing this function so that it returns true only if the users object contains all four names, Alan, Jeff, Sarah, and Ryan, as keys, and false otherwise.<br>
  let users = {<br>
    Alan: {<br>
      age: 27,<br>
      online: true<br>
    },<br>
    Jeff: {<br>
      age: 32,<br>
      online: true<br>
    },<br>
    Sarah: {<br>
      age: 48,<br>
      online: true<br>
    },<br>
    Ryan: {<br>
      age: 19,<br>
      online: true<br>
    }<br>
  };<br>
  <br>
  function isEveryoneHere(obj) {<br>
    // change code below this line<br>
    <br>
    // change code above this line<br>
  }<br>
  <br>
  console.log(isEveryoneHere(users));<br>
  <br>
  `,

  `17.We've defined a function, countOnline; use a for...in statement within this function to loop through the users in the users object and return the number of users whose online property is set to true.<br>
  let users = {<br>
    Alan: {<br>
      age: 27,<br>
      online: false<br>
    },<br>
    Jeff: {<br>
      age: 32,<br>
      online: true<br>
    },<br>
    Sarah: {<br>
      age: 48,<br>
      online: false<br>
    },<br>
    Ryan: {<br>
      age: 19,<br>
      online: true<br>
    }<br>
  };<br>
  <br>
  function countOnline(obj) {<br>
    // change code below this line<br>
    <br>
    // change code above this line<br>
  }<br>
  <br>
  console.log(countOnline(users));<br>
  `,

  `18.Finish writing the getArrayOfUsers function so that it returns an array containing all the properties in the object it receives as an argument.<br>
  let users = {<br>
    Alan: {<br>
      age: 27,<br>
      online: false<br>
    },<br>
    Jeff: {<br>
      age: 32,<br>
      online: true<br>
    },<br>
    Sarah: {<br>
      age: 48,<br>
      online: false<br>
    },<br>
    Ryan: {<br>
      age: 19,<br>
      online: true<br>
    }<br>
  };<br>
  <br>
  function getArrayOfUsers(obj) {<br>
    // change code below this line<br>
    <br>
    // change code above this line<br>
  }<br>
  <br>
  console.log(getArrayOfUsers(users));
  `,

  `19.Take a look at the object we've provided in the code editor. The user object contains three keys. The data key contains five keys, one of which contains an array of friends. From this, you can see how flexible objects are as data structures. We've started writing a function addFriend. Finish writing it so that it takes a user object and adds the name of the friend argument to the array stored in user.data.friends and returns that array.<br>
  let user = {<br>
    name: 'Kenneth',<br>
    age: 28,<br>
    data: {<br>
      username: 'kennethCodesAllDay',<br>
      joinDate: 'March 26, 2016',<br>
      organization: 'freeCodeCamp',<br>
      friends: [<br>
        'Sam',<br>
        'Kira',<br>
        'Tomo'<br>
      ],<br>
      location: {<br>
        city: 'San Francisco',<br>
        state: 'CA',<br>
        country: 'USA'<br>
      }<br>
    }<br>
  };<br>
  <br>
  function addFriend(userObj, friend) {<br>
    // change code below this line  <br>
    <br>
    // change code above this line<br>
  }<br>
  <br>
  console.log(addFriend(user, 'Pete'));<br>
  
  `
];


/***/ },
/* 9 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return javascriptEs6AnswerArr; });
var javascriptEs6AnswerArr = [
  {
    A0: `let catName;
    let quote;
    function catTalk() {
      "use strict";

      catName = "Oliver";
      quote = catName + " says Meow!";

    }
    catTalk();
  `.replace(/\s+/g, "")
  },

  {
    A1: `function checkScope() {
      "use strict";
      let i = "function scope";
      if (true) {
        let i = "block scope";
        console.log("Block scope i is: ", i);
      }
    console.log("Function scope i is: ", i);
    return i;
    }`.replace(/\s+/g, "")
  },

  { A2: `function printManyTimes(str) {
    "use strict";
    const SENTENCE = str + " is cool!";
    for(let i = 0; i < str.length; i+=2) {
      console.log(SENTENCE);
    }
  }
  printManyTimes("JabaDabaDuuu");`.replace(/\s+/g, "") },

  {
    A3: `const s = [5, 7, 2];
    function editInPlace() {
      "use strict";
      s[0] = 2;
      s[1] = 5;
      s[2] = 7;
    }
    editInPlace();
`.replace(/\s+/g, "")
  },

  {
    A4: `function freezeObj() {
      "use strict";
      const MATH_CONSTANTS = {
        PI: 3.14
      };

      Object.freeze(MATH_CONSTANTS);
      
      try {
        MATH_CONSTANTS.PI = 99;
      } catch( ex ) {
        console.log(ex);
      }
      return MATH_CONSTANTS.PI;
    }
    
    const PI = freezeObj();`.replace(/\s+/g, "")
  },

  {
    A5: `const magic = () => {
      "use strict";
      return new Date();
    };
`.replace(/\s+/g, "")
  },

  {
    A6: `const myConcat = (arr1, arr2) => {
      "use strict";
      return arr1.concat(arr2);
    };
    console.log(myConcat([1, 2], [3, 4, 5]));

`.replace(/\s+/g, "")
  },

  {
    A7: `const realNumberArray = [4, 5.6, -9.8, 3.14, 42, 6, 8.34];
    const squareList = (arr) => {
      "use strict";
      const squaredIntegers = arr.filter(num => Number.isInteger(num)).map(square => square*square);
      return squaredIntegers;
    };
    const squaredIntegers = squareList(realNumberArray);
    console.log(squaredIntegers);

`.replace(/\s+/g, "")
  },

  {
    A8: `const increment = (function() {
      "use strict";
      return function increment(number, value = 1) {
        return number + value;
      };
    })();
    console.log(increment(5, 2));
    console.log(increment(5));
`.replace(/\s+/g, "")
  },

  {
    A9: `const sum = (function() {
      "use strict";
      return function sum(...args) {		
        return args.reduce((a, b) => a + b, 0);
      };
    })();
    console.log(sum(0, 1, 2));`.replace(/\s+/g, "")
  },

  {
    A10: `const arr1 = ['JAN', 'FEB', 'MAR', 'APR', 'MAY'];
    let arr2;
    
    arr2 = [...arr1];`.replace(/\s+/g, "")
  },

  { A11: `const AVG_TEMPERATURES = {
    today: 77.5,
    tomorrow: 79
  };
  function getTempOfTmrw(avgTemperatures) {
    "use strict";
    const {tomorrow:tempOfTomorrow} = avgTemperatures;
    return tempOfTomorrow;
  }
  
  console.log(getTempOfTmrw(AVG_TEMPERATURES)); `.replace(/\s+/g, "") },

  
  { A12: `const LOCAL_FORECAST = {
    today: { min: 72, max: 83 },
    tomorrow: { min: 73.3, max: 84.6 }
  };
  
  function getMaxOfTmrw(forecast) {
    "use strict";
    const { tomorrow : {max: maxOfTomorrow}} = forecast 
    return maxOfTomorrow;
  }
  
  console.log(getMaxOfTmrw(LOCAL_FORECAST));`.replace(/\s+/g, "") },

  { A13: `let a = 8, b = 6;
   [a,b] = [b,a];
  console.log(a);
  console.log(b);`.replace(/\s+/g, "") },

  { A14: `const source = [1,2,3,4,5,6,7,8,9,10];
  const [a, b, ...arr] = source;
  console.log(arr); 
  console.log(source);`.replace(/\s+/g, "") },

  {
    A15: `const stats = {
      max: 56.78,
      standard_deviation: 4.34,
      median: 34.54,
      mode: 23.87,
      min: -0.75,
      average: 35.85
    };
    
    const half = (function() {
      "use strict";
    
      return function half({max, min}) {
        return (max + min) / 2.0;
      };
    
    })();
    console.log(stats);
    console.log(half(stats)); `.replace(/\s+/g, "")
  },

  {
    A16: `const result = {
      success: ["max-length", "no-amd", "prefer-arrow-functions"],
      failure: ["no-var", "var-on-top", "linebreak"],
      skipped: ["id-blacklist", "no-dup-keys"]
    };
    function makeList(arr) {
      "use strict";
      const resultDisplayArray =
     ['<li class="text-warning">$ {arr[0]}</li>', 
      '<li class="text-warning">$ {arr[1]}</li>', 
      '<li class="text-warning">$ {arr[2]}</li>'];
    
      return resultDisplayArray;
    }
    const resultDisplayArray = makeList(result.failure);`.replace(/\s+/g, "")
  },

  {
    A17: `const createPerson = (name, age, gender) => {
      "use strict";
      return {
        name,
        age,
        gender
      };
    };
    console.log(createPerson("Zodiac Hasbro", 56, "male"));
`.replace(/\s+/g, "")
  },

  {
    A18: `
    const bicycle = {
      gear: 2,
      setGear(newGear) {
        "use strict";
        this.gear = newGear;
      }
    };
    bicycle.setGear(3);
    console.log(bicycle.gear);
`.replace(/\s+/g, "")
  },

  {
    A19: `function makeClass() {
      "use strict";
      class Vegetable {
        constructor(name){
          this.name = name;
        }
      }
      return Vegetable;
    }
    const Vegetable = makeClass();
    const carrot = new Vegetable('carrot');
    console.log(carrot.name);
`.replace(/\s+/g, "")
  },

  {
    A20: `function makeClass() {
      "use strict";
      class Thermostat{
        constructor(farenheit){
          this.farenheit = farenheit;
        }
        get temperature(){
          return 5 / 9 * (this.farenheit - 32);
        }
        set temperature(celsius){
          this.farenheit = celsius * 9.0 / 5 + 32;
        }
      }
      return Thermostat;
    }
    const Thermostat = makeClass();
    const thermos = new Thermostat(76); 
    let temp = thermos.temperature; 
    thermos.temperature = 26;
    temp = thermos.temperature;`.replace(
      /\s+/g,
      ""
    )
  },

  {
    A21: `import { capitalizeString } from 'string_functions';
    capitalizeString("hello!");`.replace(
      /\s+/g,
      ""
    )
  },

  {
    A22: `"use strict";
    export const foo = "bar";
    export const bar = "foo";`.replace(
      /\s+/g,
      ""
    )
  },

  {
    A23: `"use strict";
    import * as str from "capitalize_strings";`.replace(
      /\s+/g,
      ""
    )
  },

  {
    A24: `"use strict";
    export default function subtract(x,y) {return x - y;}`.replace(/\s+/g, "")
  },

  {
    A25: `"use strict";
    import subtract from "math_functions";
    subtract(7,4);`.replace(/\s+/g, "")
  }
];


/***/ },
/* 10 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return javascriptEs6QuestionArr; });
var javascriptEs6QuestionArr = [
  `0.Update the code so it only uses the let keyword.<br>
  var catName;<br>
  var quote;<br>
  function catTalk() {<br>
    "use strict";<br>
    <br>
    catName = "Oliver";<br>
    quote = catName + " says Meow!";<br>
    <br>
  }<br>
  catTalk();`,

  `1.Fix the code so that i declared in the if statement is a separate variable than i declared in the first line of the function. Be certain not to use the var keyword anywhere in your code.<br>
  <br>
  function checkScope() {<br>
  "use strict";<br>
    var i = "function scope";<br>
    if (true) {<br>
      i = "block scope";<br>
      console.log("Block scope i is: ", i);<br>
    }<br>
    console.log("Function scope i is: ", i);<br>
    return i;<br>
  }`,

  `2.Change the code so that all variables are declared using let or const. Use let when you want the variable to change, and const when you want the variable to remain constant. Also, rename variables declared with const to conform to common practices, meaning constants should be in all caps.<br>
  <br>
  function printManyTimes(str) {<br>
    "use strict";<br>
    <br>
    // change code below this line
    <br>
    var sentence = str + " is cool!";<br>
    for(var i = 0; i < str.length; i+=2) {<br>
      console.log(sentence);<br>
    }<br>
    <br>
    // change code above this line<br>
    <br>
  }<br>
  printManyTimes("JabaDabaDuuu");`,

  `3.An array is declared as const s = [5, 7, 2]. Change the array to [2, 5, 7]using various element assignment.<br>
  <br>
  const s = [5, 7, 2];<br>
  function editInPlace() {<br>
    "use strict";<br>
    // change code below this line<br>
    <br>
    // s = [2, 5, 7]; <- this is invalid<br>
    <br>
    // change code above this line<br>
  }<br>
  editInPlace();`,

  `4.In this challenge you are going to use Object.freeze to prevent mathematical constants from changing. You need to freeze the  MATH_CONSTANTS object so that no one is able alter the value of PI , add, or delete properties .<br>
  <br>
  function freezeObj() {<br>
    "use strict";<br>
    const MATH_CONSTANTS = {<br>
      PI: 3.14<br>
    };<br>
    // change code below this line<br>
    <br>
    // change code above this line<br>
    try {<br>
      MATH_CONSTANTS.PI = 99;<br>
    } catch( ex ) {<br>
      console.log(ex);<br>
    }<br>
    return MATH_CONSTANTS.PI;<br>
  }<br>
  const PI = freezeObj();
`,

  `5.Rewrite the function assigned to the variable magic which returns a new Date()to use arrow function syntax. Also make sure nothing is defined using the keyword var.<br>
  <br>
  var magic = function() {<br>
    "use strict";<br>
    return new Date();<br>
  };`,

  `6.Rewrite the myConcatfunction which appends contents of arr2to arr1so that the function uses arrow function syntax.<br>
  <br>
  var myConcat = function(arr1, arr2) {<br>
    "use strict";<br>
    return arr1.concat(arr2);<br>
  };<br>
  // test your code<br>
  console.log(myConcat([1, 2], [3, 4, 5]));
  `,

  `7.Use arrow function syntax to compute the square of only the positive integers (decimal numbers are not integers) in the array realNumberArray and store the new array in the variable squaredIntegers.<br>
  <br>
  const realNumberArray = [4, 5.6, -9.8, 3.14, 42, 6, 8.34, -2];<br>
  const squareList = (arr) => {<br>
    "use strict";<br>
    // change code below this line<br>
    const squaredIntegers = arr;<br>
    // change code above this line<br>
    return squaredIntegers;<br>
  };<br>
  // test your code<br>
  const squaredIntegers = squareList(realNumberArray);<br>
  console.log(squaredIntegers);<br>
  `,

  `8.Modify the function increment by adding default parameters so that it will add 1 to number if value is not specified.<br>
  <br>

  const increment = (function() {<br>
    "use strict";<br>
    return function increment(number, value) {<br>
      return number + value;<br>
    };<br>
  })();<br>
  console.log(increment(5, 2)); // returns 7<br>
  console.log(increment(5)); // returns 6
  
`,

  `9.Modify the function sumso that it uses the rest operator and it works in the same way with any number of parameters.<br>
  <br>
  const sum = (function() {<br>
    "use strict";<br>
    return function sum(x, y, z) {<br>
      const args = [ x, y, z ];<br>
      return args.reduce((a, b) => a + b, 0);<br>
    };<br>
  })();<br>
  console.log(sum(1, 2, 3)); // 6`,

  `10.Copy all contents of arr1into another array arr2using the spread operator.<br>
  <br>
  const arr1 = ['JAN', 'FEB', 'MAR', 'APR', 'MAY'];<br>
  let arr2;<br>
  (function() {<br>
    "use strict";<br>
    arr2 = []; // change this line<br>
  })();<br>
  console.log(arr2);`,

  `11.Use destructuring to obtain the average temperature for tomorrow from the input object AVG_TEMPERATURES, and assign value with key tomorrow to tempOfTomorrow in line.<br>
  <br>

  const AVG_TEMPERATURES = {<br>
    today: 77.5,<br>
    tomorrow: 79<br>
  };<br>
  <br>
  function getTempOfTmrw(avgTemperatures) {<br>
    "use strict";<br>
    // change code below this line<br>
    const tempOfTomorrow = undefined; // change this line<br>
    // change code above this line<br>
    return tempOfTomorrow;<br>
  }<br>
  <br>
  console.log(getTempOfTmrw(AVG_TEMPERATURES)); // should be 79`,
  
  `12.Use destructuring assignment to obtain max of forecast.tomorrow and assign it to maxOfTomorrow.<br>
  <br>
  const LOCAL_FORECAST = {<br>
    today: { min: 72, max: 83 },<br>
    tomorrow: { min: 73.3, max: 84.6 }<br>
  };<br>
  <br>
  function getMaxOfTmrw(forecast) {<br>
    "use strict";<br>
    // change code below this line<br>
    const maxOfTomorrow = undefined; // change this line<br>
    // change code above this line<br>
    return maxOfTomorrow;<br>
  }<br>
  <br>
  console.log(getMaxOfTmrw(LOCAL_FORECAST)); // should be 84.6`,

  `13.Use destructuring assignment to swap the values of a and b so that a receives the value stored in b, and b receives the value stored in a. <br>
  <br>

  let a = 8, b = 6;<br>
  (() => {<br>
    "use strict";<br>
    // change code below this line<br>
    <br>
    // change code above this line<br>
  })();<br>
  console.log(a); // should be 6<br>
  console.log(b); // should be 8`,

  `14.Use destructuring assignment with the rest operator to perform an effective Array.prototype.slice() so that arr is a sub-array of the original array source with the first two elements omitted.<br>
  <br>
  const source = [1,2,3,4,5,6,7,8,9,10];<br>
  function removeFirstTwo(list) {<br>
    "use strict";<br>
    // change code below this line<br>
    arr = list; // change this<br>
    // change code above this line<br>
    return arr;<br>
  }<br>
  const arr = removeFirstTwo(source);<br>
  console.log(arr); // should be [3,4,5,6,7,8,9,10]<br>
  console.log(source); // should be [1,2,3,4,5,6,7,8,9,10];`,

  `15.Use destructuring assignment within the argument to the function half to send only max and min inside the function.<br>
  <br>
  const stats = {<br>
    max: 56.78,<br>
    standard_deviation: 4.34,<br>
    median: 34.54,<br>
    mode: 23.87,<br>
    min: -0.75,<br>
    average: 35.85<br>
  };<br>
  const half = (function() {<br>
    "use strict"; // do not change this line<br>
    <br>
    // change code below this line<br>
    return function half(stats) {<br>
      // use function argument destructuring<br>
      return (stats.max + stats.min) / 2.0;<br>
    };<br>
    // change code above this line<br>
    <br>
  })();<br>
  console.log(stats); // should be object<br>
  console.log(half(stats)); // should be 28.015`,

  `16.Use template literal syntax with backticks to display each entry of the result object's failure array. Each entry should be wrapped inside an li element with the class attribute text-warning, and listed within the resultDisplayArray.<br>

  <br>
  const result = {<br>
    success: ["max-length", "no-amd", "prefer-arrow-functions"],<br>
    failure: ["no-var", "var-on-top", "linebreak"],<br>
    skipped: ["id-blacklist", "no-dup-keys"]<br>
  };<br>
  function makeList(arr) {<br>
    "use strict";<br>
    <br>
    // change code below this line<br>
    const resultDisplayArray = null;<br>
    // change code above this line<br>
    <br>
    return resultDisplayArray;<br>
  }<br>
  /**<br>
   * makeList(result.failure) should return:<br>
   * [ '<li class="text-warning">no-var</li>',<br>
   *   '<li class="text-warning">var-on-top</li>', <br>
   *   '<li class="text-warning">linebreak</li>' ]<br>
   **/<br>
  const resultDisplayArray = makeList(result.failure);`,

  `17.Use simple fields with object literals to create and return a Person object.<br>
  <br>
  const createPerson = (name, age, gender) => {<br>
    "use strict";<br>
    // change code below this line<br>
    return {<br>
      name: name,<br>
      age: age,<br>
      gender: gender<br>
    };<br>
    // change code above this line<br>
  };<br>
  console.log(createPerson("Zodiac Hasbro", 56, "male")); // returns a proper object`,

  `18.Refactor the function setGear inside the object bicycle to use the shorthand syntax described above.<br>
  <br>
  // change code below this line<br>
  const bicycle = {<br>
    gear: 2,<br>
    setGear: function(newGear) {<br>
      "use strict";<br>
      this.gear = newGear;<br>
    }<br>
  };<br>
  // change code above this line<br>
  bicycle.setGear(3);<br>
  console.log(bicycle.gear);`,

  `19.Use class keyword and write a proper constructor to create the Vegetable class.
  The Vegetable lets you create a vegetable object, with a property name, to be passed to constructor.<br>
  <br>
  function makeClass() {<br>
    "use strict";<br>
    /* Alter code below this line */<br>
    <br>
    /* Alter code above this line */<br>
    return Vegetable;<br>
  }<br>
  const Vegetable = makeClass();<br>
  const carrot = new Vegetable('carrot');<br>
  console.log(carrot.name); // => should be 'carrot'`,

  `20.Use class keyword to create a Thermostat class. The constructor accepts Fahrenheit temperature.<br>
  Now create getter and setter in the class, to obtain the temperature in Celsius scale.<br>
  Remember that C = 5/9 * (F - 32) and F = C * 9.0 / 5 + 32, where F is the value of temperature in Fahrenheit scale, and C is the value of the same temperature in Celsius scale.<br>
  <br>
  function makeClass() {<br>
    "use strict";<br>
    /* Alter code below this line */<br>
    <br>
    /* Alter code above this line */<br>
    return Thermostat;<br>
  }<br>
  const Thermostat = makeClass();<br>
  const thermos = new Thermostat(76); // setting in Fahrenheit scale<br>
  let temp = thermos.temperature; // 24.44 in C <br>
  thermos.temperature = 26;<br>
  temp = thermos.temperature; // 26 in C`,

  `21.Add the appropriate import statement that will allow the current file to use the capitalizeString function. The file where this function lives is called "string_functions", and it is in the same directory as the current file.<br>
  <br>

  "use strict";<br>
  capitalizeString("hello!");`,

  `22.Below are two variables that I want to make available for other files to use. Utilizing the first way I demonstrated export, export the two variables.<br>
  <br>
  "use strict";<br>
  const foo = "bar";<br>
  const bar = "foo";`,

  `23.The code below requires the contents of a file, "capitalize_strings", found in the same directory as it, imported. Add the appropriate import *statement to the top of the file, using the object provided.<br>
  <br>
  "use strict";`,

  `24.The following function should be the fallback value for the module. Please add the necessary code to do so.<br>
  <br>
  "use strict";<br>
  function subtract(x,y) {return x - y;}`,

  `25.In the following code, please import the default export, subtract, from the file "math_functions", found in the same directory as this file.<br>
  <br>
  "use strict";<br>
  subtract(7,4);`
];


/***/ },
/* 11 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return javascriptFunctionalProgrammingAnswerArr; });
var javascriptFunctionalProgrammingAnswerArr = [
  {
    A0: `
    const prepareTea = () => 'greenTea';
    
    
    const getTea = (numOfCups) => {
      const teaCups = [];
      
      for(let cups = 1; cups <= numOfCups; cups += 1) {
        const teaCup = prepareTea();
        teaCups.push(teaCup);
      }
    
      return teaCups;
    };
    const tea4TeamFCC = getTea(40); 
    console.log(tea4TeamFCC);
  `.replace(/\s+/g, "")
  },

  {
    A1: `
    const prepareGreenTea = () => 'greenTea';
    
    const prepareBlackTea = () => 'blackTea';
    
    
    const getTea = (prepareTea, numOfCups) => {
      const teaCups = [];
    
      for(let cups = 1; cups <= numOfCups; cups += 1) {
        const teaCup = prepareTea();
        teaCups.push(teaCup);
      }
    
      return teaCups;
    };
    const tea4GreenTeamFCC = getTea(prepareGreenTea,27); 
    const tea4BlackTeamFCC = getTea(prepareBlackTea,13); 
    
    console.log(
      tea4GreenTeamFCC,
      tea4BlackTeamFCC
    );
    `.replace(/\s+/g, "")
  },

  { A2: `var fixedValue = 4;
  function incrementer () {
    return fixedValue + 1;
  }
  var newValue = incrementer(); 
  console.log(fixedValue); `.replace(/\s+/g, "") },

  {
    A3: `
    var fixedValue = 4;
    
    function incrementer (value) {
      return value + 1;
    }
    
    var newValue = incrementer(fixedValue);
    console.log(fixedValue); 
`.replace(/\s+/g, "")
  },

  {
    A4: `var bookList = ["The Hound of the Baskervilles", "On The Electrodynamics of Moving Bodies", "Philosophiæ Naturalis Principia Mathematica", "Disquisitiones Arithmeticae"];
    function add (bookName) {
      
      return bookList.push(bookName);
      
    }
    function add (arr, bookName) {
      let newArr = [...arr];  
      newArr.push(bookName);  
      return newArr; 
    }
    function remove (arr, bookName) {
      let newArr = [...arr];  
      if (newArr.indexOf(bookName) >= 0) {  
        newArr.splice(newArr.indexOf(bookName), 1); 
        return newArr; 
        }
    }
    var newBookList = add(bookList, 'A Brief History of Time');
    var newerBookList = remove(bookList, 'On The Electrodynamics of Moving Bodies');
    var newestBookList = remove(add(bookList, 'A Brief History of Time'), 'On The Electrodynamics of Moving Bodies');
    
    console.log(bookList);
    `.replace(/\s+/g, "")
  },

  {
    A5: `
    var watchList = [
                     {
                       "Title": "Inception",
                       "Year": "2010",
                       "Rated": "PG-13",
                       "Released": "16 Jul 2010",
                       "Runtime": "148 min",
                       "Genre": "Action, Adventure, Crime",
                       "Director": "Christopher Nolan",
                       "Writer": "Christopher Nolan",
                       "Actors": "Leonardo DiCaprio, Joseph Gordon-Levitt, Ellen Page, Tom Hardy",
                       "Plot": "A thief, who steals corporate secrets through use of dream-sharing technology, is given the inverse task of planting an idea into the mind of a CEO.",
                       "Language": "English, Japanese, French",
                       "Country": "USA, UK",
                       "Awards": "Won 4 Oscars. Another 143 wins & 198 nominations.",
                       "Poster": "http://ia.media-imdb.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_SX300.jpg",
                       "Metascore": "74",
                       "imdbRating": "8.8",
                       "imdbVotes": "1,446,708",
                       "imdbID": "tt1375666",
                       "Type": "movie",
                       "Response": "True"
                    },
                    {
                       "Title": "Interstellar",
                       "Year": "2014",
                       "Rated": "PG-13",
                       "Released": "07 Nov 2014",
                       "Runtime": "169 min",
                       "Genre": "Adventure, Drama, Sci-Fi",
                       "Director": "Christopher Nolan",
                       "Writer": "Jonathan Nolan, Christopher Nolan",
                       "Actors": "Ellen Burstyn, Matthew McConaughey, Mackenzie Foy, John Lithgow",
                       "Plot": "A team of explorers travel through a wormhole in space in an attempt to ensure humanity's survival.",
                       "Language": "English",
                       "Country": "USA, UK",
                       "Awards": "Won 1 Oscar. Another 39 wins & 132 nominations.",
                       "Poster": "http://ia.media-imdb.com/images/M/MV5BMjIxNTU4MzY4MF5BMl5BanBnXkFtZTgwMzM4ODI3MjE@._V1_SX300.jpg",
                       "Metascore": "74",
                       "imdbRating": "8.6",
                       "imdbVotes": "910,366",
                       "imdbID": "tt0816692",
                       "Type": "movie",
                       "Response": "True"
                    },
                    {
                       "Title": "The Dark Knight",
                       "Year": "2008",
                       "Rated": "PG-13",
                       "Released": "18 Jul 2008",
                       "Runtime": "152 min",
                       "Genre": "Action, Adventure, Crime",
                       "Director": "Christopher Nolan",
                       "Writer": "Jonathan Nolan (screenplay), Christopher Nolan (screenplay), Christopher Nolan (story), David S. Goyer (story), Bob Kane (characters)",
                       "Actors": "Christian Bale, Heath Ledger, Aaron Eckhart, Michael Caine",
                       "Plot": "When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, the caped crusader must come to terms with one of the greatest psychological tests of his ability to fight injustice.",
                       "Language": "English, Mandarin",
                       "Country": "USA, UK",
                       "Awards": "Won 2 Oscars. Another 146 wins & 142 nominations.",
                       "Poster": "http://ia.media-imdb.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_SX300.jpg",
                       "Metascore": "82",
                       "imdbRating": "9.0",
                       "imdbVotes": "1,652,832",
                       "imdbID": "tt0468569",
                       "Type": "movie",
                       "Response": "True"
                    },
                    {
                       "Title": "Batman Begins",
                       "Year": "2005",
                       "Rated": "PG-13",
                       "Released": "15 Jun 2005",
                       "Runtime": "140 min",
                       "Genre": "Action, Adventure",
                       "Director": "Christopher Nolan",
                       "Writer": "Bob Kane (characters), David S. Goyer (story), Christopher Nolan (screenplay), David S. Goyer (screenplay)",
                       "Actors": "Christian Bale, Michael Caine, Liam Neeson, Katie Holmes",
                       "Plot": "After training with his mentor, Batman begins his fight to free crime-ridden Gotham City from the corruption that Scarecrow and the League of Shadows have cast upon it.",
                       "Language": "English, Urdu, Mandarin",
                       "Country": "USA, UK",
                       "Awards": "Nominated for 1 Oscar. Another 15 wins & 66 nominations.",
                       "Poster": "http://ia.media-imdb.com/images/M/MV5BNTM3OTc0MzM2OV5BMl5BanBnXkFtZTYwNzUwMTI3._V1_SX300.jpg",
                       "Metascore": "70",
                       "imdbRating": "8.3",
                       "imdbVotes": "972,584",
                       "imdbID": "tt0372784",
                       "Type": "movie",
                       "Response": "True"
                    },
                    {
                       "Title": "Avatar",
                       "Year": "2009",
                       "Rated": "PG-13",
                       "Released": "18 Dec 2009",
                       "Runtime": "162 min",
                       "Genre": "Action, Adventure, Fantasy",
                       "Director": "James Cameron",
                       "Writer": "James Cameron",
                       "Actors": "Sam Worthington, Zoe Saldana, Sigourney Weaver, Stephen Lang",
                       "Plot": "A paraplegic marine dispatched to the moon Pandora on a unique mission becomes torn between following his orders and protecting the world he feels is his home.",
                       "Language": "English, Spanish",
                       "Country": "USA, UK",
                       "Awards": "Won 3 Oscars. Another 80 wins & 121 nominations.",
                       "Poster": "http://ia.media-imdb.com/images/M/MV5BMTYwOTEwNjAzMl5BMl5BanBnXkFtZTcwODc5MTUwMw@@._V1_SX300.jpg",
                       "Metascore": "83",
                       "imdbRating": "7.9",
                       "imdbVotes": "876,575",
                       "imdbID": "tt0499549",
                       "Type": "movie",
                       "Response": "True"
                    }
    ];
    
    var rating = watchList.map(function(movie) {
      return {
        title: movie["Title"],
        rating: movie["imdbRating"]
      }
    });
    
`.replace(/\s+/g, "")
  },

  {
    A6: `
    var s = [23, 65, 98, 5];
    Array.prototype.myMap = function(callback){
      var newArray = [];
      this.forEach(a => newArray.push(callback(a)));
      return newArray;
    };
    var new_s = s.myMap(function(item){
      return item * 2;
    });
`.replace(/\s+/g, "")
  },

  {
    A7: `
    var watchList = [
                     {  
                       "Title": "Inception",
                       "Year": "2010",
                       "Rated": "PG-13",
                       "Released": "16 Jul 2010",
                       "Runtime": "148 min",
                       "Genre": "Action, Adventure, Crime",
                       "Director": "Christopher Nolan",
                       "Writer": "Christopher Nolan",
                       "Actors": "Leonardo DiCaprio, Joseph Gordon-Levitt, Ellen Page, Tom Hardy",
                       "Plot": "A thief, who steals corporate secrets through use of dream-sharing technology, is given the inverse task of planting an idea into the mind of a CEO.",
                       "Language": "English, Japanese, French",
                       "Country": "USA, UK",
                       "Awards": "Won 4 Oscars. Another 143 wins & 198 nominations.",
                       "Poster": "http://ia.media-imdb.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_SX300.jpg",
                       "Metascore": "74",
                       "imdbRating": "8.8",
                       "imdbVotes": "1,446,708",
                       "imdbID": "tt1375666",
                       "Type": "movie",
                       "Response": "True"
                    },
                    {  
                       "Title": "Interstellar",
                       "Year": "2014",
                       "Rated": "PG-13",
                       "Released": "07 Nov 2014",
                       "Runtime": "169 min",
                       "Genre": "Adventure, Drama, Sci-Fi",
                       "Director": "Christopher Nolan",
                       "Writer": "Jonathan Nolan, Christopher Nolan",
                       "Actors": "Ellen Burstyn, Matthew McConaughey, Mackenzie Foy, John Lithgow",
                       "Plot": "A team of explorers travel through a wormhole in space in an attempt to ensure humanity's survival.",
                       "Language": "English",
                       "Country": "USA, UK",
                       "Awards": "Won 1 Oscar. Another 39 wins & 132 nominations.",
                       "Poster": "http://ia.media-imdb.com/images/M/MV5BMjIxNTU4MzY4MF5BMl5BanBnXkFtZTgwMzM4ODI3MjE@._V1_SX300.jpg",
                       "Metascore": "74",
                       "imdbRating": "8.6",
                       "imdbVotes": "910,366",
                       "imdbID": "tt0816692",
                       "Type": "movie",
                       "Response": "True"
                    },
                    {
                       "Title": "The Dark Knight",
                       "Year": "2008",
                       "Rated": "PG-13",
                       "Released": "18 Jul 2008",
                       "Runtime": "152 min",
                       "Genre": "Action, Adventure, Crime",
                       "Director": "Christopher Nolan",
                       "Writer": "Jonathan Nolan (screenplay), Christopher Nolan (screenplay), Christopher Nolan (story), David S. Goyer (story), Bob Kane (characters)",
                       "Actors": "Christian Bale, Heath Ledger, Aaron Eckhart, Michael Caine",
                       "Plot": "When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, the caped crusader must come to terms with one of the greatest psychological tests of his ability to fight injustice.",
                       "Language": "English, Mandarin",
                       "Country": "USA, UK",
                       "Awards": "Won 2 Oscars. Another 146 wins & 142 nominations.",
                       "Poster": "http://ia.media-imdb.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_SX300.jpg",
                       "Metascore": "82",
                       "imdbRating": "9.0",
                       "imdbVotes": "1,652,832",
                       "imdbID": "tt0468569",
                       "Type": "movie",
                       "Response": "True"
                    },
                    {  
                       "Title": "Batman Begins",
                       "Year": "2005",
                       "Rated": "PG-13",
                       "Released": "15 Jun 2005",
                       "Runtime": "140 min",
                       "Genre": "Action, Adventure",
                       "Director": "Christopher Nolan",
                       "Writer": "Bob Kane (characters), David S. Goyer (story), Christopher Nolan (screenplay), David S. Goyer (screenplay)",
                       "Actors": "Christian Bale, Michael Caine, Liam Neeson, Katie Holmes",
                       "Plot": "After training with his mentor, Batman begins his fight to free crime-ridden Gotham City from the corruption that Scarecrow and the League of Shadows have cast upon it.",
                       "Language": "English, Urdu, Mandarin",
                       "Country": "USA, UK",
                       "Awards": "Nominated for 1 Oscar. Another 15 wins & 66 nominations.",
                       "Poster": "http://ia.media-imdb.com/images/M/MV5BNTM3OTc0MzM2OV5BMl5BanBnXkFtZTYwNzUwMTI3._V1_SX300.jpg",
                       "Metascore": "70",
                       "imdbRating": "8.3",
                       "imdbVotes": "972,584",
                       "imdbID": "tt0372784",
                       "Type": "movie",
                       "Response": "True"
                    },
                    {
                       "Title": "Avatar",
                       "Year": "2009",
                       "Rated": "PG-13",
                       "Released": "18 Dec 2009",
                       "Runtime": "162 min",
                       "Genre": "Action, Adventure, Fantasy",
                       "Director": "James Cameron",
                       "Writer": "James Cameron",
                       "Actors": "Sam Worthington, Zoe Saldana, Sigourney Weaver, Stephen Lang",
                       "Plot": "A paraplegic marine dispatched to the moon Pandora on a unique mission becomes torn between following his orders and protecting the world he feels is his home.",
                       "Language": "English, Spanish",
                       "Country": "USA, UK",
                       "Awards": "Won 3 Oscars. Another 80 wins & 121 nominations.",
                       "Poster": "http://ia.media-imdb.com/images/M/MV5BMTYwOTEwNjAzMl5BMl5BanBnXkFtZTcwODc5MTUwMw@@._V1_SX300.jpg",
                       "Metascore": "83",
                       "imdbRating": "7.9",
                       "imdbVotes": "876,575",
                       "imdbID": "tt0499549",
                       "Type": "movie",
                       "Response": "True"
                    }
    ];
    
    var filteredList = watchList.map(function(e) {
      return {title: e["Title"], rating: e["imdbRating"]}
    }).filter((e) => e.rating >= 8);
    
    console.log(filteredList); 
    
    
    console.log(filteredList); 
`.replace(/\s+/g, "")
  },

  {
    A8: `
    var s = [23, 65, 98, 5];
    
    Array.prototype.myFilter = function(callback){
      var newArray = [];
      for (let i=0; i<this.length;i++){
        if(callback(this[i])=== true ){
     newArray.push(this[i]);
        }
      }
      return newArray;
    
    };
    
    var new_s = s.myFilter(function(item){
      return item % 2 === 1;
    });
`.replace(/\s+/g, "")
  },

  {
    A9: `function sliceArray(anim, beginSlice, endSlice) {
      return anim.slice(beginSlice, endSlice);
    }
    var inputAnim = ["Cat", "Dog", "Tiger", "Zebra", "Ant"];
    sliceArray(inputAnim, 1, 3);`.replace(/\s+/g, "")
  },

  {
    A10: `
    function nonMutatingSplice(cities) {
      return cities.slice(0, 3); 
    }
    var inputCities = ["Chicago", "Delhi", "Islamabad", "London", "Berlin"];
    nonMutatingSplice(inputCities);`.replace(/\s+/g, "")
  },

  { A11: `function nonMutatingConcat(original, attach) {
    return original.concat(attach); 
    
  }
  var first = [1, 2, 3];
  var second = [4, 5];
  nonMutatingConcat(first, second); `.replace(/\s+/g, "") },

  
  { A12: `function nonMutatingPush(original, newItem) {
    return original.concat(newItem);
  }
  
  var first = [1, 2, 3];
  var second = [4, 5];
  nonMutatingPush(first, second);`.replace(/\s+/g, "") },

  { A13: `
  var watchList = [
                   {  
                     "Title": "Inception",
                     "Year": "2010",
                     "Rated": "PG-13",
                     "Released": "16 Jul 2010",
                     "Runtime": "148 min",
                     "Genre": "Action, Adventure, Crime",
                     "Director": "Christopher Nolan",
                     "Writer": "Christopher Nolan",
                     "Actors": "Leonardo DiCaprio, Joseph Gordon-Levitt, Ellen Page, Tom Hardy",
                     "Plot": "A thief, who steals corporate secrets through use of dream-sharing technology, is given the inverse task of planting an idea into the mind of a CEO.",
                     "Language": "English, Japanese, French",
                     "Country": "USA, UK",
                     "Awards": "Won 4 Oscars. Another 143 wins & 198 nominations.",
                     "Poster": "http://ia.media-imdb.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_SX300.jpg",
                     "Metascore": "74",
                     "imdbRating": "8.8",
                     "imdbVotes": "1,446,708",
                     "imdbID": "tt1375666",
                     "Type": "movie",
                     "Response": "True"
                  },
                  {  
                     "Title": "Interstellar",
                     "Year": "2014",
                     "Rated": "PG-13",
                     "Released": "07 Nov 2014",
                     "Runtime": "169 min",
                     "Genre": "Adventure, Drama, Sci-Fi",
                     "Director": "Christopher Nolan",
                     "Writer": "Jonathan Nolan, Christopher Nolan",
                     "Actors": "Ellen Burstyn, Matthew McConaughey, Mackenzie Foy, John Lithgow",
                     "Plot": "A team of explorers travel through a wormhole in space in an attempt to ensure humanity's survival.",
                     "Language": "English",
                     "Country": "USA, UK",
                     "Awards": "Won 1 Oscar. Another 39 wins & 132 nominations.",
                     "Poster": "http://ia.media-imdb.com/images/M/MV5BMjIxNTU4MzY4MF5BMl5BanBnXkFtZTgwMzM4ODI3MjE@._V1_SX300.jpg",
                     "Metascore": "74",
                     "imdbRating": "8.6",
                     "imdbVotes": "910,366",
                     "imdbID": "tt0816692",
                     "Type": "movie",
                     "Response": "True"
                  },
                  {
                     "Title": "The Dark Knight",
                     "Year": "2008",
                     "Rated": "PG-13",
                     "Released": "18 Jul 2008",
                     "Runtime": "152 min",
                     "Genre": "Action, Adventure, Crime",
                     "Director": "Christopher Nolan",
                     "Writer": "Jonathan Nolan (screenplay), Christopher Nolan (screenplay), Christopher Nolan (story), David S. Goyer (story), Bob Kane (characters)",
                     "Actors": "Christian Bale, Heath Ledger, Aaron Eckhart, Michael Caine",
                     "Plot": "When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, the caped crusader must come to terms with one of the greatest psychological tests of his ability to fight injustice.",
                     "Language": "English, Mandarin",
                     "Country": "USA, UK",
                     "Awards": "Won 2 Oscars. Another 146 wins & 142 nominations.",
                     "Poster": "http://ia.media-imdb.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_SX300.jpg",
                     "Metascore": "82",
                     "imdbRating": "9.0",
                     "imdbVotes": "1,652,832",
                     "imdbID": "tt0468569",
                     "Type": "movie",
                     "Response": "True"
                  },
                  {  
                     "Title": "Batman Begins",
                     "Year": "2005",
                     "Rated": "PG-13",
                     "Released": "15 Jun 2005",
                     "Runtime": "140 min",
                     "Genre": "Action, Adventure",
                     "Director": "Christopher Nolan",
                     "Writer": "Bob Kane (characters), David S. Goyer (story), Christopher Nolan (screenplay), David S. Goyer (screenplay)",
                     "Actors": "Christian Bale, Michael Caine, Liam Neeson, Katie Holmes",
                     "Plot": "After training with his mentor, Batman begins his fight to free crime-ridden Gotham City from the corruption that Scarecrow and the League of Shadows have cast upon it.",
                     "Language": "English, Urdu, Mandarin",
                     "Country": "USA, UK",
                     "Awards": "Nominated for 1 Oscar. Another 15 wins & 66 nominations.",
                     "Poster": "http://ia.media-imdb.com/images/M/MV5BNTM3OTc0MzM2OV5BMl5BanBnXkFtZTYwNzUwMTI3._V1_SX300.jpg",
                     "Metascore": "70",
                     "imdbRating": "8.3",
                     "imdbVotes": "972,584",
                     "imdbID": "tt0372784",
                     "Type": "movie",
                     "Response": "True"
                  },
                  {
                     "Title": "Avatar",
                     "Year": "2009",
                     "Rated": "PG-13",
                     "Released": "18 Dec 2009",
                     "Runtime": "162 min",
                     "Genre": "Action, Adventure, Fantasy",
                     "Director": "James Cameron",
                     "Writer": "James Cameron",
                     "Actors": "Sam Worthington, Zoe Saldana, Sigourney Weaver, Stephen Lang",
                     "Plot": "A paraplegic marine dispatched to the moon Pandora on a unique mission becomes torn between following his orders and protecting the world he feels is his home.",
                     "Language": "English, Spanish",
                     "Country": "USA, UK",
                     "Awards": "Won 3 Oscars. Another 80 wins & 121 nominations.",
                     "Poster": "http://ia.media-imdb.com/images/M/MV5BMTYwOTEwNjAzMl5BMl5BanBnXkFtZTcwODc5MTUwMw@@._V1_SX300.jpg",
                     "Metascore": "83",
                     "imdbRating": "7.9",
                     "imdbVotes": "876,575",
                     "imdbID": "tt0499549",
                     "Type": "movie",
                     "Response": "True"
                  }
  ];
  
  var averageRating = watchList.filter(x => x.Director === "Christopher Nolan").map(x => Number(x.imdbRating)).reduce((x1, x2) => x1 + x2) / watchList.filter(x => x.Director === "Christopher Nolan").length;
  
  
  console.log(averageRating);`.replace(/\s+/g, "") },

  { A14: `function alphabeticalOrder(arr) {
    return arr.sort(function(a, b) {
      return a === b ? 0 : a > b ? 1 : -1;
    });
  }
  alphabeticalOrder(["a", "d", "c", "a", "z", "g"]);`.replace(/\s+/g, "") },

  {
    A15: `var globalArray = [5, 6, 3, 2, 9];
    function nonMutatingSort(arr) {
      // Add your code below this line
      return [].concat(arr).sort(function(a, b) {
        return a - b;
      });
    }
    nonMutatingSort(globalArray); `.replace(/\s+/g, "")
  },

  {
    A16: `function splitify(str) {
      return str.split(/\W/);
    }
    splitify("Hello World,I-am code");`.replace(/\s+/g, "")
  },

  {
    A17: `function sentensify(str) {
      return str.split(/\W/).join(' '); 
    }
    sentensify("May-the-force-be-with-you");
`.replace(/\s+/g, "")
  },

  {
    A18: `
    
var globalTitle = "Winter Is Coming";

function urlSlug(title) {
  return title.toLowerCase().trim().split(/\s+/).join('-');
}
var winterComing = urlSlug(globalTitle); 
`.replace(/\s+/g, "")
  },

  {
    A19: `function checkPositive(arr) {
      return arr.every(function(value) {
          return value > 0;
      });
  }
  checkPositive([1, 2, 3, -4, 5]);
`.replace(/\s+/g, "")
  },

  {
    A20: `function checkPositive(arr) {
      return arr.some((elem) => elem > 0);
    }
    checkPositive([1, 2, 3, -4, 5]);`.replace(
      /\s+/g,
      ""
    )
  },

  {
    A21: `function add(x) {
      return function(y) {
        return function(z) {
          return x + y + z;
        }
      }
    }
    add(10)(20)(30);`.replace(
      /\s+/g,
      ""
    )
  }
];


/***/ },
/* 12 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return javascriptFunctionalProgrammingQuestionArr; });
var javascriptFunctionalProgrammingQuestionArr = [
  `0.In the code editor, the prepareTea and getTea functions are already defined for you. Call the getTea function to get 40 cups of tea for the team, and store them in the tea4TeamFCC variable.<br>
  /**<br>
 * A long process to prepare tea.<br>
 * @return {string} A cup of tea.<br>
 **/<br>
const prepareTea = () => 'greenTea';<br>
<br>
/**<br>
 * Get given number of cups of tea.<br>
 * @param {number} numOfCups Number of required cups of tea.<br>
 * @return {Array<string>} Given amount of tea cups.<br>
 **/<br>
const getTea = (numOfCups) => {<br>
  const teaCups = [];<br>
  <br>
  for(let cups = 1; cups <= numOfCups; cups += 1) {<br>
    const teaCup = prepareTea();<br>
    teaCups.push(teaCup);<br>
  }<br>
  <br>
  return teaCups;<br>
};<br>
<br>
// Add your code below this line<br>
<br>
const tea4TeamFCC = null; // :(<br>
<br>
// Add your code above this line<br>
<br>
console.log(tea4TeamFCC);`,

  `1.Prepare 27 cups of green tea and 13 cups of black tea and store them in tea4GreenTeamFCC and tea4BlackTeamFCC variables, respectively.<br> Note that the getTea function has been modified so it now takes a function as the first argument.<br>
  /**<br>
 * A long process to prepare green tea.<br>
 * @return {string} A cup of green tea.<br>
 **/<br>
const prepareGreenTea = () => 'greenTea';<br>
/**<br>
 * A long process to prepare black tea.<br>
 * @return {string} A cup of black tea.<br>
 **/<br>
const prepareBlackTea = () => 'blackTea';<br>
<br>
/**<br>
 * Get given number of cups of tea.<br>
 * @param {function():string} prepareTea The type of tea preparing function.<br>
 * @param {number} numOfCups Number of required cups of tea.<br>
 * @return {Array<string>} Given amount of tea cups.
 **/<br>
const getTea = (prepareTea, numOfCups) => {<br>
  const teaCups = [];<br>
  <br>
  for(let cups = 1; cups <= numOfCups; cups += 1) {<br>
    const teaCup = prepareTea();<br>
    teaCups.push(teaCup);<br>
  }<br>
  <br>
  return teaCups;<br>
};<br>
<br>
// Add your code below this line<br>
<br>
const tea4GreenTeamFCC = null; // :(<br>
const tea4BlackTeamFCC = null; // :(<br>
<br>
// Add your code above this line<br>
<br>
console.log(<br>
  tea4GreenTeamFCC,<br>
  tea4BlackTeamFCC<br>
);`,

  `2.Fill in the code for the function incrementer so it returns the value of the global variable fixedValue increased by one.<br>
  // the global variable<br>
var fixedValue = 4;<br>
<br>
function incrementer () {<br>
  // Add your code below this line<br>
  <br>
  <br>
  // Add your code above this line<br>
}<br>
<br>
var newValue = incrementer(); // Should equal 5<br>
console.log(fixedValue); // Should print 4`,

  `3.Let's update the incrementer function to clearly declare its dependencies.<br>
  <br>
  Write the incrementer function so it takes an argument, and then increases the value by one.<br>
  // the global variable<br>
var fixedValue = 4;<br>
<br>
// Add your code below this line<br>
function incrementer () {<br>
  <br>
  <br>
  // Add your code above this line<br>
}<br>
<br>
var newValue = incrementer(fixedValue); // Should equal 5<br>
console.log(fixedValue); // Should print 4`,

  `4.Refactor (rewrite) the code so the global array bookList is not changed inside either function. <br>The add function should add the given bookName to the end of an array. <br>The remove function should remove the given bookName from an array. Both functions should return an array, and any new parameters should be added before the bookName one.<br>
  // the global variable<br>
var bookList = ["The Hound of the Baskervilles", "On The Electrodynamics of Moving Bodies", "Philosophiæ Naturalis Principia Mathematica", "Disquisitiones Arithmeticae"];<br>
<br>
/* This function should add a book to the list and return the list */<br>
// New parameters should come before the bookName one<br>
<br>
// Add your code below this line<br>
function add (bookName) {<br>
  <br>
  return bookList.push(bookName);<br>
  <br>
  // Add your code above this line<br>
}<br>
<br>
/* This function should remove a book from the list and return the list */<br>
// New parameters should come before the bookName one<br>
<br>
// Add your code below this line<br>
function remove (bookName) {<br>
  if (bookList.indexOf(bookName) >= 0) {<br>
    <br>
    return bookList.splice(0, 1, bookName);<br>
    <br>
    // Add your code above this line<br>
    }<br>
}<br>
<br>
var newBookList = add(bookList, 'A Brief History of Time');<br>
var newerBookList = remove(bookList, 'On The Electrodynamics of Moving Bodies');<br>
var newestBookList = remove(add(bookList, 'A Brief History of Time'), 'On The Electrodynamics of Moving Bodies');<br>
<br>
console.log(bookList);<br>
`,



  `5.The watchList array holds objects with information on several movies. Use map to pull the title and rating from watchList and save the new array in the rating variable. <br>The code in the editor currently uses a for loop to do this, replace the loop functionality with your map expression.<br>
  // the global variable<br>
var watchList = [<br>
                 {  <br>
                   "Title": "Inception",<br>
                   "Year": "2010",<br>
                   "Rated": "PG-13",<br>
                   "Released": "16 Jul 2010",<br>
                   "Runtime": "148 min",<br>
                   "Genre": "Action, Adventure, Crime",<br>
                   "Director": "Christopher Nolan",<br>
                   "Writer": "Christopher Nolan",<br>
                   "Actors": "Leonardo DiCaprio, Joseph Gordon-Levitt, Ellen Page, Tom Hardy",<br>
                   "Plot": "A thief, who steals corporate secrets through use of dream-sharing technology, is given the inverse task of planting an idea into the mind of a CEO.",<br>
                   "Language": "English, Japanese, French",<br>
                   "Country": "USA, UK",<br>
                   "Awards": "Won 4 Oscars. Another 143 wins & 198 nominations.",<br>
                   "Poster": "http://ia.media-imdb.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_SX300.jpg",<br>
                   "Metascore": "74",<br>
                   "imdbRating": "8.8",<br>
                   "imdbVotes": "1,446,708",<br>
                   "imdbID": "tt1375666",<br>
                   "Type": "movie",<br>
                   "Response": "True"<br>
                },<br>
                {  <br>
                   "Title": "Interstellar",<br>
                   "Year": "2014",<br>
                   "Rated": "PG-13",<br>
                   "Released": "07 Nov 2014",<br>
                   "Runtime": "169 min",<br>
                   "Genre": "Adventure, Drama, Sci-Fi",<br>
                   "Director": "Christopher Nolan",<br>
                   "Writer": "Jonathan Nolan, Christopher Nolan",<br>
                   "Actors": "Ellen Burstyn, Matthew McConaughey, Mackenzie Foy, John Lithgow",<br>
                   "Plot": "A team of explorers travel through a wormhole in space in an attempt to ensure humanity's survival.",<br>
                   "Language": "English",<br>
                   "Country": "USA, UK",<br>
                   "Awards": "Won 1 Oscar. Another 39 wins & 132 nominations.",<br>
                   "Poster": "http://ia.media-imdb.com/images/M/MV5BMjIxNTU4MzY4MF5BMl5BanBnXkFtZTgwMzM4ODI3MjE@._V1_SX300.jpg",<br>
                   "Metascore": "74",<br>
                   "imdbRating": "8.6",<br>
                   "imdbVotes": "910,366",<br>
                   "imdbID": "tt0816692",<br>
                   "Type": "movie",<br>
                   "Response": "True"<br>
                },<br>
                {<br>
                   "Title": "The Dark Knight",<br>
                   "Year": "2008",<br>
                   "Rated": "PG-13",<br>
                   "Released": "18 Jul 2008",<br>
                   "Runtime": "152 min",<br>
                   "Genre": "Action, Adventure, Crime",<br>
                   "Director": "Christopher Nolan",<br>
                   "Writer": "Jonathan Nolan (screenplay), Christopher Nolan (screenplay), Christopher Nolan (story), David S. Goyer (story), Bob Kane (characters)",<br>
                   "Actors": "Christian Bale, Heath Ledger, Aaron Eckhart, Michael Caine",<br>
                   "Plot": "When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, the caped crusader must come to terms with one of the greatest psychological tests of his ability to fight injustice.",<br>
                   "Language": "English, Mandarin",<br>
                   "Country": "USA, UK",<br>
                   "Awards": "Won 2 Oscars. Another 146 wins & 142 nominations.",<br>
                   "Poster": "http://ia.media-imdb.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_SX300.jpg",<br>
                   "Metascore": "82",<br>
                   "imdbRating": "9.0",<br>
                   "imdbVotes": "1,652,832",<br>
                   "imdbID": "tt0468569",<br>
                   "Type": "movie",<br>
                   "Response": "True"<br>
                },<br>
                {  <br>
                   "Title": "Batman Begins",<br>
                   "Year": "2005",<br>
                   "Rated": "PG-13",<br>
                   "Released": "15 Jun 2005",<br>
                   "Runtime": "140 min",<br>
                   "Genre": "Action, Adventure",<br>
                   "Director": "Christopher Nolan",<br>
                   "Writer": "Bob Kane (characters), David S. Goyer (story), Christopher Nolan (screenplay), David S. Goyer (screenplay)",<br>
                   "Actors": "Christian Bale, Michael Caine, Liam Neeson, Katie Holmes",<br>
                   "Plot": "After training with his mentor, Batman begins his fight to free crime-ridden Gotham City from the corruption that Scarecrow and the League of Shadows have cast upon it.",<br>
                   "Language": "English, Urdu, Mandarin",<br>
                   "Country": "USA, UK",<br>
                   "Awards": "Nominated for 1 Oscar. Another 15 wins & 66 nominations.",<br>
                   "Poster": "http://ia.media-imdb.com/images/M/MV5BNTM3OTc0MzM2OV5BMl5BanBnXkFtZTYwNzUwMTI3._V1_SX300.jpg",<br>
                   "Metascore": "70",<br>
                   "imdbRating": "8.3",<br>
                   "imdbVotes": "972,584",<br>
                   "imdbID": "tt0372784",<br>
                   "Type": "movie",<br>
                   "Response": "True"<br>
                },<br>
                {<br>
                   "Title": "Avatar",<br>
                   "Year": "2009",<br>
                   "Rated": "PG-13",<br>
                   "Released": "18 Dec 2009",<br>
                   "Runtime": "162 min",<br>
                   "Genre": "Action, Adventure, Fantasy",<br>
                   "Director": "James Cameron",<br>
                   "Writer": "James Cameron",<br>
                   "Actors": "Sam Worthington, Zoe Saldana, Sigourney Weaver, Stephen Lang",<br>
                   "Plot": "A paraplegic marine dispatched to the moon Pandora on a unique mission becomes torn between following his orders and protecting the world he feels is his home.",<br>
                   "Language": "English, Spanish",<br>
                   "Country": "USA, UK",<br>
                   "Awards": "Won 3 Oscars. Another 80 wins & 121 nominations.",<br>
                   "Poster": "http://ia.media-imdb.com/images/M/MV5BMTYwOTEwNjAzMl5BMl5BanBnXkFtZTcwODc5MTUwMw@@._V1_SX300.jpg",<br>
                   "Metascore": "83",<br>
                   "imdbRating": "7.9",<br>
                   "imdbVotes": "876,575",<br>
                   "imdbID": "tt0499549",<br>
                   "Type": "movie",<br>
                   "Response": "True"<br>
                }<br>
];<br>
<br>
// Add your code below this line<br>
<br>
var rating = [];<br>
for(var i=0; i < watchList.length; i++){<br>
  rating.push({title: watchList[i]["Title"],  rating: watchList[i]["imdbRating"]});<br>
}<br>
<br>
// Add your code above this line<br>
<br>
console.log(rating); `,

  `6.Write your own Array.prototype.myMap(), which should behave exactly like Array.prototype.map(). You may use a for loop or the forEach method.<br>
  // the global Array<br>
var s = [23, 65, 98, 5];<br>
<br>
Array.prototype.myMap = function(callback){<br>
  var newArray = [];<br>
  // Add your code below this line<br>
  <br>
  // Add your code above this line<br>
  return newArray;<br>
  <br>
};<br>
<br>
var new_s = s.myMap(function(item){<br>
  return item * 2;<br>
});`,

  `7.The variable watchList holds an array of objects with information on several movies. Use a combination of filter and map to return a new array of objects with only title and rating keys, but where imdbRating is greater than or equal to 8.0.<br> Note that the rating values are saved as strings in the object and you may want to convert them into numbers to perform mathematical operations on them.<br>
  // the global variable<br>
var watchList = [<br>
                 {  <br>
                   "Title": "Inception",<br>
                   "Year": "2010",<br>
                   "Rated": "PG-13",<br>
                   "Released": "16 Jul 2010",<br>
                   "Runtime": "148 min",<br>
                   "Genre": "Action, Adventure, Crime",<br>
                   "Director": "Christopher Nolan",<br>
                   "Writer": "Christopher Nolan",<br>
                   "Actors": "Leonardo DiCaprio, Joseph Gordon-Levitt, Ellen Page, Tom Hardy",
                   "Plot": "A thief, who steals corporate secrets through use of dream-sharing technology, is given the inverse task of planting an idea into the mind of a CEO.",<br>
                   "Language": "English, Japanese, French",
                   "Country": "USA, UK",<br>
                   "Awards": "Won 4 Oscars. Another 143 wins & 198 nominations.",<br>
                   "Poster": "http://ia.media-imdb.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_SX300.jpg",<br>
                   "Metascore": "74",<br>
                   "imdbRating": "8.8",<br>
                   "imdbVotes": "1,446,708",<br>
                   "imdbID": "tt1375666",<br>
                   "Type": "movie",<br>
                   "Response": "True"<br>
                },<br>
                {  <br>
                   "Title": "Interstellar",<br>
                   "Year": "2014",<br>
                   "Rated": "PG-13",<br>
                   "Released": "07 Nov 2014",<br>
                   "Runtime": "169 min",<br>
                   "Genre": "Adventure, Drama, Sci-Fi",<br>
                   "Director": "Christopher Nolan",<br>
                   "Writer": "Jonathan Nolan, Christopher Nolan",<br>
                   "Actors": "Ellen Burstyn, Matthew McConaughey, Mackenzie Foy, John Lithgow",<br>
                   "Plot": "A team of explorers travel through a wormhole in space in an attempt to ensure humanity's survival.",<br>
                   "Language": "English",<br>
                   "Country": "USA, UK",<br>
                   "Awards": "Won 1 Oscar. Another 39 wins & 132 nominations.",<br>
                   "Poster": "http://ia.media-imdb.com/images/M/MV5BMjIxNTU4MzY4MF5BMl5BanBnXkFtZTgwMzM4ODI3MjE@._V1_SX300.jpg",<br>
                   "Metascore": "74",<br>
                   "imdbRating": "8.6",<br>
                   "imdbVotes": "910,366",<br>
                   "imdbID": "tt0816692",<br>
                   "Type": "movie",<br>
                   "Response": "True"<br>
                },<br>
                {<br>
                   "Title": "The Dark Knight",<br>
                   "Year": "2008",<br>
                   "Rated": "PG-13",<br>
                   "Released": "18 Jul 2008",<br>
                   "Runtime": "152 min",<br>
                   "Genre": "Action, Adventure, Crime",<br>
                   "Director": "Christopher Nolan",<br>
                   "Writer": "Jonathan Nolan (screenplay), Christopher Nolan (screenplay), Christopher Nolan (story), David S. Goyer (story), Bob Kane (characters)",<br>
                   "Actors": "Christian Bale, Heath Ledger, Aaron Eckhart, Michael Caine",<br>
                   "Plot": "When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, the caped crusader must come to terms with one of the greatest psychological tests of his ability to fight injustice.",<br>
                   "Language": "English, Mandarin",<br>
                   "Country": "USA, UK",<br>
                   "Awards": "Won 2 Oscars. Another 146 wins & 142 nominations.",<br>
                   "Poster": "http://ia.media-imdb.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_SX300.jpg",<br>
                   "Metascore": "82",<br>
                   "imdbRating": "9.0",<br>
                   "imdbVotes": "1,652,832",<br>
                   "imdbID": "tt0468569",<br>
                   "Type": "movie",<br>
                   "Response": "True"<br>
                },<br>
                {  <br>
                   "Title": "Batman Begins",<br>
                   "Year": "2005",<br>
                   "Rated": "PG-13",<br>
                   "Released": "15 Jun 2005",<br>
                   "Runtime": "140 min",<br>
                   "Genre": "Action, Adventure",<br>
                   "Director": "Christopher Nolan",<br>
                   "Writer": "Bob Kane (characters), David S. Goyer (story), Christopher Nolan (screenplay), David S. Goyer (screenplay)",<br>
                   "Actors": "Christian Bale, Michael Caine, Liam Neeson, Katie Holmes",<br>
                   "Plot": "After training with his mentor, Batman begins his fight to free crime-ridden Gotham City from the corruption that Scarecrow and the League of Shadows have cast upon it.",<br>
                   "Language": "English, Urdu, Mandarin",<br>
                   "Country": "USA, UK",<br>
                   "Awards": "Nominated for 1 Oscar. Another 15 wins & 66 nominations.",<br>
                   "Poster": "http://ia.media-imdb.com/images/M/MV5BNTM3OTc0MzM2OV5BMl5BanBnXkFtZTYwNzUwMTI3._V1_SX300.jpg",<br>
                   "Metascore": "70",<br>
                   "imdbRating": "8.3",<br>
                   "imdbVotes": "972,584",<br>
                   "imdbID": "tt0372784",<br>
                   "Type": "movie",<br>
                   "Response": "True"<br>
                },<br>
                {<br>
                   "Title": "Avatar",<br>
                   "Year": "2009",<br>
                   "Rated": "PG-13",<br>
                   "Released": "18 Dec 2009",<br>
                   "Runtime": "162 min",<br>
                   "Genre": "Action, Adventure, Fantasy",<br>
                   "Director": "James Cameron",<br>
                   "Writer": "James Cameron",<br>
                   "Actors": "Sam Worthington, Zoe Saldana, Sigourney Weaver, Stephen Lang",<br>
                   "Plot": "A paraplegic marine dispatched to the moon Pandora on a unique mission becomes torn between following his orders and protecting the world he feels is his home.",<br>
                   "Language": "English, Spanish",<br>
                   "Country": "USA, UK",<br>
                   "Awards": "Won 3 Oscars. Another 80 wins & 121 nominations.",<br>
                   "Poster": "http://ia.media-imdb.com/images/M/MV5BMTYwOTEwNjAzMl5BMl5BanBnXkFtZTcwODc5MTUwMw@@._V1_SX300.jpg",<br>
                   "Metascore": "83",<br>
                   "imdbRating": "7.9",<br>
                   "imdbVotes": "876,575",<br>
                   "imdbID": "tt0499549",<br>
                   "Type": "movie",<br>
                   "Response": "True"<br>
                }<br>
];<br>
<br>
// Add your code below this line<br>
<br>
var filteredList;<br>
<br>
// Add your code above this line<br>
<br>
console.log(filteredList); 
  `,

  `8.Write your own Array.prototype.myFilter(), which should behave exactly like Array.prototype.filter(). You may use a for loop or the Array.prototype.forEach() method.<br>
  // the global Array<br>
var s = [23, 65, 98, 5];<br>
<br>
Array.prototype.myFilter = function(callback){<br>
  var newArray = [];<br>
  // Add your code below this line<br>
  <br>
  // Add your code above this line<br>
  return newArray;<br>
  <br>
};<br>
<br>
var new_s = s.myFilter(function(item){<br>
  return item % 2 === 1;<br>
});<br>
`,

  `9.Use the slice method in the sliceArray function to return part of the anim array given the provided beginSlice and endSlice indices. The function should return an array.<br>
  function sliceArray(anim, beginSlice, endSlice) {<br>
    // Add your code below this line<br>
    <br>
    <br>
    // Add your code above this line<br>
  }<br>
  var inputAnim = ["Cat", "Dog", "Tiger", "Zebra", "Ant"];
  sliceArray(inputAnim, 1, 3);`,

  `10.Rewrite the function nonMutatingSplice by using slice instead of splice. It should limit the provided cities array to a length of 3, and return a new array with only the first three items.<br>
  <br>
  Do not mutate the original array provided to the function.<br>
  function nonMutatingSplice(cities) {<br>
    // Add your code below this line<br>
    return cities.splice(3);<br>
    <br>
    // Add your code above this line<br>
  }<br>
  var inputCities = ["Chicago", "Delhi", "Islamabad", "London", "Berlin"];<br>
  nonMutatingSplice(inputCities);<br>
  `,

  `11.Use the concat method in the nonMutatingConcat function to concatenate attach to the end of original. The function should return the concatenated array.<br>
  function nonMutatingConcat(original, attach) {<br>
    // Add your code below this line<br>
    <br>
    <br>
    // Add your code above this line<br>
  }<br>
  var first = [1, 2, 3];<br>
  var second = [4, 5];<br>
  nonMutatingConcat(first, second);`,
  
  `12.Change the nonMutatingPush function so it uses concat to add newItem to the end of original instead of push. The function should return an array.<br>
  function nonMutatingPush(original, newItem) {<br>
    // Add your code below this line<br>
    return original.push(newItem);<br>
    <br>
    // Add your code above this line<br>
  }<br>
  var first = [1, 2, 3];<br>
  var second = [4, 5];<br>
  nonMutatingPush(first, second);`,

  `13.The variable watchList holds an array of objects with information on several movies. Use reduce to find the average IMDB rating of the movies directed by Christopher Nolan. <br>Recall from prior challenges how to filter data and map over it to pull what you need. You may need to create other variables, but save the final average into the variable averageRating.<br> Note that the rating values are saved as strings in the object and need to be converted into numbers before they are used in any mathematical operations.<br>
  // the global variable<br>
var watchList = [<br>
                 {  <br>
                   "Title": "Inception",<br>
                   "Year": "2010",<br>
                   "Rated": "PG-13",<br>
                   "Released": "16 Jul 2010",<br>
                   "Runtime": "148 min",<br>
                   "Genre": "Action, Adventure, Crime",<br>
                   "Director": "Christopher Nolan",<br>
                   "Writer": "Christopher Nolan",<br>
                   "Actors": "Leonardo DiCaprio, Joseph Gordon-Levitt, Ellen Page, Tom Hardy",<br>
                   "Plot": "A thief, who steals corporate secrets through use of dream-sharing technology, is given the inverse task of planting an idea into the mind of a CEO.",<br>
                   "Language": "English, Japanese, French",<br>
                   "Country": "USA, UK",<br>
                   "Awards": "Won 4 Oscars. Another 143 wins & 198 nominations.",<br>
                   "Poster": "http://ia.media-imdb.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_SX300.jpg",<br>
                   "Metascore": "74",<br>
                   "imdbRating": "8.8",<br>
                   "imdbVotes": "1,446,708",<br>
                   "imdbID": "tt1375666",<br>
                   "Type": "movie",<br>
                   "Response": "True"<br>
                },<br>
                {  <br>
                   "Title": "Interstellar",<br>
                   "Year": "2014",<br>
                   "Rated": "PG-13",<br>
                   "Released": "07 Nov 2014",<br>
                   "Runtime": "169 min",<br>
                   "Genre": "Adventure, Drama, Sci-Fi",<br>
                   "Director": "Christopher Nolan",<br>
                   "Writer": "Jonathan Nolan, Christopher Nolan",<br>
                   "Actors": "Ellen Burstyn, Matthew McConaughey, Mackenzie Foy, John Lithgow",<br>
                   "Plot": "A team of explorers travel through a wormhole in space in an attempt to ensure humanity's survival.",<br>
                   "Language": "English",<br>
                   "Country": "USA, UK",<br>
                   "Awards": "Won 1 Oscar. Another 39 wins & 132 nominations.",<br>
                   "Poster": "http://ia.media-imdb.com/images/M/MV5BMjIxNTU4MzY4MF5BMl5BanBnXkFtZTgwMzM4ODI3MjE@._V1_SX300.jpg",<br>
                   "Metascore": "74",<br>
                   "imdbRating": "8.6",<br>
                   "imdbVotes": "910,366",<br>
                   "imdbID": "tt0816692",<br>
                   "Type": "movie",<br>
                   "Response": "True"<br>
                },<br>
                {<br>
                   "Title": "The Dark Knight",<br>
                   "Year": "2008",<br>
                   "Rated": "PG-13",<br>
                   "Released": "18 Jul 2008",<br>
                   "Runtime": "152 min",<br>
                   "Genre": "Action, Adventure, Crime",<br>
                   "Director": "Christopher Nolan",<br>
                   "Writer": "Jonathan Nolan (screenplay), Christopher Nolan (screenplay), Christopher Nolan (story), David S. Goyer (story), Bob Kane (characters)",<br>
                   "Actors": "Christian Bale, Heath Ledger, Aaron Eckhart, Michael Caine",<br>
                   "Plot": "When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, the caped crusader must come to terms with one of the greatest psychological tests of his ability to fight injustice.",<br>
                   "Language": "English, Mandarin",<br>
                   "Country": "USA, UK",<br>
                   "Awards": "Won 2 Oscars. Another 146 wins & 142 nominations.",<br>
                   "Poster": "http://ia.media-imdb.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_SX300.jpg",<br>
                   "Metascore": "82",<br>
                   "imdbRating": "9.0",<br>
                   "imdbVotes": "1,652,832",<br>
                   "imdbID": "tt0468569",<br>
                   "Type": "movie",<br>
                   "Response": "True"<br>
                },<br>
                {  <br>
                   "Title": "Batman Begins",<br>
                   "Year": "2005",<br>
                   "Rated": "PG-13",<br>
                   "Released": "15 Jun 2005",<br>
                   "Runtime": "140 min",<br>
                   "Genre": "Action, Adventure",<br>
                   "Director": "Christopher Nolan",<br>
                   "Writer": "Bob Kane (characters), David S. Goyer (story), Christopher Nolan (screenplay), David S. Goyer (screenplay)",<br>
                   "Actors": "Christian Bale, Michael Caine, Liam Neeson, Katie Holmes",<br>
                   "Plot": "After training with his mentor, Batman begins his fight to free crime-ridden Gotham City from the corruption that Scarecrow and the League of Shadows have cast upon it.",<br>
                   "Language": "English, Urdu, Mandarin",<br>
                   "Country": "USA, UK",<br>
                   "Awards": "Nominated for 1 Oscar. Another 15 wins & 66 nominations.",<br>
                   "Poster": "http://ia.media-imdb.com/images/M/MV5BNTM3OTc0MzM2OV5BMl5BanBnXkFtZTYwNzUwMTI3._V1_SX300.jpg",<br>
                   "Metascore": "70",<br>
                   "imdbRating": "8.3",<br>
                   "imdbVotes": "972,584",<br>
                   "imdbID": "tt0372784",<br>
                   "Type": "movie",<br>
                   "Response": "True"<br>
                },<br>
                {<br>
                   "Title": "Avatar",<br>
                   "Year": "2009",<br>
                   "Rated": "PG-13",<br>
                   "Released": "18 Dec 2009",<br>
                   "Runtime": "162 min",<br>
                   "Genre": "Action, Adventure, Fantasy",<br>
                   "Director": "James Cameron",<br>
                   "Writer": "James Cameron",<br>
                   "Actors": "Sam Worthington, Zoe Saldana, Sigourney Weaver, Stephen Lang",<br>
                   "Plot": "A paraplegic marine dispatched to the moon Pandora on a unique mission becomes torn between following his orders and protecting the world he feels is his home.",<br>
                   "Language": "English, Spanish",<br>
                   "Country": "USA, UK",<br>
                   "Awards": "Won 3 Oscars. Another 80 wins & 121 nominations.",<br>
                   "Poster": "http://ia.media-imdb.com/images/M/MV5BMTYwOTEwNjAzMl5BMl5BanBnXkFtZTcwODc5MTUwMw@@._V1_SX300.jpg",<br>
                   "Metascore": "83",<br>
                   "imdbRating": "7.9",<br>
                   "imdbVotes": "876,575",<br>
                   "imdbID": "tt0499549",<br>
                   "Type": "movie",<br>
                   "Response": "True"<br>
                }<br>
];<br>
<br>
// Add your code below this line<br>
<br>
var averageRating;<br>
<br>
// Add your code above this line<br>
<br>
console.log(averageRating); `,

  `14.Use the sort method in the alphabeticalOrder function to sort the elements of arr in alphabetical order.<br>
  function alphabeticalOrder(arr) {<br>
    // Add your code below this line<br>
    <br>
    <br>
    // Add your code above this line<br>
  }<br>
  alphabeticalOrder(["a", "d", "c", "a", "z", "g"]);`,

  `15.Use the sort method in the nonMutatingSort function to sort the elements of an array in ascending order. The function should return a new array, and not mutate the globalArray variable.<br>
  var globalArray = [5, 6, 3, 2, 9];<br>
function nonMutatingSort(arr) {<br>
  // Add your code below this line<br>
  <br>
  <br>
  // Add your code above this line<br>
}<br>
nonMutatingSort(globalArray);`,

  `16.Use the split method inside the splitify function to split str into an array of words. The function should return the array. Note that the words are not always separated by spaces, and the array should not contain punctuation.<br>
  function splitify(str) {<br>
    // Add your code below this line<br>
    <br>
    <br>
    // Add your code above this line<br>
  }<br>
  splitify("Hello World,I-am code");`,

  `17.Use the join method (among others) inside the sentensify function to make a sentence from the words in the string str. <br>The function should return a string. For example, "I-like-Star-Wars" would be converted to "I like Star Wars". For this challenge, do not use the replace method.<br>
  function sentensify(str) {<br>
    // Add your code below this line<br>
    <br>
    <br>
    // Add your code above this line<br>
  }<br>
  sentensify("May-the-force-be-with-you");`,

  `18.Fill in the urlSlug function so it converts a string title and returns the hyphenated version for the URL. You can use any of the methods covered in this section, and don't use replace. Here are the requirements:<br>
  <br>
  The input is a string with spaces and title-cased words<br>
  <br>
  The output is a string with the spaces between words replaced by a hyphen (-)<br>
  <br>
  The output should be all lower-cased letters<br>
  <br>
  The output should not have any spaces<br>
  // the global variable<br>
var globalTitle = "Winter Is Coming";<br>
<br>
// Add your code below this line<br>
function urlSlug(title) {<br>
  <br>
  <br>
}<br>
// Add your code above this line<br>
<br>
var winterComing = urlSlug(globalTitle); // Should be "winter-is-coming"`,

  `19.Use the every method inside the checkPositive function to check if every element in arr is positive. The function should return a Boolean value.<br>
  function checkPositive(arr) {<br>
    // Add your code below this line<br>
    <br>
    <br>
    // Add your code above this line<br>
  }<br>
  checkPositive([1, 2, 3, -4, 5]);`,

  `20.Use the some method inside the checkPositive function to check if any element in arr is positive. The function should return a Boolean value.<br>
  function checkPositive(arr) {<br>
    // Add your code below this line<br>
    <br>
    <br>
    // Add your code above this line<br>
  }<br>
  checkPositive([1, 2, 3, -4, 5]);`,

  `21.Fill in the body of the add function so it uses currying to add parameters x, y, and z.<br>
  function add(x) {<br>
    // Add your code below this line<br>
    <br>
    <br>
    // Add your code above this line<br>
  }<br>
  add(10)(20)(30);`
];


/***/ },
/* 13 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return javascriptObjOrientProgAnswerArr; });
var javascriptObjOrientProgAnswerArr = [
  {
    A0: `let dog = {
      name: "George",
      numLegs: 4
    };
  `.replace(/\s+/g, "")
  },

  {
    A1: `let dog = {
      name: "Spot",
      numLegs: 4
    };
    console.log(dog.name);
    console.log(dog.numLegs);`.replace(/\s+/g, "")
  },

  { A2: `let dog = {
    name: "Spot",
    numLegs: 4,
    sayLegs: function() {
      return "This dog has " + dog.numLegs + " legs.";
    }
  };
  
  dog.sayLegs();`.replace(/\s+/g, "") },

  {
    A3: `let dog = {
      name: "Spot",
      numLegs: 4,
      sayLegs: function() {return "This dog has " + this.numLegs + " legs.";}
    };
    
    dog.sayLegs();
`.replace(/\s+/g, "")
  },

  {
    A4: `function Dog() {
      this.name = "Geogre",
      this.color = "White",
      this.numLegs = 4;
    }`.replace(/\s+/g, "")
  },

  {
    A5: `function Dog() {
      this.name = "Rupert";
      this.color = "brown";
      this.numLegs = 4;
    }
    let hound = new Dog();
`.replace(/\s+/g, "")
  },

  {
    A6: `function Dog(name, color) {
      this.name = name;
      this.color = color;
      this.numLegs = 4;
    }
    let terrier = new Dog("George","White");
`.replace(/\s+/g, "")
  },

  {
    A7: `
    function House(numBedrooms) {
      this.numBedrooms = numBedrooms;
    }
    let myHouse = new House(5);
    myHouse instanceof House;
`.replace(/\s+/g, "")
  },

  {
    A8: `function Bird(name) {
      this.name = name;
      this.numLegs = 2;
    }
    let canary = new Bird("Tweety");
    let ownProps = [];
    for(let property in canary) {
      if(canary.hasOwnProperty(property)) {
        ownProps.push(property);
      }
    }
`.replace(/\s+/g, "")
  },

  {
    A9: `function Dog(name) {
      this.name = name;
    }
    
    Dog.prototype.numLegs = 4;
    
    let beagle = new Dog("Snoopy");`.replace(/\s+/g, "")
  },

  {
    A10: `function Dog(name) {
      this.name = name;
    }
    
    Dog.prototype.numLegs = 4;
    
    let beagle = new Dog("Snoopy");
    
    let ownProps = [];
    let prototypeProps = [];
    
    for (let property in beagle) {
      if(Dog.hasOwnProperty(property)) {
        ownProps.push(property)
      }
      else {
        prototypeProps.push(property)
      }
    }`.replace(/\s+/g, "")
  },

  { A11: `function Dog(name) {
    this.name = name;
  }
  function joinDogFraternity(candidate) {
    if(candidate.constructor === Dog) {
      return true;
    }
    else {
      return false;
    }
  }`.replace(/\s+/g, "") },

  
  { A12: `function Dog(name) {
    this.name = name; 
  }
  
  Dog.prototype = {
    numLegs: 2,
    eat(){
      console.log('nom nom nom');
    },
    describe(){
      console.log("My name is " + this.name);
    }
  };`.replace(/\s+/g, "") },

  { A13: `function Dog(name) {
    this.name = name; 
  }
  Dog.prototype = {
  
    constructor: Dog, 
  
    numLegs: 2, 
    eat: function() {
      console.log("nom nom nom"); 
    }, 
    describe: function() {
      console.log("My name is " + this.name); 
    }
  };`.replace(/\s+/g, "") },

  { A14: `function Dog(name) {
    this.name = name;
  }
  let beagle = new Dog("Snoopy");
  Dog.prototype.isPrototypeOf(beagle);
  `.replace(/\s+/g, "") },

  {
    A15: `function Dog(name) {
      this.name = name;
    }
    
    let beagle = new Dog("Snoopy");
    
    Dog.prototype.isPrototypeOf(beagle);
    Object.prototype.isPrototypeOf(Dog.prototype); `.replace(/\s+/g, "")
  },
  {
    A16: `function Cat(name) {
      this.name = name; 
    };
    
    Cat.prototype = {
      constructor: Cat
    };
    
    function Bear(name) {
      this.name = name; 
    };
    
    Bear.prototype = {
      constructor: Bear
    };
    
    function Animal() { };
    
    Animal.prototype = {
      constructor: Animal,
      eat: function() {
        console.log("nom nom nom");
      }
    };`.replace(/\s+/g, "")
  },

  {
    A17: `function Animal() { }

    Animal.prototype = {
      constructor: Animal, 
      eat: function() {
        console.log("nom nom nom");
      }
    };
    
    let duck = Object.create(Animal.prototype); 
    let beagle = Object.create(Animal.prototype);; 
    
    duck.eat(); 
    beagle.eat(); 
`.replace(/\s+/g, "")
  },

  {
    A18: `
    function Animal() { }

Animal.prototype = {
  constructor: Animal,
  eat: function() {
    console.log("nom nom nom");
  }
};

function Dog() { }
Dog.prototype = Object.create(Animal.prototype);

let beagle = new Dog();
beagle.eat();  
`.replace(/\s+/g, "")
  },

  {
    A19: `function Animal() { }
    function Bird() { }
    function Dog() { }
    
    Bird.prototype = Object.create(Animal.prototype);
    Dog.prototype = Object.create(Animal.prototype);
    Bird.prototype.constructor = Bird;
    Dog.prototype.constructor = Dog;
    
    let duck = new Bird();
    let beagle = new Dog();
`.replace(/\s+/g, "")
  },

  {
    A20: `function Animal() { }
    Animal.prototype.eat = function() { console.log("nom nom nom"); };
    
    function Dog() { }
    Dog.prototype = Object.create(Animal.prototype);
    Dog.prototype.constructor = Dog;
    Dog.prototype.bark = function() {
        console.log("Woof woof!");
    };
    
    let beagle = new Dog();
    
    beagle.eat(); 
    beagle.bark(); `.replace(
      /\s+/g,
      ""
    )
  },

  {
    A21: `function Bird() { }

    Bird.prototype.fly = function() { return "I am flying!"; };
    
    function Penguin() { }
    Penguin.prototype = Object.create(Bird.prototype);
    Penguin.prototype.constructor = Penguin;
    Penguin.prototype.fly = function() {
        return  "Alas, this is a flightless bird.";
    };
    let penguin = new Penguin();
    console.log(penguin.fly());`.replace(
      /\s+/g,
      ""
    )
  },

  {
    A22: `let bird = {
      name: "Donald",
      numLegs: 2
    };
    
    let boat = {
      name: "Warrior",
      type: "race-boat"
    };
    let glideMixin = function(obj) {
        obj.glide = function() {
            console.log("Gliding!");
        }
    };
    glideMixin(bird);
    glideMixin(boat);`.replace(
      /\s+/g,
      ""
    )
  },

  {
    A23: `function Bird() {
      let weight = 15;
      
      this.getWeight = function() {
        return weight;
      };
      
    }`.replace(
      /\s+/g,
      ""
    )
  },

  {
    A24: `(function() {
      console.log("A cozy nest is ready");
    })();`.replace(/\s+/g, "")
  },

  {
    A25: `let funModule = (function() {
      return {
        isCuteMixin: function(obj) {
          obj.isCute = function() {
            return true;
          };
        },
        singMixin: function(obj) {
          obj.sing = function() {
             console.log("Singing to an awesome tune");
          };
        }
      }
    })();`.replace(/\s+/g, "")
  }
];


/***/ },
/* 14 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return javascriptObjOrientProgQuestionArr; });
var javascriptObjOrientProgQuestionArr = [
  `0.Create a dog object with name and numLegs properties, and set them to a string and a number, respectively.<br>
  let dog = {<br>
    <br>
  };`,

  `1.Print both properties of the dog object below to your console.<br>
  let dog = {<br>
    name: "Spot",<br>
    numLegs: 4<br>
  };<br>
  // Add your code below this line<br>
  
  `,

  `2.Using the dog object, give it a method called sayLegs. The method should return the sentence "This dog has 4 legs."<br>
  let dog = {<br>
    name: "Spot",<br>
    numLegs: 4,<br>
    <br>
  };<br>
  <br>
  dog.sayLegs();`,

  `3.Modify the dog.sayLegs method to remove any references to dog. Use the duck example for guidance.<br>
  let dog = {<br>
    name: "Spot",<br>
    numLegs: 4,<br>
    sayLegs: function() {return "This dog has " + dog.numLegs + " legs.";}<br>
  };<br>
  <br>
  dog.sayLegs();`,

  `4.Create a constructor, Dog, with properties name, color, and numLegs that are set to a string, a string, and a number, respectively.<br>

`,

  `5.Use the Dog constructor from the last lesson to create a new instance of Dog, assigning it to a variable hound.<br>
  function Dog() {<br>
    this.name = "Rupert";<br>
    this.color = "brown";<br>
    this.numLegs = 4;<br>
  }<br>
  // Add your code below this line<br>
  
  `,

  `6.Create another Dog constructor. This time, set it up to take the parameters name and color, and have the property numLegs fixed at 4. <br>Then create a new Dog saved in a variable terrier. Pass it two strings as arguments for the name and color properties.<br>
  function Dog() {<br>
    <br>
  }<br>
  
  
  `,

  `7.Create a new instance of the House constructor, calling it myHouse and passing a number of bedrooms. <br>Then, use instanceof to verify that it is an instance of House.<br>
  /* jshint expr: true */<br>
  <br>
function House(numBedrooms) {<br>
  this.numBedrooms = numBedrooms;<br>
}<br>
<br>
// Add your code below this line<br>

  `,

  `8.Add the own properties of canary to the array ownProps.<br>
  function Bird(name) {<br>
    this.name = name;<br>
    this.numLegs = 2;<br>
  }<br>
  <br>
  let canary = new Bird("Tweety");<br>
  let ownProps = [];<br>
  // Add your code below this line<br>
  
  
  
`,

  `9.Add a numLegs property to the prototype of Dog<br>
  function Dog(name) {<br>
    this.name = name;<br>
  }<br>
  
  <br>
  
  // Add your code above this line<br>
  let beagle = new Dog("Snoopy");`,

  `10.Add all of the own properties of beagle to the array ownProps.<br> Add all of the prototype properties of Dog to the array prototypeProps.<br>
  function Dog(name) {<br>
    this.name = name;<br>
  }<br>
  <br>
  Dog.prototype.numLegs = 4;<br>
  <br>
  let beagle = new Dog("Snoopy");<br>
  <br>
  let ownProps = [];<br>
  let prototypeProps = [];<br>
  <br>
  // Add your code below this line 
  `,

  `11.Write a joinDogFraternity function that takes a candidate parameter and, using the constructor property, return true if the candidate is a Dog, otherwise return false.<br>
  function Dog(name) {<br>
    this.name = name;<br>
  }<br>
  <br>
  // Add your code below this line<br>
  function joinDogFraternity(candidate) {<br>
    <br>
  }
  `,
  
  `12.Add the property numLegs and the two methods eat() and describe() to the prototype of Dog by setting the prototype to a new object.<br>
  function Dog(name) {<br>
    this.name = name; <br>
  }<br>
  <br>
  Dog.prototype = {<br>
    // Add your code below this line<br>
    <br>
  };`,

  `13.Define the constructor property on the Dog prototype.<br>
  function Dog(name) {<br>
    this.name = name; <br>
  }<br>
  <br>
  // Modify the code below this line<br>
  Dog.prototype = {<br>
    <br>
    numLegs: 2, <br>
    eat: function() {<br>
      console.log("nom nom nom"); <br>
    }, <br>
    describe: function() {<br>
      console.log("My name is " + this.name); <br>
    }<br>
  };`,

  `14.Use isPrototypeOf to check the prototype of beagle.<br>
  function Dog(name) {<br>
    this.name = name;<br>
  }<br>
  <br>
  let beagle = new Dog("Snoopy");<br>
  <br>
  // Add your code below this line<br>
  
  `,

  `15.Modify the code to show the correct prototype chain.<br>
  function Dog(name) {<br>
    this.name = name;<br>
  }<br>
  <br>
  let beagle = new Dog("Snoopy");<br>
  <br>
  Dog.prototype.isPrototypeOf(beagle);  // => true<br>
  <br>
  // Fix the code below so that it evaluates to true<br>
  ???.isPrototypeOf(Dog.prototype);<br>
  `,

  `16.The eat method is repeated in both Cat and Bear. Edit the code in the spirit of DRY by moving the eat method to the Animal supertype.<br>
  function Cat(name) {<br>
    this.name = name; <br>
  }<br>
  <br>
  Cat.prototype = {<br>
    constructor: Cat, <br>
    eat: function() {<br>
      console.log("nom nom nom");<br>
    }<br>
  };<br>
  <br>
  function Bear(name) {<br>
    this.name = name; <br>
  }<br>
  <br>
  Bear.prototype = {<br>
    constructor: Bear, <br>
    eat: function() {<br>
      console.log("nom nom nom");<br>
    }<br>
  };<br>
  <br>
  function Animal() { }<br>
  <br>
  Animal.prototype = {<br>
    constructor: Animal,<br>
    <br>
  };`,

  `17.Use Object.create to make two instances of Animal named duck and beagle.<br>
  function Animal() { }<br>
  <br>
Animal.prototype = {<br>
  constructor: Animal, <br>
  eat: function() {<br>
    console.log("nom nom nom");<br>
  }<br>
};<br>
<br>
// Add your code below this line<br>
<br>
let duck; // Change this line<br>
let beagle; // Change this line<br>
<br>
duck.eat(); // Should print "nom nom nom"<br>
beagle.eat(); // Should print "nom nom nom" `,

  `18.Modify the code so that instances of Dog inherit from Animal.<br>
  function Animal() { }<br>
  <br>
Animal.prototype = {<br>
  constructor: Animal,<br>
  eat: function() {<br>
    console.log("nom nom nom");<br>
  }<br>
};<br>
<br>
function Dog() { }<br>
<br>
// Add your code below this line<br>

<br>
let beagle = new Dog();<br>
beagle.eat();  // Should print "nom nom nom"`,

  `19.Fix the code so duck.constructor and beagle.constructor return their respective constructors.<br>
  function Animal() { }<br>
function Bird() { }<br>
function Dog() { }<br>
<br>
Bird.prototype = Object.create(Animal.prototype);<br>
Dog.prototype = Object.create(Animal.prototype);<br>
<br>
// Add your code below this line<br>
<br>
<br>

let duck = new Bird();<br>
let beagle = new Dog();`,

  `20.Add all necessary code so the Dog object inherits from Animal and the Dog's prototype constructor is set to Dog. <br> Then add a bark() method to the Dog object so that beagle can both eat() and bark(). <br>The bark() method should print "Woof!" to the console.<br>
  function Animal() { }<br>
Animal.prototype.eat = function() { console.log("nom nom nom"); };<br>
<br>
function Dog() { }<br>
<br>
// Add your code below this line<br>

<br>
<br>

// Add your code above this line<br>
<br>
let beagle = new Dog();<br>
<br>
beagle.eat(); // Should print "nom nom nom"<br>
beagle.bark(); // Should print "Woof!"`,

  `21.Override the fly() method for Penguin so that it returns "Alas, this is a flightless bird."<br>
  function Bird() { }<br>
  <br>
Bird.prototype.fly = function() { return "I am flying!"; };<br>
<br>
function Penguin() { }<br>
Penguin.prototype = Object.create(Bird.prototype);<br>
Penguin.prototype.constructor = Penguin;<br>
<br>
// Add your code below this line<br>
<br>

<br>
// Add your code above this line<br>
<br>
let penguin = new Penguin();<br>
console.log(penguin.fly());`,

  `22.Create a mixin named glideMixin that defines a method named glide. <br>Then use the glideMixin to give both bird and boat the ability to glide.<br>
  let bird = {<br>
    name: "Donald",<br>
    numLegs: 2<br>
  };<br>
  <br>
  let boat = {<br>
    name: "Warrior",<br>
    type: "race-boat"<br>
  };<br>
  <br>
  // Add your code below this line<br>
  <br>
  `,

  `23.Change how weight is declared in the Bird function so it is a private variable.<br> Then, create a method getWeight that returns the value of weight.<br>
  function Bird() {<br>
    this.weight = 15;<br>
    <br>
    <br>
  }`,

  `24.Rewrite the function makeNest and remove its call so instead it's an anonymous immediately invoked function expression (IIFE).<br>
  function makeNest() {<br>
    console.log("A cozy nest is ready");<br>
  }<br>
  <br>
  makeNest(); `,

  `25.Create a module named funModule to wrap the two mixins isCuteMixin and singMixin. funModule should return an object.<br>
  let isCuteMixin = function(obj) {<br>
    obj.isCute = function() {<br>
      return true;<br>
    };<br>
  };<br>
  let singMixin = function(obj) {<br>
    obj.sing = function() {<br>
      console.log("Singing to an awesome tune");<br>
    };<br>
  };`
];


/***/ },
/* 15 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return javascriptQuestionArr; });
var javascriptQuestionArr = [
  `0.Use the var keyword to create a variable called myName.`,

  `1.Assign the value 7 to variable a.<br>
Assign the contents of a to variable b.`,

  `2.Define a variable a with var and initialize it to a value of 9.`,

  `3.Initialize the three variables a, b, and c with 5, 10, and "I am a" respectively so that they will not be undefined.<br> 
// Initialize these three variables<br> 
var a;<br> 
var b;<br> 
var c;<br> 
<br> 
// Do not change code below this line<br> 
<br> 
a = a + 1;<br> 
b = b + 5;<br> 
c = c + " String!";`,

  `4.Modify the existing declarations and assignments so their names use camelCase.
Do not create any new variables.<br> 
// Declarations<br>
var StUdLyCapVaR;<br>
var properCamelCase;<br>
var TitleCaseOver;<br>
<br>
// Assignments<br>
STUDLYCAPVAR = 10;<br>
PRoperCAmelCAse = "A String";<br>
tITLEcASEoVER = 9000;
`,

  `5.Change the 0 so that sum will equal 20.<br>
var sum = 10 + 0;`,

  `6.Change the 0 so the difference is 12.<br>
var difference = 45 - 0;`,

  `7.Change the 0 so that product will equal 80.<br>
var product = 8 * 0;`,

  `8.Change the 0 so that the quotient is equal to 2.<br>
var quotient = 66 / 0;
`,

  `9.Change the code to use the ++ operator on myVar.<br>
var myVar = 87;<br>
myVar = myVar + 1;`,

  `10.Change the code to use the -- operator on myVar.<br>
var myVar = 11;<br>
myVar = myVar - 1;`,

  `11.Create a variable myDecimal and give it a decimal value with a fractional part (e.g. 5.7).`,

  `12.Change the 0.0 so that product will equal 5.0.<br>
var product = 2.0 * 0.0;`,

  `13.Change the 0.0 so that quotient will equal to 2.2.<br>
var quotient = 0.0 / 2.0;`,

  `14.Set remainder equal to the remainder of 11 divided by 3 using the remainder (%) operator.`,

  `15.Convert the assignments for a, b, and c to use the += operator.<br>
var a = 3;<br>
var b = 17;<br>
var c = 12;<br>
<br>
a = a + 12;<br>
b = 9 + b;<br>
c = c + 7;<br>`,

  `16.Convert the assignments for a, b, and c to use the -= operator.<br>
var a = 11;<br>
var b = 9;<br>
var c = 3;<br>
<br>
a = a - 6;<br>
b = b - 15;<br>
c = c - 1;<br>`,

  `17.Convert the assignments for a, b, and c to use the *= operator.<br>
var a = 5;<br>
var b = 12;<br>
var c = 4.6;<br>
<br>
a = a * 5;<br>
b = 3 * b;<br>
c = c * 10;`,

  `18.Convert the assignments for a, b, and c to use the /= operator.<br>
var a = 48;<br>
var b = 108;<br>
var c = 33;<br>
<br>
a = a / 12;<br>
b = b / 4;<br>
c = c / 11;`,

  `19.Create two new string variables: myFirstName and myLastName and assign them the values of your first and last name, respectively.`,

  `20.Use backslashes to assign a string to the myStr variable so that if you were to print it to the console, you would see:<br>
<br>
I am a "double quoted" string inside "double quotes".`,

  `21.Change the provided string to a string with single quotes at the beginning and end and no escape characters.<br>
<br>
Right now, the <a> tag in the string uses double quotes everywhere. You will need to change the outer quotes to single quotes so you can remove the escape characters.<br>
<br>
var myStr = "<a href=\"http://www.example.com\" target=\"_blank\">Link</a>";`,

  `22.Code	Output<br>
\'	single quote<br>
\"	double quote<br>
\\	backslash<br>
\n	newline<br>
\r	carriage return<br>
\t	tab<br>
\b	backspace<br>
\f	form feed<br>
Assign the following three lines of text into the single variable myStr using escape sequences.
FirstLine<br>
&nbsp;&nbsp;&nbsp;&nbsp;\SecondLine<br>
ThirdLine<br>
You will need to use escape sequences to insert special characters correctly.`,

  `23.Build myStr from the strings "This is the start. " and "This is the end." using the + operator.`,

  `24.Build myStr over several lines by concatenating these two strings: "This is the first sentence. " and "This is the second sentence." using the += operator. Start by assigning the first string to myStr, then add on the second string.`,

  `25.Set myName to a string equal to your name and build myStr with myName between the strings "My name is " and " and I am well!"`,

  `26.Set someAdjective to "awesome"and append it to myStr using the += operator.<br>
var someAdjective;<br>
var myStr = "Learning to code is ";`,

  `27.Use the .length property to count the number of characters in the lastName variable and assign it to lastNameLength.<br>
var lastNameLength = 0;<br>
var lastName = "Lovelace";<br>
<br>
lastNameLength = lastName;
`,

  `28.Use bracket notation to find the first character in the lastName variable and assign it to firstLetterOfLastName.<br>
var firstLetterOfLastName = "";<br>
var lastName = "Lovelace";<br>
<br>
firstLetterOfLastName = lastName;`,

  `29.Correct the assignment to myStr so it contains the string value of Hello World<br>
var myStr = "Jello World";
myStr[0] = "H";`,

  `30.Let's try to set thirdLetterOfLastName to equal the third letter of the lastName variable using bracket notation.<br>
var lastName = "Lovelace";<br>
var thirdLetterOfLastName = lastName;`,

  `31.Use bracket notation to find the last character in the lastName variable.<br>
var lastName = "Lovelace";<br>
var lastLetterOfLastName = lastName;`,

  `32.Use bracket notation to find the second-to-last character in the lastName string.<br>
var lastName = "Lovelace";<br>
var secondToLastLetterOfLastName = lastName;`,

  `33.We provide you with a noun, a verb, an adjective and an adverb. You need to form a complete sentence using words of your choice, along with the words we provide.<br>

You will need to use the string concatenation operator + to build a new string, using the provided variables: myNoun, myAdjective, myVerb, and myAdverb.
The result should be complete sentence.<br>
function wordBlanks(myNoun, myAdjective, myVerb, myAdverb){<br>var result = "";<br>
// Your code below this line<br>
return result;<br>
}<br>

wordBlanks("dog", "big", "ran", "quickly");
`,

  `34.Modify the new array myArray so that it contains both a string "test" and a number 0(in that order).<br>
var myArray;`,

  `35.Create a 2 nested arrays called myArray."the universe", 42, "everything", 101010.<br>
var myArray = [];`,

  `36.Create a variable called myData and set it to equal the first value of myArray using bracket notation.<br>
var myArray = [50,60,70];`,

  `37.Modify the data stored at index 0 of myArray to a value of 45.<br>
var myArray = [18,64,99];`,

  `38.Using bracket notation select an element from myArray such that myData is equal to 8.<br>
var myArray = [[1,2,3], [4,5,6], [7,8,9], [[10,11,12], 13, 14]];`,

  `39.Push ["dog", 3] onto the end of the myArray variable.<br>
var myArray = [["John", 23], ["cat", 2]];
`,

  `40.Use the .pop() function to remove the last item from myArray, assigning the "popped off" value to removedFromMyArray.<br>
var myArray = [["John", 23], ["cat", 2]];`,

  `41.Use the .shift() function to remove the first item from myArray, assigning the "shifted off" value to removedFromMyArray.<br>
var myArray = [["John", 23], ["dog", 3]];`,

  `42.Add ["Paul",35] to the beginning of the myArray variable using unshift().<br>
var myArray = [["John", 23], ["dog", 3]];<br>
myArray.shift();`,

  `43.Create a shopping list in the variable myList. The list should be a multi-dimensional array containing several sub-arrays.<br>

The first element in each sub-array should contain a string with the name of the item. The second element should be a number representing the quantity i.e.<br>

["Chocolate Bar", 15]<br>

There should be at least 5 sub-arrays in the list.
"Canned Beans", 3,"Milk Galon", 1,"Cereal", 2,"Toilet Paper", 12,"Sack of Rice", 1;`,

  `44.Create a function called reusableFunction which prints "Hi World" to the dev console.<br>
Call the function.`,

  `45.Create a function called functionWithArgs that accepts two arguments a and b and outputs their sum to the dev console.<br>
Call the function with two numbers as arguments. 10 and 5 for test. 
`,

  `46.Using var, declare a global variable myGlobal outside of any function. Initialize it with a value of 10.<br>
<br>
Inside function fun1, assign 5 to oopsGlobal without using the var keyword.<br>
// Declare your variable here
<br>
function fun1() {<br>
  // Assign 5 to oopsGlobal Here
  <br>
}
<br>
// Only change code above this line<br>
function fun2() {<br>
  var output = "";<br>
  if (typeof myGlobal != "undefined") {<br>
    output += "myGlobal: " + myGlobal;<br>
  }<br>
  if (typeof oopsGlobal != "undefined") {<br>
    output += " oopsGlobal: " + oopsGlobal;<br>
  }<br>
  console.log(output);<br>
}`,

  `47.Declare a local variable myVar inside myLocalScope. <br>
function myLocalScope() {<br>
  console.log(myVar);<br>
}<br>
myLocalScope();<br>
`,

  `48.Add a local variable to myOutfit function to override the value of outerWear with "sweater".<br>
var outerWear = "T-Shirt";<br>

function myOutfit() {<br>
  // Only change code below this line<br>
  
  return outerWear;<br>
}<br>

myOutfit();`,

  `49.Create a function timesFive that accepts one argument num, multiplies it by 5, and returns the new value. See the last line in the editor for an example of how you can test your timesFive function.

`,

  `50.Create a function addFive without any arguments. This function adds 5 to the sum variable, but its returned value is undefined.`,

  `51.Call the processArg function with an argument of 7 and assign its return value to the variable processed.<br>
var processed = 0;<br>

function processArg(num) {<br>
  return (num + 3) / 5;<br>
}
`,

  `52.Write a function nextInLine which takes an array (arr) and a number (item) as arguments.<br>

Add the number to the end of the array, then remove the first element of the array.<br>

The nextInLine function should then return the element that was removed.<br>
function nextInLine(arr, item) {<br>
  // Your code here<br>
  <br>
  return item;  // Change this line<br>
}<br>
<br>
var testArr = [1,2,3,4,5];<br>
<br>
console.log("Before: " + JSON.stringify(testArr));<br>
console.log(nextInLine(testArr, 6)); <br>
console.log("After: " + JSON.stringify(testArr));`,

  `53.Modify the welcomeToBooleans function so that it returns true instead of false when the run button is clicked.<br>
function welcomeToBooleans() {<br>

  // Only change code below this line.<br>
  <br>
  return false; // Change this line<br>
  
  // Only change code above this line.<br>
  }`,

  `54.Create an if statement inside the function to return "Yes, that was true" if the parameter wasThatTrue is true and return "No, that was false" otherwise.<br>
function trueOrFalse(wasThatTrue) {<br>
  <br>
  // Only change code below this line.<br>
  <br>
  // Only change code above this line.<br>

}<br>

// Change this value to test
trueOrFalse(true);`,

  `55.Add the equality operator to the indicated line so that the function will return "Equal" when val is equivalent to 12.<br>
function testEqual(val) {<br>
  if (val) { // Change this line<br>
    return "Equal";<br>
  }<br>
  return "Not Equal";<br>
}<br>
testEqual(10);`,

  `56.Use the strict equality operator in the if statement so the function will return "Equal" when val is strictly equal to 7.<br>
function testStrict(val) {<br>
  if (val) { // Change this line<br>
    return "Equal";<br>
  }<br>
  return "Not Equal";<br>
}<br>
testStrict(10);`,

  `57.The compareEquality function in the editor compares two values using the equality operator. Modify the function so that it returns "Equal" only when the values are strictly equal.<br>

function compareEquality(a, b) {<br>
  if (a == b) { // Change this line<br>
    return "Equal";<br>
  }<br>
  return "Not Equal";<br>
}<br>
compareEquality(10, "10");`,

  `58.Add the inequality operator != in the if statement so that the function will return "Not Equal" when val is not equivalent to 99<br>
function testNotEqual(val) <br>{<br>
  if (val) { // Change this line<br>
    return "Not Equal";<br>
  }<br>
  return "Equal";<br>
}<br>
testNotEqual(10);`,

  `59.Add the strict inequality operator to the if statement so the function will return "Not Equal" when val is not strictly equal to 17.<br>
function testStrictNotEqual(val) {<br>
  // Only Change Code Below this Line<br>
  <br>
  if (val) {<br>
    <br>
  // Only Change Code Above this Line<br>
  <br>
    return "Not Equal";<br>
  }<br>
  return "Equal";<br>
}<br>
testStrictNotEqual(10);`,

  `60.Add the greater than operator to the indicated lines so that the return statements make sense.<br>
function testGreaterThan(val) {<br>
  if (val) {  // Change this line<br>
    return "Over 100";<br>
  }<br>
  <br>
  if (val) {  // Change this line<br>
    return "Over 10";<br>
  }<br>
  <br>
  return "10 or Under";<br>
}<br>
testGreaterThan(10);`,

  `61.Add the greater than or equal to operator to the indicated lines so that the return statements make sense.<br>
function testGreaterOrEqual(val) {<br>
  if (val) {  // Change this line<br>
    return "20 or Over";<br>
  }<br>
  
  if (val) {  // Change this line<br>
    return "10 or Over";<br>
  }<br>
  <br>
  return "Less than 10";<br>
}<br>
testGreaterOrEqual(10);`,

  `62.Add the less than operator to the indicated lines so that the return statements make sense.<br>
function testLessThan(val) {<br>
  if (val) {  // Change this line<br>
    return "Under 25";<br>
  }<br>
  <br>
  if (val) {  // Change this line<br>
    return "Under 55";<br>
  }<br>
  <br>
  return "55 or Over";<br>
}<br>
testLessThan(10);`,

  `63.Add the less than or equal to operator to the indicated lines so that the return statements make sense.<br>
function testLessOrEqual(val) {<br>
  if (val) {  // Change this line<br>
    return "Smaller Than or Equal to 12";<br>
  }<br>
  <br>
  if (val) {  // Change this line<br>
    return "Smaller Than or Equal to 24";<br>
  }<br>
  <br>
  return "More Than 24";<br>
}<br>
testLessOrEqual(10);`,

  `64.Combine the two if statements into one statement which will return "Yes" if val is less than or equal to 50 and greater than or equal to 25. Otherwise, will return "No".<br>
function testLogicalAnd(val) {<br>
  // Only change code below this line<br>
  <br>
  if (val) {<br>
    if (val) {<br>
      return "Yes";<br>
    }<br>
  }<br>
  // Only change code above this line<br>
  return "No";<br>
}<br>
testLogicalAnd(10);`,

  `65.Combine the two if statements into one statement which returns "Outside" if val is not between 10 and 20, inclusive. Otherwise, return "Inside".<br>
function testLogicalOr(val) {<br>
  // Only change code below this line<br>
  <br>
  if (val) {<br>
    return "Outside";<br>
  }<br>
  <br>
  if (val) {<br>
    return "Outside";<br>
  }<br>
  // Only change code above this line<br>
  return "Inside";<br>
}<br>
testLogicalOr(15);`,

  `66.Combine the if statements into a single if/else statement.<br>
function testElse(val) {<br>
  var result = "";<br>
  // Only change code below this line<br>
  if (val > 5) {<br>
    result = "Bigger than 5";<br>
  }<br>
  if (val <= 5) {<br>
    result = "5 or Smaller";<br>
  }<br>
  // Only change code above this line<br>
  return result;<br>
}<br>
testElse(4);
`,

  `67.Convert the logic to use else if statements.<br>
function testElseIf(val) {<br>
  if (val > 10) {<br>
    return "Greater than 10";<br>
  }<br>
  <br>
  if (val < 5) {<br>
    return "Smaller than 5";<br>
  }<br>
  <br>
  return "Between 5 and 10";<br>
}<br>
testElseIf(7);
`,

  `68.Change the order of logic in the function so that it will return the correct statements in all cases.<br>
function orderMyLogic(val) {<br>
  if (val < 10) {<br>
    return "Less than 10";<br>
  } else if (val < 5) {<br>
    return "Less than 5";<br>
  } else {<br>
    return "Greater than or equal to 10";<br>
  }<br>
}<br>
orderMyLogic(7);`,

  `69.Write chained if/else if statements to fulfill the following conditions:<br>
<br>
num < 5 - return "Tiny"<br>
num < 10 - return "Small"<br>
num < 15 - return "Medium"<br>
num < 20 - return "Large"<br>
num >= 20 - return "Huge"<br>
function testSize(num) {<br>
  // Only change code below this line<br>
  
  
  return "Change Me";<br>
  // Only change code above this line<br>
}<br>
testSize(7);`,

  `70.Strokes	Return<br>
1	"Hole-in-one!"<br>
<= par - 2	"Eagle"<br>
par - 1	"Birdie"<br>
par	"Par"<br>
par + 1	"Bogey"<br>
par + 2	"Double Bogey"<br>
>= par + 3	"Go Home!"<br>
par and strokes will always be numeric and positive. We have added an array of all the names for your convenience.<br>
var names = ["Hole-in-one!", "Eagle", "Birdie", "Par", "Bogey", "Double Bogey", "Go Home!"];<br>
function golfScore(par, strokes) {<br>
  // Only change code below this line<br>
  
  
  return "Change Me";<br>
  // Only change code above this line<br>
}<br>
golfScore(5, 4);`,

  `71.Write a switch statement which tests val and sets answer for the following conditions:<br>
1 - "alpha"<br>
2 - "beta"<br>
3 - "gamma"<br>
4 - "delta"<br>
function caseInSwitch(val) {<br>
  var answer = "";<br>
  // Only change code below this line<br>
  // Only change code above this line  <br>
  return answer; <br> 
}<br>
caseInSwitch(1);`,

  `72.Write a switch statement to set answer for the following conditions:<br>
"a" - "apple"<br>
"b" - "bird"<br>
"c" - "cat"<br>
default - "stuff"<br>
function switchOfStuff(val) {<br>
  var answer = "";<br>
  // Only change code below this line<br>
  
  // Only change code above this line  <br>
  return answer; <br> 
}<br>
switchOfStuff(1);`,

  `73.Write a switch statement to set answer for the following ranges:<br>
1-3 - "Low"<br>
4-6 - "Mid"<br>
7-9 - "High"<br>
<br>
Note<br>
You will need to have a case statement for each number in the range.<br>
function sequentialSizes(val) {<br>
  var answer = "";<br>
  // Only change code below this line<br>
  
  // Only change code above this line  <br>
  return answer;<br>  
}<br>
sequentialSizes(1);`,

  `74.Change the chained if/else if statements into a switch statement.<br>
function chainToSwitch(val) {<br>
  var answer = "";<br>
  // Only change code below this line<br>
  <br>
  if (val === "bob") {<br>
    answer = "Marley";<br>
  } else if (val === 42) {<br>
    answer = "The Answer";<br>
  } else if (val === 1) {<br>
    answer = "There is no #1";<br>
  } else if (val === 99) {<br>
    answer = "Missed me by this much!";<br>
  } else if (val === 7) {<br>
    answer = "Ate Nine";<br>
  }<br>
  
  // Only change code above this line  <br>
  return answer; <br> 
}<br>
chainToSwitch(7);
`,
  `75.Fix the function isLess to remove the if/else statements.<br>
function isLess(a, b) {<br>
  // Fix this code<br>
  if (a < b) {<br>
    return true;<br>
  } else {<br>
    return false;<br>
  }<br>
}<br>
isLess(10, 15);`,

  `76.Modify the function abTest so that if a or b are less than 0 the function will immediately exit with a value of undefined.<br>

function abTest(a, b) {<br>
  // Only change code below this line<br>
  <br>
  // Only change code above this line<br>
  <br>
  return Math.round(Math.pow(Math.sqrt(a) + Math.sqrt(b), 2));<br>
}<br>
abTest(2,2);`,

  `77.Count Change	Cards<br>
+1 =	2, 3, 4, 5, 6<br>
0	 = 7, 8, 9<br>
-1 =	10, 'J', 'Q', 'K', 'A'<br>
You will write a card counting function. It will receive a card parameter, which can be a number or a string, and increment or decrement the global count variable according to the card's value (see table). The function will then return a string with the current count and the string Bet if the count is positive, or Hold if the count is zero or negative. The current count and the player's decision (Bet or Hold) should be separated by a single space.<br>
var count = 0;<br>
<br>
function cc(card) {<br>
  // Only change code below this line<br>
  <br>
  
  return "Change Me";<br>
  // Only change code above this line<br>
}<br>

// Add/remove calls to test your function.<br>
// Note: Only the last will display<br>
cc(2); cc(3); cc(7); cc('K'); cc('A');`,

  `78.Make an object that represents a dog called myDog which contains the properties "name" (a string), "legs", "tails" and "friends".<br>
var myDog = {<br>
  Camper,4,1,["everything!"]<br>
};`,

  `79.Read in the property values of testObj using dot notation. Set the variable hatValue equal to the object's property hat and set the variable shirtValue equal to the object's property shirt.<br>
var testObj = {<br>
  "hat": "ballcap",<br>
  "shirt": "jersey",<br>
  "shoes": "cleats"<br>
};<br>
<br>
// Only change code below this line<br>
<br>
var hatValue = testObj;  <br>    // Change this line<br>
var shirtValue = testObj;<br>    // Change this line`,

  `80.Read the values of the properties "an entree" and "the drink" of testObj using bracket notation and assign them to entreeValue and drinkValue respectively.<br>
var testObj = {<br>
  "an entree": "hamburger",<br>
  "my side": "veggies",<br>
  "the drink": "water"<br>
};<br>
<br>
// Only change code below this line<br>
<br>
var entreeValue = testObj;<br>   // Change this line<br>
var drinkValue = testObj;  <br>  // Change this line`,

  `81.Use the playerNumber variable to look up player 16 in testObj using bracket notation. Then assign that name to the player variable.<br>
var testObj = {<br>
  12: "Namath",<br>
  16: "Montana",<br>
  19: "Unitas"<br>
};<br>
<br>
// Only change code below this line;<br>
<br>
var playerNumber;    <br>   // Change this Line<br>
var player = testObj; <br>  // Change this Line`,

  `82.Update the myDog object's name property. Let's change her name from "Coder" to "Happy Coder". You can use either dot or bracket notation.<br>
var myDog = {<br>
  "name": "Coder",<br>
  "legs": 4,<br>
  "tails": 1,<br>
  "friends": ["freeCodeCamp Campers"]<br>
};<br>
<br>
// Only change code below this line.
`,

  `83.Add a "bark" property to myDog and set it to a dog sound, such as "woof". You may use either dot or bracket notation.<br>
var myDog = {<br>
  "name": "Happy Coder",<br>
  "legs": 4,<br>
  "tails": 1,<br>
  "friends": ["freeCodeCamp Campers"]<br>
};<br>
<br>
// Only change code below this line.
`,

  `84.Delete the "tails" property from myDog. You may use either dot or bracket notation.<br>
var myDog = {<br>
  "name": "Happy Coder",<br>
  "legs": 4,<br>
  "tails": 1,<br>
  "friends": ["freeCodeCamp Campers"],<br>
  "bark": "woof"<br>
};<br>
<br>
// Only change code below this line.

`,

  `85.Convert the switch statement into an object called lookup. Use it to look up val and assign the associated string to the result variable.<br>
function phoneticLookup(val) {<br>
  var result = "";<br>
  // Only change code below this line<br>
  switch(val) {<br>
    case "alpha": <br>
      result = "Adams";<br>
      break;<br>
    case "bravo": <br>
      result = "Boston";<br>
      break;<br>
    case "charlie": <br>
      result = "Chicago";<br>
      break;<br>
    case "delta": <br>
      result = "Denver";<br>
      break;<br>
    case "echo": <br>
      result = "Easy";<br>
      break;<br>
    case "foxtrot": <br>
      result = "Frank";<br>
  }<br>
  // Only change code above this line<br>
  return result;<br>
}<br>
phoneticLookup("charlie");`,

  `86.Modify the function checkObj to test myObj for checkProp. If the property is found, return that property's value. If not, return "Not Found".<br>
<br>
var myObj = {<br>
  gift: "pony",<br>
  pet: "kitten",<br>
  bed: "sleigh"<br>
};<br>
<br>
function checkObj(checkProp) {<br>
  // Your Code Here<br>
  
  return "Change Me!";<br>
}<br>
<br>
checkObj("gift");`,

  `87.Add a new album to the myMusic array. Add artist and title strings, release_year number, and a formats array of strings.<br>
(artist": "Deep Purple",<br>
"title": "Smoke on the water",<br>
"release_year": 1976,<br>
"formats": [ <br>
  "CD",<br>
  "8T",<br>
  "LP"<br>
],)<br>
var myMusic = [<br>
  {<br>
    "artist": "Billy Joel",<br>
    "title": "Piano Man",<br>
    "release_year": 1973,<br>
    "formats": [ <br>
      "CD",<br>
      "8T",<br>
      "LP"<br>
    ],<br>
    "gold": true<br>
  }<br>
  // Add record here<br>
];
`,
  `88.Access the myStorage object and assign the contents of the glove box property to the gloveBoxContents variable. Use bracket notation for properties with a space in their name.<br>
var myStorage = {<br>
  "car": {<br>
    "inside": {<br>
      "glove box": "maps",<br>
      "passenger seat": <br>"crumbs"
     },<br>
    "outside": {<br>
      "trunk": "jack"<br>
    }<br>
  }<br>
};<br>
<br>
var gloveBoxContents = undefined;<br> // Change this line`,

  `89.Retrieve the second tree from the variable myPlants using object dot and array bracket notation.<br>
var myPlants = [<br>
  { <br>
    type: "flowers",<br>
    list: [<br>
      "rose",<br>
      "tulip",<br>
      "dandelion"<br>
    ]<br>
  },<br>
  {<br>
    type: "trees",<br>
    list: [<br>
      "fir",<br>
      "pine",<br>
      "birch"<br>
    ]<br>
  }  <br>
];<br>

// Only change code below this line<br>

var secondTree = ""; // Change this line
`,

  `90.Write a function which takes an album's id (like 2548), a property prop (like "artist" or "tracks"), and a value (like "Addicted to Love") to modify the data in this collection.

If prop isn't "tracks" and value isn't empty (""), update or set the value for that record album's property.

Your function must always return the entire collection object.

There are several rules for handling incomplete data:

If prop is "tracks" but the album doesn't have a "tracks" property, create an empty array before adding the new value to the album's corresponding property.

If prop is "tracks" and value isn't empty (""), push the value onto the end of the album's existing tracks array.

If value is empty (""), delete the given prop property from the album.
<br>

var collection = {<br>
  "2548": {<br>
    "album": "Slippery When Wet",<br>
    "artist": "Bon Jovi",<br>
    "tracks": [ <br>
      "Let It Rock", <br>
      "You Give Love a Bad Name" <br>
    ]<br>
  },<br>
  "2468": {<br>
    "album": "1999",<br>
    "artist": "Prince",<br>
    "tracks": [ <br>
      "1999", <br>
      "Little Red Corvette" <br>
    ]<br>
  },<br>
  "1245": {<br>
    "artist": "Robert Palmer",<br>
    "tracks": [ ]<br>
  },<br>
  "5439": {<br>
    "album": "ABBA Gold"<br>
  }<br>
};<br>
var collectionCopy = JSON.parse(JSON.stringify(collection));<br>
<br>
// Only change code below this line<br>
function updateRecords(id, prop, value) {<br>
  <br>

return collection;<br>
}<br>
updateRecords(5439, "artist", "ABBA");
`,

  `91.Push the numbers 0 through 4 to myArray using a while loop.<br>
<br>
var myArray = [];<br>

// Only change code below this line.`,

  `92.Use a for loop to work to push the values 1 through 5 onto myArray.<br>
var myArray = [];<br>
<br>
// Only change code below this line.<br>
`,

  `93.Push the odd numbers from 1 through 9 to myArray using a for loop.<br>
var myArray = [];`,

  `94.Push the odd numbers from 9 through 1 to myArray using a for loop.<br>
var myArray = [];`,

  `95.Declare and initialize a variable total to 0. Use a for loop to add the value of each element of the myArr array to total.<br>
var myArr = [ 2, 3, 4, 5, 6];`,

  `96.Modify function multiplyAll so that it multiplies the product variable by each number in the sub-arrays of arr<br>
function multiplyAll(arr) {<br>
  var product = 1;<br>
  // Only change code below this line<br>
  <br>
  // Only change code above this line<br>
  return product;<br>
}<br>
multiplyAll([[1,2],[3,4],[5,6,7]]);<br>
`,

  `97.Change the while loop in the code to a do...while loop so that the loop will push the number 10 to myArray, and i will be equal to 11 when your code finishes running.<br>
var myArray = [];<br>
var i = 10;<br>
<br>
// Only change code below this line.<br>
<br>
while (i < 5) {<br>
  myArray.push(i);<br>
  i++;<br>
}`,

  `98.A lookUpProfile function that takes name and a property (prop) as arguments has been pre-written for you.

The function should check if name is an actual contact's firstName and the given property (prop) is a property of that contact.

If both are true, then return the "value" of that property.

If name does not correspond to any contacts then return "No such contact"

If prop does not correspond to any valid properties of a contact found to match name then return "No such property"<br>
var contacts = [<br>
    {<br>
        "firstName": "Akira",<br>
        "lastName": "Laine",<br>
        "number": "0543236543",<br>
        "likes": ["Pizza", "Coding", "Brownie Points"]<br>
    },<br>
    {<br>
        "firstName": "Harry",<br>
        "lastName": "Potter",<br>
        "number": "0994372684",<br>
        "likes": ["Hogwarts", "Magic", "Hagrid"]<br>
    },<br>
    {<br>
        "firstName": "Sherlock",<br>
        "lastName": "Holmes",<br>
        "number": "0487345643",<br>
        "likes": ["Intriguing Cases", "Violin"]<br>
    },<br>
    {<br>
        "firstName": "Kristian",<br>
        "lastName": "Vos",<br>
        "number": "unknown",<br>
        "likes": ["JavaScript", "Gaming", "Foxes"]<br>
    }<br>
];<br>

function lookUpProfile(name, prop){<br>
// Only change code below this line<br>

// Only change code above this line<br>
}<br>
<br>
lookUpProfile("Akira", "likes");`,

  `99.Change randomFraction to return a random number instead of returning 0.<br>
function randomFraction() {<br>

  // Only change code below this line.<br>

  return 0;<br>

  // Only change code above this line.<br>
}`,

  `100.Use technique to generate and return a random whole number between 0 and 9.<br>
var randomNumberBetween0and19 = Math.floor(Math.random() * 20);<br>

function randomWholeNum() {<br>

  // Only change code below this line.<br>

  return Math.random();<br>
}`,

  `101.Create a function called randomRange that takes a range myMin and myMax and returns a random number that's greater than or equal to myMin, and is less than or equal to myMax, inclusive.<br>
function randomRange(myMin, myMax) {<br>

  return 0; // Change this line<br>

}<br>
var myRandom = randomRange(5, 15);`,

  `102.Use parseInt() in the convertToInteger function so it converts the input string str into an integer, and returns it.<br>
function convertToInteger(str) {<br>
  
}<br>
<br>
convertToInteger("56");`,

  `103.Use parseInt() in the convertToInteger function so it converts a binary number to an integer and returns it.<br>
function convertToInteger(str) {<br>
  <br>
}<br>
<br>
convertToInteger("10011");`,

  `104.Use the conditional operator in the checkEqual function to check if two numbers are equal or not. The function should return either true or false.<br>
function checkEqual(a, b) {<br>
  <br>
}<br>
<br>
checkEqual(1, 2);`,

  `105.Use multiple conditional operators in the checkSign function to check if a number is positive, negative or zero.<br>
function checkSign(num) {<br>
  <br>
}<br>
<br>
checkSign(10);`
];


/***/ },
/* 16 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return javascriptRegExpressAnswerArr; });
var javascriptRegExpressAnswerArr = [
  {
    A0: `let myString = "Hello, World!";
    let myRegex = /Hello/;
    let result = myRegex.test(myString);
  `.replace(/\s+/g, "")
  },

  {
    A1: `let waldoIsHiding = "Somewhere Waldo is hiding in this text.";
    let waldoRegex = /Waldo/; 
    let result = waldoRegex.test(waldoIsHiding);`.replace(/\s+/g, "")
  },

  { A2: `let petString = "James has a pet cat.";
  let petRegex = /dog|cat|bird|fish/;
  let result = petRegex.test(petString);`.replace(/\s+/g, "") },

  {
    A3: `let myString = "test";
    let fccRegex = /test/i; 
    let result = fccRegex.test(myString);
`.replace(/\s+/g, "")
  },

  {
    A4: `let extractStr = "Extract the word 'coding' from this string.";
    let codingRegex = /coding/; 
    let result = extractStr.match(codingRegex); `.replace(/\s+/g, "")
  },

  {
    A5: `let twinkleStar = "Twinkle, twinkle, little star";
    let starRegex = /twinkle/gi; 
    let result = twinkleStar.match(starRegex); 
`.replace(/\s+/g, "")
  },

  {
    A6: `let exampleStr = "Let's have fun with regular expressions!";
    let unRegex = /.un/; 
    let result = unRegex.test(exampleStr);
`.replace(/\s+/g, "")
  },

  {
    A7: `let quoteSample = "Beware of bugs in the above code; I have only proved it correct, not tried it.";
    let vowelRegex = /[aeiou]/ig; 
    let result = quoteSample.match(vowelRegex); 
`.replace(/\s+/g, "")
  },

  {
    A8: `let quoteSample = "The quick brown fox jumps over the lazy dog.";
    let alphabetRegex = /[a-z]/ig; 
    let result = quoteSample.match(alphabetRegex); 
`.replace(/\s+/g, "")
  },

  {
    A9: `let quoteSample = "Blueberry 3.141592653s are delicious.";
    let myRegex = /[h-s2-6]/ig; 
    let result = quoteSample.match(myRegex); `.replace(/\s+/g, "")
  },

  {
    A10: `let quoteSample = "3 blind mice.";
    let myRegex = /[^aeiou^0-99]/ig; 
    let result = quoteSample.match(myRegex); `.replace(/\s+/g, "")
  },


  { A11: `let difficultSpelling = "Mississippi";
  let myRegex = /s+/g;
  let result = difficultSpelling.match(myRegex);`.replace(/\s+/g, "") },

  
  { A12: `let chewieQuote = "Aaaaaaaaaaaaaaaarrrgh!";
  let chewieRegex = /A[a]*/; 
  let result = chewieQuote.match(chewieRegex);`.replace(/\s+/g, "") },

  { A13: `let text = "<h1>Winter is coming</h1>";
  let myRegex = /<h1>?/; 
  let result = text.match(myRegex);`.replace(/\s+/g, "") },

  { A14: `let crowd = 'P1P2P3P4P5P6CCCP7P8P9';

  let reCriminals = /C+/; 
  
  let matchedCriminals = crowd.match(reCriminals);
  console.log(matchedCriminals);`.replace(/\s+/g, "") },

  {
    A15: `let rickyAndCal = "Cal and Ricky both like racing.";
    let calRegex = /^Cal/; 
    let result = calRegex.test(rickyAndCal); `.replace(/\s+/g, "")
  },

  {
    A16: `let caboose = "The last car on a train is the caboose";
    let lastRegex = /caboose$/;
    let result = lastRegex.test(caboose);
    `.replace(/\s+/g, "")
  },

  {
    A17: `let quoteSample = "The five boxing wizards jump quickly."; 
    let alphabetRegexV2 = /\w/g;
    let result = quoteSample.match(alphabetRegexV2).length;
`.replace(/\s+/g, "")
  },

  {
    A18: `
    let quoteSample = "The five boxing wizards jump quickly.";
    let nonAlphabetRegex = /\W/g;
    let result = quoteSample.match(nonAlphabetRegex).length;
`.replace(/\s+/g, "")
  },

  {
    A19: `let numString = "Your sandwich will be $5.00";
    let numRegex = /\d/g; 
    let result = numString.match(numRegex).length;
    
`.replace(/\s+/g, "")
  },

  {
    A20: `let numString = "Your sandwich will be $5.00";
    let noNumRegex = /\D/g;
    let result = numString.match(noNumRegex).length;
    `.replace(
      /\s+/g,
      ""
    )
  },

  {
    A21: `let username = "JackOfAllTrades";
    let userCheck = /^[a-z]{2,}\d*$/i;
    let result = userCheck.test(username);`.replace(
      /\s+/g,
      ""
    )
  },

  {
    A22: `let sample = "Whitespace is important in separating words";
    let countWhiteSpace = /\s/g;
    let result = sample.match(countWhiteSpace);
    `.replace(
      /\s+/g,
      ""
    )
  },

  {
    A23: `let sample = "Whitespace is important in separating words";
    let countNonWhiteSpace = /\S/g;
    let result = sample.match(countNonWhiteSpace);
    `.replace(
      /\s+/g,
      ""
    )
  },

  {
    A24: `let ohStr = "Ohhh no";
    let ohRegex = /Oh{3,6}\sno/;
    let result = ohRegex.test(ohStr);`.replace(/\s+/g, "")
  },

  {
    A25: `let haStr = "Hazzzzah";
    let haRegex = /Haz{4,30}ah/;
    let result = haRegex.test(haStr);`.replace(/\s+/g, "")
  },

  {
    A26: `let timStr = "Timmmmber";
    let timRegex = /Tim{4}ber/;
    let result = timRegex.test(timStr); `.replace(/\s+/g, "")
  },

  {
    A27: `
    let favWord_US = "favorite";
    let favWord_GB = "favourite";
    let favRegex = /favou?rite/;
    let result1 = favRegex.test(favWord_US);
    let result2 = favRegex.test(favWord_GB);
    `.replace(/\s+/g, "")
  },

  {
    A28: `let sampleWord = "astronaut";
    let pwRegex = /(?=\w{5,})(?=\D*\d{2})/;
    let result = pwRegex.test(sampleWord);`.replace(/\s+/g, "")
  },

  {
    A29: `let repeatNum = "42 42 42";
    let reRegex =  /^(\ d+)\ s\ 1\ s\ 1$/;
    let result = reRegex.test(repeatNum);`.replace(/\s+/g, "")
  },

  {
    A30: `let huhText = "This sandwich is good.";
    let fixRegex = /good/; 
    let replaceText = "okey-dokey"; 
    let result = huhText.replace(fixRegex, replaceText);`.replace(/\s+/g, "")
  },

  {
    A31: `let hello = "   Hello, World!  ";
    let wsRegex = /^\s+|\s+$/g; 
    let result = hello.replace(wsRegex, ''); `.replace(/\s+/g, "")
  }
];


/***/ },
/* 17 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return javascriptRegExpressQuestionArr; });
var javascriptRegExpressQuestionArr = [
  `0.Apply the regex  myRegex on the string  myString using the .test() method.<br>
  let myString = "Hello, World!";<br>
  let myRegex = /Hello/;<br>
  let result = myRegex; // Change this line`,

  `1.Complete the regex waldoRegex to find "Waldo" in the string waldoIsHiding with a literal match.<br>
  let waldoIsHiding = "Somewhere Waldo is hiding in this text.";<br>
  let waldoRegex = /search/; // Change this line<br>
  let result = waldoRegex.test(waldoIsHiding);`,

  `2.Complete the regex petRegex to match the pets "dog", "cat", "bird", or "fish".<br>
  let petString = "James has a pet cat.";<br>
  let petRegex = /change/; // Change this line<br>
  let result = petRegex.test(petString);`,

  `3.Write a regex fccRegex to match "freeCodeCamp", no matter its case.<br> Your regex should not match any abbreviations or variations with spaces.<br>
  let myString = "freeCodeCamp";<br>
  let fccRegex = /change/; // Change this line<br>
  let result = fccRegex.test(myString);`,

  `4.Apply the .match() method to extract the word coding.<br>
  let extractStr = "Extract the word 'coding' from this string.";<br>
  let codingRegex = /change/; // Change this line<br>
  let result = extractStr; // Change this line
`,

  `5.Using the regex starRegex, find and extract both "Twinkle" words from the string twinkleStar.<br>
  Note<br>
  You can have multiple flags on your regex like /search/gi<br>
  <br>
  
  let twinkleStar = "Twinkle, twinkle, little star";<br>
  let starRegex = /change/; // Change this line<br>
  let result = twinkleStar; // Change this line`,

  `6.Complete the regex unRegex so that it matches the strings "run", "sun",<br> "fun", "pun", "nun", and "bun". Your regex should use the wildcard character.<br>
  <br>
  let exampleStr = "Let's have fun with regular expressions!";<br>
  let unRegex = /change/; // Change this line<br>
  let result = unRegex.test(exampleStr);
  `,

  `7.Use a character class with vowels (a, e, i, o, u) in your regex vowelRegex to find all the vowels in the string quoteSample.<br>
  <br>
  Note<br>
  Be sure to match both upper- and lowercase vowels.<br>
  let quoteSample = "Beware of bugs in the above code; I have only proved it correct, not tried it.";<br>
  let vowelRegex = /change/; // Change this line<br>
  let result = vowelRegex; // Change this line
  
  `,

  `8.Match all the letters in the string quoteSample.<br>
  <br>
  Note<br>
  Be sure to match both upper- and lowercase letters.<br>
  let quoteSample = "The quick brown fox jumps over the lazy dog.";<br>
  let alphabetRegex = /change/; // Change this line<br>
  let result = alphabetRegex; // Change this line
`,

  `9.Create a single regex that matches a range of letters between h and s, and a range of numbers between 2 and 6. Remember to include the appropriate flags in the regex.<br>
  let quoteSample = "Blueberry 3.141592653s are delicious.";<br>
  let myRegex = /change/; // Change this line<br>
  let result = myRegex; // Change this line`,

  `10.Create a single regex that matches all characters that are not a number or a vowel.<br> Remember to include the appropriate flags in the regex.<br>
  let quoteSample = "3 blind mice.";<br>
  let myRegex = /change/; // Change this line<br>
  let result = myRegex; // Change this line`,

  
  `11.You want to find matches when the letter s occurs one or more times in "Mississippi". Write a regex that uses the + sign.<br>
  let difficultSpelling = "Mississippi";<br>
  let myRegex = /change/; // Change this line<br>
  let result = difficultSpelling.match(myRegex);`,
  
  `12.Create a regex chewieRegex that uses the * character to match all the upper and lower "a" characters in chewieQuote.<br> Your regex does not need flags, and it should not match any of the other quotes.<br>
  <br>
  let chewieQuote = "Aaaaaaaaaaaaaaaarrrgh!";<br>
  let chewieRegex = /change/; // Change this line<br>
  let result = chewieQuote.match(chewieRegex);
  `,

  `13.Fix the regex /<.*>/ to return the HTML tag &lth1&gt and not the text "&lth1&gt Winter is coming &lt/h1&gt". <br> Remember the wildcard .in a regular expression matches any character.<br>
  let text = "&lth1&gtWinter is coming &lt/h1&gt";<br>
  let myRegex = /<.*>/; // Change this line<br>
  let result = text.match(myRegex);`,

  `14.Write a greedy regex that finds one or more criminals within a group of other people.<br> A criminal is represented by the capital letter C.<br>
  // example crowd gathering<br>
  let crowd = 'P1P2P3P4P5P6CCCP7P8P9';<br>
  <br>
  let reCriminals = /./; // Change this line<br>
  <br>
  let matchedCriminals = crowd.match(reCriminals);<br>
  console.log(matchedCriminals);
  `,

  `15.Use the caret character in a regex to find "Cal" only in the beginning of the string rickyAndCal.<br>
  let rickyAndCal = "Cal and Ricky both like racing.";<br>
  let calRegex = /change/; // Change this line<br>
  let result = calRegex.test(rickyAndCal);
  `,

  `16.Use the anchor character ($) to match the string "caboose" at the end of the string caboose.<br>
  let caboose = "The last car on a train is the caboose";<br>
  let lastRegex = /change/; // Change this line<br>
  let result = lastRegex.test(caboose);
  `,

  `17.Use the shorthand character class \w to count the number of alphanumeric characters in various quotes and strings.<br>
  let quoteSample = "The five boxing wizards jump quickly.";<br>
  let alphabetRegexV2 = /change/; // Change this line<br>
  let result = quoteSample.match(alphabetRegexV2).length;`,

  `18.Use the shorthand character class \W to count the number of non-alphanumeric characters in various quotes and strings.<br>
  let quoteSample = "The five boxing wizards jump quickly.";<br>
  let nonAlphabetRegex = /change/; // Change this line<br>
  let result = quoteSample.match(nonAlphabetRegex).length;`,

  `19.Use the shorthand character class \d to count how many digits are in movie titles.<br> Written out numbers ("six" instead of 6) do not count.<br>
  <br>
  let numString = "Your sandwich will be $5.00";<br>
  let numRegex = /change/; // Change this line<br>
  let result = numString.match(numRegex).length;`,

  `20.Use the shorthand character class for non-digits \D to count how many non-digits are in movie titles.<br>
  let numString = "Your sandwich will be $5.00";<br>
  let noNumRegex = /change/; // Change this line<br>
  let result = numString.match(noNumRegex).length;`,

  `21.Change the regex userCheckto fit the constraints listed above.<br>
  let username = "JackOfAllTrades";<br>
  let userCheck = /change/; // Change this line<br>
  let result = userCheck.test(username);
  `,

  `22.Change the regex countWhiteSpace to look for multiple whitespace characters in a string.<br>
  let sample = "Whitespace is important in separating words";<br>
  let countWhiteSpace = /change/; // Change this line<br>
  let result = sample.match(countWhiteSpace);`,

  `23.Change the regex countNonWhiteSpace to look for multiple non-whitespace characters in a string.<br>
  let sample = "Whitespace is important in separating words";<br>
  let countNonWhiteSpace = /change/; // Change this line<br>
  let result = sample.match(countNonWhiteSpace);
  `,

  `24.Change the regex ohRegex to match only 3 to 6 letter h 's in the word "Oh no".<br>
  let ohStr = "Ohhh no";<br>
  let ohRegex = /change/; // Change this line<br>
  let result = ohRegex.test(ohStr);
  `,

  `25.Change the regex haRegex to match the word "Hazzah" only when it has four or more letter z 's.<br>
  let haStr = "Hazzzzah";<br>
  let haRegex = /change/; // Change this line<br>
  let result = haRegex.test(haStr);`,

  `26.Change the regex timRegex to match the word "Timber" only when it has four letter m 's.<br>
  let timStr = "Timmmmber";<br>
  let timRegex = /change/; // Change this line<br>
  let result = timRegex.test(timStr);`,

  `27.Change the regex favRegex to match both the American English (favorite) and the British English (favourite) version of the word.<br>
  let favWord = "favorite";<br>
  let favRegex = /change/; // Change this line<br>
  let result = favRegex.test(favWord);`,

  `28.Use lookaheads in the pwRegex to match passwords that are greater than 5 characters long and have two consecutive digits.<br>
  let sampleWord = "astronaut";<br>
  let pwRegex = /change/; // Change this line<br>
  let result = pwRegex.test(sampleWord);`,

  `29.Use capture groups in reRegex to match numbers that are repeated only three times in a string, each separated by a space.<br>
  let repeatNum = "42 42 42";<br>
  let reRegex = /change/; // Change this line<br>
  let result = reRegex.test(repeatNum);`,

  `30.Write a regex so that it will search for the string "good".<br> Then update the replaceText variable to replace "good" with "okey-dokey".<br>
  let huhText = "This sandwich is good.";<br>
  let fixRegex = /change/; // Change this line<br>
  let replaceText = ""; // Change this line<br>
  let result = huhText.replace(fixRegex, replaceText);`,

  `31.Write a regex and use the appropriate string methods to remove whitespace at the beginning and end of strings.<br>
  let hello = "   Hello, World!  ";<br>
  let wsRegex = /change/; // Change this line<br>
  let result = hello; // Change this line`
];


/***/ },
/* 18 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__questionsAndAnswers_htmlQuestions__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__questionsAndAnswers_htmlAnswers__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__questionsAndAnswers_cssQuestions__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__questionsAndAnswers_cssAnswers__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__questionsAndAnswers_javascriptAnswers__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__questionsAndAnswers_javascriptQuestions__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__questionsAndAnswers_javascriptEs6Answers__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__questionsAndAnswers_javascriptEs6Questions__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__questionsAndAnswers_javascriptRegExpressAnswers__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__questionsAndAnswers_javascriptRegExpressQuestions__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__questionsAndAnswers_javascriptBasicDataStructureAnswers__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__questionsAndAnswers_javascriptBasicDataStructureQuestions__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__questionsAndAnswers_javascriptBasicAlgorithmAnswers__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__questionsAndAnswers_javascriptBasicAlgorithmQuestions__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__questionsAndAnswers_javascriptObjOrientProgAnswers__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__questionsAndAnswers_javascriptObjOrientProgQuestions__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__questionsAndAnswers_javascriptFunctionalProgrammingAnswers__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__questionsAndAnswers_javascriptFunctionalProgrammingQuestions__ = __webpack_require__(12);


 /* importing  array from other js file with webpack*/
 /* importing  array from other js file with webpack*/
 /* importing  array from other js file with webpack*/
 /* importing  array from other js file with webpack*/

 /* importing  array from other js file with webpack*/

 /* importing  array from other js file with webpack*/

 /* importing  array from other js file with webpack*/

 /* importing  array from other js file with webpack*/
 /* importing  array from other js file with webpack*/

 /* importing  array from other js file with webpack*/

 /* importing  array from other js file with webpack*/

 /* importing  array from other js file with webpack*/


 /* importing  array from other js file with webpack*/

 /* importing  array from other js file with webpack*/

 /* importing  array from other js file with webpack*/

 /* importing  array from other js file with webpack*/

 /* importing  array from other js file with webpack*/

 /* importing  array from other js file with webpack*/

















var randomValue = Math.floor(Math.random() * __WEBPACK_IMPORTED_MODULE_0__questionsAndAnswers_htmlQuestions__["a" /* htmlQuestionArr */].length); /* taking random question from htmlQuestionArr*/
function submit() { /* function for html submit button*/

    var inputAnswer = input.value.replace(/\s+/g, ``); /*replace(/\s+/g, `` is removing all spaces. Avoid checking all the spaces to compare text*/
    var correctValue = document.getElementById("checkingAnswer"); /* making getElementById code shorter*/
    var incorrectValue = document.getElementById("checkingAnswer");
    var displayAnswer = document.getElementById("showingAnswer");
    var nextButton = document.getElementById("elementButton");
    var removeValue = document.getElementById("remove");
    if (randomValue == 0 && inputAnswer == __WEBPACK_IMPORTED_MODULE_1__questionsAndAnswers_htmlAnswers__["a" /* htmlAnswerArr */][0].A0) { /* checking if randomValue is 0 and if putting answer the same as htmlAnswerArr*//*A0 is just that I can track answer numbers when adding questions and answers*/
        correctValue.innerHTML = "Correct..";
        displayAnswer.innerHTML = `<textarea name="text" class="answer_textarea" id="input">Good Job :) </textarea>`;
        nextButton.innerHTML = `<button class="nextButton htmlColor1" onclick=btn()>Next</button>`; /* creating next button with btn()function*/
        removeValue.innerHTML = "";/* removing in html answer*/



    } else if (randomValue == 0 && inputAnswer !== __WEBPACK_IMPORTED_MODULE_1__questionsAndAnswers_htmlAnswers__["a" /* htmlAnswerArr */][0].A0) {/*  if random value not == then giving then display the answere.*/
        displayAnswer.innerHTML = `<textarea name="text" class="answer_textarea" id="input">&ltp title="tooltip"&gtAnswer&lt/p&gt</textarea>`;
        incorrectValue.innerHTML = "Incorrect..";
        nextButton.innerHTML = `<button class="nextButton htmlColor1" onclick=btn()>Next</button>`;
        removeValue.innerHTML = "";



    } else if (randomValue == 1 && inputAnswer == __WEBPACK_IMPORTED_MODULE_1__questionsAndAnswers_htmlAnswers__["a" /* htmlAnswerArr */][1].A1) {
        correctValue.innerHTML = "Correct..";
        displayAnswer.innerHTML = `<textarea name="text" class="answer_textarea" id="input">Good Job :) </textarea>`;
        nextButton.innerHTML = `<button class="nextButton htmlColor1" onclick=btn()>Next</button>`;
        removeValue.innerHTML = "";

    } else if (randomValue == 1 && inputAnswer !== __WEBPACK_IMPORTED_MODULE_1__questionsAndAnswers_htmlAnswers__["a" /* htmlAnswerArr */][1].A1) {
        displayAnswer.innerHTML = `<textarea name="text" class="answer_textarea" id="input">
&ltimg src="answer.jpg" width="250" height="400"&gt</textarea>`;
        incorrectValue.innerHTML = "Incorrect..";
        nextButton.innerHTML = `<button class="nextButton htmlColor1" onclick=btn()>Next</button>`;
        removeValue.innerHTML = "";



    } else if (randomValue == 2 && inputAnswer == __WEBPACK_IMPORTED_MODULE_1__questionsAndAnswers_htmlAnswers__["a" /* htmlAnswerArr */][2].A2) {
        correctValue.innerHTML = "Correct..";
        displayAnswer.innerHTML = `<textarea name="text" class="answer_textarea" id="input">Good Job :) </textarea>`;
        nextButton.innerHTML = `<button class="nextButton htmlColor1" onclick=btn()>Next</button>`;
        removeValue.innerHTML = "";

    } else if (randomValue == 2 && inputAnswer !== __WEBPACK_IMPORTED_MODULE_1__questionsAndAnswers_htmlAnswers__["a" /* htmlAnswerArr */][2].A2) {
        displayAnswer.innerHTML = `<textarea name="text" class="answer_textarea" id="input">
&lta href="https://www.google.com"&gtThis is a link&lt/a&gt</textarea>`;
        incorrectValue.innerHTML = "Incorrect..";
        nextButton.innerHTML = `<button class="nextButton htmlColor1" onclick=btn()>Next</button>`;
        removeValue.innerHTML = "";



    } else if (randomValue == 3 && inputAnswer == __WEBPACK_IMPORTED_MODULE_1__questionsAndAnswers_htmlAnswers__["a" /* htmlAnswerArr */][3].A3) {
        correctValue.innerHTML = "Correct..";
        displayAnswer.innerHTML = `<textarea name="text" class="answer_textarea" id="input">Good Job :) </textarea>`;
        nextButton.innerHTML = `<button class="nextButton htmlColor1" onclick=btn()>Next</button>`;
        removeValue.innerHTML = "";

    } else if (randomValue == 3 && inputAnswer !== __WEBPACK_IMPORTED_MODULE_1__questionsAndAnswers_htmlAnswers__["a" /* htmlAnswerArr */][3].A3) {
        displayAnswer.innerHTML = `<textarea name="text" class="answer_textarea" id="input">
&lta href="http://www.wwf.org.uk"&gtThis is a link&lt/a&gt</textarea>`;
        incorrectValue.innerHTML = "Incorrect..";
        nextButton.innerHTML = `<button class="nextButton htmlColor1" onclick=btn()>Next</button>`;
        removeValue.innerHTML = "";



    } else if (randomValue == 4 && inputAnswer == __WEBPACK_IMPORTED_MODULE_1__questionsAndAnswers_htmlAnswers__["a" /* htmlAnswerArr */][4].A4) {
        correctValue.innerHTML = "Correct..";
        displayAnswer.innerHTML = `<textarea name="text" class="answer_textarea" id="input">Good Job :) </textarea>`;
        nextButton.innerHTML = `<button class="nextButton htmlColor1" onclick=btn()>Next</button>`;
        removeValue.innerHTML = "";

    } else if (randomValue == 4 && inputAnswer !== __WEBPACK_IMPORTED_MODULE_1__questionsAndAnswers_htmlAnswers__["a" /* htmlAnswerArr */][4].A4) {
        displayAnswer.innerHTML = `<textarea name="text" class="answer_textarea" id="input">
&ltimg src="test.jpg" alt="answer.com" width="135" height="50"&gt</textarea>`;
        incorrectValue.innerHTML = "Incorrect..";
        nextButton.innerHTML = `<button class="nextButton htmlColor1" onclick=btn()>Next</button>`;
        removeValue.innerHTML = "";



    } else if (randomValue == 5 && inputAnswer == __WEBPACK_IMPORTED_MODULE_1__questionsAndAnswers_htmlAnswers__["a" /* htmlAnswerArr */][5].A5) {
        correctValue.innerHTML = "Correct..";
        displayAnswer.innerHTML = `<textarea name="text" class="answer_textarea" id="input">Good Job :) </textarea>`;
        nextButton.innerHTML = `<button class="nextButton htmlColor1" onclick=btn()>Next</button>`;
        removeValue.innerHTML = "";

    } else if (randomValue == 5 && inputAnswer !== __WEBPACK_IMPORTED_MODULE_1__questionsAndAnswers_htmlAnswers__["a" /* htmlAnswerArr */][5].A5) {
        displayAnswer.innerHTML = `<textarea name="text" class="answer_textarea" id="input">
&lth1&gtLondon&lt/h1&gt</textarea>`;
        incorrectValue.innerHTML = "Incorrect..";
        nextButton.innerHTML = `<button class="nextButton htmlColor1" onclick=btn()>Next</button>`;
        removeValue.innerHTML = "";



    } else if (randomValue == 6 && inputAnswer == __WEBPACK_IMPORTED_MODULE_1__questionsAndAnswers_htmlAnswers__["a" /* htmlAnswerArr */][6].A6) {
        correctValue.innerHTML = "Correct..";
        displayAnswer.innerHTML = `<textarea name="text" class="answer_textarea" id="input">Good Job :) </textarea>`;
        nextButton.innerHTML = `<button class="nextButton htmlColor1" onclick=btn()>Next</button>`;
        removeValue.innerHTML = "";

    } else if (randomValue == 6 && inputAnswer !== __WEBPACK_IMPORTED_MODULE_1__questionsAndAnswers_htmlAnswers__["a" /* htmlAnswerArr */][6].A6) {
        displayAnswer.innerHTML = `<textarea name="text" class="answer_textarea" id="input">
&lth1&gtLondon&lt/h1&gt
&lthr&gt 
&ltp&gtTest&lt/p&gt</textarea>`;
        incorrectValue.innerHTML = "Incorrect..";
        nextButton.innerHTML = `<button class="nextButton htmlColor1" onclick=btn()>Next</button>`;
        removeValue.innerHTML = "";



    } else if (randomValue == 7 && inputAnswer == __WEBPACK_IMPORTED_MODULE_1__questionsAndAnswers_htmlAnswers__["a" /* htmlAnswerArr */][7].A7) {
        correctValue.innerHTML = "Correct..";
        displayAnswer.innerHTML = `<textarea name="text" class="answer_textarea" id="input">Good Job :) </textarea>`;
        nextButton.innerHTML = `<button class="nextButton htmlColor1" onclick=btn()>Next</button>`;
        removeValue.innerHTML = "";

    } else if (randomValue == 7 && inputAnswer !== __WEBPACK_IMPORTED_MODULE_1__questionsAndAnswers_htmlAnswers__["a" /* htmlAnswerArr */][7].A7) {
        displayAnswer.innerHTML = `<textarea name="text" class="answer_textarea" id="input">
&lth1&gtHello&lt/h1&gt 
&lth2&gtHello&lt/h2&gt 
&lth3&gtHello&lt/h3&gt 
&lth4&gtHello&lt/h4&gt 
&lth5&gtHello&lt/h5&gt 
&lth6&gtHello&lt/h6&gt</textarea>`;
        incorrectValue.innerHTML = "Incorrect..";
        nextButton.innerHTML = `<button class="nextButton htmlColor1" onclick=btn()>Next</button>`;
        removeValue.innerHTML = "";



    } else if (randomValue == 8 && inputAnswer == __WEBPACK_IMPORTED_MODULE_1__questionsAndAnswers_htmlAnswers__["a" /* htmlAnswerArr */][8].A8) {
        correctValue.innerHTML = "Correct..";
        displayAnswer.innerHTML = `<textarea name="text" class="answer_textarea" id="input">Good Job :) </textarea>`;
        nextButton.innerHTML = `<button class="nextButton htmlColor1" onclick=btn()>Next</button>`;
        removeValue.innerHTML = "";

    } else if (randomValue == 8 && inputAnswer !== __WEBPACK_IMPORTED_MODULE_1__questionsAndAnswers_htmlAnswers__["a" /* htmlAnswerArr */][8].A8) {
        displayAnswer.innerHTML = `<textarea name="text" class="answer_textarea" id="input">
&lth1&gtUniversal Studios Presents&lt/h1&gt 
&lth2&gtJurassic Park&lt/h2&gt 
&lth3&gtAbout&lt/h3&gt 
&ltp&gtOn the Island of Isla Nublar, a new park has been built: Jurassic Park is a theme park of cloned dinosaurs!!&lt/p&gt</textarea>`;
        incorrectValue.innerHTML = "Incorrect..";
        nextButton.innerHTML = `<button class="nextButton htmlColor1" onclick=btn()>Next</button>`;
        removeValue.innerHTML = "";



    } else if (randomValue == 9 && inputAnswer == __WEBPACK_IMPORTED_MODULE_1__questionsAndAnswers_htmlAnswers__["a" /* htmlAnswerArr */][9].A9) {
        correctValue.innerHTML = "Correct..";
        displayAnswer.innerHTML = `<textarea name="text" class="answer_textarea" id="input">Good Job :) </textarea>`;
        nextButton.innerHTML = `<button class="nextButton htmlColor1" onclick=btn()>Next</button>`;
        removeValue.innerHTML = "";

    } else if (randomValue == 9 && inputAnswer !== __WEBPACK_IMPORTED_MODULE_1__questionsAndAnswers_htmlAnswers__["a" /* htmlAnswerArr */][9].A9) {
        displayAnswer.innerHTML = `<textarea name="text" class="answer_textarea" id="input">
&ltp&gtHello World!&lt/p&gt</textarea>`;
        incorrectValue.innerHTML = "Incorrect..";
        nextButton.innerHTML = `<button class="nextButton htmlColor1" onclick=btn()>Next</button>`;
        removeValue.innerHTML = "";



    } else if (randomValue == 10 && inputAnswer == __WEBPACK_IMPORTED_MODULE_1__questionsAndAnswers_htmlAnswers__["a" /* htmlAnswerArr */][10].A10) {
        correctValue.innerHTML = "Correct..";
        displayAnswer.innerHTML = `<textarea name="text" class="answer_textarea" id="input">Good Job :) </textarea>`;
        nextButton.innerHTML = `<button class="nextButton htmlColor1" onclick=btn()>Next</button>`;
        removeValue.innerHTML = "";

    } else if (randomValue == 10 && inputAnswer !== __WEBPACK_IMPORTED_MODULE_1__questionsAndAnswers_htmlAnswers__["a" /* htmlAnswerArr */][10].A10) {
        displayAnswer.innerHTML = `<textarea name="text" class="answer_textarea" id="input">
&ltp&gt My Bonnie lies over the ocean.&ltbr&gt
My Bonnie lies over the sea.&ltbr&gt 
My Bonnie lies over the ocean.&ltbr&gt 
Oh, bring back my Bonnie to me.
&lt/p&gt</textarea>`;
        incorrectValue.innerHTML = "Incorrect..";
        nextButton.innerHTML = `<button class="nextButton htmlColor1" onclick=btn()>Next</button>`;
        removeValue.innerHTML = "";



    } else if (randomValue == 11 && inputAnswer == __WEBPACK_IMPORTED_MODULE_1__questionsAndAnswers_htmlAnswers__["a" /* htmlAnswerArr */][11].A11) {
        correctValue.innerHTML = "Correct..";
        displayAnswer.innerHTML = `<textarea name="text" class="answer_textarea" id="input">Good Job :) </textarea>`;
        nextButton.innerHTML = `<button class="nextButton htmlColor1" onclick=btn()>Next</button>`;
        removeValue.innerHTML = "";

    } else if (randomValue == 11 && inputAnswer !== __WEBPACK_IMPORTED_MODULE_1__questionsAndAnswers_htmlAnswers__["a" /* htmlAnswerArr */][11].A11) {
        displayAnswer.innerHTML = `<textarea name="text" class="answer_textarea" id="input">
&ltpre&gt 
My Bonnie lies over the ocean.&ltbr&gt 
My Bonnie lies over the sea.&ltbr&gt 
My Bonnie lies over the ocean.&ltbr&gt 
Oh, bring back my Bonnie to me.
&lt/pre&gt</textarea>`;
        incorrectValue.innerHTML = "Incorrect..";
        nextButton.innerHTML = `<button class="nextButton htmlColor1" onclick=btn()>Next</button>`;
        removeValue.innerHTML = "";



    } else if (randomValue == 12 && inputAnswer == __WEBPACK_IMPORTED_MODULE_1__questionsAndAnswers_htmlAnswers__["a" /* htmlAnswerArr */][12].A12) {
        correctValue.innerHTML = "Correct..";
        displayAnswer.innerHTML = `<textarea name="text" class="answer_textarea" id="input">Good Job :) </textarea>`;
        nextButton.innerHTML = `<button class="nextButton htmlColor1" onclick=btn()>Next</button>`;
        removeValue.innerHTML = "";

    } else if (randomValue == 12 && inputAnswer !== __WEBPACK_IMPORTED_MODULE_1__questionsAndAnswers_htmlAnswers__["a" /* htmlAnswerArr */][12].A12) {
        displayAnswer.innerHTML = `<textarea name="text" class="answer_textarea" id="input">
&ltp style="color:blue"&gtThis is a paragraph.&lt/p&gt</textarea>`;
        incorrectValue.innerHTML = "Incorrect..";
        nextButton.innerHTML = `<button class="nextButton htmlColor1" onclick=btn()>Next</button>`;
        removeValue.innerHTML = "";



    } else if (randomValue == 13 && inputAnswer == __WEBPACK_IMPORTED_MODULE_1__questionsAndAnswers_htmlAnswers__["a" /* htmlAnswerArr */][13].A13) {
        correctValue.innerHTML = "Correct..";
        displayAnswer.innerHTML = `<textarea name="text" class="answer_textarea" id="input">Good Job :) </textarea>`;
        nextButton.innerHTML = `<button class="nextButton htmlColor1" onclick=btn()>Next</button>`;
        removeValue.innerHTML = "";

    } else if (randomValue == 13 && inputAnswer !== __WEBPACK_IMPORTED_MODULE_1__questionsAndAnswers_htmlAnswers__["a" /* htmlAnswerArr */][13].A13) {
        displayAnswer.innerHTML = `<textarea name="text" class="answer_textarea" id="input">
&ltp style="font-family:courier"&gtThis is a paragraph.&lt/p&gt</textarea>`;
        incorrectValue.innerHTML = "Incorrect..";
        nextButton.innerHTML = `<button class="nextButton htmlColor1" onclick=btn()>Next</button>`;
        removeValue.innerHTML = "";



    } else if (randomValue == 14 && inputAnswer == __WEBPACK_IMPORTED_MODULE_1__questionsAndAnswers_htmlAnswers__["a" /* htmlAnswerArr */][14].A14) {
        correctValue.innerHTML = "Correct..";
        displayAnswer.innerHTML = `<textarea name="text" class="answer_textarea" id="input">Good Job :) </textarea>`;
        nextButton.innerHTML = `<button class="nextButton htmlColor1" onclick=btn()>Next</button>`;
        removeValue.innerHTML = "";

    } else if (randomValue == 14 && inputAnswer !== __WEBPACK_IMPORTED_MODULE_1__questionsAndAnswers_htmlAnswers__["a" /* htmlAnswerArr */][14].A14) {
        displayAnswer.innerHTML = `<textarea name="text" class="answer_textarea" id="input">
&ltp style="text-align:center"&gtThis is a paragraph.&lt/p&gt</textarea>`;
        incorrectValue.innerHTML = "Incorrect..";
        nextButton.innerHTML = `<button class="nextButton htmlColor1" onclick=btn()>Next</button>`;
        removeValue.innerHTML = "";



    } else if (randomValue == 15 && inputAnswer == __WEBPACK_IMPORTED_MODULE_1__questionsAndAnswers_htmlAnswers__["a" /* htmlAnswerArr */][15].A15) {
        correctValue.innerHTML = "Correct..";
        displayAnswer.innerHTML = `<textarea name="text" class="answer_textarea" id="input">Good Job :) </textarea>`;
        nextButton.innerHTML = `<button class="nextButton htmlColor1" onclick=btn()>Next</button>`;
        removeValue.innerHTML = "";

    } else if (randomValue == 15 && inputAnswer !== __WEBPACK_IMPORTED_MODULE_1__questionsAndAnswers_htmlAnswers__["a" /* htmlAnswerArr */][15].A15) {
        displayAnswer.innerHTML = `<textarea name="text" class="answer_textarea" id="input">
&ltp style="font-size:50px"&gtThis is a paragraph.&lt/p&gt</textarea>`;
        incorrectValue.innerHTML = "Incorrect..";
        nextButton.innerHTML = `<button class="nextButton htmlColor1" onclick=btn()>Next</button>`;
        removeValue.innerHTML = "";



    } else if (randomValue == 16 && inputAnswer == __WEBPACK_IMPORTED_MODULE_1__questionsAndAnswers_htmlAnswers__["a" /* htmlAnswerArr */][16].A16) {
        correctValue.innerHTML = "Correct..";
        displayAnswer.innerHTML = `<textarea name="text" class="answer_textarea" id="input">Good Job :) </textarea>`;
        nextButton.innerHTML = `<button class="nextButton htmlColor1" onclick=btn()>Next</button>`;
        removeValue.innerHTML = "";

    } else if (randomValue == 16 && inputAnswer !== __WEBPACK_IMPORTED_MODULE_1__questionsAndAnswers_htmlAnswers__["a" /* htmlAnswerArr */][16].A16) {
        displayAnswer.innerHTML = `<textarea name="text" class="answer_textarea" id="input">
&ltbody style="background-color:yellow"&gt
    &ltp&gtThis is a paragraph.&lt/p&gt
&lt/body&gt</textarea>`;
        incorrectValue.innerHTML = "Incorrect..";
        nextButton.innerHTML = `<button class="nextButton htmlColor1" onclick=btn()>Next</button>`;
        removeValue.innerHTML = "";



    } else if (randomValue == 17 && inputAnswer == __WEBPACK_IMPORTED_MODULE_1__questionsAndAnswers_htmlAnswers__["a" /* htmlAnswerArr */][17].A17) {
        correctValue.innerHTML = "Correct..";
        displayAnswer.innerHTML = `<textarea name="text" class="answer_textarea" id="input">Good Job :) </textarea>`;
        nextButton.innerHTML = `<button class="nextButton htmlColor1" onclick=btn()>Next</button>`;
        removeValue.innerHTML = "";

    } else if (randomValue == 17 && inputAnswer !== __WEBPACK_IMPORTED_MODULE_1__questionsAndAnswers_htmlAnswers__["a" /* htmlAnswerArr */][17].A17) {
        displayAnswer.innerHTML = `<textarea name="text" class="answer_textarea" id="input">
&lthtml&gt
    &ltbody style="text-align:center"&gt
        &lth1&gtThis is a heading&lt/h1&gt
        &lth2&gtThis is also a heading&lt/h2&gt
        &ltp&gtThis is a paragraph.&lt/p&gt
        &ltp&gtThis is also paragraph.&lt/p&gt
    &lt/body&gt
&lt/html&gt</textarea>`;
        incorrectValue.innerHTML = "Incorrect..";
        nextButton.innerHTML = `<button class="nextButton htmlColor1" onclick=btn()>Next</button>`;
        removeValue.innerHTML = "";



    } else if (randomValue == 18 && inputAnswer == __WEBPACK_IMPORTED_MODULE_1__questionsAndAnswers_htmlAnswers__["a" /* htmlAnswerArr */][18].A18) {
        correctValue.innerHTML = "Correct..";
        displayAnswer.innerHTML = `<textarea name="text" class="answer_textarea" id="input">Good Job :) </textarea>`;
        nextButton.innerHTML = `<button class="nextButton htmlColor1" onclick=btn()>Next</button>`;
        removeValue.innerHTML = "";

    } else if (randomValue == 18 && inputAnswer !== __WEBPACK_IMPORTED_MODULE_1__questionsAndAnswers_htmlAnswers__["a" /* htmlAnswerArr */][18].A18) {
        displayAnswer.innerHTML = `<textarea name="text" class="answer_textarea" id="input">
&ltp&gtThis mission is to stop the &ltstrong&gt degradation &lt/strong&gt of our planets natural environment.&lt/p&gt</textarea>`;
        incorrectValue.innerHTML = "Incorrect..";
        nextButton.innerHTML = `<button class="nextButton htmlColor1" onclick=btn()>Next</button>`;
        removeValue.innerHTML = "";



    } else if (randomValue == 19 && inputAnswer == __WEBPACK_IMPORTED_MODULE_1__questionsAndAnswers_htmlAnswers__["a" /* htmlAnswerArr */][19].A19) {
        correctValue.innerHTML = "Correct..";
        displayAnswer.innerHTML = `<textarea name="text" class="answer_textarea" id="input">Good Job :) </textarea>`;
        nextButton.innerHTML = `<button class="nextButton htmlColor1" onclick=btn()>Next</button>`;
        removeValue.innerHTML = "";

    } else if (randomValue == 19 && inputAnswer !== __WEBPACK_IMPORTED_MODULE_1__questionsAndAnswers_htmlAnswers__["a" /* htmlAnswerArr */][19].A19) {
        displayAnswer.innerHTML = `<textarea name="text" class="answer_textarea" id="input">
&ltp&gtTokyo is the capital of Japan,
the center of the Greater Tokyo Area, 
and the most populous &ltem&gtmetropolitan&lt/em&gt area in the world.&lt/p&gt</textarea>`;
        incorrectValue.innerHTML = "Incorrect..";
        nextButton.innerHTML = `<button class="nextButton htmlColor1" onclick=btn()>Next</button>`;
        removeValue.innerHTML = "";



    } else if (randomValue == 20 && inputAnswer == __WEBPACK_IMPORTED_MODULE_1__questionsAndAnswers_htmlAnswers__["a" /* htmlAnswerArr */][20].A20) {
        correctValue.innerHTML = "Correct..";
        displayAnswer.innerHTML = `<textarea name="text" class="answer_textarea" id="input">Good Job :) </textarea>`;
        nextButton.innerHTML = `<button class="nextButton htmlColor1" onclick=btn()>Next</button>`;
        removeValue.innerHTML = "";

    } else if (randomValue == 20 && inputAnswer !== __WEBPACK_IMPORTED_MODULE_1__questionsAndAnswers_htmlAnswers__["a" /* htmlAnswerArr */][20].A20) {
        displayAnswer.innerHTML = `<textarea name="text" class="answer_textarea" id="input">
&ltp&gtHTML is &ltmark&gtFUN&lt/mark&gt to learn!&lt/p&gt</textarea>`;
        incorrectValue.innerHTML = "Incorrect..";
        nextButton.innerHTML = `<button class="nextButton htmlColor1" onclick=btn()>Next</button>`;
        removeValue.innerHTML = "";



    } else if (randomValue == 21 && inputAnswer == __WEBPACK_IMPORTED_MODULE_1__questionsAndAnswers_htmlAnswers__["a" /* htmlAnswerArr */][21].A21) {
        correctValue.innerHTML = "Correct..";
        displayAnswer.innerHTML = `<textarea name="text" class="answer_textarea" id="input">Good Job :) </textarea>`;
        nextButton.innerHTML = `<button class="nextButton htmlColor1" onclick=btn()>Next</button>`;
        removeValue.innerHTML = "";

    } else if (randomValue == 21 && inputAnswer !== __WEBPACK_IMPORTED_MODULE_1__questionsAndAnswers_htmlAnswers__["a" /* htmlAnswerArr */][21].A21) {
        displayAnswer.innerHTML = `<textarea name="text" class="answer_textarea" id="input">
&ltp&gtH&ltsub&gt2&lt/sub&gtO is the scientific term for water.&lt/p&gt</textarea>`;
        incorrectValue.innerHTML = "Incorrect..";
        nextButton.innerHTML = `<button class="nextButton htmlColor1" onclick=btn()>Next</button>`;
        removeValue.innerHTML = "";



    } else if (randomValue == 22 && inputAnswer == __WEBPACK_IMPORTED_MODULE_1__questionsAndAnswers_htmlAnswers__["a" /* htmlAnswerArr */][22].A22) {
        correctValue.innerHTML = "Correct..";
        displayAnswer.innerHTML = `<textarea name="text" class="answer_textarea" id="input">Good Job :) </textarea>`;
        nextButton.innerHTML = `<button class="nextButton htmlColor1" onclick=btn()>Next</button>`;
        removeValue.innerHTML = "";

    } else if (randomValue == 22 && inputAnswer !== __WEBPACK_IMPORTED_MODULE_1__questionsAndAnswers_htmlAnswers__["a" /* htmlAnswerArr */][22].A22) {
        displayAnswer.innerHTML = `<textarea name="text" class="answer_textarea" id="input">
&ltp&gtI am so &ltq&gtcool&lt/q&gt.&lt/p&gt</textarea>`;
        incorrectValue.innerHTML = "Incorrect..";
        nextButton.innerHTML = `<button class="nextButton htmlColor1" onclick=btn()>Next</button>`;
        removeValue.innerHTML = "";



    } else if (randomValue == 23 && inputAnswer == __WEBPACK_IMPORTED_MODULE_1__questionsAndAnswers_htmlAnswers__["a" /* htmlAnswerArr */][23].A23) {
        correctValue.innerHTML = "Correct..";
        displayAnswer.innerHTML = `<textarea name="text" class="answer_textarea" id="input">Good Job :) </textarea>`;
        nextButton.innerHTML = `<button class="nextButton htmlColor1" onclick=btn()>Next</button>`;
        removeValue.innerHTML = "";

    } else if (randomValue == 23 && inputAnswer !== __WEBPACK_IMPORTED_MODULE_1__questionsAndAnswers_htmlAnswers__["a" /* htmlAnswerArr */][23].A23) {
        displayAnswer.innerHTML = `<textarea name="text" class="answer_textarea" id="input">
&ltblockquote cite="http://www.worldwildlife.org/who/index.html"&gt 
For 50 years, WWF has been protecting the future of nature. 
&lt/blockquote&gt</textarea>`;
        incorrectValue.innerHTML = "Incorrect..";
        nextButton.innerHTML = `<button class="nextButton htmlColor1" onclick=btn()>Next</button>`;
        removeValue.innerHTML = "";



    } else if (randomValue == 24 && inputAnswer == __WEBPACK_IMPORTED_MODULE_1__questionsAndAnswers_htmlAnswers__["a" /* htmlAnswerArr */][24].A24) {
        correctValue.innerHTML = "Correct..";
        displayAnswer.innerHTML = `<textarea name="text" class="answer_textarea" id="input">Good Job :) </textarea>`;
        nextButton.innerHTML = `<button class="nextButton htmlColor1" onclick=btn()>Next</button>`;
        removeValue.innerHTML = "";

    } else if (randomValue == 24 && inputAnswer !== __WEBPACK_IMPORTED_MODULE_1__questionsAndAnswers_htmlAnswers__["a" /* htmlAnswerArr */][24].A24) {
        displayAnswer.innerHTML = `<textarea name="text" class="answer_textarea" id="input">
&ltbdo dir="rtl"&gtWhat a beautiful day!&lt/bdo&gt</textarea>`;
        incorrectValue.innerHTML = "Incorrect..";
        nextButton.innerHTML = `<button class="nextButton htmlColor1" onclick=btn()>Next</button>`;
        removeValue.innerHTML = "";



    } else if (randomValue == 25 && inputAnswer == __WEBPACK_IMPORTED_MODULE_1__questionsAndAnswers_htmlAnswers__["a" /* htmlAnswerArr */][25].A25) {
        correctValue.innerHTML = "Correct..";
        displayAnswer.innerHTML = `<textarea name="text" class="answer_textarea" id="input">Good Job :) </textarea>`;
        nextButton.innerHTML = `<button class="nextButton htmlColor1" onclick=btn()>Next</button>`;
        removeValue.innerHTML = "";

    } else if (randomValue == 25 && inputAnswer !== __WEBPACK_IMPORTED_MODULE_1__questionsAndAnswers_htmlAnswers__["a" /* htmlAnswerArr */][25].A25) {
        displayAnswer.innerHTML = `<textarea name="text" class="answer_textarea" id="input">
&ltp&gtThe &ltabbr title="World Health Organization"&gtWHO&lt/abbr&gt was founded in 1948.&lt/p&gt</textarea>`;
        incorrectValue.innerHTML = "Incorrect..";
        nextButton.innerHTML = `<button class="nextButton htmlColor1" onclick=btn()>Next</button>`;
        removeValue.innerHTML = "";



    } else if (randomValue == 26 && inputAnswer == __WEBPACK_IMPORTED_MODULE_1__questionsAndAnswers_htmlAnswers__["a" /* htmlAnswerArr */][26].A26) {
        correctValue.innerHTML = "Correct..";
        displayAnswer.innerHTML = `<textarea name="text" class="answer_textarea" id="input">Good Job :) </textarea>`;
        nextButton.innerHTML = `<button class="nextButton htmlColor1" onclick=btn()>Next</button>`;
        removeValue.innerHTML = "";

    } else if (randomValue == 26 && inputAnswer !== __WEBPACK_IMPORTED_MODULE_1__questionsAndAnswers_htmlAnswers__["a" /* htmlAnswerArr */][26].A26) {
        displayAnswer.innerHTML = `<textarea name="text" class="answer_textarea" id="input">
&lt!-- Do not display this text in the browser --&gt</textarea>`;
        incorrectValue.innerHTML = "Incorrect..";
        nextButton.innerHTML = `<button class="nextButton htmlColor1" onclick=btn()>Next</button>`;
        removeValue.innerHTML = "";



    } else if (randomValue == 27 && inputAnswer == __WEBPACK_IMPORTED_MODULE_1__questionsAndAnswers_htmlAnswers__["a" /* htmlAnswerArr */][27].A27) {
        correctValue.innerHTML = "Correct..";
        displayAnswer.innerHTML = `<textarea name="text" class="answer_textarea" id="input">Good Job :) </textarea>`;
        nextButton.innerHTML = `<button class="nextButton htmlColor1" onclick=btn()>Next</button>`;
        removeValue.innerHTML = "";

    } else if (randomValue == 27 && inputAnswer !== __WEBPACK_IMPORTED_MODULE_1__questionsAndAnswers_htmlAnswers__["a" /* htmlAnswerArr */][27].A27) {
        displayAnswer.innerHTML = `<textarea name="text" class="answer_textarea" id="input">
&ltstyle&gt body {background-color:yellow;}&lt/style&gt</textarea>`;
        incorrectValue.innerHTML = "Incorrect..";
        nextButton.innerHTML = `<button class="nextButton htmlColor1" onclick=btn()>Next</button>`;
        removeValue.innerHTML = "";



    } else if (randomValue == 28 && inputAnswer == __WEBPACK_IMPORTED_MODULE_1__questionsAndAnswers_htmlAnswers__["a" /* htmlAnswerArr */][28].A28) {
        correctValue.innerHTML = "Correct..";
        displayAnswer.innerHTML = `<textarea name="text" class="answer_textarea" id="input">Good Job :) </textarea>`;
        nextButton.innerHTML = `<button class="nextButton htmlColor1" onclick=btn()>Next</button>`;
        removeValue.innerHTML = "";

    } else if (randomValue == 28 && inputAnswer !== __WEBPACK_IMPORTED_MODULE_1__questionsAndAnswers_htmlAnswers__["a" /* htmlAnswerArr */][28].A28) {
        displayAnswer.innerHTML = `<textarea name="text" class="answer_textarea" id="input">
&ltp id="special"&gtI want to be a special paragraph!&lt/p&gt</textarea>`;
        incorrectValue.innerHTML = "Incorrect..";
        nextButton.innerHTML = `<button class="nextButton htmlColor1" onclick=btn()>Next</button>`;
        removeValue.innerHTML = "";



    } else if (randomValue == 29 && inputAnswer == __WEBPACK_IMPORTED_MODULE_1__questionsAndAnswers_htmlAnswers__["a" /* htmlAnswerArr */][29].A29) {
        correctValue.innerHTML = "Correct..";
        displayAnswer.innerHTML = `<textarea name="text" class="answer_textarea" id="input">Good Job :) </textarea>`;
        nextButton.innerHTML = `<button class="nextButton htmlColor1" onclick=btn()>Next</button>`;
        removeValue.innerHTML = "";

    } else if (randomValue == 29 && inputAnswer !== __WEBPACK_IMPORTED_MODULE_1__questionsAndAnswers_htmlAnswers__["a" /* htmlAnswerArr */][29].A29) {
        displayAnswer.innerHTML = `<textarea name="text" class="answer_textarea" id="input">
&ltp class="intro"&gtThis is a paragraph.&lt/p&gt 
&ltp class="intro"&gtThis is a paragraph.&lt/p&gt</textarea>`;
        incorrectValue.innerHTML = "Incorrect..";
        nextButton.innerHTML = `<button class="nextButton htmlColor1" onclick=btn()>Next</button>`;
        removeValue.innerHTML = "";



    } else if (randomValue == 30 && inputAnswer == __WEBPACK_IMPORTED_MODULE_1__questionsAndAnswers_htmlAnswers__["a" /* htmlAnswerArr */][30].A30) {
        correctValue.innerHTML = "Correct..";
        displayAnswer.innerHTML = `<textarea name="text" class="answer_textarea" id="input">Good Job :) </textarea>`;
        nextButton.innerHTML = `<button class="nextButton htmlColor1" onclick=btn()>Next</button>`;
        removeValue.innerHTML = "";

    } else if (randomValue == 30 && inputAnswer !== __WEBPACK_IMPORTED_MODULE_1__questionsAndAnswers_htmlAnswers__["a" /* htmlAnswerArr */][30].A30) {
        displayAnswer.innerHTML = `<textarea name="text" class="answer_textarea" id="input">
&lta href="https://www.google.com"&gtVisit our HTML tutorial.&lt/a&gt</textarea>`;
        incorrectValue.innerHTML = "Incorrect..";
        nextButton.innerHTML = `<button class="nextButton htmlColor1" onclick=btn()>Next</button>`;
        removeValue.innerHTML = "";



    } else if (randomValue == 31 && inputAnswer == __WEBPACK_IMPORTED_MODULE_1__questionsAndAnswers_htmlAnswers__["a" /* htmlAnswerArr */][31].A31) {
        correctValue.innerHTML = "Correct..";
        displayAnswer.innerHTML = `<textarea name="text" class="answer_textarea" id="input">Good Job :) </textarea>`;
        nextButton.innerHTML = `<button class="nextButton htmlColor1" onclick=btn()>Next</button>`;
        removeValue.innerHTML = "";

    } else if (randomValue == 31 && inputAnswer !== __WEBPACK_IMPORTED_MODULE_1__questionsAndAnswers_htmlAnswers__["a" /* htmlAnswerArr */][31].A31) {
        displayAnswer.innerHTML = `<textarea name="text" class="answer_textarea" id="input">
&lta href="html_images.asp"&gtHTML Images&lt/a&gt</textarea>`;
        incorrectValue.innerHTML = "Incorrect..";
        nextButton.innerHTML = `<button class="nextButton htmlColor1" onclick=btn()>Next</button>`;
        removeValue.innerHTML = "";



    } else if (randomValue == 32 && inputAnswer == __WEBPACK_IMPORTED_MODULE_1__questionsAndAnswers_htmlAnswers__["a" /* htmlAnswerArr */][32].A32) {
        correctValue.innerHTML = "Correct..";
        displayAnswer.innerHTML = `<textarea name="text" class="answer_textarea" id="input">Good Job :) </textarea>`;
        nextButton.innerHTML = `<button class="nextButton htmlColor1" onclick=btn()>Next</button>`;
        removeValue.innerHTML = "";

    } else if (randomValue == 32 && inputAnswer !== __WEBPACK_IMPORTED_MODULE_1__questionsAndAnswers_htmlAnswers__["a" /* htmlAnswerArr */][32].A32) {
        displayAnswer.innerHTML = `<textarea name="text" class="answer_textarea" id="input">
&lta href="html_images.asp" target="_blank"&gtHTML Images&lt/a&gt</textarea>`;
        incorrectValue.innerHTML = "Incorrect..";
        nextButton.innerHTML = `<button class="nextButton htmlColor1" onclick=btn()>Next</button>`;
        removeValue.innerHTML = "";



    } else if (randomValue == 33 && inputAnswer == __WEBPACK_IMPORTED_MODULE_1__questionsAndAnswers_htmlAnswers__["a" /* htmlAnswerArr */][33].A33) {
        correctValue.innerHTML = "Correct..";
        displayAnswer.innerHTML = `<textarea name="text" class="answer_textarea" id="input">Good Job :) </textarea>`;
        nextButton.innerHTML = `<button class="nextButton htmlColor1" onclick=btn()>Next</button>`;
        removeValue.innerHTML = "";

    } else if (randomValue == 33 && inputAnswer !== __WEBPACK_IMPORTED_MODULE_1__questionsAndAnswers_htmlAnswers__["a" /* htmlAnswerArr */][33].A33) {
        displayAnswer.innerHTML = `<textarea name="text" class="answer_textarea" id="input">
&lta href="html_images.asp" target="_blank" style="text-decoration:none"&gtHTML Images&lt/a&gt</textarea>`;
        incorrectValue.innerHTML = "Incorrect..";
        nextButton.innerHTML = `<button class="nextButton htmlColor1" onclick=btn()>Next</button>`;
        removeValue.innerHTML = "";



    } else if (randomValue == 34 && inputAnswer == __WEBPACK_IMPORTED_MODULE_1__questionsAndAnswers_htmlAnswers__["a" /* htmlAnswerArr */][34].A34) {
        correctValue.innerHTML = "Correct..";
        displayAnswer.innerHTML = `<textarea name="text" class="answer_textarea" id="input">Good Job :) </textarea>`;
        nextButton.innerHTML = `<button class="nextButton htmlColor1" onclick=btn()>Next</button>`;
        removeValue.innerHTML = "";

    } else if (randomValue == 34 && inputAnswer !== __WEBPACK_IMPORTED_MODULE_1__questionsAndAnswers_htmlAnswers__["a" /* htmlAnswerArr */][34].A34) {
        displayAnswer.innerHTML = `<textarea name="text" class="answer_textarea" id="input">
&lta href="https://www.google.com"&gt 
    &ltimg src="smiley.gif" alt="HTML tutorial" style="width:42px;height:42px;border:0"&gt
&lt/a&gt</textarea>`;
        incorrectValue.innerHTML = "Incorrect..";
        nextButton.innerHTML = `<button class="nextButton htmlColor1" onclick=btn()>Next</button>`;
        removeValue.innerHTML = "";



    } else if (randomValue == 35 && inputAnswer == __WEBPACK_IMPORTED_MODULE_1__questionsAndAnswers_htmlAnswers__["a" /* htmlAnswerArr */][35].A35) {
        correctValue.innerHTML = "Correct..";
        displayAnswer.innerHTML = `<textarea name="text" class="answer_textarea" id="input">Good Job :) </textarea>`;
        nextButton.innerHTML = `<button class="nextButton htmlColor1" onclick=btn()>Next</button>`;
        removeValue.innerHTML = "";

    } else if (randomValue == 35 && inputAnswer !== __WEBPACK_IMPORTED_MODULE_1__questionsAndAnswers_htmlAnswers__["a" /* htmlAnswerArr */][35].A35) {
        displayAnswer.innerHTML = `<textarea name="text" class="answer_textarea" id="input">
&ltimg src="programming.gif" alt="Computer Man" width="96" height="96"&gt</textarea>`;
        incorrectValue.innerHTML = "Incorrect..";
        nextButton.innerHTML = `<button class="nextButton htmlColor1" onclick=btn()>Next</button>`;
        removeValue.innerHTML = "";



    } else if (randomValue == 36 && inputAnswer == __WEBPACK_IMPORTED_MODULE_1__questionsAndAnswers_htmlAnswers__["a" /* htmlAnswerArr */][36].A36) {
        correctValue.innerHTML = "Correct..";
        displayAnswer.innerHTML = `<textarea name="text" class="answer_textarea" id="input">Good Job :) </textarea>`;
        nextButton.innerHTML = `<button class="nextButton htmlColor1" onclick=btn()>Next</button>`;
        removeValue.innerHTML = "";

    } else if (randomValue == 36 && inputAnswer !== __WEBPACK_IMPORTED_MODULE_1__questionsAndAnswers_htmlAnswers__["a" /* htmlAnswerArr */][36].A36) {
        displayAnswer.innerHTML = `<textarea name="text" class="answer_textarea" id="input">
&ltimg src="html5.gif" alt="HTML5 Icon" style="width:256px;height:256px;"&gt</textarea>`;
        incorrectValue.innerHTML = "Incorrect..";
        nextButton.innerHTML = `<button class="nextButton htmlColor1" onclick=btn()>Next</button>`;
        removeValue.innerHTML = "";

        
        

    } else if (randomValue == 37 && inputAnswer == __WEBPACK_IMPORTED_MODULE_1__questionsAndAnswers_htmlAnswers__["a" /* htmlAnswerArr */][37].A37) {
        correctValue.innerHTML = "Correct..";
        displayAnswer.innerHTML = `<textarea name="text" class="answer_textarea" id="input">Good Job :) </textarea>`;
        nextButton.innerHTML = `<button class="nextButton htmlColor1" onclick=btn()>Next</button>`;
        removeValue.innerHTML = "";

    } else if (randomValue == 37 && inputAnswer !== __WEBPACK_IMPORTED_MODULE_1__questionsAndAnswers_htmlAnswers__["a" /* htmlAnswerArr */][37].A37) {
        displayAnswer.innerHTML = `<textarea name="text" class="answer_textarea" id="input">
&ltimg src="smiley.gif" alt="Smiley face" style="float:left;width:42px;height:42px;"&gt</textarea>`;
        incorrectValue.innerHTML = "Incorrect..";
        nextButton.innerHTML = `<button class="nextButton htmlColor1" onclick=btn()>Next</button>`;
        removeValue.innerHTML = "";



    } else if (randomValue == 38 && inputAnswer == __WEBPACK_IMPORTED_MODULE_1__questionsAndAnswers_htmlAnswers__["a" /* htmlAnswerArr */][38].A38) {
        correctValue.innerHTML = "Correct..";
        displayAnswer.innerHTML = `<textarea name="text" class="answer_textarea" id="input">Good Job :) </textarea>`;
        nextButton.innerHTML = `<button class="nextButton htmlColor1" onclick=btn()>Next</button>`;
        removeValue.innerHTML = "";

    } else if (randomValue == 38 && inputAnswer !== __WEBPACK_IMPORTED_MODULE_1__questionsAndAnswers_htmlAnswers__["a" /* htmlAnswerArr */][38].A38) {
        displayAnswer.innerHTML = `<textarea name="text" class="answer_textarea" id="input">
&ltimg src="pic_trulli.jpg" style="width:304px;height:228px;"&gt</textarea>`;
        incorrectValue.innerHTML = "Incorrect..";
        nextButton.innerHTML = `<button class="nextButton htmlColor1" onclick=btn()>Next</button>`;
        removeValue.innerHTML = "";



    } else if (randomValue == 39 && inputAnswer == __WEBPACK_IMPORTED_MODULE_1__questionsAndAnswers_htmlAnswers__["a" /* htmlAnswerArr */][39].A39) {
        correctValue.innerHTML = "Correct..";
        displayAnswer.innerHTML = `<textarea name="text" class="answer_textarea" id="input">Good Job :) </textarea>`;
        nextButton.innerHTML = `<button class="nextButton htmlColor1" onclick=btn()>Next</button>`;
        removeValue.innerHTML = "";

    } else if (randomValue == 39 && inputAnswer !== __WEBPACK_IMPORTED_MODULE_1__questionsAndAnswers_htmlAnswers__["a" /* htmlAnswerArr */][39].A39) {
        displayAnswer.innerHTML = `<textarea name="text" class="answer_textarea" id="input">
&ltimg src="google.jpg" alt="google.com" width="135" height="50"&gt</textarea>`;
        incorrectValue.innerHTML = "Incorrect..";
        nextButton.innerHTML = `<button class="nextButton htmlColor1" onclick=btn()>Next</button>`;
        removeValue.innerHTML = "";



    } else if (randomValue == 40 && inputAnswer == __WEBPACK_IMPORTED_MODULE_1__questionsAndAnswers_htmlAnswers__["a" /* htmlAnswerArr */][40].A40) {
        correctValue.innerHTML = "Correct..";
        displayAnswer.innerHTML = `<textarea name="text" class="answer_textarea" id="input">Good Job :) </textarea>`;
        nextButton.innerHTML = `<button class="nextButton htmlColor1" onclick=btn()>Next</button>`;
        removeValue.innerHTML = "";

    } else if (randomValue == 40 && inputAnswer !== __WEBPACK_IMPORTED_MODULE_1__questionsAndAnswers_htmlAnswers__["a" /* htmlAnswerArr */][40].A40) {
        displayAnswer.innerHTML = `<textarea name="text" class="answer_textarea" id="input">
&ltcaption&gtNames&lt/caption&gt</textarea>`;
        incorrectValue.innerHTML = "Incorrect..";
        nextButton.innerHTML = `<button class="nextButton htmlColor1" onclick=btn()>Next</button>`;
        removeValue.innerHTML = "";



    } else if (randomValue == 41 && inputAnswer == __WEBPACK_IMPORTED_MODULE_1__questionsAndAnswers_htmlAnswers__["a" /* htmlAnswerArr */][41].A41) {
        correctValue.innerHTML = "Correct..";
        displayAnswer.innerHTML = `<textarea name="text" class="answer_textarea" id="input">Good Job :) </textarea>`;
        nextButton.innerHTML = `<button class="nextButton htmlColor1" onclick=btn()>Next</button>`;
        removeValue.innerHTML = "";

    } else if (randomValue == 41 && inputAnswer !== __WEBPACK_IMPORTED_MODULE_1__questionsAndAnswers_htmlAnswers__["a" /* htmlAnswerArr */][41].A41) {
        displayAnswer.innerHTML = `<textarea name="text" class="answer_textarea" id="input">
&ltdl&gt 
    &ltdt&gtCoffee&lt/dt&gt 
    &ltdd&gt- black hot drink&lt/dd&gt 
    &ltdt&gtMilk&lt/dt&gt 
    &ltdd&gt- white cold drink&lt/dd&gt 
&lt/dl&gt</textarea>`;
        incorrectValue.innerHTML = "Incorrect..";
        nextButton.innerHTML = `<button class="nextButton htmlColor1" onclick=btn()>Next</button>`;
        removeValue.innerHTML = "";



    } else if (randomValue == 42 && inputAnswer == __WEBPACK_IMPORTED_MODULE_1__questionsAndAnswers_htmlAnswers__["a" /* htmlAnswerArr */][42].A42) {
        correctValue.innerHTML = "Correct..";
        displayAnswer.innerHTML = `<textarea name="text" class="answer_textarea" id="input">Good Job :) </textarea>`;
        nextButton.innerHTML = `<button class="nextButton htmlColor1" onclick=btn()>Next</button>`;
        removeValue.innerHTML = "";

    } else if (randomValue == 42 && inputAnswer !== __WEBPACK_IMPORTED_MODULE_1__questionsAndAnswers_htmlAnswers__["a" /* htmlAnswerArr */][42].A42) {
        displayAnswer.innerHTML = `<textarea name="text" class="answer_textarea" id="input">
&ltinput type="text" name="firstname" value="John" disabled&gt</textarea>`;
        incorrectValue.innerHTML = "Incorrect..";
        nextButton.innerHTML = `<button class="nextButton htmlColor1" onclick=btn()>Next</button>`;
        removeValue.innerHTML = "";



    } else if (randomValue == 43 && inputAnswer == __WEBPACK_IMPORTED_MODULE_1__questionsAndAnswers_htmlAnswers__["a" /* htmlAnswerArr */][43].A43) {
        correctValue.innerHTML = "Correct..";
        displayAnswer.innerHTML = `<textarea name="text" class="answer_textarea" id="input">Good Job :) </textarea>`;
        nextButton.innerHTML = `<button class="nextButton htmlColor1" onclick=btn()>Next</button>`;
        removeValue.innerHTML = "";

    } else if (randomValue == 43 && inputAnswer !== __WEBPACK_IMPORTED_MODULE_1__questionsAndAnswers_htmlAnswers__["a" /* htmlAnswerArr */][43].A43) {
        displayAnswer.innerHTML = `<textarea name="text" class="answer_textarea" id="input">
&ltinput type="button" value="OK"&gt</textarea>`;
        incorrectValue.innerHTML = "Incorrect..";
        nextButton.innerHTML = `<button class="nextButton htmlColor1" onclick=btn()>Next</button>`;
        removeValue.innerHTML = "";



    } else if (randomValue == 44 && inputAnswer == __WEBPACK_IMPORTED_MODULE_1__questionsAndAnswers_htmlAnswers__["a" /* htmlAnswerArr */][44].A44) {
        correctValue.innerHTML = "Correct..";
        displayAnswer.innerHTML = `<textarea name="text" class="answer_textarea" id="input">Good Job :) </textarea>`;
        nextButton.innerHTML = `<button class="nextButton htmlColor1" onclick=btn()>Next</button>`;
        removeValue.innerHTML = "";

    } else if (randomValue == 44 && inputAnswer !== __WEBPACK_IMPORTED_MODULE_1__questionsAndAnswers_htmlAnswers__["a" /* htmlAnswerArr */][44].A44) {
        displayAnswer.innerHTML = `<textarea name="text" class="answer_textarea" id="input">
&ltform&gt 
    &ltinput type="radio" name="gender" value="male"&gt Male 
    &ltinput type="radio" name="gender" value="female"&gt Female 
&lt/form&gt</textarea>`;
        incorrectValue.innerHTML = "Incorrect..";
        nextButton.innerHTML = `<button class="nextButton htmlColor1" onclick=btn()>Next</button>`;
        removeValue.innerHTML = "";



    } else if (randomValue == 45 && inputAnswer == __WEBPACK_IMPORTED_MODULE_1__questionsAndAnswers_htmlAnswers__["a" /* htmlAnswerArr */][45].A45) {
        correctValue.innerHTML = "Correct..";
        displayAnswer.innerHTML = `<textarea name="text" class="answer_textarea" id="input">Good Job :) </textarea>`;
        nextButton.innerHTML = `<button class="nextButton htmlColor1" onclick=btn()>Next</button>`;
        removeValue.innerHTML = "";

    } else if (randomValue == 45 && inputAnswer !== __WEBPACK_IMPORTED_MODULE_1__questionsAndAnswers_htmlAnswers__["a" /* htmlAnswerArr */][45].A45) {
        displayAnswer.innerHTML = `<textarea name="text" class="answer_textarea" id="input">
&ltselect name="cars"&gt 
    &ltoption value="volvo"&gtVolvo&lt/option&gt 
    &ltoption value="ford"&gtFord&lt/option&gt 
    &ltoption value="fiat"&gtFiat&lt/option&gt 
    &ltoption value="audi"&gtAudi&lt/option&gt 
&lt/select&gt</textarea>`;
        incorrectValue.innerHTML = "Incorrect..";
        nextButton.innerHTML = `<button class="nextButton htmlColor1" onclick=btn()>Next</button>`;
        removeValue.innerHTML = "";



    } else if (randomValue == 46 && inputAnswer == __WEBPACK_IMPORTED_MODULE_1__questionsAndAnswers_htmlAnswers__["a" /* htmlAnswerArr */][46].A46) {
        correctValue.innerHTML = "Correct..";
        displayAnswer.innerHTML = `<textarea name="text" class="answer_textarea" id="input">Good Job :) </textarea>`;
        nextButton.innerHTML = `<button class="nextButton htmlColor1" onclick=btn()>Next</button>`;
        removeValue.innerHTML = "";

    } else if (randomValue == 46 && inputAnswer !== __WEBPACK_IMPORTED_MODULE_1__questionsAndAnswers_htmlAnswers__["a" /* htmlAnswerArr */][46].A46) {
        displayAnswer.innerHTML = `<textarea name="text" class="answer_textarea" id="input">
&lttextarea name="note"&gt&lt/textarea&gt</textarea>`;
        incorrectValue.innerHTML = "Incorrect..";
        nextButton.innerHTML = `<button class="nextButton htmlColor1" onclick=btn()>Next</button>`;
        removeValue.innerHTML = "";



    } else if (randomValue == 47 && inputAnswer == __WEBPACK_IMPORTED_MODULE_1__questionsAndAnswers_htmlAnswers__["a" /* htmlAnswerArr */][47].A47) {
        correctValue.innerHTML = "Correct..";
        displayAnswer.innerHTML = `<textarea name="text" class="answer_textarea" id="input">Good Job :) </textarea>`;
        nextButton.innerHTML = `<button class="nextButton htmlColor1" onclick=btn()>Next</button>`;
        removeValue.innerHTML = "";

    } else if (randomValue == 47 && inputAnswer !== __WEBPACK_IMPORTED_MODULE_1__questionsAndAnswers_htmlAnswers__["a" /* htmlAnswerArr */][47].A47) {
        displayAnswer.innerHTML = `<textarea name="text" class="answer_textarea" id="input">
&ltbutton type="button" onclick="alert("Hello World!")"&gt Click Me!
&lt/button&gt</textarea>`;
        incorrectValue.innerHTML = "Incorrect..";
        nextButton.innerHTML = `<button class="nextButton htmlColor1" onclick=btn()>Next</button>`;
        removeValue.innerHTML = "";



    } else if (randomValue == 48 && inputAnswer == __WEBPACK_IMPORTED_MODULE_1__questionsAndAnswers_htmlAnswers__["a" /* htmlAnswerArr */][48].A48) {
        correctValue.innerHTML = "Correct..";
        displayAnswer.innerHTML = `<textarea name="text" class="answer_textarea" id="input">Good Job :) </textarea>`;
        nextButton.innerHTML = `<button class="nextButton htmlColor1" onclick=btn()>Next</button>`;
        removeValue.innerHTML = "";

    } else if (randomValue == 48 && inputAnswer !== __WEBPACK_IMPORTED_MODULE_1__questionsAndAnswers_htmlAnswers__["a" /* htmlAnswerArr */][48].A48) {
        displayAnswer.innerHTML = `<textarea name="text" class="answer_textarea" id="input">
&ltinput type="text"&gt</textarea>`;
        incorrectValue.innerHTML = "Incorrect..";
        nextButton.innerHTML = `<button class="nextButton htmlColor1" onclick=btn()>Next</button>`;
        removeValue.innerHTML = "";



    } else if (randomValue == 49 && inputAnswer == __WEBPACK_IMPORTED_MODULE_1__questionsAndAnswers_htmlAnswers__["a" /* htmlAnswerArr */][49].A49) {
        correctValue.innerHTML = "Correct..";
        displayAnswer.innerHTML = `<textarea name="text" class="answer_textarea" id="input">Good Job :) </textarea>`;
        nextButton.innerHTML = `<button class="nextButton htmlColor1" onclick=btn()>Next</button>`;
        removeValue.innerHTML = "";

    } else if (randomValue == 49 && inputAnswer !== __WEBPACK_IMPORTED_MODULE_1__questionsAndAnswers_htmlAnswers__["a" /* htmlAnswerArr */][49].A49) {
        displayAnswer.innerHTML = `<textarea name="text" class="answer_textarea" id="input">
&ltinput type="submit"&gt</textarea>`;
        incorrectValue.innerHTML = "Incorrect..";
        nextButton.innerHTML = `<button class="nextButton htmlColor1" onclick=btn()>Next</button>`;
        removeValue.innerHTML = "";



    } else if (randomValue == 50 && inputAnswer == __WEBPACK_IMPORTED_MODULE_1__questionsAndAnswers_htmlAnswers__["a" /* htmlAnswerArr */][50].A50) {
        correctValue.innerHTML = "Correct..";
        displayAnswer.innerHTML = `<textarea name="text" class="answer_textarea" id="input">Good Job :) </textarea>`;
        nextButton.innerHTML = `<button class="nextButton htmlColor1" onclick=btn()>Next</button>`;
        removeValue.innerHTML = "";

    } else if (randomValue == 50 && inputAnswer !== __WEBPACK_IMPORTED_MODULE_1__questionsAndAnswers_htmlAnswers__["a" /* htmlAnswerArr */][50].A50) {
        displayAnswer.innerHTML = `<textarea name="text" class="answer_textarea" id="input">
&ltinput type="text" name="firstname" value="John"&gt</textarea>`;
        incorrectValue.innerHTML = "Incorrect..";
        nextButton.innerHTML = `<button class="nextButton htmlColor1" onclick=btn()>Next</button>`;
        removeValue.innerHTML = "";



    } else if (randomValue == 51 && inputAnswer == __WEBPACK_IMPORTED_MODULE_1__questionsAndAnswers_htmlAnswers__["a" /* htmlAnswerArr */][51].A51) {
        correctValue.innerHTML = "Correct..";
        displayAnswer.innerHTML = `<textarea name="text" class="answer_textarea" id="input">Good Job :) </textarea>`;
        nextButton.innerHTML = `<button class="nextButton htmlColor1" onclick=btn()>Next</button>`;
        removeValue.innerHTML = "";

    } else if (randomValue == 51 && inputAnswer !== __WEBPACK_IMPORTED_MODULE_1__questionsAndAnswers_htmlAnswers__["a" /* htmlAnswerArr */][51].A51) {
        displayAnswer.innerHTML = `<textarea name="text" class="answer_textarea" id="input">
&ltinput type="text" name="firstname" value="John" size="40"&gt</textarea>`;
        incorrectValue.innerHTML = "Incorrect..";
        nextButton.innerHTML = `<button class="nextButton htmlColor1" onclick=btn()>Next</button>`;
        removeValue.innerHTML = "";



    } else if (randomValue == 52 && inputAnswer == __WEBPACK_IMPORTED_MODULE_1__questionsAndAnswers_htmlAnswers__["a" /* htmlAnswerArr */][52].A52) {
        correctValue.innerHTML = "Correct..";
        displayAnswer.innerHTML = `<textarea name="text" class="answer_textarea" id="input">Good Job :) </textarea>`;
        nextButton.innerHTML = `<button class="nextButton htmlColor1" onclick=btn()>Next</button>`;
        removeValue.innerHTML = "";

    } else if (randomValue == 52 && inputAnswer !== __WEBPACK_IMPORTED_MODULE_1__questionsAndAnswers_htmlAnswers__["a" /* htmlAnswerArr */][52].A52) {
        displayAnswer.innerHTML = `<textarea name="text" class="answer_textarea" id="input">
&ltinput type="text" name="fname" placeholder="First name"&gt</textarea>`;
        incorrectValue.innerHTML = "Incorrect..";
        nextButton.innerHTML = `<button class="nextButton htmlColor1" onclick=btn()>Next</button>`;
        removeValue.innerHTML = "";



    } else if (randomValue == 53 && inputAnswer == __WEBPACK_IMPORTED_MODULE_1__questionsAndAnswers_htmlAnswers__["a" /* htmlAnswerArr */][53].A53) {
        correctValue.innerHTML = "Correct..";
        displayAnswer.innerHTML = `<textarea name="text" class="answer_textarea" id="input">Good Job :) </textarea>`;
        nextButton.innerHTML = `<button class="nextButton htmlColor1" onclick=btn()>Next</button>`;
        removeValue.innerHTML = "";

    } else if (randomValue == 53 && inputAnswer !== __WEBPACK_IMPORTED_MODULE_1__questionsAndAnswers_htmlAnswers__["a" /* htmlAnswerArr */][53].A53) {
        displayAnswer.innerHTML = `<textarea name="text" class="answer_textarea" id="input">
&ltp&gtThis is a paragraph.&lt/p&gt</textarea>`;
        incorrectValue.innerHTML = "Incorrect..";
        nextButton.innerHTML = `<button class="nextButton htmlColor1" onclick=btn()>Next</button>`;
        removeValue.innerHTML = "";



    }

    else {
        incorrectValue.innerHTML = "Incorrect..";
        nextButton.innerHTML = `<button class="nextButton htmlColor1" onclick=btn()>Next</button>`;
        removeValue.innerHTML = "";
    }

}
window.submit = submit; /* to make submit global*/





function htmlButton() {
    test = document.getElementById("addedQuestion").innerHTML = __WEBPACK_IMPORTED_MODULE_0__questionsAndAnswers_htmlQuestions__["a" /* htmlQuestionArr */][randomValue]; /* giving random question to html */;

    return test;
}
window.htmlButton = htmlButton;
function showTest() {
    var inputBox = document.getElementById("remove").style.display = "block";
    return inputBox;
}
window.showTest = showTest;


function btn() {
    randomValue = Math.floor(Math.random() * __WEBPACK_IMPORTED_MODULE_0__questionsAndAnswers_htmlQuestions__["a" /* htmlQuestionArr */].length); /* buton next in html to make a next random question*/
    document.getElementById("addedQuestion").innerHTML = __WEBPACK_IMPORTED_MODULE_0__questionsAndAnswers_htmlQuestions__["a" /* htmlQuestionArr */][randomValue]; /* giving random question to html */
    document.getElementById("elementButton").innerHTML = "";/* to clean elementButton*/
    document.getElementById("remove").innerHTML = `<textarea name="text" class="answer_textarea" id="input"></textarea>
    </br><!--id="input"-->
      <button  class="answer_submit htmlColor1" id = "htmlStartButton" onclick="submit()" >Submit</button>`;/* to create next text area and Submit button. */
    document.getElementById("checkingAnswer").innerHTML = "";
    document.getElementById("showingAnswer").innerHTML = "";
}
window.btn = btn;/* to make submit global*/








































































var cssRandomValue = Math.floor(Math.random() * __WEBPACK_IMPORTED_MODULE_2__questionsAndAnswers_cssQuestions__["a" /* cssQuestionArr */].length); /* taking random question from htmlQuestionArr*/


function cssSubmit() { /* function for html submit button*/

    var cssInputAnswer = input.value.replace(/\s+/g, ``); /*replace(/\s+/g, `` is removing all spaces. Avoid checking all the spaces to compare text*/
    var cssCorrectValue = document.getElementById("cssCheckingAnswer"); /* making getElementById code shorter*/
    var cssIncorrectValue = document.getElementById("cssCheckingAnswer");
    var cssDisplayAnswer = document.getElementById("cssShowingAnswer");
    var cssNextButton = document.getElementById("cssElementButton");
    var cssRemoveValue = document.getElementById("cssRemove");

    if (cssRandomValue == 0 && cssInputAnswer == __WEBPACK_IMPORTED_MODULE_3__questionsAndAnswers_cssAnswers__["a" /* cssAnswerArr */][0].A0) { /* checking if cssRandomValue is 0 and if putting answer the same as cssAnswerArr*//*A0 is just that I can track answer numbers when adding questions and answers*/
        cssCorrectValue.innerHTML = "Correct..";
        cssDisplayAnswer.innerHTML = `<textarea name="text" class="answer_textarea" id="input">
        Good Job :) </textarea>`;
        cssNextButton.innerHTML = `<button class="nextButton cssColor1" id="cssNextButton" onclick=cssBtn()>Next</button>`; /* creating next button with cssBtn()function*/
        cssRemoveValue.innerHTML = "";/* removing in html answer*/



    } else if (cssRandomValue == 0 && cssInputAnswer !== __WEBPACK_IMPORTED_MODULE_3__questionsAndAnswers_cssAnswers__["a" /* cssAnswerArr */][0].A0) {/*  if random value not == then giving then display the answere.*/
        cssDisplayAnswer.innerHTML = `<textarea name="text" class="answer_textarea" id="input">
p {
    color: red;
    }
          </textarea>`;
        cssIncorrectValue.innerHTML = "Incorrect..";
        cssNextButton.innerHTML = `<button class="nextButton cssColor1" id="cssNextButton" onclick=cssBtn()>Next</button>`;
        cssRemoveValue.innerHTML = "";



    } else if (cssRandomValue == 1 && cssInputAnswer == __WEBPACK_IMPORTED_MODULE_3__questionsAndAnswers_cssAnswers__["a" /* cssAnswerArr */][1].A1) {
        cssCorrectValue.innerHTML = "Correct..";
        cssDisplayAnswer.innerHTML = `<textarea name="text" class="answer_textarea" id="input">
        Good Job :) </textarea>`;
        cssNextButton.innerHTML = `<button class="nextButton cssColor1" id="cssNextButton" onclick=cssBtn()>Next</button>`;
        cssRemoveValue.innerHTML = "";

    } else if (cssRandomValue == 1 && cssInputAnswer !== __WEBPACK_IMPORTED_MODULE_3__questionsAndAnswers_cssAnswers__["a" /* cssAnswerArr */][1].A1) {
        cssDisplayAnswer.innerHTML = `<textarea name="text" class="answer_textarea" id="input">
.colortext {
    color: red;
    }
          </textarea>`;
        cssIncorrectValue.innerHTML = "Incorrect..";
        cssNextButton.innerHTML = `<button class="nextButton cssColor1" id="cssNextButton" onclick=cssBtn()>Next</button>`;
        cssRemoveValue.innerHTML = "";



    } else if (cssRandomValue == 2 && cssInputAnswer == __WEBPACK_IMPORTED_MODULE_3__questionsAndAnswers_cssAnswers__["a" /* cssAnswerArr */][2].A2) {
        cssCorrectValue.innerHTML = "Correct..";
        cssDisplayAnswer.innerHTML = `<textarea name="text" class="answer_textarea" id="input">
        Good Job :) </textarea>`;
        cssNextButton.innerHTML = `<button class="nextButton cssColor1" id="cssNextButton" onclick=cssBtn()>Next</button>`;
        cssRemoveValue.innerHTML = "";

    } else if (cssRandomValue == 2 && cssInputAnswer !== __WEBPACK_IMPORTED_MODULE_3__questionsAndAnswers_cssAnswers__["a" /* cssAnswerArr */][2].A2) {
        cssDisplayAnswer.innerHTML = `<textarea name="text" class="answer_textarea" id="input">
h1, p {
    color: red;
    }
          </textarea>`;
        cssIncorrectValue.innerHTML = "Incorrect..";
        cssNextButton.innerHTML = `<button class="nextButton cssColor1" id="cssNextButton" onclick=cssBtn()>Next</button>`;
        cssRemoveValue.innerHTML = "";



    } else if (cssRandomValue == 3 && cssInputAnswer == __WEBPACK_IMPORTED_MODULE_3__questionsAndAnswers_cssAnswers__["a" /* cssAnswerArr */][3].A3) {
        cssCorrectValue.innerHTML = "Correct..";
        cssDisplayAnswer.innerHTML = `<textarea name="text" class="answer_textarea" id="input">
        Good Job :) </textarea>`;
        cssNextButton.innerHTML = `<button class="nextButton cssColor1" id="cssNextButton" onclick=cssBtn()>Next</button>`;
        cssRemoveValue.innerHTML = "";

    } else if (cssRandomValue == 3 && cssInputAnswer !== __WEBPACK_IMPORTED_MODULE_3__questionsAndAnswers_cssAnswers__["a" /* cssAnswerArr */][3].A3) {
        cssDisplayAnswer.innerHTML = `<textarea name="text" class="answer_textarea" id="input">
&ltlink rel="stylesheet" type="text/css" href="mystyle.css"&gt</textarea>`;
        cssIncorrectValue.innerHTML = "Incorrect..";
        cssNextButton.innerHTML = `<button class="nextButton cssColor1" id="cssNextButton" onclick=cssBtn()>Next</button>`;
        cssRemoveValue.innerHTML = "";



    } else if (cssRandomValue == 4 && cssInputAnswer == __WEBPACK_IMPORTED_MODULE_3__questionsAndAnswers_cssAnswers__["a" /* cssAnswerArr */][4].A4) {
        cssCorrectValue.innerHTML = "Correct..";
        cssDisplayAnswer.innerHTML = `<textarea name="text" class="answer_textarea" id="input">
        Good Job :) </textarea>`;
        cssNextButton.innerHTML = `<button class="nextButton cssColor1" id="cssNextButton" onclick=cssBtn()>Next</button>`;
        cssRemoveValue.innerHTML = "";

    } else if (cssRandomValue == 4 && cssInputAnswer !== __WEBPACK_IMPORTED_MODULE_3__questionsAndAnswers_cssAnswers__["a" /* cssAnswerArr */][4].A4) {
        cssDisplayAnswer.innerHTML = `<textarea name="text" class="answer_textarea" id="input">
&ltstyle&gt
body {
    background-color: linen;
}
&lt/style&gt
        </textarea>`;
        cssIncorrectValue.innerHTML = "Incorrect..";
        cssNextButton.innerHTML = `<button class="nextButton cssColor1" id="cssNextButton" onclick=cssBtn()>Next</button>`;
        cssRemoveValue.innerHTML = "";



    } else if (cssRandomValue == 5 && cssInputAnswer == __WEBPACK_IMPORTED_MODULE_3__questionsAndAnswers_cssAnswers__["a" /* cssAnswerArr */][5].A5) {
        cssCorrectValue.innerHTML = "Correct..";
        cssDisplayAnswer.innerHTML = `<textarea name="text" class="answer_textarea" id="input">
        Good Job :) </textarea>`;
        cssNextButton.innerHTML = `<button class="nextButton cssColor1" id="cssNextButton" onclick=cssBtn()>Next</button>`;
        cssRemoveValue.innerHTML = "";

    } else if (cssRandomValue == 5 && cssInputAnswer !== __WEBPACK_IMPORTED_MODULE_3__questionsAndAnswers_cssAnswers__["a" /* cssAnswerArr */][5].A5) {
        cssDisplayAnswer.innerHTML = `<textarea name="text" class="answer_textarea" id="input">
&ltbody style="background-color: linen"&gt</textarea>`;
        cssIncorrectValue.innerHTML = "Incorrect..";
        cssNextButton.innerHTML = `<button class="nextButton cssColor1" id="cssNextButton" onclick=cssBtn()>Next</button>`;
        cssRemoveValue.innerHTML = "";



    } else if (cssRandomValue == 6 && cssInputAnswer == __WEBPACK_IMPORTED_MODULE_3__questionsAndAnswers_cssAnswers__["a" /* cssAnswerArr */][6].A6) {
        cssCorrectValue.innerHTML = "Correct..";
        cssDisplayAnswer.innerHTML = `<textarea name="text" class="answer_textarea" id="input">
        Good Job :) </textarea>`;
        cssNextButton.innerHTML = `<button class="nextButton cssColor1" id="cssNextButton" onclick=cssBtn()>Next</button>`;
        cssRemoveValue.innerHTML = "";

    } else if (cssRandomValue == 6 && cssInputAnswer !== __WEBPACK_IMPORTED_MODULE_3__questionsAndAnswers_cssAnswers__["a" /* cssAnswerArr */][6].A6) {
        cssDisplayAnswer.innerHTML = `<textarea name="text" class="answer_textarea" id="input">
body {
    background-color: linen;
}
h1 {
    background-color: lightblue;
}
          </textarea>`;
        cssIncorrectValue.innerHTML = "Incorrect..";
        cssNextButton.innerHTML = `<button class="nextButton cssColor1" id="cssNextButton" onclick=cssBtn()>Next</button>`;
        cssRemoveValue.innerHTML = "";



    } else if (cssRandomValue == 7 && cssInputAnswer == __WEBPACK_IMPORTED_MODULE_3__questionsAndAnswers_cssAnswers__["a" /* cssAnswerArr */][7].A7) {
        cssCorrectValue.innerHTML = "Correct..";
        cssDisplayAnswer.innerHTML = `<textarea name="text" class="answer_textarea" id="input">
        Good Job :) </textarea>`;
        cssNextButton.innerHTML = `<button class="nextButton cssColor1" id="cssNextButton" onclick=cssBtn()>Next</button>`;
        cssRemoveValue.innerHTML = "";

    } else if (cssRandomValue == 7 && cssInputAnswer !== __WEBPACK_IMPORTED_MODULE_3__questionsAndAnswers_cssAnswers__["a" /* cssAnswerArr */][7].A7) {
        cssDisplayAnswer.innerHTML = `<textarea name="text" class="answer_textarea" id="input">
body {
    background-image: url("paper.gif");
}
          </textarea>`;
        cssIncorrectValue.innerHTML = "Incorrect..";
        cssNextButton.innerHTML = `<button class="nextButton cssColor1" id="cssNextButton" onclick=cssBtn()>Next</button>`;
        cssRemoveValue.innerHTML = "";



    } else if (cssRandomValue == 8 && cssInputAnswer == __WEBPACK_IMPORTED_MODULE_3__questionsAndAnswers_cssAnswers__["a" /* cssAnswerArr */][8].A8) {
        cssCorrectValue.innerHTML = "Correct..";
        cssDisplayAnswer.innerHTML = `<textarea name="text" class="answer_textarea" id="input">
        Good Job :) </textarea>`;
        cssNextButton.innerHTML = `<button class="nextButton cssColor1" id="cssNextButton" onclick=cssBtn()>Next</button>`;
        cssRemoveValue.innerHTML = "";

    } else if (cssRandomValue == 8 && cssInputAnswer !== __WEBPACK_IMPORTED_MODULE_3__questionsAndAnswers_cssAnswers__["a" /* cssAnswerArr */][8].A8) {
        cssDisplayAnswer.innerHTML = `<textarea name="text" class="answer_textarea" id="input">
body {
    background-image: url("gradient_bg_vertical.png");
    background-repeat: repeat-y;
}
        </textarea>`;
        cssIncorrectValue.innerHTML = "Incorrect..";
        cssNextButton.innerHTML = `<button class="nextButton cssColor1" id="cssNextButton" onclick=cssBtn()>Next</button>`;
        cssRemoveValue.innerHTML = "";

        

    } else if (cssRandomValue == 9 && cssInputAnswer == __WEBPACK_IMPORTED_MODULE_3__questionsAndAnswers_cssAnswers__["a" /* cssAnswerArr */][9].A9) {
        cssCorrectValue.innerHTML = "Correct..";
        cssDisplayAnswer.innerHTML = `<textarea name="text" class="answer_textarea" id="input">
        Good Job :) </textarea>`;
        cssNextButton.innerHTML = `<button class="nextButton cssColor1" id="cssNextButton" onclick=cssBtn()>Next</button>`;
        cssRemoveValue.innerHTML = "";

    } else if (cssRandomValue == 9 && cssInputAnswer !== __WEBPACK_IMPORTED_MODULE_3__questionsAndAnswers_cssAnswers__["a" /* cssAnswerArr */][9].A9) {
        cssDisplayAnswer.innerHTML = `<textarea name="text" class="answer_textarea" id="input">
body {
    background-image: url("img_tree.png");
    background-repeat: no-repeat;
    background-position: top right;
}
          </textarea>`;
        cssIncorrectValue.innerHTML = "Incorrect..";
        cssNextButton.innerHTML = `<button class="nextButton cssColor1" id="cssNextButton" onclick=cssBtn()>Next</button>`;
        cssRemoveValue.innerHTML = "";



    } else if (cssRandomValue == 10 && cssInputAnswer == __WEBPACK_IMPORTED_MODULE_3__questionsAndAnswers_cssAnswers__["a" /* cssAnswerArr */][10].A10) {
        cssCorrectValue.innerHTML = "Correct..";
        cssDisplayAnswer.innerHTML = `<textarea name="text" class="answer_textarea" id="input">
        Good Job :) </textarea>`;
        cssNextButton.innerHTML = `<button class="nextButton cssColor1" id="cssNextButton" onclick=cssBtn()>Next</button>`;
        cssRemoveValue.innerHTML = "";

    } else if (cssRandomValue == 10 && cssInputAnswer !== __WEBPACK_IMPORTED_MODULE_3__questionsAndAnswers_cssAnswers__["a" /* cssAnswerArr */][10].A10) {
        cssDisplayAnswer.innerHTML = `<textarea name="text" class="answer_textarea" id="input">
body {
    background: url("img_tree.png") no-repeat top right;
}
          </textarea>`;
        cssIncorrectValue.innerHTML = "Incorrect..";
        cssNextButton.innerHTML = `<button class="nextButton cssColor1" id="cssNextButton" onclick=cssBtn()>Next</button>`;
        cssRemoveValue.innerHTML = "";



    } else if (cssRandomValue == 11 && cssInputAnswer == __WEBPACK_IMPORTED_MODULE_3__questionsAndAnswers_cssAnswers__["a" /* cssAnswerArr */][11].A11) {
        cssCorrectValue.innerHTML = "Correct..";
        cssDisplayAnswer.innerHTML = `<textarea name="text" class="answer_textarea" id="input">
        Good Job :) </textarea>`;
        cssNextButton.innerHTML = `<button class="nextButton cssColor1" id="cssNextButton" onclick=cssBtn()>Next</button>`;
        cssRemoveValue.innerHTML = "";

    } else if (cssRandomValue == 11 && cssInputAnswer !== __WEBPACK_IMPORTED_MODULE_3__questionsAndAnswers_cssAnswers__["a" /* cssAnswerArr */][11].A11) {
        cssDisplayAnswer.innerHTML = `<textarea name="text" class="answer_textarea" id="input">
p {
    border-style: dotted;
    border-width: 4px;
}
          </textarea>`;
        cssIncorrectValue.innerHTML = "Incorrect..";
        cssNextButton.innerHTML = `<button class="nextButton cssColor1" id="cssNextButton" onclick=cssBtn()>Next</button>`;
        cssRemoveValue.innerHTML = "";



    } else if (cssRandomValue == 12 && cssInputAnswer == __WEBPACK_IMPORTED_MODULE_3__questionsAndAnswers_cssAnswers__["a" /* cssAnswerArr */][12].A12) {
        cssCorrectValue.innerHTML = "Correct..";
        cssDisplayAnswer.innerHTML = `<textarea name="text" class="answer_textarea" id="input">
        Good Job :) </textarea>`;
        cssNextButton.innerHTML = `<button class="nextButton cssColor1" id="cssNextButton" onclick=cssBtn()>Next</button>`;
        cssRemoveValue.innerHTML = "";

    } else if (cssRandomValue == 12 && cssInputAnswer !== __WEBPACK_IMPORTED_MODULE_3__questionsAndAnswers_cssAnswers__["a" /* cssAnswerArr */][12].A12) {
        cssDisplayAnswer.innerHTML = `<textarea name="text" class="answer_textarea" id="input">
p {
    border-style: dotted;
    border-width: 4px;
    border-color: red;
}  
          </textarea>`;
        cssIncorrectValue.innerHTML = "Incorrect..";
        cssNextButton.innerHTML = `<button class="nextButton cssColor1" id="cssNextButton" onclick=cssBtn()>Next</button>`;
        cssRemoveValue.innerHTML = "";



    } else if (cssRandomValue == 13 && cssInputAnswer == __WEBPACK_IMPORTED_MODULE_3__questionsAndAnswers_cssAnswers__["a" /* cssAnswerArr */][13].A13) {
        cssCorrectValue.innerHTML = "Correct..";
        cssDisplayAnswer.innerHTML = `<textarea name="text" class="answer_textarea" id="input">
        Good Job :) </textarea>`;
        cssNextButton.innerHTML = `<button class="nextButton cssColor1" id="cssNextButton" onclick=cssBtn()>Next</button>`;
        cssRemoveValue.innerHTML = "";

    } else if (cssRandomValue == 13 && cssInputAnswer !== __WEBPACK_IMPORTED_MODULE_3__questionsAndAnswers_cssAnswers__["a" /* cssAnswerArr */][13].A13) {
        cssDisplayAnswer.innerHTML = `<textarea name="text" class="answer_textarea" id="input">
p {
    border-top-style: dotted;
    border-top-width: 4px;
    border-top-color: red;
}
          </textarea>`;
        cssIncorrectValue.innerHTML = "Incorrect..";
        cssNextButton.innerHTML = `<button class="nextButton cssColor1" id="cssNextButton" onclick=cssBtn()>Next</button>`;
        cssRemoveValue.innerHTML = "";



    } else if (cssRandomValue == 14 && cssInputAnswer == __WEBPACK_IMPORTED_MODULE_3__questionsAndAnswers_cssAnswers__["a" /* cssAnswerArr */][14].A14) {
        cssCorrectValue.innerHTML = "Correct..";
        cssDisplayAnswer.innerHTML = `<textarea name="text" class="answer_textarea" id="input">
        Good Job :) </textarea>`;
        cssNextButton.innerHTML = `<button class="nextButton cssColor1" id="cssNextButton" onclick=cssBtn()>Next</button>`;
        cssRemoveValue.innerHTML = "";

    } else if (cssRandomValue == 14 && cssInputAnswer !== __WEBPACK_IMPORTED_MODULE_3__questionsAndAnswers_cssAnswers__["a" /* cssAnswerArr */][14].A14) {
        cssDisplayAnswer.innerHTML = `<textarea name="text" class="answer_textarea" id="input">
p {
    border: 10px solid green;
}
          </textarea>`;
        cssIncorrectValue.innerHTML = "Incorrect..";
        cssNextButton.innerHTML = `<button class="nextButton cssColor1" id="cssNextButton" onclick=cssBtn()>Next</button>`;
        cssRemoveValue.innerHTML = "";



    } else if (cssRandomValue == 15 && cssInputAnswer == __WEBPACK_IMPORTED_MODULE_3__questionsAndAnswers_cssAnswers__["a" /* cssAnswerArr */][15].A15) {
        cssCorrectValue.innerHTML = "Correct..";
        cssDisplayAnswer.innerHTML = `<textarea name="text" class="answer_textarea" id="input">
        Good Job :) </textarea>`;
        cssNextButton.innerHTML = `<button class="nextButton cssColor1" id="cssNextButton" onclick=cssBtn()>Next</button>`;
        cssRemoveValue.innerHTML = "";

    } else if (cssRandomValue == 15 && cssInputAnswer !== __WEBPACK_IMPORTED_MODULE_3__questionsAndAnswers_cssAnswers__["a" /* cssAnswerArr */][15].A15) {
        cssDisplayAnswer.innerHTML = `<textarea name="text" class="answer_textarea" id="input">
h1 {
    margin-left: 20px;
}
          </textarea>`;
        cssIncorrectValue.innerHTML = "Incorrect..";
        cssNextButton.innerHTML = `<button class="nextButton cssColor1" id="cssNextButton" onclick=cssBtn()>Next</button>`;
        cssRemoveValue.innerHTML = "";



    } else if (cssRandomValue == 16 && cssInputAnswer == __WEBPACK_IMPORTED_MODULE_3__questionsAndAnswers_cssAnswers__["a" /* cssAnswerArr */][16].A16) {
        cssCorrectValue.innerHTML = "Correct..";
        cssDisplayAnswer.innerHTML = `<textarea name="text" class="answer_textarea" id="input">
        Good Job :) </textarea>`;
        cssNextButton.innerHTML = `<button class="nextButton cssColor1" id="cssNextButton" onclick=cssBtn()>Next</button>`;
        cssRemoveValue.innerHTML = "";

    } else if (cssRandomValue == 16 && cssInputAnswer !== __WEBPACK_IMPORTED_MODULE_3__questionsAndAnswers_cssAnswers__["a" /* cssAnswerArr */][16].A16) {
        cssDisplayAnswer.innerHTML = `<textarea name="text" class="answer_textarea" id="input">
h1 {
    
    margin: 25px;
}
          </textarea>`;
        cssIncorrectValue.innerHTML = "Incorrect..";
        cssNextButton.innerHTML = `<button class="nextButton cssColor1" id="cssNextButton" onclick=cssBtn()>Next</button>`;
        cssRemoveValue.innerHTML = "";



    } else if (cssRandomValue == 17 && cssInputAnswer == __WEBPACK_IMPORTED_MODULE_3__questionsAndAnswers_cssAnswers__["a" /* cssAnswerArr */][17].A17) {
        cssCorrectValue.innerHTML = "Correct..";
        cssDisplayAnswer.innerHTML = `<textarea name="text" class="answer_textarea" id="input">
        Good Job :) </textarea>`;
        cssNextButton.innerHTML = `<button class="nextButton cssColor1" id="cssNextButton" onclick=cssBtn()>Next</button>`;
        cssRemoveValue.innerHTML = "";

    } else if (cssRandomValue == 17 && cssInputAnswer !== __WEBPACK_IMPORTED_MODULE_3__questionsAndAnswers_cssAnswers__["a" /* cssAnswerArr */][17].A17) {
        cssDisplayAnswer.innerHTML = `<textarea name="text" class="answer_textarea" id="input">
h1 {
    
    margin: 50px 25px;
}
          </textarea>`;
        cssIncorrectValue.innerHTML = "Incorrect..";
        cssNextButton.innerHTML = `<button class="nextButton cssColor1" id="cssNextButton" onclick=cssBtn()>Next</button>`;
        cssRemoveValue.innerHTML = "";



    } else if (cssRandomValue == 18 && cssInputAnswer == __WEBPACK_IMPORTED_MODULE_3__questionsAndAnswers_cssAnswers__["a" /* cssAnswerArr */][18].A18) {
        cssCorrectValue.innerHTML = "Correct..";
        cssDisplayAnswer.innerHTML = `<textarea name="text" class="answer_textarea" id="input">
        Good Job :) </textarea>`;
        cssNextButton.innerHTML = `<button class="nextButton cssColor1" id="cssNextButton" onclick=cssBtn()>Next</button>`;
        cssRemoveValue.innerHTML = "";

    } else if (cssRandomValue == 18 && cssInputAnswer !== __WEBPACK_IMPORTED_MODULE_3__questionsAndAnswers_cssAnswers__["a" /* cssAnswerArr */][18].A18) {
        cssDisplayAnswer.innerHTML = `<textarea name="text" class="answer_textarea" id="input">
h1 {
    margin: auto;
}
          </textarea>`;
        cssIncorrectValue.innerHTML = "Incorrect..";
        cssNextButton.innerHTML = `<button class="nextButton cssColor1" id="cssNextButton" onclick=cssBtn()>Next</button>`;
        cssRemoveValue.innerHTML = "";



    } else if (cssRandomValue == 19 && cssInputAnswer == __WEBPACK_IMPORTED_MODULE_3__questionsAndAnswers_cssAnswers__["a" /* cssAnswerArr */][19].A19) {
        cssCorrectValue.innerHTML = "Correct..";
        cssDisplayAnswer.innerHTML = `<textarea name="text" class="answer_textarea" id="input">
        Good Job :) </textarea>`;
        cssNextButton.innerHTML = `<button class="nextButton cssColor1" id="cssNextButton" onclick=cssBtn()>Next</button>`;
        cssRemoveValue.innerHTML = "";

    } else if (cssRandomValue == 19 && cssInputAnswer !== __WEBPACK_IMPORTED_MODULE_3__questionsAndAnswers_cssAnswers__["a" /* cssAnswerArr */][19].A19) {
        cssDisplayAnswer.innerHTML = `<textarea name="text" class="answer_textarea" id="input">
p {
    padding-top: 30px;
}
          </textarea>`;
        cssIncorrectValue.innerHTML = "Incorrect..";
        cssNextButton.innerHTML = `<button class="nextButton cssColor1" id="cssNextButton" onclick=cssBtn()>Next</button>`;
        cssRemoveValue.innerHTML = "";



    } else if (cssRandomValue == 20 && cssInputAnswer == __WEBPACK_IMPORTED_MODULE_3__questionsAndAnswers_cssAnswers__["a" /* cssAnswerArr */][20].A20) {
        cssCorrectValue.innerHTML = "Correct..";
        cssDisplayAnswer.innerHTML = `<textarea name="text" class="answer_textarea" id="input">
        Good Job :) </textarea>`;
        cssNextButton.innerHTML = `<button class="nextButton cssColor1" id="cssNextButton" onclick=cssBtn()>Next</button>`;
        cssRemoveValue.innerHTML = "";

    } else if (cssRandomValue == 20 && cssInputAnswer !== __WEBPACK_IMPORTED_MODULE_3__questionsAndAnswers_cssAnswers__["a" /* cssAnswerArr */][20].A20) {
        cssDisplayAnswer.innerHTML = `<textarea name="text" class="answer_textarea" id="input">
p {
    background-color: lightblue;
    padding: 50px;
}
          </textarea>`;
        cssIncorrectValue.innerHTML = "Incorrect..";
        cssNextButton.innerHTML = `<button class="nextButton cssColor1" id="cssNextButton" onclick=cssBtn()>Next</button>`;
        cssRemoveValue.innerHTML = "";



    } else if (cssRandomValue == 21 && cssInputAnswer == __WEBPACK_IMPORTED_MODULE_3__questionsAndAnswers_cssAnswers__["a" /* cssAnswerArr */][21].A21) {
        cssCorrectValue.innerHTML = "Correct..";
        cssDisplayAnswer.innerHTML = `<textarea name="text" class="answer_textarea" id="input">
        Good Job :) </textarea>`;
        cssNextButton.innerHTML = `<button class="nextButton cssColor1" id="cssNextButton" onclick=cssBtn()>Next</button>`;
        cssRemoveValue.innerHTML = "";

    } else if (cssRandomValue == 21 && cssInputAnswer !== __WEBPACK_IMPORTED_MODULE_3__questionsAndAnswers_cssAnswers__["a" /* cssAnswerArr */][21].A21) {
        cssDisplayAnswer.innerHTML = `<textarea name="text" class="answer_textarea" id="input">
p {
    background-color: lightblue;
    padding: 25px 50px;
}
          </textarea>`;
        cssIncorrectValue.innerHTML = "Incorrect..";
        cssNextButton.innerHTML = `<button class="nextButton cssColor1" id="cssNextButton" onclick=cssBtn()>Next</button>`;
        cssRemoveValue.innerHTML = "";



    } else if (cssRandomValue == 22 && cssInputAnswer == __WEBPACK_IMPORTED_MODULE_3__questionsAndAnswers_cssAnswers__["a" /* cssAnswerArr */][22].A22) {
        cssCorrectValue.innerHTML = "Correct..";
        cssDisplayAnswer.innerHTML = `<textarea name="text" class="answer_textarea" id="input">
        Good Job :) </textarea>`;
        cssNextButton.innerHTML = `<button class="nextButton cssColor1" id="cssNextButton" onclick=cssBtn()>Next</button>`;
        cssRemoveValue.innerHTML = "";

    } else if (cssRandomValue == 22 && cssInputAnswer !== __WEBPACK_IMPORTED_MODULE_3__questionsAndAnswers_cssAnswers__["a" /* cssAnswerArr */][22].A22) {
        cssDisplayAnswer.innerHTML = `<textarea name="text" class="answer_textarea" id="input">
h1 {
    height: 100px;
}
          </textarea>`;
        cssIncorrectValue.innerHTML = "Incorrect..";
        cssNextButton.innerHTML = `<button class="nextButton cssColor1" id="cssNextButton" onclick=cssBtn()>Next</button>`;
        cssRemoveValue.innerHTML = "";



    } else if (cssRandomValue == 23 && cssInputAnswer == __WEBPACK_IMPORTED_MODULE_3__questionsAndAnswers_cssAnswers__["a" /* cssAnswerArr */][23].A23) {
        cssCorrectValue.innerHTML = "Correct..";
        cssDisplayAnswer.innerHTML = `<textarea name="text" class="answer_textarea" id="input">
        Good Job :) </textarea>`;
        cssNextButton.innerHTML = `<button class="nextButton cssColor1" id="cssNextButton" onclick=cssBtn()>Next</button>`;
        cssRemoveValue.innerHTML = "";

    } else if (cssRandomValue == 23 && cssInputAnswer !== __WEBPACK_IMPORTED_MODULE_3__questionsAndAnswers_cssAnswers__["a" /* cssAnswerArr */][23].A23) {
        cssDisplayAnswer.innerHTML = `<textarea name="text" class="answer_textarea" id="input">
h1 {
    width: 50%;
}
          </textarea>`;
        cssIncorrectValue.innerHTML = "Incorrect..";
        cssNextButton.innerHTML = `<button class="nextButton cssColor1" id="cssNextButton" onclick=cssBtn()>Next</button>`;
        cssRemoveValue.innerHTML = "";



    } else if (cssRandomValue == 24 && cssInputAnswer == __WEBPACK_IMPORTED_MODULE_3__questionsAndAnswers_cssAnswers__["a" /* cssAnswerArr */][24].A24) {
        cssCorrectValue.innerHTML = "Correct..";
        cssDisplayAnswer.innerHTML = `<textarea name="text" class="answer_textarea" id="input">
        Good Job :) </textarea>`;
        cssNextButton.innerHTML = `<button class="nextButton cssColor1" id="cssNextButton" onclick=cssBtn()>Next</button>`;
        cssRemoveValue.innerHTML = "";

    } else if (cssRandomValue == 24 && cssInputAnswer !== __WEBPACK_IMPORTED_MODULE_3__questionsAndAnswers_cssAnswers__["a" /* cssAnswerArr */][24].A24) {
        cssDisplayAnswer.innerHTML = `<textarea name="text" class="answer_textarea" id="input">
div {
    width: 200px;
}
          </textarea>`;
        cssIncorrectValue.innerHTML = "Incorrect..";
        cssNextButton.innerHTML = `<button class="nextButton cssColor1" id="cssNextButton" onclick=cssBtn()>Next</button>`;
        cssRemoveValue.innerHTML = "";



    } else if (cssRandomValue == 25 && cssInputAnswer == __WEBPACK_IMPORTED_MODULE_3__questionsAndAnswers_cssAnswers__["a" /* cssAnswerArr */][25].A25) {
        cssCorrectValue.innerHTML = "Correct..";
        cssDisplayAnswer.innerHTML = `<textarea name="text" class="answer_textarea" id="input">
        Good Job :) </textarea>`;
        cssNextButton.innerHTML = `<button class="nextButton cssColor1" id="cssNextButton" onclick=cssBtn()>Next</button>`;
        cssRemoveValue.innerHTML = "";

    } else if (cssRandomValue == 25 && cssInputAnswer !== __WEBPACK_IMPORTED_MODULE_3__questionsAndAnswers_cssAnswers__["a" /* cssAnswerArr */][25].A25) {
        cssDisplayAnswer.innerHTML = `<textarea name="text" class="answer_textarea" id="input">
div {
    padding: 25px;
}
          </textarea>`;
        cssIncorrectValue.innerHTML = "Incorrect..";
        cssNextButton.innerHTML = `<button class="nextButton cssColor1" id="cssNextButton" onclick=cssBtn()>Next</button>`;
        cssRemoveValue.innerHTML = "";



    } else if (cssRandomValue == 26 && cssInputAnswer == __WEBPACK_IMPORTED_MODULE_3__questionsAndAnswers_cssAnswers__["a" /* cssAnswerArr */][26].A26) {
        cssCorrectValue.innerHTML = "Correct..";
        cssDisplayAnswer.innerHTML = `<textarea name="text" class="answer_textarea" id="input">
        Good Job :) </textarea>`;
        cssNextButton.innerHTML = `<button class="nextButton cssColor1" id="cssNextButton" onclick=cssBtn()>Next</button>`;
        cssRemoveValue.innerHTML = "";

    } else if (cssRandomValue == 26 && cssInputAnswer !== __WEBPACK_IMPORTED_MODULE_3__questionsAndAnswers_cssAnswers__["a" /* cssAnswerArr */][26].A26) {
        cssDisplayAnswer.innerHTML = `<textarea name="text" class="answer_textarea" id="input">
div {
    border: 25px solid navy;
}
          </textarea>`;
        cssIncorrectValue.innerHTML = "Incorrect..";
        cssNextButton.innerHTML = `<button class="nextButton cssColor1" id="cssNextButton" onclick=cssBtn()>Next</button>`;
        cssRemoveValue.innerHTML = "";



    } else if (cssRandomValue == 27 && cssInputAnswer == __WEBPACK_IMPORTED_MODULE_3__questionsAndAnswers_cssAnswers__["a" /* cssAnswerArr */][27].A27) {
        cssCorrectValue.innerHTML = "Correct..";
        cssDisplayAnswer.innerHTML = `<textarea name="text" class="answer_textarea" id="input">
        Good Job :) </textarea>`;
        cssNextButton.innerHTML = `<button class="nextButton cssColor1" id="cssNextButton" onclick=cssBtn()>Next</button>`;
        cssRemoveValue.innerHTML = "";

    } else if (cssRandomValue == 27 && cssInputAnswer !== __WEBPACK_IMPORTED_MODULE_3__questionsAndAnswers_cssAnswers__["a" /* cssAnswerArr */][27].A27) {
        cssDisplayAnswer.innerHTML = `<textarea name="text" class="answer_textarea" id="input">
div {
    margin: 25px;
}
          </textarea>`;
        cssIncorrectValue.innerHTML = "Incorrect..";
        cssNextButton.innerHTML = `<button class="nextButton cssColor1" id="cssNextButton" onclick=cssBtn()>Next</button>`;
        cssRemoveValue.innerHTML = "";



    } else if (cssRandomValue == 28 && cssInputAnswer == __WEBPACK_IMPORTED_MODULE_3__questionsAndAnswers_cssAnswers__["a" /* cssAnswerArr */][28].A28) {
        cssCorrectValue.innerHTML = "Correct..";
        cssDisplayAnswer.innerHTML = `<textarea name="text" class="answer_textarea" id="input">
        Good Job :) </textarea>`;
        cssNextButton.innerHTML = `<button class="nextButton cssColor1" id="cssNextButton" onclick=cssBtn()>Next</button>`;
        cssRemoveValue.innerHTML = "";

    } else if (cssRandomValue == 28 && cssInputAnswer !== __WEBPACK_IMPORTED_MODULE_3__questionsAndAnswers_cssAnswers__["a" /* cssAnswerArr */][28].A28) {
        cssDisplayAnswer.innerHTML = `<textarea name="text" class="answer_textarea" id="input">
p {
    outline-style: solid;
    outline-width: 5px;
}
          </textarea>`;
        cssIncorrectValue.innerHTML = "Incorrect..";
        cssNextButton.innerHTML = `<button class="nextButton cssColor1" id="cssNextButton" onclick=cssBtn()>Next</button>`;
        cssRemoveValue.innerHTML = "";



    } else if (cssRandomValue == 29 && cssInputAnswer == __WEBPACK_IMPORTED_MODULE_3__questionsAndAnswers_cssAnswers__["a" /* cssAnswerArr */][29].A29) {
        cssCorrectValue.innerHTML = "Correct..";
        cssDisplayAnswer.innerHTML = `<textarea name="text" class="answer_textarea" id="input">
        Good Job :) </textarea>`;
        cssNextButton.innerHTML = `<button class="nextButton cssColor1" id="cssNextButton" onclick=cssBtn()>Next</button>`;
        cssRemoveValue.innerHTML = "";

    } else if (cssRandomValue == 29 && cssInputAnswer !== __WEBPACK_IMPORTED_MODULE_3__questionsAndAnswers_cssAnswers__["a" /* cssAnswerArr */][29].A29) {
        cssDisplayAnswer.innerHTML = `<textarea name="text" class="answer_textarea" id="input">
p {
    outline-style: solid;
    outline-width: 5px;
    outline-color: green;
}
          </textarea>`;
        cssIncorrectValue.innerHTML = "Incorrect..";
        cssNextButton.innerHTML = `<button class="nextButton cssColor1" id="cssNextButton" onclick=cssBtn()>Next</button>`;
        cssRemoveValue.innerHTML = "";



    } else if (cssRandomValue == 30 && cssInputAnswer == __WEBPACK_IMPORTED_MODULE_3__questionsAndAnswers_cssAnswers__["a" /* cssAnswerArr */][30].A30) {
        cssCorrectValue.innerHTML = "Correct..";
        cssDisplayAnswer.innerHTML = `<textarea name="text" class="answer_textarea" id="input">
        Good Job :) </textarea>`;
        cssNextButton.innerHTML = `<button class="nextButton cssColor1" id="cssNextButton" onclick=cssBtn()>Next</button>`;
        cssRemoveValue.innerHTML = "";

    } else if (cssRandomValue == 30 && cssInputAnswer !== __WEBPACK_IMPORTED_MODULE_3__questionsAndAnswers_cssAnswers__["a" /* cssAnswerArr */][30].A30) {
        cssDisplayAnswer.innerHTML = `<textarea name="text" class="answer_textarea" id="input">
p {
    outline: red dotted 10px;
}
          </textarea>`;
        cssIncorrectValue.innerHTML = "Incorrect..";
        cssNextButton.innerHTML = `<button class="nextButton cssColor1" id="cssNextButton" onclick=cssBtn()>Next</button>`;
        cssRemoveValue.innerHTML = "";



    } else if (cssRandomValue == 31 && cssInputAnswer == __WEBPACK_IMPORTED_MODULE_3__questionsAndAnswers_cssAnswers__["a" /* cssAnswerArr */][31].A31) {
        cssCorrectValue.innerHTML = "Correct..";
        cssDisplayAnswer.innerHTML = `<textarea name="text" class="answer_textarea" id="input">
        Good Job :) </textarea>`;
        cssNextButton.innerHTML = `<button class="nextButton cssColor1" id="cssNextButton" onclick=cssBtn()>Next</button>`;
        cssRemoveValue.innerHTML = "";

    } else if (cssRandomValue == 31 && cssInputAnswer !== __WEBPACK_IMPORTED_MODULE_3__questionsAndAnswers_cssAnswers__["a" /* cssAnswerArr */][31].A31) {
        cssDisplayAnswer.innerHTML = `<textarea name="text" class="answer_textarea" id="input">
body {
    color: red;
}
    
h1 {
    color: blue;
}
          </textarea>`;
        cssIncorrectValue.innerHTML = "Incorrect..";
        cssNextButton.innerHTML = `<button class="nextButton cssColor1" id="cssNextButton" onclick=cssBtn()>Next</button>`;
        cssRemoveValue.innerHTML = "";



    } else if (cssRandomValue == 32 && cssInputAnswer == __WEBPACK_IMPORTED_MODULE_3__questionsAndAnswers_cssAnswers__["a" /* cssAnswerArr */][32].A32) {
        cssCorrectValue.innerHTML = "Correct..";
        cssDisplayAnswer.innerHTML = `<textarea name="text" class="answer_textarea" id="input">
        Good Job :) </textarea>`;
        cssNextButton.innerHTML = `<button class="nextButton cssColor1" id="cssNextButton" onclick=cssBtn()>Next</button>`;
        cssRemoveValue.innerHTML = "";

    } else if (cssRandomValue == 32 && cssInputAnswer !== __WEBPACK_IMPORTED_MODULE_3__questionsAndAnswers_cssAnswers__["a" /* cssAnswerArr */][32].A32) {
        cssDisplayAnswer.innerHTML = `<textarea name="text" class="answer_textarea" id="input">
h1 {
    text-align: center;
}
          </textarea>`;
        cssIncorrectValue.innerHTML = "Incorrect..";
        cssNextButton.innerHTML = `<button class="nextButton cssColor1" id="cssNextButton" onclick=cssBtn()>Next</button>`;
        cssRemoveValue.innerHTML = "";



    } else if (cssRandomValue == 33 && cssInputAnswer == __WEBPACK_IMPORTED_MODULE_3__questionsAndAnswers_cssAnswers__["a" /* cssAnswerArr */][33].A33) {
        cssCorrectValue.innerHTML = "Correct..";
        cssDisplayAnswer.innerHTML = `<textarea name="text" class="answer_textarea" id="input">
        Good Job :) </textarea>`;
        cssNextButton.innerHTML = `<button class="nextButton cssColor1" id="cssNextButton" onclick=cssBtn()>Next</button>`;
        cssRemoveValue.innerHTML = "";

    } else if (cssRandomValue == 33 && cssInputAnswer !== __WEBPACK_IMPORTED_MODULE_3__questionsAndAnswers_cssAnswers__["a" /* cssAnswerArr */][33].A33) {
        cssDisplayAnswer.innerHTML = `<textarea name="text" class="answer_textarea" id="input">
a {
    text-decoration: none;
}
          </textarea>`;
        cssIncorrectValue.innerHTML = "Incorrect..";
        cssNextButton.innerHTML = `<button class="nextButton cssColor1" id="cssNextButton" onclick=cssBtn()>Next</button>`;
        cssRemoveValue.innerHTML = "";



    } else if (cssRandomValue == 34 && cssInputAnswer == __WEBPACK_IMPORTED_MODULE_3__questionsAndAnswers_cssAnswers__["a" /* cssAnswerArr */][34].A34) {
        cssCorrectValue.innerHTML = "Correct..";
        cssDisplayAnswer.innerHTML = `<textarea name="text" class="answer_textarea" id="input">
        Good Job :) </textarea>`;
        cssNextButton.innerHTML = `<button class="nextButton cssColor1" id="cssNextButton" onclick=cssBtn()>Next</button>`;
        cssRemoveValue.innerHTML = "";

    } else if (cssRandomValue == 34 && cssInputAnswer !== __WEBPACK_IMPORTED_MODULE_3__questionsAndAnswers_cssAnswers__["a" /* cssAnswerArr */][34].A34) {
        cssDisplayAnswer.innerHTML = `<textarea name="text" class="answer_textarea" id="input">
h1 {
    text-transform: uppercase;
}
p {
    text-transform: capitalize;
}
          </textarea>`;
        cssIncorrectValue.innerHTML = "Incorrect..";
        cssNextButton.innerHTML = `<button class="nextButton cssColor1" id="cssNextButton" onclick=cssBtn()>Next</button>`;
        cssRemoveValue.innerHTML = "";



    } else if (cssRandomValue == 35 && cssInputAnswer == __WEBPACK_IMPORTED_MODULE_3__questionsAndAnswers_cssAnswers__["a" /* cssAnswerArr */][35].A35) {
        cssCorrectValue.innerHTML = "Correct..";
        cssDisplayAnswer.innerHTML = `<textarea name="text" class="answer_textarea" id="input">
        Good Job :) </textarea>`;
        cssNextButton.innerHTML = `<button class="nextButton cssColor1" id="cssNextButton" onclick=cssBtn()>Next</button>`;
        cssRemoveValue.innerHTML = "";

    } else if (cssRandomValue == 35 && cssInputAnswer !== __WEBPACK_IMPORTED_MODULE_3__questionsAndAnswers_cssAnswers__["a" /* cssAnswerArr */][35].A35) {
        cssDisplayAnswer.innerHTML = `<textarea name="text" class="answer_textarea" id="input">
p {
    text-indent: 20px;
}
          </textarea>`;
        cssIncorrectValue.innerHTML = "Incorrect..";
        cssNextButton.innerHTML = `<button class="nextButton cssColor1" id="cssNextButton" onclick=cssBtn()>Next</button>`;
        cssRemoveValue.innerHTML = "";



    } else if (cssRandomValue == 36 && cssInputAnswer == __WEBPACK_IMPORTED_MODULE_3__questionsAndAnswers_cssAnswers__["a" /* cssAnswerArr */][36].A36) {
        cssCorrectValue.innerHTML = "Correct..";
        cssDisplayAnswer.innerHTML = `<textarea name="text" class="answer_textarea" id="input">
        Good Job :) </textarea>`;
        cssNextButton.innerHTML = `<button class="nextButton cssColor1" id="cssNextButton" onclick=cssBtn()>Next</button>`;
        cssRemoveValue.innerHTML = "";

    } else if (cssRandomValue == 36 && cssInputAnswer !== __WEBPACK_IMPORTED_MODULE_3__questionsAndAnswers_cssAnswers__["a" /* cssAnswerArr */][36].A36) {
        cssDisplayAnswer.innerHTML = `<textarea name="text" class="answer_textarea" id="input">
body {
    font-family: "Courier New";
}
    
h1 {
    font-family: Verdana;
}
          </textarea>`;
        cssIncorrectValue.innerHTML = "Incorrect..";
        cssNextButton.innerHTML = `<button class="nextButton cssColor1" id="cssNextButton" onclick=cssBtn()>Next</button>`;
        cssRemoveValue.innerHTML = "";



    } else if (cssRandomValue == 37 && cssInputAnswer == __WEBPACK_IMPORTED_MODULE_3__questionsAndAnswers_cssAnswers__["a" /* cssAnswerArr */][37].A37) {
        cssCorrectValue.innerHTML = "Correct..";
        cssDisplayAnswer.innerHTML = `<textarea name="text" class="answer_textarea" id="input">
        Good Job :) </textarea>`;
        cssNextButton.innerHTML = `<button class="nextButton cssColor1" id="cssNextButton" onclick=cssBtn()>Next</button>`;
        cssRemoveValue.innerHTML = "";

    } else if (cssRandomValue == 37 && cssInputAnswer !== __WEBPACK_IMPORTED_MODULE_3__questionsAndAnswers_cssAnswers__["a" /* cssAnswerArr */][37].A37) {
        cssDisplayAnswer.innerHTML = `<textarea name="text" class="answer_textarea" id="input">
p {
    font-style: italic;
}
          </textarea>`;
        cssIncorrectValue.innerHTML = "Incorrect..";
        cssNextButton.innerHTML = `<button class="nextButton cssColor1" id="cssNextButton" onclick=cssBtn()>Next</button>`;
        cssRemoveValue.innerHTML = "";



    } else if (cssRandomValue == 38 && cssInputAnswer == __WEBPACK_IMPORTED_MODULE_3__questionsAndAnswers_cssAnswers__["a" /* cssAnswerArr */][38].A38) {
        cssCorrectValue.innerHTML = "Correct..";
        cssDisplayAnswer.innerHTML = `<textarea name="text" class="answer_textarea" id="input">
        Good Job :) </textarea>`;
        cssNextButton.innerHTML = `<button class="nextButton cssColor1" id="cssNextButton" onclick=cssBtn()>Next</button>`;
        cssRemoveValue.innerHTML = "";

    } else if (cssRandomValue == 38 && cssInputAnswer !== __WEBPACK_IMPORTED_MODULE_3__questionsAndAnswers_cssAnswers__["a" /* cssAnswerArr */][38].A38) {
        cssDisplayAnswer.innerHTML = `<textarea name="text" class="answer_textarea" id="input">
body {
    font-size: 20px;
}
    
h1 {
    font-size: 3em;
}
          </textarea>`;
        cssIncorrectValue.innerHTML = "Incorrect..";
        cssNextButton.innerHTML = `<button class="nextButton cssColor1" id="cssNextButton" onclick=cssBtn()>Next</button>`;
        cssRemoveValue.innerHTML = "";



    } else if (cssRandomValue == 39 && cssInputAnswer == __WEBPACK_IMPORTED_MODULE_3__questionsAndAnswers_cssAnswers__["a" /* cssAnswerArr */][39].A39) {
        cssCorrectValue.innerHTML = "Correct..";
        cssDisplayAnswer.innerHTML = `<textarea name="text" class="answer_textarea" id="input">
        Good Job :) </textarea>`;
        cssNextButton.innerHTML = `<button class="nextButton cssColor1" id="cssNextButton" onclick=cssBtn()>Next</button>`;
        cssRemoveValue.innerHTML = "";

    } else if (cssRandomValue == 39 && cssInputAnswer !== __WEBPACK_IMPORTED_MODULE_3__questionsAndAnswers_cssAnswers__["a" /* cssAnswerArr */][39].A39) {
        cssDisplayAnswer.innerHTML = `<textarea name="text" class="answer_textarea" id="input">
p {
    font-weight: bold;
}
          </textarea>`;
        cssIncorrectValue.innerHTML = "Incorrect..";
        cssNextButton.innerHTML = `<button class="nextButton cssColor1" id="cssNextButton" onclick=cssBtn()>Next</button>`;
        cssRemoveValue.innerHTML = "";



    } else if (cssRandomValue == 40 && cssInputAnswer == __WEBPACK_IMPORTED_MODULE_3__questionsAndAnswers_cssAnswers__["a" /* cssAnswerArr */][40].A40) {
        cssCorrectValue.innerHTML = "Correct..";
        cssDisplayAnswer.innerHTML = `<textarea name="text" class="answer_textarea" id="input">
        Good Job :) </textarea>`;
        cssNextButton.innerHTML = `<button class="nextButton cssColor1" id="cssNextButton" onclick=cssBtn()>Next</button>`;
        cssRemoveValue.innerHTML = "";

    } else if (cssRandomValue == 40 && cssInputAnswer !== __WEBPACK_IMPORTED_MODULE_3__questionsAndAnswers_cssAnswers__["a" /* cssAnswerArr */][40].A40) {
        cssDisplayAnswer.innerHTML = `<textarea name="text" class="answer_textarea" id="input">
p {
    font: italic 20px Verdana;
}
          </textarea>`;
        cssIncorrectValue.innerHTML = "Incorrect..";
        cssNextButton.innerHTML = `<button class="nextButton cssColor1" id="cssNextButton" onclick=cssBtn()>Next</button>`;
        cssRemoveValue.innerHTML = "";



    } else if (cssRandomValue == 41 && cssInputAnswer == __WEBPACK_IMPORTED_MODULE_3__questionsAndAnswers_cssAnswers__["a" /* cssAnswerArr */][41].A41) {
        cssCorrectValue.innerHTML = "Correct..";
        cssDisplayAnswer.innerHTML = `<textarea name="text" class="answer_textarea" id="input">
        Good Job :) </textarea>`;
        cssNextButton.innerHTML = `<button class="nextButton cssColor1" id="cssNextButton" onclick=cssBtn()>Next</button>`;
        cssRemoveValue.innerHTML = "";

    } else if (cssRandomValue == 41 && cssInputAnswer !== __WEBPACK_IMPORTED_MODULE_3__questionsAndAnswers_cssAnswers__["a" /* cssAnswerArr */][41].A41) {
        cssDisplayAnswer.innerHTML = `<textarea name="text" class="answer_textarea" id="input">
a {
    color: green;
}
          </textarea>`;
        cssIncorrectValue.innerHTML = "Incorrect..";
        cssNextButton.innerHTML = `<button class="nextButton cssColor1" id="cssNextButton" onclick=cssBtn()>Next</button>`;
        cssRemoveValue.innerHTML = "";



    } else if (cssRandomValue == 42 && cssInputAnswer == __WEBPACK_IMPORTED_MODULE_3__questionsAndAnswers_cssAnswers__["a" /* cssAnswerArr */][42].A42) {
        cssCorrectValue.innerHTML = "Correct..";
        cssDisplayAnswer.innerHTML = `<textarea name="text" class="answer_textarea" id="input">
        Good Job :) </textarea>`;
        cssNextButton.innerHTML = `<button class="nextButton cssColor1" id="cssNextButton" onclick=cssBtn()>Next</button>`;
        cssRemoveValue.innerHTML = "";

    } else if (cssRandomValue == 42 && cssInputAnswer !== __WEBPACK_IMPORTED_MODULE_3__questionsAndAnswers_cssAnswers__["a" /* cssAnswerArr */][42].A42) {
        cssDisplayAnswer.innerHTML = `<textarea name="text" class="answer_textarea" id="input">
a:link {
    color: red;
}
    
a:visited {
    color: blue;
}
a:hover {
    color: black;
}
a:active {
    color: green;
}
          </textarea>`;
        cssIncorrectValue.innerHTML = "Incorrect..";
        cssNextButton.innerHTML = `<button class="nextButton cssColor1" id="cssNextButton" onclick=cssBtn()>Next</button>`;
        cssRemoveValue.innerHTML = "";



    } else if (cssRandomValue == 43 && cssInputAnswer == __WEBPACK_IMPORTED_MODULE_3__questionsAndAnswers_cssAnswers__["a" /* cssAnswerArr */][43].A43) {
        cssCorrectValue.innerHTML = "Correct..";
        cssDisplayAnswer.innerHTML = `<textarea name="text" class="answer_textarea" id="input">
        Good Job :) </textarea>`;
        cssNextButton.innerHTML = `<button class="nextButton cssColor1" id="cssNextButton" onclick=cssBtn()>Next</button>`;
        cssRemoveValue.innerHTML = "";

    } else if (cssRandomValue == 43 && cssInputAnswer !== __WEBPACK_IMPORTED_MODULE_3__questionsAndAnswers_cssAnswers__["a" /* cssAnswerArr */][43].A43) {
        cssDisplayAnswer.innerHTML = `<textarea name="text" class="answer_textarea" id="input">
        
a:link {
    text-decoration: none;
}
a:visited {
    text-decoration: none;
}
a:hover {
    text-decoration: underline;
}
a:active {
    text-decoration: underline;
}
        </textarea>`;
        cssIncorrectValue.innerHTML = "Incorrect..";
        cssNextButton.innerHTML = `<button class="nextButton cssColor1" id="cssNextButton" onclick=cssBtn()>Next</button>`;
        cssRemoveValue.innerHTML = "";



    } else if (cssRandomValue == 44 && cssInputAnswer == __WEBPACK_IMPORTED_MODULE_3__questionsAndAnswers_cssAnswers__["a" /* cssAnswerArr */][44].A44) {
        cssCorrectValue.innerHTML = "Correct..";
        cssDisplayAnswer.innerHTML = `<textarea name="text" class="answer_textarea" id="input">
        Good Job :) </textarea>`;
        cssNextButton.innerHTML = `<button class="nextButton cssColor1" id="cssNextButton" onclick=cssBtn()>Next</button>`;
        cssRemoveValue.innerHTML = "";

    } else if (cssRandomValue == 44 && cssInputAnswer !== __WEBPACK_IMPORTED_MODULE_3__questionsAndAnswers_cssAnswers__["a" /* cssAnswerArr */][44].A44) {
        cssDisplayAnswer.innerHTML = `<textarea name="text" class="answer_textarea" id="input">
        
a:link {
    background-color: lightblue;
}
a:visited {
    background-color: lightblue;
}
a:hover {
    background-color: yellow;
}
a:active {
    background-color: yellow;
}
        </textarea>`;
        cssIncorrectValue.innerHTML = "Incorrect..";
        cssNextButton.innerHTML = `<button class="nextButton cssColor1" id="cssNextButton" onclick=cssBtn()>Next</button>`;
        cssRemoveValue.innerHTML = "";



    } else if (cssRandomValue == 45 && cssInputAnswer == __WEBPACK_IMPORTED_MODULE_3__questionsAndAnswers_cssAnswers__["a" /* cssAnswerArr */][45].A45) {
        cssCorrectValue.innerHTML = "Correct..";
        cssDisplayAnswer.innerHTML = `<textarea name="text" class="answer_textarea" id="input">
        Good Job :) </textarea>`;
        cssNextButton.innerHTML = `<button class="nextButton cssColor1" id="cssNextButton" onclick=cssBtn()>Next</button>`;
        cssRemoveValue.innerHTML = "";

    } else if (cssRandomValue == 45 && cssInputAnswer !== __WEBPACK_IMPORTED_MODULE_3__questionsAndAnswers_cssAnswers__["a" /* cssAnswerArr */][45].A45) {
        cssDisplayAnswer.innerHTML = `<textarea name="text" class="answer_textarea" id="input">
ul {
    list-style-type: square;
}
    
ol {
    list-style-type: upper-roman;
}
          </textarea>`;
        cssIncorrectValue.innerHTML = "Incorrect..";
        cssNextButton.innerHTML = `<button class="nextButton cssColor1" id="cssNextButton" onclick=cssBtn()>Next</button>`;
        cssRemoveValue.innerHTML = "";



    } else if (cssRandomValue == 46 && cssInputAnswer == __WEBPACK_IMPORTED_MODULE_3__questionsAndAnswers_cssAnswers__["a" /* cssAnswerArr */][46].A46) {
        cssCorrectValue.innerHTML = "Correct..";
        cssDisplayAnswer.innerHTML = `<textarea name="text" class="answer_textarea" id="input">
        Good Job :) </textarea>`;
        cssNextButton.innerHTML = `<button class="nextButton cssColor1" id="cssNextButton" onclick=cssBtn()>Next</button>`;
        cssRemoveValue.innerHTML = "";

    } else if (cssRandomValue == 46 && cssInputAnswer !== __WEBPACK_IMPORTED_MODULE_3__questionsAndAnswers_cssAnswers__["a" /* cssAnswerArr */][46].A46) {
        cssDisplayAnswer.innerHTML = `<textarea name="text" class="answer_textarea" id="input">
ul {
    list-style-image: url('sqpurple.gif');
}
          </textarea>`;
        cssIncorrectValue.innerHTML = "Incorrect..";
        cssNextButton.innerHTML = `<button class="nextButton cssColor1" id="cssNextButton" onclick=cssBtn()>Next</button>`;
        cssRemoveValue.innerHTML = "";



    } else if (cssRandomValue == 47 && cssInputAnswer == __WEBPACK_IMPORTED_MODULE_3__questionsAndAnswers_cssAnswers__["a" /* cssAnswerArr */][47].A47) {
        cssCorrectValue.innerHTML = "Correct..";
        cssDisplayAnswer.innerHTML = `<textarea name="text" class="answer_textarea" id="input">
        Good Job :) </textarea>`;
        cssNextButton.innerHTML = `<button class="nextButton cssColor1" id="cssNextButton" onclick=cssBtn()>Next</button>`;
        cssRemoveValue.innerHTML = "";

    } else if (cssRandomValue == 47 && cssInputAnswer !== __WEBPACK_IMPORTED_MODULE_3__questionsAndAnswers_cssAnswers__["a" /* cssAnswerArr */][47].A47) {
        cssDisplayAnswer.innerHTML = `<textarea name="text" class="answer_textarea" id="input">
ul {
    list-style: circle inside url('img_marker.png');
}
          </textarea>`;
        cssIncorrectValue.innerHTML = "Incorrect..";
        cssNextButton.innerHTML = `<button class="nextButton cssColor1" id="cssNextButton" onclick=cssBtn()>Next</button>`;
        cssRemoveValue.innerHTML = "";



    } else if (cssRandomValue == 48 && cssInputAnswer == __WEBPACK_IMPORTED_MODULE_3__questionsAndAnswers_cssAnswers__["a" /* cssAnswerArr */][48].A48) {
        cssCorrectValue.innerHTML = "Correct..";
        cssDisplayAnswer.innerHTML = `<textarea name="text" class="answer_textarea" id="input">
        Good Job :) </textarea>`;
        cssNextButton.innerHTML = `<button class="nextButton cssColor1" id="cssNextButton" onclick=cssBtn()>Next</button>`;
        cssRemoveValue.innerHTML = "";

    } else if (cssRandomValue == 48 && cssInputAnswer !== __WEBPACK_IMPORTED_MODULE_3__questionsAndAnswers_cssAnswers__["a" /* cssAnswerArr */][48].A48) {
        cssDisplayAnswer.innerHTML = `<textarea name="text" class="answer_textarea" id="input">
ul {
    list-style-type: none;
}
          </textarea>`;
        cssIncorrectValue.innerHTML = "Incorrect..";
        cssNextButton.innerHTML = `<button class="nextButton cssColor1" id="cssNextButton" onclick=cssBtn()>Next</button>`;
        cssRemoveValue.innerHTML = "";



    } else if (cssRandomValue == 49 && cssInputAnswer == __WEBPACK_IMPORTED_MODULE_3__questionsAndAnswers_cssAnswers__["a" /* cssAnswerArr */][49].A49) {
        cssCorrectValue.innerHTML = "Correct..";
        cssDisplayAnswer.innerHTML = `<textarea name="text" class="answer_textarea" id="input">
        Good Job :) </textarea>`;
        cssNextButton.innerHTML = `<button class="nextButton cssColor1" id="cssNextButton" onclick=cssBtn()>Next</button>`;
        cssRemoveValue.innerHTML = "";

    } else if (cssRandomValue == 49 && cssInputAnswer !== __WEBPACK_IMPORTED_MODULE_3__questionsAndAnswers_cssAnswers__["a" /* cssAnswerArr */][49].A49) {
        cssDisplayAnswer.innerHTML = `<textarea name="text" class="answer_textarea" id="input">
table, th, td {
    border: 2px solid green;
}
          </textarea>`;
        cssIncorrectValue.innerHTML = "Incorrect..";
        cssNextButton.innerHTML = `<button class="nextButton cssColor1" id="cssNextButton" onclick=cssBtn()>Next</button>`;
        cssRemoveValue.innerHTML = "";



    } else if (cssRandomValue == 50 && cssInputAnswer == __WEBPACK_IMPORTED_MODULE_3__questionsAndAnswers_cssAnswers__["a" /* cssAnswerArr */][50].A50) {
        cssCorrectValue.innerHTML = "Correct..";
        cssDisplayAnswer.innerHTML = `<textarea name="text" class="answer_textarea" id="input">
        Good Job :) </textarea>`;
        cssNextButton.innerHTML = `<button class="nextButton cssColor1" id="cssNextButton" onclick=cssBtn()>Next</button>`;
        cssRemoveValue.innerHTML = "";

    } else if (cssRandomValue == 50 && cssInputAnswer !== __WEBPACK_IMPORTED_MODULE_3__questionsAndAnswers_cssAnswers__["a" /* cssAnswerArr */][50].A50) {
        cssDisplayAnswer.innerHTML = `<textarea name="text" class="answer_textarea" id="input">
table {
    border-collapse: collapse;
}
          </textarea>`;
        cssIncorrectValue.innerHTML = "Incorrect..";
        cssNextButton.innerHTML = `<button class="nextButton cssColor1" id="cssNextButton" onclick=cssBtn()>Next</button>`;
        cssRemoveValue.innerHTML = "";



    } else if (cssRandomValue == 51 && cssInputAnswer == __WEBPACK_IMPORTED_MODULE_3__questionsAndAnswers_cssAnswers__["a" /* cssAnswerArr */][51].A51) {
        cssCorrectValue.innerHTML = "Correct..";
        cssDisplayAnswer.innerHTML = `<textarea name="text" class="answer_textarea" id="input">
        Good Job :) </textarea>`;
        cssNextButton.innerHTML = `<button class="nextButton cssColor1" id="cssNextButton" onclick=cssBtn()>Next</button>`;
        cssRemoveValue.innerHTML = "";

    } else if (cssRandomValue == 51 && cssInputAnswer !== __WEBPACK_IMPORTED_MODULE_3__questionsAndAnswers_cssAnswers__["a" /* cssAnswerArr */][51].A51) {
        cssDisplayAnswer.innerHTML = `<textarea name="text" class="answer_textarea" id="input">
table {
    width: 100%;
}
          </textarea>`;
        cssIncorrectValue.innerHTML = "Incorrect..";
        cssNextButton.innerHTML = `<button class="nextButton cssColor1" id="cssNextButton" onclick=cssBtn()>Next</button>`;
        cssRemoveValue.innerHTML = "";



    } else if (cssRandomValue == 52 && cssInputAnswer == __WEBPACK_IMPORTED_MODULE_3__questionsAndAnswers_cssAnswers__["a" /* cssAnswerArr */][52].A52) {
        cssCorrectValue.innerHTML = "Correct..";
        cssDisplayAnswer.innerHTML = `<textarea name="text" class="answer_textarea" id="input">
        Good Job :) </textarea>`;
        cssNextButton.innerHTML = `<button class="nextButton cssColor1" id="cssNextButton" onclick=cssBtn()>Next</button>`;
        cssRemoveValue.innerHTML = "";

    } else if (cssRandomValue == 52 && cssInputAnswer !== __WEBPACK_IMPORTED_MODULE_3__questionsAndAnswers_cssAnswers__["a" /* cssAnswerArr */][52].A52) {
        cssDisplayAnswer.innerHTML = `<textarea name="text" class="answer_textarea" id="input">
td {
    text-align: right;
}
          </textarea>`;
        cssIncorrectValue.innerHTML = "Incorrect..";
        cssNextButton.innerHTML = `<button class="nextButton cssColor1" id="cssNextButton" onclick=cssBtn()>Next</button>`;
        cssRemoveValue.innerHTML = "";



    } else if (cssRandomValue == 53 && cssInputAnswer == __WEBPACK_IMPORTED_MODULE_3__questionsAndAnswers_cssAnswers__["a" /* cssAnswerArr */][53].A53) {
        cssCorrectValue.innerHTML = "Correct..";
        cssDisplayAnswer.innerHTML = `<textarea name="text" class="answer_textarea" id="input">
        Good Job :) </textarea>`;
        cssNextButton.innerHTML = `<button class="nextButton cssColor1" id="cssNextButton" onclick=cssBtn()>Next</button>`;
        cssRemoveValue.innerHTML = "";

    } else if (cssRandomValue == 53 && cssInputAnswer !== __WEBPACK_IMPORTED_MODULE_3__questionsAndAnswers_cssAnswers__["a" /* cssAnswerArr */][53].A53) {
        cssDisplayAnswer.innerHTML = `<textarea name="text" class="answer_textarea" id="input">
th {
    background-color: lightblue;
}
          </textarea>`;
        cssIncorrectValue.innerHTML = "Incorrect..";
        cssNextButton.innerHTML = `<button class="nextButton cssColor1" id="cssNextButton" onclick=cssBtn()>Next</button>`;
        cssRemoveValue.innerHTML = "";



    } else if (cssRandomValue == 54 && cssInputAnswer == __WEBPACK_IMPORTED_MODULE_3__questionsAndAnswers_cssAnswers__["a" /* cssAnswerArr */][54].A54) {
        cssCorrectValue.innerHTML = "Correct..";
        cssDisplayAnswer.innerHTML = `<textarea name="text" class="answer_textarea" id="input">
        Good Job :) </textarea>`;
        cssNextButton.innerHTML = `<button class="nextButton cssColor1" id="cssNextButton" onclick=cssBtn()>Next</button>`;
        cssRemoveValue.innerHTML = "";

    } else if (cssRandomValue == 54 && cssInputAnswer !== __WEBPACK_IMPORTED_MODULE_3__questionsAndAnswers_cssAnswers__["a" /* cssAnswerArr */][54].A54) {
        cssDisplayAnswer.innerHTML = `<textarea name="text" class="answer_textarea" id="input">
h1 {
    visibility: hidden;
}
          </textarea>`;
        cssIncorrectValue.innerHTML = "Incorrect..";
        cssNextButton.innerHTML = `<button class="nextButton cssColor1" id="cssNextButton" onclick=cssBtn()>Next</button>`;
        cssRemoveValue.innerHTML = "";



    } else if (cssRandomValue == 55 && cssInputAnswer == __WEBPACK_IMPORTED_MODULE_3__questionsAndAnswers_cssAnswers__["a" /* cssAnswerArr */][55].A55) {
        cssCorrectValue.innerHTML = "Correct..";
        cssDisplayAnswer.innerHTML = `<textarea name="text" class="answer_textarea" id="input">
        Good Job :) </textarea>`;
        cssNextButton.innerHTML = `<button class="nextButton cssColor1" id="cssNextButton" onclick=cssBtn()>Next</button>`;
        cssRemoveValue.innerHTML = "";

    } else if (cssRandomValue == 55 && cssInputAnswer !== __WEBPACK_IMPORTED_MODULE_3__questionsAndAnswers_cssAnswers__["a" /* cssAnswerArr */][55].A55) {
        cssDisplayAnswer.innerHTML = `<textarea name="text" class="answer_textarea" id="input">
h1 {
    display: none;
}
          </textarea>`;
        cssIncorrectValue.innerHTML = "Incorrect..";
        cssNextButton.innerHTML = `<button class="nextButton cssColor1" id="cssNextButton" onclick=cssBtn()>Next</button>`;
        cssRemoveValue.innerHTML = "";



    } else if (cssRandomValue == 56 && cssInputAnswer == __WEBPACK_IMPORTED_MODULE_3__questionsAndAnswers_cssAnswers__["a" /* cssAnswerArr */][56].A56) {
        cssCorrectValue.innerHTML = "Correct..";
        cssDisplayAnswer.innerHTML = `<textarea name="text" class="answer_textarea" id="input">
        Good Job :) </textarea>`;
        cssNextButton.innerHTML = `<button class="nextButton cssColor1" id="cssNextButton" onclick=cssBtn()>Next</button>`;
        cssRemoveValue.innerHTML = "";

    } else if (cssRandomValue == 56 && cssInputAnswer !== __WEBPACK_IMPORTED_MODULE_3__questionsAndAnswers_cssAnswers__["a" /* cssAnswerArr */][56].A56) {
        cssDisplayAnswer.innerHTML = `<textarea name="text" class="answer_textarea" id="input">
li {
    display: inline;
}
          </textarea>`;
        cssIncorrectValue.innerHTML = "Incorrect..";
        cssNextButton.innerHTML = `<button class="nextButton cssColor1" id="cssNextButton" onclick=cssBtn()>Next</button>`;
        cssRemoveValue.innerHTML = "";



    } else if (cssRandomValue == 57 && cssInputAnswer == __WEBPACK_IMPORTED_MODULE_3__questionsAndAnswers_cssAnswers__["a" /* cssAnswerArr */][57].A57) {
        cssCorrectValue.innerHTML = "Correct..";
        cssDisplayAnswer.innerHTML = `<textarea name="text" class="answer_textarea" id="input">
        Good Job :) </textarea>`;
        cssNextButton.innerHTML = `<button class="nextButton cssColor1" id="cssNextButton" onclick=cssBtn()>Next</button>`;
        cssRemoveValue.innerHTML = "";

    } else if (cssRandomValue == 57 && cssInputAnswer !== __WEBPACK_IMPORTED_MODULE_3__questionsAndAnswers_cssAnswers__["a" /* cssAnswerArr */][57].A57) {
        cssDisplayAnswer.innerHTML = `<textarea name="text" class="answer_textarea" id="input">
strong {
    display:block;
}
          </textarea>`;
        cssIncorrectValue.innerHTML = "Incorrect..";
        cssNextButton.innerHTML = `<button class="nextButton cssColor1" id="cssNextButton" onclick=cssBtn()>Next</button>`;
        cssRemoveValue.innerHTML = "";



    } else if (cssRandomValue == 58 && cssInputAnswer == __WEBPACK_IMPORTED_MODULE_3__questionsAndAnswers_cssAnswers__["a" /* cssAnswerArr */][58].A58) {
        cssCorrectValue.innerHTML = "Correct..";
        cssDisplayAnswer.innerHTML = `<textarea name="text" class="answer_textarea" id="input">
        Good Job :) </textarea>`;
        cssNextButton.innerHTML = `<button class="nextButton cssColor1" id="cssNextButton" onclick=cssBtn()>Next</button>`;
        cssRemoveValue.innerHTML = "";

    } else if (cssRandomValue == 58 && cssInputAnswer !== __WEBPACK_IMPORTED_MODULE_3__questionsAndAnswers_cssAnswers__["a" /* cssAnswerArr */][58].A58) {
        cssDisplayAnswer.innerHTML = `<textarea name="text" class="answer_textarea" id="input">
h1 {
    position: fixed;
    top: 50px;
    right: 50px;
}
          </textarea>`;
        cssIncorrectValue.innerHTML = "Incorrect..";
        cssNextButton.innerHTML = `<button class="nextButton cssColor1" id="cssNextButton" onclick=cssBtn()>Next</button>`;
        cssRemoveValue.innerHTML = "";



    } else if (cssRandomValue == 59 && cssInputAnswer == __WEBPACK_IMPORTED_MODULE_3__questionsAndAnswers_cssAnswers__["a" /* cssAnswerArr */][59].A59) {
        cssCorrectValue.innerHTML = "Correct..";
        cssDisplayAnswer.innerHTML = `<textarea name="text" class="answer_textarea" id="input">
        Good Job :) </textarea>`;
        cssNextButton.innerHTML = `<button class="nextButton cssColor1" id="cssNextButton" onclick=cssBtn()>Next</button>`;
        cssRemoveValue.innerHTML = "";

    } else if (cssRandomValue == 59 && cssInputAnswer !== __WEBPACK_IMPORTED_MODULE_3__questionsAndAnswers_cssAnswers__["a" /* cssAnswerArr */][59].A59) {
        cssDisplayAnswer.innerHTML = `<textarea name="text" class="answer_textarea" id="input">
h1 {
    position: relative;
    top: 30px;
    left: -20px;
}
          </textarea>`;
        cssIncorrectValue.innerHTML = "Incorrect..";
        cssNextButton.innerHTML = `<button class="nextButton cssColor1" id="cssNextButton" onclick=cssBtn()>Next</button>`;
        cssRemoveValue.innerHTML = "";



    } else if (cssRandomValue == 60 && cssInputAnswer == __WEBPACK_IMPORTED_MODULE_3__questionsAndAnswers_cssAnswers__["a" /* cssAnswerArr */][60].A60) {
        cssCorrectValue.innerHTML = "Correct..";
        cssDisplayAnswer.innerHTML = `<textarea name="text" class="answer_textarea" id="input">
        Good Job :) </textarea>`;
        cssNextButton.innerHTML = `<button class="nextButton cssColor1" id="cssNextButton" onclick=cssBtn()>Next</button>`;
        cssRemoveValue.innerHTML = "";

    } else if (cssRandomValue == 60 && cssInputAnswer !== __WEBPACK_IMPORTED_MODULE_3__questionsAndAnswers_cssAnswers__["a" /* cssAnswerArr */][60].A60) {
        cssDisplayAnswer.innerHTML = `<textarea name="text" class="answer_textarea" id="input">
h1 {
    position: absolute;
    top: 100px;
    left: 50px;
}
          </textarea>`;
        cssIncorrectValue.innerHTML = "Incorrect..";
        cssNextButton.innerHTML = `<button class="nextButton cssColor1" id="cssNextButton" onclick=cssBtn()>Next</button>`;
        cssRemoveValue.innerHTML = "";



    } else if (cssRandomValue == 61 && cssInputAnswer == __WEBPACK_IMPORTED_MODULE_3__questionsAndAnswers_cssAnswers__["a" /* cssAnswerArr */][61].A61) {
        cssCorrectValue.innerHTML = "Correct..";
        cssDisplayAnswer.innerHTML = `<textarea name="text" class="answer_textarea" id="input">
        Good Job :) </textarea>`;
        cssNextButton.innerHTML = `<button class="nextButton cssColor1" id="cssNextButton" onclick=cssBtn()>Next</button>`;
        cssRemoveValue.innerHTML = "";

    } else if (cssRandomValue == 61 && cssInputAnswer !== __WEBPACK_IMPORTED_MODULE_3__questionsAndAnswers_cssAnswers__["a" /* cssAnswerArr */][61].A61) {
        cssDisplayAnswer.innerHTML = `<textarea name="text" class="answer_textarea" id="input">
img {
    position: absolute;
    left: 0px;
    top: 0px;
    z-index: -1;
}
          </textarea>`;
        cssIncorrectValue.innerHTML = "Incorrect..";
        cssNextButton.innerHTML = `<button class="nextButton cssColor1" id="cssNextButton" onclick=cssBtn()>Next</button>`;
        cssRemoveValue.innerHTML = "";



    } else if (cssRandomValue == 62 && cssInputAnswer == __WEBPACK_IMPORTED_MODULE_3__questionsAndAnswers_cssAnswers__["a" /* cssAnswerArr */][62].A62) {
        cssCorrectValue.innerHTML = "Correct..";
        cssDisplayAnswer.innerHTML = `<textarea name="text" class="answer_textarea" id="input">
        Good Job :) </textarea>`;
        cssNextButton.innerHTML = `<button class="nextButton cssColor1" id="cssNextButton" onclick=cssBtn()>Next</button>`;
        cssRemoveValue.innerHTML = "";

    } else if (cssRandomValue == 62 && cssInputAnswer !== __WEBPACK_IMPORTED_MODULE_3__questionsAndAnswers_cssAnswers__["a" /* cssAnswerArr */][62].A62) {
        cssDisplayAnswer.innerHTML = `<textarea name="text" class="answer_textarea" id="input">
.container {
    position: relative;
}
    
.topleft {
    position: absolute;
    left: 30px;
    top: 15px;
}
          </textarea>`;
        cssIncorrectValue.innerHTML = "Incorrect..";
        cssNextButton.innerHTML = `<button class="nextButton cssColor1" id="cssNextButton" onclick=cssBtn()>Next</button>`;
        cssRemoveValue.innerHTML = "";



    } else if (cssRandomValue == 63 && cssInputAnswer == __WEBPACK_IMPORTED_MODULE_3__questionsAndAnswers_cssAnswers__["a" /* cssAnswerArr */][63].A63) {
        cssCorrectValue.innerHTML = "Correct..";
        cssDisplayAnswer.innerHTML = `<textarea name="text" class="answer_textarea" id="input">
        Good Job :) </textarea>`;
        cssNextButton.innerHTML = `<button class="nextButton cssColor1" id="cssNextButton" onclick=cssBtn()>Next</button>`;
        cssRemoveValue.innerHTML = "";

    } else if (cssRandomValue == 63 && cssInputAnswer !== __WEBPACK_IMPORTED_MODULE_3__questionsAndAnswers_cssAnswers__["a" /* cssAnswerArr */][63].A63) {
        cssDisplayAnswer.innerHTML = `<textarea name="text" class="answer_textarea" id="input">
div {
    background-color: #eee;
    width: 200px;
    height: 70px;
    border: 1px dotted black;
    overflow: scroll;
}
          </textarea>`;
        cssIncorrectValue.innerHTML = "Incorrect..";
        cssNextButton.innerHTML = `<button class="nextButton cssColor1" id="cssNextButton" onclick=cssBtn()>Next</button>`;
        cssRemoveValue.innerHTML = "";



    } else if (cssRandomValue == 64 && cssInputAnswer == __WEBPACK_IMPORTED_MODULE_3__questionsAndAnswers_cssAnswers__["a" /* cssAnswerArr */][64].A64) {
        cssCorrectValue.innerHTML = "Correct..";
        cssDisplayAnswer.innerHTML = `<textarea name="text" class="answer_textarea" id="input">
        Good Job :) </textarea>`;
        cssNextButton.innerHTML = `<button class="nextButton cssColor1" id="cssNextButton" onclick=cssBtn()>Next</button>`;
        cssRemoveValue.innerHTML = "";

    } else if (cssRandomValue == 64 && cssInputAnswer !== __WEBPACK_IMPORTED_MODULE_3__questionsAndAnswers_cssAnswers__["a" /* cssAnswerArr */][64].A64) {
        cssDisplayAnswer.innerHTML = `<textarea name="text" class="answer_textarea" id="input">
div {
    background-color: lightblue;
    width: 200px;
    height: 200px;
    overflow: hidden;
}
          </textarea>`;
        cssIncorrectValue.innerHTML = "Incorrect..";
        cssNextButton.innerHTML = `<button class="nextButton cssColor1" id="cssNextButton" onclick=cssBtn()>Next</button>`;
        cssRemoveValue.innerHTML = "";



    } else if (cssRandomValue == 65 && cssInputAnswer == __WEBPACK_IMPORTED_MODULE_3__questionsAndAnswers_cssAnswers__["a" /* cssAnswerArr */][65].A65) {
        cssCorrectValue.innerHTML = "Correct..";
        cssDisplayAnswer.innerHTML = `<textarea name="text" class="answer_textarea" id="input">
        Good Job :) </textarea>`;
        cssNextButton.innerHTML = `<button class="nextButton cssColor1" id="cssNextButton" onclick=cssBtn()>Next</button>`;
        cssRemoveValue.innerHTML = "";

    } else if (cssRandomValue == 65 && cssInputAnswer !== __WEBPACK_IMPORTED_MODULE_3__questionsAndAnswers_cssAnswers__["a" /* cssAnswerArr */][65].A65) {
        cssDisplayAnswer.innerHTML = `<textarea name="text" class="answer_textarea" id="input">
div {
    background-color: #eee;
    width: 150px;
    height: 70px;
    border: 1px dotted black;
    white-space: nowrap;
    overflow-x: scroll;
}
          </textarea>`;
        cssIncorrectValue.innerHTML = "Incorrect..";
        cssNextButton.innerHTML = `<button class="nextButton cssColor1" id="cssNextButton" onclick=cssBtn()>Next</button>`;
        cssRemoveValue.innerHTML = "";



    } else if (cssRandomValue == 66 && cssInputAnswer == __WEBPACK_IMPORTED_MODULE_3__questionsAndAnswers_cssAnswers__["a" /* cssAnswerArr */][66].A66) {
        cssCorrectValue.innerHTML = "Correct..";
        cssDisplayAnswer.innerHTML = `<textarea name="text" class="answer_textarea" id="input">
        Good Job :) </textarea>`;
        cssNextButton.innerHTML = `<button class="nextButton cssColor1" id="cssNextButton" onclick=cssBtn()>Next</button>`;
        cssRemoveValue.innerHTML = "";

    } else if (cssRandomValue == 66 && cssInputAnswer !== __WEBPACK_IMPORTED_MODULE_3__questionsAndAnswers_cssAnswers__["a" /* cssAnswerArr */][66].A66) {
        cssDisplayAnswer.innerHTML = `<textarea name="text" class="answer_textarea" id="input">
div {
    margin-left: auto;
    margin-right: auto;
    width: 300px;
    background-color: #b0e0e6;
}
          </textarea>`;
        cssIncorrectValue.innerHTML = "Incorrect..";
        cssNextButton.innerHTML = `<button class="nextButton cssColor1" id="cssNextButton" onclick=cssBtn()>Next</button>`;
        cssRemoveValue.innerHTML = "";



    } else if (cssRandomValue == 67 && cssInputAnswer == __WEBPACK_IMPORTED_MODULE_3__questionsAndAnswers_cssAnswers__["a" /* cssAnswerArr */][67].A67) {
        cssCorrectValue.innerHTML = "Correct..";
        cssDisplayAnswer.innerHTML = `<textarea name="text" class="answer_textarea" id="input">
        Good Job :) </textarea>`;
        cssNextButton.innerHTML = `<button class="nextButton cssColor1" id="cssNextButton" onclick=cssBtn()>Next</button>`;
        cssRemoveValue.innerHTML = "";

    } else if (cssRandomValue == 67 && cssInputAnswer !== __WEBPACK_IMPORTED_MODULE_3__questionsAndAnswers_cssAnswers__["a" /* cssAnswerArr */][67].A67) {
        cssDisplayAnswer.innerHTML = `<textarea name="text" class="answer_textarea" id="input">
div {
    position: absolute;
    right: 0px;
    width: 300px;
    background-color: #b0e0e6;
}
          </textarea>`;
        cssIncorrectValue.innerHTML = "Incorrect..";
        cssNextButton.innerHTML = `<button class="nextButton cssColor1" id="cssNextButton" onclick=cssBtn()>Next</button>`;
        cssRemoveValue.innerHTML = "";



    } else if (cssRandomValue == 68 && cssInputAnswer == __WEBPACK_IMPORTED_MODULE_3__questionsAndAnswers_cssAnswers__["a" /* cssAnswerArr */][68].A68) {
        cssCorrectValue.innerHTML = "Correct..";
        cssDisplayAnswer.innerHTML = `<textarea name="text" class="answer_textarea" id="input">
        Good Job :) </textarea>`;
        cssNextButton.innerHTML = `<button class="nextButton cssColor1" id="cssNextButton" onclick=cssBtn()>Next</button>`;
        cssRemoveValue.innerHTML = "";

    } else if (cssRandomValue == 68 && cssInputAnswer !== __WEBPACK_IMPORTED_MODULE_3__questionsAndAnswers_cssAnswers__["a" /* cssAnswerArr */][68].A68) {
        cssDisplayAnswer.innerHTML = `<textarea name="text" class="answer_textarea" id="input">
div p {
    color: red;
}
          </textarea>`;
        cssIncorrectValue.innerHTML = "Incorrect..";
        cssNextButton.innerHTML = `<button class="nextButton cssColor1" id="cssNextButton" onclick=cssBtn()>Next</button>`;
        cssRemoveValue.innerHTML = "";



    } else if (cssRandomValue == 69 && cssInputAnswer == __WEBPACK_IMPORTED_MODULE_3__questionsAndAnswers_cssAnswers__["a" /* cssAnswerArr */][69].A69) {
        cssCorrectValue.innerHTML = "Correct..";
        cssDisplayAnswer.innerHTML = `<textarea name="text" class="answer_textarea" id="input">
        Good Job :) </textarea>`;
        cssNextButton.innerHTML = `<button class="nextButton cssColor1" id="cssNextButton" onclick=cssBtn()>Next</button>`;
        cssRemoveValue.innerHTML = "";

    } else if (cssRandomValue == 69 && cssInputAnswer !== __WEBPACK_IMPORTED_MODULE_3__questionsAndAnswers_cssAnswers__["a" /* cssAnswerArr */][69].A69) {
        cssDisplayAnswer.innerHTML = `<textarea name="text" class="answer_textarea" id="input">
div &gt p {
    color: red;
}
          </textarea>`;
        cssIncorrectValue.innerHTML = "Incorrect..";
        cssNextButton.innerHTML = `<button class="nextButton cssColor1" id="cssNextButton" onclick=cssBtn()>Next</button>`;
        cssRemoveValue.innerHTML = "";



    } else if (cssRandomValue == 70 && cssInputAnswer == __WEBPACK_IMPORTED_MODULE_3__questionsAndAnswers_cssAnswers__["a" /* cssAnswerArr */][70].A70) {
        cssCorrectValue.innerHTML = "Correct..";
        cssDisplayAnswer.innerHTML = `<textarea name="text" class="answer_textarea" id="input">
        Good Job :) </textarea>`;
        cssNextButton.innerHTML = `<button class="nextButton cssColor1" id="cssNextButton" onclick=cssBtn()>Next</button>`;
        cssRemoveValue.innerHTML = "";

    } else if (cssRandomValue == 70 && cssInputAnswer !== __WEBPACK_IMPORTED_MODULE_3__questionsAndAnswers_cssAnswers__["a" /* cssAnswerArr */][70].A70) {
        cssDisplayAnswer.innerHTML = `<textarea name="text" class="answer_textarea" id="input">
div + p {
    color: red;
}
          </textarea>`;
        cssIncorrectValue.innerHTML = "Incorrect..";
        cssNextButton.innerHTML = `<button class="nextButton cssColor1" id="cssNextButton" onclick=cssBtn()>Next</button>`;
        cssRemoveValue.innerHTML = "";



    } else if (cssRandomValue == 71 && cssInputAnswer == __WEBPACK_IMPORTED_MODULE_3__questionsAndAnswers_cssAnswers__["a" /* cssAnswerArr */][71].A71) {
        cssCorrectValue.innerHTML = "Correct..";
        cssDisplayAnswer.innerHTML = `<textarea name="text" class="answer_textarea" id="input">
        Good Job :) </textarea>`;
        cssNextButton.innerHTML = `<button class="nextButton cssColor1" id="cssNextButton" onclick=cssBtn()>Next</button>`;
        cssRemoveValue.innerHTML = "";

    } else if (cssRandomValue == 71 && cssInputAnswer !== __WEBPACK_IMPORTED_MODULE_3__questionsAndAnswers_cssAnswers__["a" /* cssAnswerArr */][71].A71) {
        cssDisplayAnswer.innerHTML = `<textarea name="text" class="answer_textarea" id="input">
div ~ p {
    color: red;
}
          </textarea>`;
        cssIncorrectValue.innerHTML = "Incorrect..";
        cssNextButton.innerHTML = `<button class="nextButton cssColor1" id="cssNextButton" onclick=cssBtn()>Next</button>`;
        cssRemoveValue.innerHTML = "";



    } else if (cssRandomValue == 72 && cssInputAnswer == __WEBPACK_IMPORTED_MODULE_3__questionsAndAnswers_cssAnswers__["a" /* cssAnswerArr */][72].A72) {
        cssCorrectValue.innerHTML = "Correct..";
        cssDisplayAnswer.innerHTML = `<textarea name="text" class="answer_textarea" id="input">
        Good Job :) </textarea>`;
        cssNextButton.innerHTML = `<button class="nextButton cssColor1" id="cssNextButton" onclick=cssBtn()>Next</button>`;
        cssRemoveValue.innerHTML = "";

    } else if (cssRandomValue == 72 && cssInputAnswer !== __WEBPACK_IMPORTED_MODULE_3__questionsAndAnswers_cssAnswers__["a" /* cssAnswerArr */][72].A72) {
        cssDisplayAnswer.innerHTML = `<textarea name="text" class="answer_textarea" id="input">
        
a:link {
    background-color: lightblue;
}
a:visited {
    background-color: lightblue;
}
a:hover {
    background-color: yellow;
}
a:active {
    background-color: yellow;
}
        </textarea>`;
        cssIncorrectValue.innerHTML = "Incorrect..";
        cssNextButton.innerHTML = `<button class="nextButton cssColor1" id="cssNextButton" onclick=cssBtn()>Next</button>`;
        cssRemoveValue.innerHTML = "";



    } else if (cssRandomValue == 73 && cssInputAnswer == __WEBPACK_IMPORTED_MODULE_3__questionsAndAnswers_cssAnswers__["a" /* cssAnswerArr */][73].A73) {
        cssCorrectValue.innerHTML = "Correct..";
        cssDisplayAnswer.innerHTML = `<textarea name="text" class="answer_textarea" id="input">
        Good Job :) </textarea>`;
        cssNextButton.innerHTML = `<button class="nextButton cssColor1" id="cssNextButton" onclick=cssBtn()>Next</button>`;
        cssRemoveValue.innerHTML = "";

    } else if (cssRandomValue == 73 && cssInputAnswer !== __WEBPACK_IMPORTED_MODULE_3__questionsAndAnswers_cssAnswers__["a" /* cssAnswerArr */][73].A73) {
        cssDisplayAnswer.innerHTML = `<textarea name="text" class="answer_textarea" id="input">
p.highlight:hover {
    background-color: lightblue;
}
          </textarea>`;
        cssIncorrectValue.innerHTML = "Incorrect..";
        cssNextButton.innerHTML = `<button class="nextButton cssColor1" id="cssNextButton" onclick=cssBtn()>Next</button>`;
        cssRemoveValue.innerHTML = "";



    } else if (cssRandomValue == 74 && cssInputAnswer == __WEBPACK_IMPORTED_MODULE_3__questionsAndAnswers_cssAnswers__["a" /* cssAnswerArr */][74].A74) {
        cssCorrectValue.innerHTML = "Correct..";
        cssDisplayAnswer.innerHTML = `<textarea name="text" class="answer_textarea" id="input">
        Good Job :) </textarea>`;
        cssNextButton.innerHTML = `<button class="nextButton cssColor1" id="cssNextButton" onclick=cssBtn()>Next</button>`;
        cssRemoveValue.innerHTML = "";

    } else if (cssRandomValue == 74 && cssInputAnswer !== __WEBPACK_IMPORTED_MODULE_3__questionsAndAnswers_cssAnswers__["a" /* cssAnswerArr */][74].A74) {
        cssDisplayAnswer.innerHTML = `<textarea name="text" class="answer_textarea" id="input">
p:first-child {
    background-color: lightblue;
}
          </textarea>`;
        cssIncorrectValue.innerHTML = "Incorrect..";
        cssNextButton.innerHTML = `<button class="nextButton cssColor1" id="cssNextButton" onclick=cssBtn()>Next</button>`;
        cssRemoveValue.innerHTML = "";



    } else if (cssRandomValue == 75 && cssInputAnswer == __WEBPACK_IMPORTED_MODULE_3__questionsAndAnswers_cssAnswers__["a" /* cssAnswerArr */][75].A75) {
        cssCorrectValue.innerHTML = "Correct..";
        cssDisplayAnswer.innerHTML = `<textarea name="text" class="answer_textarea" id="input">
        Good Job :) </textarea>`;
        cssNextButton.innerHTML = `<button class="nextButton cssColor1" id="cssNextButton" onclick=cssBtn()>Next</button>`;
        cssRemoveValue.innerHTML = "";

    } else if (cssRandomValue == 75 && cssInputAnswer !== __WEBPACK_IMPORTED_MODULE_3__questionsAndAnswers_cssAnswers__["a" /* cssAnswerArr */][75].A75) {
        cssDisplayAnswer.innerHTML = `<textarea name="text" class="answer_textarea" id="input">
input:focus {
    background-color: lightblue;
}
          </textarea>`;
        cssIncorrectValue.innerHTML = "Incorrect..";
        cssNextButton.innerHTML = `<button class="nextButton cssColor1" id="cssNextButton" onclick=cssBtn()>Next</button>`;
        cssRemoveValue.innerHTML = "";



    } else if (cssRandomValue == 76 && cssInputAnswer == __WEBPACK_IMPORTED_MODULE_3__questionsAndAnswers_cssAnswers__["a" /* cssAnswerArr */][76].A76) {
        cssCorrectValue.innerHTML = "Correct..";
        cssDisplayAnswer.innerHTML = `<textarea name="text" class="answer_textarea" id="input">
        Good Job :) </textarea>`;
        cssNextButton.innerHTML = `<button class="nextButton cssColor1" id="cssNextButton" onclick=cssBtn()>Next</button>`;
        cssRemoveValue.innerHTML = "";

    } else if (cssRandomValue == 76 && cssInputAnswer !== __WEBPACK_IMPORTED_MODULE_3__questionsAndAnswers_cssAnswers__["a" /* cssAnswerArr */][76].A76) {
        cssDisplayAnswer.innerHTML = `<textarea name="text" class="answer_textarea" id="input">
p::first-line {
    color: red;
}
          </textarea>`;
        cssIncorrectValue.innerHTML = "Incorrect..";
        cssNextButton.innerHTML = `<button class="nextButton cssColor1" id="cssNextButton" onclick=cssBtn()>Next</button>`;
        cssRemoveValue.innerHTML = "";



    } else if (cssRandomValue == 77 && cssInputAnswer == __WEBPACK_IMPORTED_MODULE_3__questionsAndAnswers_cssAnswers__["a" /* cssAnswerArr */][77].A77) {
        cssCorrectValue.innerHTML = "Correct..";
        cssDisplayAnswer.innerHTML = `<textarea name="text" class="answer_textarea" id="input">
        Good Job :) </textarea>`;
        cssNextButton.innerHTML = `<button class="nextButton cssColor1" id="cssNextButton" onclick=cssBtn()>Next</button>`;
        cssRemoveValue.innerHTML = "";

    } else if (cssRandomValue == 77 && cssInputAnswer !== __WEBPACK_IMPORTED_MODULE_3__questionsAndAnswers_cssAnswers__["a" /* cssAnswerArr */][77].A77) {
        cssDisplayAnswer.innerHTML = `<textarea name="text" class="answer_textarea" id="input">
p::first-letter {
    color: red;
    font-size: xx-large;
}
          </textarea>`;
        cssIncorrectValue.innerHTML = "Incorrect..";
        cssNextButton.innerHTML = `<button class="nextButton cssColor1" id="cssNextButton" onclick=cssBtn()>Next</button>`;
        cssRemoveValue.innerHTML = "";



    } else if (cssRandomValue == 78 && cssInputAnswer == __WEBPACK_IMPORTED_MODULE_3__questionsAndAnswers_cssAnswers__["a" /* cssAnswerArr */][78].A78) {
        cssCorrectValue.innerHTML = "Correct..";
        cssDisplayAnswer.innerHTML = `<textarea name="text" class="answer_textarea" id="input">
        Good Job :) </textarea>`;
        cssNextButton.innerHTML = `<button class="nextButton cssColor1" id="cssNextButton" onclick=cssBtn()>Next</button>`;
        cssRemoveValue.innerHTML = "";

    } else if (cssRandomValue == 78 && cssInputAnswer !== __WEBPACK_IMPORTED_MODULE_3__questionsAndAnswers_cssAnswers__["a" /* cssAnswerArr */][78].A78) {
        cssDisplayAnswer.innerHTML = `<textarea name="text" class="answer_textarea" id="input">
p::before{
    content: url(smiley.gif);
}
p::after{
    content: url(smiley.gif);
}
          </textarea>`;
        cssIncorrectValue.innerHTML = "Incorrect..";
        cssNextButton.innerHTML = `<button class="nextButton cssColor1" id="cssNextButton" onclick=cssBtn()>Next</button>`;
        cssRemoveValue.innerHTML = "";



    } else if (cssRandomValue == 79 && cssInputAnswer == __WEBPACK_IMPORTED_MODULE_3__questionsAndAnswers_cssAnswers__["a" /* cssAnswerArr */][79].A79) {
        cssCorrectValue.innerHTML = "Correct..";
        cssDisplayAnswer.innerHTML = `<textarea name="text" class="answer_textarea" id="input">
        Good Job :) </textarea>`;
        cssNextButton.innerHTML = `<button class="nextButton cssColor1" id="cssNextButton" onclick=cssBtn()>Next</button>`;
        cssRemoveValue.innerHTML = "";

    } else if (cssRandomValue == 79 && cssInputAnswer !== __WEBPACK_IMPORTED_MODULE_3__questionsAndAnswers_cssAnswers__["a" /* cssAnswerArr */][79].A79) {
        cssDisplayAnswer.innerHTML = `<textarea name="text" class="answer_textarea" id="input">
img {
    opacity: 0.4;
}
          </textarea>`;
        cssIncorrectValue.innerHTML = "Incorrect..";
        cssNextButton.innerHTML = `<button class="nextButton cssColor1" id="cssNextButton" onclick=cssBtn()>Next</button>`;
        cssRemoveValue.innerHTML = "";



    } else if (cssRandomValue == 80 && cssInputAnswer == __WEBPACK_IMPORTED_MODULE_3__questionsAndAnswers_cssAnswers__["a" /* cssAnswerArr */][80].A80) {
        cssCorrectValue.innerHTML = "Correct..";
        cssDisplayAnswer.innerHTML = `<textarea name="text" class="answer_textarea" id="input">
        Good Job :) </textarea>`;
        cssNextButton.innerHTML = `<button class="nextButton cssColor1" id="cssNextButton" onclick=cssBtn()>Next</button>`;
        cssRemoveValue.innerHTML = "";

    } else if (cssRandomValue == 80 && cssInputAnswer !== __WEBPACK_IMPORTED_MODULE_3__questionsAndAnswers_cssAnswers__["a" /* cssAnswerArr */][80].A80) {
        cssDisplayAnswer.innerHTML = `<textarea name="text" class="answer_textarea" id="input">
img {
    opacity: 0.4;
}
img:hover {
    opacity: 1.0;
}
          </textarea>`;
        cssIncorrectValue.innerHTML = "Incorrect..";
        cssNextButton.innerHTML = `<button class="nextButton cssColor1" id="cssNextButton" onclick=cssBtn()>Next</button>`;
        cssRemoveValue.innerHTML = "";



    } else if (cssRandomValue == 81 && cssInputAnswer == __WEBPACK_IMPORTED_MODULE_3__questionsAndAnswers_cssAnswers__["a" /* cssAnswerArr */][81].A81) {
        cssCorrectValue.innerHTML = "Correct..";
        cssDisplayAnswer.innerHTML = `<textarea name="text" class="answer_textarea" id="input">
        Good Job :) </textarea>`;
        cssNextButton.innerHTML = `<button class="nextButton cssColor1" id="cssNextButton" onclick=cssBtn()>Next</button>`;
        cssRemoveValue.innerHTML = "";

    } else if (cssRandomValue == 81 && cssInputAnswer !== __WEBPACK_IMPORTED_MODULE_3__questionsAndAnswers_cssAnswers__["a" /* cssAnswerArr */][81].A81) {
        cssDisplayAnswer.innerHTML = `<textarea name="text" class="answer_textarea" id="input">
a[target] {
    background-color: lightblue;
}
          </textarea>`;
        cssIncorrectValue.innerHTML = "Incorrect..";
        cssNextButton.innerHTML = `<button class="nextButton cssColor1" id="cssNextButton" onclick=cssBtn()>Next</button>`;
        cssRemoveValue.innerHTML = "";



    } else if (cssRandomValue == 82 && cssInputAnswer == __WEBPACK_IMPORTED_MODULE_3__questionsAndAnswers_cssAnswers__["a" /* cssAnswerArr */][82].A82) {
        cssCorrectValue.innerHTML = "Correct..";
        cssDisplayAnswer.innerHTML = `<textarea name="text" class="answer_textarea" id="input">
        Good Job :) </textarea>`;
        cssNextButton.innerHTML = `<button class="nextButton cssColor1" id="cssNextButton" onclick=cssBtn()>Next</button>`;
        cssRemoveValue.innerHTML = "";

    } else if (cssRandomValue == 82 && cssInputAnswer !== __WEBPACK_IMPORTED_MODULE_3__questionsAndAnswers_cssAnswers__["a" /* cssAnswerArr */][82].A82) {
        cssDisplayAnswer.innerHTML = `<textarea name="text" class="answer_textarea" id="input">
[title~="red"] {
    border: 5px solid red;
}
          </textarea>`;
        cssIncorrectValue.innerHTML = "Incorrect..";
        cssNextButton.innerHTML = `<button class="nextButton cssColor1" id="cssNextButton" onclick=cssBtn()>Next</button>`;
        cssRemoveValue.innerHTML = "";



    } else if (cssRandomValue == 83 && cssInputAnswer == __WEBPACK_IMPORTED_MODULE_3__questionsAndAnswers_cssAnswers__["a" /* cssAnswerArr */][83].A83) {
        cssCorrectValue.innerHTML = "Correct..";
        cssDisplayAnswer.innerHTML = `<textarea name="text" class="answer_textarea" id="input">
        Good Job :) </textarea>`;
        cssNextButton.innerHTML = `<button class="nextButton cssColor1" id="cssNextButton" onclick=cssBtn()>Next</button>`;
        cssRemoveValue.innerHTML = "";

    } else if (cssRandomValue == 83 && cssInputAnswer !== __WEBPACK_IMPORTED_MODULE_3__questionsAndAnswers_cssAnswers__["a" /* cssAnswerArr */][83].A83) {
        cssDisplayAnswer.innerHTML = `<textarea name="text" class="answer_textarea" id="input">
[title^="red"] {
    border: 5px solid red;
}
          </textarea>`;
        cssIncorrectValue.innerHTML = "Incorrect..";
        cssNextButton.innerHTML = `<button class="nextButton cssColor1" id="cssNextButton" onclick=cssBtn()>Next</button>`;
        cssRemoveValue.innerHTML = "";



    } else if (cssRandomValue == 84 && cssInputAnswer == __WEBPACK_IMPORTED_MODULE_3__questionsAndAnswers_cssAnswers__["a" /* cssAnswerArr */][84].A84) {
        cssCorrectValue.innerHTML = "Correct..";
        cssDisplayAnswer.innerHTML = `<textarea name="text" class="answer_textarea" id="input">
        Good Job :) </textarea>`;
        cssNextButton.innerHTML = `<button class="nextButton cssColor1" id="cssNextButton" onclick=cssBtn()>Next</button>`;
        cssRemoveValue.innerHTML = "";

    } else if (cssRandomValue == 84 && cssInputAnswer !== __WEBPACK_IMPORTED_MODULE_3__questionsAndAnswers_cssAnswers__["a" /* cssAnswerArr */][84].A84) {
        cssDisplayAnswer.innerHTML = `<textarea name="text" class="answer_textarea" id="input">
[title$="flower"] {
    border: 5px solid red;
}
          </textarea>`;
        cssIncorrectValue.innerHTML = "Incorrect..";
        cssNextButton.innerHTML = `<button class="nextButton cssColor1" id="cssNextButton" onclick=cssBtn()>Next</button>`;
        cssRemoveValue.innerHTML = "";



    } else if (cssRandomValue == 85 && cssInputAnswer == __WEBPACK_IMPORTED_MODULE_3__questionsAndAnswers_cssAnswers__["a" /* cssAnswerArr */][85].A85) {
        cssCorrectValue.innerHTML = "Correct..";
        cssDisplayAnswer.innerHTML = `<textarea name="text" class="answer_textarea" id="input">
        Good Job :) </textarea>`;
        cssNextButton.innerHTML = `<button class="nextButton cssColor1" id="cssNextButton" onclick=cssBtn()>Next</button>`;
        cssRemoveValue.innerHTML = "";

    } else if (cssRandomValue == 85 && cssInputAnswer !== __WEBPACK_IMPORTED_MODULE_3__questionsAndAnswers_cssAnswers__["a" /* cssAnswerArr */][85].A85) {
        cssDisplayAnswer.innerHTML = `<textarea name="text" class="answer_textarea" id="input">
[title*="flow"] {
    border: 5px solid red;
}
          </textarea>`;
        cssIncorrectValue.innerHTML = "Incorrect..";
        cssNextButton.innerHTML = `<button class="nextButton cssColor1" id="cssNextButton" onclick=cssBtn()>Next</button>`;
        cssRemoveValue.innerHTML = "";



    } else if (cssRandomValue == 86 && cssInputAnswer == __WEBPACK_IMPORTED_MODULE_3__questionsAndAnswers_cssAnswers__["a" /* cssAnswerArr */][86].A86) {
        cssCorrectValue.innerHTML = "Correct..";
        cssDisplayAnswer.innerHTML = `<textarea name="text" class="answer_textarea" id="input">
        Good Job :) </textarea>`;
        cssNextButton.innerHTML = `<button class="nextButton cssColor1" id="cssNextButton" onclick=cssBtn()>Next</button>`;
        cssRemoveValue.innerHTML = "";

    } else if (cssRandomValue == 86 && cssInputAnswer !== __WEBPACK_IMPORTED_MODULE_3__questionsAndAnswers_cssAnswers__["a" /* cssAnswerArr */][86].A86) {
        cssDisplayAnswer.innerHTML = `<textarea name="text" class="answer_textarea" id="input">
div {
    border-radius: 25px;
    background: #73AD21;
    padding: 20px; 
    width: 200px;
    
}
          </textarea>`;
        cssIncorrectValue.innerHTML = "Incorrect..";
        cssNextButton.innerHTML = `<button class="nextButton cssColor1" id="cssNextButton" onclick=cssBtn()>Next</button>`;
        cssRemoveValue.innerHTML = "";



    } else if (cssRandomValue == 87 && cssInputAnswer == __WEBPACK_IMPORTED_MODULE_3__questionsAndAnswers_cssAnswers__["a" /* cssAnswerArr */][87].A87) {
        cssCorrectValue.innerHTML = "Correct..";
        cssDisplayAnswer.innerHTML = `<textarea name="text" class="answer_textarea" id="input">
        Good Job :) </textarea>`;
        cssNextButton.innerHTML = `<button class="nextButton cssColor1" id="cssNextButton" onclick=cssBtn()>Next</button>`;
        cssRemoveValue.innerHTML = "";

    } else if (cssRandomValue == 87 && cssInputAnswer !== __WEBPACK_IMPORTED_MODULE_3__questionsAndAnswers_cssAnswers__["a" /* cssAnswerArr */][87].A87) {
        cssDisplayAnswer.innerHTML = `<textarea name="text" class="answer_textarea" id="input">
div {
    border-bottom-left-radius: 25px;
    background: #73AD21;
    padding: 20px; 
    width: 200px;  
}
          </textarea>`;
        cssIncorrectValue.innerHTML = "Incorrect..";
        cssNextButton.innerHTML = `<button class="nextButton cssColor1" id="cssNextButton" onclick=cssBtn()>Next</button>`;
        cssRemoveValue.innerHTML = "";



    } else if (cssRandomValue == 88 && cssInputAnswer == __WEBPACK_IMPORTED_MODULE_3__questionsAndAnswers_cssAnswers__["a" /* cssAnswerArr */][88].A88) {
        cssCorrectValue.innerHTML = "Correct..";
        cssDisplayAnswer.innerHTML = `<textarea name="text" class="answer_textarea" id="input">
        Good Job :) </textarea>`;
        cssNextButton.innerHTML = `<button class="nextButton cssColor1" id="cssNextButton" onclick=cssBtn()>Next</button>`;
        cssRemoveValue.innerHTML = "";

    } else if (cssRandomValue == 88 && cssInputAnswer !== __WEBPACK_IMPORTED_MODULE_3__questionsAndAnswers_cssAnswers__["a" /* cssAnswerArr */][88].A88) {
        cssDisplayAnswer.innerHTML = `<textarea name="text" class="answer_textarea" id="input">
div { 
    border: 10px solid transparent;
    border-image: url(border.png) 30 round;
}
          </textarea>`;
        cssIncorrectValue.innerHTML = "Incorrect..";
        cssNextButton.innerHTML = `<button class="nextButton cssColor1" id="cssNextButton" onclick=cssBtn()>Next</button>`;
        cssRemoveValue.innerHTML = "";



    } else if (cssRandomValue == 89 && cssInputAnswer == __WEBPACK_IMPORTED_MODULE_3__questionsAndAnswers_cssAnswers__["a" /* cssAnswerArr */][89].A89) {
        cssCorrectValue.innerHTML = "Correct..";
        cssDisplayAnswer.innerHTML = `<textarea name="text" class="answer_textarea" id="input">
        Good Job :) </textarea>`;
        cssNextButton.innerHTML = `<button class="nextButton cssColor1" id="cssNextButton" onclick=cssBtn()>Next</button>`;
        cssRemoveValue.innerHTML = "";

    } else if (cssRandomValue == 89 && cssInputAnswer !== __WEBPACK_IMPORTED_MODULE_3__questionsAndAnswers_cssAnswers__["a" /* cssAnswerArr */][89].A89) {
        cssDisplayAnswer.innerHTML = `<textarea name="text" class="answer_textarea" id="input">
div { 
    border: 10px solid transparent;
    border-image: url(border.png) 30 stretch;
}
          </textarea>`;
        cssIncorrectValue.innerHTML = "Incorrect..";
        cssNextButton.innerHTML = `<button class="nextButton cssColor1" id="cssNextButton" onclick=cssBtn()>Next</button>`;
        cssRemoveValue.innerHTML = "";



    } else if (cssRandomValue == 90 && cssInputAnswer == __WEBPACK_IMPORTED_MODULE_3__questionsAndAnswers_cssAnswers__["a" /* cssAnswerArr */][90].A90) {
        cssCorrectValue.innerHTML = "Correct..";
        cssDisplayAnswer.innerHTML = `<textarea name="text" class="answer_textarea" id="input">
        Good Job :) </textarea>`;
        cssNextButton.innerHTML = `<button class="nextButton cssColor1" id="cssNextButton" onclick=cssBtn()>Next</button>`;
        cssRemoveValue.innerHTML = "";

    } else if (cssRandomValue == 90 && cssInputAnswer !== __WEBPACK_IMPORTED_MODULE_3__questionsAndAnswers_cssAnswers__["a" /* cssAnswerArr */][90].A90) {
        cssDisplayAnswer.innerHTML = `<textarea name="text" class="answer_textarea" id="input">
body {
    background-image: url(img_flwr.gif), url(paper.gif);
}
          </textarea>`;
        cssIncorrectValue.innerHTML = "Incorrect..";
        cssNextButton.innerHTML = `<button class="nextButton cssColor1" id="cssNextButton" onclick=cssBtn()>Next</button>`;
        cssRemoveValue.innerHTML = "";



    } else if (cssRandomValue == 91 && cssInputAnswer == __WEBPACK_IMPORTED_MODULE_3__questionsAndAnswers_cssAnswers__["a" /* cssAnswerArr */][91].A91) {
        cssCorrectValue.innerHTML = "Correct..";
        cssDisplayAnswer.innerHTML = `<textarea name="text" class="answer_textarea" id="input">
        Good Job :) </textarea>`;
        cssNextButton.innerHTML = `<button class="nextButton cssColor1" id="cssNextButton" onclick=cssBtn()>Next</button>`;
        cssRemoveValue.innerHTML = "";

    } else if (cssRandomValue == 91 && cssInputAnswer !== __WEBPACK_IMPORTED_MODULE_3__questionsAndAnswers_cssAnswers__["a" /* cssAnswerArr */][91].A91) {
        cssDisplayAnswer.innerHTML = `<textarea name="text" class="answer_textarea" id="input">
body {
    background:url(img_flwr.gif);
    background-size: 100px 80px;
    background-repeat: no-repeat;
}
          </textarea>`;
        cssIncorrectValue.innerHTML = "Incorrect..";
        cssNextButton.innerHTML = `<button class="nextButton cssColor1" id="cssNextButton" onclick=cssBtn()>Next</button>`;
        cssRemoveValue.innerHTML = "";



    } else if (cssRandomValue == 92 && cssInputAnswer == __WEBPACK_IMPORTED_MODULE_3__questionsAndAnswers_cssAnswers__["a" /* cssAnswerArr */][92].A92) {
        cssCorrectValue.innerHTML = "Correct..";
        cssDisplayAnswer.innerHTML = `<textarea name="text" class="answer_textarea" id="input">
        Good Job :) </textarea>`;
        cssNextButton.innerHTML = `<button class="nextButton cssColor1" id="cssNextButton" onclick=cssBtn()>Next</button>`;
        cssRemoveValue.innerHTML = "";

    } else if (cssRandomValue == 92 && cssInputAnswer !== __WEBPACK_IMPORTED_MODULE_3__questionsAndAnswers_cssAnswers__["a" /* cssAnswerArr */][92].A92) {
        cssDisplayAnswer.innerHTML = `<textarea name="text" class="answer_textarea" id="input">
html { 
    background: url(img_flower.jpg) no-repeat center center fixed;
    background-size: cover;
}
          </textarea>`;
        cssIncorrectValue.innerHTML = "Incorrect..";
        cssNextButton.innerHTML = `<button class="nextButton cssColor1" id="cssNextButton" onclick=cssBtn()>Next</button>`;
        cssRemoveValue.innerHTML = "";



    } else if (cssRandomValue == 93 && cssInputAnswer == __WEBPACK_IMPORTED_MODULE_3__questionsAndAnswers_cssAnswers__["a" /* cssAnswerArr */][93].A93) {
        cssCorrectValue.innerHTML = "Correct..";
        cssDisplayAnswer.innerHTML = `<textarea name="text" class="answer_textarea" id="input">
        Good Job :) </textarea>`;
        cssNextButton.innerHTML = `<button class="nextButton cssColor1" id="cssNextButton" onclick=cssBtn()>Next</button>`;
        cssRemoveValue.innerHTML = "";

    } else if (cssRandomValue == 93 && cssInputAnswer !== __WEBPACK_IMPORTED_MODULE_3__questionsAndAnswers_cssAnswers__["a" /* cssAnswerArr */][93].A93) {
        cssDisplayAnswer.innerHTML = `<textarea name="text" class="answer_textarea" id="input">
div { 
    border: 10px solid black;
    padding: 35px;
    background: url(img_flwr.gif);
    background-repeat: no-repeat;
    background-origin: content-box;
}
          </textarea>`;
        cssIncorrectValue.innerHTML = "Incorrect..";
        cssNextButton.innerHTML = `<button class="nextButton cssColor1" id="cssNextButton" onclick=cssBtn()>Next</button>`;
        cssRemoveValue.innerHTML = "";



    } else if (cssRandomValue == 94 && cssInputAnswer == __WEBPACK_IMPORTED_MODULE_3__questionsAndAnswers_cssAnswers__["a" /* cssAnswerArr */][94].A94) {
        cssCorrectValue.innerHTML = "Correct..";
        cssDisplayAnswer.innerHTML = `<textarea name="text" class="answer_textarea" id="input">
        Good Job :) </textarea>`;
        cssNextButton.innerHTML = `<button class="nextButton cssColor1" id="cssNextButton" onclick=cssBtn()>Next</button>`;
        cssRemoveValue.innerHTML = "";

    } else if (cssRandomValue == 94 && cssInputAnswer !== __WEBPACK_IMPORTED_MODULE_3__questionsAndAnswers_cssAnswers__["a" /* cssAnswerArr */][94].A94) {
        cssDisplayAnswer.innerHTML = `<textarea name="text" class="answer_textarea" id="input">
div { 
    border: 10px dotted black;
    padding: 35px;
    background: lightblue;
    background-clip: padding-box;
}
          </textarea>`;
        cssIncorrectValue.innerHTML = "Incorrect..";
        cssNextButton.innerHTML = `<button class="nextButton cssColor1" id="cssNextButton" onclick=cssBtn()>Next</button>`;
        cssRemoveValue.innerHTML = "";



    } else if (cssRandomValue == 95 && cssInputAnswer == __WEBPACK_IMPORTED_MODULE_3__questionsAndAnswers_cssAnswers__["a" /* cssAnswerArr */][95].A95) {
        cssCorrectValue.innerHTML = "Correct..";
        cssDisplayAnswer.innerHTML = `<textarea name="text" class="answer_textarea" id="input">
        Good Job :) </textarea>`;
        cssNextButton.innerHTML = `<button class="nextButton cssColor1" id="cssNextButton" onclick=cssBtn()>Next</button>`;
        cssRemoveValue.innerHTML = "";

    } else if (cssRandomValue == 95 && cssInputAnswer !== __WEBPACK_IMPORTED_MODULE_3__questionsAndAnswers_cssAnswers__["a" /* cssAnswerArr */][95].A95) {
        cssDisplayAnswer.innerHTML = `<textarea name="text" class="answer_textarea" id="input">
h1 {
    background-color: rgba(0,255,0,0.3);
}
          </textarea>`;
        cssIncorrectValue.innerHTML = "Incorrect..";
        cssNextButton.innerHTML = `<button class="nextButton cssColor1" id="cssNextButton" onclick=cssBtn()>Next</button>`;
        cssRemoveValue.innerHTML = "";



    } else if (cssRandomValue == 96 && cssInputAnswer == __WEBPACK_IMPORTED_MODULE_3__questionsAndAnswers_cssAnswers__["a" /* cssAnswerArr */][96].A96) {
        cssCorrectValue.innerHTML = "Correct..";
        cssDisplayAnswer.innerHTML = `<textarea name="text" class="answer_textarea" id="input">
        Good Job :) </textarea>`;
        cssNextButton.innerHTML = `<button class="nextButton cssColor1" id="cssNextButton" onclick=cssBtn()>Next</button>`;
        cssRemoveValue.innerHTML = "";

    } else if (cssRandomValue == 96 && cssInputAnswer !== __WEBPACK_IMPORTED_MODULE_3__questionsAndAnswers_cssAnswers__["a" /* cssAnswerArr */][96].A96) {
        cssDisplayAnswer.innerHTML = `<textarea name="text" class="answer_textarea" id="input">
h1 {
    background-color: hsl(0,100%,50%);
}
          </textarea>`;
        cssIncorrectValue.innerHTML = "Incorrect..";
        cssNextButton.innerHTML = `<button class="nextButton cssColor1" id="cssNextButton" onclick=cssBtn()>Next</button>`;
        cssRemoveValue.innerHTML = "";



    } else if (cssRandomValue == 97 && cssInputAnswer == __WEBPACK_IMPORTED_MODULE_3__questionsAndAnswers_cssAnswers__["a" /* cssAnswerArr */][97].A97) {
        cssCorrectValue.innerHTML = "Correct..";
        cssDisplayAnswer.innerHTML = `<textarea name="text" class="answer_textarea" id="input">
        Good Job :) </textarea>`;
        cssNextButton.innerHTML = `<button class="nextButton cssColor1" id="cssNextButton" onclick=cssBtn()>Next</button>`;
        cssRemoveValue.innerHTML = "";

    } else if (cssRandomValue == 97 && cssInputAnswer !== __WEBPACK_IMPORTED_MODULE_3__questionsAndAnswers_cssAnswers__["a" /* cssAnswerArr */][97].A97) {
        cssDisplayAnswer.innerHTML = `<textarea name="text" class="answer_textarea" id="input">
h1 {
    background-color: hsla(0,100%,50%,0.3);
}
          </textarea>`;
        cssIncorrectValue.innerHTML = "Incorrect..";
        cssNextButton.innerHTML = `<button class="nextButton cssColor1" id="cssNextButton" onclick=cssBtn()>Next</button>`;
        cssRemoveValue.innerHTML = "";



    } else if (cssRandomValue == 98 && cssInputAnswer == __WEBPACK_IMPORTED_MODULE_3__questionsAndAnswers_cssAnswers__["a" /* cssAnswerArr */][98].A98) {
        cssCorrectValue.innerHTML = "Correct..";
        cssDisplayAnswer.innerHTML = `<textarea name="text" class="answer_textarea" id="input">
        Good Job :) </textarea>`;
        cssNextButton.innerHTML = `<button class="nextButton cssColor1" id="cssNextButton" onclick=cssBtn()>Next</button>`;
        cssRemoveValue.innerHTML = "";

    } else if (cssRandomValue == 98 && cssInputAnswer !== __WEBPACK_IMPORTED_MODULE_3__questionsAndAnswers_cssAnswers__["a" /* cssAnswerArr */][98].A98) {
        cssDisplayAnswer.innerHTML = `<textarea name="text" class="answer_textarea" id="input">
h1 {
    background-color: red;
    opacity: 0.4;
}
          </textarea>`;
        cssIncorrectValue.innerHTML = "Incorrect..";
        cssNextButton.innerHTML = `<button class="nextButton cssColor1" id="cssNextButton" onclick=cssBtn()>Next</button>`;
        cssRemoveValue.innerHTML = "";



    } else if (cssRandomValue == 99 && cssInputAnswer == __WEBPACK_IMPORTED_MODULE_3__questionsAndAnswers_cssAnswers__["a" /* cssAnswerArr */][99].A99) {
        cssCorrectValue.innerHTML = "Correct..";
        cssDisplayAnswer.innerHTML = `<textarea name="text" class="answer_textarea" id="input">
        Good Job :) </textarea>`;
        cssNextButton.innerHTML = `<button class="nextButton cssColor1" id="cssNextButton" onclick=cssBtn()>Next</button>`;
        cssRemoveValue.innerHTML = "";

    } else if (cssRandomValue == 99 && cssInputAnswer !== __WEBPACK_IMPORTED_MODULE_3__questionsAndAnswers_cssAnswers__["a" /* cssAnswerArr */][99].A99) {
        cssDisplayAnswer.innerHTML = `<textarea name="text" class="answer_textarea" id="input">
div {
    background-image: linear-gradient(white, green);
}
          </textarea>`;
        cssIncorrectValue.innerHTML = "Incorrect..";
        cssNextButton.innerHTML = `<button class="nextButton cssColor1" id="cssNextButton" onclick=cssBtn()>Next</button>`;
        cssRemoveValue.innerHTML = "";



    } else if (cssRandomValue == 100 && cssInputAnswer == __WEBPACK_IMPORTED_MODULE_3__questionsAndAnswers_cssAnswers__["a" /* cssAnswerArr */][100].A100) {
        cssCorrectValue.innerHTML = "Correct..";
        cssDisplayAnswer.innerHTML = `<textarea name="text" class="answer_textarea" id="input">
        Good Job :) </textarea>`;
        cssNextButton.innerHTML = `<button class="nextButton cssColor1" id="cssNextButton" onclick=cssBtn()>Next</button>`;
        cssRemoveValue.innerHTML = "";

    } else if (cssRandomValue == 100 && cssInputAnswer !== __WEBPACK_IMPORTED_MODULE_3__questionsAndAnswers_cssAnswers__["a" /* cssAnswerArr */][100].A100) {
        cssDisplayAnswer.innerHTML = `<textarea name="text" class="answer_textarea" id="input">
div {
    background-image: linear-gradient(to bottom right, white, green);
}
          </textarea>`;
        cssIncorrectValue.innerHTML = "Incorrect..";
        cssNextButton.innerHTML = `<button class="nextButton cssColor1" id="cssNextButton" onclick=cssBtn()>Next</button>`;
        cssRemoveValue.innerHTML = "";



    } else if (cssRandomValue == 101 && cssInputAnswer == __WEBPACK_IMPORTED_MODULE_3__questionsAndAnswers_cssAnswers__["a" /* cssAnswerArr */][101].A101) {
        cssCorrectValue.innerHTML = "Correct..";
        cssDisplayAnswer.innerHTML = `<textarea name="text" class="answer_textarea" id="input">
        Good Job :) </textarea>`;
        cssNextButton.innerHTML = `<button class="nextButton cssColor1" id="cssNextButton" onclick=cssBtn()>Next</button>`;
        cssRemoveValue.innerHTML = "";

    } else if (cssRandomValue == 101 && cssInputAnswer !== __WEBPACK_IMPORTED_MODULE_3__questionsAndAnswers_cssAnswers__["a" /* cssAnswerArr */][101].A101) {
        cssDisplayAnswer.innerHTML = `<textarea name="text" class="answer_textarea" id="input">
div {
    background-image: linear-gradient(70deg, white, green);
}
          </textarea>`;
        cssIncorrectValue.innerHTML = "Incorrect..";
        cssNextButton.innerHTML = `<button class="nextButton cssColor1" id="cssNextButton" onclick=cssBtn()>Next</button>`;
        cssRemoveValue.innerHTML = "";



    } else if (cssRandomValue == 102 && cssInputAnswer == __WEBPACK_IMPORTED_MODULE_3__questionsAndAnswers_cssAnswers__["a" /* cssAnswerArr */][102].A102) {
        cssCorrectValue.innerHTML = "Correct..";
        cssDisplayAnswer.innerHTML = `<textarea name="text" class="answer_textarea" id="input">
        Good Job :) </textarea>`;
        cssNextButton.innerHTML = `<button class="nextButton cssColor1" id="cssNextButton" onclick=cssBtn()>Next</button>`;
        cssRemoveValue.innerHTML = "";

    } else if (cssRandomValue == 102 && cssInputAnswer !== __WEBPACK_IMPORTED_MODULE_3__questionsAndAnswers_cssAnswers__["a" /* cssAnswerArr */][102].A102) {
        cssDisplayAnswer.innerHTML = `<textarea name="text" class="answer_textarea" id="input">
div {
    background-image: linear-gradient(white, red, blue, green);
}
          </textarea>`;
        cssIncorrectValue.innerHTML = "Incorrect..";
        cssNextButton.innerHTML = `<button class="nextButton cssColor1" id="cssNextButton" onclick=cssBtn()>Next</button>`;
        cssRemoveValue.innerHTML = "";



    } else if (cssRandomValue == 103 && cssInputAnswer == __WEBPACK_IMPORTED_MODULE_3__questionsAndAnswers_cssAnswers__["a" /* cssAnswerArr */][103].A103) {
        cssCorrectValue.innerHTML = "Correct..";
        cssDisplayAnswer.innerHTML = `<textarea name="text" class="answer_textarea" id="input">
        Good Job :) </textarea>`;
        cssNextButton.innerHTML = `<button class="nextButton cssColor1" id="cssNextButton" onclick=cssBtn()>Next</button>`;
        cssRemoveValue.innerHTML = "";

    } else if (cssRandomValue == 103 && cssInputAnswer !== __WEBPACK_IMPORTED_MODULE_3__questionsAndAnswers_cssAnswers__["a" /* cssAnswerArr */][103].A103) {
        cssDisplayAnswer.innerHTML = `<textarea name="text" class="answer_textarea" id="input">
div {
    background-image: linear-gradient(rgba(0,255,0,0.2), rgba(0,255,0,1));
}
          </textarea>`;
        cssIncorrectValue.innerHTML = "Incorrect..";
        cssNextButton.innerHTML = `<button class="nextButton cssColor1" id="cssNextButton" onclick=cssBtn()>Next</button>`;
        cssRemoveValue.innerHTML = "";



    } else if (cssRandomValue == 104 && cssInputAnswer == __WEBPACK_IMPORTED_MODULE_3__questionsAndAnswers_cssAnswers__["a" /* cssAnswerArr */][104].A104) {
        cssCorrectValue.innerHTML = "Correct..";
        cssDisplayAnswer.innerHTML = `<textarea name="text" class="answer_textarea" id="input">
        Good Job :) </textarea>`;
        cssNextButton.innerHTML = `<button class="nextButton cssColor1" id="cssNextButton" onclick=cssBtn()>Next</button>`;
        cssRemoveValue.innerHTML = "";

    } else if (cssRandomValue == 104 && cssInputAnswer !== __WEBPACK_IMPORTED_MODULE_3__questionsAndAnswers_cssAnswers__["a" /* cssAnswerArr */][104].A104) {
        cssDisplayAnswer.innerHTML = `<textarea name="text" class="answer_textarea" id="input">
div {
    background-image: radial-gradient(white, green);
}
          </textarea>`;
        cssIncorrectValue.innerHTML = "Incorrect..";
        cssNextButton.innerHTML = `<button class="nextButton cssColor1" id="cssNextButton" onclick=cssBtn()>Next</button>`;
        cssRemoveValue.innerHTML = "";



    } else if (cssRandomValue == 105 && cssInputAnswer == __WEBPACK_IMPORTED_MODULE_3__questionsAndAnswers_cssAnswers__["a" /* cssAnswerArr */][105].A105) {
        cssCorrectValue.innerHTML = "Correct..";
        cssDisplayAnswer.innerHTML = `<textarea name="text" class="answer_textarea" id="input">
        Good Job :) </textarea>`;
        cssNextButton.innerHTML = `<button class="nextButton cssColor1" id="cssNextButton" onclick=cssBtn()>Next</button>`;
        cssRemoveValue.innerHTML = "";

    } else if (cssRandomValue == 105 && cssInputAnswer !== __WEBPACK_IMPORTED_MODULE_3__questionsAndAnswers_cssAnswers__["a" /* cssAnswerArr */][105].A105) {
        cssDisplayAnswer.innerHTML = `<textarea name="text" class="answer_textarea" id="input">
div {
    background-image: radial-gradient(circle, white, green);
}
          </textarea>`;
        cssIncorrectValue.innerHTML = "Incorrect..";
        cssNextButton.innerHTML = `<button class="nextButton cssColor1" id="cssNextButton" onclick=cssBtn()>Next</button>`;
        cssRemoveValue.innerHTML = "";



    } else if (cssRandomValue == 106 && cssInputAnswer == __WEBPACK_IMPORTED_MODULE_3__questionsAndAnswers_cssAnswers__["a" /* cssAnswerArr */][106].A106) {
        cssCorrectValue.innerHTML = "Correct..";
        cssDisplayAnswer.innerHTML = `<textarea name="text" class="answer_textarea" id="input">
        Good Job :) </textarea>`;
        cssNextButton.innerHTML = `<button class="nextButton cssColor1" id="cssNextButton" onclick=cssBtn()>Next</button>`;
        cssRemoveValue.innerHTML = "";

    } else if (cssRandomValue == 106 && cssInputAnswer !== __WEBPACK_IMPORTED_MODULE_3__questionsAndAnswers_cssAnswers__["a" /* cssAnswerArr */][106].A106) {
        cssDisplayAnswer.innerHTML = `<textarea name="text" class="answer_textarea" id="input">
h1 {
    text-shadow: 2px 2px;
}
          </textarea>`;
        cssIncorrectValue.innerHTML = "Incorrect..";
        cssNextButton.innerHTML = `<button class="nextButton cssColor1" id="cssNextButton" onclick=cssBtn()>Next</button>`;
        cssRemoveValue.innerHTML = "";



    } else if (cssRandomValue == 107 && cssInputAnswer == __WEBPACK_IMPORTED_MODULE_3__questionsAndAnswers_cssAnswers__["a" /* cssAnswerArr */][107].A107) {
        cssCorrectValue.innerHTML = "Correct..";
        cssDisplayAnswer.innerHTML = `<textarea name="text" class="answer_textarea" id="input">
        Good Job :) </textarea>`;
        cssNextButton.innerHTML = `<button class="nextButton cssColor1" id="cssNextButton" onclick=cssBtn()>Next</button>`;
        cssRemoveValue.innerHTML = "";

    } else if (cssRandomValue == 107 && cssInputAnswer !== __WEBPACK_IMPORTED_MODULE_3__questionsAndAnswers_cssAnswers__["a" /* cssAnswerArr */][107].A107) {
        cssDisplayAnswer.innerHTML = `<textarea name="text" class="answer_textarea" id="input">
h1 {
    text-shadow: 2px 2px 5px green;
}
          </textarea>`;
        cssIncorrectValue.innerHTML = "Incorrect..";
        cssNextButton.innerHTML = `<button class="nextButton cssColor1" id="cssNextButton" onclick=cssBtn()>Next</button>`;
        cssRemoveValue.innerHTML = "";



    } else if (cssRandomValue == 108 && cssInputAnswer == __WEBPACK_IMPORTED_MODULE_3__questionsAndAnswers_cssAnswers__["a" /* cssAnswerArr */][108].A108) {
        cssCorrectValue.innerHTML = "Correct..";
        cssDisplayAnswer.innerHTML = `<textarea name="text" class="answer_textarea" id="input">
        Good Job :) </textarea>`;
        cssNextButton.innerHTML = `<button class="nextButton cssColor1" id="cssNextButton" onclick=cssBtn()>Next</button>`;
        cssRemoveValue.innerHTML = "";

    } else if (cssRandomValue == 108 && cssInputAnswer !== __WEBPACK_IMPORTED_MODULE_3__questionsAndAnswers_cssAnswers__["a" /* cssAnswerArr */][108].A108) {
        cssDisplayAnswer.innerHTML = `<textarea name="text" class="answer_textarea" id="input">
h1 {
    text-shadow: 2px 2px 5px green, 0 0 10px red;
}
          </textarea>`;
        cssIncorrectValue.innerHTML = "Incorrect..";
        cssNextButton.innerHTML = `<button class="nextButton cssColor1" id="cssNextButton" onclick=cssBtn()>Next</button>`;
        cssRemoveValue.innerHTML = "";



    } else if (cssRandomValue == 109 && cssInputAnswer == __WEBPACK_IMPORTED_MODULE_3__questionsAndAnswers_cssAnswers__["a" /* cssAnswerArr */][109].A109) {
        cssCorrectValue.innerHTML = "Correct..";
        cssDisplayAnswer.innerHTML = `<textarea name="text" class="answer_textarea" id="input">
        Good Job :) </textarea>`;
        cssNextButton.innerHTML = `<button class="nextButton cssColor1" id="cssNextButton" onclick=cssBtn()>Next</button>`;
        cssRemoveValue.innerHTML = "";

    } else if (cssRandomValue == 109 && cssInputAnswer !== __WEBPACK_IMPORTED_MODULE_3__questionsAndAnswers_cssAnswers__["a" /* cssAnswerArr */][109].A109) {
        cssDisplayAnswer.innerHTML = `<textarea name="text" class="answer_textarea" id="input">
div {
    box-shadow: 10px 10px;
}
          </textarea>`;
        cssIncorrectValue.innerHTML = "Incorrect..";
        cssNextButton.innerHTML = `<button class="nextButton cssColor1" id="cssNextButton" onclick=cssBtn()>Next</button>`;
        cssRemoveValue.innerHTML = "";



    } else if (cssRandomValue == 110 && cssInputAnswer == __WEBPACK_IMPORTED_MODULE_3__questionsAndAnswers_cssAnswers__["a" /* cssAnswerArr */][110].A110) {
        cssCorrectValue.innerHTML = "Correct..";
        cssDisplayAnswer.innerHTML = `<textarea name="text" class="answer_textarea" id="input">
        Good Job :) </textarea>`;
        cssNextButton.innerHTML = `<button class="nextButton cssColor1" id="cssNextButton" onclick=cssBtn()>Next</button>`;
        cssRemoveValue.innerHTML = "";

    } else if (cssRandomValue == 110 && cssInputAnswer !== __WEBPACK_IMPORTED_MODULE_3__questionsAndAnswers_cssAnswers__["a" /* cssAnswerArr */][110].A110) {
        cssDisplayAnswer.innerHTML = `<textarea name="text" class="answer_textarea" id="input">
div {
    box-shadow: 10px 10px 5px grey;
}
          </textarea>`;
        cssIncorrectValue.innerHTML = "Incorrect..";
        cssNextButton.innerHTML = `<button class="nextButton cssColor1" id="cssNextButton" onclick=cssBtn()>Next</button>`;
        cssRemoveValue.innerHTML = "";



    } else if (cssRandomValue == 111 && cssInputAnswer == __WEBPACK_IMPORTED_MODULE_3__questionsAndAnswers_cssAnswers__["a" /* cssAnswerArr */][111].A111) {
        cssCorrectValue.innerHTML = "Correct..";
        cssDisplayAnswer.innerHTML = `<textarea name="text" class="answer_textarea" id="input">
        Good Job :) </textarea>`;
        cssNextButton.innerHTML = `<button class="nextButton cssColor1" id="cssNextButton" onclick=cssBtn()>Next</button>`;
        cssRemoveValue.innerHTML = "";

    } else if (cssRandomValue == 111 && cssInputAnswer !== __WEBPACK_IMPORTED_MODULE_3__questionsAndAnswers_cssAnswers__["a" /* cssAnswerArr */][111].A111) {
        cssDisplayAnswer.innerHTML = `<textarea name="text" class="answer_textarea" id="input">
p {
    white-space: nowrap; 
    width: 200px; 
    border: 1px solid #000000;
    overflow: hidden;
    text-overflow: ellipsis;
}
          </textarea>`;
        cssIncorrectValue.innerHTML = "Incorrect..";
        cssNextButton.innerHTML = `<button class="nextButton cssColor1" id="cssNextButton" onclick=cssBtn()>Next</button>`;
        cssRemoveValue.innerHTML = "";



    } else if (cssRandomValue == 112 && cssInputAnswer == __WEBPACK_IMPORTED_MODULE_3__questionsAndAnswers_cssAnswers__["a" /* cssAnswerArr */][112].A112) {
        cssCorrectValue.innerHTML = "Correct..";
        cssDisplayAnswer.innerHTML = `<textarea name="text" class="answer_textarea" id="input">
        Good Job :) </textarea>`;
        cssNextButton.innerHTML = `<button class="nextButton cssColor1" id="cssNextButton" onclick=cssBtn()>Next</button>`;
        cssRemoveValue.innerHTML = "";

    } else if (cssRandomValue == 112 && cssInputAnswer !== __WEBPACK_IMPORTED_MODULE_3__questionsAndAnswers_cssAnswers__["a" /* cssAnswerArr */][112].A112) {
        cssDisplayAnswer.innerHTML = `<textarea name="text" class="answer_textarea" id="input">
p {
    width: 150px; 
    border: 1px solid #000000;
    word-wrap: break-word;
}
          </textarea>`;
        cssIncorrectValue.innerHTML = "Incorrect..";
        cssNextButton.innerHTML = `<button class="nextButton cssColor1" id="cssNextButton" onclick=cssBtn()>Next</button>`;
        cssRemoveValue.innerHTML = "";



    } else if (cssRandomValue == 113 && cssInputAnswer == __WEBPACK_IMPORTED_MODULE_3__questionsAndAnswers_cssAnswers__["a" /* cssAnswerArr */][113].A113) {
        cssCorrectValue.innerHTML = "Correct..";
        cssDisplayAnswer.innerHTML = `<textarea name="text" class="answer_textarea" id="input">
        Good Job :) </textarea>`;
        cssNextButton.innerHTML = `<button class="nextButton cssColor1" id="cssNextButton" onclick=cssBtn()>Next</button>`;
        cssRemoveValue.innerHTML = "";

    } else if (cssRandomValue == 113 && cssInputAnswer !== __WEBPACK_IMPORTED_MODULE_3__questionsAndAnswers_cssAnswers__["a" /* cssAnswerArr */][113].A113) {
        cssDisplayAnswer.innerHTML = `<textarea name="text" class="answer_textarea" id="input">
p {
    width: 150px; 
    border: 1px solid #000000;
    word-break: break-all;
}
          </textarea>`;
        cssIncorrectValue.innerHTML = "Incorrect..";
        cssNextButton.innerHTML = `<button class="nextButton cssColor1" id="cssNextButton" onclick=cssBtn()>Next</button>`;
        cssRemoveValue.innerHTML = "";



    } else if (cssRandomValue == 114 && cssInputAnswer == __WEBPACK_IMPORTED_MODULE_3__questionsAndAnswers_cssAnswers__["a" /* cssAnswerArr */][114].A114) {
        cssCorrectValue.innerHTML = "Correct..";
        cssDisplayAnswer.innerHTML = `<textarea name="text" class="answer_textarea" id="input">
        Good Job :) </textarea>`;
        cssNextButton.innerHTML = `<button class="nextButton cssColor1" id="cssNextButton" onclick=cssBtn()>Next</button>`;
        cssRemoveValue.innerHTML = "";

    } else if (cssRandomValue == 114 && cssInputAnswer !== __WEBPACK_IMPORTED_MODULE_3__questionsAndAnswers_cssAnswers__["a" /* cssAnswerArr */][114].A114) {
        cssDisplayAnswer.innerHTML = `<textarea name="text" class="answer_textarea" id="input">
@font-face {
    font-family: sansation;
    src: url(sansation_light.woff);
}
          </textarea>`;
        cssIncorrectValue.innerHTML = "Incorrect..";
        cssNextButton.innerHTML = `<button class="nextButton cssColor1" id="cssNextButton" onclick=cssBtn()>Next</button>`;
        cssRemoveValue.innerHTML = "";



    } else if (cssRandomValue == 115 && cssInputAnswer == __WEBPACK_IMPORTED_MODULE_3__questionsAndAnswers_cssAnswers__["a" /* cssAnswerArr */][115].A115) {
        cssCorrectValue.innerHTML = "Correct..";
        cssDisplayAnswer.innerHTML = `<textarea name="text" class="answer_textarea" id="input">
        Good Job :) </textarea>`;
        cssNextButton.innerHTML = `<button class="nextButton cssColor1" id="cssNextButton" onclick=cssBtn()>Next</button>`;
        cssRemoveValue.innerHTML = "";

    } else if (cssRandomValue == 115 && cssInputAnswer !== __WEBPACK_IMPORTED_MODULE_3__questionsAndAnswers_cssAnswers__["a" /* cssAnswerArr */][115].A115) {
        cssDisplayAnswer.innerHTML = `<textarea name="text" class="answer_textarea" id="input">
@font-face {
    font-family: sansation;
    src: url(sansation_bold.woff);
    font-weight: bold;
}
          </textarea>`;
        cssIncorrectValue.innerHTML = "Incorrect..";
        cssNextButton.innerHTML = `<button class="nextButton cssColor1" id="cssNextButton" onclick=cssBtn()>Next</button>`;
        cssRemoveValue.innerHTML = "";



    } else if (cssRandomValue == 116 && cssInputAnswer == __WEBPACK_IMPORTED_MODULE_3__questionsAndAnswers_cssAnswers__["a" /* cssAnswerArr */][116].A116) {
        cssCorrectValue.innerHTML = "Correct..";
        cssDisplayAnswer.innerHTML = `<textarea name="text" class="answer_textarea" id="input">
        Good Job :) </textarea>`;
        cssNextButton.innerHTML = `<button class="nextButton cssColor1" id="cssNextButton" onclick=cssBtn()>Next</button>`;
        cssRemoveValue.innerHTML = "";

    } else if (cssRandomValue == 116 && cssInputAnswer !== __WEBPACK_IMPORTED_MODULE_3__questionsAndAnswers_cssAnswers__["a" /* cssAnswerArr */][116].A116) {
        cssDisplayAnswer.innerHTML = `<textarea name="text" class="answer_textarea" id="input">
div {
    width: 100px;
    height: 100px;
    background-color: lightblue;
    border: 1px solid black;
    transform: translate(100px,200px);
}
          </textarea>`;
        cssIncorrectValue.innerHTML = "Incorrect..";
        cssNextButton.innerHTML = `<button class="nextButton cssColor1" id="cssNextButton" onclick=cssBtn()>Next</button>`;
        cssRemoveValue.innerHTML = "";



    } else if (cssRandomValue == 117 && cssInputAnswer == __WEBPACK_IMPORTED_MODULE_3__questionsAndAnswers_cssAnswers__["a" /* cssAnswerArr */][117].A117) {
        cssCorrectValue.innerHTML = "Correct..";
        cssDisplayAnswer.innerHTML = `<textarea name="text" class="answer_textarea" id="input">
        Good Job :) </textarea>`;
        cssNextButton.innerHTML = `<button class="nextButton cssColor1" id="cssNextButton" onclick=cssBtn()>Next</button>`;
        cssRemoveValue.innerHTML = "";

    } else if (cssRandomValue == 117 && cssInputAnswer !== __WEBPACK_IMPORTED_MODULE_3__questionsAndAnswers_cssAnswers__["a" /* cssAnswerArr */][117].A117) {
        cssDisplayAnswer.innerHTML = `<textarea name="text" class="answer_textarea" id="input">
div {
    width: 100px;
    height: 100px;
    margin: 50px;
    background-color: lightblue;
    border: 1px solid black;
    transform: rotate(45deg);
}
          </textarea>`;
        cssIncorrectValue.innerHTML = "Incorrect..";
        cssNextButton.innerHTML = `<button class="nextButton cssColor1" id="cssNextButton" onclick=cssBtn()>Next</button>`;
        cssRemoveValue.innerHTML = "";



    } else if (cssRandomValue == 118 && cssInputAnswer == __WEBPACK_IMPORTED_MODULE_3__questionsAndAnswers_cssAnswers__["a" /* cssAnswerArr */][118].A118) {
        cssCorrectValue.innerHTML = "Correct..";
        cssDisplayAnswer.innerHTML = `<textarea name="text" class="answer_textarea" id="input">
        Good Job :) </textarea>`;
        cssNextButton.innerHTML = `<button class="nextButton cssColor1" id="cssNextButton" onclick=cssBtn()>Next</button>`;
        cssRemoveValue.innerHTML = "";

    } else if (cssRandomValue == 118 && cssInputAnswer !== __WEBPACK_IMPORTED_MODULE_3__questionsAndAnswers_cssAnswers__["a" /* cssAnswerArr */][118].A118) {
        cssDisplayAnswer.innerHTML = `<textarea name="text" class="answer_textarea" id="input">
div {
    width: 100px;
    height: 100px;
    margin: 50px;
    background-color: lightblue;
    border: 1px solid black;
    transform: scale(0.5,2);
}
          </textarea>`;
        cssIncorrectValue.innerHTML = "Incorrect..";
        cssNextButton.innerHTML = `<button class="nextButton cssColor1" id="cssNextButton" onclick=cssBtn()>Next</button>`;
        cssRemoveValue.innerHTML = "";



    } else if (cssRandomValue == 119 && cssInputAnswer == __WEBPACK_IMPORTED_MODULE_3__questionsAndAnswers_cssAnswers__["a" /* cssAnswerArr */][119].A119) {
        cssCorrectValue.innerHTML = "Correct..";
        cssDisplayAnswer.innerHTML = `<textarea name="text" class="answer_textarea" id="input">
        Good Job :) </textarea>`;
        cssNextButton.innerHTML = `<button class="nextButton cssColor1" id="cssNextButton" onclick=cssBtn()>Next</button>`;
        cssRemoveValue.innerHTML = "";

    } else if (cssRandomValue == 119 && cssInputAnswer !== __WEBPACK_IMPORTED_MODULE_3__questionsAndAnswers_cssAnswers__["a" /* cssAnswerArr */][119].A119) {
        cssDisplayAnswer.innerHTML = `<textarea name="text" class="answer_textarea" id="input">
div {
    width: 100px;
    height: 100px;
    margin: 50px;
    background-color: lightblue;
    border: 1px solid black;
    transform: skew(20deg, 30deg);
}
          </textarea>`;
        cssIncorrectValue.innerHTML = "Incorrect..";
        cssNextButton.innerHTML = `<button class="nextButton cssColor1" id="cssNextButton" onclick=cssBtn()>Next</button>`;
        cssRemoveValue.innerHTML = "";



    } else if (cssRandomValue == 120 && cssInputAnswer == __WEBPACK_IMPORTED_MODULE_3__questionsAndAnswers_cssAnswers__["a" /* cssAnswerArr */][120].A120) {
        cssCorrectValue.innerHTML = "Correct..";
        cssDisplayAnswer.innerHTML = `<textarea name="text" class="answer_textarea" id="input">
        Good Job :) </textarea>`;
        cssNextButton.innerHTML = `<button class="nextButton cssColor1" id="cssNextButton" onclick=cssBtn()>Next</button>`;
        cssRemoveValue.innerHTML = "";

    } else if (cssRandomValue == 120 && cssInputAnswer !== __WEBPACK_IMPORTED_MODULE_3__questionsAndAnswers_cssAnswers__["a" /* cssAnswerArr */][120].A120) {
        cssDisplayAnswer.innerHTML = `<textarea name="text" class="answer_textarea" id="input">
div {
    width: 100px;
    height: 100px;
    background-color: lightblue;
    border: 1px solid black;
    transform: rotateX(150deg);
}
          </textarea>`;
        cssIncorrectValue.innerHTML = "Incorrect..";
        cssNextButton.innerHTML = `<button class="nextButton cssColor1" id="cssNextButton" onclick=cssBtn()>Next</button>`;
        cssRemoveValue.innerHTML = "";



    } else if (cssRandomValue == 121 && cssInputAnswer == __WEBPACK_IMPORTED_MODULE_3__questionsAndAnswers_cssAnswers__["a" /* cssAnswerArr */][121].A121) {
        cssCorrectValue.innerHTML = "Correct..";
        cssDisplayAnswer.innerHTML = `<textarea name="text" class="answer_textarea" id="input">
        Good Job :) </textarea>`;
        cssNextButton.innerHTML = `<button class="nextButton cssColor1" id="cssNextButton" onclick=cssBtn()>Next</button>`;
        cssRemoveValue.innerHTML = "";

    } else if (cssRandomValue == 121 && cssInputAnswer !== __WEBPACK_IMPORTED_MODULE_3__questionsAndAnswers_cssAnswers__["a" /* cssAnswerArr */][121].A121) {
        cssDisplayAnswer.innerHTML = `<textarea name="text" class="answer_textarea" id="input">
div {
    width: 100px;
    height: 100px;
    background-color: lightblue;
    border: 1px solid black;
    transform: rotateY(120deg);
}
          </textarea>`;
        cssIncorrectValue.innerHTML = "Incorrect..";
        cssNextButton.innerHTML = `<button class="nextButton cssColor1" id="cssNextButton" onclick=cssBtn()>Next</button>`;
        cssRemoveValue.innerHTML = "";



    } else if (cssRandomValue == 122 && cssInputAnswer == __WEBPACK_IMPORTED_MODULE_3__questionsAndAnswers_cssAnswers__["a" /* cssAnswerArr */][122].A122) {
        cssCorrectValue.innerHTML = "Correct..";
        cssDisplayAnswer.innerHTML = `<textarea name="text" class="answer_textarea" id="input">
        Good Job :) </textarea>`;
        cssNextButton.innerHTML = `<button class="nextButton cssColor1" id="cssNextButton" onclick=cssBtn()>Next</button>`;
        cssRemoveValue.innerHTML = "";

    } else if (cssRandomValue == 122 && cssInputAnswer !== __WEBPACK_IMPORTED_MODULE_3__questionsAndAnswers_cssAnswers__["a" /* cssAnswerArr */][122].A122) {
        cssDisplayAnswer.innerHTML = `<textarea name="text" class="answer_textarea" id="input">
div {
    width: 100px;
    height: 100px;
    background-color: lightblue;
    border: 1px solid black;
    transform: rotateZ(90deg);
}
          </textarea>`;
        cssIncorrectValue.innerHTML = "Incorrect..";
        cssNextButton.innerHTML = `<button class="nextButton cssColor1" id="cssNextButton" onclick=cssBtn()>Next</button>`;
        cssRemoveValue.innerHTML = "";



    } else if (cssRandomValue == 123 && cssInputAnswer == __WEBPACK_IMPORTED_MODULE_3__questionsAndAnswers_cssAnswers__["a" /* cssAnswerArr */][123].A123) {
        cssCorrectValue.innerHTML = "Correct..";
        cssDisplayAnswer.innerHTML = `<textarea name="text" class="answer_textarea" id="input">
        Good Job :) </textarea>`;
        cssNextButton.innerHTML = `<button class="nextButton cssColor1" id="cssNextButton" onclick=cssBtn()>Next</button>`;
        cssRemoveValue.innerHTML = "";

    } else if (cssRandomValue == 123 && cssInputAnswer !== __WEBPACK_IMPORTED_MODULE_3__questionsAndAnswers_cssAnswers__["a" /* cssAnswerArr */][123].A123) {
        cssDisplayAnswer.innerHTML = `<textarea name="text" class="answer_textarea" id="input">
div {
    width: 100px;
    height: 100px;
    background: red;
    transition: width 2s;
}
    
div:hover {
    width: 300px;
}
          </textarea>`;
        cssIncorrectValue.innerHTML = "Incorrect..";
        cssNextButton.innerHTML = `<button class="nextButton cssColor1" id="cssNextButton" onclick=cssBtn()>Next</button>`;
        cssRemoveValue.innerHTML = "";



    } else if (cssRandomValue == 124 && cssInputAnswer == __WEBPACK_IMPORTED_MODULE_3__questionsAndAnswers_cssAnswers__["a" /* cssAnswerArr */][124].A124) {
        cssCorrectValue.innerHTML = "Correct..";
        cssDisplayAnswer.innerHTML = `<textarea name="text" class="answer_textarea" id="input">
        Good Job :) </textarea>`;
        cssNextButton.innerHTML = `<button class="nextButton cssColor1" id="cssNextButton" onclick=cssBtn()>Next</button>`;
        cssRemoveValue.innerHTML = "";

    } else if (cssRandomValue == 124 && cssInputAnswer !== __WEBPACK_IMPORTED_MODULE_3__questionsAndAnswers_cssAnswers__["a" /* cssAnswerArr */][124].A124) {
        cssDisplayAnswer.innerHTML = `<textarea name="text" class="answer_textarea" id="input">
div {
    width: 100px;
    height: 100px;
    background: red;
    transition: width 2s;
    transition-timing-function: ease-in-out;
}
    
div:hover {
    width: 300px;
}
          </textarea>`;
        cssIncorrectValue.innerHTML = "Incorrect..";
        cssNextButton.innerHTML = `<button class="nextButton cssColor1" id="cssNextButton" onclick=cssBtn()>Next</button>`;
        cssRemoveValue.innerHTML = "";



    } else if (cssRandomValue == 125 && cssInputAnswer == __WEBPACK_IMPORTED_MODULE_3__questionsAndAnswers_cssAnswers__["a" /* cssAnswerArr */][125].A125) {
        cssCorrectValue.innerHTML = "Correct..";
        cssDisplayAnswer.innerHTML = `<textarea name="text" class="answer_textarea" id="input">
        Good Job :) </textarea>`;
        cssNextButton.innerHTML = `<button class="nextButton cssColor1" id="cssNextButton" onclick=cssBtn()>Next</button>`;
        cssRemoveValue.innerHTML = "";

    } else if (cssRandomValue == 125 && cssInputAnswer !== __WEBPACK_IMPORTED_MODULE_3__questionsAndAnswers_cssAnswers__["a" /* cssAnswerArr */][125].A125) {
        cssDisplayAnswer.innerHTML = `<textarea name="text" class="answer_textarea" id="input">
div {
    width: 100px;
    height: 100px;
    background: red;
    transition: width 2s;
    transition-delay: 0.5s;
}
    
div:hover {
    width: 300px;
}
          </textarea>`;
        cssIncorrectValue.innerHTML = "Incorrect..";
        cssNextButton.innerHTML = `<button class="nextButton cssColor1" id="cssNextButton" onclick=cssBtn()>Next</button>`;
        cssRemoveValue.innerHTML = "";



    } else if (cssRandomValue == 126 && cssInputAnswer == __WEBPACK_IMPORTED_MODULE_3__questionsAndAnswers_cssAnswers__["a" /* cssAnswerArr */][126].A126) {
        cssCorrectValue.innerHTML = "Correct..";
        cssDisplayAnswer.innerHTML = `<textarea name="text" class="answer_textarea" id="input">
        Good Job :) </textarea>`;
        cssNextButton.innerHTML = `<button class="nextButton cssColor1" id="cssNextButton" onclick=cssBtn()>Next</button>`;
        cssRemoveValue.innerHTML = "";

    } else if (cssRandomValue == 126 && cssInputAnswer !== __WEBPACK_IMPORTED_MODULE_3__questionsAndAnswers_cssAnswers__["a" /* cssAnswerArr */][126].A126) {
        cssDisplayAnswer.innerHTML = `<textarea name="text" class="answer_textarea" id="input">
div {
    width: 100px;
    height: 100px;
    background: red;
    transition: background 2s, transform 2s;
}
    
div:hover {
    background: blue;
    transform: rotate(180deg);
}
          </textarea>`;
        cssIncorrectValue.innerHTML = "Incorrect..";
        cssNextButton.innerHTML = `<button class="nextButton cssColor1" id="cssNextButton" onclick=cssBtn()>Next</button>`;
        cssRemoveValue.innerHTML = "";



    } else if (cssRandomValue == 127 && cssInputAnswer == __WEBPACK_IMPORTED_MODULE_3__questionsAndAnswers_cssAnswers__["a" /* cssAnswerArr */][127].A127) {
        cssCorrectValue.innerHTML = "Correct..";
        cssDisplayAnswer.innerHTML = `<textarea name="text" class="answer_textarea" id="input">
        Good Job :) </textarea>`;
        cssNextButton.innerHTML = `<button class="nextButton cssColor1" id="cssNextButton" onclick=cssBtn()>Next</button>`;
        cssRemoveValue.innerHTML = "";

    } else if (cssRandomValue == 127 && cssInputAnswer !== __WEBPACK_IMPORTED_MODULE_3__questionsAndAnswers_cssAnswers__["a" /* cssAnswerArr */][127].A127) {
        cssDisplayAnswer.innerHTML = `<textarea name="text" class="answer_textarea" id="input">
div {
    width: 100px;
    height: 100px;
    background: red;
    transition: width 2s ease-in-out 0.5s;
}
    
div:hover {
    width: 400px;
}
          </textarea>`;
        cssIncorrectValue.innerHTML = "Incorrect..";
        cssNextButton.innerHTML = `<button class="nextButton cssColor1" id="cssNextButton" onclick=cssBtn()>Next</button>`;
        cssRemoveValue.innerHTML = "";



    } else if (cssRandomValue == 128 && cssInputAnswer == __WEBPACK_IMPORTED_MODULE_3__questionsAndAnswers_cssAnswers__["a" /* cssAnswerArr */][128].A128) {
        cssCorrectValue.innerHTML = "Correct..";
        cssDisplayAnswer.innerHTML = `<textarea name="text" class="answer_textarea" id="input">
        Good Job :) </textarea>`;
        cssNextButton.innerHTML = `<button class="nextButton cssColor1" id="cssNextButton" onclick=cssBtn()>Next</button>`;
        cssRemoveValue.innerHTML = "";

    } else if (cssRandomValue == 128 && cssInputAnswer !== __WEBPACK_IMPORTED_MODULE_3__questionsAndAnswers_cssAnswers__["a" /* cssAnswerArr */][128].A128) {
        cssDisplayAnswer.innerHTML = `<textarea name="text" class="answer_textarea" id="input">
div {
    width: 100px;
    height: 100px;
    background-color: red;
    animation-name: example;
    animation-duration: 2s;
}
    
@keyframes example {
    from {background-color: red;}
    to {background-color: blue;}
}
          </textarea>`;
        cssIncorrectValue.innerHTML = "Incorrect..";
        cssNextButton.innerHTML = `<button class="nextButton cssColor1" id="cssNextButton" onclick=cssBtn()>Next</button>`;
        cssRemoveValue.innerHTML = "";



    } else if (cssRandomValue == 129 && cssInputAnswer == __WEBPACK_IMPORTED_MODULE_3__questionsAndAnswers_cssAnswers__["a" /* cssAnswerArr */][129].A129) {
        cssCorrectValue.innerHTML = "Correct..";
        cssDisplayAnswer.innerHTML = `<textarea name="text" class="answer_textarea" id="input">
        Good Job :) </textarea>`;
        cssNextButton.innerHTML = `<button class="nextButton cssColor1" id="cssNextButton" onclick=cssBtn()>Next</button>`;
        cssRemoveValue.innerHTML = "";

    } else if (cssRandomValue == 129 && cssInputAnswer !== __WEBPACK_IMPORTED_MODULE_3__questionsAndAnswers_cssAnswers__["a" /* cssAnswerArr */][129].A129) {
        cssDisplayAnswer.innerHTML = `<textarea name="text" class="answer_textarea" id="input">
div {
    width: 100px;
    height: 100px;
    position: relative;
    background-color: red;
    animation-name: example;
    animation-duration: 4s;
}
    
@keyframes example {
    0%   {background-color: red; left:0px; top:0px;}
    25%  {background-color: blue; left:0px; top:200px;}
    50%  {background-color: green; left:200px; top:200px;}
    75%  {background-color: yellow; left:200px; top:0px;}
    100% {background-color: red; left:0px; top:0px;}
}
          </textarea>`;
        cssIncorrectValue.innerHTML = "Incorrect..";
        cssNextButton.innerHTML = `<button class="nextButton cssColor1" id="cssNextButton" onclick=cssBtn()>Next</button>`;
        cssRemoveValue.innerHTML = "";



    } else if (cssRandomValue == 130 && cssInputAnswer == __WEBPACK_IMPORTED_MODULE_3__questionsAndAnswers_cssAnswers__["a" /* cssAnswerArr */][130].A130) {
        cssCorrectValue.innerHTML = "Correct..";
        cssDisplayAnswer.innerHTML = `<textarea name="text" class="answer_textarea" id="input">
        Good Job :) </textarea>`;
        cssNextButton.innerHTML = `<button class="nextButton cssColor1" id="cssNextButton" onclick=cssBtn()>Next</button>`;
        cssRemoveValue.innerHTML = "";

    } else if (cssRandomValue == 130 && cssInputAnswer !== __WEBPACK_IMPORTED_MODULE_3__questionsAndAnswers_cssAnswers__["a" /* cssAnswerArr */][130].A130) {
        cssDisplayAnswer.innerHTML = `<textarea name="text" class="answer_textarea" id="input">
div {
    width: 100px;
    height: 100px;
    position: relative;
    background-color: red;
    animation-name: example;
    animation-duration: 2s;
    animation-delay: 1s;
}
    
@keyframes example {
    0%   {background-color: red; left:0px;}
    50%  {background-color: yellow; left:200px;}
    100% {background-color: red; left:0px;}
}
          </textarea>`;
        cssIncorrectValue.innerHTML = "Incorrect..";
        cssNextButton.innerHTML = `<button class="nextButton cssColor1" id="cssNextButton" onclick=cssBtn()>Next</button>`;
        cssRemoveValue.innerHTML = "";



    } else if (cssRandomValue == 131 && cssInputAnswer == __WEBPACK_IMPORTED_MODULE_3__questionsAndAnswers_cssAnswers__["a" /* cssAnswerArr */][131].A131) {
        cssCorrectValue.innerHTML = "Correct..";
        cssDisplayAnswer.innerHTML = `<textarea name="text" class="answer_textarea" id="input">
        Good Job :) </textarea>`;
        cssNextButton.innerHTML = `<button class="nextButton cssColor1" id="cssNextButton" onclick=cssBtn()>Next</button>`;
        cssRemoveValue.innerHTML = "";

    } else if (cssRandomValue == 131 && cssInputAnswer !== __WEBPACK_IMPORTED_MODULE_3__questionsAndAnswers_cssAnswers__["a" /* cssAnswerArr */][131].A131) {
        cssDisplayAnswer.innerHTML = `<textarea name="text" class="answer_textarea" id="input">
div {
    width: 100px;
    height: 100px;
    position: relative;
    background-color: red;
    animation-name: example;
    animation-duration: 2s;
    animation-iteration-count: infinite;
}
    
@keyframes example {
    0%   {background-color: red; left:0px;}
    50%  {background-color: yellow; left:200px;}
    100% {background-color: red; left:0px;}
}
          </textarea>`;
        cssIncorrectValue.innerHTML = "Incorrect..";
        cssNextButton.innerHTML = `<button class="nextButton cssColor1" id="cssNextButton" onclick=cssBtn()>Next</button>`;
        cssRemoveValue.innerHTML = "";



    } else if (cssRandomValue == 132 && cssInputAnswer == __WEBPACK_IMPORTED_MODULE_3__questionsAndAnswers_cssAnswers__["a" /* cssAnswerArr */][132].A132) {
        cssCorrectValue.innerHTML = "Correct..";
        cssDisplayAnswer.innerHTML = `<textarea name="text" class="answer_textarea" id="input">
        Good Job :) </textarea>`;
        cssNextButton.innerHTML = `<button class="nextButton cssColor1" id="cssNextButton" onclick=cssBtn()>Next</button>`;
        cssRemoveValue.innerHTML = "";

    } else if (cssRandomValue == 132 && cssInputAnswer !== __WEBPACK_IMPORTED_MODULE_3__questionsAndAnswers_cssAnswers__["a" /* cssAnswerArr */][132].A132) {
        cssDisplayAnswer.innerHTML = `<textarea name="text" class="answer_textarea" id="input">
div {
    width: 100px;
    height: 100px;
    position: relative;
    background-color: red;
    animation-name: example;
    animation-duration: 4s;
    animation-iteration-count: infinite;
    animation-direction: alternate;   
}
    
@keyframes example {
    0%   {background-color: red; left:0px; top:0px;}
    25%  {background-color: blue; left:0px; top:200px;}
    50%  {background-color: green; left:200px; top:200px;}
    75%  {background-color: yellow; left:200px; top:0px;}
    100% {background-color: red; left:0px; top:0px;}
}
          </textarea>`;
        cssIncorrectValue.innerHTML = "Incorrect..";
        cssNextButton.innerHTML = `<button class="nextButton cssColor1" id="cssNextButton" onclick=cssBtn()>Next</button>`;
        cssRemoveValue.innerHTML = "";



    } else if (cssRandomValue == 133 && cssInputAnswer == __WEBPACK_IMPORTED_MODULE_3__questionsAndAnswers_cssAnswers__["a" /* cssAnswerArr */][133].A133) {
        cssCorrectValue.innerHTML = "Correct..";
        cssDisplayAnswer.innerHTML = `<textarea name="text" class="answer_textarea" id="input">
        Good Job :) </textarea>`;
        cssNextButton.innerHTML = `<button class="nextButton cssColor1" id="cssNextButton" onclick=cssBtn()>Next</button>`;
        cssRemoveValue.innerHTML = "";

    } else if (cssRandomValue == 133 && cssInputAnswer !== __WEBPACK_IMPORTED_MODULE_3__questionsAndAnswers_cssAnswers__["a" /* cssAnswerArr */][133].A133) {
        cssDisplayAnswer.innerHTML = `<textarea name="text" class="answer_textarea" id="input">
div {
    width: 100px;
    height: 100px;
    position: relative;
    background-color: red;
    animation-name: example;
    animation-duration: 4s;
    animation-timing-function: ease-in-out;
}
    
@keyframes example {
    0%   {background-color: red; left:0px;}
    50%  {background-color: yellow; left:200px;}
    100% {background-color: red; left:0px;}
}
          </textarea>`;
        cssIncorrectValue.innerHTML = "Incorrect..";
        cssNextButton.innerHTML = `<button class="nextButton cssColor1" id="cssNextButton" onclick=cssBtn()>Next</button>`;
        cssRemoveValue.innerHTML = "";



    }

    else {
        cssIncorrectValue.innerHTML = "Incorrect..";
        cssNextButton.innerHTML = `<button class="nextButton cssColor1" id="cssNextButton" onclick=cssBtn()>Next</button>`;
        cssRemoveValue.innerHTML = "";
    }

}
window.cssSubmit = cssSubmit; /* to make submit global*/

function cssButton() {
    cssTest = document.getElementById("cssAddedQuestion").innerHTML = __WEBPACK_IMPORTED_MODULE_2__questionsAndAnswers_cssQuestions__["a" /* cssQuestionArr */][cssRandomValue]; /* giving random question to html */

    return cssTest;
}
window.cssButton = cssButton;

function cssShowTest() {
    var cssInputBox = document.getElementById("cssRemove").style.display = "block";
    return cssInputBox;
}
window.cssShowTest = cssShowTest;
function cssBtn() {
    cssRandomValue = Math.floor(Math.random() * __WEBPACK_IMPORTED_MODULE_2__questionsAndAnswers_cssQuestions__["a" /* cssQuestionArr */].length); /* buton next in html to make a next random question*/
    document.getElementById("cssAddedQuestion").innerHTML = __WEBPACK_IMPORTED_MODULE_2__questionsAndAnswers_cssQuestions__["a" /* cssQuestionArr */][cssRandomValue]; /* giving random question to html */
    document.getElementById("cssElementButton").innerHTML = "";/* to clean cssElementButton*/
    document.getElementById("cssRemove").innerHTML = `<textarea name="text" class="answer_textarea" id="input"></textarea></br><button class="answer_submit cssColor1" id="cssStartButton" onclick="cssSubmit()">Submit</button>`;/* to create next text area and Submit button. */
    document.getElementById("cssCheckingAnswer").innerHTML = "";
    document.getElementById("cssShowingAnswer").innerHTML = "";
}
window.cssBtn = cssBtn;/* to make submit global*/

























var javascriptRandomValue = Math.floor(Math.random() * __WEBPACK_IMPORTED_MODULE_5__questionsAndAnswers_javascriptQuestions__["a" /* javascriptQuestionArr */].length); /* taking random question from htmlQuestionArr*/


function javascriptSubmit() { /* function for html submit button*/

    var javascriptInputAnswer = input.value.replace(/\s+/g, ``); /*replace(/\s+/g, `` is removing all spaces. Avoid checking all the spaces to compare text*/
    var javascriptCorrectValue = document.getElementById("javascriptCheckingAnswer"); /* making getElementById code shorter*/
    var javascriptIncorrectValue = document.getElementById("javascriptCheckingAnswer");
    var javascriptDisplayAnswer = document.getElementById("javascriptShowingAnswer");
    var javascriptNextButton = document.getElementById("javascriptElementButton");
    var javascriptRemoveValue = document.getElementById("javascriptRemove");

    if (javascriptRandomValue == 0 && javascriptInputAnswer == __WEBPACK_IMPORTED_MODULE_4__questionsAndAnswers_javascriptAnswers__["a" /* javascriptAnswerArr */][0].A0) { /* checking if javascriptRandomValue is 0 and if putting answer the same as javascriptAnswerArr*//*A0 is just that I can track answer numbers when adding questions and answers*/
        javascriptCorrectValue.innerHTML = "Correct..";
        javascriptDisplayAnswer.innerHTML = `
        <textarea name="text" class="answer_textarea" id="input">Good Job :) </textarea>`;
        javascriptNextButton.innerHTML = `<button class="nextButton javascriptColor1" onclick=javascriptBtn()>Next</button>`; /* creating next button with javascriptBtn()function*/
        javascriptRemoveValue.innerHTML = "";/* removing in html answer*/



    } else if (javascriptRandomValue == 0 && javascriptInputAnswer !== __WEBPACK_IMPORTED_MODULE_4__questionsAndAnswers_javascriptAnswers__["a" /* javascriptAnswerArr */][0].A0) {/*  if random value not == then giving then display the answere.*/
        javascriptDisplayAnswer.innerHTML = `
    <textarea name="text" class="answer_textarea" id="input">
var myName;
        </textarea>`;
        javascriptIncorrectValue.innerHTML = "Incorrect..";
        javascriptNextButton.innerHTML = `<button class="nextButton javascriptColor1" onclick=javascriptBtn()>Next</button>`;
        javascriptRemoveValue.innerHTML = "";



    } else if (javascriptRandomValue == 1 && javascriptInputAnswer == __WEBPACK_IMPORTED_MODULE_4__questionsAndAnswers_javascriptAnswers__["a" /* javascriptAnswerArr */][1].A1) {
        javascriptCorrectValue.innerHTML = "Correct..";
        javascriptDisplayAnswer.innerHTML = `
        <textarea name="text" class="answer_textarea" id="input">Good Job :) </textarea>`;
        javascriptNextButton.innerHTML = `<button class="nextButton javascriptColor1" onclick=javascriptBtn()>Next</button>`;
        javascriptRemoveValue.innerHTML = "";

    } else if (javascriptRandomValue == 1 && javascriptInputAnswer !== __WEBPACK_IMPORTED_MODULE_4__questionsAndAnswers_javascriptAnswers__["a" /* javascriptAnswerArr */][1].A1) {
        javascriptDisplayAnswer.innerHTML = `
        <textarea name="text" class="answer_textarea" id="input">
var a = 7;
var b = a;
          </textarea>`;
        javascriptIncorrectValue.innerHTML = "Incorrect..";
        javascriptNextButton.innerHTML = `<button class="nextButton javascriptColor1" onclick=javascriptBtn()>Next</button>`;
        javascriptRemoveValue.innerHTML = "";



    } else if (javascriptRandomValue == 2 && javascriptInputAnswer == __WEBPACK_IMPORTED_MODULE_4__questionsAndAnswers_javascriptAnswers__["a" /* javascriptAnswerArr */][2].A2) {
        javascriptCorrectValue.innerHTML = "Correct..";
        javascriptDisplayAnswer.innerHTML = `
        <textarea name="text" class="answer_textarea" id="input">Good Job :) </textarea>`;
        javascriptNextButton.innerHTML = `<button class="nextButton javascriptColor1" onclick=javascriptBtn()>Next</button>`;
        javascriptRemoveValue.innerHTML = "";

    } else if (javascriptRandomValue == 2 && javascriptInputAnswer !== __WEBPACK_IMPORTED_MODULE_4__questionsAndAnswers_javascriptAnswers__["a" /* javascriptAnswerArr */][2].A2) {
        javascriptDisplayAnswer.innerHTML = `
    <textarea name="text" class="answer_textarea" id="input">
var a = 9;
          </textarea>`;
        javascriptIncorrectValue.innerHTML = "Incorrect..";
        javascriptNextButton.innerHTML = `<button class="nextButton javascriptColor1" onclick=javascriptBtn()>Next</button>`;
        javascriptRemoveValue.innerHTML = "";



    } else if (javascriptRandomValue == 3 && javascriptInputAnswer == __WEBPACK_IMPORTED_MODULE_4__questionsAndAnswers_javascriptAnswers__["a" /* javascriptAnswerArr */][3].A3) {
        javascriptCorrectValue.innerHTML = "Correct..";
        javascriptDisplayAnswer.innerHTML = `
        <textarea name="text" class="answer_textarea" id="input">Good Job :) </textarea>`;
        javascriptNextButton.innerHTML = `<button class="nextButton javascriptColor1" onclick=javascriptBtn()>Next</button>`;
        javascriptRemoveValue.innerHTML = "";

    } else if (javascriptRandomValue == 3 && javascriptInputAnswer !== __WEBPACK_IMPORTED_MODULE_4__questionsAndAnswers_javascriptAnswers__["a" /* javascriptAnswerArr */][3].A3) {
        javascriptDisplayAnswer.innerHTML = `
    <textarea name="text" class="answer_textarea" id="input">
var a = 5;
var b = 10;
var c = "I am a";
a = a + 1;
b = b + 5;
c = c + " String!";
        </textarea>`;
        javascriptIncorrectValue.innerHTML = "Incorrect..";
        javascriptNextButton.innerHTML = `<button class="nextButton javascriptColor1" onclick=javascriptBtn()>Next</button>`;
        javascriptRemoveValue.innerHTML = "";
        


    } else if (javascriptRandomValue == 4 && javascriptInputAnswer == __WEBPACK_IMPORTED_MODULE_4__questionsAndAnswers_javascriptAnswers__["a" /* javascriptAnswerArr */][4].A4) {
        javascriptCorrectValue.innerHTML = "Correct..";
        javascriptDisplayAnswer.innerHTML = `
        <textarea name="text" class="answer_textarea" id="input">Good Job :) </textarea>`;
        javascriptNextButton.innerHTML = `<button class="nextButton javascriptColor1" onclick=javascriptBtn()>Next</button>`;
        javascriptRemoveValue.innerHTML = "";

    } else if (javascriptRandomValue == 4 && javascriptInputAnswer !== __WEBPACK_IMPORTED_MODULE_4__questionsAndAnswers_javascriptAnswers__["a" /* javascriptAnswerArr */][4].A4) {
        javascriptDisplayAnswer.innerHTML = `
    <textarea name="text" class="answer_textarea" id="input">
var studlyCapVar ;
var properCamelCase;
var titleCaseOver;

var studlyCapVar = 10;
var properCamelCase = "A String";
var titleCaseOver = 9000;
        </textarea>`;
        javascriptIncorrectValue.innerHTML = "Incorrect..";
        javascriptNextButton.innerHTML = `<button class="nextButton javascriptColor1" onclick=javascriptBtn()>Next</button>`;
        javascriptRemoveValue.innerHTML = "";



    } else if (javascriptRandomValue == 5 && javascriptInputAnswer == __WEBPACK_IMPORTED_MODULE_4__questionsAndAnswers_javascriptAnswers__["a" /* javascriptAnswerArr */][5].A5) {
        javascriptCorrectValue.innerHTML = "Correct..";
        javascriptDisplayAnswer.innerHTML = `
        <textarea name="text" class="answer_textarea" id="input">Good Job :) </textarea>`;
        javascriptNextButton.innerHTML = `<button class="nextButton javascriptColor1" onclick=javascriptBtn()>Next</button>`;
        javascriptRemoveValue.innerHTML = "";

    } else if (javascriptRandomValue == 5 && javascriptInputAnswer !== __WEBPACK_IMPORTED_MODULE_4__questionsAndAnswers_javascriptAnswers__["a" /* javascriptAnswerArr */][5].A5) {
        javascriptDisplayAnswer.innerHTML = `
    <textarea name="text" class="answer_textarea" id="input">
var sum = 10 + 10;
        </textarea>`;
        javascriptIncorrectValue.innerHTML = "Incorrect..";
        javascriptNextButton.innerHTML = `<button class="nextButton javascriptColor1" onclick=javascriptBtn()>Next</button>`;
        javascriptRemoveValue.innerHTML = "";



    } else if (javascriptRandomValue == 6 && javascriptInputAnswer == __WEBPACK_IMPORTED_MODULE_4__questionsAndAnswers_javascriptAnswers__["a" /* javascriptAnswerArr */][6].A6) {
        javascriptCorrectValue.innerHTML = "Correct..";
        javascriptDisplayAnswer.innerHTML = `
        <textarea name="text" class="answer_textarea" id="input">Good Job :) </textarea>`;
        javascriptNextButton.innerHTML = `<button class="nextButton javascriptColor1" onclick=javascriptBtn()>Next</button>`;
        javascriptRemoveValue.innerHTML = "";

    } else if (javascriptRandomValue == 6 && javascriptInputAnswer !== __WEBPACK_IMPORTED_MODULE_4__questionsAndAnswers_javascriptAnswers__["a" /* javascriptAnswerArr */][6].A6) {
        javascriptDisplayAnswer.innerHTML = `
    <textarea name="text" class="answer_textarea" id="input">
var diffrence = 45 - 33;
        </textarea>`;
        javascriptIncorrectValue.innerHTML = "Incorrect..";
        javascriptNextButton.innerHTML = `<button class="nextButton javascriptColor1" onclick=javascriptBtn()>Next</button>`;
        javascriptRemoveValue.innerHTML = "";



    } else if (javascriptRandomValue == 7 && javascriptInputAnswer == __WEBPACK_IMPORTED_MODULE_4__questionsAndAnswers_javascriptAnswers__["a" /* javascriptAnswerArr */][7].A7) {
        javascriptCorrectValue.innerHTML = "Correct..";
        javascriptDisplayAnswer.innerHTML = `
        <textarea name="text" class="answer_textarea" id="input">Good Job :) </textarea>`;
        javascriptNextButton.innerHTML = `<button class="nextButton javascriptColor1" onclick=javascriptBtn()>Next</button>`;
        javascriptRemoveValue.innerHTML = "";

    } else if (javascriptRandomValue == 7 && javascriptInputAnswer !== __WEBPACK_IMPORTED_MODULE_4__questionsAndAnswers_javascriptAnswers__["a" /* javascriptAnswerArr */][7].A7) {
        javascriptDisplayAnswer.innerHTML = `
    <textarea name="text" class="answer_textarea" id="input">
var  product = 8 * 10;
        </textarea>`;
        javascriptIncorrectValue.innerHTML = "Incorrect..";
        javascriptNextButton.innerHTML = `<button class="nextButton javascriptColor1" onclick=javascriptBtn()>Next</button>`;
        javascriptRemoveValue.innerHTML = "";



    } else if (javascriptRandomValue == 8 && javascriptInputAnswer == __WEBPACK_IMPORTED_MODULE_4__questionsAndAnswers_javascriptAnswers__["a" /* javascriptAnswerArr */][8].A8) {
        javascriptCorrectValue.innerHTML = "Correct..";
        javascriptDisplayAnswer.innerHTML = `
        <textarea name="text" class="answer_textarea" id="input">Good Job :) </textarea>`;
        javascriptNextButton.innerHTML = `<button class="nextButton javascriptColor1" onclick=javascriptBtn()>Next</button>`;
        javascriptRemoveValue.innerHTML = "";

    } else if (javascriptRandomValue == 8 && javascriptInputAnswer !== __WEBPACK_IMPORTED_MODULE_4__questionsAndAnswers_javascriptAnswers__["a" /* javascriptAnswerArr */][8].A8) {
        javascriptDisplayAnswer.innerHTML = `
    <textarea name="text" class="answer_textarea" id="input">
var quotient = 66 / 33;
        </textarea>`;
        javascriptIncorrectValue.innerHTML = "Incorrect..";
        javascriptNextButton.innerHTML = `<button class="nextButton javascriptColor1" onclick=javascriptBtn()>Next</button>`;
        javascriptRemoveValue.innerHTML = "";



    } else if (javascriptRandomValue == 9 && javascriptInputAnswer == __WEBPACK_IMPORTED_MODULE_4__questionsAndAnswers_javascriptAnswers__["a" /* javascriptAnswerArr */][9].A9) {
        javascriptCorrectValue.innerHTML = "Correct..";
        javascriptDisplayAnswer.innerHTML = `
        <textarea name="text" class="answer_textarea" id="input">Good Job :) </textarea>`;
        javascriptNextButton.innerHTML = `<button class="nextButton javascriptColor1" onclick=javascriptBtn()>Next</button>`;
        javascriptRemoveValue.innerHTML = "";

    } else if (javascriptRandomValue == 9 && javascriptInputAnswer !== __WEBPACK_IMPORTED_MODULE_4__questionsAndAnswers_javascriptAnswers__["a" /* javascriptAnswerArr */][9].A9) {
        javascriptDisplayAnswer.innerHTML = `
    <textarea name="text" class="answer_textarea" id="input">
var myVar = 87;
myVar++;
        </textarea>`;
        javascriptIncorrectValue.innerHTML = "Incorrect..";
        javascriptNextButton.innerHTML = `<button class="nextButton javascriptColor1" onclick=javascriptBtn()>Next</button>`;
        javascriptRemoveValue.innerHTML = "";



    } else if (javascriptRandomValue == 10 && javascriptInputAnswer == __WEBPACK_IMPORTED_MODULE_4__questionsAndAnswers_javascriptAnswers__["a" /* javascriptAnswerArr */][10].A10) {
        javascriptCorrectValue.innerHTML = "Correct..";
        javascriptDisplayAnswer.innerHTML = `
        <textarea name="text" class="answer_textarea" id="input">Good Job :) </textarea>`;
        javascriptNextButton.innerHTML = `<button class="nextButton javascriptColor1" onclick=javascriptBtn()>Next</button>`;
        javascriptRemoveValue.innerHTML = "";

    } else if (javascriptRandomValue == 10 && javascriptInputAnswer !== __WEBPACK_IMPORTED_MODULE_4__questionsAndAnswers_javascriptAnswers__["a" /* javascriptAnswerArr */][10].A10) {
        javascriptDisplayAnswer.innerHTML = `
    <textarea name="text" class="answer_textarea" id="input">
var myVar = 11;
myVar--;
        </textarea>`;
        javascriptIncorrectValue.innerHTML = "Incorrect..";
        javascriptNextButton.innerHTML = `<button class="nextButton javascriptColor1" onclick=javascriptBtn()>Next</button>`;
        javascriptRemoveValue.innerHTML = "";



    } else if (javascriptRandomValue == 11 && javascriptInputAnswer == __WEBPACK_IMPORTED_MODULE_4__questionsAndAnswers_javascriptAnswers__["a" /* javascriptAnswerArr */][11].A11) {
        javascriptCorrectValue.innerHTML = "Correct..";
        javascriptDisplayAnswer.innerHTML = `
        <textarea name="text" class="answer_textarea" id="input">Good Job :) </textarea>`;
        javascriptNextButton.innerHTML = `<button class="nextButton javascriptColor1" onclick=javascriptBtn()>Next</button>`;
        javascriptRemoveValue.innerHTML = "";

    } else if (javascriptRandomValue == 11 && javascriptInputAnswer !== __WEBPACK_IMPORTED_MODULE_4__questionsAndAnswers_javascriptAnswers__["a" /* javascriptAnswerArr */][11].A11) {
        javascriptDisplayAnswer.innerHTML = `
    <textarea name="text" class="answer_textarea" id="input">
var myDecimal = 5.7;
        </textarea>`;
        javascriptIncorrectValue.innerHTML = "Incorrect..";
        javascriptNextButton.innerHTML = `<button class="nextButton javascriptColor1" onclick=javascriptBtn()>Next</button>`;
        javascriptRemoveValue.innerHTML = "";



    } else if (javascriptRandomValue == 12 && javascriptInputAnswer == __WEBPACK_IMPORTED_MODULE_4__questionsAndAnswers_javascriptAnswers__["a" /* javascriptAnswerArr */][12].A12) {
        javascriptCorrectValue.innerHTML = "Correct..";
        javascriptDisplayAnswer.innerHTML = `
        <textarea name="text" class="answer_textarea" id="input">Good Job :) </textarea>`;
        javascriptNextButton.innerHTML = `<button class="nextButton javascriptColor1" onclick=javascriptBtn()>Next</button>`;
        javascriptRemoveValue.innerHTML = "";

    } else if (javascriptRandomValue == 12 && javascriptInputAnswer !== __WEBPACK_IMPORTED_MODULE_4__questionsAndAnswers_javascriptAnswers__["a" /* javascriptAnswerArr */][12].A12) {
        javascriptDisplayAnswer.innerHTML = `
    <textarea name="text" class="answer_textarea" id="input">
var product = 2.0 * 2.5;
        </textarea>`;
        javascriptIncorrectValue.innerHTML = "Incorrect..";
        javascriptNextButton.innerHTML = `<button class="nextButton javascriptColor1" onclick=javascriptBtn()>Next</button>`;
        javascriptRemoveValue.innerHTML = "";



    } else if (javascriptRandomValue == 13 && javascriptInputAnswer == __WEBPACK_IMPORTED_MODULE_4__questionsAndAnswers_javascriptAnswers__["a" /* javascriptAnswerArr */][13].A13) {
        javascriptCorrectValue.innerHTML = "Correct..";
        javascriptDisplayAnswer.innerHTML = `
        <textarea name="text" class="answer_textarea" id="input">Good Job :) </textarea>`;
        javascriptNextButton.innerHTML = `<button class="nextButton javascriptColor1" onclick=javascriptBtn()>Next</button>`;
        javascriptRemoveValue.innerHTML = "";

    } else if (javascriptRandomValue == 13 && javascriptInputAnswer !== __WEBPACK_IMPORTED_MODULE_4__questionsAndAnswers_javascriptAnswers__["a" /* javascriptAnswerArr */][13].A13) {
        javascriptDisplayAnswer.innerHTML = `
    <textarea name="text" class="answer_textarea" id="input">
var quotient = 4.4 / 2.0;
        </textarea>`;
        javascriptIncorrectValue.innerHTML = "Incorrect..";
        javascriptNextButton.innerHTML = `<button class="nextButton javascriptColor1" onclick=javascriptBtn()>Next</button>`;
        javascriptRemoveValue.innerHTML = "";



    } else if (javascriptRandomValue == 14 && javascriptInputAnswer == __WEBPACK_IMPORTED_MODULE_4__questionsAndAnswers_javascriptAnswers__["a" /* javascriptAnswerArr */][14].A14) {
        javascriptCorrectValue.innerHTML = "Correct..";
        javascriptDisplayAnswer.innerHTML = `
        <textarea name="text" class="answer_textarea" id="input">Good Job :) </textarea>`;
        javascriptNextButton.innerHTML = `<button class="nextButton javascriptColor1" onclick=javascriptBtn()>Next</button>`;
        javascriptRemoveValue.innerHTML = "";

    } else if (javascriptRandomValue == 14 && javascriptInputAnswer !== __WEBPACK_IMPORTED_MODULE_4__questionsAndAnswers_javascriptAnswers__["a" /* javascriptAnswerArr */][14].A14) {
        javascriptDisplayAnswer.innerHTML = `
    <textarea name="text" class="answer_textarea" id="input">
var remainder = 11 % 3;
        </textarea>`;
        javascriptIncorrectValue.innerHTML = "Incorrect..";
        javascriptNextButton.innerHTML = `<button class="nextButton javascriptColor1" onclick=javascriptBtn()>Next</button>`;
        javascriptRemoveValue.innerHTML = "";



    } else if (javascriptRandomValue == 15 && javascriptInputAnswer == __WEBPACK_IMPORTED_MODULE_4__questionsAndAnswers_javascriptAnswers__["a" /* javascriptAnswerArr */][15].A15) {
        javascriptCorrectValue.innerHTML = "Correct..";
        javascriptDisplayAnswer.innerHTML = `
        <textarea name="text" class="answer_textarea" id="input">Good Job :) </textarea>`;
        javascriptNextButton.innerHTML = `<button class="nextButton javascriptColor1" onclick=javascriptBtn()>Next</button>`;
        javascriptRemoveValue.innerHTML = "";

    } else if (javascriptRandomValue == 15 && javascriptInputAnswer !== __WEBPACK_IMPORTED_MODULE_4__questionsAndAnswers_javascriptAnswers__["a" /* javascriptAnswerArr */][15].A15) {
        javascriptDisplayAnswer.innerHTML = `
    <textarea name="text" class="answer_textarea" id="input">
var a = 3;
var b = 17;
var c = 12;

a +=12;
b += 9;
c +=7;
        </textarea>`;
        javascriptIncorrectValue.innerHTML = "Incorrect..";
        javascriptNextButton.innerHTML = `<button class="nextButton javascriptColor1" onclick=javascriptBtn()>Next</button>`;
        javascriptRemoveValue.innerHTML = "";



    } else if (javascriptRandomValue == 16 && javascriptInputAnswer == __WEBPACK_IMPORTED_MODULE_4__questionsAndAnswers_javascriptAnswers__["a" /* javascriptAnswerArr */][16].A16) {
        javascriptCorrectValue.innerHTML = "Correct..";
        javascriptDisplayAnswer.innerHTML = `
        <textarea name="text" class="answer_textarea" id="input">Good Job :) </textarea>`;
        javascriptNextButton.innerHTML = `<button class="nextButton javascriptColor1" onclick=javascriptBtn()>Next</button>`;
        javascriptRemoveValue.innerHTML = "";

    } else if (javascriptRandomValue == 16 && javascriptInputAnswer !== __WEBPACK_IMPORTED_MODULE_4__questionsAndAnswers_javascriptAnswers__["a" /* javascriptAnswerArr */][16].A16) {
        javascriptDisplayAnswer.innerHTML = `
    <textarea name="text" class="answer_textarea" id="input">
var a = 11;
var b = 9;
var c = 3;

a -= 6;
b -= 15;
c -= 1;
        </textarea>`;
        javascriptIncorrectValue.innerHTML = "Incorrect..";
        javascriptNextButton.innerHTML = `<button class="nextButton javascriptColor1" onclick=javascriptBtn()>Next</button>`;
        javascriptRemoveValue.innerHTML = "";



    } else if (javascriptRandomValue == 17 && javascriptInputAnswer == __WEBPACK_IMPORTED_MODULE_4__questionsAndAnswers_javascriptAnswers__["a" /* javascriptAnswerArr */][17].A17) {
        javascriptCorrectValue.innerHTML = "Correct..";
        javascriptDisplayAnswer.innerHTML = `
        <textarea name="text" class="answer_textarea" id="input">Good Job :) </textarea>`;
        javascriptNextButton.innerHTML = `<button class="nextButton javascriptColor1" onclick=javascriptBtn()>Next</button>`;
        javascriptRemoveValue.innerHTML = "";

    } else if (javascriptRandomValue == 17 && javascriptInputAnswer !== __WEBPACK_IMPORTED_MODULE_4__questionsAndAnswers_javascriptAnswers__["a" /* javascriptAnswerArr */][17].A17) {
        javascriptDisplayAnswer.innerHTML = `
    <textarea name="text" class="answer_textarea" id="input">
var a = 5;
var b = 12;
var c = 4.6;

a *=5;
b *= 3;
c *=10;
        </textarea>`;
        javascriptIncorrectValue.innerHTML = "Incorrect..";
        javascriptNextButton.innerHTML = `<button class="nextButton javascriptColor1" onclick=javascriptBtn()>Next</button>`;
        javascriptRemoveValue.innerHTML = "";



    } else if (javascriptRandomValue == 18 && javascriptInputAnswer == __WEBPACK_IMPORTED_MODULE_4__questionsAndAnswers_javascriptAnswers__["a" /* javascriptAnswerArr */][18].A18) {
        javascriptCorrectValue.innerHTML = "Correct..";
        javascriptDisplayAnswer.innerHTML = `
        <textarea name="text" class="answer_textarea" id="input">Good Job :) </textarea>`;
        javascriptNextButton.innerHTML = `<button class="nextButton javascriptColor1" onclick=javascriptBtn()>Next</button>`;
        javascriptRemoveValue.innerHTML = "";

    } else if (javascriptRandomValue == 18 && javascriptInputAnswer !== __WEBPACK_IMPORTED_MODULE_4__questionsAndAnswers_javascriptAnswers__["a" /* javascriptAnswerArr */][18].A18) {
        javascriptDisplayAnswer.innerHTML = `
    <textarea name="text" class="answer_textarea" id="input">
var a = 48;
var b = 108;
var c = 33;

a /=12;
b /=4;
c /=11;
        </textarea>`;
        javascriptIncorrectValue.innerHTML = "Incorrect..";
        javascriptNextButton.innerHTML = `<button class="nextButton javascriptColor1" onclick=javascriptBtn()>Next</button>`;
        javascriptRemoveValue.innerHTML = "";



    } else if (javascriptRandomValue == 19 && javascriptInputAnswer == __WEBPACK_IMPORTED_MODULE_4__questionsAndAnswers_javascriptAnswers__["a" /* javascriptAnswerArr */][19].A19) {
        javascriptCorrectValue.innerHTML = "Correct..";
        javascriptDisplayAnswer.innerHTML = `
        <textarea name="text" class="answer_textarea" id="input">Good Job :) </textarea>`;
        javascriptNextButton.innerHTML = `<button class="nextButton javascriptColor1" onclick=javascriptBtn()>Next</button>`;
        javascriptRemoveValue.innerHTML = "";

    } else if (javascriptRandomValue == 19 && javascriptInputAnswer !== __WEBPACK_IMPORTED_MODULE_4__questionsAndAnswers_javascriptAnswers__["a" /* javascriptAnswerArr */][19].A19) {
        javascriptDisplayAnswer.innerHTML = `
    <textarea name="text" class="answer_textarea" id="input">
var myFirstName = "first name"; 
var myLastName = "last name";
          </textarea>`;
        javascriptIncorrectValue.innerHTML = "Incorrect..";
        javascriptNextButton.innerHTML = `<button class="nextButton javascriptColor1" onclick=javascriptBtn()>Next</button>`;
        javascriptRemoveValue.innerHTML = "";



    } else if (javascriptRandomValue == 20 && javascriptInputAnswer == __WEBPACK_IMPORTED_MODULE_4__questionsAndAnswers_javascriptAnswers__["a" /* javascriptAnswerArr */][20].A20) {
        javascriptCorrectValue.innerHTML = "Correct..";
        javascriptDisplayAnswer.innerHTML = `
        <textarea name="text" class="answer_textarea" id="input">Good Job :) </textarea>`;
        javascriptNextButton.innerHTML = `<button class="nextButton javascriptColor1" onclick=javascriptBtn()>Next</button>`;
        javascriptRemoveValue.innerHTML = "";

    } else if (javascriptRandomValue == 20 && javascriptInputAnswer !== __WEBPACK_IMPORTED_MODULE_4__questionsAndAnswers_javascriptAnswers__["a" /* javascriptAnswerArr */][20].A20) {
        javascriptDisplayAnswer.innerHTML = `
    <textarea name="text" class="answer_textarea" id="input">
var myStr = "I am a \"double quoted\" string inside \"double quotes\".";
        </textarea>`;
        javascriptIncorrectValue.innerHTML = "Incorrect..";
        javascriptNextButton.innerHTML = `<button class="nextButton javascriptColor1" onclick=javascriptBtn()>Next</button>`;
        javascriptRemoveValue.innerHTML = "";



    } else if (javascriptRandomValue == 21 && javascriptInputAnswer == __WEBPACK_IMPORTED_MODULE_4__questionsAndAnswers_javascriptAnswers__["a" /* javascriptAnswerArr */][21].A21) {
        javascriptCorrectValue.innerHTML = "Correct..";
        javascriptDisplayAnswer.innerHTML = `
        <textarea name="text" class="answer_textarea" id="input">Good Job :) </textarea>`;
        javascriptNextButton.innerHTML = `<button class="nextButton javascriptColor1" onclick=javascriptBtn()>Next</button>`;
        javascriptRemoveValue.innerHTML = "";

    } else if (javascriptRandomValue == 21 && javascriptInputAnswer !== __WEBPACK_IMPORTED_MODULE_4__questionsAndAnswers_javascriptAnswers__["a" /* javascriptAnswerArr */][21].A21) {
        javascriptDisplayAnswer.innerHTML = `
    <textarea name="text" class="answer_textarea" id="input">
var myStr = '<a href="http://www.example.com" target="_blank">Link</a>';
        </textarea>`;
        javascriptIncorrectValue.innerHTML = "Incorrect..";
        javascriptNextButton.innerHTML = `<button class="nextButton javascriptColor1" onclick=javascriptBtn()>Next</button>`;
        javascriptRemoveValue.innerHTML = "";



    } else if (javascriptRandomValue == 22 && javascriptInputAnswer == __WEBPACK_IMPORTED_MODULE_4__questionsAndAnswers_javascriptAnswers__["a" /* javascriptAnswerArr */][22].A22) {
        javascriptCorrectValue.innerHTML = "Correct..";
        javascriptDisplayAnswer.innerHTML = `
        <textarea name="text" class="answer_textarea" id="input">Good Job :) </textarea>`;
        javascriptNextButton.innerHTML = `<button class="nextButton javascriptColor1" onclick=javascriptBtn()>Next</button>`;
        javascriptRemoveValue.innerHTML = "";

    } else if (javascriptRandomValue == 22 && javascriptInputAnswer !== __WEBPACK_IMPORTED_MODULE_4__questionsAndAnswers_javascriptAnswers__["a" /* javascriptAnswerArr */][22].A22) {
        javascriptDisplayAnswer.innerHTML = `
    <textarea name="text" class="answer_textarea" id="input">
var myStr = "\'FirstLine\n\t\SecondLine\nThirdLine";
        </textarea>`;
        javascriptIncorrectValue.innerHTML = "Incorrect..";
        javascriptNextButton.innerHTML = `<button class="nextButton javascriptColor1" onclick=javascriptBtn()>Next</button>`;
        javascriptRemoveValue.innerHTML = "";



    } else if (javascriptRandomValue == 23 && javascriptInputAnswer == __WEBPACK_IMPORTED_MODULE_4__questionsAndAnswers_javascriptAnswers__["a" /* javascriptAnswerArr */][23].A23) {
        javascriptCorrectValue.innerHTML = "Correct..";
        javascriptDisplayAnswer.innerHTML = `
        <textarea name="text" class="answer_textarea" id="input">Good Job :) </textarea>`;
        javascriptNextButton.innerHTML = `<button class="nextButton javascriptColor1" onclick=javascriptBtn()>Next</button>`;
        javascriptRemoveValue.innerHTML = "";

    } else if (javascriptRandomValue == 23 && javascriptInputAnswer !== __WEBPACK_IMPORTED_MODULE_4__questionsAndAnswers_javascriptAnswers__["a" /* javascriptAnswerArr */][23].A23) {
        javascriptDisplayAnswer.innerHTML = `

    <textarea name="text" class="answer_textarea" id="input">
var myStr="This is the start. " + "This is the end.";
              </textarea>`;
        javascriptIncorrectValue.innerHTML = "Incorrect..";
        javascriptNextButton.innerHTML = `<button class="nextButton javascriptColor1" onclick=javascriptBtn()>Next</button>`;
        javascriptRemoveValue.innerHTML = "";



    } else if (javascriptRandomValue == 24 && javascriptInputAnswer == __WEBPACK_IMPORTED_MODULE_4__questionsAndAnswers_javascriptAnswers__["a" /* javascriptAnswerArr */][24].A24) {
        javascriptCorrectValue.innerHTML = "Correct..";
        javascriptDisplayAnswer.innerHTML = `
        <textarea name="text" class="answer_textarea" id="input">Good Job :) </textarea>`;
        javascriptNextButton.innerHTML = `<button class="nextButton javascriptColor1" onclick=javascriptBtn()>Next</button>`;
        javascriptRemoveValue.innerHTML = "";

    } else if (javascriptRandomValue == 24 && javascriptInputAnswer !== __WEBPACK_IMPORTED_MODULE_4__questionsAndAnswers_javascriptAnswers__["a" /* javascriptAnswerArr */][24].A24) {
        javascriptDisplayAnswer.innerHTML = `
    <textarea name="text" class="answer_textarea" id="input">
var myStr = "This is the first sentence. ";
myStr += "This is the second sentence.";
        </textarea>`;
        javascriptIncorrectValue.innerHTML = "Incorrect..";
        javascriptNextButton.innerHTML = `<button class="nextButton javascriptColor1" onclick=javascriptBtn()>Next</button>`;
        javascriptRemoveValue.innerHTML = "";



    } else if (javascriptRandomValue == 25 && javascriptInputAnswer == __WEBPACK_IMPORTED_MODULE_4__questionsAndAnswers_javascriptAnswers__["a" /* javascriptAnswerArr */][25].A25) {
        javascriptCorrectValue.innerHTML = "Correct..";
        javascriptDisplayAnswer.innerHTML = `
        <textarea name="text" class="answer_textarea" id="input">Good Job :) </textarea>`;
        javascriptNextButton.innerHTML = `<button class="nextButton javascriptColor1" onclick=javascriptBtn()>Next</button>`;
        javascriptRemoveValue.innerHTML = "";

    } else if (javascriptRandomValue == 25 && javascriptInputAnswer !== __WEBPACK_IMPORTED_MODULE_4__questionsAndAnswers_javascriptAnswers__["a" /* javascriptAnswerArr */][25].A25) {
        javascriptDisplayAnswer.innerHTML = `
    <textarea name="text" class="answer_textarea" id="input">
var myName  = "your name";
var myStr = "My name is " + myName +  " and I am well!";
        </textarea>`;
        javascriptIncorrectValue.innerHTML = "Incorrect..";
        javascriptNextButton.innerHTML = `<button class="nextButton javascriptColor1" onclick=javascriptBtn()>Next</button>`;
        javascriptRemoveValue.innerHTML = "";



    } else if (javascriptRandomValue == 26 && javascriptInputAnswer == __WEBPACK_IMPORTED_MODULE_4__questionsAndAnswers_javascriptAnswers__["a" /* javascriptAnswerArr */][26].A26) {
        javascriptCorrectValue.innerHTML = "Correct..";
        javascriptDisplayAnswer.innerHTML = `
        <textarea name="text" class="answer_textarea" id="input">Good Job :) </textarea>`;
        javascriptNextButton.innerHTML = `<button class="nextButton javascriptColor1" onclick=javascriptBtn()>Next</button>`;
        javascriptRemoveValue.innerHTML = "";

    } else if (javascriptRandomValue == 26 && javascriptInputAnswer !== __WEBPACK_IMPORTED_MODULE_4__questionsAndAnswers_javascriptAnswers__["a" /* javascriptAnswerArr */][26].A26) {
        javascriptDisplayAnswer.innerHTML = `
    <textarea name="text" class="answer_textarea" id="input">
var someAdjective = "awesome!";
var myStr = "Learning to code is ";
myStr +=someAdjective;
          </textarea>`;
        javascriptIncorrectValue.innerHTML = "Incorrect..";
        javascriptNextButton.innerHTML = `<button class="nextButton javascriptColor1" onclick=javascriptBtn()>Next</button>`;
        javascriptRemoveValue.innerHTML = "";



    } else if (javascriptRandomValue == 27 && javascriptInputAnswer == __WEBPACK_IMPORTED_MODULE_4__questionsAndAnswers_javascriptAnswers__["a" /* javascriptAnswerArr */][27].A27) {
        javascriptCorrectValue.innerHTML = "Correct..";
        javascriptDisplayAnswer.innerHTML = `
        <textarea name="text" class="answer_textarea" id="input">Good Job :) </textarea>`;
        javascriptNextButton.innerHTML = `<button class="nextButton javascriptColor1" onclick=javascriptBtn()>Next</button>`;
        javascriptRemoveValue.innerHTML = "";

    } else if (javascriptRandomValue == 27 && javascriptInputAnswer !== __WEBPACK_IMPORTED_MODULE_4__questionsAndAnswers_javascriptAnswers__["a" /* javascriptAnswerArr */][27].A27) {
        javascriptDisplayAnswer.innerHTML = `
    <textarea name="text" class="answer_textarea" id="input">
var lastNameLength = 0;
var lastName = "Lovelace";
lastNameLength = lastName.length;
        </textarea>`;
        javascriptIncorrectValue.innerHTML = "Incorrect..";
        javascriptNextButton.innerHTML = `<button class="nextButton javascriptColor1" onclick=javascriptBtn()>Next</button>`;
        javascriptRemoveValue.innerHTML = "";



    } else if (javascriptRandomValue == 28 && javascriptInputAnswer == __WEBPACK_IMPORTED_MODULE_4__questionsAndAnswers_javascriptAnswers__["a" /* javascriptAnswerArr */][28].A28) {
        javascriptCorrectValue.innerHTML = "Correct..";
        javascriptDisplayAnswer.innerHTML = `
        <textarea name="text" class="answer_textarea" id="input">Good Job :) </textarea>`;
        javascriptNextButton.innerHTML = `<button class="nextButton javascriptColor1" onclick=javascriptBtn()>Next</button>`;
        javascriptRemoveValue.innerHTML = "";

    } else if (javascriptRandomValue == 28 && javascriptInputAnswer !== __WEBPACK_IMPORTED_MODULE_4__questionsAndAnswers_javascriptAnswers__["a" /* javascriptAnswerArr */][28].A28) {
        javascriptDisplayAnswer.innerHTML = `
    <textarea name="text" class="answer_textarea" id="input">
var firstLetterOfLastName = "";
var lastName = "Lovelace";
firstLetterOfLastName = lastName[0];
        </textarea>`;
        javascriptIncorrectValue.innerHTML = "Incorrect..";
        javascriptNextButton.innerHTML = `<button class="nextButton javascriptColor1" onclick=javascriptBtn()>Next</button>`;
        javascriptRemoveValue.innerHTML = "";



    } else if (javascriptRandomValue == 29 && javascriptInputAnswer == __WEBPACK_IMPORTED_MODULE_4__questionsAndAnswers_javascriptAnswers__["a" /* javascriptAnswerArr */][29].A29) {
        javascriptCorrectValue.innerHTML = "Correct..";
        javascriptDisplayAnswer.innerHTML = `
        <textarea name="text" class="answer_textarea" id="input">Good Job :) </textarea>`;
        javascriptNextButton.innerHTML = `<button class="nextButton javascriptColor1" onclick=javascriptBtn()>Next</button>`;
        javascriptRemoveValue.innerHTML = "";

    } else if (javascriptRandomValue == 29 && javascriptInputAnswer !== __WEBPACK_IMPORTED_MODULE_4__questionsAndAnswers_javascriptAnswers__["a" /* javascriptAnswerArr */][29].A29) {
        javascriptDisplayAnswer.innerHTML = `
    <textarea name="text" class="answer_textarea" id="input">
var myStr = "Jello World";
myStr = "Hello World";
        </textarea>`;
        javascriptIncorrectValue.innerHTML = "Incorrect..";
        javascriptNextButton.innerHTML = `<button class="nextButton javascriptColor1" onclick=javascriptBtn()>Next</button>`;
        javascriptRemoveValue.innerHTML = "";



    } else if (javascriptRandomValue == 30 && javascriptInputAnswer == __WEBPACK_IMPORTED_MODULE_4__questionsAndAnswers_javascriptAnswers__["a" /* javascriptAnswerArr */][30].A30) {
        javascriptCorrectValue.innerHTML = "Correct..";
        javascriptDisplayAnswer.innerHTML = `
        <textarea name="text" class="answer_textarea" id="input">Good Job :) </textarea>`;
        javascriptNextButton.innerHTML = `<button class="nextButton javascriptColor1" onclick=javascriptBtn()>Next</button>`;
        javascriptRemoveValue.innerHTML = "";

    } else if (javascriptRandomValue == 30 && javascriptInputAnswer !== __WEBPACK_IMPORTED_MODULE_4__questionsAndAnswers_javascriptAnswers__["a" /* javascriptAnswerArr */][30].A30) {
        javascriptDisplayAnswer.innerHTML = `
    <textarea name="text" class="answer_textarea" id="input">
var lastName = "Lovelace";
var thirdLetterOfLastName = lastName[2];
        </textarea>`;
        javascriptIncorrectValue.innerHTML = "Incorrect..";
        javascriptNextButton.innerHTML = `<button class="nextButton javascriptColor1" onclick=javascriptBtn()>Next</button>`;
        javascriptRemoveValue.innerHTML = "";



    } else if (javascriptRandomValue == 31 && javascriptInputAnswer == __WEBPACK_IMPORTED_MODULE_4__questionsAndAnswers_javascriptAnswers__["a" /* javascriptAnswerArr */][31].A31) {
        javascriptCorrectValue.innerHTML = "Correct..";
        javascriptDisplayAnswer.innerHTML = `
        <textarea name="text" class="answer_textarea" id="input">Good Job :) </textarea>`;
        javascriptNextButton.innerHTML = `<button class="nextButton javascriptColor1" onclick=javascriptBtn()>Next</button>`;
        javascriptRemoveValue.innerHTML = "";

    } else if (javascriptRandomValue == 31 && javascriptInputAnswer !== __WEBPACK_IMPORTED_MODULE_4__questionsAndAnswers_javascriptAnswers__["a" /* javascriptAnswerArr */][31].A31) {
        javascriptDisplayAnswer.innerHTML = `
    <textarea name="text" class="answer_textarea" id="input">
var lastName = "Lovelace";
var lastLetterOfLastName = lastName[lastName.length - 1];
        </textarea>`;
        javascriptIncorrectValue.innerHTML = "Incorrect..";
        javascriptNextButton.innerHTML = `<button class="nextButton javascriptColor1" onclick=javascriptBtn()>Next</button>`;
        javascriptRemoveValue.innerHTML = "";



    } else if (javascriptRandomValue == 32 && javascriptInputAnswer == __WEBPACK_IMPORTED_MODULE_4__questionsAndAnswers_javascriptAnswers__["a" /* javascriptAnswerArr */][32].A32) {
        javascriptCorrectValue.innerHTML = "Correct..";
        javascriptDisplayAnswer.innerHTML = `
        <textarea name="text" class="answer_textarea" id="input">Good Job :) </textarea>`;
        javascriptNextButton.innerHTML = `<button class="nextButton javascriptColor1" onclick=javascriptBtn()>Next</button>`;
        javascriptRemoveValue.innerHTML = "";

    } else if (javascriptRandomValue == 32 && javascriptInputAnswer !== __WEBPACK_IMPORTED_MODULE_4__questionsAndAnswers_javascriptAnswers__["a" /* javascriptAnswerArr */][32].A32) {
        javascriptDisplayAnswer.innerHTML = `
    <textarea name="text" class="answer_textarea" id="input">
var lastName = "Lovelace";
var secondToLastLetterOfLastName = lastName[lastName.length - 2];
        </textarea>`;
        javascriptIncorrectValue.innerHTML = "Incorrect..";
        javascriptNextButton.innerHTML = `<button class="nextButton javascriptColor1" onclick=javascriptBtn()>Next</button>`;
        javascriptRemoveValue.innerHTML = "";



    } else if (javascriptRandomValue == 33 && javascriptInputAnswer == __WEBPACK_IMPORTED_MODULE_4__questionsAndAnswers_javascriptAnswers__["a" /* javascriptAnswerArr */][33].A33) {
        javascriptCorrectValue.innerHTML = "Correct..";
        javascriptDisplayAnswer.innerHTML = `
        <textarea name="text" class="answer_textarea" id="input">Good Job :) </textarea>`;
        javascriptNextButton.innerHTML = `<button class="nextButton javascriptColor1" onclick=javascriptBtn()>Next</button>`;
        javascriptRemoveValue.innerHTML = "";

    } else if (javascriptRandomValue == 33 && javascriptInputAnswer !== __WEBPACK_IMPORTED_MODULE_4__questionsAndAnswers_javascriptAnswers__["a" /* javascriptAnswerArr */][33].A33) {
        javascriptDisplayAnswer.innerHTML = `
    <textarea name="text" class="answer_textarea" id="input">
function wordBlanks(myNoun, myAdjective, myVerb, myAdverb) {
    var result = "";
    result+= "My "+myAdjective+" "+myNoun+" "+myVerb+" very "+myAdverb+".";
    return result;
}
wordBlanks("dog", "big", "ran", "quickly");</textarea>`;
        javascriptIncorrectValue.innerHTML = "Incorrect..";
        javascriptNextButton.innerHTML = `<button class="nextButton javascriptColor1" onclick=javascriptBtn()>Next</button>`;
        javascriptRemoveValue.innerHTML = "";



    } else if (javascriptRandomValue == 34 && javascriptInputAnswer == __WEBPACK_IMPORTED_MODULE_4__questionsAndAnswers_javascriptAnswers__["a" /* javascriptAnswerArr */][34].A34) {
        javascriptCorrectValue.innerHTML = "Correct..";
        javascriptDisplayAnswer.innerHTML = `
        <textarea name="text" class="answer_textarea" id="input">Good Job :) </textarea>`;
        javascriptNextButton.innerHTML = `<button class="nextButton javascriptColor1" onclick=javascriptBtn()>Next</button>`;
        javascriptRemoveValue.innerHTML = "";

    } else if (javascriptRandomValue == 34 && javascriptInputAnswer !== __WEBPACK_IMPORTED_MODULE_4__questionsAndAnswers_javascriptAnswers__["a" /* javascriptAnswerArr */][34].A34) {
        javascriptDisplayAnswer.innerHTML = `
    <textarea name="text" class="answer_textarea" id="input">
var myAray = ["test", 0];
        </textarea>`;
        javascriptIncorrectValue.innerHTML = "Incorrect..";
        javascriptNextButton.innerHTML = `<button class="nextButton javascriptColor1" onclick=javascriptBtn()>Next</button>`;
        javascriptRemoveValue.innerHTML = "";



    } else if (javascriptRandomValue == 35 && javascriptInputAnswer == __WEBPACK_IMPORTED_MODULE_4__questionsAndAnswers_javascriptAnswers__["a" /* javascriptAnswerArr */][35].A35) {
        javascriptCorrectValue.innerHTML = "Correct..";
        javascriptDisplayAnswer.innerHTML = `
        <textarea name="text" class="answer_textarea" id="input">Good Job :) </textarea>`;
        javascriptNextButton.innerHTML = `<button class="nextButton javascriptColor1" onclick=javascriptBtn()>Next</button>`;
        javascriptRemoveValue.innerHTML = "";

    } else if (javascriptRandomValue == 35 && javascriptInputAnswer !== __WEBPACK_IMPORTED_MODULE_4__questionsAndAnswers_javascriptAnswers__["a" /* javascriptAnswerArr */][35].A35) {
        javascriptDisplayAnswer.innerHTML = `
    <textarea name="text" class="answer_textarea" id="input">
var myArray = [["the universe", 42], ["everything", 101010]];
        </textarea>`;
        javascriptIncorrectValue.innerHTML = "Incorrect..";
        javascriptNextButton.innerHTML = `<button class="nextButton javascriptColor1" onclick=javascriptBtn()>Next</button>`;
        javascriptRemoveValue.innerHTML = "";



    } else if (javascriptRandomValue == 36 && javascriptInputAnswer == __WEBPACK_IMPORTED_MODULE_4__questionsAndAnswers_javascriptAnswers__["a" /* javascriptAnswerArr */][36].A36) {
        javascriptCorrectValue.innerHTML = "Correct..";
        javascriptDisplayAnswer.innerHTML = `
        <textarea name="text" class="answer_textarea" id="input">Good Job :) </textarea>`;
        javascriptNextButton.innerHTML = `<button class="nextButton javascriptColor1" onclick=javascriptBtn()>Next</button>`;
        javascriptRemoveValue.innerHTML = "";

    } else if (javascriptRandomValue == 36 && javascriptInputAnswer !== __WEBPACK_IMPORTED_MODULE_4__questionsAndAnswers_javascriptAnswers__["a" /* javascriptAnswerArr */][36].A36) {
        javascriptDisplayAnswer.innerHTML = `
    <textarea name="text" class="answer_textarea" id="input">
var myArray = [50,60,70];
var myData = myArray[0];
        </textarea>`;
        javascriptIncorrectValue.innerHTML = "Incorrect..";
        javascriptNextButton.innerHTML = `<button class="nextButton javascriptColor1" onclick=javascriptBtn()>Next</button>`;
        javascriptRemoveValue.innerHTML = "";



    } else if (javascriptRandomValue == 37 && javascriptInputAnswer == __WEBPACK_IMPORTED_MODULE_4__questionsAndAnswers_javascriptAnswers__["a" /* javascriptAnswerArr */][37].A37) {
        javascriptCorrectValue.innerHTML = "Correct..";
        javascriptDisplayAnswer.innerHTML = `
        <textarea name="text" class="answer_textarea" id="input">Good Job :) </textarea>`;
        javascriptNextButton.innerHTML = `<button class="nextButton javascriptColor1" onclick=javascriptBtn()>Next</button>`;
        javascriptRemoveValue.innerHTML = "";

    } else if (javascriptRandomValue == 37 && javascriptInputAnswer !== __WEBPACK_IMPORTED_MODULE_4__questionsAndAnswers_javascriptAnswers__["a" /* javascriptAnswerArr */][37].A37) {
        javascriptDisplayAnswer.innerHTML = `
    <textarea name="text" class="answer_textarea" id="input">
var myArray = [18,64,99];
myArray[0] = 45;
        </textarea>`;
        javascriptIncorrectValue.innerHTML = "Incorrect..";
        javascriptNextButton.innerHTML = `<button class="nextButton javascriptColor1" onclick=javascriptBtn()>Next</button>`;
        javascriptRemoveValue.innerHTML = "";



    } else if (javascriptRandomValue == 38 && javascriptInputAnswer == __WEBPACK_IMPORTED_MODULE_4__questionsAndAnswers_javascriptAnswers__["a" /* javascriptAnswerArr */][38].A38) {
        javascriptCorrectValue.innerHTML = "Correct..";
        javascriptDisplayAnswer.innerHTML = `
        <textarea name="text" class="answer_textarea" id="input">Good Job :) </textarea>`;
        javascriptNextButton.innerHTML = `<button class="nextButton javascriptColor1" onclick=javascriptBtn()>Next</button>`;
        javascriptRemoveValue.innerHTML = "";

    } else if (javascriptRandomValue == 38 && javascriptInputAnswer !== __WEBPACK_IMPORTED_MODULE_4__questionsAndAnswers_javascriptAnswers__["a" /* javascriptAnswerArr */][38].A38) {
        javascriptDisplayAnswer.innerHTML = `
    <textarea name="text" class="answer_textarea" id="input">
var myArray = [[1,2,3], [4,5,6], [7,8,9], [[10,11,12], 13, 14]];
var myData = myArray[2][1];
        </textarea>`;
        javascriptIncorrectValue.innerHTML = "Incorrect..";
        javascriptNextButton.innerHTML = `<button class="nextButton javascriptColor1" onclick=javascriptBtn()>Next</button>`;
        javascriptRemoveValue.innerHTML = "";



    } else if (javascriptRandomValue == 39 && javascriptInputAnswer == __WEBPACK_IMPORTED_MODULE_4__questionsAndAnswers_javascriptAnswers__["a" /* javascriptAnswerArr */][39].A39) {
        javascriptCorrectValue.innerHTML = "Correct..";
        javascriptDisplayAnswer.innerHTML = `
        <textarea name="text" class="answer_textarea" id="input">Good Job :) </textarea>`;
        javascriptNextButton.innerHTML = `<button class="nextButton javascriptColor1" onclick=javascriptBtn()>Next</button>`;
        javascriptRemoveValue.innerHTML = "";

    } else if (javascriptRandomValue == 39 && javascriptInputAnswer !== __WEBPACK_IMPORTED_MODULE_4__questionsAndAnswers_javascriptAnswers__["a" /* javascriptAnswerArr */][39].A39) {
        javascriptDisplayAnswer.innerHTML = `
    <textarea name="text" class="answer_textarea" id="input">
var myArray = [["John", 23], ["cat", 2]];
myArray.push(["dog", 3]);
        </textarea>`;
        javascriptIncorrectValue.innerHTML = "Incorrect..";
        javascriptNextButton.innerHTML = `<button class="nextButton javascriptColor1" onclick=javascriptBtn()>Next</button>`;
        javascriptRemoveValue.innerHTML = "";



    } else if (javascriptRandomValue == 40 && javascriptInputAnswer == __WEBPACK_IMPORTED_MODULE_4__questionsAndAnswers_javascriptAnswers__["a" /* javascriptAnswerArr */][40].A40) {
        javascriptCorrectValue.innerHTML = "Correct..";
        javascriptDisplayAnswer.innerHTML = `
        <textarea name="text" class="answer_textarea" id="input">Good Job :) </textarea>`;
        javascriptNextButton.innerHTML = `<button class="nextButton javascriptColor1" onclick=javascriptBtn()>Next</button>`;
        javascriptRemoveValue.innerHTML = "";

    } else if (javascriptRandomValue == 40 && javascriptInputAnswer !== __WEBPACK_IMPORTED_MODULE_4__questionsAndAnswers_javascriptAnswers__["a" /* javascriptAnswerArr */][40].A40) {
        javascriptDisplayAnswer.innerHTML = `
    <textarea name="text" class="answer_textarea" id="input">
var myArray = [["John", 23], ["cat", 2]];
var removedFromMyArray = myArray.pop();
        </textarea>`;
        javascriptIncorrectValue.innerHTML = "Incorrect..";
        javascriptNextButton.innerHTML = `<button class="nextButton javascriptColor1" onclick=javascriptBtn()>Next</button>`;
        javascriptRemoveValue.innerHTML = "";



    } else if (javascriptRandomValue == 41 && javascriptInputAnswer == __WEBPACK_IMPORTED_MODULE_4__questionsAndAnswers_javascriptAnswers__["a" /* javascriptAnswerArr */][41].A41) {
        javascriptCorrectValue.innerHTML = "Correct..";
        javascriptDisplayAnswer.innerHTML = `
        <textarea name="text" class="answer_textarea" id="input">Good Job :) </textarea>`;
        javascriptNextButton.innerHTML = `<button class="nextButton javascriptColor1" onclick=javascriptBtn()>Next</button>`;
        javascriptRemoveValue.innerHTML = "";

    } else if (javascriptRandomValue == 41 && javascriptInputAnswer !== __WEBPACK_IMPORTED_MODULE_4__questionsAndAnswers_javascriptAnswers__["a" /* javascriptAnswerArr */][41].A41) {
        javascriptDisplayAnswer.innerHTML = `

    <textarea name="text" class="answer_textarea" id="input">
ar myArray = [["John", 23], ["dog", 3]];
var removedFromMyArray = myArray.shift();
        </textarea>`;
        javascriptIncorrectValue.innerHTML = "Incorrect..";
        javascriptNextButton.innerHTML = `<button class="nextButton javascriptColor1" onclick=javascriptBtn()>Next</button>`;
        javascriptRemoveValue.innerHTML = "";



    } else if (javascriptRandomValue == 42 && javascriptInputAnswer == __WEBPACK_IMPORTED_MODULE_4__questionsAndAnswers_javascriptAnswers__["a" /* javascriptAnswerArr */][42].A42) {
        javascriptCorrectValue.innerHTML = "Correct..";
        javascriptDisplayAnswer.innerHTML = `
        <textarea name="text" class="answer_textarea" id="input">Good Job :) </textarea>`;
        javascriptNextButton.innerHTML = `<button class="nextButton javascriptColor1" onclick=javascriptBtn()>Next</button>`;
        javascriptRemoveValue.innerHTML = "";

    } else if (javascriptRandomValue == 42 && javascriptInputAnswer !== __WEBPACK_IMPORTED_MODULE_4__questionsAndAnswers_javascriptAnswers__["a" /* javascriptAnswerArr */][42].A42) {
        javascriptDisplayAnswer.innerHTML = `
    <textarea name="text" class="answer_textarea" id="input">
var myArray = [["John", 23], ["dog", 3]];
myArray.shift();
myArray.unshift( ["Paul",35]);
        </textarea>`;
        javascriptIncorrectValue.innerHTML = "Incorrect..";
        javascriptNextButton.innerHTML = `<button class="nextButton javascriptColor1" onclick=javascriptBtn()>Next</button>`;
        javascriptRemoveValue.innerHTML = "";



    } else if (javascriptRandomValue == 43 && javascriptInputAnswer == __WEBPACK_IMPORTED_MODULE_4__questionsAndAnswers_javascriptAnswers__["a" /* javascriptAnswerArr */][43].A43) {
        javascriptCorrectValue.innerHTML = "Correct..";
        javascriptDisplayAnswer.innerHTML = `
        <textarea name="text" class="answer_textarea" id="input">Good Job :) </textarea>`;
        javascriptNextButton.innerHTML = `<button class="nextButton javascriptColor1" onclick=javascriptBtn()>Next</button>`;
        javascriptRemoveValue.innerHTML = "";

    } else if (javascriptRandomValue == 43 && javascriptInputAnswer !== __WEBPACK_IMPORTED_MODULE_4__questionsAndAnswers_javascriptAnswers__["a" /* javascriptAnswerArr */][43].A43) {
        javascriptDisplayAnswer.innerHTML = `
    <textarea name="text" class="answer_textarea" id="input">
var myList = [["Canned Beans", 3],["Milk Galon", 1],["Cereal", 2],["Toilet Paper", 12],["Sack of Rice", 1]];
        </textarea>`;
        javascriptIncorrectValue.innerHTML = "Incorrect..";
        javascriptNextButton.innerHTML = `<button class="nextButton javascriptColor1" onclick=javascriptBtn()>Next</button>`;
        javascriptRemoveValue.innerHTML = "";



    } else if (javascriptRandomValue == 44 && javascriptInputAnswer == __WEBPACK_IMPORTED_MODULE_4__questionsAndAnswers_javascriptAnswers__["a" /* javascriptAnswerArr */][44].A44) {
        javascriptCorrectValue.innerHTML = "Correct..";
        javascriptDisplayAnswer.innerHTML = `
        <textarea name="text" class="answer_textarea" id="input">Good Job :) </textarea>`;
        javascriptNextButton.innerHTML = `<button class="nextButton javascriptColor1" onclick=javascriptBtn()>Next</button>`;
        javascriptRemoveValue.innerHTML = "";

    } else if (javascriptRandomValue == 44 && javascriptInputAnswer !== __WEBPACK_IMPORTED_MODULE_4__questionsAndAnswers_javascriptAnswers__["a" /* javascriptAnswerArr */][44].A44) {
        javascriptDisplayAnswer.innerHTML = `
    <textarea name="text" class="answer_textarea" id="input">
function reusableFunction() {
    console.log("Hi World");
}
    
reusableFunction();
          </textarea>`;
        javascriptIncorrectValue.innerHTML = "Incorrect..";
        javascriptNextButton.innerHTML = `<button class="nextButton javascriptColor1" onclick=javascriptBtn()>Next</button>`;
        javascriptRemoveValue.innerHTML = "";



    } else if (javascriptRandomValue == 45 && javascriptInputAnswer == __WEBPACK_IMPORTED_MODULE_4__questionsAndAnswers_javascriptAnswers__["a" /* javascriptAnswerArr */][45].A45) {
        javascriptCorrectValue.innerHTML = "Correct..";
        javascriptDisplayAnswer.innerHTML = `
        <textarea name="text" class="answer_textarea" id="input">Good Job :) </textarea>`;
        javascriptNextButton.innerHTML = `<button class="nextButton javascriptColor1" onclick=javascriptBtn()>Next</button>`;
        javascriptRemoveValue.innerHTML = "";

    } else if (javascriptRandomValue == 45 && javascriptInputAnswer !== __WEBPACK_IMPORTED_MODULE_4__questionsAndAnswers_javascriptAnswers__["a" /* javascriptAnswerArr */][45].A45) {
        javascriptDisplayAnswer.innerHTML = `
    <textarea name="text" class="answer_textarea" id="input">
function functionWithArgs(a, b) {
    console.log(a + b);
}
functionWithArgs(10, 5);
          </textarea>`;
        javascriptIncorrectValue.innerHTML = "Incorrect..";
        javascriptNextButton.innerHTML = `<button class="nextButton javascriptColor1" onclick=javascriptBtn()>Next</button>`;
        javascriptRemoveValue.innerHTML = "";



    } else if (javascriptRandomValue == 46 && javascriptInputAnswer == __WEBPACK_IMPORTED_MODULE_4__questionsAndAnswers_javascriptAnswers__["a" /* javascriptAnswerArr */][46].A46) {
        javascriptCorrectValue.innerHTML = "Correct..";
        javascriptDisplayAnswer.innerHTML = `
        <textarea name="text" class="answer_textarea" id="input">Good Job :) </textarea>`;
        javascriptNextButton.innerHTML = `<button class="nextButton javascriptColor1" onclick=javascriptBtn()>Next</button>`;
        javascriptRemoveValue.innerHTML = "";

    } else if (javascriptRandomValue == 46 && javascriptInputAnswer !== __WEBPACK_IMPORTED_MODULE_4__questionsAndAnswers_javascriptAnswers__["a" /* javascriptAnswerArr */][46].A46) {
        javascriptDisplayAnswer.innerHTML = `

    <textarea name="text" class="answer_textarea" id="input">
var myGlobal = 10;

function fun1() {
    oopsGlobal = 5;
}
function fun2() {
    var output = "";
    if (typeof myGlobal != "undefined") {
    output += "myGlobal: " + myGlobal;
    }
    if (typeof oopsGlobal != "undefined") {
    output += " oopsGlobal: " + oopsGlobal;
    }
    console.log(output);
}
        </textarea>`;
        javascriptIncorrectValue.innerHTML = "Incorrect..";
        javascriptNextButton.innerHTML = `<button class="nextButton javascriptColor1" onclick=javascriptBtn()>Next</button>`;
        javascriptRemoveValue.innerHTML = "";



    } else if (javascriptRandomValue == 47 && javascriptInputAnswer == __WEBPACK_IMPORTED_MODULE_4__questionsAndAnswers_javascriptAnswers__["a" /* javascriptAnswerArr */][47].A47) {
        javascriptCorrectValue.innerHTML = "Correct..";
        javascriptDisplayAnswer.innerHTML = `
        <textarea name="text" class="answer_textarea" id="input">Good Job :) </textarea>`;
        javascriptNextButton.innerHTML = `<button class="nextButton javascriptColor1" onclick=javascriptBtn()>Next</button>`;
        javascriptRemoveValue.innerHTML = "";

    }

    else if (javascriptRandomValue == 47 && javascriptInputAnswer !== __WEBPACK_IMPORTED_MODULE_4__questionsAndAnswers_javascriptAnswers__["a" /* javascriptAnswerArr */][47].A47) {
        javascriptDisplayAnswer.innerHTML = `
    <textarea name="text" class="answer_textarea" id="input">
function myLocalScope() {
    var myVar;
    console.log(myVar);
}
myLocalScope();
          </textarea>`;
        javascriptIncorrectValue.innerHTML = "Incorrect..";
        javascriptNextButton.innerHTML = `<button class="nextButton javascriptColor1" onclick=javascriptBtn()>Next</button>`;
        javascriptRemoveValue.innerHTML = "";



    } else if (javascriptRandomValue == 48 && javascriptInputAnswer == __WEBPACK_IMPORTED_MODULE_4__questionsAndAnswers_javascriptAnswers__["a" /* javascriptAnswerArr */][48].A48) {
        javascriptCorrectValue.innerHTML = "Correct..";
        javascriptDisplayAnswer.innerHTML = `
        <textarea name="text" class="answer_textarea" id="input">Good Job :) </textarea>`;
        javascriptNextButton.innerHTML = `<button class="nextButton javascriptColor1" onclick=javascriptBtn()>Next</button>`;
        javascriptRemoveValue.innerHTML = "";

    } else if (javascriptRandomValue == 48 && javascriptInputAnswer !== __WEBPACK_IMPORTED_MODULE_4__questionsAndAnswers_javascriptAnswers__["a" /* javascriptAnswerArr */][48].A48) {
        javascriptDisplayAnswer.innerHTML = `
    <textarea name="text" class="answer_textarea" id="input">
var outerWear = "T-Shirt";
function myOutfit() {
    var outerWear = "sweater";
    return outerWear;
}
myOutfit();
        </textarea>`;
        javascriptIncorrectValue.innerHTML = "Incorrect..";
        javascriptNextButton.innerHTML = `<button class="nextButton javascriptColor1" onclick=javascriptBtn()>Next</button>`;
        javascriptRemoveValue.innerHTML = "";



    } else if (javascriptRandomValue == 49 && javascriptInputAnswer == __WEBPACK_IMPORTED_MODULE_4__questionsAndAnswers_javascriptAnswers__["a" /* javascriptAnswerArr */][49].A49) {
        javascriptCorrectValue.innerHTML = "Correct..";
        javascriptDisplayAnswer.innerHTML = `
        <textarea name="text" class="answer_textarea" id="input">Good Job :) </textarea>`;
        javascriptNextButton.innerHTML = `<button class="nextButton javascriptColor1" onclick=javascriptBtn()>Next</button>`;
        javascriptRemoveValue.innerHTML = "";

    } else if (javascriptRandomValue == 49 && javascriptInputAnswer !== __WEBPACK_IMPORTED_MODULE_4__questionsAndAnswers_javascriptAnswers__["a" /* javascriptAnswerArr */][49].A49) {
        javascriptDisplayAnswer.innerHTML = `
    <textarea name="text" class="answer_textarea" id="input">
function timesFive(num) {
    return num * 5;
}
          </textarea>`;
        javascriptIncorrectValue.innerHTML = "Incorrect..";
        javascriptNextButton.innerHTML = `<button class="nextButton javascriptColor1" onclick=javascriptBtn()>Next</button>`;
        javascriptRemoveValue.innerHTML = "";



    } else if (javascriptRandomValue == 50 && javascriptInputAnswer == __WEBPACK_IMPORTED_MODULE_4__questionsAndAnswers_javascriptAnswers__["a" /* javascriptAnswerArr */][50].A50) {
        javascriptCorrectValue.innerHTML = "Correct..";
        javascriptDisplayAnswer.innerHTML = `
        <textarea name="text" class="answer_textarea" id="input">Good Job :) </textarea>`;
        javascriptNextButton.innerHTML = `<button class="nextButton javascriptColor1" onclick=javascriptBtn()>Next</button>`;
        javascriptRemoveValue.innerHTML = "";

    } else if (javascriptRandomValue == 50 && javascriptInputAnswer !== __WEBPACK_IMPORTED_MODULE_4__questionsAndAnswers_javascriptAnswers__["a" /* javascriptAnswerArr */][50].A50) {
        javascriptDisplayAnswer.innerHTML = `
    <textarea name="text" class="answer_textarea" id="input">
function addFive() {
    sum += 5;
}
          </textarea>`;
        javascriptIncorrectValue.innerHTML = "Incorrect..";
        javascriptNextButton.innerHTML = `<button class="nextButton javascriptColor1" onclick=javascriptBtn()>Next</button>`;
        javascriptRemoveValue.innerHTML = "";



    } else if (javascriptRandomValue == 51 && javascriptInputAnswer == __WEBPACK_IMPORTED_MODULE_4__questionsAndAnswers_javascriptAnswers__["a" /* javascriptAnswerArr */][51].A51) {
        javascriptCorrectValue.innerHTML = "Correct..";
        javascriptDisplayAnswer.innerHTML = `
        <textarea name="text" class="answer_textarea" id="input">Good Job :) </textarea>`;
        javascriptNextButton.innerHTML = `<button class="nextButton javascriptColor1" onclick=javascriptBtn()>Next</button>`;
        javascriptRemoveValue.innerHTML = "";

    } else if (javascriptRandomValue == 51 && javascriptInputAnswer !== __WEBPACK_IMPORTED_MODULE_4__questionsAndAnswers_javascriptAnswers__["a" /* javascriptAnswerArr */][51].A51) {
        javascriptDisplayAnswer.innerHTML = `
    <textarea name="text" class="answer_textarea" id="input">
var processed = 0;

function processArg(num) {
    return (num + 3) / 5;
}
processed = processArg(7);
        </textarea>`;
        javascriptIncorrectValue.innerHTML = "Incorrect..";
        javascriptNextButton.innerHTML = `<button class="nextButton javascriptColor1" onclick=javascriptBtn()>Next</button>`;
        javascriptRemoveValue.innerHTML = "";



    } else if (javascriptRandomValue == 52 && javascriptInputAnswer == __WEBPACK_IMPORTED_MODULE_4__questionsAndAnswers_javascriptAnswers__["a" /* javascriptAnswerArr */][52].A52) {
        javascriptCorrectValue.innerHTML = "Correct..";
        javascriptDisplayAnswer.innerHTML = `
        <textarea name="text" class="answer_textarea" id="input">Good Job :) </textarea>`;
        javascriptNextButton.innerHTML = `<button class="nextButton javascriptColor1" onclick=javascriptBtn()>Next</button>`;
        javascriptRemoveValue.innerHTML = "";

    } else if (javascriptRandomValue == 52 && javascriptInputAnswer !== __WEBPACK_IMPORTED_MODULE_4__questionsAndAnswers_javascriptAnswers__["a" /* javascriptAnswerArr */][52].A52) {
        javascriptDisplayAnswer.innerHTML = `
    <textarea name="text" class="answer_textarea" id="input">
function nextInLine(arr, item) {
    arr.push(item);
    var removed = arr.shift();
    return removed;  
}
var testArr = [1,2,3,4,5];
    
console.log("Before: " + JSON.stringify(testArr));
console.log(nextInLine(testArr, 6));
console.log("After: " + JSON.stringify(testArr));
        </textarea>`;
        javascriptIncorrectValue.innerHTML = "Incorrect..";
        javascriptNextButton.innerHTML = `<button class="nextButton javascriptColor1" onclick=javascriptBtn()>Next</button>`;
        javascriptRemoveValue.innerHTML = "";



    } else if (javascriptRandomValue == 53 && javascriptInputAnswer == __WEBPACK_IMPORTED_MODULE_4__questionsAndAnswers_javascriptAnswers__["a" /* javascriptAnswerArr */][53].A53) {
        javascriptCorrectValue.innerHTML = "Correct..";
        javascriptDisplayAnswer.innerHTML = `
        <textarea name="text" class="answer_textarea" id="input">Good Job :) </textarea>`;
        javascriptNextButton.innerHTML = `<button class="nextButton javascriptColor1" onclick=javascriptBtn()>Next</button>`;
        javascriptRemoveValue.innerHTML = "";

    } else if (javascriptRandomValue == 53 && javascriptInputAnswer !== __WEBPACK_IMPORTED_MODULE_4__questionsAndAnswers_javascriptAnswers__["a" /* javascriptAnswerArr */][53].A53) {
        javascriptDisplayAnswer.innerHTML = `
    <textarea name="text" class="answer_textarea" id="input">
function welcomeToBooleans() {
    return true; 
}
        </textarea>`;
        javascriptIncorrectValue.innerHTML = "Incorrect..";
        javascriptNextButton.innerHTML = `<button class="nextButton javascriptColor1" onclick=javascriptBtn()>Next</button>`;
        javascriptRemoveValue.innerHTML = "";



    } else if (javascriptRandomValue == 54 && javascriptInputAnswer == __WEBPACK_IMPORTED_MODULE_4__questionsAndAnswers_javascriptAnswers__["a" /* javascriptAnswerArr */][54].A54) {
        javascriptCorrectValue.innerHTML = "Correct..";
        javascriptDisplayAnswer.innerHTML = `
        <textarea name="text" class="answer_textarea" id="input">Good Job :) </textarea>`;
        javascriptNextButton.innerHTML = `<button class="nextButton javascriptColor1" onclick=javascriptBtn()>Next</button>`;
        javascriptRemoveValue.innerHTML = "";

    } else if (javascriptRandomValue == 54 && javascriptInputAnswer !== __WEBPACK_IMPORTED_MODULE_4__questionsAndAnswers_javascriptAnswers__["a" /* javascriptAnswerArr */][54].A54) {
        javascriptDisplayAnswer.innerHTML = `
    <textarea name="text" class="answer_textarea" id="input">
function trueOrFalse(wasThatTrue) {
    if (wasThatTrue) {
        return "Yes, that was true";
    }
    return "No, that was false";
    
}
        </textarea>`;
        javascriptIncorrectValue.innerHTML = "Incorrect..";
        javascriptNextButton.innerHTML = `<button class="nextButton javascriptColor1" onclick=javascriptBtn()>Next</button>`;
        javascriptRemoveValue.innerHTML = "";



    } else if (javascriptRandomValue == 55 && javascriptInputAnswer == __WEBPACK_IMPORTED_MODULE_4__questionsAndAnswers_javascriptAnswers__["a" /* javascriptAnswerArr */][55].A55) {
        javascriptCorrectValue.innerHTML = "Correct..";
        javascriptDisplayAnswer.innerHTML = `
        <textarea name="text" class="answer_textarea" id="input">Good Job :) </textarea>`;
        javascriptNextButton.innerHTML = `<button class="nextButton javascriptColor1" onclick=javascriptBtn()>Next</button>`;
        javascriptRemoveValue.innerHTML = "";

    } else if (javascriptRandomValue == 55 && javascriptInputAnswer !== __WEBPACK_IMPORTED_MODULE_4__questionsAndAnswers_javascriptAnswers__["a" /* javascriptAnswerArr */][55].A55) {
        javascriptDisplayAnswer.innerHTML = `
    <textarea name="text" class="answer_textarea" id="input">
function testEqual(val) {
    if (val == 12) { 
        return "Equal";
    }
    return "Not Equal";
}
testEqual(10);
        </textarea>`;
        javascriptIncorrectValue.innerHTML = "Incorrect..";
        javascriptNextButton.innerHTML = `<button class="nextButton javascriptColor1" onclick=javascriptBtn()>Next</button>`;
        javascriptRemoveValue.innerHTML = "";



    } else if (javascriptRandomValue == 56 && javascriptInputAnswer == __WEBPACK_IMPORTED_MODULE_4__questionsAndAnswers_javascriptAnswers__["a" /* javascriptAnswerArr */][56].A56) {
        javascriptCorrectValue.innerHTML = "Correct..";
        javascriptDisplayAnswer.innerHTML = `
        <textarea name="text" class="answer_textarea" id="input">Good Job :) </textarea>`;
        javascriptNextButton.innerHTML = `<button class="nextButton javascriptColor1" onclick=javascriptBtn()>Next</button>`;
        javascriptRemoveValue.innerHTML = "";

    } else if (javascriptRandomValue == 56 && javascriptInputAnswer !== __WEBPACK_IMPORTED_MODULE_4__questionsAndAnswers_javascriptAnswers__["a" /* javascriptAnswerArr */][56].A56) {
        javascriptDisplayAnswer.innerHTML = `
    <textarea name="text" class="answer_textarea" id="input">
function testStrict(val) {
    if (val === 7) { 
        return "Equal";
    }
    return "Not Equal";
}
testStrict(10);
        </textarea>`;
        javascriptIncorrectValue.innerHTML = "Incorrect..";
        javascriptNextButton.innerHTML = `<button class="nextButton javascriptColor1" onclick=javascriptBtn()>Next</button>`;
        javascriptRemoveValue.innerHTML = "";



    } else if (javascriptRandomValue == 57 && javascriptInputAnswer == __WEBPACK_IMPORTED_MODULE_4__questionsAndAnswers_javascriptAnswers__["a" /* javascriptAnswerArr */][57].A57) {
        javascriptCorrectValue.innerHTML = "Correct..";
        javascriptDisplayAnswer.innerHTML = `
        <textarea name="text" class="answer_textarea" id="input">Good Job :) </textarea>`;
        javascriptNextButton.innerHTML = `<button class="nextButton javascriptColor1" onclick=javascriptBtn()>Next</button>`;
        javascriptRemoveValue.innerHTML = "";

    } else if (javascriptRandomValue == 57 && javascriptInputAnswer !== __WEBPACK_IMPORTED_MODULE_4__questionsAndAnswers_javascriptAnswers__["a" /* javascriptAnswerArr */][57].A57) {
        javascriptDisplayAnswer.innerHTML = `
    <textarea name="text" class="answer_textarea" id="input">
function compareEquality(a, b) {
    if (a === b) {
        return  "Equal";
    }
    return  "Not Equal";
}
compareEquality(10, "10");
        </textarea>`;
        javascriptIncorrectValue.innerHTML = "Incorrect..";
        javascriptNextButton.innerHTML = `<button class="nextButton javascriptColor1" onclick=javascriptBtn()>Next</button>`;
        javascriptRemoveValue.innerHTML = "";



    } else if (javascriptRandomValue == 58 && javascriptInputAnswer == __WEBPACK_IMPORTED_MODULE_4__questionsAndAnswers_javascriptAnswers__["a" /* javascriptAnswerArr */][58].A58) {
        javascriptCorrectValue.innerHTML = "Correct..";
        javascriptDisplayAnswer.innerHTML = `
        <textarea name="text" class="answer_textarea" id="input">Good Job :) </textarea>`;
        javascriptNextButton.innerHTML = `<button class="nextButton javascriptColor1" onclick=javascriptBtn()>Next</button>`;
        javascriptRemoveValue.innerHTML = "";

    } else if (javascriptRandomValue == 58 && javascriptInputAnswer !== __WEBPACK_IMPORTED_MODULE_4__questionsAndAnswers_javascriptAnswers__["a" /* javascriptAnswerArr */][58].A58) {
        javascriptDisplayAnswer.innerHTML = `
    <textarea name="text" class="answer_textarea" id="input">
function testNotEqual(val) {
    if (val != 99) 
        return "Not Equal";
        
    return "Equal";
}
          
        </textarea>`;
        javascriptIncorrectValue.innerHTML = "Incorrect..";
        javascriptNextButton.innerHTML = `<button class="nextButton javascriptColor1" onclick=javascriptBtn()>Next</button>`;
        javascriptRemoveValue.innerHTML = "";



    } else if (javascriptRandomValue == 59 && javascriptInputAnswer == __WEBPACK_IMPORTED_MODULE_4__questionsAndAnswers_javascriptAnswers__["a" /* javascriptAnswerArr */][59].A59) {
        javascriptCorrectValue.innerHTML = "Correct..";
        javascriptDisplayAnswer.innerHTML = `
        <textarea name="text" class="answer_textarea" id="input">Good Job :) </textarea>`;
        javascriptNextButton.innerHTML = `<button class="nextButton javascriptColor1" onclick=javascriptBtn()>Next</button>`;
        javascriptRemoveValue.innerHTML = "";

    } else if (javascriptRandomValue == 59 && javascriptInputAnswer !== __WEBPACK_IMPORTED_MODULE_4__questionsAndAnswers_javascriptAnswers__["a" /* javascriptAnswerArr */][59].A59) {
        javascriptDisplayAnswer.innerHTML = `
    <textarea name="text" class="answer_textarea" id="input">
function testStrictNotEqual(val) {
    if (val !== 17) {
        return "Not Equal";
    }
    return "Equal";
}
testStrictNotEqual(10);
        </textarea>`;
        javascriptIncorrectValue.innerHTML = "Incorrect..";
        javascriptNextButton.innerHTML = `<button class="nextButton javascriptColor1" onclick=javascriptBtn()>Next</button>`;
        javascriptRemoveValue.innerHTML = "";



    } else if (javascriptRandomValue == 60 && javascriptInputAnswer == __WEBPACK_IMPORTED_MODULE_4__questionsAndAnswers_javascriptAnswers__["a" /* javascriptAnswerArr */][60].A60) {
        javascriptCorrectValue.innerHTML = "Correct..";
        javascriptDisplayAnswer.innerHTML = `
        <textarea name="text" class="answer_textarea" id="input">Good Job :) </textarea>`;
        javascriptNextButton.innerHTML = `<button class="nextButton javascriptColor1" onclick=javascriptBtn()>Next</button>`;
        javascriptRemoveValue.innerHTML = "";

    } else if (javascriptRandomValue == 60 && javascriptInputAnswer !== __WEBPACK_IMPORTED_MODULE_4__questionsAndAnswers_javascriptAnswers__["a" /* javascriptAnswerArr */][60].A60) {
        javascriptDisplayAnswer.innerHTML = `
    <textarea name="text" class="answer_textarea" id="input">
function testGreaterThan(val) {
    if (val > 100) {
        return "Over 100";
    }
    if (val > 10) {
        return "Over 10";
    }
    return "10 or Under";
}
        </textarea>`;
        javascriptIncorrectValue.innerHTML = "Incorrect..";
        javascriptNextButton.innerHTML = `<button class="nextButton javascriptColor1" onclick=javascriptBtn()>Next</button>`;
        javascriptRemoveValue.innerHTML = "";



    } else if (javascriptRandomValue == 61 && javascriptInputAnswer == __WEBPACK_IMPORTED_MODULE_4__questionsAndAnswers_javascriptAnswers__["a" /* javascriptAnswerArr */][61].A61) {
        javascriptCorrectValue.innerHTML = "Correct..";
        javascriptDisplayAnswer.innerHTML = `
        <textarea name="text" class="answer_textarea" id="input">Good Job :) </textarea>`;
        javascriptNextButton.innerHTML = `<button class="nextButton javascriptColor1" onclick=javascriptBtn()>Next</button>`;
        javascriptRemoveValue.innerHTML = "";

    } else if (javascriptRandomValue == 61 && javascriptInputAnswer !== __WEBPACK_IMPORTED_MODULE_4__questionsAndAnswers_javascriptAnswers__["a" /* javascriptAnswerArr */][61].A61) {
        javascriptDisplayAnswer.innerHTML = `
    <textarea name="text" class="answer_textarea" id="input">
function testGreaterOrEqual(val) {
    if (val >= 20){
        return "20 or Over";
    }
    if (val >= 10){
        return "10 or Over";
    }
    return "Less than 10";
}
          </textarea>`;
        javascriptIncorrectValue.innerHTML = "Incorrect..";
        javascriptNextButton.innerHTML = `<button class="nextButton javascriptColor1" onclick=javascriptBtn()>Next</button>`;
        javascriptRemoveValue.innerHTML = "";



    } else if (javascriptRandomValue == 62 && javascriptInputAnswer == __WEBPACK_IMPORTED_MODULE_4__questionsAndAnswers_javascriptAnswers__["a" /* javascriptAnswerArr */][62].A62) {
        javascriptCorrectValue.innerHTML = "Correct..";
        javascriptDisplayAnswer.innerHTML = `
        <textarea name="text" class="answer_textarea" id="input">Good Job :) </textarea>`;
        javascriptNextButton.innerHTML = `<button class="nextButton javascriptColor1" onclick=javascriptBtn()>Next</button>`;
        javascriptRemoveValue.innerHTML = "";

    } else if (javascriptRandomValue == 62 && javascriptInputAnswer !== __WEBPACK_IMPORTED_MODULE_4__questionsAndAnswers_javascriptAnswers__["a" /* javascriptAnswerArr */][62].A62) {
        javascriptDisplayAnswer.innerHTML = `
    <textarea name="text" class="answer_textarea" id="input">
function testLessThan(val) {
    if (val < 25){
        return "Under 25";
    }
    if (val < 55){
        return "Under 55";
    }
    return "55 or Over";
}
          </textarea>`;
        javascriptIncorrectValue.innerHTML = "Incorrect..";
        javascriptNextButton.innerHTML = `<button class="nextButton javascriptColor1" onclick=javascriptBtn()>Next</button>`;
        javascriptRemoveValue.innerHTML = "";



    } else if (javascriptRandomValue == 63 && javascriptInputAnswer == __WEBPACK_IMPORTED_MODULE_4__questionsAndAnswers_javascriptAnswers__["a" /* javascriptAnswerArr */][63].A63) {
        javascriptCorrectValue.innerHTML = "Correct..";
        javascriptDisplayAnswer.innerHTML = `
        <textarea name="text" class="answer_textarea" id="input">Good Job :) </textarea>`;
        javascriptNextButton.innerHTML = `<button class="nextButton javascriptColor1" onclick=javascriptBtn()>Next</button>`;
        javascriptRemoveValue.innerHTML = "";

    } else if (javascriptRandomValue == 63 && javascriptInputAnswer !== __WEBPACK_IMPORTED_MODULE_4__questionsAndAnswers_javascriptAnswers__["a" /* javascriptAnswerArr */][63].A63) {
        javascriptDisplayAnswer.innerHTML = `
    <textarea name="text" class="answer_textarea" id="input">
function testLessOrEqual(val) {
    if (val <= 12){
        return "Smaller Than or Equal to 12";
    }
    if (val <= 24){
        return "Smaller Than or Equal to 24";
    }
    return "More Than 24";
}
          </textarea>`;
        javascriptIncorrectValue.innerHTML = "Incorrect..";
        javascriptNextButton.innerHTML = `<button class="nextButton javascriptColor1" onclick=javascriptBtn()>Next</button>`;
        javascriptRemoveValue.innerHTML = "";



    } else if (javascriptRandomValue == 64 && javascriptInputAnswer == __WEBPACK_IMPORTED_MODULE_4__questionsAndAnswers_javascriptAnswers__["a" /* javascriptAnswerArr */][64].A64) {
        javascriptCorrectValue.innerHTML = "Correct..";
        javascriptDisplayAnswer.innerHTML = `
        <textarea name="text" class="answer_textarea" id="input">Good Job :) </textarea>`;
        javascriptNextButton.innerHTML = `<button class="nextButton javascriptColor1" onclick=javascriptBtn()>Next</button>`;
        javascriptRemoveValue.innerHTML = "";

    } else if (javascriptRandomValue == 64 && javascriptInputAnswer !== __WEBPACK_IMPORTED_MODULE_4__questionsAndAnswers_javascriptAnswers__["a" /* javascriptAnswerArr */][64].A64) {
        javascriptDisplayAnswer.innerHTML = `
    <textarea name="text" class="answer_textarea" id="input">
function testLogicalAnd(val) {
    if (val <= 50 && val >= 25) {
        return "Yes";
    }
    return "No";
}
testLogicalAnd(10);
          </textarea>`;
        javascriptIncorrectValue.innerHTML = "Incorrect..";
        javascriptNextButton.innerHTML = `<button class="nextButton javascriptColor1" onclick=javascriptBtn()>Next</button>`;
        javascriptRemoveValue.innerHTML = "";



    } else if (javascriptRandomValue == 65 && javascriptInputAnswer == __WEBPACK_IMPORTED_MODULE_4__questionsAndAnswers_javascriptAnswers__["a" /* javascriptAnswerArr */][65].A65) {
        javascriptCorrectValue.innerHTML = "Correct..";
        javascriptDisplayAnswer.innerHTML = `
        <textarea name="text" class="answer_textarea" id="input">Good Job :) </textarea>`;
        javascriptNextButton.innerHTML = `<button class="nextButton javascriptColor1" onclick=javascriptBtn()>Next</button>`;
        javascriptRemoveValue.innerHTML = "";

    } else if (javascriptRandomValue == 65 && javascriptInputAnswer !== __WEBPACK_IMPORTED_MODULE_4__questionsAndAnswers_javascriptAnswers__["a" /* javascriptAnswerArr */][65].A65) {
        javascriptDisplayAnswer.innerHTML = `
    <textarea name="text" class="answer_textarea" id="input">
function testLogicalOr(val) {
    if ( val < 10 || val > 20 ) {
        return "Outside";
    }
        return "Inside";
}
testLogicalOr(15);
            </textarea>`;
        javascriptIncorrectValue.innerHTML = "Incorrect..";
        javascriptNextButton.innerHTML = `<button class="nextButton javascriptColor1" onclick=javascriptBtn()>Next</button>`;
        javascriptRemoveValue.innerHTML = "";



    } else if (javascriptRandomValue == 66 && javascriptInputAnswer == __WEBPACK_IMPORTED_MODULE_4__questionsAndAnswers_javascriptAnswers__["a" /* javascriptAnswerArr */][66].A66) {
        javascriptCorrectValue.innerHTML = "Correct..";
        javascriptDisplayAnswer.innerHTML = `
        <textarea name="text" class="answer_textarea" id="input">Good Job :) </textarea>`;
        javascriptNextButton.innerHTML = `<button class="nextButton javascriptColor1" onclick=javascriptBtn()>Next</button>`;
        javascriptRemoveValue.innerHTML = "";

    } else if (javascriptRandomValue == 66 && javascriptInputAnswer !== __WEBPACK_IMPORTED_MODULE_4__questionsAndAnswers_javascriptAnswers__["a" /* javascriptAnswerArr */][66].A66) {
        javascriptDisplayAnswer.innerHTML = `
    <textarea name="text" class="answer_textarea" id="input">
function testElse(val) {
    var result = "";
    if (val > 5) {
    return "Bigger than 5";
    
    } else {
    return "5 or Smaller";
    }
    return result;
}
testElse(4);
        </textarea>`;
        javascriptIncorrectValue.innerHTML = "Incorrect..";
        javascriptNextButton.innerHTML = `<button class="nextButton javascriptColor1" onclick=javascriptBtn()>Next</button>`;
        javascriptRemoveValue.innerHTML = "";



    } else if (javascriptRandomValue == 67 && javascriptInputAnswer == __WEBPACK_IMPORTED_MODULE_4__questionsAndAnswers_javascriptAnswers__["a" /* javascriptAnswerArr */][67].A67) {
        javascriptCorrectValue.innerHTML = "Correct..";
        javascriptDisplayAnswer.innerHTML = `
        <textarea name="text" class="answer_textarea" id="input">Good Job :) </textarea>`;
        javascriptNextButton.innerHTML = `<button class="nextButton javascriptColor1" onclick=javascriptBtn()>Next</button>`;
        javascriptRemoveValue.innerHTML = "";

    } else if (javascriptRandomValue == 67 && javascriptInputAnswer !== __WEBPACK_IMPORTED_MODULE_4__questionsAndAnswers_javascriptAnswers__["a" /* javascriptAnswerArr */][67].A67) {
        javascriptDisplayAnswer.innerHTML = `
    <textarea name="text" class="answer_textarea" id="input">
function testElseIf(val) {
    if (val > 10) {
        return "Greater than 10";
    }
    else if (val < 5) {
        return "Smaller than 5";
    }
    else {
    return "Between 5 and 10";
    }
}
testElseIf(7);
          </textarea>`;
        javascriptIncorrectValue.innerHTML = "Incorrect..";
        javascriptNextButton.innerHTML = `<button class="nextButton javascriptColor1" onclick=javascriptBtn()>Next</button>`;
        javascriptRemoveValue.innerHTML = "";



    } else if (javascriptRandomValue == 68 && javascriptInputAnswer == __WEBPACK_IMPORTED_MODULE_4__questionsAndAnswers_javascriptAnswers__["a" /* javascriptAnswerArr */][68].A68) {
        javascriptCorrectValue.innerHTML = "Correct..";
        javascriptDisplayAnswer.innerHTML = `
        <textarea name="text" class="answer_textarea" id="input">Good Job :) </textarea>`;
        javascriptNextButton.innerHTML = `<button class="nextButton javascriptColor1" onclick=javascriptBtn()>Next</button>`;
        javascriptRemoveValue.innerHTML = "";

    } else if (javascriptRandomValue == 68 && javascriptInputAnswer !== __WEBPACK_IMPORTED_MODULE_4__questionsAndAnswers_javascriptAnswers__["a" /* javascriptAnswerArr */][68].A68) {
        javascriptDisplayAnswer.innerHTML = `
    <textarea name="text" class="answer_textarea" id="input">
function orderMyLogic(val) {
    if (val < 5) {
    return "Less than 5";
    } else if (val < 10) {
    return "Less than 10";
    } else {
    return "Greater than or equal to 10";
    }
}
            </textarea>`;
        javascriptIncorrectValue.innerHTML = "Incorrect..";
        javascriptNextButton.innerHTML = `<button class="nextButton javascriptColor1" onclick=javascriptBtn()>Next</button>`;
        javascriptRemoveValue.innerHTML = "";



    } else if (javascriptRandomValue == 69 && javascriptInputAnswer == __WEBPACK_IMPORTED_MODULE_4__questionsAndAnswers_javascriptAnswers__["a" /* javascriptAnswerArr */][69].A69) {
        javascriptCorrectValue.innerHTML = "Correct..";
        javascriptDisplayAnswer.innerHTML = `
        <textarea name="text" class="answer_textarea" id="input">Good Job :) </textarea>`;
        javascriptNextButton.innerHTML = `<button class="nextButton javascriptColor1" onclick=javascriptBtn()>Next</button>`;
        javascriptRemoveValue.innerHTML = "";

    } else if (javascriptRandomValue == 69 && javascriptInputAnswer !== __WEBPACK_IMPORTED_MODULE_4__questionsAndAnswers_javascriptAnswers__["a" /* javascriptAnswerArr */][69].A69) {
        javascriptDisplayAnswer.innerHTML = `
    <textarea name="text" class="answer_textarea" id="input">
function testSize(num) {
    if (num < 5){
        return "Tiny";
    }
    else if (num < 10) {
        return "Small";
    }
    else if (num < 15){
        return "Medium";
    }
    else if (num < 20){
        return "Large";
    }
    else {
        return "Huge";
    }
}
testSize(7);
          </textarea>`;
        javascriptIncorrectValue.innerHTML = "Incorrect..";
        javascriptNextButton.innerHTML = `<button class="nextButton javascriptColor1" onclick=javascriptBtn()>Next</button>`;
        javascriptRemoveValue.innerHTML = "";



    } else if (javascriptRandomValue == 70 && javascriptInputAnswer == __WEBPACK_IMPORTED_MODULE_4__questionsAndAnswers_javascriptAnswers__["a" /* javascriptAnswerArr */][70].A70) {
        javascriptCorrectValue.innerHTML = "Correct..";
        javascriptDisplayAnswer.innerHTML = `
        <textarea name="text" class="answer_textarea" id="input">Good Job :) </textarea>`;
        javascriptNextButton.innerHTML = `<button class="nextButton javascriptColor1" onclick=javascriptBtn()>Next</button>`;
        javascriptRemoveValue.innerHTML = "";

    } else if (javascriptRandomValue == 70 && javascriptInputAnswer !== __WEBPACK_IMPORTED_MODULE_4__questionsAndAnswers_javascriptAnswers__["a" /* javascriptAnswerArr */][70].A70) {
        javascriptDisplayAnswer.innerHTML = `
    <textarea name="text" class="answer_textarea" id="input">
function golfScore(par, strokes) {
    if (strokes == 1){
        return "Hole-in-one!";
    } else if (strokes <= par -2){
        return "Eagle";
    } else if (strokes == par -1) {
        return "Birdie";
    } else if (strokes == par) {
        return "Par";
    } else if (strokes == par +1) {
        return "Bogey";
    } else if (strokes == par +2) {
        return "Double Bogey";
    } else {
        return "Go Home!";
    }
}
golfScore(5, 4);
          </textarea>`;
        javascriptIncorrectValue.innerHTML = "Incorrect..";
        javascriptNextButton.innerHTML = `<button class="nextButton javascriptColor1" onclick=javascriptBtn()>Next</button>`;
        javascriptRemoveValue.innerHTML = "";



    } else if (javascriptRandomValue == 71 && javascriptInputAnswer == __WEBPACK_IMPORTED_MODULE_4__questionsAndAnswers_javascriptAnswers__["a" /* javascriptAnswerArr */][71].A71) {
        javascriptCorrectValue.innerHTML = "Correct..";
        javascriptDisplayAnswer.innerHTML = `
        <textarea name="text" class="answer_textarea" id="input">Good Job :) </textarea>`;
        javascriptNextButton.innerHTML = `<button class="nextButton javascriptColor1" onclick=javascriptBtn()>Next</button>`;
        javascriptRemoveValue.innerHTML = "";

    } else if (javascriptRandomValue == 71 && javascriptInputAnswer !== __WEBPACK_IMPORTED_MODULE_4__questionsAndAnswers_javascriptAnswers__["a" /* javascriptAnswerArr */][71].A71) {
        javascriptDisplayAnswer.innerHTML = `
    <textarea name="text" class="answer_textarea" id="input">
function caseInSwitch(val) {
    var answer = "";
    switch(val) {
        case 1:
        return "alpha";
        break;
        case 2:
        return "beta";
        break;
        case 3:
        return "gamma";
        break;
        case 4:
        return "delta";
        break;
    }
    return answer;  
}
caseInSwitch(1);
          </textarea>`;
        javascriptIncorrectValue.innerHTML = "Incorrect..";
        javascriptNextButton.innerHTML = `<button class="nextButton javascriptColor1" onclick=javascriptBtn()>Next</button>`;
        javascriptRemoveValue.innerHTML = "";



    } else if (javascriptRandomValue == 72 && javascriptInputAnswer == __WEBPACK_IMPORTED_MODULE_4__questionsAndAnswers_javascriptAnswers__["a" /* javascriptAnswerArr */][72].A72) {
        javascriptCorrectValue.innerHTML = "Correct..";
        javascriptDisplayAnswer.innerHTML = `
        <textarea name="text" class="answer_textarea" id="input">Good Job :) </textarea>`;
        javascriptNextButton.innerHTML = `<button class="nextButton javascriptColor1" onclick=javascriptBtn()>Next</button>`;
        javascriptRemoveValue.innerHTML = "";

    } else if (javascriptRandomValue == 72 && javascriptInputAnswer !== __WEBPACK_IMPORTED_MODULE_4__questionsAndAnswers_javascriptAnswers__["a" /* javascriptAnswerArr */][72].A72) {
        javascriptDisplayAnswer.innerHTML = `
    <textarea name="text" class="answer_textarea" id="input">
function switchOfStuff(val) {
    var answer = "";
    
    switch(val){
        case 'a': answer = 'apple'; 
        break;
        case 'b': answer = 'bird'; 
        break;
        case 'c': answer = 'cat'; 
        break;
        default: answer = 'stuff';
    }
    
    return answer;  
}
switchOfStuff(1);
          </textarea>`;
        javascriptIncorrectValue.innerHTML = "Incorrect..";
        javascriptNextButton.innerHTML = `<button class="nextButton javascriptColor1" onclick=javascriptBtn()>Next</button>`;
        javascriptRemoveValue.innerHTML = "";



    } else if (javascriptRandomValue == 73 && javascriptInputAnswer == __WEBPACK_IMPORTED_MODULE_4__questionsAndAnswers_javascriptAnswers__["a" /* javascriptAnswerArr */][73].A73) {
        javascriptCorrectValue.innerHTML = "Correct..";
        javascriptDisplayAnswer.innerHTML = `
        <textarea name="text" class="answer_textarea" id="input">Good Job :) </textarea>`;
        javascriptNextButton.innerHTML = `<button class="nextButton javascriptColor1" onclick=javascriptBtn()>Next</button>`;
        javascriptRemoveValue.innerHTML = "";

    } else if (javascriptRandomValue == 73 && javascriptInputAnswer !== __WEBPACK_IMPORTED_MODULE_4__questionsAndAnswers_javascriptAnswers__["a" /* javascriptAnswerArr */][73].A73) {
        javascriptDisplayAnswer.innerHTML = `
    <textarea name="text" class="answer_textarea" id="input">
function sequentialSizes(val) {
    var answer = "";
    switch(val){
        case 1: case 2: case 3:
        answer = "Low";
        break;
        case 4: case 5: case 6:
        answer = "Mid";
        break;
        case 7: case 8: case 9:
        answer = "High";
    } 
    return answer;  
}
sequentialSizes(1);
          </textarea>`;
        javascriptIncorrectValue.innerHTML = "Incorrect..";
        javascriptNextButton.innerHTML = `<button class="nextButton javascriptColor1" onclick=javascriptBtn()>Next</button>`;
        javascriptRemoveValue.innerHTML = "";



    } else if (javascriptRandomValue == 74 && javascriptInputAnswer == __WEBPACK_IMPORTED_MODULE_4__questionsAndAnswers_javascriptAnswers__["a" /* javascriptAnswerArr */][74].A74) {
        javascriptCorrectValue.innerHTML = "Correct..";
        javascriptDisplayAnswer.innerHTML = `
        <textarea name="text" class="answer_textarea" id="input">Good Job :) </textarea>`;
        javascriptNextButton.innerHTML = `<button class="nextButton javascriptColor1" onclick=javascriptBtn()>Next</button>`;
        javascriptRemoveValue.innerHTML = "";

    } else if (javascriptRandomValue == 74 && javascriptInputAnswer !== __WEBPACK_IMPORTED_MODULE_4__questionsAndAnswers_javascriptAnswers__["a" /* javascriptAnswerArr */][74].A74) {
        javascriptDisplayAnswer.innerHTML = `
    <textarea name="text" class="answer_textarea" id="input">
function chainToSwitch(val) {
    var answer = "";
    
    switch(val) {
        case "bob":
        answer = "Marley";
        break;
        case 42:
        answer = "The Answer";
        break;
        case 1:
        answer = "There is no #1";
        break;
        case 99:
        answer = "Missed me by this much!";
        break;
        case 7:
        answer = "Ate Nine";
    }
    return answer;
}
chainToSwitch(7);
          </textarea>`;
        javascriptIncorrectValue.innerHTML = "Incorrect..";
        javascriptNextButton.innerHTML = `<button class="nextButton javascriptColor1" onclick=javascriptBtn()>Next</button>`;
        javascriptRemoveValue.innerHTML = "";



    } else if (javascriptRandomValue == 75 && javascriptInputAnswer == __WEBPACK_IMPORTED_MODULE_4__questionsAndAnswers_javascriptAnswers__["a" /* javascriptAnswerArr */][75].A75) {
        javascriptCorrectValue.innerHTML = "Correct..";
        javascriptDisplayAnswer.innerHTML = `
        <textarea name="text" class="answer_textarea" id="input">Good Job :) </textarea>`;
        javascriptNextButton.innerHTML = `<button class="nextButton javascriptColor1" onclick=javascriptBtn()>Next</button>`;
        javascriptRemoveValue.innerHTML = "";

    } else if (javascriptRandomValue == 75 && javascriptInputAnswer !== __WEBPACK_IMPORTED_MODULE_4__questionsAndAnswers_javascriptAnswers__["a" /* javascriptAnswerArr */][75].A75) {
        javascriptDisplayAnswer.innerHTML = `
    <textarea name="text" class="answer_textarea" id="input">
function isLess(a, b) {
    return a <= b;
}
isLess(10, 15);
          </textarea>`;
        javascriptIncorrectValue.innerHTML = "Incorrect..";
        javascriptNextButton.innerHTML = `<button class="nextButton javascriptColor1" onclick=javascriptBtn()>Next</button>`;
        javascriptRemoveValue.innerHTML = "";



    } else if (javascriptRandomValue == 76 && javascriptInputAnswer == __WEBPACK_IMPORTED_MODULE_4__questionsAndAnswers_javascriptAnswers__["a" /* javascriptAnswerArr */][76].A76) {
        javascriptCorrectValue.innerHTML = "Correct..";
        javascriptDisplayAnswer.innerHTML = `
        <textarea name="text" class="answer_textarea" id="input">Good Job :) </textarea>`;
        javascriptNextButton.innerHTML = `<button class="nextButton javascriptColor1" onclick=javascriptBtn()>Next</button>`;
        javascriptRemoveValue.innerHTML = "";

    } else if (javascriptRandomValue == 76 && javascriptInputAnswer !== __WEBPACK_IMPORTED_MODULE_4__questionsAndAnswers_javascriptAnswers__["a" /* javascriptAnswerArr */][76].A76) {
        javascriptDisplayAnswer.innerHTML = `
    <textarea name="text" class="answer_textarea" id="input">
function abTest(a, b) {
    if (a < 0 || b < 0) return undefined;
    
    return Math.round(Math.pow(Math.sqrt(a) + Math.sqrt(b), 2));
}
abTest(2,2);
          </textarea>`;
        javascriptIncorrectValue.innerHTML = "Incorrect..";
        javascriptNextButton.innerHTML = `<button class="nextButton javascriptColor1" onclick=javascriptBtn()>Next</button>`;
        javascriptRemoveValue.innerHTML = "";



    } else if (javascriptRandomValue == 77 && javascriptInputAnswer == __WEBPACK_IMPORTED_MODULE_4__questionsAndAnswers_javascriptAnswers__["a" /* javascriptAnswerArr */][77].A77) {
        javascriptCorrectValue.innerHTML = "Correct..";
        javascriptDisplayAnswer.innerHTML = `
        <textarea name="text" class="answer_textarea" id="input">Good Job :) </textarea>`;
        javascriptNextButton.innerHTML = `<button class="nextButton javascriptColor1" onclick=javascriptBtn()>Next</button>`;
        javascriptRemoveValue.innerHTML = "";

    } else if (javascriptRandomValue == 77 && javascriptInputAnswer !== __WEBPACK_IMPORTED_MODULE_4__questionsAndAnswers_javascriptAnswers__["a" /* javascriptAnswerArr */][77].A77) {
        javascriptDisplayAnswer.innerHTML = `
    <textarea name="text" class="answer_textarea" id="input">
var count = 0;

function cc(card) {
    var regex = /[JQKA]/;
    if (card > 1 && card < 7){count++;}
    else if (card === 10 || String(card).match(regex)){count--;}
    
    if (count > 0) return count + " Bet";
    return count + " Hold";
    
}
cc(2); cc(3); cc(7); cc('K'); cc('A');
        </textarea>`;
        javascriptIncorrectValue.innerHTML = "Incorrect..";
        javascriptNextButton.innerHTML = `<button class="nextButton javascriptColor1" onclick=javascriptBtn()>Next</button>`;
        javascriptRemoveValue.innerHTML = "";



    } else if (javascriptRandomValue == 78 && javascriptInputAnswer == __WEBPACK_IMPORTED_MODULE_4__questionsAndAnswers_javascriptAnswers__["a" /* javascriptAnswerArr */][78].A78) {
        javascriptCorrectValue.innerHTML = "Correct..";
        javascriptDisplayAnswer.innerHTML = `
        <textarea name="text" class="answer_textarea" id="input">Good Job :) </textarea>`;
        javascriptNextButton.innerHTML = `<button class="nextButton javascriptColor1" onclick=javascriptBtn()>Next</button>`;
        javascriptRemoveValue.innerHTML = "";

    } else if (javascriptRandomValue == 78 && javascriptInputAnswer !== __WEBPACK_IMPORTED_MODULE_4__questionsAndAnswers_javascriptAnswers__["a" /* javascriptAnswerArr */][78].A78) {
        javascriptDisplayAnswer.innerHTML = `
    <textarea name="text" class="answer_textarea" id="input">
var myDog = {
    "name": "Camper",
    "legs": 4,
    "tails": 1,
    "friends": ["everything!"]
};
        </textarea>`;
        javascriptIncorrectValue.innerHTML = "Incorrect..";
        javascriptNextButton.innerHTML = `<button class="nextButton javascriptColor1" onclick=javascriptBtn()>Next</button>`;
        javascriptRemoveValue.innerHTML = "";



    } else if (javascriptRandomValue == 79 && javascriptInputAnswer == __WEBPACK_IMPORTED_MODULE_4__questionsAndAnswers_javascriptAnswers__["a" /* javascriptAnswerArr */][79].A79) {
        javascriptCorrectValue.innerHTML = "Correct..";
        javascriptDisplayAnswer.innerHTML = `
        <textarea name="text" class="answer_textarea" id="input">Good Job :) </textarea>`;
        javascriptNextButton.innerHTML = `<button class="nextButton javascriptColor1" onclick=javascriptBtn()>Next</button>`;
        javascriptRemoveValue.innerHTML = "";

    } else if (javascriptRandomValue == 79 && javascriptInputAnswer !== __WEBPACK_IMPORTED_MODULE_4__questionsAndAnswers_javascriptAnswers__["a" /* javascriptAnswerArr */][79].A79) {
        javascriptDisplayAnswer.innerHTML = `
    <textarea name="text" class="answer_textarea" id="input">
var testObj = {
    "hat": "ballcap",
    "shirt": "jersey",
    "shoes": "cleats"
};
var hatValue = testObj.hat;  
var shirtValue = testObj.shirt;
          </textarea>`;
        javascriptIncorrectValue.innerHTML = "Incorrect..";
        javascriptNextButton.innerHTML = `<button class="nextButton javascriptColor1" onclick=javascriptBtn()>Next</button>`;
        javascriptRemoveValue.innerHTML = "";



    } else if (javascriptRandomValue == 80 && javascriptInputAnswer == __WEBPACK_IMPORTED_MODULE_4__questionsAndAnswers_javascriptAnswers__["a" /* javascriptAnswerArr */][80].A80) {
        javascriptCorrectValue.innerHTML = "Correct..";
        javascriptDisplayAnswer.innerHTML = `
        <textarea name="text" class="answer_textarea" id="input">Good Job :) </textarea>`;
        javascriptNextButton.innerHTML = `<button class="nextButton javascriptColor1" onclick=javascriptBtn()>Next</button>`;
        javascriptRemoveValue.innerHTML = "";

    } else if (javascriptRandomValue == 80 && javascriptInputAnswer !== __WEBPACK_IMPORTED_MODULE_4__questionsAndAnswers_javascriptAnswers__["a" /* javascriptAnswerArr */][80].A80) {
        javascriptDisplayAnswer.innerHTML = `
    <textarea name="text" class="answer_textarea" id="input">
var testObj = {
    "an entree": "hamburger",
    "my side": "veggies",
    "the drink": "water"
};
var entreeValue = testObj["an entree"];  
var drinkValue = testObj["the drink"];
          </textarea>`;
        javascriptIncorrectValue.innerHTML = "Incorrect..";
        javascriptNextButton.innerHTML = `<button class="nextButton javascriptColor1" onclick=javascriptBtn()>Next</button>`;
        javascriptRemoveValue.innerHTML = "";



    } else if (javascriptRandomValue == 81 && javascriptInputAnswer == __WEBPACK_IMPORTED_MODULE_4__questionsAndAnswers_javascriptAnswers__["a" /* javascriptAnswerArr */][81].A81) {
        javascriptCorrectValue.innerHTML = "Correct..";
        javascriptDisplayAnswer.innerHTML = `
        <textarea name="text" class="answer_textarea" id="input">Good Job :) </textarea>`;
        javascriptNextButton.innerHTML = `<button class="nextButton javascriptColor1" onclick=javascriptBtn()>Next</button>`;
        javascriptRemoveValue.innerHTML = "";

    } else if (javascriptRandomValue == 81 && javascriptInputAnswer !== __WEBPACK_IMPORTED_MODULE_4__questionsAndAnswers_javascriptAnswers__["a" /* javascriptAnswerArr */][81].A81) {
        javascriptDisplayAnswer.innerHTML = `
    <textarea name="text" class="answer_textarea" id="input">
var testObj = {
    12: "Namath",
    16: "Montana",
    19: "Unitas"
};
var playerNumber = 16; 
var player = testObj[playerNumber];
          </textarea>`;
        javascriptIncorrectValue.innerHTML = "Incorrect..";
        javascriptNextButton.innerHTML = `<button class="nextButton javascriptColor1" onclick=javascriptBtn()>Next</button>`;
        javascriptRemoveValue.innerHTML = "";



    } else if (javascriptRandomValue == 82 && javascriptInputAnswer == __WEBPACK_IMPORTED_MODULE_4__questionsAndAnswers_javascriptAnswers__["a" /* javascriptAnswerArr */][82].A82) {
        javascriptCorrectValue.innerHTML = "Correct..";
        javascriptDisplayAnswer.innerHTML = `
        <textarea name="text" class="answer_textarea" id="input">Good Job :) </textarea>`;
        javascriptNextButton.innerHTML = `<button class="nextButton javascriptColor1" onclick=javascriptBtn()>Next</button>`;
        javascriptRemoveValue.innerHTML = "";

    } else if (javascriptRandomValue == 82 && javascriptInputAnswer !== __WEBPACK_IMPORTED_MODULE_4__questionsAndAnswers_javascriptAnswers__["a" /* javascriptAnswerArr */][82].A82) {
        javascriptDisplayAnswer.innerHTML = `
    <textarea name="text" class="answer_textarea" id="input">
var myDog = {
    "name": "Coder",
    "legs": 4,
    "tails": 1,
    "friends": ["freeCodeCamp Campers"]
};
myDog.name = "Happy Coder";
          </textarea>`;
        javascriptIncorrectValue.innerHTML = "Incorrect..";
        javascriptNextButton.innerHTML = `<button class="nextButton javascriptColor1" onclick=javascriptBtn()>Next</button>`;
        javascriptRemoveValue.innerHTML = "";



    } else if (javascriptRandomValue == 83 && javascriptInputAnswer == __WEBPACK_IMPORTED_MODULE_4__questionsAndAnswers_javascriptAnswers__["a" /* javascriptAnswerArr */][83].A83) {
        javascriptCorrectValue.innerHTML = "Correct..";
        javascriptDisplayAnswer.innerHTML = `
        <textarea name="text" class="answer_textarea" id="input">Good Job :) </textarea>`;
        javascriptNextButton.innerHTML = `<button class="nextButton javascriptColor1" onclick=javascriptBtn()>Next</button>`;
        javascriptRemoveValue.innerHTML = "";

    } else if (javascriptRandomValue == 83 && javascriptInputAnswer !== __WEBPACK_IMPORTED_MODULE_4__questionsAndAnswers_javascriptAnswers__["a" /* javascriptAnswerArr */][83].A83) {
        javascriptDisplayAnswer.innerHTML = `
    <textarea name="text" class="answer_textarea" id="input">
var myDog = {
    "name": "Happy Coder",
    "legs": 4,
    "tails": 1,
    "friends": ["freeCodeCamp Campers"]
};
myDog.bark = "woof";
          </textarea>`;
        javascriptIncorrectValue.innerHTML = "Incorrect..";
        javascriptNextButton.innerHTML = `<button class="nextButton javascriptColor1" onclick=javascriptBtn()>Next</button>`;
        javascriptRemoveValue.innerHTML = "";



    } else if (javascriptRandomValue == 84 && javascriptInputAnswer == __WEBPACK_IMPORTED_MODULE_4__questionsAndAnswers_javascriptAnswers__["a" /* javascriptAnswerArr */][84].A84) {
        javascriptCorrectValue.innerHTML = "Correct..";
        javascriptDisplayAnswer.innerHTML = `
        <textarea name="text" class="answer_textarea" id="input">Good Job :) </textarea>`;
        javascriptNextButton.innerHTML = `<button class="nextButton javascriptColor1" onclick=javascriptBtn()>Next</button>`;
        javascriptRemoveValue.innerHTML = "";

    } else if (javascriptRandomValue == 84 && javascriptInputAnswer !== __WEBPACK_IMPORTED_MODULE_4__questionsAndAnswers_javascriptAnswers__["a" /* javascriptAnswerArr */][84].A84) {
        javascriptDisplayAnswer.innerHTML = `
    <textarea name="text" class="answer_textarea" id="input">
var myDog = {
    "name": "Happy Coder",
    "legs": 4,
    "tails": 1,
    "friends": ["freeCodeCamp Campers"],
    "bark": "woof"
};
delete myDog.tails;
          </textarea>`;
        javascriptIncorrectValue.innerHTML = "Incorrect..";
        javascriptNextButton.innerHTML = `<button class="nextButton javascriptColor1" onclick=javascriptBtn()>Next</button>`;
        javascriptRemoveValue.innerHTML = "";



    } else if (javascriptRandomValue == 85 && javascriptInputAnswer == __WEBPACK_IMPORTED_MODULE_4__questionsAndAnswers_javascriptAnswers__["a" /* javascriptAnswerArr */][85].A85) {
        javascriptCorrectValue.innerHTML = "Correct..";
        javascriptDisplayAnswer.innerHTML = `
        <textarea name="text" class="answer_textarea" id="input">Good Job :) </textarea>`;
        javascriptNextButton.innerHTML = `<button class="nextButton javascriptColor1" onclick=javascriptBtn()>Next</button>`;
        javascriptRemoveValue.innerHTML = "";

    } else if (javascriptRandomValue == 85 && javascriptInputAnswer !== __WEBPACK_IMPORTED_MODULE_4__questionsAndAnswers_javascriptAnswers__["a" /* javascriptAnswerArr */][85].A85) {
        javascriptDisplayAnswer.innerHTML = `
    <textarea name="text" class="answer_textarea" id="input">
function phoneticLookup(val) {
    var result ="";
    
    var lookup= {
        
        "alpha":"Adams",
        
        "bravo": "Boston",
        
        "charlie": "Chicago",
        
        "delta":"Denver",
        
        "echo": "Easy",
        
        "foxtrot": "Frank",
    };
    
    result = lookup[val];
    
    return result;
}
    
phoneticLookup("charlie");
            </textarea>`;
        javascriptIncorrectValue.innerHTML = "Incorrect..";
        javascriptNextButton.innerHTML = `<button class="nextButton javascriptColor1" onclick=javascriptBtn()>Next</button>`;
        javascriptRemoveValue.innerHTML = "";



    } else if (javascriptRandomValue == 86 && javascriptInputAnswer == __WEBPACK_IMPORTED_MODULE_4__questionsAndAnswers_javascriptAnswers__["a" /* javascriptAnswerArr */][86].A86) {
        javascriptCorrectValue.innerHTML = "Correct..";
        javascriptDisplayAnswer.innerHTML = `
        <textarea name="text" class="answer_textarea" id="input">Good Job :) </textarea>`;
        javascriptNextButton.innerHTML = `<button class="nextButton javascriptColor1" onclick=javascriptBtn()>Next</button>`;
        javascriptRemoveValue.innerHTML = "";

    } else if (javascriptRandomValue == 86 && javascriptInputAnswer !== __WEBPACK_IMPORTED_MODULE_4__questionsAndAnswers_javascriptAnswers__["a" /* javascriptAnswerArr */][86].A86) {
        javascriptDisplayAnswer.innerHTML = `
    <textarea name="text" class="answer_textarea" id="input">
var myObj = {
    gift: "pony",
    pet: "kitten",
    bed: "sleigh"
};
function checkObj(checkProp) {
    if (myObj.hasOwnProperty(checkProp) === true) {
    return myObj[checkProp];
    } else {
    return "Not Found";
    }
}
checkObj("gift");
        </textarea>`;
        javascriptIncorrectValue.innerHTML = "Incorrect..";
        javascriptNextButton.innerHTML = `<button class="nextButton javascriptColor1" onclick=javascriptBtn()>Next</button>`;
        javascriptRemoveValue.innerHTML = "";



    } else if (javascriptRandomValue == 87 && javascriptInputAnswer == __WEBPACK_IMPORTED_MODULE_4__questionsAndAnswers_javascriptAnswers__["a" /* javascriptAnswerArr */][87].A87) {
        javascriptCorrectValue.innerHTML = "Correct..";
        javascriptDisplayAnswer.innerHTML = `
        <textarea name="text" class="answer_textarea" id="input">Good Job :) </textarea>`;
        javascriptNextButton.innerHTML = `<button class="nextButton javascriptColor1" onclick=javascriptBtn()>Next</button>`;
        javascriptRemoveValue.innerHTML = "";

    } else if (javascriptRandomValue == 87 && javascriptInputAnswer !== __WEBPACK_IMPORTED_MODULE_4__questionsAndAnswers_javascriptAnswers__["a" /* javascriptAnswerArr */][87].A87) {
        javascriptDisplayAnswer.innerHTML = `
    <textarea name="text" class="answer_textarea" id="input">
var myMusic = [
    {
        "artist": "Billy Joel",
        "title": "Piano Man",
        "release_year": 1973,
        "formats": [ 
        "CD",
        "8T",
        "LP"
        ],
        "gold": true
    },
    {
        "artist": "Deep Purple",
        "title": "Smoke on the water",
        "release_year": 1976,
        "formats": [ 
        "CD",
        "8T",
        "LP"
        ],
    }
];
           </textarea>`;
        javascriptIncorrectValue.innerHTML = "Incorrect..";
        javascriptNextButton.innerHTML = `<button class="nextButton javascriptColor1" onclick=javascriptBtn()>Next</button>`;
        javascriptRemoveValue.innerHTML = "";



    } else if (javascriptRandomValue == 88 && javascriptInputAnswer == __WEBPACK_IMPORTED_MODULE_4__questionsAndAnswers_javascriptAnswers__["a" /* javascriptAnswerArr */][88].A88) {
        javascriptCorrectValue.innerHTML = "Correct..";
        javascriptDisplayAnswer.innerHTML = `
        <textarea name="text" class="answer_textarea" id="input">Good Job :) </textarea>`;
        javascriptNextButton.innerHTML = `<button class="nextButton javascriptColor1" onclick=javascriptBtn()>Next</button>`;
        javascriptRemoveValue.innerHTML = "";

    } else if (javascriptRandomValue == 88 && javascriptInputAnswer !== __WEBPACK_IMPORTED_MODULE_4__questionsAndAnswers_javascriptAnswers__["a" /* javascriptAnswerArr */][88].A88) {
        javascriptDisplayAnswer.innerHTML = `
    <textarea name="text" class="answer_textarea" id="input">
var myStorage = {
    "car": {
        "inside": {
        "glove box": "maps",
        "passenger seat": "crumbs"
        },
        "outside": {
        "trunk": "jack"
        }
    }
};
    
var gloveBoxContents = myStorage.car.inside['glove box'];
          </textarea>`;
        javascriptIncorrectValue.innerHTML = "Incorrect..";
        javascriptNextButton.innerHTML = `<button class="nextButton javascriptColor1" onclick=javascriptBtn()>Next</button>`;
        javascriptRemoveValue.innerHTML = "";



    } else if (javascriptRandomValue == 89 && javascriptInputAnswer == __WEBPACK_IMPORTED_MODULE_4__questionsAndAnswers_javascriptAnswers__["a" /* javascriptAnswerArr */][89].A89) {
        javascriptCorrectValue.innerHTML = "Correct..";
        javascriptDisplayAnswer.innerHTML = `
        <textarea name="text" class="answer_textarea" id="input">Good Job :) </textarea>`;
        javascriptNextButton.innerHTML = `<button class="nextButton javascriptColor1" onclick=javascriptBtn()>Next</button>`;
        javascriptRemoveValue.innerHTML = "";

    } else if (javascriptRandomValue == 89 && javascriptInputAnswer !== __WEBPACK_IMPORTED_MODULE_4__questionsAndAnswers_javascriptAnswers__["a" /* javascriptAnswerArr */][89].A89) {
        javascriptDisplayAnswer.innerHTML = `
    <textarea name="text" class="answer_textarea" id="input">
var myPlants = [
    { 
        type: "flowers",
        list: [
        "rose",
        "tulip",
        "dandelion"
        ]
    },
    {
        type: "trees",
        list: [
        "fir",
        "pine",
        "birch"
        ]
    }  
];
    
var secondTree = myPlants[1].list[1];
          </textarea>`;
        javascriptIncorrectValue.innerHTML = "Incorrect..";
        javascriptNextButton.innerHTML = `<button class="nextButton javascriptColor1" onclick=javascriptBtn()>Next</button>`;
        javascriptRemoveValue.innerHTML = "";



    } else if (javascriptRandomValue == 90 && javascriptInputAnswer == __WEBPACK_IMPORTED_MODULE_4__questionsAndAnswers_javascriptAnswers__["a" /* javascriptAnswerArr */][90].A90) {
        javascriptCorrectValue.innerHTML = "Correct..";
        javascriptDisplayAnswer.innerHTML = `
        <textarea name="text" class="answer_textarea" id="input">Good Job :) </textarea>`;
        javascriptNextButton.innerHTML = `<button class="nextButton javascriptColor1" onclick=javascriptBtn()>Next</button>`;
        javascriptRemoveValue.innerHTML = "";

    } else if (javascriptRandomValue == 90 && javascriptInputAnswer !== __WEBPACK_IMPORTED_MODULE_4__questionsAndAnswers_javascriptAnswers__["a" /* javascriptAnswerArr */][90].A90) {
        javascriptDisplayAnswer.innerHTML = `
    <textarea name="text" class="answer_textarea" id="input">
var collection = {
    "2548": {
        "album": "Slippery When Wet",
        "artist": "Bon Jovi",
        "tracks": [ 
        "Let It Rock", 
        "You Give Love a Bad Name" 
        ]
    },
    "2468": {
        "album": "1999",
        "artist": "Prince",
        "tracks": [ 
        "1999", 
        "Little Red Corvette" 
        ]
    },
    "1245": {
        "artist": "Robert Palmer",
        "tracks": [ ]
    },
    "5439": {
        "album": "ABBA Gold"
    }
};
var collectionCopy = JSON.parse(JSON.stringify(collection));

function updateRecords(id, prop, value) {
    if (prop === "tracks" && value !== "") {
    if(collection[id][prop]) {
    collection[id][prop].push(value);
    }
    else {
    collection[id][prop]=[value];
    }
    } else if (value !== "") {
    collection[id][prop] = value;
    } else {
    delete collection[id][prop];
    }
    
    return collection;
}
updateRecords(5439, "artist", "ABBA");
        </textarea>`;
        javascriptIncorrectValue.innerHTML = "Incorrect..";
        javascriptNextButton.innerHTML = `<button class="nextButton javascriptColor1" onclick=javascriptBtn()>Next</button>`;
        javascriptRemoveValue.innerHTML = "";



    } else if (javascriptRandomValue == 91 && javascriptInputAnswer == __WEBPACK_IMPORTED_MODULE_4__questionsAndAnswers_javascriptAnswers__["a" /* javascriptAnswerArr */][91].A91) {
        javascriptCorrectValue.innerHTML = "Correct..";
        javascriptDisplayAnswer.innerHTML = `
        <textarea name="text" class="answer_textarea" id="input">Good Job :) </textarea>`;
        javascriptNextButton.innerHTML = `<button class="nextButton javascriptColor1" onclick=javascriptBtn()>Next</button>`;
        javascriptRemoveValue.innerHTML = "";

    } else if (javascriptRandomValue == 91 && javascriptInputAnswer !== __WEBPACK_IMPORTED_MODULE_4__questionsAndAnswers_javascriptAnswers__["a" /* javascriptAnswerArr */][91].A91) {
        javascriptDisplayAnswer.innerHTML = `
    <textarea name="text" class="answer_textarea" id="input">
var myArray = [];
var i = 0;
while (i <= 4){
    myArray.push(i);
    i++;
}
        </textarea>`;
        javascriptIncorrectValue.innerHTML = "Incorrect..";
        javascriptNextButton.innerHTML = `<button class="nextButton javascriptColor1" onclick=javascriptBtn()>Next</button>`;
        javascriptRemoveValue.innerHTML = "";



    } else if (javascriptRandomValue == 92 && javascriptInputAnswer == __WEBPACK_IMPORTED_MODULE_4__questionsAndAnswers_javascriptAnswers__["a" /* javascriptAnswerArr */][92].A92) {
        javascriptCorrectValue.innerHTML = "Correct..";
        javascriptDisplayAnswer.innerHTML = `
        <textarea name="text" class="answer_textarea" id="input">Good Job :) </textarea>`;
        javascriptNextButton.innerHTML = `<button class="nextButton javascriptColor1" onclick=javascriptBtn()>Next</button>`;
        javascriptRemoveValue.innerHTML = "";

    } else if (javascriptRandomValue == 92 && javascriptInputAnswer !== __WEBPACK_IMPORTED_MODULE_4__questionsAndAnswers_javascriptAnswers__["a" /* javascriptAnswerArr */][92].A92) {
        javascriptDisplayAnswer.innerHTML = `
    <textarea name="text" class="answer_textarea" id="input">
var myArray = [];
for(var i=1; i<=5; i++){
myArray.push(i);
}
        </textarea>`;
        javascriptIncorrectValue.innerHTML = "Incorrect..";
        javascriptNextButton.innerHTML = `<button class="nextButton javascriptColor1" onclick=javascriptBtn()>Next</button>`;
        javascriptRemoveValue.innerHTML = "";



    } else if (javascriptRandomValue == 93 && javascriptInputAnswer == __WEBPACK_IMPORTED_MODULE_4__questionsAndAnswers_javascriptAnswers__["a" /* javascriptAnswerArr */][93].A93) {
        javascriptCorrectValue.innerHTML = "Correct..";
        javascriptDisplayAnswer.innerHTML = `
        <textarea name="text" class="answer_textarea" id="input">Good Job :) </textarea>`;
        javascriptNextButton.innerHTML = `<button class="nextButton javascriptColor1" onclick=javascriptBtn()>Next</button>`;
        javascriptRemoveValue.innerHTML = "";

    } else if (javascriptRandomValue == 93 && javascriptInputAnswer !== __WEBPACK_IMPORTED_MODULE_4__questionsAndAnswers_javascriptAnswers__["a" /* javascriptAnswerArr */][93].A93) {
        javascriptDisplayAnswer.innerHTML = `
    <textarea name="text" class="answer_textarea" id="input">
var myArray = [];
for (var i = 1; i < 10; i += 2) {
myArray.push(i);
}
        </textarea>`;
        javascriptIncorrectValue.innerHTML = "Incorrect..";
        javascriptNextButton.innerHTML = `<button class="nextButton javascriptColor1" onclick=javascriptBtn()>Next</button>`;
        javascriptRemoveValue.innerHTML = "";



    } else if (javascriptRandomValue == 94 && javascriptInputAnswer == __WEBPACK_IMPORTED_MODULE_4__questionsAndAnswers_javascriptAnswers__["a" /* javascriptAnswerArr */][94].A94) {
        javascriptCorrectValue.innerHTML = "Correct..";
        javascriptDisplayAnswer.innerHTML = `
        <textarea name="text" class="answer_textarea" id="input">Good Job :) </textarea>`;
        javascriptNextButton.innerHTML = `<button class="nextButton javascriptColor1" onclick=javascriptBtn()>Next</button>`;
        javascriptRemoveValue.innerHTML = "";

    } else if (javascriptRandomValue == 94 && javascriptInputAnswer !== __WEBPACK_IMPORTED_MODULE_4__questionsAndAnswers_javascriptAnswers__["a" /* javascriptAnswerArr */][94].A94) {
        javascriptDisplayAnswer.innerHTML = `
    <textarea name="text" class="answer_textarea" id="input">
var myArray = [];

for (var i = 9; i > 0; i-=2){
    myArray.push(i)
}
        </textarea>`;
        javascriptIncorrectValue.innerHTML = "Incorrect..";
        javascriptNextButton.innerHTML = `<button class="nextButton javascriptColor1" onclick=javascriptBtn()>Next</button>`;
        javascriptRemoveValue.innerHTML = "";



    } else if (javascriptRandomValue == 95 && javascriptInputAnswer == __WEBPACK_IMPORTED_MODULE_4__questionsAndAnswers_javascriptAnswers__["a" /* javascriptAnswerArr */][95].A95) {
        javascriptCorrectValue.innerHTML = "Correct..";
        javascriptDisplayAnswer.innerHTML = `
        <textarea name="text" class="answer_textarea" id="input">Good Job :) </textarea>`;
        javascriptNextButton.innerHTML = `<button class="nextButton javascriptColor1" onclick=javascriptBtn()>Next</button>`;
        javascriptRemoveValue.innerHTML = "";

    } else if (javascriptRandomValue == 95 && javascriptInputAnswer !== __WEBPACK_IMPORTED_MODULE_4__questionsAndAnswers_javascriptAnswers__["a" /* javascriptAnswerArr */][95].A95) {
        javascriptDisplayAnswer.innerHTML = `
    <textarea name="text" class="answer_textarea" id="input">
var myArr = [ 2, 3, 4, 5, 6];
var total = 0;

for (var i = 0; i < myArr.length; i++) {
    total += myArr[i];
}
        </textarea>`;
        javascriptIncorrectValue.innerHTML = "Incorrect..";
        javascriptNextButton.innerHTML = `<button class="nextButton javascriptColor1" onclick=javascriptBtn()>Next</button>`;
        javascriptRemoveValue.innerHTML = "";



    } else if (javascriptRandomValue == 96 && javascriptInputAnswer == __WEBPACK_IMPORTED_MODULE_4__questionsAndAnswers_javascriptAnswers__["a" /* javascriptAnswerArr */][96].A96) {
        javascriptCorrectValue.innerHTML = "Correct..";
        javascriptDisplayAnswer.innerHTML = `
        <textarea name="text" class="answer_textarea" id="input">Good Job :) </textarea>`;
        javascriptNextButton.innerHTML = `<button class="nextButton javascriptColor1" onclick=javascriptBtn()>Next</button>`;
        javascriptRemoveValue.innerHTML = "";

    } else if (javascriptRandomValue == 96 && javascriptInputAnswer !== __WEBPACK_IMPORTED_MODULE_4__questionsAndAnswers_javascriptAnswers__["a" /* javascriptAnswerArr */][96].A96) {
        javascriptDisplayAnswer.innerHTML = `
    <textarea name="text" class="answer_textarea" id="input">
function multiplyAll(arr) {
    var product = 1;
    for(var i=0; i < arr.length; i++){
        for (var j=0; j < arr[i].length; j++){
        product = product * arr[i][j];
        }
    }
    return product;
}
multiplyAll([[1,2],[3,4],[5,6,7]]);
          </textarea>`;
        javascriptIncorrectValue.innerHTML = "Incorrect..";
        javascriptNextButton.innerHTML = `<button class="nextButton javascriptColor1" onclick=javascriptBtn()>Next</button>`;
        javascriptRemoveValue.innerHTML = "";



    } else if (javascriptRandomValue == 97 && javascriptInputAnswer == __WEBPACK_IMPORTED_MODULE_4__questionsAndAnswers_javascriptAnswers__["a" /* javascriptAnswerArr */][97].A97) {
        javascriptCorrectValue.innerHTML = "Correct..";
        javascriptDisplayAnswer.innerHTML = `
        <textarea name="text" class="answer_textarea" id="input">Good Job :) </textarea>`;
        javascriptNextButton.innerHTML = `<button class="nextButton javascriptColor1" onclick=javascriptBtn()>Next</button>`;
        javascriptRemoveValue.innerHTML = "";

    } else if (javascriptRandomValue == 97 && javascriptInputAnswer !== __WEBPACK_IMPORTED_MODULE_4__questionsAndAnswers_javascriptAnswers__["a" /* javascriptAnswerArr */][97].A97) {
        javascriptDisplayAnswer.innerHTML = `
    <textarea name="text" class="answer_textarea" id="input">
var myArray = [];
var i = 10;
do {
    myArray.push(i);
    i++;
} while (i < 5)
        </textarea>`;
        javascriptIncorrectValue.innerHTML = "Incorrect..";
        javascriptNextButton.innerHTML = `<button class="nextButton javascriptColor1" onclick=javascriptBtn()>Next</button>`;
        javascriptRemoveValue.innerHTML = "";



    } else if (javascriptRandomValue == 98 && javascriptInputAnswer == __WEBPACK_IMPORTED_MODULE_4__questionsAndAnswers_javascriptAnswers__["a" /* javascriptAnswerArr */][98].A98) {
        javascriptCorrectValue.innerHTML = "Correct..";
        javascriptDisplayAnswer.innerHTML = `
        <textarea name="text" class="answer_textarea" id="input">Good Job :) </textarea>`;
        javascriptNextButton.innerHTML = `<button class="nextButton javascriptColor1" onclick=javascriptBtn()>Next</button>`;
        javascriptRemoveValue.innerHTML = "";

    } else if (javascriptRandomValue == 98 && javascriptInputAnswer !== __WEBPACK_IMPORTED_MODULE_4__questionsAndAnswers_javascriptAnswers__["a" /* javascriptAnswerArr */][98].A98) {
        javascriptDisplayAnswer.innerHTML = `
    <textarea name="text" class="answer_textarea" id="input">
var contacts = [
    {
        "firstName": "Akira",
        "lastName": "Laine",
        "number": "0543236543",
        "likes": ["Pizza", "Coding", "Brownie Points"]
    },
    {
        "firstName": "Harry",
        "lastName": "Potter",
        "number": "0994372684",
        "likes": ["Hogwarts", "Magic", "Hagrid"]
    },
    {
        "firstName": "Sherlock",
        "lastName": "Holmes",
        "number": "0487345643",
        "likes": ["Intriguing Cases", "Violin"]
    },
    {
        "firstName": "Kristian",
        "lastName": "Vos",
        "number": "unknown",
        "likes": ["JavaScript", "Gaming", "Foxes"]
    }
    ];
    
    
    function lookUpProfile(name, prop){
    for (var x = 0; x < contacts.length; x++){
    if (contacts[x].firstName === name) {
        if (contacts[x].hasOwnProperty(prop)) {
            return contacts[x][prop];
        } else {
            return "No such property";
        }
    }
    }
    return "No such contact";
    
}
lookUpProfile("Akira", "likes");
          </textarea>`;
        javascriptIncorrectValue.innerHTML = "Incorrect..";
        javascriptNextButton.innerHTML = `<button class="nextButton javascriptColor1" onclick=javascriptBtn()>Next</button>`;
        javascriptRemoveValue.innerHTML = "";



    } else if (javascriptRandomValue == 99 && javascriptInputAnswer == __WEBPACK_IMPORTED_MODULE_4__questionsAndAnswers_javascriptAnswers__["a" /* javascriptAnswerArr */][99].A99) {
        javascriptCorrectValue.innerHTML = "Correct..";
        javascriptDisplayAnswer.innerHTML = `
        <textarea name="text" class="answer_textarea" id="input">Good Job :) </textarea>`;
        javascriptNextButton.innerHTML = `<button class="nextButton javascriptColor1" onclick=javascriptBtn()>Next</button>`;
        javascriptRemoveValue.innerHTML = "";

    } else if (javascriptRandomValue == 99 && javascriptInputAnswer !== __WEBPACK_IMPORTED_MODULE_4__questionsAndAnswers_javascriptAnswers__["a" /* javascriptAnswerArr */][99].A99) {
        javascriptDisplayAnswer.innerHTML = `
    <textarea name="text" class="answer_textarea" id="input">
function randomFraction() {
    var result = 0;
    while (result === 0) {
        result = Math.random();
    }
    
    return result;  
    
}
          </textarea>`;
        javascriptIncorrectValue.innerHTML = "Incorrect..";
        javascriptNextButton.innerHTML = `<button class="nextButton javascriptColor1" onclick=javascriptBtn()>Next</button>`;
        javascriptRemoveValue.innerHTML = "";



    } else if (javascriptRandomValue == 100 && javascriptInputAnswer == __WEBPACK_IMPORTED_MODULE_4__questionsAndAnswers_javascriptAnswers__["a" /* javascriptAnswerArr */][100].A100) {
        javascriptCorrectValue.innerHTML = "Correct..";
        javascriptDisplayAnswer.innerHTML = `
        <textarea name="text" class="answer_textarea" id="input">Good Job :) </textarea>`;
        javascriptNextButton.innerHTML = `<button class="nextButton javascriptColor1" onclick=javascriptBtn()>Next</button>`;
        javascriptRemoveValue.innerHTML = "";

    } else if (javascriptRandomValue == 100 && javascriptInputAnswer !== __WEBPACK_IMPORTED_MODULE_4__questionsAndAnswers_javascriptAnswers__["a" /* javascriptAnswerArr */][100].A100) {
        javascriptDisplayAnswer.innerHTML = `
    <textarea name="text" class="answer_textarea" id="input">
var randomNumberBetween0and19 = Math.floor(Math.random() * 20);

function randomWholeNum() {
    
    return Math.floor(Math.random() * 10);
}
        </textarea>`;
        javascriptIncorrectValue.innerHTML = "Incorrect..";
        javascriptNextButton.innerHTML = `<button class="nextButton javascriptColor1" onclick=javascriptBtn()>Next</button>`;
        javascriptRemoveValue.innerHTML = "";



    } else if (javascriptRandomValue == 101 && javascriptInputAnswer == __WEBPACK_IMPORTED_MODULE_4__questionsAndAnswers_javascriptAnswers__["a" /* javascriptAnswerArr */][101].A101) {
        javascriptCorrectValue.innerHTML = "Correct..";
        javascriptDisplayAnswer.innerHTML = `
        <textarea name="text" class="answer_textarea" id="input">Good Job :) </textarea>`;
        javascriptNextButton.innerHTML = `<button class="nextButton javascriptColor1" onclick=javascriptBtn()>Next</button>`;
        javascriptRemoveValue.innerHTML = "";

    } else if (javascriptRandomValue == 101 && javascriptInputAnswer !== __WEBPACK_IMPORTED_MODULE_4__questionsAndAnswers_javascriptAnswers__["a" /* javascriptAnswerArr */][101].A101) {
        javascriptDisplayAnswer.innerHTML = `
    <textarea name="text" class="answer_textarea" id="input">
function randomRange(myMin, myMax) {
    
    return Math.floor(Math.random() * (myMax - myMin + 1) + myMin);
    
}
var myRandom = randomRange(5, 15);
          </textarea>`;
        javascriptIncorrectValue.innerHTML = "Incorrect..";
        javascriptNextButton.innerHTML = `<button class="nextButton javascriptColor1" onclick=javascriptBtn()>Next</button>`;
        javascriptRemoveValue.innerHTML = "";



    } else if (javascriptRandomValue == 102 && javascriptInputAnswer == __WEBPACK_IMPORTED_MODULE_4__questionsAndAnswers_javascriptAnswers__["a" /* javascriptAnswerArr */][102].A102) {
        javascriptCorrectValue.innerHTML = "Correct..";
        javascriptDisplayAnswer.innerHTML = `
        <textarea name="text" class="answer_textarea" id="input">Good Job :) </textarea>`;
        javascriptNextButton.innerHTML = `<button class="nextButton javascriptColor1" onclick=javascriptBtn()>Next</button>`;
        javascriptRemoveValue.innerHTML = "";

    } else if (javascriptRandomValue == 102 && javascriptInputAnswer !== __WEBPACK_IMPORTED_MODULE_4__questionsAndAnswers_javascriptAnswers__["a" /* javascriptAnswerArr */][102].A102) {
        javascriptDisplayAnswer.innerHTML = `
    <textarea name="text" class="answer_textarea" id="input">
function convertToInteger(str) {
    
    return parseInt(str);
}
    
convertToInteger("10011");
            </textarea>`;
        javascriptIncorrectValue.innerHTML = "Incorrect..";
        javascriptNextButton.innerHTML = `<button class="nextButton javascriptColor1" onclick=javascriptBtn()>Next</button>`;
        javascriptRemoveValue.innerHTML = "";



    } else if (javascriptRandomValue == 103 && javascriptInputAnswer == __WEBPACK_IMPORTED_MODULE_4__questionsAndAnswers_javascriptAnswers__["a" /* javascriptAnswerArr */][103].A103) {
        javascriptCorrectValue.innerHTML = "Correct..";
        javascriptDisplayAnswer.innerHTML = `
        <textarea name="text" class="answer_textarea" id="input">Good Job :) </textarea>`;
        javascriptNextButton.innerHTML = `<button class="nextButton javascriptColor1" onclick=javascriptBtn()>Next</button>`;
        javascriptRemoveValue.innerHTML = "";

    } else if (javascriptRandomValue == 103 && javascriptInputAnswer !== __WEBPACK_IMPORTED_MODULE_4__questionsAndAnswers_javascriptAnswers__["a" /* javascriptAnswerArr */][103].A103) {
        javascriptDisplayAnswer.innerHTML = `
    <textarea name="text" class="answer_textarea" id="input">
function convertToInteger(str) {
    var radix = 2;
    return parseInt(str, radix);
}
    
convertToInteger("10011");
            </textarea>`;
        javascriptIncorrectValue.innerHTML = "Incorrect..";
        javascriptNextButton.innerHTML = `<button class="nextButton javascriptColor1" onclick=javascriptBtn()>Next</button>`;
        javascriptRemoveValue.innerHTML = "";



    } else if (javascriptRandomValue == 104 && javascriptInputAnswer == __WEBPACK_IMPORTED_MODULE_4__questionsAndAnswers_javascriptAnswers__["a" /* javascriptAnswerArr */][104].A104) {
        javascriptCorrectValue.innerHTML = "Correct..";
        javascriptDisplayAnswer.innerHTML = `
        <textarea name="text" class="answer_textarea" id="input">Good Job :) </textarea>`;
        javascriptNextButton.innerHTML = `<button class="nextButton javascriptColor1" onclick=javascriptBtn()>Next</button>`;
        javascriptRemoveValue.innerHTML = "";

    } else if (javascriptRandomValue == 104 && javascriptInputAnswer !== __WEBPACK_IMPORTED_MODULE_4__questionsAndAnswers_javascriptAnswers__["a" /* javascriptAnswerArr */][104].A104) {
        javascriptDisplayAnswer.innerHTML = `
    <textarea name="text" class="answer_textarea" id="input">
function checkEqual(a, b) {
    return a === b ? true : false;
}
checkEqual(1, 2);
          </textarea>`;
        javascriptIncorrectValue.innerHTML = "Incorrect..";
        javascriptNextButton.innerHTML = `<button class="nextButton javascriptColor1" onclick=javascriptBtn()>Next</button>`;
        javascriptRemoveValue.innerHTML = "";



    } else if (javascriptRandomValue == 105 && javascriptInputAnswer == __WEBPACK_IMPORTED_MODULE_4__questionsAndAnswers_javascriptAnswers__["a" /* javascriptAnswerArr */][105].A105) {
        javascriptCorrectValue.innerHTML = "Correct..";
        javascriptDisplayAnswer.innerHTML = `
        <textarea name="text" class="answer_textarea" id="input">Good Job :) </textarea>`;
        javascriptNextButton.innerHTML = `<button class="nextButton javascriptColor1" onclick=javascriptBtn()>Next</button>`;
        javascriptRemoveValue.innerHTML = "";

    } else if (javascriptRandomValue == 105 && javascriptInputAnswer !== __WEBPACK_IMPORTED_MODULE_4__questionsAndAnswers_javascriptAnswers__["a" /* javascriptAnswerArr */][105].A105) {
        javascriptDisplayAnswer.innerHTML = `
    <textarea name="text" class="answer_textarea" id="input">
function checkSign(num) {
    return (
        num > 0 ? "positive" :
        num < 0 ? "negative" :
        "zero"
    );
}
          </textarea>`;
        javascriptIncorrectValue.innerHTML = "Incorrect..";
        javascriptNextButton.innerHTML = `<button class="nextButton javascriptColor1" onclick=javascriptBtn()>Next</button>`;
        javascriptRemoveValue.innerHTML = "";



    }

    else {
        javascriptIncorrectValue.innerHTML = "Incorrect..";
        javascriptNextButton.innerHTML = `<button class="nextButton javascriptColor1" onclick=javascriptBtn()>Next</button>`;
        javascriptRemoveValue.innerHTML = "";
    }

}
window.javascriptSubmit = javascriptSubmit; /* to make submit global*/

function javascriptButton() {
    javascriptTest = document.getElementById("javascriptAddedQuestion").innerHTML = __WEBPACK_IMPORTED_MODULE_5__questionsAndAnswers_javascriptQuestions__["a" /* javascriptQuestionArr */][javascriptRandomValue]; /* giving random question to html */

    return javascriptTest;
}
window.javascriptButton = javascriptButton;

function javascriptShowTest() {
    var javascriptInputBox = document.getElementById("javascriptRemove").style.display = "block";
    return javascriptInputBox;
}
window.javascriptShowTest = javascriptShowTest;
function javascriptBtn() {
    javascriptRandomValue = Math.floor(Math.random() * __WEBPACK_IMPORTED_MODULE_5__questionsAndAnswers_javascriptQuestions__["a" /* javascriptQuestionArr */].length); /* buton next in html to make a next random question*/
    document.getElementById("javascriptAddedQuestion").innerHTML = __WEBPACK_IMPORTED_MODULE_5__questionsAndAnswers_javascriptQuestions__["a" /* javascriptQuestionArr */][javascriptRandomValue]; /* giving random question to html */
    document.getElementById("javascriptElementButton").innerHTML = "";/* to clean javascriptElementButton*/
    document.getElementById("javascriptRemove").innerHTML = `<textarea name="text" class="answer_textarea" id="input"></textarea></br>
      <button class="answer_submit javascriptColor1" id = "javascriptStartButton" onclick="javascriptSubmit()">Submit</button>`;/* to create next text area and Submit button. */
    document.getElementById("javascriptCheckingAnswer").innerHTML = "";
    document.getElementById("javascriptShowingAnswer").innerHTML = "";
}
window.javascriptBtn = javascriptBtn;/* to make submit global*/


























var javascriptEs6RandomValue = Math.floor(Math.random() * __WEBPACK_IMPORTED_MODULE_7__questionsAndAnswers_javascriptEs6Questions__["a" /* javascriptEs6QuestionArr */].length); /* taking random question from htmlQuestionArr*/


function javascriptEs6Submit() { /* function for html submit button*/

    var javascriptEs6InputAnswer = input.value.replace(/\s+/g, ``); /*replace(/\s+/g, `` is removing all spaces. Avoid checking all the spaces to compare text*/
    var javascriptEs6CorrectValue = document.getElementById("javascriptEs6CheckingAnswer"); /* making getElementById code shorter*/
    var javascriptEs6IncorrectValue = document.getElementById("javascriptEs6CheckingAnswer");
    var javascriptEs6DisplayAnswer = document.getElementById("javascriptEs6ShowingAnswer");
    var javascriptEs6NextButton = document.getElementById("javascriptEs6ElementButton");
    var javascriptEs6RemoveValue = document.getElementById("javascriptEs6Remove");

    if (javascriptEs6RandomValue == 0 && javascriptEs6InputAnswer == __WEBPACK_IMPORTED_MODULE_6__questionsAndAnswers_javascriptEs6Answers__["a" /* javascriptEs6AnswerArr */][0].A0) { /* checking if javascriptEs6RandomValue is 0 and if putting answer the same as javascriptEs6AnswerArr*//*A0 is just that I can track answer numbers when adding questions and answers*/
        javascriptEs6CorrectValue.innerHTML = "Correct..";
        javascriptEs6DisplayAnswer.innerHTML = `
        <textarea name="text" class="answer_textarea" id="input">Good Job :) </textarea>`;
        javascriptEs6NextButton.innerHTML = `<button class="nextButton javascriptColor1" onclick=javascriptEs6Btn()>Next</button>`; /* creating next button with javascriptEs6Btn()function*/
        javascriptEs6RemoveValue.innerHTML = "";/* removing in html answer*/



    } else if (javascriptEs6RandomValue == 0 && javascriptEs6InputAnswer !== __WEBPACK_IMPORTED_MODULE_6__questionsAndAnswers_javascriptEs6Answers__["a" /* javascriptEs6AnswerArr */][0].A0) {/*  if random value not == then giving then display the answere.*/
        javascriptEs6DisplayAnswer.innerHTML = `
    <textarea name="text" class="answer_textarea" id="input">
let catName;
let quote;
function catTalk() {
    "use strict";

    catName = "Oliver";
    quote = catName + " says Meow!";

}
catTalk();
        </textarea>`;
        javascriptEs6IncorrectValue.innerHTML = "Incorrect..";
        javascriptEs6NextButton.innerHTML = `<button class="nextButton javascriptColor1" onclick=javascriptEs6Btn()>Next</button>`;
        javascriptEs6RemoveValue.innerHTML = "";



    } else if (javascriptEs6RandomValue == 1 && javascriptEs6InputAnswer == __WEBPACK_IMPORTED_MODULE_6__questionsAndAnswers_javascriptEs6Answers__["a" /* javascriptEs6AnswerArr */][1].A1) {
        javascriptEs6CorrectValue.innerHTML = "Correct..";
        javascriptEs6DisplayAnswer.innerHTML = `
        <textarea name="text" class="answer_textarea" id="input">Good Job :) </textarea>`;
        javascriptEs6NextButton.innerHTML = `<button class="nextButton javascriptColor1" onclick=javascriptEs6Btn()>Next</button>`;
        javascriptEs6RemoveValue.innerHTML = "";

    } else if (javascriptEs6RandomValue == 1 && javascriptEs6InputAnswer !== __WEBPACK_IMPORTED_MODULE_6__questionsAndAnswers_javascriptEs6Answers__["a" /* javascriptEs6AnswerArr */][1].A1) {
        javascriptEs6DisplayAnswer.innerHTML = `
        <textarea name="text" class="answer_textarea" id="input">
function checkScope() {
    "use strict";
    let i = "function scope";
    if (true) {
        let i = "block scope";
        console.log("Block scope i is: ", i);
    }
    console.log("Function scope i is: ", i);
    return i;
}
          </textarea>`;
        javascriptEs6IncorrectValue.innerHTML = "Incorrect..";
        javascriptEs6NextButton.innerHTML = `<button class="nextButton javascriptColor1" onclick=javascriptEs6Btn()>Next</button>`;
        javascriptEs6RemoveValue.innerHTML = "";



    } else if (javascriptEs6RandomValue == 2 && javascriptEs6InputAnswer == __WEBPACK_IMPORTED_MODULE_6__questionsAndAnswers_javascriptEs6Answers__["a" /* javascriptEs6AnswerArr */][2].A2) {
        javascriptEs6CorrectValue.innerHTML = "Correct..";
        javascriptEs6DisplayAnswer.innerHTML = `
        <textarea name="text" class="answer_textarea" id="input">Good Job :) </textarea>`;
        javascriptEs6NextButton.innerHTML = `<button class="nextButton javascriptColor1" onclick=javascriptEs6Btn()>Next</button>`;
        javascriptEs6RemoveValue.innerHTML = "";

    } else if (javascriptEs6RandomValue == 2 && javascriptEs6InputAnswer !== __WEBPACK_IMPORTED_MODULE_6__questionsAndAnswers_javascriptEs6Answers__["a" /* javascriptEs6AnswerArr */][2].A2) {
        javascriptEs6DisplayAnswer.innerHTML = `
    <textarea name="text" class="answer_textarea" id="input">
function printManyTimes(str) {
    "use strict";
    const SENTENCE = str + " is cool!";
    for(let i = 0; i < str.length; i+=2) {
        console.log(SENTENCE);
    }
}
printManyTimes("JabaDabaDuuu");
          </textarea>`;
        javascriptEs6IncorrectValue.innerHTML = "Incorrect..";
        javascriptEs6NextButton.innerHTML = `<button class="nextButton javascriptColor1" onclick=javascriptEs6Btn()>Next</button>`;
        javascriptEs6RemoveValue.innerHTML = "";



    } else if (javascriptEs6RandomValue == 3 && javascriptEs6InputAnswer == __WEBPACK_IMPORTED_MODULE_6__questionsAndAnswers_javascriptEs6Answers__["a" /* javascriptEs6AnswerArr */][3].A3) {
        javascriptEs6CorrectValue.innerHTML = "Correct..";
        javascriptEs6DisplayAnswer.innerHTML = `
        <textarea name="text" class="answer_textarea" id="input">Good Job :) </textarea>`;
        javascriptEs6NextButton.innerHTML = `<button class="nextButton javascriptColor1" onclick=javascriptEs6Btn()>Next</button>`;
        javascriptEs6RemoveValue.innerHTML = "";

    } else if (javascriptEs6RandomValue == 3 && javascriptEs6InputAnswer !== __WEBPACK_IMPORTED_MODULE_6__questionsAndAnswers_javascriptEs6Answers__["a" /* javascriptEs6AnswerArr */][3].A3) {
        javascriptEs6DisplayAnswer.innerHTML = `
    <textarea name="text" class="answer_textarea" id="input">
const s = [5, 7, 2];
function editInPlace() {
    "use strict";
    s[0] = 2;
    s[1] = 5;
    s[2] = 7;
}
editInPlace();
        </textarea>`;
        javascriptEs6IncorrectValue.innerHTML = "Incorrect..";
        javascriptEs6NextButton.innerHTML = `<button class="nextButton javascriptColor1" onclick=javascriptEs6Btn()>Next</button>`;
        javascriptEs6RemoveValue.innerHTML = "";
        


    } else if (javascriptEs6RandomValue == 4 && javascriptEs6InputAnswer == __WEBPACK_IMPORTED_MODULE_6__questionsAndAnswers_javascriptEs6Answers__["a" /* javascriptEs6AnswerArr */][4].A4) {
        javascriptEs6CorrectValue.innerHTML = "Correct..";
        javascriptEs6DisplayAnswer.innerHTML = `
        <textarea name="text" class="answer_textarea" id="input">Good Job :) </textarea>`;
        javascriptEs6NextButton.innerHTML = `<button class="nextButton javascriptColor1" onclick=javascriptEs6Btn()>Next</button>`;
        javascriptEs6RemoveValue.innerHTML = "";

    } else if (javascriptEs6RandomValue == 4 && javascriptEs6InputAnswer !== __WEBPACK_IMPORTED_MODULE_6__questionsAndAnswers_javascriptEs6Answers__["a" /* javascriptEs6AnswerArr */][4].A4) {
        javascriptEs6DisplayAnswer.innerHTML = `
    <textarea name="text" class="answer_textarea" id="input">
function freezeObj() {
    "use strict";
    const MATH_CONSTANTS = {
        PI: 3.14
    };

    Object.freeze(MATH_CONSTANTS);
    
    try {
        MATH_CONSTANTS.PI = 99;
    } catch( ex ) {
        console.log(ex);
    }
    return MATH_CONSTANTS.PI;
}
    
const PI = freezeObj();
        </textarea>`;
        javascriptEs6IncorrectValue.innerHTML = "Incorrect..";
        javascriptEs6NextButton.innerHTML = `<button class="nextButton javascriptColor1" onclick=javascriptEs6Btn()>Next</button>`;
        javascriptEs6RemoveValue.innerHTML = "";



    } else if (javascriptEs6RandomValue == 5 && javascriptEs6InputAnswer == __WEBPACK_IMPORTED_MODULE_6__questionsAndAnswers_javascriptEs6Answers__["a" /* javascriptEs6AnswerArr */][5].A5) {
        javascriptEs6CorrectValue.innerHTML = "Correct..";
        javascriptEs6DisplayAnswer.innerHTML = `
        <textarea name="text" class="answer_textarea" id="input">Good Job :) </textarea>`;
        javascriptEs6NextButton.innerHTML = `<button class="nextButton javascriptColor1" onclick=javascriptEs6Btn()>Next</button>`;
        javascriptEs6RemoveValue.innerHTML = "";

    } else if (javascriptEs6RandomValue == 5 && javascriptEs6InputAnswer !== __WEBPACK_IMPORTED_MODULE_6__questionsAndAnswers_javascriptEs6Answers__["a" /* javascriptEs6AnswerArr */][5].A5) {
        javascriptEs6DisplayAnswer.innerHTML = `
    <textarea name="text" class="answer_textarea" id="input">
const magic = () => {
    "use strict";
    return new Date();
};
        </textarea>`;
        javascriptEs6IncorrectValue.innerHTML = "Incorrect..";
        javascriptEs6NextButton.innerHTML = `<button class="nextButton javascriptColor1" onclick=javascriptEs6Btn()>Next</button>`;
        javascriptEs6RemoveValue.innerHTML = "";



    } else if (javascriptEs6RandomValue == 6 && javascriptEs6InputAnswer == __WEBPACK_IMPORTED_MODULE_6__questionsAndAnswers_javascriptEs6Answers__["a" /* javascriptEs6AnswerArr */][6].A6) {
        javascriptEs6CorrectValue.innerHTML = "Correct..";
        javascriptEs6DisplayAnswer.innerHTML = `
        <textarea name="text" class="answer_textarea" id="input">Good Job :) </textarea>`;
        javascriptEs6NextButton.innerHTML = `<button class="nextButton javascriptColor1" onclick=javascriptEs6Btn()>Next</button>`;
        javascriptEs6RemoveValue.innerHTML = "";

    } else if (javascriptEs6RandomValue == 6 && javascriptEs6InputAnswer !== __WEBPACK_IMPORTED_MODULE_6__questionsAndAnswers_javascriptEs6Answers__["a" /* javascriptEs6AnswerArr */][6].A6) {
        javascriptEs6DisplayAnswer.innerHTML = `
    <textarea name="text" class="answer_textarea" id="input">
const myConcat = (arr1, arr2) => {
    "use strict";
    return arr1.concat(arr2);
};
console.log(myConcat([1, 2], [3, 4, 5]));

        </textarea>`;
        javascriptEs6IncorrectValue.innerHTML = "Incorrect..";
        javascriptEs6NextButton.innerHTML = `<button class="nextButton javascriptColor1" onclick=javascriptEs6Btn()>Next</button>`;
        javascriptEs6RemoveValue.innerHTML = "";



    } else if (javascriptEs6RandomValue == 7 && javascriptEs6InputAnswer == __WEBPACK_IMPORTED_MODULE_6__questionsAndAnswers_javascriptEs6Answers__["a" /* javascriptEs6AnswerArr */][7].A7) {
        javascriptEs6CorrectValue.innerHTML = "Correct..";
        javascriptEs6DisplayAnswer.innerHTML = `
        <textarea name="text" class="answer_textarea" id="input">Good Job :) </textarea>`;
        javascriptEs6NextButton.innerHTML = `<button class="nextButton javascriptColor1" onclick=javascriptEs6Btn()>Next</button>`;
        javascriptEs6RemoveValue.innerHTML = "";

    } else if (javascriptEs6RandomValue == 7 && javascriptEs6InputAnswer !== __WEBPACK_IMPORTED_MODULE_6__questionsAndAnswers_javascriptEs6Answers__["a" /* javascriptEs6AnswerArr */][7].A7) {
        javascriptEs6DisplayAnswer.innerHTML = `
    <textarea name="text" class="answer_textarea" id="input">
const realNumberArray = [4, 5.6, -9.8, 3.14, 42, 6, 8.34];
const squareList = (arr) => {
    "use strict";
    const squaredIntegers = arr.filter(num => Number.isInteger(num)).map(square => square*square);
    return squaredIntegers;
};
const squaredIntegers = squareList(realNumberArray);
console.log(squaredIntegers);

        </textarea>`;
        javascriptEs6IncorrectValue.innerHTML = "Incorrect..";
        javascriptEs6NextButton.innerHTML = `<button class="nextButton javascriptColor1" onclick=javascriptEs6Btn()>Next</button>`;
        javascriptEs6RemoveValue.innerHTML = "";



    } else if (javascriptEs6RandomValue == 8 && javascriptEs6InputAnswer == __WEBPACK_IMPORTED_MODULE_6__questionsAndAnswers_javascriptEs6Answers__["a" /* javascriptEs6AnswerArr */][8].A8) {
        javascriptEs6CorrectValue.innerHTML = "Correct..";
        javascriptEs6DisplayAnswer.innerHTML = `
        <textarea name="text" class="answer_textarea" id="input">Good Job :) </textarea>`;
        javascriptEs6NextButton.innerHTML = `<button class="nextButton javascriptColor1" onclick=javascriptEs6Btn()>Next</button>`;
        javascriptEs6RemoveValue.innerHTML = "";

    } else if (javascriptEs6RandomValue == 8 && javascriptEs6InputAnswer !== __WEBPACK_IMPORTED_MODULE_6__questionsAndAnswers_javascriptEs6Answers__["a" /* javascriptEs6AnswerArr */][8].A8) {
        javascriptEs6DisplayAnswer.innerHTML = `
    <textarea name="text" class="answer_textarea" id="input">
const increment = (function() {
    "use strict";
    return function increment(number, value = 1) {
        return number + value;
    };
})();
console.log(increment(5, 2));
console.log(increment(5));
        </textarea>`;
        javascriptEs6IncorrectValue.innerHTML = "Incorrect..";
        javascriptEs6NextButton.innerHTML = `<button class="nextButton javascriptColor1" onclick=javascriptEs6Btn()>Next</button>`;
        javascriptEs6RemoveValue.innerHTML = "";



    } else if (javascriptEs6RandomValue == 9 && javascriptEs6InputAnswer == __WEBPACK_IMPORTED_MODULE_6__questionsAndAnswers_javascriptEs6Answers__["a" /* javascriptEs6AnswerArr */][9].A9) {
        javascriptEs6CorrectValue.innerHTML = "Correct..";
        javascriptEs6DisplayAnswer.innerHTML = `
        <textarea name="text" class="answer_textarea" id="input">Good Job :) </textarea>`;
        javascriptEs6NextButton.innerHTML = `<button class="nextButton javascriptColor1" onclick=javascriptEs6Btn()>Next</button>`;
        javascriptEs6RemoveValue.innerHTML = "";

    } else if (javascriptEs6RandomValue == 9 && javascriptEs6InputAnswer !== __WEBPACK_IMPORTED_MODULE_6__questionsAndAnswers_javascriptEs6Answers__["a" /* javascriptEs6AnswerArr */][9].A9) {
        javascriptEs6DisplayAnswer.innerHTML = `
    <textarea name="text" class="answer_textarea" id="input">
const sum = (function() {
    "use strict";
    return function sum(...args) {		
        return args.reduce((a, b) => a + b, 0);
    };
})();
console.log(sum(0, 1, 2));
        </textarea>`;
        javascriptEs6IncorrectValue.innerHTML = "Incorrect..";
        javascriptEs6NextButton.innerHTML = `<button class="nextButton javascriptColor1" onclick=javascriptEs6Btn()>Next</button>`;
        javascriptEs6RemoveValue.innerHTML = "";



    } else if (javascriptEs6RandomValue == 10 && javascriptEs6InputAnswer == __WEBPACK_IMPORTED_MODULE_6__questionsAndAnswers_javascriptEs6Answers__["a" /* javascriptEs6AnswerArr */][10].A10) {
        javascriptEs6CorrectValue.innerHTML = "Correct..";
        javascriptEs6DisplayAnswer.innerHTML = `
        <textarea name="text" class="answer_textarea" id="input">Good Job :) </textarea>`;
        javascriptEs6NextButton.innerHTML = `<button class="nextButton javascriptColor1" onclick=javascriptEs6Btn()>Next</button>`;
        javascriptEs6RemoveValue.innerHTML = "";

    } else if (javascriptEs6RandomValue == 10 && javascriptEs6InputAnswer !== __WEBPACK_IMPORTED_MODULE_6__questionsAndAnswers_javascriptEs6Answers__["a" /* javascriptEs6AnswerArr */][10].A10) {
        javascriptEs6DisplayAnswer.innerHTML = `
    <textarea name="text" class="answer_textarea" id="input">
const arr1 = ['JAN', 'FEB', 'MAR', 'APR', 'MAY'];
let arr2;
arr2 = [...arr1];
        </textarea>`;
        javascriptEs6IncorrectValue.innerHTML = "Incorrect..";
        javascriptEs6NextButton.innerHTML = `<button class="nextButton javascriptColor1" onclick=javascriptEs6Btn()>Next</button>`;
        javascriptEs6RemoveValue.innerHTML = "";



    } else if (javascriptEs6RandomValue == 11 && javascriptEs6InputAnswer == __WEBPACK_IMPORTED_MODULE_6__questionsAndAnswers_javascriptEs6Answers__["a" /* javascriptEs6AnswerArr */][11].A11) {
        javascriptEs6CorrectValue.innerHTML = "Correct..";
        javascriptEs6DisplayAnswer.innerHTML = `
        <textarea name="text" class="answer_textarea" id="input">Good Job :) </textarea>`;
        javascriptEs6NextButton.innerHTML = `<button class="nextButton javascriptColor1" onclick=javascriptEs6Btn()>Next</button>`;
        javascriptEs6RemoveValue.innerHTML = "";

    } else if (javascriptEs6RandomValue == 11 && javascriptEs6InputAnswer !== __WEBPACK_IMPORTED_MODULE_6__questionsAndAnswers_javascriptEs6Answers__["a" /* javascriptEs6AnswerArr */][11].A11) {
        javascriptEs6DisplayAnswer.innerHTML = `
    <textarea name="text" class="answer_textarea" id="input">
const AVG_TEMPERATURES = {
    today: 77.5,
    tomorrow: 79
    };
    function getTempOfTmrw(avgTemperatures) {
    "use strict";
    const {tomorrow:tempOfTomorrow} = avgTemperatures;
    return tempOfTomorrow;
}
    
console.log(getTempOfTmrw(AVG_TEMPERATURES)); 
        </textarea>`;
        javascriptEs6IncorrectValue.innerHTML = "Incorrect..";
        javascriptEs6NextButton.innerHTML = `<button class="nextButton javascriptColor1" onclick=javascriptEs6Btn()>Next</button>`;
        javascriptEs6RemoveValue.innerHTML = "";



    } else if (javascriptEs6RandomValue == 12 && javascriptEs6InputAnswer == __WEBPACK_IMPORTED_MODULE_6__questionsAndAnswers_javascriptEs6Answers__["a" /* javascriptEs6AnswerArr */][12].A12) {
        javascriptEs6CorrectValue.innerHTML = "Correct..";
        javascriptEs6DisplayAnswer.innerHTML = `
        <textarea name="text" class="answer_textarea" id="input">Good Job :) </textarea>`;
        javascriptEs6NextButton.innerHTML = `<button class="nextButton javascriptColor1" onclick=javascriptEs6Btn()>Next</button>`;
        javascriptEs6RemoveValue.innerHTML = "";

    } else if (javascriptEs6RandomValue == 12 && javascriptEs6InputAnswer !== __WEBPACK_IMPORTED_MODULE_6__questionsAndAnswers_javascriptEs6Answers__["a" /* javascriptEs6AnswerArr */][12].A12) {
        javascriptEs6DisplayAnswer.innerHTML = `
    <textarea name="text" class="answer_textarea" id="input">
const LOCAL_FORECAST = {
    today: { min: 72, max: 83 },
    tomorrow: { min: 73.3, max: 84.6 }
    };
    
    function getMaxOfTmrw(forecast) {
    "use strict";
    const { tomorrow : {max: maxOfTomorrow}} = forecast 
    return maxOfTomorrow;
}
    
console.log(getMaxOfTmrw(LOCAL_FORECAST));
        </textarea>`;
        javascriptEs6IncorrectValue.innerHTML = "Incorrect..";
        javascriptEs6NextButton.innerHTML = `<button class="nextButton javascriptColor1" onclick=javascriptEs6Btn()>Next</button>`;
        javascriptEs6RemoveValue.innerHTML = "";



    } else if (javascriptEs6RandomValue == 13 && javascriptEs6InputAnswer == __WEBPACK_IMPORTED_MODULE_6__questionsAndAnswers_javascriptEs6Answers__["a" /* javascriptEs6AnswerArr */][13].A13) {
        javascriptEs6CorrectValue.innerHTML = "Correct..";
        javascriptEs6DisplayAnswer.innerHTML = `
        <textarea name="text" class="answer_textarea" id="input">Good Job :) </textarea>`;
        javascriptEs6NextButton.innerHTML = `<button class="nextButton javascriptColor1" onclick=javascriptEs6Btn()>Next</button>`;
        javascriptEs6RemoveValue.innerHTML = "";

    } else if (javascriptEs6RandomValue == 13 && javascriptEs6InputAnswer !== __WEBPACK_IMPORTED_MODULE_6__questionsAndAnswers_javascriptEs6Answers__["a" /* javascriptEs6AnswerArr */][13].A13) {
        javascriptEs6DisplayAnswer.innerHTML = `
    <textarea name="text" class="answer_textarea" id="input">
let a = 8, b = 6;
[a,b] = [b,a];
console.log(a);
console.log(b);
        </textarea>`;
        javascriptEs6IncorrectValue.innerHTML = "Incorrect..";
        javascriptEs6NextButton.innerHTML = `<button class="nextButton javascriptColor1" onclick=javascriptEs6Btn()>Next</button>`;
        javascriptEs6RemoveValue.innerHTML = "";



    } else if (javascriptEs6RandomValue == 14 && javascriptEs6InputAnswer == __WEBPACK_IMPORTED_MODULE_6__questionsAndAnswers_javascriptEs6Answers__["a" /* javascriptEs6AnswerArr */][14].A14) {
        javascriptEs6CorrectValue.innerHTML = "Correct..";
        javascriptEs6DisplayAnswer.innerHTML = `
        <textarea name="text" class="answer_textarea" id="input">Good Job :) </textarea>`;
        javascriptEs6NextButton.innerHTML = `<button class="nextButton javascriptColor1" onclick=javascriptEs6Btn()>Next</button>`;
        javascriptEs6RemoveValue.innerHTML = "";

    } else if (javascriptEs6RandomValue == 14 && javascriptEs6InputAnswer !== __WEBPACK_IMPORTED_MODULE_6__questionsAndAnswers_javascriptEs6Answers__["a" /* javascriptEs6AnswerArr */][14].A14) {
        javascriptEs6DisplayAnswer.innerHTML = `
    <textarea name="text" class="answer_textarea" id="input">
const source = [1,2,3,4,5,6,7,8,9,10];
const [a, b, ...arr] = source;
console.log(arr); 
console.log(source);
        </textarea>`;
        javascriptEs6IncorrectValue.innerHTML = "Incorrect..";
        javascriptEs6NextButton.innerHTML = `<button class="nextButton javascriptColor1" onclick=javascriptEs6Btn()>Next</button>`;
        javascriptEs6RemoveValue.innerHTML = "";



    } else if (javascriptEs6RandomValue == 15 && javascriptEs6InputAnswer == __WEBPACK_IMPORTED_MODULE_6__questionsAndAnswers_javascriptEs6Answers__["a" /* javascriptEs6AnswerArr */][15].A15) {
        javascriptEs6CorrectValue.innerHTML = "Correct..";
        javascriptEs6DisplayAnswer.innerHTML = `
        <textarea name="text" class="answer_textarea" id="input">Good Job :) </textarea>`;
        javascriptEs6NextButton.innerHTML = `<button class="nextButton javascriptColor1" onclick=javascriptEs6Btn()>Next</button>`;
        javascriptEs6RemoveValue.innerHTML = "";

    } else if (javascriptEs6RandomValue == 15 && javascriptEs6InputAnswer !== __WEBPACK_IMPORTED_MODULE_6__questionsAndAnswers_javascriptEs6Answers__["a" /* javascriptEs6AnswerArr */][15].A15) {
        javascriptEs6DisplayAnswer.innerHTML = `
    <textarea name="text" class="answer_textarea" id="input">
const stats = {
    max: 56.78,
    standard_deviation: 4.34,
    median: 34.54,
    mode: 23.87,
    min: -0.75,
    average: 35.85
    };
    
    const half = (function() {
    "use strict";
    
    return function half({max, min}) {
        return (max + min) / 2.0;
    };
    
})();
console.log(stats);
console.log(half(stats));
        </textarea>`;
        javascriptEs6IncorrectValue.innerHTML = "Incorrect..";
        javascriptEs6NextButton.innerHTML = `<button class="nextButton javascriptColor1" onclick=javascriptEs6Btn()>Next</button>`;
        javascriptEs6RemoveValue.innerHTML = "";



    } else if (javascriptEs6RandomValue == 16 && javascriptEs6InputAnswer == __WEBPACK_IMPORTED_MODULE_6__questionsAndAnswers_javascriptEs6Answers__["a" /* javascriptEs6AnswerArr */][16].A16) {
        javascriptEs6CorrectValue.innerHTML = "Correct..";
        javascriptEs6DisplayAnswer.innerHTML = `
        <textarea name="text" class="answer_textarea" id="input">Good Job :) </textarea>`;
        javascriptEs6NextButton.innerHTML = `<button class="nextButton javascriptColor1" onclick=javascriptEs6Btn()>Next</button>`;
        javascriptEs6RemoveValue.innerHTML = "";

    } else if (javascriptEs6RandomValue == 16 && javascriptEs6InputAnswer !== __WEBPACK_IMPORTED_MODULE_6__questionsAndAnswers_javascriptEs6Answers__["a" /* javascriptEs6AnswerArr */][16].A16) {
        javascriptEs6DisplayAnswer.innerHTML = `
    <textarea name="text" class="answer_textarea" id="input">
const result = {
    success: ["max-length", "no-amd", "prefer-arrow-functions"],
    failure: ["no-var", "var-on-top", "linebreak"],
    skipped: ["id-blacklist", "no-dup-keys"]
    };
    function makeList(arr) {
    "use strict";
    const resultDisplayArray =
    ['<li class="text-warning">$ {arr[0]}</li>', 
    '<li class="text-warning">$ {arr[1]}</li>', 
    '<li class="text-warning">$ {arr[2]}</li>'];
    
    return resultDisplayArray;
}
const resultDisplayArray = makeList(result.failure);
        </textarea>`;
        javascriptEs6IncorrectValue.innerHTML = "Incorrect..";
        javascriptEs6NextButton.innerHTML = `<button class="nextButton javascriptColor1" onclick=javascriptEs6Btn()>Next</button>`;
        javascriptEs6RemoveValue.innerHTML = "";



    } else if (javascriptEs6RandomValue == 17 && javascriptEs6InputAnswer == __WEBPACK_IMPORTED_MODULE_6__questionsAndAnswers_javascriptEs6Answers__["a" /* javascriptEs6AnswerArr */][17].A17) {
        javascriptEs6CorrectValue.innerHTML = "Correct..";
        javascriptEs6DisplayAnswer.innerHTML = `
        <textarea name="text" class="answer_textarea" id="input">Good Job :) </textarea>`;
        javascriptEs6NextButton.innerHTML = `<button class="nextButton javascriptColor1" onclick=javascriptEs6Btn()>Next</button>`;
        javascriptEs6RemoveValue.innerHTML = "";

    } else if (javascriptEs6RandomValue == 17 && javascriptEs6InputAnswer !== __WEBPACK_IMPORTED_MODULE_6__questionsAndAnswers_javascriptEs6Answers__["a" /* javascriptEs6AnswerArr */][17].A17) {
        javascriptEs6DisplayAnswer.innerHTML = `
    <textarea name="text" class="answer_textarea" id="input">
const createPerson = (name, age, gender) => {
    "use strict";
    return {
        name,
        age,
        gender
    };
};
console.log(createPerson("Zodiac Hasbro", 56, "male"));
        </textarea>`;
        javascriptEs6IncorrectValue.innerHTML = "Incorrect..";
        javascriptEs6NextButton.innerHTML = `<button class="nextButton javascriptColor1" onclick=javascriptEs6Btn()>Next</button>`;
        javascriptEs6RemoveValue.innerHTML = "";



    } else if (javascriptEs6RandomValue == 18 && javascriptEs6InputAnswer == __WEBPACK_IMPORTED_MODULE_6__questionsAndAnswers_javascriptEs6Answers__["a" /* javascriptEs6AnswerArr */][18].A18) {
        javascriptEs6CorrectValue.innerHTML = "Correct..";
        javascriptEs6DisplayAnswer.innerHTML = `
        <textarea name="text" class="answer_textarea" id="input">Good Job :) </textarea>`;
        javascriptEs6NextButton.innerHTML = `<button class="nextButton javascriptColor1" onclick=javascriptEs6Btn()>Next</button>`;
        javascriptEs6RemoveValue.innerHTML = "";

    } else if (javascriptEs6RandomValue == 18 && javascriptEs6InputAnswer !== __WEBPACK_IMPORTED_MODULE_6__questionsAndAnswers_javascriptEs6Answers__["a" /* javascriptEs6AnswerArr */][18].A18) {
        javascriptEs6DisplayAnswer.innerHTML = `
    <textarea name="text" class="answer_textarea" id="input">
const bicycle = {
    gear: 2,
    setGear(newGear) {
        "use strict";
        this.gear = newGear;
    }
};
bicycle.setGear(3);
console.log(bicycle.gear);
        </textarea>`;
        javascriptEs6IncorrectValue.innerHTML = "Incorrect..";
        javascriptEs6NextButton.innerHTML = `<button class="nextButton javascriptColor1" onclick=javascriptEs6Btn()>Next</button>`;
        javascriptEs6RemoveValue.innerHTML = "";



    } else if (javascriptEs6RandomValue == 19 && javascriptEs6InputAnswer == __WEBPACK_IMPORTED_MODULE_6__questionsAndAnswers_javascriptEs6Answers__["a" /* javascriptEs6AnswerArr */][19].A19) {
        javascriptEs6CorrectValue.innerHTML = "Correct..";
        javascriptEs6DisplayAnswer.innerHTML = `
        <textarea name="text" class="answer_textarea" id="input">Good Job :) </textarea>`;
        javascriptEs6NextButton.innerHTML = `<button class="nextButton javascriptColor1" onclick=javascriptEs6Btn()>Next</button>`;
        javascriptEs6RemoveValue.innerHTML = "";

    } else if (javascriptEs6RandomValue == 19 && javascriptEs6InputAnswer !== __WEBPACK_IMPORTED_MODULE_6__questionsAndAnswers_javascriptEs6Answers__["a" /* javascriptEs6AnswerArr */][19].A19) {
        javascriptEs6DisplayAnswer.innerHTML = `
    <textarea name="text" class="answer_textarea" id="input">
function makeClass() {
    "use strict";
    class Vegetable {
        constructor(name){
        this.name = name;
        }
    }
    return Vegetable;
}
const Vegetable = makeClass();
const carrot = new Vegetable('carrot');
console.log(carrot.name);
          </textarea>`;
        javascriptEs6IncorrectValue.innerHTML = "Incorrect..";
        javascriptEs6NextButton.innerHTML = `<button class="nextButton javascriptColor1" onclick=javascriptEs6Btn()>Next</button>`;
        javascriptEs6RemoveValue.innerHTML = "";



    } else if (javascriptEs6RandomValue == 20 && javascriptEs6InputAnswer == __WEBPACK_IMPORTED_MODULE_6__questionsAndAnswers_javascriptEs6Answers__["a" /* javascriptEs6AnswerArr */][20].A20) {
        javascriptEs6CorrectValue.innerHTML = "Correct..";
        javascriptEs6DisplayAnswer.innerHTML = `
        <textarea name="text" class="answer_textarea" id="input">Good Job :) </textarea>`;
        javascriptEs6NextButton.innerHTML = `<button class="nextButton javascriptColor1" onclick=javascriptEs6Btn()>Next</button>`;
        javascriptEs6RemoveValue.innerHTML = "";

    } else if (javascriptEs6RandomValue == 20 && javascriptEs6InputAnswer !== __WEBPACK_IMPORTED_MODULE_6__questionsAndAnswers_javascriptEs6Answers__["a" /* javascriptEs6AnswerArr */][20].A20) {
        javascriptEs6DisplayAnswer.innerHTML = `
    <textarea name="text" class="answer_textarea" id="input">
function makeClass() {
    "use strict";
    class Thermostat{
        constructor(farenheit){
        this.farenheit = farenheit;
        }
        get temperature(){
        return 5 / 9 * (this.farenheit - 32);
        }
        set temperature(celsius){
        this.farenheit = celsius * 9.0 / 5 + 32;
        }
    }
    return Thermostat;
}
const Thermostat = makeClass();
const thermos = new Thermostat(76); 
let temp = thermos.temperature; 
thermos.temperature = 26;
temp = thermos.temperature;
        </textarea>`;
        javascriptEs6IncorrectValue.innerHTML = "Incorrect..";
        javascriptEs6NextButton.innerHTML = `<button class="nextButton javascriptColor1" onclick=javascriptEs6Btn()>Next</button>`;
        javascriptEs6RemoveValue.innerHTML = "";



    } else if (javascriptEs6RandomValue == 21 && javascriptEs6InputAnswer == __WEBPACK_IMPORTED_MODULE_6__questionsAndAnswers_javascriptEs6Answers__["a" /* javascriptEs6AnswerArr */][21].A21) {
        javascriptEs6CorrectValue.innerHTML = "Correct..";
        javascriptEs6DisplayAnswer.innerHTML = `
        <textarea name="text" class="answer_textarea" id="input">Good Job :) </textarea>`;
        javascriptEs6NextButton.innerHTML = `<button class="nextButton javascriptColor1" onclick=javascriptEs6Btn()>Next</button>`;
        javascriptEs6RemoveValue.innerHTML = "";

    } else if (javascriptEs6RandomValue == 21 && javascriptEs6InputAnswer !== __WEBPACK_IMPORTED_MODULE_6__questionsAndAnswers_javascriptEs6Answers__["a" /* javascriptEs6AnswerArr */][21].A21) {
        javascriptEs6DisplayAnswer.innerHTML = `
    <textarea name="text" class="answer_textarea" id="input">
import { capitalizeString } from 'string_functions';
capitalizeString("hello!");
        </textarea>`;
        javascriptEs6IncorrectValue.innerHTML = "Incorrect..";
        javascriptEs6NextButton.innerHTML = `<button class="nextButton javascriptColor1" onclick=javascriptEs6Btn()>Next</button>`;
        javascriptEs6RemoveValue.innerHTML = "";



    } else if (javascriptEs6RandomValue == 22 && javascriptEs6InputAnswer == __WEBPACK_IMPORTED_MODULE_6__questionsAndAnswers_javascriptEs6Answers__["a" /* javascriptEs6AnswerArr */][22].A22) {
        javascriptEs6CorrectValue.innerHTML = "Correct..";
        javascriptEs6DisplayAnswer.innerHTML = `
        <textarea name="text" class="answer_textarea" id="input">Good Job :) </textarea>`;
        javascriptEs6NextButton.innerHTML = `<button class="nextButton javascriptColor1" onclick=javascriptEs6Btn()>Next</button>`;
        javascriptEs6RemoveValue.innerHTML = "";

    } else if (javascriptEs6RandomValue == 22 && javascriptEs6InputAnswer !== __WEBPACK_IMPORTED_MODULE_6__questionsAndAnswers_javascriptEs6Answers__["a" /* javascriptEs6AnswerArr */][22].A22) {
        javascriptEs6DisplayAnswer.innerHTML = `
    <textarea name="text" class="answer_textarea" id="input">
"use strict";
export const foo = "bar";
export const bar = "foo";
        </textarea>`;
        javascriptEs6IncorrectValue.innerHTML = "Incorrect..";
        javascriptEs6NextButton.innerHTML = `<button class="nextButton javascriptColor1" onclick=javascriptEs6Btn()>Next</button>`;
        javascriptEs6RemoveValue.innerHTML = "";



    } else if (javascriptEs6RandomValue == 23 && javascriptEs6InputAnswer == __WEBPACK_IMPORTED_MODULE_6__questionsAndAnswers_javascriptEs6Answers__["a" /* javascriptEs6AnswerArr */][23].A23) {
        javascriptEs6CorrectValue.innerHTML = "Correct..";
        javascriptEs6DisplayAnswer.innerHTML = `
        <textarea name="text" class="answer_textarea" id="input">Good Job :) </textarea>`;
        javascriptEs6NextButton.innerHTML = `<button class="nextButton javascriptColor1" onclick=javascriptEs6Btn()>Next</button>`;
        javascriptEs6RemoveValue.innerHTML = "";

    } else if (javascriptEs6RandomValue == 23 && javascriptEs6InputAnswer !== __WEBPACK_IMPORTED_MODULE_6__questionsAndAnswers_javascriptEs6Answers__["a" /* javascriptEs6AnswerArr */][23].A23) {
        javascriptEs6DisplayAnswer.innerHTML = `

    <textarea name="text" class="answer_textarea" id="input">
"use strict";
import * as str from "capitalize_strings";
        </textarea>`;
        javascriptEs6IncorrectValue.innerHTML = "Incorrect..";
        javascriptEs6NextButton.innerHTML = `<button class="nextButton javascriptColor1" onclick=javascriptEs6Btn()>Next</button>`;
        javascriptEs6RemoveValue.innerHTML = "";



    } else if (javascriptEs6RandomValue == 24 && javascriptEs6InputAnswer == __WEBPACK_IMPORTED_MODULE_6__questionsAndAnswers_javascriptEs6Answers__["a" /* javascriptEs6AnswerArr */][24].A24) {
        javascriptEs6CorrectValue.innerHTML = "Correct..";
        javascriptEs6DisplayAnswer.innerHTML = `
        <textarea name="text" class="answer_textarea" id="input">Good Job :) </textarea>`;
        javascriptEs6NextButton.innerHTML = `<button class="nextButton javascriptColor1" onclick=javascriptEs6Btn()>Next</button>`;
        javascriptEs6RemoveValue.innerHTML = "";

    } else if (javascriptEs6RandomValue == 24 && javascriptEs6InputAnswer !== __WEBPACK_IMPORTED_MODULE_6__questionsAndAnswers_javascriptEs6Answers__["a" /* javascriptEs6AnswerArr */][24].A24) {
        javascriptEs6DisplayAnswer.innerHTML = `
    <textarea name="text" class="answer_textarea" id="input">
"use strict";
export default function subtract(x,y) {return x - y;}
        </textarea>`;
        javascriptEs6IncorrectValue.innerHTML = "Incorrect..";
        javascriptEs6NextButton.innerHTML = `<button class="nextButton javascriptColor1" onclick=javascriptEs6Btn()>Next</button>`;
        javascriptEs6RemoveValue.innerHTML = "";



    } else if (javascriptEs6RandomValue == 25 && javascriptEs6InputAnswer == __WEBPACK_IMPORTED_MODULE_6__questionsAndAnswers_javascriptEs6Answers__["a" /* javascriptEs6AnswerArr */][25].A25) {
        javascriptEs6CorrectValue.innerHTML = "Correct..";
        javascriptEs6DisplayAnswer.innerHTML = `
        <textarea name="text" class="answer_textarea" id="input">Good Job :) </textarea>`;
        javascriptEs6NextButton.innerHTML = `<button class="nextButton javascriptColor1" onclick=javascriptEs6Btn()>Next</button>`;
        javascriptEs6RemoveValue.innerHTML = "";

    } else if (javascriptEs6RandomValue == 25 && javascriptEs6InputAnswer !== __WEBPACK_IMPORTED_MODULE_6__questionsAndAnswers_javascriptEs6Answers__["a" /* javascriptEs6AnswerArr */][25].A25) {
        javascriptEs6DisplayAnswer.innerHTML = `
    <textarea name="text" class="answer_textarea" id="input">
"use strict";
import subtract from "math_functions";
subtract(7,4);
        </textarea>`;
        javascriptEs6IncorrectValue.innerHTML = "Incorrect..";
        javascriptEs6NextButton.innerHTML = `<button class="nextButton javascriptColor1" onclick=javascriptEs6Btn()>Next</button>`;
        javascriptEs6RemoveValue.innerHTML = "";



    } else {
        javascriptEs6IncorrectValue.innerHTML = "Incorrect..";
        javascriptEs6NextButton.innerHTML = `<button class="nextButton javascriptColor1" onclick=javascriptEs6Btn()>Next</button>`;
        javascriptEs6RemoveValue.innerHTML = "";
    }

}
window.javascriptEs6Submit = javascriptEs6Submit; /* to make submit global*/

function javascriptEs6Button() {
    javascriptEs6Test = document.getElementById("javascriptEs6AddedQuestion").innerHTML = __WEBPACK_IMPORTED_MODULE_7__questionsAndAnswers_javascriptEs6Questions__["a" /* javascriptEs6QuestionArr */][javascriptEs6RandomValue]; /* giving random question to html */

    return javascriptEs6Test;
}
window.javascriptEs6Button = javascriptEs6Button;

function javascriptEs6ShowTest() {
    var javascriptEs6InputBox = document.getElementById("javascriptEs6Remove").style.display = "block";
    return javascriptEs6InputBox;
}
window.javascriptEs6ShowTest = javascriptEs6ShowTest;
function javascriptEs6Btn() {
    javascriptEs6RandomValue = Math.floor(Math.random() * __WEBPACK_IMPORTED_MODULE_7__questionsAndAnswers_javascriptEs6Questions__["a" /* javascriptEs6QuestionArr */].length); /* buton next in html to make a next random question*/
    document.getElementById("javascriptEs6AddedQuestion").innerHTML = __WEBPACK_IMPORTED_MODULE_7__questionsAndAnswers_javascriptEs6Questions__["a" /* javascriptEs6QuestionArr */][javascriptEs6RandomValue]; /* giving random question to html */
    document.getElementById("javascriptEs6ElementButton").innerHTML = "";/* to clean javascriptEs6ElementButton*/
    document.getElementById("javascriptEs6Remove").innerHTML = `<textarea name="text" class="answer_textarea" id="input"></textarea></br>
      <button class="answer_submit javascriptColor1" id = "javascriptEs6StartButton" onclick="javascriptEs6Submit()">Submit</button>`;/* to create next text area and Submit button. */
    document.getElementById("javascriptEs6CheckingAnswer").innerHTML = "";
    document.getElementById("javascriptEs6ShowingAnswer").innerHTML = "";
}
window.javascriptEs6Btn = javascriptEs6Btn;/* to make submit global*/





























var javascriptRegExpressRandomValue = Math.floor(Math.random() * __WEBPACK_IMPORTED_MODULE_9__questionsAndAnswers_javascriptRegExpressQuestions__["a" /* javascriptRegExpressQuestionArr */].length); /* taking random question from htmlQuestionArr*/


function javascriptRegExpressSubmit() { /* function for html submit button*/

    var javascriptRegExpressInputAnswer = input.value.replace(/\s+/g, ``); /*replace(/\s+/g, `` is removing all spaces. Avoid checking all the spaces to compare text*/
    var javascriptRegExpressCorrectValue = document.getElementById("javascriptRegExpressCheckingAnswer"); /* making getElementById code shorter*/
    var javascriptRegExpressIncorrectValue = document.getElementById("javascriptRegExpressCheckingAnswer");
    var javascriptRegExpressDisplayAnswer = document.getElementById("javascriptRegExpressShowingAnswer");
    var javascriptRegExpressNextButton = document.getElementById("javascriptRegExpressElementButton");
    var javascriptRegExpressRemoveValue = document.getElementById("javascriptRegExpressRemove");

    if (javascriptRegExpressRandomValue == 0 && javascriptRegExpressInputAnswer == __WEBPACK_IMPORTED_MODULE_8__questionsAndAnswers_javascriptRegExpressAnswers__["a" /* javascriptRegExpressAnswerArr */][0].A0) { /* checking if javascriptRegExpressRandomValue is 0 and if putting answer the same as javascriptRegExpressAnswerArr*//*A0 is just that I can track answer numbers when adding questions and answers*/
        javascriptRegExpressCorrectValue.innerHTML = "Correct..";
        javascriptRegExpressDisplayAnswer.innerHTML = `
        <textarea name="text" class="answer_textarea" id="input">Good Job :) </textarea>`;
        javascriptRegExpressNextButton.innerHTML = `<button class="nextButton javascriptColor1" onclick=javascriptRegExpressBtn()>Next</button>`; /* creating next button with javascriptRegExpressBtn()function*/
        javascriptRegExpressRemoveValue.innerHTML = "";/* removing in html answer*/



    } else if (javascriptRegExpressRandomValue == 0 && javascriptRegExpressInputAnswer !== __WEBPACK_IMPORTED_MODULE_8__questionsAndAnswers_javascriptRegExpressAnswers__["a" /* javascriptRegExpressAnswerArr */][0].A0) {/*  if random value not == then giving then display the answere.*/
        javascriptRegExpressDisplayAnswer.innerHTML = `
    <textarea name="text" class="answer_textarea" id="input">
let myString = "Hello, World!";
let myRegex = /Hello/;
let result = myRegex.test(myString);
        </textarea>`;
        javascriptRegExpressIncorrectValue.innerHTML = "Incorrect..";
        javascriptRegExpressNextButton.innerHTML = `<button class="nextButton javascriptColor1" onclick=javascriptRegExpressBtn()>Next</button>`;
        javascriptRegExpressRemoveValue.innerHTML = "";



    } else if (javascriptRegExpressRandomValue == 1 && javascriptRegExpressInputAnswer == __WEBPACK_IMPORTED_MODULE_8__questionsAndAnswers_javascriptRegExpressAnswers__["a" /* javascriptRegExpressAnswerArr */][1].A1) {
        javascriptRegExpressCorrectValue.innerHTML = "Correct..";
        javascriptRegExpressDisplayAnswer.innerHTML = `
        <textarea name="text" class="answer_textarea" id="input">Good Job :) </textarea>`;
        javascriptRegExpressNextButton.innerHTML = `<button class="nextButton javascriptColor1" onclick=javascriptRegExpressBtn()>Next</button>`;
        javascriptRegExpressRemoveValue.innerHTML = "";

    } else if (javascriptRegExpressRandomValue == 1 && javascriptRegExpressInputAnswer !== __WEBPACK_IMPORTED_MODULE_8__questionsAndAnswers_javascriptRegExpressAnswers__["a" /* javascriptRegExpressAnswerArr */][1].A1) {
        javascriptRegExpressDisplayAnswer.innerHTML = `
        <textarea name="text" class="answer_textarea" id="input">
let waldoIsHiding = "Somewhere Waldo is hiding in this text.";
let waldoRegex = /Waldo/; 
let result = waldoRegex.test(waldoIsHiding);
          </textarea>`;
        javascriptRegExpressIncorrectValue.innerHTML = "Incorrect..";
        javascriptRegExpressNextButton.innerHTML = `<button class="nextButton javascriptColor1" onclick=javascriptRegExpressBtn()>Next</button>`;
        javascriptRegExpressRemoveValue.innerHTML = "";



    } else if (javascriptRegExpressRandomValue == 2 && javascriptRegExpressInputAnswer == __WEBPACK_IMPORTED_MODULE_8__questionsAndAnswers_javascriptRegExpressAnswers__["a" /* javascriptRegExpressAnswerArr */][2].A2) {
        javascriptRegExpressCorrectValue.innerHTML = "Correct..";
        javascriptRegExpressDisplayAnswer.innerHTML = `
        <textarea name="text" class="answer_textarea" id="input">Good Job :) </textarea>`;
        javascriptRegExpressNextButton.innerHTML = `<button class="nextButton javascriptColor1" onclick=javascriptRegExpressBtn()>Next</button>`;
        javascriptRegExpressRemoveValue.innerHTML = "";

    } else if (javascriptRegExpressRandomValue == 2 && javascriptRegExpressInputAnswer !== __WEBPACK_IMPORTED_MODULE_8__questionsAndAnswers_javascriptRegExpressAnswers__["a" /* javascriptRegExpressAnswerArr */][2].A2) {
        javascriptRegExpressDisplayAnswer.innerHTML = `
    <textarea name="text" class="answer_textarea" id="input">
let petString = "James has a pet cat.";
let petRegex = /dog|cat|bird|fish/;
let result = petRegex.test(petString);
          </textarea>`;
        javascriptRegExpressIncorrectValue.innerHTML = "Incorrect..";
        javascriptRegExpressNextButton.innerHTML = `<button class="nextButton javascriptColor1" onclick=javascriptRegExpressBtn()>Next</button>`;
        javascriptRegExpressRemoveValue.innerHTML = "";



    } else if (javascriptRegExpressRandomValue == 3 && javascriptRegExpressInputAnswer == __WEBPACK_IMPORTED_MODULE_8__questionsAndAnswers_javascriptRegExpressAnswers__["a" /* javascriptRegExpressAnswerArr */][3].A3) {
        javascriptRegExpressCorrectValue.innerHTML = "Correct..";
        javascriptRegExpressDisplayAnswer.innerHTML = `
        <textarea name="text" class="answer_textarea" id="input">Good Job :) </textarea>`;
        javascriptRegExpressNextButton.innerHTML = `<button class="nextButton javascriptColor1" onclick=javascriptRegExpressBtn()>Next</button>`;
        javascriptRegExpressRemoveValue.innerHTML = "";

    } else if (javascriptRegExpressRandomValue == 3 && javascriptRegExpressInputAnswer !== __WEBPACK_IMPORTED_MODULE_8__questionsAndAnswers_javascriptRegExpressAnswers__["a" /* javascriptRegExpressAnswerArr */][3].A3) {
        javascriptRegExpressDisplayAnswer.innerHTML = `
    <textarea name="text" class="answer_textarea" id="input">
let myString = "test";
let fccRegex = /test/i; 
let result = fccRegex.test(myString);
        </textarea>`;
        javascriptRegExpressIncorrectValue.innerHTML = "Incorrect..";
        javascriptRegExpressNextButton.innerHTML = `<button class="nextButton javascriptColor1" onclick=javascriptRegExpressBtn()>Next</button>`;
        javascriptRegExpressRemoveValue.innerHTML = "";
        


    } else if (javascriptRegExpressRandomValue == 4 && javascriptRegExpressInputAnswer == __WEBPACK_IMPORTED_MODULE_8__questionsAndAnswers_javascriptRegExpressAnswers__["a" /* javascriptRegExpressAnswerArr */][4].A4) {
        javascriptRegExpressCorrectValue.innerHTML = "Correct..";
        javascriptRegExpressDisplayAnswer.innerHTML = `
        <textarea name="text" class="answer_textarea" id="input">Good Job :) </textarea>`;
        javascriptRegExpressNextButton.innerHTML = `<button class="nextButton javascriptColor1" onclick=javascriptRegExpressBtn()>Next</button>`;
        javascriptRegExpressRemoveValue.innerHTML = "";

    } else if (javascriptRegExpressRandomValue == 4 && javascriptRegExpressInputAnswer !== __WEBPACK_IMPORTED_MODULE_8__questionsAndAnswers_javascriptRegExpressAnswers__["a" /* javascriptRegExpressAnswerArr */][4].A4) {
        javascriptRegExpressDisplayAnswer.innerHTML = `
    <textarea name="text" class="answer_textarea" id="input">
let extractStr = "Extract the word 'coding' from this string.";
let codingRegex = /coding/; 
let result = extractStr.match(codingRegex); 
        </textarea>`;
        javascriptRegExpressIncorrectValue.innerHTML = "Incorrect..";
        javascriptRegExpressNextButton.innerHTML = `<button class="nextButton javascriptColor1" onclick=javascriptRegExpressBtn()>Next</button>`;
        javascriptRegExpressRemoveValue.innerHTML = "";



    } else if (javascriptRegExpressRandomValue == 5 && javascriptRegExpressInputAnswer == __WEBPACK_IMPORTED_MODULE_8__questionsAndAnswers_javascriptRegExpressAnswers__["a" /* javascriptRegExpressAnswerArr */][5].A5) {
        javascriptRegExpressCorrectValue.innerHTML = "Correct..";
        javascriptRegExpressDisplayAnswer.innerHTML = `
        <textarea name="text" class="answer_textarea" id="input">Good Job :) </textarea>`;
        javascriptRegExpressNextButton.innerHTML = `<button class="nextButton javascriptColor1" onclick=javascriptRegExpressBtn()>Next</button>`;
        javascriptRegExpressRemoveValue.innerHTML = "";

    } else if (javascriptRegExpressRandomValue == 5 && javascriptRegExpressInputAnswer !== __WEBPACK_IMPORTED_MODULE_8__questionsAndAnswers_javascriptRegExpressAnswers__["a" /* javascriptRegExpressAnswerArr */][5].A5) {
        javascriptRegExpressDisplayAnswer.innerHTML = `
    <textarea name="text" class="answer_textarea" id="input">
let twinkleStar = "Twinkle, twinkle, little star";
let starRegex = /twinkle/gi; 
let result = twinkleStar.match(starRegex); 
        </textarea>`;
        javascriptRegExpressIncorrectValue.innerHTML = "Incorrect..";
        javascriptRegExpressNextButton.innerHTML = `<button class="nextButton javascriptColor1" onclick=javascriptRegExpressBtn()>Next</button>`;
        javascriptRegExpressRemoveValue.innerHTML = "";



    } else if (javascriptRegExpressRandomValue == 6 && javascriptRegExpressInputAnswer == __WEBPACK_IMPORTED_MODULE_8__questionsAndAnswers_javascriptRegExpressAnswers__["a" /* javascriptRegExpressAnswerArr */][6].A6) {
        javascriptRegExpressCorrectValue.innerHTML = "Correct..";
        javascriptRegExpressDisplayAnswer.innerHTML = `
        <textarea name="text" class="answer_textarea" id="input">Good Job :) </textarea>`;
        javascriptRegExpressNextButton.innerHTML = `<button class="nextButton javascriptColor1" onclick=javascriptRegExpressBtn()>Next</button>`;
        javascriptRegExpressRemoveValue.innerHTML = "";

    } else if (javascriptRegExpressRandomValue == 6 && javascriptRegExpressInputAnswer !== __WEBPACK_IMPORTED_MODULE_8__questionsAndAnswers_javascriptRegExpressAnswers__["a" /* javascriptRegExpressAnswerArr */][6].A6) {
        javascriptRegExpressDisplayAnswer.innerHTML = `
    <textarea name="text" class="answer_textarea" id="input">
let exampleStr = "Let's have fun with regular expressions!";
let unRegex = /.un/; 
let result = unRegex.test(exampleStr);
        </textarea>`;
        javascriptRegExpressIncorrectValue.innerHTML = "Incorrect..";
        javascriptRegExpressNextButton.innerHTML = `<button class="nextButton javascriptColor1" onclick=javascriptRegExpressBtn()>Next</button>`;
        javascriptRegExpressRemoveValue.innerHTML = "";



    } else if (javascriptRegExpressRandomValue == 7 && javascriptRegExpressInputAnswer == __WEBPACK_IMPORTED_MODULE_8__questionsAndAnswers_javascriptRegExpressAnswers__["a" /* javascriptRegExpressAnswerArr */][7].A7) {
        javascriptRegExpressCorrectValue.innerHTML = "Correct..";
        javascriptRegExpressDisplayAnswer.innerHTML = `
        <textarea name="text" class="answer_textarea" id="input">Good Job :) </textarea>`;
        javascriptRegExpressNextButton.innerHTML = `<button class="nextButton javascriptColor1" onclick=javascriptRegExpressBtn()>Next</button>`;
        javascriptRegExpressRemoveValue.innerHTML = "";

    } else if (javascriptRegExpressRandomValue == 7 && javascriptRegExpressInputAnswer !== __WEBPACK_IMPORTED_MODULE_8__questionsAndAnswers_javascriptRegExpressAnswers__["a" /* javascriptRegExpressAnswerArr */][7].A7) {
        javascriptRegExpressDisplayAnswer.innerHTML = `
    <textarea name="text" class="answer_textarea" id="input">
let quoteSample = "Beware of bugs in the above code; I have only proved it correct, not tried it.";
let vowelRegex = /[aeiou]/ig; 
let result = quoteSample.match(vowelRegex); 

        </textarea>`;
        javascriptRegExpressIncorrectValue.innerHTML = "Incorrect..";
        javascriptRegExpressNextButton.innerHTML = `<button class="nextButton javascriptColor1" onclick=javascriptRegExpressBtn()>Next</button>`;
        javascriptRegExpressRemoveValue.innerHTML = "";



    } else if (javascriptRegExpressRandomValue == 8 && javascriptRegExpressInputAnswer == __WEBPACK_IMPORTED_MODULE_8__questionsAndAnswers_javascriptRegExpressAnswers__["a" /* javascriptRegExpressAnswerArr */][8].A8) {
        javascriptRegExpressCorrectValue.innerHTML = "Correct..";
        javascriptRegExpressDisplayAnswer.innerHTML = `
        <textarea name="text" class="answer_textarea" id="input">Good Job :) </textarea>`;
        javascriptRegExpressNextButton.innerHTML = `<button class="nextButton javascriptColor1" onclick=javascriptRegExpressBtn()>Next</button>`;
        javascriptRegExpressRemoveValue.innerHTML = "";

    } else if (javascriptRegExpressRandomValue == 8 && javascriptRegExpressInputAnswer !== __WEBPACK_IMPORTED_MODULE_8__questionsAndAnswers_javascriptRegExpressAnswers__["a" /* javascriptRegExpressAnswerArr */][8].A8) {
        javascriptRegExpressDisplayAnswer.innerHTML = `
    <textarea name="text" class="answer_textarea" id="input">
let quoteSample = "The quick brown fox jumps over the lazy dog.";
let alphabetRegex = /[a-z]/ig; 
let result = quoteSample.match(alphabetRegex); 
        </textarea>`;
        javascriptRegExpressIncorrectValue.innerHTML = "Incorrect..";
        javascriptRegExpressNextButton.innerHTML = `<button class="nextButton javascriptColor1" onclick=javascriptRegExpressBtn()>Next</button>`;
        javascriptRegExpressRemoveValue.innerHTML = "";



    } else if (javascriptRegExpressRandomValue == 9 && javascriptRegExpressInputAnswer == __WEBPACK_IMPORTED_MODULE_8__questionsAndAnswers_javascriptRegExpressAnswers__["a" /* javascriptRegExpressAnswerArr */][9].A9) {
        javascriptRegExpressCorrectValue.innerHTML = "Correct..";
        javascriptRegExpressDisplayAnswer.innerHTML = `
        <textarea name="text" class="answer_textarea" id="input">Good Job :) </textarea>`;
        javascriptRegExpressNextButton.innerHTML = `<button class="nextButton javascriptColor1" onclick=javascriptRegExpressBtn()>Next</button>`;
        javascriptRegExpressRemoveValue.innerHTML = "";

    } else if (javascriptRegExpressRandomValue == 9 && javascriptRegExpressInputAnswer !== __WEBPACK_IMPORTED_MODULE_8__questionsAndAnswers_javascriptRegExpressAnswers__["a" /* javascriptRegExpressAnswerArr */][9].A9) {
        javascriptRegExpressDisplayAnswer.innerHTML = `
    <textarea name="text" class="answer_textarea" id="input">
let quoteSample = "Blueberry 3.141592653s are delicious.";
let myRegex = /[h-s2-6]/ig; 
let result = quoteSample.match(myRegex); 
        </textarea>`;
        javascriptRegExpressIncorrectValue.innerHTML = "Incorrect..";
        javascriptRegExpressNextButton.innerHTML = `<button class="nextButton javascriptColor1" onclick=javascriptRegExpressBtn()>Next</button>`;
        javascriptRegExpressRemoveValue.innerHTML = "";



    } else if (javascriptRegExpressRandomValue == 10 && javascriptRegExpressInputAnswer == __WEBPACK_IMPORTED_MODULE_8__questionsAndAnswers_javascriptRegExpressAnswers__["a" /* javascriptRegExpressAnswerArr */][10].A10) {
        javascriptRegExpressCorrectValue.innerHTML = "Correct..";
        javascriptRegExpressDisplayAnswer.innerHTML = `
        <textarea name="text" class="answer_textarea" id="input">Good Job :) </textarea>`;
        javascriptRegExpressNextButton.innerHTML = `<button class="nextButton javascriptColor1" onclick=javascriptRegExpressBtn()>Next</button>`;
        javascriptRegExpressRemoveValue.innerHTML = "";

    } else if (javascriptRegExpressRandomValue == 10 && javascriptRegExpressInputAnswer !== __WEBPACK_IMPORTED_MODULE_8__questionsAndAnswers_javascriptRegExpressAnswers__["a" /* javascriptRegExpressAnswerArr */][10].A10) {
        javascriptRegExpressDisplayAnswer.innerHTML = `
    <textarea name="text" class="answer_textarea" id="input">
let quoteSample = "3 blind mice.";
let myRegex = /[^aeiou^0-99]/ig; 
let result = quoteSample.match(myRegex);
        </textarea>`;
        javascriptRegExpressIncorrectValue.innerHTML = "Incorrect..";
        javascriptRegExpressNextButton.innerHTML = `<button class="nextButton javascriptColor1" onclick=javascriptRegExpressBtn()>Next</button>`;
        javascriptRegExpressRemoveValue.innerHTML = "";



    } else if (javascriptRegExpressRandomValue == 11 && javascriptRegExpressInputAnswer == __WEBPACK_IMPORTED_MODULE_8__questionsAndAnswers_javascriptRegExpressAnswers__["a" /* javascriptRegExpressAnswerArr */][11].A11) {
        javascriptRegExpressCorrectValue.innerHTML = "Correct..";
        javascriptRegExpressDisplayAnswer.innerHTML = `
        <textarea name="text" class="answer_textarea" id="input">Good Job :) </textarea>`;
        javascriptRegExpressNextButton.innerHTML = `<button class="nextButton javascriptColor1" onclick=javascriptRegExpressBtn()>Next</button>`;
        javascriptRegExpressRemoveValue.innerHTML = "";

    } else if (javascriptRegExpressRandomValue == 11 && javascriptRegExpressInputAnswer !== __WEBPACK_IMPORTED_MODULE_8__questionsAndAnswers_javascriptRegExpressAnswers__["a" /* javascriptRegExpressAnswerArr */][11].A11) {
        javascriptRegExpressDisplayAnswer.innerHTML = `
    <textarea name="text" class="answer_textarea" id="input">
let difficultSpelling = "Mississippi";
let myRegex = /s+/g;
let result = difficultSpelling.match(myRegex);
        </textarea>`;
        javascriptRegExpressIncorrectValue.innerHTML = "Incorrect..";
        javascriptRegExpressNextButton.innerHTML = `<button class="nextButton javascriptColor1" onclick=javascriptRegExpressBtn()>Next</button>`;
        javascriptRegExpressRemoveValue.innerHTML = "";



    } else if (javascriptRegExpressRandomValue == 12 && javascriptRegExpressInputAnswer == __WEBPACK_IMPORTED_MODULE_8__questionsAndAnswers_javascriptRegExpressAnswers__["a" /* javascriptRegExpressAnswerArr */][12].A12) {
        javascriptRegExpressCorrectValue.innerHTML = "Correct..";
        javascriptRegExpressDisplayAnswer.innerHTML = `
        <textarea name="text" class="answer_textarea" id="input">Good Job :) </textarea>`;
        javascriptRegExpressNextButton.innerHTML = `<button class="nextButton javascriptColor1" onclick=javascriptRegExpressBtn()>Next</button>`;
        javascriptRegExpressRemoveValue.innerHTML = "";

    } else if (javascriptRegExpressRandomValue == 12 && javascriptRegExpressInputAnswer !== __WEBPACK_IMPORTED_MODULE_8__questionsAndAnswers_javascriptRegExpressAnswers__["a" /* javascriptRegExpressAnswerArr */][12].A12) {
        javascriptRegExpressDisplayAnswer.innerHTML = `
    <textarea name="text" class="answer_textarea" id="input">
let chewieQuote = "Aaaaaaaaaaaaaaaarrrgh!";
let chewieRegex = /A[a]*/; 
let result = chewieQuote.match(chewieRegex);
        </textarea>`;
        javascriptRegExpressIncorrectValue.innerHTML = "Incorrect..";
        javascriptRegExpressNextButton.innerHTML = `<button class="nextButton javascriptColor1" onclick=javascriptRegExpressBtn()>Next</button>`;
        javascriptRegExpressRemoveValue.innerHTML = "";



    } else if (javascriptRegExpressRandomValue == 13 && javascriptRegExpressInputAnswer == __WEBPACK_IMPORTED_MODULE_8__questionsAndAnswers_javascriptRegExpressAnswers__["a" /* javascriptRegExpressAnswerArr */][13].A13) {
        javascriptRegExpressCorrectValue.innerHTML = "Correct..";
        javascriptRegExpressDisplayAnswer.innerHTML = `
        <textarea name="text" class="answer_textarea" id="input">Good Job :) </textarea>`;
        javascriptRegExpressNextButton.innerHTML = `<button class="nextButton javascriptColor1" onclick=javascriptRegExpressBtn()>Next</button>`;
        javascriptRegExpressRemoveValue.innerHTML = "";

    } else if (javascriptRegExpressRandomValue == 13 && javascriptRegExpressInputAnswer !== __WEBPACK_IMPORTED_MODULE_8__questionsAndAnswers_javascriptRegExpressAnswers__["a" /* javascriptRegExpressAnswerArr */][13].A13) {
        javascriptRegExpressDisplayAnswer.innerHTML = `
    <textarea name="text" class="answer_textarea" id="input">
let text = "<h1>Winter is coming</h1>";
let myRegex = /<h1>?/; 
let result = text.match(myRegex);
        </textarea>`;
        javascriptRegExpressIncorrectValue.innerHTML = "Incorrect..";
        javascriptRegExpressNextButton.innerHTML = `<button class="nextButton javascriptColor1" onclick=javascriptRegExpressBtn()>Next</button>`;
        javascriptRegExpressRemoveValue.innerHTML = "";



    } else if (javascriptRegExpressRandomValue == 14 && javascriptRegExpressInputAnswer == __WEBPACK_IMPORTED_MODULE_8__questionsAndAnswers_javascriptRegExpressAnswers__["a" /* javascriptRegExpressAnswerArr */][14].A14) {
        javascriptRegExpressCorrectValue.innerHTML = "Correct..";
        javascriptRegExpressDisplayAnswer.innerHTML = `
        <textarea name="text" class="answer_textarea" id="input">Good Job :) </textarea>`;
        javascriptRegExpressNextButton.innerHTML = `<button class="nextButton javascriptColor1" onclick=javascriptRegExpressBtn()>Next</button>`;
        javascriptRegExpressRemoveValue.innerHTML = "";

    } else if (javascriptRegExpressRandomValue == 14 && javascriptRegExpressInputAnswer !== __WEBPACK_IMPORTED_MODULE_8__questionsAndAnswers_javascriptRegExpressAnswers__["a" /* javascriptRegExpressAnswerArr */][14].A14) {
        javascriptRegExpressDisplayAnswer.innerHTML = `
    <textarea name="text" class="answer_textarea" id="input">
let crowd = 'P1P2P3P4P5P6CCCP7P8P9';

let reCriminals = /C+/; 

let matchedCriminals = crowd.match(reCriminals);
console.log(matchedCriminals);
        </textarea>`;
        javascriptRegExpressIncorrectValue.innerHTML = "Incorrect..";
        javascriptRegExpressNextButton.innerHTML = `<button class="nextButton javascriptColor1" onclick=javascriptRegExpressBtn()>Next</button>`;
        javascriptRegExpressRemoveValue.innerHTML = "";



    } else if (javascriptRegExpressRandomValue == 15 && javascriptRegExpressInputAnswer == __WEBPACK_IMPORTED_MODULE_8__questionsAndAnswers_javascriptRegExpressAnswers__["a" /* javascriptRegExpressAnswerArr */][15].A15) {
        javascriptRegExpressCorrectValue.innerHTML = "Correct..";
        javascriptRegExpressDisplayAnswer.innerHTML = `
        <textarea name="text" class="answer_textarea" id="input">Good Job :) </textarea>`;
        javascriptRegExpressNextButton.innerHTML = `<button class="nextButton javascriptColor1" onclick=javascriptRegExpressBtn()>Next</button>`;
        javascriptRegExpressRemoveValue.innerHTML = "";

    } else if (javascriptRegExpressRandomValue == 15 && javascriptRegExpressInputAnswer !== __WEBPACK_IMPORTED_MODULE_8__questionsAndAnswers_javascriptRegExpressAnswers__["a" /* javascriptRegExpressAnswerArr */][15].A15) {
        javascriptRegExpressDisplayAnswer.innerHTML = `
    <textarea name="text" class="answer_textarea" id="input">
let rickyAndCal = "Cal and Ricky both like racing.";
let calRegex = /^Cal/; 
let result = calRegex.test(rickyAndCal); 
        </textarea>`;
        javascriptRegExpressIncorrectValue.innerHTML = "Incorrect..";
        javascriptRegExpressNextButton.innerHTML = `<button class="nextButton javascriptColor1" onclick=javascriptRegExpressBtn()>Next</button>`;
        javascriptRegExpressRemoveValue.innerHTML = "";



    } else if (javascriptRegExpressRandomValue == 16 && javascriptRegExpressInputAnswer == __WEBPACK_IMPORTED_MODULE_8__questionsAndAnswers_javascriptRegExpressAnswers__["a" /* javascriptRegExpressAnswerArr */][16].A16) {
        javascriptRegExpressCorrectValue.innerHTML = "Correct..";
        javascriptRegExpressDisplayAnswer.innerHTML = `
        <textarea name="text" class="answer_textarea" id="input">Good Job :) </textarea>`;
        javascriptRegExpressNextButton.innerHTML = `<button class="nextButton javascriptColor1" onclick=javascriptRegExpressBtn()>Next</button>`;
        javascriptRegExpressRemoveValue.innerHTML = "";

    } else if (javascriptRegExpressRandomValue == 16 && javascriptRegExpressInputAnswer !== __WEBPACK_IMPORTED_MODULE_8__questionsAndAnswers_javascriptRegExpressAnswers__["a" /* javascriptRegExpressAnswerArr */][16].A16) {
        javascriptRegExpressDisplayAnswer.innerHTML = `
    <textarea name="text" class="answer_textarea" id="input">
let caboose = "The last car on a train is the caboose";
let lastRegex = /caboose$/;
let result = lastRegex.test(caboose);
        </textarea>`;
        javascriptRegExpressIncorrectValue.innerHTML = "Incorrect..";
        javascriptRegExpressNextButton.innerHTML = `<button class="nextButton javascriptColor1" onclick=javascriptRegExpressBtn()>Next</button>`;
        javascriptRegExpressRemoveValue.innerHTML = "";



    } else if (javascriptRegExpressRandomValue == 17 && javascriptRegExpressInputAnswer == __WEBPACK_IMPORTED_MODULE_8__questionsAndAnswers_javascriptRegExpressAnswers__["a" /* javascriptRegExpressAnswerArr */][17].A17) {
        javascriptRegExpressCorrectValue.innerHTML = "Correct..";
        javascriptRegExpressDisplayAnswer.innerHTML = `
        <textarea name="text" class="answer_textarea" id="input">Good Job :) </textarea>`;
        javascriptRegExpressNextButton.innerHTML = `<button class="nextButton javascriptColor1" onclick=javascriptRegExpressBtn()>Next</button>`;
        javascriptRegExpressRemoveValue.innerHTML = "";

    } else if (javascriptRegExpressRandomValue == 17 && javascriptRegExpressInputAnswer !== __WEBPACK_IMPORTED_MODULE_8__questionsAndAnswers_javascriptRegExpressAnswers__["a" /* javascriptRegExpressAnswerArr */][17].A17) {
        javascriptRegExpressDisplayAnswer.innerHTML = `
    <textarea name="text" class="answer_textarea" id="input">
let quoteSample = "The five boxing wizards jump quickly."; 
let alphabetRegexV2 = /\w/g;
let result = quoteSample.match(alphabetRegexV2).length;
        </textarea>`;
        javascriptRegExpressIncorrectValue.innerHTML = "Incorrect..";
        javascriptRegExpressNextButton.innerHTML = `<button class="nextButton javascriptColor1" onclick=javascriptRegExpressBtn()>Next</button>`;
        javascriptRegExpressRemoveValue.innerHTML = "";



    } else if (javascriptRegExpressRandomValue == 18 && javascriptRegExpressInputAnswer == __WEBPACK_IMPORTED_MODULE_8__questionsAndAnswers_javascriptRegExpressAnswers__["a" /* javascriptRegExpressAnswerArr */][18].A18) {
        javascriptRegExpressCorrectValue.innerHTML = "Correct..";
        javascriptRegExpressDisplayAnswer.innerHTML = `
        <textarea name="text" class="answer_textarea" id="input">Good Job :) </textarea>`;
        javascriptRegExpressNextButton.innerHTML = `<button class="nextButton javascriptColor1" onclick=javascriptRegExpressBtn()>Next</button>`;
        javascriptRegExpressRemoveValue.innerHTML = "";

    } else if (javascriptRegExpressRandomValue == 18 && javascriptRegExpressInputAnswer !== __WEBPACK_IMPORTED_MODULE_8__questionsAndAnswers_javascriptRegExpressAnswers__["a" /* javascriptRegExpressAnswerArr */][18].A18) {
        javascriptRegExpressDisplayAnswer.innerHTML = `
    <textarea name="text" class="answer_textarea" id="input">
let quoteSample = "The five boxing wizards jump quickly.";
let nonAlphabetRegex = /\W/g;
let result = quoteSample.match(nonAlphabetRegex).length;
        </textarea>`;
        javascriptRegExpressIncorrectValue.innerHTML = "Incorrect..";
        javascriptRegExpressNextButton.innerHTML = `<button class="nextButton javascriptColor1" onclick=javascriptRegExpressBtn()>Next</button>`;
        javascriptRegExpressRemoveValue.innerHTML = "";



    } else if (javascriptRegExpressRandomValue == 19 && javascriptRegExpressInputAnswer == __WEBPACK_IMPORTED_MODULE_8__questionsAndAnswers_javascriptRegExpressAnswers__["a" /* javascriptRegExpressAnswerArr */][19].A19) {
        javascriptRegExpressCorrectValue.innerHTML = "Correct..";
        javascriptRegExpressDisplayAnswer.innerHTML = `
        <textarea name="text" class="answer_textarea" id="input">Good Job :) </textarea>`;
        javascriptRegExpressNextButton.innerHTML = `<button class="nextButton javascriptColor1" onclick=javascriptRegExpressBtn()>Next</button>`;
        javascriptRegExpressRemoveValue.innerHTML = "";

    } else if (javascriptRegExpressRandomValue == 19 && javascriptRegExpressInputAnswer !== __WEBPACK_IMPORTED_MODULE_8__questionsAndAnswers_javascriptRegExpressAnswers__["a" /* javascriptRegExpressAnswerArr */][19].A19) {
        javascriptRegExpressDisplayAnswer.innerHTML = `
    <textarea name="text" class="answer_textarea" id="input">
let numString = "Your sandwich will be $5.00";
let numRegex = /\d/g; 
let result = numString.match(numRegex).length;
          </textarea>`;
        javascriptRegExpressIncorrectValue.innerHTML = "Incorrect..";
        javascriptRegExpressNextButton.innerHTML = `<button class="nextButton javascriptColor1" onclick=javascriptRegExpressBtn()>Next</button>`;
        javascriptRegExpressRemoveValue.innerHTML = "";



    } else if (javascriptRegExpressRandomValue == 20 && javascriptRegExpressInputAnswer == __WEBPACK_IMPORTED_MODULE_8__questionsAndAnswers_javascriptRegExpressAnswers__["a" /* javascriptRegExpressAnswerArr */][20].A20) {
        javascriptRegExpressCorrectValue.innerHTML = "Correct..";
        javascriptRegExpressDisplayAnswer.innerHTML = `
        <textarea name="text" class="answer_textarea" id="input">Good Job :) </textarea>`;
        javascriptRegExpressNextButton.innerHTML = `<button class="nextButton javascriptColor1" onclick=javascriptRegExpressBtn()>Next</button>`;
        javascriptRegExpressRemoveValue.innerHTML = "";

    } else if (javascriptRegExpressRandomValue == 20 && javascriptRegExpressInputAnswer !== __WEBPACK_IMPORTED_MODULE_8__questionsAndAnswers_javascriptRegExpressAnswers__["a" /* javascriptRegExpressAnswerArr */][20].A20) {
        javascriptRegExpressDisplayAnswer.innerHTML = `
    <textarea name="text" class="answer_textarea" id="input">
let numString = "Your sandwich will be $5.00";
let noNumRegex = /\D/g;
let result = numString.match(noNumRegex).length;
        </textarea>`;
        javascriptRegExpressIncorrectValue.innerHTML = "Incorrect..";
        javascriptRegExpressNextButton.innerHTML = `<button class="nextButton javascriptColor1" onclick=javascriptRegExpressBtn()>Next</button>`;
        javascriptRegExpressRemoveValue.innerHTML = "";



    } else if (javascriptRegExpressRandomValue == 21 && javascriptRegExpressInputAnswer == __WEBPACK_IMPORTED_MODULE_8__questionsAndAnswers_javascriptRegExpressAnswers__["a" /* javascriptRegExpressAnswerArr */][21].A21) {
        javascriptRegExpressCorrectValue.innerHTML = "Correct..";
        javascriptRegExpressDisplayAnswer.innerHTML = `
        <textarea name="text" class="answer_textarea" id="input">Good Job :) </textarea>`;
        javascriptRegExpressNextButton.innerHTML = `<button class="nextButton javascriptColor1" onclick=javascriptRegExpressBtn()>Next</button>`;
        javascriptRegExpressRemoveValue.innerHTML = "";

    } else if (javascriptRegExpressRandomValue == 21 && javascriptRegExpressInputAnswer !== __WEBPACK_IMPORTED_MODULE_8__questionsAndAnswers_javascriptRegExpressAnswers__["a" /* javascriptRegExpressAnswerArr */][21].A21) {
        javascriptRegExpressDisplayAnswer.innerHTML = `
    <textarea name="text" class="answer_textarea" id="input">
let username = "JackOfAllTrades";
let userCheck = /^[a-z]{2,}\d*$/i;
let result = userCheck.test(username);
        </textarea>`;
        javascriptRegExpressIncorrectValue.innerHTML = "Incorrect..";
        javascriptRegExpressNextButton.innerHTML = `<button class="nextButton javascriptColor1" onclick=javascriptRegExpressBtn()>Next</button>`;
        javascriptRegExpressRemoveValue.innerHTML = "";



    } else if (javascriptRegExpressRandomValue == 22 && javascriptRegExpressInputAnswer == __WEBPACK_IMPORTED_MODULE_8__questionsAndAnswers_javascriptRegExpressAnswers__["a" /* javascriptRegExpressAnswerArr */][22].A22) {
        javascriptRegExpressCorrectValue.innerHTML = "Correct..";
        javascriptRegExpressDisplayAnswer.innerHTML = `
        <textarea name="text" class="answer_textarea" id="input">Good Job :) </textarea>`;
        javascriptRegExpressNextButton.innerHTML = `<button class="nextButton javascriptColor1" onclick=javascriptRegExpressBtn()>Next</button>`;
        javascriptRegExpressRemoveValue.innerHTML = "";

    } else if (javascriptRegExpressRandomValue == 22 && javascriptRegExpressInputAnswer !== __WEBPACK_IMPORTED_MODULE_8__questionsAndAnswers_javascriptRegExpressAnswers__["a" /* javascriptRegExpressAnswerArr */][22].A22) {
        javascriptRegExpressDisplayAnswer.innerHTML = `
    <textarea name="text" class="answer_textarea" id="input">
let sample = "Whitespace is important in separating words";
let countWhiteSpace = /\s/g;
let result = sample.match(countWhiteSpace);
        </textarea>`;
        javascriptRegExpressIncorrectValue.innerHTML = "Incorrect..";
        javascriptRegExpressNextButton.innerHTML = `<button class="nextButton javascriptColor1" onclick=javascriptRegExpressBtn()>Next</button>`;
        javascriptRegExpressRemoveValue.innerHTML = "";



    } else if (javascriptRegExpressRandomValue == 23 && javascriptRegExpressInputAnswer == __WEBPACK_IMPORTED_MODULE_8__questionsAndAnswers_javascriptRegExpressAnswers__["a" /* javascriptRegExpressAnswerArr */][23].A23) {
        javascriptRegExpressCorrectValue.innerHTML = "Correct..";
        javascriptRegExpressDisplayAnswer.innerHTML = `
        <textarea name="text" class="answer_textarea" id="input">Good Job :) </textarea>`;
        javascriptRegExpressNextButton.innerHTML = `<button class="nextButton javascriptColor1" onclick=javascriptRegExpressBtn()>Next</button>`;
        javascriptRegExpressRemoveValue.innerHTML = "";

    } else if (javascriptRegExpressRandomValue == 23 && javascriptRegExpressInputAnswer !== __WEBPACK_IMPORTED_MODULE_8__questionsAndAnswers_javascriptRegExpressAnswers__["a" /* javascriptRegExpressAnswerArr */][23].A23) {
        javascriptRegExpressDisplayAnswer.innerHTML = `

    <textarea name="text" class="answer_textarea" id="input">
let sample = "Whitespace is important in separating words";
let countNonWhiteSpace = /\S/g;
let result = sample.match(countNonWhiteSpace);
        </textarea>`;
        javascriptRegExpressIncorrectValue.innerHTML = "Incorrect..";
        javascriptRegExpressNextButton.innerHTML = `<button class="nextButton javascriptColor1" onclick=javascriptRegExpressBtn()>Next</button>`;
        javascriptRegExpressRemoveValue.innerHTML = "";



    } else if (javascriptRegExpressRandomValue == 24 && javascriptRegExpressInputAnswer == __WEBPACK_IMPORTED_MODULE_8__questionsAndAnswers_javascriptRegExpressAnswers__["a" /* javascriptRegExpressAnswerArr */][24].A24) {
        javascriptRegExpressCorrectValue.innerHTML = "Correct..";
        javascriptRegExpressDisplayAnswer.innerHTML = `
        <textarea name="text" class="answer_textarea" id="input">Good Job :) </textarea>`;
        javascriptRegExpressNextButton.innerHTML = `<button class="nextButton javascriptColor1" onclick=javascriptRegExpressBtn()>Next</button>`;
        javascriptRegExpressRemoveValue.innerHTML = "";

    } else if (javascriptRegExpressRandomValue == 24 && javascriptRegExpressInputAnswer !== __WEBPACK_IMPORTED_MODULE_8__questionsAndAnswers_javascriptRegExpressAnswers__["a" /* javascriptRegExpressAnswerArr */][24].A24) {
        javascriptRegExpressDisplayAnswer.innerHTML = `
    <textarea name="text" class="answer_textarea" id="input">
let ohStr = "Ohhh no";
let ohRegex = /Oh{3,6}\sno/;
let result = ohRegex.test(ohStr);
        </textarea>`;
        javascriptRegExpressIncorrectValue.innerHTML = "Incorrect..";
        javascriptRegExpressNextButton.innerHTML = `<button class="nextButton javascriptColor1" onclick=javascriptRegExpressBtn()>Next</button>`;
        javascriptRegExpressRemoveValue.innerHTML = "";



    } else if (javascriptRegExpressRandomValue == 25 && javascriptRegExpressInputAnswer == __WEBPACK_IMPORTED_MODULE_8__questionsAndAnswers_javascriptRegExpressAnswers__["a" /* javascriptRegExpressAnswerArr */][25].A25) {
        javascriptRegExpressCorrectValue.innerHTML = "Correct..";
        javascriptRegExpressDisplayAnswer.innerHTML = `
        <textarea name="text" class="answer_textarea" id="input">Good Job :) </textarea>`;
        javascriptRegExpressNextButton.innerHTML = `<button class="nextButton javascriptColor1" onclick=javascriptRegExpressBtn()>Next</button>`;
        javascriptRegExpressRemoveValue.innerHTML = "";

    } else if (javascriptRegExpressRandomValue == 25 && javascriptRegExpressInputAnswer !== __WEBPACK_IMPORTED_MODULE_8__questionsAndAnswers_javascriptRegExpressAnswers__["a" /* javascriptRegExpressAnswerArr */][25].A25) {
        javascriptRegExpressDisplayAnswer.innerHTML = `
    <textarea name="text" class="answer_textarea" id="input">
let haStr = "Hazzzzah";
let haRegex = /Haz{4,30}ah/;
let result = haRegex.test(haStr);
        </textarea>`;
        javascriptRegExpressIncorrectValue.innerHTML = "Incorrect..";
        javascriptRegExpressNextButton.innerHTML = `<button class="nextButton javascriptColor1" onclick=javascriptRegExpressBtn()>Next</button>`;
        javascriptRegExpressRemoveValue.innerHTML = "";



    } else if (javascriptRegExpressRandomValue == 26 && javascriptRegExpressInputAnswer == __WEBPACK_IMPORTED_MODULE_8__questionsAndAnswers_javascriptRegExpressAnswers__["a" /* javascriptRegExpressAnswerArr */][26].A26) {
        javascriptRegExpressCorrectValue.innerHTML = "Correct..";
        javascriptRegExpressDisplayAnswer.innerHTML = `
        <textarea name="text" class="answer_textarea" id="input">Good Job :) </textarea>`;
        javascriptRegExpressNextButton.innerHTML = `<button class="nextButton javascriptColor1" onclick=javascriptRegExpressBtn()>Next</button>`;
        javascriptRegExpressRemoveValue.innerHTML = "";

    } else if (javascriptRegExpressRandomValue == 26 && javascriptRegExpressInputAnswer !== __WEBPACK_IMPORTED_MODULE_8__questionsAndAnswers_javascriptRegExpressAnswers__["a" /* javascriptRegExpressAnswerArr */][26].A26) {
        javascriptRegExpressDisplayAnswer.innerHTML = `
    <textarea name="text" class="answer_textarea" id="input">
let timStr = "Timmmmber";
let timRegex = /Tim{4}ber/;
let result = timRegex.test(timStr); 
        </textarea>`;
        javascriptRegExpressIncorrectValue.innerHTML = "Incorrect..";
        javascriptRegExpressNextButton.innerHTML = `<button class="nextButton javascriptColor1" onclick=javascriptRegExpressBtn()>Next</button>`;
        javascriptRegExpressRemoveValue.innerHTML = "";



    } else if (javascriptRegExpressRandomValue == 27 && javascriptRegExpressInputAnswer == __WEBPACK_IMPORTED_MODULE_8__questionsAndAnswers_javascriptRegExpressAnswers__["a" /* javascriptRegExpressAnswerArr */][27].A27) {
        javascriptRegExpressCorrectValue.innerHTML = "Correct..";
        javascriptRegExpressDisplayAnswer.innerHTML = `
        <textarea name="text" class="answer_textarea" id="input">Good Job :) </textarea>`;
        javascriptRegExpressNextButton.innerHTML = `<button class="nextButton javascriptColor1" onclick=javascriptRegExpressBtn()>Next</button>`;
        javascriptRegExpressRemoveValue.innerHTML = "";

    } else if (javascriptRegExpressRandomValue == 27 && javascriptRegExpressInputAnswer !== __WEBPACK_IMPORTED_MODULE_8__questionsAndAnswers_javascriptRegExpressAnswers__["a" /* javascriptRegExpressAnswerArr */][27].A27) {
        javascriptRegExpressDisplayAnswer.innerHTML = `
    <textarea name="text" class="answer_textarea" id="input">
let favWord_US = "favorite";
let favWord_GB = "favourite";
let favRegex = /favou?rite/;
let result1 = favRegex.test(favWord_US);
let result2 = favRegex.test(favWord_GB);
        </textarea>`;
        javascriptRegExpressIncorrectValue.innerHTML = "Incorrect..";
        javascriptRegExpressNextButton.innerHTML = `<button class="nextButton javascriptColor1" onclick=javascriptRegExpressBtn()>Next</button>`;
        javascriptRegExpressRemoveValue.innerHTML = "";



    } else if (javascriptRegExpressRandomValue == 28 && javascriptRegExpressInputAnswer == __WEBPACK_IMPORTED_MODULE_8__questionsAndAnswers_javascriptRegExpressAnswers__["a" /* javascriptRegExpressAnswerArr */][28].A28) {
        javascriptRegExpressCorrectValue.innerHTML = "Correct..";
        javascriptRegExpressDisplayAnswer.innerHTML = `
        <textarea name="text" class="answer_textarea" id="input">Good Job :) </textarea>`;
        javascriptRegExpressNextButton.innerHTML = `<button class="nextButton javascriptColor1" onclick=javascriptRegExpressBtn()>Next</button>`;
        javascriptRegExpressRemoveValue.innerHTML = "";

    } else if (javascriptRegExpressRandomValue == 28 && javascriptRegExpressInputAnswer !== __WEBPACK_IMPORTED_MODULE_8__questionsAndAnswers_javascriptRegExpressAnswers__["a" /* javascriptRegExpressAnswerArr */][28].A28) {
        javascriptRegExpressDisplayAnswer.innerHTML = `
    <textarea name="text" class="answer_textarea" id="input">
let sampleWord = "astronaut";
let pwRegex = /(?=\w{5,})(?=\D*\d{2})/;
let result = pwRegex.test(sampleWord);
        </textarea>`;
        javascriptRegExpressIncorrectValue.innerHTML = "Incorrect..";
        javascriptRegExpressNextButton.innerHTML = `<button class="nextButton javascriptColor1" onclick=javascriptRegExpressBtn()>Next</button>`;
        javascriptRegExpressRemoveValue.innerHTML = "";



    } else if (javascriptRegExpressRandomValue == 29 && javascriptRegExpressInputAnswer == __WEBPACK_IMPORTED_MODULE_8__questionsAndAnswers_javascriptRegExpressAnswers__["a" /* javascriptRegExpressAnswerArr */][29].A29) {
        javascriptRegExpressCorrectValue.innerHTML = "Correct..";
        javascriptRegExpressDisplayAnswer.innerHTML = `
        <textarea name="text" class="answer_textarea" id="input">Good Job :) </textarea>`;
        javascriptRegExpressNextButton.innerHTML = `<button class="nextButton javascriptColor1" onclick=javascriptRegExpressBtn()>Next</button>`;
        javascriptRegExpressRemoveValue.innerHTML = "";

    } else if (javascriptRegExpressRandomValue == 29 && javascriptRegExpressInputAnswer !== __WEBPACK_IMPORTED_MODULE_8__questionsAndAnswers_javascriptRegExpressAnswers__["a" /* javascriptRegExpressAnswerArr */][29].A29) {
        javascriptRegExpressDisplayAnswer.innerHTML = `
    <textarea name="text" class="answer_textarea" id="input">
let repeatNum = "42 42 42";
let reRegex =  /^(\ d+)\ s\ 1\ s\ 1$/;
let result = reRegex.test(repeatNum);
        </textarea>`;
        javascriptRegExpressIncorrectValue.innerHTML = "Incorrect..";
        javascriptRegExpressNextButton.innerHTML = `<button class="nextButton javascriptColor1" onclick=javascriptRegExpressBtn()>Next</button>`;
        javascriptRegExpressRemoveValue.innerHTML = "";



    } else if (javascriptRegExpressRandomValue == 30 && javascriptRegExpressInputAnswer == __WEBPACK_IMPORTED_MODULE_8__questionsAndAnswers_javascriptRegExpressAnswers__["a" /* javascriptRegExpressAnswerArr */][30].A30) {
        javascriptRegExpressCorrectValue.innerHTML = "Correct..";
        javascriptRegExpressDisplayAnswer.innerHTML = `
        <textarea name="text" class="answer_textarea" id="input">Good Job :) </textarea>`;
        javascriptRegExpressNextButton.innerHTML = `<button class="nextButton javascriptColor1" onclick=javascriptRegExpressBtn()>Next</button>`;
        javascriptRegExpressRemoveValue.innerHTML = "";

    } else if (javascriptRegExpressRandomValue == 30 && javascriptRegExpressInputAnswer !== __WEBPACK_IMPORTED_MODULE_8__questionsAndAnswers_javascriptRegExpressAnswers__["a" /* javascriptRegExpressAnswerArr */][30].A30) {
        javascriptRegExpressDisplayAnswer.innerHTML = `
    <textarea name="text" class="answer_textarea" id="input">
let huhText = "This sandwich is good.";
let fixRegex = /good/; 
let replaceText = "okey-dokey"; 
let result = huhText.replace(fixRegex, replaceText);
        </textarea>`;
        javascriptRegExpressIncorrectValue.innerHTML = "Incorrect..";
        javascriptRegExpressNextButton.innerHTML = `<button class="nextButton javascriptColor1" onclick=javascriptRegExpressBtn()>Next</button>`;
        javascriptRegExpressRemoveValue.innerHTML = "";



    } else if (javascriptRegExpressRandomValue == 31 && javascriptRegExpressInputAnswer == __WEBPACK_IMPORTED_MODULE_8__questionsAndAnswers_javascriptRegExpressAnswers__["a" /* javascriptRegExpressAnswerArr */][31].A31) {
        javascriptRegExpressCorrectValue.innerHTML = "Correct..";
        javascriptRegExpressDisplayAnswer.innerHTML = `
        <textarea name="text" class="answer_textarea" id="input">Good Job :) </textarea>`;
        javascriptRegExpressNextButton.innerHTML = `<button class="nextButton javascriptColor1" onclick=javascriptRegExpressBtn()>Next</button>`;
        javascriptRegExpressRemoveValue.innerHTML = "";

    } else if (javascriptRegExpressRandomValue == 31 && javascriptRegExpressInputAnswer !== __WEBPACK_IMPORTED_MODULE_8__questionsAndAnswers_javascriptRegExpressAnswers__["a" /* javascriptRegExpressAnswerArr */][31].A31) {
        javascriptRegExpressDisplayAnswer.innerHTML = `
    <textarea name="text" class="answer_textarea" id="input">
let hello = "   Hello, World!  ";
let wsRegex = /^\s+|\s+$/g; 
let result = hello.replace(wsRegex, '');
        </textarea>`;
        javascriptRegExpressIncorrectValue.innerHTML = "Incorrect..";
        javascriptRegExpressNextButton.innerHTML = `<button class="nextButton javascriptColor1" onclick=javascriptRegExpressBtn()>Next</button>`;
        javascriptRegExpressRemoveValue.innerHTML = "";



    } else {
        javascriptRegExpressIncorrectValue.innerHTML = "Incorrect..";
        javascriptRegExpressNextButton.innerHTML = `<button class="nextButton javascriptColor1" onclick=javascriptRegExpressBtn()>Next</button>`;
        javascriptRegExpressRemoveValue.innerHTML = "";
    }

}
window.javascriptRegExpressSubmit = javascriptRegExpressSubmit; /* to make submit global*/

function javascriptRegExpressButton() {
    javascriptRegExpressTest = document.getElementById("javascriptRegExpressAddedQuestion").innerHTML = __WEBPACK_IMPORTED_MODULE_9__questionsAndAnswers_javascriptRegExpressQuestions__["a" /* javascriptRegExpressQuestionArr */][javascriptRegExpressRandomValue]; /* giving random question to html */

    return javascriptRegExpressTest;
}
window.javascriptRegExpressButton = javascriptRegExpressButton;

function javascriptRegExpressShowTest() {
    var javascriptRegExpressInputBox = document.getElementById("javascriptRegExpressRemove").style.display = "block";
    return javascriptRegExpressInputBox;
}
window.javascriptRegExpressShowTest = javascriptRegExpressShowTest;

function javascriptRegExpressBtn() {
    javascriptRegExpressRandomValue = Math.floor(Math.random() * __WEBPACK_IMPORTED_MODULE_9__questionsAndAnswers_javascriptRegExpressQuestions__["a" /* javascriptRegExpressQuestionArr */].length); /* buton next in html to make a next random question*/
    document.getElementById("javascriptRegExpressAddedQuestion").innerHTML = __WEBPACK_IMPORTED_MODULE_9__questionsAndAnswers_javascriptRegExpressQuestions__["a" /* javascriptRegExpressQuestionArr */][javascriptRegExpressRandomValue]; /* giving random question to html */
    document.getElementById("javascriptRegExpressElementButton").innerHTML = "";/* to clean javascriptRegExpressElementButton*/
    document.getElementById("javascriptRegExpressRemove").innerHTML = `<textarea name="text" class="answer_textarea" id="input"></textarea></br>
      <button class="answer_submit javascriptColor1" id = "javascriptRegExpressStartButton" onclick="javascriptRegExpressSubmit()">Submit</button>`;/* to create next text area and Submit button. */
    document.getElementById("javascriptRegExpressCheckingAnswer").innerHTML = "";
    document.getElementById("javascriptRegExpressShowingAnswer").innerHTML = "";
}
window.javascriptRegExpressBtn = javascriptRegExpressBtn;/* to make submit global*/











































































var javascriptBasicDataStructureRandomValue = Math.floor(Math.random() * __WEBPACK_IMPORTED_MODULE_11__questionsAndAnswers_javascriptBasicDataStructureQuestions__["a" /* javascriptBasicDataStructureQuestionArr */].length); /* taking random question from htmlQuestionArr*/


function javascriptBasicDataStructureSubmit() { /* function for html submit button*/

    var javascriptBasicDataStructureInputAnswer = input.value.replace(/\s+/g, ``); /*replace(/\s+/g, `` is removing all spaces. Avoid checking all the spaces to compare text*/
    var javascriptBasicDataStructureCorrectValue = document.getElementById("javascriptBasicDataStructureCheckingAnswer"); /* making getElementById code shorter*/
    var javascriptBasicDataStructureIncorrectValue = document.getElementById("javascriptBasicDataStructureCheckingAnswer");
    var javascriptBasicDataStructureDisplayAnswer = document.getElementById("javascriptBasicDataStructureShowingAnswer");
    var javascriptBasicDataStructureNextButton = document.getElementById("javascriptBasicDataStructureElementButton");
    var javascriptBasicDataStructureRemoveValue = document.getElementById("javascriptBasicDataStructureRemove");

    if (javascriptBasicDataStructureRandomValue == 0 && javascriptBasicDataStructureInputAnswer == __WEBPACK_IMPORTED_MODULE_10__questionsAndAnswers_javascriptBasicDataStructureAnswers__["a" /* javascriptBasicDataStructureAnswerArr */][0].A0) { /* checking if javascriptBasicDataStructureRandomValue is 0 and if putting answer the same as javascriptBasicDataStructureAnswerArr*//*A0 is just that I can track answer numbers when adding questions and answers*/
        javascriptBasicDataStructureCorrectValue.innerHTML = "Correct..";
        javascriptBasicDataStructureDisplayAnswer.innerHTML = `
        <textarea name="text" class="answer_textarea" id="input">Good Job :) </textarea>`;
        javascriptBasicDataStructureNextButton.innerHTML = `<button class="nextButton javascriptColor1" onclick=javascriptBasicDataStructureBtn()>Next</button>`; /* creating next button with javascriptBasicDataStructureBtn()function*/
        javascriptBasicDataStructureRemoveValue.innerHTML = "";/* removing in html answer*/



    } else if (javascriptBasicDataStructureRandomValue == 0 && javascriptBasicDataStructureInputAnswer !== __WEBPACK_IMPORTED_MODULE_10__questionsAndAnswers_javascriptBasicDataStructureAnswers__["a" /* javascriptBasicDataStructureAnswerArr */][0].A0) {/*  if random value not == then giving then display the answere.*/
        javascriptBasicDataStructureDisplayAnswer.innerHTML = `
    <textarea name="text" class="answer_textarea" id="input">
let yourArray = ["a", 2, true, "c", null, {name: "john"}];
        </textarea>`;
        javascriptBasicDataStructureIncorrectValue.innerHTML = "Incorrect..";
        javascriptBasicDataStructureNextButton.innerHTML = `<button class="nextButton javascriptColor1" onclick=javascriptBasicDataStructureBtn()>Next</button>`;
        javascriptBasicDataStructureRemoveValue.innerHTML = "";



    } else if (javascriptBasicDataStructureRandomValue == 1 && javascriptBasicDataStructureInputAnswer == __WEBPACK_IMPORTED_MODULE_10__questionsAndAnswers_javascriptBasicDataStructureAnswers__["a" /* javascriptBasicDataStructureAnswerArr */][1].A1) {
        javascriptBasicDataStructureCorrectValue.innerHTML = "Correct..";
        javascriptBasicDataStructureDisplayAnswer.innerHTML = `
        <textarea name="text" class="answer_textarea" id="input">Good Job :) </textarea>`;
        javascriptBasicDataStructureNextButton.innerHTML = `<button class="nextButton javascriptColor1" onclick=javascriptBasicDataStructureBtn()>Next</button>`;
        javascriptBasicDataStructureRemoveValue.innerHTML = "";

    } else if (javascriptBasicDataStructureRandomValue == 1 && javascriptBasicDataStructureInputAnswer !== __WEBPACK_IMPORTED_MODULE_10__questionsAndAnswers_javascriptBasicDataStructureAnswers__["a" /* javascriptBasicDataStructureAnswerArr */][1].A1) {
        javascriptBasicDataStructureDisplayAnswer.innerHTML = `
        <textarea name="text" class="answer_textarea" id="input">
let myArray = ["a", "b", "c", "d"];
myArray[1] = "anything we want";
console.log(myArray);
          </textarea>`;
        javascriptBasicDataStructureIncorrectValue.innerHTML = "Incorrect..";
        javascriptBasicDataStructureNextButton.innerHTML = `<button class="nextButton javascriptColor1" onclick=javascriptBasicDataStructureBtn()>Next</button>`;
        javascriptBasicDataStructureRemoveValue.innerHTML = "";



    } else if (javascriptBasicDataStructureRandomValue == 2 && javascriptBasicDataStructureInputAnswer == __WEBPACK_IMPORTED_MODULE_10__questionsAndAnswers_javascriptBasicDataStructureAnswers__["a" /* javascriptBasicDataStructureAnswerArr */][2].A2) {
        javascriptBasicDataStructureCorrectValue.innerHTML = "Correct..";
        javascriptBasicDataStructureDisplayAnswer.innerHTML = `
        <textarea name="text" class="answer_textarea" id="input">Good Job :) </textarea>`;
        javascriptBasicDataStructureNextButton.innerHTML = `<button class="nextButton javascriptColor1" onclick=javascriptBasicDataStructureBtn()>Next</button>`;
        javascriptBasicDataStructureRemoveValue.innerHTML = "";

    } else if (javascriptBasicDataStructureRandomValue == 2 && javascriptBasicDataStructureInputAnswer !== __WEBPACK_IMPORTED_MODULE_10__questionsAndAnswers_javascriptBasicDataStructureAnswers__["a" /* javascriptBasicDataStructureAnswerArr */][2].A2) {
        javascriptBasicDataStructureDisplayAnswer.innerHTML = `
    <textarea name="text" class="answer_textarea" id="input">
function mixedNumbers(arr) {
    arr.unshift('I',2,'three');
    arr.push(7,'VIII', 9);
    return arr;
}
console.log(mixedNumbers(['IV', 5, 'six']));
          </textarea>`;
        javascriptBasicDataStructureIncorrectValue.innerHTML = "Incorrect..";
        javascriptBasicDataStructureNextButton.innerHTML = `<button class="nextButton javascriptColor1" onclick=javascriptBasicDataStructureBtn()>Next</button>`;
        javascriptBasicDataStructureRemoveValue.innerHTML = "";



    } else if (javascriptBasicDataStructureRandomValue == 3 && javascriptBasicDataStructureInputAnswer == __WEBPACK_IMPORTED_MODULE_10__questionsAndAnswers_javascriptBasicDataStructureAnswers__["a" /* javascriptBasicDataStructureAnswerArr */][3].A3) {
        javascriptBasicDataStructureCorrectValue.innerHTML = "Correct..";
        javascriptBasicDataStructureDisplayAnswer.innerHTML = `
        <textarea name="text" class="answer_textarea" id="input">Good Job :) </textarea>`;
        javascriptBasicDataStructureNextButton.innerHTML = `<button class="nextButton javascriptColor1" onclick=javascriptBasicDataStructureBtn()>Next</button>`;
        javascriptBasicDataStructureRemoveValue.innerHTML = "";

    } else if (javascriptBasicDataStructureRandomValue == 3 && javascriptBasicDataStructureInputAnswer !== __WEBPACK_IMPORTED_MODULE_10__questionsAndAnswers_javascriptBasicDataStructureAnswers__["a" /* javascriptBasicDataStructureAnswerArr */][3].A3) {
        javascriptBasicDataStructureDisplayAnswer.innerHTML = `
    <textarea name="text" class="answer_textarea" id="input">
function popShift(arr) {
    let popped = arr.pop();
    let shifted = arr.shift();
    return [shifted, popped];
}

console.log(popShift(['challenge', 'is', 'not', 'complete']));
        </textarea>`;
        javascriptBasicDataStructureIncorrectValue.innerHTML = "Incorrect..";
        javascriptBasicDataStructureNextButton.innerHTML = `<button class="nextButton javascriptColor1" onclick=javascriptBasicDataStructureBtn()>Next</button>`;
        javascriptBasicDataStructureRemoveValue.innerHTML = "";
        


    } else if (javascriptBasicDataStructureRandomValue == 4 && javascriptBasicDataStructureInputAnswer == __WEBPACK_IMPORTED_MODULE_10__questionsAndAnswers_javascriptBasicDataStructureAnswers__["a" /* javascriptBasicDataStructureAnswerArr */][4].A4) {
        javascriptBasicDataStructureCorrectValue.innerHTML = "Correct..";
        javascriptBasicDataStructureDisplayAnswer.innerHTML = `
        <textarea name="text" class="answer_textarea" id="input">Good Job :) </textarea>`;
        javascriptBasicDataStructureNextButton.innerHTML = `<button class="nextButton javascriptColor1" onclick=javascriptBasicDataStructureBtn()>Next</button>`;
        javascriptBasicDataStructureRemoveValue.innerHTML = "";

    } else if (javascriptBasicDataStructureRandomValue == 4 && javascriptBasicDataStructureInputAnswer !== __WEBPACK_IMPORTED_MODULE_10__questionsAndAnswers_javascriptBasicDataStructureAnswers__["a" /* javascriptBasicDataStructureAnswerArr */][4].A4) {
        javascriptBasicDataStructureDisplayAnswer.innerHTML = `
    <textarea name="text" class="answer_textarea" id="input">
function sumOfTen(arr) {
    arr.splice(1,2);
    return arr.reduce((a, b) => a + b);
}
console.log(sumOfTen([2, 5, 1, 5, 2, 1]));
        </textarea>`;
        javascriptBasicDataStructureIncorrectValue.innerHTML = "Incorrect..";
        javascriptBasicDataStructureNextButton.innerHTML = `<button class="nextButton javascriptColor1" onclick=javascriptBasicDataStructureBtn()>Next</button>`;
        javascriptBasicDataStructureRemoveValue.innerHTML = "";



    } else if (javascriptBasicDataStructureRandomValue == 5 && javascriptBasicDataStructureInputAnswer == __WEBPACK_IMPORTED_MODULE_10__questionsAndAnswers_javascriptBasicDataStructureAnswers__["a" /* javascriptBasicDataStructureAnswerArr */][5].A5) {
        javascriptBasicDataStructureCorrectValue.innerHTML = "Correct..";
        javascriptBasicDataStructureDisplayAnswer.innerHTML = `
        <textarea name="text" class="answer_textarea" id="input">Good Job :) </textarea>`;
        javascriptBasicDataStructureNextButton.innerHTML = `<button class="nextButton javascriptColor1" onclick=javascriptBasicDataStructureBtn()>Next</button>`;
        javascriptBasicDataStructureRemoveValue.innerHTML = "";

    } else if (javascriptBasicDataStructureRandomValue == 5 && javascriptBasicDataStructureInputAnswer !== __WEBPACK_IMPORTED_MODULE_10__questionsAndAnswers_javascriptBasicDataStructureAnswers__["a" /* javascriptBasicDataStructureAnswerArr */][5].A5) {
        javascriptBasicDataStructureDisplayAnswer.innerHTML = `
    <textarea name="text" class="answer_textarea" id="input">
function htmlColorNames(arr) {
    arr.splice(0, 2, "DarkSalmon", "BlanchedAlmond");
    return arr;
} 
console.log(htmlColorNames(['DarkGoldenRod', 'WhiteSmoke', 'LavenderBlush', 'PaleTurqoise', 'FireBrick']));
        </textarea>`;
        javascriptBasicDataStructureIncorrectValue.innerHTML = "Incorrect..";
        javascriptBasicDataStructureNextButton.innerHTML = `<button class="nextButton javascriptColor1" onclick=javascriptBasicDataStructureBtn()>Next</button>`;
        javascriptBasicDataStructureRemoveValue.innerHTML = "";



    } else if (javascriptBasicDataStructureRandomValue == 6 && javascriptBasicDataStructureInputAnswer == __WEBPACK_IMPORTED_MODULE_10__questionsAndAnswers_javascriptBasicDataStructureAnswers__["a" /* javascriptBasicDataStructureAnswerArr */][6].A6) {
        javascriptBasicDataStructureCorrectValue.innerHTML = "Correct..";
        javascriptBasicDataStructureDisplayAnswer.innerHTML = `
        <textarea name="text" class="answer_textarea" id="input">Good Job :) </textarea>`;
        javascriptBasicDataStructureNextButton.innerHTML = `<button class="nextButton javascriptColor1" onclick=javascriptBasicDataStructureBtn()>Next</button>`;
        javascriptBasicDataStructureRemoveValue.innerHTML = "";

    } else if (javascriptBasicDataStructureRandomValue == 6 && javascriptBasicDataStructureInputAnswer !== __WEBPACK_IMPORTED_MODULE_10__questionsAndAnswers_javascriptBasicDataStructureAnswers__["a" /* javascriptBasicDataStructureAnswerArr */][6].A6) {
        javascriptBasicDataStructureDisplayAnswer.innerHTML = `
    <textarea name="text" class="answer_textarea" id="input">
function forecast(arr) {
    return arr.slice(2,4);
}
console.log(forecast(['cold', 'rainy', 'warm', 'sunny', 'cool', 'thunderstorms']));
        </textarea>`;
        javascriptBasicDataStructureIncorrectValue.innerHTML = "Incorrect..";
        javascriptBasicDataStructureNextButton.innerHTML = `<button class="nextButton javascriptColor1" onclick=javascriptBasicDataStructureBtn()>Next</button>`;
        javascriptBasicDataStructureRemoveValue.innerHTML = "";



    } else if (javascriptBasicDataStructureRandomValue == 7 && javascriptBasicDataStructureInputAnswer == __WEBPACK_IMPORTED_MODULE_10__questionsAndAnswers_javascriptBasicDataStructureAnswers__["a" /* javascriptBasicDataStructureAnswerArr */][7].A7) {
        javascriptBasicDataStructureCorrectValue.innerHTML = "Correct..";
        javascriptBasicDataStructureDisplayAnswer.innerHTML = `
        <textarea name="text" class="answer_textarea" id="input">Good Job :) </textarea>`;
        javascriptBasicDataStructureNextButton.innerHTML = `<button class="nextButton javascriptColor1" onclick=javascriptBasicDataStructureBtn()>Next</button>`;
        javascriptBasicDataStructureRemoveValue.innerHTML = "";

    } else if (javascriptBasicDataStructureRandomValue == 7 && javascriptBasicDataStructureInputAnswer !== __WEBPACK_IMPORTED_MODULE_10__questionsAndAnswers_javascriptBasicDataStructureAnswers__["a" /* javascriptBasicDataStructureAnswerArr */][7].A7) {
        javascriptBasicDataStructureDisplayAnswer.innerHTML = `
    <textarea name="text" class="answer_textarea" id="input">
function copyMachine(arr, num) {
    let newArr = [];
    while (num >= 1) {
        newArr.push([...arr]);
        num--;
    }
    return newArr;
}
console.log(copyMachine([true, false, true], 2));

        </textarea>`;
        javascriptBasicDataStructureIncorrectValue.innerHTML = "Incorrect..";
        javascriptBasicDataStructureNextButton.innerHTML = `<button class="nextButton javascriptColor1" onclick=javascriptBasicDataStructureBtn()>Next</button>`;
        javascriptBasicDataStructureRemoveValue.innerHTML = "";



    } else if (javascriptBasicDataStructureRandomValue == 8 && javascriptBasicDataStructureInputAnswer == __WEBPACK_IMPORTED_MODULE_10__questionsAndAnswers_javascriptBasicDataStructureAnswers__["a" /* javascriptBasicDataStructureAnswerArr */][8].A8) {
        javascriptBasicDataStructureCorrectValue.innerHTML = "Correct..";
        javascriptBasicDataStructureDisplayAnswer.innerHTML = `
        <textarea name="text" class="answer_textarea" id="input">Good Job :) </textarea>`;
        javascriptBasicDataStructureNextButton.innerHTML = `<button class="nextButton javascriptColor1" onclick=javascriptBasicDataStructureBtn()>Next</button>`;
        javascriptBasicDataStructureRemoveValue.innerHTML = "";

    } else if (javascriptBasicDataStructureRandomValue == 8 && javascriptBasicDataStructureInputAnswer !== __WEBPACK_IMPORTED_MODULE_10__questionsAndAnswers_javascriptBasicDataStructureAnswers__["a" /* javascriptBasicDataStructureAnswerArr */][8].A8) {
        javascriptBasicDataStructureDisplayAnswer.innerHTML = `
    <textarea name="text" class="answer_textarea" id="input">
function spreadOut() {
    let fragment = ['to', 'code'];
    let sentence = ["learning", ...fragment, "is", "fun"]; 
    return sentence;
}
console.log(spreadOut());
        </textarea>`;
        javascriptBasicDataStructureIncorrectValue.innerHTML = "Incorrect..";
        javascriptBasicDataStructureNextButton.innerHTML = `<button class="nextButton javascriptColor1" onclick=javascriptBasicDataStructureBtn()>Next</button>`;
        javascriptBasicDataStructureRemoveValue.innerHTML = "";



    } else if (javascriptBasicDataStructureRandomValue == 9 && javascriptBasicDataStructureInputAnswer == __WEBPACK_IMPORTED_MODULE_10__questionsAndAnswers_javascriptBasicDataStructureAnswers__["a" /* javascriptBasicDataStructureAnswerArr */][9].A9) {
        javascriptBasicDataStructureCorrectValue.innerHTML = "Correct..";
        javascriptBasicDataStructureDisplayAnswer.innerHTML = `
        <textarea name="text" class="answer_textarea" id="input">Good Job :) </textarea>`;
        javascriptBasicDataStructureNextButton.innerHTML = `<button class="nextButton javascriptColor1" onclick=javascriptBasicDataStructureBtn()>Next</button>`;
        javascriptBasicDataStructureRemoveValue.innerHTML = "";

    } else if (javascriptBasicDataStructureRandomValue == 9 && javascriptBasicDataStructureInputAnswer !== __WEBPACK_IMPORTED_MODULE_10__questionsAndAnswers_javascriptBasicDataStructureAnswers__["a" /* javascriptBasicDataStructureAnswerArr */][9].A9) {
        javascriptBasicDataStructureDisplayAnswer.innerHTML = `
    <textarea name="text" class="answer_textarea" id="input">
function quickCheck(arr, elem) {
    return arr.indexOf(elem) >= 0 ? true : false;
}
console.log(quickCheck(['squash', 'onions', 'shallots'], 'mushrooms'));
        </textarea>`;
        javascriptBasicDataStructureIncorrectValue.innerHTML = "Incorrect..";
        javascriptBasicDataStructureNextButton.innerHTML = `<button class="nextButton javascriptColor1" onclick=javascriptBasicDataStructureBtn()>Next</button>`;
        javascriptBasicDataStructureRemoveValue.innerHTML = "";



    } else if (javascriptBasicDataStructureRandomValue == 10 && javascriptBasicDataStructureInputAnswer == __WEBPACK_IMPORTED_MODULE_10__questionsAndAnswers_javascriptBasicDataStructureAnswers__["a" /* javascriptBasicDataStructureAnswerArr */][10].A10) {
        javascriptBasicDataStructureCorrectValue.innerHTML = "Correct..";
        javascriptBasicDataStructureDisplayAnswer.innerHTML = `
        <textarea name="text" class="answer_textarea" id="input">Good Job :) </textarea>`;
        javascriptBasicDataStructureNextButton.innerHTML = `<button class="nextButton javascriptColor1" onclick=javascriptBasicDataStructureBtn()>Next</button>`;
        javascriptBasicDataStructureRemoveValue.innerHTML = "";

    } else if (javascriptBasicDataStructureRandomValue == 10 && javascriptBasicDataStructureInputAnswer !== __WEBPACK_IMPORTED_MODULE_10__questionsAndAnswers_javascriptBasicDataStructureAnswers__["a" /* javascriptBasicDataStructureAnswerArr */][10].A10) {
        javascriptBasicDataStructureDisplayAnswer.innerHTML = `
    <textarea name="text" class="answer_textarea" id="input">
function filteredArray(arr, elem) {
    let newArr = [];
    for (let i = 0; i < arr.length; i++) { 
        if (arr[i].indexOf(elem)==-1){ 
            newArr.push(arr[i]); 
        };
    };
    return newArr;
};
console.log(filteredArray([[3, 2, 3], [1, 6, 3], [3, 13, 26], [19, 3, 9]], 3)); 
        </textarea>`;
        javascriptBasicDataStructureIncorrectValue.innerHTML = "Incorrect..";
        javascriptBasicDataStructureNextButton.innerHTML = `<button class="nextButton javascriptColor1" onclick=javascriptBasicDataStructureBtn()>Next</button>`;
        javascriptBasicDataStructureRemoveValue.innerHTML = "";



    } else if (javascriptBasicDataStructureRandomValue == 11 && javascriptBasicDataStructureInputAnswer == __WEBPACK_IMPORTED_MODULE_10__questionsAndAnswers_javascriptBasicDataStructureAnswers__["a" /* javascriptBasicDataStructureAnswerArr */][11].A11) {
        javascriptBasicDataStructureCorrectValue.innerHTML = "Correct..";
        javascriptBasicDataStructureDisplayAnswer.innerHTML = `
        <textarea name="text" class="answer_textarea" id="input">Good Job :) </textarea>`;
        javascriptBasicDataStructureNextButton.innerHTML = `<button class="nextButton javascriptColor1" onclick=javascriptBasicDataStructureBtn()>Next</button>`;
        javascriptBasicDataStructureRemoveValue.innerHTML = "";

    } else if (javascriptBasicDataStructureRandomValue == 11 && javascriptBasicDataStructureInputAnswer !== __WEBPACK_IMPORTED_MODULE_10__questionsAndAnswers_javascriptBasicDataStructureAnswers__["a" /* javascriptBasicDataStructureAnswerArr */][11].A11) {
        javascriptBasicDataStructureDisplayAnswer.innerHTML = `
    <textarea name="text" class="answer_textarea" id="input">
let myNestedArray = [
    ['unshift', false, 1, 2, 3, 'complex', 'nested'],
    ['loop', 'shift', 6, 7, 1000, 'method'],
    ['concat', false, true, 'spread', 'array',["deep"]],
    ['mutate', 1327.98, 'splice', 'slice', 'push', [["deeper"]]],
    ['iterate', 1.3849, 7, '8.4876', 'arbitrary', 'depth', [[["deepest"]]] ]
];
        </textarea>`;
        javascriptBasicDataStructureIncorrectValue.innerHTML = "Incorrect..";
        javascriptBasicDataStructureNextButton.innerHTML = `<button class="nextButton javascriptColor1" onclick=javascriptBasicDataStructureBtn()>Next</button>`;
        javascriptBasicDataStructureRemoveValue.innerHTML = "";



    } else if (javascriptBasicDataStructureRandomValue == 12 && javascriptBasicDataStructureInputAnswer == __WEBPACK_IMPORTED_MODULE_10__questionsAndAnswers_javascriptBasicDataStructureAnswers__["a" /* javascriptBasicDataStructureAnswerArr */][12].A12) {
        javascriptBasicDataStructureCorrectValue.innerHTML = "Correct..";
        javascriptBasicDataStructureDisplayAnswer.innerHTML = `
        <textarea name="text" class="answer_textarea" id="input">Good Job :) </textarea>`;
        javascriptBasicDataStructureNextButton.innerHTML = `<button class="nextButton javascriptColor1" onclick=javascriptBasicDataStructureBtn()>Next</button>`;
        javascriptBasicDataStructureRemoveValue.innerHTML = "";

    } else if (javascriptBasicDataStructureRandomValue == 12 && javascriptBasicDataStructureInputAnswer !== __WEBPACK_IMPORTED_MODULE_10__questionsAndAnswers_javascriptBasicDataStructureAnswers__["a" /* javascriptBasicDataStructureAnswerArr */][12].A12) {
        javascriptBasicDataStructureDisplayAnswer.innerHTML = `
    <textarea name="text" class="answer_textarea" id="input">
let foods = {
    apples: 25,
    oranges: 32,
    plums: 28
};
foods['bananas'] = 13;
foods['grapes'] = 35;
foods['strawberries'] = 27;
console.log(foods);
        </textarea>`;
        javascriptBasicDataStructureIncorrectValue.innerHTML = "Incorrect..";
        javascriptBasicDataStructureNextButton.innerHTML = `<button class="nextButton javascriptColor1" onclick=javascriptBasicDataStructureBtn()>Next</button>`;
        javascriptBasicDataStructureRemoveValue.innerHTML = "";



    } else if (javascriptBasicDataStructureRandomValue == 13 && javascriptBasicDataStructureInputAnswer == __WEBPACK_IMPORTED_MODULE_10__questionsAndAnswers_javascriptBasicDataStructureAnswers__["a" /* javascriptBasicDataStructureAnswerArr */][13].A13) {
        javascriptBasicDataStructureCorrectValue.innerHTML = "Correct..";
        javascriptBasicDataStructureDisplayAnswer.innerHTML = `
        <textarea name="text" class="answer_textarea" id="input">Good Job :) </textarea>`;
        javascriptBasicDataStructureNextButton.innerHTML = `<button class="nextButton javascriptColor1" onclick=javascriptBasicDataStructureBtn()>Next</button>`;
        javascriptBasicDataStructureRemoveValue.innerHTML = "";

    } else if (javascriptBasicDataStructureRandomValue == 13 && javascriptBasicDataStructureInputAnswer !== __WEBPACK_IMPORTED_MODULE_10__questionsAndAnswers_javascriptBasicDataStructureAnswers__["a" /* javascriptBasicDataStructureAnswerArr */][13].A13) {
        javascriptBasicDataStructureDisplayAnswer.innerHTML = `
    <textarea name="text" class="answer_textarea" id="input">
let userActivity = {
    id: 23894201352,
    date: 'January 1, 2017',
    data: {
        totalUsers: 51,
        online: 42
    }
};
userActivity.data.online = 45;

console.log(userActivity);
        </textarea>`;
        javascriptBasicDataStructureIncorrectValue.innerHTML = "Incorrect..";
        javascriptBasicDataStructureNextButton.innerHTML = `<button class="nextButton javascriptColor1" onclick=javascriptBasicDataStructureBtn()>Next</button>`;
        javascriptBasicDataStructureRemoveValue.innerHTML = "";



    } else if (javascriptBasicDataStructureRandomValue == 14 && javascriptBasicDataStructureInputAnswer == __WEBPACK_IMPORTED_MODULE_10__questionsAndAnswers_javascriptBasicDataStructureAnswers__["a" /* javascriptBasicDataStructureAnswerArr */][14].A14) {
        javascriptBasicDataStructureCorrectValue.innerHTML = "Correct..";
        javascriptBasicDataStructureDisplayAnswer.innerHTML = `
        <textarea name="text" class="answer_textarea" id="input">Good Job :) </textarea>`;
        javascriptBasicDataStructureNextButton.innerHTML = `<button class="nextButton javascriptColor1" onclick=javascriptBasicDataStructureBtn()>Next</button>`;
        javascriptBasicDataStructureRemoveValue.innerHTML = "";

    } else if (javascriptBasicDataStructureRandomValue == 14 && javascriptBasicDataStructureInputAnswer !== __WEBPACK_IMPORTED_MODULE_10__questionsAndAnswers_javascriptBasicDataStructureAnswers__["a" /* javascriptBasicDataStructureAnswerArr */][14].A14) {
        javascriptBasicDataStructureDisplayAnswer.innerHTML = `
    <textarea name="text" class="answer_textarea" id="input">
let foods = {
    apples: 25,
    oranges: 32,
    plums: 28,
    bananas: 13,
    grapes: 35,
    strawberries: 27
};

function checkInventory(scannedItem) {
    return foods[scannedItem];
}
console.log(checkInventory("apples"));
        </textarea>`;
        javascriptBasicDataStructureIncorrectValue.innerHTML = "Incorrect..";
        javascriptBasicDataStructureNextButton.innerHTML = `<button class="nextButton javascriptColor1" onclick=javascriptBasicDataStructureBtn()>Next</button>`;
        javascriptBasicDataStructureRemoveValue.innerHTML = "";



    } else if (javascriptBasicDataStructureRandomValue == 15 && javascriptBasicDataStructureInputAnswer == __WEBPACK_IMPORTED_MODULE_10__questionsAndAnswers_javascriptBasicDataStructureAnswers__["a" /* javascriptBasicDataStructureAnswerArr */][15].A15) {
        javascriptBasicDataStructureCorrectValue.innerHTML = "Correct..";
        javascriptBasicDataStructureDisplayAnswer.innerHTML = `
        <textarea name="text" class="answer_textarea" id="input">Good Job :) </textarea>`;
        javascriptBasicDataStructureNextButton.innerHTML = `<button class="nextButton javascriptColor1" onclick=javascriptBasicDataStructureBtn()>Next</button>`;
        javascriptBasicDataStructureRemoveValue.innerHTML = "";

    } else if (javascriptBasicDataStructureRandomValue == 15 && javascriptBasicDataStructureInputAnswer !== __WEBPACK_IMPORTED_MODULE_10__questionsAndAnswers_javascriptBasicDataStructureAnswers__["a" /* javascriptBasicDataStructureAnswerArr */][15].A15) {
        javascriptBasicDataStructureDisplayAnswer.innerHTML = `
    <textarea name="text" class="answer_textarea" id="input">
let foods = {
    apples: 25,
    oranges: 32,
    plums: 28,
    bananas: 13,
    grapes: 35,
    strawberries: 27
};
delete foods.oranges;
delete foods.plums;
delete foods.strawberries;
console.log(foods);
        </textarea>`;
        javascriptBasicDataStructureIncorrectValue.innerHTML = "Incorrect..";
        javascriptBasicDataStructureNextButton.innerHTML = `<button class="nextButton javascriptColor1" onclick=javascriptBasicDataStructureBtn()>Next</button>`;
        javascriptBasicDataStructureRemoveValue.innerHTML = "";



    } else if (javascriptBasicDataStructureRandomValue == 16 && javascriptBasicDataStructureInputAnswer == __WEBPACK_IMPORTED_MODULE_10__questionsAndAnswers_javascriptBasicDataStructureAnswers__["a" /* javascriptBasicDataStructureAnswerArr */][16].A16) {
        javascriptBasicDataStructureCorrectValue.innerHTML = "Correct..";
        javascriptBasicDataStructureDisplayAnswer.innerHTML = `
        <textarea name="text" class="answer_textarea" id="input">Good Job :) </textarea>`;
        javascriptBasicDataStructureNextButton.innerHTML = `<button class="nextButton javascriptColor1" onclick=javascriptBasicDataStructureBtn()>Next</button>`;
        javascriptBasicDataStructureRemoveValue.innerHTML = "";

    } else if (javascriptBasicDataStructureRandomValue == 16 && javascriptBasicDataStructureInputAnswer !== __WEBPACK_IMPORTED_MODULE_10__questionsAndAnswers_javascriptBasicDataStructureAnswers__["a" /* javascriptBasicDataStructureAnswerArr */][16].A16) {
        javascriptBasicDataStructureDisplayAnswer.innerHTML = `
    <textarea name="text" class="answer_textarea" id="input">
let users = {
    Alan: {
        age: 27,
        online: true
    },
    Jeff: {
        age: 32,
        online: true
    },
    Sarah: {
        age: 48,
        online: true
    },
    Ryan: {
        age: 19,
        online: true
    }
};
    
function isEveryoneHere(obj) {
    return (users.hasOwnProperty('Alan','Jeff','Sarah','Ryan')) ? true : false;
}

console.log(isEveryoneHere(users));
        </textarea>`;
        javascriptBasicDataStructureIncorrectValue.innerHTML = "Incorrect..";
        javascriptBasicDataStructureNextButton.innerHTML = `<button class="nextButton javascriptColor1" onclick=javascriptBasicDataStructureBtn()>Next</button>`;
        javascriptBasicDataStructureRemoveValue.innerHTML = "";



    } else if (javascriptBasicDataStructureRandomValue == 17 && javascriptBasicDataStructureInputAnswer == __WEBPACK_IMPORTED_MODULE_10__questionsAndAnswers_javascriptBasicDataStructureAnswers__["a" /* javascriptBasicDataStructureAnswerArr */][17].A17) {
        javascriptBasicDataStructureCorrectValue.innerHTML = "Correct..";
        javascriptBasicDataStructureDisplayAnswer.innerHTML = `
        <textarea name="text" class="answer_textarea" id="input">Good Job :) </textarea>`;
        javascriptBasicDataStructureNextButton.innerHTML = `<button class="nextButton javascriptColor1" onclick=javascriptBasicDataStructureBtn()>Next</button>`;
        javascriptBasicDataStructureRemoveValue.innerHTML = "";

    } else if (javascriptBasicDataStructureRandomValue == 17 && javascriptBasicDataStructureInputAnswer !== __WEBPACK_IMPORTED_MODULE_10__questionsAndAnswers_javascriptBasicDataStructureAnswers__["a" /* javascriptBasicDataStructureAnswerArr */][17].A17) {
        javascriptBasicDataStructureDisplayAnswer.innerHTML = `
    <textarea name="text" class="answer_textarea" id="input">
let users = {
    Alan: {
        age: 27,
        online: false
    },
    Jeff: {
        age: 32,
        online: true
    },
    Sarah: {
        age: 48,
        online: false
    },
    Ryan: {
        age: 19,
        online: true
    }
};

function countOnline(obj) {
    let online = 0;
    for(let user in obj){
        if(obj[user].online == true) {
        online += 1;
        }
    }
    return online;
}

console.log(countOnline(users));
        </textarea>`;
        javascriptBasicDataStructureIncorrectValue.innerHTML = "Incorrect..";
        javascriptBasicDataStructureNextButton.innerHTML = `<button class="nextButton javascriptColor1" onclick=javascriptBasicDataStructureBtn()>Next</button>`;
        javascriptBasicDataStructureRemoveValue.innerHTML = "";



    } else if (javascriptBasicDataStructureRandomValue == 18 && javascriptBasicDataStructureInputAnswer == __WEBPACK_IMPORTED_MODULE_10__questionsAndAnswers_javascriptBasicDataStructureAnswers__["a" /* javascriptBasicDataStructureAnswerArr */][18].A18) {
        javascriptBasicDataStructureCorrectValue.innerHTML = "Correct..";
        javascriptBasicDataStructureDisplayAnswer.innerHTML = `
        <textarea name="text" class="answer_textarea" id="input">Good Job :) </textarea>`;
        javascriptBasicDataStructureNextButton.innerHTML = `<button class="nextButton javascriptColor1" onclick=javascriptBasicDataStructureBtn()>Next</button>`;
        javascriptBasicDataStructureRemoveValue.innerHTML = "";

    } else if (javascriptBasicDataStructureRandomValue == 18 && javascriptBasicDataStructureInputAnswer !== __WEBPACK_IMPORTED_MODULE_10__questionsAndAnswers_javascriptBasicDataStructureAnswers__["a" /* javascriptBasicDataStructureAnswerArr */][18].A18) {
        javascriptBasicDataStructureDisplayAnswer.innerHTML = `
    <textarea name="text" class="answer_textarea" id="input">
let users = {
    Alan: {
        age: 27,
        online: false
    },
    Jeff: {
        age: 32,
        online: true
    },
    Sarah: {
        age: 48,
        online: false
    },
    Ryan: {
        age: 19,
        online: true
    }
};

function getArrayOfUsers(obj) {
    return Object.keys(users);
}

console.log(getArrayOfUsers(users));
        </textarea>`;
        javascriptBasicDataStructureIncorrectValue.innerHTML = "Incorrect..";
        javascriptBasicDataStructureNextButton.innerHTML = `<button class="nextButton javascriptColor1" onclick=javascriptBasicDataStructureBtn()>Next</button>`;
        javascriptBasicDataStructureRemoveValue.innerHTML = "";



    } else if (javascriptBasicDataStructureRandomValue == 19 && javascriptBasicDataStructureInputAnswer == __WEBPACK_IMPORTED_MODULE_10__questionsAndAnswers_javascriptBasicDataStructureAnswers__["a" /* javascriptBasicDataStructureAnswerArr */][19].A19) {
        javascriptBasicDataStructureCorrectValue.innerHTML = "Correct..";
        javascriptBasicDataStructureDisplayAnswer.innerHTML = `
        <textarea name="text" class="answer_textarea" id="input">Good Job :) </textarea>`;
        javascriptBasicDataStructureNextButton.innerHTML = `<button class="nextButton javascriptColor1" onclick=javascriptBasicDataStructureBtn()>Next</button>`;
        javascriptBasicDataStructureRemoveValue.innerHTML = "";

    } else if (javascriptBasicDataStructureRandomValue == 19 && javascriptBasicDataStructureInputAnswer !== __WEBPACK_IMPORTED_MODULE_10__questionsAndAnswers_javascriptBasicDataStructureAnswers__["a" /* javascriptBasicDataStructureAnswerArr */][19].A19) {
        javascriptBasicDataStructureDisplayAnswer.innerHTML = `
    <textarea name="text" class="answer_textarea" id="input">
let user = {
    name: 'Kenneth',
    age: 28,
    data: {
        username: 'kennethCodesAllDay',
        joinDate: 'March 26, 2016',
        organization: 'freeCodeCamp',
        friends: [
        'Sam',
        'Kira',
        'Tomo'
        ],
        location: {
        city: 'San Francisco',
        state: 'CA',
        country: 'USA'
        }
    }
};

function addFriend(userObj, friend) { 
    userObj.data.friends.push(friend);
    return userObj.data.friends;
}

console.log(addFriend(user, 'Pete'));
          </textarea>`;
        javascriptBasicDataStructureIncorrectValue.innerHTML = "Incorrect..";
        javascriptBasicDataStructureNextButton.innerHTML = `<button class="nextButton javascriptColor1" onclick=javascriptBasicDataStructureBtn()>Next</button>`;
        javascriptBasicDataStructureRemoveValue.innerHTML = "";



    } else {
        javascriptBasicDataStructureIncorrectValue.innerHTML = "Incorrect..";
        javascriptBasicDataStructureNextButton.innerHTML = `<button class="nextButton javascriptColor1" onclick=javascriptBasicDataStructureBtn()>Next</button>`;
        javascriptBasicDataStructureRemoveValue.innerHTML = "";
    }

}
window.javascriptBasicDataStructureSubmit = javascriptBasicDataStructureSubmit; /* to make submit global*/

function javascriptBasicDataStructureButton() {
    javascriptBasicDataStructureTest = document.getElementById("javascriptBasicDataStructureAddedQuestion").innerHTML = __WEBPACK_IMPORTED_MODULE_11__questionsAndAnswers_javascriptBasicDataStructureQuestions__["a" /* javascriptBasicDataStructureQuestionArr */][javascriptBasicDataStructureRandomValue]; /* giving random question to html */

    return javascriptBasicDataStructureTest;
}
window.javascriptBasicDataStructureButton = javascriptBasicDataStructureButton;

function javascriptBasicDataStructureShowTest() {
    var javascriptBasicDataStructureInputBox = document.getElementById("javascriptBasicDataStructureRemove").style.display = "block";
    return javascriptBasicDataStructureInputBox;
}
window.javascriptBasicDataStructureShowTest = javascriptBasicDataStructureShowTest;

function javascriptBasicDataStructureBtn() {
    javascriptBasicDataStructureRandomValue = Math.floor(Math.random() * __WEBPACK_IMPORTED_MODULE_11__questionsAndAnswers_javascriptBasicDataStructureQuestions__["a" /* javascriptBasicDataStructureQuestionArr */].length); /* buton next in html to make a next random question*/
    document.getElementById("javascriptBasicDataStructureAddedQuestion").innerHTML = __WEBPACK_IMPORTED_MODULE_11__questionsAndAnswers_javascriptBasicDataStructureQuestions__["a" /* javascriptBasicDataStructureQuestionArr */][javascriptBasicDataStructureRandomValue]; /* giving random question to html */
    document.getElementById("javascriptBasicDataStructureElementButton").innerHTML = "";/* to clean javascriptBasicDataStructureElementButton*/
    document.getElementById("javascriptBasicDataStructureRemove").innerHTML = `<textarea name="text" class="answer_textarea" id="input"></textarea></br>
      <button class="answer_submit javascriptColor1" id = "javascriptBasicDataStructureStartButton" onclick="javascriptBasicDataStructureSubmit()">Submit</button>`;/* to create next text area and Submit button. */
    document.getElementById("javascriptBasicDataStructureCheckingAnswer").innerHTML = "";
    document.getElementById("javascriptBasicDataStructureShowingAnswer").innerHTML = "";
}
window.javascriptBasicDataStructureBtn = javascriptBasicDataStructureBtn;/* to make submit global*/




























































var javascriptBasicAlgorithmRandomValue = Math.floor(Math.random() * __WEBPACK_IMPORTED_MODULE_13__questionsAndAnswers_javascriptBasicAlgorithmQuestions__["a" /* javascriptBasicAlgorithmQuestionArr */].length); /* taking random question from htmlQuestionArr*/


function javascriptBasicAlgorithmSubmit() { /* function for html submit button*/

    var javascriptBasicAlgorithmInputAnswer = input.value.replace(/\s+/g, ``); /*replace(/\s+/g, `` is removing all spaces. Avoid checking all the spaces to compare text*/
    var javascriptBasicAlgorithmCorrectValue = document.getElementById("javascriptBasicAlgorithmCheckingAnswer"); /* making getElementById code shorter*/
    var javascriptBasicAlgorithmIncorrectValue = document.getElementById("javascriptBasicAlgorithmCheckingAnswer");
    var javascriptBasicAlgorithmDisplayAnswer = document.getElementById("javascriptBasicAlgorithmShowingAnswer");
    var javascriptBasicAlgorithmNextButton = document.getElementById("javascriptBasicAlgorithmElementButton");
    var javascriptBasicAlgorithmRemoveValue = document.getElementById("javascriptBasicAlgorithmRemove");

    if (javascriptBasicAlgorithmRandomValue == 0 && javascriptBasicAlgorithmInputAnswer == __WEBPACK_IMPORTED_MODULE_12__questionsAndAnswers_javascriptBasicAlgorithmAnswers__["a" /* javascriptBasicAlgorithmAnswerArr */][0].A0) { /* checking if javascriptBasicAlgorithmRandomValue is 0 and if putting answer the same as javascriptBasicAlgorithmAnswerArr*//*A0 is just that I can track answer numbers when adding questions and answers*/
        javascriptBasicAlgorithmCorrectValue.innerHTML = "Correct..";
        javascriptBasicAlgorithmDisplayAnswer.innerHTML = `
        <textarea name="text" class="answer_textarea" id="input">Good Job :) </textarea>`;
        javascriptBasicAlgorithmNextButton.innerHTML = `<button class="nextButton javascriptColor1" onclick=javascriptBasicAlgorithmBtn()>Next</button>`; /* creating next button with javascriptBasicAlgorithmBtn()function*/
        javascriptBasicAlgorithmRemoveValue.innerHTML = "";/* removing in html answer*/



    } else if (javascriptBasicAlgorithmRandomValue == 0 && javascriptBasicAlgorithmInputAnswer !== __WEBPACK_IMPORTED_MODULE_12__questionsAndAnswers_javascriptBasicAlgorithmAnswers__["a" /* javascriptBasicAlgorithmAnswerArr */][0].A0) {/*  if random value not == then giving then display the answere.*/
        javascriptBasicAlgorithmDisplayAnswer.innerHTML = `
    <textarea name="text" class="answer_textarea" id="input">
function convertToF(celsius) {
    var fahrenheit = (celsius * (9/5)) + 32;

    if ( typeof fahrenheit !== 'undefined' ) {
    return fahrenheit;
    } else {
        return 'fahrenheit not defined';
    }
}
convertToF(30);
        </textarea>`;
        javascriptBasicAlgorithmIncorrectValue.innerHTML = "Incorrect..";
        javascriptBasicAlgorithmNextButton.innerHTML = `<button class="nextButton javascriptColor1" onclick=javascriptBasicAlgorithmBtn()>Next</button>`;
        javascriptBasicAlgorithmRemoveValue.innerHTML = "";



    } else if (javascriptBasicAlgorithmRandomValue == 1 && javascriptBasicAlgorithmInputAnswer == __WEBPACK_IMPORTED_MODULE_12__questionsAndAnswers_javascriptBasicAlgorithmAnswers__["a" /* javascriptBasicAlgorithmAnswerArr */][1].A1) {
        javascriptBasicAlgorithmCorrectValue.innerHTML = "Correct..";
        javascriptBasicAlgorithmDisplayAnswer.innerHTML = `
        <textarea name="text" class="answer_textarea" id="input">Good Job :) </textarea>`;
        javascriptBasicAlgorithmNextButton.innerHTML = `<button class="nextButton javascriptColor1" onclick=javascriptBasicAlgorithmBtn()>Next</button>`;
        javascriptBasicAlgorithmRemoveValue.innerHTML = "";

    } else if (javascriptBasicAlgorithmRandomValue == 1 && javascriptBasicAlgorithmInputAnswer !== __WEBPACK_IMPORTED_MODULE_12__questionsAndAnswers_javascriptBasicAlgorithmAnswers__["a" /* javascriptBasicAlgorithmAnswerArr */][1].A1) {
        javascriptBasicAlgorithmDisplayAnswer.innerHTML = `
        <textarea name="text" class="answer_textarea" id="input">
function reverseString(str) {
    return str.split('').reverse().join('');
}

reverseString("hello");
          </textarea>`;
        javascriptBasicAlgorithmIncorrectValue.innerHTML = "Incorrect..";
        javascriptBasicAlgorithmNextButton.innerHTML = `<button class="nextButton javascriptColor1" onclick=javascriptBasicAlgorithmBtn()>Next</button>`;
        javascriptBasicAlgorithmRemoveValue.innerHTML = "";



    } else if (javascriptBasicAlgorithmRandomValue == 2 && javascriptBasicAlgorithmInputAnswer == __WEBPACK_IMPORTED_MODULE_12__questionsAndAnswers_javascriptBasicAlgorithmAnswers__["a" /* javascriptBasicAlgorithmAnswerArr */][2].A2) {
        javascriptBasicAlgorithmCorrectValue.innerHTML = "Correct..";
        javascriptBasicAlgorithmDisplayAnswer.innerHTML = `
        <textarea name="text" class="answer_textarea" id="input">Good Job :) </textarea>`;
        javascriptBasicAlgorithmNextButton.innerHTML = `<button class="nextButton javascriptColor1" onclick=javascriptBasicAlgorithmBtn()>Next</button>`;
        javascriptBasicAlgorithmRemoveValue.innerHTML = "";

    } else if (javascriptBasicAlgorithmRandomValue == 2 && javascriptBasicAlgorithmInputAnswer !== __WEBPACK_IMPORTED_MODULE_12__questionsAndAnswers_javascriptBasicAlgorithmAnswers__["a" /* javascriptBasicAlgorithmAnswerArr */][2].A2) {
        javascriptBasicAlgorithmDisplayAnswer.innerHTML = `
    <textarea name="text" class="answer_textarea" id="input">
function factorialize(num) {
    if (num === 0) { return 1; }
    return num * factorialize(num-1);
}

factorialize(5);
          </textarea>`;
        javascriptBasicAlgorithmIncorrectValue.innerHTML = "Incorrect..";
        javascriptBasicAlgorithmNextButton.innerHTML = `<button class="nextButton javascriptColor1" onclick=javascriptBasicAlgorithmBtn()>Next</button>`;
        javascriptBasicAlgorithmRemoveValue.innerHTML = "";



    } else if (javascriptBasicAlgorithmRandomValue == 3 && javascriptBasicAlgorithmInputAnswer == __WEBPACK_IMPORTED_MODULE_12__questionsAndAnswers_javascriptBasicAlgorithmAnswers__["a" /* javascriptBasicAlgorithmAnswerArr */][3].A3) {
        javascriptBasicAlgorithmCorrectValue.innerHTML = "Correct..";
        javascriptBasicAlgorithmDisplayAnswer.innerHTML = `
        <textarea name="text" class="answer_textarea" id="input">Good Job :) </textarea>`;
        javascriptBasicAlgorithmNextButton.innerHTML = `<button class="nextButton javascriptColor1" onclick=javascriptBasicAlgorithmBtn()>Next</button>`;
        javascriptBasicAlgorithmRemoveValue.innerHTML = "";

    } else if (javascriptBasicAlgorithmRandomValue == 3 && javascriptBasicAlgorithmInputAnswer !== __WEBPACK_IMPORTED_MODULE_12__questionsAndAnswers_javascriptBasicAlgorithmAnswers__["a" /* javascriptBasicAlgorithmAnswerArr */][3].A3) {
        javascriptBasicAlgorithmDisplayAnswer.innerHTML = `
    <textarea name="text" class="answer_textarea" id="input">
function findLongestWordLength(str) {

    str = str.split(" ");

    if(str.length == 1){
        return str[0].length;
    }

    if(str[0].length >= str[1].length){
        str.splice(1,1);
        return findLongestWordLength(str.join(" "));
    }

    if(str[0].length <= str[1].length){
        
        return findLongestWordLength(str.slice(1,str.length).join(" "));
    }
}

findLongestWordLength("The quick brown fox jumped over the lazy dog");
        </textarea>`;
        javascriptBasicAlgorithmIncorrectValue.innerHTML = "Incorrect..";
        javascriptBasicAlgorithmNextButton.innerHTML = `<button class="nextButton javascriptColor1" onclick=javascriptBasicAlgorithmBtn()>Next</button>`;
        javascriptBasicAlgorithmRemoveValue.innerHTML = "";
        


    } else if (javascriptBasicAlgorithmRandomValue == 4 && javascriptBasicAlgorithmInputAnswer == __WEBPACK_IMPORTED_MODULE_12__questionsAndAnswers_javascriptBasicAlgorithmAnswers__["a" /* javascriptBasicAlgorithmAnswerArr */][4].A4) {
        javascriptBasicAlgorithmCorrectValue.innerHTML = "Correct..";
        javascriptBasicAlgorithmDisplayAnswer.innerHTML = `
        <textarea name="text" class="answer_textarea" id="input">Good Job :) </textarea>`;
        javascriptBasicAlgorithmNextButton.innerHTML = `<button class="nextButton javascriptColor1" onclick=javascriptBasicAlgorithmBtn()>Next</button>`;
        javascriptBasicAlgorithmRemoveValue.innerHTML = "";

    } else if (javascriptBasicAlgorithmRandomValue == 4 && javascriptBasicAlgorithmInputAnswer !== __WEBPACK_IMPORTED_MODULE_12__questionsAndAnswers_javascriptBasicAlgorithmAnswers__["a" /* javascriptBasicAlgorithmAnswerArr */][4].A4) {
        javascriptBasicAlgorithmDisplayAnswer.innerHTML = `
    <textarea name="text" class="answer_textarea" id="input">
function findLongestWordLength(s) {
    return s.split(' ')
        .reduce(function(x, y) {
            return Math.max(x, y.length)
        }, 0);
}

findLongestWordLength("The quick brown fox jumped over the lazy dog");
        </textarea>`;
        javascriptBasicAlgorithmIncorrectValue.innerHTML = "Incorrect..";
        javascriptBasicAlgorithmNextButton.innerHTML = `<button class="nextButton javascriptColor1" onclick=javascriptBasicAlgorithmBtn()>Next</button>`;
        javascriptBasicAlgorithmRemoveValue.innerHTML = "";



    } else if (javascriptBasicAlgorithmRandomValue == 5 && javascriptBasicAlgorithmInputAnswer == __WEBPACK_IMPORTED_MODULE_12__questionsAndAnswers_javascriptBasicAlgorithmAnswers__["a" /* javascriptBasicAlgorithmAnswerArr */][5].A5) {
        javascriptBasicAlgorithmCorrectValue.innerHTML = "Correct..";
        javascriptBasicAlgorithmDisplayAnswer.innerHTML = `
        <textarea name="text" class="answer_textarea" id="input">Good Job :) </textarea>`;
        javascriptBasicAlgorithmNextButton.innerHTML = `<button class="nextButton javascriptColor1" onclick=javascriptBasicAlgorithmBtn()>Next</button>`;
        javascriptBasicAlgorithmRemoveValue.innerHTML = "";

    } else if (javascriptBasicAlgorithmRandomValue == 5 && javascriptBasicAlgorithmInputAnswer !== __WEBPACK_IMPORTED_MODULE_12__questionsAndAnswers_javascriptBasicAlgorithmAnswers__["a" /* javascriptBasicAlgorithmAnswerArr */][5].A5) {
        javascriptBasicAlgorithmDisplayAnswer.innerHTML = `
    <textarea name="text" class="answer_textarea" id="input">
function findLongestWordLength(str) {
    var words = str.split(' ');
    var maxLength = 0;
    
    for (var i = 0; i < words.length; i++) {
        if (words[i].length > maxLength) {
        maxLength = words[i].length;
        }
    }
    
    return maxLength;
}

findLongestWordLength("The quick brown fox jumped over the lazy dog");
        </textarea>`;
        javascriptBasicAlgorithmIncorrectValue.innerHTML = "Incorrect..";
        javascriptBasicAlgorithmNextButton.innerHTML = `<button class="nextButton javascriptColor1" onclick=javascriptBasicAlgorithmBtn()>Next</button>`;
        javascriptBasicAlgorithmRemoveValue.innerHTML = "";



    } else if (javascriptBasicAlgorithmRandomValue == 6 && javascriptBasicAlgorithmInputAnswer == __WEBPACK_IMPORTED_MODULE_12__questionsAndAnswers_javascriptBasicAlgorithmAnswers__["a" /* javascriptBasicAlgorithmAnswerArr */][6].A6) {
        javascriptBasicAlgorithmCorrectValue.innerHTML = "Correct..";
        javascriptBasicAlgorithmDisplayAnswer.innerHTML = `
        <textarea name="text" class="answer_textarea" id="input">Good Job :) </textarea>`;
        javascriptBasicAlgorithmNextButton.innerHTML = `<button class="nextButton javascriptColor1" onclick=javascriptBasicAlgorithmBtn()>Next</button>`;
        javascriptBasicAlgorithmRemoveValue.innerHTML = "";

    } else if (javascriptBasicAlgorithmRandomValue == 6 && javascriptBasicAlgorithmInputAnswer !== __WEBPACK_IMPORTED_MODULE_12__questionsAndAnswers_javascriptBasicAlgorithmAnswers__["a" /* javascriptBasicAlgorithmAnswerArr */][6].A6) {
        javascriptBasicAlgorithmDisplayAnswer.innerHTML = `
    <textarea name="text" class="answer_textarea" id="input">
function largestOfFour(arr) {
    return arr.map(Function.apply.bind(Math.max, null));
}

largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);
        </textarea>`;
        javascriptBasicAlgorithmIncorrectValue.innerHTML = "Incorrect..";
        javascriptBasicAlgorithmNextButton.innerHTML = `<button class="nextButton javascriptColor1" onclick=javascriptBasicAlgorithmBtn()>Next</button>`;
        javascriptBasicAlgorithmRemoveValue.innerHTML = "";



    } else if (javascriptBasicAlgorithmRandomValue == 7 && javascriptBasicAlgorithmInputAnswer == __WEBPACK_IMPORTED_MODULE_12__questionsAndAnswers_javascriptBasicAlgorithmAnswers__["a" /* javascriptBasicAlgorithmAnswerArr */][7].A7) {
        javascriptBasicAlgorithmCorrectValue.innerHTML = "Correct..";
        javascriptBasicAlgorithmDisplayAnswer.innerHTML = `
        <textarea name="text" class="answer_textarea" id="input">Good Job :) </textarea>`;
        javascriptBasicAlgorithmNextButton.innerHTML = `<button class="nextButton javascriptColor1" onclick=javascriptBasicAlgorithmBtn()>Next</button>`;
        javascriptBasicAlgorithmRemoveValue.innerHTML = "";

    } else if (javascriptBasicAlgorithmRandomValue == 7 && javascriptBasicAlgorithmInputAnswer !== __WEBPACK_IMPORTED_MODULE_12__questionsAndAnswers_javascriptBasicAlgorithmAnswers__["a" /* javascriptBasicAlgorithmAnswerArr */][7].A7) {
        javascriptBasicAlgorithmDisplayAnswer.innerHTML = `
    <textarea name="text" class="answer_textarea" id="input">
function largestOfFour(arr) {
    return arr.map(function(group){
        return group.reduce(function(prev, current) {
        return (current > prev) ? current : prev;
        });
    });
}

largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);

        </textarea>`;
        javascriptBasicAlgorithmIncorrectValue.innerHTML = "Incorrect..";
        javascriptBasicAlgorithmNextButton.innerHTML = `<button class="nextButton javascriptColor1" onclick=javascriptBasicAlgorithmBtn()>Next</button>`;
        javascriptBasicAlgorithmRemoveValue.innerHTML = "";



    } else if (javascriptBasicAlgorithmRandomValue == 8 && javascriptBasicAlgorithmInputAnswer == __WEBPACK_IMPORTED_MODULE_12__questionsAndAnswers_javascriptBasicAlgorithmAnswers__["a" /* javascriptBasicAlgorithmAnswerArr */][8].A8) {
        javascriptBasicAlgorithmCorrectValue.innerHTML = "Correct..";
        javascriptBasicAlgorithmDisplayAnswer.innerHTML = `
        <textarea name="text" class="answer_textarea" id="input">Good Job :) </textarea>`;
        javascriptBasicAlgorithmNextButton.innerHTML = `<button class="nextButton javascriptColor1" onclick=javascriptBasicAlgorithmBtn()>Next</button>`;
        javascriptBasicAlgorithmRemoveValue.innerHTML = "";

    } else if (javascriptBasicAlgorithmRandomValue == 8 && javascriptBasicAlgorithmInputAnswer !== __WEBPACK_IMPORTED_MODULE_12__questionsAndAnswers_javascriptBasicAlgorithmAnswers__["a" /* javascriptBasicAlgorithmAnswerArr */][8].A8) {
        javascriptBasicAlgorithmDisplayAnswer.innerHTML = `
    <textarea name="text" class="answer_textarea" id="input">
function largestOfFour(arr) {
    var results = [];
    for (var n = 0; n < arr.length; n++) {
        var largestNumber = arr[n][0];
        for (var sb = 1; sb < arr[n].length; sb++) {
            if (arr[n][sb] > largestNumber) {
                largestNumber = arr[n][sb];
            }
    }

    results[n] = largestNumber;
    }

    return results;
}

largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]); 
        </textarea>`;
        javascriptBasicAlgorithmIncorrectValue.innerHTML = "Incorrect..";
        javascriptBasicAlgorithmNextButton.innerHTML = `<button class="nextButton javascriptColor1" onclick=javascriptBasicAlgorithmBtn()>Next</button>`;
        javascriptBasicAlgorithmRemoveValue.innerHTML = "";



    } else if (javascriptBasicAlgorithmRandomValue == 9 && javascriptBasicAlgorithmInputAnswer == __WEBPACK_IMPORTED_MODULE_12__questionsAndAnswers_javascriptBasicAlgorithmAnswers__["a" /* javascriptBasicAlgorithmAnswerArr */][9].A9) {
        javascriptBasicAlgorithmCorrectValue.innerHTML = "Correct..";
        javascriptBasicAlgorithmDisplayAnswer.innerHTML = `
        <textarea name="text" class="answer_textarea" id="input">Good Job :) </textarea>`;
        javascriptBasicAlgorithmNextButton.innerHTML = `<button class="nextButton javascriptColor1" onclick=javascriptBasicAlgorithmBtn()>Next</button>`;
        javascriptBasicAlgorithmRemoveValue.innerHTML = "";

    } else if (javascriptBasicAlgorithmRandomValue == 9 && javascriptBasicAlgorithmInputAnswer !== __WEBPACK_IMPORTED_MODULE_12__questionsAndAnswers_javascriptBasicAlgorithmAnswers__["a" /* javascriptBasicAlgorithmAnswerArr */][9].A9) {
        javascriptBasicAlgorithmDisplayAnswer.innerHTML = `
    <textarea name="text" class="answer_textarea" id="input">
function confirmEnding(str, target) {
    return str.slice(str.length - target.length) === target;
}

confirmEnding("He has to give me a new name", "name");
        </textarea>`;
        javascriptBasicAlgorithmIncorrectValue.innerHTML = "Incorrect..";
        javascriptBasicAlgorithmNextButton.innerHTML = `<button class="nextButton javascriptColor1" onclick=javascriptBasicAlgorithmBtn()>Next</button>`;
        javascriptBasicAlgorithmRemoveValue.innerHTML = "";



    } else if (javascriptBasicAlgorithmRandomValue == 10 && javascriptBasicAlgorithmInputAnswer == __WEBPACK_IMPORTED_MODULE_12__questionsAndAnswers_javascriptBasicAlgorithmAnswers__["a" /* javascriptBasicAlgorithmAnswerArr */][10].A10) {
        javascriptBasicAlgorithmCorrectValue.innerHTML = "Correct..";
        javascriptBasicAlgorithmDisplayAnswer.innerHTML = `
        <textarea name="text" class="answer_textarea" id="input">Good Job :) </textarea>`;
        javascriptBasicAlgorithmNextButton.innerHTML = `<button class="nextButton javascriptColor1" onclick=javascriptBasicAlgorithmBtn()>Next</button>`;
        javascriptBasicAlgorithmRemoveValue.innerHTML = "";

    } else if (javascriptBasicAlgorithmRandomValue == 10 && javascriptBasicAlgorithmInputAnswer !== __WEBPACK_IMPORTED_MODULE_12__questionsAndAnswers_javascriptBasicAlgorithmAnswers__["a" /* javascriptBasicAlgorithmAnswerArr */][10].A10) {
        javascriptBasicAlgorithmDisplayAnswer.innerHTML = `
    <textarea name="text" class="answer_textarea" id="input">
function repeatStringNumTimes(str, num) {
    if(num < 0){
        return "";
    }
    if(num === 1){
        return str;
    }
    else{
        return str + repeatStringNumTimes(str, num - 1);
    }
}

repeatStringNumTimes("abc", 3);
        </textarea>`;
        javascriptBasicAlgorithmIncorrectValue.innerHTML = "Incorrect..";
        javascriptBasicAlgorithmNextButton.innerHTML = `<button class="nextButton javascriptColor1" onclick=javascriptBasicAlgorithmBtn()>Next</button>`;
        javascriptBasicAlgorithmRemoveValue.innerHTML = "";



    } else if (javascriptBasicAlgorithmRandomValue == 11 && javascriptBasicAlgorithmInputAnswer == __WEBPACK_IMPORTED_MODULE_12__questionsAndAnswers_javascriptBasicAlgorithmAnswers__["a" /* javascriptBasicAlgorithmAnswerArr */][11].A11) {
        javascriptBasicAlgorithmCorrectValue.innerHTML = "Correct..";
        javascriptBasicAlgorithmDisplayAnswer.innerHTML = `
        <textarea name="text" class="answer_textarea" id="input">Good Job :) </textarea>`;
        javascriptBasicAlgorithmNextButton.innerHTML = `<button class="nextButton javascriptColor1" onclick=javascriptBasicAlgorithmBtn()>Next</button>`;
        javascriptBasicAlgorithmRemoveValue.innerHTML = "";

    } else if (javascriptBasicAlgorithmRandomValue == 11 && javascriptBasicAlgorithmInputAnswer !== __WEBPACK_IMPORTED_MODULE_12__questionsAndAnswers_javascriptBasicAlgorithmAnswers__["a" /* javascriptBasicAlgorithmAnswerArr */][11].A11) {
        javascriptBasicAlgorithmDisplayAnswer.innerHTML = `
    <textarea name="text" class="answer_textarea" id="input">
function repeatStringNumTimes(str, num) {
    var accumulatedStr = '';

    while (num > 0) {
        accumulatedStr += str;
        num--;
    }

    return accumulatedStr;
}

repeatStringNumTimes("abc", 3);
        </textarea>`;
        javascriptBasicAlgorithmIncorrectValue.innerHTML = "Incorrect..";
        javascriptBasicAlgorithmNextButton.innerHTML = `<button class="nextButton javascriptColor1" onclick=javascriptBasicAlgorithmBtn()>Next</button>`;
        javascriptBasicAlgorithmRemoveValue.innerHTML = "";



    } else if (javascriptBasicAlgorithmRandomValue == 12 && javascriptBasicAlgorithmInputAnswer == __WEBPACK_IMPORTED_MODULE_12__questionsAndAnswers_javascriptBasicAlgorithmAnswers__["a" /* javascriptBasicAlgorithmAnswerArr */][12].A12) {
        javascriptBasicAlgorithmCorrectValue.innerHTML = "Correct..";
        javascriptBasicAlgorithmDisplayAnswer.innerHTML = `
        <textarea name="text" class="answer_textarea" id="input">Good Job :) </textarea>`;
        javascriptBasicAlgorithmNextButton.innerHTML = `<button class="nextButton javascriptColor1" onclick=javascriptBasicAlgorithmBtn()>Next</button>`;
        javascriptBasicAlgorithmRemoveValue.innerHTML = "";

    } else if (javascriptBasicAlgorithmRandomValue == 12 && javascriptBasicAlgorithmInputAnswer !== __WEBPACK_IMPORTED_MODULE_12__questionsAndAnswers_javascriptBasicAlgorithmAnswers__["a" /* javascriptBasicAlgorithmAnswerArr */][12].A12) {
        javascriptBasicAlgorithmDisplayAnswer.innerHTML = `
    <textarea name="text" class="answer_textarea" id="input">
function truncateString(str, num) {
    if (str.length > num && num > 3) {
        return str.slice(0, (num)) + '...';
    } else if (str.length > num && num <= 3) {
        return str.slice(0, num) + '...';
    } else {
        return str;
    }
}

truncateString("A-tisket a-tasket A green and yellow basket", 8);
        </textarea>`;
        javascriptBasicAlgorithmIncorrectValue.innerHTML = "Incorrect..";
        javascriptBasicAlgorithmNextButton.innerHTML = `<button class="nextButton javascriptColor1" onclick=javascriptBasicAlgorithmBtn()>Next</button>`;
        javascriptBasicAlgorithmRemoveValue.innerHTML = "";



    } else if (javascriptBasicAlgorithmRandomValue == 13 && javascriptBasicAlgorithmInputAnswer == __WEBPACK_IMPORTED_MODULE_12__questionsAndAnswers_javascriptBasicAlgorithmAnswers__["a" /* javascriptBasicAlgorithmAnswerArr */][13].A13) {
        javascriptBasicAlgorithmCorrectValue.innerHTML = "Correct..";
        javascriptBasicAlgorithmDisplayAnswer.innerHTML = `
        <textarea name="text" class="answer_textarea" id="input">Good Job :) </textarea>`;
        javascriptBasicAlgorithmNextButton.innerHTML = `<button class="nextButton javascriptColor1" onclick=javascriptBasicAlgorithmBtn()>Next</button>`;
        javascriptBasicAlgorithmRemoveValue.innerHTML = "";

    } else if (javascriptBasicAlgorithmRandomValue == 13 && javascriptBasicAlgorithmInputAnswer !== __WEBPACK_IMPORTED_MODULE_12__questionsAndAnswers_javascriptBasicAlgorithmAnswers__["a" /* javascriptBasicAlgorithmAnswerArr */][13].A13) {
        javascriptBasicAlgorithmDisplayAnswer.innerHTML = `
    <textarea name="text" class="answer_textarea" id="input">
function findElement(arr, func) {
    let num = 0;

    for(var i = 0; i < arr.length; i++) {
        num = arr[i];
        if (func(num)) {
        return num;
        }
    }

    return undefined;
}

findElement([1, 2, 3, 4], num => num % 2 === 0);
        </textarea>`;
        javascriptBasicAlgorithmIncorrectValue.innerHTML = "Incorrect..";
        javascriptBasicAlgorithmNextButton.innerHTML = `<button class="nextButton javascriptColor1" onclick=javascriptBasicAlgorithmBtn()>Next</button>`;
        javascriptBasicAlgorithmRemoveValue.innerHTML = "";



    } else if (javascriptBasicAlgorithmRandomValue == 14 && javascriptBasicAlgorithmInputAnswer == __WEBPACK_IMPORTED_MODULE_12__questionsAndAnswers_javascriptBasicAlgorithmAnswers__["a" /* javascriptBasicAlgorithmAnswerArr */][14].A14) {
        javascriptBasicAlgorithmCorrectValue.innerHTML = "Correct..";
        javascriptBasicAlgorithmDisplayAnswer.innerHTML = `
        <textarea name="text" class="answer_textarea" id="input">Good Job :) </textarea>`;
        javascriptBasicAlgorithmNextButton.innerHTML = `<button class="nextButton javascriptColor1" onclick=javascriptBasicAlgorithmBtn()>Next</button>`;
        javascriptBasicAlgorithmRemoveValue.innerHTML = "";

    } else if (javascriptBasicAlgorithmRandomValue == 14 && javascriptBasicAlgorithmInputAnswer !== __WEBPACK_IMPORTED_MODULE_12__questionsAndAnswers_javascriptBasicAlgorithmAnswers__["a" /* javascriptBasicAlgorithmAnswerArr */][14].A14) {
        javascriptBasicAlgorithmDisplayAnswer.innerHTML = `
    <textarea name="text" class="answer_textarea" id="input">
function booWho(bool) {
    return typeof bool === 'boolean';
}
booWho(null);
        </textarea>`;
        javascriptBasicAlgorithmIncorrectValue.innerHTML = "Incorrect..";
        javascriptBasicAlgorithmNextButton.innerHTML = `<button class="nextButton javascriptColor1" onclick=javascriptBasicAlgorithmBtn()>Next</button>`;
        javascriptBasicAlgorithmRemoveValue.innerHTML = "";



    } else if (javascriptBasicAlgorithmRandomValue == 15 && javascriptBasicAlgorithmInputAnswer == __WEBPACK_IMPORTED_MODULE_12__questionsAndAnswers_javascriptBasicAlgorithmAnswers__["a" /* javascriptBasicAlgorithmAnswerArr */][15].A15) {
        javascriptBasicAlgorithmCorrectValue.innerHTML = "Correct..";
        javascriptBasicAlgorithmDisplayAnswer.innerHTML = `
        <textarea name="text" class="answer_textarea" id="input">Good Job :) </textarea>`;
        javascriptBasicAlgorithmNextButton.innerHTML = `<button class="nextButton javascriptColor1" onclick=javascriptBasicAlgorithmBtn()>Next</button>`;
        javascriptBasicAlgorithmRemoveValue.innerHTML = "";

    } else if (javascriptBasicAlgorithmRandomValue == 15 && javascriptBasicAlgorithmInputAnswer !== __WEBPACK_IMPORTED_MODULE_12__questionsAndAnswers_javascriptBasicAlgorithmAnswers__["a" /* javascriptBasicAlgorithmAnswerArr */][15].A15) {
        javascriptBasicAlgorithmDisplayAnswer.innerHTML = `
    <textarea name="text" class="answer_textarea" id="input">
function titleCase(str) {
    return str.toLowerCase().replace(/(^|\s)\S/g, (L) => L.toUpperCase());
}

titleCase("I'm a little tea pot");
        </textarea>`;
        javascriptBasicAlgorithmIncorrectValue.innerHTML = "Incorrect..";
        javascriptBasicAlgorithmNextButton.innerHTML = `<button class="nextButton javascriptColor1" onclick=javascriptBasicAlgorithmBtn()>Next</button>`;
        javascriptBasicAlgorithmRemoveValue.innerHTML = "";



    } else if (javascriptBasicAlgorithmRandomValue == 16 && javascriptBasicAlgorithmInputAnswer == __WEBPACK_IMPORTED_MODULE_12__questionsAndAnswers_javascriptBasicAlgorithmAnswers__["a" /* javascriptBasicAlgorithmAnswerArr */][16].A16) {
        javascriptBasicAlgorithmCorrectValue.innerHTML = "Correct..";
        javascriptBasicAlgorithmDisplayAnswer.innerHTML = `
        <textarea name="text" class="answer_textarea" id="input">Good Job :) </textarea>`;
        javascriptBasicAlgorithmNextButton.innerHTML = `<button class="nextButton javascriptColor1" onclick=javascriptBasicAlgorithmBtn()>Next</button>`;
        javascriptBasicAlgorithmRemoveValue.innerHTML = "";

    } else if (javascriptBasicAlgorithmRandomValue == 16 && javascriptBasicAlgorithmInputAnswer !== __WEBPACK_IMPORTED_MODULE_12__questionsAndAnswers_javascriptBasicAlgorithmAnswers__["a" /* javascriptBasicAlgorithmAnswerArr */][16].A16) {
        javascriptBasicAlgorithmDisplayAnswer.innerHTML = `
    <textarea name="text" class="answer_textarea" id="input">
function titleCase(str) {
    var convertToArray = str.toLowerCase().split(" ");
    var result = convertToArray.map(function(val){
        return val.replace(val.charAt(0), val.charAt(0).toUpperCase());
    });
    return result.join(" ");
}

titleCase("I'm a little tea pot");
        </textarea>`;
        javascriptBasicAlgorithmIncorrectValue.innerHTML = "Incorrect..";
        javascriptBasicAlgorithmNextButton.innerHTML = `<button class="nextButton javascriptColor1" onclick=javascriptBasicAlgorithmBtn()>Next</button>`;
        javascriptBasicAlgorithmRemoveValue.innerHTML = "";



    } else if (javascriptBasicAlgorithmRandomValue == 17 && javascriptBasicAlgorithmInputAnswer == __WEBPACK_IMPORTED_MODULE_12__questionsAndAnswers_javascriptBasicAlgorithmAnswers__["a" /* javascriptBasicAlgorithmAnswerArr */][17].A17) {
        javascriptBasicAlgorithmCorrectValue.innerHTML = "Correct..";
        javascriptBasicAlgorithmDisplayAnswer.innerHTML = `
        <textarea name="text" class="answer_textarea" id="input">Good Job :) </textarea>`;
        javascriptBasicAlgorithmNextButton.innerHTML = `<button class="nextButton javascriptColor1" onclick=javascriptBasicAlgorithmBtn()>Next</button>`;
        javascriptBasicAlgorithmRemoveValue.innerHTML = "";

    } else if (javascriptBasicAlgorithmRandomValue == 17 && javascriptBasicAlgorithmInputAnswer !== __WEBPACK_IMPORTED_MODULE_12__questionsAndAnswers_javascriptBasicAlgorithmAnswers__["a" /* javascriptBasicAlgorithmAnswerArr */][17].A17) {
        javascriptBasicAlgorithmDisplayAnswer.innerHTML = `
    <textarea name="text" class="answer_textarea" id="input">
String.prototype.replaceAt = function(index, character) {
    return this.substr(0, index) + character + this.substr(index+character.length);
};

function titleCase(str) {
    var newTitle = str.split(' ');
    var updatedTitle = [];
    for (var st in newTitle) {
        updatedTitle[st] = newTitle[st].toLowerCase().replaceAt(0, newTitle[st].charAt(0).toUpperCase());
    }
    return updatedTitle.join(' ');
}
titleCase("I'm a little tea pot");
        </textarea>`;
        javascriptBasicAlgorithmIncorrectValue.innerHTML = "Incorrect..";
        javascriptBasicAlgorithmNextButton.innerHTML = `<button class="nextButton javascriptColor1" onclick=javascriptBasicAlgorithmBtn()>Next</button>`;
        javascriptBasicAlgorithmRemoveValue.innerHTML = "";



    } else if (javascriptBasicAlgorithmRandomValue == 18 && javascriptBasicAlgorithmInputAnswer == __WEBPACK_IMPORTED_MODULE_12__questionsAndAnswers_javascriptBasicAlgorithmAnswers__["a" /* javascriptBasicAlgorithmAnswerArr */][18].A18) {
        javascriptBasicAlgorithmCorrectValue.innerHTML = "Correct..";
        javascriptBasicAlgorithmDisplayAnswer.innerHTML = `
        <textarea name="text" class="answer_textarea" id="input">Good Job :) </textarea>`;
        javascriptBasicAlgorithmNextButton.innerHTML = `<button class="nextButton javascriptColor1" onclick=javascriptBasicAlgorithmBtn()>Next</button>`;
        javascriptBasicAlgorithmRemoveValue.innerHTML = "";

    } else if (javascriptBasicAlgorithmRandomValue == 18 && javascriptBasicAlgorithmInputAnswer !== __WEBPACK_IMPORTED_MODULE_12__questionsAndAnswers_javascriptBasicAlgorithmAnswers__["a" /* javascriptBasicAlgorithmAnswerArr */][18].A18) {
        javascriptBasicAlgorithmDisplayAnswer.innerHTML = `
    <textarea name="text" class="answer_textarea" id="input">
function frankenSplice(arr1, arr2, n) {
    let localArray = arr2.slice();
    for (let i = 0; i < arr1.length; i++) {
        localArray.splice(n, 0, arr1[i]);
        n++;
    }
    return localArray;
}

frankenSplice([1, 2, 3], [4, 5, 6], 1);
        </textarea>`;
        javascriptBasicAlgorithmIncorrectValue.innerHTML = "Incorrect..";
        javascriptBasicAlgorithmNextButton.innerHTML = `<button class="nextButton javascriptColor1" onclick=javascriptBasicAlgorithmBtn()>Next</button>`;
        javascriptBasicAlgorithmRemoveValue.innerHTML = "";



    } else if (javascriptBasicAlgorithmRandomValue == 19 && javascriptBasicAlgorithmInputAnswer == __WEBPACK_IMPORTED_MODULE_12__questionsAndAnswers_javascriptBasicAlgorithmAnswers__["a" /* javascriptBasicAlgorithmAnswerArr */][19].A19) {
        javascriptBasicAlgorithmCorrectValue.innerHTML = "Correct..";
        javascriptBasicAlgorithmDisplayAnswer.innerHTML = `
        <textarea name="text" class="answer_textarea" id="input">Good Job :) </textarea>`;
        javascriptBasicAlgorithmNextButton.innerHTML = `<button class="nextButton javascriptColor1" onclick=javascriptBasicAlgorithmBtn()>Next</button>`;
        javascriptBasicAlgorithmRemoveValue.innerHTML = "";

    } else if (javascriptBasicAlgorithmRandomValue == 19 && javascriptBasicAlgorithmInputAnswer !== __WEBPACK_IMPORTED_MODULE_12__questionsAndAnswers_javascriptBasicAlgorithmAnswers__["a" /* javascriptBasicAlgorithmAnswerArr */][19].A19) {
        javascriptBasicAlgorithmDisplayAnswer.innerHTML = `
    <textarea name="text" class="answer_textarea" id="input">
function bouncer(arr) {
    return arr.filter(Boolean);
}

bouncer([7, "ate", "", false, 9]);
          </textarea>`;
        javascriptBasicAlgorithmIncorrectValue.innerHTML = "Incorrect..";
        javascriptBasicAlgorithmNextButton.innerHTML = `<button class="nextButton javascriptColor1" onclick=javascriptBasicAlgorithmBtn()>Next</button>`;
        javascriptBasicAlgorithmRemoveValue.innerHTML = "";



    }else if (javascriptBasicAlgorithmRandomValue == 20 && javascriptBasicAlgorithmInputAnswer == __WEBPACK_IMPORTED_MODULE_12__questionsAndAnswers_javascriptBasicAlgorithmAnswers__["a" /* javascriptBasicAlgorithmAnswerArr */][20].A20) {
        javascriptBasicAlgorithmCorrectValue.innerHTML = "Correct..";
        javascriptBasicAlgorithmDisplayAnswer.innerHTML = `
        <textarea name="text" class="answer_textarea" id="input">Good Job :) </textarea>`;
        javascriptBasicAlgorithmNextButton.innerHTML = `<button class="nextButton javascriptColor1" onclick=javascriptBasicAlgorithmBtn()>Next</button>`;
        javascriptBasicAlgorithmRemoveValue.innerHTML = "";

    } else if (javascriptBasicAlgorithmRandomValue == 20 && javascriptBasicAlgorithmInputAnswer !== __WEBPACK_IMPORTED_MODULE_12__questionsAndAnswers_javascriptBasicAlgorithmAnswers__["a" /* javascriptBasicAlgorithmAnswerArr */][20].A20) {
        javascriptBasicAlgorithmDisplayAnswer.innerHTML = `
    <textarea name="text" class="answer_textarea" id="input">
function getIndexToIns(arr, num) {

    return arr.concat(num).sort((a,b) => a-b).indexOf(num);

}

getIndexToIns([40, 60], 50);
          </textarea>`;
        javascriptBasicAlgorithmIncorrectValue.innerHTML = "Incorrect..";
        javascriptBasicAlgorithmNextButton.innerHTML = `<button class="nextButton javascriptColor1" onclick=javascriptBasicAlgorithmBtn()>Next</button>`;
        javascriptBasicAlgorithmRemoveValue.innerHTML = "";



    }else if (javascriptBasicAlgorithmRandomValue == 21 && javascriptBasicAlgorithmInputAnswer == __WEBPACK_IMPORTED_MODULE_12__questionsAndAnswers_javascriptBasicAlgorithmAnswers__["a" /* javascriptBasicAlgorithmAnswerArr */][21].A21) {
        javascriptBasicAlgorithmCorrectValue.innerHTML = "Correct..";
        javascriptBasicAlgorithmDisplayAnswer.innerHTML = `
        <textarea name="text" class="answer_textarea" id="input">Good Job :) </textarea>`;
        javascriptBasicAlgorithmNextButton.innerHTML = `<button class="nextButton javascriptColor1" onclick=javascriptBasicAlgorithmBtn()>Next</button>`;
        javascriptBasicAlgorithmRemoveValue.innerHTML = "";

    } else if (javascriptBasicAlgorithmRandomValue == 21 && javascriptBasicAlgorithmInputAnswer !== __WEBPACK_IMPORTED_MODULE_12__questionsAndAnswers_javascriptBasicAlgorithmAnswers__["a" /* javascriptBasicAlgorithmAnswerArr */][21].A21) {
        javascriptBasicAlgorithmDisplayAnswer.innerHTML = `
    <textarea name="text" class="answer_textarea" id="input">
function getIndexToIns(arr, num) {
    arr.push(num);
    arr.sort(function(a, b){return a-b});
    return arr.indexOf(num);
}

getIndexToIns([40, 60], 50);
          </textarea>`;
        javascriptBasicAlgorithmIncorrectValue.innerHTML = "Incorrect..";
        javascriptBasicAlgorithmNextButton.innerHTML = `<button class="nextButton javascriptColor1" onclick=javascriptBasicAlgorithmBtn()>Next</button>`;
        javascriptBasicAlgorithmRemoveValue.innerHTML = "";



    }else if (javascriptBasicAlgorithmRandomValue == 22 && javascriptBasicAlgorithmInputAnswer == __WEBPACK_IMPORTED_MODULE_12__questionsAndAnswers_javascriptBasicAlgorithmAnswers__["a" /* javascriptBasicAlgorithmAnswerArr */][22].A22) {
        javascriptBasicAlgorithmCorrectValue.innerHTML = "Correct..";
        javascriptBasicAlgorithmDisplayAnswer.innerHTML = `
        <textarea name="text" class="answer_textarea" id="input">Good Job :) </textarea>`;
        javascriptBasicAlgorithmNextButton.innerHTML = `<button class="nextButton javascriptColor1" onclick=javascriptBasicAlgorithmBtn()>Next</button>`;
        javascriptBasicAlgorithmRemoveValue.innerHTML = "";

    } else if (javascriptBasicAlgorithmRandomValue == 22 && javascriptBasicAlgorithmInputAnswer !== __WEBPACK_IMPORTED_MODULE_12__questionsAndAnswers_javascriptBasicAlgorithmAnswers__["a" /* javascriptBasicAlgorithmAnswerArr */][22].A22) {
        javascriptBasicAlgorithmDisplayAnswer.innerHTML = `
    <textarea name="text" class="answer_textarea" id="input">
function getIndexToIns(arr, num) {
    var times = arr.length; 
    var count = 0; 
    for (var i=0;i<times;i++){
        if(num>arr[i]){count++;} 
    }
        return count; 
}

getIndexToIns([40, 60], 50);
          </textarea>`;
        javascriptBasicAlgorithmIncorrectValue.innerHTML = "Incorrect..";
        javascriptBasicAlgorithmNextButton.innerHTML = `<button class="nextButton javascriptColor1" onclick=javascriptBasicAlgorithmBtn()>Next</button>`;
        javascriptBasicAlgorithmRemoveValue.innerHTML = "";



    }else if (javascriptBasicAlgorithmRandomValue == 23 && javascriptBasicAlgorithmInputAnswer == __WEBPACK_IMPORTED_MODULE_12__questionsAndAnswers_javascriptBasicAlgorithmAnswers__["a" /* javascriptBasicAlgorithmAnswerArr */][23].A23) {
        javascriptBasicAlgorithmCorrectValue.innerHTML = "Correct..";
        javascriptBasicAlgorithmDisplayAnswer.innerHTML = `
        <textarea name="text" class="answer_textarea" id="input">Good Job :) </textarea>`;
        javascriptBasicAlgorithmNextButton.innerHTML = `<button class="nextButton javascriptColor1" onclick=javascriptBasicAlgorithmBtn()>Next</button>`;
        javascriptBasicAlgorithmRemoveValue.innerHTML = "";

    } else if (javascriptBasicAlgorithmRandomValue == 23 && javascriptBasicAlgorithmInputAnswer !== __WEBPACK_IMPORTED_MODULE_12__questionsAndAnswers_javascriptBasicAlgorithmAnswers__["a" /* javascriptBasicAlgorithmAnswerArr */][23].A23) {
        javascriptBasicAlgorithmDisplayAnswer.innerHTML = `
    <textarea name="text" class="answer_textarea" id="input">
function mutation(arr) {
    var test = arr[1].toLowerCase();
    var target = arr[0].toLowerCase();
    for (var i=0;i<test.length;i++) {
        if (target.indexOf(test[i]) < 0)
        return false;
    }
    return true;
}

mutation(["hello", "hey"]);
          </textarea>`;
        javascriptBasicAlgorithmIncorrectValue.innerHTML = "Incorrect..";
        javascriptBasicAlgorithmNextButton.innerHTML = `<button class="nextButton javascriptColor1" onclick=javascriptBasicAlgorithmBtn()>Next</button>`;
        javascriptBasicAlgorithmRemoveValue.innerHTML = "";



    }else if (javascriptBasicAlgorithmRandomValue == 24 && javascriptBasicAlgorithmInputAnswer == __WEBPACK_IMPORTED_MODULE_12__questionsAndAnswers_javascriptBasicAlgorithmAnswers__["a" /* javascriptBasicAlgorithmAnswerArr */][24].A24) {
        javascriptBasicAlgorithmCorrectValue.innerHTML = "Correct..";
        javascriptBasicAlgorithmDisplayAnswer.innerHTML = `
        <textarea name="text" class="answer_textarea" id="input">Good Job :) </textarea>`;
        javascriptBasicAlgorithmNextButton.innerHTML = `<button class="nextButton javascriptColor1" onclick=javascriptBasicAlgorithmBtn()>Next</button>`;
        javascriptBasicAlgorithmRemoveValue.innerHTML = "";

    } else if (javascriptBasicAlgorithmRandomValue == 24 && javascriptBasicAlgorithmInputAnswer !== __WEBPACK_IMPORTED_MODULE_12__questionsAndAnswers_javascriptBasicAlgorithmAnswers__["a" /* javascriptBasicAlgorithmAnswerArr */][24].A24) {
        javascriptBasicAlgorithmDisplayAnswer.innerHTML = `
    <textarea name="text" class="answer_textarea" id="input">
function mutation(arr) {
    return arr[1].toLowerCase()
        .split('')
        .every(function(letter) {
        return arr[0].toLowerCase()
            .indexOf(letter) != -1;
        });
}

mutation(["hello", "hey"]);
          </textarea>`;
        javascriptBasicAlgorithmIncorrectValue.innerHTML = "Incorrect..";
        javascriptBasicAlgorithmNextButton.innerHTML = `<button class="nextButton javascriptColor1" onclick=javascriptBasicAlgorithmBtn()>Next</button>`;
        javascriptBasicAlgorithmRemoveValue.innerHTML = "";



    }else if (javascriptBasicAlgorithmRandomValue == 25 && javascriptBasicAlgorithmInputAnswer == __WEBPACK_IMPORTED_MODULE_12__questionsAndAnswers_javascriptBasicAlgorithmAnswers__["a" /* javascriptBasicAlgorithmAnswerArr */][25].A25) {
        javascriptBasicAlgorithmCorrectValue.innerHTML = "Correct..";
        javascriptBasicAlgorithmDisplayAnswer.innerHTML = `
        <textarea name="text" class="answer_textarea" id="input">Good Job :) </textarea>`;
        javascriptBasicAlgorithmNextButton.innerHTML = `<button class="nextButton javascriptColor1" onclick=javascriptBasicAlgorithmBtn()>Next</button>`;
        javascriptBasicAlgorithmRemoveValue.innerHTML = "";

    } else if (javascriptBasicAlgorithmRandomValue == 25 && javascriptBasicAlgorithmInputAnswer !== __WEBPACK_IMPORTED_MODULE_12__questionsAndAnswers_javascriptBasicAlgorithmAnswers__["a" /* javascriptBasicAlgorithmAnswerArr */][25].A25) {
        javascriptBasicAlgorithmDisplayAnswer.innerHTML = `
    <textarea name="text" class="answer_textarea" id="input">
function chunkArrayInGroups(arr, size) {
    if (arr.length <= size){
        return [arr];
    }
    else {
        return [arr.slice(0,size)].concat(chunkArrayInGroups(arr.slice(size),size));
    }
}

chunkArrayInGroups(["a", "b", "c", "d"], 2);
          </textarea>`;
        javascriptBasicAlgorithmIncorrectValue.innerHTML = "Incorrect..";
        javascriptBasicAlgorithmNextButton.innerHTML = `<button class="nextButton javascriptColor1" onclick=javascriptBasicAlgorithmBtn()>Next</button>`;
        javascriptBasicAlgorithmRemoveValue.innerHTML = "";



    }else if (javascriptBasicAlgorithmRandomValue == 26 && javascriptBasicAlgorithmInputAnswer == __WEBPACK_IMPORTED_MODULE_12__questionsAndAnswers_javascriptBasicAlgorithmAnswers__["a" /* javascriptBasicAlgorithmAnswerArr */][26].A26) {
        javascriptBasicAlgorithmCorrectValue.innerHTML = "Correct..";
        javascriptBasicAlgorithmDisplayAnswer.innerHTML = `
        <textarea name="text" class="answer_textarea" id="input">Good Job :) </textarea>`;
        javascriptBasicAlgorithmNextButton.innerHTML = `<button class="nextButton javascriptColor1" onclick=javascriptBasicAlgorithmBtn()>Next</button>`;
        javascriptBasicAlgorithmRemoveValue.innerHTML = "";

    } else if (javascriptBasicAlgorithmRandomValue == 26 && javascriptBasicAlgorithmInputAnswer !== __WEBPACK_IMPORTED_MODULE_12__questionsAndAnswers_javascriptBasicAlgorithmAnswers__["a" /* javascriptBasicAlgorithmAnswerArr */][26].A26) {
        javascriptBasicAlgorithmDisplayAnswer.innerHTML = `
    <textarea name="text" class="answer_textarea" id="input">
function chunkArrayInGroups(arr, size) {
    var newArr = [];
    while (arr.length) {
        newArr.push(arr.splice(0,size));
    }
    return newArr;
}
chunkArrayInGroups(["a", "b", "c", "d"], 2);
          </textarea>`;
        javascriptBasicAlgorithmIncorrectValue.innerHTML = "Incorrect..";
        javascriptBasicAlgorithmNextButton.innerHTML = `<button class="nextButton javascriptColor1" onclick=javascriptBasicAlgorithmBtn()>Next</button>`;
        javascriptBasicAlgorithmRemoveValue.innerHTML = "";



    }else if (javascriptBasicAlgorithmRandomValue == 27 && javascriptBasicAlgorithmInputAnswer == __WEBPACK_IMPORTED_MODULE_12__questionsAndAnswers_javascriptBasicAlgorithmAnswers__["a" /* javascriptBasicAlgorithmAnswerArr */][27].A27) {
        javascriptBasicAlgorithmCorrectValue.innerHTML = "Correct..";
        javascriptBasicAlgorithmDisplayAnswer.innerHTML = `
        <textarea name="text" class="answer_textarea" id="input">Good Job :) </textarea>`;
        javascriptBasicAlgorithmNextButton.innerHTML = `<button class="nextButton javascriptColor1" onclick=javascriptBasicAlgorithmBtn()>Next</button>`;
        javascriptBasicAlgorithmRemoveValue.innerHTML = "";

    } else if (javascriptBasicAlgorithmRandomValue == 27 && javascriptBasicAlgorithmInputAnswer !== __WEBPACK_IMPORTED_MODULE_12__questionsAndAnswers_javascriptBasicAlgorithmAnswers__["a" /* javascriptBasicAlgorithmAnswerArr */][27].A27) {
        javascriptBasicAlgorithmDisplayAnswer.innerHTML = `
    <textarea name="text" class="answer_textarea" id="input">
function chunkArrayInGroups(arr, size) {
    var arr2 = [];
    for (var i = 0; i < arr.length; i+=size) {
        arr2.push(arr.slice(i , i+size));
    }
    return arr2;
}
chunkArrayInGroups(["a", "b", "c", "d"], 2);
          </textarea>`;
        javascriptBasicAlgorithmIncorrectValue.innerHTML = "Incorrect..";
        javascriptBasicAlgorithmNextButton.innerHTML = `<button class="nextButton javascriptColor1" onclick=javascriptBasicAlgorithmBtn()>Next</button>`;
        javascriptBasicAlgorithmRemoveValue.innerHTML = "";



    }else if (javascriptBasicAlgorithmRandomValue == 28 && javascriptBasicAlgorithmInputAnswer == __WEBPACK_IMPORTED_MODULE_12__questionsAndAnswers_javascriptBasicAlgorithmAnswers__["a" /* javascriptBasicAlgorithmAnswerArr */][28].A28) {
        javascriptBasicAlgorithmCorrectValue.innerHTML = "Correct..";
        javascriptBasicAlgorithmDisplayAnswer.innerHTML = `
        <textarea name="text" class="answer_textarea" id="input">Good Job :) </textarea>`;
        javascriptBasicAlgorithmNextButton.innerHTML = `<button class="nextButton javascriptColor1" onclick=javascriptBasicAlgorithmBtn()>Next</button>`;
        javascriptBasicAlgorithmRemoveValue.innerHTML = "";

    } else if (javascriptBasicAlgorithmRandomValue == 28 && javascriptBasicAlgorithmInputAnswer !== __WEBPACK_IMPORTED_MODULE_12__questionsAndAnswers_javascriptBasicAlgorithmAnswers__["a" /* javascriptBasicAlgorithmAnswerArr */][28].A28) {
        javascriptBasicAlgorithmDisplayAnswer.innerHTML = `
    <textarea name="text" class="answer_textarea" id="input">
function chunkArrayInGroups(arr, size) {

    var temp = [];
    var result = [];

    for (var a = 0; a < arr.length; a++) {
        if (a % size !== size - 1)
        temp.push(arr[a]);
        else {
        temp.push(arr[a]);
        result.push(temp);
        temp = [];
        }
    }

    if (temp.length !== 0)
        result.push(temp);
return result;
}
chunkArrayInGroups(["a", "b", "c", "d"], 2);
          </textarea>`;
        javascriptBasicAlgorithmIncorrectValue.innerHTML = "Incorrect..";
        javascriptBasicAlgorithmNextButton.innerHTML = `<button class="nextButton javascriptColor1" onclick=javascriptBasicAlgorithmBtn()>Next</button>`;
        javascriptBasicAlgorithmRemoveValue.innerHTML = "";



    }else {
        javascriptBasicAlgorithmIncorrectValue.innerHTML = "Incorrect..";
        javascriptBasicAlgorithmNextButton.innerHTML = `<button class="nextButton javascriptColor1" onclick=javascriptBasicAlgorithmBtn()>Next</button>`;
        javascriptBasicAlgorithmRemoveValue.innerHTML = "";
    }

}
window.javascriptBasicAlgorithmSubmit = javascriptBasicAlgorithmSubmit; /* to make submit global*/

function javascriptBasicAlgorithmButton() {
    javascriptBasicAlgorithmTest = document.getElementById("javascriptBasicAlgorithmAddedQuestion").innerHTML = __WEBPACK_IMPORTED_MODULE_13__questionsAndAnswers_javascriptBasicAlgorithmQuestions__["a" /* javascriptBasicAlgorithmQuestionArr */][javascriptBasicAlgorithmRandomValue]; /* giving random question to html */

    return javascriptBasicAlgorithmTest;
}
window.javascriptBasicAlgorithmButton = javascriptBasicAlgorithmButton;

function javascriptBasicAlgorithmShowTest() {
    var javascriptBasicAlgorithmInputBox = document.getElementById("javascriptBasicAlgorithmRemove").style.display = "block";
    return javascriptBasicAlgorithmInputBox;
}
window.javascriptBasicAlgorithmShowTest = javascriptBasicAlgorithmShowTest;

function javascriptBasicAlgorithmBtn() {
    javascriptBasicAlgorithmRandomValue = Math.floor(Math.random() * __WEBPACK_IMPORTED_MODULE_13__questionsAndAnswers_javascriptBasicAlgorithmQuestions__["a" /* javascriptBasicAlgorithmQuestionArr */].length); /* buton next in html to make a next random question*/
    document.getElementById("javascriptBasicAlgorithmAddedQuestion").innerHTML = __WEBPACK_IMPORTED_MODULE_13__questionsAndAnswers_javascriptBasicAlgorithmQuestions__["a" /* javascriptBasicAlgorithmQuestionArr */][javascriptBasicAlgorithmRandomValue]; /* giving random question to html */
    document.getElementById("javascriptBasicAlgorithmElementButton").innerHTML = "";/* to clean javascriptBasicAlgorithmElementButton*/
    document.getElementById("javascriptBasicAlgorithmRemove").innerHTML = `<textarea name="text" class="answer_textarea" id="input"></textarea></br>
      <button class="answer_submit javascriptColor1" id = "javascriptBasicAlgorithmStartButton" onclick="javascriptBasicAlgorithmSubmit()">Submit</button>`;/* to create next text area and Submit button. */
    document.getElementById("javascriptBasicAlgorithmCheckingAnswer").innerHTML = "";
    document.getElementById("javascriptBasicAlgorithmShowingAnswer").innerHTML = "";
}
window.javascriptBasicAlgorithmBtn = javascriptBasicAlgorithmBtn;/* to make submit global*/







































var javascriptObjOrientProgRandomValue = Math.floor(Math.random() * __WEBPACK_IMPORTED_MODULE_15__questionsAndAnswers_javascriptObjOrientProgQuestions__["a" /* javascriptObjOrientProgQuestionArr */].length); /* taking random question from htmlQuestionArr*/


function javascriptObjOrientProgSubmit() { /* function for html submit button*/

    var javascriptObjOrientProgInputAnswer = input.value.replace(/\s+/g, ``); /*replace(/\s+/g, `` is removing all spaces. Avoid checking all the spaces to compare text*/
    var javascriptObjOrientProgCorrectValue = document.getElementById("javascriptObjOrientProgCheckingAnswer"); /* making getElementById code shorter*/
    var javascriptObjOrientProgIncorrectValue = document.getElementById("javascriptObjOrientProgCheckingAnswer");
    var javascriptObjOrientProgDisplayAnswer = document.getElementById("javascriptObjOrientProgShowingAnswer");
    var javascriptObjOrientProgNextButton = document.getElementById("javascriptObjOrientProgElementButton");
    var javascriptObjOrientProgRemoveValue = document.getElementById("javascriptObjOrientProgRemove");

    if (javascriptObjOrientProgRandomValue == 0 && javascriptObjOrientProgInputAnswer == __WEBPACK_IMPORTED_MODULE_14__questionsAndAnswers_javascriptObjOrientProgAnswers__["a" /* javascriptObjOrientProgAnswerArr */][0].A0) { /* checking if javascriptObjOrientProgRandomValue is 0 and if putting answer the same as javascriptObjOrientProgAnswerArr*//*A0 is just that I can track answer numbers when adding questions and answers*/
        javascriptObjOrientProgCorrectValue.innerHTML = "Correct..";
        javascriptObjOrientProgDisplayAnswer.innerHTML = `
        <textarea name="text" class="answer_textarea" id="input">Good Job :) </textarea>`;
        javascriptObjOrientProgNextButton.innerHTML = `<button class="nextButton javascriptColor1" onclick=javascriptObjOrientProgBtn()>Next</button>`; /* creating next button with javascriptObjOrientProgBtn()function*/
        javascriptObjOrientProgRemoveValue.innerHTML = "";/* removing in html answer*/



    } else if (javascriptObjOrientProgRandomValue == 0 && javascriptObjOrientProgInputAnswer !== __WEBPACK_IMPORTED_MODULE_14__questionsAndAnswers_javascriptObjOrientProgAnswers__["a" /* javascriptObjOrientProgAnswerArr */][0].A0) {/*  if random value not == then giving then display the answere.*/
        javascriptObjOrientProgDisplayAnswer.innerHTML = `
    <textarea name="text" class="answer_textarea" id="input">
let dog = {
    name: "George",
    numLegs: 4
};
        </textarea>`;
        javascriptObjOrientProgIncorrectValue.innerHTML = "Incorrect..";
        javascriptObjOrientProgNextButton.innerHTML = `<button class="nextButton javascriptColor1" onclick=javascriptObjOrientProgBtn()>Next</button>`;
        javascriptObjOrientProgRemoveValue.innerHTML = "";



    } else if (javascriptObjOrientProgRandomValue == 1 && javascriptObjOrientProgInputAnswer == __WEBPACK_IMPORTED_MODULE_14__questionsAndAnswers_javascriptObjOrientProgAnswers__["a" /* javascriptObjOrientProgAnswerArr */][1].A1) {
        javascriptObjOrientProgCorrectValue.innerHTML = "Correct..";
        javascriptObjOrientProgDisplayAnswer.innerHTML = `
        <textarea name="text" class="answer_textarea" id="input">Good Job :) </textarea>`;
        javascriptObjOrientProgNextButton.innerHTML = `<button class="nextButton javascriptColor1" onclick=javascriptObjOrientProgBtn()>Next</button>`;
        javascriptObjOrientProgRemoveValue.innerHTML = "";

    } else if (javascriptObjOrientProgRandomValue == 1 && javascriptObjOrientProgInputAnswer !== __WEBPACK_IMPORTED_MODULE_14__questionsAndAnswers_javascriptObjOrientProgAnswers__["a" /* javascriptObjOrientProgAnswerArr */][1].A1) {
        javascriptObjOrientProgDisplayAnswer.innerHTML = `
        <textarea name="text" class="answer_textarea" id="input">
let dog = {
    name: "Spot",
    numLegs: 4
};
console.log(dog.name);
console.log(dog.numLegs);
          </textarea>`;
        javascriptObjOrientProgIncorrectValue.innerHTML = "Incorrect..";
        javascriptObjOrientProgNextButton.innerHTML = `<button class="nextButton javascriptColor1" onclick=javascriptObjOrientProgBtn()>Next</button>`;
        javascriptObjOrientProgRemoveValue.innerHTML = "";



    } else if (javascriptObjOrientProgRandomValue == 2 && javascriptObjOrientProgInputAnswer == __WEBPACK_IMPORTED_MODULE_14__questionsAndAnswers_javascriptObjOrientProgAnswers__["a" /* javascriptObjOrientProgAnswerArr */][2].A2) {
        javascriptObjOrientProgCorrectValue.innerHTML = "Correct..";
        javascriptObjOrientProgDisplayAnswer.innerHTML = `
        <textarea name="text" class="answer_textarea" id="input">Good Job :) </textarea>`;
        javascriptObjOrientProgNextButton.innerHTML = `<button class="nextButton javascriptColor1" onclick=javascriptObjOrientProgBtn()>Next</button>`;
        javascriptObjOrientProgRemoveValue.innerHTML = "";

    } else if (javascriptObjOrientProgRandomValue == 2 && javascriptObjOrientProgInputAnswer !== __WEBPACK_IMPORTED_MODULE_14__questionsAndAnswers_javascriptObjOrientProgAnswers__["a" /* javascriptObjOrientProgAnswerArr */][2].A2) {
        javascriptObjOrientProgDisplayAnswer.innerHTML = `
    <textarea name="text" class="answer_textarea" id="input">
let dog = {
    name: "Spot",
    numLegs: 4,
    sayLegs: function() {
        return "This dog has " + dog.numLegs + " legs.";
    }
};

dog.sayLegs();
          </textarea>`;
        javascriptObjOrientProgIncorrectValue.innerHTML = "Incorrect..";
        javascriptObjOrientProgNextButton.innerHTML = `<button class="nextButton javascriptColor1" onclick=javascriptObjOrientProgBtn()>Next</button>`;
        javascriptObjOrientProgRemoveValue.innerHTML = "";



    } else if (javascriptObjOrientProgRandomValue == 3 && javascriptObjOrientProgInputAnswer == __WEBPACK_IMPORTED_MODULE_14__questionsAndAnswers_javascriptObjOrientProgAnswers__["a" /* javascriptObjOrientProgAnswerArr */][3].A3) {
        javascriptObjOrientProgCorrectValue.innerHTML = "Correct..";
        javascriptObjOrientProgDisplayAnswer.innerHTML = `
        <textarea name="text" class="answer_textarea" id="input">Good Job :) </textarea>`;
        javascriptObjOrientProgNextButton.innerHTML = `<button class="nextButton javascriptColor1" onclick=javascriptObjOrientProgBtn()>Next</button>`;
        javascriptObjOrientProgRemoveValue.innerHTML = "";

    } else if (javascriptObjOrientProgRandomValue == 3 && javascriptObjOrientProgInputAnswer !== __WEBPACK_IMPORTED_MODULE_14__questionsAndAnswers_javascriptObjOrientProgAnswers__["a" /* javascriptObjOrientProgAnswerArr */][3].A3) {
        javascriptObjOrientProgDisplayAnswer.innerHTML = `
    <textarea name="text" class="answer_textarea" id="input">
let dog = {
    name: "Spot",
    numLegs: 4,
    sayLegs: function() {return "This dog has " + this.numLegs + " legs.";}
};

dog.sayLegs();
        </textarea>`;
        javascriptObjOrientProgIncorrectValue.innerHTML = "Incorrect..";
        javascriptObjOrientProgNextButton.innerHTML = `<button class="nextButton javascriptColor1" onclick=javascriptObjOrientProgBtn()>Next</button>`;
        javascriptObjOrientProgRemoveValue.innerHTML = "";
        


    } else if (javascriptObjOrientProgRandomValue == 4 && javascriptObjOrientProgInputAnswer == __WEBPACK_IMPORTED_MODULE_14__questionsAndAnswers_javascriptObjOrientProgAnswers__["a" /* javascriptObjOrientProgAnswerArr */][4].A4) {
        javascriptObjOrientProgCorrectValue.innerHTML = "Correct..";
        javascriptObjOrientProgDisplayAnswer.innerHTML = `
        <textarea name="text" class="answer_textarea" id="input">Good Job :) </textarea>`;
        javascriptObjOrientProgNextButton.innerHTML = `<button class="nextButton javascriptColor1" onclick=javascriptObjOrientProgBtn()>Next</button>`;
        javascriptObjOrientProgRemoveValue.innerHTML = "";

    } else if (javascriptObjOrientProgRandomValue == 4 && javascriptObjOrientProgInputAnswer !== __WEBPACK_IMPORTED_MODULE_14__questionsAndAnswers_javascriptObjOrientProgAnswers__["a" /* javascriptObjOrientProgAnswerArr */][4].A4) {
        javascriptObjOrientProgDisplayAnswer.innerHTML = `
    <textarea name="text" class="answer_textarea" id="input">
function Dog() {
    this.name = "Geogre",
    this.color = "White",
    this.numLegs = 4;
}
        </textarea>`;
        javascriptObjOrientProgIncorrectValue.innerHTML = "Incorrect..";
        javascriptObjOrientProgNextButton.innerHTML = `<button class="nextButton javascriptColor1" onclick=javascriptObjOrientProgBtn()>Next</button>`;
        javascriptObjOrientProgRemoveValue.innerHTML = "";



    } else if (javascriptObjOrientProgRandomValue == 5 && javascriptObjOrientProgInputAnswer == __WEBPACK_IMPORTED_MODULE_14__questionsAndAnswers_javascriptObjOrientProgAnswers__["a" /* javascriptObjOrientProgAnswerArr */][5].A5) {
        javascriptObjOrientProgCorrectValue.innerHTML = "Correct..";
        javascriptObjOrientProgDisplayAnswer.innerHTML = `
        <textarea name="text" class="answer_textarea" id="input">Good Job :) </textarea>`;
        javascriptObjOrientProgNextButton.innerHTML = `<button class="nextButton javascriptColor1" onclick=javascriptObjOrientProgBtn()>Next</button>`;
        javascriptObjOrientProgRemoveValue.innerHTML = "";

    } else if (javascriptObjOrientProgRandomValue == 5 && javascriptObjOrientProgInputAnswer !== __WEBPACK_IMPORTED_MODULE_14__questionsAndAnswers_javascriptObjOrientProgAnswers__["a" /* javascriptObjOrientProgAnswerArr */][5].A5) {
        javascriptObjOrientProgDisplayAnswer.innerHTML = `
    <textarea name="text" class="answer_textarea" id="input">
function Dog() {
    this.name = "Rupert";
    this.color = "brown";
    this.numLegs = 4;
}
let hound = new Dog();
        </textarea>`;
        javascriptObjOrientProgIncorrectValue.innerHTML = "Incorrect..";
        javascriptObjOrientProgNextButton.innerHTML = `<button class="nextButton javascriptColor1" onclick=javascriptObjOrientProgBtn()>Next</button>`;
        javascriptObjOrientProgRemoveValue.innerHTML = "";



    } else if (javascriptObjOrientProgRandomValue == 6 && javascriptObjOrientProgInputAnswer == __WEBPACK_IMPORTED_MODULE_14__questionsAndAnswers_javascriptObjOrientProgAnswers__["a" /* javascriptObjOrientProgAnswerArr */][6].A6) {
        javascriptObjOrientProgCorrectValue.innerHTML = "Correct..";
        javascriptObjOrientProgDisplayAnswer.innerHTML = `
        <textarea name="text" class="answer_textarea" id="input">Good Job :) </textarea>`;
        javascriptObjOrientProgNextButton.innerHTML = `<button class="nextButton javascriptColor1" onclick=javascriptObjOrientProgBtn()>Next</button>`;
        javascriptObjOrientProgRemoveValue.innerHTML = "";

    } else if (javascriptObjOrientProgRandomValue == 6 && javascriptObjOrientProgInputAnswer !== __WEBPACK_IMPORTED_MODULE_14__questionsAndAnswers_javascriptObjOrientProgAnswers__["a" /* javascriptObjOrientProgAnswerArr */][6].A6) {
        javascriptObjOrientProgDisplayAnswer.innerHTML = `
    <textarea name="text" class="answer_textarea" id="input">
function Dog(name, color) {
    this.name = name;
    this.color = color;
    this.numLegs = 4;
}
let terrier = new Dog("George","White");
        </textarea>`;
        javascriptObjOrientProgIncorrectValue.innerHTML = "Incorrect..";
        javascriptObjOrientProgNextButton.innerHTML = `<button class="nextButton javascriptColor1" onclick=javascriptObjOrientProgBtn()>Next</button>`;
        javascriptObjOrientProgRemoveValue.innerHTML = "";



    } else if (javascriptObjOrientProgRandomValue == 7 && javascriptObjOrientProgInputAnswer == __WEBPACK_IMPORTED_MODULE_14__questionsAndAnswers_javascriptObjOrientProgAnswers__["a" /* javascriptObjOrientProgAnswerArr */][7].A7) {
        javascriptObjOrientProgCorrectValue.innerHTML = "Correct..";
        javascriptObjOrientProgDisplayAnswer.innerHTML = `
        <textarea name="text" class="answer_textarea" id="input">Good Job :) </textarea>`;
        javascriptObjOrientProgNextButton.innerHTML = `<button class="nextButton javascriptColor1" onclick=javascriptObjOrientProgBtn()>Next</button>`;
        javascriptObjOrientProgRemoveValue.innerHTML = "";

    } else if (javascriptObjOrientProgRandomValue == 7 && javascriptObjOrientProgInputAnswer !== __WEBPACK_IMPORTED_MODULE_14__questionsAndAnswers_javascriptObjOrientProgAnswers__["a" /* javascriptObjOrientProgAnswerArr */][7].A7) {
        javascriptObjOrientProgDisplayAnswer.innerHTML = `
    <textarea name="text" class="answer_textarea" id="input">
function House(numBedrooms) {
    this.numBedrooms = numBedrooms;
}
let myHouse = new House(5);
myHouse instanceof House;
        </textarea>`;
        javascriptObjOrientProgIncorrectValue.innerHTML = "Incorrect..";
        javascriptObjOrientProgNextButton.innerHTML = `<button class="nextButton javascriptColor1" onclick=javascriptObjOrientProgBtn()>Next</button>`;
        javascriptObjOrientProgRemoveValue.innerHTML = "";



    } else if (javascriptObjOrientProgRandomValue == 8 && javascriptObjOrientProgInputAnswer == __WEBPACK_IMPORTED_MODULE_14__questionsAndAnswers_javascriptObjOrientProgAnswers__["a" /* javascriptObjOrientProgAnswerArr */][8].A8) {
        javascriptObjOrientProgCorrectValue.innerHTML = "Correct..";
        javascriptObjOrientProgDisplayAnswer.innerHTML = `
        <textarea name="text" class="answer_textarea" id="input">Good Job :) </textarea>`;
        javascriptObjOrientProgNextButton.innerHTML = `<button class="nextButton javascriptColor1" onclick=javascriptObjOrientProgBtn()>Next</button>`;
        javascriptObjOrientProgRemoveValue.innerHTML = "";

    } else if (javascriptObjOrientProgRandomValue == 8 && javascriptObjOrientProgInputAnswer !== __WEBPACK_IMPORTED_MODULE_14__questionsAndAnswers_javascriptObjOrientProgAnswers__["a" /* javascriptObjOrientProgAnswerArr */][8].A8) {
        javascriptObjOrientProgDisplayAnswer.innerHTML = `
    <textarea name="text" class="answer_textarea" id="input">
function Bird(name) {
    this.name = name;
    this.numLegs = 2;
    }
    let canary = new Bird("Tweety");
    let ownProps = [];
    for(let property in canary) {
    if(canary.hasOwnProperty(property)) {
        ownProps.push(property);
    }
}
        </textarea>`;
        javascriptObjOrientProgIncorrectValue.innerHTML = "Incorrect..";
        javascriptObjOrientProgNextButton.innerHTML = `<button class="nextButton javascriptColor1" onclick=javascriptObjOrientProgBtn()>Next</button>`;
        javascriptObjOrientProgRemoveValue.innerHTML = "";



    } else if (javascriptObjOrientProgRandomValue == 9 && javascriptObjOrientProgInputAnswer == __WEBPACK_IMPORTED_MODULE_14__questionsAndAnswers_javascriptObjOrientProgAnswers__["a" /* javascriptObjOrientProgAnswerArr */][9].A9) {
        javascriptObjOrientProgCorrectValue.innerHTML = "Correct..";
        javascriptObjOrientProgDisplayAnswer.innerHTML = `
        <textarea name="text" class="answer_textarea" id="input">Good Job :) </textarea>`;
        javascriptObjOrientProgNextButton.innerHTML = `<button class="nextButton javascriptColor1" onclick=javascriptObjOrientProgBtn()>Next</button>`;
        javascriptObjOrientProgRemoveValue.innerHTML = "";

    } else if (javascriptObjOrientProgRandomValue == 9 && javascriptObjOrientProgInputAnswer !== __WEBPACK_IMPORTED_MODULE_14__questionsAndAnswers_javascriptObjOrientProgAnswers__["a" /* javascriptObjOrientProgAnswerArr */][9].A9) {
        javascriptObjOrientProgDisplayAnswer.innerHTML = `
    <textarea name="text" class="answer_textarea" id="input">
function Dog(name) {
    this.name = name;
}

Dog.prototype.numLegs = 4;

let beagle = new Dog("Snoopy"); 
        </textarea>`;
        javascriptObjOrientProgIncorrectValue.innerHTML = "Incorrect..";
        javascriptObjOrientProgNextButton.innerHTML = `<button class="nextButton javascriptColor1" onclick=javascriptObjOrientProgBtn()>Next</button>`;
        javascriptObjOrientProgRemoveValue.innerHTML = "";



    } else if (javascriptObjOrientProgRandomValue == 10 && javascriptObjOrientProgInputAnswer == __WEBPACK_IMPORTED_MODULE_14__questionsAndAnswers_javascriptObjOrientProgAnswers__["a" /* javascriptObjOrientProgAnswerArr */][10].A10) {
        javascriptObjOrientProgCorrectValue.innerHTML = "Correct..";
        javascriptObjOrientProgDisplayAnswer.innerHTML = `
        <textarea name="text" class="answer_textarea" id="input">Good Job :) </textarea>`;
        javascriptObjOrientProgNextButton.innerHTML = `<button class="nextButton javascriptColor1" onclick=javascriptObjOrientProgBtn()>Next</button>`;
        javascriptObjOrientProgRemoveValue.innerHTML = "";

    } else if (javascriptObjOrientProgRandomValue == 10 && javascriptObjOrientProgInputAnswer !== __WEBPACK_IMPORTED_MODULE_14__questionsAndAnswers_javascriptObjOrientProgAnswers__["a" /* javascriptObjOrientProgAnswerArr */][10].A10) {
        javascriptObjOrientProgDisplayAnswer.innerHTML = `
    <textarea name="text" class="answer_textarea" id="input">
function Dog(name) {
    this.name = name;
}

Dog.prototype.numLegs = 4;

let beagle = new Dog("Snoopy");

let ownProps = [];
let prototypeProps = [];

for (let property in beagle) {
    if(Dog.hasOwnProperty(property)) {
        ownProps.push(property)
    }
    else {
        prototypeProps.push(property)
    }
}
        </textarea>`;
        javascriptObjOrientProgIncorrectValue.innerHTML = "Incorrect..";
        javascriptObjOrientProgNextButton.innerHTML = `<button class="nextButton javascriptColor1" onclick=javascriptObjOrientProgBtn()>Next</button>`;
        javascriptObjOrientProgRemoveValue.innerHTML = "";



    } else if (javascriptObjOrientProgRandomValue == 11 && javascriptObjOrientProgInputAnswer == __WEBPACK_IMPORTED_MODULE_14__questionsAndAnswers_javascriptObjOrientProgAnswers__["a" /* javascriptObjOrientProgAnswerArr */][11].A11) {
        javascriptObjOrientProgCorrectValue.innerHTML = "Correct..";
        javascriptObjOrientProgDisplayAnswer.innerHTML = `
        <textarea name="text" class="answer_textarea" id="input">Good Job :) </textarea>`;
        javascriptObjOrientProgNextButton.innerHTML = `<button class="nextButton javascriptColor1" onclick=javascriptObjOrientProgBtn()>Next</button>`;
        javascriptObjOrientProgRemoveValue.innerHTML = "";

    } else if (javascriptObjOrientProgRandomValue == 11 && javascriptObjOrientProgInputAnswer !== __WEBPACK_IMPORTED_MODULE_14__questionsAndAnswers_javascriptObjOrientProgAnswers__["a" /* javascriptObjOrientProgAnswerArr */][11].A11) {
        javascriptObjOrientProgDisplayAnswer.innerHTML = `
    <textarea name="text" class="answer_textarea" id="input">
function Dog(name) {
    this.name = name;
    }
    function joinDogFraternity(candidate) {
    if(candidate.constructor === Dog) {
        return true;
    }
    else {
        return false;
    }
}
        </textarea>`;
        javascriptObjOrientProgIncorrectValue.innerHTML = "Incorrect..";
        javascriptObjOrientProgNextButton.innerHTML = `<button class="nextButton javascriptColor1" onclick=javascriptObjOrientProgBtn()>Next</button>`;
        javascriptObjOrientProgRemoveValue.innerHTML = "";



    } else if (javascriptObjOrientProgRandomValue == 12 && javascriptObjOrientProgInputAnswer == __WEBPACK_IMPORTED_MODULE_14__questionsAndAnswers_javascriptObjOrientProgAnswers__["a" /* javascriptObjOrientProgAnswerArr */][12].A12) {
        javascriptObjOrientProgCorrectValue.innerHTML = "Correct..";
        javascriptObjOrientProgDisplayAnswer.innerHTML = `
        <textarea name="text" class="answer_textarea" id="input">Good Job :) </textarea>`;
        javascriptObjOrientProgNextButton.innerHTML = `<button class="nextButton javascriptColor1" onclick=javascriptObjOrientProgBtn()>Next</button>`;
        javascriptObjOrientProgRemoveValue.innerHTML = "";

    } else if (javascriptObjOrientProgRandomValue == 12 && javascriptObjOrientProgInputAnswer !== __WEBPACK_IMPORTED_MODULE_14__questionsAndAnswers_javascriptObjOrientProgAnswers__["a" /* javascriptObjOrientProgAnswerArr */][12].A12) {
        javascriptObjOrientProgDisplayAnswer.innerHTML = `
    <textarea name="text" class="answer_textarea" id="input">
function Dog(name) {
    this.name = name; 
    }

    Dog.prototype = {
    numLegs: 2,
    eat(){
        console.log('nom nom nom');
    },
    describe(){
        console.log("My name is " + this.name);
    }
};
        </textarea>`;
        javascriptObjOrientProgIncorrectValue.innerHTML = "Incorrect..";
        javascriptObjOrientProgNextButton.innerHTML = `<button class="nextButton javascriptColor1" onclick=javascriptObjOrientProgBtn()>Next</button>`;
        javascriptObjOrientProgRemoveValue.innerHTML = "";



    } else if (javascriptObjOrientProgRandomValue == 13 && javascriptObjOrientProgInputAnswer == __WEBPACK_IMPORTED_MODULE_14__questionsAndAnswers_javascriptObjOrientProgAnswers__["a" /* javascriptObjOrientProgAnswerArr */][13].A13) {
        javascriptObjOrientProgCorrectValue.innerHTML = "Correct..";
        javascriptObjOrientProgDisplayAnswer.innerHTML = `
        <textarea name="text" class="answer_textarea" id="input">Good Job :) </textarea>`;
        javascriptObjOrientProgNextButton.innerHTML = `<button class="nextButton javascriptColor1" onclick=javascriptObjOrientProgBtn()>Next</button>`;
        javascriptObjOrientProgRemoveValue.innerHTML = "";

    } else if (javascriptObjOrientProgRandomValue == 13 && javascriptObjOrientProgInputAnswer !== __WEBPACK_IMPORTED_MODULE_14__questionsAndAnswers_javascriptObjOrientProgAnswers__["a" /* javascriptObjOrientProgAnswerArr */][13].A13) {
        javascriptObjOrientProgDisplayAnswer.innerHTML = `
    <textarea name="text" class="answer_textarea" id="input">
function Dog(name) {
    this.name = name; 
    }
    Dog.prototype = {

    constructor: Dog, 

    numLegs: 2, 
    eat: function() {
        console.log("nom nom nom"); 
    }, 
    describe: function() {
        console.log("My name is " + this.name); 
    }
};
        </textarea>`;
        javascriptObjOrientProgIncorrectValue.innerHTML = "Incorrect..";
        javascriptObjOrientProgNextButton.innerHTML = `<button class="nextButton javascriptColor1" onclick=javascriptObjOrientProgBtn()>Next</button>`;
        javascriptObjOrientProgRemoveValue.innerHTML = "";



    } else if (javascriptObjOrientProgRandomValue == 14 && javascriptObjOrientProgInputAnswer == __WEBPACK_IMPORTED_MODULE_14__questionsAndAnswers_javascriptObjOrientProgAnswers__["a" /* javascriptObjOrientProgAnswerArr */][14].A14) {
        javascriptObjOrientProgCorrectValue.innerHTML = "Correct..";
        javascriptObjOrientProgDisplayAnswer.innerHTML = `
        <textarea name="text" class="answer_textarea" id="input">Good Job :) </textarea>`;
        javascriptObjOrientProgNextButton.innerHTML = `<button class="nextButton javascriptColor1" onclick=javascriptObjOrientProgBtn()>Next</button>`;
        javascriptObjOrientProgRemoveValue.innerHTML = "";

    } else if (javascriptObjOrientProgRandomValue == 14 && javascriptObjOrientProgInputAnswer !== __WEBPACK_IMPORTED_MODULE_14__questionsAndAnswers_javascriptObjOrientProgAnswers__["a" /* javascriptObjOrientProgAnswerArr */][14].A14) {
        javascriptObjOrientProgDisplayAnswer.innerHTML = `
    <textarea name="text" class="answer_textarea" id="input">
function Dog(name) {
    this.name = name;
}
let beagle = new Dog("Snoopy");
Dog.prototype.isPrototypeOf(beagle);
        </textarea>`;
        javascriptObjOrientProgIncorrectValue.innerHTML = "Incorrect..";
        javascriptObjOrientProgNextButton.innerHTML = `<button class="nextButton javascriptColor1" onclick=javascriptObjOrientProgBtn()>Next</button>`;
        javascriptObjOrientProgRemoveValue.innerHTML = "";



    } else if (javascriptObjOrientProgRandomValue == 15 && javascriptObjOrientProgInputAnswer == __WEBPACK_IMPORTED_MODULE_14__questionsAndAnswers_javascriptObjOrientProgAnswers__["a" /* javascriptObjOrientProgAnswerArr */][15].A15) {
        javascriptObjOrientProgCorrectValue.innerHTML = "Correct..";
        javascriptObjOrientProgDisplayAnswer.innerHTML = `
        <textarea name="text" class="answer_textarea" id="input">Good Job :) </textarea>`;
        javascriptObjOrientProgNextButton.innerHTML = `<button class="nextButton javascriptColor1" onclick=javascriptObjOrientProgBtn()>Next</button>`;
        javascriptObjOrientProgRemoveValue.innerHTML = "";

    } else if (javascriptObjOrientProgRandomValue == 15 && javascriptObjOrientProgInputAnswer !== __WEBPACK_IMPORTED_MODULE_14__questionsAndAnswers_javascriptObjOrientProgAnswers__["a" /* javascriptObjOrientProgAnswerArr */][15].A15) {
        javascriptObjOrientProgDisplayAnswer.innerHTML = `
    <textarea name="text" class="answer_textarea" id="input">
function Dog(name) {
    this.name = name;
}

let beagle = new Dog("Snoopy");

Dog.prototype.isPrototypeOf(beagle);
Object.prototype.isPrototypeOf(Dog.prototype); 
        </textarea>`;
        javascriptObjOrientProgIncorrectValue.innerHTML = "Incorrect..";
        javascriptObjOrientProgNextButton.innerHTML = `<button class="nextButton javascriptColor1" onclick=javascriptObjOrientProgBtn()>Next</button>`;
        javascriptObjOrientProgRemoveValue.innerHTML = "";



    } else if (javascriptObjOrientProgRandomValue == 16 && javascriptObjOrientProgInputAnswer == __WEBPACK_IMPORTED_MODULE_14__questionsAndAnswers_javascriptObjOrientProgAnswers__["a" /* javascriptObjOrientProgAnswerArr */][16].A16) {
        javascriptObjOrientProgCorrectValue.innerHTML = "Correct..";
        javascriptObjOrientProgDisplayAnswer.innerHTML = `
        <textarea name="text" class="answer_textarea" id="input">Good Job :) </textarea>`;
        javascriptObjOrientProgNextButton.innerHTML = `<button class="nextButton javascriptColor1" onclick=javascriptObjOrientProgBtn()>Next</button>`;
        javascriptObjOrientProgRemoveValue.innerHTML = "";

    } else if (javascriptObjOrientProgRandomValue == 16 && javascriptObjOrientProgInputAnswer !== __WEBPACK_IMPORTED_MODULE_14__questionsAndAnswers_javascriptObjOrientProgAnswers__["a" /* javascriptObjOrientProgAnswerArr */][16].A16) {
        javascriptObjOrientProgDisplayAnswer.innerHTML = `
    <textarea name="text" class="answer_textarea" id="input">
function Cat(name) {
    this.name = name; 
};

Cat.prototype = {
    constructor: Cat
};

function Bear(name) {
    this.name = name; 
};

Bear.prototype = {
    constructor: Bear
};

function Animal() { };

Animal.prototype = {
    constructor: Animal,
    eat: function() {
        console.log("nom nom nom");
    }
};
        </textarea>`;
        javascriptObjOrientProgIncorrectValue.innerHTML = "Incorrect..";
        javascriptObjOrientProgNextButton.innerHTML = `<button class="nextButton javascriptColor1" onclick=javascriptObjOrientProgBtn()>Next</button>`;
        javascriptObjOrientProgRemoveValue.innerHTML = "";



    } else if (javascriptObjOrientProgRandomValue == 17 && javascriptObjOrientProgInputAnswer == __WEBPACK_IMPORTED_MODULE_14__questionsAndAnswers_javascriptObjOrientProgAnswers__["a" /* javascriptObjOrientProgAnswerArr */][17].A17) {
        javascriptObjOrientProgCorrectValue.innerHTML = "Correct..";
        javascriptObjOrientProgDisplayAnswer.innerHTML = `
        <textarea name="text" class="answer_textarea" id="input">Good Job :) </textarea>`;
        javascriptObjOrientProgNextButton.innerHTML = `<button class="nextButton javascriptColor1" onclick=javascriptObjOrientProgBtn()>Next</button>`;
        javascriptObjOrientProgRemoveValue.innerHTML = "";

    } else if (javascriptObjOrientProgRandomValue == 17 && javascriptObjOrientProgInputAnswer !== __WEBPACK_IMPORTED_MODULE_14__questionsAndAnswers_javascriptObjOrientProgAnswers__["a" /* javascriptObjOrientProgAnswerArr */][17].A17) {
        javascriptObjOrientProgDisplayAnswer.innerHTML = `
    <textarea name="text" class="answer_textarea" id="input">
function Animal() { }

Animal.prototype = {
    constructor: Animal, 
    eat: function() {
    console.log("nom nom nom");
    }
};

let duck = Object.create(Animal.prototype); 
let beagle = Object.create(Animal.prototype);; 

duck.eat(); 
beagle.eat();
        </textarea>`;
        javascriptObjOrientProgIncorrectValue.innerHTML = "Incorrect..";
        javascriptObjOrientProgNextButton.innerHTML = `<button class="nextButton javascriptColor1" onclick=javascriptObjOrientProgBtn()>Next</button>`;
        javascriptObjOrientProgRemoveValue.innerHTML = "";



    } else if (javascriptObjOrientProgRandomValue == 18 && javascriptObjOrientProgInputAnswer == __WEBPACK_IMPORTED_MODULE_14__questionsAndAnswers_javascriptObjOrientProgAnswers__["a" /* javascriptObjOrientProgAnswerArr */][18].A18) {
        javascriptObjOrientProgCorrectValue.innerHTML = "Correct..";
        javascriptObjOrientProgDisplayAnswer.innerHTML = `
        <textarea name="text" class="answer_textarea" id="input">Good Job :) </textarea>`;
        javascriptObjOrientProgNextButton.innerHTML = `<button class="nextButton javascriptColor1" onclick=javascriptObjOrientProgBtn()>Next</button>`;
        javascriptObjOrientProgRemoveValue.innerHTML = "";

    } else if (javascriptObjOrientProgRandomValue == 18 && javascriptObjOrientProgInputAnswer !== __WEBPACK_IMPORTED_MODULE_14__questionsAndAnswers_javascriptObjOrientProgAnswers__["a" /* javascriptObjOrientProgAnswerArr */][18].A18) {
        javascriptObjOrientProgDisplayAnswer.innerHTML = `
    <textarea name="text" class="answer_textarea" id="input">
function Animal() { }

Animal.prototype = {
    constructor: Animal,
    eat: function() {
    console.log("nom nom nom");
    }
};

function Dog() { }
Dog.prototype = Object.create(Animal.prototype);

let beagle = new Dog();
beagle.eat();
        </textarea>`;
        javascriptObjOrientProgIncorrectValue.innerHTML = "Incorrect..";
        javascriptObjOrientProgNextButton.innerHTML = `<button class="nextButton javascriptColor1" onclick=javascriptObjOrientProgBtn()>Next</button>`;
        javascriptObjOrientProgRemoveValue.innerHTML = "";



    } else if (javascriptObjOrientProgRandomValue == 19 && javascriptObjOrientProgInputAnswer == __WEBPACK_IMPORTED_MODULE_14__questionsAndAnswers_javascriptObjOrientProgAnswers__["a" /* javascriptObjOrientProgAnswerArr */][19].A19) {
        javascriptObjOrientProgCorrectValue.innerHTML = "Correct..";
        javascriptObjOrientProgDisplayAnswer.innerHTML = `
        <textarea name="text" class="answer_textarea" id="input">Good Job :) </textarea>`;
        javascriptObjOrientProgNextButton.innerHTML = `<button class="nextButton javascriptColor1" onclick=javascriptObjOrientProgBtn()>Next</button>`;
        javascriptObjOrientProgRemoveValue.innerHTML = "";

    } else if (javascriptObjOrientProgRandomValue == 19 && javascriptObjOrientProgInputAnswer !== __WEBPACK_IMPORTED_MODULE_14__questionsAndAnswers_javascriptObjOrientProgAnswers__["a" /* javascriptObjOrientProgAnswerArr */][19].A19) {
        javascriptObjOrientProgDisplayAnswer.innerHTML = `
    <textarea name="text" class="answer_textarea" id="input">
function Animal() { }
function Bird() { }
function Dog() { }

Bird.prototype = Object.create(Animal.prototype);
Dog.prototype = Object.create(Animal.prototype);
Bird.prototype.constructor = Bird;
Dog.prototype.constructor = Dog;

let duck = new Bird();
let beagle = new Dog();
          </textarea>`;
        javascriptObjOrientProgIncorrectValue.innerHTML = "Incorrect..";
        javascriptObjOrientProgNextButton.innerHTML = `<button class="nextButton javascriptColor1" onclick=javascriptObjOrientProgBtn()>Next</button>`;
        javascriptObjOrientProgRemoveValue.innerHTML = "";



    } else if (javascriptObjOrientProgRandomValue == 20 && javascriptObjOrientProgInputAnswer == __WEBPACK_IMPORTED_MODULE_14__questionsAndAnswers_javascriptObjOrientProgAnswers__["a" /* javascriptObjOrientProgAnswerArr */][20].A20) {
        javascriptObjOrientProgCorrectValue.innerHTML = "Correct..";
        javascriptObjOrientProgDisplayAnswer.innerHTML = `
        <textarea name="text" class="answer_textarea" id="input">Good Job :) </textarea>`;
        javascriptObjOrientProgNextButton.innerHTML = `<button class="nextButton javascriptColor1" onclick=javascriptObjOrientProgBtn()>Next</button>`;
        javascriptObjOrientProgRemoveValue.innerHTML = "";

    } else if (javascriptObjOrientProgRandomValue == 20 && javascriptObjOrientProgInputAnswer !== __WEBPACK_IMPORTED_MODULE_14__questionsAndAnswers_javascriptObjOrientProgAnswers__["a" /* javascriptObjOrientProgAnswerArr */][20].A20) {
        javascriptObjOrientProgDisplayAnswer.innerHTML = `
    <textarea name="text" class="answer_textarea" id="input">
function Animal() { }
Animal.prototype.eat = function() {     console.log("nom nom nom"); 
};

function Dog() { }
Dog.prototype = Object.create(Animal.prototype);
Dog.prototype.constructor = Dog;
Dog.prototype.bark = function() {
    console.log("Woof woof!");
};

let beagle = new Dog();

beagle.eat(); 
beagle.bark();
          </textarea>`;
        javascriptObjOrientProgIncorrectValue.innerHTML = "Incorrect..";
        javascriptObjOrientProgNextButton.innerHTML = `<button class="nextButton javascriptColor1" onclick=javascriptObjOrientProgBtn()>Next</button>`;
        javascriptObjOrientProgRemoveValue.innerHTML = "";



    } else if (javascriptObjOrientProgRandomValue == 21 && javascriptObjOrientProgInputAnswer == __WEBPACK_IMPORTED_MODULE_14__questionsAndAnswers_javascriptObjOrientProgAnswers__["a" /* javascriptObjOrientProgAnswerArr */][21].A21) {
        javascriptObjOrientProgCorrectValue.innerHTML = "Correct..";
        javascriptObjOrientProgDisplayAnswer.innerHTML = `
        <textarea name="text" class="answer_textarea" id="input">Good Job :) </textarea>`;
        javascriptObjOrientProgNextButton.innerHTML = `<button class="nextButton javascriptColor1" onclick=javascriptObjOrientProgBtn()>Next</button>`;
        javascriptObjOrientProgRemoveValue.innerHTML = "";

    } else if (javascriptObjOrientProgRandomValue == 21 && javascriptObjOrientProgInputAnswer !== __WEBPACK_IMPORTED_MODULE_14__questionsAndAnswers_javascriptObjOrientProgAnswers__["a" /* javascriptObjOrientProgAnswerArr */][21].A21) {
        javascriptObjOrientProgDisplayAnswer.innerHTML = `
    <textarea name="text" class="answer_textarea" id="input">
function Bird() { }

Bird.prototype.fly = function() {       return "I am flying!";
};

function Penguin() { }
Penguin.prototype = Object.create(Bird.prototype);
Penguin.prototype.constructor = Penguin;
Penguin.prototype.fly = function() {
    return  "Alas, this is a flightless bird.";
};
let penguin = new Penguin();
console.log(penguin.fly());
          </textarea>`;
        javascriptObjOrientProgIncorrectValue.innerHTML = "Incorrect..";
        javascriptObjOrientProgNextButton.innerHTML = `<button class="nextButton javascriptColor1" onclick=javascriptObjOrientProgBtn()>Next</button>`;
        javascriptObjOrientProgRemoveValue.innerHTML = "";



    } else if (javascriptObjOrientProgRandomValue == 22 && javascriptObjOrientProgInputAnswer == __WEBPACK_IMPORTED_MODULE_14__questionsAndAnswers_javascriptObjOrientProgAnswers__["a" /* javascriptObjOrientProgAnswerArr */][22].A22) {
        javascriptObjOrientProgCorrectValue.innerHTML = "Correct..";
        javascriptObjOrientProgDisplayAnswer.innerHTML = `
        <textarea name="text" class="answer_textarea" id="input">Good Job :) </textarea>`;
        javascriptObjOrientProgNextButton.innerHTML = `<button class="nextButton javascriptColor1" onclick=javascriptObjOrientProgBtn()>Next</button>`;
        javascriptObjOrientProgRemoveValue.innerHTML = "";

    } else if (javascriptObjOrientProgRandomValue == 22 && javascriptObjOrientProgInputAnswer !== __WEBPACK_IMPORTED_MODULE_14__questionsAndAnswers_javascriptObjOrientProgAnswers__["a" /* javascriptObjOrientProgAnswerArr */][22].A22) {
        javascriptObjOrientProgDisplayAnswer.innerHTML = `
    <textarea name="text" class="answer_textarea" id="input">
let bird = {
    name: "Donald",
    numLegs: 2
};

let boat = {
    name: "Warrior",
    type: "race-boat"
};
let glideMixin = function(obj) {
    obj.glide = function() {
        console.log("Gliding!");
    }
};
glideMixin(bird);
glideMixin(boat);
          </textarea>`;
        javascriptObjOrientProgIncorrectValue.innerHTML = "Incorrect..";
        javascriptObjOrientProgNextButton.innerHTML = `<button class="nextButton javascriptColor1" onclick=javascriptObjOrientProgBtn()>Next</button>`;
        javascriptObjOrientProgRemoveValue.innerHTML = "";



    } else if (javascriptObjOrientProgRandomValue == 23 && javascriptObjOrientProgInputAnswer == __WEBPACK_IMPORTED_MODULE_14__questionsAndAnswers_javascriptObjOrientProgAnswers__["a" /* javascriptObjOrientProgAnswerArr */][23].A23) {
        javascriptObjOrientProgCorrectValue.innerHTML = "Correct..";
        javascriptObjOrientProgDisplayAnswer.innerHTML = `
        <textarea name="text" class="answer_textarea" id="input">Good Job :) </textarea>`;
        javascriptObjOrientProgNextButton.innerHTML = `<button class="nextButton javascriptColor1" onclick=javascriptObjOrientProgBtn()>Next</button>`;
        javascriptObjOrientProgRemoveValue.innerHTML = "";

    } else if (javascriptObjOrientProgRandomValue == 23 && javascriptObjOrientProgInputAnswer !== __WEBPACK_IMPORTED_MODULE_14__questionsAndAnswers_javascriptObjOrientProgAnswers__["a" /* javascriptObjOrientProgAnswerArr */][23].A23) {
        javascriptObjOrientProgDisplayAnswer.innerHTML = `
    <textarea name="text" class="answer_textarea" id="input">
function Bird() {
    let weight = 15;

    this.getWeight = function() {
        return weight;
    };

}
          </textarea>`;
        javascriptObjOrientProgIncorrectValue.innerHTML = "Incorrect..";
        javascriptObjOrientProgNextButton.innerHTML = `<button class="nextButton javascriptColor1" onclick=javascriptObjOrientProgBtn()>Next</button>`;
        javascriptObjOrientProgRemoveValue.innerHTML = "";



    } else if (javascriptObjOrientProgRandomValue == 24 && javascriptObjOrientProgInputAnswer == __WEBPACK_IMPORTED_MODULE_14__questionsAndAnswers_javascriptObjOrientProgAnswers__["a" /* javascriptObjOrientProgAnswerArr */][24].A24) {
        javascriptObjOrientProgCorrectValue.innerHTML = "Correct..";
        javascriptObjOrientProgDisplayAnswer.innerHTML = `
        <textarea name="text" class="answer_textarea" id="input">Good Job :) </textarea>`;
        javascriptObjOrientProgNextButton.innerHTML = `<button class="nextButton javascriptColor1" onclick=javascriptObjOrientProgBtn()>Next</button>`;
        javascriptObjOrientProgRemoveValue.innerHTML = "";

    } else if (javascriptObjOrientProgRandomValue == 24 && javascriptObjOrientProgInputAnswer !== __WEBPACK_IMPORTED_MODULE_14__questionsAndAnswers_javascriptObjOrientProgAnswers__["a" /* javascriptObjOrientProgAnswerArr */][24].A24) {
        javascriptObjOrientProgDisplayAnswer.innerHTML = `
    <textarea name="text" class="answer_textarea" id="input">
(function() {
    console.log("A cozy nest is ready");
})();
          </textarea>`;
        javascriptObjOrientProgIncorrectValue.innerHTML = "Incorrect..";
        javascriptObjOrientProgNextButton.innerHTML = `<button class="nextButton javascriptColor1" onclick=javascriptObjOrientProgBtn()>Next</button>`;
        javascriptObjOrientProgRemoveValue.innerHTML = "";



    } else if (javascriptObjOrientProgRandomValue == 25 && javascriptObjOrientProgInputAnswer == __WEBPACK_IMPORTED_MODULE_14__questionsAndAnswers_javascriptObjOrientProgAnswers__["a" /* javascriptObjOrientProgAnswerArr */][25].A25) {
        javascriptObjOrientProgCorrectValue.innerHTML = "Correct..";
        javascriptObjOrientProgDisplayAnswer.innerHTML = `
        <textarea name="text" class="answer_textarea" id="input">Good Job :) </textarea>`;
        javascriptObjOrientProgNextButton.innerHTML = `<button class="nextButton javascriptColor1" onclick=javascriptObjOrientProgBtn()>Next</button>`;
        javascriptObjOrientProgRemoveValue.innerHTML = "";

    } else if (javascriptObjOrientProgRandomValue == 25 && javascriptObjOrientProgInputAnswer !== __WEBPACK_IMPORTED_MODULE_14__questionsAndAnswers_javascriptObjOrientProgAnswers__["a" /* javascriptObjOrientProgAnswerArr */][25].A25) {
        javascriptObjOrientProgDisplayAnswer.innerHTML = `
    <textarea name="text" class="answer_textarea" id="input">
let funModule = (function() {
    return {
        isCuteMixin: function(obj) {
            obj.isCute = function() {
                return true;
            };
        },
        singMixin: function(obj) {
            obj.sing = function() {
                console.log("Singing to an awesome tune");
            };
        }
    }
})();
          </textarea>`;
        javascriptObjOrientProgIncorrectValue.innerHTML = "Incorrect..";
        javascriptObjOrientProgNextButton.innerHTML = `<button class="nextButton javascriptColor1" onclick=javascriptObjOrientProgBtn()>Next</button>`;
        javascriptObjOrientProgRemoveValue.innerHTML = "";



    } else {
        javascriptObjOrientProgIncorrectValue.innerHTML = "Incorrect..";
        javascriptObjOrientProgNextButton.innerHTML = `<button class="nextButton javascriptColor1" onclick=javascriptObjOrientProgBtn()>Next</button>`;
        javascriptObjOrientProgRemoveValue.innerHTML = "";
    }

}
window.javascriptObjOrientProgSubmit = javascriptObjOrientProgSubmit; /* to make submit global*/

function javascriptObjOrientProgButton() {
    javascriptObjOrientProgTest = document.getElementById("javascriptObjOrientProgAddedQuestion").innerHTML = __WEBPACK_IMPORTED_MODULE_15__questionsAndAnswers_javascriptObjOrientProgQuestions__["a" /* javascriptObjOrientProgQuestionArr */][javascriptObjOrientProgRandomValue]; /* giving random question to html */

    return javascriptObjOrientProgTest;
}
window.javascriptObjOrientProgButton = javascriptObjOrientProgButton;

function javascriptObjOrientProgShowTest() {
    var javascriptObjOrientProgInputBox = document.getElementById("javascriptObjOrientProgRemove").style.display = "block";
    return javascriptObjOrientProgInputBox;
}
window.javascriptObjOrientProgShowTest = javascriptObjOrientProgShowTest;

function javascriptObjOrientProgBtn() {
    javascriptObjOrientProgRandomValue = Math.floor(Math.random() * __WEBPACK_IMPORTED_MODULE_15__questionsAndAnswers_javascriptObjOrientProgQuestions__["a" /* javascriptObjOrientProgQuestionArr */].length); /* buton next in html to make a next random question*/
    document.getElementById("javascriptObjOrientProgAddedQuestion").innerHTML = __WEBPACK_IMPORTED_MODULE_15__questionsAndAnswers_javascriptObjOrientProgQuestions__["a" /* javascriptObjOrientProgQuestionArr */][javascriptObjOrientProgRandomValue]; /* giving random question to html */
    document.getElementById("javascriptObjOrientProgElementButton").innerHTML = "";/* to clean javascriptObjOrientProgElementButton*/
    document.getElementById("javascriptObjOrientProgRemove").innerHTML = `<textarea name="text" class="answer_textarea" id="input"></textarea></br>
      <button class="answer_submit javascriptColor1" id = "javascriptObjOrientProgStartButton" onclick="javascriptObjOrientProgSubmit()">Submit</button>`;/* to create next text area and Submit button. */
    document.getElementById("javascriptObjOrientProgCheckingAnswer").innerHTML = "";
    document.getElementById("javascriptObjOrientProgShowingAnswer").innerHTML = "";
}
window.javascriptObjOrientProgBtn = javascriptObjOrientProgBtn;/* to make submit global*/




































































var javascriptFunctionalProgrammingRandomValue = Math.floor(Math.random() * __WEBPACK_IMPORTED_MODULE_17__questionsAndAnswers_javascriptFunctionalProgrammingQuestions__["a" /* javascriptFunctionalProgrammingQuestionArr */].length); /* taking random question from htmlQuestionArr*/


function javascriptFunctionalProgrammingSubmit() { /* function for html submit button*/

    var javascriptFunctionalProgrammingInputAnswer = input.value.replace(/\s+/g, ``); /*replace(/\s+/g, `` is removing all spaces. Avoid checking all the spaces to compare text*/
    var javascriptFunctionalProgrammingCorrectValue = document.getElementById("javascriptFunctionalProgrammingCheckingAnswer"); /* making getElementById code shorter*/
    var javascriptFunctionalProgrammingIncorrectValue = document.getElementById("javascriptFunctionalProgrammingCheckingAnswer");
    var javascriptFunctionalProgrammingDisplayAnswer = document.getElementById("javascriptFunctionalProgrammingShowingAnswer");
    var javascriptFunctionalProgrammingNextButton = document.getElementById("javascriptFunctionalProgrammingElementButton");
    var javascriptFunctionalProgrammingRemoveValue = document.getElementById("javascriptFunctionalProgrammingRemove");

    if (javascriptFunctionalProgrammingRandomValue == 0 && javascriptFunctionalProgrammingInputAnswer == __WEBPACK_IMPORTED_MODULE_16__questionsAndAnswers_javascriptFunctionalProgrammingAnswers__["a" /* javascriptFunctionalProgrammingAnswerArr */][0].A0) { /* checking if javascriptFunctionalProgrammingRandomValue is 0 and if putting answer the same as javascriptFunctionalProgrammingAnswerArr*//*A0 is just that I can track answer numbers when adding questions and answers*/
        javascriptFunctionalProgrammingCorrectValue.innerHTML = "Correct..";
        javascriptFunctionalProgrammingDisplayAnswer.innerHTML = `
        <textarea name="text" class="answer_textarea" id="input">Good Job :) </textarea>`;
        javascriptFunctionalProgrammingNextButton.innerHTML = `<button class="nextButton javascriptColor1" onclick=javascriptFunctionalProgrammingBtn()>Next</button>`; /* creating next button with javascriptFunctionalProgrammingBtn()function*/
        javascriptFunctionalProgrammingRemoveValue.innerHTML = "";/* removing in html answer*/



    } else if (javascriptFunctionalProgrammingRandomValue == 0 && javascriptFunctionalProgrammingInputAnswer !== __WEBPACK_IMPORTED_MODULE_16__questionsAndAnswers_javascriptFunctionalProgrammingAnswers__["a" /* javascriptFunctionalProgrammingAnswerArr */][0].A0) {/*  if random value not == then giving then display the answere.*/
        javascriptFunctionalProgrammingDisplayAnswer.innerHTML = `
    <textarea name="text" class="answer_textarea" id="input">
const prepareTea = () => 'greenTea';


const getTea = (numOfCups) => {
    const teaCups = [];
    
    for(let cups = 1; cups <= numOfCups; cups += 1) {
    const teaCup = prepareTea();
    teaCups.push(teaCup);
    }

    return teaCups;
};
const tea4TeamFCC = getTea(40); 
console.log(tea4TeamFCC);
        </textarea>`;
        javascriptFunctionalProgrammingIncorrectValue.innerHTML = "Incorrect..";
        javascriptFunctionalProgrammingNextButton.innerHTML = `<button class="nextButton javascriptColor1" onclick=javascriptFunctionalProgrammingBtn()>Next</button>`;
        javascriptFunctionalProgrammingRemoveValue.innerHTML = "";



    } else if (javascriptFunctionalProgrammingRandomValue == 1 && javascriptFunctionalProgrammingInputAnswer == __WEBPACK_IMPORTED_MODULE_16__questionsAndAnswers_javascriptFunctionalProgrammingAnswers__["a" /* javascriptFunctionalProgrammingAnswerArr */][1].A1) {
        javascriptFunctionalProgrammingCorrectValue.innerHTML = "Correct..";
        javascriptFunctionalProgrammingDisplayAnswer.innerHTML = `
        <textarea name="text" class="answer_textarea" id="input">Good Job :) </textarea>`;
        javascriptFunctionalProgrammingNextButton.innerHTML = `<button class="nextButton javascriptColor1" onclick=javascriptFunctionalProgrammingBtn()>Next</button>`;
        javascriptFunctionalProgrammingRemoveValue.innerHTML = "";

    } else if (javascriptFunctionalProgrammingRandomValue == 1 && javascriptFunctionalProgrammingInputAnswer !== __WEBPACK_IMPORTED_MODULE_16__questionsAndAnswers_javascriptFunctionalProgrammingAnswers__["a" /* javascriptFunctionalProgrammingAnswerArr */][1].A1) {
        javascriptFunctionalProgrammingDisplayAnswer.innerHTML = `
        <textarea name="text" class="answer_textarea" id="input">
const prepareGreenTea = () => 'greenTea';

const prepareBlackTea = () => 'blackTea';


const getTea = (prepareTea, numOfCups) => {
    const teaCups = [];

    for(let cups = 1; cups <= numOfCups; cups += 1) {
    const teaCup = prepareTea();
    teaCups.push(teaCup);
    }

    return teaCups;
};
const tea4GreenTeamFCC = getTea(prepareGreenTea,27); 
const tea4BlackTeamFCC = getTea(prepareBlackTea,13); 

console.log(
    tea4GreenTeamFCC,
    tea4BlackTeamFCC
);
          </textarea>`;
        javascriptFunctionalProgrammingIncorrectValue.innerHTML = "Incorrect..";
        javascriptFunctionalProgrammingNextButton.innerHTML = `<button class="nextButton javascriptColor1" onclick=javascriptFunctionalProgrammingBtn()>Next</button>`;
        javascriptFunctionalProgrammingRemoveValue.innerHTML = "";



    } else if (javascriptFunctionalProgrammingRandomValue == 2 && javascriptFunctionalProgrammingInputAnswer == __WEBPACK_IMPORTED_MODULE_16__questionsAndAnswers_javascriptFunctionalProgrammingAnswers__["a" /* javascriptFunctionalProgrammingAnswerArr */][2].A2) {
        javascriptFunctionalProgrammingCorrectValue.innerHTML = "Correct..";
        javascriptFunctionalProgrammingDisplayAnswer.innerHTML = `
        <textarea name="text" class="answer_textarea" id="input">Good Job :) </textarea>`;
        javascriptFunctionalProgrammingNextButton.innerHTML = `<button class="nextButton javascriptColor1" onclick=javascriptFunctionalProgrammingBtn()>Next</button>`;
        javascriptFunctionalProgrammingRemoveValue.innerHTML = "";

    } else if (javascriptFunctionalProgrammingRandomValue == 2 && javascriptFunctionalProgrammingInputAnswer !== __WEBPACK_IMPORTED_MODULE_16__questionsAndAnswers_javascriptFunctionalProgrammingAnswers__["a" /* javascriptFunctionalProgrammingAnswerArr */][2].A2) {
        javascriptFunctionalProgrammingDisplayAnswer.innerHTML = `
    <textarea name="text" class="answer_textarea" id="input">
var fixedValue = 4;
function incrementer () {
    return fixedValue + 1;
}
var newValue = incrementer(); 
console.log(fixedValue);
          </textarea>`;
        javascriptFunctionalProgrammingIncorrectValue.innerHTML = "Incorrect..";
        javascriptFunctionalProgrammingNextButton.innerHTML = `<button class="nextButton javascriptColor1" onclick=javascriptFunctionalProgrammingBtn()>Next</button>`;
        javascriptFunctionalProgrammingRemoveValue.innerHTML = "";



    } else if (javascriptFunctionalProgrammingRandomValue == 3 && javascriptFunctionalProgrammingInputAnswer == __WEBPACK_IMPORTED_MODULE_16__questionsAndAnswers_javascriptFunctionalProgrammingAnswers__["a" /* javascriptFunctionalProgrammingAnswerArr */][3].A3) {
        javascriptFunctionalProgrammingCorrectValue.innerHTML = "Correct..";
        javascriptFunctionalProgrammingDisplayAnswer.innerHTML = `
        <textarea name="text" class="answer_textarea" id="input">Good Job :) </textarea>`;
        javascriptFunctionalProgrammingNextButton.innerHTML = `<button class="nextButton javascriptColor1" onclick=javascriptFunctionalProgrammingBtn()>Next</button>`;
        javascriptFunctionalProgrammingRemoveValue.innerHTML = "";

    } else if (javascriptFunctionalProgrammingRandomValue == 3 && javascriptFunctionalProgrammingInputAnswer !== __WEBPACK_IMPORTED_MODULE_16__questionsAndAnswers_javascriptFunctionalProgrammingAnswers__["a" /* javascriptFunctionalProgrammingAnswerArr */][3].A3) {
        javascriptFunctionalProgrammingDisplayAnswer.innerHTML = `
    <textarea name="text" class="answer_textarea" id="input">
var fixedValue = 4;

function incrementer (value) {
    return value + 1;
}

var newValue = incrementer(fixedValue);
console.log(fixedValue); 
        </textarea>`;
        javascriptFunctionalProgrammingIncorrectValue.innerHTML = "Incorrect..";
        javascriptFunctionalProgrammingNextButton.innerHTML = `<button class="nextButton javascriptColor1" onclick=javascriptFunctionalProgrammingBtn()>Next</button>`;
        javascriptFunctionalProgrammingRemoveValue.innerHTML = "";
        


    } else if (javascriptFunctionalProgrammingRandomValue == 4 && javascriptFunctionalProgrammingInputAnswer == __WEBPACK_IMPORTED_MODULE_16__questionsAndAnswers_javascriptFunctionalProgrammingAnswers__["a" /* javascriptFunctionalProgrammingAnswerArr */][4].A4) {
        javascriptFunctionalProgrammingCorrectValue.innerHTML = "Correct..";
        javascriptFunctionalProgrammingDisplayAnswer.innerHTML = `
        <textarea name="text" class="answer_textarea" id="input">Good Job :) </textarea>`;
        javascriptFunctionalProgrammingNextButton.innerHTML = `<button class="nextButton javascriptColor1" onclick=javascriptFunctionalProgrammingBtn()>Next</button>`;
        javascriptFunctionalProgrammingRemoveValue.innerHTML = "";

    } else if (javascriptFunctionalProgrammingRandomValue == 4 && javascriptFunctionalProgrammingInputAnswer !== __WEBPACK_IMPORTED_MODULE_16__questionsAndAnswers_javascriptFunctionalProgrammingAnswers__["a" /* javascriptFunctionalProgrammingAnswerArr */][4].A4) {
        javascriptFunctionalProgrammingDisplayAnswer.innerHTML = `
    <textarea name="text" class="answer_textarea" id="input">
var bookList = ["The Hound of the Baskervilles", "On The Electrodynamics of Moving Bodies", "Philosophiæ Naturalis Principia Mathematica", "Disquisitiones Arithmeticae"];
function add (bookName) {
    
    return bookList.push(bookName);
    
}
function add (arr, bookName) {
    let newArr = [...arr];  
    newArr.push(bookName);  
    return newArr; 
}
function remove (arr, bookName) {
    let newArr = [...arr];  
    if (newArr.indexOf(bookName) >= 0) {  
    newArr.splice(newArr.indexOf(bookName), 1); 
    return newArr; 
    }
}
var newBookList = add(bookList, 'A Brief History of Time');
var newerBookList = remove(bookList, 'On The Electrodynamics of Moving Bodies');
var newestBookList = remove(add(bookList, 'A Brief History of Time'), 'On The Electrodynamics of Moving Bodies');

console.log(bookList);
        </textarea>`;
        javascriptFunctionalProgrammingIncorrectValue.innerHTML = "Incorrect..";
        javascriptFunctionalProgrammingNextButton.innerHTML = `<button class="nextButton javascriptColor1" onclick=javascriptFunctionalProgrammingBtn()>Next</button>`;
        javascriptFunctionalProgrammingRemoveValue.innerHTML = "";



    } else if (javascriptFunctionalProgrammingRandomValue == 5 && javascriptFunctionalProgrammingInputAnswer == __WEBPACK_IMPORTED_MODULE_16__questionsAndAnswers_javascriptFunctionalProgrammingAnswers__["a" /* javascriptFunctionalProgrammingAnswerArr */][5].A5) {
        javascriptFunctionalProgrammingCorrectValue.innerHTML = "Correct..";
        javascriptFunctionalProgrammingDisplayAnswer.innerHTML = `
        <textarea name="text" class="answer_textarea" id="input">Good Job :) </textarea>`;
        javascriptFunctionalProgrammingNextButton.innerHTML = `<button class="nextButton javascriptColor1" onclick=javascriptFunctionalProgrammingBtn()>Next</button>`;
        javascriptFunctionalProgrammingRemoveValue.innerHTML = "";

    } else if (javascriptFunctionalProgrammingRandomValue == 5 && javascriptFunctionalProgrammingInputAnswer !== __WEBPACK_IMPORTED_MODULE_16__questionsAndAnswers_javascriptFunctionalProgrammingAnswers__["a" /* javascriptFunctionalProgrammingAnswerArr */][5].A5) {
        javascriptFunctionalProgrammingDisplayAnswer.innerHTML = `
    <textarea name="text" class="answer_textarea" id="input">
var watchList = [
    {
        "Title": "Inception",
        "Year": "2010",
        "Rated": "PG-13",
        "Released": "16 Jul 2010",
        "Runtime": "148 min",
        "Genre": "Action, Adventure, Crime",
        "Director": "Christopher Nolan",
        "Writer": "Christopher Nolan",
        "Actors": "Leonardo DiCaprio, Joseph Gordon-Levitt, Ellen Page, Tom Hardy",
        "Plot": "A thief, who steals corporate secrets through use of dream-sharing technology, is given the inverse task of planting an idea into the mind of a CEO.",
        "Language": "English, Japanese, French",
        "Country": "USA, UK",
        "Awards": "Won 4 Oscars. Another 143 wins & 198 nominations.",
        "Poster": "http://ia.media-imdb.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_SX300.jpg",
        "Metascore": "74",
        "imdbRating": "8.8",
        "imdbVotes": "1,446,708",
        "imdbID": "tt1375666",
        "Type": "movie",
        "Response": "True"
    },
    {
        "Title": "Interstellar",
        "Year": "2014",
        "Rated": "PG-13",
        "Released": "07 Nov 2014",
        "Runtime": "169 min",
        "Genre": "Adventure, Drama, Sci-Fi",
        "Director": "Christopher Nolan",
        "Writer": "Jonathan Nolan, Christopher Nolan",
        "Actors": "Ellen Burstyn, Matthew McConaughey, Mackenzie Foy, John Lithgow",
        "Plot": "A team of explorers travel through a wormhole in space in an attempt to ensure humanity's survival.",
        "Language": "English",
        "Country": "USA, UK",
        "Awards": "Won 1 Oscar. Another 39 wins & 132 nominations.",
        "Poster": "http://ia.media-imdb.com/images/M/MV5BMjIxNTU4MzY4MF5BMl5BanBnXkFtZTgwMzM4ODI3MjE@._V1_SX300.jpg",
        "Metascore": "74",
        "imdbRating": "8.6",
        "imdbVotes": "910,366",
        "imdbID": "tt0816692",
        "Type": "movie",
        "Response": "True"
    },
    {
        "Title": "The Dark Knight",
        "Year": "2008",
        "Rated": "PG-13",
        "Released": "18 Jul 2008",
        "Runtime": "152 min",
        "Genre": "Action, Adventure, Crime",
        "Director": "Christopher Nolan",
        "Writer": "Jonathan Nolan (screenplay), Christopher Nolan (screenplay), Christopher Nolan (story), David S. Goyer (story), Bob Kane (characters)",
        "Actors": "Christian Bale, Heath Ledger, Aaron Eckhart, Michael Caine",
        "Plot": "When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, the caped crusader must come to terms with one of the greatest psychological tests of his ability to fight injustice.",
        "Language": "English, Mandarin",
        "Country": "USA, UK",
        "Awards": "Won 2 Oscars. Another 146 wins & 142 nominations.",
        "Poster": "http://ia.media-imdb.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_SX300.jpg",
        "Metascore": "82",
        "imdbRating": "9.0",
        "imdbVotes": "1,652,832",
        "imdbID": "tt0468569",
        "Type": "movie",
        "Response": "True"
    },
    {
        "Title": "Batman Begins",
        "Year": "2005",
        "Rated": "PG-13",
        "Released": "15 Jun 2005",
        "Runtime": "140 min",
        "Genre": "Action, Adventure",
        "Director": "Christopher Nolan",
        "Writer": "Bob Kane (characters), David S. Goyer (story), Christopher Nolan (screenplay), David S. Goyer (screenplay)",
        "Actors": "Christian Bale, Michael Caine, Liam Neeson, Katie Holmes",
        "Plot": "After training with his mentor, Batman begins his fight to free crime-ridden Gotham City from the corruption that Scarecrow and the League of Shadows have cast upon it.",
        "Language": "English, Urdu, Mandarin",
        "Country": "USA, UK",
        "Awards": "Nominated for 1 Oscar. Another 15 wins & 66 nominations.",
        "Poster": "http://ia.media-imdb.com/images/M/MV5BNTM3OTc0MzM2OV5BMl5BanBnXkFtZTYwNzUwMTI3._V1_SX300.jpg",
        "Metascore": "70",
        "imdbRating": "8.3",
        "imdbVotes": "972,584",
        "imdbID": "tt0372784",
        "Type": "movie",
        "Response": "True"
    },
    {
        "Title": "Avatar",
        "Year": "2009",
        "Rated": "PG-13",
        "Released": "18 Dec 2009",
        "Runtime": "162 min",
        "Genre": "Action, Adventure, Fantasy",
        "Director": "James Cameron",
        "Writer": "James Cameron",
        "Actors": "Sam Worthington, Zoe Saldana, Sigourney Weaver, Stephen Lang",
        "Plot": "A paraplegic marine dispatched to the moon Pandora on a unique mission becomes torn between following his orders and protecting the world he feels is his home.",
        "Language": "English, Spanish",
        "Country": "USA, UK",
        "Awards": "Won 3 Oscars. Another 80 wins & 121 nominations.",
        "Poster": "http://ia.media-imdb.com/images/M/MV5BMTYwOTEwNjAzMl5BMl5BanBnXkFtZTcwODc5MTUwMw@@._V1_SX300.jpg",
        "Metascore": "83",
        "imdbRating": "7.9",
        "imdbVotes": "876,575",
        "imdbID": "tt0499549",
        "Type": "movie",
        "Response": "True"
    }
];

var rating = watchList.map(function(movie) {
return {
title: movie["Title"],
rating: movie["imdbRating"]
}
});

        </textarea>`;
        javascriptFunctionalProgrammingIncorrectValue.innerHTML = "Incorrect..";
        javascriptFunctionalProgrammingNextButton.innerHTML = `<button class="nextButton javascriptColor1" onclick=javascriptFunctionalProgrammingBtn()>Next</button>`;
        javascriptFunctionalProgrammingRemoveValue.innerHTML = "";



    } else if (javascriptFunctionalProgrammingRandomValue == 6 && javascriptFunctionalProgrammingInputAnswer == __WEBPACK_IMPORTED_MODULE_16__questionsAndAnswers_javascriptFunctionalProgrammingAnswers__["a" /* javascriptFunctionalProgrammingAnswerArr */][6].A6) {
        javascriptFunctionalProgrammingCorrectValue.innerHTML = "Correct..";
        javascriptFunctionalProgrammingDisplayAnswer.innerHTML = `
        <textarea name="text" class="answer_textarea" id="input">Good Job :) </textarea>`;
        javascriptFunctionalProgrammingNextButton.innerHTML = `<button class="nextButton javascriptColor1" onclick=javascriptFunctionalProgrammingBtn()>Next</button>`;
        javascriptFunctionalProgrammingRemoveValue.innerHTML = "";

    } else if (javascriptFunctionalProgrammingRandomValue == 6 && javascriptFunctionalProgrammingInputAnswer !== __WEBPACK_IMPORTED_MODULE_16__questionsAndAnswers_javascriptFunctionalProgrammingAnswers__["a" /* javascriptFunctionalProgrammingAnswerArr */][6].A6) {
        javascriptFunctionalProgrammingDisplayAnswer.innerHTML = `
    <textarea name="text" class="answer_textarea" id="input">
var s = [23, 65, 98, 5];
Array.prototype.myMap = function(callback){
    var newArray = [];
    this.forEach(a => newArray.push(callback(a)));
    return newArray;
};
var new_s = s.myMap(function(item){
    return item * 2;
});
        </textarea>`;
        javascriptFunctionalProgrammingIncorrectValue.innerHTML = "Incorrect..";
        javascriptFunctionalProgrammingNextButton.innerHTML = `<button class="nextButton javascriptColor1" onclick=javascriptFunctionalProgrammingBtn()>Next</button>`;
        javascriptFunctionalProgrammingRemoveValue.innerHTML = "";



    } else if (javascriptFunctionalProgrammingRandomValue == 7 && javascriptFunctionalProgrammingInputAnswer == __WEBPACK_IMPORTED_MODULE_16__questionsAndAnswers_javascriptFunctionalProgrammingAnswers__["a" /* javascriptFunctionalProgrammingAnswerArr */][7].A7) {
        javascriptFunctionalProgrammingCorrectValue.innerHTML = "Correct..";
        javascriptFunctionalProgrammingDisplayAnswer.innerHTML = `
        <textarea name="text" class="answer_textarea" id="input">Good Job :) </textarea>`;
        javascriptFunctionalProgrammingNextButton.innerHTML = `<button class="nextButton javascriptColor1" onclick=javascriptFunctionalProgrammingBtn()>Next</button>`;
        javascriptFunctionalProgrammingRemoveValue.innerHTML = "";

    } else if (javascriptFunctionalProgrammingRandomValue == 7 && javascriptFunctionalProgrammingInputAnswer !== __WEBPACK_IMPORTED_MODULE_16__questionsAndAnswers_javascriptFunctionalProgrammingAnswers__["a" /* javascriptFunctionalProgrammingAnswerArr */][7].A7) {
        javascriptFunctionalProgrammingDisplayAnswer.innerHTML = `
    <textarea name="text" class="answer_textarea" id="input">
var watchList = [
    {  
        "Title": "Inception",
        "Year": "2010",
        "Rated": "PG-13",
        "Released": "16 Jul 2010",
        "Runtime": "148 min",
        "Genre": "Action, Adventure, Crime",
        "Director": "Christopher Nolan",
        "Writer": "Christopher Nolan",
        "Actors": "Leonardo DiCaprio, Joseph Gordon-Levitt, Ellen Page, Tom Hardy",
        "Plot": "A thief, who steals corporate secrets through use of dream-sharing technology, is given the inverse task of planting an idea into the mind of a CEO.",
        "Language": "English, Japanese, French",
        "Country": "USA, UK",
        "Awards": "Won 4 Oscars. Another 143 wins & 198 nominations.",
        "Poster": "http://ia.media-imdb.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_SX300.jpg",
        "Metascore": "74",
        "imdbRating": "8.8",
        "imdbVotes": "1,446,708",
        "imdbID": "tt1375666",
        "Type": "movie",
        "Response": "True"
    },
    {  
        "Title": "Interstellar",
        "Year": "2014",
        "Rated": "PG-13",
        "Released": "07 Nov 2014",
        "Runtime": "169 min",
        "Genre": "Adventure, Drama, Sci-Fi",
        "Director": "Christopher Nolan",
        "Writer": "Jonathan Nolan, Christopher Nolan",
        "Actors": "Ellen Burstyn, Matthew McConaughey, Mackenzie Foy, John Lithgow",
        "Plot": "A team of explorers travel through a wormhole in space in an attempt to ensure humanity's survival.",
        "Language": "English",
        "Country": "USA, UK",
        "Awards": "Won 1 Oscar. Another 39 wins & 132 nominations.",
        "Poster": "http://ia.media-imdb.com/images/M/MV5BMjIxNTU4MzY4MF5BMl5BanBnXkFtZTgwMzM4ODI3MjE@._V1_SX300.jpg",
        "Metascore": "74",
        "imdbRating": "8.6",
        "imdbVotes": "910,366",
        "imdbID": "tt0816692",
        "Type": "movie",
        "Response": "True"
    },
    {
        "Title": "The Dark Knight",
        "Year": "2008",
        "Rated": "PG-13",
        "Released": "18 Jul 2008",
        "Runtime": "152 min",
        "Genre": "Action, Adventure, Crime",
        "Director": "Christopher Nolan",
        "Writer": "Jonathan Nolan (screenplay), Christopher Nolan (screenplay), Christopher Nolan (story), David S. Goyer (story), Bob Kane (characters)",
        "Actors": "Christian Bale, Heath Ledger, Aaron Eckhart, Michael Caine",
        "Plot": "When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, the caped crusader must come to terms with one of the greatest psychological tests of his ability to fight injustice.",
        "Language": "English, Mandarin",
        "Country": "USA, UK",
        "Awards": "Won 2 Oscars. Another 146 wins & 142 nominations.",
        "Poster": "http://ia.media-imdb.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_SX300.jpg",
        "Metascore": "82",
        "imdbRating": "9.0",
        "imdbVotes": "1,652,832",
        "imdbID": "tt0468569",
        "Type": "movie",
        "Response": "True"
    },
    {  
        "Title": "Batman Begins",
        "Year": "2005",
        "Rated": "PG-13",
        "Released": "15 Jun 2005",
        "Runtime": "140 min",
        "Genre": "Action, Adventure",
        "Director": "Christopher Nolan",
        "Writer": "Bob Kane (characters), David S. Goyer (story), Christopher Nolan (screenplay), David S. Goyer (screenplay)",
        "Actors": "Christian Bale, Michael Caine, Liam Neeson, Katie Holmes",
        "Plot": "After training with his mentor, Batman begins his fight to free crime-ridden Gotham City from the corruption that Scarecrow and the League of Shadows have cast upon it.",
        "Language": "English, Urdu, Mandarin",
        "Country": "USA, UK",
        "Awards": "Nominated for 1 Oscar. Another 15 wins & 66 nominations.",
        "Poster": "http://ia.media-imdb.com/images/M/MV5BNTM3OTc0MzM2OV5BMl5BanBnXkFtZTYwNzUwMTI3._V1_SX300.jpg",
        "Metascore": "70",
        "imdbRating": "8.3",
        "imdbVotes": "972,584",
        "imdbID": "tt0372784",
        "Type": "movie",
        "Response": "True"
    },
    {
        "Title": "Avatar",
        "Year": "2009",
        "Rated": "PG-13",
        "Released": "18 Dec 2009",
        "Runtime": "162 min",
        "Genre": "Action, Adventure, Fantasy",
        "Director": "James Cameron",
        "Writer": "James Cameron",
        "Actors": "Sam Worthington, Zoe Saldana, Sigourney Weaver, Stephen Lang",
        "Plot": "A paraplegic marine dispatched to the moon Pandora on a unique mission becomes torn between following his orders and protecting the world he feels is his home.",
        "Language": "English, Spanish",
        "Country": "USA, UK",
        "Awards": "Won 3 Oscars. Another 80 wins & 121 nominations.",
        "Poster": "http://ia.media-imdb.com/images/M/MV5BMTYwOTEwNjAzMl5BMl5BanBnXkFtZTcwODc5MTUwMw@@._V1_SX300.jpg",
        "Metascore": "83",
        "imdbRating": "7.9",
        "imdbVotes": "876,575",
        "imdbID": "tt0499549",
        "Type": "movie",
        "Response": "True"
    }
];

var filteredList = watchList.map(function(e) {
return {title: e["Title"], rating: e["imdbRating"]}
}).filter((e) => e.rating >= 8);

console.log(filteredList); 


console.log(filteredList); 

        </textarea>`;
        javascriptFunctionalProgrammingIncorrectValue.innerHTML = "Incorrect..";
        javascriptFunctionalProgrammingNextButton.innerHTML = `<button class="nextButton javascriptColor1" onclick=javascriptFunctionalProgrammingBtn()>Next</button>`;
        javascriptFunctionalProgrammingRemoveValue.innerHTML = "";



    } else if (javascriptFunctionalProgrammingRandomValue == 8 && javascriptFunctionalProgrammingInputAnswer == __WEBPACK_IMPORTED_MODULE_16__questionsAndAnswers_javascriptFunctionalProgrammingAnswers__["a" /* javascriptFunctionalProgrammingAnswerArr */][8].A8) {
        javascriptFunctionalProgrammingCorrectValue.innerHTML = "Correct..";
        javascriptFunctionalProgrammingDisplayAnswer.innerHTML = `
        <textarea name="text" class="answer_textarea" id="input">Good Job :) </textarea>`;
        javascriptFunctionalProgrammingNextButton.innerHTML = `<button class="nextButton javascriptColor1" onclick=javascriptFunctionalProgrammingBtn()>Next</button>`;
        javascriptFunctionalProgrammingRemoveValue.innerHTML = "";

    } else if (javascriptFunctionalProgrammingRandomValue == 8 && javascriptFunctionalProgrammingInputAnswer !== __WEBPACK_IMPORTED_MODULE_16__questionsAndAnswers_javascriptFunctionalProgrammingAnswers__["a" /* javascriptFunctionalProgrammingAnswerArr */][8].A8) {
        javascriptFunctionalProgrammingDisplayAnswer.innerHTML = `
    <textarea name="text" class="answer_textarea" id="input">
var s = [23, 65, 98, 5];

Array.prototype.myFilter = function(callback){
    var newArray = [];
    for (let i=0; i<this.length;i++){
    if(callback(this[i])=== true ){
    newArray.push(this[i]);
    }
    }
    return newArray;

};

var new_s = s.myFilter(function(item){
    return item % 2 === 1;
});
        </textarea>`;
        javascriptFunctionalProgrammingIncorrectValue.innerHTML = "Incorrect..";
        javascriptFunctionalProgrammingNextButton.innerHTML = `<button class="nextButton javascriptColor1" onclick=javascriptFunctionalProgrammingBtn()>Next</button>`;
        javascriptFunctionalProgrammingRemoveValue.innerHTML = "";



    } else if (javascriptFunctionalProgrammingRandomValue == 9 && javascriptFunctionalProgrammingInputAnswer == __WEBPACK_IMPORTED_MODULE_16__questionsAndAnswers_javascriptFunctionalProgrammingAnswers__["a" /* javascriptFunctionalProgrammingAnswerArr */][9].A9) {
        javascriptFunctionalProgrammingCorrectValue.innerHTML = "Correct..";
        javascriptFunctionalProgrammingDisplayAnswer.innerHTML = `
        <textarea name="text" class="answer_textarea" id="input">Good Job :) </textarea>`;
        javascriptFunctionalProgrammingNextButton.innerHTML = `<button class="nextButton javascriptColor1" onclick=javascriptFunctionalProgrammingBtn()>Next</button>`;
        javascriptFunctionalProgrammingRemoveValue.innerHTML = "";

    } else if (javascriptFunctionalProgrammingRandomValue == 9 && javascriptFunctionalProgrammingInputAnswer !== __WEBPACK_IMPORTED_MODULE_16__questionsAndAnswers_javascriptFunctionalProgrammingAnswers__["a" /* javascriptFunctionalProgrammingAnswerArr */][9].A9) {
        javascriptFunctionalProgrammingDisplayAnswer.innerHTML = `
    <textarea name="text" class="answer_textarea" id="input">
function sliceArray(anim, beginSlice, endSlice) {
    return anim.slice(beginSlice, endSlice);
}
var inputAnim = ["Cat", "Dog", "Tiger", "Zebra", "Ant"];
sliceArray(inputAnim, 1, 3);
        </textarea>`;
        javascriptFunctionalProgrammingIncorrectValue.innerHTML = "Incorrect..";
        javascriptFunctionalProgrammingNextButton.innerHTML = `<button class="nextButton javascriptColor1" onclick=javascriptFunctionalProgrammingBtn()>Next</button>`;
        javascriptFunctionalProgrammingRemoveValue.innerHTML = "";



    } else if (javascriptFunctionalProgrammingRandomValue == 10 && javascriptFunctionalProgrammingInputAnswer == __WEBPACK_IMPORTED_MODULE_16__questionsAndAnswers_javascriptFunctionalProgrammingAnswers__["a" /* javascriptFunctionalProgrammingAnswerArr */][10].A10) {
        javascriptFunctionalProgrammingCorrectValue.innerHTML = "Correct..";
        javascriptFunctionalProgrammingDisplayAnswer.innerHTML = `
        <textarea name="text" class="answer_textarea" id="input">Good Job :) </textarea>`;
        javascriptFunctionalProgrammingNextButton.innerHTML = `<button class="nextButton javascriptColor1" onclick=javascriptFunctionalProgrammingBtn()>Next</button>`;
        javascriptFunctionalProgrammingRemoveValue.innerHTML = "";

    } else if (javascriptFunctionalProgrammingRandomValue == 10 && javascriptFunctionalProgrammingInputAnswer !== __WEBPACK_IMPORTED_MODULE_16__questionsAndAnswers_javascriptFunctionalProgrammingAnswers__["a" /* javascriptFunctionalProgrammingAnswerArr */][10].A10) {
        javascriptFunctionalProgrammingDisplayAnswer.innerHTML = `
    <textarea name="text" class="answer_textarea" id="input">
function nonMutatingSplice(cities) {
    return cities.slice(0, 3); 
}
var inputCities = ["Chicago", "Delhi", "Islamabad", "London", "Berlin"];
nonMutatingSplice(inputCities);
        </textarea>`;
        javascriptFunctionalProgrammingIncorrectValue.innerHTML = "Incorrect..";
        javascriptFunctionalProgrammingNextButton.innerHTML = `<button class="nextButton javascriptColor1" onclick=javascriptFunctionalProgrammingBtn()>Next</button>`;
        javascriptFunctionalProgrammingRemoveValue.innerHTML = "";



    } else if (javascriptFunctionalProgrammingRandomValue == 11 && javascriptFunctionalProgrammingInputAnswer == __WEBPACK_IMPORTED_MODULE_16__questionsAndAnswers_javascriptFunctionalProgrammingAnswers__["a" /* javascriptFunctionalProgrammingAnswerArr */][11].A11) {
        javascriptFunctionalProgrammingCorrectValue.innerHTML = "Correct..";
        javascriptFunctionalProgrammingDisplayAnswer.innerHTML = `
        <textarea name="text" class="answer_textarea" id="input">Good Job :) </textarea>`;
        javascriptFunctionalProgrammingNextButton.innerHTML = `<button class="nextButton javascriptColor1" onclick=javascriptFunctionalProgrammingBtn()>Next</button>`;
        javascriptFunctionalProgrammingRemoveValue.innerHTML = "";

    } else if (javascriptFunctionalProgrammingRandomValue == 11 && javascriptFunctionalProgrammingInputAnswer !== __WEBPACK_IMPORTED_MODULE_16__questionsAndAnswers_javascriptFunctionalProgrammingAnswers__["a" /* javascriptFunctionalProgrammingAnswerArr */][11].A11) {
        javascriptFunctionalProgrammingDisplayAnswer.innerHTML = `
    <textarea name="text" class="answer_textarea" id="input">
function nonMutatingConcat(original, attach) {
    return original.concat(attach); 

}
var first = [1, 2, 3];
var second = [4, 5];
nonMutatingConcat(first, second);
        </textarea>`;
        javascriptFunctionalProgrammingIncorrectValue.innerHTML = "Incorrect..";
        javascriptFunctionalProgrammingNextButton.innerHTML = `<button class="nextButton javascriptColor1" onclick=javascriptFunctionalProgrammingBtn()>Next</button>`;
        javascriptFunctionalProgrammingRemoveValue.innerHTML = "";



    } else if (javascriptFunctionalProgrammingRandomValue == 12 && javascriptFunctionalProgrammingInputAnswer == __WEBPACK_IMPORTED_MODULE_16__questionsAndAnswers_javascriptFunctionalProgrammingAnswers__["a" /* javascriptFunctionalProgrammingAnswerArr */][12].A12) {
        javascriptFunctionalProgrammingCorrectValue.innerHTML = "Correct..";
        javascriptFunctionalProgrammingDisplayAnswer.innerHTML = `
        <textarea name="text" class="answer_textarea" id="input">Good Job :) </textarea>`;
        javascriptFunctionalProgrammingNextButton.innerHTML = `<button class="nextButton javascriptColor1" onclick=javascriptFunctionalProgrammingBtn()>Next</button>`;
        javascriptFunctionalProgrammingRemoveValue.innerHTML = "";

    } else if (javascriptFunctionalProgrammingRandomValue == 12 && javascriptFunctionalProgrammingInputAnswer !== __WEBPACK_IMPORTED_MODULE_16__questionsAndAnswers_javascriptFunctionalProgrammingAnswers__["a" /* javascriptFunctionalProgrammingAnswerArr */][12].A12) {
        javascriptFunctionalProgrammingDisplayAnswer.innerHTML = `
    <textarea name="text" class="answer_textarea" id="input">
function nonMutatingPush(original, newItem) {
    return original.concat(newItem);
}

var first = [1, 2, 3];
var second = [4, 5];
nonMutatingPush(first, second);
        </textarea>`;
        javascriptFunctionalProgrammingIncorrectValue.innerHTML = "Incorrect..";
        javascriptFunctionalProgrammingNextButton.innerHTML = `<button class="nextButton javascriptColor1" onclick=javascriptFunctionalProgrammingBtn()>Next</button>`;
        javascriptFunctionalProgrammingRemoveValue.innerHTML = "";



    } else if (javascriptFunctionalProgrammingRandomValue == 13 && javascriptFunctionalProgrammingInputAnswer == __WEBPACK_IMPORTED_MODULE_16__questionsAndAnswers_javascriptFunctionalProgrammingAnswers__["a" /* javascriptFunctionalProgrammingAnswerArr */][13].A13) {
        javascriptFunctionalProgrammingCorrectValue.innerHTML = "Correct..";
        javascriptFunctionalProgrammingDisplayAnswer.innerHTML = `
        <textarea name="text" class="answer_textarea" id="input">Good Job :) </textarea>`;
        javascriptFunctionalProgrammingNextButton.innerHTML = `<button class="nextButton javascriptColor1" onclick=javascriptFunctionalProgrammingBtn()>Next</button>`;
        javascriptFunctionalProgrammingRemoveValue.innerHTML = "";

    } else if (javascriptFunctionalProgrammingRandomValue == 13 && javascriptFunctionalProgrammingInputAnswer !== __WEBPACK_IMPORTED_MODULE_16__questionsAndAnswers_javascriptFunctionalProgrammingAnswers__["a" /* javascriptFunctionalProgrammingAnswerArr */][13].A13) {
        javascriptFunctionalProgrammingDisplayAnswer.innerHTML = `
    <textarea name="text" class="answer_textarea" id="input">
var watchList = [
    {  
        "Title": "Inception",
        "Year": "2010",
        "Rated": "PG-13",
        "Released": "16 Jul 2010",
        "Runtime": "148 min",
        "Genre": "Action, Adventure, Crime",
        "Director": "Christopher Nolan",
        "Writer": "Christopher Nolan",
        "Actors": "Leonardo DiCaprio, Joseph Gordon-Levitt, Ellen Page, Tom Hardy",
        "Plot": "A thief, who steals corporate secrets through use of dream-sharing technology, is given the inverse task of planting an idea into the mind of a CEO.",
        "Language": "English, Japanese, French",
        "Country": "USA, UK",
        "Awards": "Won 4 Oscars. Another 143 wins & 198 nominations.",
        "Poster": "http://ia.media-imdb.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_SX300.jpg",
        "Metascore": "74",
        "imdbRating": "8.8",
        "imdbVotes": "1,446,708",
        "imdbID": "tt1375666",
        "Type": "movie",
        "Response": "True"
    },
    {  
        "Title": "Interstellar",
        "Year": "2014",
        "Rated": "PG-13",
        "Released": "07 Nov 2014",
        "Runtime": "169 min",
        "Genre": "Adventure, Drama, Sci-Fi",
        "Director": "Christopher Nolan",
        "Writer": "Jonathan Nolan, Christopher Nolan",
        "Actors": "Ellen Burstyn, Matthew McConaughey, Mackenzie Foy, John Lithgow",
        "Plot": "A team of explorers travel through a wormhole in space in an attempt to ensure humanity's survival.",
        "Language": "English",
        "Country": "USA, UK",
        "Awards": "Won 1 Oscar. Another 39 wins & 132 nominations.",
        "Poster": "http://ia.media-imdb.com/images/M/MV5BMjIxNTU4MzY4MF5BMl5BanBnXkFtZTgwMzM4ODI3MjE@._V1_SX300.jpg",
        "Metascore": "74",
        "imdbRating": "8.6",
        "imdbVotes": "910,366",
        "imdbID": "tt0816692",
        "Type": "movie",
        "Response": "True"
    },
    {
        "Title": "The Dark Knight",
        "Year": "2008",
        "Rated": "PG-13",
        "Released": "18 Jul 2008",
        "Runtime": "152 min",
        "Genre": "Action, Adventure, Crime",
        "Director": "Christopher Nolan",
        "Writer": "Jonathan Nolan (screenplay), Christopher Nolan (screenplay), Christopher Nolan (story), David S. Goyer (story), Bob Kane (characters)",
        "Actors": "Christian Bale, Heath Ledger, Aaron Eckhart, Michael Caine",
        "Plot": "When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, the caped crusader must come to terms with one of the greatest psychological tests of his ability to fight injustice.",
        "Language": "English, Mandarin",
        "Country": "USA, UK",
        "Awards": "Won 2 Oscars. Another 146 wins & 142 nominations.",
        "Poster": "http://ia.media-imdb.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_SX300.jpg",
        "Metascore": "82",
        "imdbRating": "9.0",
        "imdbVotes": "1,652,832",
        "imdbID": "tt0468569",
        "Type": "movie",
        "Response": "True"
    },
    {  
        "Title": "Batman Begins",
        "Year": "2005",
        "Rated": "PG-13",
        "Released": "15 Jun 2005",
        "Runtime": "140 min",
        "Genre": "Action, Adventure",
        "Director": "Christopher Nolan",
        "Writer": "Bob Kane (characters), David S. Goyer (story), Christopher Nolan (screenplay), David S. Goyer (screenplay)",
        "Actors": "Christian Bale, Michael Caine, Liam Neeson, Katie Holmes",
        "Plot": "After training with his mentor, Batman begins his fight to free crime-ridden Gotham City from the corruption that Scarecrow and the League of Shadows have cast upon it.",
        "Language": "English, Urdu, Mandarin",
        "Country": "USA, UK",
        "Awards": "Nominated for 1 Oscar. Another 15 wins & 66 nominations.",
        "Poster": "http://ia.media-imdb.com/images/M/MV5BNTM3OTc0MzM2OV5BMl5BanBnXkFtZTYwNzUwMTI3._V1_SX300.jpg",
        "Metascore": "70",
        "imdbRating": "8.3",
        "imdbVotes": "972,584",
        "imdbID": "tt0372784",
        "Type": "movie",
        "Response": "True"
    },
    {
        "Title": "Avatar",
        "Year": "2009",
        "Rated": "PG-13",
        "Released": "18 Dec 2009",
        "Runtime": "162 min",
        "Genre": "Action, Adventure, Fantasy",
        "Director": "James Cameron",
        "Writer": "James Cameron",
        "Actors": "Sam Worthington, Zoe Saldana, Sigourney Weaver, Stephen Lang",
        "Plot": "A paraplegic marine dispatched to the moon Pandora on a unique mission becomes torn between following his orders and protecting the world he feels is his home.",
        "Language": "English, Spanish",
        "Country": "USA, UK",
        "Awards": "Won 3 Oscars. Another 80 wins & 121 nominations.",
        "Poster": "http://ia.media-imdb.com/images/M/MV5BMTYwOTEwNjAzMl5BMl5BanBnXkFtZTcwODc5MTUwMw@@._V1_SX300.jpg",
        "Metascore": "83",
        "imdbRating": "7.9",
        "imdbVotes": "876,575",
        "imdbID": "tt0499549",
        "Type": "movie",
        "Response": "True"
    }
];

var averageRating = watchList.filter(x => x.Director === "Christopher Nolan").map(x => Number(x.imdbRating)).reduce((x1, x2) => x1 + x2) / watchList.filter(x => x.Director === "Christopher Nolan").length;


console.log(averageRating);
        </textarea>`;
        javascriptFunctionalProgrammingIncorrectValue.innerHTML = "Incorrect..";
        javascriptFunctionalProgrammingNextButton.innerHTML = `<button class="nextButton javascriptColor1" onclick=javascriptFunctionalProgrammingBtn()>Next</button>`;
        javascriptFunctionalProgrammingRemoveValue.innerHTML = "";



    } else if (javascriptFunctionalProgrammingRandomValue == 14 && javascriptFunctionalProgrammingInputAnswer == __WEBPACK_IMPORTED_MODULE_16__questionsAndAnswers_javascriptFunctionalProgrammingAnswers__["a" /* javascriptFunctionalProgrammingAnswerArr */][14].A14) {
        javascriptFunctionalProgrammingCorrectValue.innerHTML = "Correct..";
        javascriptFunctionalProgrammingDisplayAnswer.innerHTML = `
        <textarea name="text" class="answer_textarea" id="input">Good Job :) </textarea>`;
        javascriptFunctionalProgrammingNextButton.innerHTML = `<button class="nextButton javascriptColor1" onclick=javascriptFunctionalProgrammingBtn()>Next</button>`;
        javascriptFunctionalProgrammingRemoveValue.innerHTML = "";

    } else if (javascriptFunctionalProgrammingRandomValue == 14 && javascriptFunctionalProgrammingInputAnswer !== __WEBPACK_IMPORTED_MODULE_16__questionsAndAnswers_javascriptFunctionalProgrammingAnswers__["a" /* javascriptFunctionalProgrammingAnswerArr */][14].A14) {
        javascriptFunctionalProgrammingDisplayAnswer.innerHTML = `
    <textarea name="text" class="answer_textarea" id="input">
function alphabeticalOrder(arr) {
    return arr.sort(function(a, b) {
        return a === b ? 0 : a > b ? 1 : -1;
    });
}
alphabeticalOrder(["a", "d", "c", "a", "z", "g"]);
        </textarea>`;
        javascriptFunctionalProgrammingIncorrectValue.innerHTML = "Incorrect..";
        javascriptFunctionalProgrammingNextButton.innerHTML = `<button class="nextButton javascriptColor1" onclick=javascriptFunctionalProgrammingBtn()>Next</button>`;
        javascriptFunctionalProgrammingRemoveValue.innerHTML = "";



    } else if (javascriptFunctionalProgrammingRandomValue == 15 && javascriptFunctionalProgrammingInputAnswer == __WEBPACK_IMPORTED_MODULE_16__questionsAndAnswers_javascriptFunctionalProgrammingAnswers__["a" /* javascriptFunctionalProgrammingAnswerArr */][15].A15) {
        javascriptFunctionalProgrammingCorrectValue.innerHTML = "Correct..";
        javascriptFunctionalProgrammingDisplayAnswer.innerHTML = `
        <textarea name="text" class="answer_textarea" id="input">Good Job :) </textarea>`;
        javascriptFunctionalProgrammingNextButton.innerHTML = `<button class="nextButton javascriptColor1" onclick=javascriptFunctionalProgrammingBtn()>Next</button>`;
        javascriptFunctionalProgrammingRemoveValue.innerHTML = "";

    } else if (javascriptFunctionalProgrammingRandomValue == 15 && javascriptFunctionalProgrammingInputAnswer !== __WEBPACK_IMPORTED_MODULE_16__questionsAndAnswers_javascriptFunctionalProgrammingAnswers__["a" /* javascriptFunctionalProgrammingAnswerArr */][15].A15) {
        javascriptFunctionalProgrammingDisplayAnswer.innerHTML = `
    <textarea name="text" class="answer_textarea" id="input">
var globalArray = [5, 6, 3, 2, 9];
function nonMutatingSort(arr) {
    // Add your code below this line
    return [].concat(arr).sort(function(a, b) {
    return a - b;
    });
}
nonMutatingSort(globalArray);
        </textarea>`;
        javascriptFunctionalProgrammingIncorrectValue.innerHTML = "Incorrect..";
        javascriptFunctionalProgrammingNextButton.innerHTML = `<button class="nextButton javascriptColor1" onclick=javascriptFunctionalProgrammingBtn()>Next</button>`;
        javascriptFunctionalProgrammingRemoveValue.innerHTML = "";



    } else if (javascriptFunctionalProgrammingRandomValue == 16 && javascriptFunctionalProgrammingInputAnswer == __WEBPACK_IMPORTED_MODULE_16__questionsAndAnswers_javascriptFunctionalProgrammingAnswers__["a" /* javascriptFunctionalProgrammingAnswerArr */][16].A16) {
        javascriptFunctionalProgrammingCorrectValue.innerHTML = "Correct..";
        javascriptFunctionalProgrammingDisplayAnswer.innerHTML = `
        <textarea name="text" class="answer_textarea" id="input">Good Job :) </textarea>`;
        javascriptFunctionalProgrammingNextButton.innerHTML = `<button class="nextButton javascriptColor1" onclick=javascriptFunctionalProgrammingBtn()>Next</button>`;
        javascriptFunctionalProgrammingRemoveValue.innerHTML = "";

    } else if (javascriptFunctionalProgrammingRandomValue == 16 && javascriptFunctionalProgrammingInputAnswer !== __WEBPACK_IMPORTED_MODULE_16__questionsAndAnswers_javascriptFunctionalProgrammingAnswers__["a" /* javascriptFunctionalProgrammingAnswerArr */][16].A16) {
        javascriptFunctionalProgrammingDisplayAnswer.innerHTML = `
    <textarea name="text" class="answer_textarea" id="input">
function splitify(str) {
    return str.split(/\W/);
}
splitify("Hello World,I-am code");
        </textarea>`;
        javascriptFunctionalProgrammingIncorrectValue.innerHTML = "Incorrect..";
        javascriptFunctionalProgrammingNextButton.innerHTML = `<button class="nextButton javascriptColor1" onclick=javascriptFunctionalProgrammingBtn()>Next</button>`;
        javascriptFunctionalProgrammingRemoveValue.innerHTML = "";



    } else if (javascriptFunctionalProgrammingRandomValue == 17 && javascriptFunctionalProgrammingInputAnswer == __WEBPACK_IMPORTED_MODULE_16__questionsAndAnswers_javascriptFunctionalProgrammingAnswers__["a" /* javascriptFunctionalProgrammingAnswerArr */][17].A17) {
        javascriptFunctionalProgrammingCorrectValue.innerHTML = "Correct..";
        javascriptFunctionalProgrammingDisplayAnswer.innerHTML = `
        <textarea name="text" class="answer_textarea" id="input">Good Job :) </textarea>`;
        javascriptFunctionalProgrammingNextButton.innerHTML = `<button class="nextButton javascriptColor1" onclick=javascriptFunctionalProgrammingBtn()>Next</button>`;
        javascriptFunctionalProgrammingRemoveValue.innerHTML = "";

    } else if (javascriptFunctionalProgrammingRandomValue == 17 && javascriptFunctionalProgrammingInputAnswer !== __WEBPACK_IMPORTED_MODULE_16__questionsAndAnswers_javascriptFunctionalProgrammingAnswers__["a" /* javascriptFunctionalProgrammingAnswerArr */][17].A17) {
        javascriptFunctionalProgrammingDisplayAnswer.innerHTML = `
    <textarea name="text" class="answer_textarea" id="input">
function sentensify(str) {
    return str.split(/\W/).join(' '); 
}
sentensify("May-the-force-be-with-you");
        </textarea>`;
        javascriptFunctionalProgrammingIncorrectValue.innerHTML = "Incorrect..";
        javascriptFunctionalProgrammingNextButton.innerHTML = `<button class="nextButton javascriptColor1" onclick=javascriptFunctionalProgrammingBtn()>Next</button>`;
        javascriptFunctionalProgrammingRemoveValue.innerHTML = "";



    } else if (javascriptFunctionalProgrammingRandomValue == 18 && javascriptFunctionalProgrammingInputAnswer == __WEBPACK_IMPORTED_MODULE_16__questionsAndAnswers_javascriptFunctionalProgrammingAnswers__["a" /* javascriptFunctionalProgrammingAnswerArr */][18].A18) {
        javascriptFunctionalProgrammingCorrectValue.innerHTML = "Correct..";
        javascriptFunctionalProgrammingDisplayAnswer.innerHTML = `
        <textarea name="text" class="answer_textarea" id="input">Good Job :) </textarea>`;
        javascriptFunctionalProgrammingNextButton.innerHTML = `<button class="nextButton javascriptColor1" onclick=javascriptFunctionalProgrammingBtn()>Next</button>`;
        javascriptFunctionalProgrammingRemoveValue.innerHTML = "";

    } else if (javascriptFunctionalProgrammingRandomValue == 18 && javascriptFunctionalProgrammingInputAnswer !== __WEBPACK_IMPORTED_MODULE_16__questionsAndAnswers_javascriptFunctionalProgrammingAnswers__["a" /* javascriptFunctionalProgrammingAnswerArr */][18].A18) {
        javascriptFunctionalProgrammingDisplayAnswer.innerHTML = `
    <textarea name="text" class="answer_textarea" id="input">
var globalTitle = "Winter Is Coming";

function urlSlug(title) {
    return title.toLowerCase().trim().split(/\s+/).join('-');
}
var winterComing = urlSlug(globalTitle); 
        </textarea>`;
        javascriptFunctionalProgrammingIncorrectValue.innerHTML = "Incorrect..";
        javascriptFunctionalProgrammingNextButton.innerHTML = `<button class="nextButton javascriptColor1" onclick=javascriptFunctionalProgrammingBtn()>Next</button>`;
        javascriptFunctionalProgrammingRemoveValue.innerHTML = "";



    } else if (javascriptFunctionalProgrammingRandomValue == 19 && javascriptFunctionalProgrammingInputAnswer == __WEBPACK_IMPORTED_MODULE_16__questionsAndAnswers_javascriptFunctionalProgrammingAnswers__["a" /* javascriptFunctionalProgrammingAnswerArr */][19].A19) {
        javascriptFunctionalProgrammingCorrectValue.innerHTML = "Correct..";
        javascriptFunctionalProgrammingDisplayAnswer.innerHTML = `
        <textarea name="text" class="answer_textarea" id="input">Good Job :) </textarea>`;
        javascriptFunctionalProgrammingNextButton.innerHTML = `<button class="nextButton javascriptColor1" onclick=javascriptFunctionalProgrammingBtn()>Next</button>`;
        javascriptFunctionalProgrammingRemoveValue.innerHTML = "";

    } else if (javascriptFunctionalProgrammingRandomValue == 19 && javascriptFunctionalProgrammingInputAnswer !== __WEBPACK_IMPORTED_MODULE_16__questionsAndAnswers_javascriptFunctionalProgrammingAnswers__["a" /* javascriptFunctionalProgrammingAnswerArr */][19].A19) {
        javascriptFunctionalProgrammingDisplayAnswer.innerHTML = `
    <textarea name="text" class="answer_textarea" id="input">
function checkPositive(arr) {
    return arr.every(function(value) {
        return value > 0;
    });
}
checkPositive([1, 2, 3, -4, 5]);
          </textarea>`;
        javascriptFunctionalProgrammingIncorrectValue.innerHTML = "Incorrect..";
        javascriptFunctionalProgrammingNextButton.innerHTML = `<button class="nextButton javascriptColor1" onclick=javascriptFunctionalProgrammingBtn()>Next</button>`;
        javascriptFunctionalProgrammingRemoveValue.innerHTML = "";



    } else if (javascriptFunctionalProgrammingRandomValue == 20 && javascriptFunctionalProgrammingInputAnswer == __WEBPACK_IMPORTED_MODULE_16__questionsAndAnswers_javascriptFunctionalProgrammingAnswers__["a" /* javascriptFunctionalProgrammingAnswerArr */][20].A20) {
        javascriptFunctionalProgrammingCorrectValue.innerHTML = "Correct..";
        javascriptFunctionalProgrammingDisplayAnswer.innerHTML = `
        <textarea name="text" class="answer_textarea" id="input">Good Job :) </textarea>`;
        javascriptFunctionalProgrammingNextButton.innerHTML = `<button class="nextButton javascriptColor1" onclick=javascriptFunctionalProgrammingBtn()>Next</button>`;
        javascriptFunctionalProgrammingRemoveValue.innerHTML = "";

    } else if (javascriptFunctionalProgrammingRandomValue == 20 && javascriptFunctionalProgrammingInputAnswer !== __WEBPACK_IMPORTED_MODULE_16__questionsAndAnswers_javascriptFunctionalProgrammingAnswers__["a" /* javascriptFunctionalProgrammingAnswerArr */][20].A20) {
        javascriptFunctionalProgrammingDisplayAnswer.innerHTML = `
    <textarea name="text" class="answer_textarea" id="input">
function checkPositive(arr) {
    return arr.some((elem) => elem > 0);
}
checkPositive([1, 2, 3, -4, 5]);
          </textarea>`;
        javascriptFunctionalProgrammingIncorrectValue.innerHTML = "Incorrect..";
        javascriptFunctionalProgrammingNextButton.innerHTML = `<button class="nextButton javascriptColor1" onclick=javascriptFunctionalProgrammingBtn()>Next</button>`;
        javascriptFunctionalProgrammingRemoveValue.innerHTML = "";



    } else if (javascriptFunctionalProgrammingRandomValue == 21 && javascriptFunctionalProgrammingInputAnswer == __WEBPACK_IMPORTED_MODULE_16__questionsAndAnswers_javascriptFunctionalProgrammingAnswers__["a" /* javascriptFunctionalProgrammingAnswerArr */][21].A21) {
        javascriptFunctionalProgrammingCorrectValue.innerHTML = "Correct..";
        javascriptFunctionalProgrammingDisplayAnswer.innerHTML = `
        <textarea name="text" class="answer_textarea" id="input">Good Job :) </textarea>`;
        javascriptFunctionalProgrammingNextButton.innerHTML = `<button class="nextButton javascriptColor1" onclick=javascriptFunctionalProgrammingBtn()>Next</button>`;
        javascriptFunctionalProgrammingRemoveValue.innerHTML = "";

    } else if (javascriptFunctionalProgrammingRandomValue == 21 && javascriptFunctionalProgrammingInputAnswer !== __WEBPACK_IMPORTED_MODULE_16__questionsAndAnswers_javascriptFunctionalProgrammingAnswers__["a" /* javascriptFunctionalProgrammingAnswerArr */][21].A21) {
        javascriptFunctionalProgrammingDisplayAnswer.innerHTML = `
    <textarea name="text" class="answer_textarea" id="input">
function add(x) {
    return function(y) {
        return function(z) {
        return x + y + z;
        }
    }
}
add(10)(20)(30);
          </textarea>`;
        javascriptFunctionalProgrammingIncorrectValue.innerHTML = "Incorrect..";
        javascriptFunctionalProgrammingNextButton.innerHTML = `<button class="nextButton javascriptColor1" onclick=javascriptFunctionalProgrammingBtn()>Next</button>`;
        javascriptFunctionalProgrammingRemoveValue.innerHTML = "";



    } else {
        javascriptFunctionalProgrammingIncorrectValue.innerHTML = "Incorrect..";
        javascriptFunctionalProgrammingNextButton.innerHTML = `<button class="nextButton javascriptColor1" onclick=javascriptFunctionalProgrammingBtn()>Next</button>`;
        javascriptFunctionalProgrammingRemoveValue.innerHTML = "";
    }

}
window.javascriptFunctionalProgrammingSubmit = javascriptFunctionalProgrammingSubmit; /* to make submit global*/

function javascriptFunctionalProgrammingButton() {
    javascriptFunctionalProgrammingTest = document.getElementById("javascriptFunctionalProgrammingAddedQuestion").innerHTML = __WEBPACK_IMPORTED_MODULE_17__questionsAndAnswers_javascriptFunctionalProgrammingQuestions__["a" /* javascriptFunctionalProgrammingQuestionArr */][javascriptFunctionalProgrammingRandomValue]; /* giving random question to html */

    return javascriptFunctionalProgrammingTest;
}
window.javascriptFunctionalProgrammingButton = javascriptFunctionalProgrammingButton;

function javascriptFunctionalProgrammingShowTest() {
    var javascriptFunctionalProgrammingInputBox = document.getElementById("javascriptFunctionalProgrammingRemove").style.display = "block";
    return javascriptFunctionalProgrammingInputBox;
}
window.javascriptFunctionalProgrammingShowTest = javascriptFunctionalProgrammingShowTest;

function javascriptFunctionalProgrammingBtn() {
    javascriptFunctionalProgrammingRandomValue = Math.floor(Math.random() * __WEBPACK_IMPORTED_MODULE_17__questionsAndAnswers_javascriptFunctionalProgrammingQuestions__["a" /* javascriptFunctionalProgrammingQuestionArr */].length); /* buton next in html to make a next random question*/
    document.getElementById("javascriptFunctionalProgrammingAddedQuestion").innerHTML = __WEBPACK_IMPORTED_MODULE_17__questionsAndAnswers_javascriptFunctionalProgrammingQuestions__["a" /* javascriptFunctionalProgrammingQuestionArr */][javascriptFunctionalProgrammingRandomValue]; /* giving random question to html */
    document.getElementById("javascriptFunctionalProgrammingElementButton").innerHTML = "";/* to clean javascriptFunctionalProgrammingElementButton*/
    document.getElementById("javascriptFunctionalProgrammingRemove").innerHTML = `<textarea name="text" class="answer_textarea" id="input"></textarea></br>
      <button class="answer_submit javascriptColor1" id = "javascriptFunctionalProgrammingStartButton" onclick="javascriptFunctionalProgrammingSubmit()">Submit</button>`;/* to create next text area and Submit button. */
    document.getElementById("javascriptFunctionalProgrammingCheckingAnswer").innerHTML = "";
    document.getElementById("javascriptFunctionalProgrammingShowingAnswer").innerHTML = "";
}
window.javascriptFunctionalProgrammingBtn = javascriptFunctionalProgrammingBtn;/* to make submit global*/























































var javascriptIntermedAlgScrRandomValue = Math.floor(Math.random() * javascriptIntermedAlgScrQuestionArr.length); /* taking random question from htmlQuestionArr*/


function javascriptIntermedAlgScrSubmit() { /* function for html submit button*/

    var javascriptIntermedAlgScrInputAnswer = input.value.replace(/\s+/g, ``); /*replace(/\s+/g, `` is removing all spaces. Avoid checking all the spaces to compare text*/
    var javascriptIntermedAlgScrCorrectValue = document.getElementById("javascriptIntermedAlgScrCheckingAnswer"); /* making getElementById code shorter*/
    var javascriptIntermedAlgScrIncorrectValue = document.getElementById("javascriptIntermedAlgScrCheckingAnswer");
    var javascriptIntermedAlgScrDisplayAnswer = document.getElementById("javascriptIntermedAlgScrShowingAnswer");
    var javascriptIntermedAlgScrNextButton = document.getElementById("javascriptIntermedAlgScrElementButton");
    var javascriptIntermedAlgScrRemoveValue = document.getElementById("javascriptIntermedAlgScrRemove");

    if (javascriptIntermedAlgScrRandomValue == 0 && javascriptIntermedAlgScrInputAnswer == javascriptIntermedAlgScrAnswerArr[0].A0) { /* checking if javascriptIntermedAlgScrRandomValue is 0 and if putting answer the same as javascriptIntermedAlgScrAnswerArr*//*A0 is just that I can track answer numbers when adding questions and answers*/
        javascriptIntermedAlgScrCorrectValue.innerHTML = "Correct..";
        javascriptIntermedAlgScrDisplayAnswer.innerHTML = `
        <textarea name="text" class="answer_textarea" id="input">Good Job :) </textarea>`;
        javascriptIntermedAlgScrNextButton.innerHTML = `<button class="nextButton javascriptColor1" onclick=javascriptIntermedAlgScrBtn()>Next</button>`; /* creating next button with javascriptIntermedAlgScrBtn()function*/
        javascriptIntermedAlgScrRemoveValue.innerHTML = "";/* removing in html answer*/



    } else if (javascriptIntermedAlgScrRandomValue == 0 && javascriptIntermedAlgScrInputAnswer !== javascriptIntermedAlgScrAnswerArr[0].A0) {/*  if random value not == then giving then display the answere.*/
        javascriptIntermedAlgScrDisplayAnswer.innerHTML = `
    <textarea name="text" class="answer_textarea" id="input">
function sumAll(arr) {
    var max = Math.max(arr[0], arr[1]);
    var min = Math.min(arr[0], arr[1]);
    var temp = 0;
    for (var i=min; i <= max; i++){
        temp += i;
    }
    return(temp);
}

sumAll([1, 4]);
        </textarea>`;
        javascriptIntermedAlgScrIncorrectValue.innerHTML = "Incorrect..";
        javascriptIntermedAlgScrNextButton.innerHTML = `<button class="nextButton javascriptColor1" onclick=javascriptIntermedAlgScrBtn()>Next</button>`;
        javascriptIntermedAlgScrRemoveValue.innerHTML = "";



    } else if (javascriptIntermedAlgScrRandomValue == 1 && javascriptIntermedAlgScrInputAnswer == javascriptIntermedAlgScrAnswerArr[1].A1) {
        javascriptIntermedAlgScrCorrectValue.innerHTML = "Correct..";
        javascriptIntermedAlgScrDisplayAnswer.innerHTML = `
        <textarea name="text" class="answer_textarea" id="input">Good Job :) </textarea>`;
        javascriptIntermedAlgScrNextButton.innerHTML = `<button class="nextButton javascriptColor1" onclick=javascriptIntermedAlgScrBtn()>Next</button>`;
        javascriptIntermedAlgScrRemoveValue.innerHTML = "";

    } else if (javascriptIntermedAlgScrRandomValue == 1 && javascriptIntermedAlgScrInputAnswer !== javascriptIntermedAlgScrAnswerArr[1].A1) {
        javascriptIntermedAlgScrDisplayAnswer.innerHTML = `
        <textarea name="text" class="answer_textarea" id="input">
function sumAll(arr) {

    var sortedArr = arr.sort((a,b) => a-b);
    var firstNum = arr[0];
    var lastNum = arr[1];

    var sum = (lastNum - firstNum + 1) * (firstNum + lastNum) / 2;
    return sum;
}
          </textarea>`;
        javascriptIntermedAlgScrIncorrectValue.innerHTML = "Incorrect..";
        javascriptIntermedAlgScrNextButton.innerHTML = `<button class="nextButton javascriptColor1" onclick=javascriptIntermedAlgScrBtn()>Next</button>`;
        javascriptIntermedAlgScrRemoveValue.innerHTML = "";



    } else if (javascriptIntermedAlgScrRandomValue == 2 && javascriptIntermedAlgScrInputAnswer == javascriptIntermedAlgScrAnswerArr[2].A2) {
        javascriptIntermedAlgScrCorrectValue.innerHTML = "Correct..";
        javascriptIntermedAlgScrDisplayAnswer.innerHTML = `
        <textarea name="text" class="answer_textarea" id="input">Good Job :) </textarea>`;
        javascriptIntermedAlgScrNextButton.innerHTML = `<button class="nextButton javascriptColor1" onclick=javascriptIntermedAlgScrBtn()>Next</button>`;
        javascriptIntermedAlgScrRemoveValue.innerHTML = "";

    } else if (javascriptIntermedAlgScrRandomValue == 2 && javascriptIntermedAlgScrInputAnswer !== javascriptIntermedAlgScrAnswerArr[2].A2) {
        javascriptIntermedAlgScrDisplayAnswer.innerHTML = `
    <textarea name="text" class="answer_textarea" id="input">
function sumAll(arr) {
    var sum = 0;
    for (var i = Math.min(...arr); i <= Math.max(...arr); i++){
        sum += i;
    }
    return sum;
}

sumAll([1, 4]);
          </textarea>`;
        javascriptIntermedAlgScrIncorrectValue.innerHTML = "Incorrect..";
        javascriptIntermedAlgScrNextButton.innerHTML = `<button class="nextButton javascriptColor1" onclick=javascriptIntermedAlgScrBtn()>Next</button>`;
        javascriptIntermedAlgScrRemoveValue.innerHTML = "";



    } else if (javascriptIntermedAlgScrRandomValue == 3 && javascriptIntermedAlgScrInputAnswer == javascriptIntermedAlgScrAnswerArr[3].A3) {
        javascriptIntermedAlgScrCorrectValue.innerHTML = "Correct..";
        javascriptIntermedAlgScrDisplayAnswer.innerHTML = `
        <textarea name="text" class="answer_textarea" id="input">Good Job :) </textarea>`;
        javascriptIntermedAlgScrNextButton.innerHTML = `<button class="nextButton javascriptColor1" onclick=javascriptIntermedAlgScrBtn()>Next</button>`;
        javascriptIntermedAlgScrRemoveValue.innerHTML = "";

    } else if (javascriptIntermedAlgScrRandomValue == 3 && javascriptIntermedAlgScrInputAnswer !== javascriptIntermedAlgScrAnswerArr[3].A3) {
        javascriptIntermedAlgScrDisplayAnswer.innerHTML = `
    <textarea name="text" class="answer_textarea" id="input">
function diffArray(arr1, arr2) {
    var newArr = [];

    function onlyInFirst(first, second) {
        for (var i=0;i<first.length;i++) {
            if (second.indexOf(first[i]) === -1) {
                newArr.push(first[i]);
            }
        }
    }

    onlyInFirst(arr1, arr2);
    onlyInFirst(arr2, arr1);

    return newArr;
}

diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]);

        </textarea>`;
        javascriptIntermedAlgScrIncorrectValue.innerHTML = "Incorrect..";
        javascriptIntermedAlgScrNextButton.innerHTML = `<button class="nextButton javascriptColor1" onclick=javascriptIntermedAlgScrBtn()>Next</button>`;
        javascriptIntermedAlgScrRemoveValue.innerHTML = "";
        


    } else if (javascriptIntermedAlgScrRandomValue == 4 && javascriptIntermedAlgScrInputAnswer == javascriptIntermedAlgScrAnswerArr[4].A4) {
        javascriptIntermedAlgScrCorrectValue.innerHTML = "Correct..";
        javascriptIntermedAlgScrDisplayAnswer.innerHTML = `
        <textarea name="text" class="answer_textarea" id="input">Good Job :) </textarea>`;
        javascriptIntermedAlgScrNextButton.innerHTML = `<button class="nextButton javascriptColor1" onclick=javascriptIntermedAlgScrBtn()>Next</button>`;
        javascriptIntermedAlgScrRemoveValue.innerHTML = "";

    } else if (javascriptIntermedAlgScrRandomValue == 4 && javascriptIntermedAlgScrInputAnswer !== javascriptIntermedAlgScrAnswerArr[4].A4) {
        javascriptIntermedAlgScrDisplayAnswer.innerHTML = `
    <textarea name="text" class="answer_textarea" id="input">
function diffArray(arr1, arr2) {
    return arr1
        .concat(arr2)
        .filter(
            item => !arr1.includes(item) || !arr2.includes(item)
        )
}

diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]);
        </textarea>`;
        javascriptIntermedAlgScrIncorrectValue.innerHTML = "Incorrect..";
        javascriptIntermedAlgScrNextButton.innerHTML = `<button class="nextButton javascriptColor1" onclick=javascriptIntermedAlgScrBtn()>Next</button>`;
        javascriptIntermedAlgScrRemoveValue.innerHTML = "";



    } else if (javascriptIntermedAlgScrRandomValue == 5 && javascriptIntermedAlgScrInputAnswer == javascriptIntermedAlgScrAnswerArr[5].A5) {
        javascriptIntermedAlgScrCorrectValue.innerHTML = "Correct..";
        javascriptIntermedAlgScrDisplayAnswer.innerHTML = `
        <textarea name="text" class="answer_textarea" id="input">Good Job :) </textarea>`;
        javascriptIntermedAlgScrNextButton.innerHTML = `<button class="nextButton javascriptColor1" onclick=javascriptIntermedAlgScrBtn()>Next</button>`;
        javascriptIntermedAlgScrRemoveValue.innerHTML = "";

    } else if (javascriptIntermedAlgScrRandomValue == 5 && javascriptIntermedAlgScrInputAnswer !== javascriptIntermedAlgScrAnswerArr[5].A5) {
        javascriptIntermedAlgScrDisplayAnswer.innerHTML = `
    <textarea name="text" class="answer_textarea" id="input">
function diffArray(arr1, arr2) {
    return arr1
        .filter(el => !arr2.includes(el))
        .concat(
        arr2.filter(el => !arr1.includes(el))
        )
}

diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]);
        </textarea>`;
        javascriptIntermedAlgScrIncorrectValue.innerHTML = "Incorrect..";
        javascriptIntermedAlgScrNextButton.innerHTML = `<button class="nextButton javascriptColor1" onclick=javascriptIntermedAlgScrBtn()>Next</button>`;
        javascriptIntermedAlgScrRemoveValue.innerHTML = "";



    } else if (javascriptIntermedAlgScrRandomValue == 6 && javascriptIntermedAlgScrInputAnswer == javascriptIntermedAlgScrAnswerArr[6].A6) {
        javascriptIntermedAlgScrCorrectValue.innerHTML = "Correct..";
        javascriptIntermedAlgScrDisplayAnswer.innerHTML = `
        <textarea name="text" class="answer_textarea" id="input">Good Job :) </textarea>`;
        javascriptIntermedAlgScrNextButton.innerHTML = `<button class="nextButton javascriptColor1" onclick=javascriptIntermedAlgScrBtn()>Next</button>`;
        javascriptIntermedAlgScrRemoveValue.innerHTML = "";

    } else if (javascriptIntermedAlgScrRandomValue == 6 && javascriptIntermedAlgScrInputAnswer !== javascriptIntermedAlgScrAnswerArr[6].A6) {
        javascriptIntermedAlgScrDisplayAnswer.innerHTML = `
    <textarea name="text" class="answer_textarea" id="input">
function diffArray(arr1, arr2) {
    return [
        ...diff(arr1, arr2),
        ...diff(arr2, arr1)
    ]

    function diff(a, b) {
        return a.filter(item => b.indexOf(item) === -1);
    }
}
        </textarea>`;
        javascriptIntermedAlgScrIncorrectValue.innerHTML = "Incorrect..";
        javascriptIntermedAlgScrNextButton.innerHTML = `<button class="nextButton javascriptColor1" onclick=javascriptIntermedAlgScrBtn()>Next</button>`;
        javascriptIntermedAlgScrRemoveValue.innerHTML = "";



    } else if (javascriptIntermedAlgScrRandomValue == 7 && javascriptIntermedAlgScrInputAnswer == javascriptIntermedAlgScrAnswerArr[7].A7) {
        javascriptIntermedAlgScrCorrectValue.innerHTML = "Correct..";
        javascriptIntermedAlgScrDisplayAnswer.innerHTML = `
        <textarea name="text" class="answer_textarea" id="input">Good Job :) </textarea>`;
        javascriptIntermedAlgScrNextButton.innerHTML = `<button class="nextButton javascriptColor1" onclick=javascriptIntermedAlgScrBtn()>Next</button>`;
        javascriptIntermedAlgScrRemoveValue.innerHTML = "";

    } else if (javascriptIntermedAlgScrRandomValue == 7 && javascriptIntermedAlgScrInputAnswer !== javascriptIntermedAlgScrAnswerArr[7].A7) {
        javascriptIntermedAlgScrDisplayAnswer.innerHTML = `
    <textarea name="text" class="answer_textarea" id="input">
function destroyer(arr) {
    var args = Array.prototype.slice.call(arguments);

    for (var i = 0; i < arr.length; i++) {
        for (var j = 0; j < args.length; j++) {
            if (arr[i] === args[j]) {
                delete arr[i];
            }
        }
    }
    return arr.filter(Boolean);
} 

        </textarea>`;
        javascriptIntermedAlgScrIncorrectValue.innerHTML = "Incorrect..";
        javascriptIntermedAlgScrNextButton.innerHTML = `<button class="nextButton javascriptColor1" onclick=javascriptIntermedAlgScrBtn()>Next</button>`;
        javascriptIntermedAlgScrRemoveValue.innerHTML = "";



    } else if (javascriptIntermedAlgScrRandomValue == 8 && javascriptIntermedAlgScrInputAnswer == javascriptIntermedAlgScrAnswerArr[8].A8) {
        javascriptIntermedAlgScrCorrectValue.innerHTML = "Correct..";
        javascriptIntermedAlgScrDisplayAnswer.innerHTML = `
        <textarea name="text" class="answer_textarea" id="input">Good Job :) </textarea>`;
        javascriptIntermedAlgScrNextButton.innerHTML = `<button class="nextButton javascriptColor1" onclick=javascriptIntermedAlgScrBtn()>Next</button>`;
        javascriptIntermedAlgScrRemoveValue.innerHTML = "";

    } else if (javascriptIntermedAlgScrRandomValue == 8 && javascriptIntermedAlgScrInputAnswer !== javascriptIntermedAlgScrAnswerArr[8].A8) {
        javascriptIntermedAlgScrDisplayAnswer.innerHTML = `
    <textarea name="text" class="answer_textarea" id="input">
function destroyer(arr) {
    var args = Array.from(arguments).slice(1);
    return arr.filter(function(val) {
        return !args.includes(val);
    });
}
        </textarea>`;
        javascriptIntermedAlgScrIncorrectValue.innerHTML = "Incorrect..";
        javascriptIntermedAlgScrNextButton.innerHTML = `<button class="nextButton javascriptColor1" onclick=javascriptIntermedAlgScrBtn()>Next</button>`;
        javascriptIntermedAlgScrRemoveValue.innerHTML = "";



    } else if (javascriptIntermedAlgScrRandomValue == 9 && javascriptIntermedAlgScrInputAnswer == javascriptIntermedAlgScrAnswerArr[9].A9) {
        javascriptIntermedAlgScrCorrectValue.innerHTML = "Correct..";
        javascriptIntermedAlgScrDisplayAnswer.innerHTML = `
        <textarea name="text" class="answer_textarea" id="input">Good Job :) </textarea>`;
        javascriptIntermedAlgScrNextButton.innerHTML = `<button class="nextButton javascriptColor1" onclick=javascriptIntermedAlgScrBtn()>Next</button>`;
        javascriptIntermedAlgScrRemoveValue.innerHTML = "";

    } else if (javascriptIntermedAlgScrRandomValue == 9 && javascriptIntermedAlgScrInputAnswer !== javascriptIntermedAlgScrAnswerArr[9].A9) {
        javascriptIntermedAlgScrDisplayAnswer.innerHTML = `
    <textarea name="text" class="answer_textarea" id="input">
const destroyer = (arr, ...args) => arr.filter(i => !args.includes(i)); 
        </textarea>`;
        javascriptIntermedAlgScrIncorrectValue.innerHTML = "Incorrect..";
        javascriptIntermedAlgScrNextButton.innerHTML = `<button class="nextButton javascriptColor1" onclick=javascriptIntermedAlgScrBtn()>Next</button>`;
        javascriptIntermedAlgScrRemoveValue.innerHTML = "";



    } else if (javascriptIntermedAlgScrRandomValue == 10 && javascriptIntermedAlgScrInputAnswer == javascriptIntermedAlgScrAnswerArr[10].A10) {
        javascriptIntermedAlgScrCorrectValue.innerHTML = "Correct..";
        javascriptIntermedAlgScrDisplayAnswer.innerHTML = `
        <textarea name="text" class="answer_textarea" id="input">Good Job :) </textarea>`;
        javascriptIntermedAlgScrNextButton.innerHTML = `<button class="nextButton javascriptColor1" onclick=javascriptIntermedAlgScrBtn()>Next</button>`;
        javascriptIntermedAlgScrRemoveValue.innerHTML = "";

    } else if (javascriptIntermedAlgScrRandomValue == 10 && javascriptIntermedAlgScrInputAnswer !== javascriptIntermedAlgScrAnswerArr[10].A10) {
        javascriptIntermedAlgScrDisplayAnswer.innerHTML = `
    <textarea name="text" class="answer_textarea" id="input">
function whatIsInAName(collection, source) {
var srcKeys = Object.keys(source);

return collection.filter(function (obj) {
        for(var i = 0; i < srcKeys.length; i++) {
            if(!obj.hasOwnProperty(srcKeys[i]) || obj[srcKeys[i]] !== source[srcKeys[i]]) {
                return false;
            }
        }
        return true;
    });
}
whatIsInAName([{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], { last: "Capulet" }); 
        </textarea>`;
        javascriptIntermedAlgScrIncorrectValue.innerHTML = "Incorrect..";
        javascriptIntermedAlgScrNextButton.innerHTML = `<button class="nextButton javascriptColor1" onclick=javascriptIntermedAlgScrBtn()>Next</button>`;
        javascriptIntermedAlgScrRemoveValue.innerHTML = "";



    } else if (javascriptIntermedAlgScrRandomValue == 11 && javascriptIntermedAlgScrInputAnswer == javascriptIntermedAlgScrAnswerArr[11].A11) {
        javascriptIntermedAlgScrCorrectValue.innerHTML = "Correct..";
        javascriptIntermedAlgScrDisplayAnswer.innerHTML = `
        <textarea name="text" class="answer_textarea" id="input">Good Job :) </textarea>`;
        javascriptIntermedAlgScrNextButton.innerHTML = `<button class="nextButton javascriptColor1" onclick=javascriptIntermedAlgScrBtn()>Next</button>`;
        javascriptIntermedAlgScrRemoveValue.innerHTML = "";

    } else if (javascriptIntermedAlgScrRandomValue == 11 && javascriptIntermedAlgScrInputAnswer !== javascriptIntermedAlgScrAnswerArr[11].A11) {
        javascriptIntermedAlgScrDisplayAnswer.innerHTML = `
    <textarea name="text" class="answer_textarea" id="input">
function whatIsInAName(collection, source) {
    var srcKeys = Object.keys(source);

    return collection.filter(function (obj) {
        return srcKeys.every(function (key) {
        return obj.hasOwnProperty(key) && obj[key] === source[key];
        });
    });
}
whatIsInAName([{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], { last: "Capulet" });
        </textarea>`;
        javascriptIntermedAlgScrIncorrectValue.innerHTML = "Incorrect..";
        javascriptIntermedAlgScrNextButton.innerHTML = `<button class="nextButton javascriptColor1" onclick=javascriptIntermedAlgScrBtn()>Next</button>`;
        javascriptIntermedAlgScrRemoveValue.innerHTML = "";



    } else if (javascriptIntermedAlgScrRandomValue == 12 && javascriptIntermedAlgScrInputAnswer == javascriptIntermedAlgScrAnswerArr[12].A12) {
        javascriptIntermedAlgScrCorrectValue.innerHTML = "Correct..";
        javascriptIntermedAlgScrDisplayAnswer.innerHTML = `
        <textarea name="text" class="answer_textarea" id="input">Good Job :) </textarea>`;
        javascriptIntermedAlgScrNextButton.innerHTML = `<button class="nextButton javascriptColor1" onclick=javascriptIntermedAlgScrBtn()>Next</button>`;
        javascriptIntermedAlgScrRemoveValue.innerHTML = "";

    } else if (javascriptIntermedAlgScrRandomValue == 12 && javascriptIntermedAlgScrInputAnswer !== javascriptIntermedAlgScrAnswerArr[12].A12) {
        javascriptIntermedAlgScrDisplayAnswer.innerHTML = `
    <textarea name="text" class="answer_textarea" id="input">
function whatIsInAName(collection, source) {
    var srcKeys = Object.keys(source);

    return collection.filter(function (obj) {
        return srcKeys
        .map(function(key) {
            return obj.hasOwnProperty(key) && obj[key] === source[key];
        })
        .reduce(function(a, b) {
            return a && b;
        });
    });
}
whatIsInAName([{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], { last: "Capulet" });
        </textarea>`;
        javascriptIntermedAlgScrIncorrectValue.innerHTML = "Incorrect..";
        javascriptIntermedAlgScrNextButton.innerHTML = `<button class="nextButton javascriptColor1" onclick=javascriptIntermedAlgScrBtn()>Next</button>`;
        javascriptIntermedAlgScrRemoveValue.innerHTML = "";



    } else if (javascriptIntermedAlgScrRandomValue == 13 && javascriptIntermedAlgScrInputAnswer == javascriptIntermedAlgScrAnswerArr[13].A13) {
        javascriptIntermedAlgScrCorrectValue.innerHTML = "Correct..";
        javascriptIntermedAlgScrDisplayAnswer.innerHTML = `
        <textarea name="text" class="answer_textarea" id="input">Good Job :) </textarea>`;
        javascriptIntermedAlgScrNextButton.innerHTML = `<button class="nextButton javascriptColor1" onclick=javascriptIntermedAlgScrBtn()>Next</button>`;
        javascriptIntermedAlgScrRemoveValue.innerHTML = "";

    } else if (javascriptIntermedAlgScrRandomValue == 13 && javascriptIntermedAlgScrInputAnswer !== javascriptIntermedAlgScrAnswerArr[13].A13) {
        javascriptIntermedAlgScrDisplayAnswer.innerHTML = `
    <textarea name="text" class="answer_textarea" id="input">
function spinalCase(str) {
    var regex = /\s+|_+/g;

    str = str.replace(/([a-z])([A-Z])/g, '$1 $2');
    return str.replace(regex, '-').toLowerCase();
}
spinalCase('This Is Spinal Tap');
        </textarea>`;
        javascriptIntermedAlgScrIncorrectValue.innerHTML = "Incorrect..";
        javascriptIntermedAlgScrNextButton.innerHTML = `<button class="nextButton javascriptColor1" onclick=javascriptIntermedAlgScrBtn()>Next</button>`;
        javascriptIntermedAlgScrRemoveValue.innerHTML = "";



    } else if (javascriptIntermedAlgScrRandomValue == 14 && javascriptIntermedAlgScrInputAnswer == javascriptIntermedAlgScrAnswerArr[14].A14) {
        javascriptIntermedAlgScrCorrectValue.innerHTML = "Correct..";
        javascriptIntermedAlgScrDisplayAnswer.innerHTML = `
        <textarea name="text" class="answer_textarea" id="input">Good Job :) </textarea>`;
        javascriptIntermedAlgScrNextButton.innerHTML = `<button class="nextButton javascriptColor1" onclick=javascriptIntermedAlgScrBtn()>Next</button>`;
        javascriptIntermedAlgScrRemoveValue.innerHTML = "";

    } else if (javascriptIntermedAlgScrRandomValue == 14 && javascriptIntermedAlgScrInputAnswer !== javascriptIntermedAlgScrAnswerArr[14].A14) {
        javascriptIntermedAlgScrDisplayAnswer.innerHTML = `
    <textarea name="text" class="answer_textarea" id="input">
function spinalCase(str) {
    str = str.replace(/([a-z])([A-Z])/g, '$1 $2');
    return str.toLowerCase().split(/(?:_| )+/) .join('-');
}
spinalCase('This Is Spinal Tap');
        </textarea>`;
        javascriptIntermedAlgScrIncorrectValue.innerHTML = "Incorrect..";
        javascriptIntermedAlgScrNextButton.innerHTML = `<button class="nextButton javascriptColor1" onclick=javascriptIntermedAlgScrBtn()>Next</button>`;
        javascriptIntermedAlgScrRemoveValue.innerHTML = "";



    } else if (javascriptIntermedAlgScrRandomValue == 15 && javascriptIntermedAlgScrInputAnswer == javascriptIntermedAlgScrAnswerArr[15].A15) {
        javascriptIntermedAlgScrCorrectValue.innerHTML = "Correct..";
        javascriptIntermedAlgScrDisplayAnswer.innerHTML = `
        <textarea name="text" class="answer_textarea" id="input">Good Job :) </textarea>`;
        javascriptIntermedAlgScrNextButton.innerHTML = `<button class="nextButton javascriptColor1" onclick=javascriptIntermedAlgScrBtn()>Next</button>`;
        javascriptIntermedAlgScrRemoveValue.innerHTML = "";

    } else if (javascriptIntermedAlgScrRandomValue == 15 && javascriptIntermedAlgScrInputAnswer !== javascriptIntermedAlgScrAnswerArr[15].A15) {
        javascriptIntermedAlgScrDisplayAnswer.innerHTML = `
    <textarea name="text" class="answer_textarea" id="input">
function spinalCase(str) {
    return str.split(/\s|_|(?=[A-Z])/).join('-').toLowerCase()
}
        </textarea>`;
        javascriptIntermedAlgScrIncorrectValue.innerHTML = "Incorrect..";
        javascriptIntermedAlgScrNextButton.innerHTML = `<button class="nextButton javascriptColor1" onclick=javascriptIntermedAlgScrBtn()>Next</button>`;
        javascriptIntermedAlgScrRemoveValue.innerHTML = "";



    } else if (javascriptIntermedAlgScrRandomValue == 16 && javascriptIntermedAlgScrInputAnswer == javascriptIntermedAlgScrAnswerArr[16].A16) {
        javascriptIntermedAlgScrCorrectValue.innerHTML = "Correct..";
        javascriptIntermedAlgScrDisplayAnswer.innerHTML = `
        <textarea name="text" class="answer_textarea" id="input">Good Job :) </textarea>`;
        javascriptIntermedAlgScrNextButton.innerHTML = `<button class="nextButton javascriptColor1" onclick=javascriptIntermedAlgScrBtn()>Next</button>`;
        javascriptIntermedAlgScrRemoveValue.innerHTML = "";

    } else if (javascriptIntermedAlgScrRandomValue == 16 && javascriptIntermedAlgScrInputAnswer !== javascriptIntermedAlgScrAnswerArr[16].A16) {
        javascriptIntermedAlgScrDisplayAnswer.innerHTML = `
    <textarea name="text" class="answer_textarea" id="input">
function translatePigLatin(str) {
    var pigLatin = '';
    var regex = /[aeiou]/gi;
    if (str[0].match(regex)) {
        pigLatin = str + 'way';

    } else if(str.match(regex) === null) {
        pigLatin = str + 'ay';
    } else {
        var vowelIndice = str.indexOf(str.match(regex)[0]);
        pigLatin = str.substr(vowelIndice) + str.substr(0, vowelIndice) + 'ay';
    }

    return pigLatin;
}
translatePigLatin("consonant");
        </textarea>`;
        javascriptIntermedAlgScrIncorrectValue.innerHTML = "Incorrect..";
        javascriptIntermedAlgScrNextButton.innerHTML = `<button class="nextButton javascriptColor1" onclick=javascriptIntermedAlgScrBtn()>Next</button>`;
        javascriptIntermedAlgScrRemoveValue.innerHTML = "";



    } else if (javascriptIntermedAlgScrRandomValue == 17 && javascriptIntermedAlgScrInputAnswer == javascriptIntermedAlgScrAnswerArr[17].A17) {
        javascriptIntermedAlgScrCorrectValue.innerHTML = "Correct..";
        javascriptIntermedAlgScrDisplayAnswer.innerHTML = `
        <textarea name="text" class="answer_textarea" id="input">Good Job :) </textarea>`;
        javascriptIntermedAlgScrNextButton.innerHTML = `<button class="nextButton javascriptColor1" onclick=javascriptIntermedAlgScrBtn()>Next</button>`;
        javascriptIntermedAlgScrRemoveValue.innerHTML = "";

    } else if (javascriptIntermedAlgScrRandomValue == 17 && javascriptIntermedAlgScrInputAnswer !== javascriptIntermedAlgScrAnswerArr[17].A17) {
        javascriptIntermedAlgScrDisplayAnswer.innerHTML = `
    <textarea name="text" class="answer_textarea" id="input">
function myReplace(str, before, after) {
    var index = str.indexOf(before);

    if (str[index] === str[index].toUpperCase()) {
        after = after.charAt(0).toUpperCase() + after.slice(1);
    }
    str = str.replace(before, after);

    return str;
}
myReplace("A quick brown fox jumped over the lazy dog", "jumped", "leaped");
        </textarea>`;
        javascriptIntermedAlgScrIncorrectValue.innerHTML = "Incorrect..";
        javascriptIntermedAlgScrNextButton.innerHTML = `<button class="nextButton javascriptColor1" onclick=javascriptIntermedAlgScrBtn()>Next</button>`;
        javascriptIntermedAlgScrRemoveValue.innerHTML = "";



    } else if (javascriptIntermedAlgScrRandomValue == 18 && javascriptIntermedAlgScrInputAnswer == javascriptIntermedAlgScrAnswerArr[18].A18) {
        javascriptIntermedAlgScrCorrectValue.innerHTML = "Correct..";
        javascriptIntermedAlgScrDisplayAnswer.innerHTML = `
        <textarea name="text" class="answer_textarea" id="input">Good Job :) </textarea>`;
        javascriptIntermedAlgScrNextButton.innerHTML = `<button class="nextButton javascriptColor1" onclick=javascriptIntermedAlgScrBtn()>Next</button>`;
        javascriptIntermedAlgScrRemoveValue.innerHTML = "";

    } else if (javascriptIntermedAlgScrRandomValue == 18 && javascriptIntermedAlgScrInputAnswer !== javascriptIntermedAlgScrAnswerArr[18].A18) {
        javascriptIntermedAlgScrDisplayAnswer.innerHTML = `
    <textarea name="text" class="answer_textarea" id="input">
function myReplace(str, before, after) {

    var re = new RegExp(before,"gi");

    if(/[A-Z]/.test(before[0])){

        after = after.charAt(0).toUpperCase()+after.slice(1);
        }
    var  newStr =  str.replace(re,after);

    return newStr;
}
myReplace("A quick brown fox jumped over the lazy dog", "jumped", "leaped");
        </textarea>`;
        javascriptIntermedAlgScrIncorrectValue.innerHTML = "Incorrect..";
        javascriptIntermedAlgScrNextButton.innerHTML = `<button class="nextButton javascriptColor1" onclick=javascriptIntermedAlgScrBtn()>Next</button>`;
        javascriptIntermedAlgScrRemoveValue.innerHTML = "";



    } else if (javascriptIntermedAlgScrRandomValue == 19 && javascriptIntermedAlgScrInputAnswer == javascriptIntermedAlgScrAnswerArr[19].A19) {
        javascriptIntermedAlgScrCorrectValue.innerHTML = "Correct..";
        javascriptIntermedAlgScrDisplayAnswer.innerHTML = `
        <textarea name="text" class="answer_textarea" id="input">Good Job :) </textarea>`;
        javascriptIntermedAlgScrNextButton.innerHTML = `<button class="nextButton javascriptColor1" onclick=javascriptIntermedAlgScrBtn()>Next</button>`;
        javascriptIntermedAlgScrRemoveValue.innerHTML = "";

    } else if (javascriptIntermedAlgScrRandomValue == 19 && javascriptIntermedAlgScrInputAnswer !== javascriptIntermedAlgScrAnswerArr[19].A19) {
        javascriptIntermedAlgScrDisplayAnswer.innerHTML = `
    <textarea name="text" class="answer_textarea" id="input">
function myReplace(str, before, after) {

    function applyCasing(source, target) {
        var targetArr = target.split("");
        var sourceArr = source.split("");
        
        for (var i = 0; i < Math.min(targetArr.length, sourceArr.length); i++){
            if (/[A-Z]/.test(sourceArr[i])) {
                targetArr[i] = targetArr[i].toUpperCase();
            }
            
            else targetArr[i] = targetArr[i].toLowerCase();
        }
        return (targetArr.join(""));
    }
    return str.replace(before, applyCasing(before, after));
}
myReplace("A quick brown fox jumped over the lazy dog", "jumped", "leaped");
          </textarea>`;
        javascriptIntermedAlgScrIncorrectValue.innerHTML = "Incorrect..";
        javascriptIntermedAlgScrNextButton.innerHTML = `<button class="nextButton javascriptColor1" onclick=javascriptIntermedAlgScrBtn()>Next</button>`;
        javascriptIntermedAlgScrRemoveValue.innerHTML = "";



    } else if (javascriptIntermedAlgScrRandomValue == 20 && javascriptIntermedAlgScrInputAnswer == javascriptIntermedAlgScrAnswerArr[20].A20) {
        javascriptIntermedAlgScrCorrectValue.innerHTML = "Correct..";
        javascriptIntermedAlgScrDisplayAnswer.innerHTML = `
        <textarea name="text" class="answer_textarea" id="input">Good Job :) </textarea>`;
        javascriptIntermedAlgScrNextButton.innerHTML = `<button class="nextButton javascriptColor1" onclick=javascriptIntermedAlgScrBtn()>Next</button>`;
        javascriptIntermedAlgScrRemoveValue.innerHTML = "";

    } else if (javascriptIntermedAlgScrRandomValue == 20 && javascriptIntermedAlgScrInputAnswer !== javascriptIntermedAlgScrAnswerArr[20].A20) {
        javascriptIntermedAlgScrDisplayAnswer.innerHTML = `
    <textarea name="text" class="answer_textarea" id="input">
function pairElement(str) {

    var paired = [];
    var search = function(char) {
        switch (char) {
        case 'A':
            paired.push(['A', 'T']);
            break;
        case 'T':
            paired.push(['T', 'A']);
            break;
        case 'C':
            paired.push(['C', 'G']);
            break;
        case 'G':
            paired.push(['G', 'C']);
            break;
        }
    };
    for (var i = 0; i < str.length; i++) {
        search(str[i]);
    }

    return paired;
}
pairElement("GCG");
        </textarea>`;
        javascriptIntermedAlgScrIncorrectValue.innerHTML = "Incorrect..";
        javascriptIntermedAlgScrNextButton.innerHTML = `<button class="nextButton javascriptColor1" onclick=javascriptIntermedAlgScrBtn()>Next</button>`;
        javascriptIntermedAlgScrRemoveValue.innerHTML = "";



    } else if (javascriptIntermedAlgScrRandomValue == 21 && javascriptIntermedAlgScrInputAnswer == javascriptIntermedAlgScrAnswerArr[21].A21) {
        javascriptIntermedAlgScrCorrectValue.innerHTML = "Correct..";
        javascriptIntermedAlgScrDisplayAnswer.innerHTML = `
        <textarea name="text" class="answer_textarea" id="input">Good Job :) </textarea>`;
        javascriptIntermedAlgScrNextButton.innerHTML = `<button class="nextButton javascriptColor1" onclick=javascriptIntermedAlgScrBtn()>Next</button>`;
        javascriptIntermedAlgScrRemoveValue.innerHTML = "";

    } else if (javascriptIntermedAlgScrRandomValue == 21 && javascriptIntermedAlgScrInputAnswer !== javascriptIntermedAlgScrAnswerArr[21].A21) {
        javascriptIntermedAlgScrDisplayAnswer.innerHTML = `
    <textarea name="text" class="answer_textarea" id="input">
function pairElement(str) {
    var pairs = {
        "A": "T",
        "T": "A",
        "C": "G",
        "G": "C"
    }
    var arr = str.split("");
    return arr.map(x => [x,pairs[x]]);
}
pairElement("GCG");
        </textarea>`;
        javascriptIntermedAlgScrIncorrectValue.innerHTML = "Incorrect..";
        javascriptIntermedAlgScrNextButton.innerHTML = `<button class="nextButton javascriptColor1" onclick=javascriptIntermedAlgScrBtn()>Next</button>`;
        javascriptIntermedAlgScrRemoveValue.innerHTML = "";



    } else if (javascriptIntermedAlgScrRandomValue == 22 && javascriptIntermedAlgScrInputAnswer == javascriptIntermedAlgScrAnswerArr[22].A22) {
        javascriptIntermedAlgScrCorrectValue.innerHTML = "Correct..";
        javascriptIntermedAlgScrDisplayAnswer.innerHTML = `
        <textarea name="text" class="answer_textarea" id="input">Good Job :) </textarea>`;
        javascriptIntermedAlgScrNextButton.innerHTML = `<button class="nextButton javascriptColor1" onclick=javascriptIntermedAlgScrBtn()>Next</button>`;
        javascriptIntermedAlgScrRemoveValue.innerHTML = "";

    } else if (javascriptIntermedAlgScrRandomValue == 22 && javascriptIntermedAlgScrInputAnswer !== javascriptIntermedAlgScrAnswerArr[22].A22) {
        javascriptIntermedAlgScrDisplayAnswer.innerHTML = `
    <textarea name="text" class="answer_textarea" id="input">
function fearNotLetter(str) {

    for(var i = 0; i < str.length; i++) {

        var code = str.charCodeAt(i);

        if (code !== str.charCodeAt(0) + i) {
        return String.fromCharCode(code - 1);
        }  
    }
    return undefined;
}
fearNotLetter("abce");
        </textarea>`;
        javascriptIntermedAlgScrIncorrectValue.innerHTML = "Incorrect..";
        javascriptIntermedAlgScrNextButton.innerHTML = `<button class="nextButton javascriptColor1" onclick=javascriptIntermedAlgScrBtn()>Next</button>`;
        javascriptIntermedAlgScrRemoveValue.innerHTML = "";



    } else if (javascriptIntermedAlgScrRandomValue == 23 && javascriptIntermedAlgScrInputAnswer == javascriptIntermedAlgScrAnswerArr[23].A23) {
        javascriptIntermedAlgScrCorrectValue.innerHTML = "Correct..";
        javascriptIntermedAlgScrDisplayAnswer.innerHTML = `
        <textarea name="text" class="answer_textarea" id="input">Good Job :) </textarea>`;
        javascriptIntermedAlgScrNextButton.innerHTML = `<button class="nextButton javascriptColor1" onclick=javascriptIntermedAlgScrBtn()>Next</button>`;
        javascriptIntermedAlgScrRemoveValue.innerHTML = "";

    } else if (javascriptIntermedAlgScrRandomValue == 23 && javascriptIntermedAlgScrInputAnswer !== javascriptIntermedAlgScrAnswerArr[23].A23) {
        javascriptIntermedAlgScrDisplayAnswer.innerHTML = `

    <textarea name="text" class="answer_textarea" id="input">

function fearNotLetter(str) {
    var compare = str.charCodeAt(0), missing;

    str.split('').map(function(letter,index) {
        if (str.charCodeAt(index) == compare) {
        ++compare;
        } else {
        missing = String.fromCharCode(compare);
        }
    });

    return missing;
}
fearNotLetter("abce");
        </textarea>`;
        javascriptIntermedAlgScrIncorrectValue.innerHTML = "Incorrect..";
        javascriptIntermedAlgScrNextButton.innerHTML = `<button class="nextButton javascriptColor1" onclick=javascriptIntermedAlgScrBtn()>Next</button>`;
        javascriptIntermedAlgScrRemoveValue.innerHTML = "";



    } else if (javascriptIntermedAlgScrRandomValue == 24 && javascriptIntermedAlgScrInputAnswer == javascriptIntermedAlgScrAnswerArr[24].A24) {
        javascriptIntermedAlgScrCorrectValue.innerHTML = "Correct..";
        javascriptIntermedAlgScrDisplayAnswer.innerHTML = `
        <textarea name="text" class="answer_textarea" id="input">Good Job :) </textarea>`;
        javascriptIntermedAlgScrNextButton.innerHTML = `<button class="nextButton javascriptColor1" onclick=javascriptIntermedAlgScrBtn()>Next</button>`;
        javascriptIntermedAlgScrRemoveValue.innerHTML = "";

    } else if (javascriptIntermedAlgScrRandomValue == 24 && javascriptIntermedAlgScrInputAnswer !== javascriptIntermedAlgScrAnswerArr[24].A24) {
        javascriptIntermedAlgScrDisplayAnswer.innerHTML = `
    <textarea name="text" class="answer_textarea" id="input">
function fearNotLetter(str) {
    for (let i = 1; i < str.length; ++i) {
        if (str.charCodeAt(i) - str.charCodeAt(i-1) > 1) {
        return String.fromCharCode(str.charCodeAt(i - 1) + 1);
        }
    }
}
        </textarea>`;
        javascriptIntermedAlgScrIncorrectValue.innerHTML = "Incorrect..";
        javascriptIntermedAlgScrNextButton.innerHTML = `<button class="nextButton javascriptColor1" onclick=javascriptIntermedAlgScrBtn()>Next</button>`;
        javascriptIntermedAlgScrRemoveValue.innerHTML = "";



    } else if (javascriptIntermedAlgScrRandomValue == 25 && javascriptIntermedAlgScrInputAnswer == javascriptIntermedAlgScrAnswerArr[25].A25) {
        javascriptIntermedAlgScrCorrectValue.innerHTML = "Correct..";
        javascriptIntermedAlgScrDisplayAnswer.innerHTML = `
        <textarea name="text" class="answer_textarea" id="input">Good Job :) </textarea>`;
        javascriptIntermedAlgScrNextButton.innerHTML = `<button class="nextButton javascriptColor1" onclick=javascriptIntermedAlgScrBtn()>Next</button>`;
        javascriptIntermedAlgScrRemoveValue.innerHTML = "";

    } else if (javascriptIntermedAlgScrRandomValue == 25 && javascriptIntermedAlgScrInputAnswer !== javascriptIntermedAlgScrAnswerArr[25].A25) {
        javascriptIntermedAlgScrDisplayAnswer.innerHTML = `
    <textarea name="text" class="answer_textarea" id="input">
function fearNotLetter(str) {
    var allChars = '';
    var notChars = new RegExp('[^'+str+']','g');

    for (var i = 0; allChars[allChars.length-1] !== str[str.length-1] ; i++)
        allChars += String.fromCharCode(str[0].charCodeAt(0) + i);

    return allChars.match(notChars) ? allChars.match(notChars).join('') : undefined;
}
fearNotLetter("abce");
        </textarea>`;
        javascriptIntermedAlgScrIncorrectValue.innerHTML = "Incorrect..";
        javascriptIntermedAlgScrNextButton.innerHTML = `<button class="nextButton javascriptColor1" onclick=javascriptIntermedAlgScrBtn()>Next</button>`;
        javascriptIntermedAlgScrRemoveValue.innerHTML = "";



    } else if (javascriptIntermedAlgScrRandomValue == 26 && javascriptIntermedAlgScrInputAnswer == javascriptIntermedAlgScrAnswerArr[26].A26) {
        javascriptIntermedAlgScrCorrectValue.innerHTML = "Correct..";
        javascriptIntermedAlgScrDisplayAnswer.innerHTML = `
        <textarea name="text" class="answer_textarea" id="input">Good Job :) </textarea>`;
        javascriptIntermedAlgScrNextButton.innerHTML = `<button class="nextButton javascriptColor1" onclick=javascriptIntermedAlgScrBtn()>Next</button>`;
        javascriptIntermedAlgScrRemoveValue.innerHTML = "";

    } else if (javascriptIntermedAlgScrRandomValue == 26 && javascriptIntermedAlgScrInputAnswer !== javascriptIntermedAlgScrAnswerArr[26].A26) {
        javascriptIntermedAlgScrDisplayAnswer.innerHTML = `
    <textarea name="text" class="answer_textarea" id="input">
function uniteUnique(arr1, arr2, arr3) {

    var finalArray = [];

    for (var i = 0; i < arguments.length; i++) {
        var arrayArguments = arguments[i];

        for (var j = 0; j < arrayArguments.length; j++) {
        var indexValue = arrayArguments[j];

            if (finalArray.indexOf(indexValue) < 0) {
                finalArray.push(indexValue);
            }
        }
    }

    return finalArray;
}
uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]); 
        </textarea>`;
        javascriptIntermedAlgScrIncorrectValue.innerHTML = "Incorrect..";
        javascriptIntermedAlgScrNextButton.innerHTML = `<button class="nextButton javascriptColor1" onclick=javascriptIntermedAlgScrBtn()>Next</button>`;
        javascriptIntermedAlgScrRemoveValue.innerHTML = "";



    } else if (javascriptIntermedAlgScrRandomValue == 27 && javascriptIntermedAlgScrInputAnswer == javascriptIntermedAlgScrAnswerArr[27].A27) {
        javascriptIntermedAlgScrCorrectValue.innerHTML = "Correct..";
        javascriptIntermedAlgScrDisplayAnswer.innerHTML = `
        <textarea name="text" class="answer_textarea" id="input">Good Job :) </textarea>`;
        javascriptIntermedAlgScrNextButton.innerHTML = `<button class="nextButton javascriptColor1" onclick=javascriptIntermedAlgScrBtn()>Next</button>`;
        javascriptIntermedAlgScrRemoveValue.innerHTML = "";

    } else if (javascriptIntermedAlgScrRandomValue == 27 && javascriptIntermedAlgScrInputAnswer !== javascriptIntermedAlgScrAnswerArr[27].A27) {
        javascriptIntermedAlgScrDisplayAnswer.innerHTML = `
    <textarea name="text" class="answer_textarea" id="input">
function uniteUnique(arr) {
    var args = [...arguments];
    var result = [];
    for(var i = 0; i < args.length; i++) {
            for(var j = 0; j < args[i].length; j++) {
                if(!result.includes(args[i][j])) {
                result.push(args[i][j]);
            }
        }
    }
    return result;
}

uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]);
        </textarea>`;
        javascriptIntermedAlgScrIncorrectValue.innerHTML = "Incorrect..";
        javascriptIntermedAlgScrNextButton.innerHTML = `<button class="nextButton javascriptColor1" onclick=javascriptIntermedAlgScrBtn()>Next</button>`;
        javascriptIntermedAlgScrRemoveValue.innerHTML = "";



    } else if (javascriptIntermedAlgScrRandomValue == 28 && javascriptIntermedAlgScrInputAnswer == javascriptIntermedAlgScrAnswerArr[28].A28) {
        javascriptIntermedAlgScrCorrectValue.innerHTML = "Correct..";
        javascriptIntermedAlgScrDisplayAnswer.innerHTML = `
        <textarea name="text" class="answer_textarea" id="input">Good Job :) </textarea>`;
        javascriptIntermedAlgScrNextButton.innerHTML = `<button class="nextButton javascriptColor1" onclick=javascriptIntermedAlgScrBtn()>Next</button>`;
        javascriptIntermedAlgScrRemoveValue.innerHTML = "";

    } else if (javascriptIntermedAlgScrRandomValue == 28 && javascriptIntermedAlgScrInputAnswer !== javascriptIntermedAlgScrAnswerArr[28].A28) {
        javascriptIntermedAlgScrDisplayAnswer.innerHTML = `
    <textarea name="text" class="answer_textarea" id="input">
function uniteUnique(arr1, arr2, arr3) {
    var newArr;
        var args = Array.prototype.slice.call(arguments);
        newArr = args.reduce(function(arrA,arrB){
            return arrA.concat(arrB.filter(function(i){
                return arrA.indexOf(i) === -1;
            }));
        });

    return newArr;                    
}
uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]);
        </textarea>`;
        javascriptIntermedAlgScrIncorrectValue.innerHTML = "Incorrect..";
        javascriptIntermedAlgScrNextButton.innerHTML = `<button class="nextButton javascriptColor1" onclick=javascriptIntermedAlgScrBtn()>Next</button>`;
        javascriptIntermedAlgScrRemoveValue.innerHTML = "";



    } else if (javascriptIntermedAlgScrRandomValue == 29 && javascriptIntermedAlgScrInputAnswer == javascriptIntermedAlgScrAnswerArr[29].A29) {
        javascriptIntermedAlgScrCorrectValue.innerHTML = "Correct..";
        javascriptIntermedAlgScrDisplayAnswer.innerHTML = `
        <textarea name="text" class="answer_textarea" id="input">Good Job :) </textarea>`;
        javascriptIntermedAlgScrNextButton.innerHTML = `<button class="nextButton javascriptColor1" onclick=javascriptIntermedAlgScrBtn()>Next</button>`;
        javascriptIntermedAlgScrRemoveValue.innerHTML = "";

    } else if (javascriptIntermedAlgScrRandomValue == 29 && javascriptIntermedAlgScrInputAnswer !== javascriptIntermedAlgScrAnswerArr[29].A29) {
        javascriptIntermedAlgScrDisplayAnswer.innerHTML = `
    <textarea name="text" class="answer_textarea" id="input">
function uniteUnique(...arrays) {

    const flatArray = [].concat(...arrays);

    return [...new Set(flatArray)];
}
uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]);
        </textarea>`;
        javascriptIntermedAlgScrIncorrectValue.innerHTML = "Incorrect..";
        javascriptIntermedAlgScrNextButton.innerHTML = `<button class="nextButton javascriptColor1" onclick=javascriptIntermedAlgScrBtn()>Next</button>`;
        javascriptIntermedAlgScrRemoveValue.innerHTML = "";



    } else if (javascriptIntermedAlgScrRandomValue == 30 && javascriptIntermedAlgScrInputAnswer == javascriptIntermedAlgScrAnswerArr[30].A30) {
        javascriptIntermedAlgScrCorrectValue.innerHTML = "Correct..";
        javascriptIntermedAlgScrDisplayAnswer.innerHTML = `
        <textarea name="text" class="answer_textarea" id="input">Good Job :) </textarea>`;
        javascriptIntermedAlgScrNextButton.innerHTML = `<button class="nextButton javascriptColor1" onclick=javascriptIntermedAlgScrBtn()>Next</button>`;
        javascriptIntermedAlgScrRemoveValue.innerHTML = "";

    } else if (javascriptIntermedAlgScrRandomValue == 30 && javascriptIntermedAlgScrInputAnswer !== javascriptIntermedAlgScrAnswerArr[30].A30) {
        javascriptIntermedAlgScrDisplayAnswer.innerHTML = `
    <textarea name="text" class="answer_textarea" id="input">
function convertHTML(str) {

    var temp = str.split('');


    for (var i = 0; i < temp.length; i++) {
        switch (temp[i]) {
        case '<':
            temp[i] = '&lt;';
            break;
        case '&':
            temp[i] = '&amp;';
            break;
        case '>':
            temp[i] = '&gt;';
            break;
        case '"':
            temp[i] = '&quot;';
            break;
        case "'":
            temp[i] = "&apos;";
            break;
        }
    }

    temp = temp.join('');
    return temp;
}
convertHTML("Dolce & Gabbana");
        </textarea>`;
        javascriptIntermedAlgScrIncorrectValue.innerHTML = "Incorrect..";
        javascriptIntermedAlgScrNextButton.innerHTML = `<button class="nextButton javascriptColor1" onclick=javascriptIntermedAlgScrBtn()>Next</button>`;
        javascriptIntermedAlgScrRemoveValue.innerHTML = "";



    } else if (javascriptIntermedAlgScrRandomValue == 31 && javascriptIntermedAlgScrInputAnswer == javascriptIntermedAlgScrAnswerArr[31].A31) {
        javascriptIntermedAlgScrCorrectValue.innerHTML = "Correct..";
        javascriptIntermedAlgScrDisplayAnswer.innerHTML = `
        <textarea name="text" class="answer_textarea" id="input">Good Job :) </textarea>`;
        javascriptIntermedAlgScrNextButton.innerHTML = `<button class="nextButton javascriptColor1" onclick=javascriptIntermedAlgScrBtn()>Next</button>`;
        javascriptIntermedAlgScrRemoveValue.innerHTML = "";

    } else if (javascriptIntermedAlgScrRandomValue == 31 && javascriptIntermedAlgScrInputAnswer !== javascriptIntermedAlgScrAnswerArr[31].A31) {
        javascriptIntermedAlgScrDisplayAnswer.innerHTML = `
    <textarea name="text" class="answer_textarea" id="input">
function convertHTML(str) {

    str = str.replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;').replace(/'/g,"&apos;");
    return str;
}
convertHTML("Dolce & Gabbana"); 
        </textarea>`;
        javascriptIntermedAlgScrIncorrectValue.innerHTML = "Incorrect..";
        javascriptIntermedAlgScrNextButton.innerHTML = `<button class="nextButton javascriptColor1" onclick=javascriptIntermedAlgScrBtn()>Next</button>`;
        javascriptIntermedAlgScrRemoveValue.innerHTML = "";



    } else if (javascriptIntermedAlgScrRandomValue == 32 && javascriptIntermedAlgScrInputAnswer == javascriptIntermedAlgScrAnswerArr[32].A32) {
        javascriptIntermedAlgScrCorrectValue.innerHTML = "Correct..";
        javascriptIntermedAlgScrDisplayAnswer.innerHTML = `
        <textarea name="text" class="answer_textarea" id="input">Good Job :) </textarea>`;
        javascriptIntermedAlgScrNextButton.innerHTML = `<button class="nextButton javascriptColor1" onclick=javascriptIntermedAlgScrBtn()>Next</button>`;
        javascriptIntermedAlgScrRemoveValue.innerHTML = "";

    } else if (javascriptIntermedAlgScrRandomValue == 32 && javascriptIntermedAlgScrInputAnswer !== javascriptIntermedAlgScrAnswerArr[32].A32) {
        javascriptIntermedAlgScrDisplayAnswer.innerHTML = `
    <textarea name="text" class="answer_textarea" id="input">
function sumFibs(num) {
    var prevNumber = 0;
    var currNumber = 1;
    var result = 0;
    while (currNumber <= num) {
        if (currNumber % 2 !== 0) {
            result += currNumber;
        }

        currNumber += prevNumber;
        prevNumber = currNumber - prevNumber;
    }

    return result;
}
sumFibs(4); 
        </textarea>`;
        javascriptIntermedAlgScrIncorrectValue.innerHTML = "Incorrect..";
        javascriptIntermedAlgScrNextButton.innerHTML = `<button class="nextButton javascriptColor1" onclick=javascriptIntermedAlgScrBtn()>Next</button>`;
        javascriptIntermedAlgScrRemoveValue.innerHTML = "";



    } else if (javascriptIntermedAlgScrRandomValue == 33 && javascriptIntermedAlgScrInputAnswer == javascriptIntermedAlgScrAnswerArr[33].A33) {
        javascriptIntermedAlgScrCorrectValue.innerHTML = "Correct..";
        javascriptIntermedAlgScrDisplayAnswer.innerHTML = `
        <textarea name="text" class="answer_textarea" id="input">Good Job :) </textarea>`;
        javascriptIntermedAlgScrNextButton.innerHTML = `<button class="nextButton javascriptColor1" onclick=javascriptIntermedAlgScrBtn()>Next</button>`;
        javascriptIntermedAlgScrRemoveValue.innerHTML = "";

    } else if (javascriptIntermedAlgScrRandomValue == 33 && javascriptIntermedAlgScrInputAnswer !== javascriptIntermedAlgScrAnswerArr[33].A33) {
        javascriptIntermedAlgScrDisplayAnswer.innerHTML = `
    <textarea name="text" class="answer_textarea" id="input">
function sumPrimes(num) {
    var res = 0;

    function getPrimes(max) {
        var sieve = [];
        var i;
        var j;
        var primes = [];
        for (i = 2; i <= max; ++i) {
            if (!sieve[i]) {
                primes.push(i);
                for (j = i << 1; j <= max; j += i) {
                sieve[j] = true;
                }
            }
        }

        return primes;
    }
    var primes = getPrimes(num);
    for (var p = 0; p < primes.length; p++) {
        res += primes[p];
    }

    return res;
}
sumPrimes(10);
        </textarea>`;
        javascriptIntermedAlgScrIncorrectValue.innerHTML = "Incorrect..";
        javascriptIntermedAlgScrNextButton.innerHTML = `<button class="nextButton javascriptColor1" onclick=javascriptIntermedAlgScrBtn()>Next</button>`;
        javascriptIntermedAlgScrRemoveValue.innerHTML = "";



    } else if (javascriptIntermedAlgScrRandomValue == 34 && javascriptIntermedAlgScrInputAnswer == javascriptIntermedAlgScrAnswerArr[34].A34) {
        javascriptIntermedAlgScrCorrectValue.innerHTML = "Correct..";
        javascriptIntermedAlgScrDisplayAnswer.innerHTML = `
        <textarea name="text" class="answer_textarea" id="input">Good Job :) </textarea>`;
        javascriptIntermedAlgScrNextButton.innerHTML = `<button class="nextButton javascriptColor1" onclick=javascriptIntermedAlgScrBtn()>Next</button>`;
        javascriptIntermedAlgScrRemoveValue.innerHTML = "";

    } else if (javascriptIntermedAlgScrRandomValue == 34 && javascriptIntermedAlgScrInputAnswer !== javascriptIntermedAlgScrAnswerArr[34].A34) {
        javascriptIntermedAlgScrDisplayAnswer.innerHTML = `
    <textarea name="text" class="answer_textarea" id="input">
function sumPrimes(num) {

    let arr = Array.from({length: num+1}, (v, k) => k).slice(2); 

    let onlyPrimes = arr.filter( (n) => { 
        let m = n-1;
        while (m > 1 && m >= Math.sqrt(n)) { 
        if ((n % m) === 0) 
            return false;
            m--;
        }
        return true;
    });

    return onlyPrimes.reduce((a,b) => a+b); 
}
sumPrimes(977); 
        </textarea>`;
        javascriptIntermedAlgScrIncorrectValue.innerHTML = "Incorrect..";
        javascriptIntermedAlgScrNextButton.innerHTML = `<button class="nextButton javascriptColor1" onclick=javascriptIntermedAlgScrBtn()>Next</button>`;
        javascriptIntermedAlgScrRemoveValue.innerHTML = "";



    } else if (javascriptIntermedAlgScrRandomValue == 35 && javascriptIntermedAlgScrInputAnswer == javascriptIntermedAlgScrAnswerArr[35].A35) {
        javascriptIntermedAlgScrCorrectValue.innerHTML = "Correct..";
        javascriptIntermedAlgScrDisplayAnswer.innerHTML = `
        <textarea name="text" class="answer_textarea" id="input">Good Job :) </textarea>`;
        javascriptIntermedAlgScrNextButton.innerHTML = `<button class="nextButton javascriptColor1" onclick=javascriptIntermedAlgScrBtn()>Next</button>`;
        javascriptIntermedAlgScrRemoveValue.innerHTML = "";

    } else if (javascriptIntermedAlgScrRandomValue == 35 && javascriptIntermedAlgScrInputAnswer !== javascriptIntermedAlgScrAnswerArr[35].A35) {
        javascriptIntermedAlgScrDisplayAnswer.innerHTML = `
    <textarea name="text" class="answer_textarea" id="input">
function smallestCommons(arr) {
    arr.sort(function(a, b) {
        return b - a;
    });
    var newArr = [];
    for (var i = arr[0]; i >= arr[1]; i--) {
        newArr.push(i);
    }
    var quot = 0;
    var loop = 1;
    var n;
    do {
        quot = newArr[0] * loop * newArr[1];
        for (n = 2; n < newArr.length; n++) {
            if (quot % newArr[n] !== 0) {
                break;
            }
        }

        loop++;
    } while (n !== newArr.length);

    return quot;
}
smallestCommons([1,5]);
        </textarea>`;
        javascriptIntermedAlgScrIncorrectValue.innerHTML = "Incorrect..";
        javascriptIntermedAlgScrNextButton.innerHTML = `<button class="nextButton javascriptColor1" onclick=javascriptIntermedAlgScrBtn()>Next</button>`;
        javascriptIntermedAlgScrRemoveValue.innerHTML = "";



    } else if (javascriptIntermedAlgScrRandomValue == 36 && javascriptIntermedAlgScrInputAnswer == javascriptIntermedAlgScrAnswerArr[36].A36) {
        javascriptIntermedAlgScrCorrectValue.innerHTML = "Correct..";
        javascriptIntermedAlgScrDisplayAnswer.innerHTML = `
        <textarea name="text" class="answer_textarea" id="input">Good Job :) </textarea>`;
        javascriptIntermedAlgScrNextButton.innerHTML = `<button class="nextButton javascriptColor1" onclick=javascriptIntermedAlgScrBtn()>Next</button>`;
        javascriptIntermedAlgScrRemoveValue.innerHTML = "";

    } else if (javascriptIntermedAlgScrRandomValue == 36 && javascriptIntermedAlgScrInputAnswer !== javascriptIntermedAlgScrAnswerArr[36].A36) {
        javascriptIntermedAlgScrDisplayAnswer.innerHTML = `
    <textarea name="text" class="answer_textarea" id="input">
function smallestCommons(arr) {
    var range = [];
    for (var i = Math.max(arr[0], arr[1]); i >= Math.min(arr[0], arr[1]); i--) {
    range.push(i);
    }
    var lcm = range[0];
    for (i = 1; i < range.length; i++) {
    var GCD = gcd(lcm, range[i]);
    lcm = (lcm * range[i]) / GCD;
    }
    return lcm;

    function gcd(x, y) { 
    if (y === 0)
        return x;
    else
        return gcd(y, x%y);
    }
}
smallestCommons([1,5]); 
        </textarea>`;
        javascriptIntermedAlgScrIncorrectValue.innerHTML = "Incorrect..";
        javascriptIntermedAlgScrNextButton.innerHTML = `<button class="nextButton javascriptColor1" onclick=javascriptIntermedAlgScrBtn()>Next</button>`;
        javascriptIntermedAlgScrRemoveValue.innerHTML = "";



    } else if (javascriptIntermedAlgScrRandomValue == 37 && javascriptIntermedAlgScrInputAnswer == javascriptIntermedAlgScrAnswerArr[37].A37) {
        javascriptIntermedAlgScrCorrectValue.innerHTML = "Correct..";
        javascriptIntermedAlgScrDisplayAnswer.innerHTML = `
        <textarea name="text" class="answer_textarea" id="input">Good Job :) </textarea>`;
        javascriptIntermedAlgScrNextButton.innerHTML = `<button class="nextButton javascriptColor1" onclick=javascriptIntermedAlgScrBtn()>Next</button>`;
        javascriptIntermedAlgScrRemoveValue.innerHTML = "";

    } else if (javascriptIntermedAlgScrRandomValue == 37 && javascriptIntermedAlgScrInputAnswer !== javascriptIntermedAlgScrAnswerArr[37].A37) {
        javascriptIntermedAlgScrDisplayAnswer.innerHTML = `
    <textarea name="text" class="answer_textarea" id="input">
function smallestCommons(arr) {

    let min = Math.min.apply(null, arr);
    let max = Math.max.apply(null, arr);

    let smallestCommon = lcm(min, min + 1);

    while(min < max) {
        min++;
        smallestCommon = lcm(smallestCommon, min);
    }

        return smallestCommon;
    }

    function gcd(a, b) {
        while (b > 0) {
            let tmp = a;
            a = b;
            b = tmp % b;
        }
        return a;
    }
    function lcm(a, b) {
    return (a * b / gcd(a, b));
}
smallestCommons([1,5]); 
        </textarea>`;
        javascriptIntermedAlgScrIncorrectValue.innerHTML = "Incorrect..";
        javascriptIntermedAlgScrNextButton.innerHTML = `<button class="nextButton javascriptColor1" onclick=javascriptIntermedAlgScrBtn()>Next</button>`;
        javascriptIntermedAlgScrRemoveValue.innerHTML = "";



    } else if (javascriptIntermedAlgScrRandomValue == 38 && javascriptIntermedAlgScrInputAnswer == javascriptIntermedAlgScrAnswerArr[38].A38) {
        javascriptIntermedAlgScrCorrectValue.innerHTML = "Correct..";
        javascriptIntermedAlgScrDisplayAnswer.innerHTML = `
        <textarea name="text" class="answer_textarea" id="input">Good Job :) </textarea>`;
        javascriptIntermedAlgScrNextButton.innerHTML = `<button class="nextButton javascriptColor1" onclick=javascriptIntermedAlgScrBtn()>Next</button>`;
        javascriptIntermedAlgScrRemoveValue.innerHTML = "";

    } else if (javascriptIntermedAlgScrRandomValue == 38 && javascriptIntermedAlgScrInputAnswer !== javascriptIntermedAlgScrAnswerArr[38].A38) {
        javascriptIntermedAlgScrDisplayAnswer.innerHTML = `
    <textarea name="text" class="answer_textarea" id="input">
function dropElements(arr, func) {
    var times = arr.length;
    for (var i = 0; i < times; i++) {
        if (func(arr[0])) {
            break;
        } else {
            arr.shift();
        }
    }
    return arr;
}
dropElements([1, 2, 3, 4], function(n) {return n >= 3;});  
        </textarea>`;
        javascriptIntermedAlgScrIncorrectValue.innerHTML = "Incorrect..";
        javascriptIntermedAlgScrNextButton.innerHTML = `<button class="nextButton javascriptColor1" onclick=javascriptIntermedAlgScrBtn()>Next</button>`;
        javascriptIntermedAlgScrRemoveValue.innerHTML = "";



    } else if (javascriptIntermedAlgScrRandomValue == 39 && javascriptIntermedAlgScrInputAnswer == javascriptIntermedAlgScrAnswerArr[39].A39) {
        javascriptIntermedAlgScrCorrectValue.innerHTML = "Correct..";
        javascriptIntermedAlgScrDisplayAnswer.innerHTML = `
        <textarea name="text" class="answer_textarea" id="input">Good Job :) </textarea>`;
        javascriptIntermedAlgScrNextButton.innerHTML = `<button class="nextButton javascriptColor1" onclick=javascriptIntermedAlgScrBtn()>Next</button>`;
        javascriptIntermedAlgScrRemoveValue.innerHTML = "";

    } else if (javascriptIntermedAlgScrRandomValue == 39 && javascriptIntermedAlgScrInputAnswer !== javascriptIntermedAlgScrAnswerArr[39].A39) {
        javascriptIntermedAlgScrDisplayAnswer.innerHTML = `
    <textarea name="text" class="answer_textarea" id="input">
function dropElements(arr, func) {
    return arr.slice(arr.findIndex(func) >= 0 ? arr.findIndex(func): arr.length, arr.length);
}
dropElements([1, 2, 3, 4], function(n) {return n >= 3;}); 
        </textarea>`;
        javascriptIntermedAlgScrIncorrectValue.innerHTML = "Incorrect..";
        javascriptIntermedAlgScrNextButton.innerHTML = `<button class="nextButton javascriptColor1" onclick=javascriptIntermedAlgScrBtn()>Next</button>`;
        javascriptIntermedAlgScrRemoveValue.innerHTML = "";



    } else if (javascriptIntermedAlgScrRandomValue == 40 && javascriptIntermedAlgScrInputAnswer == javascriptIntermedAlgScrAnswerArr[40].A40) {
        javascriptIntermedAlgScrCorrectValue.innerHTML = "Correct..";
        javascriptIntermedAlgScrDisplayAnswer.innerHTML = `
        <textarea name="text" class="answer_textarea" id="input">Good Job :) </textarea>`;
        javascriptIntermedAlgScrNextButton.innerHTML = `<button class="nextButton javascriptColor1" onclick=javascriptIntermedAlgScrBtn()>Next</button>`;
        javascriptIntermedAlgScrRemoveValue.innerHTML = "";

    } else if (javascriptIntermedAlgScrRandomValue == 40 && javascriptIntermedAlgScrInputAnswer !== javascriptIntermedAlgScrAnswerArr[40].A40) {
        javascriptIntermedAlgScrDisplayAnswer.innerHTML = `
    <textarea name="text" class="answer_textarea" id="input">
function dropElements(arr, func) {
    while(arr.length > 0 && !func(arr[0])) {
        arr.shift();
    }
    return arr;
}
dropElements([1, 2, 3, 4], function(n) {return n >= 3;}); 
        </textarea>`;
        javascriptIntermedAlgScrIncorrectValue.innerHTML = "Incorrect..";
        javascriptIntermedAlgScrNextButton.innerHTML = `<button class="nextButton javascriptColor1" onclick=javascriptIntermedAlgScrBtn()>Next</button>`;
        javascriptIntermedAlgScrRemoveValue.innerHTML = "";



    } else if (javascriptIntermedAlgScrRandomValue == 41 && javascriptIntermedAlgScrInputAnswer == javascriptIntermedAlgScrAnswerArr[41].A41) {
        javascriptIntermedAlgScrCorrectValue.innerHTML = "Correct..";
        javascriptIntermedAlgScrDisplayAnswer.innerHTML = `
        <textarea name="text" class="answer_textarea" id="input">Good Job :) </textarea>`;
        javascriptIntermedAlgScrNextButton.innerHTML = `<button class="nextButton javascriptColor1" onclick=javascriptIntermedAlgScrBtn()>Next</button>`;
        javascriptIntermedAlgScrRemoveValue.innerHTML = "";

    } else if (javascriptIntermedAlgScrRandomValue == 41 && javascriptIntermedAlgScrInputAnswer !== javascriptIntermedAlgScrAnswerArr[41].A41) {
        javascriptIntermedAlgScrDisplayAnswer.innerHTML = `
    <textarea name="text" class="answer_textarea" id="input">
function steamrollArray(arr) {
    var flattenedArray = [];

    var flatten = function(arg) {
            if (!Array.isArray(arg)) {
            flattenedArray.push(arg);
            } else {
            for (var a in arg) {
                flatten(arg[a]);
            }
        }
    };
    arr.forEach(flatten);
    return flattenedArray;
}
steamrollArray([1, [2], [3, [[4]]]]);
        </textarea>`;
        javascriptIntermedAlgScrIncorrectValue.innerHTML = "Incorrect..";
        javascriptIntermedAlgScrNextButton.innerHTML = `<button class="nextButton javascriptColor1" onclick=javascriptIntermedAlgScrBtn()>Next</button>`;
        javascriptIntermedAlgScrRemoveValue.innerHTML = "";



    } else if (javascriptIntermedAlgScrRandomValue == 42 && javascriptIntermedAlgScrInputAnswer == javascriptIntermedAlgScrAnswerArr[42].A42) {
        javascriptIntermedAlgScrCorrectValue.innerHTML = "Correct..";
        javascriptIntermedAlgScrDisplayAnswer.innerHTML = `
        <textarea name="text" class="answer_textarea" id="input">Good Job :) </textarea>`;
        javascriptIntermedAlgScrNextButton.innerHTML = `<button class="nextButton javascriptColor1" onclick=javascriptIntermedAlgScrBtn()>Next</button>`;
        javascriptIntermedAlgScrRemoveValue.innerHTML = "";

    } else if (javascriptIntermedAlgScrRandomValue == 42 && javascriptIntermedAlgScrInputAnswer !== javascriptIntermedAlgScrAnswerArr[42].A42) {
        javascriptIntermedAlgScrDisplayAnswer.innerHTML = `
    <textarea name="text" class="answer_textarea" id="input">
function steamrollArray(arr) {
return arr.toString()
    .replace(',,', ',') 
    .split(',')   
    .map(function(v) {
        if (v == '[object Object]') { 
            return {};
        } else if (isNaN(v)) { 
            return v;
        } else {
            return parseInt(v); 
        }
    });
}
        </textarea>`;
        javascriptIntermedAlgScrIncorrectValue.innerHTML = "Incorrect..";
        javascriptIntermedAlgScrNextButton.innerHTML = `<button class="nextButton javascriptColor1" onclick=javascriptIntermedAlgScrBtn()>Next</button>`;
        javascriptIntermedAlgScrRemoveValue.innerHTML = "";



    } else if (javascriptIntermedAlgScrRandomValue == 43 && javascriptIntermedAlgScrInputAnswer == javascriptIntermedAlgScrAnswerArr[43].A43) {
        javascriptIntermedAlgScrCorrectValue.innerHTML = "Correct..";
        javascriptIntermedAlgScrDisplayAnswer.innerHTML = `
        <textarea name="text" class="answer_textarea" id="input">Good Job :) </textarea>`;
        javascriptIntermedAlgScrNextButton.innerHTML = `<button class="nextButton javascriptColor1" onclick=javascriptIntermedAlgScrBtn()>Next</button>`;
        javascriptIntermedAlgScrRemoveValue.innerHTML = "";

    } else if (javascriptIntermedAlgScrRandomValue == 43 && javascriptIntermedAlgScrInputAnswer !== javascriptIntermedAlgScrAnswerArr[43].A43) {
        javascriptIntermedAlgScrDisplayAnswer.innerHTML = `
    <textarea name="text" class="answer_textarea" id="input">
function binaryAgent(str) {
    str = str.split(' ');
    var power;
    var decValue = 0;
    var sentence = '';
    for (var s = 0; s < str.length; s++) {
        for (var t = 0; t < str[s].length; t++) {
            if (str[s][t] == 1) {
                power = Math.pow(2, +str[s].length - t - 1);
                decValue += power;
            }
        }
        sentence += (String.fromCharCode(decValue));
        decValue = 0;
    }

    return sentence;
}
binaryAgent("01000001 01110010 01100101 01101110 00100111 01110100 00100000 01100010 01101111 01101110 01100110 01101001 01110010 01100101 01110011 00100000 01100110 01110101 01101110 00100001 00111111");
        </textarea>`;
        javascriptIntermedAlgScrIncorrectValue.innerHTML = "Incorrect..";
        javascriptIntermedAlgScrNextButton.innerHTML = `<button class="nextButton javascriptColor1" onclick=javascriptIntermedAlgScrBtn()>Next</button>`;
        javascriptIntermedAlgScrRemoveValue.innerHTML = "";



    } else if (javascriptIntermedAlgScrRandomValue == 44 && javascriptIntermedAlgScrInputAnswer == javascriptIntermedAlgScrAnswerArr[44].A44) {
        javascriptIntermedAlgScrCorrectValue.innerHTML = "Correct..";
        javascriptIntermedAlgScrDisplayAnswer.innerHTML = `
        <textarea name="text" class="answer_textarea" id="input">Good Job :) </textarea>`;
        javascriptIntermedAlgScrNextButton.innerHTML = `<button class="nextButton javascriptColor1" onclick=javascriptIntermedAlgScrBtn()>Next</button>`;
        javascriptIntermedAlgScrRemoveValue.innerHTML = "";

    } else if (javascriptIntermedAlgScrRandomValue == 44 && javascriptIntermedAlgScrInputAnswer !== javascriptIntermedAlgScrAnswerArr[44].A44) {
        javascriptIntermedAlgScrDisplayAnswer.innerHTML = `
    <textarea name="text" class="answer_textarea" id="input">
function binaryAgent(str) {
    return String.fromCharCode(...str.split(" ").map(function(char){ return parseInt(char, 2); }));
}
binaryAgent("01000001 01110010 01100101 01101110 00100111 01110100 00100000 01100010 01101111 01101110 01100110 01101001 01110010 01100101 01110011 00100000 01100110 01110101 01101110 00100001 00111111");
        </textarea>`;
        javascriptIntermedAlgScrIncorrectValue.innerHTML = "Incorrect..";
        javascriptIntermedAlgScrNextButton.innerHTML = `<button class="nextButton javascriptColor1" onclick=javascriptIntermedAlgScrBtn()>Next</button>`;
        javascriptIntermedAlgScrRemoveValue.innerHTML = "";



    } else if (javascriptIntermedAlgScrRandomValue == 45 && javascriptIntermedAlgScrInputAnswer == javascriptIntermedAlgScrAnswerArr[45].A45) {
        javascriptIntermedAlgScrCorrectValue.innerHTML = "Correct..";
        javascriptIntermedAlgScrDisplayAnswer.innerHTML = `
        <textarea name="text" class="answer_textarea" id="input">Good Job :) </textarea>`;
        javascriptIntermedAlgScrNextButton.innerHTML = `<button class="nextButton javascriptColor1" onclick=javascriptIntermedAlgScrBtn()>Next</button>`;
        javascriptIntermedAlgScrRemoveValue.innerHTML = "";

    } else if (javascriptIntermedAlgScrRandomValue == 45 && javascriptIntermedAlgScrInputAnswer !== javascriptIntermedAlgScrAnswerArr[45].A45) {
        javascriptIntermedAlgScrDisplayAnswer.innerHTML = `
    <textarea name="text" class="answer_textarea" id="input">
function truthCheck(collection, pre) {
    var counter = 0;
    for (var c in collection) {
        if (collection[c].hasOwnProperty(pre) && Boolean(collection[c][pre])) {
        counter++;
        }
    }
    return counter == collection.length;
}
truthCheck([{"user": "Tinky-Winky", "sex": "male"}, {"user": "Dipsy", "sex": "male"}, {"user": "Laa-Laa", "sex": "female"}, {"user": "Po", "sex": "female"}], "sex");
        </textarea>`;
        javascriptIntermedAlgScrIncorrectValue.innerHTML = "Incorrect..";
        javascriptIntermedAlgScrNextButton.innerHTML = `<button class="nextButton javascriptColor1" onclick=javascriptIntermedAlgScrBtn()>Next</button>`;
        javascriptIntermedAlgScrRemoveValue.innerHTML = "";



    } else if (javascriptIntermedAlgScrRandomValue == 46 && javascriptIntermedAlgScrInputAnswer == javascriptIntermedAlgScrAnswerArr[46].A46) {
        javascriptIntermedAlgScrCorrectValue.innerHTML = "Correct..";
        javascriptIntermedAlgScrDisplayAnswer.innerHTML = `
        <textarea name="text" class="answer_textarea" id="input">Good Job :) </textarea>`;
        javascriptIntermedAlgScrNextButton.innerHTML = `<button class="nextButton javascriptColor1" onclick=javascriptIntermedAlgScrBtn()>Next</button>`;
        javascriptIntermedAlgScrRemoveValue.innerHTML = "";

    } else if (javascriptIntermedAlgScrRandomValue == 46 && javascriptIntermedAlgScrInputAnswer !== javascriptIntermedAlgScrAnswerArr[46].A46) {
        javascriptIntermedAlgScrDisplayAnswer.innerHTML = `
    <textarea name="text" class="answer_textarea" id="input">
function truthCheck(collection, pre) {
    return collection.every(function (element) {
        return element.hasOwnProperty(pre) && Boolean(element[pre]);
    });
}
truthCheck([{"user": "Tinky-Winky", "sex": "male"}, {"user": "Dipsy", "sex": "male"}, {"user": "Laa-Laa", "sex": "female"}, {"user": "Po", "sex": "female"}], "sex");
        </textarea>`;
        javascriptIntermedAlgScrIncorrectValue.innerHTML = "Incorrect..";
        javascriptIntermedAlgScrNextButton.innerHTML = `<button class="nextButton javascriptColor1" onclick=javascriptIntermedAlgScrBtn()>Next</button>`;
        javascriptIntermedAlgScrRemoveValue.innerHTML = "";



    } else if (javascriptIntermedAlgScrRandomValue == 47 && javascriptIntermedAlgScrInputAnswer == javascriptIntermedAlgScrAnswerArr[47].A47) {
        javascriptIntermedAlgScrCorrectValue.innerHTML = "Correct..";
        javascriptIntermedAlgScrDisplayAnswer.innerHTML = `
        <textarea name="text" class="answer_textarea" id="input">Good Job :) </textarea>`;
        javascriptIntermedAlgScrNextButton.innerHTML = `<button class="nextButton javascriptColor1" onclick=javascriptIntermedAlgScrBtn()>Next</button>`;
        javascriptIntermedAlgScrRemoveValue.innerHTML = "";

    } else if (javascriptIntermedAlgScrRandomValue == 47 && javascriptIntermedAlgScrInputAnswer !== javascriptIntermedAlgScrAnswerArr[47].A47) {
        javascriptIntermedAlgScrDisplayAnswer.innerHTML = `
    <textarea name="text" class="answer_textarea" id="input">
function truthCheck(collection, pre) {
    return collection.every(obj => obj[pre]);
}

truthCheck([{"user": "Tinky-Winky", "sex": "male"}, {"user": "Dipsy", "sex": "male"}, {"user": "Laa-Laa", "sex": "female"}, {"user": "Po", "sex": "female"}], "sex"); 
        </textarea>`;
        javascriptIntermedAlgScrIncorrectValue.innerHTML = "Incorrect..";
        javascriptIntermedAlgScrNextButton.innerHTML = `<button class="nextButton javascriptColor1" onclick=javascriptIntermedAlgScrBtn()>Next</button>`;
        javascriptIntermedAlgScrRemoveValue.innerHTML = "";



    } else if (javascriptIntermedAlgScrRandomValue == 48 && javascriptIntermedAlgScrInputAnswer == javascriptIntermedAlgScrAnswerArr[48].A48) {
        javascriptIntermedAlgScrCorrectValue.innerHTML = "Correct..";
        javascriptIntermedAlgScrDisplayAnswer.innerHTML = `
        <textarea name="text" class="answer_textarea" id="input">Good Job :) </textarea>`;
        javascriptIntermedAlgScrNextButton.innerHTML = `<button class="nextButton javascriptColor1" onclick=javascriptIntermedAlgScrBtn()>Next</button>`;
        javascriptIntermedAlgScrRemoveValue.innerHTML = "";

    } else if (javascriptIntermedAlgScrRandomValue == 48 && javascriptIntermedAlgScrInputAnswer !== javascriptIntermedAlgScrAnswerArr[48].A48) {
        javascriptIntermedAlgScrDisplayAnswer.innerHTML = `
    <textarea name="text" class="answer_textarea" id="input">
function addTogether() {
    var checkNum = function(num) {
        if (typeof num !== 'number') {
        return undefined;
        } else
        return num;
    };
    if (arguments.length > 1) {
        var a = checkNum(arguments[0]);
        var b = checkNum(arguments[1]);
        if (a === undefined || b === undefined) {
            return undefined;
        } else {
            return a + b;
        }
    } else {
        var c = arguments[0];
        if (checkNum(c)) {
            return function(arg2) {
                if (c === undefined || checkNum(arg2) === undefined) {
                return undefined;
                } else {
                return c + arg2;
                }
            };
        }
    }
}

addTogether(2,3);
        </textarea>`;
        javascriptIntermedAlgScrIncorrectValue.innerHTML = "Incorrect..";
        javascriptIntermedAlgScrNextButton.innerHTML = `<button class="nextButton javascriptColor1" onclick=javascriptIntermedAlgScrBtn()>Next</button>`;
        javascriptIntermedAlgScrRemoveValue.innerHTML = "";



    } else if (javascriptIntermedAlgScrRandomValue == 49 && javascriptIntermedAlgScrInputAnswer == javascriptIntermedAlgScrAnswerArr[49].A49) {
        javascriptIntermedAlgScrCorrectValue.innerHTML = "Correct..";
        javascriptIntermedAlgScrDisplayAnswer.innerHTML = `
        <textarea name="text" class="answer_textarea" id="input">Good Job :) </textarea>`;
        javascriptIntermedAlgScrNextButton.innerHTML = `<button class="nextButton javascriptColor1" onclick=javascriptIntermedAlgScrBtn()>Next</button>`;
        javascriptIntermedAlgScrRemoveValue.innerHTML = "";

    } else if (javascriptIntermedAlgScrRandomValue == 49 && javascriptIntermedAlgScrInputAnswer !== javascriptIntermedAlgScrAnswerArr[49].A49) {
        javascriptIntermedAlgScrDisplayAnswer.innerHTML = `
    <textarea name="text" class="answer_textarea" id="input">
function addTogether() {
    var args = Array.from(arguments);
    return args.some(n => typeof n !== 'number') ? 
        undefined: 
        args.length > 1 ?
        args.reduce((acc, n) => acc += n, 0):
        (n) => typeof n === "number" ? 
            n + args[0]:
            undefined;
}
addTogether(2,3);
        </textarea>`;
        javascriptIntermedAlgScrIncorrectValue.innerHTML = "Incorrect..";
        javascriptIntermedAlgScrNextButton.innerHTML = `<button class="nextButton javascriptColor1" onclick=javascriptIntermedAlgScrBtn()>Next</button>`;
        javascriptIntermedAlgScrRemoveValue.innerHTML = "";



    } else if (javascriptIntermedAlgScrRandomValue == 50 && javascriptIntermedAlgScrInputAnswer == javascriptIntermedAlgScrAnswerArr[50].A50) {
        javascriptIntermedAlgScrCorrectValue.innerHTML = "Correct..";
        javascriptIntermedAlgScrDisplayAnswer.innerHTML = `
        <textarea name="text" class="answer_textarea" id="input">Good Job :) </textarea>`;
        javascriptIntermedAlgScrNextButton.innerHTML = `<button class="nextButton javascriptColor1" onclick=javascriptIntermedAlgScrBtn()>Next</button>`;
        javascriptIntermedAlgScrRemoveValue.innerHTML = "";

    } else if (javascriptIntermedAlgScrRandomValue == 50 && javascriptIntermedAlgScrInputAnswer !== javascriptIntermedAlgScrAnswerArr[50].A50) {
        javascriptIntermedAlgScrDisplayAnswer.innerHTML = `
    <textarea name="text" class="answer_textarea" id="input">
var Person = function(firstAndLast) {
    var fullName = firstAndLast;

    this.getFirstName = function() {
        return fullName.split(" ")[0];
    };

    this.getLastName = function() {
        return fullName.split(" ")[1];
    };

    this.getFullName = function() {
        return fullName;
    };

    this.setFirstName = function(name) {
        fullName = name + " " + fullName.split(" ")[1];
    };

    this.setLastName = function(name) {
        fullName = fullName.split(" ")[0] + " " + name;
    };

    this.setFullName = function(name) {
        fullName = name;
    };
};

var bob = new Person('Bob Ross');
bob.getFullName();
        </textarea>`;
        javascriptIntermedAlgScrIncorrectValue.innerHTML = "Incorrect..";
        javascriptIntermedAlgScrNextButton.innerHTML = `<button class="nextButton javascriptColor1" onclick=javascriptIntermedAlgScrBtn()>Next</button>`;
        javascriptIntermedAlgScrRemoveValue.innerHTML = "";



    } else if (javascriptIntermedAlgScrRandomValue == 51 && javascriptIntermedAlgScrInputAnswer == javascriptIntermedAlgScrAnswerArr[51].A51) {
        javascriptIntermedAlgScrCorrectValue.innerHTML = "Correct..";
        javascriptIntermedAlgScrDisplayAnswer.innerHTML = `
        <textarea name="text" class="answer_textarea" id="input">Good Job :) </textarea>`;
        javascriptIntermedAlgScrNextButton.innerHTML = `<button class="nextButton javascriptColor1" onclick=javascriptIntermedAlgScrBtn()>Next</button>`;
        javascriptIntermedAlgScrRemoveValue.innerHTML = "";

    } else if (javascriptIntermedAlgScrRandomValue == 51 && javascriptIntermedAlgScrInputAnswer !== javascriptIntermedAlgScrAnswerArr[51].A51) {
        javascriptIntermedAlgScrDisplayAnswer.innerHTML = `
    <textarea name="text" class="answer_textarea" id="input">
function orbitalPeriod(arr) {
    var GM = 398600.4418;
    var earthRadius = 6367.4447;
    var a = 2 * Math.PI;
    var newArr = [];
    var getOrbPeriod = function(obj) {
        var c = Math.pow(earthRadius + obj.avgAlt, 3);
        var b = Math.sqrt(c / GM);
        var orbPeriod = Math.round(a * b);
        delete obj.avgAlt;
        obj.orbitalPeriod = orbPeriod;
        return obj;
    };

    for (var elem in arr) {
        newArr.push(getOrbPeriod(arr[elem]));
    }

    return newArr;
}
orbitalPeriod([{name : "sputnik", avgAlt : 35873.5553}]);
        </textarea>`;
        javascriptIntermedAlgScrIncorrectValue.innerHTML = "Incorrect..";
        javascriptIntermedAlgScrNextButton.innerHTML = `<button class="nextButton javascriptColor1" onclick=javascriptIntermedAlgScrBtn()>Next</button>`;
        javascriptIntermedAlgScrRemoveValue.innerHTML = "";



    } else if (javascriptIntermedAlgScrRandomValue == 52 && javascriptIntermedAlgScrInputAnswer == javascriptIntermedAlgScrAnswerArr[52].A52) {
        javascriptIntermedAlgScrCorrectValue.innerHTML = "Correct..";
        javascriptIntermedAlgScrDisplayAnswer.innerHTML = `
        <textarea name="text" class="answer_textarea" id="input">Good Job :) </textarea>`;
        javascriptIntermedAlgScrNextButton.innerHTML = `<button class="nextButton javascriptColor1" onclick=javascriptIntermedAlgScrBtn()>Next</button>`;
        javascriptIntermedAlgScrRemoveValue.innerHTML = "";

    } else if (javascriptIntermedAlgScrRandomValue == 52 && javascriptIntermedAlgScrInputAnswer !== javascriptIntermedAlgScrAnswerArr[52].A52) {
        javascriptIntermedAlgScrDisplayAnswer.innerHTML = `
    <textarea name="text" class="answer_textarea" id="input">
function orbitalPeriod(arr) {
    var GM = 398600.4418;
    var earthRadius = 6367.4447;

    for(var prop in arr) {
        var orbitalPer = Math.round(2 * Math.PI * Math.sqrt(Math.pow(arr[prop].avgAlt + earthRadius, 3) / GM));
        delete arr[prop].avgAlt;
        arr[prop].orbitalPeriod = orbitalPer;
    }

    return arr;
}
orbitalPeriod([{name : "sputnik", avgAlt : 35873.5553}]);
        </textarea>`;
        javascriptIntermedAlgScrIncorrectValue.innerHTML = "Incorrect..";
        javascriptIntermedAlgScrNextButton.innerHTML = `<button class="nextButton javascriptColor1" onclick=javascriptIntermedAlgScrBtn()>Next</button>`;
        javascriptIntermedAlgScrRemoveValue.innerHTML = "";



    }else if (javascriptIntermedAlgScrRandomValue == 53 && javascriptIntermedAlgScrInputAnswer == javascriptIntermedAlgScrAnswerArr[53].A53) {
        javascriptIntermedAlgScrCorrectValue.innerHTML = "Correct..";
        javascriptIntermedAlgScrDisplayAnswer.innerHTML = `
        <textarea name="text" class="answer_textarea" id="input">Good Job :) </textarea>`;
        javascriptIntermedAlgScrNextButton.innerHTML = `<button class="nextButton javascriptColor1" onclick=javascriptIntermedAlgScrBtn()>Next</button>`;
        javascriptIntermedAlgScrRemoveValue.innerHTML = "";

    } else if (javascriptIntermedAlgScrRandomValue == 53 && javascriptIntermedAlgScrInputAnswer !== javascriptIntermedAlgScrAnswerArr[53].A53) {
        javascriptIntermedAlgScrDisplayAnswer.innerHTML = `
    <textarea name="text" class="answer_textarea" id="input">
function orbitalPeriod(arr) {
    var GM = 398600.4418;
    var earthRadius = 6367.4447;

    arr.forEach(function(item) {
        var tmp = Math.round(2 * Math.PI * Math.sqrt(Math.pow(earthRadius + item.avgAlt, 3) / GM));
        delete item.avgAlt;
        item.orbitalPeriod = tmp;
    });
    return arr;
}
orbitalPeriod([{name : "sputnik", avgAlt : 35873.5553}]);
        </textarea>`;
        javascriptIntermedAlgScrIncorrectValue.innerHTML = "Incorrect..";
        javascriptIntermedAlgScrNextButton.innerHTML = `<button class="nextButton javascriptColor1" onclick=javascriptIntermedAlgScrBtn()>Next</button>`;
        javascriptIntermedAlgScrRemoveValue.innerHTML = "";



    } else {
        javascriptIntermedAlgScrIncorrectValue.innerHTML = "Incorrect..";
        javascriptIntermedAlgScrNextButton.innerHTML = `<button class="nextButton javascriptColor1" onclick=javascriptIntermedAlgScrBtn()>Next</button>`;
        javascriptIntermedAlgScrRemoveValue.innerHTML = "";
    }

}
window.javascriptIntermedAlgScrSubmit = javascriptIntermedAlgScrSubmit; /* to make submit global*/

function javascriptIntermedAlgScrButton() {
    javascriptIntermedAlgScrTest = document.getElementById("javascriptIntermedAlgScrAddedQuestion").innerHTML = javascriptIntermedAlgScrQuestionArr[javascriptIntermedAlgScrRandomValue]; /* giving random question to html */

    return javascriptIntermedAlgScrTest;
}
window.javascriptIntermedAlgScrButton = javascriptIntermedAlgScrButton;

function javascriptIntermedAlgScrShowTest() {
    var javascriptIntermedAlgScrInputBox = document.getElementById("javascriptIntermedAlgScrRemove").style.display = "block";
    return javascriptIntermedAlgScrInputBox;
}
window.javascriptIntermedAlgScrShowTest = javascriptIntermedAlgScrShowTest;

function javascriptIntermedAlgScrBtn() {
    javascriptIntermedAlgScrRandomValue = Math.floor(Math.random() * javascriptIntermedAlgScrQuestionArr.length); /* buton next in html to make a next random question*/
    document.getElementById("javascriptIntermedAlgScrAddedQuestion").innerHTML = javascriptIntermedAlgScrQuestionArr[javascriptIntermedAlgScrRandomValue]; /* giving random question to html */
    document.getElementById("javascriptIntermedAlgScrElementButton").innerHTML = "";/* to clean javascriptIntermedAlgScrElementButton*/
    document.getElementById("javascriptIntermedAlgScrRemove").innerHTML = `<textarea name="text" class="answer_textarea" id="input"></textarea></br>
      <button class="answer_submit javascriptColor1" id = "javascriptIntermedAlgScrStartButton" onclick="javascriptIntermedAlgScrSubmit()">Submit</button>`;/* to create next text area and Submit button. */
    document.getElementById("javascriptIntermedAlgScrCheckingAnswer").innerHTML = "";
    document.getElementById("javascriptIntermedAlgScrShowingAnswer").innerHTML = "";
}
window.javascriptIntermedAlgScrBtn = javascriptIntermedAlgScrBtn;/* to make submit global*/



/***/ }
/******/ ]);