import { javascriptEs6AnswerArr } from './questionsAndAnswers/javascriptEs6Answers'; /* importing  array from other js file with webpack*/

import { javascriptEs6QuestionArr } from './questionsAndAnswers/javascriptEs6Questions'; /* importing  array from other js file with webpack*/




var javascriptEs6RandomValue = Math.floor(Math.random() * javascriptEs6QuestionArr.length); /* taking random question from htmlQuestionArr*/


function javascriptEs6Submit() { /* function for html submit button*/

    var javascriptEs6InputAnswer = input.value.replace(/\s+/g, ``); /*replace(/\s+/g, `` is removing all spaces. Avoid checking all the spaces to compare text*/
    var javascriptEs6CorrectValue = document.getElementById("javascriptEs6CheckingAnswer"); /* making getElementById code shorter*/
    var javascriptEs6IncorrectValue = document.getElementById("javascriptEs6CheckingAnswer");
    var javascriptEs6DisplayAnswer = document.getElementById("javascriptEs6ShowingAnswer");
    var javascriptEs6NextButton = document.getElementById("javascriptEs6ElementButton");
    var javascriptEs6RemoveValue = document.getElementById("javascriptEs6Remove");

    if (javascriptEs6RandomValue == 0 && javascriptEs6InputAnswer == javascriptEs6AnswerArr[0].A0) { /* checking if javascriptEs6RandomValue is 0 and if putting answer the same as javascriptEs6AnswerArr*//*A0 is just that I can track answer numbers when adding questions and answers*/
        javascriptEs6CorrectValue.innerHTML = "Correct..";
        javascriptEs6DisplayAnswer.innerHTML = `
        <textarea name="text" class="answer_textarea" id="input">Good Job :) </textarea>`;
        javascriptEs6NextButton.innerHTML = `<button class="nextButton javascriptEs6Color1" onclick=javascriptEs6Btn()>Next</button>`; /* creating next button with javascriptEs6Btn()function*/
        javascriptEs6RemoveValue.innerHTML = "";/* removing in html answer*/



    } else if (javascriptEs6RandomValue == 0 && javascriptEs6InputAnswer !== javascriptEs6AnswerArr[0].A0) {/*  if random value not == then giving then display the answere.*/
        javascriptEs6DisplayAnswer.innerHTML = `
    <textarea name="text" class="answer_textarea" id="input">
var myName;
        </textarea>`;
        javascriptEs6IncorrectValue.innerHTML = "Incorrect..";
        javascriptEs6NextButton.innerHTML = `<button class="nextButton javascriptEs6Color1" onclick=javascriptEs6Btn()>Next</button>`;
        javascriptEs6RemoveValue.innerHTML = "";



    } else if (javascriptEs6RandomValue == 1 && javascriptEs6InputAnswer == javascriptEs6AnswerArr[1].A1) {
        javascriptEs6CorrectValue.innerHTML = "Correct..";
        javascriptEs6DisplayAnswer.innerHTML = `
        <textarea name="text" class="answer_textarea" id="input">Good Job :) </textarea>`;
        javascriptEs6NextButton.innerHTML = `<button class="nextButton javascriptEs6Color1" onclick=javascriptEs6Btn()>Next</button>`;
        javascriptEs6RemoveValue.innerHTML = "";

    } else if (javascriptEs6RandomValue == 1 && javascriptEs6InputAnswer !== javascriptEs6AnswerArr[1].A1) {
        javascriptEs6DisplayAnswer.innerHTML = `
        <textarea name="text" class="answer_textarea" id="input">
var a = 7;
var b = a;
          </textarea>`;
        javascriptEs6IncorrectValue.innerHTML = "Incorrect..";
        javascriptEs6NextButton.innerHTML = `<button class="nextButton javascriptEs6Color1" onclick=javascriptEs6Btn()>Next</button>`;
        javascriptEs6RemoveValue.innerHTML = "";



    } else if (javascriptEs6RandomValue == 2 && javascriptEs6InputAnswer == javascriptEs6AnswerArr[2].A2) {
        javascriptEs6CorrectValue.innerHTML = "Correct..";
        javascriptEs6DisplayAnswer.innerHTML = `
        <textarea name="text" class="answer_textarea" id="input">Good Job :) </textarea>`;
        javascriptEs6NextButton.innerHTML = `<button class="nextButton javascriptEs6Color1" onclick=javascriptEs6Btn()>Next</button>`;
        javascriptEs6RemoveValue.innerHTML = "";

    } else if (javascriptEs6RandomValue == 2 && javascriptEs6InputAnswer !== javascriptEs6AnswerArr[2].A2) {
        javascriptEs6DisplayAnswer.innerHTML = `
    <textarea name="text" class="answer_textarea" id="input">
var a = 9;
          </textarea>`;
        javascriptEs6IncorrectValue.innerHTML = "Incorrect..";
        javascriptEs6NextButton.innerHTML = `<button class="nextButton javascriptEs6Color1" onclick=javascriptEs6Btn()>Next</button>`;
        javascriptEs6RemoveValue.innerHTML = "";



    } else if (javascriptEs6RandomValue == 3 && javascriptEs6InputAnswer == javascriptEs6AnswerArr[3].A3) {
        javascriptEs6CorrectValue.innerHTML = "Correct..";
        javascriptEs6DisplayAnswer.innerHTML = `
        <textarea name="text" class="answer_textarea" id="input">Good Job :) </textarea>`;
        javascriptEs6NextButton.innerHTML = `<button class="nextButton javascriptEs6Color1" onclick=javascriptEs6Btn()>Next</button>`;
        javascriptEs6RemoveValue.innerHTML = "";

    } else if (javascriptEs6RandomValue == 3 && javascriptEs6InputAnswer !== javascriptEs6AnswerArr[3].A3) {
        javascriptEs6DisplayAnswer.innerHTML = `
    <textarea name="text" class="answer_textarea" id="input">
var a = 5;
var b = 10;
var c = "I am a";
a = a + 1;
b = b + 5;
c = c + " String!";
        </textarea>`;
        javascriptEs6IncorrectValue.innerHTML = "Incorrect..";
        javascriptEs6NextButton.innerHTML = `<button class="nextButton javascriptEs6Color1" onclick=javascriptEs6Btn()>Next</button>`;
        javascriptEs6RemoveValue.innerHTML = "";
        


    } else if (javascriptEs6RandomValue == 4 && javascriptEs6InputAnswer == javascriptEs6AnswerArr[4].A4) {
        javascriptEs6CorrectValue.innerHTML = "Correct..";
        javascriptEs6DisplayAnswer.innerHTML = `
        <textarea name="text" class="answer_textarea" id="input">Good Job :) </textarea>`;
        javascriptEs6NextButton.innerHTML = `<button class="nextButton javascriptEs6Color1" onclick=javascriptEs6Btn()>Next</button>`;
        javascriptEs6RemoveValue.innerHTML = "";

    } else if (javascriptEs6RandomValue == 4 && javascriptEs6InputAnswer !== javascriptEs6AnswerArr[4].A4) {
        javascriptEs6DisplayAnswer.innerHTML = `
    <textarea name="text" class="answer_textarea" id="input">
var studlyCapVar ;
var properCamelCase;
var titleCaseOver;

var studlyCapVar = 10;
var properCamelCase = "A String";
var titleCaseOver = 9000;
        </textarea>`;
        javascriptEs6IncorrectValue.innerHTML = "Incorrect..";
        javascriptEs6NextButton.innerHTML = `<button class="nextButton javascriptEs6Color1" onclick=javascriptEs6Btn()>Next</button>`;
        javascriptEs6RemoveValue.innerHTML = "";



    } else if (javascriptEs6RandomValue == 5 && javascriptEs6InputAnswer == javascriptEs6AnswerArr[5].A5) {
        javascriptEs6CorrectValue.innerHTML = "Correct..";
        javascriptEs6DisplayAnswer.innerHTML = `
        <textarea name="text" class="answer_textarea" id="input">Good Job :) </textarea>`;
        javascriptEs6NextButton.innerHTML = `<button class="nextButton javascriptEs6Color1" onclick=javascriptEs6Btn()>Next</button>`;
        javascriptEs6RemoveValue.innerHTML = "";

    } else if (javascriptEs6RandomValue == 5 && javascriptEs6InputAnswer !== javascriptEs6AnswerArr[5].A5) {
        javascriptEs6DisplayAnswer.innerHTML = `
    <textarea name="text" class="answer_textarea" id="input">
var sum = 10 + 10;
        </textarea>`;
        javascriptEs6IncorrectValue.innerHTML = "Incorrect..";
        javascriptEs6NextButton.innerHTML = `<button class="nextButton javascriptEs6Color1" onclick=javascriptEs6Btn()>Next</button>`;
        javascriptEs6RemoveValue.innerHTML = "";



    } else if (javascriptEs6RandomValue == 6 && javascriptEs6InputAnswer == javascriptEs6AnswerArr[6].A6) {
        javascriptEs6CorrectValue.innerHTML = "Correct..";
        javascriptEs6DisplayAnswer.innerHTML = `
        <textarea name="text" class="answer_textarea" id="input">Good Job :) </textarea>`;
        javascriptEs6NextButton.innerHTML = `<button class="nextButton javascriptEs6Color1" onclick=javascriptEs6Btn()>Next</button>`;
        javascriptEs6RemoveValue.innerHTML = "";

    } else if (javascriptEs6RandomValue == 6 && javascriptEs6InputAnswer !== javascriptEs6AnswerArr[6].A6) {
        javascriptEs6DisplayAnswer.innerHTML = `
    <textarea name="text" class="answer_textarea" id="input">
var diffrence = 45 - 33;
        </textarea>`;
        javascriptEs6IncorrectValue.innerHTML = "Incorrect..";
        javascriptEs6NextButton.innerHTML = `<button class="nextButton javascriptEs6Color1" onclick=javascriptEs6Btn()>Next</button>`;
        javascriptEs6RemoveValue.innerHTML = "";



    } else if (javascriptEs6RandomValue == 7 && javascriptEs6InputAnswer == javascriptEs6AnswerArr[7].A7) {
        javascriptEs6CorrectValue.innerHTML = "Correct..";
        javascriptEs6DisplayAnswer.innerHTML = `
        <textarea name="text" class="answer_textarea" id="input">Good Job :) </textarea>`;
        javascriptEs6NextButton.innerHTML = `<button class="nextButton javascriptEs6Color1" onclick=javascriptEs6Btn()>Next</button>`;
        javascriptEs6RemoveValue.innerHTML = "";

    } else if (javascriptEs6RandomValue == 7 && javascriptEs6InputAnswer !== javascriptEs6AnswerArr[7].A7) {
        javascriptEs6DisplayAnswer.innerHTML = `
    <textarea name="text" class="answer_textarea" id="input">
var  product = 8 * 10;
        </textarea>`;
        javascriptEs6IncorrectValue.innerHTML = "Incorrect..";
        javascriptEs6NextButton.innerHTML = `<button class="nextButton javascriptEs6Color1" onclick=javascriptEs6Btn()>Next</button>`;
        javascriptEs6RemoveValue.innerHTML = "";



    } else if (javascriptEs6RandomValue == 8 && javascriptEs6InputAnswer == javascriptEs6AnswerArr[8].A8) {
        javascriptEs6CorrectValue.innerHTML = "Correct..";
        javascriptEs6DisplayAnswer.innerHTML = `
        <textarea name="text" class="answer_textarea" id="input">Good Job :) </textarea>`;
        javascriptEs6NextButton.innerHTML = `<button class="nextButton javascriptEs6Color1" onclick=javascriptEs6Btn()>Next</button>`;
        javascriptEs6RemoveValue.innerHTML = "";

    } else if (javascriptEs6RandomValue == 8 && javascriptEs6InputAnswer !== javascriptEs6AnswerArr[8].A8) {
        javascriptEs6DisplayAnswer.innerHTML = `
    <textarea name="text" class="answer_textarea" id="input">
var quotient = 66 / 33;
        </textarea>`;
        javascriptEs6IncorrectValue.innerHTML = "Incorrect..";
        javascriptEs6NextButton.innerHTML = `<button class="nextButton javascriptEs6Color1" onclick=javascriptEs6Btn()>Next</button>`;
        javascriptEs6RemoveValue.innerHTML = "";



    } else if (javascriptEs6RandomValue == 9 && javascriptEs6InputAnswer == javascriptEs6AnswerArr[9].A9) {
        javascriptEs6CorrectValue.innerHTML = "Correct..";
        javascriptEs6DisplayAnswer.innerHTML = `
        <textarea name="text" class="answer_textarea" id="input">Good Job :) </textarea>`;
        javascriptEs6NextButton.innerHTML = `<button class="nextButton javascriptEs6Color1" onclick=javascriptEs6Btn()>Next</button>`;
        javascriptEs6RemoveValue.innerHTML = "";

    } else if (javascriptEs6RandomValue == 9 && javascriptEs6InputAnswer !== javascriptEs6AnswerArr[9].A9) {
        javascriptEs6DisplayAnswer.innerHTML = `
    <textarea name="text" class="answer_textarea" id="input">
var myVar = 87;
myVar++;
        </textarea>`;
        javascriptEs6IncorrectValue.innerHTML = "Incorrect..";
        javascriptEs6NextButton.innerHTML = `<button class="nextButton javascriptEs6Color1" onclick=javascriptEs6Btn()>Next</button>`;
        javascriptEs6RemoveValue.innerHTML = "";



    } else if (javascriptEs6RandomValue == 10 && javascriptEs6InputAnswer == javascriptEs6AnswerArr[10].A10) {
        javascriptEs6CorrectValue.innerHTML = "Correct..";
        javascriptEs6DisplayAnswer.innerHTML = `
        <textarea name="text" class="answer_textarea" id="input">Good Job :) </textarea>`;
        javascriptEs6NextButton.innerHTML = `<button class="nextButton javascriptEs6Color1" onclick=javascriptEs6Btn()>Next</button>`;
        javascriptEs6RemoveValue.innerHTML = "";

    } else if (javascriptEs6RandomValue == 10 && javascriptEs6InputAnswer !== javascriptEs6AnswerArr[10].A10) {
        javascriptEs6DisplayAnswer.innerHTML = `
    <textarea name="text" class="answer_textarea" id="input">
var myVar = 11;
myVar--;
        </textarea>`;
        javascriptEs6IncorrectValue.innerHTML = "Incorrect..";
        javascriptEs6NextButton.innerHTML = `<button class="nextButton javascriptEs6Color1" onclick=javascriptEs6Btn()>Next</button>`;
        javascriptEs6RemoveValue.innerHTML = "";



    } else if (javascriptEs6RandomValue == 11 && javascriptEs6InputAnswer == javascriptEs6AnswerArr[11].A11) {
        javascriptEs6CorrectValue.innerHTML = "Correct..";
        javascriptEs6DisplayAnswer.innerHTML = `
        <textarea name="text" class="answer_textarea" id="input">Good Job :) </textarea>`;
        javascriptEs6NextButton.innerHTML = `<button class="nextButton javascriptEs6Color1" onclick=javascriptEs6Btn()>Next</button>`;
        javascriptEs6RemoveValue.innerHTML = "";

    } else if (javascriptEs6RandomValue == 11 && javascriptEs6InputAnswer !== javascriptEs6AnswerArr[11].A11) {
        javascriptEs6DisplayAnswer.innerHTML = `
    <textarea name="text" class="answer_textarea" id="input">
var myDecimal = 5.7;
        </textarea>`;
        javascriptEs6IncorrectValue.innerHTML = "Incorrect..";
        javascriptEs6NextButton.innerHTML = `<button class="nextButton javascriptEs6Color1" onclick=javascriptEs6Btn()>Next</button>`;
        javascriptEs6RemoveValue.innerHTML = "";



    } else if (javascriptEs6RandomValue == 12 && javascriptEs6InputAnswer == javascriptEs6AnswerArr[12].A12) {
        javascriptEs6CorrectValue.innerHTML = "Correct..";
        javascriptEs6DisplayAnswer.innerHTML = `
        <textarea name="text" class="answer_textarea" id="input">Good Job :) </textarea>`;
        javascriptEs6NextButton.innerHTML = `<button class="nextButton javascriptEs6Color1" onclick=javascriptEs6Btn()>Next</button>`;
        javascriptEs6RemoveValue.innerHTML = "";

    } else if (javascriptEs6RandomValue == 12 && javascriptEs6InputAnswer !== javascriptEs6AnswerArr[12].A12) {
        javascriptEs6DisplayAnswer.innerHTML = `
    <textarea name="text" class="answer_textarea" id="input">
var product = 2.0 * 2.5;
        </textarea>`;
        javascriptEs6IncorrectValue.innerHTML = "Incorrect..";
        javascriptEs6NextButton.innerHTML = `<button class="nextButton javascriptEs6Color1" onclick=javascriptEs6Btn()>Next</button>`;
        javascriptEs6RemoveValue.innerHTML = "";



    } else if (javascriptEs6RandomValue == 13 && javascriptEs6InputAnswer == javascriptEs6AnswerArr[13].A13) {
        javascriptEs6CorrectValue.innerHTML = "Correct..";
        javascriptEs6DisplayAnswer.innerHTML = `
        <textarea name="text" class="answer_textarea" id="input">Good Job :) </textarea>`;
        javascriptEs6NextButton.innerHTML = `<button class="nextButton javascriptEs6Color1" onclick=javascriptEs6Btn()>Next</button>`;
        javascriptEs6RemoveValue.innerHTML = "";

    } else if (javascriptEs6RandomValue == 13 && javascriptEs6InputAnswer !== javascriptEs6AnswerArr[13].A13) {
        javascriptEs6DisplayAnswer.innerHTML = `
    <textarea name="text" class="answer_textarea" id="input">
var quotient = 4.4 / 2.0;
        </textarea>`;
        javascriptEs6IncorrectValue.innerHTML = "Incorrect..";
        javascriptEs6NextButton.innerHTML = `<button class="nextButton javascriptEs6Color1" onclick=javascriptEs6Btn()>Next</button>`;
        javascriptEs6RemoveValue.innerHTML = "";



    } else if (javascriptEs6RandomValue == 14 && javascriptEs6InputAnswer == javascriptEs6AnswerArr[14].A14) {
        javascriptEs6CorrectValue.innerHTML = "Correct..";
        javascriptEs6DisplayAnswer.innerHTML = `
        <textarea name="text" class="answer_textarea" id="input">Good Job :) </textarea>`;
        javascriptEs6NextButton.innerHTML = `<button class="nextButton javascriptEs6Color1" onclick=javascriptEs6Btn()>Next</button>`;
        javascriptEs6RemoveValue.innerHTML = "";

    } else if (javascriptEs6RandomValue == 14 && javascriptEs6InputAnswer !== javascriptEs6AnswerArr[14].A14) {
        javascriptEs6DisplayAnswer.innerHTML = `
    <textarea name="text" class="answer_textarea" id="input">
var remainder = 11 % 3;
        </textarea>`;
        javascriptEs6IncorrectValue.innerHTML = "Incorrect..";
        javascriptEs6NextButton.innerHTML = `<button class="nextButton javascriptEs6Color1" onclick=javascriptEs6Btn()>Next</button>`;
        javascriptEs6RemoveValue.innerHTML = "";



    } else if (javascriptEs6RandomValue == 15 && javascriptEs6InputAnswer == javascriptEs6AnswerArr[15].A15) {
        javascriptEs6CorrectValue.innerHTML = "Correct..";
        javascriptEs6DisplayAnswer.innerHTML = `
        <textarea name="text" class="answer_textarea" id="input">Good Job :) </textarea>`;
        javascriptEs6NextButton.innerHTML = `<button class="nextButton javascriptEs6Color1" onclick=javascriptEs6Btn()>Next</button>`;
        javascriptEs6RemoveValue.innerHTML = "";

    } else if (javascriptEs6RandomValue == 15 && javascriptEs6InputAnswer !== javascriptEs6AnswerArr[15].A15) {
        javascriptEs6DisplayAnswer.innerHTML = `
    <textarea name="text" class="answer_textarea" id="input">
var a = 3;
var b = 17;
var c = 12;

a +=12;
b += 9;
c +=7;
        </textarea>`;
        javascriptEs6IncorrectValue.innerHTML = "Incorrect..";
        javascriptEs6NextButton.innerHTML = `<button class="nextButton javascriptEs6Color1" onclick=javascriptEs6Btn()>Next</button>`;
        javascriptEs6RemoveValue.innerHTML = "";



    } else if (javascriptEs6RandomValue == 16 && javascriptEs6InputAnswer == javascriptEs6AnswerArr[16].A16) {
        javascriptEs6CorrectValue.innerHTML = "Correct..";
        javascriptEs6DisplayAnswer.innerHTML = `
        <textarea name="text" class="answer_textarea" id="input">Good Job :) </textarea>`;
        javascriptEs6NextButton.innerHTML = `<button class="nextButton javascriptEs6Color1" onclick=javascriptEs6Btn()>Next</button>`;
        javascriptEs6RemoveValue.innerHTML = "";

    } else if (javascriptEs6RandomValue == 16 && javascriptEs6InputAnswer !== javascriptEs6AnswerArr[16].A16) {
        javascriptEs6DisplayAnswer.innerHTML = `
    <textarea name="text" class="answer_textarea" id="input">
var a = 11;
var b = 9;
var c = 3;

a -= 6;
b -= 15;
c -= 1;
        </textarea>`;
        javascriptEs6IncorrectValue.innerHTML = "Incorrect..";
        javascriptEs6NextButton.innerHTML = `<button class="nextButton javascriptEs6Color1" onclick=javascriptEs6Btn()>Next</button>`;
        javascriptEs6RemoveValue.innerHTML = "";



    } else if (javascriptEs6RandomValue == 17 && javascriptEs6InputAnswer == javascriptEs6AnswerArr[17].A17) {
        javascriptEs6CorrectValue.innerHTML = "Correct..";
        javascriptEs6DisplayAnswer.innerHTML = `
        <textarea name="text" class="answer_textarea" id="input">Good Job :) </textarea>`;
        javascriptEs6NextButton.innerHTML = `<button class="nextButton javascriptEs6Color1" onclick=javascriptEs6Btn()>Next</button>`;
        javascriptEs6RemoveValue.innerHTML = "";

    } else if (javascriptEs6RandomValue == 17 && javascriptEs6InputAnswer !== javascriptEs6AnswerArr[17].A17) {
        javascriptEs6DisplayAnswer.innerHTML = `
    <textarea name="text" class="answer_textarea" id="input">
var a = 5;
var b = 12;
var c = 4.6;

a *=5;
b *= 3;
c *=10;
        </textarea>`;
        javascriptEs6IncorrectValue.innerHTML = "Incorrect..";
        javascriptEs6NextButton.innerHTML = `<button class="nextButton javascriptEs6Color1" onclick=javascriptEs6Btn()>Next</button>`;
        javascriptEs6RemoveValue.innerHTML = "";



    } else if (javascriptEs6RandomValue == 18 && javascriptEs6InputAnswer == javascriptEs6AnswerArr[18].A18) {
        javascriptEs6CorrectValue.innerHTML = "Correct..";
        javascriptEs6DisplayAnswer.innerHTML = `
        <textarea name="text" class="answer_textarea" id="input">Good Job :) </textarea>`;
        javascriptEs6NextButton.innerHTML = `<button class="nextButton javascriptEs6Color1" onclick=javascriptEs6Btn()>Next</button>`;
        javascriptEs6RemoveValue.innerHTML = "";

    } else if (javascriptEs6RandomValue == 18 && javascriptEs6InputAnswer !== javascriptEs6AnswerArr[18].A18) {
        javascriptEs6DisplayAnswer.innerHTML = `
    <textarea name="text" class="answer_textarea" id="input">
var a = 48;
var b = 108;
var c = 33;

a /=12;
b /=4;
c /=11;
        </textarea>`;
        javascriptEs6IncorrectValue.innerHTML = "Incorrect..";
        javascriptEs6NextButton.innerHTML = `<button class="nextButton javascriptEs6Color1" onclick=javascriptEs6Btn()>Next</button>`;
        javascriptEs6RemoveValue.innerHTML = "";



    } else if (javascriptEs6RandomValue == 19 && javascriptEs6InputAnswer == javascriptEs6AnswerArr[19].A19) {
        javascriptEs6CorrectValue.innerHTML = "Correct..";
        javascriptEs6DisplayAnswer.innerHTML = `
        <textarea name="text" class="answer_textarea" id="input">Good Job :) </textarea>`;
        javascriptEs6NextButton.innerHTML = `<button class="nextButton javascriptEs6Color1" onclick=javascriptEs6Btn()>Next</button>`;
        javascriptEs6RemoveValue.innerHTML = "";

    } else if (javascriptEs6RandomValue == 19 && javascriptEs6InputAnswer !== javascriptEs6AnswerArr[19].A19) {
        javascriptEs6DisplayAnswer.innerHTML = `
    <textarea name="text" class="answer_textarea" id="input">
var myFirstName = "first name"; 
var myLastName = "last name";
          </textarea>`;
        javascriptEs6IncorrectValue.innerHTML = "Incorrect..";
        javascriptEs6NextButton.innerHTML = `<button class="nextButton javascriptEs6Color1" onclick=javascriptEs6Btn()>Next</button>`;
        javascriptEs6RemoveValue.innerHTML = "";



    } else if (javascriptEs6RandomValue == 20 && javascriptEs6InputAnswer == javascriptEs6AnswerArr[20].A20) {
        javascriptEs6CorrectValue.innerHTML = "Correct..";
        javascriptEs6DisplayAnswer.innerHTML = `
        <textarea name="text" class="answer_textarea" id="input">Good Job :) </textarea>`;
        javascriptEs6NextButton.innerHTML = `<button class="nextButton javascriptEs6Color1" onclick=javascriptEs6Btn()>Next</button>`;
        javascriptEs6RemoveValue.innerHTML = "";

    } else if (javascriptEs6RandomValue == 20 && javascriptEs6InputAnswer !== javascriptEs6AnswerArr[20].A20) {
        javascriptEs6DisplayAnswer.innerHTML = `
    <textarea name="text" class="answer_textarea" id="input">
var myStr = "I am a \"double quoted\" string inside \"double quotes\".";
        </textarea>`;
        javascriptEs6IncorrectValue.innerHTML = "Incorrect..";
        javascriptEs6NextButton.innerHTML = `<button class="nextButton javascriptEs6Color1" onclick=javascriptEs6Btn()>Next</button>`;
        javascriptEs6RemoveValue.innerHTML = "";



    } else if (javascriptEs6RandomValue == 21 && javascriptEs6InputAnswer == javascriptEs6AnswerArr[21].A21) {
        javascriptEs6CorrectValue.innerHTML = "Correct..";
        javascriptEs6DisplayAnswer.innerHTML = `
        <textarea name="text" class="answer_textarea" id="input">Good Job :) </textarea>`;
        javascriptEs6NextButton.innerHTML = `<button class="nextButton javascriptEs6Color1" onclick=javascriptEs6Btn()>Next</button>`;
        javascriptEs6RemoveValue.innerHTML = "";

    } else if (javascriptEs6RandomValue == 21 && javascriptEs6InputAnswer !== javascriptEs6AnswerArr[21].A21) {
        javascriptEs6DisplayAnswer.innerHTML = `
    <textarea name="text" class="answer_textarea" id="input">
var myStr = '<a href="http://www.example.com" target="_blank">Link</a>';
        </textarea>`;
        javascriptEs6IncorrectValue.innerHTML = "Incorrect..";
        javascriptEs6NextButton.innerHTML = `<button class="nextButton javascriptEs6Color1" onclick=javascriptEs6Btn()>Next</button>`;
        javascriptEs6RemoveValue.innerHTML = "";



    } else if (javascriptEs6RandomValue == 22 && javascriptEs6InputAnswer == javascriptEs6AnswerArr[22].A22) {
        javascriptEs6CorrectValue.innerHTML = "Correct..";
        javascriptEs6DisplayAnswer.innerHTML = `
        <textarea name="text" class="answer_textarea" id="input">Good Job :) </textarea>`;
        javascriptEs6NextButton.innerHTML = `<button class="nextButton javascriptEs6Color1" onclick=javascriptEs6Btn()>Next</button>`;
        javascriptEs6RemoveValue.innerHTML = "";

    } else if (javascriptEs6RandomValue == 22 && javascriptEs6InputAnswer !== javascriptEs6AnswerArr[22].A22) {
        javascriptEs6DisplayAnswer.innerHTML = `
    <textarea name="text" class="answer_textarea" id="input">
var myStr = "\'FirstLine\n\t\SecondLine\nThirdLine";
        </textarea>`;
        javascriptEs6IncorrectValue.innerHTML = "Incorrect..";
        javascriptEs6NextButton.innerHTML = `<button class="nextButton javascriptEs6Color1" onclick=javascriptEs6Btn()>Next</button>`;
        javascriptEs6RemoveValue.innerHTML = "";



    } else if (javascriptEs6RandomValue == 23 && javascriptEs6InputAnswer == javascriptEs6AnswerArr[23].A23) {
        javascriptEs6CorrectValue.innerHTML = "Correct..";
        javascriptEs6DisplayAnswer.innerHTML = `
        <textarea name="text" class="answer_textarea" id="input">Good Job :) </textarea>`;
        javascriptEs6NextButton.innerHTML = `<button class="nextButton javascriptEs6Color1" onclick=javascriptEs6Btn()>Next</button>`;
        javascriptEs6RemoveValue.innerHTML = "";

    } else if (javascriptEs6RandomValue == 23 && javascriptEs6InputAnswer !== javascriptEs6AnswerArr[23].A23) {
        javascriptEs6DisplayAnswer.innerHTML = `

    <textarea name="text" class="answer_textarea" id="input">
var myStr="This is the start. " + "This is the end.";
              </textarea>`;
        javascriptEs6IncorrectValue.innerHTML = "Incorrect..";
        javascriptEs6NextButton.innerHTML = `<button class="nextButton javascriptEs6Color1" onclick=javascriptEs6Btn()>Next</button>`;
        javascriptEs6RemoveValue.innerHTML = "";



    } else if (javascriptEs6RandomValue == 24 && javascriptEs6InputAnswer == javascriptEs6AnswerArr[24].A24) {
        javascriptEs6CorrectValue.innerHTML = "Correct..";
        javascriptEs6DisplayAnswer.innerHTML = `
        <textarea name="text" class="answer_textarea" id="input">Good Job :) </textarea>`;
        javascriptEs6NextButton.innerHTML = `<button class="nextButton javascriptEs6Color1" onclick=javascriptEs6Btn()>Next</button>`;
        javascriptEs6RemoveValue.innerHTML = "";

    } else if (javascriptEs6RandomValue == 24 && javascriptEs6InputAnswer !== javascriptEs6AnswerArr[24].A24) {
        javascriptEs6DisplayAnswer.innerHTML = `
    <textarea name="text" class="answer_textarea" id="input">
var myStr = "This is the first sentence. ";
myStr += "This is the second sentence.";
        </textarea>`;
        javascriptEs6IncorrectValue.innerHTML = "Incorrect..";
        javascriptEs6NextButton.innerHTML = `<button class="nextButton javascriptEs6Color1" onclick=javascriptEs6Btn()>Next</button>`;
        javascriptEs6RemoveValue.innerHTML = "";



    } else if (javascriptEs6RandomValue == 25 && javascriptEs6InputAnswer == javascriptEs6AnswerArr[25].A25) {
        javascriptEs6CorrectValue.innerHTML = "Correct..";
        javascriptEs6DisplayAnswer.innerHTML = `
        <textarea name="text" class="answer_textarea" id="input">Good Job :) </textarea>`;
        javascriptEs6NextButton.innerHTML = `<button class="nextButton javascriptEs6Color1" onclick=javascriptEs6Btn()>Next</button>`;
        javascriptEs6RemoveValue.innerHTML = "";

    } else if (javascriptEs6RandomValue == 25 && javascriptEs6InputAnswer !== javascriptEs6AnswerArr[25].A25) {
        javascriptEs6DisplayAnswer.innerHTML = `
    <textarea name="text" class="answer_textarea" id="input">
var myName  = "your name";
var myStr = "My name is " + myName +  " and I am well!";
        </textarea>`;
        javascriptEs6IncorrectValue.innerHTML = "Incorrect..";
        javascriptEs6NextButton.innerHTML = `<button class="nextButton javascriptEs6Color1" onclick=javascriptEs6Btn()>Next</button>`;
        javascriptEs6RemoveValue.innerHTML = "";



    } else if (javascriptEs6RandomValue == 26 && javascriptEs6InputAnswer == javascriptEs6AnswerArr[26].A26) {
        javascriptEs6CorrectValue.innerHTML = "Correct..";
        javascriptEs6DisplayAnswer.innerHTML = `
        <textarea name="text" class="answer_textarea" id="input">Good Job :) </textarea>`;
        javascriptEs6NextButton.innerHTML = `<button class="nextButton javascriptEs6Color1" onclick=javascriptEs6Btn()>Next</button>`;
        javascriptEs6RemoveValue.innerHTML = "";

    } else if (javascriptEs6RandomValue == 26 && javascriptEs6InputAnswer !== javascriptEs6AnswerArr[26].A26) {
        javascriptEs6DisplayAnswer.innerHTML = `
    <textarea name="text" class="answer_textarea" id="input">
var someAdjective = "awesome!";
var myStr = "Learning to code is ";
myStr +=someAdjective;
          </textarea>`;
        javascriptEs6IncorrectValue.innerHTML = "Incorrect..";
        javascriptEs6NextButton.innerHTML = `<button class="nextButton javascriptEs6Color1" onclick=javascriptEs6Btn()>Next</button>`;
        javascriptEs6RemoveValue.innerHTML = "";



    } else if (javascriptEs6RandomValue == 27 && javascriptEs6InputAnswer == javascriptEs6AnswerArr[27].A27) {
        javascriptEs6CorrectValue.innerHTML = "Correct..";
        javascriptEs6DisplayAnswer.innerHTML = `
        <textarea name="text" class="answer_textarea" id="input">Good Job :) </textarea>`;
        javascriptEs6NextButton.innerHTML = `<button class="nextButton javascriptEs6Color1" onclick=javascriptEs6Btn()>Next</button>`;
        javascriptEs6RemoveValue.innerHTML = "";

    } else if (javascriptEs6RandomValue == 27 && javascriptEs6InputAnswer !== javascriptEs6AnswerArr[27].A27) {
        javascriptEs6DisplayAnswer.innerHTML = `
    <textarea name="text" class="answer_textarea" id="input">
var lastNameLength = 0;
var lastName = "Lovelace";
lastNameLength = lastName.length;
        </textarea>`;
        javascriptEs6IncorrectValue.innerHTML = "Incorrect..";
        javascriptEs6NextButton.innerHTML = `<button class="nextButton javascriptEs6Color1" onclick=javascriptEs6Btn()>Next</button>`;
        javascriptEs6RemoveValue.innerHTML = "";



    } else if (javascriptEs6RandomValue == 28 && javascriptEs6InputAnswer == javascriptEs6AnswerArr[28].A28) {
        javascriptEs6CorrectValue.innerHTML = "Correct..";
        javascriptEs6DisplayAnswer.innerHTML = `
        <textarea name="text" class="answer_textarea" id="input">Good Job :) </textarea>`;
        javascriptEs6NextButton.innerHTML = `<button class="nextButton javascriptEs6Color1" onclick=javascriptEs6Btn()>Next</button>`;
        javascriptEs6RemoveValue.innerHTML = "";

    } else if (javascriptEs6RandomValue == 28 && javascriptEs6InputAnswer !== javascriptEs6AnswerArr[28].A28) {
        javascriptEs6DisplayAnswer.innerHTML = `
    <textarea name="text" class="answer_textarea" id="input">
var firstLetterOfLastName = "";
var lastName = "Lovelace";
firstLetterOfLastName = lastName[0];
        </textarea>`;
        javascriptEs6IncorrectValue.innerHTML = "Incorrect..";
        javascriptEs6NextButton.innerHTML = `<button class="nextButton javascriptEs6Color1" onclick=javascriptEs6Btn()>Next</button>`;
        javascriptEs6RemoveValue.innerHTML = "";



    } else if (javascriptEs6RandomValue == 29 && javascriptEs6InputAnswer == javascriptEs6AnswerArr[29].A29) {
        javascriptEs6CorrectValue.innerHTML = "Correct..";
        javascriptEs6DisplayAnswer.innerHTML = `
        <textarea name="text" class="answer_textarea" id="input">Good Job :) </textarea>`;
        javascriptEs6NextButton.innerHTML = `<button class="nextButton javascriptEs6Color1" onclick=javascriptEs6Btn()>Next</button>`;
        javascriptEs6RemoveValue.innerHTML = "";

    } else if (javascriptEs6RandomValue == 29 && javascriptEs6InputAnswer !== javascriptEs6AnswerArr[29].A29) {
        javascriptEs6DisplayAnswer.innerHTML = `
    <textarea name="text" class="answer_textarea" id="input">
var myStr = "Jello World";
myStr = "Hello World";
        </textarea>`;
        javascriptEs6IncorrectValue.innerHTML = "Incorrect..";
        javascriptEs6NextButton.innerHTML = `<button class="nextButton javascriptEs6Color1" onclick=javascriptEs6Btn()>Next</button>`;
        javascriptEs6RemoveValue.innerHTML = "";



    } else if (javascriptEs6RandomValue == 30 && javascriptEs6InputAnswer == javascriptEs6AnswerArr[30].A30) {
        javascriptEs6CorrectValue.innerHTML = "Correct..";
        javascriptEs6DisplayAnswer.innerHTML = `
        <textarea name="text" class="answer_textarea" id="input">Good Job :) </textarea>`;
        javascriptEs6NextButton.innerHTML = `<button class="nextButton javascriptEs6Color1" onclick=javascriptEs6Btn()>Next</button>`;
        javascriptEs6RemoveValue.innerHTML = "";

    } else if (javascriptEs6RandomValue == 30 && javascriptEs6InputAnswer !== javascriptEs6AnswerArr[30].A30) {
        javascriptEs6DisplayAnswer.innerHTML = `
    <textarea name="text" class="answer_textarea" id="input">
var lastName = "Lovelace";
var thirdLetterOfLastName = lastName[2];
        </textarea>`;
        javascriptEs6IncorrectValue.innerHTML = "Incorrect..";
        javascriptEs6NextButton.innerHTML = `<button class="nextButton javascriptEs6Color1" onclick=javascriptEs6Btn()>Next</button>`;
        javascriptEs6RemoveValue.innerHTML = "";



    } else if (javascriptEs6RandomValue == 31 && javascriptEs6InputAnswer == javascriptEs6AnswerArr[31].A31) {
        javascriptEs6CorrectValue.innerHTML = "Correct..";
        javascriptEs6DisplayAnswer.innerHTML = `
        <textarea name="text" class="answer_textarea" id="input">Good Job :) </textarea>`;
        javascriptEs6NextButton.innerHTML = `<button class="nextButton javascriptEs6Color1" onclick=javascriptEs6Btn()>Next</button>`;
        javascriptEs6RemoveValue.innerHTML = "";

    } else if (javascriptEs6RandomValue == 31 && javascriptEs6InputAnswer !== javascriptEs6AnswerArr[31].A31) {
        javascriptEs6DisplayAnswer.innerHTML = `
    <textarea name="text" class="answer_textarea" id="input">
var lastName = "Lovelace";
var lastLetterOfLastName = lastName[lastName.length - 1];
        </textarea>`;
        javascriptEs6IncorrectValue.innerHTML = "Incorrect..";
        javascriptEs6NextButton.innerHTML = `<button class="nextButton javascriptEs6Color1" onclick=javascriptEs6Btn()>Next</button>`;
        javascriptEs6RemoveValue.innerHTML = "";



    } else if (javascriptEs6RandomValue == 32 && javascriptEs6InputAnswer == javascriptEs6AnswerArr[32].A32) {
        javascriptEs6CorrectValue.innerHTML = "Correct..";
        javascriptEs6DisplayAnswer.innerHTML = `
        <textarea name="text" class="answer_textarea" id="input">Good Job :) </textarea>`;
        javascriptEs6NextButton.innerHTML = `<button class="nextButton javascriptEs6Color1" onclick=javascriptEs6Btn()>Next</button>`;
        javascriptEs6RemoveValue.innerHTML = "";

    } else if (javascriptEs6RandomValue == 32 && javascriptEs6InputAnswer !== javascriptEs6AnswerArr[32].A32) {
        javascriptEs6DisplayAnswer.innerHTML = `
    <textarea name="text" class="answer_textarea" id="input">
var lastName = "Lovelace";
var secondToLastLetterOfLastName = lastName[lastName.length - 2];
        </textarea>`;
        javascriptEs6IncorrectValue.innerHTML = "Incorrect..";
        javascriptEs6NextButton.innerHTML = `<button class="nextButton javascriptEs6Color1" onclick=javascriptEs6Btn()>Next</button>`;
        javascriptEs6RemoveValue.innerHTML = "";



    } else if (javascriptEs6RandomValue == 33 && javascriptEs6InputAnswer == javascriptEs6AnswerArr[33].A33) {
        javascriptEs6CorrectValue.innerHTML = "Correct..";
        javascriptEs6DisplayAnswer.innerHTML = `
        <textarea name="text" class="answer_textarea" id="input">Good Job :) </textarea>`;
        javascriptEs6NextButton.innerHTML = `<button class="nextButton javascriptEs6Color1" onclick=javascriptEs6Btn()>Next</button>`;
        javascriptEs6RemoveValue.innerHTML = "";

    } else if (javascriptEs6RandomValue == 33 && javascriptEs6InputAnswer !== javascriptEs6AnswerArr[33].A33) {
        javascriptEs6DisplayAnswer.innerHTML = `
    <textarea name="text" class="answer_textarea" id="input">
function wordBlanks(myNoun, myAdjective, myVerb, myAdverb) {
    var result = "";
    result+= "My "+myAdjective+" "+myNoun+" "+myVerb+" very "+myAdverb+".";
    return result;
}
wordBlanks("dog", "big", "ran", "quickly");</textarea>`;
        javascriptEs6IncorrectValue.innerHTML = "Incorrect..";
        javascriptEs6NextButton.innerHTML = `<button class="nextButton javascriptEs6Color1" onclick=javascriptEs6Btn()>Next</button>`;
        javascriptEs6RemoveValue.innerHTML = "";



    } else if (javascriptEs6RandomValue == 34 && javascriptEs6InputAnswer == javascriptEs6AnswerArr[34].A34) {
        javascriptEs6CorrectValue.innerHTML = "Correct..";
        javascriptEs6DisplayAnswer.innerHTML = `
        <textarea name="text" class="answer_textarea" id="input">Good Job :) </textarea>`;
        javascriptEs6NextButton.innerHTML = `<button class="nextButton javascriptEs6Color1" onclick=javascriptEs6Btn()>Next</button>`;
        javascriptEs6RemoveValue.innerHTML = "";

    } else if (javascriptEs6RandomValue == 34 && javascriptEs6InputAnswer !== javascriptEs6AnswerArr[34].A34) {
        javascriptEs6DisplayAnswer.innerHTML = `
    <textarea name="text" class="answer_textarea" id="input">
var myAray = ["test", 0];
        </textarea>`;
        javascriptEs6IncorrectValue.innerHTML = "Incorrect..";
        javascriptEs6NextButton.innerHTML = `<button class="nextButton javascriptEs6Color1" onclick=javascriptEs6Btn()>Next</button>`;
        javascriptEs6RemoveValue.innerHTML = "";



    } else if (javascriptEs6RandomValue == 35 && javascriptEs6InputAnswer == javascriptEs6AnswerArr[35].A35) {
        javascriptEs6CorrectValue.innerHTML = "Correct..";
        javascriptEs6DisplayAnswer.innerHTML = `
        <textarea name="text" class="answer_textarea" id="input">Good Job :) </textarea>`;
        javascriptEs6NextButton.innerHTML = `<button class="nextButton javascriptEs6Color1" onclick=javascriptEs6Btn()>Next</button>`;
        javascriptEs6RemoveValue.innerHTML = "";

    } else if (javascriptEs6RandomValue == 35 && javascriptEs6InputAnswer !== javascriptEs6AnswerArr[35].A35) {
        javascriptEs6DisplayAnswer.innerHTML = `
    <textarea name="text" class="answer_textarea" id="input">
var myArray = [["the universe", 42], ["everything", 101010]];
        </textarea>`;
        javascriptEs6IncorrectValue.innerHTML = "Incorrect..";
        javascriptEs6NextButton.innerHTML = `<button class="nextButton javascriptEs6Color1" onclick=javascriptEs6Btn()>Next</button>`;
        javascriptEs6RemoveValue.innerHTML = "";



    } else if (javascriptEs6RandomValue == 36 && javascriptEs6InputAnswer == javascriptEs6AnswerArr[36].A36) {
        javascriptEs6CorrectValue.innerHTML = "Correct..";
        javascriptEs6DisplayAnswer.innerHTML = `
        <textarea name="text" class="answer_textarea" id="input">Good Job :) </textarea>`;
        javascriptEs6NextButton.innerHTML = `<button class="nextButton javascriptEs6Color1" onclick=javascriptEs6Btn()>Next</button>`;
        javascriptEs6RemoveValue.innerHTML = "";

    } else if (javascriptEs6RandomValue == 36 && javascriptEs6InputAnswer !== javascriptEs6AnswerArr[36].A36) {
        javascriptEs6DisplayAnswer.innerHTML = `
    <textarea name="text" class="answer_textarea" id="input">
var myArray = [50,60,70];
var myData = myArray[0];
        </textarea>`;
        javascriptEs6IncorrectValue.innerHTML = "Incorrect..";
        javascriptEs6NextButton.innerHTML = `<button class="nextButton javascriptEs6Color1" onclick=javascriptEs6Btn()>Next</button>`;
        javascriptEs6RemoveValue.innerHTML = "";



    } else if (javascriptEs6RandomValue == 37 && javascriptEs6InputAnswer == javascriptEs6AnswerArr[37].A37) {
        javascriptEs6CorrectValue.innerHTML = "Correct..";
        javascriptEs6DisplayAnswer.innerHTML = `
        <textarea name="text" class="answer_textarea" id="input">Good Job :) </textarea>`;
        javascriptEs6NextButton.innerHTML = `<button class="nextButton javascriptEs6Color1" onclick=javascriptEs6Btn()>Next</button>`;
        javascriptEs6RemoveValue.innerHTML = "";

    } else if (javascriptEs6RandomValue == 37 && javascriptEs6InputAnswer !== javascriptEs6AnswerArr[37].A37) {
        javascriptEs6DisplayAnswer.innerHTML = `
    <textarea name="text" class="answer_textarea" id="input">
var myArray = [18,64,99];
myArray[0] = 45;
        </textarea>`;
        javascriptEs6IncorrectValue.innerHTML = "Incorrect..";
        javascriptEs6NextButton.innerHTML = `<button class="nextButton javascriptEs6Color1" onclick=javascriptEs6Btn()>Next</button>`;
        javascriptEs6RemoveValue.innerHTML = "";



    } else if (javascriptEs6RandomValue == 38 && javascriptEs6InputAnswer == javascriptEs6AnswerArr[38].A38) {
        javascriptEs6CorrectValue.innerHTML = "Correct..";
        javascriptEs6DisplayAnswer.innerHTML = `
        <textarea name="text" class="answer_textarea" id="input">Good Job :) </textarea>`;
        javascriptEs6NextButton.innerHTML = `<button class="nextButton javascriptEs6Color1" onclick=javascriptEs6Btn()>Next</button>`;
        javascriptEs6RemoveValue.innerHTML = "";

    } else if (javascriptEs6RandomValue == 38 && javascriptEs6InputAnswer !== javascriptEs6AnswerArr[38].A38) {
        javascriptEs6DisplayAnswer.innerHTML = `
    <textarea name="text" class="answer_textarea" id="input">
var myArray = [[1,2,3], [4,5,6], [7,8,9], [[10,11,12], 13, 14]];
var myData = myArray[2][1];
        </textarea>`;
        javascriptEs6IncorrectValue.innerHTML = "Incorrect..";
        javascriptEs6NextButton.innerHTML = `<button class="nextButton javascriptEs6Color1" onclick=javascriptEs6Btn()>Next</button>`;
        javascriptEs6RemoveValue.innerHTML = "";



    } else if (javascriptEs6RandomValue == 39 && javascriptEs6InputAnswer == javascriptEs6AnswerArr[39].A39) {
        javascriptEs6CorrectValue.innerHTML = "Correct..";
        javascriptEs6DisplayAnswer.innerHTML = `
        <textarea name="text" class="answer_textarea" id="input">Good Job :) </textarea>`;
        javascriptEs6NextButton.innerHTML = `<button class="nextButton javascriptEs6Color1" onclick=javascriptEs6Btn()>Next</button>`;
        javascriptEs6RemoveValue.innerHTML = "";

    } else if (javascriptEs6RandomValue == 39 && javascriptEs6InputAnswer !== javascriptEs6AnswerArr[39].A39) {
        javascriptEs6DisplayAnswer.innerHTML = `
    <textarea name="text" class="answer_textarea" id="input">
var myArray = [["John", 23], ["cat", 2]];
myArray.push(["dog", 3]);
        </textarea>`;
        javascriptEs6IncorrectValue.innerHTML = "Incorrect..";
        javascriptEs6NextButton.innerHTML = `<button class="nextButton javascriptEs6Color1" onclick=javascriptEs6Btn()>Next</button>`;
        javascriptEs6RemoveValue.innerHTML = "";



    } else if (javascriptEs6RandomValue == 40 && javascriptEs6InputAnswer == javascriptEs6AnswerArr[40].A40) {
        javascriptEs6CorrectValue.innerHTML = "Correct..";
        javascriptEs6DisplayAnswer.innerHTML = `
        <textarea name="text" class="answer_textarea" id="input">Good Job :) </textarea>`;
        javascriptEs6NextButton.innerHTML = `<button class="nextButton javascriptEs6Color1" onclick=javascriptEs6Btn()>Next</button>`;
        javascriptEs6RemoveValue.innerHTML = "";

    } else if (javascriptEs6RandomValue == 40 && javascriptEs6InputAnswer !== javascriptEs6AnswerArr[40].A40) {
        javascriptEs6DisplayAnswer.innerHTML = `
    <textarea name="text" class="answer_textarea" id="input">
var myArray = [["John", 23], ["cat", 2]];
var removedFromMyArray = myArray.pop();
        </textarea>`;
        javascriptEs6IncorrectValue.innerHTML = "Incorrect..";
        javascriptEs6NextButton.innerHTML = `<button class="nextButton javascriptEs6Color1" onclick=javascriptEs6Btn()>Next</button>`;
        javascriptEs6RemoveValue.innerHTML = "";



    } else if (javascriptEs6RandomValue == 41 && javascriptEs6InputAnswer == javascriptEs6AnswerArr[41].A41) {
        javascriptEs6CorrectValue.innerHTML = "Correct..";
        javascriptEs6DisplayAnswer.innerHTML = `
        <textarea name="text" class="answer_textarea" id="input">Good Job :) </textarea>`;
        javascriptEs6NextButton.innerHTML = `<button class="nextButton javascriptEs6Color1" onclick=javascriptEs6Btn()>Next</button>`;
        javascriptEs6RemoveValue.innerHTML = "";

    } else if (javascriptEs6RandomValue == 41 && javascriptEs6InputAnswer !== javascriptEs6AnswerArr[41].A41) {
        javascriptEs6DisplayAnswer.innerHTML = `

    <textarea name="text" class="answer_textarea" id="input">
ar myArray = [["John", 23], ["dog", 3]];
var removedFromMyArray = myArray.shift();
        </textarea>`;
        javascriptEs6IncorrectValue.innerHTML = "Incorrect..";
        javascriptEs6NextButton.innerHTML = `<button class="nextButton javascriptEs6Color1" onclick=javascriptEs6Btn()>Next</button>`;
        javascriptEs6RemoveValue.innerHTML = "";



    } else if (javascriptEs6RandomValue == 42 && javascriptEs6InputAnswer == javascriptEs6AnswerArr[42].A42) {
        javascriptEs6CorrectValue.innerHTML = "Correct..";
        javascriptEs6DisplayAnswer.innerHTML = `
        <textarea name="text" class="answer_textarea" id="input">Good Job :) </textarea>`;
        javascriptEs6NextButton.innerHTML = `<button class="nextButton javascriptEs6Color1" onclick=javascriptEs6Btn()>Next</button>`;
        javascriptEs6RemoveValue.innerHTML = "";

    } else if (javascriptEs6RandomValue == 42 && javascriptEs6InputAnswer !== javascriptEs6AnswerArr[42].A42) {
        javascriptEs6DisplayAnswer.innerHTML = `
    <textarea name="text" class="answer_textarea" id="input">
var myArray = [["John", 23], ["dog", 3]];
myArray.shift();
myArray.unshift( ["Paul",35]);
        </textarea>`;
        javascriptEs6IncorrectValue.innerHTML = "Incorrect..";
        javascriptEs6NextButton.innerHTML = `<button class="nextButton javascriptEs6Color1" onclick=javascriptEs6Btn()>Next</button>`;
        javascriptEs6RemoveValue.innerHTML = "";



    } else if (javascriptEs6RandomValue == 43 && javascriptEs6InputAnswer == javascriptEs6AnswerArr[43].A43) {
        javascriptEs6CorrectValue.innerHTML = "Correct..";
        javascriptEs6DisplayAnswer.innerHTML = `
        <textarea name="text" class="answer_textarea" id="input">Good Job :) </textarea>`;
        javascriptEs6NextButton.innerHTML = `<button class="nextButton javascriptEs6Color1" onclick=javascriptEs6Btn()>Next</button>`;
        javascriptEs6RemoveValue.innerHTML = "";

    } else if (javascriptEs6RandomValue == 43 && javascriptEs6InputAnswer !== javascriptEs6AnswerArr[43].A43) {
        javascriptEs6DisplayAnswer.innerHTML = `
    <textarea name="text" class="answer_textarea" id="input">
var myList = [["Canned Beans", 3],["Milk Galon", 1],["Cereal", 2],["Toilet Paper", 12],["Sack of Rice", 1]];
        </textarea>`;
        javascriptEs6IncorrectValue.innerHTML = "Incorrect..";
        javascriptEs6NextButton.innerHTML = `<button class="nextButton javascriptEs6Color1" onclick=javascriptEs6Btn()>Next</button>`;
        javascriptEs6RemoveValue.innerHTML = "";



    } else if (javascriptEs6RandomValue == 44 && javascriptEs6InputAnswer == javascriptEs6AnswerArr[44].A44) {
        javascriptEs6CorrectValue.innerHTML = "Correct..";
        javascriptEs6DisplayAnswer.innerHTML = `
        <textarea name="text" class="answer_textarea" id="input">Good Job :) </textarea>`;
        javascriptEs6NextButton.innerHTML = `<button class="nextButton javascriptEs6Color1" onclick=javascriptEs6Btn()>Next</button>`;
        javascriptEs6RemoveValue.innerHTML = "";

    } else if (javascriptEs6RandomValue == 44 && javascriptEs6InputAnswer !== javascriptEs6AnswerArr[44].A44) {
        javascriptEs6DisplayAnswer.innerHTML = `
    <textarea name="text" class="answer_textarea" id="input">
function reusableFunction() {
    console.log("Hi World");
}
    
reusableFunction();
          </textarea>`;
        javascriptEs6IncorrectValue.innerHTML = "Incorrect..";
        javascriptEs6NextButton.innerHTML = `<button class="nextButton javascriptEs6Color1" onclick=javascriptEs6Btn()>Next</button>`;
        javascriptEs6RemoveValue.innerHTML = "";



    } else if (javascriptEs6RandomValue == 45 && javascriptEs6InputAnswer == javascriptEs6AnswerArr[45].A45) {
        javascriptEs6CorrectValue.innerHTML = "Correct..";
        javascriptEs6DisplayAnswer.innerHTML = `
        <textarea name="text" class="answer_textarea" id="input">Good Job :) </textarea>`;
        javascriptEs6NextButton.innerHTML = `<button class="nextButton javascriptEs6Color1" onclick=javascriptEs6Btn()>Next</button>`;
        javascriptEs6RemoveValue.innerHTML = "";

    } else if (javascriptEs6RandomValue == 45 && javascriptEs6InputAnswer !== javascriptEs6AnswerArr[45].A45) {
        javascriptEs6DisplayAnswer.innerHTML = `
    <textarea name="text" class="answer_textarea" id="input">
function functionWithArgs(a, b) {
    console.log(a + b);
}
functionWithArgs(10, 5);
          </textarea>`;
        javascriptEs6IncorrectValue.innerHTML = "Incorrect..";
        javascriptEs6NextButton.innerHTML = `<button class="nextButton javascriptEs6Color1" onclick=javascriptEs6Btn()>Next</button>`;
        javascriptEs6RemoveValue.innerHTML = "";



    } else if (javascriptEs6RandomValue == 46 && javascriptEs6InputAnswer == javascriptEs6AnswerArr[46].A46) {
        javascriptEs6CorrectValue.innerHTML = "Correct..";
        javascriptEs6DisplayAnswer.innerHTML = `
        <textarea name="text" class="answer_textarea" id="input">Good Job :) </textarea>`;
        javascriptEs6NextButton.innerHTML = `<button class="nextButton javascriptEs6Color1" onclick=javascriptEs6Btn()>Next</button>`;
        javascriptEs6RemoveValue.innerHTML = "";

    } else if (javascriptEs6RandomValue == 46 && javascriptEs6InputAnswer !== javascriptEs6AnswerArr[46].A46) {
        javascriptEs6DisplayAnswer.innerHTML = `

    <textarea name="text" class="answer_textarea" id="input">
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
}
        </textarea>`;
        javascriptEs6IncorrectValue.innerHTML = "Incorrect..";
        javascriptEs6NextButton.innerHTML = `<button class="nextButton javascriptEs6Color1" onclick=javascriptEs6Btn()>Next</button>`;
        javascriptEs6RemoveValue.innerHTML = "";



    } else if (javascriptEs6RandomValue == 47 && javascriptEs6InputAnswer == javascriptEs6AnswerArr[47].A47) {
        javascriptEs6CorrectValue.innerHTML = "Correct..";
        javascriptEs6DisplayAnswer.innerHTML = `
        <textarea name="text" class="answer_textarea" id="input">Good Job :) </textarea>`;
        javascriptEs6NextButton.innerHTML = `<button class="nextButton javascriptEs6Color1" onclick=javascriptEs6Btn()>Next</button>`;
        javascriptEs6RemoveValue.innerHTML = "";

    }

    else if (javascriptEs6RandomValue == 47 && javascriptEs6InputAnswer !== javascriptEs6AnswerArr[47].A47) {
        javascriptEs6DisplayAnswer.innerHTML = `
    <textarea name="text" class="answer_textarea" id="input">
function myLocalScope() {
    var myVar;
    console.log(myVar);
}
myLocalScope();
          </textarea>`;
        javascriptEs6IncorrectValue.innerHTML = "Incorrect..";
        javascriptEs6NextButton.innerHTML = `<button class="nextButton javascriptEs6Color1" onclick=javascriptEs6Btn()>Next</button>`;
        javascriptEs6RemoveValue.innerHTML = "";



    } else if (javascriptEs6RandomValue == 48 && javascriptEs6InputAnswer == javascriptEs6AnswerArr[48].A48) {
        javascriptEs6CorrectValue.innerHTML = "Correct..";
        javascriptEs6DisplayAnswer.innerHTML = `
        <textarea name="text" class="answer_textarea" id="input">Good Job :) </textarea>`;
        javascriptEs6NextButton.innerHTML = `<button class="nextButton javascriptEs6Color1" onclick=javascriptEs6Btn()>Next</button>`;
        javascriptEs6RemoveValue.innerHTML = "";

    } else if (javascriptEs6RandomValue == 48 && javascriptEs6InputAnswer !== javascriptEs6AnswerArr[48].A48) {
        javascriptEs6DisplayAnswer.innerHTML = `
    <textarea name="text" class="answer_textarea" id="input">
var outerWear = "T-Shirt";
function myOutfit() {
    var outerWear = "sweater";
    return outerWear;
}
myOutfit();
        </textarea>`;
        javascriptEs6IncorrectValue.innerHTML = "Incorrect..";
        javascriptEs6NextButton.innerHTML = `<button class="nextButton javascriptEs6Color1" onclick=javascriptEs6Btn()>Next</button>`;
        javascriptEs6RemoveValue.innerHTML = "";



    } else if (javascriptEs6RandomValue == 49 && javascriptEs6InputAnswer == javascriptEs6AnswerArr[49].A49) {
        javascriptEs6CorrectValue.innerHTML = "Correct..";
        javascriptEs6DisplayAnswer.innerHTML = `
        <textarea name="text" class="answer_textarea" id="input">Good Job :) </textarea>`;
        javascriptEs6NextButton.innerHTML = `<button class="nextButton javascriptEs6Color1" onclick=javascriptEs6Btn()>Next</button>`;
        javascriptEs6RemoveValue.innerHTML = "";

    } else if (javascriptEs6RandomValue == 49 && javascriptEs6InputAnswer !== javascriptEs6AnswerArr[49].A49) {
        javascriptEs6DisplayAnswer.innerHTML = `
    <textarea name="text" class="answer_textarea" id="input">
function timesFive(num) {
    return num * 5;
}
          </textarea>`;
        javascriptEs6IncorrectValue.innerHTML = "Incorrect..";
        javascriptEs6NextButton.innerHTML = `<button class="nextButton javascriptEs6Color1" onclick=javascriptEs6Btn()>Next</button>`;
        javascriptEs6RemoveValue.innerHTML = "";



    } else if (javascriptEs6RandomValue == 50 && javascriptEs6InputAnswer == javascriptEs6AnswerArr[50].A50) {
        javascriptEs6CorrectValue.innerHTML = "Correct..";
        javascriptEs6DisplayAnswer.innerHTML = `
        <textarea name="text" class="answer_textarea" id="input">Good Job :) </textarea>`;
        javascriptEs6NextButton.innerHTML = `<button class="nextButton javascriptEs6Color1" onclick=javascriptEs6Btn()>Next</button>`;
        javascriptEs6RemoveValue.innerHTML = "";

    } else if (javascriptEs6RandomValue == 50 && javascriptEs6InputAnswer !== javascriptEs6AnswerArr[50].A50) {
        javascriptEs6DisplayAnswer.innerHTML = `
    <textarea name="text" class="answer_textarea" id="input">
function addFive() {
    sum += 5;
}
          </textarea>`;
        javascriptEs6IncorrectValue.innerHTML = "Incorrect..";
        javascriptEs6NextButton.innerHTML = `<button class="nextButton javascriptEs6Color1" onclick=javascriptEs6Btn()>Next</button>`;
        javascriptEs6RemoveValue.innerHTML = "";



    } else if (javascriptEs6RandomValue == 51 && javascriptEs6InputAnswer == javascriptEs6AnswerArr[51].A51) {
        javascriptEs6CorrectValue.innerHTML = "Correct..";
        javascriptEs6DisplayAnswer.innerHTML = `
        <textarea name="text" class="answer_textarea" id="input">Good Job :) </textarea>`;
        javascriptEs6NextButton.innerHTML = `<button class="nextButton javascriptEs6Color1" onclick=javascriptEs6Btn()>Next</button>`;
        javascriptEs6RemoveValue.innerHTML = "";

    } else if (javascriptEs6RandomValue == 51 && javascriptEs6InputAnswer !== javascriptEs6AnswerArr[51].A51) {
        javascriptEs6DisplayAnswer.innerHTML = `
    <textarea name="text" class="answer_textarea" id="input">
var processed = 0;

function processArg(num) {
    return (num + 3) / 5;
}
processed = processArg(7);
        </textarea>`;
        javascriptEs6IncorrectValue.innerHTML = "Incorrect..";
        javascriptEs6NextButton.innerHTML = `<button class="nextButton javascriptEs6Color1" onclick=javascriptEs6Btn()>Next</button>`;
        javascriptEs6RemoveValue.innerHTML = "";



    } else if (javascriptEs6RandomValue == 52 && javascriptEs6InputAnswer == javascriptEs6AnswerArr[52].A52) {
        javascriptEs6CorrectValue.innerHTML = "Correct..";
        javascriptEs6DisplayAnswer.innerHTML = `
        <textarea name="text" class="answer_textarea" id="input">Good Job :) </textarea>`;
        javascriptEs6NextButton.innerHTML = `<button class="nextButton javascriptEs6Color1" onclick=javascriptEs6Btn()>Next</button>`;
        javascriptEs6RemoveValue.innerHTML = "";

    } else if (javascriptEs6RandomValue == 52 && javascriptEs6InputAnswer !== javascriptEs6AnswerArr[52].A52) {
        javascriptEs6DisplayAnswer.innerHTML = `
    <textarea name="text" class="answer_textarea" id="input">
function nextInLine(arr, item) {
    arr.push(item);
    var removed = arr.shift();
    return removed;  
}
var testArr = [1,2,3,4,5];
    
console.log("Before: " + JSON.stringify(testArr));
console.log(nextInLine(testArr, 6));
console.log("After: " + JSON.stringify(testArr));
        </textarea>`;
        javascriptEs6IncorrectValue.innerHTML = "Incorrect..";
        javascriptEs6NextButton.innerHTML = `<button class="nextButton javascriptEs6Color1" onclick=javascriptEs6Btn()>Next</button>`;
        javascriptEs6RemoveValue.innerHTML = "";



    } else if (javascriptEs6RandomValue == 53 && javascriptEs6InputAnswer == javascriptEs6AnswerArr[53].A53) {
        javascriptEs6CorrectValue.innerHTML = "Correct..";
        javascriptEs6DisplayAnswer.innerHTML = `
        <textarea name="text" class="answer_textarea" id="input">Good Job :) </textarea>`;
        javascriptEs6NextButton.innerHTML = `<button class="nextButton javascriptEs6Color1" onclick=javascriptEs6Btn()>Next</button>`;
        javascriptEs6RemoveValue.innerHTML = "";

    } else if (javascriptEs6RandomValue == 53 && javascriptEs6InputAnswer !== javascriptEs6AnswerArr[53].A53) {
        javascriptEs6DisplayAnswer.innerHTML = `
    <textarea name="text" class="answer_textarea" id="input">
function welcomeToBooleans() {
    return true; 
}
        </textarea>`;
        javascriptEs6IncorrectValue.innerHTML = "Incorrect..";
        javascriptEs6NextButton.innerHTML = `<button class="nextButton javascriptEs6Color1" onclick=javascriptEs6Btn()>Next</button>`;
        javascriptEs6RemoveValue.innerHTML = "";



    } else if (javascriptEs6RandomValue == 54 && javascriptEs6InputAnswer == javascriptEs6AnswerArr[54].A54) {
        javascriptEs6CorrectValue.innerHTML = "Correct..";
        javascriptEs6DisplayAnswer.innerHTML = `
        <textarea name="text" class="answer_textarea" id="input">Good Job :) </textarea>`;
        javascriptEs6NextButton.innerHTML = `<button class="nextButton javascriptEs6Color1" onclick=javascriptEs6Btn()>Next</button>`;
        javascriptEs6RemoveValue.innerHTML = "";

    } else if (javascriptEs6RandomValue == 54 && javascriptEs6InputAnswer !== javascriptEs6AnswerArr[54].A54) {
        javascriptEs6DisplayAnswer.innerHTML = `
    <textarea name="text" class="answer_textarea" id="input">
function trueOrFalse(wasThatTrue) {
    if (wasThatTrue) {
        return "Yes, that was true";
    }
    return "No, that was false";
    
}
        </textarea>`;
        javascriptEs6IncorrectValue.innerHTML = "Incorrect..";
        javascriptEs6NextButton.innerHTML = `<button class="nextButton javascriptEs6Color1" onclick=javascriptEs6Btn()>Next</button>`;
        javascriptEs6RemoveValue.innerHTML = "";



    } else if (javascriptEs6RandomValue == 55 && javascriptEs6InputAnswer == javascriptEs6AnswerArr[55].A55) {
        javascriptEs6CorrectValue.innerHTML = "Correct..";
        javascriptEs6DisplayAnswer.innerHTML = `
        <textarea name="text" class="answer_textarea" id="input">Good Job :) </textarea>`;
        javascriptEs6NextButton.innerHTML = `<button class="nextButton javascriptEs6Color1" onclick=javascriptEs6Btn()>Next</button>`;
        javascriptEs6RemoveValue.innerHTML = "";

    } else if (javascriptEs6RandomValue == 55 && javascriptEs6InputAnswer !== javascriptEs6AnswerArr[55].A55) {
        javascriptEs6DisplayAnswer.innerHTML = `
    <textarea name="text" class="answer_textarea" id="input">
function testEqual(val) {
    if (val == 12) { 
        return "Equal";
    }
    return "Not Equal";
}
testEqual(10);
        </textarea>`;
        javascriptEs6IncorrectValue.innerHTML = "Incorrect..";
        javascriptEs6NextButton.innerHTML = `<button class="nextButton javascriptEs6Color1" onclick=javascriptEs6Btn()>Next</button>`;
        javascriptEs6RemoveValue.innerHTML = "";



    } else if (javascriptEs6RandomValue == 56 && javascriptEs6InputAnswer == javascriptEs6AnswerArr[56].A56) {
        javascriptEs6CorrectValue.innerHTML = "Correct..";
        javascriptEs6DisplayAnswer.innerHTML = `
        <textarea name="text" class="answer_textarea" id="input">Good Job :) </textarea>`;
        javascriptEs6NextButton.innerHTML = `<button class="nextButton javascriptEs6Color1" onclick=javascriptEs6Btn()>Next</button>`;
        javascriptEs6RemoveValue.innerHTML = "";

    } else if (javascriptEs6RandomValue == 56 && javascriptEs6InputAnswer !== javascriptEs6AnswerArr[56].A56) {
        javascriptEs6DisplayAnswer.innerHTML = `
    <textarea name="text" class="answer_textarea" id="input">
function testStrict(val) {
    if (val === 7) { 
        return "Equal";
    }
    return "Not Equal";
}
testStrict(10);
        </textarea>`;
        javascriptEs6IncorrectValue.innerHTML = "Incorrect..";
        javascriptEs6NextButton.innerHTML = `<button class="nextButton javascriptEs6Color1" onclick=javascriptEs6Btn()>Next</button>`;
        javascriptEs6RemoveValue.innerHTML = "";



    } else if (javascriptEs6RandomValue == 57 && javascriptEs6InputAnswer == javascriptEs6AnswerArr[57].A57) {
        javascriptEs6CorrectValue.innerHTML = "Correct..";
        javascriptEs6DisplayAnswer.innerHTML = `
        <textarea name="text" class="answer_textarea" id="input">Good Job :) </textarea>`;
        javascriptEs6NextButton.innerHTML = `<button class="nextButton javascriptEs6Color1" onclick=javascriptEs6Btn()>Next</button>`;
        javascriptEs6RemoveValue.innerHTML = "";

    } else if (javascriptEs6RandomValue == 57 && javascriptEs6InputAnswer !== javascriptEs6AnswerArr[57].A57) {
        javascriptEs6DisplayAnswer.innerHTML = `
    <textarea name="text" class="answer_textarea" id="input">
function compareEquality(a, b) {
    if (a === b) {
        return  "Equal";
    }
    return  "Not Equal";
}
compareEquality(10, "10");
        </textarea>`;
        javascriptEs6IncorrectValue.innerHTML = "Incorrect..";
        javascriptEs6NextButton.innerHTML = `<button class="nextButton javascriptEs6Color1" onclick=javascriptEs6Btn()>Next</button>`;
        javascriptEs6RemoveValue.innerHTML = "";



    } else if (javascriptEs6RandomValue == 58 && javascriptEs6InputAnswer == javascriptEs6AnswerArr[58].A58) {
        javascriptEs6CorrectValue.innerHTML = "Correct..";
        javascriptEs6DisplayAnswer.innerHTML = `
        <textarea name="text" class="answer_textarea" id="input">Good Job :) </textarea>`;
        javascriptEs6NextButton.innerHTML = `<button class="nextButton javascriptEs6Color1" onclick=javascriptEs6Btn()>Next</button>`;
        javascriptEs6RemoveValue.innerHTML = "";

    } else if (javascriptEs6RandomValue == 58 && javascriptEs6InputAnswer !== javascriptEs6AnswerArr[58].A58) {
        javascriptEs6DisplayAnswer.innerHTML = `
    <textarea name="text" class="answer_textarea" id="input">
function testNotEqual(val) {
    if (val != 99) 
        return "Not Equal";
        
    return "Equal";
}
          
        </textarea>`;
        javascriptEs6IncorrectValue.innerHTML = "Incorrect..";
        javascriptEs6NextButton.innerHTML = `<button class="nextButton javascriptEs6Color1" onclick=javascriptEs6Btn()>Next</button>`;
        javascriptEs6RemoveValue.innerHTML = "";



    } else if (javascriptEs6RandomValue == 59 && javascriptEs6InputAnswer == javascriptEs6AnswerArr[59].A59) {
        javascriptEs6CorrectValue.innerHTML = "Correct..";
        javascriptEs6DisplayAnswer.innerHTML = `
        <textarea name="text" class="answer_textarea" id="input">Good Job :) </textarea>`;
        javascriptEs6NextButton.innerHTML = `<button class="nextButton javascriptEs6Color1" onclick=javascriptEs6Btn()>Next</button>`;
        javascriptEs6RemoveValue.innerHTML = "";

    } else if (javascriptEs6RandomValue == 59 && javascriptEs6InputAnswer !== javascriptEs6AnswerArr[59].A59) {
        javascriptEs6DisplayAnswer.innerHTML = `
    <textarea name="text" class="answer_textarea" id="input">
function testStrictNotEqual(val) {
    if (val !== 17) {
        return "Not Equal";
    }
    return "Equal";
}
testStrictNotEqual(10);
        </textarea>`;
        javascriptEs6IncorrectValue.innerHTML = "Incorrect..";
        javascriptEs6NextButton.innerHTML = `<button class="nextButton javascriptEs6Color1" onclick=javascriptEs6Btn()>Next</button>`;
        javascriptEs6RemoveValue.innerHTML = "";



    } else if (javascriptEs6RandomValue == 60 && javascriptEs6InputAnswer == javascriptEs6AnswerArr[60].A60) {
        javascriptEs6CorrectValue.innerHTML = "Correct..";
        javascriptEs6DisplayAnswer.innerHTML = `
        <textarea name="text" class="answer_textarea" id="input">Good Job :) </textarea>`;
        javascriptEs6NextButton.innerHTML = `<button class="nextButton javascriptEs6Color1" onclick=javascriptEs6Btn()>Next</button>`;
        javascriptEs6RemoveValue.innerHTML = "";

    } else if (javascriptEs6RandomValue == 60 && javascriptEs6InputAnswer !== javascriptEs6AnswerArr[60].A60) {
        javascriptEs6DisplayAnswer.innerHTML = `
    <textarea name="text" class="answer_textarea" id="input">
function testGreaterThan(val) {
    if (val > 100) {
        return "Over 100";
    }
    if (val > 10) {
        return "Over 10";
    }
    return "10 or Under";
}
        </textarea>`;
        javascriptEs6IncorrectValue.innerHTML = "Incorrect..";
        javascriptEs6NextButton.innerHTML = `<button class="nextButton javascriptEs6Color1" onclick=javascriptEs6Btn()>Next</button>`;
        javascriptEs6RemoveValue.innerHTML = "";



    } else if (javascriptEs6RandomValue == 61 && javascriptEs6InputAnswer == javascriptEs6AnswerArr[61].A61) {
        javascriptEs6CorrectValue.innerHTML = "Correct..";
        javascriptEs6DisplayAnswer.innerHTML = `
        <textarea name="text" class="answer_textarea" id="input">Good Job :) </textarea>`;
        javascriptEs6NextButton.innerHTML = `<button class="nextButton javascriptEs6Color1" onclick=javascriptEs6Btn()>Next</button>`;
        javascriptEs6RemoveValue.innerHTML = "";

    } else if (javascriptEs6RandomValue == 61 && javascriptEs6InputAnswer !== javascriptEs6AnswerArr[61].A61) {
        javascriptEs6DisplayAnswer.innerHTML = `
    <textarea name="text" class="answer_textarea" id="input">
function testGreaterOrEqual(val) {
    if (val >= 20){
        return "20 or Over";
    }
    if (val >= 10){
        return "10 or Over";
    }
    return "Less than 10";
}
          </textarea>`;
        javascriptEs6IncorrectValue.innerHTML = "Incorrect..";
        javascriptEs6NextButton.innerHTML = `<button class="nextButton javascriptEs6Color1" onclick=javascriptEs6Btn()>Next</button>`;
        javascriptEs6RemoveValue.innerHTML = "";



    } else if (javascriptEs6RandomValue == 62 && javascriptEs6InputAnswer == javascriptEs6AnswerArr[62].A62) {
        javascriptEs6CorrectValue.innerHTML = "Correct..";
        javascriptEs6DisplayAnswer.innerHTML = `
        <textarea name="text" class="answer_textarea" id="input">Good Job :) </textarea>`;
        javascriptEs6NextButton.innerHTML = `<button class="nextButton javascriptEs6Color1" onclick=javascriptEs6Btn()>Next</button>`;
        javascriptEs6RemoveValue.innerHTML = "";

    } else if (javascriptEs6RandomValue == 62 && javascriptEs6InputAnswer !== javascriptEs6AnswerArr[62].A62) {
        javascriptEs6DisplayAnswer.innerHTML = `
    <textarea name="text" class="answer_textarea" id="input">
function testLessThan(val) {
    if (val < 25){
        return "Under 25";
    }
    if (val < 55){
        return "Under 55";
    }
    return "55 or Over";
}
          </textarea>`;
        javascriptEs6IncorrectValue.innerHTML = "Incorrect..";
        javascriptEs6NextButton.innerHTML = `<button class="nextButton javascriptEs6Color1" onclick=javascriptEs6Btn()>Next</button>`;
        javascriptEs6RemoveValue.innerHTML = "";



    } else if (javascriptEs6RandomValue == 63 && javascriptEs6InputAnswer == javascriptEs6AnswerArr[63].A63) {
        javascriptEs6CorrectValue.innerHTML = "Correct..";
        javascriptEs6DisplayAnswer.innerHTML = `
        <textarea name="text" class="answer_textarea" id="input">Good Job :) </textarea>`;
        javascriptEs6NextButton.innerHTML = `<button class="nextButton javascriptEs6Color1" onclick=javascriptEs6Btn()>Next</button>`;
        javascriptEs6RemoveValue.innerHTML = "";

    } else if (javascriptEs6RandomValue == 63 && javascriptEs6InputAnswer !== javascriptEs6AnswerArr[63].A63) {
        javascriptEs6DisplayAnswer.innerHTML = `
    <textarea name="text" class="answer_textarea" id="input">
function testLessOrEqual(val) {
    if (val <= 12){
        return "Smaller Than or Equal to 12";
    }
    if (val <= 24){
        return "Smaller Than or Equal to 24";
    }
    return "More Than 24";
}
          </textarea>`;
        javascriptEs6IncorrectValue.innerHTML = "Incorrect..";
        javascriptEs6NextButton.innerHTML = `<button class="nextButton javascriptEs6Color1" onclick=javascriptEs6Btn()>Next</button>`;
        javascriptEs6RemoveValue.innerHTML = "";



    } else if (javascriptEs6RandomValue == 64 && javascriptEs6InputAnswer == javascriptEs6AnswerArr[64].A64) {
        javascriptEs6CorrectValue.innerHTML = "Correct..";
        javascriptEs6DisplayAnswer.innerHTML = `
        <textarea name="text" class="answer_textarea" id="input">Good Job :) </textarea>`;
        javascriptEs6NextButton.innerHTML = `<button class="nextButton javascriptEs6Color1" onclick=javascriptEs6Btn()>Next</button>`;
        javascriptEs6RemoveValue.innerHTML = "";

    } else if (javascriptEs6RandomValue == 64 && javascriptEs6InputAnswer !== javascriptEs6AnswerArr[64].A64) {
        javascriptEs6DisplayAnswer.innerHTML = `
    <textarea name="text" class="answer_textarea" id="input">
function testLogicalAnd(val) {
    if (val <= 50 && val >= 25) {
        return "Yes";
    }
    return "No";
}
testLogicalAnd(10);
          </textarea>`;
        javascriptEs6IncorrectValue.innerHTML = "Incorrect..";
        javascriptEs6NextButton.innerHTML = `<button class="nextButton javascriptEs6Color1" onclick=javascriptEs6Btn()>Next</button>`;
        javascriptEs6RemoveValue.innerHTML = "";



    } else if (javascriptEs6RandomValue == 65 && javascriptEs6InputAnswer == javascriptEs6AnswerArr[65].A65) {
        javascriptEs6CorrectValue.innerHTML = "Correct..";
        javascriptEs6DisplayAnswer.innerHTML = `
        <textarea name="text" class="answer_textarea" id="input">Good Job :) </textarea>`;
        javascriptEs6NextButton.innerHTML = `<button class="nextButton javascriptEs6Color1" onclick=javascriptEs6Btn()>Next</button>`;
        javascriptEs6RemoveValue.innerHTML = "";

    } else if (javascriptEs6RandomValue == 65 && javascriptEs6InputAnswer !== javascriptEs6AnswerArr[65].A65) {
        javascriptEs6DisplayAnswer.innerHTML = `
    <textarea name="text" class="answer_textarea" id="input">
function testLogicalOr(val) {
    if ( val < 10 || val > 20 ) {
        return "Outside";
    }
        return "Inside";
}
testLogicalOr(15);
            </textarea>`;
        javascriptEs6IncorrectValue.innerHTML = "Incorrect..";
        javascriptEs6NextButton.innerHTML = `<button class="nextButton javascriptEs6Color1" onclick=javascriptEs6Btn()>Next</button>`;
        javascriptEs6RemoveValue.innerHTML = "";



    } else if (javascriptEs6RandomValue == 66 && javascriptEs6InputAnswer == javascriptEs6AnswerArr[66].A66) {
        javascriptEs6CorrectValue.innerHTML = "Correct..";
        javascriptEs6DisplayAnswer.innerHTML = `
        <textarea name="text" class="answer_textarea" id="input">Good Job :) </textarea>`;
        javascriptEs6NextButton.innerHTML = `<button class="nextButton javascriptEs6Color1" onclick=javascriptEs6Btn()>Next</button>`;
        javascriptEs6RemoveValue.innerHTML = "";

    } else if (javascriptEs6RandomValue == 66 && javascriptEs6InputAnswer !== javascriptEs6AnswerArr[66].A66) {
        javascriptEs6DisplayAnswer.innerHTML = `
    <textarea name="text" class="answer_textarea" id="input">
function testElse(val) {
    var result = "";
    if (val > 5) {
    return "Bigger than 5";
    
    } else {
    return "5 or Smaller";
    }
    return result;
}
testElse(4);
        </textarea>`;
        javascriptEs6IncorrectValue.innerHTML = "Incorrect..";
        javascriptEs6NextButton.innerHTML = `<button class="nextButton javascriptEs6Color1" onclick=javascriptEs6Btn()>Next</button>`;
        javascriptEs6RemoveValue.innerHTML = "";



    } else if (javascriptEs6RandomValue == 67 && javascriptEs6InputAnswer == javascriptEs6AnswerArr[67].A67) {
        javascriptEs6CorrectValue.innerHTML = "Correct..";
        javascriptEs6DisplayAnswer.innerHTML = `
        <textarea name="text" class="answer_textarea" id="input">Good Job :) </textarea>`;
        javascriptEs6NextButton.innerHTML = `<button class="nextButton javascriptEs6Color1" onclick=javascriptEs6Btn()>Next</button>`;
        javascriptEs6RemoveValue.innerHTML = "";

    } else if (javascriptEs6RandomValue == 67 && javascriptEs6InputAnswer !== javascriptEs6AnswerArr[67].A67) {
        javascriptEs6DisplayAnswer.innerHTML = `
    <textarea name="text" class="answer_textarea" id="input">
function testElseIf(val) {
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
testElseIf(7);
          </textarea>`;
        javascriptEs6IncorrectValue.innerHTML = "Incorrect..";
        javascriptEs6NextButton.innerHTML = `<button class="nextButton javascriptEs6Color1" onclick=javascriptEs6Btn()>Next</button>`;
        javascriptEs6RemoveValue.innerHTML = "";



    } else if (javascriptEs6RandomValue == 68 && javascriptEs6InputAnswer == javascriptEs6AnswerArr[68].A68) {
        javascriptEs6CorrectValue.innerHTML = "Correct..";
        javascriptEs6DisplayAnswer.innerHTML = `
        <textarea name="text" class="answer_textarea" id="input">Good Job :) </textarea>`;
        javascriptEs6NextButton.innerHTML = `<button class="nextButton javascriptEs6Color1" onclick=javascriptEs6Btn()>Next</button>`;
        javascriptEs6RemoveValue.innerHTML = "";

    } else if (javascriptEs6RandomValue == 68 && javascriptEs6InputAnswer !== javascriptEs6AnswerArr[68].A68) {
        javascriptEs6DisplayAnswer.innerHTML = `
    <textarea name="text" class="answer_textarea" id="input">
function orderMyLogic(val) {
    if (val < 5) {
    return "Less than 5";
    } else if (val < 10) {
    return "Less than 10";
    } else {
    return "Greater than or equal to 10";
    }
}
            </textarea>`;
        javascriptEs6IncorrectValue.innerHTML = "Incorrect..";
        javascriptEs6NextButton.innerHTML = `<button class="nextButton javascriptEs6Color1" onclick=javascriptEs6Btn()>Next</button>`;
        javascriptEs6RemoveValue.innerHTML = "";



    } else if (javascriptEs6RandomValue == 69 && javascriptEs6InputAnswer == javascriptEs6AnswerArr[69].A69) {
        javascriptEs6CorrectValue.innerHTML = "Correct..";
        javascriptEs6DisplayAnswer.innerHTML = `
        <textarea name="text" class="answer_textarea" id="input">Good Job :) </textarea>`;
        javascriptEs6NextButton.innerHTML = `<button class="nextButton javascriptEs6Color1" onclick=javascriptEs6Btn()>Next</button>`;
        javascriptEs6RemoveValue.innerHTML = "";

    } else if (javascriptEs6RandomValue == 69 && javascriptEs6InputAnswer !== javascriptEs6AnswerArr[69].A69) {
        javascriptEs6DisplayAnswer.innerHTML = `
    <textarea name="text" class="answer_textarea" id="input">
function testSize(num) {
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
testSize(7);
          </textarea>`;
        javascriptEs6IncorrectValue.innerHTML = "Incorrect..";
        javascriptEs6NextButton.innerHTML = `<button class="nextButton javascriptEs6Color1" onclick=javascriptEs6Btn()>Next</button>`;
        javascriptEs6RemoveValue.innerHTML = "";



    } else if (javascriptEs6RandomValue == 70 && javascriptEs6InputAnswer == javascriptEs6AnswerArr[70].A70) {
        javascriptEs6CorrectValue.innerHTML = "Correct..";
        javascriptEs6DisplayAnswer.innerHTML = `
        <textarea name="text" class="answer_textarea" id="input">Good Job :) </textarea>`;
        javascriptEs6NextButton.innerHTML = `<button class="nextButton javascriptEs6Color1" onclick=javascriptEs6Btn()>Next</button>`;
        javascriptEs6RemoveValue.innerHTML = "";

    } else if (javascriptEs6RandomValue == 70 && javascriptEs6InputAnswer !== javascriptEs6AnswerArr[70].A70) {
        javascriptEs6DisplayAnswer.innerHTML = `
    <textarea name="text" class="answer_textarea" id="input">
function golfScore(par, strokes) {
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
golfScore(5, 4);
          </textarea>`;
        javascriptEs6IncorrectValue.innerHTML = "Incorrect..";
        javascriptEs6NextButton.innerHTML = `<button class="nextButton javascriptEs6Color1" onclick=javascriptEs6Btn()>Next</button>`;
        javascriptEs6RemoveValue.innerHTML = "";



    } else if (javascriptEs6RandomValue == 71 && javascriptEs6InputAnswer == javascriptEs6AnswerArr[71].A71) {
        javascriptEs6CorrectValue.innerHTML = "Correct..";
        javascriptEs6DisplayAnswer.innerHTML = `
        <textarea name="text" class="answer_textarea" id="input">Good Job :) </textarea>`;
        javascriptEs6NextButton.innerHTML = `<button class="nextButton javascriptEs6Color1" onclick=javascriptEs6Btn()>Next</button>`;
        javascriptEs6RemoveValue.innerHTML = "";

    } else if (javascriptEs6RandomValue == 71 && javascriptEs6InputAnswer !== javascriptEs6AnswerArr[71].A71) {
        javascriptEs6DisplayAnswer.innerHTML = `
    <textarea name="text" class="answer_textarea" id="input">
function caseInSwitch(val) {
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
caseInSwitch(1);
          </textarea>`;
        javascriptEs6IncorrectValue.innerHTML = "Incorrect..";
        javascriptEs6NextButton.innerHTML = `<button class="nextButton javascriptEs6Color1" onclick=javascriptEs6Btn()>Next</button>`;
        javascriptEs6RemoveValue.innerHTML = "";



    } else if (javascriptEs6RandomValue == 72 && javascriptEs6InputAnswer == javascriptEs6AnswerArr[72].A72) {
        javascriptEs6CorrectValue.innerHTML = "Correct..";
        javascriptEs6DisplayAnswer.innerHTML = `
        <textarea name="text" class="answer_textarea" id="input">Good Job :) </textarea>`;
        javascriptEs6NextButton.innerHTML = `<button class="nextButton javascriptEs6Color1" onclick=javascriptEs6Btn()>Next</button>`;
        javascriptEs6RemoveValue.innerHTML = "";

    } else if (javascriptEs6RandomValue == 72 && javascriptEs6InputAnswer !== javascriptEs6AnswerArr[72].A72) {
        javascriptEs6DisplayAnswer.innerHTML = `
    <textarea name="text" class="answer_textarea" id="input">
function switchOfStuff(val) {
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
          </textarea>`;
        javascriptEs6IncorrectValue.innerHTML = "Incorrect..";
        javascriptEs6NextButton.innerHTML = `<button class="nextButton javascriptEs6Color1" onclick=javascriptEs6Btn()>Next</button>`;
        javascriptEs6RemoveValue.innerHTML = "";



    } else if (javascriptEs6RandomValue == 73 && javascriptEs6InputAnswer == javascriptEs6AnswerArr[73].A73) {
        javascriptEs6CorrectValue.innerHTML = "Correct..";
        javascriptEs6DisplayAnswer.innerHTML = `
        <textarea name="text" class="answer_textarea" id="input">Good Job :) </textarea>`;
        javascriptEs6NextButton.innerHTML = `<button class="nextButton javascriptEs6Color1" onclick=javascriptEs6Btn()>Next</button>`;
        javascriptEs6RemoveValue.innerHTML = "";

    } else if (javascriptEs6RandomValue == 73 && javascriptEs6InputAnswer !== javascriptEs6AnswerArr[73].A73) {
        javascriptEs6DisplayAnswer.innerHTML = `
    <textarea name="text" class="answer_textarea" id="input">
function sequentialSizes(val) {
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
sequentialSizes(1);
          </textarea>`;
        javascriptEs6IncorrectValue.innerHTML = "Incorrect..";
        javascriptEs6NextButton.innerHTML = `<button class="nextButton javascriptEs6Color1" onclick=javascriptEs6Btn()>Next</button>`;
        javascriptEs6RemoveValue.innerHTML = "";



    } else if (javascriptEs6RandomValue == 74 && javascriptEs6InputAnswer == javascriptEs6AnswerArr[74].A74) {
        javascriptEs6CorrectValue.innerHTML = "Correct..";
        javascriptEs6DisplayAnswer.innerHTML = `
        <textarea name="text" class="answer_textarea" id="input">Good Job :) </textarea>`;
        javascriptEs6NextButton.innerHTML = `<button class="nextButton javascriptEs6Color1" onclick=javascriptEs6Btn()>Next</button>`;
        javascriptEs6RemoveValue.innerHTML = "";

    } else if (javascriptEs6RandomValue == 74 && javascriptEs6InputAnswer !== javascriptEs6AnswerArr[74].A74) {
        javascriptEs6DisplayAnswer.innerHTML = `
    <textarea name="text" class="answer_textarea" id="input">
function chainToSwitch(val) {
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
chainToSwitch(7);
          </textarea>`;
        javascriptEs6IncorrectValue.innerHTML = "Incorrect..";
        javascriptEs6NextButton.innerHTML = `<button class="nextButton javascriptEs6Color1" onclick=javascriptEs6Btn()>Next</button>`;
        javascriptEs6RemoveValue.innerHTML = "";



    } else if (javascriptEs6RandomValue == 75 && javascriptEs6InputAnswer == javascriptEs6AnswerArr[75].A75) {
        javascriptEs6CorrectValue.innerHTML = "Correct..";
        javascriptEs6DisplayAnswer.innerHTML = `
        <textarea name="text" class="answer_textarea" id="input">Good Job :) </textarea>`;
        javascriptEs6NextButton.innerHTML = `<button class="nextButton javascriptEs6Color1" onclick=javascriptEs6Btn()>Next</button>`;
        javascriptEs6RemoveValue.innerHTML = "";

    } else if (javascriptEs6RandomValue == 75 && javascriptEs6InputAnswer !== javascriptEs6AnswerArr[75].A75) {
        javascriptEs6DisplayAnswer.innerHTML = `
    <textarea name="text" class="answer_textarea" id="input">
function isLess(a, b) {
    return a <= b;
}
isLess(10, 15);
          </textarea>`;
        javascriptEs6IncorrectValue.innerHTML = "Incorrect..";
        javascriptEs6NextButton.innerHTML = `<button class="nextButton javascriptEs6Color1" onclick=javascriptEs6Btn()>Next</button>`;
        javascriptEs6RemoveValue.innerHTML = "";



    } else if (javascriptEs6RandomValue == 76 && javascriptEs6InputAnswer == javascriptEs6AnswerArr[76].A76) {
        javascriptEs6CorrectValue.innerHTML = "Correct..";
        javascriptEs6DisplayAnswer.innerHTML = `
        <textarea name="text" class="answer_textarea" id="input">Good Job :) </textarea>`;
        javascriptEs6NextButton.innerHTML = `<button class="nextButton javascriptEs6Color1" onclick=javascriptEs6Btn()>Next</button>`;
        javascriptEs6RemoveValue.innerHTML = "";

    } else if (javascriptEs6RandomValue == 76 && javascriptEs6InputAnswer !== javascriptEs6AnswerArr[76].A76) {
        javascriptEs6DisplayAnswer.innerHTML = `
    <textarea name="text" class="answer_textarea" id="input">
function abTest(a, b) {
    if (a < 0 || b < 0) return undefined;
    
    return Math.round(Math.pow(Math.sqrt(a) + Math.sqrt(b), 2));
}
abTest(2,2);
          </textarea>`;
        javascriptEs6IncorrectValue.innerHTML = "Incorrect..";
        javascriptEs6NextButton.innerHTML = `<button class="nextButton javascriptEs6Color1" onclick=javascriptEs6Btn()>Next</button>`;
        javascriptEs6RemoveValue.innerHTML = "";



    } else if (javascriptEs6RandomValue == 77 && javascriptEs6InputAnswer == javascriptEs6AnswerArr[77].A77) {
        javascriptEs6CorrectValue.innerHTML = "Correct..";
        javascriptEs6DisplayAnswer.innerHTML = `
        <textarea name="text" class="answer_textarea" id="input">Good Job :) </textarea>`;
        javascriptEs6NextButton.innerHTML = `<button class="nextButton javascriptEs6Color1" onclick=javascriptEs6Btn()>Next</button>`;
        javascriptEs6RemoveValue.innerHTML = "";

    } else if (javascriptEs6RandomValue == 77 && javascriptEs6InputAnswer !== javascriptEs6AnswerArr[77].A77) {
        javascriptEs6DisplayAnswer.innerHTML = `
    <textarea name="text" class="answer_textarea" id="input">
var count = 0;

function cc(card) {
    var regex = /[JQKA]/;
    if (card > 1 && card < 7){count++;}
    else if (card === 10 || String(card).match(regex)){count--;}
    
    if (count > 0) return count + " Bet";
    return count + " Hold";
    
}
cc(2); cc(3); cc(7); cc('K'); cc('A');
        </textarea>`;
        javascriptEs6IncorrectValue.innerHTML = "Incorrect..";
        javascriptEs6NextButton.innerHTML = `<button class="nextButton javascriptEs6Color1" onclick=javascriptEs6Btn()>Next</button>`;
        javascriptEs6RemoveValue.innerHTML = "";



    } else if (javascriptEs6RandomValue == 78 && javascriptEs6InputAnswer == javascriptEs6AnswerArr[78].A78) {
        javascriptEs6CorrectValue.innerHTML = "Correct..";
        javascriptEs6DisplayAnswer.innerHTML = `
        <textarea name="text" class="answer_textarea" id="input">Good Job :) </textarea>`;
        javascriptEs6NextButton.innerHTML = `<button class="nextButton javascriptEs6Color1" onclick=javascriptEs6Btn()>Next</button>`;
        javascriptEs6RemoveValue.innerHTML = "";

    } else if (javascriptEs6RandomValue == 78 && javascriptEs6InputAnswer !== javascriptEs6AnswerArr[78].A78) {
        javascriptEs6DisplayAnswer.innerHTML = `
    <textarea name="text" class="answer_textarea" id="input">
var myDog = {
    "name": "Camper",
    "legs": 4,
    "tails": 1,
    "friends": ["everything!"]
};
        </textarea>`;
        javascriptEs6IncorrectValue.innerHTML = "Incorrect..";
        javascriptEs6NextButton.innerHTML = `<button class="nextButton javascriptEs6Color1" onclick=javascriptEs6Btn()>Next</button>`;
        javascriptEs6RemoveValue.innerHTML = "";



    } else if (javascriptEs6RandomValue == 79 && javascriptEs6InputAnswer == javascriptEs6AnswerArr[79].A79) {
        javascriptEs6CorrectValue.innerHTML = "Correct..";
        javascriptEs6DisplayAnswer.innerHTML = `
        <textarea name="text" class="answer_textarea" id="input">Good Job :) </textarea>`;
        javascriptEs6NextButton.innerHTML = `<button class="nextButton javascriptEs6Color1" onclick=javascriptEs6Btn()>Next</button>`;
        javascriptEs6RemoveValue.innerHTML = "";

    } else if (javascriptEs6RandomValue == 79 && javascriptEs6InputAnswer !== javascriptEs6AnswerArr[79].A79) {
        javascriptEs6DisplayAnswer.innerHTML = `
    <textarea name="text" class="answer_textarea" id="input">
var testObj = {
    "hat": "ballcap",
    "shirt": "jersey",
    "shoes": "cleats"
};
var hatValue = testObj.hat;  
var shirtValue = testObj.shirt;
          </textarea>`;
        javascriptEs6IncorrectValue.innerHTML = "Incorrect..";
        javascriptEs6NextButton.innerHTML = `<button class="nextButton javascriptEs6Color1" onclick=javascriptEs6Btn()>Next</button>`;
        javascriptEs6RemoveValue.innerHTML = "";



    } else if (javascriptEs6RandomValue == 80 && javascriptEs6InputAnswer == javascriptEs6AnswerArr[80].A80) {
        javascriptEs6CorrectValue.innerHTML = "Correct..";
        javascriptEs6DisplayAnswer.innerHTML = `
        <textarea name="text" class="answer_textarea" id="input">Good Job :) </textarea>`;
        javascriptEs6NextButton.innerHTML = `<button class="nextButton javascriptEs6Color1" onclick=javascriptEs6Btn()>Next</button>`;
        javascriptEs6RemoveValue.innerHTML = "";

    } else if (javascriptEs6RandomValue == 80 && javascriptEs6InputAnswer !== javascriptEs6AnswerArr[80].A80) {
        javascriptEs6DisplayAnswer.innerHTML = `
    <textarea name="text" class="answer_textarea" id="input">
var testObj = {
    "an entree": "hamburger",
    "my side": "veggies",
    "the drink": "water"
};
var entreeValue = testObj["an entree"];  
var drinkValue = testObj["the drink"];
          </textarea>`;
        javascriptEs6IncorrectValue.innerHTML = "Incorrect..";
        javascriptEs6NextButton.innerHTML = `<button class="nextButton javascriptEs6Color1" onclick=javascriptEs6Btn()>Next</button>`;
        javascriptEs6RemoveValue.innerHTML = "";



    } else if (javascriptEs6RandomValue == 81 && javascriptEs6InputAnswer == javascriptEs6AnswerArr[81].A81) {
        javascriptEs6CorrectValue.innerHTML = "Correct..";
        javascriptEs6DisplayAnswer.innerHTML = `
        <textarea name="text" class="answer_textarea" id="input">Good Job :) </textarea>`;
        javascriptEs6NextButton.innerHTML = `<button class="nextButton javascriptEs6Color1" onclick=javascriptEs6Btn()>Next</button>`;
        javascriptEs6RemoveValue.innerHTML = "";

    } else if (javascriptEs6RandomValue == 81 && javascriptEs6InputAnswer !== javascriptEs6AnswerArr[81].A81) {
        javascriptEs6DisplayAnswer.innerHTML = `
    <textarea name="text" class="answer_textarea" id="input">
var testObj = {
    12: "Namath",
    16: "Montana",
    19: "Unitas"
};
var playerNumber = 16; 
var player = testObj[playerNumber];
          </textarea>`;
        javascriptEs6IncorrectValue.innerHTML = "Incorrect..";
        javascriptEs6NextButton.innerHTML = `<button class="nextButton javascriptEs6Color1" onclick=javascriptEs6Btn()>Next</button>`;
        javascriptEs6RemoveValue.innerHTML = "";



    } else if (javascriptEs6RandomValue == 82 && javascriptEs6InputAnswer == javascriptEs6AnswerArr[82].A82) {
        javascriptEs6CorrectValue.innerHTML = "Correct..";
        javascriptEs6DisplayAnswer.innerHTML = `
        <textarea name="text" class="answer_textarea" id="input">Good Job :) </textarea>`;
        javascriptEs6NextButton.innerHTML = `<button class="nextButton javascriptEs6Color1" onclick=javascriptEs6Btn()>Next</button>`;
        javascriptEs6RemoveValue.innerHTML = "";

    } else if (javascriptEs6RandomValue == 82 && javascriptEs6InputAnswer !== javascriptEs6AnswerArr[82].A82) {
        javascriptEs6DisplayAnswer.innerHTML = `
    <textarea name="text" class="answer_textarea" id="input">
var myDog = {
    "name": "Coder",
    "legs": 4,
    "tails": 1,
    "friends": ["freeCodeCamp Campers"]
};
myDog.name = "Happy Coder";
          </textarea>`;
        javascriptEs6IncorrectValue.innerHTML = "Incorrect..";
        javascriptEs6NextButton.innerHTML = `<button class="nextButton javascriptEs6Color1" onclick=javascriptEs6Btn()>Next</button>`;
        javascriptEs6RemoveValue.innerHTML = "";



    } else if (javascriptEs6RandomValue == 83 && javascriptEs6InputAnswer == javascriptEs6AnswerArr[83].A83) {
        javascriptEs6CorrectValue.innerHTML = "Correct..";
        javascriptEs6DisplayAnswer.innerHTML = `
        <textarea name="text" class="answer_textarea" id="input">Good Job :) </textarea>`;
        javascriptEs6NextButton.innerHTML = `<button class="nextButton javascriptEs6Color1" onclick=javascriptEs6Btn()>Next</button>`;
        javascriptEs6RemoveValue.innerHTML = "";

    } else if (javascriptEs6RandomValue == 83 && javascriptEs6InputAnswer !== javascriptEs6AnswerArr[83].A83) {
        javascriptEs6DisplayAnswer.innerHTML = `
    <textarea name="text" class="answer_textarea" id="input">
var myDog = {
    "name": "Happy Coder",
    "legs": 4,
    "tails": 1,
    "friends": ["freeCodeCamp Campers"]
};
myDog.bark = "woof";
          </textarea>`;
        javascriptEs6IncorrectValue.innerHTML = "Incorrect..";
        javascriptEs6NextButton.innerHTML = `<button class="nextButton javascriptEs6Color1" onclick=javascriptEs6Btn()>Next</button>`;
        javascriptEs6RemoveValue.innerHTML = "";



    } else if (javascriptEs6RandomValue == 84 && javascriptEs6InputAnswer == javascriptEs6AnswerArr[84].A84) {
        javascriptEs6CorrectValue.innerHTML = "Correct..";
        javascriptEs6DisplayAnswer.innerHTML = `
        <textarea name="text" class="answer_textarea" id="input">Good Job :) </textarea>`;
        javascriptEs6NextButton.innerHTML = `<button class="nextButton javascriptEs6Color1" onclick=javascriptEs6Btn()>Next</button>`;
        javascriptEs6RemoveValue.innerHTML = "";

    } else if (javascriptEs6RandomValue == 84 && javascriptEs6InputAnswer !== javascriptEs6AnswerArr[84].A84) {
        javascriptEs6DisplayAnswer.innerHTML = `
    <textarea name="text" class="answer_textarea" id="input">
var myDog = {
    "name": "Happy Coder",
    "legs": 4,
    "tails": 1,
    "friends": ["freeCodeCamp Campers"],
    "bark": "woof"
};
delete myDog.tails;
          </textarea>`;
        javascriptEs6IncorrectValue.innerHTML = "Incorrect..";
        javascriptEs6NextButton.innerHTML = `<button class="nextButton javascriptEs6Color1" onclick=javascriptEs6Btn()>Next</button>`;
        javascriptEs6RemoveValue.innerHTML = "";



    } else if (javascriptEs6RandomValue == 85 && javascriptEs6InputAnswer == javascriptEs6AnswerArr[85].A85) {
        javascriptEs6CorrectValue.innerHTML = "Correct..";
        javascriptEs6DisplayAnswer.innerHTML = `
        <textarea name="text" class="answer_textarea" id="input">Good Job :) </textarea>`;
        javascriptEs6NextButton.innerHTML = `<button class="nextButton javascriptEs6Color1" onclick=javascriptEs6Btn()>Next</button>`;
        javascriptEs6RemoveValue.innerHTML = "";

    } else if (javascriptEs6RandomValue == 85 && javascriptEs6InputAnswer !== javascriptEs6AnswerArr[85].A85) {
        javascriptEs6DisplayAnswer.innerHTML = `
    <textarea name="text" class="answer_textarea" id="input">
function phoneticLookup(val) {
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
    
phoneticLookup("charlie");
            </textarea>`;
        javascriptEs6IncorrectValue.innerHTML = "Incorrect..";
        javascriptEs6NextButton.innerHTML = `<button class="nextButton javascriptEs6Color1" onclick=javascriptEs6Btn()>Next</button>`;
        javascriptEs6RemoveValue.innerHTML = "";



    } else if (javascriptEs6RandomValue == 86 && javascriptEs6InputAnswer == javascriptEs6AnswerArr[86].A86) {
        javascriptEs6CorrectValue.innerHTML = "Correct..";
        javascriptEs6DisplayAnswer.innerHTML = `
        <textarea name="text" class="answer_textarea" id="input">Good Job :) </textarea>`;
        javascriptEs6NextButton.innerHTML = `<button class="nextButton javascriptEs6Color1" onclick=javascriptEs6Btn()>Next</button>`;
        javascriptEs6RemoveValue.innerHTML = "";

    } else if (javascriptEs6RandomValue == 86 && javascriptEs6InputAnswer !== javascriptEs6AnswerArr[86].A86) {
        javascriptEs6DisplayAnswer.innerHTML = `
    <textarea name="text" class="answer_textarea" id="input">
var myObj = {
    gift: "pony",
    pet: "kitten",
    bed: "sleigh"
};
function checkObj(checkProp) {
    if (myObj.hasOwnProperty(checkProp) === true) {
    return myObj[checkProp];
    } else {
    return "Not Found";
    }
}
checkObj("gift");
        </textarea>`;
        javascriptEs6IncorrectValue.innerHTML = "Incorrect..";
        javascriptEs6NextButton.innerHTML = `<button class="nextButton javascriptEs6Color1" onclick=javascriptEs6Btn()>Next</button>`;
        javascriptEs6RemoveValue.innerHTML = "";



    } else if (javascriptEs6RandomValue == 87 && javascriptEs6InputAnswer == javascriptEs6AnswerArr[87].A87) {
        javascriptEs6CorrectValue.innerHTML = "Correct..";
        javascriptEs6DisplayAnswer.innerHTML = `
        <textarea name="text" class="answer_textarea" id="input">Good Job :) </textarea>`;
        javascriptEs6NextButton.innerHTML = `<button class="nextButton javascriptEs6Color1" onclick=javascriptEs6Btn()>Next</button>`;
        javascriptEs6RemoveValue.innerHTML = "";

    } else if (javascriptEs6RandomValue == 87 && javascriptEs6InputAnswer !== javascriptEs6AnswerArr[87].A87) {
        javascriptEs6DisplayAnswer.innerHTML = `
    <textarea name="text" class="answer_textarea" id="input">
var myMusic = [
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
];
           </textarea>`;
        javascriptEs6IncorrectValue.innerHTML = "Incorrect..";
        javascriptEs6NextButton.innerHTML = `<button class="nextButton javascriptEs6Color1" onclick=javascriptEs6Btn()>Next</button>`;
        javascriptEs6RemoveValue.innerHTML = "";



    } else if (javascriptEs6RandomValue == 88 && javascriptEs6InputAnswer == javascriptEs6AnswerArr[88].A88) {
        javascriptEs6CorrectValue.innerHTML = "Correct..";
        javascriptEs6DisplayAnswer.innerHTML = `
        <textarea name="text" class="answer_textarea" id="input">Good Job :) </textarea>`;
        javascriptEs6NextButton.innerHTML = `<button class="nextButton javascriptEs6Color1" onclick=javascriptEs6Btn()>Next</button>`;
        javascriptEs6RemoveValue.innerHTML = "";

    } else if (javascriptEs6RandomValue == 88 && javascriptEs6InputAnswer !== javascriptEs6AnswerArr[88].A88) {
        javascriptEs6DisplayAnswer.innerHTML = `
    <textarea name="text" class="answer_textarea" id="input">
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
          </textarea>`;
        javascriptEs6IncorrectValue.innerHTML = "Incorrect..";
        javascriptEs6NextButton.innerHTML = `<button class="nextButton javascriptEs6Color1" onclick=javascriptEs6Btn()>Next</button>`;
        javascriptEs6RemoveValue.innerHTML = "";



    } else if (javascriptEs6RandomValue == 89 && javascriptEs6InputAnswer == javascriptEs6AnswerArr[89].A89) {
        javascriptEs6CorrectValue.innerHTML = "Correct..";
        javascriptEs6DisplayAnswer.innerHTML = `
        <textarea name="text" class="answer_textarea" id="input">Good Job :) </textarea>`;
        javascriptEs6NextButton.innerHTML = `<button class="nextButton javascriptEs6Color1" onclick=javascriptEs6Btn()>Next</button>`;
        javascriptEs6RemoveValue.innerHTML = "";

    } else if (javascriptEs6RandomValue == 89 && javascriptEs6InputAnswer !== javascriptEs6AnswerArr[89].A89) {
        javascriptEs6DisplayAnswer.innerHTML = `
    <textarea name="text" class="answer_textarea" id="input">
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
    
var secondTree = myPlants[1].list[1];
          </textarea>`;
        javascriptEs6IncorrectValue.innerHTML = "Incorrect..";
        javascriptEs6NextButton.innerHTML = `<button class="nextButton javascriptEs6Color1" onclick=javascriptEs6Btn()>Next</button>`;
        javascriptEs6RemoveValue.innerHTML = "";



    } else if (javascriptEs6RandomValue == 90 && javascriptEs6InputAnswer == javascriptEs6AnswerArr[90].A90) {
        javascriptEs6CorrectValue.innerHTML = "Correct..";
        javascriptEs6DisplayAnswer.innerHTML = `
        <textarea name="text" class="answer_textarea" id="input">Good Job :) </textarea>`;
        javascriptEs6NextButton.innerHTML = `<button class="nextButton javascriptEs6Color1" onclick=javascriptEs6Btn()>Next</button>`;
        javascriptEs6RemoveValue.innerHTML = "";

    } else if (javascriptEs6RandomValue == 90 && javascriptEs6InputAnswer !== javascriptEs6AnswerArr[90].A90) {
        javascriptEs6DisplayAnswer.innerHTML = `
    <textarea name="text" class="answer_textarea" id="input">
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
        </textarea>`;
        javascriptEs6IncorrectValue.innerHTML = "Incorrect..";
        javascriptEs6NextButton.innerHTML = `<button class="nextButton javascriptEs6Color1" onclick=javascriptEs6Btn()>Next</button>`;
        javascriptEs6RemoveValue.innerHTML = "";



    } else if (javascriptEs6RandomValue == 91 && javascriptEs6InputAnswer == javascriptEs6AnswerArr[91].A91) {
        javascriptEs6CorrectValue.innerHTML = "Correct..";
        javascriptEs6DisplayAnswer.innerHTML = `
        <textarea name="text" class="answer_textarea" id="input">Good Job :) </textarea>`;
        javascriptEs6NextButton.innerHTML = `<button class="nextButton javascriptEs6Color1" onclick=javascriptEs6Btn()>Next</button>`;
        javascriptEs6RemoveValue.innerHTML = "";

    } else if (javascriptEs6RandomValue == 91 && javascriptEs6InputAnswer !== javascriptEs6AnswerArr[91].A91) {
        javascriptEs6DisplayAnswer.innerHTML = `
    <textarea name="text" class="answer_textarea" id="input">
var myArray = [];
var i = 0;
while (i <= 4){
    myArray.push(i);
    i++;
}
        </textarea>`;
        javascriptEs6IncorrectValue.innerHTML = "Incorrect..";
        javascriptEs6NextButton.innerHTML = `<button class="nextButton javascriptEs6Color1" onclick=javascriptEs6Btn()>Next</button>`;
        javascriptEs6RemoveValue.innerHTML = "";



    } else if (javascriptEs6RandomValue == 92 && javascriptEs6InputAnswer == javascriptEs6AnswerArr[92].A92) {
        javascriptEs6CorrectValue.innerHTML = "Correct..";
        javascriptEs6DisplayAnswer.innerHTML = `
        <textarea name="text" class="answer_textarea" id="input">Good Job :) </textarea>`;
        javascriptEs6NextButton.innerHTML = `<button class="nextButton javascriptEs6Color1" onclick=javascriptEs6Btn()>Next</button>`;
        javascriptEs6RemoveValue.innerHTML = "";

    } else if (javascriptEs6RandomValue == 92 && javascriptEs6InputAnswer !== javascriptEs6AnswerArr[92].A92) {
        javascriptEs6DisplayAnswer.innerHTML = `
    <textarea name="text" class="answer_textarea" id="input">
var myArray = [];
for(var i=1; i<=5; i++){
myArray.push(i);
}
        </textarea>`;
        javascriptEs6IncorrectValue.innerHTML = "Incorrect..";
        javascriptEs6NextButton.innerHTML = `<button class="nextButton javascriptEs6Color1" onclick=javascriptEs6Btn()>Next</button>`;
        javascriptEs6RemoveValue.innerHTML = "";



    } else if (javascriptEs6RandomValue == 93 && javascriptEs6InputAnswer == javascriptEs6AnswerArr[93].A93) {
        javascriptEs6CorrectValue.innerHTML = "Correct..";
        javascriptEs6DisplayAnswer.innerHTML = `
        <textarea name="text" class="answer_textarea" id="input">Good Job :) </textarea>`;
        javascriptEs6NextButton.innerHTML = `<button class="nextButton javascriptEs6Color1" onclick=javascriptEs6Btn()>Next</button>`;
        javascriptEs6RemoveValue.innerHTML = "";

    } else if (javascriptEs6RandomValue == 93 && javascriptEs6InputAnswer !== javascriptEs6AnswerArr[93].A93) {
        javascriptEs6DisplayAnswer.innerHTML = `
    <textarea name="text" class="answer_textarea" id="input">
var myArray = [];
for (var i = 1; i < 10; i += 2) {
myArray.push(i);
}
        </textarea>`;
        javascriptEs6IncorrectValue.innerHTML = "Incorrect..";
        javascriptEs6NextButton.innerHTML = `<button class="nextButton javascriptEs6Color1" onclick=javascriptEs6Btn()>Next</button>`;
        javascriptEs6RemoveValue.innerHTML = "";



    } else if (javascriptEs6RandomValue == 94 && javascriptEs6InputAnswer == javascriptEs6AnswerArr[94].A94) {
        javascriptEs6CorrectValue.innerHTML = "Correct..";
        javascriptEs6DisplayAnswer.innerHTML = `
        <textarea name="text" class="answer_textarea" id="input">Good Job :) </textarea>`;
        javascriptEs6NextButton.innerHTML = `<button class="nextButton javascriptEs6Color1" onclick=javascriptEs6Btn()>Next</button>`;
        javascriptEs6RemoveValue.innerHTML = "";

    } else if (javascriptEs6RandomValue == 94 && javascriptEs6InputAnswer !== javascriptEs6AnswerArr[94].A94) {
        javascriptEs6DisplayAnswer.innerHTML = `
    <textarea name="text" class="answer_textarea" id="input">
var myArray = [];

for (var i = 9; i > 0; i-=2){
    myArray.push(i)
}
        </textarea>`;
        javascriptEs6IncorrectValue.innerHTML = "Incorrect..";
        javascriptEs6NextButton.innerHTML = `<button class="nextButton javascriptEs6Color1" onclick=javascriptEs6Btn()>Next</button>`;
        javascriptEs6RemoveValue.innerHTML = "";



    } else if (javascriptEs6RandomValue == 95 && javascriptEs6InputAnswer == javascriptEs6AnswerArr[95].A95) {
        javascriptEs6CorrectValue.innerHTML = "Correct..";
        javascriptEs6DisplayAnswer.innerHTML = `
        <textarea name="text" class="answer_textarea" id="input">Good Job :) </textarea>`;
        javascriptEs6NextButton.innerHTML = `<button class="nextButton javascriptEs6Color1" onclick=javascriptEs6Btn()>Next</button>`;
        javascriptEs6RemoveValue.innerHTML = "";

    } else if (javascriptEs6RandomValue == 95 && javascriptEs6InputAnswer !== javascriptEs6AnswerArr[95].A95) {
        javascriptEs6DisplayAnswer.innerHTML = `
    <textarea name="text" class="answer_textarea" id="input">
var myArr = [ 2, 3, 4, 5, 6];
var total = 0;

for (var i = 0; i < myArr.length; i++) {
    total += myArr[i];
}
        </textarea>`;
        javascriptEs6IncorrectValue.innerHTML = "Incorrect..";
        javascriptEs6NextButton.innerHTML = `<button class="nextButton javascriptEs6Color1" onclick=javascriptEs6Btn()>Next</button>`;
        javascriptEs6RemoveValue.innerHTML = "";



    } else if (javascriptEs6RandomValue == 96 && javascriptEs6InputAnswer == javascriptEs6AnswerArr[96].A96) {
        javascriptEs6CorrectValue.innerHTML = "Correct..";
        javascriptEs6DisplayAnswer.innerHTML = `
        <textarea name="text" class="answer_textarea" id="input">Good Job :) </textarea>`;
        javascriptEs6NextButton.innerHTML = `<button class="nextButton javascriptEs6Color1" onclick=javascriptEs6Btn()>Next</button>`;
        javascriptEs6RemoveValue.innerHTML = "";

    } else if (javascriptEs6RandomValue == 96 && javascriptEs6InputAnswer !== javascriptEs6AnswerArr[96].A96) {
        javascriptEs6DisplayAnswer.innerHTML = `
    <textarea name="text" class="answer_textarea" id="input">
function multiplyAll(arr) {
    var product = 1;
    for(var i=0; i < arr.length; i++){
        for (var j=0; j < arr[i].length; j++){
        product = product * arr[i][j];
        }
    }
    return product;
}
multiplyAll([[1,2],[3,4],[5,6,7]]);
          </textarea>`;
        javascriptEs6IncorrectValue.innerHTML = "Incorrect..";
        javascriptEs6NextButton.innerHTML = `<button class="nextButton javascriptEs6Color1" onclick=javascriptEs6Btn()>Next</button>`;
        javascriptEs6RemoveValue.innerHTML = "";



    } else if (javascriptEs6RandomValue == 97 && javascriptEs6InputAnswer == javascriptEs6AnswerArr[97].A97) {
        javascriptEs6CorrectValue.innerHTML = "Correct..";
        javascriptEs6DisplayAnswer.innerHTML = `
        <textarea name="text" class="answer_textarea" id="input">Good Job :) </textarea>`;
        javascriptEs6NextButton.innerHTML = `<button class="nextButton javascriptEs6Color1" onclick=javascriptEs6Btn()>Next</button>`;
        javascriptEs6RemoveValue.innerHTML = "";

    } else if (javascriptEs6RandomValue == 97 && javascriptEs6InputAnswer !== javascriptEs6AnswerArr[97].A97) {
        javascriptEs6DisplayAnswer.innerHTML = `
    <textarea name="text" class="answer_textarea" id="input">
var myArray = [];
var i = 10;
do {
    myArray.push(i);
    i++;
} while (i < 5)
        </textarea>`;
        javascriptEs6IncorrectValue.innerHTML = "Incorrect..";
        javascriptEs6NextButton.innerHTML = `<button class="nextButton javascriptEs6Color1" onclick=javascriptEs6Btn()>Next</button>`;
        javascriptEs6RemoveValue.innerHTML = "";



    } else if (javascriptEs6RandomValue == 98 && javascriptEs6InputAnswer == javascriptEs6AnswerArr[98].A98) {
        javascriptEs6CorrectValue.innerHTML = "Correct..";
        javascriptEs6DisplayAnswer.innerHTML = `
        <textarea name="text" class="answer_textarea" id="input">Good Job :) </textarea>`;
        javascriptEs6NextButton.innerHTML = `<button class="nextButton javascriptEs6Color1" onclick=javascriptEs6Btn()>Next</button>`;
        javascriptEs6RemoveValue.innerHTML = "";

    } else if (javascriptEs6RandomValue == 98 && javascriptEs6InputAnswer !== javascriptEs6AnswerArr[98].A98) {
        javascriptEs6DisplayAnswer.innerHTML = `
    <textarea name="text" class="answer_textarea" id="input">
var contacts = [
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
        "likes": ["JavaScriptEs6", "Gaming", "Foxes"]
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
lookUpProfile("Akira", "likes");
          </textarea>`;
        javascriptEs6IncorrectValue.innerHTML = "Incorrect..";
        javascriptEs6NextButton.innerHTML = `<button class="nextButton javascriptEs6Color1" onclick=javascriptEs6Btn()>Next</button>`;
        javascriptEs6RemoveValue.innerHTML = "";



    } else if (javascriptEs6RandomValue == 99 && javascriptEs6InputAnswer == javascriptEs6AnswerArr[99].A99) {
        javascriptEs6CorrectValue.innerHTML = "Correct..";
        javascriptEs6DisplayAnswer.innerHTML = `
        <textarea name="text" class="answer_textarea" id="input">Good Job :) </textarea>`;
        javascriptEs6NextButton.innerHTML = `<button class="nextButton javascriptEs6Color1" onclick=javascriptEs6Btn()>Next</button>`;
        javascriptEs6RemoveValue.innerHTML = "";

    } else if (javascriptEs6RandomValue == 99 && javascriptEs6InputAnswer !== javascriptEs6AnswerArr[99].A99) {
        javascriptEs6DisplayAnswer.innerHTML = `
    <textarea name="text" class="answer_textarea" id="input">
function randomFraction() {
    var result = 0;
    while (result === 0) {
        result = Math.random();
    }
    
    return result;  
    
}
          </textarea>`;
        javascriptEs6IncorrectValue.innerHTML = "Incorrect..";
        javascriptEs6NextButton.innerHTML = `<button class="nextButton javascriptEs6Color1" onclick=javascriptEs6Btn()>Next</button>`;
        javascriptEs6RemoveValue.innerHTML = "";



    } else if (javascriptEs6RandomValue == 100 && javascriptEs6InputAnswer == javascriptEs6AnswerArr[100].A100) {
        javascriptEs6CorrectValue.innerHTML = "Correct..";
        javascriptEs6DisplayAnswer.innerHTML = `
        <textarea name="text" class="answer_textarea" id="input">Good Job :) </textarea>`;
        javascriptEs6NextButton.innerHTML = `<button class="nextButton javascriptEs6Color1" onclick=javascriptEs6Btn()>Next</button>`;
        javascriptEs6RemoveValue.innerHTML = "";

    } else if (javascriptEs6RandomValue == 100 && javascriptEs6InputAnswer !== javascriptEs6AnswerArr[100].A100) {
        javascriptEs6DisplayAnswer.innerHTML = `
    <textarea name="text" class="answer_textarea" id="input">
var randomNumberBetween0and19 = Math.floor(Math.random() * 20);

function randomWholeNum() {
    
    return Math.floor(Math.random() * 10);
}
        </textarea>`;
        javascriptEs6IncorrectValue.innerHTML = "Incorrect..";
        javascriptEs6NextButton.innerHTML = `<button class="nextButton javascriptEs6Color1" onclick=javascriptEs6Btn()>Next</button>`;
        javascriptEs6RemoveValue.innerHTML = "";



    } else if (javascriptEs6RandomValue == 101 && javascriptEs6InputAnswer == javascriptEs6AnswerArr[101].A101) {
        javascriptEs6CorrectValue.innerHTML = "Correct..";
        javascriptEs6DisplayAnswer.innerHTML = `
        <textarea name="text" class="answer_textarea" id="input">Good Job :) </textarea>`;
        javascriptEs6NextButton.innerHTML = `<button class="nextButton javascriptEs6Color1" onclick=javascriptEs6Btn()>Next</button>`;
        javascriptEs6RemoveValue.innerHTML = "";

    } else if (javascriptEs6RandomValue == 101 && javascriptEs6InputAnswer !== javascriptEs6AnswerArr[101].A101) {
        javascriptEs6DisplayAnswer.innerHTML = `
    <textarea name="text" class="answer_textarea" id="input">
function randomRange(myMin, myMax) {
    
    return Math.floor(Math.random() * (myMax - myMin + 1) + myMin);
    
}
var myRandom = randomRange(5, 15);
          </textarea>`;
        javascriptEs6IncorrectValue.innerHTML = "Incorrect..";
        javascriptEs6NextButton.innerHTML = `<button class="nextButton javascriptEs6Color1" onclick=javascriptEs6Btn()>Next</button>`;
        javascriptEs6RemoveValue.innerHTML = "";



    } else if (javascriptEs6RandomValue == 102 && javascriptEs6InputAnswer == javascriptEs6AnswerArr[102].A102) {
        javascriptEs6CorrectValue.innerHTML = "Correct..";
        javascriptEs6DisplayAnswer.innerHTML = `
        <textarea name="text" class="answer_textarea" id="input">Good Job :) </textarea>`;
        javascriptEs6NextButton.innerHTML = `<button class="nextButton javascriptEs6Color1" onclick=javascriptEs6Btn()>Next</button>`;
        javascriptEs6RemoveValue.innerHTML = "";

    } else if (javascriptEs6RandomValue == 102 && javascriptEs6InputAnswer !== javascriptEs6AnswerArr[102].A102) {
        javascriptEs6DisplayAnswer.innerHTML = `
    <textarea name="text" class="answer_textarea" id="input">
function convertToInteger(str) {
    
    return parseInt(str);
}
    
convertToInteger("10011");
            </textarea>`;
        javascriptEs6IncorrectValue.innerHTML = "Incorrect..";
        javascriptEs6NextButton.innerHTML = `<button class="nextButton javascriptEs6Color1" onclick=javascriptEs6Btn()>Next</button>`;
        javascriptEs6RemoveValue.innerHTML = "";



    } else if (javascriptEs6RandomValue == 103 && javascriptEs6InputAnswer == javascriptEs6AnswerArr[103].A103) {
        javascriptEs6CorrectValue.innerHTML = "Correct..";
        javascriptEs6DisplayAnswer.innerHTML = `
        <textarea name="text" class="answer_textarea" id="input">Good Job :) </textarea>`;
        javascriptEs6NextButton.innerHTML = `<button class="nextButton javascriptEs6Color1" onclick=javascriptEs6Btn()>Next</button>`;
        javascriptEs6RemoveValue.innerHTML = "";

    } else if (javascriptEs6RandomValue == 103 && javascriptEs6InputAnswer !== javascriptEs6AnswerArr[103].A103) {
        javascriptEs6DisplayAnswer.innerHTML = `
    <textarea name="text" class="answer_textarea" id="input">
function convertToInteger(str) {
    var radix = 2;
    return parseInt(str, radix);
}
    
convertToInteger("10011");
            </textarea>`;
        javascriptEs6IncorrectValue.innerHTML = "Incorrect..";
        javascriptEs6NextButton.innerHTML = `<button class="nextButton javascriptEs6Color1" onclick=javascriptEs6Btn()>Next</button>`;
        javascriptEs6RemoveValue.innerHTML = "";



    } else if (javascriptEs6RandomValue == 104 && javascriptEs6InputAnswer == javascriptEs6AnswerArr[104].A104) {
        javascriptEs6CorrectValue.innerHTML = "Correct..";
        javascriptEs6DisplayAnswer.innerHTML = `
        <textarea name="text" class="answer_textarea" id="input">Good Job :) </textarea>`;
        javascriptEs6NextButton.innerHTML = `<button class="nextButton javascriptEs6Color1" onclick=javascriptEs6Btn()>Next</button>`;
        javascriptEs6RemoveValue.innerHTML = "";

    } else if (javascriptEs6RandomValue == 104 && javascriptEs6InputAnswer !== javascriptEs6AnswerArr[104].A104) {
        javascriptEs6DisplayAnswer.innerHTML = `
    <textarea name="text" class="answer_textarea" id="input">
function checkEqual(a, b) {
    return a === b ? true : false;
}
checkEqual(1, 2);
          </textarea>`;
        javascriptEs6IncorrectValue.innerHTML = "Incorrect..";
        javascriptEs6NextButton.innerHTML = `<button class="nextButton javascriptEs6Color1" onclick=javascriptEs6Btn()>Next</button>`;
        javascriptEs6RemoveValue.innerHTML = "";



    } else if (javascriptEs6RandomValue == 105 && javascriptEs6InputAnswer == javascriptEs6AnswerArr[105].A105) {
        javascriptEs6CorrectValue.innerHTML = "Correct..";
        javascriptEs6DisplayAnswer.innerHTML = `
        <textarea name="text" class="answer_textarea" id="input">Good Job :) </textarea>`;
        javascriptEs6NextButton.innerHTML = `<button class="nextButton javascriptEs6Color1" onclick=javascriptEs6Btn()>Next</button>`;
        javascriptEs6RemoveValue.innerHTML = "";

    } else if (javascriptEs6RandomValue == 105 && javascriptEs6InputAnswer !== javascriptEs6AnswerArr[105].A105) {
        javascriptEs6DisplayAnswer.innerHTML = `
    <textarea name="text" class="answer_textarea" id="input">
function checkSign(num) {
    return (
        num > 0 ? "positive" :
        num < 0 ? "negative" :
        "zero"
    );
}
          </textarea>`;
        javascriptEs6IncorrectValue.innerHTML = "Incorrect..";
        javascriptEs6NextButton.innerHTML = `<button class="nextButton javascriptEs6Color1" onclick=javascriptEs6Btn()>Next</button>`;
        javascriptEs6RemoveValue.innerHTML = "";



    }

    else {
        javascriptEs6IncorrectValue.innerHTML = "Incorrect..";
        javascriptEs6NextButton.innerHTML = `<button class="nextButton javascriptEs6Color1" onclick=javascriptEs6Btn()>Next</button>`;
        javascriptEs6RemoveValue.innerHTML = "";
    }

}
window.javascriptEs6Submit = javascriptEs6Submit; /* to make submit global*/

