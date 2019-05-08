

var javascriptIntermedAlgScrRandomValue = Math.floor(Math.random() * javascriptIntermedAlgScrQuestionArr.length); /* taking random question from htmlQuestionArr*/


function javascriptIntermedAlgScrSubmit() { /* function for html submit button*/

    var javascriptIntermedAlgScrInputAnswer = input.value.replace(/\s+/g, ``); /*replace(/\s+/g, `` is removing all spaces. Avoid checking all the spaces to compare text*/
    var javascriptIntermedAlgScrCorrectValue = document.getElementById("javascriptIntermedAlgScrCheckingAnswer"); /* making getElementById code shorter*/
    var javascriptIntermedAlgScrIncorrectValue = document.getElementById("javascriptIntermedAlgScrCheckingAnswer");
    var javascriptIntermedAlgScrDisplayAnswer = document.getElementById("javascriptIntermedAlgScrShowingAnswer");
    var javascriptIntermedAlgScrNextButton = document.getElementById("javascriptIntermedAlgScrElementButton");
    var javascriptIntermedAlgScrRemoveValue = document.getElementById("javascriptIntermedAlgScrRemove");

    if (javascriptIntermedAlgScrRandomValue == 0 && javascriptIntermedAlgScrInputAnswer == javascriptIntermedAlgScrAnswerArr[0].A0) { /* checking if javascriptIntermedAlgScrRandomValue is 0 and if putting answer the same as javascriptIntermedAlgScrAnswerArr*//*A0 is just that I can track answer numbers when adding questions and answers*/
        javascriptIntermedAlgScrCorrectValue.innerHTML = "Correct..";
        javascriptIntermedAlgScrDisplayAnswer.innerHTML = `
        <textarea name="text" class="answer_textarea" id="input">Good Job :) </textarea>`;
        javascriptIntermedAlgScrNextButton.innerHTML = `<button class="nextButton javascriptColor1" onclick=javascriptIntermedAlgScrBtn()>Next</button>`; /* creating next button with javascriptIntermedAlgScrBtn()function*/
        javascriptIntermedAlgScrRemoveValue.innerHTML = "";/* removing in html answer*/



    } else if (javascriptIntermedAlgScrRandomValue == 0 && javascriptIntermedAlgScrInputAnswer !== javascriptIntermedAlgScrAnswerArr[0].A0) {/*  if random value not == then giving then display the answere.*/
        javascriptIntermedAlgScrDisplayAnswer.innerHTML = `
    <textarea name="text" class="answer_textarea" id="input">
let myString = "Hello, World!";
let myRegex = /Hello/;
let result = myRegex.test(myString);
        </textarea>`;
        javascriptIntermedAlgScrIncorrectValue.innerHTML = "Incorrect..";
        javascriptIntermedAlgScrNextButton.innerHTML = `<button class="nextButton javascriptColor1" onclick=javascriptIntermedAlgScrBtn()>Next</button>`;
        javascriptIntermedAlgScrRemoveValue.innerHTML = "";



    } else if (javascriptIntermedAlgScrRandomValue == 1 && javascriptIntermedAlgScrInputAnswer == javascriptIntermedAlgScrAnswerArr[1].A1) {
        javascriptIntermedAlgScrCorrectValue.innerHTML = "Correct..";
        javascriptIntermedAlgScrDisplayAnswer.innerHTML = `
        <textarea name="text" class="answer_textarea" id="input">Good Job :) </textarea>`;
        javascriptIntermedAlgScrNextButton.innerHTML = `<button class="nextButton javascriptColor1" onclick=javascriptIntermedAlgScrBtn()>Next</button>`;
        javascriptIntermedAlgScrRemoveValue.innerHTML = "";

    } else if (javascriptIntermedAlgScrRandomValue == 1 && javascriptIntermedAlgScrInputAnswer !== javascriptIntermedAlgScrAnswerArr[1].A1) {
        javascriptIntermedAlgScrDisplayAnswer.innerHTML = `
        <textarea name="text" class="answer_textarea" id="input">
let waldoIsHiding = "Somewhere Waldo is hiding in this text.";
let waldoRegex = /Waldo/; 
let result = waldoRegex.test(waldoIsHiding);
          </textarea>`;
        javascriptIntermedAlgScrIncorrectValue.innerHTML = "Incorrect..";
        javascriptIntermedAlgScrNextButton.innerHTML = `<button class="nextButton javascriptColor1" onclick=javascriptIntermedAlgScrBtn()>Next</button>`;
        javascriptIntermedAlgScrRemoveValue.innerHTML = "";



    } else if (javascriptIntermedAlgScrRandomValue == 2 && javascriptIntermedAlgScrInputAnswer == javascriptIntermedAlgScrAnswerArr[2].A2) {
        javascriptIntermedAlgScrCorrectValue.innerHTML = "Correct..";
        javascriptIntermedAlgScrDisplayAnswer.innerHTML = `
        <textarea name="text" class="answer_textarea" id="input">Good Job :) </textarea>`;
        javascriptIntermedAlgScrNextButton.innerHTML = `<button class="nextButton javascriptColor1" onclick=javascriptIntermedAlgScrBtn()>Next</button>`;
        javascriptIntermedAlgScrRemoveValue.innerHTML = "";

    } else if (javascriptIntermedAlgScrRandomValue == 2 && javascriptIntermedAlgScrInputAnswer !== javascriptIntermedAlgScrAnswerArr[2].A2) {
        javascriptIntermedAlgScrDisplayAnswer.innerHTML = `
    <textarea name="text" class="answer_textarea" id="input">
let petString = "James has a pet cat.";
let petRegex = /dog|cat|bird|fish/;
let result = petRegex.test(petString);
          </textarea>`;
        javascriptIntermedAlgScrIncorrectValue.innerHTML = "Incorrect..";
        javascriptIntermedAlgScrNextButton.innerHTML = `<button class="nextButton javascriptColor1" onclick=javascriptIntermedAlgScrBtn()>Next</button>`;
        javascriptIntermedAlgScrRemoveValue.innerHTML = "";



    } else if (javascriptIntermedAlgScrRandomValue == 3 && javascriptIntermedAlgScrInputAnswer == javascriptIntermedAlgScrAnswerArr[3].A3) {
        javascriptIntermedAlgScrCorrectValue.innerHTML = "Correct..";
        javascriptIntermedAlgScrDisplayAnswer.innerHTML = `
        <textarea name="text" class="answer_textarea" id="input">Good Job :) </textarea>`;
        javascriptIntermedAlgScrNextButton.innerHTML = `<button class="nextButton javascriptColor1" onclick=javascriptIntermedAlgScrBtn()>Next</button>`;
        javascriptIntermedAlgScrRemoveValue.innerHTML = "";

    } else if (javascriptIntermedAlgScrRandomValue == 3 && javascriptIntermedAlgScrInputAnswer !== javascriptIntermedAlgScrAnswerArr[3].A3) {
        javascriptIntermedAlgScrDisplayAnswer.innerHTML = `
    <textarea name="text" class="answer_textarea" id="input">
let myString = "test";
let fccRegex = /test/i; 
let result = fccRegex.test(myString);
        </textarea>`;
        javascriptIntermedAlgScrIncorrectValue.innerHTML = "Incorrect..";
        javascriptIntermedAlgScrNextButton.innerHTML = `<button class="nextButton javascriptColor1" onclick=javascriptIntermedAlgScrBtn()>Next</button>`;
        javascriptIntermedAlgScrRemoveValue.innerHTML = "";
        


    } else if (javascriptIntermedAlgScrRandomValue == 4 && javascriptIntermedAlgScrInputAnswer == javascriptIntermedAlgScrAnswerArr[4].A4) {
        javascriptIntermedAlgScrCorrectValue.innerHTML = "Correct..";
        javascriptIntermedAlgScrDisplayAnswer.innerHTML = `
        <textarea name="text" class="answer_textarea" id="input">Good Job :) </textarea>`;
        javascriptIntermedAlgScrNextButton.innerHTML = `<button class="nextButton javascriptColor1" onclick=javascriptIntermedAlgScrBtn()>Next</button>`;
        javascriptIntermedAlgScrRemoveValue.innerHTML = "";

    } else if (javascriptIntermedAlgScrRandomValue == 4 && javascriptIntermedAlgScrInputAnswer !== javascriptIntermedAlgScrAnswerArr[4].A4) {
        javascriptIntermedAlgScrDisplayAnswer.innerHTML = `
    <textarea name="text" class="answer_textarea" id="input">
let extractStr = "Extract the word 'coding' from this string.";
let codingRegex = /coding/; 
let result = extractStr.match(codingRegex); 
        </textarea>`;
        javascriptIntermedAlgScrIncorrectValue.innerHTML = "Incorrect..";
        javascriptIntermedAlgScrNextButton.innerHTML = `<button class="nextButton javascriptColor1" onclick=javascriptIntermedAlgScrBtn()>Next</button>`;
        javascriptIntermedAlgScrRemoveValue.innerHTML = "";



    } else if (javascriptIntermedAlgScrRandomValue == 5 && javascriptIntermedAlgScrInputAnswer == javascriptIntermedAlgScrAnswerArr[5].A5) {
        javascriptIntermedAlgScrCorrectValue.innerHTML = "Correct..";
        javascriptIntermedAlgScrDisplayAnswer.innerHTML = `
        <textarea name="text" class="answer_textarea" id="input">Good Job :) </textarea>`;
        javascriptIntermedAlgScrNextButton.innerHTML = `<button class="nextButton javascriptColor1" onclick=javascriptIntermedAlgScrBtn()>Next</button>`;
        javascriptIntermedAlgScrRemoveValue.innerHTML = "";

    } else if (javascriptIntermedAlgScrRandomValue == 5 && javascriptIntermedAlgScrInputAnswer !== javascriptIntermedAlgScrAnswerArr[5].A5) {
        javascriptIntermedAlgScrDisplayAnswer.innerHTML = `
    <textarea name="text" class="answer_textarea" id="input">
let twinkleStar = "Twinkle, twinkle, little star";
let starRegex = /twinkle/gi; 
let result = twinkleStar.match(starRegex); 
        </textarea>`;
        javascriptIntermedAlgScrIncorrectValue.innerHTML = "Incorrect..";
        javascriptIntermedAlgScrNextButton.innerHTML = `<button class="nextButton javascriptColor1" onclick=javascriptIntermedAlgScrBtn()>Next</button>`;
        javascriptIntermedAlgScrRemoveValue.innerHTML = "";



    } else if (javascriptIntermedAlgScrRandomValue == 6 && javascriptIntermedAlgScrInputAnswer == javascriptIntermedAlgScrAnswerArr[6].A6) {
        javascriptIntermedAlgScrCorrectValue.innerHTML = "Correct..";
        javascriptIntermedAlgScrDisplayAnswer.innerHTML = `
        <textarea name="text" class="answer_textarea" id="input">Good Job :) </textarea>`;
        javascriptIntermedAlgScrNextButton.innerHTML = `<button class="nextButton javascriptColor1" onclick=javascriptIntermedAlgScrBtn()>Next</button>`;
        javascriptIntermedAlgScrRemoveValue.innerHTML = "";

    } else if (javascriptIntermedAlgScrRandomValue == 6 && javascriptIntermedAlgScrInputAnswer !== javascriptIntermedAlgScrAnswerArr[6].A6) {
        javascriptIntermedAlgScrDisplayAnswer.innerHTML = `
    <textarea name="text" class="answer_textarea" id="input">
let exampleStr = "Let's have fun with regular expressions!";
let unRegex = /.un/; 
let result = unRegex.test(exampleStr);
        </textarea>`;
        javascriptIntermedAlgScrIncorrectValue.innerHTML = "Incorrect..";
        javascriptIntermedAlgScrNextButton.innerHTML = `<button class="nextButton javascriptColor1" onclick=javascriptIntermedAlgScrBtn()>Next</button>`;
        javascriptIntermedAlgScrRemoveValue.innerHTML = "";



    } else if (javascriptIntermedAlgScrRandomValue == 7 && javascriptIntermedAlgScrInputAnswer == javascriptIntermedAlgScrAnswerArr[7].A7) {
        javascriptIntermedAlgScrCorrectValue.innerHTML = "Correct..";
        javascriptIntermedAlgScrDisplayAnswer.innerHTML = `
        <textarea name="text" class="answer_textarea" id="input">Good Job :) </textarea>`;
        javascriptIntermedAlgScrNextButton.innerHTML = `<button class="nextButton javascriptColor1" onclick=javascriptIntermedAlgScrBtn()>Next</button>`;
        javascriptIntermedAlgScrRemoveValue.innerHTML = "";

    } else if (javascriptIntermedAlgScrRandomValue == 7 && javascriptIntermedAlgScrInputAnswer !== javascriptIntermedAlgScrAnswerArr[7].A7) {
        javascriptIntermedAlgScrDisplayAnswer.innerHTML = `
    <textarea name="text" class="answer_textarea" id="input">
let quoteSample = "Beware of bugs in the above code; I have only proved it correct, not tried it.";
let vowelRegex = /[aeiou]/ig; 
let result = quoteSample.match(vowelRegex); 

        </textarea>`;
        javascriptIntermedAlgScrIncorrectValue.innerHTML = "Incorrect..";
        javascriptIntermedAlgScrNextButton.innerHTML = `<button class="nextButton javascriptColor1" onclick=javascriptIntermedAlgScrBtn()>Next</button>`;
        javascriptIntermedAlgScrRemoveValue.innerHTML = "";



    } else if (javascriptIntermedAlgScrRandomValue == 8 && javascriptIntermedAlgScrInputAnswer == javascriptIntermedAlgScrAnswerArr[8].A8) {
        javascriptIntermedAlgScrCorrectValue.innerHTML = "Correct..";
        javascriptIntermedAlgScrDisplayAnswer.innerHTML = `
        <textarea name="text" class="answer_textarea" id="input">Good Job :) </textarea>`;
        javascriptIntermedAlgScrNextButton.innerHTML = `<button class="nextButton javascriptColor1" onclick=javascriptIntermedAlgScrBtn()>Next</button>`;
        javascriptIntermedAlgScrRemoveValue.innerHTML = "";

    } else if (javascriptIntermedAlgScrRandomValue == 8 && javascriptIntermedAlgScrInputAnswer !== javascriptIntermedAlgScrAnswerArr[8].A8) {
        javascriptIntermedAlgScrDisplayAnswer.innerHTML = `
    <textarea name="text" class="answer_textarea" id="input">
let quoteSample = "The quick brown fox jumps over the lazy dog.";
let alphabetRegex = /[a-z]/ig; 
let result = quoteSample.match(alphabetRegex); 
        </textarea>`;
        javascriptIntermedAlgScrIncorrectValue.innerHTML = "Incorrect..";
        javascriptIntermedAlgScrNextButton.innerHTML = `<button class="nextButton javascriptColor1" onclick=javascriptIntermedAlgScrBtn()>Next</button>`;
        javascriptIntermedAlgScrRemoveValue.innerHTML = "";



    } else if (javascriptIntermedAlgScrRandomValue == 9 && javascriptIntermedAlgScrInputAnswer == javascriptIntermedAlgScrAnswerArr[9].A9) {
        javascriptIntermedAlgScrCorrectValue.innerHTML = "Correct..";
        javascriptIntermedAlgScrDisplayAnswer.innerHTML = `
        <textarea name="text" class="answer_textarea" id="input">Good Job :) </textarea>`;
        javascriptIntermedAlgScrNextButton.innerHTML = `<button class="nextButton javascriptColor1" onclick=javascriptIntermedAlgScrBtn()>Next</button>`;
        javascriptIntermedAlgScrRemoveValue.innerHTML = "";

    } else if (javascriptIntermedAlgScrRandomValue == 9 && javascriptIntermedAlgScrInputAnswer !== javascriptIntermedAlgScrAnswerArr[9].A9) {
        javascriptIntermedAlgScrDisplayAnswer.innerHTML = `
    <textarea name="text" class="answer_textarea" id="input">
let quoteSample = "Blueberry 3.141592653s are delicious.";
let myRegex = /[h-s2-6]/ig; 
let result = quoteSample.match(myRegex); 
        </textarea>`;
        javascriptIntermedAlgScrIncorrectValue.innerHTML = "Incorrect..";
        javascriptIntermedAlgScrNextButton.innerHTML = `<button class="nextButton javascriptColor1" onclick=javascriptIntermedAlgScrBtn()>Next</button>`;
        javascriptIntermedAlgScrRemoveValue.innerHTML = "";



    } else if (javascriptIntermedAlgScrRandomValue == 10 && javascriptIntermedAlgScrInputAnswer == javascriptIntermedAlgScrAnswerArr[10].A10) {
        javascriptIntermedAlgScrCorrectValue.innerHTML = "Correct..";
        javascriptIntermedAlgScrDisplayAnswer.innerHTML = `
        <textarea name="text" class="answer_textarea" id="input">Good Job :) </textarea>`;
        javascriptIntermedAlgScrNextButton.innerHTML = `<button class="nextButton javascriptColor1" onclick=javascriptIntermedAlgScrBtn()>Next</button>`;
        javascriptIntermedAlgScrRemoveValue.innerHTML = "";

    } else if (javascriptIntermedAlgScrRandomValue == 10 && javascriptIntermedAlgScrInputAnswer !== javascriptIntermedAlgScrAnswerArr[10].A10) {
        javascriptIntermedAlgScrDisplayAnswer.innerHTML = `
    <textarea name="text" class="answer_textarea" id="input">
let quoteSample = "3 blind mice.";
let myRegex = /[^aeiou^0-99]/ig; 
let result = quoteSample.match(myRegex);
        </textarea>`;
        javascriptIntermedAlgScrIncorrectValue.innerHTML = "Incorrect..";
        javascriptIntermedAlgScrNextButton.innerHTML = `<button class="nextButton javascriptColor1" onclick=javascriptIntermedAlgScrBtn()>Next</button>`;
        javascriptIntermedAlgScrRemoveValue.innerHTML = "";



    } else if (javascriptIntermedAlgScrRandomValue == 11 && javascriptIntermedAlgScrInputAnswer == javascriptIntermedAlgScrAnswerArr[11].A11) {
        javascriptIntermedAlgScrCorrectValue.innerHTML = "Correct..";
        javascriptIntermedAlgScrDisplayAnswer.innerHTML = `
        <textarea name="text" class="answer_textarea" id="input">Good Job :) </textarea>`;
        javascriptIntermedAlgScrNextButton.innerHTML = `<button class="nextButton javascriptColor1" onclick=javascriptIntermedAlgScrBtn()>Next</button>`;
        javascriptIntermedAlgScrRemoveValue.innerHTML = "";

    } else if (javascriptIntermedAlgScrRandomValue == 11 && javascriptIntermedAlgScrInputAnswer !== javascriptIntermedAlgScrAnswerArr[11].A11) {
        javascriptIntermedAlgScrDisplayAnswer.innerHTML = `
    <textarea name="text" class="answer_textarea" id="input">
let difficultSpelling = "Mississippi";
let myRegex = /s+/g;
let result = difficultSpelling.match(myRegex);
        </textarea>`;
        javascriptIntermedAlgScrIncorrectValue.innerHTML = "Incorrect..";
        javascriptIntermedAlgScrNextButton.innerHTML = `<button class="nextButton javascriptColor1" onclick=javascriptIntermedAlgScrBtn()>Next</button>`;
        javascriptIntermedAlgScrRemoveValue.innerHTML = "";



    } else if (javascriptIntermedAlgScrRandomValue == 12 && javascriptIntermedAlgScrInputAnswer == javascriptIntermedAlgScrAnswerArr[12].A12) {
        javascriptIntermedAlgScrCorrectValue.innerHTML = "Correct..";
        javascriptIntermedAlgScrDisplayAnswer.innerHTML = `
        <textarea name="text" class="answer_textarea" id="input">Good Job :) </textarea>`;
        javascriptIntermedAlgScrNextButton.innerHTML = `<button class="nextButton javascriptColor1" onclick=javascriptIntermedAlgScrBtn()>Next</button>`;
        javascriptIntermedAlgScrRemoveValue.innerHTML = "";

    } else if (javascriptIntermedAlgScrRandomValue == 12 && javascriptIntermedAlgScrInputAnswer !== javascriptIntermedAlgScrAnswerArr[12].A12) {
        javascriptIntermedAlgScrDisplayAnswer.innerHTML = `
    <textarea name="text" class="answer_textarea" id="input">
let chewieQuote = "Aaaaaaaaaaaaaaaarrrgh!";
let chewieRegex = /A[a]*/; 
let result = chewieQuote.match(chewieRegex);
        </textarea>`;
        javascriptIntermedAlgScrIncorrectValue.innerHTML = "Incorrect..";
        javascriptIntermedAlgScrNextButton.innerHTML = `<button class="nextButton javascriptColor1" onclick=javascriptIntermedAlgScrBtn()>Next</button>`;
        javascriptIntermedAlgScrRemoveValue.innerHTML = "";



    } else if (javascriptIntermedAlgScrRandomValue == 13 && javascriptIntermedAlgScrInputAnswer == javascriptIntermedAlgScrAnswerArr[13].A13) {
        javascriptIntermedAlgScrCorrectValue.innerHTML = "Correct..";
        javascriptIntermedAlgScrDisplayAnswer.innerHTML = `
        <textarea name="text" class="answer_textarea" id="input">Good Job :) </textarea>`;
        javascriptIntermedAlgScrNextButton.innerHTML = `<button class="nextButton javascriptColor1" onclick=javascriptIntermedAlgScrBtn()>Next</button>`;
        javascriptIntermedAlgScrRemoveValue.innerHTML = "";

    } else if (javascriptIntermedAlgScrRandomValue == 13 && javascriptIntermedAlgScrInputAnswer !== javascriptIntermedAlgScrAnswerArr[13].A13) {
        javascriptIntermedAlgScrDisplayAnswer.innerHTML = `
    <textarea name="text" class="answer_textarea" id="input">
let text = "<h1>Winter is coming</h1>";
let myRegex = /<h1>?/; 
let result = text.match(myRegex);
        </textarea>`;
        javascriptIntermedAlgScrIncorrectValue.innerHTML = "Incorrect..";
        javascriptIntermedAlgScrNextButton.innerHTML = `<button class="nextButton javascriptColor1" onclick=javascriptIntermedAlgScrBtn()>Next</button>`;
        javascriptIntermedAlgScrRemoveValue.innerHTML = "";



    } else if (javascriptIntermedAlgScrRandomValue == 14 && javascriptIntermedAlgScrInputAnswer == javascriptIntermedAlgScrAnswerArr[14].A14) {
        javascriptIntermedAlgScrCorrectValue.innerHTML = "Correct..";
        javascriptIntermedAlgScrDisplayAnswer.innerHTML = `
        <textarea name="text" class="answer_textarea" id="input">Good Job :) </textarea>`;
        javascriptIntermedAlgScrNextButton.innerHTML = `<button class="nextButton javascriptColor1" onclick=javascriptIntermedAlgScrBtn()>Next</button>`;
        javascriptIntermedAlgScrRemoveValue.innerHTML = "";

    } else if (javascriptIntermedAlgScrRandomValue == 14 && javascriptIntermedAlgScrInputAnswer !== javascriptIntermedAlgScrAnswerArr[14].A14) {
        javascriptIntermedAlgScrDisplayAnswer.innerHTML = `
    <textarea name="text" class="answer_textarea" id="input">
let crowd = 'P1P2P3P4P5P6CCCP7P8P9';

let reCriminals = /C+/; 

let matchedCriminals = crowd.match(reCriminals);
console.log(matchedCriminals);
        </textarea>`;
        javascriptIntermedAlgScrIncorrectValue.innerHTML = "Incorrect..";
        javascriptIntermedAlgScrNextButton.innerHTML = `<button class="nextButton javascriptColor1" onclick=javascriptIntermedAlgScrBtn()>Next</button>`;
        javascriptIntermedAlgScrRemoveValue.innerHTML = "";



    } else if (javascriptIntermedAlgScrRandomValue == 15 && javascriptIntermedAlgScrInputAnswer == javascriptIntermedAlgScrAnswerArr[15].A15) {
        javascriptIntermedAlgScrCorrectValue.innerHTML = "Correct..";
        javascriptIntermedAlgScrDisplayAnswer.innerHTML = `
        <textarea name="text" class="answer_textarea" id="input">Good Job :) </textarea>`;
        javascriptIntermedAlgScrNextButton.innerHTML = `<button class="nextButton javascriptColor1" onclick=javascriptIntermedAlgScrBtn()>Next</button>`;
        javascriptIntermedAlgScrRemoveValue.innerHTML = "";

    } else if (javascriptIntermedAlgScrRandomValue == 15 && javascriptIntermedAlgScrInputAnswer !== javascriptIntermedAlgScrAnswerArr[15].A15) {
        javascriptIntermedAlgScrDisplayAnswer.innerHTML = `
    <textarea name="text" class="answer_textarea" id="input">
let rickyAndCal = "Cal and Ricky both like racing.";
let calRegex = /^Cal/; 
let result = calRegex.test(rickyAndCal); 
        </textarea>`;
        javascriptIntermedAlgScrIncorrectValue.innerHTML = "Incorrect..";
        javascriptIntermedAlgScrNextButton.innerHTML = `<button class="nextButton javascriptColor1" onclick=javascriptIntermedAlgScrBtn()>Next</button>`;
        javascriptIntermedAlgScrRemoveValue.innerHTML = "";



    } else if (javascriptIntermedAlgScrRandomValue == 16 && javascriptIntermedAlgScrInputAnswer == javascriptIntermedAlgScrAnswerArr[16].A16) {
        javascriptIntermedAlgScrCorrectValue.innerHTML = "Correct..";
        javascriptIntermedAlgScrDisplayAnswer.innerHTML = `
        <textarea name="text" class="answer_textarea" id="input">Good Job :) </textarea>`;
        javascriptIntermedAlgScrNextButton.innerHTML = `<button class="nextButton javascriptColor1" onclick=javascriptIntermedAlgScrBtn()>Next</button>`;
        javascriptIntermedAlgScrRemoveValue.innerHTML = "";

    } else if (javascriptIntermedAlgScrRandomValue == 16 && javascriptIntermedAlgScrInputAnswer !== javascriptIntermedAlgScrAnswerArr[16].A16) {
        javascriptIntermedAlgScrDisplayAnswer.innerHTML = `
    <textarea name="text" class="answer_textarea" id="input">
let caboose = "The last car on a train is the caboose";
let lastRegex = /caboose$/;
let result = lastRegex.test(caboose);
        </textarea>`;
        javascriptIntermedAlgScrIncorrectValue.innerHTML = "Incorrect..";
        javascriptIntermedAlgScrNextButton.innerHTML = `<button class="nextButton javascriptColor1" onclick=javascriptIntermedAlgScrBtn()>Next</button>`;
        javascriptIntermedAlgScrRemoveValue.innerHTML = "";



    } else if (javascriptIntermedAlgScrRandomValue == 17 && javascriptIntermedAlgScrInputAnswer == javascriptIntermedAlgScrAnswerArr[17].A17) {
        javascriptIntermedAlgScrCorrectValue.innerHTML = "Correct..";
        javascriptIntermedAlgScrDisplayAnswer.innerHTML = `
        <textarea name="text" class="answer_textarea" id="input">Good Job :) </textarea>`;
        javascriptIntermedAlgScrNextButton.innerHTML = `<button class="nextButton javascriptColor1" onclick=javascriptIntermedAlgScrBtn()>Next</button>`;
        javascriptIntermedAlgScrRemoveValue.innerHTML = "";

    } else if (javascriptIntermedAlgScrRandomValue == 17 && javascriptIntermedAlgScrInputAnswer !== javascriptIntermedAlgScrAnswerArr[17].A17) {
        javascriptIntermedAlgScrDisplayAnswer.innerHTML = `
    <textarea name="text" class="answer_textarea" id="input">
let quoteSample = "The five boxing wizards jump quickly."; 
let alphabetRegexV2 = /\w/g;
let result = quoteSample.match(alphabetRegexV2).length;
        </textarea>`;
        javascriptIntermedAlgScrIncorrectValue.innerHTML = "Incorrect..";
        javascriptIntermedAlgScrNextButton.innerHTML = `<button class="nextButton javascriptColor1" onclick=javascriptIntermedAlgScrBtn()>Next</button>`;
        javascriptIntermedAlgScrRemoveValue.innerHTML = "";



    } else if (javascriptIntermedAlgScrRandomValue == 18 && javascriptIntermedAlgScrInputAnswer == javascriptIntermedAlgScrAnswerArr[18].A18) {
        javascriptIntermedAlgScrCorrectValue.innerHTML = "Correct..";
        javascriptIntermedAlgScrDisplayAnswer.innerHTML = `
        <textarea name="text" class="answer_textarea" id="input">Good Job :) </textarea>`;
        javascriptIntermedAlgScrNextButton.innerHTML = `<button class="nextButton javascriptColor1" onclick=javascriptIntermedAlgScrBtn()>Next</button>`;
        javascriptIntermedAlgScrRemoveValue.innerHTML = "";

    } else if (javascriptIntermedAlgScrRandomValue == 18 && javascriptIntermedAlgScrInputAnswer !== javascriptIntermedAlgScrAnswerArr[18].A18) {
        javascriptIntermedAlgScrDisplayAnswer.innerHTML = `
    <textarea name="text" class="answer_textarea" id="input">
let quoteSample = "The five boxing wizards jump quickly.";
let nonAlphabetRegex = /\W/g;
let result = quoteSample.match(nonAlphabetRegex).length;
        </textarea>`;
        javascriptIntermedAlgScrIncorrectValue.innerHTML = "Incorrect..";
        javascriptIntermedAlgScrNextButton.innerHTML = `<button class="nextButton javascriptColor1" onclick=javascriptIntermedAlgScrBtn()>Next</button>`;
        javascriptIntermedAlgScrRemoveValue.innerHTML = "";



    } else if (javascriptIntermedAlgScrRandomValue == 19 && javascriptIntermedAlgScrInputAnswer == javascriptIntermedAlgScrAnswerArr[19].A19) {
        javascriptIntermedAlgScrCorrectValue.innerHTML = "Correct..";
        javascriptIntermedAlgScrDisplayAnswer.innerHTML = `
        <textarea name="text" class="answer_textarea" id="input">Good Job :) </textarea>`;
        javascriptIntermedAlgScrNextButton.innerHTML = `<button class="nextButton javascriptColor1" onclick=javascriptIntermedAlgScrBtn()>Next</button>`;
        javascriptIntermedAlgScrRemoveValue.innerHTML = "";

    } else if (javascriptIntermedAlgScrRandomValue == 19 && javascriptIntermedAlgScrInputAnswer !== javascriptIntermedAlgScrAnswerArr[19].A19) {
        javascriptIntermedAlgScrDisplayAnswer.innerHTML = `
    <textarea name="text" class="answer_textarea" id="input">
let numString = "Your sandwich will be $5.00";
let numRegex = /\d/g; 
let result = numString.match(numRegex).length;
          </textarea>`;
        javascriptIntermedAlgScrIncorrectValue.innerHTML = "Incorrect..";
        javascriptIntermedAlgScrNextButton.innerHTML = `<button class="nextButton javascriptColor1" onclick=javascriptIntermedAlgScrBtn()>Next</button>`;
        javascriptIntermedAlgScrRemoveValue.innerHTML = "";



    } else if (javascriptIntermedAlgScrRandomValue == 20 && javascriptIntermedAlgScrInputAnswer == javascriptIntermedAlgScrAnswerArr[20].A20) {
        javascriptIntermedAlgScrCorrectValue.innerHTML = "Correct..";
        javascriptIntermedAlgScrDisplayAnswer.innerHTML = `
        <textarea name="text" class="answer_textarea" id="input">Good Job :) </textarea>`;
        javascriptIntermedAlgScrNextButton.innerHTML = `<button class="nextButton javascriptColor1" onclick=javascriptIntermedAlgScrBtn()>Next</button>`;
        javascriptIntermedAlgScrRemoveValue.innerHTML = "";

    } else if (javascriptIntermedAlgScrRandomValue == 20 && javascriptIntermedAlgScrInputAnswer !== javascriptIntermedAlgScrAnswerArr[20].A20) {
        javascriptIntermedAlgScrDisplayAnswer.innerHTML = `
    <textarea name="text" class="answer_textarea" id="input">
let numString = "Your sandwich will be $5.00";
let noNumRegex = /\D/g;
let result = numString.match(noNumRegex).length;
        </textarea>`;
        javascriptIntermedAlgScrIncorrectValue.innerHTML = "Incorrect..";
        javascriptIntermedAlgScrNextButton.innerHTML = `<button class="nextButton javascriptColor1" onclick=javascriptIntermedAlgScrBtn()>Next</button>`;
        javascriptIntermedAlgScrRemoveValue.innerHTML = "";



    } else if (javascriptIntermedAlgScrRandomValue == 21 && javascriptIntermedAlgScrInputAnswer == javascriptIntermedAlgScrAnswerArr[21].A21) {
        javascriptIntermedAlgScrCorrectValue.innerHTML = "Correct..";
        javascriptIntermedAlgScrDisplayAnswer.innerHTML = `
        <textarea name="text" class="answer_textarea" id="input">Good Job :) </textarea>`;
        javascriptIntermedAlgScrNextButton.innerHTML = `<button class="nextButton javascriptColor1" onclick=javascriptIntermedAlgScrBtn()>Next</button>`;
        javascriptIntermedAlgScrRemoveValue.innerHTML = "";

    } else if (javascriptIntermedAlgScrRandomValue == 21 && javascriptIntermedAlgScrInputAnswer !== javascriptIntermedAlgScrAnswerArr[21].A21) {
        javascriptIntermedAlgScrDisplayAnswer.innerHTML = `
    <textarea name="text" class="answer_textarea" id="input">
let username = "JackOfAllTrades";
let userCheck = /^[a-z]{2,}\d*$/i;
let result = userCheck.test(username);
        </textarea>`;
        javascriptIntermedAlgScrIncorrectValue.innerHTML = "Incorrect..";
        javascriptIntermedAlgScrNextButton.innerHTML = `<button class="nextButton javascriptColor1" onclick=javascriptIntermedAlgScrBtn()>Next</button>`;
        javascriptIntermedAlgScrRemoveValue.innerHTML = "";



    } else if (javascriptIntermedAlgScrRandomValue == 22 && javascriptIntermedAlgScrInputAnswer == javascriptIntermedAlgScrAnswerArr[22].A22) {
        javascriptIntermedAlgScrCorrectValue.innerHTML = "Correct..";
        javascriptIntermedAlgScrDisplayAnswer.innerHTML = `
        <textarea name="text" class="answer_textarea" id="input">Good Job :) </textarea>`;
        javascriptIntermedAlgScrNextButton.innerHTML = `<button class="nextButton javascriptColor1" onclick=javascriptIntermedAlgScrBtn()>Next</button>`;
        javascriptIntermedAlgScrRemoveValue.innerHTML = "";

    } else if (javascriptIntermedAlgScrRandomValue == 22 && javascriptIntermedAlgScrInputAnswer !== javascriptIntermedAlgScrAnswerArr[22].A22) {
        javascriptIntermedAlgScrDisplayAnswer.innerHTML = `
    <textarea name="text" class="answer_textarea" id="input">
let sample = "Whitespace is important in separating words";
let countWhiteSpace = /\s/g;
let result = sample.match(countWhiteSpace);
        </textarea>`;
        javascriptIntermedAlgScrIncorrectValue.innerHTML = "Incorrect..";
        javascriptIntermedAlgScrNextButton.innerHTML = `<button class="nextButton javascriptColor1" onclick=javascriptIntermedAlgScrBtn()>Next</button>`;
        javascriptIntermedAlgScrRemoveValue.innerHTML = "";



    } else if (javascriptIntermedAlgScrRandomValue == 23 && javascriptIntermedAlgScrInputAnswer == javascriptIntermedAlgScrAnswerArr[23].A23) {
        javascriptIntermedAlgScrCorrectValue.innerHTML = "Correct..";
        javascriptIntermedAlgScrDisplayAnswer.innerHTML = `
        <textarea name="text" class="answer_textarea" id="input">Good Job :) </textarea>`;
        javascriptIntermedAlgScrNextButton.innerHTML = `<button class="nextButton javascriptColor1" onclick=javascriptIntermedAlgScrBtn()>Next</button>`;
        javascriptIntermedAlgScrRemoveValue.innerHTML = "";

    } else if (javascriptIntermedAlgScrRandomValue == 23 && javascriptIntermedAlgScrInputAnswer !== javascriptIntermedAlgScrAnswerArr[23].A23) {
        javascriptIntermedAlgScrDisplayAnswer.innerHTML = `

    <textarea name="text" class="answer_textarea" id="input">
let sample = "Whitespace is important in separating words";
let countNonWhiteSpace = /\S/g;
let result = sample.match(countNonWhiteSpace);
        </textarea>`;
        javascriptIntermedAlgScrIncorrectValue.innerHTML = "Incorrect..";
        javascriptIntermedAlgScrNextButton.innerHTML = `<button class="nextButton javascriptColor1" onclick=javascriptIntermedAlgScrBtn()>Next</button>`;
        javascriptIntermedAlgScrRemoveValue.innerHTML = "";



    } else if (javascriptIntermedAlgScrRandomValue == 24 && javascriptIntermedAlgScrInputAnswer == javascriptIntermedAlgScrAnswerArr[24].A24) {
        javascriptIntermedAlgScrCorrectValue.innerHTML = "Correct..";
        javascriptIntermedAlgScrDisplayAnswer.innerHTML = `
        <textarea name="text" class="answer_textarea" id="input">Good Job :) </textarea>`;
        javascriptIntermedAlgScrNextButton.innerHTML = `<button class="nextButton javascriptColor1" onclick=javascriptIntermedAlgScrBtn()>Next</button>`;
        javascriptIntermedAlgScrRemoveValue.innerHTML = "";

    } else if (javascriptIntermedAlgScrRandomValue == 24 && javascriptIntermedAlgScrInputAnswer !== javascriptIntermedAlgScrAnswerArr[24].A24) {
        javascriptIntermedAlgScrDisplayAnswer.innerHTML = `
    <textarea name="text" class="answer_textarea" id="input">
let ohStr = "Ohhh no";
let ohRegex = /Oh{3,6}\sno/;
let result = ohRegex.test(ohStr);
        </textarea>`;
        javascriptIntermedAlgScrIncorrectValue.innerHTML = "Incorrect..";
        javascriptIntermedAlgScrNextButton.innerHTML = `<button class="nextButton javascriptColor1" onclick=javascriptIntermedAlgScrBtn()>Next</button>`;
        javascriptIntermedAlgScrRemoveValue.innerHTML = "";



    } else if (javascriptIntermedAlgScrRandomValue == 25 && javascriptIntermedAlgScrInputAnswer == javascriptIntermedAlgScrAnswerArr[25].A25) {
        javascriptIntermedAlgScrCorrectValue.innerHTML = "Correct..";
        javascriptIntermedAlgScrDisplayAnswer.innerHTML = `
        <textarea name="text" class="answer_textarea" id="input">Good Job :) </textarea>`;
        javascriptIntermedAlgScrNextButton.innerHTML = `<button class="nextButton javascriptColor1" onclick=javascriptIntermedAlgScrBtn()>Next</button>`;
        javascriptIntermedAlgScrRemoveValue.innerHTML = "";

    } else if (javascriptIntermedAlgScrRandomValue == 25 && javascriptIntermedAlgScrInputAnswer !== javascriptIntermedAlgScrAnswerArr[25].A25) {
        javascriptIntermedAlgScrDisplayAnswer.innerHTML = `
    <textarea name="text" class="answer_textarea" id="input">
let haStr = "Hazzzzah";
let haRegex = /Haz{4,30}ah/;
let result = haRegex.test(haStr);
        </textarea>`;
        javascriptIntermedAlgScrIncorrectValue.innerHTML = "Incorrect..";
        javascriptIntermedAlgScrNextButton.innerHTML = `<button class="nextButton javascriptColor1" onclick=javascriptIntermedAlgScrBtn()>Next</button>`;
        javascriptIntermedAlgScrRemoveValue.innerHTML = "";



    } else if (javascriptIntermedAlgScrRandomValue == 26 && javascriptIntermedAlgScrInputAnswer == javascriptIntermedAlgScrAnswerArr[26].A26) {
        javascriptIntermedAlgScrCorrectValue.innerHTML = "Correct..";
        javascriptIntermedAlgScrDisplayAnswer.innerHTML = `
        <textarea name="text" class="answer_textarea" id="input">Good Job :) </textarea>`;
        javascriptIntermedAlgScrNextButton.innerHTML = `<button class="nextButton javascriptColor1" onclick=javascriptIntermedAlgScrBtn()>Next</button>`;
        javascriptIntermedAlgScrRemoveValue.innerHTML = "";

    } else if (javascriptIntermedAlgScrRandomValue == 26 && javascriptIntermedAlgScrInputAnswer !== javascriptIntermedAlgScrAnswerArr[26].A26) {
        javascriptIntermedAlgScrDisplayAnswer.innerHTML = `
    <textarea name="text" class="answer_textarea" id="input">
let timStr = "Timmmmber";
let timRegex = /Tim{4}ber/;
let result = timRegex.test(timStr); 
        </textarea>`;
        javascriptIntermedAlgScrIncorrectValue.innerHTML = "Incorrect..";
        javascriptIntermedAlgScrNextButton.innerHTML = `<button class="nextButton javascriptColor1" onclick=javascriptIntermedAlgScrBtn()>Next</button>`;
        javascriptIntermedAlgScrRemoveValue.innerHTML = "";



    } else if (javascriptIntermedAlgScrRandomValue == 27 && javascriptIntermedAlgScrInputAnswer == javascriptIntermedAlgScrAnswerArr[27].A27) {
        javascriptIntermedAlgScrCorrectValue.innerHTML = "Correct..";
        javascriptIntermedAlgScrDisplayAnswer.innerHTML = `
        <textarea name="text" class="answer_textarea" id="input">Good Job :) </textarea>`;
        javascriptIntermedAlgScrNextButton.innerHTML = `<button class="nextButton javascriptColor1" onclick=javascriptIntermedAlgScrBtn()>Next</button>`;
        javascriptIntermedAlgScrRemoveValue.innerHTML = "";

    } else if (javascriptIntermedAlgScrRandomValue == 27 && javascriptIntermedAlgScrInputAnswer !== javascriptIntermedAlgScrAnswerArr[27].A27) {
        javascriptIntermedAlgScrDisplayAnswer.innerHTML = `
    <textarea name="text" class="answer_textarea" id="input">
let favWord_US = "favorite";
let favWord_GB = "favourite";
let favRegex = /favou?rite/;
let result1 = favRegex.test(favWord_US);
let result2 = favRegex.test(favWord_GB);
        </textarea>`;
        javascriptIntermedAlgScrIncorrectValue.innerHTML = "Incorrect..";
        javascriptIntermedAlgScrNextButton.innerHTML = `<button class="nextButton javascriptColor1" onclick=javascriptIntermedAlgScrBtn()>Next</button>`;
        javascriptIntermedAlgScrRemoveValue.innerHTML = "";



    } else if (javascriptIntermedAlgScrRandomValue == 28 && javascriptIntermedAlgScrInputAnswer == javascriptIntermedAlgScrAnswerArr[28].A28) {
        javascriptIntermedAlgScrCorrectValue.innerHTML = "Correct..";
        javascriptIntermedAlgScrDisplayAnswer.innerHTML = `
        <textarea name="text" class="answer_textarea" id="input">Good Job :) </textarea>`;
        javascriptIntermedAlgScrNextButton.innerHTML = `<button class="nextButton javascriptColor1" onclick=javascriptIntermedAlgScrBtn()>Next</button>`;
        javascriptIntermedAlgScrRemoveValue.innerHTML = "";

    } else if (javascriptIntermedAlgScrRandomValue == 28 && javascriptIntermedAlgScrInputAnswer !== javascriptIntermedAlgScrAnswerArr[28].A28) {
        javascriptIntermedAlgScrDisplayAnswer.innerHTML = `
    <textarea name="text" class="answer_textarea" id="input">
let sampleWord = "astronaut";
let pwRegex = /(?=\w{5,})(?=\D*\d{2})/;
let result = pwRegex.test(sampleWord);
        </textarea>`;
        javascriptIntermedAlgScrIncorrectValue.innerHTML = "Incorrect..";
        javascriptIntermedAlgScrNextButton.innerHTML = `<button class="nextButton javascriptColor1" onclick=javascriptIntermedAlgScrBtn()>Next</button>`;
        javascriptIntermedAlgScrRemoveValue.innerHTML = "";



    } else if (javascriptIntermedAlgScrRandomValue == 29 && javascriptIntermedAlgScrInputAnswer == javascriptIntermedAlgScrAnswerArr[29].A29) {
        javascriptIntermedAlgScrCorrectValue.innerHTML = "Correct..";
        javascriptIntermedAlgScrDisplayAnswer.innerHTML = `
        <textarea name="text" class="answer_textarea" id="input">Good Job :) </textarea>`;
        javascriptIntermedAlgScrNextButton.innerHTML = `<button class="nextButton javascriptColor1" onclick=javascriptIntermedAlgScrBtn()>Next</button>`;
        javascriptIntermedAlgScrRemoveValue.innerHTML = "";

    } else if (javascriptIntermedAlgScrRandomValue == 29 && javascriptIntermedAlgScrInputAnswer !== javascriptIntermedAlgScrAnswerArr[29].A29) {
        javascriptIntermedAlgScrDisplayAnswer.innerHTML = `
    <textarea name="text" class="answer_textarea" id="input">
let repeatNum = "42 42 42";
let reRegex =  /^(\ d+)\ s\ 1\ s\ 1$/;
let result = reRegex.test(repeatNum);
        </textarea>`;
        javascriptIntermedAlgScrIncorrectValue.innerHTML = "Incorrect..";
        javascriptIntermedAlgScrNextButton.innerHTML = `<button class="nextButton javascriptColor1" onclick=javascriptIntermedAlgScrBtn()>Next</button>`;
        javascriptIntermedAlgScrRemoveValue.innerHTML = "";



    } else if (javascriptIntermedAlgScrRandomValue == 30 && javascriptIntermedAlgScrInputAnswer == javascriptIntermedAlgScrAnswerArr[30].A30) {
        javascriptIntermedAlgScrCorrectValue.innerHTML = "Correct..";
        javascriptIntermedAlgScrDisplayAnswer.innerHTML = `
        <textarea name="text" class="answer_textarea" id="input">Good Job :) </textarea>`;
        javascriptIntermedAlgScrNextButton.innerHTML = `<button class="nextButton javascriptColor1" onclick=javascriptIntermedAlgScrBtn()>Next</button>`;
        javascriptIntermedAlgScrRemoveValue.innerHTML = "";

    } else if (javascriptIntermedAlgScrRandomValue == 30 && javascriptIntermedAlgScrInputAnswer !== javascriptIntermedAlgScrAnswerArr[30].A30) {
        javascriptIntermedAlgScrDisplayAnswer.innerHTML = `
    <textarea name="text" class="answer_textarea" id="input">
let huhText = "This sandwich is good.";
let fixRegex = /good/; 
let replaceText = "okey-dokey"; 
let result = huhText.replace(fixRegex, replaceText);
        </textarea>`;
        javascriptIntermedAlgScrIncorrectValue.innerHTML = "Incorrect..";
        javascriptIntermedAlgScrNextButton.innerHTML = `<button class="nextButton javascriptColor1" onclick=javascriptIntermedAlgScrBtn()>Next</button>`;
        javascriptIntermedAlgScrRemoveValue.innerHTML = "";



    } else if (javascriptIntermedAlgScrRandomValue == 31 && javascriptIntermedAlgScrInputAnswer == javascriptIntermedAlgScrAnswerArr[31].A31) {
        javascriptIntermedAlgScrCorrectValue.innerHTML = "Correct..";
        javascriptIntermedAlgScrDisplayAnswer.innerHTML = `
        <textarea name="text" class="answer_textarea" id="input">Good Job :) </textarea>`;
        javascriptIntermedAlgScrNextButton.innerHTML = `<button class="nextButton javascriptColor1" onclick=javascriptIntermedAlgScrBtn()>Next</button>`;
        javascriptIntermedAlgScrRemoveValue.innerHTML = "";

    } else if (javascriptIntermedAlgScrRandomValue == 31 && javascriptIntermedAlgScrInputAnswer !== javascriptIntermedAlgScrAnswerArr[31].A31) {
        javascriptIntermedAlgScrDisplayAnswer.innerHTML = `
    <textarea name="text" class="answer_textarea" id="input">
let hello = "   Hello, World!  ";
let wsRegex = /^\s+|\s+$/g; 
let result = hello.replace(wsRegex, '');
        </textarea>`;
        javascriptIntermedAlgScrIncorrectValue.innerHTML = "Incorrect..";
        javascriptIntermedAlgScrNextButton.innerHTML = `<button class="nextButton javascriptColor1" onclick=javascriptIntermedAlgScrBtn()>Next</button>`;
        javascriptIntermedAlgScrRemoveValue.innerHTML = "";



    } else {
        javascriptIntermedAlgScrIncorrectValue.innerHTML = "Incorrect..";
        javascriptIntermedAlgScrNextButton.innerHTML = `<button class="nextButton javascriptColor1" onclick=javascriptIntermedAlgScrBtn()>Next</button>`;
        javascriptIntermedAlgScrRemoveValue.innerHTML = "";
    }

}
window.javascriptIntermedAlgScrSubmit = javascriptIntermedAlgScrSubmit; /* to make submit global*/

