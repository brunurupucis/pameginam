export var javascriptAnswerArr = [
{A0:`var myName;
  `.replace(/\s+/g, '')}, 

{A1:`var a = 7;
var b = a;`.replace(/\s+/g, '')},

{A2:`var a = 9;`.replace(/\s+/g, '')},

{A3:`var a = 5;
var b = 10;
var c = "I am a";
a = a + 1;
b = b + 5;
c = c + " String!";
`.replace(/\s+/g, '')},


{A4:`
var studlyCapVar ;
var properCamelCase;
var titleCaseOver;

var studlyCapVar = 10;
var properCamelCase = "A String";
var titleCaseOver = 9000;`.replace(/\s+/g, '')},

{A5:`var sum = 10 + 10;
`.replace(/\s+/g, '')},

{A6:`var difference = 45 - 33;

`.replace(/\s+/g, '')},

{A7:`var product = 8 * 10;

`.replace(/\s+/g, '')},

{A8:`var quotient = 66 / 33;

`.replace(/\s+/g, '')},

{A9:`var myVar = 87;
myVar++;`.replace(/\s+/g, '')},

{A10:`var myVar = 11;
myVar--;`.replace(/\s+/g, '')},

{A11:`var myDecimal = 5.7;`.replace(/\s+/g, '')},

{A12:`var product = 2.0 * 2.5;`.replace(/\s+/g, '')},

{A13:`var quotient = 4.4 / 2.0;`.replace(/\s+/g, '')},

{A14:`var remainder = 11 % 3;`.replace(/\s+/g, '')},

{A15:`var a = 3;
var b = 17;
var c = 12;

a +=12;
b += 9;
c +=7;`.replace(/\s+/g, '')},

{A16:`var a = 11;
var b = 9;
var c = 3;

a -= 6;
b -= 15;
c -= 1;`.replace(/\s+/g, '')},

{A17:`var a = 5;
var b = 12;
var c = 4.6;

a *=5;
b *= 3;
c *=10;
`.replace(/\s+/g, '')},

{A18:`var a = 48;
var b = 108;
var c = 33;

a /=12;
b /=4;
c /=11;
`.replace(/\s+/g, '')},

{A19:`var myFirstName = "first name";
var myLastName = "last name";
`.replace(/\s+/g, '')},

{A20:`var myStr = "I am a \"double quoted\" string inside \"double quotes\".";`.replace(/\s+/g, '')},

{A21:`var myStr = '<a href="http://www.example.com" target="_blank">Link</a>';`.replace(/\s+/g, '')},

{A22:`var myStr = "\'FirstLine\n\t\SecondLine\nThirdLine";`.replace(/\s+/g, '')},

{A23:`var myStr="This is the start. " + "This is the end.";`.replace(/\s+/g, '')},


{A24:`var myStr = "This is the first sentence. ";
myStr += "This is the second sentence.";`.replace(/\s+/g, '')},

{A25:`var myName  = "your name";
var myStr = "My name is " + myName +  " and I am well!";`.replace(/\s+/g, '')},

{A26:`var someAdjective = "awesome!";
var myStr = "Learning to code is ";
 myStr +=someAdjective; `.replace(/\s+/g, '')},

{A27:`var lastNameLength = 0;
var lastName = "Lovelace";
lastNameLength = lastName.length;`.replace(/\s+/g, '')},

{A28:`var firstLetterOfLastName = "";
var lastName = "Lovelace";
firstLetterOfLastName = lastName[0];`.replace(/\s+/g, '')},

{A29:`
var myStr = "Jello World";
myStr = "Hello World";`.replace(/\s+/g, '')},

{A30:`var lastName = "Lovelace";
var thirdLetterOfLastName = lastName[2];`.replace(/\s+/g, '')},

{A31:`var lastName = "Lovelace";
var lastLetterOfLastName = lastName[lastName.length - 1];`.replace(/\s+/g, '')},

{A32:`var lastName = "Lovelace";
var secondToLastLetterOfLastName = lastName[lastName.length - 2];`.replace(/\s+/g, '')},

{A33:`function wordBlanks(myNoun, myAdjective, myVerb, myAdverb) {
  var result = "";
  result+= "My "+myAdjective+" "+myNoun+" "+myVerb+" very "+myAdverb+".";
return result;
}
wordBlanks("dog", "big", "ran", "quickly");`.replace(/\s+/g, '')},

{A34:`var myArray = ["test", 0];`.replace(/\s+/g, '')},

{A35:`var myArray = [["the universe", 42], ["everything", 101010]];`.replace(/\s+/g, '')},

{A36:`var myArray = [50,60,70];
var myData = myArray[0];`.replace(/\s+/g, '')},

{A37:`var myArray = [18,64,99];
myArray[0] = 45;`.replace(/\s+/g, '')},

{A38:`var myArray = [[1,2,3], [4,5,6], [7,8,9], [[10,11,12], 13, 14]];
var myData = myArray[2][1];`.replace(/\s+/g, '')},

{A39:`var myArray = [["John", 23], ["cat", 2]];
myArray.push(["dog", 3]);`.replace(/\s+/g, '')},

{A40:`var myArray = [["John", 23], ["cat", 2]];
var removedFromMyArray = myArray.pop();`.replace(/\s+/g, '')},

{A41:`var myArray = [["John", 23], ["dog", 3]];
var removedFromMyArray = myArray.shift();`.replace(/\s+/g, '')},

{A42:`var myArray = [["John", 23], ["dog", 3]];
myArray.shift();
myArray.unshift( ["Paul",35]);`.replace(/\s+/g, '')},

{A43:`var myList = [["Canned Beans", 3],["Milk Galon", 1],["Cereal", 2],["Toilet Paper", 12],["Sack of Rice", 1]];`.replace(/\s+/g, '')},

{A44:`function reusableFunction() {
  console.log("Hi World");
}

reusableFunction();`.replace(/\s+/g, '')},

{A45:`function functionWithArgs(a, b) {
  console.log(a + b);
}
functionWithArgs(10, 5);`.replace(/\s+/g, '')},

{A46:`
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
}`.replace(/\s+/g, '')},


{A47:`function myLocalScope() {
  var myVar;
  console.log(myVar);
}
myLocalScope();`.replace(/\s+/g, '')},

{A48:`var outerWear = "T-Shirt";
function myOutfit() {
  var outerWear = "sweater";
  return outerWear;
}
myOutfit();`.replace(/\s+/g, '')},

{A49:`function timesFive(num) {
  return num * 5;
}`.replace(/\s+/g, '')},

{A50:`function addFive() {
  sum += 5;
}`.replace(/\s+/g, '')},


{A51:`var processed = 0;

function processArg(num) {
  return (num + 3) / 5;
}
processed = processArg(7);`.replace(/\s+/g, '')},
{A52:`function nextInLine(arr, item) {
  arr.push(item);
  var removed = arr.shift();
  return removed;  
}
var testArr = [1,2,3,4,5];

console.log("Before: " + JSON.stringify(testArr));
console.log(nextInLine(testArr, 6));
console.log("After: " + JSON.stringify(testArr));`.replace(/\s+/g, '')},

{A53:`function welcomeToBooleans() {
  return true; 
  }`.replace(/\s+/g, '')},

{A54:`
function trueOrFalse(wasThatTrue) {
  if (wasThatTrue) 
   {
    return "Yes, that was true";
    }
  return "No, that was false";
 
 }`.replace(/\s+/g, '')},

{A55:`function testEqual(val) {
  if (val == 12) { 
    return "Equal";
  }
  return "Not Equal";
}
testEqual(10);`.replace(/\s+/g, '')},

{A56:`
function testStrict(val) {
  if (val === 7) { 
    return "Equal";
  }
  return "Not Equal";
}
testStrict(10);`.replace(/\s+/g, '')},

{A57:`
function compareEquality(a, b) {
	if (a === b) {
		return  "Equal";
	}
	return  "Not Equal";
}
compareEquality(10, "10");`.replace(/\s+/g, '')},

{A58:`function testNotEqual(val) {
  if (val != 99) 
    return "Not Equal";
  
  return "Equal";
}`.replace(/\s+/g, '')},

{A59:`function testStrictNotEqual(val) {
  if (val !== 17) {
    return "Not Equal";
  }
  return "Equal";
}
testStrictNotEqual(10);`.replace(/\s+/g, '')},

{A60:`function testGreaterThan(val) {
  if (val > 100) { 
    return "Over 100";
  }

  if (val > 10) { 
    return "Over 10";
  }

  return "10 or Under";
}

// Change this value to test
testGreaterThan(10);`.replace(/\s+/g, '')},

{A61:`function testGreaterOrEqual(val) {
  if (val >= 20){
    return "20 or Over";
  }
  if (val >= 10){
    return "10 or Over";
  }
  return "Less than 10";
}`.replace(/\s+/g, '')},

{A62:`function testLessThan(val) {
  if (val < 25){
    return "Under 25";
  }
  if (val < 55){
    return "Under 55";
  }
  return "55 or Over";
}`.replace(/\s+/g, '')},

{A63:`function testLessOrEqual(val) {
  if (val <= 12){
    return "Smaller Than or Equal to 12";
  }
  if (val <= 24){
    return "Smaller Than or Equal to 24";
  }
  return "More Than 24";
}`.replace(/\s+/g, '')},

{A64:`function testLogicalAnd(val) {
  if (val <= 50 && val >= 25) {
      return "Yes";
  }
  return "No";
}
testLogicalAnd(10);`.replace(/\s+/g, '')},

{A65:`function testLogicalOr(val) {
if ( val < 10 || val > 20 ) {
    return "Outside";
}
  return "Inside";
}
testLogicalOr(15);`.replace(/\s+/g, '')},

{A66:`function testElse(val) {
  var result = "";
  if (val > 5) {
  return "Bigger than 5";
  
  } else {
  return "5 or Smaller";
  }
  return result;
  }
  testElse(4);`.replace(/\s+/g, '')},

{A67:`function testElseIf(val) {
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
testElseIf(7);`.replace(/\s+/g, '')},

{A68:`function orderMyLogic(val) {
  if (val < 5) {
  return "Less than 5";
  } else if (val < 10) {
  return "Less than 10";
  } else {
  return "Greater than or equal to 10";
  }
  }`.replace(/\s+/g, '')},

{A69:`function testSize(num) {
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
testSize(7);`.replace(/\s+/g, '')},

{A70:`function golfScore(par, strokes) {
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
golfScore(5, 4);`.replace(/\s+/g, '')},


{A71:`function caseInSwitch(val) {
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
caseInSwitch(1);`.replace(/\s+/g, '')},

{A72:`function switchOfStuff(val) {
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
`.replace(/\s+/g, '')},

{A73:`function sequentialSizes(val) {
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
sequentialSizes(1);`.replace(/\s+/g, '')},

{A74:`function chainToSwitch(val) {
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
chainToSwitch(7);`.replace(/\s+/g, '')},

{A75:`function isLess(a, b) {
  return a <= b;
}
isLess(10, 15);`.replace(/\s+/g, '')},

{A76:`
function abTest(a, b) {
  if (a < 0 || b < 0) return undefined;

return Math.round(Math.pow(Math.sqrt(a) + Math.sqrt(b), 2));
}
abTest(2,2);`.replace(/\s+/g, '')},


{A77:`var count = 0;

function cc(card) {
  var regex = /[JQKA]/;
  if (card > 1 && card < 7){count++;}
  else if (card === 10 || String(card).match(regex)){count--;}

  if (count > 0) return count + " Bet";
  return count + " Hold";

}
cc(2); cc(3); cc(7); cc('K'); cc('A');`.replace(/\s+/g, '')},

{A78:`
var myDog = {
    "name": "Camper",
  "legs": 4,
  "tails": 1,
  "friends": ["everything!"]
};`.replace(/\s+/g, '')},

{A79:`var testObj = {
  "hat": "ballcap",
  "shirt": "jersey",
  "shoes": "cleats"
};
var hatValue = testObj.hat;  
var shirtValue = testObj.shirt; `.replace(/\s+/g, '')},

{A80:`var testObj = {
  "an entree": "hamburger",
  "my side": "veggies",
  "the drink": "water"
};
var entreeValue = testObj["an entree"];  
var drinkValue = testObj["the drink"];`.replace(/\s+/g, '')},

{A81:`
var testObj = {
  12: "Namath",
  16: "Montana",
  19: "Unitas"
};
var playerNumber = 16; 
var player = testObj[playerNumber];   `.replace(/\s+/g, '')},

{A82:`
var myDog = {
  "name": "Coder",
  "legs": 4,
  "tails": 1,
  "friends": ["freeCodeCamp Campers"]
};
myDog.name = "Happy Coder";`.replace(/\s+/g, '')},

{A83:`var myDog = {
  "name": "Happy Coder",
  "legs": 4,
  "tails": 1,
  "friends": ["freeCodeCamp Campers"]
};
myDog.bark = "woof";`.replace(/\s+/g, '')},

{A84:`
var myDog = {
  "name": "Happy Coder",
  "legs": 4,
  "tails": 1,
  "friends": ["freeCodeCamp Campers"],
  "bark": "woof"
};
delete myDog.tails;
`.replace(/\s+/g, '')},

{A85:`function phoneticLookup(val) {
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
  
  phoneticLookup("charlie");`.replace(/\s+/g, '')},

{A86:`// Setup
var myObj = {
  gift: "pony",
  pet: "kitten",
  bed: "sleigh"
};
function checkObj(checkProp) {
  // Your Code Here
  if (myObj.hasOwnProperty(checkProp) === true) {
    return myObj[checkProp];
  } else {
    return "Not Found";
  }
}
checkObj("gift");`.replace(/\s+/g, '')},

{A87:`var myMusic = [
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
 ];`.replace(/\s+/g, '')},

{A88:`
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
`.replace(/\s+/g, '')},

{A89:`
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

var secondTree = myPlants[1].list[1];`.replace(/\s+/g, '')},

{A90:`
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
`.replace(/\s+/g, '')},

{A91:`var myArray = [];
var i = 0;
while (i <= 4){
    myArray.push(i);
    i++;
}`.replace(/\s+/g, '')},

{A92:`var myArray = [];
for(var i=1; i<=5; i++){
myArray.push(i);
}`.replace(/\s+/g, '')},

{A93:`var myArray = [];
for (var i = 1; i < 10; i += 2) {
myArray.push(i);
}`.replace(/\s+/g, '')},

{A94:`var myArray = [];

for (var i = 9; i > 0; i-=2){
  myArray.push(i)
}`.replace(/\s+/g, '')},

{A95:`var myArr = [ 2, 3, 4, 5, 6];
var total = 0;

for (var i = 0; i < myArr.length; i++) {
  total += myArr[i];
}`.replace(/\s+/g, '')},

{A96:`function multiplyAll(arr) {
  var product = 1;
  for(var i=0; i < arr.length; i++){
    for (var j=0; j < arr[i].length; j++){
      product = product * arr[i][j];
    }
  }
  return product;
}
multiplyAll([[1,2],[3,4],[5,6,7]]);`.replace(/\s+/g, '')},

{A97:`var myArray = [];
var i = 10;
do {
  myArray.push(i);
  i++;
} while (i < 5)`.replace(/\s+/g, '')},

{A98:`var contacts = [
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
lookUpProfile("Akira", "likes");`.replace(/\s+/g, '')},

{A99:`function randomFraction() {
  var result = 0;
  while (result === 0) {
    result = Math.random();
  }

  return result;  

}`.replace(/\s+/g, '')},

{A100:`var randomNumberBetween0and19 = Math.floor(Math.random() * 20);

function randomWholeNum() {

  return Math.floor(Math.random() * 10);
}`.replace(/\s+/g, '')},

{A101:`function randomRange(myMin, myMax) {

  return Math.floor(Math.random() * (myMax - myMin + 1) + myMin);

}
var myRandom = randomRange(5, 15);`.replace(/\s+/g, '')},

{A102:`function convertToInteger(str) {

  return parseInt(str);
  }
  
  convertToInteger("10011");`.replace(/\s+/g, '')},

{A103:`function convertToInteger(str) {
  var radix = 2;
  return parseInt(str, radix);
  }
  
  convertToInteger("10011");`.replace(/\s+/g, '')},

{A104:`function checkEqual(a, b) {
  return a === b ? true : false;
}
checkEqual(1, 2);`.replace(/\s+/g, '')},

{A105:`function checkSign(num) {
  return (
    num > 0 ? "positive" :
    num < 0 ? "negative" :
    "zero"
  );
}`.replace(/\s+/g, '')},

];