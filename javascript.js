

import { htmlQuestionArr } from './questionsAndAnswers/htmlQuestions'; /* importing  array from other js file with webpack*/
import { htmlAnswerArr } from './questionsAndAnswers/htmlAnswers'; /* importing  array from other js file with webpack*/
import { cssQuestionArr } from './questionsAndAnswers/cssQuestions'; /* importing  array from other js file with webpack*/
import { cssAnswerArr } from './questionsAndAnswers/cssAnswers'; /* importing  array from other js file with webpack*/

import { javascriptAnswerArr } from './questionsAndAnswers/javascriptAnswers'; /* importing  array from other js file with webpack*/

import { javascriptQuestionArr } from './questionsAndAnswers/javascriptQuestions'; /* importing  array from other js file with webpack*/

import { javascriptEs6AnswerArr } from './questionsAndAnswers/javascriptEs6Answers'; /* importing  array from other js file with webpack*/

import { javascriptEs6QuestionArr } from './questionsAndAnswers/javascriptEs6Questions'; /* importing  array from other js file with webpack*/
import { javascriptRegExpressAnswerArr } from './questionsAndAnswers/javascriptRegExpressAnswers'; /* importing  array from other js file with webpack*/

import { javascriptRegExpressQuestionArr } from './questionsAndAnswers/javascriptRegExpressQuestions'; /* importing  array from other js file with webpack*/

import { javascriptBasicDataStructureAnswerArr } from './questionsAndAnswers/javascriptBasicDataStructureAnswers'; /* importing  array from other js file with webpack*/

import { javascriptBasicDataStructureQuestionArr } from './questionsAndAnswers/javascriptBasicDataStructureQuestions'; /* importing  array from other js file with webpack*/


import { javascriptBasicAlgorithmAnswerArr } from './questionsAndAnswers/javascriptBasicAlgorithmAnswers'; /* importing  array from other js file with webpack*/

import { javascriptBasicAlgorithmQuestionArr } from './questionsAndAnswers/javascriptBasicAlgorithmQuestions'; /* importing  array from other js file with webpack*/

import { javascriptObjOrientProgAnswerArr } from './questionsAndAnswers/javascriptObjOrientProgAnswers'; /* importing  array from other js file with webpack*/

import { javascriptObjOrientProgQuestionArr } from './questionsAndAnswers/javascriptObjOrientProgQuestions'; /* importing  array from other js file with webpack*/
















var randomValue = Math.floor(Math.random() * htmlQuestionArr.length); /* taking random question from htmlQuestionArr*/
function submit() { /* function for html submit button*/

    var inputAnswer = input.value.replace(/\s+/g, ``); /*replace(/\s+/g, `` is removing all spaces. Avoid checking all the spaces to compare text*/
    var correctValue = document.getElementById("checkingAnswer"); /* making getElementById code shorter*/
    var incorrectValue = document.getElementById("checkingAnswer");
    var displayAnswer = document.getElementById("showingAnswer");
    var nextButton = document.getElementById("elementButton");
    var removeValue = document.getElementById("remove");
    if (randomValue == 0 && inputAnswer == htmlAnswerArr[0].A0) { /* checking if randomValue is 0 and if putting answer the same as htmlAnswerArr*//*A0 is just that I can track answer numbers when adding questions and answers*/
        correctValue.innerHTML = "Correct..";
        displayAnswer.innerHTML = `<textarea name="text" class="answer_textarea" id="input">Good Job :) </textarea>`;
        nextButton.innerHTML = `<button class="nextButton htmlColor1" onclick=btn()>Next</button>`; /* creating next button with btn()function*/
        removeValue.innerHTML = "";/* removing in html answer*/



    } else if (randomValue == 0 && inputAnswer !== htmlAnswerArr[0].A0) {/*  if random value not == then giving then display the answere.*/
        displayAnswer.innerHTML = `<textarea name="text" class="answer_textarea" id="input">&ltp title="tooltip"&gtAnswer&lt/p&gt</textarea>`;
        incorrectValue.innerHTML = "Incorrect..";
        nextButton.innerHTML = `<button class="nextButton htmlColor1" onclick=btn()>Next</button>`;
        removeValue.innerHTML = "";



    } else if (randomValue == 1 && inputAnswer == htmlAnswerArr[1].A1) {
        correctValue.innerHTML = "Correct..";
        displayAnswer.innerHTML = `<textarea name="text" class="answer_textarea" id="input">Good Job :) </textarea>`;
        nextButton.innerHTML = `<button class="nextButton htmlColor1" onclick=btn()>Next</button>`;
        removeValue.innerHTML = "";

    } else if (randomValue == 1 && inputAnswer !== htmlAnswerArr[1].A1) {
        displayAnswer.innerHTML = `<textarea name="text" class="answer_textarea" id="input">
&ltimg src="answer.jpg" width="250" height="400"&gt</textarea>`;
        incorrectValue.innerHTML = "Incorrect..";
        nextButton.innerHTML = `<button class="nextButton htmlColor1" onclick=btn()>Next</button>`;
        removeValue.innerHTML = "";



    } else if (randomValue == 2 && inputAnswer == htmlAnswerArr[2].A2) {
        correctValue.innerHTML = "Correct..";
        displayAnswer.innerHTML = `<textarea name="text" class="answer_textarea" id="input">Good Job :) </textarea>`;
        nextButton.innerHTML = `<button class="nextButton htmlColor1" onclick=btn()>Next</button>`;
        removeValue.innerHTML = "";

    } else if (randomValue == 2 && inputAnswer !== htmlAnswerArr[2].A2) {
        displayAnswer.innerHTML = `<textarea name="text" class="answer_textarea" id="input">
&lta href="https://www.google.com"&gtThis is a link&lt/a&gt</textarea>`;
        incorrectValue.innerHTML = "Incorrect..";
        nextButton.innerHTML = `<button class="nextButton htmlColor1" onclick=btn()>Next</button>`;
        removeValue.innerHTML = "";



    } else if (randomValue == 3 && inputAnswer == htmlAnswerArr[3].A3) {
        correctValue.innerHTML = "Correct..";
        displayAnswer.innerHTML = `<textarea name="text" class="answer_textarea" id="input">Good Job :) </textarea>`;
        nextButton.innerHTML = `<button class="nextButton htmlColor1" onclick=btn()>Next</button>`;
        removeValue.innerHTML = "";

    } else if (randomValue == 3 && inputAnswer !== htmlAnswerArr[3].A3) {
        displayAnswer.innerHTML = `<textarea name="text" class="answer_textarea" id="input">
&lta href="http://www.wwf.org.uk"&gtThis is a link&lt/a&gt</textarea>`;
        incorrectValue.innerHTML = "Incorrect..";
        nextButton.innerHTML = `<button class="nextButton htmlColor1" onclick=btn()>Next</button>`;
        removeValue.innerHTML = "";



    } else if (randomValue == 4 && inputAnswer == htmlAnswerArr[4].A4) {
        correctValue.innerHTML = "Correct..";
        displayAnswer.innerHTML = `<textarea name="text" class="answer_textarea" id="input">Good Job :) </textarea>`;
        nextButton.innerHTML = `<button class="nextButton htmlColor1" onclick=btn()>Next</button>`;
        removeValue.innerHTML = "";

    } else if (randomValue == 4 && inputAnswer !== htmlAnswerArr[4].A4) {
        displayAnswer.innerHTML = `<textarea name="text" class="answer_textarea" id="input">
&ltimg src="test.jpg" alt="answer.com" width="135" height="50"&gt</textarea>`;
        incorrectValue.innerHTML = "Incorrect..";
        nextButton.innerHTML = `<button class="nextButton htmlColor1" onclick=btn()>Next</button>`;
        removeValue.innerHTML = "";



    } else if (randomValue == 5 && inputAnswer == htmlAnswerArr[5].A5) {
        correctValue.innerHTML = "Correct..";
        displayAnswer.innerHTML = `<textarea name="text" class="answer_textarea" id="input">Good Job :) </textarea>`;
        nextButton.innerHTML = `<button class="nextButton htmlColor1" onclick=btn()>Next</button>`;
        removeValue.innerHTML = "";

    } else if (randomValue == 5 && inputAnswer !== htmlAnswerArr[5].A5) {
        displayAnswer.innerHTML = `<textarea name="text" class="answer_textarea" id="input">
&lth1&gtLondon&lt/h1&gt</textarea>`;
        incorrectValue.innerHTML = "Incorrect..";
        nextButton.innerHTML = `<button class="nextButton htmlColor1" onclick=btn()>Next</button>`;
        removeValue.innerHTML = "";



    } else if (randomValue == 6 && inputAnswer == htmlAnswerArr[6].A6) {
        correctValue.innerHTML = "Correct..";
        displayAnswer.innerHTML = `<textarea name="text" class="answer_textarea" id="input">Good Job :) </textarea>`;
        nextButton.innerHTML = `<button class="nextButton htmlColor1" onclick=btn()>Next</button>`;
        removeValue.innerHTML = "";

    } else if (randomValue == 6 && inputAnswer !== htmlAnswerArr[6].A6) {
        displayAnswer.innerHTML = `<textarea name="text" class="answer_textarea" id="input">
&lth1&gtLondon&lt/h1&gt
&lthr&gt 
&ltp&gtTest&lt/p&gt</textarea>`;
        incorrectValue.innerHTML = "Incorrect..";
        nextButton.innerHTML = `<button class="nextButton htmlColor1" onclick=btn()>Next</button>`;
        removeValue.innerHTML = "";



    } else if (randomValue == 7 && inputAnswer == htmlAnswerArr[7].A7) {
        correctValue.innerHTML = "Correct..";
        displayAnswer.innerHTML = `<textarea name="text" class="answer_textarea" id="input">Good Job :) </textarea>`;
        nextButton.innerHTML = `<button class="nextButton htmlColor1" onclick=btn()>Next</button>`;
        removeValue.innerHTML = "";

    } else if (randomValue == 7 && inputAnswer !== htmlAnswerArr[7].A7) {
        displayAnswer.innerHTML = `<textarea name="text" class="answer_textarea" id="input">
&lth1&gtHello&lt/h1&gt 
&lth2&gtHello&lt/h2&gt 
&lth3&gtHello&lt/h3&gt 
&lth4&gtHello&lt/h4&gt 
&lth5&gtHello&lt/h5&gt 
&lth6&gtHello&lt/h6&gt</textarea>`;
        incorrectValue.innerHTML = "Incorrect..";
        nextButton.innerHTML = `<button class="nextButton htmlColor1" onclick=btn()>Next</button>`;
        removeValue.innerHTML = "";



    } else if (randomValue == 8 && inputAnswer == htmlAnswerArr[8].A8) {
        correctValue.innerHTML = "Correct..";
        displayAnswer.innerHTML = `<textarea name="text" class="answer_textarea" id="input">Good Job :) </textarea>`;
        nextButton.innerHTML = `<button class="nextButton htmlColor1" onclick=btn()>Next</button>`;
        removeValue.innerHTML = "";

    } else if (randomValue == 8 && inputAnswer !== htmlAnswerArr[8].A8) {
        displayAnswer.innerHTML = `<textarea name="text" class="answer_textarea" id="input">
&lth1&gtUniversal Studios Presents&lt/h1&gt 
&lth2&gtJurassic Park&lt/h2&gt 
&lth3&gtAbout&lt/h3&gt 
&ltp&gtOn the Island of Isla Nublar, a new park has been built: Jurassic Park is a theme park of cloned dinosaurs!!&lt/p&gt</textarea>`;
        incorrectValue.innerHTML = "Incorrect..";
        nextButton.innerHTML = `<button class="nextButton htmlColor1" onclick=btn()>Next</button>`;
        removeValue.innerHTML = "";



    } else if (randomValue == 9 && inputAnswer == htmlAnswerArr[9].A9) {
        correctValue.innerHTML = "Correct..";
        displayAnswer.innerHTML = `<textarea name="text" class="answer_textarea" id="input">Good Job :) </textarea>`;
        nextButton.innerHTML = `<button class="nextButton htmlColor1" onclick=btn()>Next</button>`;
        removeValue.innerHTML = "";

    } else if (randomValue == 9 && inputAnswer !== htmlAnswerArr[9].A9) {
        displayAnswer.innerHTML = `<textarea name="text" class="answer_textarea" id="input">
&ltp&gtHello World!&lt/p&gt</textarea>`;
        incorrectValue.innerHTML = "Incorrect..";
        nextButton.innerHTML = `<button class="nextButton htmlColor1" onclick=btn()>Next</button>`;
        removeValue.innerHTML = "";



    } else if (randomValue == 10 && inputAnswer == htmlAnswerArr[10].A10) {
        correctValue.innerHTML = "Correct..";
        displayAnswer.innerHTML = `<textarea name="text" class="answer_textarea" id="input">Good Job :) </textarea>`;
        nextButton.innerHTML = `<button class="nextButton htmlColor1" onclick=btn()>Next</button>`;
        removeValue.innerHTML = "";

    } else if (randomValue == 10 && inputAnswer !== htmlAnswerArr[10].A10) {
        displayAnswer.innerHTML = `<textarea name="text" class="answer_textarea" id="input">
&ltp&gt My Bonnie lies over the ocean.&ltbr&gt
My Bonnie lies over the sea.&ltbr&gt 
My Bonnie lies over the ocean.&ltbr&gt 
Oh, bring back my Bonnie to me.
&lt/p&gt</textarea>`;
        incorrectValue.innerHTML = "Incorrect..";
        nextButton.innerHTML = `<button class="nextButton htmlColor1" onclick=btn()>Next</button>`;
        removeValue.innerHTML = "";



    } else if (randomValue == 11 && inputAnswer == htmlAnswerArr[11].A11) {
        correctValue.innerHTML = "Correct..";
        displayAnswer.innerHTML = `<textarea name="text" class="answer_textarea" id="input">Good Job :) </textarea>`;
        nextButton.innerHTML = `<button class="nextButton htmlColor1" onclick=btn()>Next</button>`;
        removeValue.innerHTML = "";

    } else if (randomValue == 11 && inputAnswer !== htmlAnswerArr[11].A11) {
        displayAnswer.innerHTML = `<textarea name="text" class="answer_textarea" id="input">
&ltpre&gt 
My Bonnie lies over the ocean.&ltbr&gt 
My Bonnie lies over the sea.&ltbr&gt 
My Bonnie lies over the ocean.&ltbr&gt 
Oh, bring back my Bonnie to me.
&lt/pre&gt</textarea>`;
        incorrectValue.innerHTML = "Incorrect..";
        nextButton.innerHTML = `<button class="nextButton htmlColor1" onclick=btn()>Next</button>`;
        removeValue.innerHTML = "";



    } else if (randomValue == 12 && inputAnswer == htmlAnswerArr[12].A12) {
        correctValue.innerHTML = "Correct..";
        displayAnswer.innerHTML = `<textarea name="text" class="answer_textarea" id="input">Good Job :) </textarea>`;
        nextButton.innerHTML = `<button class="nextButton htmlColor1" onclick=btn()>Next</button>`;
        removeValue.innerHTML = "";

    } else if (randomValue == 12 && inputAnswer !== htmlAnswerArr[12].A12) {
        displayAnswer.innerHTML = `<textarea name="text" class="answer_textarea" id="input">
&ltp style="color:blue"&gtThis is a paragraph.&lt/p&gt</textarea>`;
        incorrectValue.innerHTML = "Incorrect..";
        nextButton.innerHTML = `<button class="nextButton htmlColor1" onclick=btn()>Next</button>`;
        removeValue.innerHTML = "";



    } else if (randomValue == 13 && inputAnswer == htmlAnswerArr[13].A13) {
        correctValue.innerHTML = "Correct..";
        displayAnswer.innerHTML = `<textarea name="text" class="answer_textarea" id="input">Good Job :) </textarea>`;
        nextButton.innerHTML = `<button class="nextButton htmlColor1" onclick=btn()>Next</button>`;
        removeValue.innerHTML = "";

    } else if (randomValue == 13 && inputAnswer !== htmlAnswerArr[13].A13) {
        displayAnswer.innerHTML = `<textarea name="text" class="answer_textarea" id="input">
&ltp style="font-family:courier"&gtThis is a paragraph.&lt/p&gt</textarea>`;
        incorrectValue.innerHTML = "Incorrect..";
        nextButton.innerHTML = `<button class="nextButton htmlColor1" onclick=btn()>Next</button>`;
        removeValue.innerHTML = "";



    } else if (randomValue == 14 && inputAnswer == htmlAnswerArr[14].A14) {
        correctValue.innerHTML = "Correct..";
        displayAnswer.innerHTML = `<textarea name="text" class="answer_textarea" id="input">Good Job :) </textarea>`;
        nextButton.innerHTML = `<button class="nextButton htmlColor1" onclick=btn()>Next</button>`;
        removeValue.innerHTML = "";

    } else if (randomValue == 14 && inputAnswer !== htmlAnswerArr[14].A14) {
        displayAnswer.innerHTML = `<textarea name="text" class="answer_textarea" id="input">
&ltp style="text-align:center"&gtThis is a paragraph.&lt/p&gt</textarea>`;
        incorrectValue.innerHTML = "Incorrect..";
        nextButton.innerHTML = `<button class="nextButton htmlColor1" onclick=btn()>Next</button>`;
        removeValue.innerHTML = "";



    } else if (randomValue == 15 && inputAnswer == htmlAnswerArr[15].A15) {
        correctValue.innerHTML = "Correct..";
        displayAnswer.innerHTML = `<textarea name="text" class="answer_textarea" id="input">Good Job :) </textarea>`;
        nextButton.innerHTML = `<button class="nextButton htmlColor1" onclick=btn()>Next</button>`;
        removeValue.innerHTML = "";

    } else if (randomValue == 15 && inputAnswer !== htmlAnswerArr[15].A15) {
        displayAnswer.innerHTML = `<textarea name="text" class="answer_textarea" id="input">
&ltp style="font-size:50px"&gtThis is a paragraph.&lt/p&gt</textarea>`;
        incorrectValue.innerHTML = "Incorrect..";
        nextButton.innerHTML = `<button class="nextButton htmlColor1" onclick=btn()>Next</button>`;
        removeValue.innerHTML = "";



    } else if (randomValue == 16 && inputAnswer == htmlAnswerArr[16].A16) {
        correctValue.innerHTML = "Correct..";
        displayAnswer.innerHTML = `<textarea name="text" class="answer_textarea" id="input">Good Job :) </textarea>`;
        nextButton.innerHTML = `<button class="nextButton htmlColor1" onclick=btn()>Next</button>`;
        removeValue.innerHTML = "";

    } else if (randomValue == 16 && inputAnswer !== htmlAnswerArr[16].A16) {
        displayAnswer.innerHTML = `<textarea name="text" class="answer_textarea" id="input">
&ltbody style="background-color:yellow"&gt
    &ltp&gtThis is a paragraph.&lt/p&gt
&lt/body&gt</textarea>`;
        incorrectValue.innerHTML = "Incorrect..";
        nextButton.innerHTML = `<button class="nextButton htmlColor1" onclick=btn()>Next</button>`;
        removeValue.innerHTML = "";



    } else if (randomValue == 17 && inputAnswer == htmlAnswerArr[17].A17) {
        correctValue.innerHTML = "Correct..";
        displayAnswer.innerHTML = `<textarea name="text" class="answer_textarea" id="input">Good Job :) </textarea>`;
        nextButton.innerHTML = `<button class="nextButton htmlColor1" onclick=btn()>Next</button>`;
        removeValue.innerHTML = "";

    } else if (randomValue == 17 && inputAnswer !== htmlAnswerArr[17].A17) {
        displayAnswer.innerHTML = `<textarea name="text" class="answer_textarea" id="input">
&lthtml&gt
    &ltbody style="text-align:center"&gt
        &lth1&gtThis is a heading&lt/h1&gt
        &lth2&gtThis is also a heading&lt/h2&gt
        &ltp&gtThis is a paragraph.&lt/p&gt
        &ltp&gtThis is also paragraph.&lt/p&gt
    &lt/body&gt
&lt/html&gt</textarea>`;
        incorrectValue.innerHTML = "Incorrect..";
        nextButton.innerHTML = `<button class="nextButton htmlColor1" onclick=btn()>Next</button>`;
        removeValue.innerHTML = "";



    } else if (randomValue == 18 && inputAnswer == htmlAnswerArr[18].A18) {
        correctValue.innerHTML = "Correct..";
        displayAnswer.innerHTML = `<textarea name="text" class="answer_textarea" id="input">Good Job :) </textarea>`;
        nextButton.innerHTML = `<button class="nextButton htmlColor1" onclick=btn()>Next</button>`;
        removeValue.innerHTML = "";

    } else if (randomValue == 18 && inputAnswer !== htmlAnswerArr[18].A18) {
        displayAnswer.innerHTML = `<textarea name="text" class="answer_textarea" id="input">
&ltp&gtThis mission is to stop the &ltstrong&gt degradation &lt/strong&gt of our planets natural environment.&lt/p&gt</textarea>`;
        incorrectValue.innerHTML = "Incorrect..";
        nextButton.innerHTML = `<button class="nextButton htmlColor1" onclick=btn()>Next</button>`;
        removeValue.innerHTML = "";



    } else if (randomValue == 19 && inputAnswer == htmlAnswerArr[19].A19) {
        correctValue.innerHTML = "Correct..";
        displayAnswer.innerHTML = `<textarea name="text" class="answer_textarea" id="input">Good Job :) </textarea>`;
        nextButton.innerHTML = `<button class="nextButton htmlColor1" onclick=btn()>Next</button>`;
        removeValue.innerHTML = "";

    } else if (randomValue == 19 && inputAnswer !== htmlAnswerArr[19].A19) {
        displayAnswer.innerHTML = `<textarea name="text" class="answer_textarea" id="input">
&ltp&gtTokyo is the capital of Japan,
the center of the Greater Tokyo Area, 
and the most populous &ltem&gtmetropolitan&lt/em&gt area in the world.&lt/p&gt</textarea>`;
        incorrectValue.innerHTML = "Incorrect..";
        nextButton.innerHTML = `<button class="nextButton htmlColor1" onclick=btn()>Next</button>`;
        removeValue.innerHTML = "";



    } else if (randomValue == 20 && inputAnswer == htmlAnswerArr[20].A20) {
        correctValue.innerHTML = "Correct..";
        displayAnswer.innerHTML = `<textarea name="text" class="answer_textarea" id="input">Good Job :) </textarea>`;
        nextButton.innerHTML = `<button class="nextButton htmlColor1" onclick=btn()>Next</button>`;
        removeValue.innerHTML = "";

    } else if (randomValue == 20 && inputAnswer !== htmlAnswerArr[20].A20) {
        displayAnswer.innerHTML = `<textarea name="text" class="answer_textarea" id="input">
&ltp&gtHTML is &ltmark&gtFUN&lt/mark&gt to learn!&lt/p&gt</textarea>`;
        incorrectValue.innerHTML = "Incorrect..";
        nextButton.innerHTML = `<button class="nextButton htmlColor1" onclick=btn()>Next</button>`;
        removeValue.innerHTML = "";



    } else if (randomValue == 21 && inputAnswer == htmlAnswerArr[21].A21) {
        correctValue.innerHTML = "Correct..";
        displayAnswer.innerHTML = `<textarea name="text" class="answer_textarea" id="input">Good Job :) </textarea>`;
        nextButton.innerHTML = `<button class="nextButton htmlColor1" onclick=btn()>Next</button>`;
        removeValue.innerHTML = "";

    } else if (randomValue == 21 && inputAnswer !== htmlAnswerArr[21].A21) {
        displayAnswer.innerHTML = `<textarea name="text" class="answer_textarea" id="input">
&ltp&gtH&ltsub&gt2&lt/sub&gtO is the scientific term for water.&lt/p&gt</textarea>`;
        incorrectValue.innerHTML = "Incorrect..";
        nextButton.innerHTML = `<button class="nextButton htmlColor1" onclick=btn()>Next</button>`;
        removeValue.innerHTML = "";



    } else if (randomValue == 22 && inputAnswer == htmlAnswerArr[22].A22) {
        correctValue.innerHTML = "Correct..";
        displayAnswer.innerHTML = `<textarea name="text" class="answer_textarea" id="input">Good Job :) </textarea>`;
        nextButton.innerHTML = `<button class="nextButton htmlColor1" onclick=btn()>Next</button>`;
        removeValue.innerHTML = "";

    } else if (randomValue == 22 && inputAnswer !== htmlAnswerArr[22].A22) {
        displayAnswer.innerHTML = `<textarea name="text" class="answer_textarea" id="input">
&ltp&gtI am so &ltq&gtcool&lt/q&gt.&lt/p&gt</textarea>`;
        incorrectValue.innerHTML = "Incorrect..";
        nextButton.innerHTML = `<button class="nextButton htmlColor1" onclick=btn()>Next</button>`;
        removeValue.innerHTML = "";



    } else if (randomValue == 23 && inputAnswer == htmlAnswerArr[23].A23) {
        correctValue.innerHTML = "Correct..";
        displayAnswer.innerHTML = `<textarea name="text" class="answer_textarea" id="input">Good Job :) </textarea>`;
        nextButton.innerHTML = `<button class="nextButton htmlColor1" onclick=btn()>Next</button>`;
        removeValue.innerHTML = "";

    } else if (randomValue == 23 && inputAnswer !== htmlAnswerArr[23].A23) {
        displayAnswer.innerHTML = `<textarea name="text" class="answer_textarea" id="input">
&ltblockquote cite="http://www.worldwildlife.org/who/index.html"&gt 
For 50 years, WWF has been protecting the future of nature. 
&lt/blockquote&gt</textarea>`;
        incorrectValue.innerHTML = "Incorrect..";
        nextButton.innerHTML = `<button class="nextButton htmlColor1" onclick=btn()>Next</button>`;
        removeValue.innerHTML = "";



    } else if (randomValue == 24 && inputAnswer == htmlAnswerArr[24].A24) {
        correctValue.innerHTML = "Correct..";
        displayAnswer.innerHTML = `<textarea name="text" class="answer_textarea" id="input">Good Job :) </textarea>`;
        nextButton.innerHTML = `<button class="nextButton htmlColor1" onclick=btn()>Next</button>`;
        removeValue.innerHTML = "";

    } else if (randomValue == 24 && inputAnswer !== htmlAnswerArr[24].A24) {
        displayAnswer.innerHTML = `<textarea name="text" class="answer_textarea" id="input">
&ltbdo dir="rtl"&gtWhat a beautiful day!&lt/bdo&gt</textarea>`;
        incorrectValue.innerHTML = "Incorrect..";
        nextButton.innerHTML = `<button class="nextButton htmlColor1" onclick=btn()>Next</button>`;
        removeValue.innerHTML = "";



    } else if (randomValue == 25 && inputAnswer == htmlAnswerArr[25].A25) {
        correctValue.innerHTML = "Correct..";
        displayAnswer.innerHTML = `<textarea name="text" class="answer_textarea" id="input">Good Job :) </textarea>`;
        nextButton.innerHTML = `<button class="nextButton htmlColor1" onclick=btn()>Next</button>`;
        removeValue.innerHTML = "";

    } else if (randomValue == 25 && inputAnswer !== htmlAnswerArr[25].A25) {
        displayAnswer.innerHTML = `<textarea name="text" class="answer_textarea" id="input">
&ltp&gtThe &ltabbr title="World Health Organization"&gtWHO&lt/abbr&gt was founded in 1948.&lt/p&gt</textarea>`;
        incorrectValue.innerHTML = "Incorrect..";
        nextButton.innerHTML = `<button class="nextButton htmlColor1" onclick=btn()>Next</button>`;
        removeValue.innerHTML = "";



    } else if (randomValue == 26 && inputAnswer == htmlAnswerArr[26].A26) {
        correctValue.innerHTML = "Correct..";
        displayAnswer.innerHTML = `<textarea name="text" class="answer_textarea" id="input">Good Job :) </textarea>`;
        nextButton.innerHTML = `<button class="nextButton htmlColor1" onclick=btn()>Next</button>`;
        removeValue.innerHTML = "";

    } else if (randomValue == 26 && inputAnswer !== htmlAnswerArr[26].A26) {
        displayAnswer.innerHTML = `<textarea name="text" class="answer_textarea" id="input">
&lt!-- Do not display this text in the browser --&gt</textarea>`;
        incorrectValue.innerHTML = "Incorrect..";
        nextButton.innerHTML = `<button class="nextButton htmlColor1" onclick=btn()>Next</button>`;
        removeValue.innerHTML = "";



    } else if (randomValue == 27 && inputAnswer == htmlAnswerArr[27].A27) {
        correctValue.innerHTML = "Correct..";
        displayAnswer.innerHTML = `<textarea name="text" class="answer_textarea" id="input">Good Job :) </textarea>`;
        nextButton.innerHTML = `<button class="nextButton htmlColor1" onclick=btn()>Next</button>`;
        removeValue.innerHTML = "";

    } else if (randomValue == 27 && inputAnswer !== htmlAnswerArr[27].A27) {
        displayAnswer.innerHTML = `<textarea name="text" class="answer_textarea" id="input">
&ltstyle&gt body {background-color:yellow;}&lt/style&gt</textarea>`;
        incorrectValue.innerHTML = "Incorrect..";
        nextButton.innerHTML = `<button class="nextButton htmlColor1" onclick=btn()>Next</button>`;
        removeValue.innerHTML = "";



    } else if (randomValue == 28 && inputAnswer == htmlAnswerArr[28].A28) {
        correctValue.innerHTML = "Correct..";
        displayAnswer.innerHTML = `<textarea name="text" class="answer_textarea" id="input">Good Job :) </textarea>`;
        nextButton.innerHTML = `<button class="nextButton htmlColor1" onclick=btn()>Next</button>`;
        removeValue.innerHTML = "";

    } else if (randomValue == 28 && inputAnswer !== htmlAnswerArr[28].A28) {
        displayAnswer.innerHTML = `<textarea name="text" class="answer_textarea" id="input">
&ltp id="special"&gtI want to be a special paragraph!&lt/p&gt</textarea>`;
        incorrectValue.innerHTML = "Incorrect..";
        nextButton.innerHTML = `<button class="nextButton htmlColor1" onclick=btn()>Next</button>`;
        removeValue.innerHTML = "";



    } else if (randomValue == 29 && inputAnswer == htmlAnswerArr[29].A29) {
        correctValue.innerHTML = "Correct..";
        displayAnswer.innerHTML = `<textarea name="text" class="answer_textarea" id="input">Good Job :) </textarea>`;
        nextButton.innerHTML = `<button class="nextButton htmlColor1" onclick=btn()>Next</button>`;
        removeValue.innerHTML = "";

    } else if (randomValue == 29 && inputAnswer !== htmlAnswerArr[29].A29) {
        displayAnswer.innerHTML = `<textarea name="text" class="answer_textarea" id="input">
&ltp class="intro"&gtThis is a paragraph.&lt/p&gt 
&ltp class="intro"&gtThis is a paragraph.&lt/p&gt</textarea>`;
        incorrectValue.innerHTML = "Incorrect..";
        nextButton.innerHTML = `<button class="nextButton htmlColor1" onclick=btn()>Next</button>`;
        removeValue.innerHTML = "";



    } else if (randomValue == 30 && inputAnswer == htmlAnswerArr[30].A30) {
        correctValue.innerHTML = "Correct..";
        displayAnswer.innerHTML = `<textarea name="text" class="answer_textarea" id="input">Good Job :) </textarea>`;
        nextButton.innerHTML = `<button class="nextButton htmlColor1" onclick=btn()>Next</button>`;
        removeValue.innerHTML = "";

    } else if (randomValue == 30 && inputAnswer !== htmlAnswerArr[30].A30) {
        displayAnswer.innerHTML = `<textarea name="text" class="answer_textarea" id="input">
&lta href="https://www.google.com"&gtVisit our HTML tutorial.&lt/a&gt</textarea>`;
        incorrectValue.innerHTML = "Incorrect..";
        nextButton.innerHTML = `<button class="nextButton htmlColor1" onclick=btn()>Next</button>`;
        removeValue.innerHTML = "";



    } else if (randomValue == 31 && inputAnswer == htmlAnswerArr[31].A31) {
        correctValue.innerHTML = "Correct..";
        displayAnswer.innerHTML = `<textarea name="text" class="answer_textarea" id="input">Good Job :) </textarea>`;
        nextButton.innerHTML = `<button class="nextButton htmlColor1" onclick=btn()>Next</button>`;
        removeValue.innerHTML = "";

    } else if (randomValue == 31 && inputAnswer !== htmlAnswerArr[31].A31) {
        displayAnswer.innerHTML = `<textarea name="text" class="answer_textarea" id="input">
&lta href="html_images.asp"&gtHTML Images&lt/a&gt</textarea>`;
        incorrectValue.innerHTML = "Incorrect..";
        nextButton.innerHTML = `<button class="nextButton htmlColor1" onclick=btn()>Next</button>`;
        removeValue.innerHTML = "";



    } else if (randomValue == 32 && inputAnswer == htmlAnswerArr[32].A32) {
        correctValue.innerHTML = "Correct..";
        displayAnswer.innerHTML = `<textarea name="text" class="answer_textarea" id="input">Good Job :) </textarea>`;
        nextButton.innerHTML = `<button class="nextButton htmlColor1" onclick=btn()>Next</button>`;
        removeValue.innerHTML = "";

    } else if (randomValue == 32 && inputAnswer !== htmlAnswerArr[32].A32) {
        displayAnswer.innerHTML = `<textarea name="text" class="answer_textarea" id="input">
&lta href="html_images.asp" target="_blank"&gtHTML Images&lt/a&gt</textarea>`;
        incorrectValue.innerHTML = "Incorrect..";
        nextButton.innerHTML = `<button class="nextButton htmlColor1" onclick=btn()>Next</button>`;
        removeValue.innerHTML = "";



    } else if (randomValue == 33 && inputAnswer == htmlAnswerArr[33].A33) {
        correctValue.innerHTML = "Correct..";
        displayAnswer.innerHTML = `<textarea name="text" class="answer_textarea" id="input">Good Job :) </textarea>`;
        nextButton.innerHTML = `<button class="nextButton htmlColor1" onclick=btn()>Next</button>`;
        removeValue.innerHTML = "";

    } else if (randomValue == 33 && inputAnswer !== htmlAnswerArr[33].A33) {
        displayAnswer.innerHTML = `<textarea name="text" class="answer_textarea" id="input">
&lta href="html_images.asp" target="_blank" style="text-decoration:none"&gtHTML Images&lt/a&gt</textarea>`;
        incorrectValue.innerHTML = "Incorrect..";
        nextButton.innerHTML = `<button class="nextButton htmlColor1" onclick=btn()>Next</button>`;
        removeValue.innerHTML = "";



    } else if (randomValue == 34 && inputAnswer == htmlAnswerArr[34].A34) {
        correctValue.innerHTML = "Correct..";
        displayAnswer.innerHTML = `<textarea name="text" class="answer_textarea" id="input">Good Job :) </textarea>`;
        nextButton.innerHTML = `<button class="nextButton htmlColor1" onclick=btn()>Next</button>`;
        removeValue.innerHTML = "";

    } else if (randomValue == 34 && inputAnswer !== htmlAnswerArr[34].A34) {
        displayAnswer.innerHTML = `<textarea name="text" class="answer_textarea" id="input">
&lta href="https://www.google.com"&gt 
    &ltimg src="smiley.gif" alt="HTML tutorial" style="width:42px;height:42px;border:0"&gt
&lt/a&gt</textarea>`;
        incorrectValue.innerHTML = "Incorrect..";
        nextButton.innerHTML = `<button class="nextButton htmlColor1" onclick=btn()>Next</button>`;
        removeValue.innerHTML = "";



    } else if (randomValue == 35 && inputAnswer == htmlAnswerArr[35].A35) {
        correctValue.innerHTML = "Correct..";
        displayAnswer.innerHTML = `<textarea name="text" class="answer_textarea" id="input">Good Job :) </textarea>`;
        nextButton.innerHTML = `<button class="nextButton htmlColor1" onclick=btn()>Next</button>`;
        removeValue.innerHTML = "";

    } else if (randomValue == 35 && inputAnswer !== htmlAnswerArr[35].A35) {
        displayAnswer.innerHTML = `<textarea name="text" class="answer_textarea" id="input">
&ltimg src="programming.gif" alt="Computer Man" width="96" height="96"&gt</textarea>`;
        incorrectValue.innerHTML = "Incorrect..";
        nextButton.innerHTML = `<button class="nextButton htmlColor1" onclick=btn()>Next</button>`;
        removeValue.innerHTML = "";



    } else if (randomValue == 36 && inputAnswer == htmlAnswerArr[36].A36) {
        correctValue.innerHTML = "Correct..";
        displayAnswer.innerHTML = `<textarea name="text" class="answer_textarea" id="input">Good Job :) </textarea>`;
        nextButton.innerHTML = `<button class="nextButton htmlColor1" onclick=btn()>Next</button>`;
        removeValue.innerHTML = "";

    } else if (randomValue == 36 && inputAnswer !== htmlAnswerArr[36].A36) {
        displayAnswer.innerHTML = `<textarea name="text" class="answer_textarea" id="input">
&ltimg src="html5.gif" alt="HTML5 Icon" style="width:256px;height:256px;"&gt</textarea>`;
        incorrectValue.innerHTML = "Incorrect..";
        nextButton.innerHTML = `<button class="nextButton htmlColor1" onclick=btn()>Next</button>`;
        removeValue.innerHTML = "";

        
        

    } else if (randomValue == 37 && inputAnswer == htmlAnswerArr[37].A37) {
        correctValue.innerHTML = "Correct..";
        displayAnswer.innerHTML = `<textarea name="text" class="answer_textarea" id="input">Good Job :) </textarea>`;
        nextButton.innerHTML = `<button class="nextButton htmlColor1" onclick=btn()>Next</button>`;
        removeValue.innerHTML = "";

    } else if (randomValue == 37 && inputAnswer !== htmlAnswerArr[37].A37) {
        displayAnswer.innerHTML = `<textarea name="text" class="answer_textarea" id="input">
&ltimg src="smiley.gif" alt="Smiley face" style="float:left;width:42px;height:42px;"&gt</textarea>`;
        incorrectValue.innerHTML = "Incorrect..";
        nextButton.innerHTML = `<button class="nextButton htmlColor1" onclick=btn()>Next</button>`;
        removeValue.innerHTML = "";



    } else if (randomValue == 38 && inputAnswer == htmlAnswerArr[38].A38) {
        correctValue.innerHTML = "Correct..";
        displayAnswer.innerHTML = `<textarea name="text" class="answer_textarea" id="input">Good Job :) </textarea>`;
        nextButton.innerHTML = `<button class="nextButton htmlColor1" onclick=btn()>Next</button>`;
        removeValue.innerHTML = "";

    } else if (randomValue == 38 && inputAnswer !== htmlAnswerArr[38].A38) {
        displayAnswer.innerHTML = `<textarea name="text" class="answer_textarea" id="input">
&ltimg src="pic_trulli.jpg" style="width:304px;height:228px;"&gt</textarea>`;
        incorrectValue.innerHTML = "Incorrect..";
        nextButton.innerHTML = `<button class="nextButton htmlColor1" onclick=btn()>Next</button>`;
        removeValue.innerHTML = "";



    } else if (randomValue == 39 && inputAnswer == htmlAnswerArr[39].A39) {
        correctValue.innerHTML = "Correct..";
        displayAnswer.innerHTML = `<textarea name="text" class="answer_textarea" id="input">Good Job :) </textarea>`;
        nextButton.innerHTML = `<button class="nextButton htmlColor1" onclick=btn()>Next</button>`;
        removeValue.innerHTML = "";

    } else if (randomValue == 39 && inputAnswer !== htmlAnswerArr[39].A39) {
        displayAnswer.innerHTML = `<textarea name="text" class="answer_textarea" id="input">
&ltimg src="google.jpg" alt="google.com" width="135" height="50"&gt</textarea>`;
        incorrectValue.innerHTML = "Incorrect..";
        nextButton.innerHTML = `<button class="nextButton htmlColor1" onclick=btn()>Next</button>`;
        removeValue.innerHTML = "";



    } else if (randomValue == 40 && inputAnswer == htmlAnswerArr[40].A40) {
        correctValue.innerHTML = "Correct..";
        displayAnswer.innerHTML = `<textarea name="text" class="answer_textarea" id="input">Good Job :) </textarea>`;
        nextButton.innerHTML = `<button class="nextButton htmlColor1" onclick=btn()>Next</button>`;
        removeValue.innerHTML = "";

    } else if (randomValue == 40 && inputAnswer !== htmlAnswerArr[40].A40) {
        displayAnswer.innerHTML = `<textarea name="text" class="answer_textarea" id="input">
&ltcaption&gtNames&lt/caption&gt</textarea>`;
        incorrectValue.innerHTML = "Incorrect..";
        nextButton.innerHTML = `<button class="nextButton htmlColor1" onclick=btn()>Next</button>`;
        removeValue.innerHTML = "";



    } else if (randomValue == 41 && inputAnswer == htmlAnswerArr[41].A41) {
        correctValue.innerHTML = "Correct..";
        displayAnswer.innerHTML = `<textarea name="text" class="answer_textarea" id="input">Good Job :) </textarea>`;
        nextButton.innerHTML = `<button class="nextButton htmlColor1" onclick=btn()>Next</button>`;
        removeValue.innerHTML = "";

    } else if (randomValue == 41 && inputAnswer !== htmlAnswerArr[41].A41) {
        displayAnswer.innerHTML = `<textarea name="text" class="answer_textarea" id="input">
&ltdl&gt 
    &ltdt&gtCoffee&lt/dt&gt 
    &ltdd&gt- black hot drink&lt/dd&gt 
    &ltdt&gtMilk&lt/dt&gt 
    &ltdd&gt- white cold drink&lt/dd&gt 
&lt/dl&gt</textarea>`;
        incorrectValue.innerHTML = "Incorrect..";
        nextButton.innerHTML = `<button class="nextButton htmlColor1" onclick=btn()>Next</button>`;
        removeValue.innerHTML = "";



    } else if (randomValue == 42 && inputAnswer == htmlAnswerArr[42].A42) {
        correctValue.innerHTML = "Correct..";
        displayAnswer.innerHTML = `<textarea name="text" class="answer_textarea" id="input">Good Job :) </textarea>`;
        nextButton.innerHTML = `<button class="nextButton htmlColor1" onclick=btn()>Next</button>`;
        removeValue.innerHTML = "";

    } else if (randomValue == 42 && inputAnswer !== htmlAnswerArr[42].A42) {
        displayAnswer.innerHTML = `<textarea name="text" class="answer_textarea" id="input">
&ltinput type="text" name="firstname" value="John" disabled&gt</textarea>`;
        incorrectValue.innerHTML = "Incorrect..";
        nextButton.innerHTML = `<button class="nextButton htmlColor1" onclick=btn()>Next</button>`;
        removeValue.innerHTML = "";



    } else if (randomValue == 43 && inputAnswer == htmlAnswerArr[43].A43) {
        correctValue.innerHTML = "Correct..";
        displayAnswer.innerHTML = `<textarea name="text" class="answer_textarea" id="input">Good Job :) </textarea>`;
        nextButton.innerHTML = `<button class="nextButton htmlColor1" onclick=btn()>Next</button>`;
        removeValue.innerHTML = "";

    } else if (randomValue == 43 && inputAnswer !== htmlAnswerArr[43].A43) {
        displayAnswer.innerHTML = `<textarea name="text" class="answer_textarea" id="input">
&ltinput type="button" value="OK"&gt</textarea>`;
        incorrectValue.innerHTML = "Incorrect..";
        nextButton.innerHTML = `<button class="nextButton htmlColor1" onclick=btn()>Next</button>`;
        removeValue.innerHTML = "";



    } else if (randomValue == 44 && inputAnswer == htmlAnswerArr[44].A44) {
        correctValue.innerHTML = "Correct..";
        displayAnswer.innerHTML = `<textarea name="text" class="answer_textarea" id="input">Good Job :) </textarea>`;
        nextButton.innerHTML = `<button class="nextButton htmlColor1" onclick=btn()>Next</button>`;
        removeValue.innerHTML = "";

    } else if (randomValue == 44 && inputAnswer !== htmlAnswerArr[44].A44) {
        displayAnswer.innerHTML = `<textarea name="text" class="answer_textarea" id="input">
&ltform&gt 
    &ltinput type="radio" name="gender" value="male"&gt Male 
    &ltinput type="radio" name="gender" value="female"&gt Female 
&lt/form&gt</textarea>`;
        incorrectValue.innerHTML = "Incorrect..";
        nextButton.innerHTML = `<button class="nextButton htmlColor1" onclick=btn()>Next</button>`;
        removeValue.innerHTML = "";



    } else if (randomValue == 45 && inputAnswer == htmlAnswerArr[45].A45) {
        correctValue.innerHTML = "Correct..";
        displayAnswer.innerHTML = `<textarea name="text" class="answer_textarea" id="input">Good Job :) </textarea>`;
        nextButton.innerHTML = `<button class="nextButton htmlColor1" onclick=btn()>Next</button>`;
        removeValue.innerHTML = "";

    } else if (randomValue == 45 && inputAnswer !== htmlAnswerArr[45].A45) {
        displayAnswer.innerHTML = `<textarea name="text" class="answer_textarea" id="input">
&ltselect name="cars"&gt 
    &ltoption value="volvo"&gtVolvo&lt/option&gt 
    &ltoption value="ford"&gtFord&lt/option&gt 
    &ltoption value="fiat"&gtFiat&lt/option&gt 
    &ltoption value="audi"&gtAudi&lt/option&gt 
&lt/select&gt</textarea>`;
        incorrectValue.innerHTML = "Incorrect..";
        nextButton.innerHTML = `<button class="nextButton htmlColor1" onclick=btn()>Next</button>`;
        removeValue.innerHTML = "";



    } else if (randomValue == 46 && inputAnswer == htmlAnswerArr[46].A46) {
        correctValue.innerHTML = "Correct..";
        displayAnswer.innerHTML = `<textarea name="text" class="answer_textarea" id="input">Good Job :) </textarea>`;
        nextButton.innerHTML = `<button class="nextButton htmlColor1" onclick=btn()>Next</button>`;
        removeValue.innerHTML = "";

    } else if (randomValue == 46 && inputAnswer !== htmlAnswerArr[46].A46) {
        displayAnswer.innerHTML = `<textarea name="text" class="answer_textarea" id="input">
&lttextarea name="note"&gt&lt/textarea&gt</textarea>`;
        incorrectValue.innerHTML = "Incorrect..";
        nextButton.innerHTML = `<button class="nextButton htmlColor1" onclick=btn()>Next</button>`;
        removeValue.innerHTML = "";



    } else if (randomValue == 47 && inputAnswer == htmlAnswerArr[47].A47) {
        correctValue.innerHTML = "Correct..";
        displayAnswer.innerHTML = `<textarea name="text" class="answer_textarea" id="input">Good Job :) </textarea>`;
        nextButton.innerHTML = `<button class="nextButton htmlColor1" onclick=btn()>Next</button>`;
        removeValue.innerHTML = "";

    } else if (randomValue == 47 && inputAnswer !== htmlAnswerArr[47].A47) {
        displayAnswer.innerHTML = `<textarea name="text" class="answer_textarea" id="input">
&ltbutton type="button" onclick="alert("Hello World!")"&gt Click Me!
&lt/button&gt</textarea>`;
        incorrectValue.innerHTML = "Incorrect..";
        nextButton.innerHTML = `<button class="nextButton htmlColor1" onclick=btn()>Next</button>`;
        removeValue.innerHTML = "";



    } else if (randomValue == 48 && inputAnswer == htmlAnswerArr[48].A48) {
        correctValue.innerHTML = "Correct..";
        displayAnswer.innerHTML = `<textarea name="text" class="answer_textarea" id="input">Good Job :) </textarea>`;
        nextButton.innerHTML = `<button class="nextButton htmlColor1" onclick=btn()>Next</button>`;
        removeValue.innerHTML = "";

    } else if (randomValue == 48 && inputAnswer !== htmlAnswerArr[48].A48) {
        displayAnswer.innerHTML = `<textarea name="text" class="answer_textarea" id="input">
&ltinput type="text"&gt</textarea>`;
        incorrectValue.innerHTML = "Incorrect..";
        nextButton.innerHTML = `<button class="nextButton htmlColor1" onclick=btn()>Next</button>`;
        removeValue.innerHTML = "";



    } else if (randomValue == 49 && inputAnswer == htmlAnswerArr[49].A49) {
        correctValue.innerHTML = "Correct..";
        displayAnswer.innerHTML = `<textarea name="text" class="answer_textarea" id="input">Good Job :) </textarea>`;
        nextButton.innerHTML = `<button class="nextButton htmlColor1" onclick=btn()>Next</button>`;
        removeValue.innerHTML = "";

    } else if (randomValue == 49 && inputAnswer !== htmlAnswerArr[49].A49) {
        displayAnswer.innerHTML = `<textarea name="text" class="answer_textarea" id="input">
&ltinput type="submit"&gt</textarea>`;
        incorrectValue.innerHTML = "Incorrect..";
        nextButton.innerHTML = `<button class="nextButton htmlColor1" onclick=btn()>Next</button>`;
        removeValue.innerHTML = "";



    } else if (randomValue == 50 && inputAnswer == htmlAnswerArr[50].A50) {
        correctValue.innerHTML = "Correct..";
        displayAnswer.innerHTML = `<textarea name="text" class="answer_textarea" id="input">Good Job :) </textarea>`;
        nextButton.innerHTML = `<button class="nextButton htmlColor1" onclick=btn()>Next</button>`;
        removeValue.innerHTML = "";

    } else if (randomValue == 50 && inputAnswer !== htmlAnswerArr[50].A50) {
        displayAnswer.innerHTML = `<textarea name="text" class="answer_textarea" id="input">
&ltinput type="text" name="firstname" value="John"&gt</textarea>`;
        incorrectValue.innerHTML = "Incorrect..";
        nextButton.innerHTML = `<button class="nextButton htmlColor1" onclick=btn()>Next</button>`;
        removeValue.innerHTML = "";



    } else if (randomValue == 51 && inputAnswer == htmlAnswerArr[51].A51) {
        correctValue.innerHTML = "Correct..";
        displayAnswer.innerHTML = `<textarea name="text" class="answer_textarea" id="input">Good Job :) </textarea>`;
        nextButton.innerHTML = `<button class="nextButton htmlColor1" onclick=btn()>Next</button>`;
        removeValue.innerHTML = "";

    } else if (randomValue == 51 && inputAnswer !== htmlAnswerArr[51].A51) {
        displayAnswer.innerHTML = `<textarea name="text" class="answer_textarea" id="input">
&ltinput type="text" name="firstname" value="John" size="40"&gt</textarea>`;
        incorrectValue.innerHTML = "Incorrect..";
        nextButton.innerHTML = `<button class="nextButton htmlColor1" onclick=btn()>Next</button>`;
        removeValue.innerHTML = "";



    } else if (randomValue == 52 && inputAnswer == htmlAnswerArr[52].A52) {
        correctValue.innerHTML = "Correct..";
        displayAnswer.innerHTML = `<textarea name="text" class="answer_textarea" id="input">Good Job :) </textarea>`;
        nextButton.innerHTML = `<button class="nextButton htmlColor1" onclick=btn()>Next</button>`;
        removeValue.innerHTML = "";

    } else if (randomValue == 52 && inputAnswer !== htmlAnswerArr[52].A52) {
        displayAnswer.innerHTML = `<textarea name="text" class="answer_textarea" id="input">
&ltinput type="text" name="fname" placeholder="First name"&gt</textarea>`;
        incorrectValue.innerHTML = "Incorrect..";
        nextButton.innerHTML = `<button class="nextButton htmlColor1" onclick=btn()>Next</button>`;
        removeValue.innerHTML = "";



    } else if (randomValue == 53 && inputAnswer == htmlAnswerArr[53].A53) {
        correctValue.innerHTML = "Correct..";
        displayAnswer.innerHTML = `<textarea name="text" class="answer_textarea" id="input">Good Job :) </textarea>`;
        nextButton.innerHTML = `<button class="nextButton htmlColor1" onclick=btn()>Next</button>`;
        removeValue.innerHTML = "";

    } else if (randomValue == 53 && inputAnswer !== htmlAnswerArr[53].A53) {
        displayAnswer.innerHTML = `<textarea name="text" class="answer_textarea" id="input">
&ltp&gtThis is a paragraph.&lt/p&gt</textarea>`;
        incorrectValue.innerHTML = "Incorrect..";
        nextButton.innerHTML = `<button class="nextButton htmlColor1" onclick=btn()>Next</button>`;
        removeValue.innerHTML = "";



    }

    else {
        incorrectValue.innerHTML = "Incorrect..";
        nextButton.innerHTML = `<button class="nextButton htmlColor1" onclick=btn()>Next</button>`;
        removeValue.innerHTML = "";
    }

}
window.submit = submit; /* to make submit global*/





function htmlButton() {
    test = document.getElementById("addedQuestion").innerHTML = htmlQuestionArr[randomValue]; /* giving random question to html */;

    return test;
}
window.htmlButton = htmlButton;
function showTest() {
    var inputBox = document.getElementById("remove").style.display = "block";
    return inputBox;
}
window.showTest = showTest;


function btn() {
    randomValue = Math.floor(Math.random() * htmlQuestionArr.length); /* buton next in html to make a next random question*/
    document.getElementById("addedQuestion").innerHTML = htmlQuestionArr[randomValue]; /* giving random question to html */
    document.getElementById("elementButton").innerHTML = "";/* to clean elementButton*/
    document.getElementById("remove").innerHTML = `<textarea name="text" class="answer_textarea" id="input"></textarea>
    </br><!--id="input"-->
      <button  class="answer_submit htmlColor1" id = "htmlStartButton" onclick="submit()" >Submit</button>`;/* to create next text area and Submit button. */
    document.getElementById("checkingAnswer").innerHTML = "";
    document.getElementById("showingAnswer").innerHTML = "";
}
window.btn = btn;/* to make submit global*/








































































var cssRandomValue = Math.floor(Math.random() * cssQuestionArr.length); /* taking random question from htmlQuestionArr*/


function cssSubmit() { /* function for html submit button*/

    var cssInputAnswer = input.value.replace(/\s+/g, ``); /*replace(/\s+/g, `` is removing all spaces. Avoid checking all the spaces to compare text*/
    var cssCorrectValue = document.getElementById("cssCheckingAnswer"); /* making getElementById code shorter*/
    var cssIncorrectValue = document.getElementById("cssCheckingAnswer");
    var cssDisplayAnswer = document.getElementById("cssShowingAnswer");
    var cssNextButton = document.getElementById("cssElementButton");
    var cssRemoveValue = document.getElementById("cssRemove");

    if (cssRandomValue == 0 && cssInputAnswer == cssAnswerArr[0].A0) { /* checking if cssRandomValue is 0 and if putting answer the same as cssAnswerArr*//*A0 is just that I can track answer numbers when adding questions and answers*/
        cssCorrectValue.innerHTML = "Correct..";
        cssDisplayAnswer.innerHTML = `<textarea name="text" class="answer_textarea" id="input">
        Good Job :) </textarea>`;
        cssNextButton.innerHTML = `<button class="nextButton cssColor1" id="cssNextButton" onclick=cssBtn()>Next</button>`; /* creating next button with cssBtn()function*/
        cssRemoveValue.innerHTML = "";/* removing in html answer*/



    } else if (cssRandomValue == 0 && cssInputAnswer !== cssAnswerArr[0].A0) {/*  if random value not == then giving then display the answere.*/
        cssDisplayAnswer.innerHTML = `<textarea name="text" class="answer_textarea" id="input">
p {
    color: red;
    }
          </textarea>`;
        cssIncorrectValue.innerHTML = "Incorrect..";
        cssNextButton.innerHTML = `<button class="nextButton cssColor1" id="cssNextButton" onclick=cssBtn()>Next</button>`;
        cssRemoveValue.innerHTML = "";



    } else if (cssRandomValue == 1 && cssInputAnswer == cssAnswerArr[1].A1) {
        cssCorrectValue.innerHTML = "Correct..";
        cssDisplayAnswer.innerHTML = `<textarea name="text" class="answer_textarea" id="input">
        Good Job :) </textarea>`;
        cssNextButton.innerHTML = `<button class="nextButton cssColor1" id="cssNextButton" onclick=cssBtn()>Next</button>`;
        cssRemoveValue.innerHTML = "";

    } else if (cssRandomValue == 1 && cssInputAnswer !== cssAnswerArr[1].A1) {
        cssDisplayAnswer.innerHTML = `<textarea name="text" class="answer_textarea" id="input">
.colortext {
    color: red;
    }
          </textarea>`;
        cssIncorrectValue.innerHTML = "Incorrect..";
        cssNextButton.innerHTML = `<button class="nextButton cssColor1" id="cssNextButton" onclick=cssBtn()>Next</button>`;
        cssRemoveValue.innerHTML = "";



    } else if (cssRandomValue == 2 && cssInputAnswer == cssAnswerArr[2].A2) {
        cssCorrectValue.innerHTML = "Correct..";
        cssDisplayAnswer.innerHTML = `<textarea name="text" class="answer_textarea" id="input">
        Good Job :) </textarea>`;
        cssNextButton.innerHTML = `<button class="nextButton cssColor1" id="cssNextButton" onclick=cssBtn()>Next</button>`;
        cssRemoveValue.innerHTML = "";

    } else if (cssRandomValue == 2 && cssInputAnswer !== cssAnswerArr[2].A2) {
        cssDisplayAnswer.innerHTML = `<textarea name="text" class="answer_textarea" id="input">
h1, p {
    color: red;
    }
          </textarea>`;
        cssIncorrectValue.innerHTML = "Incorrect..";
        cssNextButton.innerHTML = `<button class="nextButton cssColor1" id="cssNextButton" onclick=cssBtn()>Next</button>`;
        cssRemoveValue.innerHTML = "";



    } else if (cssRandomValue == 3 && cssInputAnswer == cssAnswerArr[3].A3) {
        cssCorrectValue.innerHTML = "Correct..";
        cssDisplayAnswer.innerHTML = `<textarea name="text" class="answer_textarea" id="input">
        Good Job :) </textarea>`;
        cssNextButton.innerHTML = `<button class="nextButton cssColor1" id="cssNextButton" onclick=cssBtn()>Next</button>`;
        cssRemoveValue.innerHTML = "";

    } else if (cssRandomValue == 3 && cssInputAnswer !== cssAnswerArr[3].A3) {
        cssDisplayAnswer.innerHTML = `<textarea name="text" class="answer_textarea" id="input">
&ltlink rel="stylesheet" type="text/css" href="mystyle.css"&gt</textarea>`;
        cssIncorrectValue.innerHTML = "Incorrect..";
        cssNextButton.innerHTML = `<button class="nextButton cssColor1" id="cssNextButton" onclick=cssBtn()>Next</button>`;
        cssRemoveValue.innerHTML = "";



    } else if (cssRandomValue == 4 && cssInputAnswer == cssAnswerArr[4].A4) {
        cssCorrectValue.innerHTML = "Correct..";
        cssDisplayAnswer.innerHTML = `<textarea name="text" class="answer_textarea" id="input">
        Good Job :) </textarea>`;
        cssNextButton.innerHTML = `<button class="nextButton cssColor1" id="cssNextButton" onclick=cssBtn()>Next</button>`;
        cssRemoveValue.innerHTML = "";

    } else if (cssRandomValue == 4 && cssInputAnswer !== cssAnswerArr[4].A4) {
        cssDisplayAnswer.innerHTML = `<textarea name="text" class="answer_textarea" id="input">
&ltstyle&gt
body {
    background-color: linen;
}
&lt/style&gt
        </textarea>`;
        cssIncorrectValue.innerHTML = "Incorrect..";
        cssNextButton.innerHTML = `<button class="nextButton cssColor1" id="cssNextButton" onclick=cssBtn()>Next</button>`;
        cssRemoveValue.innerHTML = "";



    } else if (cssRandomValue == 5 && cssInputAnswer == cssAnswerArr[5].A5) {
        cssCorrectValue.innerHTML = "Correct..";
        cssDisplayAnswer.innerHTML = `<textarea name="text" class="answer_textarea" id="input">
        Good Job :) </textarea>`;
        cssNextButton.innerHTML = `<button class="nextButton cssColor1" id="cssNextButton" onclick=cssBtn()>Next</button>`;
        cssRemoveValue.innerHTML = "";

    } else if (cssRandomValue == 5 && cssInputAnswer !== cssAnswerArr[5].A5) {
        cssDisplayAnswer.innerHTML = `<textarea name="text" class="answer_textarea" id="input">
&ltbody style="background-color: linen"&gt</textarea>`;
        cssIncorrectValue.innerHTML = "Incorrect..";
        cssNextButton.innerHTML = `<button class="nextButton cssColor1" id="cssNextButton" onclick=cssBtn()>Next</button>`;
        cssRemoveValue.innerHTML = "";



    } else if (cssRandomValue == 6 && cssInputAnswer == cssAnswerArr[6].A6) {
        cssCorrectValue.innerHTML = "Correct..";
        cssDisplayAnswer.innerHTML = `<textarea name="text" class="answer_textarea" id="input">
        Good Job :) </textarea>`;
        cssNextButton.innerHTML = `<button class="nextButton cssColor1" id="cssNextButton" onclick=cssBtn()>Next</button>`;
        cssRemoveValue.innerHTML = "";

    } else if (cssRandomValue == 6 && cssInputAnswer !== cssAnswerArr[6].A6) {
        cssDisplayAnswer.innerHTML = `<textarea name="text" class="answer_textarea" id="input">
body {
    background-color: linen;
}
h1 {
    background-color: lightblue;
}
          </textarea>`;
        cssIncorrectValue.innerHTML = "Incorrect..";
        cssNextButton.innerHTML = `<button class="nextButton cssColor1" id="cssNextButton" onclick=cssBtn()>Next</button>`;
        cssRemoveValue.innerHTML = "";



    } else if (cssRandomValue == 7 && cssInputAnswer == cssAnswerArr[7].A7) {
        cssCorrectValue.innerHTML = "Correct..";
        cssDisplayAnswer.innerHTML = `<textarea name="text" class="answer_textarea" id="input">
        Good Job :) </textarea>`;
        cssNextButton.innerHTML = `<button class="nextButton cssColor1" id="cssNextButton" onclick=cssBtn()>Next</button>`;
        cssRemoveValue.innerHTML = "";

    } else if (cssRandomValue == 7 && cssInputAnswer !== cssAnswerArr[7].A7) {
        cssDisplayAnswer.innerHTML = `<textarea name="text" class="answer_textarea" id="input">
body {
    background-image: url("paper.gif");
}
          </textarea>`;
        cssIncorrectValue.innerHTML = "Incorrect..";
        cssNextButton.innerHTML = `<button class="nextButton cssColor1" id="cssNextButton" onclick=cssBtn()>Next</button>`;
        cssRemoveValue.innerHTML = "";



    } else if (cssRandomValue == 8 && cssInputAnswer == cssAnswerArr[8].A8) {
        cssCorrectValue.innerHTML = "Correct..";
        cssDisplayAnswer.innerHTML = `<textarea name="text" class="answer_textarea" id="input">
        Good Job :) </textarea>`;
        cssNextButton.innerHTML = `<button class="nextButton cssColor1" id="cssNextButton" onclick=cssBtn()>Next</button>`;
        cssRemoveValue.innerHTML = "";

    } else if (cssRandomValue == 8 && cssInputAnswer !== cssAnswerArr[8].A8) {
        cssDisplayAnswer.innerHTML = `<textarea name="text" class="answer_textarea" id="input">
body {
    background-image: url("gradient_bg_vertical.png");
    background-repeat: repeat-y;
}
        </textarea>`;
        cssIncorrectValue.innerHTML = "Incorrect..";
        cssNextButton.innerHTML = `<button class="nextButton cssColor1" id="cssNextButton" onclick=cssBtn()>Next</button>`;
        cssRemoveValue.innerHTML = "";

        

    } else if (cssRandomValue == 9 && cssInputAnswer == cssAnswerArr[9].A9) {
        cssCorrectValue.innerHTML = "Correct..";
        cssDisplayAnswer.innerHTML = `<textarea name="text" class="answer_textarea" id="input">
        Good Job :) </textarea>`;
        cssNextButton.innerHTML = `<button class="nextButton cssColor1" id="cssNextButton" onclick=cssBtn()>Next</button>`;
        cssRemoveValue.innerHTML = "";

    } else if (cssRandomValue == 9 && cssInputAnswer !== cssAnswerArr[9].A9) {
        cssDisplayAnswer.innerHTML = `<textarea name="text" class="answer_textarea" id="input">
body {
    background-image: url("img_tree.png");
    background-repeat: no-repeat;
    background-position: top right;
}
          </textarea>`;
        cssIncorrectValue.innerHTML = "Incorrect..";
        cssNextButton.innerHTML = `<button class="nextButton cssColor1" id="cssNextButton" onclick=cssBtn()>Next</button>`;
        cssRemoveValue.innerHTML = "";



    } else if (cssRandomValue == 10 && cssInputAnswer == cssAnswerArr[10].A10) {
        cssCorrectValue.innerHTML = "Correct..";
        cssDisplayAnswer.innerHTML = `<textarea name="text" class="answer_textarea" id="input">
        Good Job :) </textarea>`;
        cssNextButton.innerHTML = `<button class="nextButton cssColor1" id="cssNextButton" onclick=cssBtn()>Next</button>`;
        cssRemoveValue.innerHTML = "";

    } else if (cssRandomValue == 10 && cssInputAnswer !== cssAnswerArr[10].A10) {
        cssDisplayAnswer.innerHTML = `<textarea name="text" class="answer_textarea" id="input">
body {
    background: url("img_tree.png") no-repeat top right;
}
          </textarea>`;
        cssIncorrectValue.innerHTML = "Incorrect..";
        cssNextButton.innerHTML = `<button class="nextButton cssColor1" id="cssNextButton" onclick=cssBtn()>Next</button>`;
        cssRemoveValue.innerHTML = "";



    } else if (cssRandomValue == 11 && cssInputAnswer == cssAnswerArr[11].A11) {
        cssCorrectValue.innerHTML = "Correct..";
        cssDisplayAnswer.innerHTML = `<textarea name="text" class="answer_textarea" id="input">
        Good Job :) </textarea>`;
        cssNextButton.innerHTML = `<button class="nextButton cssColor1" id="cssNextButton" onclick=cssBtn()>Next</button>`;
        cssRemoveValue.innerHTML = "";

    } else if (cssRandomValue == 11 && cssInputAnswer !== cssAnswerArr[11].A11) {
        cssDisplayAnswer.innerHTML = `<textarea name="text" class="answer_textarea" id="input">
p {
    border-style: dotted;
    border-width: 4px;
}
          </textarea>`;
        cssIncorrectValue.innerHTML = "Incorrect..";
        cssNextButton.innerHTML = `<button class="nextButton cssColor1" id="cssNextButton" onclick=cssBtn()>Next</button>`;
        cssRemoveValue.innerHTML = "";



    } else if (cssRandomValue == 12 && cssInputAnswer == cssAnswerArr[12].A12) {
        cssCorrectValue.innerHTML = "Correct..";
        cssDisplayAnswer.innerHTML = `<textarea name="text" class="answer_textarea" id="input">
        Good Job :) </textarea>`;
        cssNextButton.innerHTML = `<button class="nextButton cssColor1" id="cssNextButton" onclick=cssBtn()>Next</button>`;
        cssRemoveValue.innerHTML = "";

    } else if (cssRandomValue == 12 && cssInputAnswer !== cssAnswerArr[12].A12) {
        cssDisplayAnswer.innerHTML = `<textarea name="text" class="answer_textarea" id="input">
p {
    border-style: dotted;
    border-width: 4px;
    border-color: red;
}  
          </textarea>`;
        cssIncorrectValue.innerHTML = "Incorrect..";
        cssNextButton.innerHTML = `<button class="nextButton cssColor1" id="cssNextButton" onclick=cssBtn()>Next</button>`;
        cssRemoveValue.innerHTML = "";



    } else if (cssRandomValue == 13 && cssInputAnswer == cssAnswerArr[13].A13) {
        cssCorrectValue.innerHTML = "Correct..";
        cssDisplayAnswer.innerHTML = `<textarea name="text" class="answer_textarea" id="input">
        Good Job :) </textarea>`;
        cssNextButton.innerHTML = `<button class="nextButton cssColor1" id="cssNextButton" onclick=cssBtn()>Next</button>`;
        cssRemoveValue.innerHTML = "";

    } else if (cssRandomValue == 13 && cssInputAnswer !== cssAnswerArr[13].A13) {
        cssDisplayAnswer.innerHTML = `<textarea name="text" class="answer_textarea" id="input">
p {
    border-top-style: dotted;
    border-top-width: 4px;
    border-top-color: red;
}
          </textarea>`;
        cssIncorrectValue.innerHTML = "Incorrect..";
        cssNextButton.innerHTML = `<button class="nextButton cssColor1" id="cssNextButton" onclick=cssBtn()>Next</button>`;
        cssRemoveValue.innerHTML = "";



    } else if (cssRandomValue == 14 && cssInputAnswer == cssAnswerArr[14].A14) {
        cssCorrectValue.innerHTML = "Correct..";
        cssDisplayAnswer.innerHTML = `<textarea name="text" class="answer_textarea" id="input">
        Good Job :) </textarea>`;
        cssNextButton.innerHTML = `<button class="nextButton cssColor1" id="cssNextButton" onclick=cssBtn()>Next</button>`;
        cssRemoveValue.innerHTML = "";

    } else if (cssRandomValue == 14 && cssInputAnswer !== cssAnswerArr[14].A14) {
        cssDisplayAnswer.innerHTML = `<textarea name="text" class="answer_textarea" id="input">
p {
    border: 10px solid green;
}
          </textarea>`;
        cssIncorrectValue.innerHTML = "Incorrect..";
        cssNextButton.innerHTML = `<button class="nextButton cssColor1" id="cssNextButton" onclick=cssBtn()>Next</button>`;
        cssRemoveValue.innerHTML = "";



    } else if (cssRandomValue == 15 && cssInputAnswer == cssAnswerArr[15].A15) {
        cssCorrectValue.innerHTML = "Correct..";
        cssDisplayAnswer.innerHTML = `<textarea name="text" class="answer_textarea" id="input">
        Good Job :) </textarea>`;
        cssNextButton.innerHTML = `<button class="nextButton cssColor1" id="cssNextButton" onclick=cssBtn()>Next</button>`;
        cssRemoveValue.innerHTML = "";

    } else if (cssRandomValue == 15 && cssInputAnswer !== cssAnswerArr[15].A15) {
        cssDisplayAnswer.innerHTML = `<textarea name="text" class="answer_textarea" id="input">
h1 {
    margin-left: 20px;
}
          </textarea>`;
        cssIncorrectValue.innerHTML = "Incorrect..";
        cssNextButton.innerHTML = `<button class="nextButton cssColor1" id="cssNextButton" onclick=cssBtn()>Next</button>`;
        cssRemoveValue.innerHTML = "";



    } else if (cssRandomValue == 16 && cssInputAnswer == cssAnswerArr[16].A16) {
        cssCorrectValue.innerHTML = "Correct..";
        cssDisplayAnswer.innerHTML = `<textarea name="text" class="answer_textarea" id="input">
        Good Job :) </textarea>`;
        cssNextButton.innerHTML = `<button class="nextButton cssColor1" id="cssNextButton" onclick=cssBtn()>Next</button>`;
        cssRemoveValue.innerHTML = "";

    } else if (cssRandomValue == 16 && cssInputAnswer !== cssAnswerArr[16].A16) {
        cssDisplayAnswer.innerHTML = `<textarea name="text" class="answer_textarea" id="input">
h1 {
    
    margin: 25px;
}
          </textarea>`;
        cssIncorrectValue.innerHTML = "Incorrect..";
        cssNextButton.innerHTML = `<button class="nextButton cssColor1" id="cssNextButton" onclick=cssBtn()>Next</button>`;
        cssRemoveValue.innerHTML = "";



    } else if (cssRandomValue == 17 && cssInputAnswer == cssAnswerArr[17].A17) {
        cssCorrectValue.innerHTML = "Correct..";
        cssDisplayAnswer.innerHTML = `<textarea name="text" class="answer_textarea" id="input">
        Good Job :) </textarea>`;
        cssNextButton.innerHTML = `<button class="nextButton cssColor1" id="cssNextButton" onclick=cssBtn()>Next</button>`;
        cssRemoveValue.innerHTML = "";

    } else if (cssRandomValue == 17 && cssInputAnswer !== cssAnswerArr[17].A17) {
        cssDisplayAnswer.innerHTML = `<textarea name="text" class="answer_textarea" id="input">
h1 {
    
    margin: 50px 25px;
}
          </textarea>`;
        cssIncorrectValue.innerHTML = "Incorrect..";
        cssNextButton.innerHTML = `<button class="nextButton cssColor1" id="cssNextButton" onclick=cssBtn()>Next</button>`;
        cssRemoveValue.innerHTML = "";



    } else if (cssRandomValue == 18 && cssInputAnswer == cssAnswerArr[18].A18) {
        cssCorrectValue.innerHTML = "Correct..";
        cssDisplayAnswer.innerHTML = `<textarea name="text" class="answer_textarea" id="input">
        Good Job :) </textarea>`;
        cssNextButton.innerHTML = `<button class="nextButton cssColor1" id="cssNextButton" onclick=cssBtn()>Next</button>`;
        cssRemoveValue.innerHTML = "";

    } else if (cssRandomValue == 18 && cssInputAnswer !== cssAnswerArr[18].A18) {
        cssDisplayAnswer.innerHTML = `<textarea name="text" class="answer_textarea" id="input">
h1 {
    margin: auto;
}
          </textarea>`;
        cssIncorrectValue.innerHTML = "Incorrect..";
        cssNextButton.innerHTML = `<button class="nextButton cssColor1" id="cssNextButton" onclick=cssBtn()>Next</button>`;
        cssRemoveValue.innerHTML = "";



    } else if (cssRandomValue == 19 && cssInputAnswer == cssAnswerArr[19].A19) {
        cssCorrectValue.innerHTML = "Correct..";
        cssDisplayAnswer.innerHTML = `<textarea name="text" class="answer_textarea" id="input">
        Good Job :) </textarea>`;
        cssNextButton.innerHTML = `<button class="nextButton cssColor1" id="cssNextButton" onclick=cssBtn()>Next</button>`;
        cssRemoveValue.innerHTML = "";

    } else if (cssRandomValue == 19 && cssInputAnswer !== cssAnswerArr[19].A19) {
        cssDisplayAnswer.innerHTML = `<textarea name="text" class="answer_textarea" id="input">
p {
    padding-top: 30px;
}
          </textarea>`;
        cssIncorrectValue.innerHTML = "Incorrect..";
        cssNextButton.innerHTML = `<button class="nextButton cssColor1" id="cssNextButton" onclick=cssBtn()>Next</button>`;
        cssRemoveValue.innerHTML = "";



    } else if (cssRandomValue == 20 && cssInputAnswer == cssAnswerArr[20].A20) {
        cssCorrectValue.innerHTML = "Correct..";
        cssDisplayAnswer.innerHTML = `<textarea name="text" class="answer_textarea" id="input">
        Good Job :) </textarea>`;
        cssNextButton.innerHTML = `<button class="nextButton cssColor1" id="cssNextButton" onclick=cssBtn()>Next</button>`;
        cssRemoveValue.innerHTML = "";

    } else if (cssRandomValue == 20 && cssInputAnswer !== cssAnswerArr[20].A20) {
        cssDisplayAnswer.innerHTML = `<textarea name="text" class="answer_textarea" id="input">
p {
    background-color: lightblue;
    padding: 50px;
}
          </textarea>`;
        cssIncorrectValue.innerHTML = "Incorrect..";
        cssNextButton.innerHTML = `<button class="nextButton cssColor1" id="cssNextButton" onclick=cssBtn()>Next</button>`;
        cssRemoveValue.innerHTML = "";



    } else if (cssRandomValue == 21 && cssInputAnswer == cssAnswerArr[21].A21) {
        cssCorrectValue.innerHTML = "Correct..";
        cssDisplayAnswer.innerHTML = `<textarea name="text" class="answer_textarea" id="input">
        Good Job :) </textarea>`;
        cssNextButton.innerHTML = `<button class="nextButton cssColor1" id="cssNextButton" onclick=cssBtn()>Next</button>`;
        cssRemoveValue.innerHTML = "";

    } else if (cssRandomValue == 21 && cssInputAnswer !== cssAnswerArr[21].A21) {
        cssDisplayAnswer.innerHTML = `<textarea name="text" class="answer_textarea" id="input">
p {
    background-color: lightblue;
    padding: 25px 50px;
}
          </textarea>`;
        cssIncorrectValue.innerHTML = "Incorrect..";
        cssNextButton.innerHTML = `<button class="nextButton cssColor1" id="cssNextButton" onclick=cssBtn()>Next</button>`;
        cssRemoveValue.innerHTML = "";



    } else if (cssRandomValue == 22 && cssInputAnswer == cssAnswerArr[22].A22) {
        cssCorrectValue.innerHTML = "Correct..";
        cssDisplayAnswer.innerHTML = `<textarea name="text" class="answer_textarea" id="input">
        Good Job :) </textarea>`;
        cssNextButton.innerHTML = `<button class="nextButton cssColor1" id="cssNextButton" onclick=cssBtn()>Next</button>`;
        cssRemoveValue.innerHTML = "";

    } else if (cssRandomValue == 22 && cssInputAnswer !== cssAnswerArr[22].A22) {
        cssDisplayAnswer.innerHTML = `<textarea name="text" class="answer_textarea" id="input">
h1 {
    height: 100px;
}
          </textarea>`;
        cssIncorrectValue.innerHTML = "Incorrect..";
        cssNextButton.innerHTML = `<button class="nextButton cssColor1" id="cssNextButton" onclick=cssBtn()>Next</button>`;
        cssRemoveValue.innerHTML = "";



    } else if (cssRandomValue == 23 && cssInputAnswer == cssAnswerArr[23].A23) {
        cssCorrectValue.innerHTML = "Correct..";
        cssDisplayAnswer.innerHTML = `<textarea name="text" class="answer_textarea" id="input">
        Good Job :) </textarea>`;
        cssNextButton.innerHTML = `<button class="nextButton cssColor1" id="cssNextButton" onclick=cssBtn()>Next</button>`;
        cssRemoveValue.innerHTML = "";

    } else if (cssRandomValue == 23 && cssInputAnswer !== cssAnswerArr[23].A23) {
        cssDisplayAnswer.innerHTML = `<textarea name="text" class="answer_textarea" id="input">
h1 {
    width: 50%;
}
          </textarea>`;
        cssIncorrectValue.innerHTML = "Incorrect..";
        cssNextButton.innerHTML = `<button class="nextButton cssColor1" id="cssNextButton" onclick=cssBtn()>Next</button>`;
        cssRemoveValue.innerHTML = "";



    } else if (cssRandomValue == 24 && cssInputAnswer == cssAnswerArr[24].A24) {
        cssCorrectValue.innerHTML = "Correct..";
        cssDisplayAnswer.innerHTML = `<textarea name="text" class="answer_textarea" id="input">
        Good Job :) </textarea>`;
        cssNextButton.innerHTML = `<button class="nextButton cssColor1" id="cssNextButton" onclick=cssBtn()>Next</button>`;
        cssRemoveValue.innerHTML = "";

    } else if (cssRandomValue == 24 && cssInputAnswer !== cssAnswerArr[24].A24) {
        cssDisplayAnswer.innerHTML = `<textarea name="text" class="answer_textarea" id="input">
div {
    width: 200px;
}
          </textarea>`;
        cssIncorrectValue.innerHTML = "Incorrect..";
        cssNextButton.innerHTML = `<button class="nextButton cssColor1" id="cssNextButton" onclick=cssBtn()>Next</button>`;
        cssRemoveValue.innerHTML = "";



    } else if (cssRandomValue == 25 && cssInputAnswer == cssAnswerArr[25].A25) {
        cssCorrectValue.innerHTML = "Correct..";
        cssDisplayAnswer.innerHTML = `<textarea name="text" class="answer_textarea" id="input">
        Good Job :) </textarea>`;
        cssNextButton.innerHTML = `<button class="nextButton cssColor1" id="cssNextButton" onclick=cssBtn()>Next</button>`;
        cssRemoveValue.innerHTML = "";

    } else if (cssRandomValue == 25 && cssInputAnswer !== cssAnswerArr[25].A25) {
        cssDisplayAnswer.innerHTML = `<textarea name="text" class="answer_textarea" id="input">
div {
    padding: 25px;
}
          </textarea>`;
        cssIncorrectValue.innerHTML = "Incorrect..";
        cssNextButton.innerHTML = `<button class="nextButton cssColor1" id="cssNextButton" onclick=cssBtn()>Next</button>`;
        cssRemoveValue.innerHTML = "";



    } else if (cssRandomValue == 26 && cssInputAnswer == cssAnswerArr[26].A26) {
        cssCorrectValue.innerHTML = "Correct..";
        cssDisplayAnswer.innerHTML = `<textarea name="text" class="answer_textarea" id="input">
        Good Job :) </textarea>`;
        cssNextButton.innerHTML = `<button class="nextButton cssColor1" id="cssNextButton" onclick=cssBtn()>Next</button>`;
        cssRemoveValue.innerHTML = "";

    } else if (cssRandomValue == 26 && cssInputAnswer !== cssAnswerArr[26].A26) {
        cssDisplayAnswer.innerHTML = `<textarea name="text" class="answer_textarea" id="input">
div {
    border: 25px solid navy;
}
          </textarea>`;
        cssIncorrectValue.innerHTML = "Incorrect..";
        cssNextButton.innerHTML = `<button class="nextButton cssColor1" id="cssNextButton" onclick=cssBtn()>Next</button>`;
        cssRemoveValue.innerHTML = "";



    } else if (cssRandomValue == 27 && cssInputAnswer == cssAnswerArr[27].A27) {
        cssCorrectValue.innerHTML = "Correct..";
        cssDisplayAnswer.innerHTML = `<textarea name="text" class="answer_textarea" id="input">
        Good Job :) </textarea>`;
        cssNextButton.innerHTML = `<button class="nextButton cssColor1" id="cssNextButton" onclick=cssBtn()>Next</button>`;
        cssRemoveValue.innerHTML = "";

    } else if (cssRandomValue == 27 && cssInputAnswer !== cssAnswerArr[27].A27) {
        cssDisplayAnswer.innerHTML = `<textarea name="text" class="answer_textarea" id="input">
div {
    margin: 25px;
}
          </textarea>`;
        cssIncorrectValue.innerHTML = "Incorrect..";
        cssNextButton.innerHTML = `<button class="nextButton cssColor1" id="cssNextButton" onclick=cssBtn()>Next</button>`;
        cssRemoveValue.innerHTML = "";



    } else if (cssRandomValue == 28 && cssInputAnswer == cssAnswerArr[28].A28) {
        cssCorrectValue.innerHTML = "Correct..";
        cssDisplayAnswer.innerHTML = `<textarea name="text" class="answer_textarea" id="input">
        Good Job :) </textarea>`;
        cssNextButton.innerHTML = `<button class="nextButton cssColor1" id="cssNextButton" onclick=cssBtn()>Next</button>`;
        cssRemoveValue.innerHTML = "";

    } else if (cssRandomValue == 28 && cssInputAnswer !== cssAnswerArr[28].A28) {
        cssDisplayAnswer.innerHTML = `<textarea name="text" class="answer_textarea" id="input">
p {
    outline-style: solid;
    outline-width: 5px;
}
          </textarea>`;
        cssIncorrectValue.innerHTML = "Incorrect..";
        cssNextButton.innerHTML = `<button class="nextButton cssColor1" id="cssNextButton" onclick=cssBtn()>Next</button>`;
        cssRemoveValue.innerHTML = "";



    } else if (cssRandomValue == 29 && cssInputAnswer == cssAnswerArr[29].A29) {
        cssCorrectValue.innerHTML = "Correct..";
        cssDisplayAnswer.innerHTML = `<textarea name="text" class="answer_textarea" id="input">
        Good Job :) </textarea>`;
        cssNextButton.innerHTML = `<button class="nextButton cssColor1" id="cssNextButton" onclick=cssBtn()>Next</button>`;
        cssRemoveValue.innerHTML = "";

    } else if (cssRandomValue == 29 && cssInputAnswer !== cssAnswerArr[29].A29) {
        cssDisplayAnswer.innerHTML = `<textarea name="text" class="answer_textarea" id="input">
p {
    outline-style: solid;
    outline-width: 5px;
    outline-color: green;
}
          </textarea>`;
        cssIncorrectValue.innerHTML = "Incorrect..";
        cssNextButton.innerHTML = `<button class="nextButton cssColor1" id="cssNextButton" onclick=cssBtn()>Next</button>`;
        cssRemoveValue.innerHTML = "";



    } else if (cssRandomValue == 30 && cssInputAnswer == cssAnswerArr[30].A30) {
        cssCorrectValue.innerHTML = "Correct..";
        cssDisplayAnswer.innerHTML = `<textarea name="text" class="answer_textarea" id="input">
        Good Job :) </textarea>`;
        cssNextButton.innerHTML = `<button class="nextButton cssColor1" id="cssNextButton" onclick=cssBtn()>Next</button>`;
        cssRemoveValue.innerHTML = "";

    } else if (cssRandomValue == 30 && cssInputAnswer !== cssAnswerArr[30].A30) {
        cssDisplayAnswer.innerHTML = `<textarea name="text" class="answer_textarea" id="input">
p {
    outline: red dotted 10px;
}
          </textarea>`;
        cssIncorrectValue.innerHTML = "Incorrect..";
        cssNextButton.innerHTML = `<button class="nextButton cssColor1" id="cssNextButton" onclick=cssBtn()>Next</button>`;
        cssRemoveValue.innerHTML = "";



    } else if (cssRandomValue == 31 && cssInputAnswer == cssAnswerArr[31].A31) {
        cssCorrectValue.innerHTML = "Correct..";
        cssDisplayAnswer.innerHTML = `<textarea name="text" class="answer_textarea" id="input">
        Good Job :) </textarea>`;
        cssNextButton.innerHTML = `<button class="nextButton cssColor1" id="cssNextButton" onclick=cssBtn()>Next</button>`;
        cssRemoveValue.innerHTML = "";

    } else if (cssRandomValue == 31 && cssInputAnswer !== cssAnswerArr[31].A31) {
        cssDisplayAnswer.innerHTML = `<textarea name="text" class="answer_textarea" id="input">
body {
    color: red;
}
    
h1 {
    color: blue;
}
          </textarea>`;
        cssIncorrectValue.innerHTML = "Incorrect..";
        cssNextButton.innerHTML = `<button class="nextButton cssColor1" id="cssNextButton" onclick=cssBtn()>Next</button>`;
        cssRemoveValue.innerHTML = "";



    } else if (cssRandomValue == 32 && cssInputAnswer == cssAnswerArr[32].A32) {
        cssCorrectValue.innerHTML = "Correct..";
        cssDisplayAnswer.innerHTML = `<textarea name="text" class="answer_textarea" id="input">
        Good Job :) </textarea>`;
        cssNextButton.innerHTML = `<button class="nextButton cssColor1" id="cssNextButton" onclick=cssBtn()>Next</button>`;
        cssRemoveValue.innerHTML = "";

    } else if (cssRandomValue == 32 && cssInputAnswer !== cssAnswerArr[32].A32) {
        cssDisplayAnswer.innerHTML = `<textarea name="text" class="answer_textarea" id="input">
h1 {
    text-align: center;
}
          </textarea>`;
        cssIncorrectValue.innerHTML = "Incorrect..";
        cssNextButton.innerHTML = `<button class="nextButton cssColor1" id="cssNextButton" onclick=cssBtn()>Next</button>`;
        cssRemoveValue.innerHTML = "";



    } else if (cssRandomValue == 33 && cssInputAnswer == cssAnswerArr[33].A33) {
        cssCorrectValue.innerHTML = "Correct..";
        cssDisplayAnswer.innerHTML = `<textarea name="text" class="answer_textarea" id="input">
        Good Job :) </textarea>`;
        cssNextButton.innerHTML = `<button class="nextButton cssColor1" id="cssNextButton" onclick=cssBtn()>Next</button>`;
        cssRemoveValue.innerHTML = "";

    } else if (cssRandomValue == 33 && cssInputAnswer !== cssAnswerArr[33].A33) {
        cssDisplayAnswer.innerHTML = `<textarea name="text" class="answer_textarea" id="input">
a {
    text-decoration: none;
}
          </textarea>`;
        cssIncorrectValue.innerHTML = "Incorrect..";
        cssNextButton.innerHTML = `<button class="nextButton cssColor1" id="cssNextButton" onclick=cssBtn()>Next</button>`;
        cssRemoveValue.innerHTML = "";



    } else if (cssRandomValue == 34 && cssInputAnswer == cssAnswerArr[34].A34) {
        cssCorrectValue.innerHTML = "Correct..";
        cssDisplayAnswer.innerHTML = `<textarea name="text" class="answer_textarea" id="input">
        Good Job :) </textarea>`;
        cssNextButton.innerHTML = `<button class="nextButton cssColor1" id="cssNextButton" onclick=cssBtn()>Next</button>`;
        cssRemoveValue.innerHTML = "";

    } else if (cssRandomValue == 34 && cssInputAnswer !== cssAnswerArr[34].A34) {
        cssDisplayAnswer.innerHTML = `<textarea name="text" class="answer_textarea" id="input">
h1 {
    text-transform: uppercase;
}
p {
    text-transform: capitalize;
}
          </textarea>`;
        cssIncorrectValue.innerHTML = "Incorrect..";
        cssNextButton.innerHTML = `<button class="nextButton cssColor1" id="cssNextButton" onclick=cssBtn()>Next</button>`;
        cssRemoveValue.innerHTML = "";



    } else if (cssRandomValue == 35 && cssInputAnswer == cssAnswerArr[35].A35) {
        cssCorrectValue.innerHTML = "Correct..";
        cssDisplayAnswer.innerHTML = `<textarea name="text" class="answer_textarea" id="input">
        Good Job :) </textarea>`;
        cssNextButton.innerHTML = `<button class="nextButton cssColor1" id="cssNextButton" onclick=cssBtn()>Next</button>`;
        cssRemoveValue.innerHTML = "";

    } else if (cssRandomValue == 35 && cssInputAnswer !== cssAnswerArr[35].A35) {
        cssDisplayAnswer.innerHTML = `<textarea name="text" class="answer_textarea" id="input">
p {
    text-indent: 20px;
}
          </textarea>`;
        cssIncorrectValue.innerHTML = "Incorrect..";
        cssNextButton.innerHTML = `<button class="nextButton cssColor1" id="cssNextButton" onclick=cssBtn()>Next</button>`;
        cssRemoveValue.innerHTML = "";



    } else if (cssRandomValue == 36 && cssInputAnswer == cssAnswerArr[36].A36) {
        cssCorrectValue.innerHTML = "Correct..";
        cssDisplayAnswer.innerHTML = `<textarea name="text" class="answer_textarea" id="input">
        Good Job :) </textarea>`;
        cssNextButton.innerHTML = `<button class="nextButton cssColor1" id="cssNextButton" onclick=cssBtn()>Next</button>`;
        cssRemoveValue.innerHTML = "";

    } else if (cssRandomValue == 36 && cssInputAnswer !== cssAnswerArr[36].A36) {
        cssDisplayAnswer.innerHTML = `<textarea name="text" class="answer_textarea" id="input">
body {
    font-family: "Courier New";
}
    
h1 {
    font-family: Verdana;
}
          </textarea>`;
        cssIncorrectValue.innerHTML = "Incorrect..";
        cssNextButton.innerHTML = `<button class="nextButton cssColor1" id="cssNextButton" onclick=cssBtn()>Next</button>`;
        cssRemoveValue.innerHTML = "";



    } else if (cssRandomValue == 37 && cssInputAnswer == cssAnswerArr[37].A37) {
        cssCorrectValue.innerHTML = "Correct..";
        cssDisplayAnswer.innerHTML = `<textarea name="text" class="answer_textarea" id="input">
        Good Job :) </textarea>`;
        cssNextButton.innerHTML = `<button class="nextButton cssColor1" id="cssNextButton" onclick=cssBtn()>Next</button>`;
        cssRemoveValue.innerHTML = "";

    } else if (cssRandomValue == 37 && cssInputAnswer !== cssAnswerArr[37].A37) {
        cssDisplayAnswer.innerHTML = `<textarea name="text" class="answer_textarea" id="input">
p {
    font-style: italic;
}
          </textarea>`;
        cssIncorrectValue.innerHTML = "Incorrect..";
        cssNextButton.innerHTML = `<button class="nextButton cssColor1" id="cssNextButton" onclick=cssBtn()>Next</button>`;
        cssRemoveValue.innerHTML = "";



    } else if (cssRandomValue == 38 && cssInputAnswer == cssAnswerArr[38].A38) {
        cssCorrectValue.innerHTML = "Correct..";
        cssDisplayAnswer.innerHTML = `<textarea name="text" class="answer_textarea" id="input">
        Good Job :) </textarea>`;
        cssNextButton.innerHTML = `<button class="nextButton cssColor1" id="cssNextButton" onclick=cssBtn()>Next</button>`;
        cssRemoveValue.innerHTML = "";

    } else if (cssRandomValue == 38 && cssInputAnswer !== cssAnswerArr[38].A38) {
        cssDisplayAnswer.innerHTML = `<textarea name="text" class="answer_textarea" id="input">
body {
    font-size: 20px;
}
    
h1 {
    font-size: 3em;
}
          </textarea>`;
        cssIncorrectValue.innerHTML = "Incorrect..";
        cssNextButton.innerHTML = `<button class="nextButton cssColor1" id="cssNextButton" onclick=cssBtn()>Next</button>`;
        cssRemoveValue.innerHTML = "";



    } else if (cssRandomValue == 39 && cssInputAnswer == cssAnswerArr[39].A39) {
        cssCorrectValue.innerHTML = "Correct..";
        cssDisplayAnswer.innerHTML = `<textarea name="text" class="answer_textarea" id="input">
        Good Job :) </textarea>`;
        cssNextButton.innerHTML = `<button class="nextButton cssColor1" id="cssNextButton" onclick=cssBtn()>Next</button>`;
        cssRemoveValue.innerHTML = "";

    } else if (cssRandomValue == 39 && cssInputAnswer !== cssAnswerArr[39].A39) {
        cssDisplayAnswer.innerHTML = `<textarea name="text" class="answer_textarea" id="input">
p {
    font-weight: bold;
}
          </textarea>`;
        cssIncorrectValue.innerHTML = "Incorrect..";
        cssNextButton.innerHTML = `<button class="nextButton cssColor1" id="cssNextButton" onclick=cssBtn()>Next</button>`;
        cssRemoveValue.innerHTML = "";



    } else if (cssRandomValue == 40 && cssInputAnswer == cssAnswerArr[40].A40) {
        cssCorrectValue.innerHTML = "Correct..";
        cssDisplayAnswer.innerHTML = `<textarea name="text" class="answer_textarea" id="input">
        Good Job :) </textarea>`;
        cssNextButton.innerHTML = `<button class="nextButton cssColor1" id="cssNextButton" onclick=cssBtn()>Next</button>`;
        cssRemoveValue.innerHTML = "";

    } else if (cssRandomValue == 40 && cssInputAnswer !== cssAnswerArr[40].A40) {
        cssDisplayAnswer.innerHTML = `<textarea name="text" class="answer_textarea" id="input">
p {
    font: italic 20px Verdana;
}
          </textarea>`;
        cssIncorrectValue.innerHTML = "Incorrect..";
        cssNextButton.innerHTML = `<button class="nextButton cssColor1" id="cssNextButton" onclick=cssBtn()>Next</button>`;
        cssRemoveValue.innerHTML = "";



    } else if (cssRandomValue == 41 && cssInputAnswer == cssAnswerArr[41].A41) {
        cssCorrectValue.innerHTML = "Correct..";
        cssDisplayAnswer.innerHTML = `<textarea name="text" class="answer_textarea" id="input">
        Good Job :) </textarea>`;
        cssNextButton.innerHTML = `<button class="nextButton cssColor1" id="cssNextButton" onclick=cssBtn()>Next</button>`;
        cssRemoveValue.innerHTML = "";

    } else if (cssRandomValue == 41 && cssInputAnswer !== cssAnswerArr[41].A41) {
        cssDisplayAnswer.innerHTML = `<textarea name="text" class="answer_textarea" id="input">
a {
    color: green;
}
          </textarea>`;
        cssIncorrectValue.innerHTML = "Incorrect..";
        cssNextButton.innerHTML = `<button class="nextButton cssColor1" id="cssNextButton" onclick=cssBtn()>Next</button>`;
        cssRemoveValue.innerHTML = "";



    } else if (cssRandomValue == 42 && cssInputAnswer == cssAnswerArr[42].A42) {
        cssCorrectValue.innerHTML = "Correct..";
        cssDisplayAnswer.innerHTML = `<textarea name="text" class="answer_textarea" id="input">
        Good Job :) </textarea>`;
        cssNextButton.innerHTML = `<button class="nextButton cssColor1" id="cssNextButton" onclick=cssBtn()>Next</button>`;
        cssRemoveValue.innerHTML = "";

    } else if (cssRandomValue == 42 && cssInputAnswer !== cssAnswerArr[42].A42) {
        cssDisplayAnswer.innerHTML = `<textarea name="text" class="answer_textarea" id="input">
a:link {
    color: red;
}
    
a:visited {
    color: blue;
}
a:hover {
    color: black;
}
a:active {
    color: green;
}
          </textarea>`;
        cssIncorrectValue.innerHTML = "Incorrect..";
        cssNextButton.innerHTML = `<button class="nextButton cssColor1" id="cssNextButton" onclick=cssBtn()>Next</button>`;
        cssRemoveValue.innerHTML = "";



    } else if (cssRandomValue == 43 && cssInputAnswer == cssAnswerArr[43].A43) {
        cssCorrectValue.innerHTML = "Correct..";
        cssDisplayAnswer.innerHTML = `<textarea name="text" class="answer_textarea" id="input">
        Good Job :) </textarea>`;
        cssNextButton.innerHTML = `<button class="nextButton cssColor1" id="cssNextButton" onclick=cssBtn()>Next</button>`;
        cssRemoveValue.innerHTML = "";

    } else if (cssRandomValue == 43 && cssInputAnswer !== cssAnswerArr[43].A43) {
        cssDisplayAnswer.innerHTML = `<textarea name="text" class="answer_textarea" id="input">
        
a:link {
    text-decoration: none;
}
a:visited {
    text-decoration: none;
}
a:hover {
    text-decoration: underline;
}
a:active {
    text-decoration: underline;
}
        </textarea>`;
        cssIncorrectValue.innerHTML = "Incorrect..";
        cssNextButton.innerHTML = `<button class="nextButton cssColor1" id="cssNextButton" onclick=cssBtn()>Next</button>`;
        cssRemoveValue.innerHTML = "";



    } else if (cssRandomValue == 44 && cssInputAnswer == cssAnswerArr[44].A44) {
        cssCorrectValue.innerHTML = "Correct..";
        cssDisplayAnswer.innerHTML = `<textarea name="text" class="answer_textarea" id="input">
        Good Job :) </textarea>`;
        cssNextButton.innerHTML = `<button class="nextButton cssColor1" id="cssNextButton" onclick=cssBtn()>Next</button>`;
        cssRemoveValue.innerHTML = "";

    } else if (cssRandomValue == 44 && cssInputAnswer !== cssAnswerArr[44].A44) {
        cssDisplayAnswer.innerHTML = `<textarea name="text" class="answer_textarea" id="input">
        
a:link {
    background-color: lightblue;
}
a:visited {
    background-color: lightblue;
}
a:hover {
    background-color: yellow;
}
a:active {
    background-color: yellow;
}
        </textarea>`;
        cssIncorrectValue.innerHTML = "Incorrect..";
        cssNextButton.innerHTML = `<button class="nextButton cssColor1" id="cssNextButton" onclick=cssBtn()>Next</button>`;
        cssRemoveValue.innerHTML = "";



    } else if (cssRandomValue == 45 && cssInputAnswer == cssAnswerArr[45].A45) {
        cssCorrectValue.innerHTML = "Correct..";
        cssDisplayAnswer.innerHTML = `<textarea name="text" class="answer_textarea" id="input">
        Good Job :) </textarea>`;
        cssNextButton.innerHTML = `<button class="nextButton cssColor1" id="cssNextButton" onclick=cssBtn()>Next</button>`;
        cssRemoveValue.innerHTML = "";

    } else if (cssRandomValue == 45 && cssInputAnswer !== cssAnswerArr[45].A45) {
        cssDisplayAnswer.innerHTML = `<textarea name="text" class="answer_textarea" id="input">
ul {
    list-style-type: square;
}
    
ol {
    list-style-type: upper-roman;
}
          </textarea>`;
        cssIncorrectValue.innerHTML = "Incorrect..";
        cssNextButton.innerHTML = `<button class="nextButton cssColor1" id="cssNextButton" onclick=cssBtn()>Next</button>`;
        cssRemoveValue.innerHTML = "";



    } else if (cssRandomValue == 46 && cssInputAnswer == cssAnswerArr[46].A46) {
        cssCorrectValue.innerHTML = "Correct..";
        cssDisplayAnswer.innerHTML = `<textarea name="text" class="answer_textarea" id="input">
        Good Job :) </textarea>`;
        cssNextButton.innerHTML = `<button class="nextButton cssColor1" id="cssNextButton" onclick=cssBtn()>Next</button>`;
        cssRemoveValue.innerHTML = "";

    } else if (cssRandomValue == 46 && cssInputAnswer !== cssAnswerArr[46].A46) {
        cssDisplayAnswer.innerHTML = `<textarea name="text" class="answer_textarea" id="input">
ul {
    list-style-image: url('sqpurple.gif');
}
          </textarea>`;
        cssIncorrectValue.innerHTML = "Incorrect..";
        cssNextButton.innerHTML = `<button class="nextButton cssColor1" id="cssNextButton" onclick=cssBtn()>Next</button>`;
        cssRemoveValue.innerHTML = "";



    } else if (cssRandomValue == 47 && cssInputAnswer == cssAnswerArr[47].A47) {
        cssCorrectValue.innerHTML = "Correct..";
        cssDisplayAnswer.innerHTML = `<textarea name="text" class="answer_textarea" id="input">
        Good Job :) </textarea>`;
        cssNextButton.innerHTML = `<button class="nextButton cssColor1" id="cssNextButton" onclick=cssBtn()>Next</button>`;
        cssRemoveValue.innerHTML = "";

    } else if (cssRandomValue == 47 && cssInputAnswer !== cssAnswerArr[47].A47) {
        cssDisplayAnswer.innerHTML = `<textarea name="text" class="answer_textarea" id="input">
ul {
    list-style: circle inside url('img_marker.png');
}
          </textarea>`;
        cssIncorrectValue.innerHTML = "Incorrect..";
        cssNextButton.innerHTML = `<button class="nextButton cssColor1" id="cssNextButton" onclick=cssBtn()>Next</button>`;
        cssRemoveValue.innerHTML = "";



    } else if (cssRandomValue == 48 && cssInputAnswer == cssAnswerArr[48].A48) {
        cssCorrectValue.innerHTML = "Correct..";
        cssDisplayAnswer.innerHTML = `<textarea name="text" class="answer_textarea" id="input">
        Good Job :) </textarea>`;
        cssNextButton.innerHTML = `<button class="nextButton cssColor1" id="cssNextButton" onclick=cssBtn()>Next</button>`;
        cssRemoveValue.innerHTML = "";

    } else if (cssRandomValue == 48 && cssInputAnswer !== cssAnswerArr[48].A48) {
        cssDisplayAnswer.innerHTML = `<textarea name="text" class="answer_textarea" id="input">
ul {
    list-style-type: none;
}
          </textarea>`;
        cssIncorrectValue.innerHTML = "Incorrect..";
        cssNextButton.innerHTML = `<button class="nextButton cssColor1" id="cssNextButton" onclick=cssBtn()>Next</button>`;
        cssRemoveValue.innerHTML = "";



    } else if (cssRandomValue == 49 && cssInputAnswer == cssAnswerArr[49].A49) {
        cssCorrectValue.innerHTML = "Correct..";
        cssDisplayAnswer.innerHTML = `<textarea name="text" class="answer_textarea" id="input">
        Good Job :) </textarea>`;
        cssNextButton.innerHTML = `<button class="nextButton cssColor1" id="cssNextButton" onclick=cssBtn()>Next</button>`;
        cssRemoveValue.innerHTML = "";

    } else if (cssRandomValue == 49 && cssInputAnswer !== cssAnswerArr[49].A49) {
        cssDisplayAnswer.innerHTML = `<textarea name="text" class="answer_textarea" id="input">
table, th, td {
    border: 2px solid green;
}
          </textarea>`;
        cssIncorrectValue.innerHTML = "Incorrect..";
        cssNextButton.innerHTML = `<button class="nextButton cssColor1" id="cssNextButton" onclick=cssBtn()>Next</button>`;
        cssRemoveValue.innerHTML = "";



    } else if (cssRandomValue == 50 && cssInputAnswer == cssAnswerArr[50].A50) {
        cssCorrectValue.innerHTML = "Correct..";
        cssDisplayAnswer.innerHTML = `<textarea name="text" class="answer_textarea" id="input">
        Good Job :) </textarea>`;
        cssNextButton.innerHTML = `<button class="nextButton cssColor1" id="cssNextButton" onclick=cssBtn()>Next</button>`;
        cssRemoveValue.innerHTML = "";

    } else if (cssRandomValue == 50 && cssInputAnswer !== cssAnswerArr[50].A50) {
        cssDisplayAnswer.innerHTML = `<textarea name="text" class="answer_textarea" id="input">
table {
    border-collapse: collapse;
}
          </textarea>`;
        cssIncorrectValue.innerHTML = "Incorrect..";
        cssNextButton.innerHTML = `<button class="nextButton cssColor1" id="cssNextButton" onclick=cssBtn()>Next</button>`;
        cssRemoveValue.innerHTML = "";



    } else if (cssRandomValue == 51 && cssInputAnswer == cssAnswerArr[51].A51) {
        cssCorrectValue.innerHTML = "Correct..";
        cssDisplayAnswer.innerHTML = `<textarea name="text" class="answer_textarea" id="input">
        Good Job :) </textarea>`;
        cssNextButton.innerHTML = `<button class="nextButton cssColor1" id="cssNextButton" onclick=cssBtn()>Next</button>`;
        cssRemoveValue.innerHTML = "";

    } else if (cssRandomValue == 51 && cssInputAnswer !== cssAnswerArr[51].A51) {
        cssDisplayAnswer.innerHTML = `<textarea name="text" class="answer_textarea" id="input">
table {
    width: 100%;
}
          </textarea>`;
        cssIncorrectValue.innerHTML = "Incorrect..";
        cssNextButton.innerHTML = `<button class="nextButton cssColor1" id="cssNextButton" onclick=cssBtn()>Next</button>`;
        cssRemoveValue.innerHTML = "";



    } else if (cssRandomValue == 52 && cssInputAnswer == cssAnswerArr[52].A52) {
        cssCorrectValue.innerHTML = "Correct..";
        cssDisplayAnswer.innerHTML = `<textarea name="text" class="answer_textarea" id="input">
        Good Job :) </textarea>`;
        cssNextButton.innerHTML = `<button class="nextButton cssColor1" id="cssNextButton" onclick=cssBtn()>Next</button>`;
        cssRemoveValue.innerHTML = "";

    } else if (cssRandomValue == 52 && cssInputAnswer !== cssAnswerArr[52].A52) {
        cssDisplayAnswer.innerHTML = `<textarea name="text" class="answer_textarea" id="input">
td {
    text-align: right;
}
          </textarea>`;
        cssIncorrectValue.innerHTML = "Incorrect..";
        cssNextButton.innerHTML = `<button class="nextButton cssColor1" id="cssNextButton" onclick=cssBtn()>Next</button>`;
        cssRemoveValue.innerHTML = "";



    } else if (cssRandomValue == 53 && cssInputAnswer == cssAnswerArr[53].A53) {
        cssCorrectValue.innerHTML = "Correct..";
        cssDisplayAnswer.innerHTML = `<textarea name="text" class="answer_textarea" id="input">
        Good Job :) </textarea>`;
        cssNextButton.innerHTML = `<button class="nextButton cssColor1" id="cssNextButton" onclick=cssBtn()>Next</button>`;
        cssRemoveValue.innerHTML = "";

    } else if (cssRandomValue == 53 && cssInputAnswer !== cssAnswerArr[53].A53) {
        cssDisplayAnswer.innerHTML = `<textarea name="text" class="answer_textarea" id="input">
th {
    background-color: lightblue;
}
          </textarea>`;
        cssIncorrectValue.innerHTML = "Incorrect..";
        cssNextButton.innerHTML = `<button class="nextButton cssColor1" id="cssNextButton" onclick=cssBtn()>Next</button>`;
        cssRemoveValue.innerHTML = "";



    } else if (cssRandomValue == 54 && cssInputAnswer == cssAnswerArr[54].A54) {
        cssCorrectValue.innerHTML = "Correct..";
        cssDisplayAnswer.innerHTML = `<textarea name="text" class="answer_textarea" id="input">
        Good Job :) </textarea>`;
        cssNextButton.innerHTML = `<button class="nextButton cssColor1" id="cssNextButton" onclick=cssBtn()>Next</button>`;
        cssRemoveValue.innerHTML = "";

    } else if (cssRandomValue == 54 && cssInputAnswer !== cssAnswerArr[54].A54) {
        cssDisplayAnswer.innerHTML = `<textarea name="text" class="answer_textarea" id="input">
h1 {
    visibility: hidden;
}
          </textarea>`;
        cssIncorrectValue.innerHTML = "Incorrect..";
        cssNextButton.innerHTML = `<button class="nextButton cssColor1" id="cssNextButton" onclick=cssBtn()>Next</button>`;
        cssRemoveValue.innerHTML = "";



    } else if (cssRandomValue == 55 && cssInputAnswer == cssAnswerArr[55].A55) {
        cssCorrectValue.innerHTML = "Correct..";
        cssDisplayAnswer.innerHTML = `<textarea name="text" class="answer_textarea" id="input">
        Good Job :) </textarea>`;
        cssNextButton.innerHTML = `<button class="nextButton cssColor1" id="cssNextButton" onclick=cssBtn()>Next</button>`;
        cssRemoveValue.innerHTML = "";

    } else if (cssRandomValue == 55 && cssInputAnswer !== cssAnswerArr[55].A55) {
        cssDisplayAnswer.innerHTML = `<textarea name="text" class="answer_textarea" id="input">
h1 {
    display: none;
}
          </textarea>`;
        cssIncorrectValue.innerHTML = "Incorrect..";
        cssNextButton.innerHTML = `<button class="nextButton cssColor1" id="cssNextButton" onclick=cssBtn()>Next</button>`;
        cssRemoveValue.innerHTML = "";



    } else if (cssRandomValue == 56 && cssInputAnswer == cssAnswerArr[56].A56) {
        cssCorrectValue.innerHTML = "Correct..";
        cssDisplayAnswer.innerHTML = `<textarea name="text" class="answer_textarea" id="input">
        Good Job :) </textarea>`;
        cssNextButton.innerHTML = `<button class="nextButton cssColor1" id="cssNextButton" onclick=cssBtn()>Next</button>`;
        cssRemoveValue.innerHTML = "";

    } else if (cssRandomValue == 56 && cssInputAnswer !== cssAnswerArr[56].A56) {
        cssDisplayAnswer.innerHTML = `<textarea name="text" class="answer_textarea" id="input">
li {
    display: inline;
}
          </textarea>`;
        cssIncorrectValue.innerHTML = "Incorrect..";
        cssNextButton.innerHTML = `<button class="nextButton cssColor1" id="cssNextButton" onclick=cssBtn()>Next</button>`;
        cssRemoveValue.innerHTML = "";



    } else if (cssRandomValue == 57 && cssInputAnswer == cssAnswerArr[57].A57) {
        cssCorrectValue.innerHTML = "Correct..";
        cssDisplayAnswer.innerHTML = `<textarea name="text" class="answer_textarea" id="input">
        Good Job :) </textarea>`;
        cssNextButton.innerHTML = `<button class="nextButton cssColor1" id="cssNextButton" onclick=cssBtn()>Next</button>`;
        cssRemoveValue.innerHTML = "";

    } else if (cssRandomValue == 57 && cssInputAnswer !== cssAnswerArr[57].A57) {
        cssDisplayAnswer.innerHTML = `<textarea name="text" class="answer_textarea" id="input">
strong {
    display:block;
}
          </textarea>`;
        cssIncorrectValue.innerHTML = "Incorrect..";
        cssNextButton.innerHTML = `<button class="nextButton cssColor1" id="cssNextButton" onclick=cssBtn()>Next</button>`;
        cssRemoveValue.innerHTML = "";



    } else if (cssRandomValue == 58 && cssInputAnswer == cssAnswerArr[58].A58) {
        cssCorrectValue.innerHTML = "Correct..";
        cssDisplayAnswer.innerHTML = `<textarea name="text" class="answer_textarea" id="input">
        Good Job :) </textarea>`;
        cssNextButton.innerHTML = `<button class="nextButton cssColor1" id="cssNextButton" onclick=cssBtn()>Next</button>`;
        cssRemoveValue.innerHTML = "";

    } else if (cssRandomValue == 58 && cssInputAnswer !== cssAnswerArr[58].A58) {
        cssDisplayAnswer.innerHTML = `<textarea name="text" class="answer_textarea" id="input">
h1 {
    position: fixed;
    top: 50px;
    right: 50px;
}
          </textarea>`;
        cssIncorrectValue.innerHTML = "Incorrect..";
        cssNextButton.innerHTML = `<button class="nextButton cssColor1" id="cssNextButton" onclick=cssBtn()>Next</button>`;
        cssRemoveValue.innerHTML = "";



    } else if (cssRandomValue == 59 && cssInputAnswer == cssAnswerArr[59].A59) {
        cssCorrectValue.innerHTML = "Correct..";
        cssDisplayAnswer.innerHTML = `<textarea name="text" class="answer_textarea" id="input">
        Good Job :) </textarea>`;
        cssNextButton.innerHTML = `<button class="nextButton cssColor1" id="cssNextButton" onclick=cssBtn()>Next</button>`;
        cssRemoveValue.innerHTML = "";

    } else if (cssRandomValue == 59 && cssInputAnswer !== cssAnswerArr[59].A59) {
        cssDisplayAnswer.innerHTML = `<textarea name="text" class="answer_textarea" id="input">
h1 {
    position: relative;
    top: 30px;
    left: -20px;
}
          </textarea>`;
        cssIncorrectValue.innerHTML = "Incorrect..";
        cssNextButton.innerHTML = `<button class="nextButton cssColor1" id="cssNextButton" onclick=cssBtn()>Next</button>`;
        cssRemoveValue.innerHTML = "";



    } else if (cssRandomValue == 60 && cssInputAnswer == cssAnswerArr[60].A60) {
        cssCorrectValue.innerHTML = "Correct..";
        cssDisplayAnswer.innerHTML = `<textarea name="text" class="answer_textarea" id="input">
        Good Job :) </textarea>`;
        cssNextButton.innerHTML = `<button class="nextButton cssColor1" id="cssNextButton" onclick=cssBtn()>Next</button>`;
        cssRemoveValue.innerHTML = "";

    } else if (cssRandomValue == 60 && cssInputAnswer !== cssAnswerArr[60].A60) {
        cssDisplayAnswer.innerHTML = `<textarea name="text" class="answer_textarea" id="input">
h1 {
    position: absolute;
    top: 100px;
    left: 50px;
}
          </textarea>`;
        cssIncorrectValue.innerHTML = "Incorrect..";
        cssNextButton.innerHTML = `<button class="nextButton cssColor1" id="cssNextButton" onclick=cssBtn()>Next</button>`;
        cssRemoveValue.innerHTML = "";



    } else if (cssRandomValue == 61 && cssInputAnswer == cssAnswerArr[61].A61) {
        cssCorrectValue.innerHTML = "Correct..";
        cssDisplayAnswer.innerHTML = `<textarea name="text" class="answer_textarea" id="input">
        Good Job :) </textarea>`;
        cssNextButton.innerHTML = `<button class="nextButton cssColor1" id="cssNextButton" onclick=cssBtn()>Next</button>`;
        cssRemoveValue.innerHTML = "";

    } else if (cssRandomValue == 61 && cssInputAnswer !== cssAnswerArr[61].A61) {
        cssDisplayAnswer.innerHTML = `<textarea name="text" class="answer_textarea" id="input">
img {
    position: absolute;
    left: 0px;
    top: 0px;
    z-index: -1;
}
          </textarea>`;
        cssIncorrectValue.innerHTML = "Incorrect..";
        cssNextButton.innerHTML = `<button class="nextButton cssColor1" id="cssNextButton" onclick=cssBtn()>Next</button>`;
        cssRemoveValue.innerHTML = "";



    } else if (cssRandomValue == 62 && cssInputAnswer == cssAnswerArr[62].A62) {
        cssCorrectValue.innerHTML = "Correct..";
        cssDisplayAnswer.innerHTML = `<textarea name="text" class="answer_textarea" id="input">
        Good Job :) </textarea>`;
        cssNextButton.innerHTML = `<button class="nextButton cssColor1" id="cssNextButton" onclick=cssBtn()>Next</button>`;
        cssRemoveValue.innerHTML = "";

    } else if (cssRandomValue == 62 && cssInputAnswer !== cssAnswerArr[62].A62) {
        cssDisplayAnswer.innerHTML = `<textarea name="text" class="answer_textarea" id="input">
.container {
    position: relative;
}
    
.topleft {
    position: absolute;
    left: 30px;
    top: 15px;
}
          </textarea>`;
        cssIncorrectValue.innerHTML = "Incorrect..";
        cssNextButton.innerHTML = `<button class="nextButton cssColor1" id="cssNextButton" onclick=cssBtn()>Next</button>`;
        cssRemoveValue.innerHTML = "";



    } else if (cssRandomValue == 63 && cssInputAnswer == cssAnswerArr[63].A63) {
        cssCorrectValue.innerHTML = "Correct..";
        cssDisplayAnswer.innerHTML = `<textarea name="text" class="answer_textarea" id="input">
        Good Job :) </textarea>`;
        cssNextButton.innerHTML = `<button class="nextButton cssColor1" id="cssNextButton" onclick=cssBtn()>Next</button>`;
        cssRemoveValue.innerHTML = "";

    } else if (cssRandomValue == 63 && cssInputAnswer !== cssAnswerArr[63].A63) {
        cssDisplayAnswer.innerHTML = `<textarea name="text" class="answer_textarea" id="input">
div {
    background-color: #eee;
    width: 200px;
    height: 70px;
    border: 1px dotted black;
    overflow: scroll;
}
          </textarea>`;
        cssIncorrectValue.innerHTML = "Incorrect..";
        cssNextButton.innerHTML = `<button class="nextButton cssColor1" id="cssNextButton" onclick=cssBtn()>Next</button>`;
        cssRemoveValue.innerHTML = "";



    } else if (cssRandomValue == 64 && cssInputAnswer == cssAnswerArr[64].A64) {
        cssCorrectValue.innerHTML = "Correct..";
        cssDisplayAnswer.innerHTML = `<textarea name="text" class="answer_textarea" id="input">
        Good Job :) </textarea>`;
        cssNextButton.innerHTML = `<button class="nextButton cssColor1" id="cssNextButton" onclick=cssBtn()>Next</button>`;
        cssRemoveValue.innerHTML = "";

    } else if (cssRandomValue == 64 && cssInputAnswer !== cssAnswerArr[64].A64) {
        cssDisplayAnswer.innerHTML = `<textarea name="text" class="answer_textarea" id="input">
div {
    background-color: lightblue;
    width: 200px;
    height: 200px;
    overflow: hidden;
}
          </textarea>`;
        cssIncorrectValue.innerHTML = "Incorrect..";
        cssNextButton.innerHTML = `<button class="nextButton cssColor1" id="cssNextButton" onclick=cssBtn()>Next</button>`;
        cssRemoveValue.innerHTML = "";



    } else if (cssRandomValue == 65 && cssInputAnswer == cssAnswerArr[65].A65) {
        cssCorrectValue.innerHTML = "Correct..";
        cssDisplayAnswer.innerHTML = `<textarea name="text" class="answer_textarea" id="input">
        Good Job :) </textarea>`;
        cssNextButton.innerHTML = `<button class="nextButton cssColor1" id="cssNextButton" onclick=cssBtn()>Next</button>`;
        cssRemoveValue.innerHTML = "";

    } else if (cssRandomValue == 65 && cssInputAnswer !== cssAnswerArr[65].A65) {
        cssDisplayAnswer.innerHTML = `<textarea name="text" class="answer_textarea" id="input">
div {
    background-color: #eee;
    width: 150px;
    height: 70px;
    border: 1px dotted black;
    white-space: nowrap;
    overflow-x: scroll;
}
          </textarea>`;
        cssIncorrectValue.innerHTML = "Incorrect..";
        cssNextButton.innerHTML = `<button class="nextButton cssColor1" id="cssNextButton" onclick=cssBtn()>Next</button>`;
        cssRemoveValue.innerHTML = "";



    } else if (cssRandomValue == 66 && cssInputAnswer == cssAnswerArr[66].A66) {
        cssCorrectValue.innerHTML = "Correct..";
        cssDisplayAnswer.innerHTML = `<textarea name="text" class="answer_textarea" id="input">
        Good Job :) </textarea>`;
        cssNextButton.innerHTML = `<button class="nextButton cssColor1" id="cssNextButton" onclick=cssBtn()>Next</button>`;
        cssRemoveValue.innerHTML = "";

    } else if (cssRandomValue == 66 && cssInputAnswer !== cssAnswerArr[66].A66) {
        cssDisplayAnswer.innerHTML = `<textarea name="text" class="answer_textarea" id="input">
div {
    margin-left: auto;
    margin-right: auto;
    width: 300px;
    background-color: #b0e0e6;
}
          </textarea>`;
        cssIncorrectValue.innerHTML = "Incorrect..";
        cssNextButton.innerHTML = `<button class="nextButton cssColor1" id="cssNextButton" onclick=cssBtn()>Next</button>`;
        cssRemoveValue.innerHTML = "";



    } else if (cssRandomValue == 67 && cssInputAnswer == cssAnswerArr[67].A67) {
        cssCorrectValue.innerHTML = "Correct..";
        cssDisplayAnswer.innerHTML = `<textarea name="text" class="answer_textarea" id="input">
        Good Job :) </textarea>`;
        cssNextButton.innerHTML = `<button class="nextButton cssColor1" id="cssNextButton" onclick=cssBtn()>Next</button>`;
        cssRemoveValue.innerHTML = "";

    } else if (cssRandomValue == 67 && cssInputAnswer !== cssAnswerArr[67].A67) {
        cssDisplayAnswer.innerHTML = `<textarea name="text" class="answer_textarea" id="input">
div {
    position: absolute;
    right: 0px;
    width: 300px;
    background-color: #b0e0e6;
}
          </textarea>`;
        cssIncorrectValue.innerHTML = "Incorrect..";
        cssNextButton.innerHTML = `<button class="nextButton cssColor1" id="cssNextButton" onclick=cssBtn()>Next</button>`;
        cssRemoveValue.innerHTML = "";



    } else if (cssRandomValue == 68 && cssInputAnswer == cssAnswerArr[68].A68) {
        cssCorrectValue.innerHTML = "Correct..";
        cssDisplayAnswer.innerHTML = `<textarea name="text" class="answer_textarea" id="input">
        Good Job :) </textarea>`;
        cssNextButton.innerHTML = `<button class="nextButton cssColor1" id="cssNextButton" onclick=cssBtn()>Next</button>`;
        cssRemoveValue.innerHTML = "";

    } else if (cssRandomValue == 68 && cssInputAnswer !== cssAnswerArr[68].A68) {
        cssDisplayAnswer.innerHTML = `<textarea name="text" class="answer_textarea" id="input">
div p {
    color: red;
}
          </textarea>`;
        cssIncorrectValue.innerHTML = "Incorrect..";
        cssNextButton.innerHTML = `<button class="nextButton cssColor1" id="cssNextButton" onclick=cssBtn()>Next</button>`;
        cssRemoveValue.innerHTML = "";



    } else if (cssRandomValue == 69 && cssInputAnswer == cssAnswerArr[69].A69) {
        cssCorrectValue.innerHTML = "Correct..";
        cssDisplayAnswer.innerHTML = `<textarea name="text" class="answer_textarea" id="input">
        Good Job :) </textarea>`;
        cssNextButton.innerHTML = `<button class="nextButton cssColor1" id="cssNextButton" onclick=cssBtn()>Next</button>`;
        cssRemoveValue.innerHTML = "";

    } else if (cssRandomValue == 69 && cssInputAnswer !== cssAnswerArr[69].A69) {
        cssDisplayAnswer.innerHTML = `<textarea name="text" class="answer_textarea" id="input">
div &gt p {
    color: red;
}
          </textarea>`;
        cssIncorrectValue.innerHTML = "Incorrect..";
        cssNextButton.innerHTML = `<button class="nextButton cssColor1" id="cssNextButton" onclick=cssBtn()>Next</button>`;
        cssRemoveValue.innerHTML = "";



    } else if (cssRandomValue == 70 && cssInputAnswer == cssAnswerArr[70].A70) {
        cssCorrectValue.innerHTML = "Correct..";
        cssDisplayAnswer.innerHTML = `<textarea name="text" class="answer_textarea" id="input">
        Good Job :) </textarea>`;
        cssNextButton.innerHTML = `<button class="nextButton cssColor1" id="cssNextButton" onclick=cssBtn()>Next</button>`;
        cssRemoveValue.innerHTML = "";

    } else if (cssRandomValue == 70 && cssInputAnswer !== cssAnswerArr[70].A70) {
        cssDisplayAnswer.innerHTML = `<textarea name="text" class="answer_textarea" id="input">
div + p {
    color: red;
}
          </textarea>`;
        cssIncorrectValue.innerHTML = "Incorrect..";
        cssNextButton.innerHTML = `<button class="nextButton cssColor1" id="cssNextButton" onclick=cssBtn()>Next</button>`;
        cssRemoveValue.innerHTML = "";



    } else if (cssRandomValue == 71 && cssInputAnswer == cssAnswerArr[71].A71) {
        cssCorrectValue.innerHTML = "Correct..";
        cssDisplayAnswer.innerHTML = `<textarea name="text" class="answer_textarea" id="input">
        Good Job :) </textarea>`;
        cssNextButton.innerHTML = `<button class="nextButton cssColor1" id="cssNextButton" onclick=cssBtn()>Next</button>`;
        cssRemoveValue.innerHTML = "";

    } else if (cssRandomValue == 71 && cssInputAnswer !== cssAnswerArr[71].A71) {
        cssDisplayAnswer.innerHTML = `<textarea name="text" class="answer_textarea" id="input">
div ~ p {
    color: red;
}
          </textarea>`;
        cssIncorrectValue.innerHTML = "Incorrect..";
        cssNextButton.innerHTML = `<button class="nextButton cssColor1" id="cssNextButton" onclick=cssBtn()>Next</button>`;
        cssRemoveValue.innerHTML = "";



    } else if (cssRandomValue == 72 && cssInputAnswer == cssAnswerArr[72].A72) {
        cssCorrectValue.innerHTML = "Correct..";
        cssDisplayAnswer.innerHTML = `<textarea name="text" class="answer_textarea" id="input">
        Good Job :) </textarea>`;
        cssNextButton.innerHTML = `<button class="nextButton cssColor1" id="cssNextButton" onclick=cssBtn()>Next</button>`;
        cssRemoveValue.innerHTML = "";

    } else if (cssRandomValue == 72 && cssInputAnswer !== cssAnswerArr[72].A72) {
        cssDisplayAnswer.innerHTML = `<textarea name="text" class="answer_textarea" id="input">
        
a:link {
    background-color: lightblue;
}
a:visited {
    background-color: lightblue;
}
a:hover {
    background-color: yellow;
}
a:active {
    background-color: yellow;
}
        </textarea>`;
        cssIncorrectValue.innerHTML = "Incorrect..";
        cssNextButton.innerHTML = `<button class="nextButton cssColor1" id="cssNextButton" onclick=cssBtn()>Next</button>`;
        cssRemoveValue.innerHTML = "";



    } else if (cssRandomValue == 73 && cssInputAnswer == cssAnswerArr[73].A73) {
        cssCorrectValue.innerHTML = "Correct..";
        cssDisplayAnswer.innerHTML = `<textarea name="text" class="answer_textarea" id="input">
        Good Job :) </textarea>`;
        cssNextButton.innerHTML = `<button class="nextButton cssColor1" id="cssNextButton" onclick=cssBtn()>Next</button>`;
        cssRemoveValue.innerHTML = "";

    } else if (cssRandomValue == 73 && cssInputAnswer !== cssAnswerArr[73].A73) {
        cssDisplayAnswer.innerHTML = `<textarea name="text" class="answer_textarea" id="input">
p.highlight:hover {
    background-color: lightblue;
}
          </textarea>`;
        cssIncorrectValue.innerHTML = "Incorrect..";
        cssNextButton.innerHTML = `<button class="nextButton cssColor1" id="cssNextButton" onclick=cssBtn()>Next</button>`;
        cssRemoveValue.innerHTML = "";



    } else if (cssRandomValue == 74 && cssInputAnswer == cssAnswerArr[74].A74) {
        cssCorrectValue.innerHTML = "Correct..";
        cssDisplayAnswer.innerHTML = `<textarea name="text" class="answer_textarea" id="input">
        Good Job :) </textarea>`;
        cssNextButton.innerHTML = `<button class="nextButton cssColor1" id="cssNextButton" onclick=cssBtn()>Next</button>`;
        cssRemoveValue.innerHTML = "";

    } else if (cssRandomValue == 74 && cssInputAnswer !== cssAnswerArr[74].A74) {
        cssDisplayAnswer.innerHTML = `<textarea name="text" class="answer_textarea" id="input">
p:first-child {
    background-color: lightblue;
}
          </textarea>`;
        cssIncorrectValue.innerHTML = "Incorrect..";
        cssNextButton.innerHTML = `<button class="nextButton cssColor1" id="cssNextButton" onclick=cssBtn()>Next</button>`;
        cssRemoveValue.innerHTML = "";



    } else if (cssRandomValue == 75 && cssInputAnswer == cssAnswerArr[75].A75) {
        cssCorrectValue.innerHTML = "Correct..";
        cssDisplayAnswer.innerHTML = `<textarea name="text" class="answer_textarea" id="input">
        Good Job :) </textarea>`;
        cssNextButton.innerHTML = `<button class="nextButton cssColor1" id="cssNextButton" onclick=cssBtn()>Next</button>`;
        cssRemoveValue.innerHTML = "";

    } else if (cssRandomValue == 75 && cssInputAnswer !== cssAnswerArr[75].A75) {
        cssDisplayAnswer.innerHTML = `<textarea name="text" class="answer_textarea" id="input">
input:focus {
    background-color: lightblue;
}
          </textarea>`;
        cssIncorrectValue.innerHTML = "Incorrect..";
        cssNextButton.innerHTML = `<button class="nextButton cssColor1" id="cssNextButton" onclick=cssBtn()>Next</button>`;
        cssRemoveValue.innerHTML = "";



    } else if (cssRandomValue == 76 && cssInputAnswer == cssAnswerArr[76].A76) {
        cssCorrectValue.innerHTML = "Correct..";
        cssDisplayAnswer.innerHTML = `<textarea name="text" class="answer_textarea" id="input">
        Good Job :) </textarea>`;
        cssNextButton.innerHTML = `<button class="nextButton cssColor1" id="cssNextButton" onclick=cssBtn()>Next</button>`;
        cssRemoveValue.innerHTML = "";

    } else if (cssRandomValue == 76 && cssInputAnswer !== cssAnswerArr[76].A76) {
        cssDisplayAnswer.innerHTML = `<textarea name="text" class="answer_textarea" id="input">
p::first-line {
    color: red;
}
          </textarea>`;
        cssIncorrectValue.innerHTML = "Incorrect..";
        cssNextButton.innerHTML = `<button class="nextButton cssColor1" id="cssNextButton" onclick=cssBtn()>Next</button>`;
        cssRemoveValue.innerHTML = "";



    } else if (cssRandomValue == 77 && cssInputAnswer == cssAnswerArr[77].A77) {
        cssCorrectValue.innerHTML = "Correct..";
        cssDisplayAnswer.innerHTML = `<textarea name="text" class="answer_textarea" id="input">
        Good Job :) </textarea>`;
        cssNextButton.innerHTML = `<button class="nextButton cssColor1" id="cssNextButton" onclick=cssBtn()>Next</button>`;
        cssRemoveValue.innerHTML = "";

    } else if (cssRandomValue == 77 && cssInputAnswer !== cssAnswerArr[77].A77) {
        cssDisplayAnswer.innerHTML = `<textarea name="text" class="answer_textarea" id="input">
p::first-letter {
    color: red;
    font-size: xx-large;
}
          </textarea>`;
        cssIncorrectValue.innerHTML = "Incorrect..";
        cssNextButton.innerHTML = `<button class="nextButton cssColor1" id="cssNextButton" onclick=cssBtn()>Next</button>`;
        cssRemoveValue.innerHTML = "";



    } else if (cssRandomValue == 78 && cssInputAnswer == cssAnswerArr[78].A78) {
        cssCorrectValue.innerHTML = "Correct..";
        cssDisplayAnswer.innerHTML = `<textarea name="text" class="answer_textarea" id="input">
        Good Job :) </textarea>`;
        cssNextButton.innerHTML = `<button class="nextButton cssColor1" id="cssNextButton" onclick=cssBtn()>Next</button>`;
        cssRemoveValue.innerHTML = "";

    } else if (cssRandomValue == 78 && cssInputAnswer !== cssAnswerArr[78].A78) {
        cssDisplayAnswer.innerHTML = `<textarea name="text" class="answer_textarea" id="input">
p::before{
    content: url(smiley.gif);
}
p::after{
    content: url(smiley.gif);
}
          </textarea>`;
        cssIncorrectValue.innerHTML = "Incorrect..";
        cssNextButton.innerHTML = `<button class="nextButton cssColor1" id="cssNextButton" onclick=cssBtn()>Next</button>`;
        cssRemoveValue.innerHTML = "";



    } else if (cssRandomValue == 79 && cssInputAnswer == cssAnswerArr[79].A79) {
        cssCorrectValue.innerHTML = "Correct..";
        cssDisplayAnswer.innerHTML = `<textarea name="text" class="answer_textarea" id="input">
        Good Job :) </textarea>`;
        cssNextButton.innerHTML = `<button class="nextButton cssColor1" id="cssNextButton" onclick=cssBtn()>Next</button>`;
        cssRemoveValue.innerHTML = "";

    } else if (cssRandomValue == 79 && cssInputAnswer !== cssAnswerArr[79].A79) {
        cssDisplayAnswer.innerHTML = `<textarea name="text" class="answer_textarea" id="input">
img {
    opacity: 0.4;
}
          </textarea>`;
        cssIncorrectValue.innerHTML = "Incorrect..";
        cssNextButton.innerHTML = `<button class="nextButton cssColor1" id="cssNextButton" onclick=cssBtn()>Next</button>`;
        cssRemoveValue.innerHTML = "";



    } else if (cssRandomValue == 80 && cssInputAnswer == cssAnswerArr[80].A80) {
        cssCorrectValue.innerHTML = "Correct..";
        cssDisplayAnswer.innerHTML = `<textarea name="text" class="answer_textarea" id="input">
        Good Job :) </textarea>`;
        cssNextButton.innerHTML = `<button class="nextButton cssColor1" id="cssNextButton" onclick=cssBtn()>Next</button>`;
        cssRemoveValue.innerHTML = "";

    } else if (cssRandomValue == 80 && cssInputAnswer !== cssAnswerArr[80].A80) {
        cssDisplayAnswer.innerHTML = `<textarea name="text" class="answer_textarea" id="input">
img {
    opacity: 0.4;
}
img:hover {
    opacity: 1.0;
}
          </textarea>`;
        cssIncorrectValue.innerHTML = "Incorrect..";
        cssNextButton.innerHTML = `<button class="nextButton cssColor1" id="cssNextButton" onclick=cssBtn()>Next</button>`;
        cssRemoveValue.innerHTML = "";



    } else if (cssRandomValue == 81 && cssInputAnswer == cssAnswerArr[81].A81) {
        cssCorrectValue.innerHTML = "Correct..";
        cssDisplayAnswer.innerHTML = `<textarea name="text" class="answer_textarea" id="input">
        Good Job :) </textarea>`;
        cssNextButton.innerHTML = `<button class="nextButton cssColor1" id="cssNextButton" onclick=cssBtn()>Next</button>`;
        cssRemoveValue.innerHTML = "";

    } else if (cssRandomValue == 81 && cssInputAnswer !== cssAnswerArr[81].A81) {
        cssDisplayAnswer.innerHTML = `<textarea name="text" class="answer_textarea" id="input">
a[target] {
    background-color: lightblue;
}
          </textarea>`;
        cssIncorrectValue.innerHTML = "Incorrect..";
        cssNextButton.innerHTML = `<button class="nextButton cssColor1" id="cssNextButton" onclick=cssBtn()>Next</button>`;
        cssRemoveValue.innerHTML = "";



    } else if (cssRandomValue == 82 && cssInputAnswer == cssAnswerArr[82].A82) {
        cssCorrectValue.innerHTML = "Correct..";
        cssDisplayAnswer.innerHTML = `<textarea name="text" class="answer_textarea" id="input">
        Good Job :) </textarea>`;
        cssNextButton.innerHTML = `<button class="nextButton cssColor1" id="cssNextButton" onclick=cssBtn()>Next</button>`;
        cssRemoveValue.innerHTML = "";

    } else if (cssRandomValue == 82 && cssInputAnswer !== cssAnswerArr[82].A82) {
        cssDisplayAnswer.innerHTML = `<textarea name="text" class="answer_textarea" id="input">
[title~="red"] {
    border: 5px solid red;
}
          </textarea>`;
        cssIncorrectValue.innerHTML = "Incorrect..";
        cssNextButton.innerHTML = `<button class="nextButton cssColor1" id="cssNextButton" onclick=cssBtn()>Next</button>`;
        cssRemoveValue.innerHTML = "";



    } else if (cssRandomValue == 83 && cssInputAnswer == cssAnswerArr[83].A83) {
        cssCorrectValue.innerHTML = "Correct..";
        cssDisplayAnswer.innerHTML = `<textarea name="text" class="answer_textarea" id="input">
        Good Job :) </textarea>`;
        cssNextButton.innerHTML = `<button class="nextButton cssColor1" id="cssNextButton" onclick=cssBtn()>Next</button>`;
        cssRemoveValue.innerHTML = "";

    } else if (cssRandomValue == 83 && cssInputAnswer !== cssAnswerArr[83].A83) {
        cssDisplayAnswer.innerHTML = `<textarea name="text" class="answer_textarea" id="input">
[title^="red"] {
    border: 5px solid red;
}
          </textarea>`;
        cssIncorrectValue.innerHTML = "Incorrect..";
        cssNextButton.innerHTML = `<button class="nextButton cssColor1" id="cssNextButton" onclick=cssBtn()>Next</button>`;
        cssRemoveValue.innerHTML = "";



    } else if (cssRandomValue == 84 && cssInputAnswer == cssAnswerArr[84].A84) {
        cssCorrectValue.innerHTML = "Correct..";
        cssDisplayAnswer.innerHTML = `<textarea name="text" class="answer_textarea" id="input">
        Good Job :) </textarea>`;
        cssNextButton.innerHTML = `<button class="nextButton cssColor1" id="cssNextButton" onclick=cssBtn()>Next</button>`;
        cssRemoveValue.innerHTML = "";

    } else if (cssRandomValue == 84 && cssInputAnswer !== cssAnswerArr[84].A84) {
        cssDisplayAnswer.innerHTML = `<textarea name="text" class="answer_textarea" id="input">
[title$="flower"] {
    border: 5px solid red;
}
          </textarea>`;
        cssIncorrectValue.innerHTML = "Incorrect..";
        cssNextButton.innerHTML = `<button class="nextButton cssColor1" id="cssNextButton" onclick=cssBtn()>Next</button>`;
        cssRemoveValue.innerHTML = "";



    } else if (cssRandomValue == 85 && cssInputAnswer == cssAnswerArr[85].A85) {
        cssCorrectValue.innerHTML = "Correct..";
        cssDisplayAnswer.innerHTML = `<textarea name="text" class="answer_textarea" id="input">
        Good Job :) </textarea>`;
        cssNextButton.innerHTML = `<button class="nextButton cssColor1" id="cssNextButton" onclick=cssBtn()>Next</button>`;
        cssRemoveValue.innerHTML = "";

    } else if (cssRandomValue == 85 && cssInputAnswer !== cssAnswerArr[85].A85) {
        cssDisplayAnswer.innerHTML = `<textarea name="text" class="answer_textarea" id="input">
[title*="flow"] {
    border: 5px solid red;
}
          </textarea>`;
        cssIncorrectValue.innerHTML = "Incorrect..";
        cssNextButton.innerHTML = `<button class="nextButton cssColor1" id="cssNextButton" onclick=cssBtn()>Next</button>`;
        cssRemoveValue.innerHTML = "";



    } else if (cssRandomValue == 86 && cssInputAnswer == cssAnswerArr[86].A86) {
        cssCorrectValue.innerHTML = "Correct..";
        cssDisplayAnswer.innerHTML = `<textarea name="text" class="answer_textarea" id="input">
        Good Job :) </textarea>`;
        cssNextButton.innerHTML = `<button class="nextButton cssColor1" id="cssNextButton" onclick=cssBtn()>Next</button>`;
        cssRemoveValue.innerHTML = "";

    } else if (cssRandomValue == 86 && cssInputAnswer !== cssAnswerArr[86].A86) {
        cssDisplayAnswer.innerHTML = `<textarea name="text" class="answer_textarea" id="input">
div {
    border-radius: 25px;
    background: #73AD21;
    padding: 20px; 
    width: 200px;
    
}
          </textarea>`;
        cssIncorrectValue.innerHTML = "Incorrect..";
        cssNextButton.innerHTML = `<button class="nextButton cssColor1" id="cssNextButton" onclick=cssBtn()>Next</button>`;
        cssRemoveValue.innerHTML = "";



    } else if (cssRandomValue == 87 && cssInputAnswer == cssAnswerArr[87].A87) {
        cssCorrectValue.innerHTML = "Correct..";
        cssDisplayAnswer.innerHTML = `<textarea name="text" class="answer_textarea" id="input">
        Good Job :) </textarea>`;
        cssNextButton.innerHTML = `<button class="nextButton cssColor1" id="cssNextButton" onclick=cssBtn()>Next</button>`;
        cssRemoveValue.innerHTML = "";

    } else if (cssRandomValue == 87 && cssInputAnswer !== cssAnswerArr[87].A87) {
        cssDisplayAnswer.innerHTML = `<textarea name="text" class="answer_textarea" id="input">
div {
    border-bottom-left-radius: 25px;
    background: #73AD21;
    padding: 20px; 
    width: 200px;  
}
          </textarea>`;
        cssIncorrectValue.innerHTML = "Incorrect..";
        cssNextButton.innerHTML = `<button class="nextButton cssColor1" id="cssNextButton" onclick=cssBtn()>Next</button>`;
        cssRemoveValue.innerHTML = "";



    } else if (cssRandomValue == 88 && cssInputAnswer == cssAnswerArr[88].A88) {
        cssCorrectValue.innerHTML = "Correct..";
        cssDisplayAnswer.innerHTML = `<textarea name="text" class="answer_textarea" id="input">
        Good Job :) </textarea>`;
        cssNextButton.innerHTML = `<button class="nextButton cssColor1" id="cssNextButton" onclick=cssBtn()>Next</button>`;
        cssRemoveValue.innerHTML = "";

    } else if (cssRandomValue == 88 && cssInputAnswer !== cssAnswerArr[88].A88) {
        cssDisplayAnswer.innerHTML = `<textarea name="text" class="answer_textarea" id="input">
div { 
    border: 10px solid transparent;
    border-image: url(border.png) 30 round;
}
          </textarea>`;
        cssIncorrectValue.innerHTML = "Incorrect..";
        cssNextButton.innerHTML = `<button class="nextButton cssColor1" id="cssNextButton" onclick=cssBtn()>Next</button>`;
        cssRemoveValue.innerHTML = "";



    } else if (cssRandomValue == 89 && cssInputAnswer == cssAnswerArr[89].A89) {
        cssCorrectValue.innerHTML = "Correct..";
        cssDisplayAnswer.innerHTML = `<textarea name="text" class="answer_textarea" id="input">
        Good Job :) </textarea>`;
        cssNextButton.innerHTML = `<button class="nextButton cssColor1" id="cssNextButton" onclick=cssBtn()>Next</button>`;
        cssRemoveValue.innerHTML = "";

    } else if (cssRandomValue == 89 && cssInputAnswer !== cssAnswerArr[89].A89) {
        cssDisplayAnswer.innerHTML = `<textarea name="text" class="answer_textarea" id="input">
div { 
    border: 10px solid transparent;
    border-image: url(border.png) 30 stretch;
}
          </textarea>`;
        cssIncorrectValue.innerHTML = "Incorrect..";
        cssNextButton.innerHTML = `<button class="nextButton cssColor1" id="cssNextButton" onclick=cssBtn()>Next</button>`;
        cssRemoveValue.innerHTML = "";



    } else if (cssRandomValue == 90 && cssInputAnswer == cssAnswerArr[90].A90) {
        cssCorrectValue.innerHTML = "Correct..";
        cssDisplayAnswer.innerHTML = `<textarea name="text" class="answer_textarea" id="input">
        Good Job :) </textarea>`;
        cssNextButton.innerHTML = `<button class="nextButton cssColor1" id="cssNextButton" onclick=cssBtn()>Next</button>`;
        cssRemoveValue.innerHTML = "";

    } else if (cssRandomValue == 90 && cssInputAnswer !== cssAnswerArr[90].A90) {
        cssDisplayAnswer.innerHTML = `<textarea name="text" class="answer_textarea" id="input">
body {
    background-image: url(img_flwr.gif), url(paper.gif);
}
          </textarea>`;
        cssIncorrectValue.innerHTML = "Incorrect..";
        cssNextButton.innerHTML = `<button class="nextButton cssColor1" id="cssNextButton" onclick=cssBtn()>Next</button>`;
        cssRemoveValue.innerHTML = "";



    } else if (cssRandomValue == 91 && cssInputAnswer == cssAnswerArr[91].A91) {
        cssCorrectValue.innerHTML = "Correct..";
        cssDisplayAnswer.innerHTML = `<textarea name="text" class="answer_textarea" id="input">
        Good Job :) </textarea>`;
        cssNextButton.innerHTML = `<button class="nextButton cssColor1" id="cssNextButton" onclick=cssBtn()>Next</button>`;
        cssRemoveValue.innerHTML = "";

    } else if (cssRandomValue == 91 && cssInputAnswer !== cssAnswerArr[91].A91) {
        cssDisplayAnswer.innerHTML = `<textarea name="text" class="answer_textarea" id="input">
body {
    background:url(img_flwr.gif);
    background-size: 100px 80px;
    background-repeat: no-repeat;
}
          </textarea>`;
        cssIncorrectValue.innerHTML = "Incorrect..";
        cssNextButton.innerHTML = `<button class="nextButton cssColor1" id="cssNextButton" onclick=cssBtn()>Next</button>`;
        cssRemoveValue.innerHTML = "";



    } else if (cssRandomValue == 92 && cssInputAnswer == cssAnswerArr[92].A92) {
        cssCorrectValue.innerHTML = "Correct..";
        cssDisplayAnswer.innerHTML = `<textarea name="text" class="answer_textarea" id="input">
        Good Job :) </textarea>`;
        cssNextButton.innerHTML = `<button class="nextButton cssColor1" id="cssNextButton" onclick=cssBtn()>Next</button>`;
        cssRemoveValue.innerHTML = "";

    } else if (cssRandomValue == 92 && cssInputAnswer !== cssAnswerArr[92].A92) {
        cssDisplayAnswer.innerHTML = `<textarea name="text" class="answer_textarea" id="input">
html { 
    background: url(img_flower.jpg) no-repeat center center fixed;
    background-size: cover;
}
          </textarea>`;
        cssIncorrectValue.innerHTML = "Incorrect..";
        cssNextButton.innerHTML = `<button class="nextButton cssColor1" id="cssNextButton" onclick=cssBtn()>Next</button>`;
        cssRemoveValue.innerHTML = "";



    } else if (cssRandomValue == 93 && cssInputAnswer == cssAnswerArr[93].A93) {
        cssCorrectValue.innerHTML = "Correct..";
        cssDisplayAnswer.innerHTML = `<textarea name="text" class="answer_textarea" id="input">
        Good Job :) </textarea>`;
        cssNextButton.innerHTML = `<button class="nextButton cssColor1" id="cssNextButton" onclick=cssBtn()>Next</button>`;
        cssRemoveValue.innerHTML = "";

    } else if (cssRandomValue == 93 && cssInputAnswer !== cssAnswerArr[93].A93) {
        cssDisplayAnswer.innerHTML = `<textarea name="text" class="answer_textarea" id="input">
div { 
    border: 10px solid black;
    padding: 35px;
    background: url(img_flwr.gif);
    background-repeat: no-repeat;
    background-origin: content-box;
}
          </textarea>`;
        cssIncorrectValue.innerHTML = "Incorrect..";
        cssNextButton.innerHTML = `<button class="nextButton cssColor1" id="cssNextButton" onclick=cssBtn()>Next</button>`;
        cssRemoveValue.innerHTML = "";



    } else if (cssRandomValue == 94 && cssInputAnswer == cssAnswerArr[94].A94) {
        cssCorrectValue.innerHTML = "Correct..";
        cssDisplayAnswer.innerHTML = `<textarea name="text" class="answer_textarea" id="input">
        Good Job :) </textarea>`;
        cssNextButton.innerHTML = `<button class="nextButton cssColor1" id="cssNextButton" onclick=cssBtn()>Next</button>`;
        cssRemoveValue.innerHTML = "";

    } else if (cssRandomValue == 94 && cssInputAnswer !== cssAnswerArr[94].A94) {
        cssDisplayAnswer.innerHTML = `<textarea name="text" class="answer_textarea" id="input">
div { 
    border: 10px dotted black;
    padding: 35px;
    background: lightblue;
    background-clip: padding-box;
}
          </textarea>`;
        cssIncorrectValue.innerHTML = "Incorrect..";
        cssNextButton.innerHTML = `<button class="nextButton cssColor1" id="cssNextButton" onclick=cssBtn()>Next</button>`;
        cssRemoveValue.innerHTML = "";



    } else if (cssRandomValue == 95 && cssInputAnswer == cssAnswerArr[95].A95) {
        cssCorrectValue.innerHTML = "Correct..";
        cssDisplayAnswer.innerHTML = `<textarea name="text" class="answer_textarea" id="input">
        Good Job :) </textarea>`;
        cssNextButton.innerHTML = `<button class="nextButton cssColor1" id="cssNextButton" onclick=cssBtn()>Next</button>`;
        cssRemoveValue.innerHTML = "";

    } else if (cssRandomValue == 95 && cssInputAnswer !== cssAnswerArr[95].A95) {
        cssDisplayAnswer.innerHTML = `<textarea name="text" class="answer_textarea" id="input">
h1 {
    background-color: rgba(0,255,0,0.3);
}
          </textarea>`;
        cssIncorrectValue.innerHTML = "Incorrect..";
        cssNextButton.innerHTML = `<button class="nextButton cssColor1" id="cssNextButton" onclick=cssBtn()>Next</button>`;
        cssRemoveValue.innerHTML = "";



    } else if (cssRandomValue == 96 && cssInputAnswer == cssAnswerArr[96].A96) {
        cssCorrectValue.innerHTML = "Correct..";
        cssDisplayAnswer.innerHTML = `<textarea name="text" class="answer_textarea" id="input">
        Good Job :) </textarea>`;
        cssNextButton.innerHTML = `<button class="nextButton cssColor1" id="cssNextButton" onclick=cssBtn()>Next</button>`;
        cssRemoveValue.innerHTML = "";

    } else if (cssRandomValue == 96 && cssInputAnswer !== cssAnswerArr[96].A96) {
        cssDisplayAnswer.innerHTML = `<textarea name="text" class="answer_textarea" id="input">
h1 {
    background-color: hsl(0,100%,50%);
}
          </textarea>`;
        cssIncorrectValue.innerHTML = "Incorrect..";
        cssNextButton.innerHTML = `<button class="nextButton cssColor1" id="cssNextButton" onclick=cssBtn()>Next</button>`;
        cssRemoveValue.innerHTML = "";



    } else if (cssRandomValue == 97 && cssInputAnswer == cssAnswerArr[97].A97) {
        cssCorrectValue.innerHTML = "Correct..";
        cssDisplayAnswer.innerHTML = `<textarea name="text" class="answer_textarea" id="input">
        Good Job :) </textarea>`;
        cssNextButton.innerHTML = `<button class="nextButton cssColor1" id="cssNextButton" onclick=cssBtn()>Next</button>`;
        cssRemoveValue.innerHTML = "";

    } else if (cssRandomValue == 97 && cssInputAnswer !== cssAnswerArr[97].A97) {
        cssDisplayAnswer.innerHTML = `<textarea name="text" class="answer_textarea" id="input">
h1 {
    background-color: hsla(0,100%,50%,0.3);
}
          </textarea>`;
        cssIncorrectValue.innerHTML = "Incorrect..";
        cssNextButton.innerHTML = `<button class="nextButton cssColor1" id="cssNextButton" onclick=cssBtn()>Next</button>`;
        cssRemoveValue.innerHTML = "";



    } else if (cssRandomValue == 98 && cssInputAnswer == cssAnswerArr[98].A98) {
        cssCorrectValue.innerHTML = "Correct..";
        cssDisplayAnswer.innerHTML = `<textarea name="text" class="answer_textarea" id="input">
        Good Job :) </textarea>`;
        cssNextButton.innerHTML = `<button class="nextButton cssColor1" id="cssNextButton" onclick=cssBtn()>Next</button>`;
        cssRemoveValue.innerHTML = "";

    } else if (cssRandomValue == 98 && cssInputAnswer !== cssAnswerArr[98].A98) {
        cssDisplayAnswer.innerHTML = `<textarea name="text" class="answer_textarea" id="input">
h1 {
    background-color: red;
    opacity: 0.4;
}
          </textarea>`;
        cssIncorrectValue.innerHTML = "Incorrect..";
        cssNextButton.innerHTML = `<button class="nextButton cssColor1" id="cssNextButton" onclick=cssBtn()>Next</button>`;
        cssRemoveValue.innerHTML = "";



    } else if (cssRandomValue == 99 && cssInputAnswer == cssAnswerArr[99].A99) {
        cssCorrectValue.innerHTML = "Correct..";
        cssDisplayAnswer.innerHTML = `<textarea name="text" class="answer_textarea" id="input">
        Good Job :) </textarea>`;
        cssNextButton.innerHTML = `<button class="nextButton cssColor1" id="cssNextButton" onclick=cssBtn()>Next</button>`;
        cssRemoveValue.innerHTML = "";

    } else if (cssRandomValue == 99 && cssInputAnswer !== cssAnswerArr[99].A99) {
        cssDisplayAnswer.innerHTML = `<textarea name="text" class="answer_textarea" id="input">
div {
    background-image: linear-gradient(white, green);
}
          </textarea>`;
        cssIncorrectValue.innerHTML = "Incorrect..";
        cssNextButton.innerHTML = `<button class="nextButton cssColor1" id="cssNextButton" onclick=cssBtn()>Next</button>`;
        cssRemoveValue.innerHTML = "";



    } else if (cssRandomValue == 100 && cssInputAnswer == cssAnswerArr[100].A100) {
        cssCorrectValue.innerHTML = "Correct..";
        cssDisplayAnswer.innerHTML = `<textarea name="text" class="answer_textarea" id="input">
        Good Job :) </textarea>`;
        cssNextButton.innerHTML = `<button class="nextButton cssColor1" id="cssNextButton" onclick=cssBtn()>Next</button>`;
        cssRemoveValue.innerHTML = "";

    } else if (cssRandomValue == 100 && cssInputAnswer !== cssAnswerArr[100].A100) {
        cssDisplayAnswer.innerHTML = `<textarea name="text" class="answer_textarea" id="input">
div {
    background-image: linear-gradient(to bottom right, white, green);
}
          </textarea>`;
        cssIncorrectValue.innerHTML = "Incorrect..";
        cssNextButton.innerHTML = `<button class="nextButton cssColor1" id="cssNextButton" onclick=cssBtn()>Next</button>`;
        cssRemoveValue.innerHTML = "";



    } else if (cssRandomValue == 101 && cssInputAnswer == cssAnswerArr[101].A101) {
        cssCorrectValue.innerHTML = "Correct..";
        cssDisplayAnswer.innerHTML = `<textarea name="text" class="answer_textarea" id="input">
        Good Job :) </textarea>`;
        cssNextButton.innerHTML = `<button class="nextButton cssColor1" id="cssNextButton" onclick=cssBtn()>Next</button>`;
        cssRemoveValue.innerHTML = "";

    } else if (cssRandomValue == 101 && cssInputAnswer !== cssAnswerArr[101].A101) {
        cssDisplayAnswer.innerHTML = `<textarea name="text" class="answer_textarea" id="input">
div {
    background-image: linear-gradient(70deg, white, green);
}
          </textarea>`;
        cssIncorrectValue.innerHTML = "Incorrect..";
        cssNextButton.innerHTML = `<button class="nextButton cssColor1" id="cssNextButton" onclick=cssBtn()>Next</button>`;
        cssRemoveValue.innerHTML = "";



    } else if (cssRandomValue == 102 && cssInputAnswer == cssAnswerArr[102].A102) {
        cssCorrectValue.innerHTML = "Correct..";
        cssDisplayAnswer.innerHTML = `<textarea name="text" class="answer_textarea" id="input">
        Good Job :) </textarea>`;
        cssNextButton.innerHTML = `<button class="nextButton cssColor1" id="cssNextButton" onclick=cssBtn()>Next</button>`;
        cssRemoveValue.innerHTML = "";

    } else if (cssRandomValue == 102 && cssInputAnswer !== cssAnswerArr[102].A102) {
        cssDisplayAnswer.innerHTML = `<textarea name="text" class="answer_textarea" id="input">
div {
    background-image: linear-gradient(white, red, blue, green);
}
          </textarea>`;
        cssIncorrectValue.innerHTML = "Incorrect..";
        cssNextButton.innerHTML = `<button class="nextButton cssColor1" id="cssNextButton" onclick=cssBtn()>Next</button>`;
        cssRemoveValue.innerHTML = "";



    } else if (cssRandomValue == 103 && cssInputAnswer == cssAnswerArr[103].A103) {
        cssCorrectValue.innerHTML = "Correct..";
        cssDisplayAnswer.innerHTML = `<textarea name="text" class="answer_textarea" id="input">
        Good Job :) </textarea>`;
        cssNextButton.innerHTML = `<button class="nextButton cssColor1" id="cssNextButton" onclick=cssBtn()>Next</button>`;
        cssRemoveValue.innerHTML = "";

    } else if (cssRandomValue == 103 && cssInputAnswer !== cssAnswerArr[103].A103) {
        cssDisplayAnswer.innerHTML = `<textarea name="text" class="answer_textarea" id="input">
div {
    background-image: linear-gradient(rgba(0,255,0,0.2), rgba(0,255,0,1));
}
          </textarea>`;
        cssIncorrectValue.innerHTML = "Incorrect..";
        cssNextButton.innerHTML = `<button class="nextButton cssColor1" id="cssNextButton" onclick=cssBtn()>Next</button>`;
        cssRemoveValue.innerHTML = "";



    } else if (cssRandomValue == 104 && cssInputAnswer == cssAnswerArr[104].A104) {
        cssCorrectValue.innerHTML = "Correct..";
        cssDisplayAnswer.innerHTML = `<textarea name="text" class="answer_textarea" id="input">
        Good Job :) </textarea>`;
        cssNextButton.innerHTML = `<button class="nextButton cssColor1" id="cssNextButton" onclick=cssBtn()>Next</button>`;
        cssRemoveValue.innerHTML = "";

    } else if (cssRandomValue == 104 && cssInputAnswer !== cssAnswerArr[104].A104) {
        cssDisplayAnswer.innerHTML = `<textarea name="text" class="answer_textarea" id="input">
div {
    background-image: radial-gradient(white, green);
}
          </textarea>`;
        cssIncorrectValue.innerHTML = "Incorrect..";
        cssNextButton.innerHTML = `<button class="nextButton cssColor1" id="cssNextButton" onclick=cssBtn()>Next</button>`;
        cssRemoveValue.innerHTML = "";



    } else if (cssRandomValue == 105 && cssInputAnswer == cssAnswerArr[105].A105) {
        cssCorrectValue.innerHTML = "Correct..";
        cssDisplayAnswer.innerHTML = `<textarea name="text" class="answer_textarea" id="input">
        Good Job :) </textarea>`;
        cssNextButton.innerHTML = `<button class="nextButton cssColor1" id="cssNextButton" onclick=cssBtn()>Next</button>`;
        cssRemoveValue.innerHTML = "";

    } else if (cssRandomValue == 105 && cssInputAnswer !== cssAnswerArr[105].A105) {
        cssDisplayAnswer.innerHTML = `<textarea name="text" class="answer_textarea" id="input">
div {
    background-image: radial-gradient(circle, white, green);
}
          </textarea>`;
        cssIncorrectValue.innerHTML = "Incorrect..";
        cssNextButton.innerHTML = `<button class="nextButton cssColor1" id="cssNextButton" onclick=cssBtn()>Next</button>`;
        cssRemoveValue.innerHTML = "";



    } else if (cssRandomValue == 106 && cssInputAnswer == cssAnswerArr[106].A106) {
        cssCorrectValue.innerHTML = "Correct..";
        cssDisplayAnswer.innerHTML = `<textarea name="text" class="answer_textarea" id="input">
        Good Job :) </textarea>`;
        cssNextButton.innerHTML = `<button class="nextButton cssColor1" id="cssNextButton" onclick=cssBtn()>Next</button>`;
        cssRemoveValue.innerHTML = "";

    } else if (cssRandomValue == 106 && cssInputAnswer !== cssAnswerArr[106].A106) {
        cssDisplayAnswer.innerHTML = `<textarea name="text" class="answer_textarea" id="input">
h1 {
    text-shadow: 2px 2px;
}
          </textarea>`;
        cssIncorrectValue.innerHTML = "Incorrect..";
        cssNextButton.innerHTML = `<button class="nextButton cssColor1" id="cssNextButton" onclick=cssBtn()>Next</button>`;
        cssRemoveValue.innerHTML = "";



    } else if (cssRandomValue == 107 && cssInputAnswer == cssAnswerArr[107].A107) {
        cssCorrectValue.innerHTML = "Correct..";
        cssDisplayAnswer.innerHTML = `<textarea name="text" class="answer_textarea" id="input">
        Good Job :) </textarea>`;
        cssNextButton.innerHTML = `<button class="nextButton cssColor1" id="cssNextButton" onclick=cssBtn()>Next</button>`;
        cssRemoveValue.innerHTML = "";

    } else if (cssRandomValue == 107 && cssInputAnswer !== cssAnswerArr[107].A107) {
        cssDisplayAnswer.innerHTML = `<textarea name="text" class="answer_textarea" id="input">
h1 {
    text-shadow: 2px 2px 5px green;
}
          </textarea>`;
        cssIncorrectValue.innerHTML = "Incorrect..";
        cssNextButton.innerHTML = `<button class="nextButton cssColor1" id="cssNextButton" onclick=cssBtn()>Next</button>`;
        cssRemoveValue.innerHTML = "";



    } else if (cssRandomValue == 108 && cssInputAnswer == cssAnswerArr[108].A108) {
        cssCorrectValue.innerHTML = "Correct..";
        cssDisplayAnswer.innerHTML = `<textarea name="text" class="answer_textarea" id="input">
        Good Job :) </textarea>`;
        cssNextButton.innerHTML = `<button class="nextButton cssColor1" id="cssNextButton" onclick=cssBtn()>Next</button>`;
        cssRemoveValue.innerHTML = "";

    } else if (cssRandomValue == 108 && cssInputAnswer !== cssAnswerArr[108].A108) {
        cssDisplayAnswer.innerHTML = `<textarea name="text" class="answer_textarea" id="input">
h1 {
    text-shadow: 2px 2px 5px green, 0 0 10px red;
}
          </textarea>`;
        cssIncorrectValue.innerHTML = "Incorrect..";
        cssNextButton.innerHTML = `<button class="nextButton cssColor1" id="cssNextButton" onclick=cssBtn()>Next</button>`;
        cssRemoveValue.innerHTML = "";



    } else if (cssRandomValue == 109 && cssInputAnswer == cssAnswerArr[109].A109) {
        cssCorrectValue.innerHTML = "Correct..";
        cssDisplayAnswer.innerHTML = `<textarea name="text" class="answer_textarea" id="input">
        Good Job :) </textarea>`;
        cssNextButton.innerHTML = `<button class="nextButton cssColor1" id="cssNextButton" onclick=cssBtn()>Next</button>`;
        cssRemoveValue.innerHTML = "";

    } else if (cssRandomValue == 109 && cssInputAnswer !== cssAnswerArr[109].A109) {
        cssDisplayAnswer.innerHTML = `<textarea name="text" class="answer_textarea" id="input">
div {
    box-shadow: 10px 10px;
}
          </textarea>`;
        cssIncorrectValue.innerHTML = "Incorrect..";
        cssNextButton.innerHTML = `<button class="nextButton cssColor1" id="cssNextButton" onclick=cssBtn()>Next</button>`;
        cssRemoveValue.innerHTML = "";



    } else if (cssRandomValue == 110 && cssInputAnswer == cssAnswerArr[110].A110) {
        cssCorrectValue.innerHTML = "Correct..";
        cssDisplayAnswer.innerHTML = `<textarea name="text" class="answer_textarea" id="input">
        Good Job :) </textarea>`;
        cssNextButton.innerHTML = `<button class="nextButton cssColor1" id="cssNextButton" onclick=cssBtn()>Next</button>`;
        cssRemoveValue.innerHTML = "";

    } else if (cssRandomValue == 110 && cssInputAnswer !== cssAnswerArr[110].A110) {
        cssDisplayAnswer.innerHTML = `<textarea name="text" class="answer_textarea" id="input">
div {
    box-shadow: 10px 10px 5px grey;
}
          </textarea>`;
        cssIncorrectValue.innerHTML = "Incorrect..";
        cssNextButton.innerHTML = `<button class="nextButton cssColor1" id="cssNextButton" onclick=cssBtn()>Next</button>`;
        cssRemoveValue.innerHTML = "";



    } else if (cssRandomValue == 111 && cssInputAnswer == cssAnswerArr[111].A111) {
        cssCorrectValue.innerHTML = "Correct..";
        cssDisplayAnswer.innerHTML = `<textarea name="text" class="answer_textarea" id="input">
        Good Job :) </textarea>`;
        cssNextButton.innerHTML = `<button class="nextButton cssColor1" id="cssNextButton" onclick=cssBtn()>Next</button>`;
        cssRemoveValue.innerHTML = "";

    } else if (cssRandomValue == 111 && cssInputAnswer !== cssAnswerArr[111].A111) {
        cssDisplayAnswer.innerHTML = `<textarea name="text" class="answer_textarea" id="input">
p {
    white-space: nowrap; 
    width: 200px; 
    border: 1px solid #000000;
    overflow: hidden;
    text-overflow: ellipsis;
}
          </textarea>`;
        cssIncorrectValue.innerHTML = "Incorrect..";
        cssNextButton.innerHTML = `<button class="nextButton cssColor1" id="cssNextButton" onclick=cssBtn()>Next</button>`;
        cssRemoveValue.innerHTML = "";



    } else if (cssRandomValue == 112 && cssInputAnswer == cssAnswerArr[112].A112) {
        cssCorrectValue.innerHTML = "Correct..";
        cssDisplayAnswer.innerHTML = `<textarea name="text" class="answer_textarea" id="input">
        Good Job :) </textarea>`;
        cssNextButton.innerHTML = `<button class="nextButton cssColor1" id="cssNextButton" onclick=cssBtn()>Next</button>`;
        cssRemoveValue.innerHTML = "";

    } else if (cssRandomValue == 112 && cssInputAnswer !== cssAnswerArr[112].A112) {
        cssDisplayAnswer.innerHTML = `<textarea name="text" class="answer_textarea" id="input">
p {
    width: 150px; 
    border: 1px solid #000000;
    word-wrap: break-word;
}
          </textarea>`;
        cssIncorrectValue.innerHTML = "Incorrect..";
        cssNextButton.innerHTML = `<button class="nextButton cssColor1" id="cssNextButton" onclick=cssBtn()>Next</button>`;
        cssRemoveValue.innerHTML = "";



    } else if (cssRandomValue == 113 && cssInputAnswer == cssAnswerArr[113].A113) {
        cssCorrectValue.innerHTML = "Correct..";
        cssDisplayAnswer.innerHTML = `<textarea name="text" class="answer_textarea" id="input">
        Good Job :) </textarea>`;
        cssNextButton.innerHTML = `<button class="nextButton cssColor1" id="cssNextButton" onclick=cssBtn()>Next</button>`;
        cssRemoveValue.innerHTML = "";

    } else if (cssRandomValue == 113 && cssInputAnswer !== cssAnswerArr[113].A113) {
        cssDisplayAnswer.innerHTML = `<textarea name="text" class="answer_textarea" id="input">
p {
    width: 150px; 
    border: 1px solid #000000;
    word-break: break-all;
}
          </textarea>`;
        cssIncorrectValue.innerHTML = "Incorrect..";
        cssNextButton.innerHTML = `<button class="nextButton cssColor1" id="cssNextButton" onclick=cssBtn()>Next</button>`;
        cssRemoveValue.innerHTML = "";



    } else if (cssRandomValue == 114 && cssInputAnswer == cssAnswerArr[114].A114) {
        cssCorrectValue.innerHTML = "Correct..";
        cssDisplayAnswer.innerHTML = `<textarea name="text" class="answer_textarea" id="input">
        Good Job :) </textarea>`;
        cssNextButton.innerHTML = `<button class="nextButton cssColor1" id="cssNextButton" onclick=cssBtn()>Next</button>`;
        cssRemoveValue.innerHTML = "";

    } else if (cssRandomValue == 114 && cssInputAnswer !== cssAnswerArr[114].A114) {
        cssDisplayAnswer.innerHTML = `<textarea name="text" class="answer_textarea" id="input">
@font-face {
    font-family: sansation;
    src: url(sansation_light.woff);
}
          </textarea>`;
        cssIncorrectValue.innerHTML = "Incorrect..";
        cssNextButton.innerHTML = `<button class="nextButton cssColor1" id="cssNextButton" onclick=cssBtn()>Next</button>`;
        cssRemoveValue.innerHTML = "";



    } else if (cssRandomValue == 115 && cssInputAnswer == cssAnswerArr[115].A115) {
        cssCorrectValue.innerHTML = "Correct..";
        cssDisplayAnswer.innerHTML = `<textarea name="text" class="answer_textarea" id="input">
        Good Job :) </textarea>`;
        cssNextButton.innerHTML = `<button class="nextButton cssColor1" id="cssNextButton" onclick=cssBtn()>Next</button>`;
        cssRemoveValue.innerHTML = "";

    } else if (cssRandomValue == 115 && cssInputAnswer !== cssAnswerArr[115].A115) {
        cssDisplayAnswer.innerHTML = `<textarea name="text" class="answer_textarea" id="input">
@font-face {
    font-family: sansation;
    src: url(sansation_bold.woff);
    font-weight: bold;
}
          </textarea>`;
        cssIncorrectValue.innerHTML = "Incorrect..";
        cssNextButton.innerHTML = `<button class="nextButton cssColor1" id="cssNextButton" onclick=cssBtn()>Next</button>`;
        cssRemoveValue.innerHTML = "";



    } else if (cssRandomValue == 116 && cssInputAnswer == cssAnswerArr[116].A116) {
        cssCorrectValue.innerHTML = "Correct..";
        cssDisplayAnswer.innerHTML = `<textarea name="text" class="answer_textarea" id="input">
        Good Job :) </textarea>`;
        cssNextButton.innerHTML = `<button class="nextButton cssColor1" id="cssNextButton" onclick=cssBtn()>Next</button>`;
        cssRemoveValue.innerHTML = "";

    } else if (cssRandomValue == 116 && cssInputAnswer !== cssAnswerArr[116].A116) {
        cssDisplayAnswer.innerHTML = `<textarea name="text" class="answer_textarea" id="input">
div {
    width: 100px;
    height: 100px;
    background-color: lightblue;
    border: 1px solid black;
    transform: translate(100px,200px);
}
          </textarea>`;
        cssIncorrectValue.innerHTML = "Incorrect..";
        cssNextButton.innerHTML = `<button class="nextButton cssColor1" id="cssNextButton" onclick=cssBtn()>Next</button>`;
        cssRemoveValue.innerHTML = "";



    } else if (cssRandomValue == 117 && cssInputAnswer == cssAnswerArr[117].A117) {
        cssCorrectValue.innerHTML = "Correct..";
        cssDisplayAnswer.innerHTML = `<textarea name="text" class="answer_textarea" id="input">
        Good Job :) </textarea>`;
        cssNextButton.innerHTML = `<button class="nextButton cssColor1" id="cssNextButton" onclick=cssBtn()>Next</button>`;
        cssRemoveValue.innerHTML = "";

    } else if (cssRandomValue == 117 && cssInputAnswer !== cssAnswerArr[117].A117) {
        cssDisplayAnswer.innerHTML = `<textarea name="text" class="answer_textarea" id="input">
div {
    width: 100px;
    height: 100px;
    margin: 50px;
    background-color: lightblue;
    border: 1px solid black;
    transform: rotate(45deg);
}
          </textarea>`;
        cssIncorrectValue.innerHTML = "Incorrect..";
        cssNextButton.innerHTML = `<button class="nextButton cssColor1" id="cssNextButton" onclick=cssBtn()>Next</button>`;
        cssRemoveValue.innerHTML = "";



    } else if (cssRandomValue == 118 && cssInputAnswer == cssAnswerArr[118].A118) {
        cssCorrectValue.innerHTML = "Correct..";
        cssDisplayAnswer.innerHTML = `<textarea name="text" class="answer_textarea" id="input">
        Good Job :) </textarea>`;
        cssNextButton.innerHTML = `<button class="nextButton cssColor1" id="cssNextButton" onclick=cssBtn()>Next</button>`;
        cssRemoveValue.innerHTML = "";

    } else if (cssRandomValue == 118 && cssInputAnswer !== cssAnswerArr[118].A118) {
        cssDisplayAnswer.innerHTML = `<textarea name="text" class="answer_textarea" id="input">
div {
    width: 100px;
    height: 100px;
    margin: 50px;
    background-color: lightblue;
    border: 1px solid black;
    transform: scale(0.5,2);
}
          </textarea>`;
        cssIncorrectValue.innerHTML = "Incorrect..";
        cssNextButton.innerHTML = `<button class="nextButton cssColor1" id="cssNextButton" onclick=cssBtn()>Next</button>`;
        cssRemoveValue.innerHTML = "";



    } else if (cssRandomValue == 119 && cssInputAnswer == cssAnswerArr[119].A119) {
        cssCorrectValue.innerHTML = "Correct..";
        cssDisplayAnswer.innerHTML = `<textarea name="text" class="answer_textarea" id="input">
        Good Job :) </textarea>`;
        cssNextButton.innerHTML = `<button class="nextButton cssColor1" id="cssNextButton" onclick=cssBtn()>Next</button>`;
        cssRemoveValue.innerHTML = "";

    } else if (cssRandomValue == 119 && cssInputAnswer !== cssAnswerArr[119].A119) {
        cssDisplayAnswer.innerHTML = `<textarea name="text" class="answer_textarea" id="input">
div {
    width: 100px;
    height: 100px;
    margin: 50px;
    background-color: lightblue;
    border: 1px solid black;
    transform: skew(20deg, 30deg);
}
          </textarea>`;
        cssIncorrectValue.innerHTML = "Incorrect..";
        cssNextButton.innerHTML = `<button class="nextButton cssColor1" id="cssNextButton" onclick=cssBtn()>Next</button>`;
        cssRemoveValue.innerHTML = "";



    } else if (cssRandomValue == 120 && cssInputAnswer == cssAnswerArr[120].A120) {
        cssCorrectValue.innerHTML = "Correct..";
        cssDisplayAnswer.innerHTML = `<textarea name="text" class="answer_textarea" id="input">
        Good Job :) </textarea>`;
        cssNextButton.innerHTML = `<button class="nextButton cssColor1" id="cssNextButton" onclick=cssBtn()>Next</button>`;
        cssRemoveValue.innerHTML = "";

    } else if (cssRandomValue == 120 && cssInputAnswer !== cssAnswerArr[120].A120) {
        cssDisplayAnswer.innerHTML = `<textarea name="text" class="answer_textarea" id="input">
div {
    width: 100px;
    height: 100px;
    background-color: lightblue;
    border: 1px solid black;
    transform: rotateX(150deg);
}
          </textarea>`;
        cssIncorrectValue.innerHTML = "Incorrect..";
        cssNextButton.innerHTML = `<button class="nextButton cssColor1" id="cssNextButton" onclick=cssBtn()>Next</button>`;
        cssRemoveValue.innerHTML = "";



    } else if (cssRandomValue == 121 && cssInputAnswer == cssAnswerArr[121].A121) {
        cssCorrectValue.innerHTML = "Correct..";
        cssDisplayAnswer.innerHTML = `<textarea name="text" class="answer_textarea" id="input">
        Good Job :) </textarea>`;
        cssNextButton.innerHTML = `<button class="nextButton cssColor1" id="cssNextButton" onclick=cssBtn()>Next</button>`;
        cssRemoveValue.innerHTML = "";

    } else if (cssRandomValue == 121 && cssInputAnswer !== cssAnswerArr[121].A121) {
        cssDisplayAnswer.innerHTML = `<textarea name="text" class="answer_textarea" id="input">
div {
    width: 100px;
    height: 100px;
    background-color: lightblue;
    border: 1px solid black;
    transform: rotateY(120deg);
}
          </textarea>`;
        cssIncorrectValue.innerHTML = "Incorrect..";
        cssNextButton.innerHTML = `<button class="nextButton cssColor1" id="cssNextButton" onclick=cssBtn()>Next</button>`;
        cssRemoveValue.innerHTML = "";



    } else if (cssRandomValue == 122 && cssInputAnswer == cssAnswerArr[122].A122) {
        cssCorrectValue.innerHTML = "Correct..";
        cssDisplayAnswer.innerHTML = `<textarea name="text" class="answer_textarea" id="input">
        Good Job :) </textarea>`;
        cssNextButton.innerHTML = `<button class="nextButton cssColor1" id="cssNextButton" onclick=cssBtn()>Next</button>`;
        cssRemoveValue.innerHTML = "";

    } else if (cssRandomValue == 122 && cssInputAnswer !== cssAnswerArr[122].A122) {
        cssDisplayAnswer.innerHTML = `<textarea name="text" class="answer_textarea" id="input">
div {
    width: 100px;
    height: 100px;
    background-color: lightblue;
    border: 1px solid black;
    transform: rotateZ(90deg);
}
          </textarea>`;
        cssIncorrectValue.innerHTML = "Incorrect..";
        cssNextButton.innerHTML = `<button class="nextButton cssColor1" id="cssNextButton" onclick=cssBtn()>Next</button>`;
        cssRemoveValue.innerHTML = "";



    } else if (cssRandomValue == 123 && cssInputAnswer == cssAnswerArr[123].A123) {
        cssCorrectValue.innerHTML = "Correct..";
        cssDisplayAnswer.innerHTML = `<textarea name="text" class="answer_textarea" id="input">
        Good Job :) </textarea>`;
        cssNextButton.innerHTML = `<button class="nextButton cssColor1" id="cssNextButton" onclick=cssBtn()>Next</button>`;
        cssRemoveValue.innerHTML = "";

    } else if (cssRandomValue == 123 && cssInputAnswer !== cssAnswerArr[123].A123) {
        cssDisplayAnswer.innerHTML = `<textarea name="text" class="answer_textarea" id="input">
div {
    width: 100px;
    height: 100px;
    background: red;
    transition: width 2s;
}
    
div:hover {
    width: 300px;
}
          </textarea>`;
        cssIncorrectValue.innerHTML = "Incorrect..";
        cssNextButton.innerHTML = `<button class="nextButton cssColor1" id="cssNextButton" onclick=cssBtn()>Next</button>`;
        cssRemoveValue.innerHTML = "";



    } else if (cssRandomValue == 124 && cssInputAnswer == cssAnswerArr[124].A124) {
        cssCorrectValue.innerHTML = "Correct..";
        cssDisplayAnswer.innerHTML = `<textarea name="text" class="answer_textarea" id="input">
        Good Job :) </textarea>`;
        cssNextButton.innerHTML = `<button class="nextButton cssColor1" id="cssNextButton" onclick=cssBtn()>Next</button>`;
        cssRemoveValue.innerHTML = "";

    } else if (cssRandomValue == 124 && cssInputAnswer !== cssAnswerArr[124].A124) {
        cssDisplayAnswer.innerHTML = `<textarea name="text" class="answer_textarea" id="input">
div {
    width: 100px;
    height: 100px;
    background: red;
    transition: width 2s;
    transition-timing-function: ease-in-out;
}
    
div:hover {
    width: 300px;
}
          </textarea>`;
        cssIncorrectValue.innerHTML = "Incorrect..";
        cssNextButton.innerHTML = `<button class="nextButton cssColor1" id="cssNextButton" onclick=cssBtn()>Next</button>`;
        cssRemoveValue.innerHTML = "";



    } else if (cssRandomValue == 125 && cssInputAnswer == cssAnswerArr[125].A125) {
        cssCorrectValue.innerHTML = "Correct..";
        cssDisplayAnswer.innerHTML = `<textarea name="text" class="answer_textarea" id="input">
        Good Job :) </textarea>`;
        cssNextButton.innerHTML = `<button class="nextButton cssColor1" id="cssNextButton" onclick=cssBtn()>Next</button>`;
        cssRemoveValue.innerHTML = "";

    } else if (cssRandomValue == 125 && cssInputAnswer !== cssAnswerArr[125].A125) {
        cssDisplayAnswer.innerHTML = `<textarea name="text" class="answer_textarea" id="input">
div {
    width: 100px;
    height: 100px;
    background: red;
    transition: width 2s;
    transition-delay: 0.5s;
}
    
div:hover {
    width: 300px;
}
          </textarea>`;
        cssIncorrectValue.innerHTML = "Incorrect..";
        cssNextButton.innerHTML = `<button class="nextButton cssColor1" id="cssNextButton" onclick=cssBtn()>Next</button>`;
        cssRemoveValue.innerHTML = "";



    } else if (cssRandomValue == 126 && cssInputAnswer == cssAnswerArr[126].A126) {
        cssCorrectValue.innerHTML = "Correct..";
        cssDisplayAnswer.innerHTML = `<textarea name="text" class="answer_textarea" id="input">
        Good Job :) </textarea>`;
        cssNextButton.innerHTML = `<button class="nextButton cssColor1" id="cssNextButton" onclick=cssBtn()>Next</button>`;
        cssRemoveValue.innerHTML = "";

    } else if (cssRandomValue == 126 && cssInputAnswer !== cssAnswerArr[126].A126) {
        cssDisplayAnswer.innerHTML = `<textarea name="text" class="answer_textarea" id="input">
div {
    width: 100px;
    height: 100px;
    background: red;
    transition: background 2s, transform 2s;
}
    
div:hover {
    background: blue;
    transform: rotate(180deg);
}
          </textarea>`;
        cssIncorrectValue.innerHTML = "Incorrect..";
        cssNextButton.innerHTML = `<button class="nextButton cssColor1" id="cssNextButton" onclick=cssBtn()>Next</button>`;
        cssRemoveValue.innerHTML = "";



    } else if (cssRandomValue == 127 && cssInputAnswer == cssAnswerArr[127].A127) {
        cssCorrectValue.innerHTML = "Correct..";
        cssDisplayAnswer.innerHTML = `<textarea name="text" class="answer_textarea" id="input">
        Good Job :) </textarea>`;
        cssNextButton.innerHTML = `<button class="nextButton cssColor1" id="cssNextButton" onclick=cssBtn()>Next</button>`;
        cssRemoveValue.innerHTML = "";

    } else if (cssRandomValue == 127 && cssInputAnswer !== cssAnswerArr[127].A127) {
        cssDisplayAnswer.innerHTML = `<textarea name="text" class="answer_textarea" id="input">
div {
    width: 100px;
    height: 100px;
    background: red;
    transition: width 2s ease-in-out 0.5s;
}
    
div:hover {
    width: 400px;
}
          </textarea>`;
        cssIncorrectValue.innerHTML = "Incorrect..";
        cssNextButton.innerHTML = `<button class="nextButton cssColor1" id="cssNextButton" onclick=cssBtn()>Next</button>`;
        cssRemoveValue.innerHTML = "";



    } else if (cssRandomValue == 128 && cssInputAnswer == cssAnswerArr[128].A128) {
        cssCorrectValue.innerHTML = "Correct..";
        cssDisplayAnswer.innerHTML = `<textarea name="text" class="answer_textarea" id="input">
        Good Job :) </textarea>`;
        cssNextButton.innerHTML = `<button class="nextButton cssColor1" id="cssNextButton" onclick=cssBtn()>Next</button>`;
        cssRemoveValue.innerHTML = "";

    } else if (cssRandomValue == 128 && cssInputAnswer !== cssAnswerArr[128].A128) {
        cssDisplayAnswer.innerHTML = `<textarea name="text" class="answer_textarea" id="input">
div {
    width: 100px;
    height: 100px;
    background-color: red;
    animation-name: example;
    animation-duration: 2s;
}
    
@keyframes example {
    from {background-color: red;}
    to {background-color: blue;}
}
          </textarea>`;
        cssIncorrectValue.innerHTML = "Incorrect..";
        cssNextButton.innerHTML = `<button class="nextButton cssColor1" id="cssNextButton" onclick=cssBtn()>Next</button>`;
        cssRemoveValue.innerHTML = "";



    } else if (cssRandomValue == 129 && cssInputAnswer == cssAnswerArr[129].A129) {
        cssCorrectValue.innerHTML = "Correct..";
        cssDisplayAnswer.innerHTML = `<textarea name="text" class="answer_textarea" id="input">
        Good Job :) </textarea>`;
        cssNextButton.innerHTML = `<button class="nextButton cssColor1" id="cssNextButton" onclick=cssBtn()>Next</button>`;
        cssRemoveValue.innerHTML = "";

    } else if (cssRandomValue == 129 && cssInputAnswer !== cssAnswerArr[129].A129) {
        cssDisplayAnswer.innerHTML = `<textarea name="text" class="answer_textarea" id="input">
div {
    width: 100px;
    height: 100px;
    position: relative;
    background-color: red;
    animation-name: example;
    animation-duration: 4s;
}
    
@keyframes example {
    0%   {background-color: red; left:0px; top:0px;}
    25%  {background-color: blue; left:0px; top:200px;}
    50%  {background-color: green; left:200px; top:200px;}
    75%  {background-color: yellow; left:200px; top:0px;}
    100% {background-color: red; left:0px; top:0px;}
}
          </textarea>`;
        cssIncorrectValue.innerHTML = "Incorrect..";
        cssNextButton.innerHTML = `<button class="nextButton cssColor1" id="cssNextButton" onclick=cssBtn()>Next</button>`;
        cssRemoveValue.innerHTML = "";



    } else if (cssRandomValue == 130 && cssInputAnswer == cssAnswerArr[130].A130) {
        cssCorrectValue.innerHTML = "Correct..";
        cssDisplayAnswer.innerHTML = `<textarea name="text" class="answer_textarea" id="input">
        Good Job :) </textarea>`;
        cssNextButton.innerHTML = `<button class="nextButton cssColor1" id="cssNextButton" onclick=cssBtn()>Next</button>`;
        cssRemoveValue.innerHTML = "";

    } else if (cssRandomValue == 130 && cssInputAnswer !== cssAnswerArr[130].A130) {
        cssDisplayAnswer.innerHTML = `<textarea name="text" class="answer_textarea" id="input">
div {
    width: 100px;
    height: 100px;
    position: relative;
    background-color: red;
    animation-name: example;
    animation-duration: 2s;
    animation-delay: 1s;
}
    
@keyframes example {
    0%   {background-color: red; left:0px;}
    50%  {background-color: yellow; left:200px;}
    100% {background-color: red; left:0px;}
}
          </textarea>`;
        cssIncorrectValue.innerHTML = "Incorrect..";
        cssNextButton.innerHTML = `<button class="nextButton cssColor1" id="cssNextButton" onclick=cssBtn()>Next</button>`;
        cssRemoveValue.innerHTML = "";



    } else if (cssRandomValue == 131 && cssInputAnswer == cssAnswerArr[131].A131) {
        cssCorrectValue.innerHTML = "Correct..";
        cssDisplayAnswer.innerHTML = `<textarea name="text" class="answer_textarea" id="input">
        Good Job :) </textarea>`;
        cssNextButton.innerHTML = `<button class="nextButton cssColor1" id="cssNextButton" onclick=cssBtn()>Next</button>`;
        cssRemoveValue.innerHTML = "";

    } else if (cssRandomValue == 131 && cssInputAnswer !== cssAnswerArr[131].A131) {
        cssDisplayAnswer.innerHTML = `<textarea name="text" class="answer_textarea" id="input">
div {
    width: 100px;
    height: 100px;
    position: relative;
    background-color: red;
    animation-name: example;
    animation-duration: 2s;
    animation-iteration-count: infinite;
}
    
@keyframes example {
    0%   {background-color: red; left:0px;}
    50%  {background-color: yellow; left:200px;}
    100% {background-color: red; left:0px;}
}
          </textarea>`;
        cssIncorrectValue.innerHTML = "Incorrect..";
        cssNextButton.innerHTML = `<button class="nextButton cssColor1" id="cssNextButton" onclick=cssBtn()>Next</button>`;
        cssRemoveValue.innerHTML = "";



    } else if (cssRandomValue == 132 && cssInputAnswer == cssAnswerArr[132].A132) {
        cssCorrectValue.innerHTML = "Correct..";
        cssDisplayAnswer.innerHTML = `<textarea name="text" class="answer_textarea" id="input">
        Good Job :) </textarea>`;
        cssNextButton.innerHTML = `<button class="nextButton cssColor1" id="cssNextButton" onclick=cssBtn()>Next</button>`;
        cssRemoveValue.innerHTML = "";

    } else if (cssRandomValue == 132 && cssInputAnswer !== cssAnswerArr[132].A132) {
        cssDisplayAnswer.innerHTML = `<textarea name="text" class="answer_textarea" id="input">
div {
    width: 100px;
    height: 100px;
    position: relative;
    background-color: red;
    animation-name: example;
    animation-duration: 4s;
    animation-iteration-count: infinite;
    animation-direction: alternate;   
}
    
@keyframes example {
    0%   {background-color: red; left:0px; top:0px;}
    25%  {background-color: blue; left:0px; top:200px;}
    50%  {background-color: green; left:200px; top:200px;}
    75%  {background-color: yellow; left:200px; top:0px;}
    100% {background-color: red; left:0px; top:0px;}
}
          </textarea>`;
        cssIncorrectValue.innerHTML = "Incorrect..";
        cssNextButton.innerHTML = `<button class="nextButton cssColor1" id="cssNextButton" onclick=cssBtn()>Next</button>`;
        cssRemoveValue.innerHTML = "";



    } else if (cssRandomValue == 133 && cssInputAnswer == cssAnswerArr[133].A133) {
        cssCorrectValue.innerHTML = "Correct..";
        cssDisplayAnswer.innerHTML = `<textarea name="text" class="answer_textarea" id="input">
        Good Job :) </textarea>`;
        cssNextButton.innerHTML = `<button class="nextButton cssColor1" id="cssNextButton" onclick=cssBtn()>Next</button>`;
        cssRemoveValue.innerHTML = "";

    } else if (cssRandomValue == 133 && cssInputAnswer !== cssAnswerArr[133].A133) {
        cssDisplayAnswer.innerHTML = `<textarea name="text" class="answer_textarea" id="input">
div {
    width: 100px;
    height: 100px;
    position: relative;
    background-color: red;
    animation-name: example;
    animation-duration: 4s;
    animation-timing-function: ease-in-out;
}
    
@keyframes example {
    0%   {background-color: red; left:0px;}
    50%  {background-color: yellow; left:200px;}
    100% {background-color: red; left:0px;}
}
          </textarea>`;
        cssIncorrectValue.innerHTML = "Incorrect..";
        cssNextButton.innerHTML = `<button class="nextButton cssColor1" id="cssNextButton" onclick=cssBtn()>Next</button>`;
        cssRemoveValue.innerHTML = "";



    }

    else {
        cssIncorrectValue.innerHTML = "Incorrect..";
        cssNextButton.innerHTML = `<button class="nextButton cssColor1" id="cssNextButton" onclick=cssBtn()>Next</button>`;
        cssRemoveValue.innerHTML = "";
    }

}
window.cssSubmit = cssSubmit; /* to make submit global*/

function cssButton() {
    cssTest = document.getElementById("cssAddedQuestion").innerHTML = cssQuestionArr[cssRandomValue]; /* giving random question to html */

    return cssTest;
}
window.cssButton = cssButton;

function cssShowTest() {
    var cssInputBox = document.getElementById("cssRemove").style.display = "block";
    return cssInputBox;
}
window.cssShowTest = cssShowTest;
function cssBtn() {
    cssRandomValue = Math.floor(Math.random() * cssQuestionArr.length); /* buton next in html to make a next random question*/
    document.getElementById("cssAddedQuestion").innerHTML = cssQuestionArr[cssRandomValue]; /* giving random question to html */
    document.getElementById("cssElementButton").innerHTML = "";/* to clean cssElementButton*/
    document.getElementById("cssRemove").innerHTML = `<textarea name="text" class="answer_textarea" id="input"></textarea></br><button class="answer_submit cssColor1" id="cssStartButton" onclick="cssSubmit()">Submit</button>`;/* to create next text area and Submit button. */
    document.getElementById("cssCheckingAnswer").innerHTML = "";
    document.getElementById("cssShowingAnswer").innerHTML = "";
}
window.cssBtn = cssBtn;/* to make submit global*/

























var javascriptRandomValue = Math.floor(Math.random() * javascriptQuestionArr.length); /* taking random question from htmlQuestionArr*/


function javascriptSubmit() { /* function for html submit button*/

    var javascriptInputAnswer = input.value.replace(/\s+/g, ``); /*replace(/\s+/g, `` is removing all spaces. Avoid checking all the spaces to compare text*/
    var javascriptCorrectValue = document.getElementById("javascriptCheckingAnswer"); /* making getElementById code shorter*/
    var javascriptIncorrectValue = document.getElementById("javascriptCheckingAnswer");
    var javascriptDisplayAnswer = document.getElementById("javascriptShowingAnswer");
    var javascriptNextButton = document.getElementById("javascriptElementButton");
    var javascriptRemoveValue = document.getElementById("javascriptRemove");

    if (javascriptRandomValue == 0 && javascriptInputAnswer == javascriptAnswerArr[0].A0) { /* checking if javascriptRandomValue is 0 and if putting answer the same as javascriptAnswerArr*//*A0 is just that I can track answer numbers when adding questions and answers*/
        javascriptCorrectValue.innerHTML = "Correct..";
        javascriptDisplayAnswer.innerHTML = `
        <textarea name="text" class="answer_textarea" id="input">Good Job :) </textarea>`;
        javascriptNextButton.innerHTML = `<button class="nextButton javascriptColor1" onclick=javascriptBtn()>Next</button>`; /* creating next button with javascriptBtn()function*/
        javascriptRemoveValue.innerHTML = "";/* removing in html answer*/



    } else if (javascriptRandomValue == 0 && javascriptInputAnswer !== javascriptAnswerArr[0].A0) {/*  if random value not == then giving then display the answere.*/
        javascriptDisplayAnswer.innerHTML = `
    <textarea name="text" class="answer_textarea" id="input">
var myName;
        </textarea>`;
        javascriptIncorrectValue.innerHTML = "Incorrect..";
        javascriptNextButton.innerHTML = `<button class="nextButton javascriptColor1" onclick=javascriptBtn()>Next</button>`;
        javascriptRemoveValue.innerHTML = "";



    } else if (javascriptRandomValue == 1 && javascriptInputAnswer == javascriptAnswerArr[1].A1) {
        javascriptCorrectValue.innerHTML = "Correct..";
        javascriptDisplayAnswer.innerHTML = `
        <textarea name="text" class="answer_textarea" id="input">Good Job :) </textarea>`;
        javascriptNextButton.innerHTML = `<button class="nextButton javascriptColor1" onclick=javascriptBtn()>Next</button>`;
        javascriptRemoveValue.innerHTML = "";

    } else if (javascriptRandomValue == 1 && javascriptInputAnswer !== javascriptAnswerArr[1].A1) {
        javascriptDisplayAnswer.innerHTML = `
        <textarea name="text" class="answer_textarea" id="input">
var a = 7;
var b = a;
          </textarea>`;
        javascriptIncorrectValue.innerHTML = "Incorrect..";
        javascriptNextButton.innerHTML = `<button class="nextButton javascriptColor1" onclick=javascriptBtn()>Next</button>`;
        javascriptRemoveValue.innerHTML = "";



    } else if (javascriptRandomValue == 2 && javascriptInputAnswer == javascriptAnswerArr[2].A2) {
        javascriptCorrectValue.innerHTML = "Correct..";
        javascriptDisplayAnswer.innerHTML = `
        <textarea name="text" class="answer_textarea" id="input">Good Job :) </textarea>`;
        javascriptNextButton.innerHTML = `<button class="nextButton javascriptColor1" onclick=javascriptBtn()>Next</button>`;
        javascriptRemoveValue.innerHTML = "";

    } else if (javascriptRandomValue == 2 && javascriptInputAnswer !== javascriptAnswerArr[2].A2) {
        javascriptDisplayAnswer.innerHTML = `
    <textarea name="text" class="answer_textarea" id="input">
var a = 9;
          </textarea>`;
        javascriptIncorrectValue.innerHTML = "Incorrect..";
        javascriptNextButton.innerHTML = `<button class="nextButton javascriptColor1" onclick=javascriptBtn()>Next</button>`;
        javascriptRemoveValue.innerHTML = "";



    } else if (javascriptRandomValue == 3 && javascriptInputAnswer == javascriptAnswerArr[3].A3) {
        javascriptCorrectValue.innerHTML = "Correct..";
        javascriptDisplayAnswer.innerHTML = `
        <textarea name="text" class="answer_textarea" id="input">Good Job :) </textarea>`;
        javascriptNextButton.innerHTML = `<button class="nextButton javascriptColor1" onclick=javascriptBtn()>Next</button>`;
        javascriptRemoveValue.innerHTML = "";

    } else if (javascriptRandomValue == 3 && javascriptInputAnswer !== javascriptAnswerArr[3].A3) {
        javascriptDisplayAnswer.innerHTML = `
    <textarea name="text" class="answer_textarea" id="input">
var a = 5;
var b = 10;
var c = "I am a";
a = a + 1;
b = b + 5;
c = c + " String!";
        </textarea>`;
        javascriptIncorrectValue.innerHTML = "Incorrect..";
        javascriptNextButton.innerHTML = `<button class="nextButton javascriptColor1" onclick=javascriptBtn()>Next</button>`;
        javascriptRemoveValue.innerHTML = "";
        


    } else if (javascriptRandomValue == 4 && javascriptInputAnswer == javascriptAnswerArr[4].A4) {
        javascriptCorrectValue.innerHTML = "Correct..";
        javascriptDisplayAnswer.innerHTML = `
        <textarea name="text" class="answer_textarea" id="input">Good Job :) </textarea>`;
        javascriptNextButton.innerHTML = `<button class="nextButton javascriptColor1" onclick=javascriptBtn()>Next</button>`;
        javascriptRemoveValue.innerHTML = "";

    } else if (javascriptRandomValue == 4 && javascriptInputAnswer !== javascriptAnswerArr[4].A4) {
        javascriptDisplayAnswer.innerHTML = `
    <textarea name="text" class="answer_textarea" id="input">
var studlyCapVar ;
var properCamelCase;
var titleCaseOver;

var studlyCapVar = 10;
var properCamelCase = "A String";
var titleCaseOver = 9000;
        </textarea>`;
        javascriptIncorrectValue.innerHTML = "Incorrect..";
        javascriptNextButton.innerHTML = `<button class="nextButton javascriptColor1" onclick=javascriptBtn()>Next</button>`;
        javascriptRemoveValue.innerHTML = "";



    } else if (javascriptRandomValue == 5 && javascriptInputAnswer == javascriptAnswerArr[5].A5) {
        javascriptCorrectValue.innerHTML = "Correct..";
        javascriptDisplayAnswer.innerHTML = `
        <textarea name="text" class="answer_textarea" id="input">Good Job :) </textarea>`;
        javascriptNextButton.innerHTML = `<button class="nextButton javascriptColor1" onclick=javascriptBtn()>Next</button>`;
        javascriptRemoveValue.innerHTML = "";

    } else if (javascriptRandomValue == 5 && javascriptInputAnswer !== javascriptAnswerArr[5].A5) {
        javascriptDisplayAnswer.innerHTML = `
    <textarea name="text" class="answer_textarea" id="input">
var sum = 10 + 10;
        </textarea>`;
        javascriptIncorrectValue.innerHTML = "Incorrect..";
        javascriptNextButton.innerHTML = `<button class="nextButton javascriptColor1" onclick=javascriptBtn()>Next</button>`;
        javascriptRemoveValue.innerHTML = "";



    } else if (javascriptRandomValue == 6 && javascriptInputAnswer == javascriptAnswerArr[6].A6) {
        javascriptCorrectValue.innerHTML = "Correct..";
        javascriptDisplayAnswer.innerHTML = `
        <textarea name="text" class="answer_textarea" id="input">Good Job :) </textarea>`;
        javascriptNextButton.innerHTML = `<button class="nextButton javascriptColor1" onclick=javascriptBtn()>Next</button>`;
        javascriptRemoveValue.innerHTML = "";

    } else if (javascriptRandomValue == 6 && javascriptInputAnswer !== javascriptAnswerArr[6].A6) {
        javascriptDisplayAnswer.innerHTML = `
    <textarea name="text" class="answer_textarea" id="input">
var diffrence = 45 - 33;
        </textarea>`;
        javascriptIncorrectValue.innerHTML = "Incorrect..";
        javascriptNextButton.innerHTML = `<button class="nextButton javascriptColor1" onclick=javascriptBtn()>Next</button>`;
        javascriptRemoveValue.innerHTML = "";



    } else if (javascriptRandomValue == 7 && javascriptInputAnswer == javascriptAnswerArr[7].A7) {
        javascriptCorrectValue.innerHTML = "Correct..";
        javascriptDisplayAnswer.innerHTML = `
        <textarea name="text" class="answer_textarea" id="input">Good Job :) </textarea>`;
        javascriptNextButton.innerHTML = `<button class="nextButton javascriptColor1" onclick=javascriptBtn()>Next</button>`;
        javascriptRemoveValue.innerHTML = "";

    } else if (javascriptRandomValue == 7 && javascriptInputAnswer !== javascriptAnswerArr[7].A7) {
        javascriptDisplayAnswer.innerHTML = `
    <textarea name="text" class="answer_textarea" id="input">
var  product = 8 * 10;
        </textarea>`;
        javascriptIncorrectValue.innerHTML = "Incorrect..";
        javascriptNextButton.innerHTML = `<button class="nextButton javascriptColor1" onclick=javascriptBtn()>Next</button>`;
        javascriptRemoveValue.innerHTML = "";



    } else if (javascriptRandomValue == 8 && javascriptInputAnswer == javascriptAnswerArr[8].A8) {
        javascriptCorrectValue.innerHTML = "Correct..";
        javascriptDisplayAnswer.innerHTML = `
        <textarea name="text" class="answer_textarea" id="input">Good Job :) </textarea>`;
        javascriptNextButton.innerHTML = `<button class="nextButton javascriptColor1" onclick=javascriptBtn()>Next</button>`;
        javascriptRemoveValue.innerHTML = "";

    } else if (javascriptRandomValue == 8 && javascriptInputAnswer !== javascriptAnswerArr[8].A8) {
        javascriptDisplayAnswer.innerHTML = `
    <textarea name="text" class="answer_textarea" id="input">
var quotient = 66 / 33;
        </textarea>`;
        javascriptIncorrectValue.innerHTML = "Incorrect..";
        javascriptNextButton.innerHTML = `<button class="nextButton javascriptColor1" onclick=javascriptBtn()>Next</button>`;
        javascriptRemoveValue.innerHTML = "";



    } else if (javascriptRandomValue == 9 && javascriptInputAnswer == javascriptAnswerArr[9].A9) {
        javascriptCorrectValue.innerHTML = "Correct..";
        javascriptDisplayAnswer.innerHTML = `
        <textarea name="text" class="answer_textarea" id="input">Good Job :) </textarea>`;
        javascriptNextButton.innerHTML = `<button class="nextButton javascriptColor1" onclick=javascriptBtn()>Next</button>`;
        javascriptRemoveValue.innerHTML = "";

    } else if (javascriptRandomValue == 9 && javascriptInputAnswer !== javascriptAnswerArr[9].A9) {
        javascriptDisplayAnswer.innerHTML = `
    <textarea name="text" class="answer_textarea" id="input">
var myVar = 87;
myVar++;
        </textarea>`;
        javascriptIncorrectValue.innerHTML = "Incorrect..";
        javascriptNextButton.innerHTML = `<button class="nextButton javascriptColor1" onclick=javascriptBtn()>Next</button>`;
        javascriptRemoveValue.innerHTML = "";



    } else if (javascriptRandomValue == 10 && javascriptInputAnswer == javascriptAnswerArr[10].A10) {
        javascriptCorrectValue.innerHTML = "Correct..";
        javascriptDisplayAnswer.innerHTML = `
        <textarea name="text" class="answer_textarea" id="input">Good Job :) </textarea>`;
        javascriptNextButton.innerHTML = `<button class="nextButton javascriptColor1" onclick=javascriptBtn()>Next</button>`;
        javascriptRemoveValue.innerHTML = "";

    } else if (javascriptRandomValue == 10 && javascriptInputAnswer !== javascriptAnswerArr[10].A10) {
        javascriptDisplayAnswer.innerHTML = `
    <textarea name="text" class="answer_textarea" id="input">
var myVar = 11;
myVar--;
        </textarea>`;
        javascriptIncorrectValue.innerHTML = "Incorrect..";
        javascriptNextButton.innerHTML = `<button class="nextButton javascriptColor1" onclick=javascriptBtn()>Next</button>`;
        javascriptRemoveValue.innerHTML = "";



    } else if (javascriptRandomValue == 11 && javascriptInputAnswer == javascriptAnswerArr[11].A11) {
        javascriptCorrectValue.innerHTML = "Correct..";
        javascriptDisplayAnswer.innerHTML = `
        <textarea name="text" class="answer_textarea" id="input">Good Job :) </textarea>`;
        javascriptNextButton.innerHTML = `<button class="nextButton javascriptColor1" onclick=javascriptBtn()>Next</button>`;
        javascriptRemoveValue.innerHTML = "";

    } else if (javascriptRandomValue == 11 && javascriptInputAnswer !== javascriptAnswerArr[11].A11) {
        javascriptDisplayAnswer.innerHTML = `
    <textarea name="text" class="answer_textarea" id="input">
var myDecimal = 5.7;
        </textarea>`;
        javascriptIncorrectValue.innerHTML = "Incorrect..";
        javascriptNextButton.innerHTML = `<button class="nextButton javascriptColor1" onclick=javascriptBtn()>Next</button>`;
        javascriptRemoveValue.innerHTML = "";



    } else if (javascriptRandomValue == 12 && javascriptInputAnswer == javascriptAnswerArr[12].A12) {
        javascriptCorrectValue.innerHTML = "Correct..";
        javascriptDisplayAnswer.innerHTML = `
        <textarea name="text" class="answer_textarea" id="input">Good Job :) </textarea>`;
        javascriptNextButton.innerHTML = `<button class="nextButton javascriptColor1" onclick=javascriptBtn()>Next</button>`;
        javascriptRemoveValue.innerHTML = "";

    } else if (javascriptRandomValue == 12 && javascriptInputAnswer !== javascriptAnswerArr[12].A12) {
        javascriptDisplayAnswer.innerHTML = `
    <textarea name="text" class="answer_textarea" id="input">
var product = 2.0 * 2.5;
        </textarea>`;
        javascriptIncorrectValue.innerHTML = "Incorrect..";
        javascriptNextButton.innerHTML = `<button class="nextButton javascriptColor1" onclick=javascriptBtn()>Next</button>`;
        javascriptRemoveValue.innerHTML = "";



    } else if (javascriptRandomValue == 13 && javascriptInputAnswer == javascriptAnswerArr[13].A13) {
        javascriptCorrectValue.innerHTML = "Correct..";
        javascriptDisplayAnswer.innerHTML = `
        <textarea name="text" class="answer_textarea" id="input">Good Job :) </textarea>`;
        javascriptNextButton.innerHTML = `<button class="nextButton javascriptColor1" onclick=javascriptBtn()>Next</button>`;
        javascriptRemoveValue.innerHTML = "";

    } else if (javascriptRandomValue == 13 && javascriptInputAnswer !== javascriptAnswerArr[13].A13) {
        javascriptDisplayAnswer.innerHTML = `
    <textarea name="text" class="answer_textarea" id="input">
var quotient = 4.4 / 2.0;
        </textarea>`;
        javascriptIncorrectValue.innerHTML = "Incorrect..";
        javascriptNextButton.innerHTML = `<button class="nextButton javascriptColor1" onclick=javascriptBtn()>Next</button>`;
        javascriptRemoveValue.innerHTML = "";



    } else if (javascriptRandomValue == 14 && javascriptInputAnswer == javascriptAnswerArr[14].A14) {
        javascriptCorrectValue.innerHTML = "Correct..";
        javascriptDisplayAnswer.innerHTML = `
        <textarea name="text" class="answer_textarea" id="input">Good Job :) </textarea>`;
        javascriptNextButton.innerHTML = `<button class="nextButton javascriptColor1" onclick=javascriptBtn()>Next</button>`;
        javascriptRemoveValue.innerHTML = "";

    } else if (javascriptRandomValue == 14 && javascriptInputAnswer !== javascriptAnswerArr[14].A14) {
        javascriptDisplayAnswer.innerHTML = `
    <textarea name="text" class="answer_textarea" id="input">
var remainder = 11 % 3;
        </textarea>`;
        javascriptIncorrectValue.innerHTML = "Incorrect..";
        javascriptNextButton.innerHTML = `<button class="nextButton javascriptColor1" onclick=javascriptBtn()>Next</button>`;
        javascriptRemoveValue.innerHTML = "";



    } else if (javascriptRandomValue == 15 && javascriptInputAnswer == javascriptAnswerArr[15].A15) {
        javascriptCorrectValue.innerHTML = "Correct..";
        javascriptDisplayAnswer.innerHTML = `
        <textarea name="text" class="answer_textarea" id="input">Good Job :) </textarea>`;
        javascriptNextButton.innerHTML = `<button class="nextButton javascriptColor1" onclick=javascriptBtn()>Next</button>`;
        javascriptRemoveValue.innerHTML = "";

    } else if (javascriptRandomValue == 15 && javascriptInputAnswer !== javascriptAnswerArr[15].A15) {
        javascriptDisplayAnswer.innerHTML = `
    <textarea name="text" class="answer_textarea" id="input">
var a = 3;
var b = 17;
var c = 12;

a +=12;
b += 9;
c +=7;
        </textarea>`;
        javascriptIncorrectValue.innerHTML = "Incorrect..";
        javascriptNextButton.innerHTML = `<button class="nextButton javascriptColor1" onclick=javascriptBtn()>Next</button>`;
        javascriptRemoveValue.innerHTML = "";



    } else if (javascriptRandomValue == 16 && javascriptInputAnswer == javascriptAnswerArr[16].A16) {
        javascriptCorrectValue.innerHTML = "Correct..";
        javascriptDisplayAnswer.innerHTML = `
        <textarea name="text" class="answer_textarea" id="input">Good Job :) </textarea>`;
        javascriptNextButton.innerHTML = `<button class="nextButton javascriptColor1" onclick=javascriptBtn()>Next</button>`;
        javascriptRemoveValue.innerHTML = "";

    } else if (javascriptRandomValue == 16 && javascriptInputAnswer !== javascriptAnswerArr[16].A16) {
        javascriptDisplayAnswer.innerHTML = `
    <textarea name="text" class="answer_textarea" id="input">
var a = 11;
var b = 9;
var c = 3;

a -= 6;
b -= 15;
c -= 1;
        </textarea>`;
        javascriptIncorrectValue.innerHTML = "Incorrect..";
        javascriptNextButton.innerHTML = `<button class="nextButton javascriptColor1" onclick=javascriptBtn()>Next</button>`;
        javascriptRemoveValue.innerHTML = "";



    } else if (javascriptRandomValue == 17 && javascriptInputAnswer == javascriptAnswerArr[17].A17) {
        javascriptCorrectValue.innerHTML = "Correct..";
        javascriptDisplayAnswer.innerHTML = `
        <textarea name="text" class="answer_textarea" id="input">Good Job :) </textarea>`;
        javascriptNextButton.innerHTML = `<button class="nextButton javascriptColor1" onclick=javascriptBtn()>Next</button>`;
        javascriptRemoveValue.innerHTML = "";

    } else if (javascriptRandomValue == 17 && javascriptInputAnswer !== javascriptAnswerArr[17].A17) {
        javascriptDisplayAnswer.innerHTML = `
    <textarea name="text" class="answer_textarea" id="input">
var a = 5;
var b = 12;
var c = 4.6;

a *=5;
b *= 3;
c *=10;
        </textarea>`;
        javascriptIncorrectValue.innerHTML = "Incorrect..";
        javascriptNextButton.innerHTML = `<button class="nextButton javascriptColor1" onclick=javascriptBtn()>Next</button>`;
        javascriptRemoveValue.innerHTML = "";



    } else if (javascriptRandomValue == 18 && javascriptInputAnswer == javascriptAnswerArr[18].A18) {
        javascriptCorrectValue.innerHTML = "Correct..";
        javascriptDisplayAnswer.innerHTML = `
        <textarea name="text" class="answer_textarea" id="input">Good Job :) </textarea>`;
        javascriptNextButton.innerHTML = `<button class="nextButton javascriptColor1" onclick=javascriptBtn()>Next</button>`;
        javascriptRemoveValue.innerHTML = "";

    } else if (javascriptRandomValue == 18 && javascriptInputAnswer !== javascriptAnswerArr[18].A18) {
        javascriptDisplayAnswer.innerHTML = `
    <textarea name="text" class="answer_textarea" id="input">
var a = 48;
var b = 108;
var c = 33;

a /=12;
b /=4;
c /=11;
        </textarea>`;
        javascriptIncorrectValue.innerHTML = "Incorrect..";
        javascriptNextButton.innerHTML = `<button class="nextButton javascriptColor1" onclick=javascriptBtn()>Next</button>`;
        javascriptRemoveValue.innerHTML = "";



    } else if (javascriptRandomValue == 19 && javascriptInputAnswer == javascriptAnswerArr[19].A19) {
        javascriptCorrectValue.innerHTML = "Correct..";
        javascriptDisplayAnswer.innerHTML = `
        <textarea name="text" class="answer_textarea" id="input">Good Job :) </textarea>`;
        javascriptNextButton.innerHTML = `<button class="nextButton javascriptColor1" onclick=javascriptBtn()>Next</button>`;
        javascriptRemoveValue.innerHTML = "";

    } else if (javascriptRandomValue == 19 && javascriptInputAnswer !== javascriptAnswerArr[19].A19) {
        javascriptDisplayAnswer.innerHTML = `
    <textarea name="text" class="answer_textarea" id="input">
var myFirstName = "first name"; 
var myLastName = "last name";
          </textarea>`;
        javascriptIncorrectValue.innerHTML = "Incorrect..";
        javascriptNextButton.innerHTML = `<button class="nextButton javascriptColor1" onclick=javascriptBtn()>Next</button>`;
        javascriptRemoveValue.innerHTML = "";



    } else if (javascriptRandomValue == 20 && javascriptInputAnswer == javascriptAnswerArr[20].A20) {
        javascriptCorrectValue.innerHTML = "Correct..";
        javascriptDisplayAnswer.innerHTML = `
        <textarea name="text" class="answer_textarea" id="input">Good Job :) </textarea>`;
        javascriptNextButton.innerHTML = `<button class="nextButton javascriptColor1" onclick=javascriptBtn()>Next</button>`;
        javascriptRemoveValue.innerHTML = "";

    } else if (javascriptRandomValue == 20 && javascriptInputAnswer !== javascriptAnswerArr[20].A20) {
        javascriptDisplayAnswer.innerHTML = `
    <textarea name="text" class="answer_textarea" id="input">
var myStr = "I am a \"double quoted\" string inside \"double quotes\".";
        </textarea>`;
        javascriptIncorrectValue.innerHTML = "Incorrect..";
        javascriptNextButton.innerHTML = `<button class="nextButton javascriptColor1" onclick=javascriptBtn()>Next</button>`;
        javascriptRemoveValue.innerHTML = "";



    } else if (javascriptRandomValue == 21 && javascriptInputAnswer == javascriptAnswerArr[21].A21) {
        javascriptCorrectValue.innerHTML = "Correct..";
        javascriptDisplayAnswer.innerHTML = `
        <textarea name="text" class="answer_textarea" id="input">Good Job :) </textarea>`;
        javascriptNextButton.innerHTML = `<button class="nextButton javascriptColor1" onclick=javascriptBtn()>Next</button>`;
        javascriptRemoveValue.innerHTML = "";

    } else if (javascriptRandomValue == 21 && javascriptInputAnswer !== javascriptAnswerArr[21].A21) {
        javascriptDisplayAnswer.innerHTML = `
    <textarea name="text" class="answer_textarea" id="input">
var myStr = '<a href="http://www.example.com" target="_blank">Link</a>';
        </textarea>`;
        javascriptIncorrectValue.innerHTML = "Incorrect..";
        javascriptNextButton.innerHTML = `<button class="nextButton javascriptColor1" onclick=javascriptBtn()>Next</button>`;
        javascriptRemoveValue.innerHTML = "";



    } else if (javascriptRandomValue == 22 && javascriptInputAnswer == javascriptAnswerArr[22].A22) {
        javascriptCorrectValue.innerHTML = "Correct..";
        javascriptDisplayAnswer.innerHTML = `
        <textarea name="text" class="answer_textarea" id="input">Good Job :) </textarea>`;
        javascriptNextButton.innerHTML = `<button class="nextButton javascriptColor1" onclick=javascriptBtn()>Next</button>`;
        javascriptRemoveValue.innerHTML = "";

    } else if (javascriptRandomValue == 22 && javascriptInputAnswer !== javascriptAnswerArr[22].A22) {
        javascriptDisplayAnswer.innerHTML = `
    <textarea name="text" class="answer_textarea" id="input">
var myStr = "\'FirstLine\n\t\SecondLine\nThirdLine";
        </textarea>`;
        javascriptIncorrectValue.innerHTML = "Incorrect..";
        javascriptNextButton.innerHTML = `<button class="nextButton javascriptColor1" onclick=javascriptBtn()>Next</button>`;
        javascriptRemoveValue.innerHTML = "";



    } else if (javascriptRandomValue == 23 && javascriptInputAnswer == javascriptAnswerArr[23].A23) {
        javascriptCorrectValue.innerHTML = "Correct..";
        javascriptDisplayAnswer.innerHTML = `
        <textarea name="text" class="answer_textarea" id="input">Good Job :) </textarea>`;
        javascriptNextButton.innerHTML = `<button class="nextButton javascriptColor1" onclick=javascriptBtn()>Next</button>`;
        javascriptRemoveValue.innerHTML = "";

    } else if (javascriptRandomValue == 23 && javascriptInputAnswer !== javascriptAnswerArr[23].A23) {
        javascriptDisplayAnswer.innerHTML = `

    <textarea name="text" class="answer_textarea" id="input">
var myStr="This is the start. " + "This is the end.";
              </textarea>`;
        javascriptIncorrectValue.innerHTML = "Incorrect..";
        javascriptNextButton.innerHTML = `<button class="nextButton javascriptColor1" onclick=javascriptBtn()>Next</button>`;
        javascriptRemoveValue.innerHTML = "";



    } else if (javascriptRandomValue == 24 && javascriptInputAnswer == javascriptAnswerArr[24].A24) {
        javascriptCorrectValue.innerHTML = "Correct..";
        javascriptDisplayAnswer.innerHTML = `
        <textarea name="text" class="answer_textarea" id="input">Good Job :) </textarea>`;
        javascriptNextButton.innerHTML = `<button class="nextButton javascriptColor1" onclick=javascriptBtn()>Next</button>`;
        javascriptRemoveValue.innerHTML = "";

    } else if (javascriptRandomValue == 24 && javascriptInputAnswer !== javascriptAnswerArr[24].A24) {
        javascriptDisplayAnswer.innerHTML = `
    <textarea name="text" class="answer_textarea" id="input">
var myStr = "This is the first sentence. ";
myStr += "This is the second sentence.";
        </textarea>`;
        javascriptIncorrectValue.innerHTML = "Incorrect..";
        javascriptNextButton.innerHTML = `<button class="nextButton javascriptColor1" onclick=javascriptBtn()>Next</button>`;
        javascriptRemoveValue.innerHTML = "";



    } else if (javascriptRandomValue == 25 && javascriptInputAnswer == javascriptAnswerArr[25].A25) {
        javascriptCorrectValue.innerHTML = "Correct..";
        javascriptDisplayAnswer.innerHTML = `
        <textarea name="text" class="answer_textarea" id="input">Good Job :) </textarea>`;
        javascriptNextButton.innerHTML = `<button class="nextButton javascriptColor1" onclick=javascriptBtn()>Next</button>`;
        javascriptRemoveValue.innerHTML = "";

    } else if (javascriptRandomValue == 25 && javascriptInputAnswer !== javascriptAnswerArr[25].A25) {
        javascriptDisplayAnswer.innerHTML = `
    <textarea name="text" class="answer_textarea" id="input">
var myName  = "your name";
var myStr = "My name is " + myName +  " and I am well!";
        </textarea>`;
        javascriptIncorrectValue.innerHTML = "Incorrect..";
        javascriptNextButton.innerHTML = `<button class="nextButton javascriptColor1" onclick=javascriptBtn()>Next</button>`;
        javascriptRemoveValue.innerHTML = "";



    } else if (javascriptRandomValue == 26 && javascriptInputAnswer == javascriptAnswerArr[26].A26) {
        javascriptCorrectValue.innerHTML = "Correct..";
        javascriptDisplayAnswer.innerHTML = `
        <textarea name="text" class="answer_textarea" id="input">Good Job :) </textarea>`;
        javascriptNextButton.innerHTML = `<button class="nextButton javascriptColor1" onclick=javascriptBtn()>Next</button>`;
        javascriptRemoveValue.innerHTML = "";

    } else if (javascriptRandomValue == 26 && javascriptInputAnswer !== javascriptAnswerArr[26].A26) {
        javascriptDisplayAnswer.innerHTML = `
    <textarea name="text" class="answer_textarea" id="input">
var someAdjective = "awesome!";
var myStr = "Learning to code is ";
myStr +=someAdjective;
          </textarea>`;
        javascriptIncorrectValue.innerHTML = "Incorrect..";
        javascriptNextButton.innerHTML = `<button class="nextButton javascriptColor1" onclick=javascriptBtn()>Next</button>`;
        javascriptRemoveValue.innerHTML = "";



    } else if (javascriptRandomValue == 27 && javascriptInputAnswer == javascriptAnswerArr[27].A27) {
        javascriptCorrectValue.innerHTML = "Correct..";
        javascriptDisplayAnswer.innerHTML = `
        <textarea name="text" class="answer_textarea" id="input">Good Job :) </textarea>`;
        javascriptNextButton.innerHTML = `<button class="nextButton javascriptColor1" onclick=javascriptBtn()>Next</button>`;
        javascriptRemoveValue.innerHTML = "";

    } else if (javascriptRandomValue == 27 && javascriptInputAnswer !== javascriptAnswerArr[27].A27) {
        javascriptDisplayAnswer.innerHTML = `
    <textarea name="text" class="answer_textarea" id="input">
var lastNameLength = 0;
var lastName = "Lovelace";
lastNameLength = lastName.length;
        </textarea>`;
        javascriptIncorrectValue.innerHTML = "Incorrect..";
        javascriptNextButton.innerHTML = `<button class="nextButton javascriptColor1" onclick=javascriptBtn()>Next</button>`;
        javascriptRemoveValue.innerHTML = "";



    } else if (javascriptRandomValue == 28 && javascriptInputAnswer == javascriptAnswerArr[28].A28) {
        javascriptCorrectValue.innerHTML = "Correct..";
        javascriptDisplayAnswer.innerHTML = `
        <textarea name="text" class="answer_textarea" id="input">Good Job :) </textarea>`;
        javascriptNextButton.innerHTML = `<button class="nextButton javascriptColor1" onclick=javascriptBtn()>Next</button>`;
        javascriptRemoveValue.innerHTML = "";

    } else if (javascriptRandomValue == 28 && javascriptInputAnswer !== javascriptAnswerArr[28].A28) {
        javascriptDisplayAnswer.innerHTML = `
    <textarea name="text" class="answer_textarea" id="input">
var firstLetterOfLastName = "";
var lastName = "Lovelace";
firstLetterOfLastName = lastName[0];
        </textarea>`;
        javascriptIncorrectValue.innerHTML = "Incorrect..";
        javascriptNextButton.innerHTML = `<button class="nextButton javascriptColor1" onclick=javascriptBtn()>Next</button>`;
        javascriptRemoveValue.innerHTML = "";



    } else if (javascriptRandomValue == 29 && javascriptInputAnswer == javascriptAnswerArr[29].A29) {
        javascriptCorrectValue.innerHTML = "Correct..";
        javascriptDisplayAnswer.innerHTML = `
        <textarea name="text" class="answer_textarea" id="input">Good Job :) </textarea>`;
        javascriptNextButton.innerHTML = `<button class="nextButton javascriptColor1" onclick=javascriptBtn()>Next</button>`;
        javascriptRemoveValue.innerHTML = "";

    } else if (javascriptRandomValue == 29 && javascriptInputAnswer !== javascriptAnswerArr[29].A29) {
        javascriptDisplayAnswer.innerHTML = `
    <textarea name="text" class="answer_textarea" id="input">
var myStr = "Jello World";
myStr = "Hello World";
        </textarea>`;
        javascriptIncorrectValue.innerHTML = "Incorrect..";
        javascriptNextButton.innerHTML = `<button class="nextButton javascriptColor1" onclick=javascriptBtn()>Next</button>`;
        javascriptRemoveValue.innerHTML = "";



    } else if (javascriptRandomValue == 30 && javascriptInputAnswer == javascriptAnswerArr[30].A30) {
        javascriptCorrectValue.innerHTML = "Correct..";
        javascriptDisplayAnswer.innerHTML = `
        <textarea name="text" class="answer_textarea" id="input">Good Job :) </textarea>`;
        javascriptNextButton.innerHTML = `<button class="nextButton javascriptColor1" onclick=javascriptBtn()>Next</button>`;
        javascriptRemoveValue.innerHTML = "";

    } else if (javascriptRandomValue == 30 && javascriptInputAnswer !== javascriptAnswerArr[30].A30) {
        javascriptDisplayAnswer.innerHTML = `
    <textarea name="text" class="answer_textarea" id="input">
var lastName = "Lovelace";
var thirdLetterOfLastName = lastName[2];
        </textarea>`;
        javascriptIncorrectValue.innerHTML = "Incorrect..";
        javascriptNextButton.innerHTML = `<button class="nextButton javascriptColor1" onclick=javascriptBtn()>Next</button>`;
        javascriptRemoveValue.innerHTML = "";



    } else if (javascriptRandomValue == 31 && javascriptInputAnswer == javascriptAnswerArr[31].A31) {
        javascriptCorrectValue.innerHTML = "Correct..";
        javascriptDisplayAnswer.innerHTML = `
        <textarea name="text" class="answer_textarea" id="input">Good Job :) </textarea>`;
        javascriptNextButton.innerHTML = `<button class="nextButton javascriptColor1" onclick=javascriptBtn()>Next</button>`;
        javascriptRemoveValue.innerHTML = "";

    } else if (javascriptRandomValue == 31 && javascriptInputAnswer !== javascriptAnswerArr[31].A31) {
        javascriptDisplayAnswer.innerHTML = `
    <textarea name="text" class="answer_textarea" id="input">
var lastName = "Lovelace";
var lastLetterOfLastName = lastName[lastName.length - 1];
        </textarea>`;
        javascriptIncorrectValue.innerHTML = "Incorrect..";
        javascriptNextButton.innerHTML = `<button class="nextButton javascriptColor1" onclick=javascriptBtn()>Next</button>`;
        javascriptRemoveValue.innerHTML = "";



    } else if (javascriptRandomValue == 32 && javascriptInputAnswer == javascriptAnswerArr[32].A32) {
        javascriptCorrectValue.innerHTML = "Correct..";
        javascriptDisplayAnswer.innerHTML = `
        <textarea name="text" class="answer_textarea" id="input">Good Job :) </textarea>`;
        javascriptNextButton.innerHTML = `<button class="nextButton javascriptColor1" onclick=javascriptBtn()>Next</button>`;
        javascriptRemoveValue.innerHTML = "";

    } else if (javascriptRandomValue == 32 && javascriptInputAnswer !== javascriptAnswerArr[32].A32) {
        javascriptDisplayAnswer.innerHTML = `
    <textarea name="text" class="answer_textarea" id="input">
var lastName = "Lovelace";
var secondToLastLetterOfLastName = lastName[lastName.length - 2];
        </textarea>`;
        javascriptIncorrectValue.innerHTML = "Incorrect..";
        javascriptNextButton.innerHTML = `<button class="nextButton javascriptColor1" onclick=javascriptBtn()>Next</button>`;
        javascriptRemoveValue.innerHTML = "";



    } else if (javascriptRandomValue == 33 && javascriptInputAnswer == javascriptAnswerArr[33].A33) {
        javascriptCorrectValue.innerHTML = "Correct..";
        javascriptDisplayAnswer.innerHTML = `
        <textarea name="text" class="answer_textarea" id="input">Good Job :) </textarea>`;
        javascriptNextButton.innerHTML = `<button class="nextButton javascriptColor1" onclick=javascriptBtn()>Next</button>`;
        javascriptRemoveValue.innerHTML = "";

    } else if (javascriptRandomValue == 33 && javascriptInputAnswer !== javascriptAnswerArr[33].A33) {
        javascriptDisplayAnswer.innerHTML = `
    <textarea name="text" class="answer_textarea" id="input">
function wordBlanks(myNoun, myAdjective, myVerb, myAdverb) {
    var result = "";
    result+= "My "+myAdjective+" "+myNoun+" "+myVerb+" very "+myAdverb+".";
    return result;
}
wordBlanks("dog", "big", "ran", "quickly");</textarea>`;
        javascriptIncorrectValue.innerHTML = "Incorrect..";
        javascriptNextButton.innerHTML = `<button class="nextButton javascriptColor1" onclick=javascriptBtn()>Next</button>`;
        javascriptRemoveValue.innerHTML = "";



    } else if (javascriptRandomValue == 34 && javascriptInputAnswer == javascriptAnswerArr[34].A34) {
        javascriptCorrectValue.innerHTML = "Correct..";
        javascriptDisplayAnswer.innerHTML = `
        <textarea name="text" class="answer_textarea" id="input">Good Job :) </textarea>`;
        javascriptNextButton.innerHTML = `<button class="nextButton javascriptColor1" onclick=javascriptBtn()>Next</button>`;
        javascriptRemoveValue.innerHTML = "";

    } else if (javascriptRandomValue == 34 && javascriptInputAnswer !== javascriptAnswerArr[34].A34) {
        javascriptDisplayAnswer.innerHTML = `
    <textarea name="text" class="answer_textarea" id="input">
var myAray = ["test", 0];
        </textarea>`;
        javascriptIncorrectValue.innerHTML = "Incorrect..";
        javascriptNextButton.innerHTML = `<button class="nextButton javascriptColor1" onclick=javascriptBtn()>Next</button>`;
        javascriptRemoveValue.innerHTML = "";



    } else if (javascriptRandomValue == 35 && javascriptInputAnswer == javascriptAnswerArr[35].A35) {
        javascriptCorrectValue.innerHTML = "Correct..";
        javascriptDisplayAnswer.innerHTML = `
        <textarea name="text" class="answer_textarea" id="input">Good Job :) </textarea>`;
        javascriptNextButton.innerHTML = `<button class="nextButton javascriptColor1" onclick=javascriptBtn()>Next</button>`;
        javascriptRemoveValue.innerHTML = "";

    } else if (javascriptRandomValue == 35 && javascriptInputAnswer !== javascriptAnswerArr[35].A35) {
        javascriptDisplayAnswer.innerHTML = `
    <textarea name="text" class="answer_textarea" id="input">
var myArray = [["the universe", 42], ["everything", 101010]];
        </textarea>`;
        javascriptIncorrectValue.innerHTML = "Incorrect..";
        javascriptNextButton.innerHTML = `<button class="nextButton javascriptColor1" onclick=javascriptBtn()>Next</button>`;
        javascriptRemoveValue.innerHTML = "";



    } else if (javascriptRandomValue == 36 && javascriptInputAnswer == javascriptAnswerArr[36].A36) {
        javascriptCorrectValue.innerHTML = "Correct..";
        javascriptDisplayAnswer.innerHTML = `
        <textarea name="text" class="answer_textarea" id="input">Good Job :) </textarea>`;
        javascriptNextButton.innerHTML = `<button class="nextButton javascriptColor1" onclick=javascriptBtn()>Next</button>`;
        javascriptRemoveValue.innerHTML = "";

    } else if (javascriptRandomValue == 36 && javascriptInputAnswer !== javascriptAnswerArr[36].A36) {
        javascriptDisplayAnswer.innerHTML = `
    <textarea name="text" class="answer_textarea" id="input">
var myArray = [50,60,70];
var myData = myArray[0];
        </textarea>`;
        javascriptIncorrectValue.innerHTML = "Incorrect..";
        javascriptNextButton.innerHTML = `<button class="nextButton javascriptColor1" onclick=javascriptBtn()>Next</button>`;
        javascriptRemoveValue.innerHTML = "";



    } else if (javascriptRandomValue == 37 && javascriptInputAnswer == javascriptAnswerArr[37].A37) {
        javascriptCorrectValue.innerHTML = "Correct..";
        javascriptDisplayAnswer.innerHTML = `
        <textarea name="text" class="answer_textarea" id="input">Good Job :) </textarea>`;
        javascriptNextButton.innerHTML = `<button class="nextButton javascriptColor1" onclick=javascriptBtn()>Next</button>`;
        javascriptRemoveValue.innerHTML = "";

    } else if (javascriptRandomValue == 37 && javascriptInputAnswer !== javascriptAnswerArr[37].A37) {
        javascriptDisplayAnswer.innerHTML = `
    <textarea name="text" class="answer_textarea" id="input">
var myArray = [18,64,99];
myArray[0] = 45;
        </textarea>`;
        javascriptIncorrectValue.innerHTML = "Incorrect..";
        javascriptNextButton.innerHTML = `<button class="nextButton javascriptColor1" onclick=javascriptBtn()>Next</button>`;
        javascriptRemoveValue.innerHTML = "";



    } else if (javascriptRandomValue == 38 && javascriptInputAnswer == javascriptAnswerArr[38].A38) {
        javascriptCorrectValue.innerHTML = "Correct..";
        javascriptDisplayAnswer.innerHTML = `
        <textarea name="text" class="answer_textarea" id="input">Good Job :) </textarea>`;
        javascriptNextButton.innerHTML = `<button class="nextButton javascriptColor1" onclick=javascriptBtn()>Next</button>`;
        javascriptRemoveValue.innerHTML = "";

    } else if (javascriptRandomValue == 38 && javascriptInputAnswer !== javascriptAnswerArr[38].A38) {
        javascriptDisplayAnswer.innerHTML = `
    <textarea name="text" class="answer_textarea" id="input">
var myArray = [[1,2,3], [4,5,6], [7,8,9], [[10,11,12], 13, 14]];
var myData = myArray[2][1];
        </textarea>`;
        javascriptIncorrectValue.innerHTML = "Incorrect..";
        javascriptNextButton.innerHTML = `<button class="nextButton javascriptColor1" onclick=javascriptBtn()>Next</button>`;
        javascriptRemoveValue.innerHTML = "";



    } else if (javascriptRandomValue == 39 && javascriptInputAnswer == javascriptAnswerArr[39].A39) {
        javascriptCorrectValue.innerHTML = "Correct..";
        javascriptDisplayAnswer.innerHTML = `
        <textarea name="text" class="answer_textarea" id="input">Good Job :) </textarea>`;
        javascriptNextButton.innerHTML = `<button class="nextButton javascriptColor1" onclick=javascriptBtn()>Next</button>`;
        javascriptRemoveValue.innerHTML = "";

    } else if (javascriptRandomValue == 39 && javascriptInputAnswer !== javascriptAnswerArr[39].A39) {
        javascriptDisplayAnswer.innerHTML = `
    <textarea name="text" class="answer_textarea" id="input">
var myArray = [["John", 23], ["cat", 2]];
myArray.push(["dog", 3]);
        </textarea>`;
        javascriptIncorrectValue.innerHTML = "Incorrect..";
        javascriptNextButton.innerHTML = `<button class="nextButton javascriptColor1" onclick=javascriptBtn()>Next</button>`;
        javascriptRemoveValue.innerHTML = "";



    } else if (javascriptRandomValue == 40 && javascriptInputAnswer == javascriptAnswerArr[40].A40) {
        javascriptCorrectValue.innerHTML = "Correct..";
        javascriptDisplayAnswer.innerHTML = `
        <textarea name="text" class="answer_textarea" id="input">Good Job :) </textarea>`;
        javascriptNextButton.innerHTML = `<button class="nextButton javascriptColor1" onclick=javascriptBtn()>Next</button>`;
        javascriptRemoveValue.innerHTML = "";

    } else if (javascriptRandomValue == 40 && javascriptInputAnswer !== javascriptAnswerArr[40].A40) {
        javascriptDisplayAnswer.innerHTML = `
    <textarea name="text" class="answer_textarea" id="input">
var myArray = [["John", 23], ["cat", 2]];
var removedFromMyArray = myArray.pop();
        </textarea>`;
        javascriptIncorrectValue.innerHTML = "Incorrect..";
        javascriptNextButton.innerHTML = `<button class="nextButton javascriptColor1" onclick=javascriptBtn()>Next</button>`;
        javascriptRemoveValue.innerHTML = "";



    } else if (javascriptRandomValue == 41 && javascriptInputAnswer == javascriptAnswerArr[41].A41) {
        javascriptCorrectValue.innerHTML = "Correct..";
        javascriptDisplayAnswer.innerHTML = `
        <textarea name="text" class="answer_textarea" id="input">Good Job :) </textarea>`;
        javascriptNextButton.innerHTML = `<button class="nextButton javascriptColor1" onclick=javascriptBtn()>Next</button>`;
        javascriptRemoveValue.innerHTML = "";

    } else if (javascriptRandomValue == 41 && javascriptInputAnswer !== javascriptAnswerArr[41].A41) {
        javascriptDisplayAnswer.innerHTML = `

    <textarea name="text" class="answer_textarea" id="input">
ar myArray = [["John", 23], ["dog", 3]];
var removedFromMyArray = myArray.shift();
        </textarea>`;
        javascriptIncorrectValue.innerHTML = "Incorrect..";
        javascriptNextButton.innerHTML = `<button class="nextButton javascriptColor1" onclick=javascriptBtn()>Next</button>`;
        javascriptRemoveValue.innerHTML = "";



    } else if (javascriptRandomValue == 42 && javascriptInputAnswer == javascriptAnswerArr[42].A42) {
        javascriptCorrectValue.innerHTML = "Correct..";
        javascriptDisplayAnswer.innerHTML = `
        <textarea name="text" class="answer_textarea" id="input">Good Job :) </textarea>`;
        javascriptNextButton.innerHTML = `<button class="nextButton javascriptColor1" onclick=javascriptBtn()>Next</button>`;
        javascriptRemoveValue.innerHTML = "";

    } else if (javascriptRandomValue == 42 && javascriptInputAnswer !== javascriptAnswerArr[42].A42) {
        javascriptDisplayAnswer.innerHTML = `
    <textarea name="text" class="answer_textarea" id="input">
var myArray = [["John", 23], ["dog", 3]];
myArray.shift();
myArray.unshift( ["Paul",35]);
        </textarea>`;
        javascriptIncorrectValue.innerHTML = "Incorrect..";
        javascriptNextButton.innerHTML = `<button class="nextButton javascriptColor1" onclick=javascriptBtn()>Next</button>`;
        javascriptRemoveValue.innerHTML = "";



    } else if (javascriptRandomValue == 43 && javascriptInputAnswer == javascriptAnswerArr[43].A43) {
        javascriptCorrectValue.innerHTML = "Correct..";
        javascriptDisplayAnswer.innerHTML = `
        <textarea name="text" class="answer_textarea" id="input">Good Job :) </textarea>`;
        javascriptNextButton.innerHTML = `<button class="nextButton javascriptColor1" onclick=javascriptBtn()>Next</button>`;
        javascriptRemoveValue.innerHTML = "";

    } else if (javascriptRandomValue == 43 && javascriptInputAnswer !== javascriptAnswerArr[43].A43) {
        javascriptDisplayAnswer.innerHTML = `
    <textarea name="text" class="answer_textarea" id="input">
var myList = [["Canned Beans", 3],["Milk Galon", 1],["Cereal", 2],["Toilet Paper", 12],["Sack of Rice", 1]];
        </textarea>`;
        javascriptIncorrectValue.innerHTML = "Incorrect..";
        javascriptNextButton.innerHTML = `<button class="nextButton javascriptColor1" onclick=javascriptBtn()>Next</button>`;
        javascriptRemoveValue.innerHTML = "";



    } else if (javascriptRandomValue == 44 && javascriptInputAnswer == javascriptAnswerArr[44].A44) {
        javascriptCorrectValue.innerHTML = "Correct..";
        javascriptDisplayAnswer.innerHTML = `
        <textarea name="text" class="answer_textarea" id="input">Good Job :) </textarea>`;
        javascriptNextButton.innerHTML = `<button class="nextButton javascriptColor1" onclick=javascriptBtn()>Next</button>`;
        javascriptRemoveValue.innerHTML = "";

    } else if (javascriptRandomValue == 44 && javascriptInputAnswer !== javascriptAnswerArr[44].A44) {
        javascriptDisplayAnswer.innerHTML = `
    <textarea name="text" class="answer_textarea" id="input">
function reusableFunction() {
    console.log("Hi World");
}
    
reusableFunction();
          </textarea>`;
        javascriptIncorrectValue.innerHTML = "Incorrect..";
        javascriptNextButton.innerHTML = `<button class="nextButton javascriptColor1" onclick=javascriptBtn()>Next</button>`;
        javascriptRemoveValue.innerHTML = "";



    } else if (javascriptRandomValue == 45 && javascriptInputAnswer == javascriptAnswerArr[45].A45) {
        javascriptCorrectValue.innerHTML = "Correct..";
        javascriptDisplayAnswer.innerHTML = `
        <textarea name="text" class="answer_textarea" id="input">Good Job :) </textarea>`;
        javascriptNextButton.innerHTML = `<button class="nextButton javascriptColor1" onclick=javascriptBtn()>Next</button>`;
        javascriptRemoveValue.innerHTML = "";

    } else if (javascriptRandomValue == 45 && javascriptInputAnswer !== javascriptAnswerArr[45].A45) {
        javascriptDisplayAnswer.innerHTML = `
    <textarea name="text" class="answer_textarea" id="input">
function functionWithArgs(a, b) {
    console.log(a + b);
}
functionWithArgs(10, 5);
          </textarea>`;
        javascriptIncorrectValue.innerHTML = "Incorrect..";
        javascriptNextButton.innerHTML = `<button class="nextButton javascriptColor1" onclick=javascriptBtn()>Next</button>`;
        javascriptRemoveValue.innerHTML = "";



    } else if (javascriptRandomValue == 46 && javascriptInputAnswer == javascriptAnswerArr[46].A46) {
        javascriptCorrectValue.innerHTML = "Correct..";
        javascriptDisplayAnswer.innerHTML = `
        <textarea name="text" class="answer_textarea" id="input">Good Job :) </textarea>`;
        javascriptNextButton.innerHTML = `<button class="nextButton javascriptColor1" onclick=javascriptBtn()>Next</button>`;
        javascriptRemoveValue.innerHTML = "";

    } else if (javascriptRandomValue == 46 && javascriptInputAnswer !== javascriptAnswerArr[46].A46) {
        javascriptDisplayAnswer.innerHTML = `

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
        javascriptIncorrectValue.innerHTML = "Incorrect..";
        javascriptNextButton.innerHTML = `<button class="nextButton javascriptColor1" onclick=javascriptBtn()>Next</button>`;
        javascriptRemoveValue.innerHTML = "";



    } else if (javascriptRandomValue == 47 && javascriptInputAnswer == javascriptAnswerArr[47].A47) {
        javascriptCorrectValue.innerHTML = "Correct..";
        javascriptDisplayAnswer.innerHTML = `
        <textarea name="text" class="answer_textarea" id="input">Good Job :) </textarea>`;
        javascriptNextButton.innerHTML = `<button class="nextButton javascriptColor1" onclick=javascriptBtn()>Next</button>`;
        javascriptRemoveValue.innerHTML = "";

    }

    else if (javascriptRandomValue == 47 && javascriptInputAnswer !== javascriptAnswerArr[47].A47) {
        javascriptDisplayAnswer.innerHTML = `
    <textarea name="text" class="answer_textarea" id="input">
function myLocalScope() {
    var myVar;
    console.log(myVar);
}
myLocalScope();
          </textarea>`;
        javascriptIncorrectValue.innerHTML = "Incorrect..";
        javascriptNextButton.innerHTML = `<button class="nextButton javascriptColor1" onclick=javascriptBtn()>Next</button>`;
        javascriptRemoveValue.innerHTML = "";



    } else if (javascriptRandomValue == 48 && javascriptInputAnswer == javascriptAnswerArr[48].A48) {
        javascriptCorrectValue.innerHTML = "Correct..";
        javascriptDisplayAnswer.innerHTML = `
        <textarea name="text" class="answer_textarea" id="input">Good Job :) </textarea>`;
        javascriptNextButton.innerHTML = `<button class="nextButton javascriptColor1" onclick=javascriptBtn()>Next</button>`;
        javascriptRemoveValue.innerHTML = "";

    } else if (javascriptRandomValue == 48 && javascriptInputAnswer !== javascriptAnswerArr[48].A48) {
        javascriptDisplayAnswer.innerHTML = `
    <textarea name="text" class="answer_textarea" id="input">
var outerWear = "T-Shirt";
function myOutfit() {
    var outerWear = "sweater";
    return outerWear;
}
myOutfit();
        </textarea>`;
        javascriptIncorrectValue.innerHTML = "Incorrect..";
        javascriptNextButton.innerHTML = `<button class="nextButton javascriptColor1" onclick=javascriptBtn()>Next</button>`;
        javascriptRemoveValue.innerHTML = "";



    } else if (javascriptRandomValue == 49 && javascriptInputAnswer == javascriptAnswerArr[49].A49) {
        javascriptCorrectValue.innerHTML = "Correct..";
        javascriptDisplayAnswer.innerHTML = `
        <textarea name="text" class="answer_textarea" id="input">Good Job :) </textarea>`;
        javascriptNextButton.innerHTML = `<button class="nextButton javascriptColor1" onclick=javascriptBtn()>Next</button>`;
        javascriptRemoveValue.innerHTML = "";

    } else if (javascriptRandomValue == 49 && javascriptInputAnswer !== javascriptAnswerArr[49].A49) {
        javascriptDisplayAnswer.innerHTML = `
    <textarea name="text" class="answer_textarea" id="input">
function timesFive(num) {
    return num * 5;
}
          </textarea>`;
        javascriptIncorrectValue.innerHTML = "Incorrect..";
        javascriptNextButton.innerHTML = `<button class="nextButton javascriptColor1" onclick=javascriptBtn()>Next</button>`;
        javascriptRemoveValue.innerHTML = "";



    } else if (javascriptRandomValue == 50 && javascriptInputAnswer == javascriptAnswerArr[50].A50) {
        javascriptCorrectValue.innerHTML = "Correct..";
        javascriptDisplayAnswer.innerHTML = `
        <textarea name="text" class="answer_textarea" id="input">Good Job :) </textarea>`;
        javascriptNextButton.innerHTML = `<button class="nextButton javascriptColor1" onclick=javascriptBtn()>Next</button>`;
        javascriptRemoveValue.innerHTML = "";

    } else if (javascriptRandomValue == 50 && javascriptInputAnswer !== javascriptAnswerArr[50].A50) {
        javascriptDisplayAnswer.innerHTML = `
    <textarea name="text" class="answer_textarea" id="input">
function addFive() {
    sum += 5;
}
          </textarea>`;
        javascriptIncorrectValue.innerHTML = "Incorrect..";
        javascriptNextButton.innerHTML = `<button class="nextButton javascriptColor1" onclick=javascriptBtn()>Next</button>`;
        javascriptRemoveValue.innerHTML = "";



    } else if (javascriptRandomValue == 51 && javascriptInputAnswer == javascriptAnswerArr[51].A51) {
        javascriptCorrectValue.innerHTML = "Correct..";
        javascriptDisplayAnswer.innerHTML = `
        <textarea name="text" class="answer_textarea" id="input">Good Job :) </textarea>`;
        javascriptNextButton.innerHTML = `<button class="nextButton javascriptColor1" onclick=javascriptBtn()>Next</button>`;
        javascriptRemoveValue.innerHTML = "";

    } else if (javascriptRandomValue == 51 && javascriptInputAnswer !== javascriptAnswerArr[51].A51) {
        javascriptDisplayAnswer.innerHTML = `
    <textarea name="text" class="answer_textarea" id="input">
var processed = 0;

function processArg(num) {
    return (num + 3) / 5;
}
processed = processArg(7);
        </textarea>`;
        javascriptIncorrectValue.innerHTML = "Incorrect..";
        javascriptNextButton.innerHTML = `<button class="nextButton javascriptColor1" onclick=javascriptBtn()>Next</button>`;
        javascriptRemoveValue.innerHTML = "";



    } else if (javascriptRandomValue == 52 && javascriptInputAnswer == javascriptAnswerArr[52].A52) {
        javascriptCorrectValue.innerHTML = "Correct..";
        javascriptDisplayAnswer.innerHTML = `
        <textarea name="text" class="answer_textarea" id="input">Good Job :) </textarea>`;
        javascriptNextButton.innerHTML = `<button class="nextButton javascriptColor1" onclick=javascriptBtn()>Next</button>`;
        javascriptRemoveValue.innerHTML = "";

    } else if (javascriptRandomValue == 52 && javascriptInputAnswer !== javascriptAnswerArr[52].A52) {
        javascriptDisplayAnswer.innerHTML = `
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
        javascriptIncorrectValue.innerHTML = "Incorrect..";
        javascriptNextButton.innerHTML = `<button class="nextButton javascriptColor1" onclick=javascriptBtn()>Next</button>`;
        javascriptRemoveValue.innerHTML = "";



    } else if (javascriptRandomValue == 53 && javascriptInputAnswer == javascriptAnswerArr[53].A53) {
        javascriptCorrectValue.innerHTML = "Correct..";
        javascriptDisplayAnswer.innerHTML = `
        <textarea name="text" class="answer_textarea" id="input">Good Job :) </textarea>`;
        javascriptNextButton.innerHTML = `<button class="nextButton javascriptColor1" onclick=javascriptBtn()>Next</button>`;
        javascriptRemoveValue.innerHTML = "";

    } else if (javascriptRandomValue == 53 && javascriptInputAnswer !== javascriptAnswerArr[53].A53) {
        javascriptDisplayAnswer.innerHTML = `
    <textarea name="text" class="answer_textarea" id="input">
function welcomeToBooleans() {
    return true; 
}
        </textarea>`;
        javascriptIncorrectValue.innerHTML = "Incorrect..";
        javascriptNextButton.innerHTML = `<button class="nextButton javascriptColor1" onclick=javascriptBtn()>Next</button>`;
        javascriptRemoveValue.innerHTML = "";



    } else if (javascriptRandomValue == 54 && javascriptInputAnswer == javascriptAnswerArr[54].A54) {
        javascriptCorrectValue.innerHTML = "Correct..";
        javascriptDisplayAnswer.innerHTML = `
        <textarea name="text" class="answer_textarea" id="input">Good Job :) </textarea>`;
        javascriptNextButton.innerHTML = `<button class="nextButton javascriptColor1" onclick=javascriptBtn()>Next</button>`;
        javascriptRemoveValue.innerHTML = "";

    } else if (javascriptRandomValue == 54 && javascriptInputAnswer !== javascriptAnswerArr[54].A54) {
        javascriptDisplayAnswer.innerHTML = `
    <textarea name="text" class="answer_textarea" id="input">
function trueOrFalse(wasThatTrue) {
    if (wasThatTrue) {
        return "Yes, that was true";
    }
    return "No, that was false";
    
}
        </textarea>`;
        javascriptIncorrectValue.innerHTML = "Incorrect..";
        javascriptNextButton.innerHTML = `<button class="nextButton javascriptColor1" onclick=javascriptBtn()>Next</button>`;
        javascriptRemoveValue.innerHTML = "";



    } else if (javascriptRandomValue == 55 && javascriptInputAnswer == javascriptAnswerArr[55].A55) {
        javascriptCorrectValue.innerHTML = "Correct..";
        javascriptDisplayAnswer.innerHTML = `
        <textarea name="text" class="answer_textarea" id="input">Good Job :) </textarea>`;
        javascriptNextButton.innerHTML = `<button class="nextButton javascriptColor1" onclick=javascriptBtn()>Next</button>`;
        javascriptRemoveValue.innerHTML = "";

    } else if (javascriptRandomValue == 55 && javascriptInputAnswer !== javascriptAnswerArr[55].A55) {
        javascriptDisplayAnswer.innerHTML = `
    <textarea name="text" class="answer_textarea" id="input">
function testEqual(val) {
    if (val == 12) { 
        return "Equal";
    }
    return "Not Equal";
}
testEqual(10);
        </textarea>`;
        javascriptIncorrectValue.innerHTML = "Incorrect..";
        javascriptNextButton.innerHTML = `<button class="nextButton javascriptColor1" onclick=javascriptBtn()>Next</button>`;
        javascriptRemoveValue.innerHTML = "";



    } else if (javascriptRandomValue == 56 && javascriptInputAnswer == javascriptAnswerArr[56].A56) {
        javascriptCorrectValue.innerHTML = "Correct..";
        javascriptDisplayAnswer.innerHTML = `
        <textarea name="text" class="answer_textarea" id="input">Good Job :) </textarea>`;
        javascriptNextButton.innerHTML = `<button class="nextButton javascriptColor1" onclick=javascriptBtn()>Next</button>`;
        javascriptRemoveValue.innerHTML = "";

    } else if (javascriptRandomValue == 56 && javascriptInputAnswer !== javascriptAnswerArr[56].A56) {
        javascriptDisplayAnswer.innerHTML = `
    <textarea name="text" class="answer_textarea" id="input">
function testStrict(val) {
    if (val === 7) { 
        return "Equal";
    }
    return "Not Equal";
}
testStrict(10);
        </textarea>`;
        javascriptIncorrectValue.innerHTML = "Incorrect..";
        javascriptNextButton.innerHTML = `<button class="nextButton javascriptColor1" onclick=javascriptBtn()>Next</button>`;
        javascriptRemoveValue.innerHTML = "";



    } else if (javascriptRandomValue == 57 && javascriptInputAnswer == javascriptAnswerArr[57].A57) {
        javascriptCorrectValue.innerHTML = "Correct..";
        javascriptDisplayAnswer.innerHTML = `
        <textarea name="text" class="answer_textarea" id="input">Good Job :) </textarea>`;
        javascriptNextButton.innerHTML = `<button class="nextButton javascriptColor1" onclick=javascriptBtn()>Next</button>`;
        javascriptRemoveValue.innerHTML = "";

    } else if (javascriptRandomValue == 57 && javascriptInputAnswer !== javascriptAnswerArr[57].A57) {
        javascriptDisplayAnswer.innerHTML = `
    <textarea name="text" class="answer_textarea" id="input">
function compareEquality(a, b) {
    if (a === b) {
        return  "Equal";
    }
    return  "Not Equal";
}
compareEquality(10, "10");
        </textarea>`;
        javascriptIncorrectValue.innerHTML = "Incorrect..";
        javascriptNextButton.innerHTML = `<button class="nextButton javascriptColor1" onclick=javascriptBtn()>Next</button>`;
        javascriptRemoveValue.innerHTML = "";



    } else if (javascriptRandomValue == 58 && javascriptInputAnswer == javascriptAnswerArr[58].A58) {
        javascriptCorrectValue.innerHTML = "Correct..";
        javascriptDisplayAnswer.innerHTML = `
        <textarea name="text" class="answer_textarea" id="input">Good Job :) </textarea>`;
        javascriptNextButton.innerHTML = `<button class="nextButton javascriptColor1" onclick=javascriptBtn()>Next</button>`;
        javascriptRemoveValue.innerHTML = "";

    } else if (javascriptRandomValue == 58 && javascriptInputAnswer !== javascriptAnswerArr[58].A58) {
        javascriptDisplayAnswer.innerHTML = `
    <textarea name="text" class="answer_textarea" id="input">
function testNotEqual(val) {
    if (val != 99) 
        return "Not Equal";
        
    return "Equal";
}
          
        </textarea>`;
        javascriptIncorrectValue.innerHTML = "Incorrect..";
        javascriptNextButton.innerHTML = `<button class="nextButton javascriptColor1" onclick=javascriptBtn()>Next</button>`;
        javascriptRemoveValue.innerHTML = "";



    } else if (javascriptRandomValue == 59 && javascriptInputAnswer == javascriptAnswerArr[59].A59) {
        javascriptCorrectValue.innerHTML = "Correct..";
        javascriptDisplayAnswer.innerHTML = `
        <textarea name="text" class="answer_textarea" id="input">Good Job :) </textarea>`;
        javascriptNextButton.innerHTML = `<button class="nextButton javascriptColor1" onclick=javascriptBtn()>Next</button>`;
        javascriptRemoveValue.innerHTML = "";

    } else if (javascriptRandomValue == 59 && javascriptInputAnswer !== javascriptAnswerArr[59].A59) {
        javascriptDisplayAnswer.innerHTML = `
    <textarea name="text" class="answer_textarea" id="input">
function testStrictNotEqual(val) {
    if (val !== 17) {
        return "Not Equal";
    }
    return "Equal";
}
testStrictNotEqual(10);
        </textarea>`;
        javascriptIncorrectValue.innerHTML = "Incorrect..";
        javascriptNextButton.innerHTML = `<button class="nextButton javascriptColor1" onclick=javascriptBtn()>Next</button>`;
        javascriptRemoveValue.innerHTML = "";



    } else if (javascriptRandomValue == 60 && javascriptInputAnswer == javascriptAnswerArr[60].A60) {
        javascriptCorrectValue.innerHTML = "Correct..";
        javascriptDisplayAnswer.innerHTML = `
        <textarea name="text" class="answer_textarea" id="input">Good Job :) </textarea>`;
        javascriptNextButton.innerHTML = `<button class="nextButton javascriptColor1" onclick=javascriptBtn()>Next</button>`;
        javascriptRemoveValue.innerHTML = "";

    } else if (javascriptRandomValue == 60 && javascriptInputAnswer !== javascriptAnswerArr[60].A60) {
        javascriptDisplayAnswer.innerHTML = `
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
        javascriptIncorrectValue.innerHTML = "Incorrect..";
        javascriptNextButton.innerHTML = `<button class="nextButton javascriptColor1" onclick=javascriptBtn()>Next</button>`;
        javascriptRemoveValue.innerHTML = "";



    } else if (javascriptRandomValue == 61 && javascriptInputAnswer == javascriptAnswerArr[61].A61) {
        javascriptCorrectValue.innerHTML = "Correct..";
        javascriptDisplayAnswer.innerHTML = `
        <textarea name="text" class="answer_textarea" id="input">Good Job :) </textarea>`;
        javascriptNextButton.innerHTML = `<button class="nextButton javascriptColor1" onclick=javascriptBtn()>Next</button>`;
        javascriptRemoveValue.innerHTML = "";

    } else if (javascriptRandomValue == 61 && javascriptInputAnswer !== javascriptAnswerArr[61].A61) {
        javascriptDisplayAnswer.innerHTML = `
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
        javascriptIncorrectValue.innerHTML = "Incorrect..";
        javascriptNextButton.innerHTML = `<button class="nextButton javascriptColor1" onclick=javascriptBtn()>Next</button>`;
        javascriptRemoveValue.innerHTML = "";



    } else if (javascriptRandomValue == 62 && javascriptInputAnswer == javascriptAnswerArr[62].A62) {
        javascriptCorrectValue.innerHTML = "Correct..";
        javascriptDisplayAnswer.innerHTML = `
        <textarea name="text" class="answer_textarea" id="input">Good Job :) </textarea>`;
        javascriptNextButton.innerHTML = `<button class="nextButton javascriptColor1" onclick=javascriptBtn()>Next</button>`;
        javascriptRemoveValue.innerHTML = "";

    } else if (javascriptRandomValue == 62 && javascriptInputAnswer !== javascriptAnswerArr[62].A62) {
        javascriptDisplayAnswer.innerHTML = `
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
        javascriptIncorrectValue.innerHTML = "Incorrect..";
        javascriptNextButton.innerHTML = `<button class="nextButton javascriptColor1" onclick=javascriptBtn()>Next</button>`;
        javascriptRemoveValue.innerHTML = "";



    } else if (javascriptRandomValue == 63 && javascriptInputAnswer == javascriptAnswerArr[63].A63) {
        javascriptCorrectValue.innerHTML = "Correct..";
        javascriptDisplayAnswer.innerHTML = `
        <textarea name="text" class="answer_textarea" id="input">Good Job :) </textarea>`;
        javascriptNextButton.innerHTML = `<button class="nextButton javascriptColor1" onclick=javascriptBtn()>Next</button>`;
        javascriptRemoveValue.innerHTML = "";

    } else if (javascriptRandomValue == 63 && javascriptInputAnswer !== javascriptAnswerArr[63].A63) {
        javascriptDisplayAnswer.innerHTML = `
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
        javascriptIncorrectValue.innerHTML = "Incorrect..";
        javascriptNextButton.innerHTML = `<button class="nextButton javascriptColor1" onclick=javascriptBtn()>Next</button>`;
        javascriptRemoveValue.innerHTML = "";



    } else if (javascriptRandomValue == 64 && javascriptInputAnswer == javascriptAnswerArr[64].A64) {
        javascriptCorrectValue.innerHTML = "Correct..";
        javascriptDisplayAnswer.innerHTML = `
        <textarea name="text" class="answer_textarea" id="input">Good Job :) </textarea>`;
        javascriptNextButton.innerHTML = `<button class="nextButton javascriptColor1" onclick=javascriptBtn()>Next</button>`;
        javascriptRemoveValue.innerHTML = "";

    } else if (javascriptRandomValue == 64 && javascriptInputAnswer !== javascriptAnswerArr[64].A64) {
        javascriptDisplayAnswer.innerHTML = `
    <textarea name="text" class="answer_textarea" id="input">
function testLogicalAnd(val) {
    if (val <= 50 && val >= 25) {
        return "Yes";
    }
    return "No";
}
testLogicalAnd(10);
          </textarea>`;
        javascriptIncorrectValue.innerHTML = "Incorrect..";
        javascriptNextButton.innerHTML = `<button class="nextButton javascriptColor1" onclick=javascriptBtn()>Next</button>`;
        javascriptRemoveValue.innerHTML = "";



    } else if (javascriptRandomValue == 65 && javascriptInputAnswer == javascriptAnswerArr[65].A65) {
        javascriptCorrectValue.innerHTML = "Correct..";
        javascriptDisplayAnswer.innerHTML = `
        <textarea name="text" class="answer_textarea" id="input">Good Job :) </textarea>`;
        javascriptNextButton.innerHTML = `<button class="nextButton javascriptColor1" onclick=javascriptBtn()>Next</button>`;
        javascriptRemoveValue.innerHTML = "";

    } else if (javascriptRandomValue == 65 && javascriptInputAnswer !== javascriptAnswerArr[65].A65) {
        javascriptDisplayAnswer.innerHTML = `
    <textarea name="text" class="answer_textarea" id="input">
function testLogicalOr(val) {
    if ( val < 10 || val > 20 ) {
        return "Outside";
    }
        return "Inside";
}
testLogicalOr(15);
            </textarea>`;
        javascriptIncorrectValue.innerHTML = "Incorrect..";
        javascriptNextButton.innerHTML = `<button class="nextButton javascriptColor1" onclick=javascriptBtn()>Next</button>`;
        javascriptRemoveValue.innerHTML = "";



    } else if (javascriptRandomValue == 66 && javascriptInputAnswer == javascriptAnswerArr[66].A66) {
        javascriptCorrectValue.innerHTML = "Correct..";
        javascriptDisplayAnswer.innerHTML = `
        <textarea name="text" class="answer_textarea" id="input">Good Job :) </textarea>`;
        javascriptNextButton.innerHTML = `<button class="nextButton javascriptColor1" onclick=javascriptBtn()>Next</button>`;
        javascriptRemoveValue.innerHTML = "";

    } else if (javascriptRandomValue == 66 && javascriptInputAnswer !== javascriptAnswerArr[66].A66) {
        javascriptDisplayAnswer.innerHTML = `
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
        javascriptIncorrectValue.innerHTML = "Incorrect..";
        javascriptNextButton.innerHTML = `<button class="nextButton javascriptColor1" onclick=javascriptBtn()>Next</button>`;
        javascriptRemoveValue.innerHTML = "";



    } else if (javascriptRandomValue == 67 && javascriptInputAnswer == javascriptAnswerArr[67].A67) {
        javascriptCorrectValue.innerHTML = "Correct..";
        javascriptDisplayAnswer.innerHTML = `
        <textarea name="text" class="answer_textarea" id="input">Good Job :) </textarea>`;
        javascriptNextButton.innerHTML = `<button class="nextButton javascriptColor1" onclick=javascriptBtn()>Next</button>`;
        javascriptRemoveValue.innerHTML = "";

    } else if (javascriptRandomValue == 67 && javascriptInputAnswer !== javascriptAnswerArr[67].A67) {
        javascriptDisplayAnswer.innerHTML = `
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
        javascriptIncorrectValue.innerHTML = "Incorrect..";
        javascriptNextButton.innerHTML = `<button class="nextButton javascriptColor1" onclick=javascriptBtn()>Next</button>`;
        javascriptRemoveValue.innerHTML = "";



    } else if (javascriptRandomValue == 68 && javascriptInputAnswer == javascriptAnswerArr[68].A68) {
        javascriptCorrectValue.innerHTML = "Correct..";
        javascriptDisplayAnswer.innerHTML = `
        <textarea name="text" class="answer_textarea" id="input">Good Job :) </textarea>`;
        javascriptNextButton.innerHTML = `<button class="nextButton javascriptColor1" onclick=javascriptBtn()>Next</button>`;
        javascriptRemoveValue.innerHTML = "";

    } else if (javascriptRandomValue == 68 && javascriptInputAnswer !== javascriptAnswerArr[68].A68) {
        javascriptDisplayAnswer.innerHTML = `
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
        javascriptIncorrectValue.innerHTML = "Incorrect..";
        javascriptNextButton.innerHTML = `<button class="nextButton javascriptColor1" onclick=javascriptBtn()>Next</button>`;
        javascriptRemoveValue.innerHTML = "";



    } else if (javascriptRandomValue == 69 && javascriptInputAnswer == javascriptAnswerArr[69].A69) {
        javascriptCorrectValue.innerHTML = "Correct..";
        javascriptDisplayAnswer.innerHTML = `
        <textarea name="text" class="answer_textarea" id="input">Good Job :) </textarea>`;
        javascriptNextButton.innerHTML = `<button class="nextButton javascriptColor1" onclick=javascriptBtn()>Next</button>`;
        javascriptRemoveValue.innerHTML = "";

    } else if (javascriptRandomValue == 69 && javascriptInputAnswer !== javascriptAnswerArr[69].A69) {
        javascriptDisplayAnswer.innerHTML = `
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
        javascriptIncorrectValue.innerHTML = "Incorrect..";
        javascriptNextButton.innerHTML = `<button class="nextButton javascriptColor1" onclick=javascriptBtn()>Next</button>`;
        javascriptRemoveValue.innerHTML = "";



    } else if (javascriptRandomValue == 70 && javascriptInputAnswer == javascriptAnswerArr[70].A70) {
        javascriptCorrectValue.innerHTML = "Correct..";
        javascriptDisplayAnswer.innerHTML = `
        <textarea name="text" class="answer_textarea" id="input">Good Job :) </textarea>`;
        javascriptNextButton.innerHTML = `<button class="nextButton javascriptColor1" onclick=javascriptBtn()>Next</button>`;
        javascriptRemoveValue.innerHTML = "";

    } else if (javascriptRandomValue == 70 && javascriptInputAnswer !== javascriptAnswerArr[70].A70) {
        javascriptDisplayAnswer.innerHTML = `
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
        javascriptIncorrectValue.innerHTML = "Incorrect..";
        javascriptNextButton.innerHTML = `<button class="nextButton javascriptColor1" onclick=javascriptBtn()>Next</button>`;
        javascriptRemoveValue.innerHTML = "";



    } else if (javascriptRandomValue == 71 && javascriptInputAnswer == javascriptAnswerArr[71].A71) {
        javascriptCorrectValue.innerHTML = "Correct..";
        javascriptDisplayAnswer.innerHTML = `
        <textarea name="text" class="answer_textarea" id="input">Good Job :) </textarea>`;
        javascriptNextButton.innerHTML = `<button class="nextButton javascriptColor1" onclick=javascriptBtn()>Next</button>`;
        javascriptRemoveValue.innerHTML = "";

    } else if (javascriptRandomValue == 71 && javascriptInputAnswer !== javascriptAnswerArr[71].A71) {
        javascriptDisplayAnswer.innerHTML = `
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
        javascriptIncorrectValue.innerHTML = "Incorrect..";
        javascriptNextButton.innerHTML = `<button class="nextButton javascriptColor1" onclick=javascriptBtn()>Next</button>`;
        javascriptRemoveValue.innerHTML = "";



    } else if (javascriptRandomValue == 72 && javascriptInputAnswer == javascriptAnswerArr[72].A72) {
        javascriptCorrectValue.innerHTML = "Correct..";
        javascriptDisplayAnswer.innerHTML = `
        <textarea name="text" class="answer_textarea" id="input">Good Job :) </textarea>`;
        javascriptNextButton.innerHTML = `<button class="nextButton javascriptColor1" onclick=javascriptBtn()>Next</button>`;
        javascriptRemoveValue.innerHTML = "";

    } else if (javascriptRandomValue == 72 && javascriptInputAnswer !== javascriptAnswerArr[72].A72) {
        javascriptDisplayAnswer.innerHTML = `
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
        javascriptIncorrectValue.innerHTML = "Incorrect..";
        javascriptNextButton.innerHTML = `<button class="nextButton javascriptColor1" onclick=javascriptBtn()>Next</button>`;
        javascriptRemoveValue.innerHTML = "";



    } else if (javascriptRandomValue == 73 && javascriptInputAnswer == javascriptAnswerArr[73].A73) {
        javascriptCorrectValue.innerHTML = "Correct..";
        javascriptDisplayAnswer.innerHTML = `
        <textarea name="text" class="answer_textarea" id="input">Good Job :) </textarea>`;
        javascriptNextButton.innerHTML = `<button class="nextButton javascriptColor1" onclick=javascriptBtn()>Next</button>`;
        javascriptRemoveValue.innerHTML = "";

    } else if (javascriptRandomValue == 73 && javascriptInputAnswer !== javascriptAnswerArr[73].A73) {
        javascriptDisplayAnswer.innerHTML = `
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
        javascriptIncorrectValue.innerHTML = "Incorrect..";
        javascriptNextButton.innerHTML = `<button class="nextButton javascriptColor1" onclick=javascriptBtn()>Next</button>`;
        javascriptRemoveValue.innerHTML = "";



    } else if (javascriptRandomValue == 74 && javascriptInputAnswer == javascriptAnswerArr[74].A74) {
        javascriptCorrectValue.innerHTML = "Correct..";
        javascriptDisplayAnswer.innerHTML = `
        <textarea name="text" class="answer_textarea" id="input">Good Job :) </textarea>`;
        javascriptNextButton.innerHTML = `<button class="nextButton javascriptColor1" onclick=javascriptBtn()>Next</button>`;
        javascriptRemoveValue.innerHTML = "";

    } else if (javascriptRandomValue == 74 && javascriptInputAnswer !== javascriptAnswerArr[74].A74) {
        javascriptDisplayAnswer.innerHTML = `
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
        javascriptIncorrectValue.innerHTML = "Incorrect..";
        javascriptNextButton.innerHTML = `<button class="nextButton javascriptColor1" onclick=javascriptBtn()>Next</button>`;
        javascriptRemoveValue.innerHTML = "";



    } else if (javascriptRandomValue == 75 && javascriptInputAnswer == javascriptAnswerArr[75].A75) {
        javascriptCorrectValue.innerHTML = "Correct..";
        javascriptDisplayAnswer.innerHTML = `
        <textarea name="text" class="answer_textarea" id="input">Good Job :) </textarea>`;
        javascriptNextButton.innerHTML = `<button class="nextButton javascriptColor1" onclick=javascriptBtn()>Next</button>`;
        javascriptRemoveValue.innerHTML = "";

    } else if (javascriptRandomValue == 75 && javascriptInputAnswer !== javascriptAnswerArr[75].A75) {
        javascriptDisplayAnswer.innerHTML = `
    <textarea name="text" class="answer_textarea" id="input">
function isLess(a, b) {
    return a <= b;
}
isLess(10, 15);
          </textarea>`;
        javascriptIncorrectValue.innerHTML = "Incorrect..";
        javascriptNextButton.innerHTML = `<button class="nextButton javascriptColor1" onclick=javascriptBtn()>Next</button>`;
        javascriptRemoveValue.innerHTML = "";



    } else if (javascriptRandomValue == 76 && javascriptInputAnswer == javascriptAnswerArr[76].A76) {
        javascriptCorrectValue.innerHTML = "Correct..";
        javascriptDisplayAnswer.innerHTML = `
        <textarea name="text" class="answer_textarea" id="input">Good Job :) </textarea>`;
        javascriptNextButton.innerHTML = `<button class="nextButton javascriptColor1" onclick=javascriptBtn()>Next</button>`;
        javascriptRemoveValue.innerHTML = "";

    } else if (javascriptRandomValue == 76 && javascriptInputAnswer !== javascriptAnswerArr[76].A76) {
        javascriptDisplayAnswer.innerHTML = `
    <textarea name="text" class="answer_textarea" id="input">
function abTest(a, b) {
    if (a < 0 || b < 0) return undefined;
    
    return Math.round(Math.pow(Math.sqrt(a) + Math.sqrt(b), 2));
}
abTest(2,2);
          </textarea>`;
        javascriptIncorrectValue.innerHTML = "Incorrect..";
        javascriptNextButton.innerHTML = `<button class="nextButton javascriptColor1" onclick=javascriptBtn()>Next</button>`;
        javascriptRemoveValue.innerHTML = "";



    } else if (javascriptRandomValue == 77 && javascriptInputAnswer == javascriptAnswerArr[77].A77) {
        javascriptCorrectValue.innerHTML = "Correct..";
        javascriptDisplayAnswer.innerHTML = `
        <textarea name="text" class="answer_textarea" id="input">Good Job :) </textarea>`;
        javascriptNextButton.innerHTML = `<button class="nextButton javascriptColor1" onclick=javascriptBtn()>Next</button>`;
        javascriptRemoveValue.innerHTML = "";

    } else if (javascriptRandomValue == 77 && javascriptInputAnswer !== javascriptAnswerArr[77].A77) {
        javascriptDisplayAnswer.innerHTML = `
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
        javascriptIncorrectValue.innerHTML = "Incorrect..";
        javascriptNextButton.innerHTML = `<button class="nextButton javascriptColor1" onclick=javascriptBtn()>Next</button>`;
        javascriptRemoveValue.innerHTML = "";



    } else if (javascriptRandomValue == 78 && javascriptInputAnswer == javascriptAnswerArr[78].A78) {
        javascriptCorrectValue.innerHTML = "Correct..";
        javascriptDisplayAnswer.innerHTML = `
        <textarea name="text" class="answer_textarea" id="input">Good Job :) </textarea>`;
        javascriptNextButton.innerHTML = `<button class="nextButton javascriptColor1" onclick=javascriptBtn()>Next</button>`;
        javascriptRemoveValue.innerHTML = "";

    } else if (javascriptRandomValue == 78 && javascriptInputAnswer !== javascriptAnswerArr[78].A78) {
        javascriptDisplayAnswer.innerHTML = `
    <textarea name="text" class="answer_textarea" id="input">
var myDog = {
    "name": "Camper",
    "legs": 4,
    "tails": 1,
    "friends": ["everything!"]
};
        </textarea>`;
        javascriptIncorrectValue.innerHTML = "Incorrect..";
        javascriptNextButton.innerHTML = `<button class="nextButton javascriptColor1" onclick=javascriptBtn()>Next</button>`;
        javascriptRemoveValue.innerHTML = "";



    } else if (javascriptRandomValue == 79 && javascriptInputAnswer == javascriptAnswerArr[79].A79) {
        javascriptCorrectValue.innerHTML = "Correct..";
        javascriptDisplayAnswer.innerHTML = `
        <textarea name="text" class="answer_textarea" id="input">Good Job :) </textarea>`;
        javascriptNextButton.innerHTML = `<button class="nextButton javascriptColor1" onclick=javascriptBtn()>Next</button>`;
        javascriptRemoveValue.innerHTML = "";

    } else if (javascriptRandomValue == 79 && javascriptInputAnswer !== javascriptAnswerArr[79].A79) {
        javascriptDisplayAnswer.innerHTML = `
    <textarea name="text" class="answer_textarea" id="input">
var testObj = {
    "hat": "ballcap",
    "shirt": "jersey",
    "shoes": "cleats"
};
var hatValue = testObj.hat;  
var shirtValue = testObj.shirt;
          </textarea>`;
        javascriptIncorrectValue.innerHTML = "Incorrect..";
        javascriptNextButton.innerHTML = `<button class="nextButton javascriptColor1" onclick=javascriptBtn()>Next</button>`;
        javascriptRemoveValue.innerHTML = "";



    } else if (javascriptRandomValue == 80 && javascriptInputAnswer == javascriptAnswerArr[80].A80) {
        javascriptCorrectValue.innerHTML = "Correct..";
        javascriptDisplayAnswer.innerHTML = `
        <textarea name="text" class="answer_textarea" id="input">Good Job :) </textarea>`;
        javascriptNextButton.innerHTML = `<button class="nextButton javascriptColor1" onclick=javascriptBtn()>Next</button>`;
        javascriptRemoveValue.innerHTML = "";

    } else if (javascriptRandomValue == 80 && javascriptInputAnswer !== javascriptAnswerArr[80].A80) {
        javascriptDisplayAnswer.innerHTML = `
    <textarea name="text" class="answer_textarea" id="input">
var testObj = {
    "an entree": "hamburger",
    "my side": "veggies",
    "the drink": "water"
};
var entreeValue = testObj["an entree"];  
var drinkValue = testObj["the drink"];
          </textarea>`;
        javascriptIncorrectValue.innerHTML = "Incorrect..";
        javascriptNextButton.innerHTML = `<button class="nextButton javascriptColor1" onclick=javascriptBtn()>Next</button>`;
        javascriptRemoveValue.innerHTML = "";



    } else if (javascriptRandomValue == 81 && javascriptInputAnswer == javascriptAnswerArr[81].A81) {
        javascriptCorrectValue.innerHTML = "Correct..";
        javascriptDisplayAnswer.innerHTML = `
        <textarea name="text" class="answer_textarea" id="input">Good Job :) </textarea>`;
        javascriptNextButton.innerHTML = `<button class="nextButton javascriptColor1" onclick=javascriptBtn()>Next</button>`;
        javascriptRemoveValue.innerHTML = "";

    } else if (javascriptRandomValue == 81 && javascriptInputAnswer !== javascriptAnswerArr[81].A81) {
        javascriptDisplayAnswer.innerHTML = `
    <textarea name="text" class="answer_textarea" id="input">
var testObj = {
    12: "Namath",
    16: "Montana",
    19: "Unitas"
};
var playerNumber = 16; 
var player = testObj[playerNumber];
          </textarea>`;
        javascriptIncorrectValue.innerHTML = "Incorrect..";
        javascriptNextButton.innerHTML = `<button class="nextButton javascriptColor1" onclick=javascriptBtn()>Next</button>`;
        javascriptRemoveValue.innerHTML = "";



    } else if (javascriptRandomValue == 82 && javascriptInputAnswer == javascriptAnswerArr[82].A82) {
        javascriptCorrectValue.innerHTML = "Correct..";
        javascriptDisplayAnswer.innerHTML = `
        <textarea name="text" class="answer_textarea" id="input">Good Job :) </textarea>`;
        javascriptNextButton.innerHTML = `<button class="nextButton javascriptColor1" onclick=javascriptBtn()>Next</button>`;
        javascriptRemoveValue.innerHTML = "";

    } else if (javascriptRandomValue == 82 && javascriptInputAnswer !== javascriptAnswerArr[82].A82) {
        javascriptDisplayAnswer.innerHTML = `
    <textarea name="text" class="answer_textarea" id="input">
var myDog = {
    "name": "Coder",
    "legs": 4,
    "tails": 1,
    "friends": ["freeCodeCamp Campers"]
};
myDog.name = "Happy Coder";
          </textarea>`;
        javascriptIncorrectValue.innerHTML = "Incorrect..";
        javascriptNextButton.innerHTML = `<button class="nextButton javascriptColor1" onclick=javascriptBtn()>Next</button>`;
        javascriptRemoveValue.innerHTML = "";



    } else if (javascriptRandomValue == 83 && javascriptInputAnswer == javascriptAnswerArr[83].A83) {
        javascriptCorrectValue.innerHTML = "Correct..";
        javascriptDisplayAnswer.innerHTML = `
        <textarea name="text" class="answer_textarea" id="input">Good Job :) </textarea>`;
        javascriptNextButton.innerHTML = `<button class="nextButton javascriptColor1" onclick=javascriptBtn()>Next</button>`;
        javascriptRemoveValue.innerHTML = "";

    } else if (javascriptRandomValue == 83 && javascriptInputAnswer !== javascriptAnswerArr[83].A83) {
        javascriptDisplayAnswer.innerHTML = `
    <textarea name="text" class="answer_textarea" id="input">
var myDog = {
    "name": "Happy Coder",
    "legs": 4,
    "tails": 1,
    "friends": ["freeCodeCamp Campers"]
};
myDog.bark = "woof";
          </textarea>`;
        javascriptIncorrectValue.innerHTML = "Incorrect..";
        javascriptNextButton.innerHTML = `<button class="nextButton javascriptColor1" onclick=javascriptBtn()>Next</button>`;
        javascriptRemoveValue.innerHTML = "";



    } else if (javascriptRandomValue == 84 && javascriptInputAnswer == javascriptAnswerArr[84].A84) {
        javascriptCorrectValue.innerHTML = "Correct..";
        javascriptDisplayAnswer.innerHTML = `
        <textarea name="text" class="answer_textarea" id="input">Good Job :) </textarea>`;
        javascriptNextButton.innerHTML = `<button class="nextButton javascriptColor1" onclick=javascriptBtn()>Next</button>`;
        javascriptRemoveValue.innerHTML = "";

    } else if (javascriptRandomValue == 84 && javascriptInputAnswer !== javascriptAnswerArr[84].A84) {
        javascriptDisplayAnswer.innerHTML = `
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
        javascriptIncorrectValue.innerHTML = "Incorrect..";
        javascriptNextButton.innerHTML = `<button class="nextButton javascriptColor1" onclick=javascriptBtn()>Next</button>`;
        javascriptRemoveValue.innerHTML = "";



    } else if (javascriptRandomValue == 85 && javascriptInputAnswer == javascriptAnswerArr[85].A85) {
        javascriptCorrectValue.innerHTML = "Correct..";
        javascriptDisplayAnswer.innerHTML = `
        <textarea name="text" class="answer_textarea" id="input">Good Job :) </textarea>`;
        javascriptNextButton.innerHTML = `<button class="nextButton javascriptColor1" onclick=javascriptBtn()>Next</button>`;
        javascriptRemoveValue.innerHTML = "";

    } else if (javascriptRandomValue == 85 && javascriptInputAnswer !== javascriptAnswerArr[85].A85) {
        javascriptDisplayAnswer.innerHTML = `
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
        javascriptIncorrectValue.innerHTML = "Incorrect..";
        javascriptNextButton.innerHTML = `<button class="nextButton javascriptColor1" onclick=javascriptBtn()>Next</button>`;
        javascriptRemoveValue.innerHTML = "";



    } else if (javascriptRandomValue == 86 && javascriptInputAnswer == javascriptAnswerArr[86].A86) {
        javascriptCorrectValue.innerHTML = "Correct..";
        javascriptDisplayAnswer.innerHTML = `
        <textarea name="text" class="answer_textarea" id="input">Good Job :) </textarea>`;
        javascriptNextButton.innerHTML = `<button class="nextButton javascriptColor1" onclick=javascriptBtn()>Next</button>`;
        javascriptRemoveValue.innerHTML = "";

    } else if (javascriptRandomValue == 86 && javascriptInputAnswer !== javascriptAnswerArr[86].A86) {
        javascriptDisplayAnswer.innerHTML = `
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
        javascriptIncorrectValue.innerHTML = "Incorrect..";
        javascriptNextButton.innerHTML = `<button class="nextButton javascriptColor1" onclick=javascriptBtn()>Next</button>`;
        javascriptRemoveValue.innerHTML = "";



    } else if (javascriptRandomValue == 87 && javascriptInputAnswer == javascriptAnswerArr[87].A87) {
        javascriptCorrectValue.innerHTML = "Correct..";
        javascriptDisplayAnswer.innerHTML = `
        <textarea name="text" class="answer_textarea" id="input">Good Job :) </textarea>`;
        javascriptNextButton.innerHTML = `<button class="nextButton javascriptColor1" onclick=javascriptBtn()>Next</button>`;
        javascriptRemoveValue.innerHTML = "";

    } else if (javascriptRandomValue == 87 && javascriptInputAnswer !== javascriptAnswerArr[87].A87) {
        javascriptDisplayAnswer.innerHTML = `
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
        javascriptIncorrectValue.innerHTML = "Incorrect..";
        javascriptNextButton.innerHTML = `<button class="nextButton javascriptColor1" onclick=javascriptBtn()>Next</button>`;
        javascriptRemoveValue.innerHTML = "";



    } else if (javascriptRandomValue == 88 && javascriptInputAnswer == javascriptAnswerArr[88].A88) {
        javascriptCorrectValue.innerHTML = "Correct..";
        javascriptDisplayAnswer.innerHTML = `
        <textarea name="text" class="answer_textarea" id="input">Good Job :) </textarea>`;
        javascriptNextButton.innerHTML = `<button class="nextButton javascriptColor1" onclick=javascriptBtn()>Next</button>`;
        javascriptRemoveValue.innerHTML = "";

    } else if (javascriptRandomValue == 88 && javascriptInputAnswer !== javascriptAnswerArr[88].A88) {
        javascriptDisplayAnswer.innerHTML = `
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
        javascriptIncorrectValue.innerHTML = "Incorrect..";
        javascriptNextButton.innerHTML = `<button class="nextButton javascriptColor1" onclick=javascriptBtn()>Next</button>`;
        javascriptRemoveValue.innerHTML = "";



    } else if (javascriptRandomValue == 89 && javascriptInputAnswer == javascriptAnswerArr[89].A89) {
        javascriptCorrectValue.innerHTML = "Correct..";
        javascriptDisplayAnswer.innerHTML = `
        <textarea name="text" class="answer_textarea" id="input">Good Job :) </textarea>`;
        javascriptNextButton.innerHTML = `<button class="nextButton javascriptColor1" onclick=javascriptBtn()>Next</button>`;
        javascriptRemoveValue.innerHTML = "";

    } else if (javascriptRandomValue == 89 && javascriptInputAnswer !== javascriptAnswerArr[89].A89) {
        javascriptDisplayAnswer.innerHTML = `
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
        javascriptIncorrectValue.innerHTML = "Incorrect..";
        javascriptNextButton.innerHTML = `<button class="nextButton javascriptColor1" onclick=javascriptBtn()>Next</button>`;
        javascriptRemoveValue.innerHTML = "";



    } else if (javascriptRandomValue == 90 && javascriptInputAnswer == javascriptAnswerArr[90].A90) {
        javascriptCorrectValue.innerHTML = "Correct..";
        javascriptDisplayAnswer.innerHTML = `
        <textarea name="text" class="answer_textarea" id="input">Good Job :) </textarea>`;
        javascriptNextButton.innerHTML = `<button class="nextButton javascriptColor1" onclick=javascriptBtn()>Next</button>`;
        javascriptRemoveValue.innerHTML = "";

    } else if (javascriptRandomValue == 90 && javascriptInputAnswer !== javascriptAnswerArr[90].A90) {
        javascriptDisplayAnswer.innerHTML = `
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
        javascriptIncorrectValue.innerHTML = "Incorrect..";
        javascriptNextButton.innerHTML = `<button class="nextButton javascriptColor1" onclick=javascriptBtn()>Next</button>`;
        javascriptRemoveValue.innerHTML = "";



    } else if (javascriptRandomValue == 91 && javascriptInputAnswer == javascriptAnswerArr[91].A91) {
        javascriptCorrectValue.innerHTML = "Correct..";
        javascriptDisplayAnswer.innerHTML = `
        <textarea name="text" class="answer_textarea" id="input">Good Job :) </textarea>`;
        javascriptNextButton.innerHTML = `<button class="nextButton javascriptColor1" onclick=javascriptBtn()>Next</button>`;
        javascriptRemoveValue.innerHTML = "";

    } else if (javascriptRandomValue == 91 && javascriptInputAnswer !== javascriptAnswerArr[91].A91) {
        javascriptDisplayAnswer.innerHTML = `
    <textarea name="text" class="answer_textarea" id="input">
var myArray = [];
var i = 0;
while (i <= 4){
    myArray.push(i);
    i++;
}
        </textarea>`;
        javascriptIncorrectValue.innerHTML = "Incorrect..";
        javascriptNextButton.innerHTML = `<button class="nextButton javascriptColor1" onclick=javascriptBtn()>Next</button>`;
        javascriptRemoveValue.innerHTML = "";



    } else if (javascriptRandomValue == 92 && javascriptInputAnswer == javascriptAnswerArr[92].A92) {
        javascriptCorrectValue.innerHTML = "Correct..";
        javascriptDisplayAnswer.innerHTML = `
        <textarea name="text" class="answer_textarea" id="input">Good Job :) </textarea>`;
        javascriptNextButton.innerHTML = `<button class="nextButton javascriptColor1" onclick=javascriptBtn()>Next</button>`;
        javascriptRemoveValue.innerHTML = "";

    } else if (javascriptRandomValue == 92 && javascriptInputAnswer !== javascriptAnswerArr[92].A92) {
        javascriptDisplayAnswer.innerHTML = `
    <textarea name="text" class="answer_textarea" id="input">
var myArray = [];
for(var i=1; i<=5; i++){
myArray.push(i);
}
        </textarea>`;
        javascriptIncorrectValue.innerHTML = "Incorrect..";
        javascriptNextButton.innerHTML = `<button class="nextButton javascriptColor1" onclick=javascriptBtn()>Next</button>`;
        javascriptRemoveValue.innerHTML = "";



    } else if (javascriptRandomValue == 93 && javascriptInputAnswer == javascriptAnswerArr[93].A93) {
        javascriptCorrectValue.innerHTML = "Correct..";
        javascriptDisplayAnswer.innerHTML = `
        <textarea name="text" class="answer_textarea" id="input">Good Job :) </textarea>`;
        javascriptNextButton.innerHTML = `<button class="nextButton javascriptColor1" onclick=javascriptBtn()>Next</button>`;
        javascriptRemoveValue.innerHTML = "";

    } else if (javascriptRandomValue == 93 && javascriptInputAnswer !== javascriptAnswerArr[93].A93) {
        javascriptDisplayAnswer.innerHTML = `
    <textarea name="text" class="answer_textarea" id="input">
var myArray = [];
for (var i = 1; i < 10; i += 2) {
myArray.push(i);
}
        </textarea>`;
        javascriptIncorrectValue.innerHTML = "Incorrect..";
        javascriptNextButton.innerHTML = `<button class="nextButton javascriptColor1" onclick=javascriptBtn()>Next</button>`;
        javascriptRemoveValue.innerHTML = "";



    } else if (javascriptRandomValue == 94 && javascriptInputAnswer == javascriptAnswerArr[94].A94) {
        javascriptCorrectValue.innerHTML = "Correct..";
        javascriptDisplayAnswer.innerHTML = `
        <textarea name="text" class="answer_textarea" id="input">Good Job :) </textarea>`;
        javascriptNextButton.innerHTML = `<button class="nextButton javascriptColor1" onclick=javascriptBtn()>Next</button>`;
        javascriptRemoveValue.innerHTML = "";

    } else if (javascriptRandomValue == 94 && javascriptInputAnswer !== javascriptAnswerArr[94].A94) {
        javascriptDisplayAnswer.innerHTML = `
    <textarea name="text" class="answer_textarea" id="input">
var myArray = [];

for (var i = 9; i > 0; i-=2){
    myArray.push(i)
}
        </textarea>`;
        javascriptIncorrectValue.innerHTML = "Incorrect..";
        javascriptNextButton.innerHTML = `<button class="nextButton javascriptColor1" onclick=javascriptBtn()>Next</button>`;
        javascriptRemoveValue.innerHTML = "";



    } else if (javascriptRandomValue == 95 && javascriptInputAnswer == javascriptAnswerArr[95].A95) {
        javascriptCorrectValue.innerHTML = "Correct..";
        javascriptDisplayAnswer.innerHTML = `
        <textarea name="text" class="answer_textarea" id="input">Good Job :) </textarea>`;
        javascriptNextButton.innerHTML = `<button class="nextButton javascriptColor1" onclick=javascriptBtn()>Next</button>`;
        javascriptRemoveValue.innerHTML = "";

    } else if (javascriptRandomValue == 95 && javascriptInputAnswer !== javascriptAnswerArr[95].A95) {
        javascriptDisplayAnswer.innerHTML = `
    <textarea name="text" class="answer_textarea" id="input">
var myArr = [ 2, 3, 4, 5, 6];
var total = 0;

for (var i = 0; i < myArr.length; i++) {
    total += myArr[i];
}
        </textarea>`;
        javascriptIncorrectValue.innerHTML = "Incorrect..";
        javascriptNextButton.innerHTML = `<button class="nextButton javascriptColor1" onclick=javascriptBtn()>Next</button>`;
        javascriptRemoveValue.innerHTML = "";



    } else if (javascriptRandomValue == 96 && javascriptInputAnswer == javascriptAnswerArr[96].A96) {
        javascriptCorrectValue.innerHTML = "Correct..";
        javascriptDisplayAnswer.innerHTML = `
        <textarea name="text" class="answer_textarea" id="input">Good Job :) </textarea>`;
        javascriptNextButton.innerHTML = `<button class="nextButton javascriptColor1" onclick=javascriptBtn()>Next</button>`;
        javascriptRemoveValue.innerHTML = "";

    } else if (javascriptRandomValue == 96 && javascriptInputAnswer !== javascriptAnswerArr[96].A96) {
        javascriptDisplayAnswer.innerHTML = `
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
        javascriptIncorrectValue.innerHTML = "Incorrect..";
        javascriptNextButton.innerHTML = `<button class="nextButton javascriptColor1" onclick=javascriptBtn()>Next</button>`;
        javascriptRemoveValue.innerHTML = "";



    } else if (javascriptRandomValue == 97 && javascriptInputAnswer == javascriptAnswerArr[97].A97) {
        javascriptCorrectValue.innerHTML = "Correct..";
        javascriptDisplayAnswer.innerHTML = `
        <textarea name="text" class="answer_textarea" id="input">Good Job :) </textarea>`;
        javascriptNextButton.innerHTML = `<button class="nextButton javascriptColor1" onclick=javascriptBtn()>Next</button>`;
        javascriptRemoveValue.innerHTML = "";

    } else if (javascriptRandomValue == 97 && javascriptInputAnswer !== javascriptAnswerArr[97].A97) {
        javascriptDisplayAnswer.innerHTML = `
    <textarea name="text" class="answer_textarea" id="input">
var myArray = [];
var i = 10;
do {
    myArray.push(i);
    i++;
} while (i < 5)
        </textarea>`;
        javascriptIncorrectValue.innerHTML = "Incorrect..";
        javascriptNextButton.innerHTML = `<button class="nextButton javascriptColor1" onclick=javascriptBtn()>Next</button>`;
        javascriptRemoveValue.innerHTML = "";



    } else if (javascriptRandomValue == 98 && javascriptInputAnswer == javascriptAnswerArr[98].A98) {
        javascriptCorrectValue.innerHTML = "Correct..";
        javascriptDisplayAnswer.innerHTML = `
        <textarea name="text" class="answer_textarea" id="input">Good Job :) </textarea>`;
        javascriptNextButton.innerHTML = `<button class="nextButton javascriptColor1" onclick=javascriptBtn()>Next</button>`;
        javascriptRemoveValue.innerHTML = "";

    } else if (javascriptRandomValue == 98 && javascriptInputAnswer !== javascriptAnswerArr[98].A98) {
        javascriptDisplayAnswer.innerHTML = `
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
lookUpProfile("Akira", "likes");
          </textarea>`;
        javascriptIncorrectValue.innerHTML = "Incorrect..";
        javascriptNextButton.innerHTML = `<button class="nextButton javascriptColor1" onclick=javascriptBtn()>Next</button>`;
        javascriptRemoveValue.innerHTML = "";



    } else if (javascriptRandomValue == 99 && javascriptInputAnswer == javascriptAnswerArr[99].A99) {
        javascriptCorrectValue.innerHTML = "Correct..";
        javascriptDisplayAnswer.innerHTML = `
        <textarea name="text" class="answer_textarea" id="input">Good Job :) </textarea>`;
        javascriptNextButton.innerHTML = `<button class="nextButton javascriptColor1" onclick=javascriptBtn()>Next</button>`;
        javascriptRemoveValue.innerHTML = "";

    } else if (javascriptRandomValue == 99 && javascriptInputAnswer !== javascriptAnswerArr[99].A99) {
        javascriptDisplayAnswer.innerHTML = `
    <textarea name="text" class="answer_textarea" id="input">
function randomFraction() {
    var result = 0;
    while (result === 0) {
        result = Math.random();
    }
    
    return result;  
    
}
          </textarea>`;
        javascriptIncorrectValue.innerHTML = "Incorrect..";
        javascriptNextButton.innerHTML = `<button class="nextButton javascriptColor1" onclick=javascriptBtn()>Next</button>`;
        javascriptRemoveValue.innerHTML = "";



    } else if (javascriptRandomValue == 100 && javascriptInputAnswer == javascriptAnswerArr[100].A100) {
        javascriptCorrectValue.innerHTML = "Correct..";
        javascriptDisplayAnswer.innerHTML = `
        <textarea name="text" class="answer_textarea" id="input">Good Job :) </textarea>`;
        javascriptNextButton.innerHTML = `<button class="nextButton javascriptColor1" onclick=javascriptBtn()>Next</button>`;
        javascriptRemoveValue.innerHTML = "";

    } else if (javascriptRandomValue == 100 && javascriptInputAnswer !== javascriptAnswerArr[100].A100) {
        javascriptDisplayAnswer.innerHTML = `
    <textarea name="text" class="answer_textarea" id="input">
var randomNumberBetween0and19 = Math.floor(Math.random() * 20);

function randomWholeNum() {
    
    return Math.floor(Math.random() * 10);
}
        </textarea>`;
        javascriptIncorrectValue.innerHTML = "Incorrect..";
        javascriptNextButton.innerHTML = `<button class="nextButton javascriptColor1" onclick=javascriptBtn()>Next</button>`;
        javascriptRemoveValue.innerHTML = "";



    } else if (javascriptRandomValue == 101 && javascriptInputAnswer == javascriptAnswerArr[101].A101) {
        javascriptCorrectValue.innerHTML = "Correct..";
        javascriptDisplayAnswer.innerHTML = `
        <textarea name="text" class="answer_textarea" id="input">Good Job :) </textarea>`;
        javascriptNextButton.innerHTML = `<button class="nextButton javascriptColor1" onclick=javascriptBtn()>Next</button>`;
        javascriptRemoveValue.innerHTML = "";

    } else if (javascriptRandomValue == 101 && javascriptInputAnswer !== javascriptAnswerArr[101].A101) {
        javascriptDisplayAnswer.innerHTML = `
    <textarea name="text" class="answer_textarea" id="input">
function randomRange(myMin, myMax) {
    
    return Math.floor(Math.random() * (myMax - myMin + 1) + myMin);
    
}
var myRandom = randomRange(5, 15);
          </textarea>`;
        javascriptIncorrectValue.innerHTML = "Incorrect..";
        javascriptNextButton.innerHTML = `<button class="nextButton javascriptColor1" onclick=javascriptBtn()>Next</button>`;
        javascriptRemoveValue.innerHTML = "";



    } else if (javascriptRandomValue == 102 && javascriptInputAnswer == javascriptAnswerArr[102].A102) {
        javascriptCorrectValue.innerHTML = "Correct..";
        javascriptDisplayAnswer.innerHTML = `
        <textarea name="text" class="answer_textarea" id="input">Good Job :) </textarea>`;
        javascriptNextButton.innerHTML = `<button class="nextButton javascriptColor1" onclick=javascriptBtn()>Next</button>`;
        javascriptRemoveValue.innerHTML = "";

    } else if (javascriptRandomValue == 102 && javascriptInputAnswer !== javascriptAnswerArr[102].A102) {
        javascriptDisplayAnswer.innerHTML = `
    <textarea name="text" class="answer_textarea" id="input">
function convertToInteger(str) {
    
    return parseInt(str);
}
    
convertToInteger("10011");
            </textarea>`;
        javascriptIncorrectValue.innerHTML = "Incorrect..";
        javascriptNextButton.innerHTML = `<button class="nextButton javascriptColor1" onclick=javascriptBtn()>Next</button>`;
        javascriptRemoveValue.innerHTML = "";



    } else if (javascriptRandomValue == 103 && javascriptInputAnswer == javascriptAnswerArr[103].A103) {
        javascriptCorrectValue.innerHTML = "Correct..";
        javascriptDisplayAnswer.innerHTML = `
        <textarea name="text" class="answer_textarea" id="input">Good Job :) </textarea>`;
        javascriptNextButton.innerHTML = `<button class="nextButton javascriptColor1" onclick=javascriptBtn()>Next</button>`;
        javascriptRemoveValue.innerHTML = "";

    } else if (javascriptRandomValue == 103 && javascriptInputAnswer !== javascriptAnswerArr[103].A103) {
        javascriptDisplayAnswer.innerHTML = `
    <textarea name="text" class="answer_textarea" id="input">
function convertToInteger(str) {
    var radix = 2;
    return parseInt(str, radix);
}
    
convertToInteger("10011");
            </textarea>`;
        javascriptIncorrectValue.innerHTML = "Incorrect..";
        javascriptNextButton.innerHTML = `<button class="nextButton javascriptColor1" onclick=javascriptBtn()>Next</button>`;
        javascriptRemoveValue.innerHTML = "";



    } else if (javascriptRandomValue == 104 && javascriptInputAnswer == javascriptAnswerArr[104].A104) {
        javascriptCorrectValue.innerHTML = "Correct..";
        javascriptDisplayAnswer.innerHTML = `
        <textarea name="text" class="answer_textarea" id="input">Good Job :) </textarea>`;
        javascriptNextButton.innerHTML = `<button class="nextButton javascriptColor1" onclick=javascriptBtn()>Next</button>`;
        javascriptRemoveValue.innerHTML = "";

    } else if (javascriptRandomValue == 104 && javascriptInputAnswer !== javascriptAnswerArr[104].A104) {
        javascriptDisplayAnswer.innerHTML = `
    <textarea name="text" class="answer_textarea" id="input">
function checkEqual(a, b) {
    return a === b ? true : false;
}
checkEqual(1, 2);
          </textarea>`;
        javascriptIncorrectValue.innerHTML = "Incorrect..";
        javascriptNextButton.innerHTML = `<button class="nextButton javascriptColor1" onclick=javascriptBtn()>Next</button>`;
        javascriptRemoveValue.innerHTML = "";



    } else if (javascriptRandomValue == 105 && javascriptInputAnswer == javascriptAnswerArr[105].A105) {
        javascriptCorrectValue.innerHTML = "Correct..";
        javascriptDisplayAnswer.innerHTML = `
        <textarea name="text" class="answer_textarea" id="input">Good Job :) </textarea>`;
        javascriptNextButton.innerHTML = `<button class="nextButton javascriptColor1" onclick=javascriptBtn()>Next</button>`;
        javascriptRemoveValue.innerHTML = "";

    } else if (javascriptRandomValue == 105 && javascriptInputAnswer !== javascriptAnswerArr[105].A105) {
        javascriptDisplayAnswer.innerHTML = `
    <textarea name="text" class="answer_textarea" id="input">
function checkSign(num) {
    return (
        num > 0 ? "positive" :
        num < 0 ? "negative" :
        "zero"
    );
}
          </textarea>`;
        javascriptIncorrectValue.innerHTML = "Incorrect..";
        javascriptNextButton.innerHTML = `<button class="nextButton javascriptColor1" onclick=javascriptBtn()>Next</button>`;
        javascriptRemoveValue.innerHTML = "";



    }

    else {
        javascriptIncorrectValue.innerHTML = "Incorrect..";
        javascriptNextButton.innerHTML = `<button class="nextButton javascriptColor1" onclick=javascriptBtn()>Next</button>`;
        javascriptRemoveValue.innerHTML = "";
    }

}
window.javascriptSubmit = javascriptSubmit; /* to make submit global*/

function javascriptButton() {
    javascriptTest = document.getElementById("javascriptAddedQuestion").innerHTML = javascriptQuestionArr[javascriptRandomValue]; /* giving random question to html */

    return javascriptTest;
}
window.javascriptButton = javascriptButton;

function javascriptShowTest() {
    var javascriptInputBox = document.getElementById("javascriptRemove").style.display = "block";
    return javascriptInputBox;
}
window.javascriptShowTest = javascriptShowTest;
function javascriptBtn() {
    javascriptRandomValue = Math.floor(Math.random() * javascriptQuestionArr.length); /* buton next in html to make a next random question*/
    document.getElementById("javascriptAddedQuestion").innerHTML = javascriptQuestionArr[javascriptRandomValue]; /* giving random question to html */
    document.getElementById("javascriptElementButton").innerHTML = "";/* to clean javascriptElementButton*/
    document.getElementById("javascriptRemove").innerHTML = `<textarea name="text" class="answer_textarea" id="input"></textarea></br>
      <button class="answer_submit javascriptColor1" id = "javascriptStartButton" onclick="javascriptSubmit()">Submit</button>`;/* to create next text area and Submit button. */
    document.getElementById("javascriptCheckingAnswer").innerHTML = "";
    document.getElementById("javascriptShowingAnswer").innerHTML = "";
}
window.javascriptBtn = javascriptBtn;/* to make submit global*/


























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
        javascriptEs6NextButton.innerHTML = `<button class="nextButton javascriptColor1" onclick=javascriptEs6Btn()>Next</button>`; /* creating next button with javascriptEs6Btn()function*/
        javascriptEs6RemoveValue.innerHTML = "";/* removing in html answer*/



    } else if (javascriptEs6RandomValue == 0 && javascriptEs6InputAnswer !== javascriptEs6AnswerArr[0].A0) {/*  if random value not == then giving then display the answere.*/
        javascriptEs6DisplayAnswer.innerHTML = `
    <textarea name="text" class="answer_textarea" id="input">
let catName;
let quote;
function catTalk() {
    "use strict";

    catName = "Oliver";
    quote = catName + " says Meow!";

}
catTalk();
        </textarea>`;
        javascriptEs6IncorrectValue.innerHTML = "Incorrect..";
        javascriptEs6NextButton.innerHTML = `<button class="nextButton javascriptColor1" onclick=javascriptEs6Btn()>Next</button>`;
        javascriptEs6RemoveValue.innerHTML = "";



    } else if (javascriptEs6RandomValue == 1 && javascriptEs6InputAnswer == javascriptEs6AnswerArr[1].A1) {
        javascriptEs6CorrectValue.innerHTML = "Correct..";
        javascriptEs6DisplayAnswer.innerHTML = `
        <textarea name="text" class="answer_textarea" id="input">Good Job :) </textarea>`;
        javascriptEs6NextButton.innerHTML = `<button class="nextButton javascriptColor1" onclick=javascriptEs6Btn()>Next</button>`;
        javascriptEs6RemoveValue.innerHTML = "";

    } else if (javascriptEs6RandomValue == 1 && javascriptEs6InputAnswer !== javascriptEs6AnswerArr[1].A1) {
        javascriptEs6DisplayAnswer.innerHTML = `
        <textarea name="text" class="answer_textarea" id="input">
function checkScope() {
    "use strict";
    let i = "function scope";
    if (true) {
        let i = "block scope";
        console.log("Block scope i is: ", i);
    }
    console.log("Function scope i is: ", i);
    return i;
}
          </textarea>`;
        javascriptEs6IncorrectValue.innerHTML = "Incorrect..";
        javascriptEs6NextButton.innerHTML = `<button class="nextButton javascriptColor1" onclick=javascriptEs6Btn()>Next</button>`;
        javascriptEs6RemoveValue.innerHTML = "";



    } else if (javascriptEs6RandomValue == 2 && javascriptEs6InputAnswer == javascriptEs6AnswerArr[2].A2) {
        javascriptEs6CorrectValue.innerHTML = "Correct..";
        javascriptEs6DisplayAnswer.innerHTML = `
        <textarea name="text" class="answer_textarea" id="input">Good Job :) </textarea>`;
        javascriptEs6NextButton.innerHTML = `<button class="nextButton javascriptColor1" onclick=javascriptEs6Btn()>Next</button>`;
        javascriptEs6RemoveValue.innerHTML = "";

    } else if (javascriptEs6RandomValue == 2 && javascriptEs6InputAnswer !== javascriptEs6AnswerArr[2].A2) {
        javascriptEs6DisplayAnswer.innerHTML = `
    <textarea name="text" class="answer_textarea" id="input">
function printManyTimes(str) {
    "use strict";
    const SENTENCE = str + " is cool!";
    for(let i = 0; i < str.length; i+=2) {
        console.log(SENTENCE);
    }
}
printManyTimes("JabaDabaDuuu");
          </textarea>`;
        javascriptEs6IncorrectValue.innerHTML = "Incorrect..";
        javascriptEs6NextButton.innerHTML = `<button class="nextButton javascriptColor1" onclick=javascriptEs6Btn()>Next</button>`;
        javascriptEs6RemoveValue.innerHTML = "";



    } else if (javascriptEs6RandomValue == 3 && javascriptEs6InputAnswer == javascriptEs6AnswerArr[3].A3) {
        javascriptEs6CorrectValue.innerHTML = "Correct..";
        javascriptEs6DisplayAnswer.innerHTML = `
        <textarea name="text" class="answer_textarea" id="input">Good Job :) </textarea>`;
        javascriptEs6NextButton.innerHTML = `<button class="nextButton javascriptColor1" onclick=javascriptEs6Btn()>Next</button>`;
        javascriptEs6RemoveValue.innerHTML = "";

    } else if (javascriptEs6RandomValue == 3 && javascriptEs6InputAnswer !== javascriptEs6AnswerArr[3].A3) {
        javascriptEs6DisplayAnswer.innerHTML = `
    <textarea name="text" class="answer_textarea" id="input">
const s = [5, 7, 2];
function editInPlace() {
    "use strict";
    s[0] = 2;
    s[1] = 5;
    s[2] = 7;
}
editInPlace();
        </textarea>`;
        javascriptEs6IncorrectValue.innerHTML = "Incorrect..";
        javascriptEs6NextButton.innerHTML = `<button class="nextButton javascriptColor1" onclick=javascriptEs6Btn()>Next</button>`;
        javascriptEs6RemoveValue.innerHTML = "";
        


    } else if (javascriptEs6RandomValue == 4 && javascriptEs6InputAnswer == javascriptEs6AnswerArr[4].A4) {
        javascriptEs6CorrectValue.innerHTML = "Correct..";
        javascriptEs6DisplayAnswer.innerHTML = `
        <textarea name="text" class="answer_textarea" id="input">Good Job :) </textarea>`;
        javascriptEs6NextButton.innerHTML = `<button class="nextButton javascriptColor1" onclick=javascriptEs6Btn()>Next</button>`;
        javascriptEs6RemoveValue.innerHTML = "";

    } else if (javascriptEs6RandomValue == 4 && javascriptEs6InputAnswer !== javascriptEs6AnswerArr[4].A4) {
        javascriptEs6DisplayAnswer.innerHTML = `
    <textarea name="text" class="answer_textarea" id="input">
function freezeObj() {
    "use strict";
    const MATH_CONSTANTS = {
        PI: 3.14
    };

    Object.freeze(MATH_CONSTANTS);
    
    try {
        MATH_CONSTANTS.PI = 99;
    } catch( ex ) {
        console.log(ex);
    }
    return MATH_CONSTANTS.PI;
}
    
const PI = freezeObj();
        </textarea>`;
        javascriptEs6IncorrectValue.innerHTML = "Incorrect..";
        javascriptEs6NextButton.innerHTML = `<button class="nextButton javascriptColor1" onclick=javascriptEs6Btn()>Next</button>`;
        javascriptEs6RemoveValue.innerHTML = "";



    } else if (javascriptEs6RandomValue == 5 && javascriptEs6InputAnswer == javascriptEs6AnswerArr[5].A5) {
        javascriptEs6CorrectValue.innerHTML = "Correct..";
        javascriptEs6DisplayAnswer.innerHTML = `
        <textarea name="text" class="answer_textarea" id="input">Good Job :) </textarea>`;
        javascriptEs6NextButton.innerHTML = `<button class="nextButton javascriptColor1" onclick=javascriptEs6Btn()>Next</button>`;
        javascriptEs6RemoveValue.innerHTML = "";

    } else if (javascriptEs6RandomValue == 5 && javascriptEs6InputAnswer !== javascriptEs6AnswerArr[5].A5) {
        javascriptEs6DisplayAnswer.innerHTML = `
    <textarea name="text" class="answer_textarea" id="input">
const magic = () => {
    "use strict";
    return new Date();
};
        </textarea>`;
        javascriptEs6IncorrectValue.innerHTML = "Incorrect..";
        javascriptEs6NextButton.innerHTML = `<button class="nextButton javascriptColor1" onclick=javascriptEs6Btn()>Next</button>`;
        javascriptEs6RemoveValue.innerHTML = "";



    } else if (javascriptEs6RandomValue == 6 && javascriptEs6InputAnswer == javascriptEs6AnswerArr[6].A6) {
        javascriptEs6CorrectValue.innerHTML = "Correct..";
        javascriptEs6DisplayAnswer.innerHTML = `
        <textarea name="text" class="answer_textarea" id="input">Good Job :) </textarea>`;
        javascriptEs6NextButton.innerHTML = `<button class="nextButton javascriptColor1" onclick=javascriptEs6Btn()>Next</button>`;
        javascriptEs6RemoveValue.innerHTML = "";

    } else if (javascriptEs6RandomValue == 6 && javascriptEs6InputAnswer !== javascriptEs6AnswerArr[6].A6) {
        javascriptEs6DisplayAnswer.innerHTML = `
    <textarea name="text" class="answer_textarea" id="input">
const myConcat = (arr1, arr2) => {
    "use strict";
    return arr1.concat(arr2);
};
console.log(myConcat([1, 2], [3, 4, 5]));

        </textarea>`;
        javascriptEs6IncorrectValue.innerHTML = "Incorrect..";
        javascriptEs6NextButton.innerHTML = `<button class="nextButton javascriptColor1" onclick=javascriptEs6Btn()>Next</button>`;
        javascriptEs6RemoveValue.innerHTML = "";



    } else if (javascriptEs6RandomValue == 7 && javascriptEs6InputAnswer == javascriptEs6AnswerArr[7].A7) {
        javascriptEs6CorrectValue.innerHTML = "Correct..";
        javascriptEs6DisplayAnswer.innerHTML = `
        <textarea name="text" class="answer_textarea" id="input">Good Job :) </textarea>`;
        javascriptEs6NextButton.innerHTML = `<button class="nextButton javascriptColor1" onclick=javascriptEs6Btn()>Next</button>`;
        javascriptEs6RemoveValue.innerHTML = "";

    } else if (javascriptEs6RandomValue == 7 && javascriptEs6InputAnswer !== javascriptEs6AnswerArr[7].A7) {
        javascriptEs6DisplayAnswer.innerHTML = `
    <textarea name="text" class="answer_textarea" id="input">
const realNumberArray = [4, 5.6, -9.8, 3.14, 42, 6, 8.34];
const squareList = (arr) => {
    "use strict";
    const squaredIntegers = arr.filter(num => Number.isInteger(num)).map(square => square*square);
    return squaredIntegers;
};
const squaredIntegers = squareList(realNumberArray);
console.log(squaredIntegers);

        </textarea>`;
        javascriptEs6IncorrectValue.innerHTML = "Incorrect..";
        javascriptEs6NextButton.innerHTML = `<button class="nextButton javascriptColor1" onclick=javascriptEs6Btn()>Next</button>`;
        javascriptEs6RemoveValue.innerHTML = "";



    } else if (javascriptEs6RandomValue == 8 && javascriptEs6InputAnswer == javascriptEs6AnswerArr[8].A8) {
        javascriptEs6CorrectValue.innerHTML = "Correct..";
        javascriptEs6DisplayAnswer.innerHTML = `
        <textarea name="text" class="answer_textarea" id="input">Good Job :) </textarea>`;
        javascriptEs6NextButton.innerHTML = `<button class="nextButton javascriptColor1" onclick=javascriptEs6Btn()>Next</button>`;
        javascriptEs6RemoveValue.innerHTML = "";

    } else if (javascriptEs6RandomValue == 8 && javascriptEs6InputAnswer !== javascriptEs6AnswerArr[8].A8) {
        javascriptEs6DisplayAnswer.innerHTML = `
    <textarea name="text" class="answer_textarea" id="input">
const increment = (function() {
    "use strict";
    return function increment(number, value = 1) {
        return number + value;
    };
})();
console.log(increment(5, 2));
console.log(increment(5));
        </textarea>`;
        javascriptEs6IncorrectValue.innerHTML = "Incorrect..";
        javascriptEs6NextButton.innerHTML = `<button class="nextButton javascriptColor1" onclick=javascriptEs6Btn()>Next</button>`;
        javascriptEs6RemoveValue.innerHTML = "";



    } else if (javascriptEs6RandomValue == 9 && javascriptEs6InputAnswer == javascriptEs6AnswerArr[9].A9) {
        javascriptEs6CorrectValue.innerHTML = "Correct..";
        javascriptEs6DisplayAnswer.innerHTML = `
        <textarea name="text" class="answer_textarea" id="input">Good Job :) </textarea>`;
        javascriptEs6NextButton.innerHTML = `<button class="nextButton javascriptColor1" onclick=javascriptEs6Btn()>Next</button>`;
        javascriptEs6RemoveValue.innerHTML = "";

    } else if (javascriptEs6RandomValue == 9 && javascriptEs6InputAnswer !== javascriptEs6AnswerArr[9].A9) {
        javascriptEs6DisplayAnswer.innerHTML = `
    <textarea name="text" class="answer_textarea" id="input">
const sum = (function() {
    "use strict";
    return function sum(...args) {		
        return args.reduce((a, b) => a + b, 0);
    };
})();
console.log(sum(0, 1, 2));
        </textarea>`;
        javascriptEs6IncorrectValue.innerHTML = "Incorrect..";
        javascriptEs6NextButton.innerHTML = `<button class="nextButton javascriptColor1" onclick=javascriptEs6Btn()>Next</button>`;
        javascriptEs6RemoveValue.innerHTML = "";



    } else if (javascriptEs6RandomValue == 10 && javascriptEs6InputAnswer == javascriptEs6AnswerArr[10].A10) {
        javascriptEs6CorrectValue.innerHTML = "Correct..";
        javascriptEs6DisplayAnswer.innerHTML = `
        <textarea name="text" class="answer_textarea" id="input">Good Job :) </textarea>`;
        javascriptEs6NextButton.innerHTML = `<button class="nextButton javascriptColor1" onclick=javascriptEs6Btn()>Next</button>`;
        javascriptEs6RemoveValue.innerHTML = "";

    } else if (javascriptEs6RandomValue == 10 && javascriptEs6InputAnswer !== javascriptEs6AnswerArr[10].A10) {
        javascriptEs6DisplayAnswer.innerHTML = `
    <textarea name="text" class="answer_textarea" id="input">
const arr1 = ['JAN', 'FEB', 'MAR', 'APR', 'MAY'];
let arr2;
arr2 = [...arr1];
        </textarea>`;
        javascriptEs6IncorrectValue.innerHTML = "Incorrect..";
        javascriptEs6NextButton.innerHTML = `<button class="nextButton javascriptColor1" onclick=javascriptEs6Btn()>Next</button>`;
        javascriptEs6RemoveValue.innerHTML = "";



    } else if (javascriptEs6RandomValue == 11 && javascriptEs6InputAnswer == javascriptEs6AnswerArr[11].A11) {
        javascriptEs6CorrectValue.innerHTML = "Correct..";
        javascriptEs6DisplayAnswer.innerHTML = `
        <textarea name="text" class="answer_textarea" id="input">Good Job :) </textarea>`;
        javascriptEs6NextButton.innerHTML = `<button class="nextButton javascriptColor1" onclick=javascriptEs6Btn()>Next</button>`;
        javascriptEs6RemoveValue.innerHTML = "";

    } else if (javascriptEs6RandomValue == 11 && javascriptEs6InputAnswer !== javascriptEs6AnswerArr[11].A11) {
        javascriptEs6DisplayAnswer.innerHTML = `
    <textarea name="text" class="answer_textarea" id="input">
const AVG_TEMPERATURES = {
    today: 77.5,
    tomorrow: 79
    };
    function getTempOfTmrw(avgTemperatures) {
    "use strict";
    const {tomorrow:tempOfTomorrow} = avgTemperatures;
    return tempOfTomorrow;
}
    
console.log(getTempOfTmrw(AVG_TEMPERATURES)); 
        </textarea>`;
        javascriptEs6IncorrectValue.innerHTML = "Incorrect..";
        javascriptEs6NextButton.innerHTML = `<button class="nextButton javascriptColor1" onclick=javascriptEs6Btn()>Next</button>`;
        javascriptEs6RemoveValue.innerHTML = "";



    } else if (javascriptEs6RandomValue == 12 && javascriptEs6InputAnswer == javascriptEs6AnswerArr[12].A12) {
        javascriptEs6CorrectValue.innerHTML = "Correct..";
        javascriptEs6DisplayAnswer.innerHTML = `
        <textarea name="text" class="answer_textarea" id="input">Good Job :) </textarea>`;
        javascriptEs6NextButton.innerHTML = `<button class="nextButton javascriptColor1" onclick=javascriptEs6Btn()>Next</button>`;
        javascriptEs6RemoveValue.innerHTML = "";

    } else if (javascriptEs6RandomValue == 12 && javascriptEs6InputAnswer !== javascriptEs6AnswerArr[12].A12) {
        javascriptEs6DisplayAnswer.innerHTML = `
    <textarea name="text" class="answer_textarea" id="input">
const LOCAL_FORECAST = {
    today: { min: 72, max: 83 },
    tomorrow: { min: 73.3, max: 84.6 }
    };
    
    function getMaxOfTmrw(forecast) {
    "use strict";
    const { tomorrow : {max: maxOfTomorrow}} = forecast 
    return maxOfTomorrow;
}
    
console.log(getMaxOfTmrw(LOCAL_FORECAST));
        </textarea>`;
        javascriptEs6IncorrectValue.innerHTML = "Incorrect..";
        javascriptEs6NextButton.innerHTML = `<button class="nextButton javascriptColor1" onclick=javascriptEs6Btn()>Next</button>`;
        javascriptEs6RemoveValue.innerHTML = "";



    } else if (javascriptEs6RandomValue == 13 && javascriptEs6InputAnswer == javascriptEs6AnswerArr[13].A13) {
        javascriptEs6CorrectValue.innerHTML = "Correct..";
        javascriptEs6DisplayAnswer.innerHTML = `
        <textarea name="text" class="answer_textarea" id="input">Good Job :) </textarea>`;
        javascriptEs6NextButton.innerHTML = `<button class="nextButton javascriptColor1" onclick=javascriptEs6Btn()>Next</button>`;
        javascriptEs6RemoveValue.innerHTML = "";

    } else if (javascriptEs6RandomValue == 13 && javascriptEs6InputAnswer !== javascriptEs6AnswerArr[13].A13) {
        javascriptEs6DisplayAnswer.innerHTML = `
    <textarea name="text" class="answer_textarea" id="input">
let a = 8, b = 6;
[a,b] = [b,a];
console.log(a);
console.log(b);
        </textarea>`;
        javascriptEs6IncorrectValue.innerHTML = "Incorrect..";
        javascriptEs6NextButton.innerHTML = `<button class="nextButton javascriptColor1" onclick=javascriptEs6Btn()>Next</button>`;
        javascriptEs6RemoveValue.innerHTML = "";



    } else if (javascriptEs6RandomValue == 14 && javascriptEs6InputAnswer == javascriptEs6AnswerArr[14].A14) {
        javascriptEs6CorrectValue.innerHTML = "Correct..";
        javascriptEs6DisplayAnswer.innerHTML = `
        <textarea name="text" class="answer_textarea" id="input">Good Job :) </textarea>`;
        javascriptEs6NextButton.innerHTML = `<button class="nextButton javascriptColor1" onclick=javascriptEs6Btn()>Next</button>`;
        javascriptEs6RemoveValue.innerHTML = "";

    } else if (javascriptEs6RandomValue == 14 && javascriptEs6InputAnswer !== javascriptEs6AnswerArr[14].A14) {
        javascriptEs6DisplayAnswer.innerHTML = `
    <textarea name="text" class="answer_textarea" id="input">
const source = [1,2,3,4,5,6,7,8,9,10];
const [a, b, ...arr] = source;
console.log(arr); 
console.log(source);
        </textarea>`;
        javascriptEs6IncorrectValue.innerHTML = "Incorrect..";
        javascriptEs6NextButton.innerHTML = `<button class="nextButton javascriptColor1" onclick=javascriptEs6Btn()>Next</button>`;
        javascriptEs6RemoveValue.innerHTML = "";



    } else if (javascriptEs6RandomValue == 15 && javascriptEs6InputAnswer == javascriptEs6AnswerArr[15].A15) {
        javascriptEs6CorrectValue.innerHTML = "Correct..";
        javascriptEs6DisplayAnswer.innerHTML = `
        <textarea name="text" class="answer_textarea" id="input">Good Job :) </textarea>`;
        javascriptEs6NextButton.innerHTML = `<button class="nextButton javascriptColor1" onclick=javascriptEs6Btn()>Next</button>`;
        javascriptEs6RemoveValue.innerHTML = "";

    } else if (javascriptEs6RandomValue == 15 && javascriptEs6InputAnswer !== javascriptEs6AnswerArr[15].A15) {
        javascriptEs6DisplayAnswer.innerHTML = `
    <textarea name="text" class="answer_textarea" id="input">
const stats = {
    max: 56.78,
    standard_deviation: 4.34,
    median: 34.54,
    mode: 23.87,
    min: -0.75,
    average: 35.85
    };
    
    const half = (function() {
    "use strict";
    
    return function half({max, min}) {
        return (max + min) / 2.0;
    };
    
})();
console.log(stats);
console.log(half(stats));
        </textarea>`;
        javascriptEs6IncorrectValue.innerHTML = "Incorrect..";
        javascriptEs6NextButton.innerHTML = `<button class="nextButton javascriptColor1" onclick=javascriptEs6Btn()>Next</button>`;
        javascriptEs6RemoveValue.innerHTML = "";



    } else if (javascriptEs6RandomValue == 16 && javascriptEs6InputAnswer == javascriptEs6AnswerArr[16].A16) {
        javascriptEs6CorrectValue.innerHTML = "Correct..";
        javascriptEs6DisplayAnswer.innerHTML = `
        <textarea name="text" class="answer_textarea" id="input">Good Job :) </textarea>`;
        javascriptEs6NextButton.innerHTML = `<button class="nextButton javascriptColor1" onclick=javascriptEs6Btn()>Next</button>`;
        javascriptEs6RemoveValue.innerHTML = "";

    } else if (javascriptEs6RandomValue == 16 && javascriptEs6InputAnswer !== javascriptEs6AnswerArr[16].A16) {
        javascriptEs6DisplayAnswer.innerHTML = `
    <textarea name="text" class="answer_textarea" id="input">
const result = {
    success: ["max-length", "no-amd", "prefer-arrow-functions"],
    failure: ["no-var", "var-on-top", "linebreak"],
    skipped: ["id-blacklist", "no-dup-keys"]
    };
    function makeList(arr) {
    "use strict";
    const resultDisplayArray =
    ['<li class="text-warning">$ {arr[0]}</li>', 
    '<li class="text-warning">$ {arr[1]}</li>', 
    '<li class="text-warning">$ {arr[2]}</li>'];
    
    return resultDisplayArray;
}
const resultDisplayArray = makeList(result.failure);
        </textarea>`;
        javascriptEs6IncorrectValue.innerHTML = "Incorrect..";
        javascriptEs6NextButton.innerHTML = `<button class="nextButton javascriptColor1" onclick=javascriptEs6Btn()>Next</button>`;
        javascriptEs6RemoveValue.innerHTML = "";



    } else if (javascriptEs6RandomValue == 17 && javascriptEs6InputAnswer == javascriptEs6AnswerArr[17].A17) {
        javascriptEs6CorrectValue.innerHTML = "Correct..";
        javascriptEs6DisplayAnswer.innerHTML = `
        <textarea name="text" class="answer_textarea" id="input">Good Job :) </textarea>`;
        javascriptEs6NextButton.innerHTML = `<button class="nextButton javascriptColor1" onclick=javascriptEs6Btn()>Next</button>`;
        javascriptEs6RemoveValue.innerHTML = "";

    } else if (javascriptEs6RandomValue == 17 && javascriptEs6InputAnswer !== javascriptEs6AnswerArr[17].A17) {
        javascriptEs6DisplayAnswer.innerHTML = `
    <textarea name="text" class="answer_textarea" id="input">
const createPerson = (name, age, gender) => {
    "use strict";
    return {
        name,
        age,
        gender
    };
};
console.log(createPerson("Zodiac Hasbro", 56, "male"));
        </textarea>`;
        javascriptEs6IncorrectValue.innerHTML = "Incorrect..";
        javascriptEs6NextButton.innerHTML = `<button class="nextButton javascriptColor1" onclick=javascriptEs6Btn()>Next</button>`;
        javascriptEs6RemoveValue.innerHTML = "";



    } else if (javascriptEs6RandomValue == 18 && javascriptEs6InputAnswer == javascriptEs6AnswerArr[18].A18) {
        javascriptEs6CorrectValue.innerHTML = "Correct..";
        javascriptEs6DisplayAnswer.innerHTML = `
        <textarea name="text" class="answer_textarea" id="input">Good Job :) </textarea>`;
        javascriptEs6NextButton.innerHTML = `<button class="nextButton javascriptColor1" onclick=javascriptEs6Btn()>Next</button>`;
        javascriptEs6RemoveValue.innerHTML = "";

    } else if (javascriptEs6RandomValue == 18 && javascriptEs6InputAnswer !== javascriptEs6AnswerArr[18].A18) {
        javascriptEs6DisplayAnswer.innerHTML = `
    <textarea name="text" class="answer_textarea" id="input">
const bicycle = {
    gear: 2,
    setGear(newGear) {
        "use strict";
        this.gear = newGear;
    }
};
bicycle.setGear(3);
console.log(bicycle.gear);
        </textarea>`;
        javascriptEs6IncorrectValue.innerHTML = "Incorrect..";
        javascriptEs6NextButton.innerHTML = `<button class="nextButton javascriptColor1" onclick=javascriptEs6Btn()>Next</button>`;
        javascriptEs6RemoveValue.innerHTML = "";



    } else if (javascriptEs6RandomValue == 19 && javascriptEs6InputAnswer == javascriptEs6AnswerArr[19].A19) {
        javascriptEs6CorrectValue.innerHTML = "Correct..";
        javascriptEs6DisplayAnswer.innerHTML = `
        <textarea name="text" class="answer_textarea" id="input">Good Job :) </textarea>`;
        javascriptEs6NextButton.innerHTML = `<button class="nextButton javascriptColor1" onclick=javascriptEs6Btn()>Next</button>`;
        javascriptEs6RemoveValue.innerHTML = "";

    } else if (javascriptEs6RandomValue == 19 && javascriptEs6InputAnswer !== javascriptEs6AnswerArr[19].A19) {
        javascriptEs6DisplayAnswer.innerHTML = `
    <textarea name="text" class="answer_textarea" id="input">
function makeClass() {
    "use strict";
    class Vegetable {
        constructor(name){
        this.name = name;
        }
    }
    return Vegetable;
}
const Vegetable = makeClass();
const carrot = new Vegetable('carrot');
console.log(carrot.name);
          </textarea>`;
        javascriptEs6IncorrectValue.innerHTML = "Incorrect..";
        javascriptEs6NextButton.innerHTML = `<button class="nextButton javascriptColor1" onclick=javascriptEs6Btn()>Next</button>`;
        javascriptEs6RemoveValue.innerHTML = "";



    } else if (javascriptEs6RandomValue == 20 && javascriptEs6InputAnswer == javascriptEs6AnswerArr[20].A20) {
        javascriptEs6CorrectValue.innerHTML = "Correct..";
        javascriptEs6DisplayAnswer.innerHTML = `
        <textarea name="text" class="answer_textarea" id="input">Good Job :) </textarea>`;
        javascriptEs6NextButton.innerHTML = `<button class="nextButton javascriptColor1" onclick=javascriptEs6Btn()>Next</button>`;
        javascriptEs6RemoveValue.innerHTML = "";

    } else if (javascriptEs6RandomValue == 20 && javascriptEs6InputAnswer !== javascriptEs6AnswerArr[20].A20) {
        javascriptEs6DisplayAnswer.innerHTML = `
    <textarea name="text" class="answer_textarea" id="input">
function makeClass() {
    "use strict";
    class Thermostat{
        constructor(farenheit){
        this.farenheit = farenheit;
        }
        get temperature(){
        return 5 / 9 * (this.farenheit - 32);
        }
        set temperature(celsius){
        this.farenheit = celsius * 9.0 / 5 + 32;
        }
    }
    return Thermostat;
}
const Thermostat = makeClass();
const thermos = new Thermostat(76); 
let temp = thermos.temperature; 
thermos.temperature = 26;
temp = thermos.temperature;
        </textarea>`;
        javascriptEs6IncorrectValue.innerHTML = "Incorrect..";
        javascriptEs6NextButton.innerHTML = `<button class="nextButton javascriptColor1" onclick=javascriptEs6Btn()>Next</button>`;
        javascriptEs6RemoveValue.innerHTML = "";



    } else if (javascriptEs6RandomValue == 21 && javascriptEs6InputAnswer == javascriptEs6AnswerArr[21].A21) {
        javascriptEs6CorrectValue.innerHTML = "Correct..";
        javascriptEs6DisplayAnswer.innerHTML = `
        <textarea name="text" class="answer_textarea" id="input">Good Job :) </textarea>`;
        javascriptEs6NextButton.innerHTML = `<button class="nextButton javascriptColor1" onclick=javascriptEs6Btn()>Next</button>`;
        javascriptEs6RemoveValue.innerHTML = "";

    } else if (javascriptEs6RandomValue == 21 && javascriptEs6InputAnswer !== javascriptEs6AnswerArr[21].A21) {
        javascriptEs6DisplayAnswer.innerHTML = `
    <textarea name="text" class="answer_textarea" id="input">
import { capitalizeString } from 'string_functions';
capitalizeString("hello!");
        </textarea>`;
        javascriptEs6IncorrectValue.innerHTML = "Incorrect..";
        javascriptEs6NextButton.innerHTML = `<button class="nextButton javascriptColor1" onclick=javascriptEs6Btn()>Next</button>`;
        javascriptEs6RemoveValue.innerHTML = "";



    } else if (javascriptEs6RandomValue == 22 && javascriptEs6InputAnswer == javascriptEs6AnswerArr[22].A22) {
        javascriptEs6CorrectValue.innerHTML = "Correct..";
        javascriptEs6DisplayAnswer.innerHTML = `
        <textarea name="text" class="answer_textarea" id="input">Good Job :) </textarea>`;
        javascriptEs6NextButton.innerHTML = `<button class="nextButton javascriptColor1" onclick=javascriptEs6Btn()>Next</button>`;
        javascriptEs6RemoveValue.innerHTML = "";

    } else if (javascriptEs6RandomValue == 22 && javascriptEs6InputAnswer !== javascriptEs6AnswerArr[22].A22) {
        javascriptEs6DisplayAnswer.innerHTML = `
    <textarea name="text" class="answer_textarea" id="input">
"use strict";
export const foo = "bar";
export const bar = "foo";
        </textarea>`;
        javascriptEs6IncorrectValue.innerHTML = "Incorrect..";
        javascriptEs6NextButton.innerHTML = `<button class="nextButton javascriptColor1" onclick=javascriptEs6Btn()>Next</button>`;
        javascriptEs6RemoveValue.innerHTML = "";



    } else if (javascriptEs6RandomValue == 23 && javascriptEs6InputAnswer == javascriptEs6AnswerArr[23].A23) {
        javascriptEs6CorrectValue.innerHTML = "Correct..";
        javascriptEs6DisplayAnswer.innerHTML = `
        <textarea name="text" class="answer_textarea" id="input">Good Job :) </textarea>`;
        javascriptEs6NextButton.innerHTML = `<button class="nextButton javascriptColor1" onclick=javascriptEs6Btn()>Next</button>`;
        javascriptEs6RemoveValue.innerHTML = "";

    } else if (javascriptEs6RandomValue == 23 && javascriptEs6InputAnswer !== javascriptEs6AnswerArr[23].A23) {
        javascriptEs6DisplayAnswer.innerHTML = `

    <textarea name="text" class="answer_textarea" id="input">
"use strict";
import * as str from "capitalize_strings";
        </textarea>`;
        javascriptEs6IncorrectValue.innerHTML = "Incorrect..";
        javascriptEs6NextButton.innerHTML = `<button class="nextButton javascriptColor1" onclick=javascriptEs6Btn()>Next</button>`;
        javascriptEs6RemoveValue.innerHTML = "";



    } else if (javascriptEs6RandomValue == 24 && javascriptEs6InputAnswer == javascriptEs6AnswerArr[24].A24) {
        javascriptEs6CorrectValue.innerHTML = "Correct..";
        javascriptEs6DisplayAnswer.innerHTML = `
        <textarea name="text" class="answer_textarea" id="input">Good Job :) </textarea>`;
        javascriptEs6NextButton.innerHTML = `<button class="nextButton javascriptColor1" onclick=javascriptEs6Btn()>Next</button>`;
        javascriptEs6RemoveValue.innerHTML = "";

    } else if (javascriptEs6RandomValue == 24 && javascriptEs6InputAnswer !== javascriptEs6AnswerArr[24].A24) {
        javascriptEs6DisplayAnswer.innerHTML = `
    <textarea name="text" class="answer_textarea" id="input">
"use strict";
export default function subtract(x,y) {return x - y;}
        </textarea>`;
        javascriptEs6IncorrectValue.innerHTML = "Incorrect..";
        javascriptEs6NextButton.innerHTML = `<button class="nextButton javascriptColor1" onclick=javascriptEs6Btn()>Next</button>`;
        javascriptEs6RemoveValue.innerHTML = "";



    } else if (javascriptEs6RandomValue == 25 && javascriptEs6InputAnswer == javascriptEs6AnswerArr[25].A25) {
        javascriptEs6CorrectValue.innerHTML = "Correct..";
        javascriptEs6DisplayAnswer.innerHTML = `
        <textarea name="text" class="answer_textarea" id="input">Good Job :) </textarea>`;
        javascriptEs6NextButton.innerHTML = `<button class="nextButton javascriptColor1" onclick=javascriptEs6Btn()>Next</button>`;
        javascriptEs6RemoveValue.innerHTML = "";

    } else if (javascriptEs6RandomValue == 25 && javascriptEs6InputAnswer !== javascriptEs6AnswerArr[25].A25) {
        javascriptEs6DisplayAnswer.innerHTML = `
    <textarea name="text" class="answer_textarea" id="input">
"use strict";
import subtract from "math_functions";
subtract(7,4);
        </textarea>`;
        javascriptEs6IncorrectValue.innerHTML = "Incorrect..";
        javascriptEs6NextButton.innerHTML = `<button class="nextButton javascriptColor1" onclick=javascriptEs6Btn()>Next</button>`;
        javascriptEs6RemoveValue.innerHTML = "";



    } else {
        javascriptEs6IncorrectValue.innerHTML = "Incorrect..";
        javascriptEs6NextButton.innerHTML = `<button class="nextButton javascriptColor1" onclick=javascriptEs6Btn()>Next</button>`;
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
      <button class="answer_submit javascriptColor1" id = "javascriptEs6StartButton" onclick="javascriptEs6Submit()">Submit</button>`;/* to create next text area and Submit button. */
    document.getElementById("javascriptEs6CheckingAnswer").innerHTML = "";
    document.getElementById("javascriptEs6ShowingAnswer").innerHTML = "";
}
window.javascriptEs6Btn = javascriptEs6Btn;/* to make submit global*/





























var javascriptRegExpressRandomValue = Math.floor(Math.random() * javascriptRegExpressQuestionArr.length); /* taking random question from htmlQuestionArr*/


function javascriptRegExpressSubmit() { /* function for html submit button*/

    var javascriptRegExpressInputAnswer = input.value.replace(/\s+/g, ``); /*replace(/\s+/g, `` is removing all spaces. Avoid checking all the spaces to compare text*/
    var javascriptRegExpressCorrectValue = document.getElementById("javascriptRegExpressCheckingAnswer"); /* making getElementById code shorter*/
    var javascriptRegExpressIncorrectValue = document.getElementById("javascriptRegExpressCheckingAnswer");
    var javascriptRegExpressDisplayAnswer = document.getElementById("javascriptRegExpressShowingAnswer");
    var javascriptRegExpressNextButton = document.getElementById("javascriptRegExpressElementButton");
    var javascriptRegExpressRemoveValue = document.getElementById("javascriptRegExpressRemove");

    if (javascriptRegExpressRandomValue == 0 && javascriptRegExpressInputAnswer == javascriptRegExpressAnswerArr[0].A0) { /* checking if javascriptRegExpressRandomValue is 0 and if putting answer the same as javascriptRegExpressAnswerArr*//*A0 is just that I can track answer numbers when adding questions and answers*/
        javascriptRegExpressCorrectValue.innerHTML = "Correct..";
        javascriptRegExpressDisplayAnswer.innerHTML = `
        <textarea name="text" class="answer_textarea" id="input">Good Job :) </textarea>`;
        javascriptRegExpressNextButton.innerHTML = `<button class="nextButton javascriptColor1" onclick=javascriptRegExpressBtn()>Next</button>`; /* creating next button with javascriptRegExpressBtn()function*/
        javascriptRegExpressRemoveValue.innerHTML = "";/* removing in html answer*/



    } else if (javascriptRegExpressRandomValue == 0 && javascriptRegExpressInputAnswer !== javascriptRegExpressAnswerArr[0].A0) {/*  if random value not == then giving then display the answere.*/
        javascriptRegExpressDisplayAnswer.innerHTML = `
    <textarea name="text" class="answer_textarea" id="input">
let myString = "Hello, World!";
let myRegex = /Hello/;
let result = myRegex.test(myString);
        </textarea>`;
        javascriptRegExpressIncorrectValue.innerHTML = "Incorrect..";
        javascriptRegExpressNextButton.innerHTML = `<button class="nextButton javascriptColor1" onclick=javascriptRegExpressBtn()>Next</button>`;
        javascriptRegExpressRemoveValue.innerHTML = "";



    } else if (javascriptRegExpressRandomValue == 1 && javascriptRegExpressInputAnswer == javascriptRegExpressAnswerArr[1].A1) {
        javascriptRegExpressCorrectValue.innerHTML = "Correct..";
        javascriptRegExpressDisplayAnswer.innerHTML = `
        <textarea name="text" class="answer_textarea" id="input">Good Job :) </textarea>`;
        javascriptRegExpressNextButton.innerHTML = `<button class="nextButton javascriptColor1" onclick=javascriptRegExpressBtn()>Next</button>`;
        javascriptRegExpressRemoveValue.innerHTML = "";

    } else if (javascriptRegExpressRandomValue == 1 && javascriptRegExpressInputAnswer !== javascriptRegExpressAnswerArr[1].A1) {
        javascriptRegExpressDisplayAnswer.innerHTML = `
        <textarea name="text" class="answer_textarea" id="input">
let waldoIsHiding = "Somewhere Waldo is hiding in this text.";
let waldoRegex = /Waldo/; 
let result = waldoRegex.test(waldoIsHiding);
          </textarea>`;
        javascriptRegExpressIncorrectValue.innerHTML = "Incorrect..";
        javascriptRegExpressNextButton.innerHTML = `<button class="nextButton javascriptColor1" onclick=javascriptRegExpressBtn()>Next</button>`;
        javascriptRegExpressRemoveValue.innerHTML = "";



    } else if (javascriptRegExpressRandomValue == 2 && javascriptRegExpressInputAnswer == javascriptRegExpressAnswerArr[2].A2) {
        javascriptRegExpressCorrectValue.innerHTML = "Correct..";
        javascriptRegExpressDisplayAnswer.innerHTML = `
        <textarea name="text" class="answer_textarea" id="input">Good Job :) </textarea>`;
        javascriptRegExpressNextButton.innerHTML = `<button class="nextButton javascriptColor1" onclick=javascriptRegExpressBtn()>Next</button>`;
        javascriptRegExpressRemoveValue.innerHTML = "";

    } else if (javascriptRegExpressRandomValue == 2 && javascriptRegExpressInputAnswer !== javascriptRegExpressAnswerArr[2].A2) {
        javascriptRegExpressDisplayAnswer.innerHTML = `
    <textarea name="text" class="answer_textarea" id="input">
let petString = "James has a pet cat.";
let petRegex = /dog|cat|bird|fish/;
let result = petRegex.test(petString);
          </textarea>`;
        javascriptRegExpressIncorrectValue.innerHTML = "Incorrect..";
        javascriptRegExpressNextButton.innerHTML = `<button class="nextButton javascriptColor1" onclick=javascriptRegExpressBtn()>Next</button>`;
        javascriptRegExpressRemoveValue.innerHTML = "";



    } else if (javascriptRegExpressRandomValue == 3 && javascriptRegExpressInputAnswer == javascriptRegExpressAnswerArr[3].A3) {
        javascriptRegExpressCorrectValue.innerHTML = "Correct..";
        javascriptRegExpressDisplayAnswer.innerHTML = `
        <textarea name="text" class="answer_textarea" id="input">Good Job :) </textarea>`;
        javascriptRegExpressNextButton.innerHTML = `<button class="nextButton javascriptColor1" onclick=javascriptRegExpressBtn()>Next</button>`;
        javascriptRegExpressRemoveValue.innerHTML = "";

    } else if (javascriptRegExpressRandomValue == 3 && javascriptRegExpressInputAnswer !== javascriptRegExpressAnswerArr[3].A3) {
        javascriptRegExpressDisplayAnswer.innerHTML = `
    <textarea name="text" class="answer_textarea" id="input">
let myString = "test";
let fccRegex = /test/i; 
let result = fccRegex.test(myString);
        </textarea>`;
        javascriptRegExpressIncorrectValue.innerHTML = "Incorrect..";
        javascriptRegExpressNextButton.innerHTML = `<button class="nextButton javascriptColor1" onclick=javascriptRegExpressBtn()>Next</button>`;
        javascriptRegExpressRemoveValue.innerHTML = "";
        


    } else if (javascriptRegExpressRandomValue == 4 && javascriptRegExpressInputAnswer == javascriptRegExpressAnswerArr[4].A4) {
        javascriptRegExpressCorrectValue.innerHTML = "Correct..";
        javascriptRegExpressDisplayAnswer.innerHTML = `
        <textarea name="text" class="answer_textarea" id="input">Good Job :) </textarea>`;
        javascriptRegExpressNextButton.innerHTML = `<button class="nextButton javascriptColor1" onclick=javascriptRegExpressBtn()>Next</button>`;
        javascriptRegExpressRemoveValue.innerHTML = "";

    } else if (javascriptRegExpressRandomValue == 4 && javascriptRegExpressInputAnswer !== javascriptRegExpressAnswerArr[4].A4) {
        javascriptRegExpressDisplayAnswer.innerHTML = `
    <textarea name="text" class="answer_textarea" id="input">
let extractStr = "Extract the word 'coding' from this string.";
let codingRegex = /coding/; 
let result = extractStr.match(codingRegex); 
        </textarea>`;
        javascriptRegExpressIncorrectValue.innerHTML = "Incorrect..";
        javascriptRegExpressNextButton.innerHTML = `<button class="nextButton javascriptColor1" onclick=javascriptRegExpressBtn()>Next</button>`;
        javascriptRegExpressRemoveValue.innerHTML = "";



    } else if (javascriptRegExpressRandomValue == 5 && javascriptRegExpressInputAnswer == javascriptRegExpressAnswerArr[5].A5) {
        javascriptRegExpressCorrectValue.innerHTML = "Correct..";
        javascriptRegExpressDisplayAnswer.innerHTML = `
        <textarea name="text" class="answer_textarea" id="input">Good Job :) </textarea>`;
        javascriptRegExpressNextButton.innerHTML = `<button class="nextButton javascriptColor1" onclick=javascriptRegExpressBtn()>Next</button>`;
        javascriptRegExpressRemoveValue.innerHTML = "";

    } else if (javascriptRegExpressRandomValue == 5 && javascriptRegExpressInputAnswer !== javascriptRegExpressAnswerArr[5].A5) {
        javascriptRegExpressDisplayAnswer.innerHTML = `
    <textarea name="text" class="answer_textarea" id="input">
let twinkleStar = "Twinkle, twinkle, little star";
let starRegex = /twinkle/gi; 
let result = twinkleStar.match(starRegex); 
        </textarea>`;
        javascriptRegExpressIncorrectValue.innerHTML = "Incorrect..";
        javascriptRegExpressNextButton.innerHTML = `<button class="nextButton javascriptColor1" onclick=javascriptRegExpressBtn()>Next</button>`;
        javascriptRegExpressRemoveValue.innerHTML = "";



    } else if (javascriptRegExpressRandomValue == 6 && javascriptRegExpressInputAnswer == javascriptRegExpressAnswerArr[6].A6) {
        javascriptRegExpressCorrectValue.innerHTML = "Correct..";
        javascriptRegExpressDisplayAnswer.innerHTML = `
        <textarea name="text" class="answer_textarea" id="input">Good Job :) </textarea>`;
        javascriptRegExpressNextButton.innerHTML = `<button class="nextButton javascriptColor1" onclick=javascriptRegExpressBtn()>Next</button>`;
        javascriptRegExpressRemoveValue.innerHTML = "";

    } else if (javascriptRegExpressRandomValue == 6 && javascriptRegExpressInputAnswer !== javascriptRegExpressAnswerArr[6].A6) {
        javascriptRegExpressDisplayAnswer.innerHTML = `
    <textarea name="text" class="answer_textarea" id="input">
let exampleStr = "Let's have fun with regular expressions!";
let unRegex = /.un/; 
let result = unRegex.test(exampleStr);
        </textarea>`;
        javascriptRegExpressIncorrectValue.innerHTML = "Incorrect..";
        javascriptRegExpressNextButton.innerHTML = `<button class="nextButton javascriptColor1" onclick=javascriptRegExpressBtn()>Next</button>`;
        javascriptRegExpressRemoveValue.innerHTML = "";



    } else if (javascriptRegExpressRandomValue == 7 && javascriptRegExpressInputAnswer == javascriptRegExpressAnswerArr[7].A7) {
        javascriptRegExpressCorrectValue.innerHTML = "Correct..";
        javascriptRegExpressDisplayAnswer.innerHTML = `
        <textarea name="text" class="answer_textarea" id="input">Good Job :) </textarea>`;
        javascriptRegExpressNextButton.innerHTML = `<button class="nextButton javascriptColor1" onclick=javascriptRegExpressBtn()>Next</button>`;
        javascriptRegExpressRemoveValue.innerHTML = "";

    } else if (javascriptRegExpressRandomValue == 7 && javascriptRegExpressInputAnswer !== javascriptRegExpressAnswerArr[7].A7) {
        javascriptRegExpressDisplayAnswer.innerHTML = `
    <textarea name="text" class="answer_textarea" id="input">
let quoteSample = "Beware of bugs in the above code; I have only proved it correct, not tried it.";
let vowelRegex = /[aeiou]/ig; 
let result = quoteSample.match(vowelRegex); 

        </textarea>`;
        javascriptRegExpressIncorrectValue.innerHTML = "Incorrect..";
        javascriptRegExpressNextButton.innerHTML = `<button class="nextButton javascriptColor1" onclick=javascriptRegExpressBtn()>Next</button>`;
        javascriptRegExpressRemoveValue.innerHTML = "";



    } else if (javascriptRegExpressRandomValue == 8 && javascriptRegExpressInputAnswer == javascriptRegExpressAnswerArr[8].A8) {
        javascriptRegExpressCorrectValue.innerHTML = "Correct..";
        javascriptRegExpressDisplayAnswer.innerHTML = `
        <textarea name="text" class="answer_textarea" id="input">Good Job :) </textarea>`;
        javascriptRegExpressNextButton.innerHTML = `<button class="nextButton javascriptColor1" onclick=javascriptRegExpressBtn()>Next</button>`;
        javascriptRegExpressRemoveValue.innerHTML = "";

    } else if (javascriptRegExpressRandomValue == 8 && javascriptRegExpressInputAnswer !== javascriptRegExpressAnswerArr[8].A8) {
        javascriptRegExpressDisplayAnswer.innerHTML = `
    <textarea name="text" class="answer_textarea" id="input">
let quoteSample = "The quick brown fox jumps over the lazy dog.";
let alphabetRegex = /[a-z]/ig; 
let result = quoteSample.match(alphabetRegex); 
        </textarea>`;
        javascriptRegExpressIncorrectValue.innerHTML = "Incorrect..";
        javascriptRegExpressNextButton.innerHTML = `<button class="nextButton javascriptColor1" onclick=javascriptRegExpressBtn()>Next</button>`;
        javascriptRegExpressRemoveValue.innerHTML = "";



    } else if (javascriptRegExpressRandomValue == 9 && javascriptRegExpressInputAnswer == javascriptRegExpressAnswerArr[9].A9) {
        javascriptRegExpressCorrectValue.innerHTML = "Correct..";
        javascriptRegExpressDisplayAnswer.innerHTML = `
        <textarea name="text" class="answer_textarea" id="input">Good Job :) </textarea>`;
        javascriptRegExpressNextButton.innerHTML = `<button class="nextButton javascriptColor1" onclick=javascriptRegExpressBtn()>Next</button>`;
        javascriptRegExpressRemoveValue.innerHTML = "";

    } else if (javascriptRegExpressRandomValue == 9 && javascriptRegExpressInputAnswer !== javascriptRegExpressAnswerArr[9].A9) {
        javascriptRegExpressDisplayAnswer.innerHTML = `
    <textarea name="text" class="answer_textarea" id="input">
let quoteSample = "Blueberry 3.141592653s are delicious.";
let myRegex = /[h-s2-6]/ig; 
let result = quoteSample.match(myRegex); 
        </textarea>`;
        javascriptRegExpressIncorrectValue.innerHTML = "Incorrect..";
        javascriptRegExpressNextButton.innerHTML = `<button class="nextButton javascriptColor1" onclick=javascriptRegExpressBtn()>Next</button>`;
        javascriptRegExpressRemoveValue.innerHTML = "";



    } else if (javascriptRegExpressRandomValue == 10 && javascriptRegExpressInputAnswer == javascriptRegExpressAnswerArr[10].A10) {
        javascriptRegExpressCorrectValue.innerHTML = "Correct..";
        javascriptRegExpressDisplayAnswer.innerHTML = `
        <textarea name="text" class="answer_textarea" id="input">Good Job :) </textarea>`;
        javascriptRegExpressNextButton.innerHTML = `<button class="nextButton javascriptColor1" onclick=javascriptRegExpressBtn()>Next</button>`;
        javascriptRegExpressRemoveValue.innerHTML = "";

    } else if (javascriptRegExpressRandomValue == 10 && javascriptRegExpressInputAnswer !== javascriptRegExpressAnswerArr[10].A10) {
        javascriptRegExpressDisplayAnswer.innerHTML = `
    <textarea name="text" class="answer_textarea" id="input">
let quoteSample = "3 blind mice.";
let myRegex = /[^aeiou^0-99]/ig; 
let result = quoteSample.match(myRegex);
        </textarea>`;
        javascriptRegExpressIncorrectValue.innerHTML = "Incorrect..";
        javascriptRegExpressNextButton.innerHTML = `<button class="nextButton javascriptColor1" onclick=javascriptRegExpressBtn()>Next</button>`;
        javascriptRegExpressRemoveValue.innerHTML = "";



    } else if (javascriptRegExpressRandomValue == 11 && javascriptRegExpressInputAnswer == javascriptRegExpressAnswerArr[11].A11) {
        javascriptRegExpressCorrectValue.innerHTML = "Correct..";
        javascriptRegExpressDisplayAnswer.innerHTML = `
        <textarea name="text" class="answer_textarea" id="input">Good Job :) </textarea>`;
        javascriptRegExpressNextButton.innerHTML = `<button class="nextButton javascriptColor1" onclick=javascriptRegExpressBtn()>Next</button>`;
        javascriptRegExpressRemoveValue.innerHTML = "";

    } else if (javascriptRegExpressRandomValue == 11 && javascriptRegExpressInputAnswer !== javascriptRegExpressAnswerArr[11].A11) {
        javascriptRegExpressDisplayAnswer.innerHTML = `
    <textarea name="text" class="answer_textarea" id="input">
let difficultSpelling = "Mississippi";
let myRegex = /s+/g;
let result = difficultSpelling.match(myRegex);
        </textarea>`;
        javascriptRegExpressIncorrectValue.innerHTML = "Incorrect..";
        javascriptRegExpressNextButton.innerHTML = `<button class="nextButton javascriptColor1" onclick=javascriptRegExpressBtn()>Next</button>`;
        javascriptRegExpressRemoveValue.innerHTML = "";



    } else if (javascriptRegExpressRandomValue == 12 && javascriptRegExpressInputAnswer == javascriptRegExpressAnswerArr[12].A12) {
        javascriptRegExpressCorrectValue.innerHTML = "Correct..";
        javascriptRegExpressDisplayAnswer.innerHTML = `
        <textarea name="text" class="answer_textarea" id="input">Good Job :) </textarea>`;
        javascriptRegExpressNextButton.innerHTML = `<button class="nextButton javascriptColor1" onclick=javascriptRegExpressBtn()>Next</button>`;
        javascriptRegExpressRemoveValue.innerHTML = "";

    } else if (javascriptRegExpressRandomValue == 12 && javascriptRegExpressInputAnswer !== javascriptRegExpressAnswerArr[12].A12) {
        javascriptRegExpressDisplayAnswer.innerHTML = `
    <textarea name="text" class="answer_textarea" id="input">
let chewieQuote = "Aaaaaaaaaaaaaaaarrrgh!";
let chewieRegex = /A[a]*/; 
let result = chewieQuote.match(chewieRegex);
        </textarea>`;
        javascriptRegExpressIncorrectValue.innerHTML = "Incorrect..";
        javascriptRegExpressNextButton.innerHTML = `<button class="nextButton javascriptColor1" onclick=javascriptRegExpressBtn()>Next</button>`;
        javascriptRegExpressRemoveValue.innerHTML = "";



    } else if (javascriptRegExpressRandomValue == 13 && javascriptRegExpressInputAnswer == javascriptRegExpressAnswerArr[13].A13) {
        javascriptRegExpressCorrectValue.innerHTML = "Correct..";
        javascriptRegExpressDisplayAnswer.innerHTML = `
        <textarea name="text" class="answer_textarea" id="input">Good Job :) </textarea>`;
        javascriptRegExpressNextButton.innerHTML = `<button class="nextButton javascriptColor1" onclick=javascriptRegExpressBtn()>Next</button>`;
        javascriptRegExpressRemoveValue.innerHTML = "";

    } else if (javascriptRegExpressRandomValue == 13 && javascriptRegExpressInputAnswer !== javascriptRegExpressAnswerArr[13].A13) {
        javascriptRegExpressDisplayAnswer.innerHTML = `
    <textarea name="text" class="answer_textarea" id="input">
let text = "<h1>Winter is coming</h1>";
let myRegex = /<h1>?/; 
let result = text.match(myRegex);
        </textarea>`;
        javascriptRegExpressIncorrectValue.innerHTML = "Incorrect..";
        javascriptRegExpressNextButton.innerHTML = `<button class="nextButton javascriptColor1" onclick=javascriptRegExpressBtn()>Next</button>`;
        javascriptRegExpressRemoveValue.innerHTML = "";



    } else if (javascriptRegExpressRandomValue == 14 && javascriptRegExpressInputAnswer == javascriptRegExpressAnswerArr[14].A14) {
        javascriptRegExpressCorrectValue.innerHTML = "Correct..";
        javascriptRegExpressDisplayAnswer.innerHTML = `
        <textarea name="text" class="answer_textarea" id="input">Good Job :) </textarea>`;
        javascriptRegExpressNextButton.innerHTML = `<button class="nextButton javascriptColor1" onclick=javascriptRegExpressBtn()>Next</button>`;
        javascriptRegExpressRemoveValue.innerHTML = "";

    } else if (javascriptRegExpressRandomValue == 14 && javascriptRegExpressInputAnswer !== javascriptRegExpressAnswerArr[14].A14) {
        javascriptRegExpressDisplayAnswer.innerHTML = `
    <textarea name="text" class="answer_textarea" id="input">
let crowd = 'P1P2P3P4P5P6CCCP7P8P9';

let reCriminals = /C+/; 

let matchedCriminals = crowd.match(reCriminals);
console.log(matchedCriminals);
        </textarea>`;
        javascriptRegExpressIncorrectValue.innerHTML = "Incorrect..";
        javascriptRegExpressNextButton.innerHTML = `<button class="nextButton javascriptColor1" onclick=javascriptRegExpressBtn()>Next</button>`;
        javascriptRegExpressRemoveValue.innerHTML = "";



    } else if (javascriptRegExpressRandomValue == 15 && javascriptRegExpressInputAnswer == javascriptRegExpressAnswerArr[15].A15) {
        javascriptRegExpressCorrectValue.innerHTML = "Correct..";
        javascriptRegExpressDisplayAnswer.innerHTML = `
        <textarea name="text" class="answer_textarea" id="input">Good Job :) </textarea>`;
        javascriptRegExpressNextButton.innerHTML = `<button class="nextButton javascriptColor1" onclick=javascriptRegExpressBtn()>Next</button>`;
        javascriptRegExpressRemoveValue.innerHTML = "";

    } else if (javascriptRegExpressRandomValue == 15 && javascriptRegExpressInputAnswer !== javascriptRegExpressAnswerArr[15].A15) {
        javascriptRegExpressDisplayAnswer.innerHTML = `
    <textarea name="text" class="answer_textarea" id="input">
let rickyAndCal = "Cal and Ricky both like racing.";
let calRegex = /^Cal/; 
let result = calRegex.test(rickyAndCal); 
        </textarea>`;
        javascriptRegExpressIncorrectValue.innerHTML = "Incorrect..";
        javascriptRegExpressNextButton.innerHTML = `<button class="nextButton javascriptColor1" onclick=javascriptRegExpressBtn()>Next</button>`;
        javascriptRegExpressRemoveValue.innerHTML = "";



    } else if (javascriptRegExpressRandomValue == 16 && javascriptRegExpressInputAnswer == javascriptRegExpressAnswerArr[16].A16) {
        javascriptRegExpressCorrectValue.innerHTML = "Correct..";
        javascriptRegExpressDisplayAnswer.innerHTML = `
        <textarea name="text" class="answer_textarea" id="input">Good Job :) </textarea>`;
        javascriptRegExpressNextButton.innerHTML = `<button class="nextButton javascriptColor1" onclick=javascriptRegExpressBtn()>Next</button>`;
        javascriptRegExpressRemoveValue.innerHTML = "";

    } else if (javascriptRegExpressRandomValue == 16 && javascriptRegExpressInputAnswer !== javascriptRegExpressAnswerArr[16].A16) {
        javascriptRegExpressDisplayAnswer.innerHTML = `
    <textarea name="text" class="answer_textarea" id="input">
let caboose = "The last car on a train is the caboose";
let lastRegex = /caboose$/;
let result = lastRegex.test(caboose);
        </textarea>`;
        javascriptRegExpressIncorrectValue.innerHTML = "Incorrect..";
        javascriptRegExpressNextButton.innerHTML = `<button class="nextButton javascriptColor1" onclick=javascriptRegExpressBtn()>Next</button>`;
        javascriptRegExpressRemoveValue.innerHTML = "";



    } else if (javascriptRegExpressRandomValue == 17 && javascriptRegExpressInputAnswer == javascriptRegExpressAnswerArr[17].A17) {
        javascriptRegExpressCorrectValue.innerHTML = "Correct..";
        javascriptRegExpressDisplayAnswer.innerHTML = `
        <textarea name="text" class="answer_textarea" id="input">Good Job :) </textarea>`;
        javascriptRegExpressNextButton.innerHTML = `<button class="nextButton javascriptColor1" onclick=javascriptRegExpressBtn()>Next</button>`;
        javascriptRegExpressRemoveValue.innerHTML = "";

    } else if (javascriptRegExpressRandomValue == 17 && javascriptRegExpressInputAnswer !== javascriptRegExpressAnswerArr[17].A17) {
        javascriptRegExpressDisplayAnswer.innerHTML = `
    <textarea name="text" class="answer_textarea" id="input">
let quoteSample = "The five boxing wizards jump quickly."; 
let alphabetRegexV2 = /\w/g;
let result = quoteSample.match(alphabetRegexV2).length;
        </textarea>`;
        javascriptRegExpressIncorrectValue.innerHTML = "Incorrect..";
        javascriptRegExpressNextButton.innerHTML = `<button class="nextButton javascriptColor1" onclick=javascriptRegExpressBtn()>Next</button>`;
        javascriptRegExpressRemoveValue.innerHTML = "";



    } else if (javascriptRegExpressRandomValue == 18 && javascriptRegExpressInputAnswer == javascriptRegExpressAnswerArr[18].A18) {
        javascriptRegExpressCorrectValue.innerHTML = "Correct..";
        javascriptRegExpressDisplayAnswer.innerHTML = `
        <textarea name="text" class="answer_textarea" id="input">Good Job :) </textarea>`;
        javascriptRegExpressNextButton.innerHTML = `<button class="nextButton javascriptColor1" onclick=javascriptRegExpressBtn()>Next</button>`;
        javascriptRegExpressRemoveValue.innerHTML = "";

    } else if (javascriptRegExpressRandomValue == 18 && javascriptRegExpressInputAnswer !== javascriptRegExpressAnswerArr[18].A18) {
        javascriptRegExpressDisplayAnswer.innerHTML = `
    <textarea name="text" class="answer_textarea" id="input">
let quoteSample = "The five boxing wizards jump quickly.";
let nonAlphabetRegex = /\W/g;
let result = quoteSample.match(nonAlphabetRegex).length;
        </textarea>`;
        javascriptRegExpressIncorrectValue.innerHTML = "Incorrect..";
        javascriptRegExpressNextButton.innerHTML = `<button class="nextButton javascriptColor1" onclick=javascriptRegExpressBtn()>Next</button>`;
        javascriptRegExpressRemoveValue.innerHTML = "";



    } else if (javascriptRegExpressRandomValue == 19 && javascriptRegExpressInputAnswer == javascriptRegExpressAnswerArr[19].A19) {
        javascriptRegExpressCorrectValue.innerHTML = "Correct..";
        javascriptRegExpressDisplayAnswer.innerHTML = `
        <textarea name="text" class="answer_textarea" id="input">Good Job :) </textarea>`;
        javascriptRegExpressNextButton.innerHTML = `<button class="nextButton javascriptColor1" onclick=javascriptRegExpressBtn()>Next</button>`;
        javascriptRegExpressRemoveValue.innerHTML = "";

    } else if (javascriptRegExpressRandomValue == 19 && javascriptRegExpressInputAnswer !== javascriptRegExpressAnswerArr[19].A19) {
        javascriptRegExpressDisplayAnswer.innerHTML = `
    <textarea name="text" class="answer_textarea" id="input">
let numString = "Your sandwich will be $5.00";
let numRegex = /\d/g; 
let result = numString.match(numRegex).length;
          </textarea>`;
        javascriptRegExpressIncorrectValue.innerHTML = "Incorrect..";
        javascriptRegExpressNextButton.innerHTML = `<button class="nextButton javascriptColor1" onclick=javascriptRegExpressBtn()>Next</button>`;
        javascriptRegExpressRemoveValue.innerHTML = "";



    } else if (javascriptRegExpressRandomValue == 20 && javascriptRegExpressInputAnswer == javascriptRegExpressAnswerArr[20].A20) {
        javascriptRegExpressCorrectValue.innerHTML = "Correct..";
        javascriptRegExpressDisplayAnswer.innerHTML = `
        <textarea name="text" class="answer_textarea" id="input">Good Job :) </textarea>`;
        javascriptRegExpressNextButton.innerHTML = `<button class="nextButton javascriptColor1" onclick=javascriptRegExpressBtn()>Next</button>`;
        javascriptRegExpressRemoveValue.innerHTML = "";

    } else if (javascriptRegExpressRandomValue == 20 && javascriptRegExpressInputAnswer !== javascriptRegExpressAnswerArr[20].A20) {
        javascriptRegExpressDisplayAnswer.innerHTML = `
    <textarea name="text" class="answer_textarea" id="input">
let numString = "Your sandwich will be $5.00";
let noNumRegex = /\D/g;
let result = numString.match(noNumRegex).length;
        </textarea>`;
        javascriptRegExpressIncorrectValue.innerHTML = "Incorrect..";
        javascriptRegExpressNextButton.innerHTML = `<button class="nextButton javascriptColor1" onclick=javascriptRegExpressBtn()>Next</button>`;
        javascriptRegExpressRemoveValue.innerHTML = "";



    } else if (javascriptRegExpressRandomValue == 21 && javascriptRegExpressInputAnswer == javascriptRegExpressAnswerArr[21].A21) {
        javascriptRegExpressCorrectValue.innerHTML = "Correct..";
        javascriptRegExpressDisplayAnswer.innerHTML = `
        <textarea name="text" class="answer_textarea" id="input">Good Job :) </textarea>`;
        javascriptRegExpressNextButton.innerHTML = `<button class="nextButton javascriptColor1" onclick=javascriptRegExpressBtn()>Next</button>`;
        javascriptRegExpressRemoveValue.innerHTML = "";

    } else if (javascriptRegExpressRandomValue == 21 && javascriptRegExpressInputAnswer !== javascriptRegExpressAnswerArr[21].A21) {
        javascriptRegExpressDisplayAnswer.innerHTML = `
    <textarea name="text" class="answer_textarea" id="input">
let username = "JackOfAllTrades";
let userCheck = /^[a-z]{2,}\d*$/i;
let result = userCheck.test(username);
        </textarea>`;
        javascriptRegExpressIncorrectValue.innerHTML = "Incorrect..";
        javascriptRegExpressNextButton.innerHTML = `<button class="nextButton javascriptColor1" onclick=javascriptRegExpressBtn()>Next</button>`;
        javascriptRegExpressRemoveValue.innerHTML = "";



    } else if (javascriptRegExpressRandomValue == 22 && javascriptRegExpressInputAnswer == javascriptRegExpressAnswerArr[22].A22) {
        javascriptRegExpressCorrectValue.innerHTML = "Correct..";
        javascriptRegExpressDisplayAnswer.innerHTML = `
        <textarea name="text" class="answer_textarea" id="input">Good Job :) </textarea>`;
        javascriptRegExpressNextButton.innerHTML = `<button class="nextButton javascriptColor1" onclick=javascriptRegExpressBtn()>Next</button>`;
        javascriptRegExpressRemoveValue.innerHTML = "";

    } else if (javascriptRegExpressRandomValue == 22 && javascriptRegExpressInputAnswer !== javascriptRegExpressAnswerArr[22].A22) {
        javascriptRegExpressDisplayAnswer.innerHTML = `
    <textarea name="text" class="answer_textarea" id="input">
let sample = "Whitespace is important in separating words";
let countWhiteSpace = /\s/g;
let result = sample.match(countWhiteSpace);
        </textarea>`;
        javascriptRegExpressIncorrectValue.innerHTML = "Incorrect..";
        javascriptRegExpressNextButton.innerHTML = `<button class="nextButton javascriptColor1" onclick=javascriptRegExpressBtn()>Next</button>`;
        javascriptRegExpressRemoveValue.innerHTML = "";



    } else if (javascriptRegExpressRandomValue == 23 && javascriptRegExpressInputAnswer == javascriptRegExpressAnswerArr[23].A23) {
        javascriptRegExpressCorrectValue.innerHTML = "Correct..";
        javascriptRegExpressDisplayAnswer.innerHTML = `
        <textarea name="text" class="answer_textarea" id="input">Good Job :) </textarea>`;
        javascriptRegExpressNextButton.innerHTML = `<button class="nextButton javascriptColor1" onclick=javascriptRegExpressBtn()>Next</button>`;
        javascriptRegExpressRemoveValue.innerHTML = "";

    } else if (javascriptRegExpressRandomValue == 23 && javascriptRegExpressInputAnswer !== javascriptRegExpressAnswerArr[23].A23) {
        javascriptRegExpressDisplayAnswer.innerHTML = `

    <textarea name="text" class="answer_textarea" id="input">
let sample = "Whitespace is important in separating words";
let countNonWhiteSpace = /\S/g;
let result = sample.match(countNonWhiteSpace);
        </textarea>`;
        javascriptRegExpressIncorrectValue.innerHTML = "Incorrect..";
        javascriptRegExpressNextButton.innerHTML = `<button class="nextButton javascriptColor1" onclick=javascriptRegExpressBtn()>Next</button>`;
        javascriptRegExpressRemoveValue.innerHTML = "";



    } else if (javascriptRegExpressRandomValue == 24 && javascriptRegExpressInputAnswer == javascriptRegExpressAnswerArr[24].A24) {
        javascriptRegExpressCorrectValue.innerHTML = "Correct..";
        javascriptRegExpressDisplayAnswer.innerHTML = `
        <textarea name="text" class="answer_textarea" id="input">Good Job :) </textarea>`;
        javascriptRegExpressNextButton.innerHTML = `<button class="nextButton javascriptColor1" onclick=javascriptRegExpressBtn()>Next</button>`;
        javascriptRegExpressRemoveValue.innerHTML = "";

    } else if (javascriptRegExpressRandomValue == 24 && javascriptRegExpressInputAnswer !== javascriptRegExpressAnswerArr[24].A24) {
        javascriptRegExpressDisplayAnswer.innerHTML = `
    <textarea name="text" class="answer_textarea" id="input">
let ohStr = "Ohhh no";
let ohRegex = /Oh{3,6}\sno/;
let result = ohRegex.test(ohStr);
        </textarea>`;
        javascriptRegExpressIncorrectValue.innerHTML = "Incorrect..";
        javascriptRegExpressNextButton.innerHTML = `<button class="nextButton javascriptColor1" onclick=javascriptRegExpressBtn()>Next</button>`;
        javascriptRegExpressRemoveValue.innerHTML = "";



    } else if (javascriptRegExpressRandomValue == 25 && javascriptRegExpressInputAnswer == javascriptRegExpressAnswerArr[25].A25) {
        javascriptRegExpressCorrectValue.innerHTML = "Correct..";
        javascriptRegExpressDisplayAnswer.innerHTML = `
        <textarea name="text" class="answer_textarea" id="input">Good Job :) </textarea>`;
        javascriptRegExpressNextButton.innerHTML = `<button class="nextButton javascriptColor1" onclick=javascriptRegExpressBtn()>Next</button>`;
        javascriptRegExpressRemoveValue.innerHTML = "";

    } else if (javascriptRegExpressRandomValue == 25 && javascriptRegExpressInputAnswer !== javascriptRegExpressAnswerArr[25].A25) {
        javascriptRegExpressDisplayAnswer.innerHTML = `
    <textarea name="text" class="answer_textarea" id="input">
let haStr = "Hazzzzah";
let haRegex = /Haz{4,30}ah/;
let result = haRegex.test(haStr);
        </textarea>`;
        javascriptRegExpressIncorrectValue.innerHTML = "Incorrect..";
        javascriptRegExpressNextButton.innerHTML = `<button class="nextButton javascriptColor1" onclick=javascriptRegExpressBtn()>Next</button>`;
        javascriptRegExpressRemoveValue.innerHTML = "";



    } else if (javascriptRegExpressRandomValue == 26 && javascriptRegExpressInputAnswer == javascriptRegExpressAnswerArr[26].A26) {
        javascriptRegExpressCorrectValue.innerHTML = "Correct..";
        javascriptRegExpressDisplayAnswer.innerHTML = `
        <textarea name="text" class="answer_textarea" id="input">Good Job :) </textarea>`;
        javascriptRegExpressNextButton.innerHTML = `<button class="nextButton javascriptColor1" onclick=javascriptRegExpressBtn()>Next</button>`;
        javascriptRegExpressRemoveValue.innerHTML = "";

    } else if (javascriptRegExpressRandomValue == 26 && javascriptRegExpressInputAnswer !== javascriptRegExpressAnswerArr[26].A26) {
        javascriptRegExpressDisplayAnswer.innerHTML = `
    <textarea name="text" class="answer_textarea" id="input">
let timStr = "Timmmmber";
let timRegex = /Tim{4}ber/;
let result = timRegex.test(timStr); 
        </textarea>`;
        javascriptRegExpressIncorrectValue.innerHTML = "Incorrect..";
        javascriptRegExpressNextButton.innerHTML = `<button class="nextButton javascriptColor1" onclick=javascriptRegExpressBtn()>Next</button>`;
        javascriptRegExpressRemoveValue.innerHTML = "";



    } else if (javascriptRegExpressRandomValue == 27 && javascriptRegExpressInputAnswer == javascriptRegExpressAnswerArr[27].A27) {
        javascriptRegExpressCorrectValue.innerHTML = "Correct..";
        javascriptRegExpressDisplayAnswer.innerHTML = `
        <textarea name="text" class="answer_textarea" id="input">Good Job :) </textarea>`;
        javascriptRegExpressNextButton.innerHTML = `<button class="nextButton javascriptColor1" onclick=javascriptRegExpressBtn()>Next</button>`;
        javascriptRegExpressRemoveValue.innerHTML = "";

    } else if (javascriptRegExpressRandomValue == 27 && javascriptRegExpressInputAnswer !== javascriptRegExpressAnswerArr[27].A27) {
        javascriptRegExpressDisplayAnswer.innerHTML = `
    <textarea name="text" class="answer_textarea" id="input">
let favWord_US = "favorite";
let favWord_GB = "favourite";
let favRegex = /favou?rite/;
let result1 = favRegex.test(favWord_US);
let result2 = favRegex.test(favWord_GB);
        </textarea>`;
        javascriptRegExpressIncorrectValue.innerHTML = "Incorrect..";
        javascriptRegExpressNextButton.innerHTML = `<button class="nextButton javascriptColor1" onclick=javascriptRegExpressBtn()>Next</button>`;
        javascriptRegExpressRemoveValue.innerHTML = "";



    } else if (javascriptRegExpressRandomValue == 28 && javascriptRegExpressInputAnswer == javascriptRegExpressAnswerArr[28].A28) {
        javascriptRegExpressCorrectValue.innerHTML = "Correct..";
        javascriptRegExpressDisplayAnswer.innerHTML = `
        <textarea name="text" class="answer_textarea" id="input">Good Job :) </textarea>`;
        javascriptRegExpressNextButton.innerHTML = `<button class="nextButton javascriptColor1" onclick=javascriptRegExpressBtn()>Next</button>`;
        javascriptRegExpressRemoveValue.innerHTML = "";

    } else if (javascriptRegExpressRandomValue == 28 && javascriptRegExpressInputAnswer !== javascriptRegExpressAnswerArr[28].A28) {
        javascriptRegExpressDisplayAnswer.innerHTML = `
    <textarea name="text" class="answer_textarea" id="input">
let sampleWord = "astronaut";
let pwRegex = /(?=\w{5,})(?=\D*\d{2})/;
let result = pwRegex.test(sampleWord);
        </textarea>`;
        javascriptRegExpressIncorrectValue.innerHTML = "Incorrect..";
        javascriptRegExpressNextButton.innerHTML = `<button class="nextButton javascriptColor1" onclick=javascriptRegExpressBtn()>Next</button>`;
        javascriptRegExpressRemoveValue.innerHTML = "";



    } else if (javascriptRegExpressRandomValue == 29 && javascriptRegExpressInputAnswer == javascriptRegExpressAnswerArr[29].A29) {
        javascriptRegExpressCorrectValue.innerHTML = "Correct..";
        javascriptRegExpressDisplayAnswer.innerHTML = `
        <textarea name="text" class="answer_textarea" id="input">Good Job :) </textarea>`;
        javascriptRegExpressNextButton.innerHTML = `<button class="nextButton javascriptColor1" onclick=javascriptRegExpressBtn()>Next</button>`;
        javascriptRegExpressRemoveValue.innerHTML = "";

    } else if (javascriptRegExpressRandomValue == 29 && javascriptRegExpressInputAnswer !== javascriptRegExpressAnswerArr[29].A29) {
        javascriptRegExpressDisplayAnswer.innerHTML = `
    <textarea name="text" class="answer_textarea" id="input">
let repeatNum = "42 42 42";
let reRegex =  /^(\ d+)\ s\ 1\ s\ 1$/;
let result = reRegex.test(repeatNum);
        </textarea>`;
        javascriptRegExpressIncorrectValue.innerHTML = "Incorrect..";
        javascriptRegExpressNextButton.innerHTML = `<button class="nextButton javascriptColor1" onclick=javascriptRegExpressBtn()>Next</button>`;
        javascriptRegExpressRemoveValue.innerHTML = "";



    } else if (javascriptRegExpressRandomValue == 30 && javascriptRegExpressInputAnswer == javascriptRegExpressAnswerArr[30].A30) {
        javascriptRegExpressCorrectValue.innerHTML = "Correct..";
        javascriptRegExpressDisplayAnswer.innerHTML = `
        <textarea name="text" class="answer_textarea" id="input">Good Job :) </textarea>`;
        javascriptRegExpressNextButton.innerHTML = `<button class="nextButton javascriptColor1" onclick=javascriptRegExpressBtn()>Next</button>`;
        javascriptRegExpressRemoveValue.innerHTML = "";

    } else if (javascriptRegExpressRandomValue == 30 && javascriptRegExpressInputAnswer !== javascriptRegExpressAnswerArr[30].A30) {
        javascriptRegExpressDisplayAnswer.innerHTML = `
    <textarea name="text" class="answer_textarea" id="input">
let huhText = "This sandwich is good.";
let fixRegex = /good/; 
let replaceText = "okey-dokey"; 
let result = huhText.replace(fixRegex, replaceText);
        </textarea>`;
        javascriptRegExpressIncorrectValue.innerHTML = "Incorrect..";
        javascriptRegExpressNextButton.innerHTML = `<button class="nextButton javascriptColor1" onclick=javascriptRegExpressBtn()>Next</button>`;
        javascriptRegExpressRemoveValue.innerHTML = "";



    } else if (javascriptRegExpressRandomValue == 31 && javascriptRegExpressInputAnswer == javascriptRegExpressAnswerArr[31].A31) {
        javascriptRegExpressCorrectValue.innerHTML = "Correct..";
        javascriptRegExpressDisplayAnswer.innerHTML = `
        <textarea name="text" class="answer_textarea" id="input">Good Job :) </textarea>`;
        javascriptRegExpressNextButton.innerHTML = `<button class="nextButton javascriptColor1" onclick=javascriptRegExpressBtn()>Next</button>`;
        javascriptRegExpressRemoveValue.innerHTML = "";

    } else if (javascriptRegExpressRandomValue == 31 && javascriptRegExpressInputAnswer !== javascriptRegExpressAnswerArr[31].A31) {
        javascriptRegExpressDisplayAnswer.innerHTML = `
    <textarea name="text" class="answer_textarea" id="input">
let hello = "   Hello, World!  ";
let wsRegex = /^\s+|\s+$/g; 
let result = hello.replace(wsRegex, '');
        </textarea>`;
        javascriptRegExpressIncorrectValue.innerHTML = "Incorrect..";
        javascriptRegExpressNextButton.innerHTML = `<button class="nextButton javascriptColor1" onclick=javascriptRegExpressBtn()>Next</button>`;
        javascriptRegExpressRemoveValue.innerHTML = "";



    } else {
        javascriptRegExpressIncorrectValue.innerHTML = "Incorrect..";
        javascriptRegExpressNextButton.innerHTML = `<button class="nextButton javascriptColor1" onclick=javascriptRegExpressBtn()>Next</button>`;
        javascriptRegExpressRemoveValue.innerHTML = "";
    }

}
window.javascriptRegExpressSubmit = javascriptRegExpressSubmit; /* to make submit global*/

function javascriptRegExpressButton() {
    javascriptRegExpressTest = document.getElementById("javascriptRegExpressAddedQuestion").innerHTML = javascriptRegExpressQuestionArr[javascriptRegExpressRandomValue]; /* giving random question to html */

    return javascriptRegExpressTest;
}
window.javascriptRegExpressButton = javascriptRegExpressButton;

function javascriptRegExpressShowTest() {
    var javascriptRegExpressInputBox = document.getElementById("javascriptRegExpressRemove").style.display = "block";
    return javascriptRegExpressInputBox;
}
window.javascriptRegExpressShowTest = javascriptRegExpressShowTest;

function javascriptRegExpressBtn() {
    javascriptRegExpressRandomValue = Math.floor(Math.random() * javascriptRegExpressQuestionArr.length); /* buton next in html to make a next random question*/
    document.getElementById("javascriptRegExpressAddedQuestion").innerHTML = javascriptRegExpressQuestionArr[javascriptRegExpressRandomValue]; /* giving random question to html */
    document.getElementById("javascriptRegExpressElementButton").innerHTML = "";/* to clean javascriptRegExpressElementButton*/
    document.getElementById("javascriptRegExpressRemove").innerHTML = `<textarea name="text" class="answer_textarea" id="input"></textarea></br>
      <button class="answer_submit javascriptColor1" id = "javascriptRegExpressStartButton" onclick="javascriptRegExpressSubmit()">Submit</button>`;/* to create next text area and Submit button. */
    document.getElementById("javascriptRegExpressCheckingAnswer").innerHTML = "";
    document.getElementById("javascriptRegExpressShowingAnswer").innerHTML = "";
}
window.javascriptRegExpressBtn = javascriptRegExpressBtn;/* to make submit global*/











































































var javascriptBasicDataStructureRandomValue = Math.floor(Math.random() * javascriptBasicDataStructureQuestionArr.length); /* taking random question from htmlQuestionArr*/


function javascriptBasicDataStructureSubmit() { /* function for html submit button*/

    var javascriptBasicDataStructureInputAnswer = input.value.replace(/\s+/g, ``); /*replace(/\s+/g, `` is removing all spaces. Avoid checking all the spaces to compare text*/
    var javascriptBasicDataStructureCorrectValue = document.getElementById("javascriptBasicDataStructureCheckingAnswer"); /* making getElementById code shorter*/
    var javascriptBasicDataStructureIncorrectValue = document.getElementById("javascriptBasicDataStructureCheckingAnswer");
    var javascriptBasicDataStructureDisplayAnswer = document.getElementById("javascriptBasicDataStructureShowingAnswer");
    var javascriptBasicDataStructureNextButton = document.getElementById("javascriptBasicDataStructureElementButton");
    var javascriptBasicDataStructureRemoveValue = document.getElementById("javascriptBasicDataStructureRemove");

    if (javascriptBasicDataStructureRandomValue == 0 && javascriptBasicDataStructureInputAnswer == javascriptBasicDataStructureAnswerArr[0].A0) { /* checking if javascriptBasicDataStructureRandomValue is 0 and if putting answer the same as javascriptBasicDataStructureAnswerArr*//*A0 is just that I can track answer numbers when adding questions and answers*/
        javascriptBasicDataStructureCorrectValue.innerHTML = "Correct..";
        javascriptBasicDataStructureDisplayAnswer.innerHTML = `
        <textarea name="text" class="answer_textarea" id="input">Good Job :) </textarea>`;
        javascriptBasicDataStructureNextButton.innerHTML = `<button class="nextButton javascriptColor1" onclick=javascriptBasicDataStructureBtn()>Next</button>`; /* creating next button with javascriptBasicDataStructureBtn()function*/
        javascriptBasicDataStructureRemoveValue.innerHTML = "";/* removing in html answer*/



    } else if (javascriptBasicDataStructureRandomValue == 0 && javascriptBasicDataStructureInputAnswer !== javascriptBasicDataStructureAnswerArr[0].A0) {/*  if random value not == then giving then display the answere.*/
        javascriptBasicDataStructureDisplayAnswer.innerHTML = `
    <textarea name="text" class="answer_textarea" id="input">
let yourArray = ["a", 2, true, "c", null, {name: "john"}];
        </textarea>`;
        javascriptBasicDataStructureIncorrectValue.innerHTML = "Incorrect..";
        javascriptBasicDataStructureNextButton.innerHTML = `<button class="nextButton javascriptColor1" onclick=javascriptBasicDataStructureBtn()>Next</button>`;
        javascriptBasicDataStructureRemoveValue.innerHTML = "";



    } else if (javascriptBasicDataStructureRandomValue == 1 && javascriptBasicDataStructureInputAnswer == javascriptBasicDataStructureAnswerArr[1].A1) {
        javascriptBasicDataStructureCorrectValue.innerHTML = "Correct..";
        javascriptBasicDataStructureDisplayAnswer.innerHTML = `
        <textarea name="text" class="answer_textarea" id="input">Good Job :) </textarea>`;
        javascriptBasicDataStructureNextButton.innerHTML = `<button class="nextButton javascriptColor1" onclick=javascriptBasicDataStructureBtn()>Next</button>`;
        javascriptBasicDataStructureRemoveValue.innerHTML = "";

    } else if (javascriptBasicDataStructureRandomValue == 1 && javascriptBasicDataStructureInputAnswer !== javascriptBasicDataStructureAnswerArr[1].A1) {
        javascriptBasicDataStructureDisplayAnswer.innerHTML = `
        <textarea name="text" class="answer_textarea" id="input">
let myArray = ["a", "b", "c", "d"];
myArray[1] = "anything we want";
console.log(myArray);
          </textarea>`;
        javascriptBasicDataStructureIncorrectValue.innerHTML = "Incorrect..";
        javascriptBasicDataStructureNextButton.innerHTML = `<button class="nextButton javascriptColor1" onclick=javascriptBasicDataStructureBtn()>Next</button>`;
        javascriptBasicDataStructureRemoveValue.innerHTML = "";



    } else if (javascriptBasicDataStructureRandomValue == 2 && javascriptBasicDataStructureInputAnswer == javascriptBasicDataStructureAnswerArr[2].A2) {
        javascriptBasicDataStructureCorrectValue.innerHTML = "Correct..";
        javascriptBasicDataStructureDisplayAnswer.innerHTML = `
        <textarea name="text" class="answer_textarea" id="input">Good Job :) </textarea>`;
        javascriptBasicDataStructureNextButton.innerHTML = `<button class="nextButton javascriptColor1" onclick=javascriptBasicDataStructureBtn()>Next</button>`;
        javascriptBasicDataStructureRemoveValue.innerHTML = "";

    } else if (javascriptBasicDataStructureRandomValue == 2 && javascriptBasicDataStructureInputAnswer !== javascriptBasicDataStructureAnswerArr[2].A2) {
        javascriptBasicDataStructureDisplayAnswer.innerHTML = `
    <textarea name="text" class="answer_textarea" id="input">
function mixedNumbers(arr) {
    arr.unshift('I',2,'three');
    arr.push(7,'VIII', 9);
    return arr;
}
console.log(mixedNumbers(['IV', 5, 'six']));
          </textarea>`;
        javascriptBasicDataStructureIncorrectValue.innerHTML = "Incorrect..";
        javascriptBasicDataStructureNextButton.innerHTML = `<button class="nextButton javascriptColor1" onclick=javascriptBasicDataStructureBtn()>Next</button>`;
        javascriptBasicDataStructureRemoveValue.innerHTML = "";



    } else if (javascriptBasicDataStructureRandomValue == 3 && javascriptBasicDataStructureInputAnswer == javascriptBasicDataStructureAnswerArr[3].A3) {
        javascriptBasicDataStructureCorrectValue.innerHTML = "Correct..";
        javascriptBasicDataStructureDisplayAnswer.innerHTML = `
        <textarea name="text" class="answer_textarea" id="input">Good Job :) </textarea>`;
        javascriptBasicDataStructureNextButton.innerHTML = `<button class="nextButton javascriptColor1" onclick=javascriptBasicDataStructureBtn()>Next</button>`;
        javascriptBasicDataStructureRemoveValue.innerHTML = "";

    } else if (javascriptBasicDataStructureRandomValue == 3 && javascriptBasicDataStructureInputAnswer !== javascriptBasicDataStructureAnswerArr[3].A3) {
        javascriptBasicDataStructureDisplayAnswer.innerHTML = `
    <textarea name="text" class="answer_textarea" id="input">
function popShift(arr) {
    let popped = arr.pop();
    let shifted = arr.shift();
    return [shifted, popped];
}

console.log(popShift(['challenge', 'is', 'not', 'complete']));
        </textarea>`;
        javascriptBasicDataStructureIncorrectValue.innerHTML = "Incorrect..";
        javascriptBasicDataStructureNextButton.innerHTML = `<button class="nextButton javascriptColor1" onclick=javascriptBasicDataStructureBtn()>Next</button>`;
        javascriptBasicDataStructureRemoveValue.innerHTML = "";
        


    } else if (javascriptBasicDataStructureRandomValue == 4 && javascriptBasicDataStructureInputAnswer == javascriptBasicDataStructureAnswerArr[4].A4) {
        javascriptBasicDataStructureCorrectValue.innerHTML = "Correct..";
        javascriptBasicDataStructureDisplayAnswer.innerHTML = `
        <textarea name="text" class="answer_textarea" id="input">Good Job :) </textarea>`;
        javascriptBasicDataStructureNextButton.innerHTML = `<button class="nextButton javascriptColor1" onclick=javascriptBasicDataStructureBtn()>Next</button>`;
        javascriptBasicDataStructureRemoveValue.innerHTML = "";

    } else if (javascriptBasicDataStructureRandomValue == 4 && javascriptBasicDataStructureInputAnswer !== javascriptBasicDataStructureAnswerArr[4].A4) {
        javascriptBasicDataStructureDisplayAnswer.innerHTML = `
    <textarea name="text" class="answer_textarea" id="input">
function sumOfTen(arr) {
    arr.splice(1,2);
    return arr.reduce((a, b) => a + b);
}
console.log(sumOfTen([2, 5, 1, 5, 2, 1]));
        </textarea>`;
        javascriptBasicDataStructureIncorrectValue.innerHTML = "Incorrect..";
        javascriptBasicDataStructureNextButton.innerHTML = `<button class="nextButton javascriptColor1" onclick=javascriptBasicDataStructureBtn()>Next</button>`;
        javascriptBasicDataStructureRemoveValue.innerHTML = "";



    } else if (javascriptBasicDataStructureRandomValue == 5 && javascriptBasicDataStructureInputAnswer == javascriptBasicDataStructureAnswerArr[5].A5) {
        javascriptBasicDataStructureCorrectValue.innerHTML = "Correct..";
        javascriptBasicDataStructureDisplayAnswer.innerHTML = `
        <textarea name="text" class="answer_textarea" id="input">Good Job :) </textarea>`;
        javascriptBasicDataStructureNextButton.innerHTML = `<button class="nextButton javascriptColor1" onclick=javascriptBasicDataStructureBtn()>Next</button>`;
        javascriptBasicDataStructureRemoveValue.innerHTML = "";

    } else if (javascriptBasicDataStructureRandomValue == 5 && javascriptBasicDataStructureInputAnswer !== javascriptBasicDataStructureAnswerArr[5].A5) {
        javascriptBasicDataStructureDisplayAnswer.innerHTML = `
    <textarea name="text" class="answer_textarea" id="input">
function htmlColorNames(arr) {
    arr.splice(0, 2, "DarkSalmon", "BlanchedAlmond");
    return arr;
} 
console.log(htmlColorNames(['DarkGoldenRod', 'WhiteSmoke', 'LavenderBlush', 'PaleTurqoise', 'FireBrick']));
        </textarea>`;
        javascriptBasicDataStructureIncorrectValue.innerHTML = "Incorrect..";
        javascriptBasicDataStructureNextButton.innerHTML = `<button class="nextButton javascriptColor1" onclick=javascriptBasicDataStructureBtn()>Next</button>`;
        javascriptBasicDataStructureRemoveValue.innerHTML = "";



    } else if (javascriptBasicDataStructureRandomValue == 6 && javascriptBasicDataStructureInputAnswer == javascriptBasicDataStructureAnswerArr[6].A6) {
        javascriptBasicDataStructureCorrectValue.innerHTML = "Correct..";
        javascriptBasicDataStructureDisplayAnswer.innerHTML = `
        <textarea name="text" class="answer_textarea" id="input">Good Job :) </textarea>`;
        javascriptBasicDataStructureNextButton.innerHTML = `<button class="nextButton javascriptColor1" onclick=javascriptBasicDataStructureBtn()>Next</button>`;
        javascriptBasicDataStructureRemoveValue.innerHTML = "";

    } else if (javascriptBasicDataStructureRandomValue == 6 && javascriptBasicDataStructureInputAnswer !== javascriptBasicDataStructureAnswerArr[6].A6) {
        javascriptBasicDataStructureDisplayAnswer.innerHTML = `
    <textarea name="text" class="answer_textarea" id="input">
function forecast(arr) {
    return arr.slice(2,4);
}
console.log(forecast(['cold', 'rainy', 'warm', 'sunny', 'cool', 'thunderstorms']));
        </textarea>`;
        javascriptBasicDataStructureIncorrectValue.innerHTML = "Incorrect..";
        javascriptBasicDataStructureNextButton.innerHTML = `<button class="nextButton javascriptColor1" onclick=javascriptBasicDataStructureBtn()>Next</button>`;
        javascriptBasicDataStructureRemoveValue.innerHTML = "";



    } else if (javascriptBasicDataStructureRandomValue == 7 && javascriptBasicDataStructureInputAnswer == javascriptBasicDataStructureAnswerArr[7].A7) {
        javascriptBasicDataStructureCorrectValue.innerHTML = "Correct..";
        javascriptBasicDataStructureDisplayAnswer.innerHTML = `
        <textarea name="text" class="answer_textarea" id="input">Good Job :) </textarea>`;
        javascriptBasicDataStructureNextButton.innerHTML = `<button class="nextButton javascriptColor1" onclick=javascriptBasicDataStructureBtn()>Next</button>`;
        javascriptBasicDataStructureRemoveValue.innerHTML = "";

    } else if (javascriptBasicDataStructureRandomValue == 7 && javascriptBasicDataStructureInputAnswer !== javascriptBasicDataStructureAnswerArr[7].A7) {
        javascriptBasicDataStructureDisplayAnswer.innerHTML = `
    <textarea name="text" class="answer_textarea" id="input">
function copyMachine(arr, num) {
    let newArr = [];
    while (num >= 1) {
        newArr.push([...arr]);
        num--;
    }
    return newArr;
}
console.log(copyMachine([true, false, true], 2));

        </textarea>`;
        javascriptBasicDataStructureIncorrectValue.innerHTML = "Incorrect..";
        javascriptBasicDataStructureNextButton.innerHTML = `<button class="nextButton javascriptColor1" onclick=javascriptBasicDataStructureBtn()>Next</button>`;
        javascriptBasicDataStructureRemoveValue.innerHTML = "";



    } else if (javascriptBasicDataStructureRandomValue == 8 && javascriptBasicDataStructureInputAnswer == javascriptBasicDataStructureAnswerArr[8].A8) {
        javascriptBasicDataStructureCorrectValue.innerHTML = "Correct..";
        javascriptBasicDataStructureDisplayAnswer.innerHTML = `
        <textarea name="text" class="answer_textarea" id="input">Good Job :) </textarea>`;
        javascriptBasicDataStructureNextButton.innerHTML = `<button class="nextButton javascriptColor1" onclick=javascriptBasicDataStructureBtn()>Next</button>`;
        javascriptBasicDataStructureRemoveValue.innerHTML = "";

    } else if (javascriptBasicDataStructureRandomValue == 8 && javascriptBasicDataStructureInputAnswer !== javascriptBasicDataStructureAnswerArr[8].A8) {
        javascriptBasicDataStructureDisplayAnswer.innerHTML = `
    <textarea name="text" class="answer_textarea" id="input">
function spreadOut() {
    let fragment = ['to', 'code'];
    let sentence = ["learning", ...fragment, "is", "fun"]; 
    return sentence;
}
console.log(spreadOut());
        </textarea>`;
        javascriptBasicDataStructureIncorrectValue.innerHTML = "Incorrect..";
        javascriptBasicDataStructureNextButton.innerHTML = `<button class="nextButton javascriptColor1" onclick=javascriptBasicDataStructureBtn()>Next</button>`;
        javascriptBasicDataStructureRemoveValue.innerHTML = "";



    } else if (javascriptBasicDataStructureRandomValue == 9 && javascriptBasicDataStructureInputAnswer == javascriptBasicDataStructureAnswerArr[9].A9) {
        javascriptBasicDataStructureCorrectValue.innerHTML = "Correct..";
        javascriptBasicDataStructureDisplayAnswer.innerHTML = `
        <textarea name="text" class="answer_textarea" id="input">Good Job :) </textarea>`;
        javascriptBasicDataStructureNextButton.innerHTML = `<button class="nextButton javascriptColor1" onclick=javascriptBasicDataStructureBtn()>Next</button>`;
        javascriptBasicDataStructureRemoveValue.innerHTML = "";

    } else if (javascriptBasicDataStructureRandomValue == 9 && javascriptBasicDataStructureInputAnswer !== javascriptBasicDataStructureAnswerArr[9].A9) {
        javascriptBasicDataStructureDisplayAnswer.innerHTML = `
    <textarea name="text" class="answer_textarea" id="input">
function quickCheck(arr, elem) {
    return arr.indexOf(elem) >= 0 ? true : false;
}
console.log(quickCheck(['squash', 'onions', 'shallots'], 'mushrooms'));
        </textarea>`;
        javascriptBasicDataStructureIncorrectValue.innerHTML = "Incorrect..";
        javascriptBasicDataStructureNextButton.innerHTML = `<button class="nextButton javascriptColor1" onclick=javascriptBasicDataStructureBtn()>Next</button>`;
        javascriptBasicDataStructureRemoveValue.innerHTML = "";



    } else if (javascriptBasicDataStructureRandomValue == 10 && javascriptBasicDataStructureInputAnswer == javascriptBasicDataStructureAnswerArr[10].A10) {
        javascriptBasicDataStructureCorrectValue.innerHTML = "Correct..";
        javascriptBasicDataStructureDisplayAnswer.innerHTML = `
        <textarea name="text" class="answer_textarea" id="input">Good Job :) </textarea>`;
        javascriptBasicDataStructureNextButton.innerHTML = `<button class="nextButton javascriptColor1" onclick=javascriptBasicDataStructureBtn()>Next</button>`;
        javascriptBasicDataStructureRemoveValue.innerHTML = "";

    } else if (javascriptBasicDataStructureRandomValue == 10 && javascriptBasicDataStructureInputAnswer !== javascriptBasicDataStructureAnswerArr[10].A10) {
        javascriptBasicDataStructureDisplayAnswer.innerHTML = `
    <textarea name="text" class="answer_textarea" id="input">
function filteredArray(arr, elem) {
    let newArr = [];
    for (let i = 0; i < arr.length; i++) { 
        if (arr[i].indexOf(elem)==-1){ 
            newArr.push(arr[i]); 
        };
    };
    return newArr;
};
console.log(filteredArray([[3, 2, 3], [1, 6, 3], [3, 13, 26], [19, 3, 9]], 3)); 
        </textarea>`;
        javascriptBasicDataStructureIncorrectValue.innerHTML = "Incorrect..";
        javascriptBasicDataStructureNextButton.innerHTML = `<button class="nextButton javascriptColor1" onclick=javascriptBasicDataStructureBtn()>Next</button>`;
        javascriptBasicDataStructureRemoveValue.innerHTML = "";



    } else if (javascriptBasicDataStructureRandomValue == 11 && javascriptBasicDataStructureInputAnswer == javascriptBasicDataStructureAnswerArr[11].A11) {
        javascriptBasicDataStructureCorrectValue.innerHTML = "Correct..";
        javascriptBasicDataStructureDisplayAnswer.innerHTML = `
        <textarea name="text" class="answer_textarea" id="input">Good Job :) </textarea>`;
        javascriptBasicDataStructureNextButton.innerHTML = `<button class="nextButton javascriptColor1" onclick=javascriptBasicDataStructureBtn()>Next</button>`;
        javascriptBasicDataStructureRemoveValue.innerHTML = "";

    } else if (javascriptBasicDataStructureRandomValue == 11 && javascriptBasicDataStructureInputAnswer !== javascriptBasicDataStructureAnswerArr[11].A11) {
        javascriptBasicDataStructureDisplayAnswer.innerHTML = `
    <textarea name="text" class="answer_textarea" id="input">
let myNestedArray = [
    ['unshift', false, 1, 2, 3, 'complex', 'nested'],
    ['loop', 'shift', 6, 7, 1000, 'method'],
    ['concat', false, true, 'spread', 'array',["deep"]],
    ['mutate', 1327.98, 'splice', 'slice', 'push', [["deeper"]]],
    ['iterate', 1.3849, 7, '8.4876', 'arbitrary', 'depth', [[["deepest"]]] ]
];
        </textarea>`;
        javascriptBasicDataStructureIncorrectValue.innerHTML = "Incorrect..";
        javascriptBasicDataStructureNextButton.innerHTML = `<button class="nextButton javascriptColor1" onclick=javascriptBasicDataStructureBtn()>Next</button>`;
        javascriptBasicDataStructureRemoveValue.innerHTML = "";



    } else if (javascriptBasicDataStructureRandomValue == 12 && javascriptBasicDataStructureInputAnswer == javascriptBasicDataStructureAnswerArr[12].A12) {
        javascriptBasicDataStructureCorrectValue.innerHTML = "Correct..";
        javascriptBasicDataStructureDisplayAnswer.innerHTML = `
        <textarea name="text" class="answer_textarea" id="input">Good Job :) </textarea>`;
        javascriptBasicDataStructureNextButton.innerHTML = `<button class="nextButton javascriptColor1" onclick=javascriptBasicDataStructureBtn()>Next</button>`;
        javascriptBasicDataStructureRemoveValue.innerHTML = "";

    } else if (javascriptBasicDataStructureRandomValue == 12 && javascriptBasicDataStructureInputAnswer !== javascriptBasicDataStructureAnswerArr[12].A12) {
        javascriptBasicDataStructureDisplayAnswer.innerHTML = `
    <textarea name="text" class="answer_textarea" id="input">
let foods = {
    apples: 25,
    oranges: 32,
    plums: 28
};
foods['bananas'] = 13;
foods['grapes'] = 35;
foods['strawberries'] = 27;
console.log(foods);
        </textarea>`;
        javascriptBasicDataStructureIncorrectValue.innerHTML = "Incorrect..";
        javascriptBasicDataStructureNextButton.innerHTML = `<button class="nextButton javascriptColor1" onclick=javascriptBasicDataStructureBtn()>Next</button>`;
        javascriptBasicDataStructureRemoveValue.innerHTML = "";



    } else if (javascriptBasicDataStructureRandomValue == 13 && javascriptBasicDataStructureInputAnswer == javascriptBasicDataStructureAnswerArr[13].A13) {
        javascriptBasicDataStructureCorrectValue.innerHTML = "Correct..";
        javascriptBasicDataStructureDisplayAnswer.innerHTML = `
        <textarea name="text" class="answer_textarea" id="input">Good Job :) </textarea>`;
        javascriptBasicDataStructureNextButton.innerHTML = `<button class="nextButton javascriptColor1" onclick=javascriptBasicDataStructureBtn()>Next</button>`;
        javascriptBasicDataStructureRemoveValue.innerHTML = "";

    } else if (javascriptBasicDataStructureRandomValue == 13 && javascriptBasicDataStructureInputAnswer !== javascriptBasicDataStructureAnswerArr[13].A13) {
        javascriptBasicDataStructureDisplayAnswer.innerHTML = `
    <textarea name="text" class="answer_textarea" id="input">
let userActivity = {
    id: 23894201352,
    date: 'January 1, 2017',
    data: {
        totalUsers: 51,
        online: 42
    }
};
userActivity.data.online = 45;

console.log(userActivity);
        </textarea>`;
        javascriptBasicDataStructureIncorrectValue.innerHTML = "Incorrect..";
        javascriptBasicDataStructureNextButton.innerHTML = `<button class="nextButton javascriptColor1" onclick=javascriptBasicDataStructureBtn()>Next</button>`;
        javascriptBasicDataStructureRemoveValue.innerHTML = "";



    } else if (javascriptBasicDataStructureRandomValue == 14 && javascriptBasicDataStructureInputAnswer == javascriptBasicDataStructureAnswerArr[14].A14) {
        javascriptBasicDataStructureCorrectValue.innerHTML = "Correct..";
        javascriptBasicDataStructureDisplayAnswer.innerHTML = `
        <textarea name="text" class="answer_textarea" id="input">Good Job :) </textarea>`;
        javascriptBasicDataStructureNextButton.innerHTML = `<button class="nextButton javascriptColor1" onclick=javascriptBasicDataStructureBtn()>Next</button>`;
        javascriptBasicDataStructureRemoveValue.innerHTML = "";

    } else if (javascriptBasicDataStructureRandomValue == 14 && javascriptBasicDataStructureInputAnswer !== javascriptBasicDataStructureAnswerArr[14].A14) {
        javascriptBasicDataStructureDisplayAnswer.innerHTML = `
    <textarea name="text" class="answer_textarea" id="input">
let foods = {
    apples: 25,
    oranges: 32,
    plums: 28,
    bananas: 13,
    grapes: 35,
    strawberries: 27
};

function checkInventory(scannedItem) {
    return foods[scannedItem];
}
console.log(checkInventory("apples"));
        </textarea>`;
        javascriptBasicDataStructureIncorrectValue.innerHTML = "Incorrect..";
        javascriptBasicDataStructureNextButton.innerHTML = `<button class="nextButton javascriptColor1" onclick=javascriptBasicDataStructureBtn()>Next</button>`;
        javascriptBasicDataStructureRemoveValue.innerHTML = "";



    } else if (javascriptBasicDataStructureRandomValue == 15 && javascriptBasicDataStructureInputAnswer == javascriptBasicDataStructureAnswerArr[15].A15) {
        javascriptBasicDataStructureCorrectValue.innerHTML = "Correct..";
        javascriptBasicDataStructureDisplayAnswer.innerHTML = `
        <textarea name="text" class="answer_textarea" id="input">Good Job :) </textarea>`;
        javascriptBasicDataStructureNextButton.innerHTML = `<button class="nextButton javascriptColor1" onclick=javascriptBasicDataStructureBtn()>Next</button>`;
        javascriptBasicDataStructureRemoveValue.innerHTML = "";

    } else if (javascriptBasicDataStructureRandomValue == 15 && javascriptBasicDataStructureInputAnswer !== javascriptBasicDataStructureAnswerArr[15].A15) {
        javascriptBasicDataStructureDisplayAnswer.innerHTML = `
    <textarea name="text" class="answer_textarea" id="input">
let foods = {
    apples: 25,
    oranges: 32,
    plums: 28,
    bananas: 13,
    grapes: 35,
    strawberries: 27
};
delete foods.oranges;
delete foods.plums;
delete foods.strawberries;
console.log(foods);
        </textarea>`;
        javascriptBasicDataStructureIncorrectValue.innerHTML = "Incorrect..";
        javascriptBasicDataStructureNextButton.innerHTML = `<button class="nextButton javascriptColor1" onclick=javascriptBasicDataStructureBtn()>Next</button>`;
        javascriptBasicDataStructureRemoveValue.innerHTML = "";



    } else if (javascriptBasicDataStructureRandomValue == 16 && javascriptBasicDataStructureInputAnswer == javascriptBasicDataStructureAnswerArr[16].A16) {
        javascriptBasicDataStructureCorrectValue.innerHTML = "Correct..";
        javascriptBasicDataStructureDisplayAnswer.innerHTML = `
        <textarea name="text" class="answer_textarea" id="input">Good Job :) </textarea>`;
        javascriptBasicDataStructureNextButton.innerHTML = `<button class="nextButton javascriptColor1" onclick=javascriptBasicDataStructureBtn()>Next</button>`;
        javascriptBasicDataStructureRemoveValue.innerHTML = "";

    } else if (javascriptBasicDataStructureRandomValue == 16 && javascriptBasicDataStructureInputAnswer !== javascriptBasicDataStructureAnswerArr[16].A16) {
        javascriptBasicDataStructureDisplayAnswer.innerHTML = `
    <textarea name="text" class="answer_textarea" id="input">
let users = {
    Alan: {
        age: 27,
        online: true
    },
    Jeff: {
        age: 32,
        online: true
    },
    Sarah: {
        age: 48,
        online: true
    },
    Ryan: {
        age: 19,
        online: true
    }
};
    
function isEveryoneHere(obj) {
    return (users.hasOwnProperty('Alan','Jeff','Sarah','Ryan')) ? true : false;
}

console.log(isEveryoneHere(users));
        </textarea>`;
        javascriptBasicDataStructureIncorrectValue.innerHTML = "Incorrect..";
        javascriptBasicDataStructureNextButton.innerHTML = `<button class="nextButton javascriptColor1" onclick=javascriptBasicDataStructureBtn()>Next</button>`;
        javascriptBasicDataStructureRemoveValue.innerHTML = "";



    } else if (javascriptBasicDataStructureRandomValue == 17 && javascriptBasicDataStructureInputAnswer == javascriptBasicDataStructureAnswerArr[17].A17) {
        javascriptBasicDataStructureCorrectValue.innerHTML = "Correct..";
        javascriptBasicDataStructureDisplayAnswer.innerHTML = `
        <textarea name="text" class="answer_textarea" id="input">Good Job :) </textarea>`;
        javascriptBasicDataStructureNextButton.innerHTML = `<button class="nextButton javascriptColor1" onclick=javascriptBasicDataStructureBtn()>Next</button>`;
        javascriptBasicDataStructureRemoveValue.innerHTML = "";

    } else if (javascriptBasicDataStructureRandomValue == 17 && javascriptBasicDataStructureInputAnswer !== javascriptBasicDataStructureAnswerArr[17].A17) {
        javascriptBasicDataStructureDisplayAnswer.innerHTML = `
    <textarea name="text" class="answer_textarea" id="input">
let users = {
    Alan: {
        age: 27,
        online: false
    },
    Jeff: {
        age: 32,
        online: true
    },
    Sarah: {
        age: 48,
        online: false
    },
    Ryan: {
        age: 19,
        online: true
    }
};

function countOnline(obj) {
    let online = 0;
    for(let user in obj){
        if(obj[user].online == true) {
        online += 1;
        }
    }
    return online;
}

console.log(countOnline(users));
        </textarea>`;
        javascriptBasicDataStructureIncorrectValue.innerHTML = "Incorrect..";
        javascriptBasicDataStructureNextButton.innerHTML = `<button class="nextButton javascriptColor1" onclick=javascriptBasicDataStructureBtn()>Next</button>`;
        javascriptBasicDataStructureRemoveValue.innerHTML = "";



    } else if (javascriptBasicDataStructureRandomValue == 18 && javascriptBasicDataStructureInputAnswer == javascriptBasicDataStructureAnswerArr[18].A18) {
        javascriptBasicDataStructureCorrectValue.innerHTML = "Correct..";
        javascriptBasicDataStructureDisplayAnswer.innerHTML = `
        <textarea name="text" class="answer_textarea" id="input">Good Job :) </textarea>`;
        javascriptBasicDataStructureNextButton.innerHTML = `<button class="nextButton javascriptColor1" onclick=javascriptBasicDataStructureBtn()>Next</button>`;
        javascriptBasicDataStructureRemoveValue.innerHTML = "";

    } else if (javascriptBasicDataStructureRandomValue == 18 && javascriptBasicDataStructureInputAnswer !== javascriptBasicDataStructureAnswerArr[18].A18) {
        javascriptBasicDataStructureDisplayAnswer.innerHTML = `
    <textarea name="text" class="answer_textarea" id="input">
let users = {
    Alan: {
        age: 27,
        online: false
    },
    Jeff: {
        age: 32,
        online: true
    },
    Sarah: {
        age: 48,
        online: false
    },
    Ryan: {
        age: 19,
        online: true
    }
};

function getArrayOfUsers(obj) {
    return Object.keys(users);
}

console.log(getArrayOfUsers(users));
        </textarea>`;
        javascriptBasicDataStructureIncorrectValue.innerHTML = "Incorrect..";
        javascriptBasicDataStructureNextButton.innerHTML = `<button class="nextButton javascriptColor1" onclick=javascriptBasicDataStructureBtn()>Next</button>`;
        javascriptBasicDataStructureRemoveValue.innerHTML = "";



    } else if (javascriptBasicDataStructureRandomValue == 19 && javascriptBasicDataStructureInputAnswer == javascriptBasicDataStructureAnswerArr[19].A19) {
        javascriptBasicDataStructureCorrectValue.innerHTML = "Correct..";
        javascriptBasicDataStructureDisplayAnswer.innerHTML = `
        <textarea name="text" class="answer_textarea" id="input">Good Job :) </textarea>`;
        javascriptBasicDataStructureNextButton.innerHTML = `<button class="nextButton javascriptColor1" onclick=javascriptBasicDataStructureBtn()>Next</button>`;
        javascriptBasicDataStructureRemoveValue.innerHTML = "";

    } else if (javascriptBasicDataStructureRandomValue == 19 && javascriptBasicDataStructureInputAnswer !== javascriptBasicDataStructureAnswerArr[19].A19) {
        javascriptBasicDataStructureDisplayAnswer.innerHTML = `
    <textarea name="text" class="answer_textarea" id="input">
let user = {
    name: 'Kenneth',
    age: 28,
    data: {
        username: 'kennethCodesAllDay',
        joinDate: 'March 26, 2016',
        organization: 'freeCodeCamp',
        friends: [
        'Sam',
        'Kira',
        'Tomo'
        ],
        location: {
        city: 'San Francisco',
        state: 'CA',
        country: 'USA'
        }
    }
};

function addFriend(userObj, friend) { 
    userObj.data.friends.push(friend);
    return userObj.data.friends;
}

console.log(addFriend(user, 'Pete'));
          </textarea>`;
        javascriptBasicDataStructureIncorrectValue.innerHTML = "Incorrect..";
        javascriptBasicDataStructureNextButton.innerHTML = `<button class="nextButton javascriptColor1" onclick=javascriptBasicDataStructureBtn()>Next</button>`;
        javascriptBasicDataStructureRemoveValue.innerHTML = "";



    } else {
        javascriptBasicDataStructureIncorrectValue.innerHTML = "Incorrect..";
        javascriptBasicDataStructureNextButton.innerHTML = `<button class="nextButton javascriptColor1" onclick=javascriptBasicDataStructureBtn()>Next</button>`;
        javascriptBasicDataStructureRemoveValue.innerHTML = "";
    }

}
window.javascriptBasicDataStructureSubmit = javascriptBasicDataStructureSubmit; /* to make submit global*/

function javascriptBasicDataStructureButton() {
    javascriptBasicDataStructureTest = document.getElementById("javascriptBasicDataStructureAddedQuestion").innerHTML = javascriptBasicDataStructureQuestionArr[javascriptBasicDataStructureRandomValue]; /* giving random question to html */

    return javascriptBasicDataStructureTest;
}
window.javascriptBasicDataStructureButton = javascriptBasicDataStructureButton;

function javascriptBasicDataStructureShowTest() {
    var javascriptBasicDataStructureInputBox = document.getElementById("javascriptBasicDataStructureRemove").style.display = "block";
    return javascriptBasicDataStructureInputBox;
}
window.javascriptBasicDataStructureShowTest = javascriptBasicDataStructureShowTest;

function javascriptBasicDataStructureBtn() {
    javascriptBasicDataStructureRandomValue = Math.floor(Math.random() * javascriptBasicDataStructureQuestionArr.length); /* buton next in html to make a next random question*/
    document.getElementById("javascriptBasicDataStructureAddedQuestion").innerHTML = javascriptBasicDataStructureQuestionArr[javascriptBasicDataStructureRandomValue]; /* giving random question to html */
    document.getElementById("javascriptBasicDataStructureElementButton").innerHTML = "";/* to clean javascriptBasicDataStructureElementButton*/
    document.getElementById("javascriptBasicDataStructureRemove").innerHTML = `<textarea name="text" class="answer_textarea" id="input"></textarea></br>
      <button class="answer_submit javascriptColor1" id = "javascriptBasicDataStructureStartButton" onclick="javascriptBasicDataStructureSubmit()">Submit</button>`;/* to create next text area and Submit button. */
    document.getElementById("javascriptBasicDataStructureCheckingAnswer").innerHTML = "";
    document.getElementById("javascriptBasicDataStructureShowingAnswer").innerHTML = "";
}
window.javascriptBasicDataStructureBtn = javascriptBasicDataStructureBtn;/* to make submit global*/




























































var javascriptBasicAlgorithmRandomValue = Math.floor(Math.random() * javascriptBasicAlgorithmQuestionArr.length); /* taking random question from htmlQuestionArr*/


function javascriptBasicAlgorithmSubmit() { /* function for html submit button*/

    var javascriptBasicAlgorithmInputAnswer = input.value.replace(/\s+/g, ``); /*replace(/\s+/g, `` is removing all spaces. Avoid checking all the spaces to compare text*/
    var javascriptBasicAlgorithmCorrectValue = document.getElementById("javascriptBasicAlgorithmCheckingAnswer"); /* making getElementById code shorter*/
    var javascriptBasicAlgorithmIncorrectValue = document.getElementById("javascriptBasicAlgorithmCheckingAnswer");
    var javascriptBasicAlgorithmDisplayAnswer = document.getElementById("javascriptBasicAlgorithmShowingAnswer");
    var javascriptBasicAlgorithmNextButton = document.getElementById("javascriptBasicAlgorithmElementButton");
    var javascriptBasicAlgorithmRemoveValue = document.getElementById("javascriptBasicAlgorithmRemove");

    if (javascriptBasicAlgorithmRandomValue == 0 && javascriptBasicAlgorithmInputAnswer == javascriptBasicAlgorithmAnswerArr[0].A0) { /* checking if javascriptBasicAlgorithmRandomValue is 0 and if putting answer the same as javascriptBasicAlgorithmAnswerArr*//*A0 is just that I can track answer numbers when adding questions and answers*/
        javascriptBasicAlgorithmCorrectValue.innerHTML = "Correct..";
        javascriptBasicAlgorithmDisplayAnswer.innerHTML = `
        <textarea name="text" class="answer_textarea" id="input">Good Job :) </textarea>`;
        javascriptBasicAlgorithmNextButton.innerHTML = `<button class="nextButton javascriptColor1" onclick=javascriptBasicAlgorithmBtn()>Next</button>`; /* creating next button with javascriptBasicAlgorithmBtn()function*/
        javascriptBasicAlgorithmRemoveValue.innerHTML = "";/* removing in html answer*/



    } else if (javascriptBasicAlgorithmRandomValue == 0 && javascriptBasicAlgorithmInputAnswer !== javascriptBasicAlgorithmAnswerArr[0].A0) {/*  if random value not == then giving then display the answere.*/
        javascriptBasicAlgorithmDisplayAnswer.innerHTML = `
    <textarea name="text" class="answer_textarea" id="input">
function convertToF(celsius) {
    var fahrenheit = (celsius * (9/5)) + 32;

    if ( typeof fahrenheit !== 'undefined' ) {
    return fahrenheit;
    } else {
        return 'fahrenheit not defined';
    }
}
convertToF(30);
        </textarea>`;
        javascriptBasicAlgorithmIncorrectValue.innerHTML = "Incorrect..";
        javascriptBasicAlgorithmNextButton.innerHTML = `<button class="nextButton javascriptColor1" onclick=javascriptBasicAlgorithmBtn()>Next</button>`;
        javascriptBasicAlgorithmRemoveValue.innerHTML = "";



    } else if (javascriptBasicAlgorithmRandomValue == 1 && javascriptBasicAlgorithmInputAnswer == javascriptBasicAlgorithmAnswerArr[1].A1) {
        javascriptBasicAlgorithmCorrectValue.innerHTML = "Correct..";
        javascriptBasicAlgorithmDisplayAnswer.innerHTML = `
        <textarea name="text" class="answer_textarea" id="input">Good Job :) </textarea>`;
        javascriptBasicAlgorithmNextButton.innerHTML = `<button class="nextButton javascriptColor1" onclick=javascriptBasicAlgorithmBtn()>Next</button>`;
        javascriptBasicAlgorithmRemoveValue.innerHTML = "";

    } else if (javascriptBasicAlgorithmRandomValue == 1 && javascriptBasicAlgorithmInputAnswer !== javascriptBasicAlgorithmAnswerArr[1].A1) {
        javascriptBasicAlgorithmDisplayAnswer.innerHTML = `
        <textarea name="text" class="answer_textarea" id="input">
function reverseString(str) {
    return str.split('').reverse().join('');
}

reverseString("hello");
          </textarea>`;
        javascriptBasicAlgorithmIncorrectValue.innerHTML = "Incorrect..";
        javascriptBasicAlgorithmNextButton.innerHTML = `<button class="nextButton javascriptColor1" onclick=javascriptBasicAlgorithmBtn()>Next</button>`;
        javascriptBasicAlgorithmRemoveValue.innerHTML = "";



    } else if (javascriptBasicAlgorithmRandomValue == 2 && javascriptBasicAlgorithmInputAnswer == javascriptBasicAlgorithmAnswerArr[2].A2) {
        javascriptBasicAlgorithmCorrectValue.innerHTML = "Correct..";
        javascriptBasicAlgorithmDisplayAnswer.innerHTML = `
        <textarea name="text" class="answer_textarea" id="input">Good Job :) </textarea>`;
        javascriptBasicAlgorithmNextButton.innerHTML = `<button class="nextButton javascriptColor1" onclick=javascriptBasicAlgorithmBtn()>Next</button>`;
        javascriptBasicAlgorithmRemoveValue.innerHTML = "";

    } else if (javascriptBasicAlgorithmRandomValue == 2 && javascriptBasicAlgorithmInputAnswer !== javascriptBasicAlgorithmAnswerArr[2].A2) {
        javascriptBasicAlgorithmDisplayAnswer.innerHTML = `
    <textarea name="text" class="answer_textarea" id="input">
function factorialize(num) {
    if (num === 0) { return 1; }
    return num * factorialize(num-1);
}

factorialize(5);
          </textarea>`;
        javascriptBasicAlgorithmIncorrectValue.innerHTML = "Incorrect..";
        javascriptBasicAlgorithmNextButton.innerHTML = `<button class="nextButton javascriptColor1" onclick=javascriptBasicAlgorithmBtn()>Next</button>`;
        javascriptBasicAlgorithmRemoveValue.innerHTML = "";



    } else if (javascriptBasicAlgorithmRandomValue == 3 && javascriptBasicAlgorithmInputAnswer == javascriptBasicAlgorithmAnswerArr[3].A3) {
        javascriptBasicAlgorithmCorrectValue.innerHTML = "Correct..";
        javascriptBasicAlgorithmDisplayAnswer.innerHTML = `
        <textarea name="text" class="answer_textarea" id="input">Good Job :) </textarea>`;
        javascriptBasicAlgorithmNextButton.innerHTML = `<button class="nextButton javascriptColor1" onclick=javascriptBasicAlgorithmBtn()>Next</button>`;
        javascriptBasicAlgorithmRemoveValue.innerHTML = "";

    } else if (javascriptBasicAlgorithmRandomValue == 3 && javascriptBasicAlgorithmInputAnswer !== javascriptBasicAlgorithmAnswerArr[3].A3) {
        javascriptBasicAlgorithmDisplayAnswer.innerHTML = `
    <textarea name="text" class="answer_textarea" id="input">
function findLongestWordLength(str) {

    str = str.split(" ");

    if(str.length == 1){
        return str[0].length;
    }

    if(str[0].length >= str[1].length){
        str.splice(1,1);
        return findLongestWordLength(str.join(" "));
    }

    if(str[0].length <= str[1].length){
        
        return findLongestWordLength(str.slice(1,str.length).join(" "));
    }
}

findLongestWordLength("The quick brown fox jumped over the lazy dog");
        </textarea>`;
        javascriptBasicAlgorithmIncorrectValue.innerHTML = "Incorrect..";
        javascriptBasicAlgorithmNextButton.innerHTML = `<button class="nextButton javascriptColor1" onclick=javascriptBasicAlgorithmBtn()>Next</button>`;
        javascriptBasicAlgorithmRemoveValue.innerHTML = "";
        


    } else if (javascriptBasicAlgorithmRandomValue == 4 && javascriptBasicAlgorithmInputAnswer == javascriptBasicAlgorithmAnswerArr[4].A4) {
        javascriptBasicAlgorithmCorrectValue.innerHTML = "Correct..";
        javascriptBasicAlgorithmDisplayAnswer.innerHTML = `
        <textarea name="text" class="answer_textarea" id="input">Good Job :) </textarea>`;
        javascriptBasicAlgorithmNextButton.innerHTML = `<button class="nextButton javascriptColor1" onclick=javascriptBasicAlgorithmBtn()>Next</button>`;
        javascriptBasicAlgorithmRemoveValue.innerHTML = "";

    } else if (javascriptBasicAlgorithmRandomValue == 4 && javascriptBasicAlgorithmInputAnswer !== javascriptBasicAlgorithmAnswerArr[4].A4) {
        javascriptBasicAlgorithmDisplayAnswer.innerHTML = `
    <textarea name="text" class="answer_textarea" id="input">
function findLongestWordLength(s) {
    return s.split(' ')
        .reduce(function(x, y) {
            return Math.max(x, y.length)
        }, 0);
}

findLongestWordLength("The quick brown fox jumped over the lazy dog");
        </textarea>`;
        javascriptBasicAlgorithmIncorrectValue.innerHTML = "Incorrect..";
        javascriptBasicAlgorithmNextButton.innerHTML = `<button class="nextButton javascriptColor1" onclick=javascriptBasicAlgorithmBtn()>Next</button>`;
        javascriptBasicAlgorithmRemoveValue.innerHTML = "";



    } else if (javascriptBasicAlgorithmRandomValue == 5 && javascriptBasicAlgorithmInputAnswer == javascriptBasicAlgorithmAnswerArr[5].A5) {
        javascriptBasicAlgorithmCorrectValue.innerHTML = "Correct..";
        javascriptBasicAlgorithmDisplayAnswer.innerHTML = `
        <textarea name="text" class="answer_textarea" id="input">Good Job :) </textarea>`;
        javascriptBasicAlgorithmNextButton.innerHTML = `<button class="nextButton javascriptColor1" onclick=javascriptBasicAlgorithmBtn()>Next</button>`;
        javascriptBasicAlgorithmRemoveValue.innerHTML = "";

    } else if (javascriptBasicAlgorithmRandomValue == 5 && javascriptBasicAlgorithmInputAnswer !== javascriptBasicAlgorithmAnswerArr[5].A5) {
        javascriptBasicAlgorithmDisplayAnswer.innerHTML = `
    <textarea name="text" class="answer_textarea" id="input">
function findLongestWordLength(str) {
    var words = str.split(' ');
    var maxLength = 0;
    
    for (var i = 0; i < words.length; i++) {
        if (words[i].length > maxLength) {
        maxLength = words[i].length;
        }
    }
    
    return maxLength;
}

findLongestWordLength("The quick brown fox jumped over the lazy dog");
        </textarea>`;
        javascriptBasicAlgorithmIncorrectValue.innerHTML = "Incorrect..";
        javascriptBasicAlgorithmNextButton.innerHTML = `<button class="nextButton javascriptColor1" onclick=javascriptBasicAlgorithmBtn()>Next</button>`;
        javascriptBasicAlgorithmRemoveValue.innerHTML = "";



    } else if (javascriptBasicAlgorithmRandomValue == 6 && javascriptBasicAlgorithmInputAnswer == javascriptBasicAlgorithmAnswerArr[6].A6) {
        javascriptBasicAlgorithmCorrectValue.innerHTML = "Correct..";
        javascriptBasicAlgorithmDisplayAnswer.innerHTML = `
        <textarea name="text" class="answer_textarea" id="input">Good Job :) </textarea>`;
        javascriptBasicAlgorithmNextButton.innerHTML = `<button class="nextButton javascriptColor1" onclick=javascriptBasicAlgorithmBtn()>Next</button>`;
        javascriptBasicAlgorithmRemoveValue.innerHTML = "";

    } else if (javascriptBasicAlgorithmRandomValue == 6 && javascriptBasicAlgorithmInputAnswer !== javascriptBasicAlgorithmAnswerArr[6].A6) {
        javascriptBasicAlgorithmDisplayAnswer.innerHTML = `
    <textarea name="text" class="answer_textarea" id="input">
function largestOfFour(arr) {
    return arr.map(Function.apply.bind(Math.max, null));
}

largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);
        </textarea>`;
        javascriptBasicAlgorithmIncorrectValue.innerHTML = "Incorrect..";
        javascriptBasicAlgorithmNextButton.innerHTML = `<button class="nextButton javascriptColor1" onclick=javascriptBasicAlgorithmBtn()>Next</button>`;
        javascriptBasicAlgorithmRemoveValue.innerHTML = "";



    } else if (javascriptBasicAlgorithmRandomValue == 7 && javascriptBasicAlgorithmInputAnswer == javascriptBasicAlgorithmAnswerArr[7].A7) {
        javascriptBasicAlgorithmCorrectValue.innerHTML = "Correct..";
        javascriptBasicAlgorithmDisplayAnswer.innerHTML = `
        <textarea name="text" class="answer_textarea" id="input">Good Job :) </textarea>`;
        javascriptBasicAlgorithmNextButton.innerHTML = `<button class="nextButton javascriptColor1" onclick=javascriptBasicAlgorithmBtn()>Next</button>`;
        javascriptBasicAlgorithmRemoveValue.innerHTML = "";

    } else if (javascriptBasicAlgorithmRandomValue == 7 && javascriptBasicAlgorithmInputAnswer !== javascriptBasicAlgorithmAnswerArr[7].A7) {
        javascriptBasicAlgorithmDisplayAnswer.innerHTML = `
    <textarea name="text" class="answer_textarea" id="input">
function largestOfFour(arr) {
    return arr.map(function(group){
        return group.reduce(function(prev, current) {
        return (current > prev) ? current : prev;
        });
    });
}

largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);

        </textarea>`;
        javascriptBasicAlgorithmIncorrectValue.innerHTML = "Incorrect..";
        javascriptBasicAlgorithmNextButton.innerHTML = `<button class="nextButton javascriptColor1" onclick=javascriptBasicAlgorithmBtn()>Next</button>`;
        javascriptBasicAlgorithmRemoveValue.innerHTML = "";



    } else if (javascriptBasicAlgorithmRandomValue == 8 && javascriptBasicAlgorithmInputAnswer == javascriptBasicAlgorithmAnswerArr[8].A8) {
        javascriptBasicAlgorithmCorrectValue.innerHTML = "Correct..";
        javascriptBasicAlgorithmDisplayAnswer.innerHTML = `
        <textarea name="text" class="answer_textarea" id="input">Good Job :) </textarea>`;
        javascriptBasicAlgorithmNextButton.innerHTML = `<button class="nextButton javascriptColor1" onclick=javascriptBasicAlgorithmBtn()>Next</button>`;
        javascriptBasicAlgorithmRemoveValue.innerHTML = "";

    } else if (javascriptBasicAlgorithmRandomValue == 8 && javascriptBasicAlgorithmInputAnswer !== javascriptBasicAlgorithmAnswerArr[8].A8) {
        javascriptBasicAlgorithmDisplayAnswer.innerHTML = `
    <textarea name="text" class="answer_textarea" id="input">
function largestOfFour(arr) {
    var results = [];
    for (var n = 0; n < arr.length; n++) {
        var largestNumber = arr[n][0];
        for (var sb = 1; sb < arr[n].length; sb++) {
            if (arr[n][sb] > largestNumber) {
                largestNumber = arr[n][sb];
            }
    }

    results[n] = largestNumber;
    }

    return results;
}

largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]); 
        </textarea>`;
        javascriptBasicAlgorithmIncorrectValue.innerHTML = "Incorrect..";
        javascriptBasicAlgorithmNextButton.innerHTML = `<button class="nextButton javascriptColor1" onclick=javascriptBasicAlgorithmBtn()>Next</button>`;
        javascriptBasicAlgorithmRemoveValue.innerHTML = "";



    } else if (javascriptBasicAlgorithmRandomValue == 9 && javascriptBasicAlgorithmInputAnswer == javascriptBasicAlgorithmAnswerArr[9].A9) {
        javascriptBasicAlgorithmCorrectValue.innerHTML = "Correct..";
        javascriptBasicAlgorithmDisplayAnswer.innerHTML = `
        <textarea name="text" class="answer_textarea" id="input">Good Job :) </textarea>`;
        javascriptBasicAlgorithmNextButton.innerHTML = `<button class="nextButton javascriptColor1" onclick=javascriptBasicAlgorithmBtn()>Next</button>`;
        javascriptBasicAlgorithmRemoveValue.innerHTML = "";

    } else if (javascriptBasicAlgorithmRandomValue == 9 && javascriptBasicAlgorithmInputAnswer !== javascriptBasicAlgorithmAnswerArr[9].A9) {
        javascriptBasicAlgorithmDisplayAnswer.innerHTML = `
    <textarea name="text" class="answer_textarea" id="input">
function confirmEnding(str, target) {
    return str.slice(str.length - target.length) === target;
}

confirmEnding("He has to give me a new name", "name");
        </textarea>`;
        javascriptBasicAlgorithmIncorrectValue.innerHTML = "Incorrect..";
        javascriptBasicAlgorithmNextButton.innerHTML = `<button class="nextButton javascriptColor1" onclick=javascriptBasicAlgorithmBtn()>Next</button>`;
        javascriptBasicAlgorithmRemoveValue.innerHTML = "";



    } else if (javascriptBasicAlgorithmRandomValue == 10 && javascriptBasicAlgorithmInputAnswer == javascriptBasicAlgorithmAnswerArr[10].A10) {
        javascriptBasicAlgorithmCorrectValue.innerHTML = "Correct..";
        javascriptBasicAlgorithmDisplayAnswer.innerHTML = `
        <textarea name="text" class="answer_textarea" id="input">Good Job :) </textarea>`;
        javascriptBasicAlgorithmNextButton.innerHTML = `<button class="nextButton javascriptColor1" onclick=javascriptBasicAlgorithmBtn()>Next</button>`;
        javascriptBasicAlgorithmRemoveValue.innerHTML = "";

    } else if (javascriptBasicAlgorithmRandomValue == 10 && javascriptBasicAlgorithmInputAnswer !== javascriptBasicAlgorithmAnswerArr[10].A10) {
        javascriptBasicAlgorithmDisplayAnswer.innerHTML = `
    <textarea name="text" class="answer_textarea" id="input">
function repeatStringNumTimes(str, num) {
    if(num < 0){
        return "";
    }
    if(num === 1){
        return str;
    }
    else{
        return str + repeatStringNumTimes(str, num - 1);
    }
}

repeatStringNumTimes("abc", 3);
        </textarea>`;
        javascriptBasicAlgorithmIncorrectValue.innerHTML = "Incorrect..";
        javascriptBasicAlgorithmNextButton.innerHTML = `<button class="nextButton javascriptColor1" onclick=javascriptBasicAlgorithmBtn()>Next</button>`;
        javascriptBasicAlgorithmRemoveValue.innerHTML = "";



    } else if (javascriptBasicAlgorithmRandomValue == 11 && javascriptBasicAlgorithmInputAnswer == javascriptBasicAlgorithmAnswerArr[11].A11) {
        javascriptBasicAlgorithmCorrectValue.innerHTML = "Correct..";
        javascriptBasicAlgorithmDisplayAnswer.innerHTML = `
        <textarea name="text" class="answer_textarea" id="input">Good Job :) </textarea>`;
        javascriptBasicAlgorithmNextButton.innerHTML = `<button class="nextButton javascriptColor1" onclick=javascriptBasicAlgorithmBtn()>Next</button>`;
        javascriptBasicAlgorithmRemoveValue.innerHTML = "";

    } else if (javascriptBasicAlgorithmRandomValue == 11 && javascriptBasicAlgorithmInputAnswer !== javascriptBasicAlgorithmAnswerArr[11].A11) {
        javascriptBasicAlgorithmDisplayAnswer.innerHTML = `
    <textarea name="text" class="answer_textarea" id="input">
function repeatStringNumTimes(str, num) {
    var accumulatedStr = '';

    while (num > 0) {
        accumulatedStr += str;
        num--;
    }

    return accumulatedStr;
}

repeatStringNumTimes("abc", 3);
        </textarea>`;
        javascriptBasicAlgorithmIncorrectValue.innerHTML = "Incorrect..";
        javascriptBasicAlgorithmNextButton.innerHTML = `<button class="nextButton javascriptColor1" onclick=javascriptBasicAlgorithmBtn()>Next</button>`;
        javascriptBasicAlgorithmRemoveValue.innerHTML = "";



    } else if (javascriptBasicAlgorithmRandomValue == 12 && javascriptBasicAlgorithmInputAnswer == javascriptBasicAlgorithmAnswerArr[12].A12) {
        javascriptBasicAlgorithmCorrectValue.innerHTML = "Correct..";
        javascriptBasicAlgorithmDisplayAnswer.innerHTML = `
        <textarea name="text" class="answer_textarea" id="input">Good Job :) </textarea>`;
        javascriptBasicAlgorithmNextButton.innerHTML = `<button class="nextButton javascriptColor1" onclick=javascriptBasicAlgorithmBtn()>Next</button>`;
        javascriptBasicAlgorithmRemoveValue.innerHTML = "";

    } else if (javascriptBasicAlgorithmRandomValue == 12 && javascriptBasicAlgorithmInputAnswer !== javascriptBasicAlgorithmAnswerArr[12].A12) {
        javascriptBasicAlgorithmDisplayAnswer.innerHTML = `
    <textarea name="text" class="answer_textarea" id="input">
function truncateString(str, num) {
    if (str.length > num && num > 3) {
        return str.slice(0, (num)) + '...';
    } else if (str.length > num && num <= 3) {
        return str.slice(0, num) + '...';
    } else {
        return str;
    }
}

truncateString("A-tisket a-tasket A green and yellow basket", 8);
        </textarea>`;
        javascriptBasicAlgorithmIncorrectValue.innerHTML = "Incorrect..";
        javascriptBasicAlgorithmNextButton.innerHTML = `<button class="nextButton javascriptColor1" onclick=javascriptBasicAlgorithmBtn()>Next</button>`;
        javascriptBasicAlgorithmRemoveValue.innerHTML = "";



    } else if (javascriptBasicAlgorithmRandomValue == 13 && javascriptBasicAlgorithmInputAnswer == javascriptBasicAlgorithmAnswerArr[13].A13) {
        javascriptBasicAlgorithmCorrectValue.innerHTML = "Correct..";
        javascriptBasicAlgorithmDisplayAnswer.innerHTML = `
        <textarea name="text" class="answer_textarea" id="input">Good Job :) </textarea>`;
        javascriptBasicAlgorithmNextButton.innerHTML = `<button class="nextButton javascriptColor1" onclick=javascriptBasicAlgorithmBtn()>Next</button>`;
        javascriptBasicAlgorithmRemoveValue.innerHTML = "";

    } else if (javascriptBasicAlgorithmRandomValue == 13 && javascriptBasicAlgorithmInputAnswer !== javascriptBasicAlgorithmAnswerArr[13].A13) {
        javascriptBasicAlgorithmDisplayAnswer.innerHTML = `
    <textarea name="text" class="answer_textarea" id="input">
function findElement(arr, func) {
    let num = 0;

    for(var i = 0; i < arr.length; i++) {
        num = arr[i];
        if (func(num)) {
        return num;
        }
    }

    return undefined;
}

findElement([1, 2, 3, 4], num => num % 2 === 0);
        </textarea>`;
        javascriptBasicAlgorithmIncorrectValue.innerHTML = "Incorrect..";
        javascriptBasicAlgorithmNextButton.innerHTML = `<button class="nextButton javascriptColor1" onclick=javascriptBasicAlgorithmBtn()>Next</button>`;
        javascriptBasicAlgorithmRemoveValue.innerHTML = "";



    } else if (javascriptBasicAlgorithmRandomValue == 14 && javascriptBasicAlgorithmInputAnswer == javascriptBasicAlgorithmAnswerArr[14].A14) {
        javascriptBasicAlgorithmCorrectValue.innerHTML = "Correct..";
        javascriptBasicAlgorithmDisplayAnswer.innerHTML = `
        <textarea name="text" class="answer_textarea" id="input">Good Job :) </textarea>`;
        javascriptBasicAlgorithmNextButton.innerHTML = `<button class="nextButton javascriptColor1" onclick=javascriptBasicAlgorithmBtn()>Next</button>`;
        javascriptBasicAlgorithmRemoveValue.innerHTML = "";

    } else if (javascriptBasicAlgorithmRandomValue == 14 && javascriptBasicAlgorithmInputAnswer !== javascriptBasicAlgorithmAnswerArr[14].A14) {
        javascriptBasicAlgorithmDisplayAnswer.innerHTML = `
    <textarea name="text" class="answer_textarea" id="input">
function booWho(bool) {
    return typeof bool === 'boolean';
}
booWho(null);
        </textarea>`;
        javascriptBasicAlgorithmIncorrectValue.innerHTML = "Incorrect..";
        javascriptBasicAlgorithmNextButton.innerHTML = `<button class="nextButton javascriptColor1" onclick=javascriptBasicAlgorithmBtn()>Next</button>`;
        javascriptBasicAlgorithmRemoveValue.innerHTML = "";



    } else if (javascriptBasicAlgorithmRandomValue == 15 && javascriptBasicAlgorithmInputAnswer == javascriptBasicAlgorithmAnswerArr[15].A15) {
        javascriptBasicAlgorithmCorrectValue.innerHTML = "Correct..";
        javascriptBasicAlgorithmDisplayAnswer.innerHTML = `
        <textarea name="text" class="answer_textarea" id="input">Good Job :) </textarea>`;
        javascriptBasicAlgorithmNextButton.innerHTML = `<button class="nextButton javascriptColor1" onclick=javascriptBasicAlgorithmBtn()>Next</button>`;
        javascriptBasicAlgorithmRemoveValue.innerHTML = "";

    } else if (javascriptBasicAlgorithmRandomValue == 15 && javascriptBasicAlgorithmInputAnswer !== javascriptBasicAlgorithmAnswerArr[15].A15) {
        javascriptBasicAlgorithmDisplayAnswer.innerHTML = `
    <textarea name="text" class="answer_textarea" id="input">
function titleCase(str) {
    return str.toLowerCase().replace(/(^|\s)\S/g, (L) => L.toUpperCase());
}

titleCase("I'm a little tea pot");
        </textarea>`;
        javascriptBasicAlgorithmIncorrectValue.innerHTML = "Incorrect..";
        javascriptBasicAlgorithmNextButton.innerHTML = `<button class="nextButton javascriptColor1" onclick=javascriptBasicAlgorithmBtn()>Next</button>`;
        javascriptBasicAlgorithmRemoveValue.innerHTML = "";



    } else if (javascriptBasicAlgorithmRandomValue == 16 && javascriptBasicAlgorithmInputAnswer == javascriptBasicAlgorithmAnswerArr[16].A16) {
        javascriptBasicAlgorithmCorrectValue.innerHTML = "Correct..";
        javascriptBasicAlgorithmDisplayAnswer.innerHTML = `
        <textarea name="text" class="answer_textarea" id="input">Good Job :) </textarea>`;
        javascriptBasicAlgorithmNextButton.innerHTML = `<button class="nextButton javascriptColor1" onclick=javascriptBasicAlgorithmBtn()>Next</button>`;
        javascriptBasicAlgorithmRemoveValue.innerHTML = "";

    } else if (javascriptBasicAlgorithmRandomValue == 16 && javascriptBasicAlgorithmInputAnswer !== javascriptBasicAlgorithmAnswerArr[16].A16) {
        javascriptBasicAlgorithmDisplayAnswer.innerHTML = `
    <textarea name="text" class="answer_textarea" id="input">
function titleCase(str) {
    var convertToArray = str.toLowerCase().split(" ");
    var result = convertToArray.map(function(val){
        return val.replace(val.charAt(0), val.charAt(0).toUpperCase());
    });
    return result.join(" ");
}

titleCase("I'm a little tea pot");
        </textarea>`;
        javascriptBasicAlgorithmIncorrectValue.innerHTML = "Incorrect..";
        javascriptBasicAlgorithmNextButton.innerHTML = `<button class="nextButton javascriptColor1" onclick=javascriptBasicAlgorithmBtn()>Next</button>`;
        javascriptBasicAlgorithmRemoveValue.innerHTML = "";



    } else if (javascriptBasicAlgorithmRandomValue == 17 && javascriptBasicAlgorithmInputAnswer == javascriptBasicAlgorithmAnswerArr[17].A17) {
        javascriptBasicAlgorithmCorrectValue.innerHTML = "Correct..";
        javascriptBasicAlgorithmDisplayAnswer.innerHTML = `
        <textarea name="text" class="answer_textarea" id="input">Good Job :) </textarea>`;
        javascriptBasicAlgorithmNextButton.innerHTML = `<button class="nextButton javascriptColor1" onclick=javascriptBasicAlgorithmBtn()>Next</button>`;
        javascriptBasicAlgorithmRemoveValue.innerHTML = "";

    } else if (javascriptBasicAlgorithmRandomValue == 17 && javascriptBasicAlgorithmInputAnswer !== javascriptBasicAlgorithmAnswerArr[17].A17) {
        javascriptBasicAlgorithmDisplayAnswer.innerHTML = `
    <textarea name="text" class="answer_textarea" id="input">
String.prototype.replaceAt = function(index, character) {
    return this.substr(0, index) + character + this.substr(index+character.length);
};

function titleCase(str) {
    var newTitle = str.split(' ');
    var updatedTitle = [];
    for (var st in newTitle) {
        updatedTitle[st] = newTitle[st].toLowerCase().replaceAt(0, newTitle[st].charAt(0).toUpperCase());
    }
    return updatedTitle.join(' ');
}
titleCase("I'm a little tea pot");
        </textarea>`;
        javascriptBasicAlgorithmIncorrectValue.innerHTML = "Incorrect..";
        javascriptBasicAlgorithmNextButton.innerHTML = `<button class="nextButton javascriptColor1" onclick=javascriptBasicAlgorithmBtn()>Next</button>`;
        javascriptBasicAlgorithmRemoveValue.innerHTML = "";



    } else if (javascriptBasicAlgorithmRandomValue == 18 && javascriptBasicAlgorithmInputAnswer == javascriptBasicAlgorithmAnswerArr[18].A18) {
        javascriptBasicAlgorithmCorrectValue.innerHTML = "Correct..";
        javascriptBasicAlgorithmDisplayAnswer.innerHTML = `
        <textarea name="text" class="answer_textarea" id="input">Good Job :) </textarea>`;
        javascriptBasicAlgorithmNextButton.innerHTML = `<button class="nextButton javascriptColor1" onclick=javascriptBasicAlgorithmBtn()>Next</button>`;
        javascriptBasicAlgorithmRemoveValue.innerHTML = "";

    } else if (javascriptBasicAlgorithmRandomValue == 18 && javascriptBasicAlgorithmInputAnswer !== javascriptBasicAlgorithmAnswerArr[18].A18) {
        javascriptBasicAlgorithmDisplayAnswer.innerHTML = `
    <textarea name="text" class="answer_textarea" id="input">
function frankenSplice(arr1, arr2, n) {
    let localArray = arr2.slice();
    for (let i = 0; i < arr1.length; i++) {
        localArray.splice(n, 0, arr1[i]);
        n++;
    }
    return localArray;
}

frankenSplice([1, 2, 3], [4, 5, 6], 1);
        </textarea>`;
        javascriptBasicAlgorithmIncorrectValue.innerHTML = "Incorrect..";
        javascriptBasicAlgorithmNextButton.innerHTML = `<button class="nextButton javascriptColor1" onclick=javascriptBasicAlgorithmBtn()>Next</button>`;
        javascriptBasicAlgorithmRemoveValue.innerHTML = "";



    } else if (javascriptBasicAlgorithmRandomValue == 19 && javascriptBasicAlgorithmInputAnswer == javascriptBasicAlgorithmAnswerArr[19].A19) {
        javascriptBasicAlgorithmCorrectValue.innerHTML = "Correct..";
        javascriptBasicAlgorithmDisplayAnswer.innerHTML = `
        <textarea name="text" class="answer_textarea" id="input">Good Job :) </textarea>`;
        javascriptBasicAlgorithmNextButton.innerHTML = `<button class="nextButton javascriptColor1" onclick=javascriptBasicAlgorithmBtn()>Next</button>`;
        javascriptBasicAlgorithmRemoveValue.innerHTML = "";

    } else if (javascriptBasicAlgorithmRandomValue == 19 && javascriptBasicAlgorithmInputAnswer !== javascriptBasicAlgorithmAnswerArr[19].A19) {
        javascriptBasicAlgorithmDisplayAnswer.innerHTML = `
    <textarea name="text" class="answer_textarea" id="input">
function bouncer(arr) {
    return arr.filter(Boolean);
}

bouncer([7, "ate", "", false, 9]);
          </textarea>`;
        javascriptBasicAlgorithmIncorrectValue.innerHTML = "Incorrect..";
        javascriptBasicAlgorithmNextButton.innerHTML = `<button class="nextButton javascriptColor1" onclick=javascriptBasicAlgorithmBtn()>Next</button>`;
        javascriptBasicAlgorithmRemoveValue.innerHTML = "";



    }else if (javascriptBasicAlgorithmRandomValue == 20 && javascriptBasicAlgorithmInputAnswer == javascriptBasicAlgorithmAnswerArr[20].A20) {
        javascriptBasicAlgorithmCorrectValue.innerHTML = "Correct..";
        javascriptBasicAlgorithmDisplayAnswer.innerHTML = `
        <textarea name="text" class="answer_textarea" id="input">Good Job :) </textarea>`;
        javascriptBasicAlgorithmNextButton.innerHTML = `<button class="nextButton javascriptColor1" onclick=javascriptBasicAlgorithmBtn()>Next</button>`;
        javascriptBasicAlgorithmRemoveValue.innerHTML = "";

    } else if (javascriptBasicAlgorithmRandomValue == 20 && javascriptBasicAlgorithmInputAnswer !== javascriptBasicAlgorithmAnswerArr[20].A20) {
        javascriptBasicAlgorithmDisplayAnswer.innerHTML = `
    <textarea name="text" class="answer_textarea" id="input">
function getIndexToIns(arr, num) {

    return arr.concat(num).sort((a,b) => a-b).indexOf(num);

}

getIndexToIns([40, 60], 50);
          </textarea>`;
        javascriptBasicAlgorithmIncorrectValue.innerHTML = "Incorrect..";
        javascriptBasicAlgorithmNextButton.innerHTML = `<button class="nextButton javascriptColor1" onclick=javascriptBasicAlgorithmBtn()>Next</button>`;
        javascriptBasicAlgorithmRemoveValue.innerHTML = "";



    }else if (javascriptBasicAlgorithmRandomValue == 21 && javascriptBasicAlgorithmInputAnswer == javascriptBasicAlgorithmAnswerArr[21].A21) {
        javascriptBasicAlgorithmCorrectValue.innerHTML = "Correct..";
        javascriptBasicAlgorithmDisplayAnswer.innerHTML = `
        <textarea name="text" class="answer_textarea" id="input">Good Job :) </textarea>`;
        javascriptBasicAlgorithmNextButton.innerHTML = `<button class="nextButton javascriptColor1" onclick=javascriptBasicAlgorithmBtn()>Next</button>`;
        javascriptBasicAlgorithmRemoveValue.innerHTML = "";

    } else if (javascriptBasicAlgorithmRandomValue == 21 && javascriptBasicAlgorithmInputAnswer !== javascriptBasicAlgorithmAnswerArr[21].A21) {
        javascriptBasicAlgorithmDisplayAnswer.innerHTML = `
    <textarea name="text" class="answer_textarea" id="input">
function getIndexToIns(arr, num) {
    arr.push(num);
    arr.sort(function(a, b){return a-b});
    return arr.indexOf(num);
}

getIndexToIns([40, 60], 50);
          </textarea>`;
        javascriptBasicAlgorithmIncorrectValue.innerHTML = "Incorrect..";
        javascriptBasicAlgorithmNextButton.innerHTML = `<button class="nextButton javascriptColor1" onclick=javascriptBasicAlgorithmBtn()>Next</button>`;
        javascriptBasicAlgorithmRemoveValue.innerHTML = "";



    }else if (javascriptBasicAlgorithmRandomValue == 22 && javascriptBasicAlgorithmInputAnswer == javascriptBasicAlgorithmAnswerArr[22].A22) {
        javascriptBasicAlgorithmCorrectValue.innerHTML = "Correct..";
        javascriptBasicAlgorithmDisplayAnswer.innerHTML = `
        <textarea name="text" class="answer_textarea" id="input">Good Job :) </textarea>`;
        javascriptBasicAlgorithmNextButton.innerHTML = `<button class="nextButton javascriptColor1" onclick=javascriptBasicAlgorithmBtn()>Next</button>`;
        javascriptBasicAlgorithmRemoveValue.innerHTML = "";

    } else if (javascriptBasicAlgorithmRandomValue == 22 && javascriptBasicAlgorithmInputAnswer !== javascriptBasicAlgorithmAnswerArr[22].A22) {
        javascriptBasicAlgorithmDisplayAnswer.innerHTML = `
    <textarea name="text" class="answer_textarea" id="input">
function getIndexToIns(arr, num) {
    var times = arr.length; 
    var count = 0; 
    for (var i=0;i<times;i++){
        if(num>arr[i]){count++;} 
    }
        return count; 
}

getIndexToIns([40, 60], 50);
          </textarea>`;
        javascriptBasicAlgorithmIncorrectValue.innerHTML = "Incorrect..";
        javascriptBasicAlgorithmNextButton.innerHTML = `<button class="nextButton javascriptColor1" onclick=javascriptBasicAlgorithmBtn()>Next</button>`;
        javascriptBasicAlgorithmRemoveValue.innerHTML = "";



    }else if (javascriptBasicAlgorithmRandomValue == 23 && javascriptBasicAlgorithmInputAnswer == javascriptBasicAlgorithmAnswerArr[23].A23) {
        javascriptBasicAlgorithmCorrectValue.innerHTML = "Correct..";
        javascriptBasicAlgorithmDisplayAnswer.innerHTML = `
        <textarea name="text" class="answer_textarea" id="input">Good Job :) </textarea>`;
        javascriptBasicAlgorithmNextButton.innerHTML = `<button class="nextButton javascriptColor1" onclick=javascriptBasicAlgorithmBtn()>Next</button>`;
        javascriptBasicAlgorithmRemoveValue.innerHTML = "";

    } else if (javascriptBasicAlgorithmRandomValue == 23 && javascriptBasicAlgorithmInputAnswer !== javascriptBasicAlgorithmAnswerArr[23].A23) {
        javascriptBasicAlgorithmDisplayAnswer.innerHTML = `
    <textarea name="text" class="answer_textarea" id="input">
function mutation(arr) {
    var test = arr[1].toLowerCase();
    var target = arr[0].toLowerCase();
    for (var i=0;i<test.length;i++) {
        if (target.indexOf(test[i]) < 0)
        return false;
    }
    return true;
}

mutation(["hello", "hey"]);
          </textarea>`;
        javascriptBasicAlgorithmIncorrectValue.innerHTML = "Incorrect..";
        javascriptBasicAlgorithmNextButton.innerHTML = `<button class="nextButton javascriptColor1" onclick=javascriptBasicAlgorithmBtn()>Next</button>`;
        javascriptBasicAlgorithmRemoveValue.innerHTML = "";



    }else if (javascriptBasicAlgorithmRandomValue == 24 && javascriptBasicAlgorithmInputAnswer == javascriptBasicAlgorithmAnswerArr[24].A24) {
        javascriptBasicAlgorithmCorrectValue.innerHTML = "Correct..";
        javascriptBasicAlgorithmDisplayAnswer.innerHTML = `
        <textarea name="text" class="answer_textarea" id="input">Good Job :) </textarea>`;
        javascriptBasicAlgorithmNextButton.innerHTML = `<button class="nextButton javascriptColor1" onclick=javascriptBasicAlgorithmBtn()>Next</button>`;
        javascriptBasicAlgorithmRemoveValue.innerHTML = "";

    } else if (javascriptBasicAlgorithmRandomValue == 24 && javascriptBasicAlgorithmInputAnswer !== javascriptBasicAlgorithmAnswerArr[24].A24) {
        javascriptBasicAlgorithmDisplayAnswer.innerHTML = `
    <textarea name="text" class="answer_textarea" id="input">
function mutation(arr) {
    return arr[1].toLowerCase()
        .split('')
        .every(function(letter) {
        return arr[0].toLowerCase()
            .indexOf(letter) != -1;
        });
}

mutation(["hello", "hey"]);
          </textarea>`;
        javascriptBasicAlgorithmIncorrectValue.innerHTML = "Incorrect..";
        javascriptBasicAlgorithmNextButton.innerHTML = `<button class="nextButton javascriptColor1" onclick=javascriptBasicAlgorithmBtn()>Next</button>`;
        javascriptBasicAlgorithmRemoveValue.innerHTML = "";



    }else if (javascriptBasicAlgorithmRandomValue == 25 && javascriptBasicAlgorithmInputAnswer == javascriptBasicAlgorithmAnswerArr[25].A25) {
        javascriptBasicAlgorithmCorrectValue.innerHTML = "Correct..";
        javascriptBasicAlgorithmDisplayAnswer.innerHTML = `
        <textarea name="text" class="answer_textarea" id="input">Good Job :) </textarea>`;
        javascriptBasicAlgorithmNextButton.innerHTML = `<button class="nextButton javascriptColor1" onclick=javascriptBasicAlgorithmBtn()>Next</button>`;
        javascriptBasicAlgorithmRemoveValue.innerHTML = "";

    } else if (javascriptBasicAlgorithmRandomValue == 25 && javascriptBasicAlgorithmInputAnswer !== javascriptBasicAlgorithmAnswerArr[25].A25) {
        javascriptBasicAlgorithmDisplayAnswer.innerHTML = `
    <textarea name="text" class="answer_textarea" id="input">
function chunkArrayInGroups(arr, size) {
    if (arr.length <= size){
        return [arr];
    }
    else {
        return [arr.slice(0,size)].concat(chunkArrayInGroups(arr.slice(size),size));
    }
}

chunkArrayInGroups(["a", "b", "c", "d"], 2);
          </textarea>`;
        javascriptBasicAlgorithmIncorrectValue.innerHTML = "Incorrect..";
        javascriptBasicAlgorithmNextButton.innerHTML = `<button class="nextButton javascriptColor1" onclick=javascriptBasicAlgorithmBtn()>Next</button>`;
        javascriptBasicAlgorithmRemoveValue.innerHTML = "";



    }else if (javascriptBasicAlgorithmRandomValue == 26 && javascriptBasicAlgorithmInputAnswer == javascriptBasicAlgorithmAnswerArr[26].A26) {
        javascriptBasicAlgorithmCorrectValue.innerHTML = "Correct..";
        javascriptBasicAlgorithmDisplayAnswer.innerHTML = `
        <textarea name="text" class="answer_textarea" id="input">Good Job :) </textarea>`;
        javascriptBasicAlgorithmNextButton.innerHTML = `<button class="nextButton javascriptColor1" onclick=javascriptBasicAlgorithmBtn()>Next</button>`;
        javascriptBasicAlgorithmRemoveValue.innerHTML = "";

    } else if (javascriptBasicAlgorithmRandomValue == 26 && javascriptBasicAlgorithmInputAnswer !== javascriptBasicAlgorithmAnswerArr[26].A26) {
        javascriptBasicAlgorithmDisplayAnswer.innerHTML = `
    <textarea name="text" class="answer_textarea" id="input">
function chunkArrayInGroups(arr, size) {
    var newArr = [];
    while (arr.length) {
        newArr.push(arr.splice(0,size));
    }
    return newArr;
}
chunkArrayInGroups(["a", "b", "c", "d"], 2);
          </textarea>`;
        javascriptBasicAlgorithmIncorrectValue.innerHTML = "Incorrect..";
        javascriptBasicAlgorithmNextButton.innerHTML = `<button class="nextButton javascriptColor1" onclick=javascriptBasicAlgorithmBtn()>Next</button>`;
        javascriptBasicAlgorithmRemoveValue.innerHTML = "";



    }else if (javascriptBasicAlgorithmRandomValue == 27 && javascriptBasicAlgorithmInputAnswer == javascriptBasicAlgorithmAnswerArr[27].A27) {
        javascriptBasicAlgorithmCorrectValue.innerHTML = "Correct..";
        javascriptBasicAlgorithmDisplayAnswer.innerHTML = `
        <textarea name="text" class="answer_textarea" id="input">Good Job :) </textarea>`;
        javascriptBasicAlgorithmNextButton.innerHTML = `<button class="nextButton javascriptColor1" onclick=javascriptBasicAlgorithmBtn()>Next</button>`;
        javascriptBasicAlgorithmRemoveValue.innerHTML = "";

    } else if (javascriptBasicAlgorithmRandomValue == 27 && javascriptBasicAlgorithmInputAnswer !== javascriptBasicAlgorithmAnswerArr[27].A27) {
        javascriptBasicAlgorithmDisplayAnswer.innerHTML = `
    <textarea name="text" class="answer_textarea" id="input">
function chunkArrayInGroups(arr, size) {
    var arr2 = [];
    for (var i = 0; i < arr.length; i+=size) {
        arr2.push(arr.slice(i , i+size));
    }
    return arr2;
}
chunkArrayInGroups(["a", "b", "c", "d"], 2);
          </textarea>`;
        javascriptBasicAlgorithmIncorrectValue.innerHTML = "Incorrect..";
        javascriptBasicAlgorithmNextButton.innerHTML = `<button class="nextButton javascriptColor1" onclick=javascriptBasicAlgorithmBtn()>Next</button>`;
        javascriptBasicAlgorithmRemoveValue.innerHTML = "";



    }else if (javascriptBasicAlgorithmRandomValue == 28 && javascriptBasicAlgorithmInputAnswer == javascriptBasicAlgorithmAnswerArr[28].A28) {
        javascriptBasicAlgorithmCorrectValue.innerHTML = "Correct..";
        javascriptBasicAlgorithmDisplayAnswer.innerHTML = `
        <textarea name="text" class="answer_textarea" id="input">Good Job :) </textarea>`;
        javascriptBasicAlgorithmNextButton.innerHTML = `<button class="nextButton javascriptColor1" onclick=javascriptBasicAlgorithmBtn()>Next</button>`;
        javascriptBasicAlgorithmRemoveValue.innerHTML = "";

    } else if (javascriptBasicAlgorithmRandomValue == 28 && javascriptBasicAlgorithmInputAnswer !== javascriptBasicAlgorithmAnswerArr[28].A28) {
        javascriptBasicAlgorithmDisplayAnswer.innerHTML = `
    <textarea name="text" class="answer_textarea" id="input">
function chunkArrayInGroups(arr, size) {

    var temp = [];
    var result = [];

    for (var a = 0; a < arr.length; a++) {
        if (a % size !== size - 1)
        temp.push(arr[a]);
        else {
        temp.push(arr[a]);
        result.push(temp);
        temp = [];
        }
    }

    if (temp.length !== 0)
        result.push(temp);
return result;
}
chunkArrayInGroups(["a", "b", "c", "d"], 2);
          </textarea>`;
        javascriptBasicAlgorithmIncorrectValue.innerHTML = "Incorrect..";
        javascriptBasicAlgorithmNextButton.innerHTML = `<button class="nextButton javascriptColor1" onclick=javascriptBasicAlgorithmBtn()>Next</button>`;
        javascriptBasicAlgorithmRemoveValue.innerHTML = "";



    }else {
        javascriptBasicAlgorithmIncorrectValue.innerHTML = "Incorrect..";
        javascriptBasicAlgorithmNextButton.innerHTML = `<button class="nextButton javascriptColor1" onclick=javascriptBasicAlgorithmBtn()>Next</button>`;
        javascriptBasicAlgorithmRemoveValue.innerHTML = "";
    }

}
window.javascriptBasicAlgorithmSubmit = javascriptBasicAlgorithmSubmit; /* to make submit global*/

function javascriptBasicAlgorithmButton() {
    javascriptBasicAlgorithmTest = document.getElementById("javascriptBasicAlgorithmAddedQuestion").innerHTML = javascriptBasicAlgorithmQuestionArr[javascriptBasicAlgorithmRandomValue]; /* giving random question to html */

    return javascriptBasicAlgorithmTest;
}
window.javascriptBasicAlgorithmButton = javascriptBasicAlgorithmButton;

function javascriptBasicAlgorithmShowTest() {
    var javascriptBasicAlgorithmInputBox = document.getElementById("javascriptBasicAlgorithmRemove").style.display = "block";
    return javascriptBasicAlgorithmInputBox;
}
window.javascriptBasicAlgorithmShowTest = javascriptBasicAlgorithmShowTest;

function javascriptBasicAlgorithmBtn() {
    javascriptBasicAlgorithmRandomValue = Math.floor(Math.random() * javascriptBasicAlgorithmQuestionArr.length); /* buton next in html to make a next random question*/
    document.getElementById("javascriptBasicAlgorithmAddedQuestion").innerHTML = javascriptBasicAlgorithmQuestionArr[javascriptBasicAlgorithmRandomValue]; /* giving random question to html */
    document.getElementById("javascriptBasicAlgorithmElementButton").innerHTML = "";/* to clean javascriptBasicAlgorithmElementButton*/
    document.getElementById("javascriptBasicAlgorithmRemove").innerHTML = `<textarea name="text" class="answer_textarea" id="input"></textarea></br>
      <button class="answer_submit javascriptColor1" id = "javascriptBasicAlgorithmStartButton" onclick="javascriptBasicAlgorithmSubmit()">Submit</button>`;/* to create next text area and Submit button. */
    document.getElementById("javascriptBasicAlgorithmCheckingAnswer").innerHTML = "";
    document.getElementById("javascriptBasicAlgorithmShowingAnswer").innerHTML = "";
}
window.javascriptBasicAlgorithmBtn = javascriptBasicAlgorithmBtn;/* to make submit global*/







































var javascriptObjOrientProgRandomValue = Math.floor(Math.random() * javascriptObjOrientProgQuestionArr.length); /* taking random question from htmlQuestionArr*/


function javascriptObjOrientProgSubmit() { /* function for html submit button*/

    var javascriptObjOrientProgInputAnswer = input.value.replace(/\s+/g, ``); /*replace(/\s+/g, `` is removing all spaces. Avoid checking all the spaces to compare text*/
    var javascriptObjOrientProgCorrectValue = document.getElementById("javascriptObjOrientProgCheckingAnswer"); /* making getElementById code shorter*/
    var javascriptObjOrientProgIncorrectValue = document.getElementById("javascriptObjOrientProgCheckingAnswer");
    var javascriptObjOrientProgDisplayAnswer = document.getElementById("javascriptObjOrientProgShowingAnswer");
    var javascriptObjOrientProgNextButton = document.getElementById("javascriptObjOrientProgElementButton");
    var javascriptObjOrientProgRemoveValue = document.getElementById("javascriptObjOrientProgRemove");

    if (javascriptObjOrientProgRandomValue == 0 && javascriptObjOrientProgInputAnswer == javascriptObjOrientProgAnswerArr[0].A0) { /* checking if javascriptObjOrientProgRandomValue is 0 and if putting answer the same as javascriptObjOrientProgAnswerArr*//*A0 is just that I can track answer numbers when adding questions and answers*/
        javascriptObjOrientProgCorrectValue.innerHTML = "Correct..";
        javascriptObjOrientProgDisplayAnswer.innerHTML = `
        <textarea name="text" class="answer_textarea" id="input">Good Job :) </textarea>`;
        javascriptObjOrientProgNextButton.innerHTML = `<button class="nextButton javascriptColor1" onclick=javascriptObjOrientProgBtn()>Next</button>`; /* creating next button with javascriptObjOrientProgBtn()function*/
        javascriptObjOrientProgRemoveValue.innerHTML = "";/* removing in html answer*/



    } else if (javascriptObjOrientProgRandomValue == 0 && javascriptObjOrientProgInputAnswer !== javascriptObjOrientProgAnswerArr[0].A0) {/*  if random value not == then giving then display the answere.*/
        javascriptObjOrientProgDisplayAnswer.innerHTML = `
    <textarea name="text" class="answer_textarea" id="input">
let dog = {
    name: "George",
    numLegs: 4
};
        </textarea>`;
        javascriptObjOrientProgIncorrectValue.innerHTML = "Incorrect..";
        javascriptObjOrientProgNextButton.innerHTML = `<button class="nextButton javascriptColor1" onclick=javascriptObjOrientProgBtn()>Next</button>`;
        javascriptObjOrientProgRemoveValue.innerHTML = "";



    } else if (javascriptObjOrientProgRandomValue == 1 && javascriptObjOrientProgInputAnswer == javascriptObjOrientProgAnswerArr[1].A1) {
        javascriptObjOrientProgCorrectValue.innerHTML = "Correct..";
        javascriptObjOrientProgDisplayAnswer.innerHTML = `
        <textarea name="text" class="answer_textarea" id="input">Good Job :) </textarea>`;
        javascriptObjOrientProgNextButton.innerHTML = `<button class="nextButton javascriptColor1" onclick=javascriptObjOrientProgBtn()>Next</button>`;
        javascriptObjOrientProgRemoveValue.innerHTML = "";

    } else if (javascriptObjOrientProgRandomValue == 1 && javascriptObjOrientProgInputAnswer !== javascriptObjOrientProgAnswerArr[1].A1) {
        javascriptObjOrientProgDisplayAnswer.innerHTML = `
        <textarea name="text" class="answer_textarea" id="input">
let dog = {
    name: "Spot",
    numLegs: 4
};
console.log(dog.name);
console.log(dog.numLegs);
          </textarea>`;
        javascriptObjOrientProgIncorrectValue.innerHTML = "Incorrect..";
        javascriptObjOrientProgNextButton.innerHTML = `<button class="nextButton javascriptColor1" onclick=javascriptObjOrientProgBtn()>Next</button>`;
        javascriptObjOrientProgRemoveValue.innerHTML = "";



    } else if (javascriptObjOrientProgRandomValue == 2 && javascriptObjOrientProgInputAnswer == javascriptObjOrientProgAnswerArr[2].A2) {
        javascriptObjOrientProgCorrectValue.innerHTML = "Correct..";
        javascriptObjOrientProgDisplayAnswer.innerHTML = `
        <textarea name="text" class="answer_textarea" id="input">Good Job :) </textarea>`;
        javascriptObjOrientProgNextButton.innerHTML = `<button class="nextButton javascriptColor1" onclick=javascriptObjOrientProgBtn()>Next</button>`;
        javascriptObjOrientProgRemoveValue.innerHTML = "";

    } else if (javascriptObjOrientProgRandomValue == 2 && javascriptObjOrientProgInputAnswer !== javascriptObjOrientProgAnswerArr[2].A2) {
        javascriptObjOrientProgDisplayAnswer.innerHTML = `
    <textarea name="text" class="answer_textarea" id="input">
let dog = {
    name: "Spot",
    numLegs: 4,
    sayLegs: function() {
        return "This dog has " + dog.numLegs + " legs.";
    }
};

dog.sayLegs();
          </textarea>`;
        javascriptObjOrientProgIncorrectValue.innerHTML = "Incorrect..";
        javascriptObjOrientProgNextButton.innerHTML = `<button class="nextButton javascriptColor1" onclick=javascriptObjOrientProgBtn()>Next</button>`;
        javascriptObjOrientProgRemoveValue.innerHTML = "";



    } else if (javascriptObjOrientProgRandomValue == 3 && javascriptObjOrientProgInputAnswer == javascriptObjOrientProgAnswerArr[3].A3) {
        javascriptObjOrientProgCorrectValue.innerHTML = "Correct..";
        javascriptObjOrientProgDisplayAnswer.innerHTML = `
        <textarea name="text" class="answer_textarea" id="input">Good Job :) </textarea>`;
        javascriptObjOrientProgNextButton.innerHTML = `<button class="nextButton javascriptColor1" onclick=javascriptObjOrientProgBtn()>Next</button>`;
        javascriptObjOrientProgRemoveValue.innerHTML = "";

    } else if (javascriptObjOrientProgRandomValue == 3 && javascriptObjOrientProgInputAnswer !== javascriptObjOrientProgAnswerArr[3].A3) {
        javascriptObjOrientProgDisplayAnswer.innerHTML = `
    <textarea name="text" class="answer_textarea" id="input">
let dog = {
    name: "Spot",
    numLegs: 4,
    sayLegs: function() {return "This dog has " + this.numLegs + " legs.";}
};

dog.sayLegs();
        </textarea>`;
        javascriptObjOrientProgIncorrectValue.innerHTML = "Incorrect..";
        javascriptObjOrientProgNextButton.innerHTML = `<button class="nextButton javascriptColor1" onclick=javascriptObjOrientProgBtn()>Next</button>`;
        javascriptObjOrientProgRemoveValue.innerHTML = "";
        


    } else if (javascriptObjOrientProgRandomValue == 4 && javascriptObjOrientProgInputAnswer == javascriptObjOrientProgAnswerArr[4].A4) {
        javascriptObjOrientProgCorrectValue.innerHTML = "Correct..";
        javascriptObjOrientProgDisplayAnswer.innerHTML = `
        <textarea name="text" class="answer_textarea" id="input">Good Job :) </textarea>`;
        javascriptObjOrientProgNextButton.innerHTML = `<button class="nextButton javascriptColor1" onclick=javascriptObjOrientProgBtn()>Next</button>`;
        javascriptObjOrientProgRemoveValue.innerHTML = "";

    } else if (javascriptObjOrientProgRandomValue == 4 && javascriptObjOrientProgInputAnswer !== javascriptObjOrientProgAnswerArr[4].A4) {
        javascriptObjOrientProgDisplayAnswer.innerHTML = `
    <textarea name="text" class="answer_textarea" id="input">
function Dog() {
    this.name = "Geogre",
    this.color = "White",
    this.numLegs = 4;
}
        </textarea>`;
        javascriptObjOrientProgIncorrectValue.innerHTML = "Incorrect..";
        javascriptObjOrientProgNextButton.innerHTML = `<button class="nextButton javascriptColor1" onclick=javascriptObjOrientProgBtn()>Next</button>`;
        javascriptObjOrientProgRemoveValue.innerHTML = "";



    } else if (javascriptObjOrientProgRandomValue == 5 && javascriptObjOrientProgInputAnswer == javascriptObjOrientProgAnswerArr[5].A5) {
        javascriptObjOrientProgCorrectValue.innerHTML = "Correct..";
        javascriptObjOrientProgDisplayAnswer.innerHTML = `
        <textarea name="text" class="answer_textarea" id="input">Good Job :) </textarea>`;
        javascriptObjOrientProgNextButton.innerHTML = `<button class="nextButton javascriptColor1" onclick=javascriptObjOrientProgBtn()>Next</button>`;
        javascriptObjOrientProgRemoveValue.innerHTML = "";

    } else if (javascriptObjOrientProgRandomValue == 5 && javascriptObjOrientProgInputAnswer !== javascriptObjOrientProgAnswerArr[5].A5) {
        javascriptObjOrientProgDisplayAnswer.innerHTML = `
    <textarea name="text" class="answer_textarea" id="input">
function Dog() {
    this.name = "Rupert";
    this.color = "brown";
    this.numLegs = 4;
}
let hound = new Dog();
        </textarea>`;
        javascriptObjOrientProgIncorrectValue.innerHTML = "Incorrect..";
        javascriptObjOrientProgNextButton.innerHTML = `<button class="nextButton javascriptColor1" onclick=javascriptObjOrientProgBtn()>Next</button>`;
        javascriptObjOrientProgRemoveValue.innerHTML = "";



    } else if (javascriptObjOrientProgRandomValue == 6 && javascriptObjOrientProgInputAnswer == javascriptObjOrientProgAnswerArr[6].A6) {
        javascriptObjOrientProgCorrectValue.innerHTML = "Correct..";
        javascriptObjOrientProgDisplayAnswer.innerHTML = `
        <textarea name="text" class="answer_textarea" id="input">Good Job :) </textarea>`;
        javascriptObjOrientProgNextButton.innerHTML = `<button class="nextButton javascriptColor1" onclick=javascriptObjOrientProgBtn()>Next</button>`;
        javascriptObjOrientProgRemoveValue.innerHTML = "";

    } else if (javascriptObjOrientProgRandomValue == 6 && javascriptObjOrientProgInputAnswer !== javascriptObjOrientProgAnswerArr[6].A6) {
        javascriptObjOrientProgDisplayAnswer.innerHTML = `
    <textarea name="text" class="answer_textarea" id="input">
function Dog(name, color) {
    this.name = name;
    this.color = color;
    this.numLegs = 4;
}
let terrier = new Dog("George","White");
        </textarea>`;
        javascriptObjOrientProgIncorrectValue.innerHTML = "Incorrect..";
        javascriptObjOrientProgNextButton.innerHTML = `<button class="nextButton javascriptColor1" onclick=javascriptObjOrientProgBtn()>Next</button>`;
        javascriptObjOrientProgRemoveValue.innerHTML = "";



    } else if (javascriptObjOrientProgRandomValue == 7 && javascriptObjOrientProgInputAnswer == javascriptObjOrientProgAnswerArr[7].A7) {
        javascriptObjOrientProgCorrectValue.innerHTML = "Correct..";
        javascriptObjOrientProgDisplayAnswer.innerHTML = `
        <textarea name="text" class="answer_textarea" id="input">Good Job :) </textarea>`;
        javascriptObjOrientProgNextButton.innerHTML = `<button class="nextButton javascriptColor1" onclick=javascriptObjOrientProgBtn()>Next</button>`;
        javascriptObjOrientProgRemoveValue.innerHTML = "";

    } else if (javascriptObjOrientProgRandomValue == 7 && javascriptObjOrientProgInputAnswer !== javascriptObjOrientProgAnswerArr[7].A7) {
        javascriptObjOrientProgDisplayAnswer.innerHTML = `
    <textarea name="text" class="answer_textarea" id="input">
function House(numBedrooms) {
    this.numBedrooms = numBedrooms;
}
let myHouse = new House(5);
myHouse instanceof House;
        </textarea>`;
        javascriptObjOrientProgIncorrectValue.innerHTML = "Incorrect..";
        javascriptObjOrientProgNextButton.innerHTML = `<button class="nextButton javascriptColor1" onclick=javascriptObjOrientProgBtn()>Next</button>`;
        javascriptObjOrientProgRemoveValue.innerHTML = "";



    } else if (javascriptObjOrientProgRandomValue == 8 && javascriptObjOrientProgInputAnswer == javascriptObjOrientProgAnswerArr[8].A8) {
        javascriptObjOrientProgCorrectValue.innerHTML = "Correct..";
        javascriptObjOrientProgDisplayAnswer.innerHTML = `
        <textarea name="text" class="answer_textarea" id="input">Good Job :) </textarea>`;
        javascriptObjOrientProgNextButton.innerHTML = `<button class="nextButton javascriptColor1" onclick=javascriptObjOrientProgBtn()>Next</button>`;
        javascriptObjOrientProgRemoveValue.innerHTML = "";

    } else if (javascriptObjOrientProgRandomValue == 8 && javascriptObjOrientProgInputAnswer !== javascriptObjOrientProgAnswerArr[8].A8) {
        javascriptObjOrientProgDisplayAnswer.innerHTML = `
    <textarea name="text" class="answer_textarea" id="input">
function Bird(name) {
    this.name = name;
    this.numLegs = 2;
    }
    let canary = new Bird("Tweety");
    let ownProps = [];
    for(let property in canary) {
    if(canary.hasOwnProperty(property)) {
        ownProps.push(property);
    }
}
        </textarea>`;
        javascriptObjOrientProgIncorrectValue.innerHTML = "Incorrect..";
        javascriptObjOrientProgNextButton.innerHTML = `<button class="nextButton javascriptColor1" onclick=javascriptObjOrientProgBtn()>Next</button>`;
        javascriptObjOrientProgRemoveValue.innerHTML = "";



    } else if (javascriptObjOrientProgRandomValue == 9 && javascriptObjOrientProgInputAnswer == javascriptObjOrientProgAnswerArr[9].A9) {
        javascriptObjOrientProgCorrectValue.innerHTML = "Correct..";
        javascriptObjOrientProgDisplayAnswer.innerHTML = `
        <textarea name="text" class="answer_textarea" id="input">Good Job :) </textarea>`;
        javascriptObjOrientProgNextButton.innerHTML = `<button class="nextButton javascriptColor1" onclick=javascriptObjOrientProgBtn()>Next</button>`;
        javascriptObjOrientProgRemoveValue.innerHTML = "";

    } else if (javascriptObjOrientProgRandomValue == 9 && javascriptObjOrientProgInputAnswer !== javascriptObjOrientProgAnswerArr[9].A9) {
        javascriptObjOrientProgDisplayAnswer.innerHTML = `
    <textarea name="text" class="answer_textarea" id="input">
function Dog(name) {
    this.name = name;
}

Dog.prototype.numLegs = 4;

let beagle = new Dog("Snoopy"); 
        </textarea>`;
        javascriptObjOrientProgIncorrectValue.innerHTML = "Incorrect..";
        javascriptObjOrientProgNextButton.innerHTML = `<button class="nextButton javascriptColor1" onclick=javascriptObjOrientProgBtn()>Next</button>`;
        javascriptObjOrientProgRemoveValue.innerHTML = "";



    } else if (javascriptObjOrientProgRandomValue == 10 && javascriptObjOrientProgInputAnswer == javascriptObjOrientProgAnswerArr[10].A10) {
        javascriptObjOrientProgCorrectValue.innerHTML = "Correct..";
        javascriptObjOrientProgDisplayAnswer.innerHTML = `
        <textarea name="text" class="answer_textarea" id="input">Good Job :) </textarea>`;
        javascriptObjOrientProgNextButton.innerHTML = `<button class="nextButton javascriptColor1" onclick=javascriptObjOrientProgBtn()>Next</button>`;
        javascriptObjOrientProgRemoveValue.innerHTML = "";

    } else if (javascriptObjOrientProgRandomValue == 10 && javascriptObjOrientProgInputAnswer !== javascriptObjOrientProgAnswerArr[10].A10) {
        javascriptObjOrientProgDisplayAnswer.innerHTML = `
    <textarea name="text" class="answer_textarea" id="input">
function Dog(name) {
    this.name = name;
}

Dog.prototype.numLegs = 4;

let beagle = new Dog("Snoopy");

let ownProps = [];
let prototypeProps = [];

for (let property in beagle) {
    if(Dog.hasOwnProperty(property)) {
        ownProps.push(property)
    }
    else {
        prototypeProps.push(property)
    }
}
        </textarea>`;
        javascriptObjOrientProgIncorrectValue.innerHTML = "Incorrect..";
        javascriptObjOrientProgNextButton.innerHTML = `<button class="nextButton javascriptColor1" onclick=javascriptObjOrientProgBtn()>Next</button>`;
        javascriptObjOrientProgRemoveValue.innerHTML = "";



    } else if (javascriptObjOrientProgRandomValue == 11 && javascriptObjOrientProgInputAnswer == javascriptObjOrientProgAnswerArr[11].A11) {
        javascriptObjOrientProgCorrectValue.innerHTML = "Correct..";
        javascriptObjOrientProgDisplayAnswer.innerHTML = `
        <textarea name="text" class="answer_textarea" id="input">Good Job :) </textarea>`;
        javascriptObjOrientProgNextButton.innerHTML = `<button class="nextButton javascriptColor1" onclick=javascriptObjOrientProgBtn()>Next</button>`;
        javascriptObjOrientProgRemoveValue.innerHTML = "";

    } else if (javascriptObjOrientProgRandomValue == 11 && javascriptObjOrientProgInputAnswer !== javascriptObjOrientProgAnswerArr[11].A11) {
        javascriptObjOrientProgDisplayAnswer.innerHTML = `
    <textarea name="text" class="answer_textarea" id="input">
function Dog(name) {
    this.name = name;
    }
    function joinDogFraternity(candidate) {
    if(candidate.constructor === Dog) {
        return true;
    }
    else {
        return false;
    }
}
        </textarea>`;
        javascriptObjOrientProgIncorrectValue.innerHTML = "Incorrect..";
        javascriptObjOrientProgNextButton.innerHTML = `<button class="nextButton javascriptColor1" onclick=javascriptObjOrientProgBtn()>Next</button>`;
        javascriptObjOrientProgRemoveValue.innerHTML = "";



    } else if (javascriptObjOrientProgRandomValue == 12 && javascriptObjOrientProgInputAnswer == javascriptObjOrientProgAnswerArr[12].A12) {
        javascriptObjOrientProgCorrectValue.innerHTML = "Correct..";
        javascriptObjOrientProgDisplayAnswer.innerHTML = `
        <textarea name="text" class="answer_textarea" id="input">Good Job :) </textarea>`;
        javascriptObjOrientProgNextButton.innerHTML = `<button class="nextButton javascriptColor1" onclick=javascriptObjOrientProgBtn()>Next</button>`;
        javascriptObjOrientProgRemoveValue.innerHTML = "";

    } else if (javascriptObjOrientProgRandomValue == 12 && javascriptObjOrientProgInputAnswer !== javascriptObjOrientProgAnswerArr[12].A12) {
        javascriptObjOrientProgDisplayAnswer.innerHTML = `
    <textarea name="text" class="answer_textarea" id="input">
function Dog(name) {
    this.name = name; 
    }

    Dog.prototype = {
    numLegs: 2,
    eat(){
        console.log('nom nom nom');
    },
    describe(){
        console.log("My name is " + this.name);
    }
};
        </textarea>`;
        javascriptObjOrientProgIncorrectValue.innerHTML = "Incorrect..";
        javascriptObjOrientProgNextButton.innerHTML = `<button class="nextButton javascriptColor1" onclick=javascriptObjOrientProgBtn()>Next</button>`;
        javascriptObjOrientProgRemoveValue.innerHTML = "";



    } else if (javascriptObjOrientProgRandomValue == 13 && javascriptObjOrientProgInputAnswer == javascriptObjOrientProgAnswerArr[13].A13) {
        javascriptObjOrientProgCorrectValue.innerHTML = "Correct..";
        javascriptObjOrientProgDisplayAnswer.innerHTML = `
        <textarea name="text" class="answer_textarea" id="input">Good Job :) </textarea>`;
        javascriptObjOrientProgNextButton.innerHTML = `<button class="nextButton javascriptColor1" onclick=javascriptObjOrientProgBtn()>Next</button>`;
        javascriptObjOrientProgRemoveValue.innerHTML = "";

    } else if (javascriptObjOrientProgRandomValue == 13 && javascriptObjOrientProgInputAnswer !== javascriptObjOrientProgAnswerArr[13].A13) {
        javascriptObjOrientProgDisplayAnswer.innerHTML = `
    <textarea name="text" class="answer_textarea" id="input">
function Dog(name) {
    this.name = name; 
    }
    Dog.prototype = {

    constructor: Dog, 

    numLegs: 2, 
    eat: function() {
        console.log("nom nom nom"); 
    }, 
    describe: function() {
        console.log("My name is " + this.name); 
    }
};
        </textarea>`;
        javascriptObjOrientProgIncorrectValue.innerHTML = "Incorrect..";
        javascriptObjOrientProgNextButton.innerHTML = `<button class="nextButton javascriptColor1" onclick=javascriptObjOrientProgBtn()>Next</button>`;
        javascriptObjOrientProgRemoveValue.innerHTML = "";



    } else if (javascriptObjOrientProgRandomValue == 14 && javascriptObjOrientProgInputAnswer == javascriptObjOrientProgAnswerArr[14].A14) {
        javascriptObjOrientProgCorrectValue.innerHTML = "Correct..";
        javascriptObjOrientProgDisplayAnswer.innerHTML = `
        <textarea name="text" class="answer_textarea" id="input">Good Job :) </textarea>`;
        javascriptObjOrientProgNextButton.innerHTML = `<button class="nextButton javascriptColor1" onclick=javascriptObjOrientProgBtn()>Next</button>`;
        javascriptObjOrientProgRemoveValue.innerHTML = "";

    } else if (javascriptObjOrientProgRandomValue == 14 && javascriptObjOrientProgInputAnswer !== javascriptObjOrientProgAnswerArr[14].A14) {
        javascriptObjOrientProgDisplayAnswer.innerHTML = `
    <textarea name="text" class="answer_textarea" id="input">
function Dog(name) {
    this.name = name;
}
let beagle = new Dog("Snoopy");
Dog.prototype.isPrototypeOf(beagle);
        </textarea>`;
        javascriptObjOrientProgIncorrectValue.innerHTML = "Incorrect..";
        javascriptObjOrientProgNextButton.innerHTML = `<button class="nextButton javascriptColor1" onclick=javascriptObjOrientProgBtn()>Next</button>`;
        javascriptObjOrientProgRemoveValue.innerHTML = "";



    } else if (javascriptObjOrientProgRandomValue == 15 && javascriptObjOrientProgInputAnswer == javascriptObjOrientProgAnswerArr[15].A15) {
        javascriptObjOrientProgCorrectValue.innerHTML = "Correct..";
        javascriptObjOrientProgDisplayAnswer.innerHTML = `
        <textarea name="text" class="answer_textarea" id="input">Good Job :) </textarea>`;
        javascriptObjOrientProgNextButton.innerHTML = `<button class="nextButton javascriptColor1" onclick=javascriptObjOrientProgBtn()>Next</button>`;
        javascriptObjOrientProgRemoveValue.innerHTML = "";

    } else if (javascriptObjOrientProgRandomValue == 15 && javascriptObjOrientProgInputAnswer !== javascriptObjOrientProgAnswerArr[15].A15) {
        javascriptObjOrientProgDisplayAnswer.innerHTML = `
    <textarea name="text" class="answer_textarea" id="input">
function Dog(name) {
    this.name = name;
}

let beagle = new Dog("Snoopy");

Dog.prototype.isPrototypeOf(beagle);
Object.prototype.isPrototypeOf(Dog.prototype); 
        </textarea>`;
        javascriptObjOrientProgIncorrectValue.innerHTML = "Incorrect..";
        javascriptObjOrientProgNextButton.innerHTML = `<button class="nextButton javascriptColor1" onclick=javascriptObjOrientProgBtn()>Next</button>`;
        javascriptObjOrientProgRemoveValue.innerHTML = "";



    } else if (javascriptObjOrientProgRandomValue == 16 && javascriptObjOrientProgInputAnswer == javascriptObjOrientProgAnswerArr[16].A16) {
        javascriptObjOrientProgCorrectValue.innerHTML = "Correct..";
        javascriptObjOrientProgDisplayAnswer.innerHTML = `
        <textarea name="text" class="answer_textarea" id="input">Good Job :) </textarea>`;
        javascriptObjOrientProgNextButton.innerHTML = `<button class="nextButton javascriptColor1" onclick=javascriptObjOrientProgBtn()>Next</button>`;
        javascriptObjOrientProgRemoveValue.innerHTML = "";

    } else if (javascriptObjOrientProgRandomValue == 16 && javascriptObjOrientProgInputAnswer !== javascriptObjOrientProgAnswerArr[16].A16) {
        javascriptObjOrientProgDisplayAnswer.innerHTML = `
    <textarea name="text" class="answer_textarea" id="input">
function Cat(name) {
    this.name = name; 
};

Cat.prototype = {
    constructor: Cat
};

function Bear(name) {
    this.name = name; 
};

Bear.prototype = {
    constructor: Bear
};

function Animal() { };

Animal.prototype = {
    constructor: Animal,
    eat: function() {
        console.log("nom nom nom");
    }
};
        </textarea>`;
        javascriptObjOrientProgIncorrectValue.innerHTML = "Incorrect..";
        javascriptObjOrientProgNextButton.innerHTML = `<button class="nextButton javascriptColor1" onclick=javascriptObjOrientProgBtn()>Next</button>`;
        javascriptObjOrientProgRemoveValue.innerHTML = "";



    } else if (javascriptObjOrientProgRandomValue == 17 && javascriptObjOrientProgInputAnswer == javascriptObjOrientProgAnswerArr[17].A17) {
        javascriptObjOrientProgCorrectValue.innerHTML = "Correct..";
        javascriptObjOrientProgDisplayAnswer.innerHTML = `
        <textarea name="text" class="answer_textarea" id="input">Good Job :) </textarea>`;
        javascriptObjOrientProgNextButton.innerHTML = `<button class="nextButton javascriptColor1" onclick=javascriptObjOrientProgBtn()>Next</button>`;
        javascriptObjOrientProgRemoveValue.innerHTML = "";

    } else if (javascriptObjOrientProgRandomValue == 17 && javascriptObjOrientProgInputAnswer !== javascriptObjOrientProgAnswerArr[17].A17) {
        javascriptObjOrientProgDisplayAnswer.innerHTML = `
    <textarea name="text" class="answer_textarea" id="input">
function Animal() { }

Animal.prototype = {
    constructor: Animal, 
    eat: function() {
    console.log("nom nom nom");
    }
};

let duck = Object.create(Animal.prototype); 
let beagle = Object.create(Animal.prototype);; 

duck.eat(); 
beagle.eat();
        </textarea>`;
        javascriptObjOrientProgIncorrectValue.innerHTML = "Incorrect..";
        javascriptObjOrientProgNextButton.innerHTML = `<button class="nextButton javascriptColor1" onclick=javascriptObjOrientProgBtn()>Next</button>`;
        javascriptObjOrientProgRemoveValue.innerHTML = "";



    } else if (javascriptObjOrientProgRandomValue == 18 && javascriptObjOrientProgInputAnswer == javascriptObjOrientProgAnswerArr[18].A18) {
        javascriptObjOrientProgCorrectValue.innerHTML = "Correct..";
        javascriptObjOrientProgDisplayAnswer.innerHTML = `
        <textarea name="text" class="answer_textarea" id="input">Good Job :) </textarea>`;
        javascriptObjOrientProgNextButton.innerHTML = `<button class="nextButton javascriptColor1" onclick=javascriptObjOrientProgBtn()>Next</button>`;
        javascriptObjOrientProgRemoveValue.innerHTML = "";

    } else if (javascriptObjOrientProgRandomValue == 18 && javascriptObjOrientProgInputAnswer !== javascriptObjOrientProgAnswerArr[18].A18) {
        javascriptObjOrientProgDisplayAnswer.innerHTML = `
    <textarea name="text" class="answer_textarea" id="input">
function Animal() { }

Animal.prototype = {
    constructor: Animal,
    eat: function() {
    console.log("nom nom nom");
    }
};

function Dog() { }
Dog.prototype = Object.create(Animal.prototype);

let beagle = new Dog();
beagle.eat();
        </textarea>`;
        javascriptObjOrientProgIncorrectValue.innerHTML = "Incorrect..";
        javascriptObjOrientProgNextButton.innerHTML = `<button class="nextButton javascriptColor1" onclick=javascriptObjOrientProgBtn()>Next</button>`;
        javascriptObjOrientProgRemoveValue.innerHTML = "";



    } else if (javascriptObjOrientProgRandomValue == 19 && javascriptObjOrientProgInputAnswer == javascriptObjOrientProgAnswerArr[19].A19) {
        javascriptObjOrientProgCorrectValue.innerHTML = "Correct..";
        javascriptObjOrientProgDisplayAnswer.innerHTML = `
        <textarea name="text" class="answer_textarea" id="input">Good Job :) </textarea>`;
        javascriptObjOrientProgNextButton.innerHTML = `<button class="nextButton javascriptColor1" onclick=javascriptObjOrientProgBtn()>Next</button>`;
        javascriptObjOrientProgRemoveValue.innerHTML = "";

    } else if (javascriptObjOrientProgRandomValue == 19 && javascriptObjOrientProgInputAnswer !== javascriptObjOrientProgAnswerArr[19].A19) {
        javascriptObjOrientProgDisplayAnswer.innerHTML = `
    <textarea name="text" class="answer_textarea" id="input">
function Animal() { }
function Bird() { }
function Dog() { }

Bird.prototype = Object.create(Animal.prototype);
Dog.prototype = Object.create(Animal.prototype);
Bird.prototype.constructor = Bird;
Dog.prototype.constructor = Dog;

let duck = new Bird();
let beagle = new Dog();
          </textarea>`;
        javascriptObjOrientProgIncorrectValue.innerHTML = "Incorrect..";
        javascriptObjOrientProgNextButton.innerHTML = `<button class="nextButton javascriptColor1" onclick=javascriptObjOrientProgBtn()>Next</button>`;
        javascriptObjOrientProgRemoveValue.innerHTML = "";



    } else if (javascriptObjOrientProgRandomValue == 20 && javascriptObjOrientProgInputAnswer == javascriptObjOrientProgAnswerArr[20].A20) {
        javascriptObjOrientProgCorrectValue.innerHTML = "Correct..";
        javascriptObjOrientProgDisplayAnswer.innerHTML = `
        <textarea name="text" class="answer_textarea" id="input">Good Job :) </textarea>`;
        javascriptObjOrientProgNextButton.innerHTML = `<button class="nextButton javascriptColor1" onclick=javascriptObjOrientProgBtn()>Next</button>`;
        javascriptObjOrientProgRemoveValue.innerHTML = "";

    } else if (javascriptObjOrientProgRandomValue == 20 && javascriptObjOrientProgInputAnswer !== javascriptObjOrientProgAnswerArr[20].A20) {
        javascriptObjOrientProgDisplayAnswer.innerHTML = `
    <textarea name="text" class="answer_textarea" id="input">
function Animal() { }
Animal.prototype.eat = function() {     console.log("nom nom nom"); 
};

function Dog() { }
Dog.prototype = Object.create(Animal.prototype);
Dog.prototype.constructor = Dog;
Dog.prototype.bark = function() {
    console.log("Woof woof!");
};

let beagle = new Dog();

beagle.eat(); 
beagle.bark();
          </textarea>`;
        javascriptObjOrientProgIncorrectValue.innerHTML = "Incorrect..";
        javascriptObjOrientProgNextButton.innerHTML = `<button class="nextButton javascriptColor1" onclick=javascriptObjOrientProgBtn()>Next</button>`;
        javascriptObjOrientProgRemoveValue.innerHTML = "";



    } else if (javascriptObjOrientProgRandomValue == 21 && javascriptObjOrientProgInputAnswer == javascriptObjOrientProgAnswerArr[21].A21) {
        javascriptObjOrientProgCorrectValue.innerHTML = "Correct..";
        javascriptObjOrientProgDisplayAnswer.innerHTML = `
        <textarea name="text" class="answer_textarea" id="input">Good Job :) </textarea>`;
        javascriptObjOrientProgNextButton.innerHTML = `<button class="nextButton javascriptColor1" onclick=javascriptObjOrientProgBtn()>Next</button>`;
        javascriptObjOrientProgRemoveValue.innerHTML = "";

    } else if (javascriptObjOrientProgRandomValue == 21 && javascriptObjOrientProgInputAnswer !== javascriptObjOrientProgAnswerArr[21].A21) {
        javascriptObjOrientProgDisplayAnswer.innerHTML = `
    <textarea name="text" class="answer_textarea" id="input">
function Bird() { }

Bird.prototype.fly = function() {       return "I am flying!";
};

function Penguin() { }
Penguin.prototype = Object.create(Bird.prototype);
Penguin.prototype.constructor = Penguin;
Penguin.prototype.fly = function() {
    return  "Alas, this is a flightless bird.";
};
let penguin = new Penguin();
console.log(penguin.fly());
          </textarea>`;
        javascriptObjOrientProgIncorrectValue.innerHTML = "Incorrect..";
        javascriptObjOrientProgNextButton.innerHTML = `<button class="nextButton javascriptColor1" onclick=javascriptObjOrientProgBtn()>Next</button>`;
        javascriptObjOrientProgRemoveValue.innerHTML = "";



    } else if (javascriptObjOrientProgRandomValue == 22 && javascriptObjOrientProgInputAnswer == javascriptObjOrientProgAnswerArr[22].A22) {
        javascriptObjOrientProgCorrectValue.innerHTML = "Correct..";
        javascriptObjOrientProgDisplayAnswer.innerHTML = `
        <textarea name="text" class="answer_textarea" id="input">Good Job :) </textarea>`;
        javascriptObjOrientProgNextButton.innerHTML = `<button class="nextButton javascriptColor1" onclick=javascriptObjOrientProgBtn()>Next</button>`;
        javascriptObjOrientProgRemoveValue.innerHTML = "";

    } else if (javascriptObjOrientProgRandomValue == 22 && javascriptObjOrientProgInputAnswer !== javascriptObjOrientProgAnswerArr[22].A22) {
        javascriptObjOrientProgDisplayAnswer.innerHTML = `
    <textarea name="text" class="answer_textarea" id="input">
let bird = {
    name: "Donald",
    numLegs: 2
};

let boat = {
    name: "Warrior",
    type: "race-boat"
};
let glideMixin = function(obj) {
    obj.glide = function() {
        console.log("Gliding!");
    }
};
glideMixin(bird);
glideMixin(boat);
          </textarea>`;
        javascriptObjOrientProgIncorrectValue.innerHTML = "Incorrect..";
        javascriptObjOrientProgNextButton.innerHTML = `<button class="nextButton javascriptColor1" onclick=javascriptObjOrientProgBtn()>Next</button>`;
        javascriptObjOrientProgRemoveValue.innerHTML = "";



    } else if (javascriptObjOrientProgRandomValue == 23 && javascriptObjOrientProgInputAnswer == javascriptObjOrientProgAnswerArr[23].A23) {
        javascriptObjOrientProgCorrectValue.innerHTML = "Correct..";
        javascriptObjOrientProgDisplayAnswer.innerHTML = `
        <textarea name="text" class="answer_textarea" id="input">Good Job :) </textarea>`;
        javascriptObjOrientProgNextButton.innerHTML = `<button class="nextButton javascriptColor1" onclick=javascriptObjOrientProgBtn()>Next</button>`;
        javascriptObjOrientProgRemoveValue.innerHTML = "";

    } else if (javascriptObjOrientProgRandomValue == 23 && javascriptObjOrientProgInputAnswer !== javascriptObjOrientProgAnswerArr[23].A23) {
        javascriptObjOrientProgDisplayAnswer.innerHTML = `
    <textarea name="text" class="answer_textarea" id="input">
function Bird() {
    let weight = 15;

    this.getWeight = function() {
        return weight;
    };

}
          </textarea>`;
        javascriptObjOrientProgIncorrectValue.innerHTML = "Incorrect..";
        javascriptObjOrientProgNextButton.innerHTML = `<button class="nextButton javascriptColor1" onclick=javascriptObjOrientProgBtn()>Next</button>`;
        javascriptObjOrientProgRemoveValue.innerHTML = "";



    } else if (javascriptObjOrientProgRandomValue == 24 && javascriptObjOrientProgInputAnswer == javascriptObjOrientProgAnswerArr[24].A24) {
        javascriptObjOrientProgCorrectValue.innerHTML = "Correct..";
        javascriptObjOrientProgDisplayAnswer.innerHTML = `
        <textarea name="text" class="answer_textarea" id="input">Good Job :) </textarea>`;
        javascriptObjOrientProgNextButton.innerHTML = `<button class="nextButton javascriptColor1" onclick=javascriptObjOrientProgBtn()>Next</button>`;
        javascriptObjOrientProgRemoveValue.innerHTML = "";

    } else if (javascriptObjOrientProgRandomValue == 24 && javascriptObjOrientProgInputAnswer !== javascriptObjOrientProgAnswerArr[24].A24) {
        javascriptObjOrientProgDisplayAnswer.innerHTML = `
    <textarea name="text" class="answer_textarea" id="input">
(function() {
    console.log("A cozy nest is ready");
})();
          </textarea>`;
        javascriptObjOrientProgIncorrectValue.innerHTML = "Incorrect..";
        javascriptObjOrientProgNextButton.innerHTML = `<button class="nextButton javascriptColor1" onclick=javascriptObjOrientProgBtn()>Next</button>`;
        javascriptObjOrientProgRemoveValue.innerHTML = "";



    } else if (javascriptObjOrientProgRandomValue == 25 && javascriptObjOrientProgInputAnswer == javascriptObjOrientProgAnswerArr[25].A25) {
        javascriptObjOrientProgCorrectValue.innerHTML = "Correct..";
        javascriptObjOrientProgDisplayAnswer.innerHTML = `
        <textarea name="text" class="answer_textarea" id="input">Good Job :) </textarea>`;
        javascriptObjOrientProgNextButton.innerHTML = `<button class="nextButton javascriptColor1" onclick=javascriptObjOrientProgBtn()>Next</button>`;
        javascriptObjOrientProgRemoveValue.innerHTML = "";

    } else if (javascriptObjOrientProgRandomValue == 25 && javascriptObjOrientProgInputAnswer !== javascriptObjOrientProgAnswerArr[25].A25) {
        javascriptObjOrientProgDisplayAnswer.innerHTML = `
    <textarea name="text" class="answer_textarea" id="input">
let funModule = (function() {
    return {
        isCuteMixin: function(obj) {
            obj.isCute = function() {
                return true;
            };
        },
        singMixin: function(obj) {
            obj.sing = function() {
                console.log("Singing to an awesome tune");
            };
        }
    }
})();
          </textarea>`;
        javascriptObjOrientProgIncorrectValue.innerHTML = "Incorrect..";
        javascriptObjOrientProgNextButton.innerHTML = `<button class="nextButton javascriptColor1" onclick=javascriptObjOrientProgBtn()>Next</button>`;
        javascriptObjOrientProgRemoveValue.innerHTML = "";



    } else {
        javascriptObjOrientProgIncorrectValue.innerHTML = "Incorrect..";
        javascriptObjOrientProgNextButton.innerHTML = `<button class="nextButton javascriptColor1" onclick=javascriptObjOrientProgBtn()>Next</button>`;
        javascriptObjOrientProgRemoveValue.innerHTML = "";
    }

}
window.javascriptObjOrientProgSubmit = javascriptObjOrientProgSubmit; /* to make submit global*/

function javascriptObjOrientProgButton() {
    javascriptObjOrientProgTest = document.getElementById("javascriptObjOrientProgAddedQuestion").innerHTML = javascriptObjOrientProgQuestionArr[javascriptObjOrientProgRandomValue]; /* giving random question to html */

    return javascriptObjOrientProgTest;
}
window.javascriptObjOrientProgButton = javascriptObjOrientProgButton;

function javascriptObjOrientProgShowTest() {
    var javascriptObjOrientProgInputBox = document.getElementById("javascriptObjOrientProgRemove").style.display = "block";
    return javascriptObjOrientProgInputBox;
}
window.javascriptObjOrientProgShowTest = javascriptObjOrientProgShowTest;

function javascriptObjOrientProgBtn() {
    javascriptObjOrientProgRandomValue = Math.floor(Math.random() * javascriptObjOrientProgQuestionArr.length); /* buton next in html to make a next random question*/
    document.getElementById("javascriptObjOrientProgAddedQuestion").innerHTML = javascriptObjOrientProgQuestionArr[javascriptObjOrientProgRandomValue]; /* giving random question to html */
    document.getElementById("javascriptObjOrientProgElementButton").innerHTML = "";/* to clean javascriptObjOrientProgElementButton*/
    document.getElementById("javascriptObjOrientProgRemove").innerHTML = `<textarea name="text" class="answer_textarea" id="input"></textarea></br>
      <button class="answer_submit javascriptColor1" id = "javascriptObjOrientProgStartButton" onclick="javascriptObjOrientProgSubmit()">Submit</button>`;/* to create next text area and Submit button. */
    document.getElementById("javascriptObjOrientProgCheckingAnswer").innerHTML = "";
    document.getElementById("javascriptObjOrientProgShowingAnswer").innerHTML = "";
}
window.javascriptObjOrientProgBtn = javascriptObjOrientProgBtn;/* to make submit global*/