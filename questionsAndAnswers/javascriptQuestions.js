export var javascriptQuestionArr = [
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