function javascriptEs6Button() {
    javascriptEs6Test = document.getElementById("javascriptEs6AddedQuestion").innerHTML = javascriptEs6QuestionArr[javascriptEs6RandomValue]; /* giving random question to html */

    return javascriptEs6Test;
}
window.javascriptEs6Button = javascriptEs6Button;

function javascriptEs6ShowTest() {
    var javascriptEs6InputBox = document.getElementById("javascriptEs6Remove").style.display = "block";
    return javascriptEs6InputBox;
}
window.javascriptEs6ShowTest = javascriptEs6ShowTest;
function javascriptEs6Btn() {
    javascriptEs6RandomValue = Math.floor(Math.random() * javascriptEs6QuestionArr.length); /* buton next in html to make a next random question*/
    document.getElementById("javascriptEs6AddedQuestion").innerHTML = javascriptEs6QuestionArr[javascriptEs6RandomValue]; /* giving random question to html */
    document.getElementById("javascriptEs6ElementButton").innerHTML = "";/* to clean javascriptEs6ElementButton*/
    document.getElementById("javascriptEs6Remove").innerHTML = `<textarea name="text" class="answer_textarea" id="input"></textarea></br>
      <button class="answer_submit javascriptEs6Color1" id = "javascriptEs6StartButton" onclick="javascriptEs6Submit()">Submit</button>`;/* to create next text area and Submit button. */
    document.getElementById("javascriptEs6CheckingAnswer").innerHTML = "";
    document.getElementById("javascriptEs6ShowingAnswer").innerHTML = "";
}
window.javascriptEs6Btn = javascriptEs6Btn;/* to make submit global*/

