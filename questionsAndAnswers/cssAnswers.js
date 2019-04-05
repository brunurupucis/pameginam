export var cssAnswerArr = [
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
