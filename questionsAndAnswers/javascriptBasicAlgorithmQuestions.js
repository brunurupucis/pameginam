export var javascriptBasicAlgorithmQuestionArr = [
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
