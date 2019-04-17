export var javascriptRegExpressQuestionArr = [
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