function javascriptIntermedAlgScrButton() {
    javascriptIntermedAlgScrTest = document.getElementById("javascriptIntermedAlgScrAddedQuestion").innerHTML = javascriptIntermedAlgScrQuestionArr[javascriptIntermedAlgScrRandomValue]; /* giving random question to html */

    return javascriptIntermedAlgScrTest;
}
window.javascriptIntermedAlgScrButton = javascriptIntermedAlgScrButton;

function javascriptIntermedAlgScrShowTest() {
    var javascriptIntermedAlgScrInputBox = document.getElementById("javascriptIntermedAlgScrRemove").style.display = "block";
    return javascriptIntermedAlgScrInputBox;
}
window.javascriptIntermedAlgScrShowTest = javascriptIntermedAlgScrShowTest;

function javascriptIntermedAlgScrBtn() {
    javascriptIntermedAlgScrRandomValue = Math.floor(Math.random() * javascriptIntermedAlgScrQuestionArr.length); /* buton next in html to make a next random question*/
    document.getElementById("javascriptIntermedAlgScrAddedQuestion").innerHTML = javascriptIntermedAlgScrQuestionArr[javascriptIntermedAlgScrRandomValue]; /* giving random question to html */
    document.getElementById("javascriptIntermedAlgScrElementButton").innerHTML = "";/* to clean javascriptIntermedAlgScrElementButton*/
    document.getElementById("javascriptIntermedAlgScrRemove").innerHTML = `<textarea name="text" class="answer_textarea" id="input"></textarea></br>
      <button class="answer_submit javascriptColor1" id = "javascriptIntermedAlgScrStartButton" onclick="javascriptIntermedAlgScrSubmit()">Submit</button>`;/* to create next text area and Submit button. */
    document.getElementById("javascriptIntermedAlgScrCheckingAnswer").innerHTML = "";
    document.getElementById("javascriptIntermedAlgScrShowingAnswer").innerHTML = "";
}
window.javascriptIntermedAlgScrBtn = javascriptIntermedAlgScrBtn;/* to make submit global*/

