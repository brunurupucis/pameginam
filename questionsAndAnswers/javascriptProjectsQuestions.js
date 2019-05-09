export var javascriptProjectsQuestionArr = [
  `0.JavaScript Algorithms and Data Structures Projects: <br>Palindrome Checker<br>
  Return true if the given string is a palindrome. <br>Otherwise, return false.<br>
  <br>
  A palindrome is a word or sentence that's spelled the same way both forward and backward, ignoring punctuation, case, and spacing.<br>
  <br>
  Note<br>
  You'll need to remove all non-alphanumeric characters (punctuation, spaces and symbols) and turn everything into the same case (lower or upper case) in order to check for palindromes.<br>
  <br>
  We'll pass strings with varying formats, such as "racecar", "RaceCar", and "race CAR" among others.<br>
  <br>
  We'll also pass strings with special symbols, such as "2A3*3a2", "2A3 3a2", and "2_A3*3#A2".<br>
  <br>
  Basic Code Solution.<br>
  <br>
  <br>
  function palindrome(str) {<br>
    // Good luck!<br>
    return true;<br>
  }<br>
  
  <br>
  <br>
  palindrome("eye");`,


  
  `1.JavaScript Algorithms and Data Structures Projects:<br> Palindrome Checker<br>
  Return true if the given string is a palindrome. <br>Otherwise, return false.<br>
  <br>
  A palindrome is a word or sentence that's spelled the same way both forward and backward, ignoring punctuation, case, and spacing.<br>
  <br>
  Note<br>
  You'll need to remove all non-alphanumeric characters (punctuation, spaces and symbols) and turn everything into the same case (lower or upper case) in order to check for palindromes.<br>
  <br>
  We'll pass strings with varying formats, such as "racecar", "RaceCar", and "race CAR" among others.<br>
  <br>
  We'll also pass strings with special symbols, such as "2A3*3a2", "2A3 3a2", and "2_A3*3#A2".<br>
  <br>
  Intermediate Code Solution.<br>
  <br>
  <br>
  function palindrome(str) {<br>
    // Good luck!<br>
    return true;<br>
  }<br>
  
  <br>
  <br>
  palindrome("eye");`,

  `2.JavaScript Algorithms and Data Structures Projects:<br> Palindrome Checker<br>
  Return true if the given string is a palindrome. <br>Otherwise, return false.<br>
  <br>
  A palindrome is a word or sentence that's spelled the same way both forward and backward, ignoring punctuation, case, and spacing.<br>
  <br>
  Note<br>
  You'll need to remove all non-alphanumeric characters (punctuation, spaces and symbols) and turn everything into the same case (lower or upper case) in order to check for palindromes.<br>
  <br>
  We'll pass strings with varying formats, such as "racecar", "RaceCar", and "race CAR" among others.<br>
  <br>
  We'll also pass strings with special symbols, such as "2A3*3a2", "2A3 3a2", and "2_A3*3#A2".<br>
  <br>
  <br>
  Advanced Code Solution.<br>
  <br>
  <br>
  function palindrome(str) {<br>
    // Good luck!<br>
    return true;<br>
  }<br>
  <br>
  <br>
  <br>
  palindrome("eye");`,

  `3.JavaScript Algorithms and Data Structures Projects: <br>Roman Numeral Converter<br>
  Convert the given number into a roman numeral.<br>
  <br>
  All roman numerals answers should be provided in upper-case.<br>
  <br>
  Basic Code Solution.<br>
  <br>
  function convertToRoman(num) {<br>
    return num;<br>
   }<br>
   <br>
   convertToRoman(36);`,

  `4.JavaScript Algorithms and Data Structures Projects:<br> Roman Numeral Converter<br>
  Convert the given number into a roman numeral.<br>
  <br>
  All roman numerals answers should be provided in upper-case.<br>
  <br>
  Intermediate Code Solution.<br>
  <br>
  function convertToRoman(num) {<br>
    return num;<br>
   }<br>
   <br>
   convertToRoman(36);
`,

  `5.JavaScript Algorithms and Data Structures Projects:<br> Caesars Cipher<br>
  One of the simplest and most widely known ciphers is a Caesar cipher, also known as a shift cipher. In a shift cipher the meanings of the letters are shifted by some set amount.<br>
  <br>
  A common modern use is the ROT13 cipher, where the values of the letters are shifted by 13 places. Thus 'A' ↔ 'N', 'B' ↔ 'O' and so on.<br>
  <br>
  Write a function which takes a ROT13 encoded string as input and returns a decoded string.<br>
  <br>
  All letters will be uppercase. Do not transform any non-alphabetic character (i.e. spaces, punctuation), but do pass them on.<br>
  <br>
  <br>
  Intermediate Code Solution.<br>
  <br>
  <br>
  function rot13(str) { // LBH QVQ VG!<br>
    <br>
    return str;<br>
  }<br>
  <br>
  // Change the inputs below to test<br>
  rot13("SERR PBQR PNZC");`,

  `6.JavaScript Algorithms and Data Structures Projects:<br> Caesars Cipher<br>
  One of the simplest and most widely known ciphers is a Caesar cipher, also known as a shift cipher. In a shift cipher the meanings of the letters are shifted by some set amount.<br>
  <br>
  A common modern use is the ROT13 cipher, where the values of the letters are shifted by 13 places. Thus 'A' ↔ 'N', 'B' ↔ 'O' and so on.<br>
  <br>
  Write a function which takes a ROT13 encoded string as input and returns a decoded string.<br>
  <br>
  All letters will be uppercase. Do not transform any non-alphabetic character (i.e. spaces, punctuation), but do pass them on.<br>
  <br>
  <br>
  Advanced Code Solution.<br>
  <br>
  <br>
  function rot13(str) { // LBH QVQ VG!<br>
    <br>
    return str;<br>
  }<br>
  <br>
  // Change the inputs below to test<br>
  rot13("SERR PBQR PNZC");
  `,

  `7.JavaScript Algorithms and Data Structures Projects: <br>Telephone Number Validator<br>
  <br>
  Return true if the passed string looks like a valid US phone number.<br>
  <br>
  The user may fill out the form field any way they choose as long as it has the format of a valid US number. The following are examples of valid formats for US numbers (refer to the tests below for other variants):<br>
  <br>
  555-555-5555<br>
  (555)555-5555<br>
  (555) 555-5555<br>
  555 555 5555<br>
  5555555555<br>
  1 555 555 5555<br>
  For this challenge you will be presented with a string such as 800-692-7753 or 8oo-six427676;laskdjf.<br> Your job is to validate or reject the US phone number based on any combination of the formats provided above.<br> The area code is required. If the country code is provided, you must confirm that the country code is 1. Return true if the string is a valid US phone number; otherwise return false.<br>
  <br>
  Basic Code Solution.<br>
  <br>
  function telephoneCheck(str) {<br>
    // Good luck!<br>
    return true;<br>
  }<br>
  <br>
  telephoneCheck("555-555-5555");<br>
  `,

  `8.JavaScript Algorithms and Data Structures Projects: <br>Cash Register<br>
  Design a cash register drawer function checkCashRegister() that accepts purchase price as the first argument (price), payment as the second argument (cash), and cash-in-drawer (cid) as the third argument.<br>
  <br>
  cid is a 2D array listing available currency.<br>
  <br>
  The checkCashRegister() function should always return an object with a status key and a change key.<br>
  <br>
  Return {status: "INSUFFICIENT_FUNDS", change: []} if cash-in-drawer is less than the change due, or if you cannot return the exact change.<br>
  <br>
  Return {status: "CLOSED", change: [...]} with cash-in-drawer as the value for the key change if it is equal to the change due.<br>
  <br>
  Otherwise, return {status: "OPEN", change: [...]}, with the change due in coins and bills, sorted in highest to lowest order, as the value of the change key.<br>
  <br>
  <br>
  Basic Code Solution.<br>
  <br>
  <br>
  <br>
  function checkCashRegister(price, cash, cid) {<br>
    var change;<br>
    // Here is your change, ma'am.<br>
    return change;<br>
  }<br>
  <br>
  // Example cash-in-drawer array:<br>
  // [["PENNY", 1.01],<br>
  // ["NICKEL", 2.05],<br>
  // ["DIME", 3.1],<br>
  // ["QUARTER", 4.25],<br>
  // ["ONE", 90],<br>
  // ["FIVE", 55],<br>
  // ["TEN", 20],<br>
  // ["TWENTY", 60],<br>
  // ["ONE HUNDRED", 100]]<br>
  <br>
  checkCashRegister(19.5, 20, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]);
`
];
