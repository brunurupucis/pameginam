export var javascriptBasicDataStructureQuestionArr = [
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
