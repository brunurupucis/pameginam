export var javascriptEs6QuestionArr = [
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
