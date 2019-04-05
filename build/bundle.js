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
/******/ 	return __webpack_require__(__webpack_require__.s = 6);
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
/* 6 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__questionsAndAnswers_htmlQuestions__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__questionsAndAnswers_htmlAnswers__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__questionsAndAnswers_cssQuestions__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__questionsAndAnswers_cssAnswers__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__questionsAndAnswers_javascriptAnswers__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__questionsAndAnswers_javascriptQuestions__ = __webpack_require__(5);


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




















 /* importing  array from other js file with webpack*/

 /* importing  array from other js file with webpack*/




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



/***/ }
/******/ ]);