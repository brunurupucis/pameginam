export var javascriptRegExpressAnswerArr = [
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
