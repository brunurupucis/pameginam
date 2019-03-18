

import { htmlQuestionArr } from './questionsAndAnswers/htmlQuestions'; /* importing  array from other js file with webpack*/
import { htmlAnswerArr } from './questionsAndAnswers/htmlAnswers'; /* importing  array from other js file with webpack*/
import { cssQuestionArr } from './questionsAndAnswers/cssQuestions'; /* importing  array from other js file with webpack*/
import { cssAnswerArr } from './questionsAndAnswers/cssAnswers'; /* importing  array from other js file with webpack*/
`./questionsAndAnswers/cssQuestions`



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
        displayAnswer.innerHTML = `<textarea name="text" id="input">Good Job :) </textarea>`;
        nextButton.innerHTML = `<button id="htmlNextButton" onclick=btn()>Next</button>`; /* creating next button with btn()function*/
        removeValue.innerHTML = "";/* removing in html answer*/



    } else if (randomValue == 0 && inputAnswer !== htmlAnswerArr[0].A0) {/*  if random value not == then giving then display the answere.*/
        displayAnswer.innerHTML = `<textarea name="text" id="input">&ltp title="tooltip"&gtAnswer&lt/p&gt</textarea>`;
        incorrectValue.innerHTML = "Incorrect..";
        nextButton.innerHTML = `<button id="htmlNextButton" onclick=btn()>Next</button>`;
        removeValue.innerHTML = "";



    } else if (randomValue == 1 && inputAnswer == htmlAnswerArr[1].A1) {
        correctValue.innerHTML = "Correct..";
        displayAnswer.innerHTML = `<textarea name="text" id="input">Good Job :) </textarea>`;
        nextButton.innerHTML = `<button id="htmlNextButton" onclick=btn()>Next</button>`;
        removeValue.innerHTML = "";

    } else if (randomValue == 1 && inputAnswer !== htmlAnswerArr[1].A1) {
        displayAnswer.innerHTML = `<textarea name="text" id="input">&ltimg src="answer.jpg" width="250" height="400"&gt</textarea>`;
        incorrectValue.innerHTML = "Incorrect..";
        nextButton.innerHTML = `<button id="htmlNextButton" onclick=btn()>Next</button>`;
        removeValue.innerHTML = "";



    } else if (randomValue == 2 && inputAnswer == htmlAnswerArr[2].A2) {
        correctValue.innerHTML = "Correct..";
        displayAnswer.innerHTML = `<textarea name="text" id="input">Good Job :) </textarea>`;
        nextButton.innerHTML = `<button id="htmlNextButton" onclick=btn()>Next</button>`;
        removeValue.innerHTML = "";

    } else if (randomValue == 2 && inputAnswer !== htmlAnswerArr[2].A2) {
        displayAnswer.innerHTML = `<textarea name="text" id="input">&lta href="https://www.google.com"&gtThis is a link&lt/a&gt</textarea>`;
        incorrectValue.innerHTML = "Incorrect..";
        nextButton.innerHTML = `<button id="htmlNextButton" onclick=btn()>Next</button>`;
        removeValue.innerHTML = "";



    } else if (randomValue == 3 && inputAnswer == htmlAnswerArr[3].A3) {
        correctValue.innerHTML = "Correct..";
        displayAnswer.innerHTML = `<textarea name="text" id="input">Good Job :) </textarea>`;
        nextButton.innerHTML = `<button id="htmlNextButton" onclick=btn()>Next</button>`;
        removeValue.innerHTML = "";

    } else if (randomValue == 3 && inputAnswer !== htmlAnswerArr[3].A3) {
        displayAnswer.innerHTML = `<textarea name="text" id="input">&lta href="http://www.wwf.org.uk"&gtThis is a link&lt/a&gt</textarea>`;
        incorrectValue.innerHTML = "Incorrect..";
        nextButton.innerHTML = `<button id="htmlNextButton" onclick=btn()>Next</button>`;
        removeValue.innerHTML = "";



    } else if (randomValue == 4 && inputAnswer == htmlAnswerArr[4].A4) {
        correctValue.innerHTML = "Correct..";
        displayAnswer.innerHTML = `<textarea name="text" id="input">Good Job :) </textarea>`;
        nextButton.innerHTML = `<button id="htmlNextButton" onclick=btn()>Next</button>`;
        removeValue.innerHTML = "";

    } else if (randomValue == 4 && inputAnswer !== htmlAnswerArr[4].A4) {
        displayAnswer.innerHTML = `<textarea name="text" id="input">&ltimg src="test.jpg" alt="answer.com" width="135" height="50"&gt</textarea>`;
        incorrectValue.innerHTML = "Incorrect..";
        nextButton.innerHTML = `<button id="htmlNextButton" onclick=btn()>Next</button>`;
        removeValue.innerHTML = "";



    } else if (randomValue == 5 && inputAnswer == htmlAnswerArr[5].A5) {
        correctValue.innerHTML = "Correct..";
        displayAnswer.innerHTML = `<textarea name="text" id="input">Good Job :) </textarea>`;
        nextButton.innerHTML = `<button id="htmlNextButton" onclick=btn()>Next</button>`;
        removeValue.innerHTML = "";

    } else if (randomValue == 5 && inputAnswer !== htmlAnswerArr[5].A5) {
        displayAnswer.innerHTML = `<textarea name="text" id="input">&lth1&gtLondon&lt/h1&gt</textarea>`;
        incorrectValue.innerHTML = "Incorrect..";
        nextButton.innerHTML = `<button id="htmlNextButton" onclick=btn()>Next</button>`;
        removeValue.innerHTML = "";



    } else if (randomValue == 6 && inputAnswer == htmlAnswerArr[6].A6) {
        correctValue.innerHTML = "Correct..";
        displayAnswer.innerHTML = `<textarea name="text" id="input">Good Job :) </textarea>`;
        nextButton.innerHTML = `<button id="htmlNextButton" onclick=btn()>Next</button>`;
        removeValue.innerHTML = "";

    } else if (randomValue == 6 && inputAnswer !== htmlAnswerArr[6].A6) {
        displayAnswer.innerHTML = `<textarea name="text" id="input">&lth1&gtLondon&lt/h1&gt
         &lthr&gt 
         &ltp&gtTest&lt/p&gt</textarea>`;
        incorrectValue.innerHTML = "Incorrect..";
        nextButton.innerHTML = `<button id="htmlNextButton" onclick=btn()>Next</button>`;
        removeValue.innerHTML = "";



    } else if (randomValue == 7 && inputAnswer == htmlAnswerArr[7].A7) {
        correctValue.innerHTML = "Correct..";
        displayAnswer.innerHTML = `<textarea name="text" id="input">Good Job :) </textarea>`;
        nextButton.innerHTML = `<button id="htmlNextButton" onclick=btn()>Next</button>`;
        removeValue.innerHTML = "";

    } else if (randomValue == 7 && inputAnswer !== htmlAnswerArr[7].A7) {
        displayAnswer.innerHTML = `<textarea name="text" id="input">&lth1&gtHello&lt/h1&gt 
        &lth2&gtHello&lt/h2&gt 
        &lth3&gtHello&lt/h3&gt 
        &lth4&gtHello&lt/h4&gt 
        &lth5&gtHello&lt/h5&gt 
        &lth6&gtHello&lt/h6&gt</textarea>`;
        incorrectValue.innerHTML = "Incorrect..";
        nextButton.innerHTML = `<button id="htmlNextButton" onclick=btn()>Next</button>`;
        removeValue.innerHTML = "";



    } else if (randomValue == 8 && inputAnswer == htmlAnswerArr[8].A8) {
        correctValue.innerHTML = "Correct..";
        displayAnswer.innerHTML = `<textarea name="text" id="input">Good Job :) </textarea>`;
        nextButton.innerHTML = `<button id="htmlNextButton" onclick=btn()>Next</button>`;
        removeValue.innerHTML = "";

    } else if (randomValue == 8 && inputAnswer !== htmlAnswerArr[8].A8) {
        displayAnswer.innerHTML = `<textarea name="text" id="input">&lth1&gtUniversal Studios Presents&lt/h1&gt 
        &lth2&gtJurassic Park&lt/h2&gt 
        &lth3&gtAbout&lt/h3&gt 
        &ltp&gtOn the Island of Isla Nublar, a new park has been built: Jurassic Park is a theme park of cloned dinosaurs!!&lt/p&gt</textarea>`;
        incorrectValue.innerHTML = "Incorrect..";
        nextButton.innerHTML = `<button id="htmlNextButton" onclick=btn()>Next</button>`;
        removeValue.innerHTML = "";



    } else if (randomValue == 9 && inputAnswer == htmlAnswerArr[9].A9) {
        correctValue.innerHTML = "Correct..";
        displayAnswer.innerHTML = `<textarea name="text" id="input">Good Job :) </textarea>`;
        nextButton.innerHTML = `<button id="htmlNextButton" onclick=btn()>Next</button>`;
        removeValue.innerHTML = "";

    } else if (randomValue == 9 && inputAnswer !== htmlAnswerArr[9].A9) {
        displayAnswer.innerHTML = `<textarea name="text" id="input">&ltp&gtHello World!&lt/p&gt</textarea>`;
        incorrectValue.innerHTML = "Incorrect..";
        nextButton.innerHTML = `<button id="htmlNextButton" onclick=btn()>Next</button>`;
        removeValue.innerHTML = "";



    } else if (randomValue == 10 && inputAnswer == htmlAnswerArr[10].A10) {
        correctValue.innerHTML = "Correct..";
        displayAnswer.innerHTML = `<textarea name="text" id="input">Good Job :) </textarea>`;
        nextButton.innerHTML = `<button id="htmlNextButton" onclick=btn()>Next</button>`;
        removeValue.innerHTML = "";

    } else if (randomValue == 10 && inputAnswer !== htmlAnswerArr[10].A10) {
        displayAnswer.innerHTML = `<textarea name="text" id="input">&ltp&gt My Bonnie lies over the ocean.&ltbr&gt
        My Bonnie lies over the sea.&ltbr&gt 
        My Bonnie lies over the ocean.&ltbr&gt 
        Oh, bring back my Bonnie to me.&lt/p&gt</textarea>`;
        incorrectValue.innerHTML = "Incorrect..";
        nextButton.innerHTML = `<button id="htmlNextButton" onclick=btn()>Next</button>`;
        removeValue.innerHTML = "";



    } else if (randomValue == 11 && inputAnswer == htmlAnswerArr[11].A11) {
        correctValue.innerHTML = "Correct..";
        displayAnswer.innerHTML = `<textarea name="text" id="input">Good Job :) </textarea>`;
        nextButton.innerHTML = `<button id="htmlNextButton" onclick=btn()>Next</button>`;
        removeValue.innerHTML = "";

    } else if (randomValue == 11 && inputAnswer !== htmlAnswerArr[11].A11) {
        displayAnswer.innerHTML = `<textarea name="text" id="input">&ltpre&gt My Bonnie lies over the ocean.&ltbr&gt 
        My Bonnie lies over the sea.&ltbr&gt 
        My Bonnie lies over the ocean.&ltbr&gt 
        Oh, bring back my Bonnie to me.&lt/pre&gt</textarea>`;
        incorrectValue.innerHTML = "Incorrect..";
        nextButton.innerHTML = `<button id="htmlNextButton" onclick=btn()>Next</button>`;
        removeValue.innerHTML = "";



    } else if (randomValue == 12 && inputAnswer == htmlAnswerArr[12].A12) {
        correctValue.innerHTML = "Correct..";
        displayAnswer.innerHTML = `<textarea name="text" id="input">Good Job :) </textarea>`;
        nextButton.innerHTML = `<button id="htmlNextButton" onclick=btn()>Next</button>`;
        removeValue.innerHTML = "";

    } else if (randomValue == 12 && inputAnswer !== htmlAnswerArr[12].A12) {
        displayAnswer.innerHTML = `<textarea name="text" id="input">&ltp style="color:blue"&gtThis is a paragraph.&lt/p&gt</textarea>`;
        incorrectValue.innerHTML = "Incorrect..";
        nextButton.innerHTML = `<button id="htmlNextButton" onclick=btn()>Next</button>`;
        removeValue.innerHTML = "";



    } else if (randomValue == 13 && inputAnswer == htmlAnswerArr[13].A13) {
        correctValue.innerHTML = "Correct..";
        displayAnswer.innerHTML = `<textarea name="text" id="input">Good Job :) </textarea>`;
        nextButton.innerHTML = `<button id="htmlNextButton" onclick=btn()>Next</button>`;
        removeValue.innerHTML = "";

    } else if (randomValue == 13 && inputAnswer !== htmlAnswerArr[13].A13) {
        displayAnswer.innerHTML = `<textarea name="text" id="input">&ltp style="font-family:courier"&gtThis is a paragraph.&lt/p&gt</textarea>`;
        incorrectValue.innerHTML = "Incorrect..";
        nextButton.innerHTML = `<button id="htmlNextButton" onclick=btn()>Next</button>`;
        removeValue.innerHTML = "";



    } else if (randomValue == 14 && inputAnswer == htmlAnswerArr[14].A14) {
        correctValue.innerHTML = "Correct..";
        displayAnswer.innerHTML = `<textarea name="text" id="input">Good Job :) </textarea>`;
        nextButton.innerHTML = `<button id="htmlNextButton" onclick=btn()>Next</button>`;
        removeValue.innerHTML = "";

    } else if (randomValue == 14 && inputAnswer !== htmlAnswerArr[14].A14) {
        displayAnswer.innerHTML = `<textarea name="text" id="input">&ltp style="text-align:center"&gtThis is a paragraph.&lt/p&gt</textarea>`;
        incorrectValue.innerHTML = "Incorrect..";
        nextButton.innerHTML = `<button id="htmlNextButton" onclick=btn()>Next</button>`;
        removeValue.innerHTML = "";



    } else if (randomValue == 15 && inputAnswer == htmlAnswerArr[15].A15) {
        correctValue.innerHTML = "Correct..";
        displayAnswer.innerHTML = `<textarea name="text" id="input">Good Job :) </textarea>`;
        nextButton.innerHTML = `<button id="htmlNextButton" onclick=btn()>Next</button>`;
        removeValue.innerHTML = "";

    } else if (randomValue == 15 && inputAnswer !== htmlAnswerArr[15].A15) {
        displayAnswer.innerHTML = `<textarea name="text" id="input">&ltp style="font-size:50px"&gtThis is a paragraph.&lt/p&gt</textarea>`;
        incorrectValue.innerHTML = "Incorrect..";
        nextButton.innerHTML = `<button id="htmlNextButton" onclick=btn()>Next</button>`;
        removeValue.innerHTML = "";



    } else if (randomValue == 16 && inputAnswer == htmlAnswerArr[16].A16) {
        correctValue.innerHTML = "Correct..";
        displayAnswer.innerHTML = `<textarea name="text" id="input">Good Job :) </textarea>`;
        nextButton.innerHTML = `<button id="htmlNextButton" onclick=btn()>Next</button>`;
        removeValue.innerHTML = "";

    } else if (randomValue == 16 && inputAnswer !== htmlAnswerArr[16].A16) {
        displayAnswer.innerHTML = `<textarea name="text" id="input">&ltbody style="background-color:yellow"&gt
        &ltp&gtThis is a paragraph.&lt/p&gt
        &lt/body&gt</textarea>`;
        incorrectValue.innerHTML = "Incorrect..";
        nextButton.innerHTML = `<button id="htmlNextButton" onclick=btn()>Next</button>`;
        removeValue.innerHTML = "";



    } else if (randomValue == 17 && inputAnswer == htmlAnswerArr[17].A17) {
        correctValue.innerHTML = "Correct..";
        displayAnswer.innerHTML = `<textarea name="text" id="input">Good Job :) </textarea>`;
        nextButton.innerHTML = `<button id="htmlNextButton" onclick=btn()>Next</button>`;
        removeValue.innerHTML = "";

    } else if (randomValue == 17 && inputAnswer !== htmlAnswerArr[17].A17) {
        displayAnswer.innerHTML = `<textarea name="text" id="input">&lthtml&gt
        &ltbody style="text-align:center"&gt
        &lth1&gtThis is a heading&lt/h1&gt
        &lth2&gtThis is also a heading&lt/h2&gt
        &ltp&gtThis is a paragraph.&lt/p&gt
        &ltp&gtThis is also paragraph.&lt/p&gt
        &lt/body&gt
        &lt/html&gt</textarea>`;
        incorrectValue.innerHTML = "Incorrect..";
        nextButton.innerHTML = `<button id="htmlNextButton" onclick=btn()>Next</button>`;
        removeValue.innerHTML = "";



    } else if (randomValue == 18 && inputAnswer == htmlAnswerArr[18].A18) {
        correctValue.innerHTML = "Correct..";
        displayAnswer.innerHTML = `<textarea name="text" id="input">Good Job :) </textarea>`;
        nextButton.innerHTML = `<button id="htmlNextButton" onclick=btn()>Next</button>`;
        removeValue.innerHTML = "";

    } else if (randomValue == 18 && inputAnswer !== htmlAnswerArr[18].A18) {
        displayAnswer.innerHTML = `<textarea name="text" id="input">&ltp&gtThis mission is to stop the &ltstrong&gt degradation &lt/strong&gt of our planets natural environment.&lt/p&gt</textarea>`;
        incorrectValue.innerHTML = "Incorrect..";
        nextButton.innerHTML = `<button id="htmlNextButton" onclick=btn()>Next</button>`;
        removeValue.innerHTML = "";



    } else if (randomValue == 19 && inputAnswer == htmlAnswerArr[19].A19) {
        correctValue.innerHTML = "Correct..";
        displayAnswer.innerHTML = `<textarea name="text" id="input">Good Job :) </textarea>`;
        nextButton.innerHTML = `<button id="htmlNextButton" onclick=btn()>Next</button>`;
        removeValue.innerHTML = "";

    } else if (randomValue == 19 && inputAnswer !== htmlAnswerArr[19].A19) {
        displayAnswer.innerHTML = `<textarea name="text" id="input">&ltp&gtTokyo is the capital of Japan,
        the center of the Greater Tokyo Area, 
        and the most populous &ltem&gtmetropolitan&lt/em&gt area in the world.&lt/p&gt</textarea>`;
        incorrectValue.innerHTML = "Incorrect..";
        nextButton.innerHTML = `<button id="htmlNextButton" onclick=btn()>Next</button>`;
        removeValue.innerHTML = "";



    } else if (randomValue == 20 && inputAnswer == htmlAnswerArr[20].A20) {
        correctValue.innerHTML = "Correct..";
        displayAnswer.innerHTML = `<textarea name="text" id="input">Good Job :) </textarea>`;
        nextButton.innerHTML = `<button id="htmlNextButton" onclick=btn()>Next</button>`;
        removeValue.innerHTML = "";

    } else if (randomValue == 20 && inputAnswer !== htmlAnswerArr[20].A20) {
        displayAnswer.innerHTML = `<textarea name="text" id="input">&ltp&gtHTML is &ltmark&gtFUN&lt/mark&gt to learn!&lt/p&gt</textarea>`;
        incorrectValue.innerHTML = "Incorrect..";
        nextButton.innerHTML = `<button id="htmlNextButton" onclick=btn()>Next</button>`;
        removeValue.innerHTML = "";



    } else if (randomValue == 21 && inputAnswer == htmlAnswerArr[21].A21) {
        correctValue.innerHTML = "Correct..";
        displayAnswer.innerHTML = `<textarea name="text" id="input">Good Job :) </textarea>`;
        nextButton.innerHTML = `<button id="htmlNextButton" onclick=btn()>Next</button>`;
        removeValue.innerHTML = "";

    } else if (randomValue == 21 && inputAnswer !== htmlAnswerArr[21].A21) {
        displayAnswer.innerHTML = `<textarea name="text" id="input">&ltp&gtH&ltsub&gt2&lt/sub&gtO is the scientific term for water.&lt/p&gt</textarea>`;
        incorrectValue.innerHTML = "Incorrect..";
        nextButton.innerHTML = `<button id="htmlNextButton" onclick=btn()>Next</button>`;
        removeValue.innerHTML = "";



    } else if (randomValue == 22 && inputAnswer == htmlAnswerArr[22].A22) {
        correctValue.innerHTML = "Correct..";
        displayAnswer.innerHTML = `<textarea name="text" id="input">Good Job :) </textarea>`;
        nextButton.innerHTML = `<button id="htmlNextButton" onclick=btn()>Next</button>`;
        removeValue.innerHTML = "";

    } else if (randomValue == 22 && inputAnswer !== htmlAnswerArr[22].A22) {
        displayAnswer.innerHTML = `<textarea name="text" id="input">&ltp&gtI am so &ltq&gtcool&lt/q&gt.&lt/p&gt</textarea>`;
        incorrectValue.innerHTML = "Incorrect..";
        nextButton.innerHTML = `<button id="htmlNextButton" onclick=btn()>Next</button>`;
        removeValue.innerHTML = "";



    } else if (randomValue == 23 && inputAnswer == htmlAnswerArr[23].A23) {
        correctValue.innerHTML = "Correct..";
        displayAnswer.innerHTML = `<textarea name="text" id="input">Good Job :) </textarea>`;
        nextButton.innerHTML = `<button id="htmlNextButton" onclick=btn()>Next</button>`;
        removeValue.innerHTML = "";

    } else if (randomValue == 23 && inputAnswer !== htmlAnswerArr[23].A23) {
        displayAnswer.innerHTML = `<textarea name="text" id="input">&ltblockquote cite="http://www.worldwildlife.org/who/index.html"&gt 
        For 50 years, WWF has been protecting the future of nature. 
        &lt/blockquote&gt</textarea>`;
        incorrectValue.innerHTML = "Incorrect..";
        nextButton.innerHTML = `<button id="htmlNextButton" onclick=btn()>Next</button>`;
        removeValue.innerHTML = "";



    } else if (randomValue == 24 && inputAnswer == htmlAnswerArr[24].A24) {
        correctValue.innerHTML = "Correct..";
        displayAnswer.innerHTML = `<textarea name="text" id="input">Good Job :) </textarea>`;
        nextButton.innerHTML = `<button id="htmlNextButton" onclick=btn()>Next</button>`;
        removeValue.innerHTML = "";

    } else if (randomValue == 24 && inputAnswer !== htmlAnswerArr[24].A24) {
        displayAnswer.innerHTML = `<textarea name="text" id="input">&ltbdo dir="rtl"&gtWhat a beautiful day!&lt/bdo&gt</textarea>`;
        incorrectValue.innerHTML = "Incorrect..";
        nextButton.innerHTML = `<button id="htmlNextButton" onclick=btn()>Next</button>`;
        removeValue.innerHTML = "";



    } else if (randomValue == 25 && inputAnswer == htmlAnswerArr[25].A25) {
        correctValue.innerHTML = "Correct..";
        displayAnswer.innerHTML = `<textarea name="text" id="input">Good Job :) </textarea>`;
        nextButton.innerHTML = `<button id="htmlNextButton" onclick=btn()>Next</button>`;
        removeValue.innerHTML = "";

    } else if (randomValue == 25 && inputAnswer !== htmlAnswerArr[25].A25) {
        displayAnswer.innerHTML = `<textarea name="text" id="input">&ltp&gtThe &ltabbr title="World Health Organization"&gtWHO&lt/abbr&gt was founded in 1948.&lt/p&gt</textarea>`;
        incorrectValue.innerHTML = "Incorrect..";
        nextButton.innerHTML = `<button id="htmlNextButton" onclick=btn()>Next</button>`;
        removeValue.innerHTML = "";



    } else if (randomValue == 26 && inputAnswer == htmlAnswerArr[26].A26) {
        correctValue.innerHTML = "Correct..";
        displayAnswer.innerHTML = `<textarea name="text" id="input">Good Job :) </textarea>`;
        nextButton.innerHTML = `<button id="htmlNextButton" onclick=btn()>Next</button>`;
        removeValue.innerHTML = "";

    } else if (randomValue == 26 && inputAnswer !== htmlAnswerArr[26].A26) {
        displayAnswer.innerHTML = `<textarea name="text" id="input">&lt!-- Do not display this text in the browser --&gt</textarea>`;
        incorrectValue.innerHTML = "Incorrect..";
        nextButton.innerHTML = `<button id="htmlNextButton" onclick=btn()>Next</button>`;
        removeValue.innerHTML = "";



    } else if (randomValue == 27 && inputAnswer == htmlAnswerArr[27].A27) {
        correctValue.innerHTML = "Correct..";
        displayAnswer.innerHTML = `<textarea name="text" id="input">Good Job :) </textarea>`;
        nextButton.innerHTML = `<button id="htmlNextButton" onclick=btn()>Next</button>`;
        removeValue.innerHTML = "";

    } else if (randomValue == 27 && inputAnswer !== htmlAnswerArr[27].A27) {
        displayAnswer.innerHTML = `<textarea name="text" id="input">&ltstyle&gt body {background-color:yellow;}&lt/style&gt</textarea>`;
        incorrectValue.innerHTML = "Incorrect..";
        nextButton.innerHTML = `<button id="htmlNextButton" onclick=btn()>Next</button>`;
        removeValue.innerHTML = "";



    } else if (randomValue == 28 && inputAnswer == htmlAnswerArr[28].A28) {
        correctValue.innerHTML = "Correct..";
        displayAnswer.innerHTML = `<textarea name="text" id="input">Good Job :) </textarea>`;
        nextButton.innerHTML = `<button id="htmlNextButton" onclick=btn()>Next</button>`;
        removeValue.innerHTML = "";

    } else if (randomValue == 28 && inputAnswer !== htmlAnswerArr[28].A28) {
        displayAnswer.innerHTML = `<textarea name="text" id="input">&ltp id="special"&gtI want to be a special paragraph!&lt/p&gt</textarea>`;
        incorrectValue.innerHTML = "Incorrect..";
        nextButton.innerHTML = `<button id="htmlNextButton" onclick=btn()>Next</button>`;
        removeValue.innerHTML = "";



    } else if (randomValue == 29 && inputAnswer == htmlAnswerArr[29].A29) {
        correctValue.innerHTML = "Correct..";
        displayAnswer.innerHTML = `<textarea name="text" id="input">Good Job :) </textarea>`;
        nextButton.innerHTML = `<button id="htmlNextButton" onclick=btn()>Next</button>`;
        removeValue.innerHTML = "";

    } else if (randomValue == 29 && inputAnswer !== htmlAnswerArr[29].A29) {
        displayAnswer.innerHTML = `<textarea name="text" id="input">&ltp class="intro"&gtThis is a paragraph.&lt/p&gt 
        &ltp class="intro"&gtThis is a paragraph.&lt/p&gt</textarea>`;
        incorrectValue.innerHTML = "Incorrect..";
        nextButton.innerHTML = `<button id="htmlNextButton" onclick=btn()>Next</button>`;
        removeValue.innerHTML = "";



    } else if (randomValue == 30 && inputAnswer == htmlAnswerArr[30].A30) {
        correctValue.innerHTML = "Correct..";
        displayAnswer.innerHTML = `<textarea name="text" id="input">Good Job :) </textarea>`;
        nextButton.innerHTML = `<button id="htmlNextButton" onclick=btn()>Next</button>`;
        removeValue.innerHTML = "";

    } else if (randomValue == 30 && inputAnswer !== htmlAnswerArr[30].A30) {
        displayAnswer.innerHTML = `<textarea name="text" id="input">&lta href="https://www.google.com"&gtVisit our HTML tutorial.&lt/a&gt</textarea>`;
        incorrectValue.innerHTML = "Incorrect..";
        nextButton.innerHTML = `<button id="htmlNextButton" onclick=btn()>Next</button>`;
        removeValue.innerHTML = "";



    } else if (randomValue == 31 && inputAnswer == htmlAnswerArr[31].A31) {
        correctValue.innerHTML = "Correct..";
        displayAnswer.innerHTML = `<textarea name="text" id="input">Good Job :) </textarea>`;
        nextButton.innerHTML = `<button id="htmlNextButton" onclick=btn()>Next</button>`;
        removeValue.innerHTML = "";

    } else if (randomValue == 31 && inputAnswer !== htmlAnswerArr[31].A31) {
        displayAnswer.innerHTML = `<textarea name="text" id="input">&lta href="html_images.asp"&gtHTML Images&lt/a&gt</textarea>`;
        incorrectValue.innerHTML = "Incorrect..";
        nextButton.innerHTML = `<button id="htmlNextButton" onclick=btn()>Next</button>`;
        removeValue.innerHTML = "";



    } else if (randomValue == 32 && inputAnswer == htmlAnswerArr[32].A32) {
        correctValue.innerHTML = "Correct..";
        displayAnswer.innerHTML = `<textarea name="text" id="input">Good Job :) </textarea>`;
        nextButton.innerHTML = `<button id="htmlNextButton" onclick=btn()>Next</button>`;
        removeValue.innerHTML = "";

    } else if (randomValue == 32 && inputAnswer !== htmlAnswerArr[32].A32) {
        displayAnswer.innerHTML = `<textarea name="text" id="input">&lta href="html_images.asp" target="_blank"&gtHTML Images&lt/a&gt</textarea>`;
        incorrectValue.innerHTML = "Incorrect..";
        nextButton.innerHTML = `<button id="htmlNextButton" onclick=btn()>Next</button>`;
        removeValue.innerHTML = "";



    } else if (randomValue == 33 && inputAnswer == htmlAnswerArr[33].A33) {
        correctValue.innerHTML = "Correct..";
        displayAnswer.innerHTML = `<textarea name="text" id="input">Good Job :) </textarea>`;
        nextButton.innerHTML = `<button id="htmlNextButton" onclick=btn()>Next</button>`;
        removeValue.innerHTML = "";

    } else if (randomValue == 33 && inputAnswer !== htmlAnswerArr[33].A33) {
        displayAnswer.innerHTML = `<textarea name="text" id="input">&lta href="html_images.asp" target="_blank" style="text-decoration:none"&gtHTML Images&lt/a&gt</textarea>`;
        incorrectValue.innerHTML = "Incorrect..";
        nextButton.innerHTML = `<button id="htmlNextButton" onclick=btn()>Next</button>`;
        removeValue.innerHTML = "";



    } else if (randomValue == 34 && inputAnswer == htmlAnswerArr[34].A34) {
        correctValue.innerHTML = "Correct..";
        displayAnswer.innerHTML = `<textarea name="text" id="input">Good Job :) </textarea>`;
        nextButton.innerHTML = `<button id="htmlNextButton" onclick=btn()>Next</button>`;
        removeValue.innerHTML = "";

    } else if (randomValue == 34 && inputAnswer !== htmlAnswerArr[34].A34) {
        displayAnswer.innerHTML = `<textarea name="text" id="input">&lta href="https://www.google.com"&gt 
        &ltimg src="smiley.gif" alt="HTML tutorial" style="width:42px;height:42px;border:0"&gt
        &lt/a&gt</textarea>`;
        incorrectValue.innerHTML = "Incorrect..";
        nextButton.innerHTML = `<button id="htmlNextButton" onclick=btn()>Next</button>`;
        removeValue.innerHTML = "";



    } else if (randomValue == 35 && inputAnswer == htmlAnswerArr[35].A35) {
        correctValue.innerHTML = "Correct..";
        displayAnswer.innerHTML = `<textarea name="text" id="input">Good Job :) </textarea>`;
        nextButton.innerHTML = `<button id="htmlNextButton" onclick=btn()>Next</button>`;
        removeValue.innerHTML = "";

    } else if (randomValue == 35 && inputAnswer !== htmlAnswerArr[35].A35) {
        displayAnswer.innerHTML = `<textarea name="text" id="input">&ltimg src="programming.gif" alt="Computer Man" width="96" height="96"&gt</textarea>`;
        incorrectValue.innerHTML = "Incorrect..";
        nextButton.innerHTML = `<button id="htmlNextButton" onclick=btn()>Next</button>`;
        removeValue.innerHTML = "";



    } else if (randomValue == 36 && inputAnswer == htmlAnswerArr[36].A36) {
        correctValue.innerHTML = "Correct..";
        displayAnswer.innerHTML = `<textarea name="text" id="input">Good Job :) </textarea>`;
        nextButton.innerHTML = `<button id="htmlNextButton" onclick=btn()>Next</button>`;
        removeValue.innerHTML = "";

    } else if (randomValue == 36 && inputAnswer !== htmlAnswerArr[36].A36) {
        displayAnswer.innerHTML = `<textarea name="text" id="input">&ltimg src="html5.gif" alt="HTML5 Icon" style="width:256px;height:256px;"&gt</textarea>`;
        incorrectValue.innerHTML = "Incorrect..";
        nextButton.innerHTML = `<button id="htmlNextButton" onclick=btn()>Next</button>`;
        removeValue.innerHTML = "";

        
        

    } else if (randomValue == 37 && inputAnswer == htmlAnswerArr[37].A37) {
        correctValue.innerHTML = "Correct..";
        displayAnswer.innerHTML = `<textarea name="text" id="input">Good Job :) </textarea>`;
        nextButton.innerHTML = `<button id="htmlNextButton" onclick=btn()>Next</button>`;
        removeValue.innerHTML = "";

    } else if (randomValue == 37 && inputAnswer !== htmlAnswerArr[37].A37) {
        displayAnswer.innerHTML = `<textarea name="text" id="input">&ltimg src="smiley.gif" alt="Smiley face" style="float:left;width:42px;height:42px;"&gt</textarea>`;
        incorrectValue.innerHTML = "Incorrect..";
        nextButton.innerHTML = `<button id="htmlNextButton" onclick=btn()>Next</button>`;
        removeValue.innerHTML = "";



    } else if (randomValue == 38 && inputAnswer == htmlAnswerArr[38].A38) {
        correctValue.innerHTML = "Correct..";
        displayAnswer.innerHTML = `<textarea name="text" id="input">Good Job :) </textarea>`;
        nextButton.innerHTML = `<button id="htmlNextButton" onclick=btn()>Next</button>`;
        removeValue.innerHTML = "";

    } else if (randomValue == 38 && inputAnswer !== htmlAnswerArr[38].A38) {
        displayAnswer.innerHTML = `<textarea name="text" id="input">&ltimg src="pic_trulli.jpg" style="width:304px;height:228px;"&gt</textarea>`;
        incorrectValue.innerHTML = "Incorrect..";
        nextButton.innerHTML = `<button id="htmlNextButton" onclick=btn()>Next</button>`;
        removeValue.innerHTML = "";



    } else if (randomValue == 39 && inputAnswer == htmlAnswerArr[39].A39) {
        correctValue.innerHTML = "Correct..";
        displayAnswer.innerHTML = `<textarea name="text" id="input">Good Job :) </textarea>`;
        nextButton.innerHTML = `<button id="htmlNextButton" onclick=btn()>Next</button>`;
        removeValue.innerHTML = "";

    } else if (randomValue == 39 && inputAnswer !== htmlAnswerArr[39].A39) {
        displayAnswer.innerHTML = `<textarea name="text" id="input">&ltimg src="google.jpg" alt="google.com" width="135" height="50"&gt</textarea>`;
        incorrectValue.innerHTML = "Incorrect..";
        nextButton.innerHTML = `<button id="htmlNextButton" onclick=btn()>Next</button>`;
        removeValue.innerHTML = "";



    } else if (randomValue == 40 && inputAnswer == htmlAnswerArr[40].A40) {
        correctValue.innerHTML = "Correct..";
        displayAnswer.innerHTML = `<textarea name="text" id="input">Good Job :) </textarea>`;
        nextButton.innerHTML = `<button id="htmlNextButton" onclick=btn()>Next</button>`;
        removeValue.innerHTML = "";

    } else if (randomValue == 40 && inputAnswer !== htmlAnswerArr[40].A40) {
        displayAnswer.innerHTML = `<textarea name="text" id="input">&ltcaption&gtNames&lt/caption&gt</textarea>`;
        incorrectValue.innerHTML = "Incorrect..";
        nextButton.innerHTML = `<button id="htmlNextButton" onclick=btn()>Next</button>`;
        removeValue.innerHTML = "";



    } else if (randomValue == 41 && inputAnswer == htmlAnswerArr[41].A41) {
        correctValue.innerHTML = "Correct..";
        displayAnswer.innerHTML = `<textarea name="text" id="input">Good Job :) </textarea>`;
        nextButton.innerHTML = `<button id="htmlNextButton" onclick=btn()>Next</button>`;
        removeValue.innerHTML = "";

    } else if (randomValue == 41 && inputAnswer !== htmlAnswerArr[41].A41) {
        displayAnswer.innerHTML = `<textarea name="text" id="input">&ltdl&gt 
        &ltdt&gtCoffee&lt/dt&gt 
        &ltdd&gt- black hot drink&lt/dd&gt 
        &ltdt&gtMilk&lt/dt&gt 
        &ltdd&gt- white cold drink&lt/dd&gt 
        &lt/dl&gt</textarea>`;
        incorrectValue.innerHTML = "Incorrect..";
        nextButton.innerHTML = `<button id="htmlNextButton" onclick=btn()>Next</button>`;
        removeValue.innerHTML = "";



    } else if (randomValue == 42 && inputAnswer == htmlAnswerArr[42].A42) {
        correctValue.innerHTML = "Correct..";
        displayAnswer.innerHTML = `<textarea name="text" id="input">Good Job :) </textarea>`;
        nextButton.innerHTML = `<button id="htmlNextButton" onclick=btn()>Next</button>`;
        removeValue.innerHTML = "";

    } else if (randomValue == 42 && inputAnswer !== htmlAnswerArr[42].A42) {
        displayAnswer.innerHTML = `<textarea name="text" id="input">&ltinput type="text" name="firstname" value="John" disabled&gt</textarea>`;
        incorrectValue.innerHTML = "Incorrect..";
        nextButton.innerHTML = `<button id="htmlNextButton" onclick=btn()>Next</button>`;
        removeValue.innerHTML = "";



    } else if (randomValue == 43 && inputAnswer == htmlAnswerArr[43].A43) {
        correctValue.innerHTML = "Correct..";
        displayAnswer.innerHTML = `<textarea name="text" id="input">Good Job :) </textarea>`;
        nextButton.innerHTML = `<button id="htmlNextButton" onclick=btn()>Next</button>`;
        removeValue.innerHTML = "";

    } else if (randomValue == 43 && inputAnswer !== htmlAnswerArr[43].A43) {
        displayAnswer.innerHTML = `<textarea name="text" id="input">&ltinput type="button" value="OK"&gt</textarea>`;
        incorrectValue.innerHTML = "Incorrect..";
        nextButton.innerHTML = `<button id="htmlNextButton" onclick=btn()>Next</button>`;
        removeValue.innerHTML = "";



    } else if (randomValue == 44 && inputAnswer == htmlAnswerArr[44].A44) {
        correctValue.innerHTML = "Correct..";
        displayAnswer.innerHTML = `<textarea name="text" id="input">Good Job :) </textarea>`;
        nextButton.innerHTML = `<button id="htmlNextButton" onclick=btn()>Next</button>`;
        removeValue.innerHTML = "";

    } else if (randomValue == 44 && inputAnswer !== htmlAnswerArr[44].A44) {
        displayAnswer.innerHTML = `<textarea name="text" id="input">&ltform&gt 
        &ltinput type="radio" name="gender" value="male"&gt Male 
        &ltinput type="radio" name="gender" value="female"&gt Female 
        &lt/form&gt</textarea>`;
        incorrectValue.innerHTML = "Incorrect..";
        nextButton.innerHTML = `<button id="htmlNextButton" onclick=btn()>Next</button>`;
        removeValue.innerHTML = "";



    } else if (randomValue == 45 && inputAnswer == htmlAnswerArr[45].A45) {
        correctValue.innerHTML = "Correct..";
        displayAnswer.innerHTML = `<textarea name="text" id="input">Good Job :) </textarea>`;
        nextButton.innerHTML = `<button id="htmlNextButton" onclick=btn()>Next</button>`;
        removeValue.innerHTML = "";

    } else if (randomValue == 45 && inputAnswer !== htmlAnswerArr[45].A45) {
        displayAnswer.innerHTML = `<textarea name="text" id="input">&ltselect name="cars"&gt 
        &ltoption value="volvo"&gtVolvo&lt/option&gt 
        &ltoption value="ford"&gtFord&lt/option&gt 
        &ltoption value="fiat"&gtFiat&lt/option&gt 
        &ltoption value="audi"&gtAudi&lt/option&gt 
        &lt/select&gt</textarea>`;
        incorrectValue.innerHTML = "Incorrect..";
        nextButton.innerHTML = `<button id="htmlNextButton" onclick=btn()>Next</button>`;
        removeValue.innerHTML = "";



    } else if (randomValue == 46 && inputAnswer == htmlAnswerArr[46].A46) {
        correctValue.innerHTML = "Correct..";
        displayAnswer.innerHTML = `<textarea name="text" id="input">Good Job :) </textarea>`;
        nextButton.innerHTML = `<button id="htmlNextButton" onclick=btn()>Next</button>`;
        removeValue.innerHTML = "";

    } else if (randomValue == 46 && inputAnswer !== htmlAnswerArr[46].A46) {
        displayAnswer.innerHTML = `<textarea name="text" id="input">&lttextarea name="note"&gt&lt/textarea&gt</textarea>`;
        incorrectValue.innerHTML = "Incorrect..";
        nextButton.innerHTML = `<button id="htmlNextButton" onclick=btn()>Next</button>`;
        removeValue.innerHTML = "";



    } else if (randomValue == 47 && inputAnswer == htmlAnswerArr[47].A47) {
        correctValue.innerHTML = "Correct..";
        displayAnswer.innerHTML = `<textarea name="text" id="input">Good Job :) </textarea>`;
        nextButton.innerHTML = `<button id="htmlNextButton" onclick=btn()>Next</button>`;
        removeValue.innerHTML = "";

    } else if (randomValue == 47 && inputAnswer !== htmlAnswerArr[47].A47) {
        displayAnswer.innerHTML = `<textarea name="text" id="input">&ltbutton type="button" onclick="alert("Hello World!")"&gt Click Me!&lt/button&gt</textarea>`;
        incorrectValue.innerHTML = "Incorrect..";
        nextButton.innerHTML = `<button id="htmlNextButton" onclick=btn()>Next</button>`;
        removeValue.innerHTML = "";



    } else if (randomValue == 48 && inputAnswer == htmlAnswerArr[48].A48) {
        correctValue.innerHTML = "Correct..";
        displayAnswer.innerHTML = `<textarea name="text" id="input">Good Job :) </textarea>`;
        nextButton.innerHTML = `<button id="htmlNextButton" onclick=btn()>Next</button>`;
        removeValue.innerHTML = "";

    } else if (randomValue == 48 && inputAnswer !== htmlAnswerArr[48].A48) {
        displayAnswer.innerHTML = `<textarea name="text" id="input">&ltinput type="text"&gt</textarea>`;
        incorrectValue.innerHTML = "Incorrect..";
        nextButton.innerHTML = `<button id="htmlNextButton" onclick=btn()>Next</button>`;
        removeValue.innerHTML = "";



    } else if (randomValue == 49 && inputAnswer == htmlAnswerArr[49].A49) {
        correctValue.innerHTML = "Correct..";
        displayAnswer.innerHTML = `<textarea name="text" id="input">Good Job :) </textarea>`;
        nextButton.innerHTML = `<button id="htmlNextButton" onclick=btn()>Next</button>`;
        removeValue.innerHTML = "";

    } else if (randomValue == 49 && inputAnswer !== htmlAnswerArr[49].A49) {
        displayAnswer.innerHTML = `<textarea name="text" id="input">&ltinput type="submit"&gt</textarea>`;
        incorrectValue.innerHTML = "Incorrect..";
        nextButton.innerHTML = `<button id="htmlNextButton" onclick=btn()>Next</button>`;
        removeValue.innerHTML = "";



    } else if (randomValue == 50 && inputAnswer == htmlAnswerArr[50].A50) {
        correctValue.innerHTML = "Correct..";
        displayAnswer.innerHTML = `<textarea name="text" id="input">Good Job :) </textarea>`;
        nextButton.innerHTML = `<button id="htmlNextButton" onclick=btn()>Next</button>`;
        removeValue.innerHTML = "";

    } else if (randomValue == 50 && inputAnswer !== htmlAnswerArr[50].A50) {
        displayAnswer.innerHTML = `<textarea name="text" id="input">&ltinput type="text" name="firstname" value="John"&gt</textarea>`;
        incorrectValue.innerHTML = "Incorrect..";
        nextButton.innerHTML = `<button id="htmlNextButton" onclick=btn()>Next</button>`;
        removeValue.innerHTML = "";



    } else if (randomValue == 51 && inputAnswer == htmlAnswerArr[51].A51) {
        correctValue.innerHTML = "Correct..";
        displayAnswer.innerHTML = `<textarea name="text" id="input">Good Job :) </textarea>`;
        nextButton.innerHTML = `<button id="htmlNextButton" onclick=btn()>Next</button>`;
        removeValue.innerHTML = "";

    } else if (randomValue == 51 && inputAnswer !== htmlAnswerArr[51].A51) {
        displayAnswer.innerHTML = `<textarea name="text" id="input">&ltinput type="text" name="firstname" value="John" size="40"&gt</textarea>`;
        incorrectValue.innerHTML = "Incorrect..";
        nextButton.innerHTML = `<button id="htmlNextButton" onclick=btn()>Next</button>`;
        removeValue.innerHTML = "";



    } else if (randomValue == 52 && inputAnswer == htmlAnswerArr[52].A52) {
        correctValue.innerHTML = "Correct..";
        displayAnswer.innerHTML = `<textarea name="text" id="input">Good Job :) </textarea>`;
        nextButton.innerHTML = `<button id="htmlNextButton" onclick=btn()>Next</button>`;
        removeValue.innerHTML = "";

    } else if (randomValue == 52 && inputAnswer !== htmlAnswerArr[52].A52) {
        displayAnswer.innerHTML = `<textarea name="text" id="input">&ltinput type="text" name="fname" placeholder="First name"&gt</textarea>`;
        incorrectValue.innerHTML = "Incorrect..";
        nextButton.innerHTML = `<button id="htmlNextButton" onclick=btn()>Next</button>`;
        removeValue.innerHTML = "";



    } else if (randomValue == 53 && inputAnswer == htmlAnswerArr[53].A53) {
        correctValue.innerHTML = "Correct..";
        displayAnswer.innerHTML = `<textarea name="text" id="input">Good Job :) </textarea>`;
        nextButton.innerHTML = `<button id="htmlNextButton" onclick=btn()>Next</button>`;
        removeValue.innerHTML = "";

    } else if (randomValue == 53 && inputAnswer !== htmlAnswerArr[53].A53) {
        displayAnswer.innerHTML = `<textarea name="text" id="input">&ltp&gtThis is a paragraph.&lt/p&gt</textarea>`;
        incorrectValue.innerHTML = "Incorrect..";
        nextButton.innerHTML = `<button id="htmlNextButton" onclick=btn()>Next</button>`;
        removeValue.innerHTML = "";



    }

    else {
        incorrectValue.innerHTML = "Incorrect..";
        nextButton.innerHTML = `<button id="htmlNextButton" onclick=btn()>Next</button>`;
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
    document.getElementById("remove").innerHTML = `<textarea name="text" cols="40" rows="5"id="input"></textarea></br><button id = "htmlStartButton" onclick="submit()">Submit</button>`;/* to create next text area and Submit button. */
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
        cssDisplayAnswer.innerHTML = `<textarea name="text" id="input">
        Good Job :) </textarea>`;
        cssNextButton.innerHTML = `<button id="cssNextButton" onclick=cssBtn()>Next</button>`; /* creating next button with cssBtn()function*/
        cssRemoveValue.innerHTML = "";/* removing in html answer*/



    } else if (cssRandomValue == 0 && cssInputAnswer !== cssAnswerArr[0].A0) {/*  if random value not == then giving then display the answere.*/
        cssDisplayAnswer.innerHTML = `<textarea name="text" id="input">
        p {
            color: red;
          }
          </textarea>`;
        cssIncorrectValue.innerHTML = "Incorrect..";
        cssNextButton.innerHTML = `<button id="cssNextButton" onclick=cssBtn()>Next</button>`;
        cssRemoveValue.innerHTML = "";



    } else if (cssRandomValue == 1 && cssInputAnswer == cssAnswerArr[1].A1) {
        cssCorrectValue.innerHTML = "Correct..";
        cssDisplayAnswer.innerHTML = `<textarea name="text" id="input">
        Good Job :) </textarea>`;
        cssNextButton.innerHTML = `<button id="cssNextButton" onclick=cssBtn()>Next</button>`;
        cssRemoveValue.innerHTML = "";

    } else if (cssRandomValue == 1 && cssInputAnswer !== cssAnswerArr[1].A1) {
        cssDisplayAnswer.innerHTML = `<textarea name="text" id="input">
        .colortext {
            color: red;
          }
          </textarea>`;
        cssIncorrectValue.innerHTML = "Incorrect..";
        cssNextButton.innerHTML = `<button id="cssNextButton" onclick=cssBtn()>Next</button>`;
        cssRemoveValue.innerHTML = "";



    } else if (cssRandomValue == 2 && cssInputAnswer == cssAnswerArr[2].A2) {
        cssCorrectValue.innerHTML = "Correct..";
        cssDisplayAnswer.innerHTML = `<textarea name="text" id="input">
        Good Job :) </textarea>`;
        cssNextButton.innerHTML = `<button id="cssNextButton" onclick=cssBtn()>Next</button>`;
        cssRemoveValue.innerHTML = "";

    } else if (cssRandomValue == 2 && cssInputAnswer !== cssAnswerArr[2].A2) {
        cssDisplayAnswer.innerHTML = `<textarea name="text" id="input">
        h1, p {
            color: red;
          }
          </textarea>`;
        cssIncorrectValue.innerHTML = "Incorrect..";
        cssNextButton.innerHTML = `<button id="cssNextButton" onclick=cssBtn()>Next</button>`;
        cssRemoveValue.innerHTML = "";



    } else if (cssRandomValue == 3 && cssInputAnswer == cssAnswerArr[3].A3) {
        cssCorrectValue.innerHTML = "Correct..";
        cssDisplayAnswer.innerHTML = `<textarea name="text" id="input">
        Good Job :) </textarea>`;
        cssNextButton.innerHTML = `<button id="cssNextButton" onclick=cssBtn()>Next</button>`;
        cssRemoveValue.innerHTML = "";

    } else if (cssRandomValue == 3 && cssInputAnswer !== cssAnswerArr[3].A3) {
        cssDisplayAnswer.innerHTML = `<textarea name="text" id="input">
        &ltlink rel="stylesheet" type="text/css" href="mystyle.css"&gt</textarea>`;
        cssIncorrectValue.innerHTML = "Incorrect..";
        cssNextButton.innerHTML = `<button id="cssNextButton" onclick=cssBtn()>Next</button>`;
        cssRemoveValue.innerHTML = "";



    } else if (cssRandomValue == 4 && cssInputAnswer == cssAnswerArr[4].A4) {
        cssCorrectValue.innerHTML = "Correct..";
        cssDisplayAnswer.innerHTML = `<textarea name="text" id="input">
        Good Job :) </textarea>`;
        cssNextButton.innerHTML = `<button id="cssNextButton" onclick=cssBtn()>Next</button>`;
        cssRemoveValue.innerHTML = "";

    } else if (cssRandomValue == 4 && cssInputAnswer !== cssAnswerArr[4].A4) {
        cssDisplayAnswer.innerHTML = `<textarea name="text" id="input">
        &ltstyle&gt
        body {
          background-color: linen;
        }
        &lt/style&gt
        </textarea>`;
        cssIncorrectValue.innerHTML = "Incorrect..";
        cssNextButton.innerHTML = `<button id="cssNextButton" onclick=cssBtn()>Next</button>`;
        cssRemoveValue.innerHTML = "";



    } else if (cssRandomValue == 5 && cssInputAnswer == cssAnswerArr[5].A5) {
        cssCorrectValue.innerHTML = "Correct..";
        cssDisplayAnswer.innerHTML = `<textarea name="text" id="input">
        Good Job :) </textarea>`;
        cssNextButton.innerHTML = `<button id="cssNextButton" onclick=cssBtn()>Next</button>`;
        cssRemoveValue.innerHTML = "";

    } else if (cssRandomValue == 5 && cssInputAnswer !== cssAnswerArr[5].A5) {
        cssDisplayAnswer.innerHTML = `<textarea name="text" id="input">
        &ltbody style="background-color: linen"&gt</textarea>`;
        cssIncorrectValue.innerHTML = "Incorrect..";
        cssNextButton.innerHTML = `<button id="cssNextButton" onclick=cssBtn()>Next</button>`;
        cssRemoveValue.innerHTML = "";



    } else if (cssRandomValue == 6 && cssInputAnswer == cssAnswerArr[6].A6) {
        cssCorrectValue.innerHTML = "Correct..";
        cssDisplayAnswer.innerHTML = `<textarea name="text" id="input">
        Good Job :) </textarea>`;
        cssNextButton.innerHTML = `<button id="cssNextButton" onclick=cssBtn()>Next</button>`;
        cssRemoveValue.innerHTML = "";

    } else if (cssRandomValue == 6 && cssInputAnswer !== cssAnswerArr[6].A6) {
        cssDisplayAnswer.innerHTML = `<textarea name="text" id="input">
        body {
            background-color: linen;
          }
          h1 {
            background-color: lightblue;
          }
          </textarea>`;
        cssIncorrectValue.innerHTML = "Incorrect..";
        cssNextButton.innerHTML = `<button id="cssNextButton" onclick=cssBtn()>Next</button>`;
        cssRemoveValue.innerHTML = "";



    } else if (cssRandomValue == 7 && cssInputAnswer == cssAnswerArr[7].A7) {
        cssCorrectValue.innerHTML = "Correct..";
        cssDisplayAnswer.innerHTML = `<textarea name="text" id="input">
        Good Job :) </textarea>`;
        cssNextButton.innerHTML = `<button id="cssNextButton" onclick=cssBtn()>Next</button>`;
        cssRemoveValue.innerHTML = "";

    } else if (cssRandomValue == 7 && cssInputAnswer !== cssAnswerArr[7].A7) {
        cssDisplayAnswer.innerHTML = `<textarea name="text" id="input">
        body {
            background-image: url("paper.gif");
          }
          </textarea>`;
        cssIncorrectValue.innerHTML = "Incorrect..";
        cssNextButton.innerHTML = `<button id="cssNextButton" onclick=cssBtn()>Next</button>`;
        cssRemoveValue.innerHTML = "";



    } else if (cssRandomValue == 8 && cssInputAnswer == cssAnswerArr[8].A8) {
        cssCorrectValue.innerHTML = "Correct..";
        cssDisplayAnswer.innerHTML = `<textarea name="text" id="input">
        Good Job :) </textarea>`;
        cssNextButton.innerHTML = `<button id="cssNextButton" onclick=cssBtn()>Next</button>`;
        cssRemoveValue.innerHTML = "";

    } else if (cssRandomValue == 8 && cssInputAnswer !== cssAnswerArr[8].A8) {
        cssDisplayAnswer.innerHTML = `<textarea name="text" id="input">
        body {
            background-image: url("gradient_bg_vertical.png");
        background-repeat: repeat-y;
        }
        </textarea>`;
        cssIncorrectValue.innerHTML = "Incorrect..";
        cssNextButton.innerHTML = `<button id="cssNextButton" onclick=cssBtn()>Next</button>`;
        cssRemoveValue.innerHTML = "";



    } else if (cssRandomValue == 9 && cssInputAnswer == cssAnswerArr[9].A9) {
        cssCorrectValue.innerHTML = "Correct..";
        cssDisplayAnswer.innerHTML = `<textarea name="text" id="input">
        Good Job :) </textarea>`;
        cssNextButton.innerHTML = `<button id="cssNextButton" onclick=cssBtn()>Next</button>`;
        cssRemoveValue.innerHTML = "";

    } else if (cssRandomValue == 9 && cssInputAnswer !== cssAnswerArr[9].A9) {
        cssDisplayAnswer.innerHTML = `<textarea name="text" id="input">
        body {
            background-image: url("img_tree.png");
            background-repeat: no-repeat;
            background-position: top right;
          }
          </textarea>`;
        cssIncorrectValue.innerHTML = "Incorrect..";
        cssNextButton.innerHTML = `<button id="cssNextButton" onclick=cssBtn()>Next</button>`;
        cssRemoveValue.innerHTML = "";



    } else if (cssRandomValue == 10 && cssInputAnswer == cssAnswerArr[10].A10) {
        cssCorrectValue.innerHTML = "Correct..";
        cssDisplayAnswer.innerHTML = `<textarea name="text" id="input">
        Good Job :) </textarea>`;
        cssNextButton.innerHTML = `<button id="cssNextButton" onclick=cssBtn()>Next</button>`;
        cssRemoveValue.innerHTML = "";

    } else if (cssRandomValue == 10 && cssInputAnswer !== cssAnswerArr[10].A10) {
        cssDisplayAnswer.innerHTML = `<textarea name="text" id="input">
        body {
            background: url("img_tree.png") no-repeat top right;
          }
          </textarea>`;
        cssIncorrectValue.innerHTML = "Incorrect..";
        cssNextButton.innerHTML = `<button id="cssNextButton" onclick=cssBtn()>Next</button>`;
        cssRemoveValue.innerHTML = "";



    } else if (cssRandomValue == 11 && cssInputAnswer == cssAnswerArr[11].A11) {
        cssCorrectValue.innerHTML = "Correct..";
        cssDisplayAnswer.innerHTML = `<textarea name="text" id="input">
        Good Job :) </textarea>`;
        cssNextButton.innerHTML = `<button id="cssNextButton" onclick=cssBtn()>Next</button>`;
        cssRemoveValue.innerHTML = "";

    } else if (cssRandomValue == 11 && cssInputAnswer !== cssAnswerArr[11].A11) {
        cssDisplayAnswer.innerHTML = `<textarea name="text" id="input">
        p {
            border-style: dotted;
            border-width: 4px;
          }
          </textarea>`;
        cssIncorrectValue.innerHTML = "Incorrect..";
        cssNextButton.innerHTML = `<button id="cssNextButton" onclick=cssBtn()>Next</button>`;
        cssRemoveValue.innerHTML = "";



    } else if (cssRandomValue == 12 && cssInputAnswer == cssAnswerArr[12].A12) {
        cssCorrectValue.innerHTML = "Correct..";
        cssDisplayAnswer.innerHTML = `<textarea name="text" id="input">
        Good Job :) </textarea>`;
        cssNextButton.innerHTML = `<button id="cssNextButton" onclick=cssBtn()>Next</button>`;
        cssRemoveValue.innerHTML = "";

    } else if (cssRandomValue == 12 && cssInputAnswer !== cssAnswerArr[12].A12) {
        cssDisplayAnswer.innerHTML = `<textarea name="text" id="input">
        p {
            border-style: dotted;
            border-width: 4px;
            border-color: red;
          }  
          </textarea>`;
        cssIncorrectValue.innerHTML = "Incorrect..";
        cssNextButton.innerHTML = `<button id="cssNextButton" onclick=cssBtn()>Next</button>`;
        cssRemoveValue.innerHTML = "";



    } else if (cssRandomValue == 13 && cssInputAnswer == cssAnswerArr[13].A13) {
        cssCorrectValue.innerHTML = "Correct..";
        cssDisplayAnswer.innerHTML = `<textarea name="text" id="input">
        Good Job :) </textarea>`;
        cssNextButton.innerHTML = `<button id="cssNextButton" onclick=cssBtn()>Next</button>`;
        cssRemoveValue.innerHTML = "";

    } else if (cssRandomValue == 13 && cssInputAnswer !== cssAnswerArr[13].A13) {
        cssDisplayAnswer.innerHTML = `<textarea name="text" id="input">
        p {
            border-top-style: dotted;
            border-top-width: 4px;
            border-top-color: red;
          }
          </textarea>`;
        cssIncorrectValue.innerHTML = "Incorrect..";
        cssNextButton.innerHTML = `<button id="cssNextButton" onclick=cssBtn()>Next</button>`;
        cssRemoveValue.innerHTML = "";



    } else if (cssRandomValue == 14 && cssInputAnswer == cssAnswerArr[14].A14) {
        cssCorrectValue.innerHTML = "Correct..";
        cssDisplayAnswer.innerHTML = `<textarea name="text" id="input">
        Good Job :) </textarea>`;
        cssNextButton.innerHTML = `<button id="cssNextButton" onclick=cssBtn()>Next</button>`;
        cssRemoveValue.innerHTML = "";

    } else if (cssRandomValue == 14 && cssInputAnswer !== cssAnswerArr[14].A14) {
        cssDisplayAnswer.innerHTML = `<textarea name="text" id="input">
        p {
            border: 10px solid green;
          }
          </textarea>`;
        cssIncorrectValue.innerHTML = "Incorrect..";
        cssNextButton.innerHTML = `<button id="cssNextButton" onclick=cssBtn()>Next</button>`;
        cssRemoveValue.innerHTML = "";



    } else if (cssRandomValue == 15 && cssInputAnswer == cssAnswerArr[15].A15) {
        cssCorrectValue.innerHTML = "Correct..";
        cssDisplayAnswer.innerHTML = `<textarea name="text" id="input">
        Good Job :) </textarea>`;
        cssNextButton.innerHTML = `<button id="cssNextButton" onclick=cssBtn()>Next</button>`;
        cssRemoveValue.innerHTML = "";

    } else if (cssRandomValue == 15 && cssInputAnswer !== cssAnswerArr[15].A15) {
        cssDisplayAnswer.innerHTML = `<textarea name="text" id="input">
        h1 {
            margin-left: 20px;
          }
          </textarea>`;
        cssIncorrectValue.innerHTML = "Incorrect..";
        cssNextButton.innerHTML = `<button id="cssNextButton" onclick=cssBtn()>Next</button>`;
        cssRemoveValue.innerHTML = "";



    } else if (cssRandomValue == 16 && cssInputAnswer == cssAnswerArr[16].A16) {
        cssCorrectValue.innerHTML = "Correct..";
        cssDisplayAnswer.innerHTML = `<textarea name="text" id="input">
        Good Job :) </textarea>`;
        cssNextButton.innerHTML = `<button id="cssNextButton" onclick=cssBtn()>Next</button>`;
        cssRemoveValue.innerHTML = "";

    } else if (cssRandomValue == 16 && cssInputAnswer !== cssAnswerArr[16].A16) {
        cssDisplayAnswer.innerHTML = `<textarea name="text" id="input">
        h1 {
            
            margin: 25px;
          }
          </textarea>`;
        cssIncorrectValue.innerHTML = "Incorrect..";
        cssNextButton.innerHTML = `<button id="cssNextButton" onclick=cssBtn()>Next</button>`;
        cssRemoveValue.innerHTML = "";



    } else if (cssRandomValue == 17 && cssInputAnswer == cssAnswerArr[17].A17) {
        cssCorrectValue.innerHTML = "Correct..";
        cssDisplayAnswer.innerHTML = `<textarea name="text" id="input">
        Good Job :) </textarea>`;
        cssNextButton.innerHTML = `<button id="cssNextButton" onclick=cssBtn()>Next</button>`;
        cssRemoveValue.innerHTML = "";

    } else if (cssRandomValue == 17 && cssInputAnswer !== cssAnswerArr[17].A17) {
        cssDisplayAnswer.innerHTML = `<textarea name="text" id="input">
        h1 {
            
            margin: 50px 25px;
          }
          </textarea>`;
        cssIncorrectValue.innerHTML = "Incorrect..";
        cssNextButton.innerHTML = `<button id="cssNextButton" onclick=cssBtn()>Next</button>`;
        cssRemoveValue.innerHTML = "";



    } else if (cssRandomValue == 18 && cssInputAnswer == cssAnswerArr[18].A18) {
        cssCorrectValue.innerHTML = "Correct..";
        cssDisplayAnswer.innerHTML = `<textarea name="text" id="input">
        Good Job :) </textarea>`;
        cssNextButton.innerHTML = `<button id="cssNextButton" onclick=cssBtn()>Next</button>`;
        cssRemoveValue.innerHTML = "";

    } else if (cssRandomValue == 18 && cssInputAnswer !== cssAnswerArr[18].A18) {
        cssDisplayAnswer.innerHTML = `<textarea name="text" id="input">
        h1 {
            margin: auto;
          }
          </textarea>`;
        cssIncorrectValue.innerHTML = "Incorrect..";
        cssNextButton.innerHTML = `<button id="cssNextButton" onclick=cssBtn()>Next</button>`;
        cssRemoveValue.innerHTML = "";



    } else if (cssRandomValue == 19 && cssInputAnswer == cssAnswerArr[19].A19) {
        cssCorrectValue.innerHTML = "Correct..";
        cssDisplayAnswer.innerHTML = `<textarea name="text" id="input">
        Good Job :) </textarea>`;
        cssNextButton.innerHTML = `<button id="cssNextButton" onclick=cssBtn()>Next</button>`;
        cssRemoveValue.innerHTML = "";

    } else if (cssRandomValue == 19 && cssInputAnswer !== cssAnswerArr[19].A19) {
        cssDisplayAnswer.innerHTML = `<textarea name="text" id="input">
        p {
            padding-top: 30px;
          }
          </textarea>`;
        cssIncorrectValue.innerHTML = "Incorrect..";
        cssNextButton.innerHTML = `<button id="cssNextButton" onclick=cssBtn()>Next</button>`;
        cssRemoveValue.innerHTML = "";



    } else if (cssRandomValue == 20 && cssInputAnswer == cssAnswerArr[20].A20) {
        cssCorrectValue.innerHTML = "Correct..";
        cssDisplayAnswer.innerHTML = `<textarea name="text" id="input">
        Good Job :) </textarea>`;
        cssNextButton.innerHTML = `<button id="cssNextButton" onclick=cssBtn()>Next</button>`;
        cssRemoveValue.innerHTML = "";

    } else if (cssRandomValue == 20 && cssInputAnswer !== cssAnswerArr[20].A20) {
        cssDisplayAnswer.innerHTML = `<textarea name="text" id="input">
        p {
            background-color: lightblue;
            padding: 50px;
          }
          </textarea>`;
        cssIncorrectValue.innerHTML = "Incorrect..";
        cssNextButton.innerHTML = `<button id="cssNextButton" onclick=cssBtn()>Next</button>`;
        cssRemoveValue.innerHTML = "";



    } else if (cssRandomValue == 21 && cssInputAnswer == cssAnswerArr[21].A21) {
        cssCorrectValue.innerHTML = "Correct..";
        cssDisplayAnswer.innerHTML = `<textarea name="text" id="input">
        Good Job :) </textarea>`;
        cssNextButton.innerHTML = `<button id="cssNextButton" onclick=cssBtn()>Next</button>`;
        cssRemoveValue.innerHTML = "";

    } else if (cssRandomValue == 21 && cssInputAnswer !== cssAnswerArr[21].A21) {
        cssDisplayAnswer.innerHTML = `<textarea name="text" id="input">
        p {
            background-color: lightblue;
            padding: 25px 50px;
          }
          </textarea>`;
        cssIncorrectValue.innerHTML = "Incorrect..";
        cssNextButton.innerHTML = `<button id="cssNextButton" onclick=cssBtn()>Next</button>`;
        cssRemoveValue.innerHTML = "";



    } else if (cssRandomValue == 22 && cssInputAnswer == cssAnswerArr[22].A22) {
        cssCorrectValue.innerHTML = "Correct..";
        cssDisplayAnswer.innerHTML = `<textarea name="text" id="input">
        Good Job :) </textarea>`;
        cssNextButton.innerHTML = `<button id="cssNextButton" onclick=cssBtn()>Next</button>`;
        cssRemoveValue.innerHTML = "";

    } else if (cssRandomValue == 22 && cssInputAnswer !== cssAnswerArr[22].A22) {
        cssDisplayAnswer.innerHTML = `<textarea name="text" id="input">
        h1 {
            height: 100px;
          }
          </textarea>`;
        cssIncorrectValue.innerHTML = "Incorrect..";
        cssNextButton.innerHTML = `<button id="cssNextButton" onclick=cssBtn()>Next</button>`;
        cssRemoveValue.innerHTML = "";



    } else if (cssRandomValue == 23 && cssInputAnswer == cssAnswerArr[23].A23) {
        cssCorrectValue.innerHTML = "Correct..";
        cssDisplayAnswer.innerHTML = `<textarea name="text" id="input">
        Good Job :) </textarea>`;
        cssNextButton.innerHTML = `<button id="cssNextButton" onclick=cssBtn()>Next</button>`;
        cssRemoveValue.innerHTML = "";

    } else if (cssRandomValue == 23 && cssInputAnswer !== cssAnswerArr[23].A23) {
        cssDisplayAnswer.innerHTML = `<textarea name="text" id="input">
        h1 {
            width: 50%;
          }
          </textarea>`;
        cssIncorrectValue.innerHTML = "Incorrect..";
        cssNextButton.innerHTML = `<button id="cssNextButton" onclick=cssBtn()>Next</button>`;
        cssRemoveValue.innerHTML = "";



    } else if (cssRandomValue == 24 && cssInputAnswer == cssAnswerArr[24].A24) {
        cssCorrectValue.innerHTML = "Correct..";
        cssDisplayAnswer.innerHTML = `<textarea name="text" id="input">
        Good Job :) </textarea>`;
        cssNextButton.innerHTML = `<button id="cssNextButton" onclick=cssBtn()>Next</button>`;
        cssRemoveValue.innerHTML = "";

    } else if (cssRandomValue == 24 && cssInputAnswer !== cssAnswerArr[24].A24) {
        cssDisplayAnswer.innerHTML = `<textarea name="text" id="input">
         div {
            width: 200px;
          }
          </textarea>`;
        cssIncorrectValue.innerHTML = "Incorrect..";
        cssNextButton.innerHTML = `<button id="cssNextButton" onclick=cssBtn()>Next</button>`;
        cssRemoveValue.innerHTML = "";



    } else if (cssRandomValue == 25 && cssInputAnswer == cssAnswerArr[25].A25) {
        cssCorrectValue.innerHTML = "Correct..";
        cssDisplayAnswer.innerHTML = `<textarea name="text" id="input">
        Good Job :) </textarea>`;
        cssNextButton.innerHTML = `<button id="cssNextButton" onclick=cssBtn()>Next</button>`;
        cssRemoveValue.innerHTML = "";

    } else if (cssRandomValue == 25 && cssInputAnswer !== cssAnswerArr[25].A25) {
        cssDisplayAnswer.innerHTML = `<textarea name="text" id="input">
        div {
            padding: 25px;
          }
          </textarea>`;
        cssIncorrectValue.innerHTML = "Incorrect..";
        cssNextButton.innerHTML = `<button id="cssNextButton" onclick=cssBtn()>Next</button>`;
        cssRemoveValue.innerHTML = "";



    } else if (cssRandomValue == 26 && cssInputAnswer == cssAnswerArr[26].A26) {
        cssCorrectValue.innerHTML = "Correct..";
        cssDisplayAnswer.innerHTML = `<textarea name="text" id="input">
        Good Job :) </textarea>`;
        cssNextButton.innerHTML = `<button id="cssNextButton" onclick=cssBtn()>Next</button>`;
        cssRemoveValue.innerHTML = "";

    } else if (cssRandomValue == 26 && cssInputAnswer !== cssAnswerArr[26].A26) {
        cssDisplayAnswer.innerHTML = `<textarea name="text" id="input">
        div {
            border: 25px solid navy;
          }
          </textarea>`;
        cssIncorrectValue.innerHTML = "Incorrect..";
        cssNextButton.innerHTML = `<button id="cssNextButton" onclick=cssBtn()>Next</button>`;
        cssRemoveValue.innerHTML = "";



    } else if (cssRandomValue == 27 && cssInputAnswer == cssAnswerArr[27].A27) {
        cssCorrectValue.innerHTML = "Correct..";
        cssDisplayAnswer.innerHTML = `<textarea name="text" id="input">
        Good Job :) </textarea>`;
        cssNextButton.innerHTML = `<button id="cssNextButton" onclick=cssBtn()>Next</button>`;
        cssRemoveValue.innerHTML = "";

    } else if (cssRandomValue == 27 && cssInputAnswer !== cssAnswerArr[27].A27) {
        cssDisplayAnswer.innerHTML = `<textarea name="text" id="input">
        div {
            margin: 25px;
          }
          </textarea>`;
        cssIncorrectValue.innerHTML = "Incorrect..";
        cssNextButton.innerHTML = `<button id="cssNextButton" onclick=cssBtn()>Next</button>`;
        cssRemoveValue.innerHTML = "";



    } else if (cssRandomValue == 28 && cssInputAnswer == cssAnswerArr[28].A28) {
        cssCorrectValue.innerHTML = "Correct..";
        cssDisplayAnswer.innerHTML = `<textarea name="text" id="input">
        Good Job :) </textarea>`;
        cssNextButton.innerHTML = `<button id="cssNextButton" onclick=cssBtn()>Next</button>`;
        cssRemoveValue.innerHTML = "";

    } else if (cssRandomValue == 28 && cssInputAnswer !== cssAnswerArr[28].A28) {
        cssDisplayAnswer.innerHTML = `<textarea name="text" id="input">
        p {
            outline-style: solid;
            outline-width: 5px;
          }
          </textarea>`;
        cssIncorrectValue.innerHTML = "Incorrect..";
        cssNextButton.innerHTML = `<button id="cssNextButton" onclick=cssBtn()>Next</button>`;
        cssRemoveValue.innerHTML = "";



    } else if (cssRandomValue == 29 && cssInputAnswer == cssAnswerArr[29].A29) {
        cssCorrectValue.innerHTML = "Correct..";
        cssDisplayAnswer.innerHTML = `<textarea name="text" id="input">
        Good Job :) </textarea>`;
        cssNextButton.innerHTML = `<button id="cssNextButton" onclick=cssBtn()>Next</button>`;
        cssRemoveValue.innerHTML = "";

    } else if (cssRandomValue == 29 && cssInputAnswer !== cssAnswerArr[29].A29) {
        cssDisplayAnswer.innerHTML = `<textarea name="text" id="input">
        p {
            outline-style: solid;
            outline-width: 5px;
            outline-color: green;
          }
          </textarea>`;
        cssIncorrectValue.innerHTML = "Incorrect..";
        cssNextButton.innerHTML = `<button id="cssNextButton" onclick=cssBtn()>Next</button>`;
        cssRemoveValue.innerHTML = "";



    } else if (cssRandomValue == 30 && cssInputAnswer == cssAnswerArr[30].A30) {
        cssCorrectValue.innerHTML = "Correct..";
        cssDisplayAnswer.innerHTML = `<textarea name="text" id="input">
        Good Job :) </textarea>`;
        cssNextButton.innerHTML = `<button id="cssNextButton" onclick=cssBtn()>Next</button>`;
        cssRemoveValue.innerHTML = "";

    } else if (cssRandomValue == 30 && cssInputAnswer !== cssAnswerArr[30].A30) {
        cssDisplayAnswer.innerHTML = `<textarea name="text" id="input">
        p {
            outline: red dotted 10px;
          }
          </textarea>`;
        cssIncorrectValue.innerHTML = "Incorrect..";
        cssNextButton.innerHTML = `<button id="cssNextButton" onclick=cssBtn()>Next</button>`;
        cssRemoveValue.innerHTML = "";



    } else if (cssRandomValue == 31 && cssInputAnswer == cssAnswerArr[31].A31) {
        cssCorrectValue.innerHTML = "Correct..";
        cssDisplayAnswer.innerHTML = `<textarea name="text" id="input">
        Good Job :) </textarea>`;
        cssNextButton.innerHTML = `<button id="cssNextButton" onclick=cssBtn()>Next</button>`;
        cssRemoveValue.innerHTML = "";

    } else if (cssRandomValue == 31 && cssInputAnswer !== cssAnswerArr[31].A31) {
        cssDisplayAnswer.innerHTML = `<textarea name="text" id="input">
        body {
            color: red;
          }
          
          h1 {
            color: blue;
          }
          </textarea>`;
        cssIncorrectValue.innerHTML = "Incorrect..";
        cssNextButton.innerHTML = `<button id="cssNextButton" onclick=cssBtn()>Next</button>`;
        cssRemoveValue.innerHTML = "";



    } else if (cssRandomValue == 32 && cssInputAnswer == cssAnswerArr[32].A32) {
        cssCorrectValue.innerHTML = "Correct..";
        cssDisplayAnswer.innerHTML = `<textarea name="text" id="input">
        Good Job :) </textarea>`;
        cssNextButton.innerHTML = `<button id="cssNextButton" onclick=cssBtn()>Next</button>`;
        cssRemoveValue.innerHTML = "";

    } else if (cssRandomValue == 32 && cssInputAnswer !== cssAnswerArr[32].A32) {
        cssDisplayAnswer.innerHTML = `<textarea name="text" id="input">
        h1 {
            text-align: center;
          }
          </textarea>`;
        cssIncorrectValue.innerHTML = "Incorrect..";
        cssNextButton.innerHTML = `<button id="cssNextButton" onclick=cssBtn()>Next</button>`;
        cssRemoveValue.innerHTML = "";



    } else if (cssRandomValue == 33 && cssInputAnswer == cssAnswerArr[33].A33) {
        cssCorrectValue.innerHTML = "Correct..";
        cssDisplayAnswer.innerHTML = `<textarea name="text" id="input">
        Good Job :) </textarea>`;
        cssNextButton.innerHTML = `<button id="cssNextButton" onclick=cssBtn()>Next</button>`;
        cssRemoveValue.innerHTML = "";

    } else if (cssRandomValue == 33 && cssInputAnswer !== cssAnswerArr[33].A33) {
        cssDisplayAnswer.innerHTML = `<textarea name="text" id="input">
        a {
            text-decoration: none;
          }
          </textarea>`;
        cssIncorrectValue.innerHTML = "Incorrect..";
        cssNextButton.innerHTML = `<button id="cssNextButton" onclick=cssBtn()>Next</button>`;
        cssRemoveValue.innerHTML = "";



    } else if (cssRandomValue == 34 && cssInputAnswer == cssAnswerArr[34].A34) {
        cssCorrectValue.innerHTML = "Correct..";
        cssDisplayAnswer.innerHTML = `<textarea name="text" id="input">
        Good Job :) </textarea>`;
        cssNextButton.innerHTML = `<button id="cssNextButton" onclick=cssBtn()>Next</button>`;
        cssRemoveValue.innerHTML = "";

    } else if (cssRandomValue == 34 && cssInputAnswer !== cssAnswerArr[34].A34) {
        cssDisplayAnswer.innerHTML = `<textarea name="text" id="input">
        h1 {
            text-transform: uppercase;
          }
          p {
            text-transform: capitalize;
          }
          </textarea>`;
        cssIncorrectValue.innerHTML = "Incorrect..";
        cssNextButton.innerHTML = `<button id="cssNextButton" onclick=cssBtn()>Next</button>`;
        cssRemoveValue.innerHTML = "";



    } else if (cssRandomValue == 35 && cssInputAnswer == cssAnswerArr[35].A35) {
        cssCorrectValue.innerHTML = "Correct..";
        cssDisplayAnswer.innerHTML = `<textarea name="text" id="input">
        Good Job :) </textarea>`;
        cssNextButton.innerHTML = `<button id="cssNextButton" onclick=cssBtn()>Next</button>`;
        cssRemoveValue.innerHTML = "";

    } else if (cssRandomValue == 35 && cssInputAnswer !== cssAnswerArr[35].A35) {
        cssDisplayAnswer.innerHTML = `<textarea name="text" id="input">
        p {
            text-indent: 20px;
          }
          </textarea>`;
        cssIncorrectValue.innerHTML = "Incorrect..";
        cssNextButton.innerHTML = `<button id="cssNextButton" onclick=cssBtn()>Next</button>`;
        cssRemoveValue.innerHTML = "";



    } else if (cssRandomValue == 36 && cssInputAnswer == cssAnswerArr[36].A36) {
        cssCorrectValue.innerHTML = "Correct..";
        cssDisplayAnswer.innerHTML = `<textarea name="text" id="input">
        Good Job :) </textarea>`;
        cssNextButton.innerHTML = `<button id="cssNextButton" onclick=cssBtn()>Next</button>`;
        cssRemoveValue.innerHTML = "";

    } else if (cssRandomValue == 36 && cssInputAnswer !== cssAnswerArr[36].A36) {
        cssDisplayAnswer.innerHTML = `<textarea name="text" id="input">
        body {
            font-family: "Courier New";
          }
          
          h1 {
            font-family: Verdana;
          }
          </textarea>`;
        cssIncorrectValue.innerHTML = "Incorrect..";
        cssNextButton.innerHTML = `<button id="cssNextButton" onclick=cssBtn()>Next</button>`;
        cssRemoveValue.innerHTML = "";



    } else if (cssRandomValue == 37 && cssInputAnswer == cssAnswerArr[37].A37) {
        cssCorrectValue.innerHTML = "Correct..";
        cssDisplayAnswer.innerHTML = `<textarea name="text" id="input">
        Good Job :) </textarea>`;
        cssNextButton.innerHTML = `<button id="cssNextButton" onclick=cssBtn()>Next</button>`;
        cssRemoveValue.innerHTML = "";

    } else if (cssRandomValue == 37 && cssInputAnswer !== cssAnswerArr[37].A37) {
        cssDisplayAnswer.innerHTML = `<textarea name="text" id="input">
        p {
            font-style: italic;
          }
          </textarea>`;
        cssIncorrectValue.innerHTML = "Incorrect..";
        cssNextButton.innerHTML = `<button id="cssNextButton" onclick=cssBtn()>Next</button>`;
        cssRemoveValue.innerHTML = "";



    } else if (cssRandomValue == 38 && cssInputAnswer == cssAnswerArr[38].A38) {
        cssCorrectValue.innerHTML = "Correct..";
        cssDisplayAnswer.innerHTML = `<textarea name="text" id="input">
        Good Job :) </textarea>`;
        cssNextButton.innerHTML = `<button id="cssNextButton" onclick=cssBtn()>Next</button>`;
        cssRemoveValue.innerHTML = "";

    } else if (cssRandomValue == 38 && cssInputAnswer !== cssAnswerArr[38].A38) {
        cssDisplayAnswer.innerHTML = `<textarea name="text" id="input">
        body {
            font-size: 20px;
          }
          
          h1 {
            font-size: 3em;
          }
          </textarea>`;
        cssIncorrectValue.innerHTML = "Incorrect..";
        cssNextButton.innerHTML = `<button id="cssNextButton" onclick=cssBtn()>Next</button>`;
        cssRemoveValue.innerHTML = "";



    } else if (cssRandomValue == 39 && cssInputAnswer == cssAnswerArr[39].A39) {
        cssCorrectValue.innerHTML = "Correct..";
        cssDisplayAnswer.innerHTML = `<textarea name="text" id="input">
        Good Job :) </textarea>`;
        cssNextButton.innerHTML = `<button id="cssNextButton" onclick=cssBtn()>Next</button>`;
        cssRemoveValue.innerHTML = "";

    } else if (cssRandomValue == 39 && cssInputAnswer !== cssAnswerArr[39].A39) {
        cssDisplayAnswer.innerHTML = `<textarea name="text" id="input">
        p {
            font-weight: bold;
          }
          </textarea>`;
        cssIncorrectValue.innerHTML = "Incorrect..";
        cssNextButton.innerHTML = `<button id="cssNextButton" onclick=cssBtn()>Next</button>`;
        cssRemoveValue.innerHTML = "";



    } else if (cssRandomValue == 40 && cssInputAnswer == cssAnswerArr[40].A40) {
        cssCorrectValue.innerHTML = "Correct..";
        cssDisplayAnswer.innerHTML = `<textarea name="text" id="input">
        Good Job :) </textarea>`;
        cssNextButton.innerHTML = `<button id="cssNextButton" onclick=cssBtn()>Next</button>`;
        cssRemoveValue.innerHTML = "";

    } else if (cssRandomValue == 40 && cssInputAnswer !== cssAnswerArr[40].A40) {
        cssDisplayAnswer.innerHTML = `<textarea name="text" id="input">
        p {
            font: italic 20px Verdana;
          }
          </textarea>`;
        cssIncorrectValue.innerHTML = "Incorrect..";
        cssNextButton.innerHTML = `<button id="cssNextButton" onclick=cssBtn()>Next</button>`;
        cssRemoveValue.innerHTML = "";



    } else if (cssRandomValue == 41 && cssInputAnswer == cssAnswerArr[41].A41) {
        cssCorrectValue.innerHTML = "Correct..";
        cssDisplayAnswer.innerHTML = `<textarea name="text" id="input">
        Good Job :) </textarea>`;
        cssNextButton.innerHTML = `<button id="cssNextButton" onclick=cssBtn()>Next</button>`;
        cssRemoveValue.innerHTML = "";

    } else if (cssRandomValue == 41 && cssInputAnswer !== cssAnswerArr[41].A41) {
        cssDisplayAnswer.innerHTML = `<textarea name="text" id="input">
        a {
            color: green;
          }
          </textarea>`;
        cssIncorrectValue.innerHTML = "Incorrect..";
        cssNextButton.innerHTML = `<button id="cssNextButton" onclick=cssBtn()>Next</button>`;
        cssRemoveValue.innerHTML = "";



    } else if (cssRandomValue == 42 && cssInputAnswer == cssAnswerArr[42].A42) {
        cssCorrectValue.innerHTML = "Correct..";
        cssDisplayAnswer.innerHTML = `<textarea name="text" id="input">
        Good Job :) </textarea>`;
        cssNextButton.innerHTML = `<button id="cssNextButton" onclick=cssBtn()>Next</button>`;
        cssRemoveValue.innerHTML = "";

    } else if (cssRandomValue == 42 && cssInputAnswer !== cssAnswerArr[42].A42) {
        cssDisplayAnswer.innerHTML = `<textarea name="text" id="input">
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
        cssNextButton.innerHTML = `<button id="cssNextButton" onclick=cssBtn()>Next</button>`;
        cssRemoveValue.innerHTML = "";



    } else if (cssRandomValue == 43 && cssInputAnswer == cssAnswerArr[43].A43) {
        cssCorrectValue.innerHTML = "Correct..";
        cssDisplayAnswer.innerHTML = `<textarea name="text" id="input">
        Good Job :) </textarea>`;
        cssNextButton.innerHTML = `<button id="cssNextButton" onclick=cssBtn()>Next</button>`;
        cssRemoveValue.innerHTML = "";

    } else if (cssRandomValue == 43 && cssInputAnswer !== cssAnswerArr[43].A43) {
        cssDisplayAnswer.innerHTML = `<textarea name="text" id="input">
        
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
        cssNextButton.innerHTML = `<button id="cssNextButton" onclick=cssBtn()>Next</button>`;
        cssRemoveValue.innerHTML = "";



    } else if (cssRandomValue == 44 && cssInputAnswer == cssAnswerArr[44].A44) {
        cssCorrectValue.innerHTML = "Correct..";
        cssDisplayAnswer.innerHTML = `<textarea name="text" id="input">
        Good Job :) </textarea>`;
        cssNextButton.innerHTML = `<button id="cssNextButton" onclick=cssBtn()>Next</button>`;
        cssRemoveValue.innerHTML = "";

    } else if (cssRandomValue == 44 && cssInputAnswer !== cssAnswerArr[44].A44) {
        cssDisplayAnswer.innerHTML = `<textarea name="text" id="input">
        
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
        cssNextButton.innerHTML = `<button id="cssNextButton" onclick=cssBtn()>Next</button>`;
        cssRemoveValue.innerHTML = "";



    } else if (cssRandomValue == 45 && cssInputAnswer == cssAnswerArr[45].A45) {
        cssCorrectValue.innerHTML = "Correct..";
        cssDisplayAnswer.innerHTML = `<textarea name="text" id="input">
        Good Job :) </textarea>`;
        cssNextButton.innerHTML = `<button id="cssNextButton" onclick=cssBtn()>Next</button>`;
        cssRemoveValue.innerHTML = "";

    } else if (cssRandomValue == 45 && cssInputAnswer !== cssAnswerArr[45].A45) {
        cssDisplayAnswer.innerHTML = `<textarea name="text" id="input">
        ul {
            list-style-type: square;
          }
          
          ol {
            list-style-type: upper-roman;
          }
          </textarea>`;
        cssIncorrectValue.innerHTML = "Incorrect..";
        cssNextButton.innerHTML = `<button id="cssNextButton" onclick=cssBtn()>Next</button>`;
        cssRemoveValue.innerHTML = "";



    } else if (cssRandomValue == 46 && cssInputAnswer == cssAnswerArr[46].A46) {
        cssCorrectValue.innerHTML = "Correct..";
        cssDisplayAnswer.innerHTML = `<textarea name="text" id="input">
        Good Job :) </textarea>`;
        cssNextButton.innerHTML = `<button id="cssNextButton" onclick=cssBtn()>Next</button>`;
        cssRemoveValue.innerHTML = "";

    } else if (cssRandomValue == 46 && cssInputAnswer !== cssAnswerArr[46].A46) {
        cssDisplayAnswer.innerHTML = `<textarea name="text" id="input">
        ul {
            list-style-image: url('sqpurple.gif');
          }
          </textarea>`;
        cssIncorrectValue.innerHTML = "Incorrect..";
        cssNextButton.innerHTML = `<button id="cssNextButton" onclick=cssBtn()>Next</button>`;
        cssRemoveValue.innerHTML = "";



    } else if (cssRandomValue == 47 && cssInputAnswer == cssAnswerArr[47].A47) {
        cssCorrectValue.innerHTML = "Correct..";
        cssDisplayAnswer.innerHTML = `<textarea name="text" id="input">
        Good Job :) </textarea>`;
        cssNextButton.innerHTML = `<button id="cssNextButton" onclick=cssBtn()>Next</button>`;
        cssRemoveValue.innerHTML = "";

    } else if (cssRandomValue == 47 && cssInputAnswer !== cssAnswerArr[47].A47) {
        cssDisplayAnswer.innerHTML = `<textarea name="text" id="input">
        ul {
            list-style: circle inside url('img_marker.png');
          }
          </textarea>`;
        cssIncorrectValue.innerHTML = "Incorrect..";
        cssNextButton.innerHTML = `<button id="cssNextButton" onclick=cssBtn()>Next</button>`;
        cssRemoveValue.innerHTML = "";



    } else if (cssRandomValue == 48 && cssInputAnswer == cssAnswerArr[48].A48) {
        cssCorrectValue.innerHTML = "Correct..";
        cssDisplayAnswer.innerHTML = `<textarea name="text" id="input">
        Good Job :) </textarea>`;
        cssNextButton.innerHTML = `<button id="cssNextButton" onclick=cssBtn()>Next</button>`;
        cssRemoveValue.innerHTML = "";

    } else if (cssRandomValue == 48 && cssInputAnswer !== cssAnswerArr[48].A48) {
        cssDisplayAnswer.innerHTML = `<textarea name="text" id="input">
        ul {
            list-style-type: none;
          }
          </textarea>`;
        cssIncorrectValue.innerHTML = "Incorrect..";
        cssNextButton.innerHTML = `<button id="cssNextButton" onclick=cssBtn()>Next</button>`;
        cssRemoveValue.innerHTML = "";



    } else if (cssRandomValue == 49 && cssInputAnswer == cssAnswerArr[49].A49) {
        cssCorrectValue.innerHTML = "Correct..";
        cssDisplayAnswer.innerHTML = `<textarea name="text" id="input">
        Good Job :) </textarea>`;
        cssNextButton.innerHTML = `<button id="cssNextButton" onclick=cssBtn()>Next</button>`;
        cssRemoveValue.innerHTML = "";

    } else if (cssRandomValue == 49 && cssInputAnswer !== cssAnswerArr[49].A49) {
        cssDisplayAnswer.innerHTML = `<textarea name="text" id="input">
        table, th, td {
            border: 2px solid green;
          }
          </textarea>`;
        cssIncorrectValue.innerHTML = "Incorrect..";
        cssNextButton.innerHTML = `<button id="cssNextButton" onclick=cssBtn()>Next</button>`;
        cssRemoveValue.innerHTML = "";



    } else if (cssRandomValue == 50 && cssInputAnswer == cssAnswerArr[50].A50) {
        cssCorrectValue.innerHTML = "Correct..";
        cssDisplayAnswer.innerHTML = `<textarea name="text" id="input">
        Good Job :) </textarea>`;
        cssNextButton.innerHTML = `<button id="cssNextButton" onclick=cssBtn()>Next</button>`;
        cssRemoveValue.innerHTML = "";

    } else if (cssRandomValue == 50 && cssInputAnswer !== cssAnswerArr[50].A50) {
        cssDisplayAnswer.innerHTML = `<textarea name="text" id="input">
        table {
            border-collapse: collapse;
          }
          </textarea>`;
        cssIncorrectValue.innerHTML = "Incorrect..";
        cssNextButton.innerHTML = `<button id="cssNextButton" onclick=cssBtn()>Next</button>`;
        cssRemoveValue.innerHTML = "";



    } else if (cssRandomValue == 51 && cssInputAnswer == cssAnswerArr[51].A51) {
        cssCorrectValue.innerHTML = "Correct..";
        cssDisplayAnswer.innerHTML = `<textarea name="text" id="input">
        Good Job :) </textarea>`;
        cssNextButton.innerHTML = `<button id="cssNextButton" onclick=cssBtn()>Next</button>`;
        cssRemoveValue.innerHTML = "";

    } else if (cssRandomValue == 51 && cssInputAnswer !== cssAnswerArr[51].A51) {
        cssDisplayAnswer.innerHTML = `<textarea name="text" id="input">
        table {
            width: 100%;
          }
          </textarea>`;
        cssIncorrectValue.innerHTML = "Incorrect..";
        cssNextButton.innerHTML = `<button id="cssNextButton" onclick=cssBtn()>Next</button>`;
        cssRemoveValue.innerHTML = "";



    } else if (cssRandomValue == 52 && cssInputAnswer == cssAnswerArr[52].A52) {
        cssCorrectValue.innerHTML = "Correct..";
        cssDisplayAnswer.innerHTML = `<textarea name="text" id="input">
        Good Job :) </textarea>`;
        cssNextButton.innerHTML = `<button id="cssNextButton" onclick=cssBtn()>Next</button>`;
        cssRemoveValue.innerHTML = "";

    } else if (cssRandomValue == 52 && cssInputAnswer !== cssAnswerArr[52].A52) {
        cssDisplayAnswer.innerHTML = `<textarea name="text" id="input">
        td {
            text-align: right;
          }
          </textarea>`;
        cssIncorrectValue.innerHTML = "Incorrect..";
        cssNextButton.innerHTML = `<button id="cssNextButton" onclick=cssBtn()>Next</button>`;
        cssRemoveValue.innerHTML = "";



    } else if (cssRandomValue == 53 && cssInputAnswer == cssAnswerArr[53].A53) {
        cssCorrectValue.innerHTML = "Correct..";
        cssDisplayAnswer.innerHTML = `<textarea name="text" id="input">
        Good Job :) </textarea>`;
        cssNextButton.innerHTML = `<button id="cssNextButton" onclick=cssBtn()>Next</button>`;
        cssRemoveValue.innerHTML = "";

    } else if (cssRandomValue == 53 && cssInputAnswer !== cssAnswerArr[53].A53) {
        cssDisplayAnswer.innerHTML = `<textarea name="text" id="input">
        th {
            background-color: lightblue;
          }
          </textarea>`;
        cssIncorrectValue.innerHTML = "Incorrect..";
        cssNextButton.innerHTML = `<button id="cssNextButton" onclick=cssBtn()>Next</button>`;
        cssRemoveValue.innerHTML = "";



    } else if (cssRandomValue == 54 && cssInputAnswer == cssAnswerArr[54].A54) {
        cssCorrectValue.innerHTML = "Correct..";
        cssDisplayAnswer.innerHTML = `<textarea name="text" id="input">
        Good Job :) </textarea>`;
        cssNextButton.innerHTML = `<button id="cssNextButton" onclick=cssBtn()>Next</button>`;
        cssRemoveValue.innerHTML = "";

    } else if (cssRandomValue == 54 && cssInputAnswer !== cssAnswerArr[54].A54) {
        cssDisplayAnswer.innerHTML = `<textarea name="text" id="input">
        h1 {
            visibility: hidden;
          }
          </textarea>`;
        cssIncorrectValue.innerHTML = "Incorrect..";
        cssNextButton.innerHTML = `<button id="cssNextButton" onclick=cssBtn()>Next</button>`;
        cssRemoveValue.innerHTML = "";



    } else if (cssRandomValue == 55 && cssInputAnswer == cssAnswerArr[55].A55) {
        cssCorrectValue.innerHTML = "Correct..";
        cssDisplayAnswer.innerHTML = `<textarea name="text" id="input">
        Good Job :) </textarea>`;
        cssNextButton.innerHTML = `<button id="cssNextButton" onclick=cssBtn()>Next</button>`;
        cssRemoveValue.innerHTML = "";

    } else if (cssRandomValue == 55 && cssInputAnswer !== cssAnswerArr[55].A55) {
        cssDisplayAnswer.innerHTML = `<textarea name="text" id="input">
        h1 {
            display: none;
          }
          </textarea>`;
        cssIncorrectValue.innerHTML = "Incorrect..";
        cssNextButton.innerHTML = `<button id="cssNextButton" onclick=cssBtn()>Next</button>`;
        cssRemoveValue.innerHTML = "";



    } else if (cssRandomValue == 56 && cssInputAnswer == cssAnswerArr[56].A56) {
        cssCorrectValue.innerHTML = "Correct..";
        cssDisplayAnswer.innerHTML = `<textarea name="text" id="input">
        Good Job :) </textarea>`;
        cssNextButton.innerHTML = `<button id="cssNextButton" onclick=cssBtn()>Next</button>`;
        cssRemoveValue.innerHTML = "";

    } else if (cssRandomValue == 56 && cssInputAnswer !== cssAnswerArr[56].A56) {
        cssDisplayAnswer.innerHTML = `<textarea name="text" id="input">
        li {
            display: inline;
          }
          </textarea>`;
        cssIncorrectValue.innerHTML = "Incorrect..";
        cssNextButton.innerHTML = `<button id="cssNextButton" onclick=cssBtn()>Next</button>`;
        cssRemoveValue.innerHTML = "";



    } else if (cssRandomValue == 57 && cssInputAnswer == cssAnswerArr[57].A57) {
        cssCorrectValue.innerHTML = "Correct..";
        cssDisplayAnswer.innerHTML = `<textarea name="text" id="input">
        Good Job :) </textarea>`;
        cssNextButton.innerHTML = `<button id="cssNextButton" onclick=cssBtn()>Next</button>`;
        cssRemoveValue.innerHTML = "";

    } else if (cssRandomValue == 57 && cssInputAnswer !== cssAnswerArr[57].A57) {
        cssDisplayAnswer.innerHTML = `<textarea name="text" id="input">
        strong {
            display:block;
          }
          </textarea>`;
        cssIncorrectValue.innerHTML = "Incorrect..";
        cssNextButton.innerHTML = `<button id="cssNextButton" onclick=cssBtn()>Next</button>`;
        cssRemoveValue.innerHTML = "";



    } else if (cssRandomValue == 58 && cssInputAnswer == cssAnswerArr[58].A58) {
        cssCorrectValue.innerHTML = "Correct..";
        cssDisplayAnswer.innerHTML = `<textarea name="text" id="input">
        Good Job :) </textarea>`;
        cssNextButton.innerHTML = `<button id="cssNextButton" onclick=cssBtn()>Next</button>`;
        cssRemoveValue.innerHTML = "";

    } else if (cssRandomValue == 58 && cssInputAnswer !== cssAnswerArr[58].A58) {
        cssDisplayAnswer.innerHTML = `<textarea name="text" id="input">
        h1 {
            position: fixed;
            top: 50px;
            right: 50px;
          }
          </textarea>`;
        cssIncorrectValue.innerHTML = "Incorrect..";
        cssNextButton.innerHTML = `<button id="cssNextButton" onclick=cssBtn()>Next</button>`;
        cssRemoveValue.innerHTML = "";



    } else if (cssRandomValue == 59 && cssInputAnswer == cssAnswerArr[59].A59) {
        cssCorrectValue.innerHTML = "Correct..";
        cssDisplayAnswer.innerHTML = `<textarea name="text" id="input">
        Good Job :) </textarea>`;
        cssNextButton.innerHTML = `<button id="cssNextButton" onclick=cssBtn()>Next</button>`;
        cssRemoveValue.innerHTML = "";

    } else if (cssRandomValue == 59 && cssInputAnswer !== cssAnswerArr[59].A59) {
        cssDisplayAnswer.innerHTML = `<textarea name="text" id="input">
        h1 {
            position: relative;
            top: 30px;
            left: -20px;
          }</textarea>`;
        cssIncorrectValue.innerHTML = "Incorrect..";
        cssNextButton.innerHTML = `<button id="cssNextButton" onclick=cssBtn()>Next</button>`;
        cssRemoveValue.innerHTML = "";



    } else if (cssRandomValue == 60 && cssInputAnswer == cssAnswerArr[60].A60) {
        cssCorrectValue.innerHTML = "Correct..";
        cssDisplayAnswer.innerHTML = `<textarea name="text" id="input">
        Good Job :) </textarea>`;
        cssNextButton.innerHTML = `<button id="cssNextButton" onclick=cssBtn()>Next</button>`;
        cssRemoveValue.innerHTML = "";

    } else if (cssRandomValue == 60 && cssInputAnswer !== cssAnswerArr[60].A60) {
        cssDisplayAnswer.innerHTML = `<textarea name="text" id="input">
        h1 {
            position: absolute;
            top: 100px;
            left: 50px;
          }
          </textarea>`;
        cssIncorrectValue.innerHTML = "Incorrect..";
        cssNextButton.innerHTML = `<button id="cssNextButton" onclick=cssBtn()>Next</button>`;
        cssRemoveValue.innerHTML = "";



    } else if (cssRandomValue == 61 && cssInputAnswer == cssAnswerArr[61].A61) {
        cssCorrectValue.innerHTML = "Correct..";
        cssDisplayAnswer.innerHTML = `<textarea name="text" id="input">
        Good Job :) </textarea>`;
        cssNextButton.innerHTML = `<button id="cssNextButton" onclick=cssBtn()>Next</button>`;
        cssRemoveValue.innerHTML = "";

    } else if (cssRandomValue == 61 && cssInputAnswer !== cssAnswerArr[61].A61) {
        cssDisplayAnswer.innerHTML = `<textarea name="text" id="input">
        img {
            position: absolute;
            left: 0px;
            top: 0px;
            z-index: -1;
          }
          </textarea>`;
        cssIncorrectValue.innerHTML = "Incorrect..";
        cssNextButton.innerHTML = `<button id="cssNextButton" onclick=cssBtn()>Next</button>`;
        cssRemoveValue.innerHTML = "";



    } else if (cssRandomValue == 62 && cssInputAnswer == cssAnswerArr[62].A62) {
        cssCorrectValue.innerHTML = "Correct..";
        cssDisplayAnswer.innerHTML = `<textarea name="text" id="input">
        Good Job :) </textarea>`;
        cssNextButton.innerHTML = `<button id="cssNextButton" onclick=cssBtn()>Next</button>`;
        cssRemoveValue.innerHTML = "";

    } else if (cssRandomValue == 62 && cssInputAnswer !== cssAnswerArr[62].A62) {
        cssDisplayAnswer.innerHTML = `<textarea name="text" id="input">
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
        cssNextButton.innerHTML = `<button id="cssNextButton" onclick=cssBtn()>Next</button>`;
        cssRemoveValue.innerHTML = "";



    } else if (cssRandomValue == 63 && cssInputAnswer == cssAnswerArr[63].A63) {
        cssCorrectValue.innerHTML = "Correct..";
        cssDisplayAnswer.innerHTML = `<textarea name="text" id="input">
        Good Job :) </textarea>`;
        cssNextButton.innerHTML = `<button id="cssNextButton" onclick=cssBtn()>Next</button>`;
        cssRemoveValue.innerHTML = "";

    } else if (cssRandomValue == 63 && cssInputAnswer !== cssAnswerArr[63].A63) {
        cssDisplayAnswer.innerHTML = `<textarea name="text" id="input">
        div {
            background-color: #eee;
            width: 200px;
            height: 70px;
            border: 1px dotted black;
            overflow: scroll;
          }
          </textarea>`;
        cssIncorrectValue.innerHTML = "Incorrect..";
        cssNextButton.innerHTML = `<button id="cssNextButton" onclick=cssBtn()>Next</button>`;
        cssRemoveValue.innerHTML = "";



    } else if (cssRandomValue == 64 && cssInputAnswer == cssAnswerArr[64].A64) {
        cssCorrectValue.innerHTML = "Correct..";
        cssDisplayAnswer.innerHTML = `<textarea name="text" id="input">
        Good Job :) </textarea>`;
        cssNextButton.innerHTML = `<button id="cssNextButton" onclick=cssBtn()>Next</button>`;
        cssRemoveValue.innerHTML = "";

    } else if (cssRandomValue == 64 && cssInputAnswer !== cssAnswerArr[64].A64) {
        cssDisplayAnswer.innerHTML = `<textarea name="text" id="input">
        div {
            background-color: lightblue;
            width: 200px;
            height: 200px;
            overflow: hidden;
          }
          </textarea>`;
        cssIncorrectValue.innerHTML = "Incorrect..";
        cssNextButton.innerHTML = `<button id="cssNextButton" onclick=cssBtn()>Next</button>`;
        cssRemoveValue.innerHTML = "";



    } else if (cssRandomValue == 65 && cssInputAnswer == cssAnswerArr[65].A65) {
        cssCorrectValue.innerHTML = "Correct..";
        cssDisplayAnswer.innerHTML = `<textarea name="text" id="input">
        Good Job :) </textarea>`;
        cssNextButton.innerHTML = `<button id="cssNextButton" onclick=cssBtn()>Next</button>`;
        cssRemoveValue.innerHTML = "";

    } else if (cssRandomValue == 65 && cssInputAnswer !== cssAnswerArr[65].A65) {
        cssDisplayAnswer.innerHTML = `<textarea name="text" id="input">
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
        cssNextButton.innerHTML = `<button id="cssNextButton" onclick=cssBtn()>Next</button>`;
        cssRemoveValue.innerHTML = "";



    } else if (cssRandomValue == 66 && cssInputAnswer == cssAnswerArr[66].A66) {
        cssCorrectValue.innerHTML = "Correct..";
        cssDisplayAnswer.innerHTML = `<textarea name="text" id="input">
        Good Job :) </textarea>`;
        cssNextButton.innerHTML = `<button id="cssNextButton" onclick=cssBtn()>Next</button>`;
        cssRemoveValue.innerHTML = "";

    } else if (cssRandomValue == 66 && cssInputAnswer !== cssAnswerArr[66].A66) {
        cssDisplayAnswer.innerHTML = `<textarea name="text" id="input">
        div {
            margin-left: auto;
            margin-right: auto;
            width: 300px;
            background-color: #b0e0e6;
          }
          </textarea>`;
        cssIncorrectValue.innerHTML = "Incorrect..";
        cssNextButton.innerHTML = `<button id="cssNextButton" onclick=cssBtn()>Next</button>`;
        cssRemoveValue.innerHTML = "";



    } else if (cssRandomValue == 67 && cssInputAnswer == cssAnswerArr[67].A67) {
        cssCorrectValue.innerHTML = "Correct..";
        cssDisplayAnswer.innerHTML = `<textarea name="text" id="input">
        Good Job :) </textarea>`;
        cssNextButton.innerHTML = `<button id="cssNextButton" onclick=cssBtn()>Next</button>`;
        cssRemoveValue.innerHTML = "";

    } else if (cssRandomValue == 67 && cssInputAnswer !== cssAnswerArr[67].A67) {
        cssDisplayAnswer.innerHTML = `<textarea name="text" id="input">
        div {
            position: absolute;
            right: 0px;
            width: 300px;
            background-color: #b0e0e6;
          }
          </textarea>`;
        cssIncorrectValue.innerHTML = "Incorrect..";
        cssNextButton.innerHTML = `<button id="cssNextButton" onclick=cssBtn()>Next</button>`;
        cssRemoveValue.innerHTML = "";



    } else if (cssRandomValue == 68 && cssInputAnswer == cssAnswerArr[68].A68) {
        cssCorrectValue.innerHTML = "Correct..";
        cssDisplayAnswer.innerHTML = `<textarea name="text" id="input">
        Good Job :) </textarea>`;
        cssNextButton.innerHTML = `<button id="cssNextButton" onclick=cssBtn()>Next</button>`;
        cssRemoveValue.innerHTML = "";

    } else if (cssRandomValue == 68 && cssInputAnswer !== cssAnswerArr[68].A68) {
        cssDisplayAnswer.innerHTML = `<textarea name="text" id="input">
        div p {
            color: red;
          }
          </textarea>`;
        cssIncorrectValue.innerHTML = "Incorrect..";
        cssNextButton.innerHTML = `<button id="cssNextButton" onclick=cssBtn()>Next</button>`;
        cssRemoveValue.innerHTML = "";



    } else if (cssRandomValue == 69 && cssInputAnswer == cssAnswerArr[69].A69) {
        cssCorrectValue.innerHTML = "Correct..";
        cssDisplayAnswer.innerHTML = `<textarea name="text" id="input">
        Good Job :) </textarea>`;
        cssNextButton.innerHTML = `<button id="cssNextButton" onclick=cssBtn()>Next</button>`;
        cssRemoveValue.innerHTML = "";

    } else if (cssRandomValue == 69 && cssInputAnswer !== cssAnswerArr[69].A69) {
        cssDisplayAnswer.innerHTML = `<textarea name="text" id="input">
        div &gt p {
            color: red;
          }
          </textarea>`;
        cssIncorrectValue.innerHTML = "Incorrect..";
        cssNextButton.innerHTML = `<button id="cssNextButton" onclick=cssBtn()>Next</button>`;
        cssRemoveValue.innerHTML = "";



    } else if (cssRandomValue == 70 && cssInputAnswer == cssAnswerArr[70].A70) {
        cssCorrectValue.innerHTML = "Correct..";
        cssDisplayAnswer.innerHTML = `<textarea name="text" id="input">
        Good Job :) </textarea>`;
        cssNextButton.innerHTML = `<button id="cssNextButton" onclick=cssBtn()>Next</button>`;
        cssRemoveValue.innerHTML = "";

    } else if (cssRandomValue == 70 && cssInputAnswer !== cssAnswerArr[70].A70) {
        cssDisplayAnswer.innerHTML = `<textarea name="text" id="input">
        div + p {
            color: red;
          }
          </textarea>`;
        cssIncorrectValue.innerHTML = "Incorrect..";
        cssNextButton.innerHTML = `<button id="cssNextButton" onclick=cssBtn()>Next</button>`;
        cssRemoveValue.innerHTML = "";



    } else if (cssRandomValue == 71 && cssInputAnswer == cssAnswerArr[71].A71) {
        cssCorrectValue.innerHTML = "Correct..";
        cssDisplayAnswer.innerHTML = `<textarea name="text" id="input">
        Good Job :) </textarea>`;
        cssNextButton.innerHTML = `<button id="cssNextButton" onclick=cssBtn()>Next</button>`;
        cssRemoveValue.innerHTML = "";

    } else if (cssRandomValue == 71 && cssInputAnswer !== cssAnswerArr[71].A71) {
        cssDisplayAnswer.innerHTML = `<textarea name="text" id="input">
        div ~ p {
            color: red;
          }
          </textarea>`;
        cssIncorrectValue.innerHTML = "Incorrect..";
        cssNextButton.innerHTML = `<button id="cssNextButton" onclick=cssBtn()>Next</button>`;
        cssRemoveValue.innerHTML = "";



    } else if (cssRandomValue == 72 && cssInputAnswer == cssAnswerArr[72].A72) {
        cssCorrectValue.innerHTML = "Correct..";
        cssDisplayAnswer.innerHTML = `<textarea name="text" id="input">
        Good Job :) </textarea>`;
        cssNextButton.innerHTML = `<button id="cssNextButton" onclick=cssBtn()>Next</button>`;
        cssRemoveValue.innerHTML = "";

    } else if (cssRandomValue == 72 && cssInputAnswer !== cssAnswerArr[72].A72) {
        cssDisplayAnswer.innerHTML = `<textarea name="text" id="input">
        
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
        cssNextButton.innerHTML = `<button id="cssNextButton" onclick=cssBtn()>Next</button>`;
        cssRemoveValue.innerHTML = "";



    } else if (cssRandomValue == 73 && cssInputAnswer == cssAnswerArr[73].A73) {
        cssCorrectValue.innerHTML = "Correct..";
        cssDisplayAnswer.innerHTML = `<textarea name="text" id="input">
        Good Job :) </textarea>`;
        cssNextButton.innerHTML = `<button id="cssNextButton" onclick=cssBtn()>Next</button>`;
        cssRemoveValue.innerHTML = "";

    } else if (cssRandomValue == 73 && cssInputAnswer !== cssAnswerArr[73].A73) {
        cssDisplayAnswer.innerHTML = `<textarea name="text" id="input">
        p.highlight:hover {
            background-color: lightblue;
          }
          </textarea>`;
        cssIncorrectValue.innerHTML = "Incorrect..";
        cssNextButton.innerHTML = `<button id="cssNextButton" onclick=cssBtn()>Next</button>`;
        cssRemoveValue.innerHTML = "";



    } else if (cssRandomValue == 74 && cssInputAnswer == cssAnswerArr[74].A74) {
        cssCorrectValue.innerHTML = "Correct..";
        cssDisplayAnswer.innerHTML = `<textarea name="text" id="input">
        Good Job :) </textarea>`;
        cssNextButton.innerHTML = `<button id="cssNextButton" onclick=cssBtn()>Next</button>`;
        cssRemoveValue.innerHTML = "";

    } else if (cssRandomValue == 74 && cssInputAnswer !== cssAnswerArr[74].A74) {
        cssDisplayAnswer.innerHTML = `<textarea name="text" id="input">
        p:first-child {
            background-color: lightblue;
          }
          </textarea>`;
        cssIncorrectValue.innerHTML = "Incorrect..";
        cssNextButton.innerHTML = `<button id="cssNextButton" onclick=cssBtn()>Next</button>`;
        cssRemoveValue.innerHTML = "";



    } else if (cssRandomValue == 75 && cssInputAnswer == cssAnswerArr[75].A75) {
        cssCorrectValue.innerHTML = "Correct..";
        cssDisplayAnswer.innerHTML = `<textarea name="text" id="input">
        Good Job :) </textarea>`;
        cssNextButton.innerHTML = `<button id="cssNextButton" onclick=cssBtn()>Next</button>`;
        cssRemoveValue.innerHTML = "";

    } else if (cssRandomValue == 75 && cssInputAnswer !== cssAnswerArr[75].A75) {
        cssDisplayAnswer.innerHTML = `<textarea name="text" id="input">
        input:focus {
            background-color: lightblue;
          }
          </textarea>`;
        cssIncorrectValue.innerHTML = "Incorrect..";
        cssNextButton.innerHTML = `<button id="cssNextButton" onclick=cssBtn()>Next</button>`;
        cssRemoveValue.innerHTML = "";



    } else if (cssRandomValue == 76 && cssInputAnswer == cssAnswerArr[76].A76) {
        cssCorrectValue.innerHTML = "Correct..";
        cssDisplayAnswer.innerHTML = `<textarea name="text" id="input">
        Good Job :) </textarea>`;
        cssNextButton.innerHTML = `<button id="cssNextButton" onclick=cssBtn()>Next</button>`;
        cssRemoveValue.innerHTML = "";

    } else if (cssRandomValue == 76 && cssInputAnswer !== cssAnswerArr[76].A76) {
        cssDisplayAnswer.innerHTML = `<textarea name="text" id="input">
        p::first-line {
            color: red;
          }
          </textarea>`;
        cssIncorrectValue.innerHTML = "Incorrect..";
        cssNextButton.innerHTML = `<button id="cssNextButton" onclick=cssBtn()>Next</button>`;
        cssRemoveValue.innerHTML = "";



    } else if (cssRandomValue == 77 && cssInputAnswer == cssAnswerArr[77].A77) {
        cssCorrectValue.innerHTML = "Correct..";
        cssDisplayAnswer.innerHTML = `<textarea name="text" id="input">
        Good Job :) </textarea>`;
        cssNextButton.innerHTML = `<button id="cssNextButton" onclick=cssBtn()>Next</button>`;
        cssRemoveValue.innerHTML = "";

    } else if (cssRandomValue == 77 && cssInputAnswer !== cssAnswerArr[77].A77) {
        cssDisplayAnswer.innerHTML = `<textarea name="text" id="input">
        p::first-letter {
            color: red;
            font-size: xx-large;
          }
          </textarea>`;
        cssIncorrectValue.innerHTML = "Incorrect..";
        cssNextButton.innerHTML = `<button id="cssNextButton" onclick=cssBtn()>Next</button>`;
        cssRemoveValue.innerHTML = "";



    } else if (cssRandomValue == 78 && cssInputAnswer == cssAnswerArr[78].A78) {
        cssCorrectValue.innerHTML = "Correct..";
        cssDisplayAnswer.innerHTML = `<textarea name="text" id="input">
        Good Job :) </textarea>`;
        cssNextButton.innerHTML = `<button id="cssNextButton" onclick=cssBtn()>Next</button>`;
        cssRemoveValue.innerHTML = "";

    } else if (cssRandomValue == 78 && cssInputAnswer !== cssAnswerArr[78].A78) {
        cssDisplayAnswer.innerHTML = `<textarea name="text" id="input">
        p::before{
            content: url(smiley.gif);
          }
          p::after{
            content: url(smiley.gif);
          }
          </textarea>`;
        cssIncorrectValue.innerHTML = "Incorrect..";
        cssNextButton.innerHTML = `<button id="cssNextButton" onclick=cssBtn()>Next</button>`;
        cssRemoveValue.innerHTML = "";



    } else if (cssRandomValue == 79 && cssInputAnswer == cssAnswerArr[79].A79) {
        cssCorrectValue.innerHTML = "Correct..";
        cssDisplayAnswer.innerHTML = `<textarea name="text" id="input">
        Good Job :) </textarea>`;
        cssNextButton.innerHTML = `<button id="cssNextButton" onclick=cssBtn()>Next</button>`;
        cssRemoveValue.innerHTML = "";

    } else if (cssRandomValue == 79 && cssInputAnswer !== cssAnswerArr[79].A79) {
        cssDisplayAnswer.innerHTML = `<textarea name="text" id="input">
        img {
            opacity: 0.4;
          }
          </textarea>`;
        cssIncorrectValue.innerHTML = "Incorrect..";
        cssNextButton.innerHTML = `<button id="cssNextButton" onclick=cssBtn()>Next</button>`;
        cssRemoveValue.innerHTML = "";



    } else if (cssRandomValue == 80 && cssInputAnswer == cssAnswerArr[80].A80) {
        cssCorrectValue.innerHTML = "Correct..";
        cssDisplayAnswer.innerHTML = `<textarea name="text" id="input">
        Good Job :) </textarea>`;
        cssNextButton.innerHTML = `<button id="cssNextButton" onclick=cssBtn()>Next</button>`;
        cssRemoveValue.innerHTML = "";

    } else if (cssRandomValue == 80 && cssInputAnswer !== cssAnswerArr[80].A80) {
        cssDisplayAnswer.innerHTML = `<textarea name="text" id="input">
        img {
            opacity: 0.4;
          }
          img:hover {
            opacity: 1.0;
          }
          </textarea>`;
        cssIncorrectValue.innerHTML = "Incorrect..";
        cssNextButton.innerHTML = `<button id="cssNextButton" onclick=cssBtn()>Next</button>`;
        cssRemoveValue.innerHTML = "";



    } else if (cssRandomValue == 81 && cssInputAnswer == cssAnswerArr[81].A81) {
        cssCorrectValue.innerHTML = "Correct..";
        cssDisplayAnswer.innerHTML = `<textarea name="text" id="input">
        Good Job :) </textarea>`;
        cssNextButton.innerHTML = `<button id="cssNextButton" onclick=cssBtn()>Next</button>`;
        cssRemoveValue.innerHTML = "";

    } else if (cssRandomValue == 81 && cssInputAnswer !== cssAnswerArr[81].A81) {
        cssDisplayAnswer.innerHTML = `<textarea name="text" id="input">
        a[target] {
            background-color: lightblue;
          }
          </textarea>`;
        cssIncorrectValue.innerHTML = "Incorrect..";
        cssNextButton.innerHTML = `<button id="cssNextButton" onclick=cssBtn()>Next</button>`;
        cssRemoveValue.innerHTML = "";



    } else if (cssRandomValue == 82 && cssInputAnswer == cssAnswerArr[82].A82) {
        cssCorrectValue.innerHTML = "Correct..";
        cssDisplayAnswer.innerHTML = `<textarea name="text" id="input">
        Good Job :) </textarea>`;
        cssNextButton.innerHTML = `<button id="cssNextButton" onclick=cssBtn()>Next</button>`;
        cssRemoveValue.innerHTML = "";

    } else if (cssRandomValue == 82 && cssInputAnswer !== cssAnswerArr[82].A82) {
        cssDisplayAnswer.innerHTML = `<textarea name="text" id="input">
        [title~="red"] {
            border: 5px solid red;
          }
          </textarea>`;
        cssIncorrectValue.innerHTML = "Incorrect..";
        cssNextButton.innerHTML = `<button id="cssNextButton" onclick=cssBtn()>Next</button>`;
        cssRemoveValue.innerHTML = "";



    } else if (cssRandomValue == 83 && cssInputAnswer == cssAnswerArr[83].A83) {
        cssCorrectValue.innerHTML = "Correct..";
        cssDisplayAnswer.innerHTML = `<textarea name="text" id="input">
        Good Job :) </textarea>`;
        cssNextButton.innerHTML = `<button id="cssNextButton" onclick=cssBtn()>Next</button>`;
        cssRemoveValue.innerHTML = "";

    } else if (cssRandomValue == 83 && cssInputAnswer !== cssAnswerArr[83].A83) {
        cssDisplayAnswer.innerHTML = `<textarea name="text" id="input">
        [title^="red"] {
            border: 5px solid red;
          }
          </textarea>`;
        cssIncorrectValue.innerHTML = "Incorrect..";
        cssNextButton.innerHTML = `<button id="cssNextButton" onclick=cssBtn()>Next</button>`;
        cssRemoveValue.innerHTML = "";



    } else if (cssRandomValue == 84 && cssInputAnswer == cssAnswerArr[84].A84) {
        cssCorrectValue.innerHTML = "Correct..";
        cssDisplayAnswer.innerHTML = `<textarea name="text" id="input">
        Good Job :) </textarea>`;
        cssNextButton.innerHTML = `<button id="cssNextButton" onclick=cssBtn()>Next</button>`;
        cssRemoveValue.innerHTML = "";

    } else if (cssRandomValue == 84 && cssInputAnswer !== cssAnswerArr[84].A84) {
        cssDisplayAnswer.innerHTML = `<textarea name="text" id="input">
        [title$="flower"] {
            border: 5px solid red;
          }
          </textarea>`;
        cssIncorrectValue.innerHTML = "Incorrect..";
        cssNextButton.innerHTML = `<button id="cssNextButton" onclick=cssBtn()>Next</button>`;
        cssRemoveValue.innerHTML = "";



    } else if (cssRandomValue == 85 && cssInputAnswer == cssAnswerArr[85].A85) {
        cssCorrectValue.innerHTML = "Correct..";
        cssDisplayAnswer.innerHTML = `<textarea name="text" id="input">
        Good Job :) </textarea>`;
        cssNextButton.innerHTML = `<button id="cssNextButton" onclick=cssBtn()>Next</button>`;
        cssRemoveValue.innerHTML = "";

    } else if (cssRandomValue == 85 && cssInputAnswer !== cssAnswerArr[85].A85) {
        cssDisplayAnswer.innerHTML = `<textarea name="text" id="input">
        [title*="flow"] {
            border: 5px solid red;
          }
          </textarea>`;
        cssIncorrectValue.innerHTML = "Incorrect..";
        cssNextButton.innerHTML = `<button id="cssNextButton" onclick=cssBtn()>Next</button>`;
        cssRemoveValue.innerHTML = "";



    } else if (cssRandomValue == 86 && cssInputAnswer == cssAnswerArr[86].A86) {
        cssCorrectValue.innerHTML = "Correct..";
        cssDisplayAnswer.innerHTML = `<textarea name="text" id="input">
        Good Job :) </textarea>`;
        cssNextButton.innerHTML = `<button id="cssNextButton" onclick=cssBtn()>Next</button>`;
        cssRemoveValue.innerHTML = "";

    } else if (cssRandomValue == 86 && cssInputAnswer !== cssAnswerArr[86].A86) {
        cssDisplayAnswer.innerHTML = `<textarea name="text" id="input">
        div {
            border-radius: 25px;
            background: #73AD21;
            padding: 20px; 
            width: 200px;
            
          }
          </textarea>`;
        cssIncorrectValue.innerHTML = "Incorrect..";
        cssNextButton.innerHTML = `<button id="cssNextButton" onclick=cssBtn()>Next</button>`;
        cssRemoveValue.innerHTML = "";



    } else if (cssRandomValue == 87 && cssInputAnswer == cssAnswerArr[87].A87) {
        cssCorrectValue.innerHTML = "Correct..";
        cssDisplayAnswer.innerHTML = `<textarea name="text" id="input">
        Good Job :) </textarea>`;
        cssNextButton.innerHTML = `<button id="cssNextButton" onclick=cssBtn()>Next</button>`;
        cssRemoveValue.innerHTML = "";

    } else if (cssRandomValue == 87 && cssInputAnswer !== cssAnswerArr[87].A87) {
        cssDisplayAnswer.innerHTML = `<textarea name="text" id="input">
        div {
            border-bottom-left-radius: 25px;
            background: #73AD21;
            padding: 20px; 
            width: 200px;  
          }
          </textarea>`;
        cssIncorrectValue.innerHTML = "Incorrect..";
        cssNextButton.innerHTML = `<button id="cssNextButton" onclick=cssBtn()>Next</button>`;
        cssRemoveValue.innerHTML = "";



    } else if (cssRandomValue == 88 && cssInputAnswer == cssAnswerArr[88].A88) {
        cssCorrectValue.innerHTML = "Correct..";
        cssDisplayAnswer.innerHTML = `<textarea name="text" id="input">
        Good Job :) </textarea>`;
        cssNextButton.innerHTML = `<button id="cssNextButton" onclick=cssBtn()>Next</button>`;
        cssRemoveValue.innerHTML = "";

    } else if (cssRandomValue == 88 && cssInputAnswer !== cssAnswerArr[88].A88) {
        cssDisplayAnswer.innerHTML = `<textarea name="text" id="input">
        div { 
            border: 10px solid transparent;
            border-image: url(border.png) 30 round;
          }
          </textarea>`;
        cssIncorrectValue.innerHTML = "Incorrect..";
        cssNextButton.innerHTML = `<button id="cssNextButton" onclick=cssBtn()>Next</button>`;
        cssRemoveValue.innerHTML = "";



    } else if (cssRandomValue == 89 && cssInputAnswer == cssAnswerArr[89].A89) {
        cssCorrectValue.innerHTML = "Correct..";
        cssDisplayAnswer.innerHTML = `<textarea name="text" id="input">
        Good Job :) </textarea>`;
        cssNextButton.innerHTML = `<button id="cssNextButton" onclick=cssBtn()>Next</button>`;
        cssRemoveValue.innerHTML = "";

    } else if (cssRandomValue == 89 && cssInputAnswer !== cssAnswerArr[89].A89) {
        cssDisplayAnswer.innerHTML = `<textarea name="text" id="input">
        div { 
            border: 10px solid transparent;
            border-image: url(border.png) 30 stretch;
          }
          </textarea>`;
        cssIncorrectValue.innerHTML = "Incorrect..";
        cssNextButton.innerHTML = `<button id="cssNextButton" onclick=cssBtn()>Next</button>`;
        cssRemoveValue.innerHTML = "";



    } else if (cssRandomValue == 90 && cssInputAnswer == cssAnswerArr[90].A90) {
        cssCorrectValue.innerHTML = "Correct..";
        cssDisplayAnswer.innerHTML = `<textarea name="text" id="input">
        Good Job :) </textarea>`;
        cssNextButton.innerHTML = `<button id="cssNextButton" onclick=cssBtn()>Next</button>`;
        cssRemoveValue.innerHTML = "";

    } else if (cssRandomValue == 90 && cssInputAnswer !== cssAnswerArr[90].A90) {
        cssDisplayAnswer.innerHTML = `<textarea name="text" id="input">
        body {
            background-image: url(img_flwr.gif), url(paper.gif);
          }
          </textarea>`;
        cssIncorrectValue.innerHTML = "Incorrect..";
        cssNextButton.innerHTML = `<button id="cssNextButton" onclick=cssBtn()>Next</button>`;
        cssRemoveValue.innerHTML = "";



    } else if (cssRandomValue == 91 && cssInputAnswer == cssAnswerArr[91].A91) {
        cssCorrectValue.innerHTML = "Correct..";
        cssDisplayAnswer.innerHTML = `<textarea name="text" id="input">
        Good Job :) </textarea>`;
        cssNextButton.innerHTML = `<button id="cssNextButton" onclick=cssBtn()>Next</button>`;
        cssRemoveValue.innerHTML = "";

    } else if (cssRandomValue == 91 && cssInputAnswer !== cssAnswerArr[91].A91) {
        cssDisplayAnswer.innerHTML = `<textarea name="text" id="input">
        body {
            background:url(img_flwr.gif);
            background-size: 100px 80px;
            background-repeat: no-repeat;
          }
          </textarea>`;
        cssIncorrectValue.innerHTML = "Incorrect..";
        cssNextButton.innerHTML = `<button id="cssNextButton" onclick=cssBtn()>Next</button>`;
        cssRemoveValue.innerHTML = "";



    } else if (cssRandomValue == 92 && cssInputAnswer == cssAnswerArr[92].A92) {
        cssCorrectValue.innerHTML = "Correct..";
        cssDisplayAnswer.innerHTML = `<textarea name="text" id="input">
        Good Job :) </textarea>`;
        cssNextButton.innerHTML = `<button id="cssNextButton" onclick=cssBtn()>Next</button>`;
        cssRemoveValue.innerHTML = "";

    } else if (cssRandomValue == 92 && cssInputAnswer !== cssAnswerArr[92].A92) {
        cssDisplayAnswer.innerHTML = `<textarea name="text" id="input">
        html { 
            background: url(img_flower.jpg) no-repeat center center fixed;
            background-size: cover;
          }
          </textarea>`;
        cssIncorrectValue.innerHTML = "Incorrect..";
        cssNextButton.innerHTML = `<button id="cssNextButton" onclick=cssBtn()>Next</button>`;
        cssRemoveValue.innerHTML = "";



    } else if (cssRandomValue == 93 && cssInputAnswer == cssAnswerArr[93].A93) {
        cssCorrectValue.innerHTML = "Correct..";
        cssDisplayAnswer.innerHTML = `<textarea name="text" id="input">
        Good Job :) </textarea>`;
        cssNextButton.innerHTML = `<button id="cssNextButton" onclick=cssBtn()>Next</button>`;
        cssRemoveValue.innerHTML = "";

    } else if (cssRandomValue == 93 && cssInputAnswer !== cssAnswerArr[93].A93) {
        cssDisplayAnswer.innerHTML = `<textarea name="text" id="input">
        div { 
            border: 10px solid black;
            padding: 35px;
            background: url(img_flwr.gif);
            background-repeat: no-repeat;
            background-origin: content-box;
          }
          </textarea>`;
        cssIncorrectValue.innerHTML = "Incorrect..";
        cssNextButton.innerHTML = `<button id="cssNextButton" onclick=cssBtn()>Next</button>`;
        cssRemoveValue.innerHTML = "";



    } else if (cssRandomValue == 94 && cssInputAnswer == cssAnswerArr[94].A94) {
        cssCorrectValue.innerHTML = "Correct..";
        cssDisplayAnswer.innerHTML = `<textarea name="text" id="input">
        Good Job :) </textarea>`;
        cssNextButton.innerHTML = `<button id="cssNextButton" onclick=cssBtn()>Next</button>`;
        cssRemoveValue.innerHTML = "";

    } else if (cssRandomValue == 94 && cssInputAnswer !== cssAnswerArr[94].A94) {
        cssDisplayAnswer.innerHTML = `<textarea name="text" id="input">
        div { 
            border: 10px dotted black;
            padding: 35px;
            background: lightblue;
            background-clip: padding-box;
          }
          </textarea>`;
        cssIncorrectValue.innerHTML = "Incorrect..";
        cssNextButton.innerHTML = `<button id="cssNextButton" onclick=cssBtn()>Next</button>`;
        cssRemoveValue.innerHTML = "";



    } else if (cssRandomValue == 95 && cssInputAnswer == cssAnswerArr[95].A95) {
        cssCorrectValue.innerHTML = "Correct..";
        cssDisplayAnswer.innerHTML = `<textarea name="text" id="input">
        Good Job :) </textarea>`;
        cssNextButton.innerHTML = `<button id="cssNextButton" onclick=cssBtn()>Next</button>`;
        cssRemoveValue.innerHTML = "";

    } else if (cssRandomValue == 95 && cssInputAnswer !== cssAnswerArr[95].A95) {
        cssDisplayAnswer.innerHTML = `<textarea name="text" id="input">
        h1 {
            background-color: rgba(0,255,0,0.3);
          }
          </textarea>`;
        cssIncorrectValue.innerHTML = "Incorrect..";
        cssNextButton.innerHTML = `<button id="cssNextButton" onclick=cssBtn()>Next</button>`;
        cssRemoveValue.innerHTML = "";



    } else if (cssRandomValue == 96 && cssInputAnswer == cssAnswerArr[96].A96) {
        cssCorrectValue.innerHTML = "Correct..";
        cssDisplayAnswer.innerHTML = `<textarea name="text" id="input">
        Good Job :) </textarea>`;
        cssNextButton.innerHTML = `<button id="cssNextButton" onclick=cssBtn()>Next</button>`;
        cssRemoveValue.innerHTML = "";

    } else if (cssRandomValue == 96 && cssInputAnswer !== cssAnswerArr[96].A96) {
        cssDisplayAnswer.innerHTML = `<textarea name="text" id="input">
        h1 {
            background-color: hsl(0,100%,50%);
          }
          </textarea>`;
        cssIncorrectValue.innerHTML = "Incorrect..";
        cssNextButton.innerHTML = `<button id="cssNextButton" onclick=cssBtn()>Next</button>`;
        cssRemoveValue.innerHTML = "";



    } else if (cssRandomValue == 97 && cssInputAnswer == cssAnswerArr[97].A97) {
        cssCorrectValue.innerHTML = "Correct..";
        cssDisplayAnswer.innerHTML = `<textarea name="text" id="input">
        Good Job :) </textarea>`;
        cssNextButton.innerHTML = `<button id="cssNextButton" onclick=cssBtn()>Next</button>`;
        cssRemoveValue.innerHTML = "";

    } else if (cssRandomValue == 97 && cssInputAnswer !== cssAnswerArr[97].A97) {
        cssDisplayAnswer.innerHTML = `<textarea name="text" id="input">
        h1 {
            background-color: hsla(0,100%,50%,0.3);
          }
          </textarea>`;
        cssIncorrectValue.innerHTML = "Incorrect..";
        cssNextButton.innerHTML = `<button id="cssNextButton" onclick=cssBtn()>Next</button>`;
        cssRemoveValue.innerHTML = "";



    } else if (cssRandomValue == 98 && cssInputAnswer == cssAnswerArr[98].A98) {
        cssCorrectValue.innerHTML = "Correct..";
        cssDisplayAnswer.innerHTML = `<textarea name="text" id="input">
        Good Job :) </textarea>`;
        cssNextButton.innerHTML = `<button id="cssNextButton" onclick=cssBtn()>Next</button>`;
        cssRemoveValue.innerHTML = "";

    } else if (cssRandomValue == 98 && cssInputAnswer !== cssAnswerArr[98].A98) {
        cssDisplayAnswer.innerHTML = `<textarea name="text" id="input">
        h1 {
            background-color: red;
            opacity: 0.4;
          }
          </textarea>`;
        cssIncorrectValue.innerHTML = "Incorrect..";
        cssNextButton.innerHTML = `<button id="cssNextButton" onclick=cssBtn()>Next</button>`;
        cssRemoveValue.innerHTML = "";



    } else if (cssRandomValue == 99 && cssInputAnswer == cssAnswerArr[99].A99) {
        cssCorrectValue.innerHTML = "Correct..";
        cssDisplayAnswer.innerHTML = `<textarea name="text" id="input">
        Good Job :) </textarea>`;
        cssNextButton.innerHTML = `<button id="cssNextButton" onclick=cssBtn()>Next</button>`;
        cssRemoveValue.innerHTML = "";

    } else if (cssRandomValue == 99 && cssInputAnswer !== cssAnswerArr[99].A99) {
        cssDisplayAnswer.innerHTML = `<textarea name="text" id="input">
        div {
            background-image: linear-gradient(white, green);
          }
          </textarea>`;
        cssIncorrectValue.innerHTML = "Incorrect..";
        cssNextButton.innerHTML = `<button id="cssNextButton" onclick=cssBtn()>Next</button>`;
        cssRemoveValue.innerHTML = "";



    } else if (cssRandomValue == 100 && cssInputAnswer == cssAnswerArr[100].A100) {
        cssCorrectValue.innerHTML = "Correct..";
        cssDisplayAnswer.innerHTML = `<textarea name="text" id="input">
        Good Job :) </textarea>`;
        cssNextButton.innerHTML = `<button id="cssNextButton" onclick=cssBtn()>Next</button>`;
        cssRemoveValue.innerHTML = "";

    } else if (cssRandomValue == 100 && cssInputAnswer !== cssAnswerArr[100].A100) {
        cssDisplayAnswer.innerHTML = `<textarea name="text" id="input">
        div {
            background-image: linear-gradient(to bottom right, white, green);
          }
          </textarea>`;
        cssIncorrectValue.innerHTML = "Incorrect..";
        cssNextButton.innerHTML = `<button id="cssNextButton" onclick=cssBtn()>Next</button>`;
        cssRemoveValue.innerHTML = "";



    } else if (cssRandomValue == 101 && cssInputAnswer == cssAnswerArr[101].A101) {
        cssCorrectValue.innerHTML = "Correct..";
        cssDisplayAnswer.innerHTML = `<textarea name="text" id="input">
        Good Job :) </textarea>`;
        cssNextButton.innerHTML = `<button id="cssNextButton" onclick=cssBtn()>Next</button>`;
        cssRemoveValue.innerHTML = "";

    } else if (cssRandomValue == 101 && cssInputAnswer !== cssAnswerArr[101].A101) {
        cssDisplayAnswer.innerHTML = `<textarea name="text" id="input">
        div {
            background-image: linear-gradient(70deg, white, green);
          }
          </textarea>`;
        cssIncorrectValue.innerHTML = "Incorrect..";
        cssNextButton.innerHTML = `<button id="cssNextButton" onclick=cssBtn()>Next</button>`;
        cssRemoveValue.innerHTML = "";



    } else if (cssRandomValue == 102 && cssInputAnswer == cssAnswerArr[102].A102) {
        cssCorrectValue.innerHTML = "Correct..";
        cssDisplayAnswer.innerHTML = `<textarea name="text" id="input">
        Good Job :) </textarea>`;
        cssNextButton.innerHTML = `<button id="cssNextButton" onclick=cssBtn()>Next</button>`;
        cssRemoveValue.innerHTML = "";

    } else if (cssRandomValue == 102 && cssInputAnswer !== cssAnswerArr[102].A102) {
        cssDisplayAnswer.innerHTML = `<textarea name="text" id="input">
        div {
            background-image: linear-gradient(white, red, blue, green);
          }
          </textarea>`;
        cssIncorrectValue.innerHTML = "Incorrect..";
        cssNextButton.innerHTML = `<button id="cssNextButton" onclick=cssBtn()>Next</button>`;
        cssRemoveValue.innerHTML = "";



    } else if (cssRandomValue == 103 && cssInputAnswer == cssAnswerArr[103].A103) {
        cssCorrectValue.innerHTML = "Correct..";
        cssDisplayAnswer.innerHTML = `<textarea name="text" id="input">
        Good Job :) </textarea>`;
        cssNextButton.innerHTML = `<button id="cssNextButton" onclick=cssBtn()>Next</button>`;
        cssRemoveValue.innerHTML = "";

    } else if (cssRandomValue == 103 && cssInputAnswer !== cssAnswerArr[103].A103) {
        cssDisplayAnswer.innerHTML = `<textarea name="text" id="input">
        div {
            background-image: linear-gradient(rgba(0,255,0,0.2), rgba(0,255,0,1));
          }
          </textarea>`;
        cssIncorrectValue.innerHTML = "Incorrect..";
        cssNextButton.innerHTML = `<button id="cssNextButton" onclick=cssBtn()>Next</button>`;
        cssRemoveValue.innerHTML = "";



    } else if (cssRandomValue == 104 && cssInputAnswer == cssAnswerArr[104].A104) {
        cssCorrectValue.innerHTML = "Correct..";
        cssDisplayAnswer.innerHTML = `<textarea name="text" id="input">
        Good Job :) </textarea>`;
        cssNextButton.innerHTML = `<button id="cssNextButton" onclick=cssBtn()>Next</button>`;
        cssRemoveValue.innerHTML = "";

    } else if (cssRandomValue == 104 && cssInputAnswer !== cssAnswerArr[104].A104) {
        cssDisplayAnswer.innerHTML = `<textarea name="text" id="input">
        div {
            background-image: radial-gradient(white, green);
          }
          </textarea>`;
        cssIncorrectValue.innerHTML = "Incorrect..";
        cssNextButton.innerHTML = `<button id="cssNextButton" onclick=cssBtn()>Next</button>`;
        cssRemoveValue.innerHTML = "";



    } else if (cssRandomValue == 105 && cssInputAnswer == cssAnswerArr[105].A105) {
        cssCorrectValue.innerHTML = "Correct..";
        cssDisplayAnswer.innerHTML = `<textarea name="text" id="input">
        Good Job :) </textarea>`;
        cssNextButton.innerHTML = `<button id="cssNextButton" onclick=cssBtn()>Next</button>`;
        cssRemoveValue.innerHTML = "";

    } else if (cssRandomValue == 105 && cssInputAnswer !== cssAnswerArr[105].A105) {
        cssDisplayAnswer.innerHTML = `<textarea name="text" id="input">
        div {
            background-image: radial-gradient(circle, white, green);
          }
          </textarea>`;
        cssIncorrectValue.innerHTML = "Incorrect..";
        cssNextButton.innerHTML = `<button id="cssNextButton" onclick=cssBtn()>Next</button>`;
        cssRemoveValue.innerHTML = "";



    } else if (cssRandomValue == 106 && cssInputAnswer == cssAnswerArr[106].A106) {
        cssCorrectValue.innerHTML = "Correct..";
        cssDisplayAnswer.innerHTML = `<textarea name="text" id="input">
        Good Job :) </textarea>`;
        cssNextButton.innerHTML = `<button id="cssNextButton" onclick=cssBtn()>Next</button>`;
        cssRemoveValue.innerHTML = "";

    } else if (cssRandomValue == 106 && cssInputAnswer !== cssAnswerArr[106].A106) {
        cssDisplayAnswer.innerHTML = `<textarea name="text" id="input">
        h1 {
            text-shadow: 2px 2px;
          }
          </textarea>`;
        cssIncorrectValue.innerHTML = "Incorrect..";
        cssNextButton.innerHTML = `<button id="cssNextButton" onclick=cssBtn()>Next</button>`;
        cssRemoveValue.innerHTML = "";



    } else if (cssRandomValue == 107 && cssInputAnswer == cssAnswerArr[107].A107) {
        cssCorrectValue.innerHTML = "Correct..";
        cssDisplayAnswer.innerHTML = `<textarea name="text" id="input">
        Good Job :) </textarea>`;
        cssNextButton.innerHTML = `<button id="cssNextButton" onclick=cssBtn()>Next</button>`;
        cssRemoveValue.innerHTML = "";

    } else if (cssRandomValue == 107 && cssInputAnswer !== cssAnswerArr[107].A107) {
        cssDisplayAnswer.innerHTML = `<textarea name="text" id="input">
        h1 {
            text-shadow: 2px 2px 5px green;
          }
          </textarea>`;
        cssIncorrectValue.innerHTML = "Incorrect..";
        cssNextButton.innerHTML = `<button id="cssNextButton" onclick=cssBtn()>Next</button>`;
        cssRemoveValue.innerHTML = "";



    } else if (cssRandomValue == 108 && cssInputAnswer == cssAnswerArr[108].A108) {
        cssCorrectValue.innerHTML = "Correct..";
        cssDisplayAnswer.innerHTML = `<textarea name="text" id="input">
        Good Job :) </textarea>`;
        cssNextButton.innerHTML = `<button id="cssNextButton" onclick=cssBtn()>Next</button>`;
        cssRemoveValue.innerHTML = "";

    } else if (cssRandomValue == 108 && cssInputAnswer !== cssAnswerArr[108].A108) {
        cssDisplayAnswer.innerHTML = `<textarea name="text" id="input">
        h1 {
            text-shadow: 2px 2px 5px green, 0 0 10px red;
          }
          </textarea>`;
        cssIncorrectValue.innerHTML = "Incorrect..";
        cssNextButton.innerHTML = `<button id="cssNextButton" onclick=cssBtn()>Next</button>`;
        cssRemoveValue.innerHTML = "";



    } else if (cssRandomValue == 109 && cssInputAnswer == cssAnswerArr[109].A109) {
        cssCorrectValue.innerHTML = "Correct..";
        cssDisplayAnswer.innerHTML = `<textarea name="text" id="input">
        Good Job :) </textarea>`;
        cssNextButton.innerHTML = `<button id="cssNextButton" onclick=cssBtn()>Next</button>`;
        cssRemoveValue.innerHTML = "";

    } else if (cssRandomValue == 109 && cssInputAnswer !== cssAnswerArr[109].A109) {
        cssDisplayAnswer.innerHTML = `<textarea name="text" id="input">
        div {
            box-shadow: 10px 10px;
          }
          </textarea>`;
        cssIncorrectValue.innerHTML = "Incorrect..";
        cssNextButton.innerHTML = `<button id="cssNextButton" onclick=cssBtn()>Next</button>`;
        cssRemoveValue.innerHTML = "";



    } else if (cssRandomValue == 110 && cssInputAnswer == cssAnswerArr[110].A110) {
        cssCorrectValue.innerHTML = "Correct..";
        cssDisplayAnswer.innerHTML = `<textarea name="text" id="input">
        Good Job :) </textarea>`;
        cssNextButton.innerHTML = `<button id="cssNextButton" onclick=cssBtn()>Next</button>`;
        cssRemoveValue.innerHTML = "";

    } else if (cssRandomValue == 110 && cssInputAnswer !== cssAnswerArr[110].A110) {
        cssDisplayAnswer.innerHTML = `<textarea name="text" id="input">
        div {
            box-shadow: 10px 10px 5px grey;
          }
          </textarea>`;
        cssIncorrectValue.innerHTML = "Incorrect..";
        cssNextButton.innerHTML = `<button id="cssNextButton" onclick=cssBtn()>Next</button>`;
        cssRemoveValue.innerHTML = "";



    } else if (cssRandomValue == 111 && cssInputAnswer == cssAnswerArr[111].A111) {
        cssCorrectValue.innerHTML = "Correct..";
        cssDisplayAnswer.innerHTML = `<textarea name="text" id="input">
        Good Job :) </textarea>`;
        cssNextButton.innerHTML = `<button id="cssNextButton" onclick=cssBtn()>Next</button>`;
        cssRemoveValue.innerHTML = "";

    } else if (cssRandomValue == 111 && cssInputAnswer !== cssAnswerArr[111].A111) {
        cssDisplayAnswer.innerHTML = `<textarea name="text" id="input">
        p {
            white-space: nowrap; 
            width: 200px; 
            border: 1px solid #000000;
            overflow: hidden;
            text-overflow: ellipsis;
          }
          </textarea>`;
        cssIncorrectValue.innerHTML = "Incorrect..";
        cssNextButton.innerHTML = `<button id="cssNextButton" onclick=cssBtn()>Next</button>`;
        cssRemoveValue.innerHTML = "";



    } else if (cssRandomValue == 112 && cssInputAnswer == cssAnswerArr[112].A112) {
        cssCorrectValue.innerHTML = "Correct..";
        cssDisplayAnswer.innerHTML = `<textarea name="text" id="input">
        Good Job :) </textarea>`;
        cssNextButton.innerHTML = `<button id="cssNextButton" onclick=cssBtn()>Next</button>`;
        cssRemoveValue.innerHTML = "";

    } else if (cssRandomValue == 112 && cssInputAnswer !== cssAnswerArr[112].A112) {
        cssDisplayAnswer.innerHTML = `<textarea name="text" id="input">
        p {
            width: 150px; 
            border: 1px solid #000000;
            word-wrap: break-word;
          }
          </textarea>`;
        cssIncorrectValue.innerHTML = "Incorrect..";
        cssNextButton.innerHTML = `<button id="cssNextButton" onclick=cssBtn()>Next</button>`;
        cssRemoveValue.innerHTML = "";



    } else if (cssRandomValue == 113 && cssInputAnswer == cssAnswerArr[113].A113) {
        cssCorrectValue.innerHTML = "Correct..";
        cssDisplayAnswer.innerHTML = `<textarea name="text" id="input">
        Good Job :) </textarea>`;
        cssNextButton.innerHTML = `<button id="cssNextButton" onclick=cssBtn()>Next</button>`;
        cssRemoveValue.innerHTML = "";

    } else if (cssRandomValue == 113 && cssInputAnswer !== cssAnswerArr[113].A113) {
        cssDisplayAnswer.innerHTML = `<textarea name="text" id="input">
        p {
            width: 150px; 
            border: 1px solid #000000;
            word-break: break-all;
          }
          </textarea>`;
        cssIncorrectValue.innerHTML = "Incorrect..";
        cssNextButton.innerHTML = `<button id="cssNextButton" onclick=cssBtn()>Next</button>`;
        cssRemoveValue.innerHTML = "";



    } else if (cssRandomValue == 114 && cssInputAnswer == cssAnswerArr[114].A114) {
        cssCorrectValue.innerHTML = "Correct..";
        cssDisplayAnswer.innerHTML = `<textarea name="text" id="input">
        Good Job :) </textarea>`;
        cssNextButton.innerHTML = `<button id="cssNextButton" onclick=cssBtn()>Next</button>`;
        cssRemoveValue.innerHTML = "";

    } else if (cssRandomValue == 114 && cssInputAnswer !== cssAnswerArr[114].A114) {
        cssDisplayAnswer.innerHTML = `<textarea name="text" id="input">
        @font-face {
            font-family: sansation;
            src: url(sansation_light.woff);
          }
          </textarea>`;
        cssIncorrectValue.innerHTML = "Incorrect..";
        cssNextButton.innerHTML = `<button id="cssNextButton" onclick=cssBtn()>Next</button>`;
        cssRemoveValue.innerHTML = "";



    } else if (cssRandomValue == 115 && cssInputAnswer == cssAnswerArr[115].A115) {
        cssCorrectValue.innerHTML = "Correct..";
        cssDisplayAnswer.innerHTML = `<textarea name="text" id="input">
        Good Job :) </textarea>`;
        cssNextButton.innerHTML = `<button id="cssNextButton" onclick=cssBtn()>Next</button>`;
        cssRemoveValue.innerHTML = "";

    } else if (cssRandomValue == 115 && cssInputAnswer !== cssAnswerArr[115].A115) {
        cssDisplayAnswer.innerHTML = `<textarea name="text" id="input">
        @font-face {
            font-family: sansation;
            src: url(sansation_bold.woff);
            font-weight: bold;
          }
          </textarea>`;
        cssIncorrectValue.innerHTML = "Incorrect..";
        cssNextButton.innerHTML = `<button id="cssNextButton" onclick=cssBtn()>Next</button>`;
        cssRemoveValue.innerHTML = "";



    } else if (cssRandomValue == 116 && cssInputAnswer == cssAnswerArr[116].A116) {
        cssCorrectValue.innerHTML = "Correct..";
        cssDisplayAnswer.innerHTML = `<textarea name="text" id="input">
        Good Job :) </textarea>`;
        cssNextButton.innerHTML = `<button id="cssNextButton" onclick=cssBtn()>Next</button>`;
        cssRemoveValue.innerHTML = "";

    } else if (cssRandomValue == 116 && cssInputAnswer !== cssAnswerArr[116].A116) {
        cssDisplayAnswer.innerHTML = `<textarea name="text" id="input">
        div {
            width: 100px;
            height: 100px;
            background-color: lightblue;
            border: 1px solid black;
            transform: translate(100px,200px);
          }
          </textarea>`;
        cssIncorrectValue.innerHTML = "Incorrect..";
        cssNextButton.innerHTML = `<button id="cssNextButton" onclick=cssBtn()>Next</button>`;
        cssRemoveValue.innerHTML = "";



    } else if (cssRandomValue == 117 && cssInputAnswer == cssAnswerArr[117].A117) {
        cssCorrectValue.innerHTML = "Correct..";
        cssDisplayAnswer.innerHTML = `<textarea name="text" id="input">
        Good Job :) </textarea>`;
        cssNextButton.innerHTML = `<button id="cssNextButton" onclick=cssBtn()>Next</button>`;
        cssRemoveValue.innerHTML = "";

    } else if (cssRandomValue == 117 && cssInputAnswer !== cssAnswerArr[117].A117) {
        cssDisplayAnswer.innerHTML = `<textarea name="text" id="input">
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
        cssNextButton.innerHTML = `<button id="cssNextButton" onclick=cssBtn()>Next</button>`;
        cssRemoveValue.innerHTML = "";



    } else if (cssRandomValue == 118 && cssInputAnswer == cssAnswerArr[118].A118) {
        cssCorrectValue.innerHTML = "Correct..";
        cssDisplayAnswer.innerHTML = `<textarea name="text" id="input">
        Good Job :) </textarea>`;
        cssNextButton.innerHTML = `<button id="cssNextButton" onclick=cssBtn()>Next</button>`;
        cssRemoveValue.innerHTML = "";

    } else if (cssRandomValue == 118 && cssInputAnswer !== cssAnswerArr[118].A118) {
        cssDisplayAnswer.innerHTML = `<textarea name="text" id="input">
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
        cssNextButton.innerHTML = `<button id="cssNextButton" onclick=cssBtn()>Next</button>`;
        cssRemoveValue.innerHTML = "";



    } else if (cssRandomValue == 119 && cssInputAnswer == cssAnswerArr[119].A119) {
        cssCorrectValue.innerHTML = "Correct..";
        cssDisplayAnswer.innerHTML = `<textarea name="text" id="input">
        Good Job :) </textarea>`;
        cssNextButton.innerHTML = `<button id="cssNextButton" onclick=cssBtn()>Next</button>`;
        cssRemoveValue.innerHTML = "";

    } else if (cssRandomValue == 119 && cssInputAnswer !== cssAnswerArr[119].A119) {
        cssDisplayAnswer.innerHTML = `<textarea name="text" id="input">
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
        cssNextButton.innerHTML = `<button id="cssNextButton" onclick=cssBtn()>Next</button>`;
        cssRemoveValue.innerHTML = "";



    } else if (cssRandomValue == 120 && cssInputAnswer == cssAnswerArr[120].A120) {
        cssCorrectValue.innerHTML = "Correct..";
        cssDisplayAnswer.innerHTML = `<textarea name="text" id="input">
        Good Job :) </textarea>`;
        cssNextButton.innerHTML = `<button id="cssNextButton" onclick=cssBtn()>Next</button>`;
        cssRemoveValue.innerHTML = "";

    } else if (cssRandomValue == 120 && cssInputAnswer !== cssAnswerArr[120].A120) {
        cssDisplayAnswer.innerHTML = `<textarea name="text" id="input">
        div {
            width: 100px;
            height: 100px;
            background-color: lightblue;
            border: 1px solid black;
            transform: rotateX(150deg);
          }
          </textarea>`;
        cssIncorrectValue.innerHTML = "Incorrect..";
        cssNextButton.innerHTML = `<button id="cssNextButton" onclick=cssBtn()>Next</button>`;
        cssRemoveValue.innerHTML = "";



    } else if (cssRandomValue == 121 && cssInputAnswer == cssAnswerArr[121].A121) {
        cssCorrectValue.innerHTML = "Correct..";
        cssDisplayAnswer.innerHTML = `<textarea name="text" id="input">
        Good Job :) </textarea>`;
        cssNextButton.innerHTML = `<button id="cssNextButton" onclick=cssBtn()>Next</button>`;
        cssRemoveValue.innerHTML = "";

    } else if (cssRandomValue == 121 && cssInputAnswer !== cssAnswerArr[121].A121) {
        cssDisplayAnswer.innerHTML = `<textarea name="text" id="input">
        div {
            width: 100px;
            height: 100px;
            background-color: lightblue;
            border: 1px solid black;
            transform: rotateY(120deg);
          }
          </textarea>`;
        cssIncorrectValue.innerHTML = "Incorrect..";
        cssNextButton.innerHTML = `<button id="cssNextButton" onclick=cssBtn()>Next</button>`;
        cssRemoveValue.innerHTML = "";



    } else if (cssRandomValue == 122 && cssInputAnswer == cssAnswerArr[122].A122) {
        cssCorrectValue.innerHTML = "Correct..";
        cssDisplayAnswer.innerHTML = `<textarea name="text" id="input">
        Good Job :) </textarea>`;
        cssNextButton.innerHTML = `<button id="cssNextButton" onclick=cssBtn()>Next</button>`;
        cssRemoveValue.innerHTML = "";

    } else if (cssRandomValue == 122 && cssInputAnswer !== cssAnswerArr[122].A122) {
        cssDisplayAnswer.innerHTML = `<textarea name="text" id="input">
        div {
            width: 100px;
            height: 100px;
            background-color: lightblue;
            border: 1px solid black;
            transform: rotateZ(90deg);
          }
          </textarea>`;
        cssIncorrectValue.innerHTML = "Incorrect..";
        cssNextButton.innerHTML = `<button id="cssNextButton" onclick=cssBtn()>Next</button>`;
        cssRemoveValue.innerHTML = "";



    } else if (cssRandomValue == 123 && cssInputAnswer == cssAnswerArr[123].A123) {
        cssCorrectValue.innerHTML = "Correct..";
        cssDisplayAnswer.innerHTML = `<textarea name="text" id="input">
        Good Job :) </textarea>`;
        cssNextButton.innerHTML = `<button id="cssNextButton" onclick=cssBtn()>Next</button>`;
        cssRemoveValue.innerHTML = "";

    } else if (cssRandomValue == 123 && cssInputAnswer !== cssAnswerArr[123].A123) {
        cssDisplayAnswer.innerHTML = `<textarea name="text" id="input">
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
        cssNextButton.innerHTML = `<button id="cssNextButton" onclick=cssBtn()>Next</button>`;
        cssRemoveValue.innerHTML = "";



    } else if (cssRandomValue == 124 && cssInputAnswer == cssAnswerArr[124].A124) {
        cssCorrectValue.innerHTML = "Correct..";
        cssDisplayAnswer.innerHTML = `<textarea name="text" id="input">
        Good Job :) </textarea>`;
        cssNextButton.innerHTML = `<button id="cssNextButton" onclick=cssBtn()>Next</button>`;
        cssRemoveValue.innerHTML = "";

    } else if (cssRandomValue == 124 && cssInputAnswer !== cssAnswerArr[124].A124) {
        cssDisplayAnswer.innerHTML = `<textarea name="text" id="input">
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
        cssNextButton.innerHTML = `<button id="cssNextButton" onclick=cssBtn()>Next</button>`;
        cssRemoveValue.innerHTML = "";



    } else if (cssRandomValue == 125 && cssInputAnswer == cssAnswerArr[125].A125) {
        cssCorrectValue.innerHTML = "Correct..";
        cssDisplayAnswer.innerHTML = `<textarea name="text" id="input">
        Good Job :) </textarea>`;
        cssNextButton.innerHTML = `<button id="cssNextButton" onclick=cssBtn()>Next</button>`;
        cssRemoveValue.innerHTML = "";

    } else if (cssRandomValue == 125 && cssInputAnswer !== cssAnswerArr[125].A125) {
        cssDisplayAnswer.innerHTML = `<textarea name="text" id="input">
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
        cssNextButton.innerHTML = `<button id="cssNextButton" onclick=cssBtn()>Next</button>`;
        cssRemoveValue.innerHTML = "";



    } else if (cssRandomValue == 126 && cssInputAnswer == cssAnswerArr[126].A126) {
        cssCorrectValue.innerHTML = "Correct..";
        cssDisplayAnswer.innerHTML = `<textarea name="text" id="input">
        Good Job :) </textarea>`;
        cssNextButton.innerHTML = `<button id="cssNextButton" onclick=cssBtn()>Next</button>`;
        cssRemoveValue.innerHTML = "";

    } else if (cssRandomValue == 126 && cssInputAnswer !== cssAnswerArr[126].A126) {
        cssDisplayAnswer.innerHTML = `<textarea name="text" id="input">
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
        cssNextButton.innerHTML = `<button id="cssNextButton" onclick=cssBtn()>Next</button>`;
        cssRemoveValue.innerHTML = "";



    } else if (cssRandomValue == 127 && cssInputAnswer == cssAnswerArr[127].A127) {
        cssCorrectValue.innerHTML = "Correct..";
        cssDisplayAnswer.innerHTML = `<textarea name="text" id="input">
        Good Job :) </textarea>`;
        cssNextButton.innerHTML = `<button id="cssNextButton" onclick=cssBtn()>Next</button>`;
        cssRemoveValue.innerHTML = "";

    } else if (cssRandomValue == 127 && cssInputAnswer !== cssAnswerArr[127].A127) {
        cssDisplayAnswer.innerHTML = `<textarea name="text" id="input">
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
        cssNextButton.innerHTML = `<button id="cssNextButton" onclick=cssBtn()>Next</button>`;
        cssRemoveValue.innerHTML = "";



    } else if (cssRandomValue == 128 && cssInputAnswer == cssAnswerArr[128].A128) {
        cssCorrectValue.innerHTML = "Correct..";
        cssDisplayAnswer.innerHTML = `<textarea name="text" id="input">
        Good Job :) </textarea>`;
        cssNextButton.innerHTML = `<button id="cssNextButton" onclick=cssBtn()>Next</button>`;
        cssRemoveValue.innerHTML = "";

    } else if (cssRandomValue == 128 && cssInputAnswer !== cssAnswerArr[128].A128) {
        cssDisplayAnswer.innerHTML = `<textarea name="text" id="input">
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
        cssNextButton.innerHTML = `<button id="cssNextButton" onclick=cssBtn()>Next</button>`;
        cssRemoveValue.innerHTML = "";



    } else if (cssRandomValue == 129 && cssInputAnswer == cssAnswerArr[129].A129) {
        cssCorrectValue.innerHTML = "Correct..";
        cssDisplayAnswer.innerHTML = `<textarea name="text" id="input">
        Good Job :) </textarea>`;
        cssNextButton.innerHTML = `<button id="cssNextButton" onclick=cssBtn()>Next</button>`;
        cssRemoveValue.innerHTML = "";

    } else if (cssRandomValue == 129 && cssInputAnswer !== cssAnswerArr[129].A129) {
        cssDisplayAnswer.innerHTML = `<textarea name="text" id="input">
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
        cssNextButton.innerHTML = `<button id="cssNextButton" onclick=cssBtn()>Next</button>`;
        cssRemoveValue.innerHTML = "";



    } else if (cssRandomValue == 130 && cssInputAnswer == cssAnswerArr[130].A130) {
        cssCorrectValue.innerHTML = "Correct..";
        cssDisplayAnswer.innerHTML = `<textarea name="text" id="input">
        Good Job :) </textarea>`;
        cssNextButton.innerHTML = `<button id="cssNextButton" onclick=cssBtn()>Next</button>`;
        cssRemoveValue.innerHTML = "";

    } else if (cssRandomValue == 130 && cssInputAnswer !== cssAnswerArr[130].A130) {
        cssDisplayAnswer.innerHTML = `<textarea name="text" id="input">
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
        cssNextButton.innerHTML = `<button id="cssNextButton" onclick=cssBtn()>Next</button>`;
        cssRemoveValue.innerHTML = "";



    } else if (cssRandomValue == 131 && cssInputAnswer == cssAnswerArr[131].A131) {
        cssCorrectValue.innerHTML = "Correct..";
        cssDisplayAnswer.innerHTML = `<textarea name="text" id="input">
        Good Job :) </textarea>`;
        cssNextButton.innerHTML = `<button id="cssNextButton" onclick=cssBtn()>Next</button>`;
        cssRemoveValue.innerHTML = "";

    } else if (cssRandomValue == 131 && cssInputAnswer !== cssAnswerArr[131].A131) {
        cssDisplayAnswer.innerHTML = `<textarea name="text" id="input">
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
        cssNextButton.innerHTML = `<button id="cssNextButton" onclick=cssBtn()>Next</button>`;
        cssRemoveValue.innerHTML = "";



    } else if (cssRandomValue == 132 && cssInputAnswer == cssAnswerArr[132].A132) {
        cssCorrectValue.innerHTML = "Correct..";
        cssDisplayAnswer.innerHTML = `<textarea name="text" id="input">
        Good Job :) </textarea>`;
        cssNextButton.innerHTML = `<button id="cssNextButton" onclick=cssBtn()>Next</button>`;
        cssRemoveValue.innerHTML = "";

    } else if (cssRandomValue == 132 && cssInputAnswer !== cssAnswerArr[132].A132) {
        cssDisplayAnswer.innerHTML = `<textarea name="text" id="input">
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
        cssNextButton.innerHTML = `<button id="cssNextButton" onclick=cssBtn()>Next</button>`;
        cssRemoveValue.innerHTML = "";



    } else if (cssRandomValue == 133 && cssInputAnswer == cssAnswerArr[133].A133) {
        cssCorrectValue.innerHTML = "Correct..";
        cssDisplayAnswer.innerHTML = `<textarea name="text" id="input">
        Good Job :) </textarea>`;
        cssNextButton.innerHTML = `<button id="cssNextButton" onclick=cssBtn()>Next</button>`;
        cssRemoveValue.innerHTML = "";

    } else if (cssRandomValue == 133 && cssInputAnswer !== cssAnswerArr[133].A133) {
        cssDisplayAnswer.innerHTML = `<textarea name="text" id="input">
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
        cssNextButton.innerHTML = `<button id="cssNextButton" onclick=cssBtn()>Next</button>`;
        cssRemoveValue.innerHTML = "";



    }

    else {
        cssIncorrectValue.innerHTML = "Incorrect..";
        cssNextButton.innerHTML = `<button id="cssNextButton" onclick=cssBtn()>Next</button>`;
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
    document.getElementById("cssRemove").innerHTML = `<textarea name="text" cols="40" rows="5"id="input"></textarea></br><button id="cssStartButton" onclick="cssSubmit()">Submit</button>`;/* to create next text area and Submit button. */
    document.getElementById("cssCheckingAnswer").innerHTML = "";
    document.getElementById("cssShowingAnswer").innerHTML = "";
}
window.cssBtn = cssBtn;/* to make submit global*/











































































import { javascriptAnswerArr } from './questionsAndAnswers/javascriptAnswers'; /* importing  array from other js file with webpack*/

import { javascriptQuestionArr } from './questionsAndAnswers/javascriptQuestions'; /* importing  array from other js file with webpack*/




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
        <textarea name="text" id="input">Good Job :) </textarea>`;
        javascriptNextButton.innerHTML = `<button id = "javascriptNextButton" onclick=javascriptBtn()>Next</button>`; /* creating next button with javascriptBtn()function*/
        javascriptRemoveValue.innerHTML = "";/* removing in html answer*/



    } else if (javascriptRandomValue == 0 && javascriptInputAnswer !== javascriptAnswerArr[0].A0) {/*  if random value not == then giving then display the answere.*/
        javascriptDisplayAnswer.innerHTML = `
    <textarea name="text" id="input">
        varyNae;</textarea>`;
        javascriptIncorrectValue.innerHTML = "Incorrect..";
        javascriptNextButton.innerHTML = `<button id = "javascriptNextButton" onclick=javascriptBtn()>Next</button>`;
        javascriptRemoveValue.innerHTML = "";



    } else if (javascriptRandomValue == 1 && javascriptInputAnswer == javascriptAnswerArr[1].A1) {
        javascriptCorrectValue.innerHTML = "Correct..";
        javascriptDisplayAnswer.innerHTML = `
        <textarea name="text" id="input">Good Job :) </textarea>`;
        javascriptNextButton.innerHTML = `<button id = "javascriptNextButton" onclick=javascriptBtn()>Next</button>`;
        javascriptRemoveValue.innerHTML = "";

    } else if (javascriptRandomValue == 1 && javascriptInputAnswer !== javascriptAnswerArr[1].A1) {
        javascriptDisplayAnswer.innerHTML = `
        
    <textarea name="text" id="input">
        var a = 7;
        var b = a;
          </textarea>`;
        javascriptIncorrectValue.innerHTML = "Incorrect..";
        javascriptNextButton.innerHTML = `<button id = "javascriptNextButton" onclick=javascriptBtn()>Next</button>`;
        javascriptRemoveValue.innerHTML = "";



    } else if (javascriptRandomValue == 2 && javascriptInputAnswer == javascriptAnswerArr[2].A2) {
        javascriptCorrectValue.innerHTML = "Correct..";
        javascriptDisplayAnswer.innerHTML = `
        <textarea name="text" id="input">Good Job :) </textarea>`;
        javascriptNextButton.innerHTML = `<button id = "javascriptNextButton" onclick=javascriptBtn()>Next</button>`;
        javascriptRemoveValue.innerHTML = "";

    } else if (javascriptRandomValue == 2 && javascriptInputAnswer !== javascriptAnswerArr[2].A2) {
        javascriptDisplayAnswer.innerHTML = `
    <textarea name="text" id="input">
            var a = 9;
          </textarea>`;
        javascriptIncorrectValue.innerHTML = "Incorrect..";
        javascriptNextButton.innerHTML = `<button id = "javascriptNextButton" onclick=javascriptBtn()>Next</button>`;
        javascriptRemoveValue.innerHTML = "";



    } else if (javascriptRandomValue == 3 && javascriptInputAnswer == javascriptAnswerArr[3].A3) {
        javascriptCorrectValue.innerHTML = "Correct..";
        javascriptDisplayAnswer.innerHTML = `
        <textarea name="text" id="input">Good Job :) </textarea>`;
        javascriptNextButton.innerHTML = `<button id = "javascriptNextButton" onclick=javascriptBtn()>Next</button>`;
        javascriptRemoveValue.innerHTML = "";

    } else if (javascriptRandomValue == 3 && javascriptInputAnswer !== javascriptAnswerArr[3].A3) {
        javascriptDisplayAnswer.innerHTML = `
    <textarea name="text" id="input">
        var a = 5;
        var b = 10;
        var c = "I am a";
        a = a + 1;
        b = b + 5;
        c = c + " String!";</textarea>`;
        javascriptIncorrectValue.innerHTML = "Incorrect..";
        javascriptNextButton.innerHTML = `<button id = "javascriptNextButton" onclick=javascriptBtn()>Next</button>`;
        javascriptRemoveValue.innerHTML = "";



    } else if (javascriptRandomValue == 4 && javascriptInputAnswer == javascriptAnswerArr[4].A4) {
        javascriptCorrectValue.innerHTML = "Correct..";
        javascriptDisplayAnswer.innerHTML = `
        <textarea name="text" id="input">Good Job :) </textarea>`;
        javascriptNextButton.innerHTML = `<button id = "javascriptNextButton" onclick=javascriptBtn()>Next</button>`;
        javascriptRemoveValue.innerHTML = "";

    } else if (javascriptRandomValue == 4 && javascriptInputAnswer !== javascriptAnswerArr[4].A4) {
        javascriptDisplayAnswer.innerHTML = `
    <textarea name="text" id="input">
        var studlyCapVar ;
        var properCamelCase;
        var titleCaseOver;
        
        var studlyCapVar = 10;
        var properCamelCase = "A String";
        var titleCaseOver = 9000;</textarea>`;
        javascriptIncorrectValue.innerHTML = "Incorrect..";
        javascriptNextButton.innerHTML = `<button id = "javascriptNextButton" onclick=javascriptBtn()>Next</button>`;
        javascriptRemoveValue.innerHTML = "";



    } else if (javascriptRandomValue == 5 && javascriptInputAnswer == javascriptAnswerArr[5].A5) {
        javascriptCorrectValue.innerHTML = "Correct..";
        javascriptDisplayAnswer.innerHTML = `
        <textarea name="text" id="input">Good Job :) </textarea>`;
        javascriptNextButton.innerHTML = `<button id = "javascriptNextButton" onclick=javascriptBtn()>Next</button>`;
        javascriptRemoveValue.innerHTML = "";

    } else if (javascriptRandomValue == 5 && javascriptInputAnswer !== javascriptAnswerArr[5].A5) {
        javascriptDisplayAnswer.innerHTML = `
    <textarea name="text" id="input">
        var sum = 10 + 10;</textarea>`;
        javascriptIncorrectValue.innerHTML = "Incorrect..";
        javascriptNextButton.innerHTML = `<button id = "javascriptNextButton" onclick=javascriptBtn()>Next</button>`;
        javascriptRemoveValue.innerHTML = "";



    } else if (javascriptRandomValue == 6 && javascriptInputAnswer == javascriptAnswerArr[6].A6) {
        javascriptCorrectValue.innerHTML = "Correct..";
        javascriptDisplayAnswer.innerHTML = `
        <textarea name="text" id="input">Good Job :) </textarea>`;
        javascriptNextButton.innerHTML = `<button id = "javascriptNextButton" onclick=javascriptBtn()>Next</button>`;
        javascriptRemoveValue.innerHTML = "";

    } else if (javascriptRandomValue == 6 && javascriptInputAnswer !== javascriptAnswerArr[6].A6) {
        javascriptDisplayAnswer.innerHTML = `
    <textarea name="text" id="input">
        variffrence = 45 - 33;</textarea>`;
        javascriptIncorrectValue.innerHTML = "Incorrect..";
        javascriptNextButton.innerHTML = `<button id = "javascriptNextButton" onclick=javascriptBtn()>Next</button>`;
        javascriptRemoveValue.innerHTML = "";



    } else if (javascriptRandomValue == 7 && javascriptInputAnswer == javascriptAnswerArr[7].A7) {
        javascriptCorrectValue.innerHTML = "Correct..";
        javascriptDisplayAnswer.innerHTML = `
        <textarea name="text" id="input">Good Job :) </textarea>`;
        javascriptNextButton.innerHTML = `<button id = "javascriptNextButton" onclick=javascriptBtn()>Next</button>`;
        javascriptRemoveValue.innerHTML = "";

    } else if (javascriptRandomValue == 7 && javascriptInputAnswer !== javascriptAnswerArr[7].A7) {
        javascriptDisplayAnswer.innerHTML = `
    <textarea name="text" id="input">
        varrodct = 8 * 10;</textarea>`;
        javascriptIncorrectValue.innerHTML = "Incorrect..";
        javascriptNextButton.innerHTML = `<button id = "javascriptNextButton" onclick=javascriptBtn()>Next</button>`;
        javascriptRemoveValue.innerHTML = "";



    } else if (javascriptRandomValue == 8 && javascriptInputAnswer == javascriptAnswerArr[8].A8) {
        javascriptCorrectValue.innerHTML = "Correct..";
        javascriptDisplayAnswer.innerHTML = `
        <textarea name="text" id="input">Good Job :) </textarea>`;
        javascriptNextButton.innerHTML = `<button id = "javascriptNextButton" onclick=javascriptBtn()>Next</button>`;
        javascriptRemoveValue.innerHTML = "";

    } else if (javascriptRandomValue == 8 && javascriptInputAnswer !== javascriptAnswerArr[8].A8) {
        javascriptDisplayAnswer.innerHTML = `
    <textarea name="text" id="input">
          v qutient = 66 / 33;
        </textarea>`;
        javascriptIncorrectValue.innerHTML = "Incorrect..";
        javascriptNextButton.innerHTML = `<button id = "javascriptNextButton" onclick=javascriptBtn()>Next</button>`;
        javascriptRemoveValue.innerHTML = "";



    } else if (javascriptRandomValue == 9 && javascriptInputAnswer == javascriptAnswerArr[9].A9) {
        javascriptCorrectValue.innerHTML = "Correct..";
        javascriptDisplayAnswer.innerHTML = `
        <textarea name="text" id="input">Good Job :) </textarea>`;
        javascriptNextButton.innerHTML = `<button id = "javascriptNextButton" onclick=javascriptBtn()>Next</button>`;
        javascriptRemoveValue.innerHTML = "";

    } else if (javascriptRandomValue == 9 && javascriptInputAnswer !== javascriptAnswerArr[9].A9) {
        javascriptDisplayAnswer.innerHTML = `
    <textarea name="text" id="input">
        var myVar = 87;
        myVar++;</textarea>`;
        javascriptIncorrectValue.innerHTML = "Incorrect..";
        javascriptNextButton.innerHTML = `<button id = "javascriptNextButton" onclick=javascriptBtn()>Next</button>`;
        javascriptRemoveValue.innerHTML = "";



    } else if (javascriptRandomValue == 10 && javascriptInputAnswer == javascriptAnswerArr[10].A10) {
        javascriptCorrectValue.innerHTML = "Correct..";
        javascriptDisplayAnswer.innerHTML = `
        <textarea name="text" id="input">Good Job :) </textarea>`;
        javascriptNextButton.innerHTML = `<button id = "javascriptNextButton" onclick=javascriptBtn()>Next</button>`;
        javascriptRemoveValue.innerHTML = "";

    } else if (javascriptRandomValue == 10 && javascriptInputAnswer !== javascriptAnswerArr[10].A10) {
        javascriptDisplayAnswer.innerHTML = `
    <textarea name="text" id="input">
        var myVar = 11;
        myVar--;</textarea>`;
        javascriptIncorrectValue.innerHTML = "Incorrect..";
        javascriptNextButton.innerHTML = `<button id = "javascriptNextButton" onclick=javascriptBtn()>Next</button>`;
        javascriptRemoveValue.innerHTML = "";



    } else if (javascriptRandomValue == 11 && javascriptInputAnswer == javascriptAnswerArr[11].A11) {
        javascriptCorrectValue.innerHTML = "Correct..";
        javascriptDisplayAnswer.innerHTML = `
        <textarea name="text" id="input">Good Job :) </textarea>`;
        javascriptNextButton.innerHTML = `<button id = "javascriptNextButton" onclick=javascriptBtn()>Next</button>`;
        javascriptRemoveValue.innerHTML = "";

    } else if (javascriptRandomValue == 11 && javascriptInputAnswer !== javascriptAnswerArr[11].A11) {
        javascriptDisplayAnswer.innerHTML = `
    <textarea name="text" id="input">
        var myDecimal = 5.7;</textarea>`;
        javascriptIncorrectValue.innerHTML = "Incorrect..";
        javascriptNextButton.innerHTML = `<button id = "javascriptNextButton" onclick=javascriptBtn()>Next</button>`;
        javascriptRemoveValue.innerHTML = "";



    } else if (javascriptRandomValue == 12 && javascriptInputAnswer == javascriptAnswerArr[12].A12) {
        javascriptCorrectValue.innerHTML = "Correct..";
        javascriptDisplayAnswer.innerHTML = `
        <textarea name="text" id="input">Good Job :) </textarea>`;
        javascriptNextButton.innerHTML = `<button id = "javascriptNextButton" onclick=javascriptBtn()>Next</button>`;
        javascriptRemoveValue.innerHTML = "";

    } else if (javascriptRandomValue == 12 && javascriptInputAnswer !== javascriptAnswerArr[12].A12) {
        javascriptDisplayAnswer.innerHTML = `
    <textarea name="text" id="input">
        var product = 2.0 * 2.5;</textarea>`;
        javascriptIncorrectValue.innerHTML = "Incorrect..";
        javascriptNextButton.innerHTML = `<button id = "javascriptNextButton" onclick=javascriptBtn()>Next</button>`;
        javascriptRemoveValue.innerHTML = "";



    } else if (javascriptRandomValue == 13 && javascriptInputAnswer == javascriptAnswerArr[13].A13) {
        javascriptCorrectValue.innerHTML = "Correct..";
        javascriptDisplayAnswer.innerHTML = `
        <textarea name="text" id="input">Good Job :) </textarea>`;
        javascriptNextButton.innerHTML = `<button id = "javascriptNextButton" onclick=javascriptBtn()>Next</button>`;
        javascriptRemoveValue.innerHTML = "";

    } else if (javascriptRandomValue == 13 && javascriptInputAnswer !== javascriptAnswerArr[13].A13) {
        javascriptDisplayAnswer.innerHTML = `
    <textarea name="text" id="input">
        var quotient = 4.4 / 2.0;</textarea>`;
        javascriptIncorrectValue.innerHTML = "Incorrect..";
        javascriptNextButton.innerHTML = `<button id = "javascriptNextButton" onclick=javascriptBtn()>Next</button>`;
        javascriptRemoveValue.innerHTML = "";



    } else if (javascriptRandomValue == 14 && javascriptInputAnswer == javascriptAnswerArr[14].A14) {
        javascriptCorrectValue.innerHTML = "Correct..";
        javascriptDisplayAnswer.innerHTML = `
        <textarea name="text" id="input">Good Job :) </textarea>`;
        javascriptNextButton.innerHTML = `<button id = "javascriptNextButton" onclick=javascriptBtn()>Next</button>`;
        javascriptRemoveValue.innerHTML = "";

    } else if (javascriptRandomValue == 14 && javascriptInputAnswer !== javascriptAnswerArr[14].A14) {
        javascriptDisplayAnswer.innerHTML = `
    <textarea name="text" id="input">
        var remainder = 11 % 3;</textarea>`;
        javascriptIncorrectValue.innerHTML = "Incorrect..";
        javascriptNextButton.innerHTML = `<button id = "javascriptNextButton" onclick=javascriptBtn()>Next</button>`;
        javascriptRemoveValue.innerHTML = "";



    } else if (javascriptRandomValue == 15 && javascriptInputAnswer == javascriptAnswerArr[15].A15) {
        javascriptCorrectValue.innerHTML = "Correct..";
        javascriptDisplayAnswer.innerHTML = `
        <textarea name="text" id="input">Good Job :) </textarea>`;
        javascriptNextButton.innerHTML = `<button id = "javascriptNextButton" onclick=javascriptBtn()>Next</button>`;
        javascriptRemoveValue.innerHTML = "";

    } else if (javascriptRandomValue == 15 && javascriptInputAnswer !== javascriptAnswerArr[15].A15) {
        javascriptDisplayAnswer.innerHTML = `
    <textarea name="text" id="input">
        var a = 3;
        var b = 17;
        var c = 12;
        
        a +=12;
        b += 9;
        c +=7;</textarea>`;
        javascriptIncorrectValue.innerHTML = "Incorrect..";
        javascriptNextButton.innerHTML = `<button id = "javascriptNextButton" onclick=javascriptBtn()>Next</button>`;
        javascriptRemoveValue.innerHTML = "";



    } else if (javascriptRandomValue == 16 && javascriptInputAnswer == javascriptAnswerArr[16].A16) {
        javascriptCorrectValue.innerHTML = "Correct..";
        javascriptDisplayAnswer.innerHTML = `
        <textarea name="text" id="input">Good Job :) </textarea>`;
        javascriptNextButton.innerHTML = `<button id = "javascriptNextButton" onclick=javascriptBtn()>Next</button>`;
        javascriptRemoveValue.innerHTML = "";

    } else if (javascriptRandomValue == 16 && javascriptInputAnswer !== javascriptAnswerArr[16].A16) {
        javascriptDisplayAnswer.innerHTML = `
    <textarea name="text" id="input">
        var a = 11;
        var b = 9;
        var c = 3;
        
        a -= 6;
        b -= 15;
        c -= 1;</textarea>`;
        javascriptIncorrectValue.innerHTML = "Incorrect..";
        javascriptNextButton.innerHTML = `<button id = "javascriptNextButton" onclick=javascriptBtn()>Next</button>`;
        javascriptRemoveValue.innerHTML = "";



    } else if (javascriptRandomValue == 17 && javascriptInputAnswer == javascriptAnswerArr[17].A17) {
        javascriptCorrectValue.innerHTML = "Correct..";
        javascriptDisplayAnswer.innerHTML = `
        <textarea name="text" id="input">Good Job :) </textarea>`;
        javascriptNextButton.innerHTML = `<button id = "javascriptNextButton" onclick=javascriptBtn()>Next</button>`;
        javascriptRemoveValue.innerHTML = "";

    } else if (javascriptRandomValue == 17 && javascriptInputAnswer !== javascriptAnswerArr[17].A17) {
        javascriptDisplayAnswer.innerHTML = `
    <textarea name="text" id="input">
        var a = 5;
        var b = 12;
        var c = 4.6;
        
        a *=5;
        b *= 3;
        c *=10;</textarea>`;
        javascriptIncorrectValue.innerHTML = "Incorrect..";
        javascriptNextButton.innerHTML = `<button id = "javascriptNextButton" onclick=javascriptBtn()>Next</button>`;
        javascriptRemoveValue.innerHTML = "";



    } else if (javascriptRandomValue == 18 && javascriptInputAnswer == javascriptAnswerArr[18].A18) {
        javascriptCorrectValue.innerHTML = "Correct..";
        javascriptDisplayAnswer.innerHTML = `
        <textarea name="text" id="input">Good Job :) </textarea>`;
        javascriptNextButton.innerHTML = `<button id = "javascriptNextButton" onclick=javascriptBtn()>Next</button>`;
        javascriptRemoveValue.innerHTML = "";

    } else if (javascriptRandomValue == 18 && javascriptInputAnswer !== javascriptAnswerArr[18].A18) {
        javascriptDisplayAnswer.innerHTML = `
    <textarea name="text" id="input">
        var a = 48;
        var b = 108;
        var c = 33;
        
        a /=12;
        b /=4;
        c /=11;</textarea>`;
        javascriptIncorrectValue.innerHTML = "Incorrect..";
        javascriptNextButton.innerHTML = `<button id = "javascriptNextButton" onclick=javascriptBtn()>Next</button>`;
        javascriptRemoveValue.innerHTML = "";



    } else if (javascriptRandomValue == 19 && javascriptInputAnswer == javascriptAnswerArr[19].A19) {
        javascriptCorrectValue.innerHTML = "Correct..";
        javascriptDisplayAnswer.innerHTML = `
        <textarea name="text" id="input">Good Job :) </textarea>`;
        javascriptNextButton.innerHTML = `<button id = "javascriptNextButton" onclick=javascriptBtn()>Next</button>`;
        javascriptRemoveValue.innerHTML = "";

    } else if (javascriptRandomValue == 19 && javascriptInputAnswer !== javascriptAnswerArr[19].A19) {
        javascriptDisplayAnswer.innerHTML = `
    <textarea name="text" id="input">
        var myFirstName = "first name"; var myLastName = "last name";
          </textarea>`;
        javascriptIncorrectValue.innerHTML = "Incorrect..";
        javascriptNextButton.innerHTML = `<button id = "javascriptNextButton" onclick=javascriptBtn()>Next</button>`;
        javascriptRemoveValue.innerHTML = "";



    } else if (javascriptRandomValue == 20 && javascriptInputAnswer == javascriptAnswerArr[20].A20) {
        javascriptCorrectValue.innerHTML = "Correct..";
        javascriptDisplayAnswer.innerHTML = `
        <textarea name="text" id="input">Good Job :) </textarea>`;
        javascriptNextButton.innerHTML = `<button id = "javascriptNextButton" onclick=javascriptBtn()>Next</button>`;
        javascriptRemoveValue.innerHTML = "";

    } else if (javascriptRandomValue == 20 && javascriptInputAnswer !== javascriptAnswerArr[20].A20) {
        javascriptDisplayAnswer.innerHTML = `
    <textarea name="text" id="input">
        var myStr = "I am a \"double quoted\" string inside \"double quotes\".";</textarea>`;
        javascriptIncorrectValue.innerHTML = "Incorrect..";
        javascriptNextButton.innerHTML = `<button id = "javascriptNextButton" onclick=javascriptBtn()>Next</button>`;
        javascriptRemoveValue.innerHTML = "";



    } else if (javascriptRandomValue == 21 && javascriptInputAnswer == javascriptAnswerArr[21].A21) {
        javascriptCorrectValue.innerHTML = "Correct..";
        javascriptDisplayAnswer.innerHTML = `
        <textarea name="text" id="input">Good Job :) </textarea>`;
        javascriptNextButton.innerHTML = `<button id = "javascriptNextButton" onclick=javascriptBtn()>Next</button>`;
        javascriptRemoveValue.innerHTML = "";

    } else if (javascriptRandomValue == 21 && javascriptInputAnswer !== javascriptAnswerArr[21].A21) {
        javascriptDisplayAnswer.innerHTML = `
    <textarea name="text" id="input">
        var myStr = '<a href="http://www.example.com" target="_blank">Link</a>';</textarea>`;
        javascriptIncorrectValue.innerHTML = "Incorrect..";
        javascriptNextButton.innerHTML = `<button id = "javascriptNextButton" onclick=javascriptBtn()>Next</button>`;
        javascriptRemoveValue.innerHTML = "";



    } else if (javascriptRandomValue == 22 && javascriptInputAnswer == javascriptAnswerArr[22].A22) {
        javascriptCorrectValue.innerHTML = "Correct..";
        javascriptDisplayAnswer.innerHTML = `
        <textarea name="text" id="input">Good Job :) </textarea>`;
        javascriptNextButton.innerHTML = `<button id = "javascriptNextButton" onclick=javascriptBtn()>Next</button>`;
        javascriptRemoveValue.innerHTML = "";

    } else if (javascriptRandomValue == 22 && javascriptInputAnswer !== javascriptAnswerArr[22].A22) {
        javascriptDisplayAnswer.innerHTML = `
    <textarea name="text" id="input">
        var myStr = "\'FirstLine\n\t\SecondLine\nThirdLine";</textarea>`;
        javascriptIncorrectValue.innerHTML = "Incorrect..";
        javascriptNextButton.innerHTML = `<button id = "javascriptNextButton" onclick=javascriptBtn()>Next</button>`;
        javascriptRemoveValue.innerHTML = "";



    } else if (javascriptRandomValue == 23 && javascriptInputAnswer == javascriptAnswerArr[23].A23) {
        javascriptCorrectValue.innerHTML = "Correct..";
        javascriptDisplayAnswer.innerHTML = `
        <textarea name="text" id="input">Good Job :) </textarea>`;
        javascriptNextButton.innerHTML = `<button id = "javascriptNextButton" onclick=javascriptBtn()>Next</button>`;
        javascriptRemoveValue.innerHTML = "";

    } else if (javascriptRandomValue == 23 && javascriptInputAnswer !== javascriptAnswerArr[23].A23) {
        javascriptDisplayAnswer.innerHTML = `

    <textarea name="text" id="input">
              ar myStr="This is the start. " + "This is the end.";</textarea>`;
        javascriptIncorrectValue.innerHTML = "Incorrect..";
        javascriptNextButton.innerHTML = `<button id = "javascriptNextButton" onclick=javascriptBtn()>Next</button>`;
        javascriptRemoveValue.innerHTML = "";



    } else if (javascriptRandomValue == 24 && javascriptInputAnswer == javascriptAnswerArr[24].A24) {
        javascriptCorrectValue.innerHTML = "Correct..";
        javascriptDisplayAnswer.innerHTML = `
        <textarea name="text" id="input">Good Job :) </textarea>`;
        javascriptNextButton.innerHTML = `<button id = "javascriptNextButton" onclick=javascriptBtn()>Next</button>`;
        javascriptRemoveValue.innerHTML = "";

    } else if (javascriptRandomValue == 24 && javascriptInputAnswer !== javascriptAnswerArr[24].A24) {
        javascriptDisplayAnswer.innerHTML = `
    <textarea name="text" id="input">
        var myStr = "This is the first sentence. ";
        myStr += "This is the second sentence.";</textarea>`;
        javascriptIncorrectValue.innerHTML = "Incorrect..";
        javascriptNextButton.innerHTML = `<button id = "javascriptNextButton" onclick=javascriptBtn()>Next</button>`;
        javascriptRemoveValue.innerHTML = "";



    } else if (javascriptRandomValue == 25 && javascriptInputAnswer == javascriptAnswerArr[25].A25) {
        javascriptCorrectValue.innerHTML = "Correct..";
        javascriptDisplayAnswer.innerHTML = `
        <textarea name="text" id="input">Good Job :) </textarea>`;
        javascriptNextButton.innerHTML = `<button id = "javascriptNextButton" onclick=javascriptBtn()>Next</button>`;
        javascriptRemoveValue.innerHTML = "";

    } else if (javascriptRandomValue == 25 && javascriptInputAnswer !== javascriptAnswerArr[25].A25) {
        javascriptDisplayAnswer.innerHTML = `
    <textarea name="text" id="input">
        var myName  = "your name";
        var myStr = "My name is " + myName +  " and I am well!";</textarea>`;
        javascriptIncorrectValue.innerHTML = "Incorrect..";
        javascriptNextButton.innerHTML = `<button id = "javascriptNextButton" onclick=javascriptBtn()>Next</button>`;
        javascriptRemoveValue.innerHTML = "";



    } else if (javascriptRandomValue == 26 && javascriptInputAnswer == javascriptAnswerArr[26].A26) {
        javascriptCorrectValue.innerHTML = "Correct..";
        javascriptDisplayAnswer.innerHTML = `
        <textarea name="text" id="input">Good Job :) </textarea>`;
        javascriptNextButton.innerHTML = `<button id = "javascriptNextButton" onclick=javascriptBtn()>Next</button>`;
        javascriptRemoveValue.innerHTML = "";

    } else if (javascriptRandomValue == 26 && javascriptInputAnswer !== javascriptAnswerArr[26].A26) {
        javascriptDisplayAnswer.innerHTML = `
    <textarea name="text" id="input">
        var someAdjective = "awesome!";
        var myStr = "Learning to code is ";
         myStr +=someAdjective; </textarea>`;
        javascriptIncorrectValue.innerHTML = "Incorrect..";
        javascriptNextButton.innerHTML = `<button id = "javascriptNextButton" onclick=javascriptBtn()>Next</button>`;
        javascriptRemoveValue.innerHTML = "";



    } else if (javascriptRandomValue == 27 && javascriptInputAnswer == javascriptAnswerArr[27].A27) {
        javascriptCorrectValue.innerHTML = "Correct..";
        javascriptDisplayAnswer.innerHTML = `
        <textarea name="text" id="input">Good Job :) </textarea>`;
        javascriptNextButton.innerHTML = `<button id = "javascriptNextButton" onclick=javascriptBtn()>Next</button>`;
        javascriptRemoveValue.innerHTML = "";

    } else if (javascriptRandomValue == 27 && javascriptInputAnswer !== javascriptAnswerArr[27].A27) {
        javascriptDisplayAnswer.innerHTML = `
    <textarea name="text" id="input">
        var lastNameLength = 0;
        var lastName = "Lovelace";
        lastNameLength = lastName.length;</textarea>`;
        javascriptIncorrectValue.innerHTML = "Incorrect..";
        javascriptNextButton.innerHTML = `<button id = "javascriptNextButton" onclick=javascriptBtn()>Next</button>`;
        javascriptRemoveValue.innerHTML = "";



    } else if (javascriptRandomValue == 28 && javascriptInputAnswer == javascriptAnswerArr[28].A28) {
        javascriptCorrectValue.innerHTML = "Correct..";
        javascriptDisplayAnswer.innerHTML = `
        <textarea name="text" id="input">Good Job :) </textarea>`;
        javascriptNextButton.innerHTML = `<button id = "javascriptNextButton" onclick=javascriptBtn()>Next</button>`;
        javascriptRemoveValue.innerHTML = "";

    } else if (javascriptRandomValue == 28 && javascriptInputAnswer !== javascriptAnswerArr[28].A28) {
        javascriptDisplayAnswer.innerHTML = `
    <textarea name="text" id="input">
        var firstLetterOfLastName = "";
        var lastName = "Lovelace";
        firstLetterOfLastName = lastName[0];</textarea>`;
        javascriptIncorrectValue.innerHTML = "Incorrect..";
        javascriptNextButton.innerHTML = `<button id = "javascriptNextButton" onclick=javascriptBtn()>Next</button>`;
        javascriptRemoveValue.innerHTML = "";



    } else if (javascriptRandomValue == 29 && javascriptInputAnswer == javascriptAnswerArr[29].A29) {
        javascriptCorrectValue.innerHTML = "Correct..";
        javascriptDisplayAnswer.innerHTML = `
        <textarea name="text" id="input">Good Job :) </textarea>`;
        javascriptNextButton.innerHTML = `<button id = "javascriptNextButton" onclick=javascriptBtn()>Next</button>`;
        javascriptRemoveValue.innerHTML = "";

    } else if (javascriptRandomValue == 29 && javascriptInputAnswer !== javascriptAnswerArr[29].A29) {
        javascriptDisplayAnswer.innerHTML = `
    <textarea name="text" id="input">
        var myStr = "Jello World";
        myStr = "Hello World";</textarea>`;
        javascriptIncorrectValue.innerHTML = "Incorrect..";
        javascriptNextButton.innerHTML = `<button id = "javascriptNextButton" onclick=javascriptBtn()>Next</button>`;
        javascriptRemoveValue.innerHTML = "";



    } else if (javascriptRandomValue == 30 && javascriptInputAnswer == javascriptAnswerArr[30].A30) {
        javascriptCorrectValue.innerHTML = "Correct..";
        javascriptDisplayAnswer.innerHTML = `
        <textarea name="text" id="input">Good Job :) </textarea>`;
        javascriptNextButton.innerHTML = `<button id = "javascriptNextButton" onclick=javascriptBtn()>Next</button>`;
        javascriptRemoveValue.innerHTML = "";

    } else if (javascriptRandomValue == 30 && javascriptInputAnswer !== javascriptAnswerArr[30].A30) {
        javascriptDisplayAnswer.innerHTML = `
    <textarea name="text" id="input">
        var lastName = "Lovelace";
        var thirdLetterOfLastName = lastName[2];</textarea>`;
        javascriptIncorrectValue.innerHTML = "Incorrect..";
        javascriptNextButton.innerHTML = `<button id = "javascriptNextButton" onclick=javascriptBtn()>Next</button>`;
        javascriptRemoveValue.innerHTML = "";



    } else if (javascriptRandomValue == 31 && javascriptInputAnswer == javascriptAnswerArr[31].A31) {
        javascriptCorrectValue.innerHTML = "Correct..";
        javascriptDisplayAnswer.innerHTML = `
        <textarea name="text" id="input">Good Job :) </textarea>`;
        javascriptNextButton.innerHTML = `<button id = "javascriptNextButton" onclick=javascriptBtn()>Next</button>`;
        javascriptRemoveValue.innerHTML = "";

    } else if (javascriptRandomValue == 31 && javascriptInputAnswer !== javascriptAnswerArr[31].A31) {
        javascriptDisplayAnswer.innerHTML = `
    <textarea name="text" id="input">
        var lastName = "Lovelace";
        var lastLetterOfLastName = lastName[lastName.length - 1];</textarea>`;
        javascriptIncorrectValue.innerHTML = "Incorrect..";
        javascriptNextButton.innerHTML = `<button id = "javascriptNextButton" onclick=javascriptBtn()>Next</button>`;
        javascriptRemoveValue.innerHTML = "";



    } else if (javascriptRandomValue == 32 && javascriptInputAnswer == javascriptAnswerArr[32].A32) {
        javascriptCorrectValue.innerHTML = "Correct..";
        javascriptDisplayAnswer.innerHTML = `
        <textarea name="text" id="input">Good Job :) </textarea>`;
        javascriptNextButton.innerHTML = `<button id = "javascriptNextButton" onclick=javascriptBtn()>Next</button>`;
        javascriptRemoveValue.innerHTML = "";

    } else if (javascriptRandomValue == 32 && javascriptInputAnswer !== javascriptAnswerArr[32].A32) {
        javascriptDisplayAnswer.innerHTML = `
    <textarea name="text" id="input">
        var lastName = "Lovelace";
        var secondToLastLetterOfLastName = lastName[lastName.length - 2];</textarea>`;
        javascriptIncorrectValue.innerHTML = "Incorrect..";
        javascriptNextButton.innerHTML = `<button id = "javascriptNextButton" onclick=javascriptBtn()>Next</button>`;
        javascriptRemoveValue.innerHTML = "";



    } else if (javascriptRandomValue == 33 && javascriptInputAnswer == javascriptAnswerArr[33].A33) {
        javascriptCorrectValue.innerHTML = "Correct..";
        javascriptDisplayAnswer.innerHTML = `
        <textarea name="text" id="input">Good Job :) </textarea>`;
        javascriptNextButton.innerHTML = `<button id = "javascriptNextButton" onclick=javascriptBtn()>Next</button>`;
        javascriptRemoveValue.innerHTML = "";

    } else if (javascriptRandomValue == 33 && javascriptInputAnswer !== javascriptAnswerArr[33].A33) {
        javascriptDisplayAnswer.innerHTML = `
    <textarea name="text" id="input">
        function wordBlanks(myNoun, myAdjective, myVerb, myAdverb) {
            var result = "";
            result+= "My "+myAdjective+" "+myNoun+" "+myVerb+" very "+myAdverb+".";
          return result;
          }
          wordBlanks("dog", "big", "ran", "quickly");</textarea>`;
        javascriptIncorrectValue.innerHTML = "Incorrect..";
        javascriptNextButton.innerHTML = `<button id = "javascriptNextButton" onclick=javascriptBtn()>Next</button>`;
        javascriptRemoveValue.innerHTML = "";



    } else if (javascriptRandomValue == 34 && javascriptInputAnswer == javascriptAnswerArr[34].A34) {
        javascriptCorrectValue.innerHTML = "Correct..";
        javascriptDisplayAnswer.innerHTML = `
        <textarea name="text" id="input">Good Job :) </textarea>`;
        javascriptNextButton.innerHTML = `<button id = "javascriptNextButton" onclick=javascriptBtn()>Next</button>`;
        javascriptRemoveValue.innerHTML = "";

    } else if (javascriptRandomValue == 34 && javascriptInputAnswer !== javascriptAnswerArr[34].A34) {
        javascriptDisplayAnswer.innerHTML = `
    <textarea name="text" id="input">
        varyAray = ["test", 0];</textarea>`;
        javascriptIncorrectValue.innerHTML = "Incorrect..";
        javascriptNextButton.innerHTML = `<button id = "javascriptNextButton" onclick=javascriptBtn()>Next</button>`;
        javascriptRemoveValue.innerHTML = "";



    } else if (javascriptRandomValue == 35 && javascriptInputAnswer == javascriptAnswerArr[35].A35) {
        javascriptCorrectValue.innerHTML = "Correct..";
        javascriptDisplayAnswer.innerHTML = `
        <textarea name="text" id="input">Good Job :) </textarea>`;
        javascriptNextButton.innerHTML = `<button id = "javascriptNextButton" onclick=javascriptBtn()>Next</button>`;
        javascriptRemoveValue.innerHTML = "";

    } else if (javascriptRandomValue == 35 && javascriptInputAnswer !== javascriptAnswerArr[35].A35) {
        javascriptDisplayAnswer.innerHTML = `
    <textarea name="text" id="input">
        var myArray = [["the universe", 42], ["everything", 101010]];</textarea>`;
        javascriptIncorrectValue.innerHTML = "Incorrect..";
        javascriptNextButton.innerHTML = `<button id = "javascriptNextButton" onclick=javascriptBtn()>Next</button>`;
        javascriptRemoveValue.innerHTML = "";



    } else if (javascriptRandomValue == 36 && javascriptInputAnswer == javascriptAnswerArr[36].A36) {
        javascriptCorrectValue.innerHTML = "Correct..";
        javascriptDisplayAnswer.innerHTML = `
        <textarea name="text" id="input">Good Job :) </textarea>`;
        javascriptNextButton.innerHTML = `<button id = "javascriptNextButton" onclick=javascriptBtn()>Next</button>`;
        javascriptRemoveValue.innerHTML = "";

    } else if (javascriptRandomValue == 36 && javascriptInputAnswer !== javascriptAnswerArr[36].A36) {
        javascriptDisplayAnswer.innerHTML = `
    <textarea name="text" id="input">
        var myArray = [50,60,70];
        var myData = myArray[0];</textarea>`;
        javascriptIncorrectValue.innerHTML = "Incorrect..";
        javascriptNextButton.innerHTML = `<button id = "javascriptNextButton" onclick=javascriptBtn()>Next</button>`;
        javascriptRemoveValue.innerHTML = "";



    } else if (javascriptRandomValue == 37 && javascriptInputAnswer == javascriptAnswerArr[37].A37) {
        javascriptCorrectValue.innerHTML = "Correct..";
        javascriptDisplayAnswer.innerHTML = `
        <textarea name="text" id="input">Good Job :) </textarea>`;
        javascriptNextButton.innerHTML = `<button id = "javascriptNextButton" onclick=javascriptBtn()>Next</button>`;
        javascriptRemoveValue.innerHTML = "";

    } else if (javascriptRandomValue == 37 && javascriptInputAnswer !== javascriptAnswerArr[37].A37) {
        javascriptDisplayAnswer.innerHTML = `
    <textarea name="text" id="input">
        var myArray = [18,64,99];
        myArray[0] = 45;</textarea>`;
        javascriptIncorrectValue.innerHTML = "Incorrect..";
        javascriptNextButton.innerHTML = `<button id = "javascriptNextButton" onclick=javascriptBtn()>Next</button>`;
        javascriptRemoveValue.innerHTML = "";



    } else if (javascriptRandomValue == 38 && javascriptInputAnswer == javascriptAnswerArr[38].A38) {
        javascriptCorrectValue.innerHTML = "Correct..";
        javascriptDisplayAnswer.innerHTML = `
        <textarea name="text" id="input">Good Job :) </textarea>`;
        javascriptNextButton.innerHTML = `<button id = "javascriptNextButton" onclick=javascriptBtn()>Next</button>`;
        javascriptRemoveValue.innerHTML = "";

    } else if (javascriptRandomValue == 38 && javascriptInputAnswer !== javascriptAnswerArr[38].A38) {
        javascriptDisplayAnswer.innerHTML = `
    <textarea name="text" id="input">
        var myArray = [[1,2,3], [4,5,6], [7,8,9], [[10,11,12], 13, 14]];
        var myData = myArray[2][1];</textarea>`;
        javascriptIncorrectValue.innerHTML = "Incorrect..";
        javascriptNextButton.innerHTML = `<button id = "javascriptNextButton" onclick=javascriptBtn()>Next</button>`;
        javascriptRemoveValue.innerHTML = "";



    } else if (javascriptRandomValue == 39 && javascriptInputAnswer == javascriptAnswerArr[39].A39) {
        javascriptCorrectValue.innerHTML = "Correct..";
        javascriptDisplayAnswer.innerHTML = `
        <textarea name="text" id="input">Good Job :) </textarea>`;
        javascriptNextButton.innerHTML = `<button id = "javascriptNextButton" onclick=javascriptBtn()>Next</button>`;
        javascriptRemoveValue.innerHTML = "";

    } else if (javascriptRandomValue == 39 && javascriptInputAnswer !== javascriptAnswerArr[39].A39) {
        javascriptDisplayAnswer.innerHTML = `
    <textarea name="text" id="input">
        var myArray = [["John", 23], ["cat", 2]];
        myArray.push(["dog", 3]);</textarea>`;
        javascriptIncorrectValue.innerHTML = "Incorrect..";
        javascriptNextButton.innerHTML = `<button id = "javascriptNextButton" onclick=javascriptBtn()>Next</button>`;
        javascriptRemoveValue.innerHTML = "";



    } else if (javascriptRandomValue == 40 && javascriptInputAnswer == javascriptAnswerArr[40].A40) {
        javascriptCorrectValue.innerHTML = "Correct..";
        javascriptDisplayAnswer.innerHTML = `
        <textarea name="text" id="input">Good Job :) </textarea>`;
        javascriptNextButton.innerHTML = `<button id = "javascriptNextButton" onclick=javascriptBtn()>Next</button>`;
        javascriptRemoveValue.innerHTML = "";

    } else if (javascriptRandomValue == 40 && javascriptInputAnswer !== javascriptAnswerArr[40].A40) {
        javascriptDisplayAnswer.innerHTML = `
    <textarea name="text" id="input">
        var myArray = [["John", 23], ["cat", 2]];
        var removedFromMyArray = myArray.pop();</textarea>`;
        javascriptIncorrectValue.innerHTML = "Incorrect..";
        javascriptNextButton.innerHTML = `<button id = "javascriptNextButton" onclick=javascriptBtn()>Next</button>`;
        javascriptRemoveValue.innerHTML = "";



    } else if (javascriptRandomValue == 41 && javascriptInputAnswer == javascriptAnswerArr[41].A41) {
        javascriptCorrectValue.innerHTML = "Correct..";
        javascriptDisplayAnswer.innerHTML = `
        <textarea name="text" id="input">Good Job :) </textarea>`;
        javascriptNextButton.innerHTML = `<button id = "javascriptNextButton" onclick=javascriptBtn()>Next</button>`;
        javascriptRemoveValue.innerHTML = "";

    } else if (javascriptRandomValue == 41 && javascriptInputAnswer !== javascriptAnswerArr[41].A41) {
        javascriptDisplayAnswer.innerHTML = `

    <textarea name="text" id="input">
              ar myArray = [["John", 23], ["dog", 3]];
        var removedFromMyArray = myArray.shift();</textarea>`;
        javascriptIncorrectValue.innerHTML = "Incorrect..";
        javascriptNextButton.innerHTML = `<button id = "javascriptNextButton" onclick=javascriptBtn()>Next</button>`;
        javascriptRemoveValue.innerHTML = "";



    } else if (javascriptRandomValue == 42 && javascriptInputAnswer == javascriptAnswerArr[42].A42) {
        javascriptCorrectValue.innerHTML = "Correct..";
        javascriptDisplayAnswer.innerHTML = `
        <textarea name="text" id="input">Good Job :) </textarea>`;
        javascriptNextButton.innerHTML = `<button id = "javascriptNextButton" onclick=javascriptBtn()>Next</button>`;
        javascriptRemoveValue.innerHTML = "";

    } else if (javascriptRandomValue == 42 && javascriptInputAnswer !== javascriptAnswerArr[42].A42) {
        javascriptDisplayAnswer.innerHTML = `
    <textarea name="text" id="input">
        var myArray = [["John", 23], ["dog", 3]];
        myArray.shift();
        myArray.unshift( ["Paul",35]);</textarea>`;
        javascriptIncorrectValue.innerHTML = "Incorrect..";
        javascriptNextButton.innerHTML = `<button id = "javascriptNextButton" onclick=javascriptBtn()>Next</button>`;
        javascriptRemoveValue.innerHTML = "";



    } else if (javascriptRandomValue == 43 && javascriptInputAnswer == javascriptAnswerArr[43].A43) {
        javascriptCorrectValue.innerHTML = "Correct..";
        javascriptDisplayAnswer.innerHTML = `
        <textarea name="text" id="input">Good Job :) </textarea>`;
        javascriptNextButton.innerHTML = `<button id = "javascriptNextButton" onclick=javascriptBtn()>Next</button>`;
        javascriptRemoveValue.innerHTML = "";

    } else if (javascriptRandomValue == 43 && javascriptInputAnswer !== javascriptAnswerArr[43].A43) {
        javascriptDisplayAnswer.innerHTML = `
    <textarea name="text" id="input">
        var myList = [["Canned Beans", 3],["Milk Galon", 1],["Cereal", 2],["Toilet Paper", 12],["Sack of Rice", 1]];</textarea>`;
        javascriptIncorrectValue.innerHTML = "Incorrect..";
        javascriptNextButton.innerHTML = `<button id = "javascriptNextButton" onclick=javascriptBtn()>Next</button>`;
        javascriptRemoveValue.innerHTML = "";



    } else if (javascriptRandomValue == 44 && javascriptInputAnswer == javascriptAnswerArr[44].A44) {
        javascriptCorrectValue.innerHTML = "Correct..";
        javascriptDisplayAnswer.innerHTML = `
        <textarea name="text" id="input">Good Job :) </textarea>`;
        javascriptNextButton.innerHTML = `<button id = "javascriptNextButton" onclick=javascriptBtn()>Next</button>`;
        javascriptRemoveValue.innerHTML = "";

    } else if (javascriptRandomValue == 44 && javascriptInputAnswer !== javascriptAnswerArr[44].A44) {
        javascriptDisplayAnswer.innerHTML = `
    <textarea name="text" id="input">
        function reusableFunction() {
            console.log("Hi World");
          }
          
          reusableFunction();</textarea>`;
        javascriptIncorrectValue.innerHTML = "Incorrect..";
        javascriptNextButton.innerHTML = `<button id = "javascriptNextButton" onclick=javascriptBtn()>Next</button>`;
        javascriptRemoveValue.innerHTML = "";



    } else if (javascriptRandomValue == 45 && javascriptInputAnswer == javascriptAnswerArr[45].A45) {
        javascriptCorrectValue.innerHTML = "Correct..";
        javascriptDisplayAnswer.innerHTML = `
        <textarea name="text" id="input">Good Job :) </textarea>`;
        javascriptNextButton.innerHTML = `<button id = "javascriptNextButton" onclick=javascriptBtn()>Next</button>`;
        javascriptRemoveValue.innerHTML = "";

    } else if (javascriptRandomValue == 45 && javascriptInputAnswer !== javascriptAnswerArr[45].A45) {
        javascriptDisplayAnswer.innerHTML = `
    <textarea name="text" id="input">
        function functionWithArgs(a, b) {
            console.log(a + b);
          }
          functionWithArgs(10, 5);</textarea>`;
        javascriptIncorrectValue.innerHTML = "Incorrect..";
        javascriptNextButton.innerHTML = `<button id = "javascriptNextButton" onclick=javascriptBtn()>Next</button>`;
        javascriptRemoveValue.innerHTML = "";



    } else if (javascriptRandomValue == 46 && javascriptInputAnswer == javascriptAnswerArr[46].A46) {
        javascriptCorrectValue.innerHTML = "Correct..";
        javascriptDisplayAnswer.innerHTML = `
        <textarea name="text" id="input">Good Job :) </textarea>`;
        javascriptNextButton.innerHTML = `<button id = "javascriptNextButton" onclick=javascriptBtn()>Next</button>`;
        javascriptRemoveValue.innerHTML = "";

    } else if (javascriptRandomValue == 46 && javascriptInputAnswer !== javascriptAnswerArr[46].A46) {
        javascriptDisplayAnswer.innerHTML = `

    <textarea name="text" id="input">
              ar myGlobal = 10;
        
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
        }</textarea>`;
        javascriptIncorrectValue.innerHTML = "Incorrect..";
        javascriptNextButton.innerHTML = `<button id = "javascriptNextButton" onclick=javascriptBtn()>Next</button>`;
        javascriptRemoveValue.innerHTML = "";



    } else if (javascriptRandomValue == 47 && javascriptInputAnswer == javascriptAnswerArr[47].A47) {
        javascriptCorrectValue.innerHTML = "Correct..";
        javascriptDisplayAnswer.innerHTML = `
        <textarea name="text" id="input">Good Job :) </textarea>`;
        javascriptNextButton.innerHTML = `<button id = "javascriptNextButton" onclick=javascriptBtn()>Next</button>`;
        javascriptRemoveValue.innerHTML = "";

    }

    else if (javascriptRandomValue == 47 && javascriptInputAnswer !== javascriptAnswerArr[47].A47) {
        javascriptDisplayAnswer.innerHTML = `
    <textarea name="text" id="input">
        function myLocalScope() {
            var myVar;
            console.log(myVar);
          }
          myLocalScope();</textarea>`;
        javascriptIncorrectValue.innerHTML = "Incorrect..";
        javascriptNextButton.innerHTML = `<button id = "javascriptNextButton" onclick=javascriptBtn()>Next</button>`;
        javascriptRemoveValue.innerHTML = "";



    } else if (javascriptRandomValue == 48 && javascriptInputAnswer == javascriptAnswerArr[48].A48) {
        javascriptCorrectValue.innerHTML = "Correct..";
        javascriptDisplayAnswer.innerHTML = `
        <textarea name="text" id="input">Good Job :) </textarea>`;
        javascriptNextButton.innerHTML = `<button id = "javascriptNextButton" onclick=javascriptBtn()>Next</button>`;
        javascriptRemoveValue.innerHTML = "";

    } else if (javascriptRandomValue == 48 && javascriptInputAnswer !== javascriptAnswerArr[48].A48) {
        javascriptDisplayAnswer.innerHTML = `
    <textarea name="text" id="input">
        var outerWear = "T-Shirt";
        function myOutfit() {
          var outerWear = "sweater";
          return outerWear;
        }
        myOutfit();</textarea>`;
        javascriptIncorrectValue.innerHTML = "Incorrect..";
        javascriptNextButton.innerHTML = `<button id = "javascriptNextButton" onclick=javascriptBtn()>Next</button>`;
        javascriptRemoveValue.innerHTML = "";



    } else if (javascriptRandomValue == 49 && javascriptInputAnswer == javascriptAnswerArr[49].A49) {
        javascriptCorrectValue.innerHTML = "Correct..";
        javascriptDisplayAnswer.innerHTML = `
        <textarea name="text" id="input">Good Job :) </textarea>`;
        javascriptNextButton.innerHTML = `<button id = "javascriptNextButton" onclick=javascriptBtn()>Next</button>`;
        javascriptRemoveValue.innerHTML = "";

    } else if (javascriptRandomValue == 49 && javascriptInputAnswer !== javascriptAnswerArr[49].A49) {
        javascriptDisplayAnswer.innerHTML = `
    <textarea name="text" id="input">
        function timesFive(num) {
            return num * 5;
          }</textarea>`;
        javascriptIncorrectValue.innerHTML = "Incorrect..";
        javascriptNextButton.innerHTML = `<button id = "javascriptNextButton" onclick=javascriptBtn()>Next</button>`;
        javascriptRemoveValue.innerHTML = "";



    } else if (javascriptRandomValue == 50 && javascriptInputAnswer == javascriptAnswerArr[50].A50) {
        javascriptCorrectValue.innerHTML = "Correct..";
        javascriptDisplayAnswer.innerHTML = `
        <textarea name="text" id="input">Good Job :) </textarea>`;
        javascriptNextButton.innerHTML = `<button id = "javascriptNextButton" onclick=javascriptBtn()>Next</button>`;
        javascriptRemoveValue.innerHTML = "";

    } else if (javascriptRandomValue == 50 && javascriptInputAnswer !== javascriptAnswerArr[50].A50) {
        javascriptDisplayAnswer.innerHTML = `
    <textarea name="text" id="input">
        function addFive() {
            sum += 5;
          }</textarea>`;
        javascriptIncorrectValue.innerHTML = "Incorrect..";
        javascriptNextButton.innerHTML = `<button id = "javascriptNextButton" onclick=javascriptBtn()>Next</button>`;
        javascriptRemoveValue.innerHTML = "";



    } else if (javascriptRandomValue == 51 && javascriptInputAnswer == javascriptAnswerArr[51].A51) {
        javascriptCorrectValue.innerHTML = "Correct..";
        javascriptDisplayAnswer.innerHTML = `
        <textarea name="text" id="input">Good Job :) </textarea>`;
        javascriptNextButton.innerHTML = `<button id = "javascriptNextButton" onclick=javascriptBtn()>Next</button>`;
        javascriptRemoveValue.innerHTML = "";

    } else if (javascriptRandomValue == 51 && javascriptInputAnswer !== javascriptAnswerArr[51].A51) {
        javascriptDisplayAnswer.innerHTML = `
    <textarea name="text" id="input">
        var processed = 0;
        
        function processArg(num) {
          return (num + 3) / 5;
        }
        processed = processArg(7);
          </textarea>`;
        javascriptIncorrectValue.innerHTML = "Incorrect..";
        javascriptNextButton.innerHTML = `<button id = "javascriptNextButton" onclick=javascriptBtn()>Next</button>`;
        javascriptRemoveValue.innerHTML = "";



    } else if (javascriptRandomValue == 52 && javascriptInputAnswer == javascriptAnswerArr[52].A52) {
        javascriptCorrectValue.innerHTML = "Correct..";
        javascriptDisplayAnswer.innerHTML = `
        <textarea name="text" id="input">Good Job :) </textarea>`;
        javascriptNextButton.innerHTML = `<button id = "javascriptNextButton" onclick=javascriptBtn()>Next</button>`;
        javascriptRemoveValue.innerHTML = "";

    } else if (javascriptRandomValue == 52 && javascriptInputAnswer !== javascriptAnswerArr[52].A52) {
        javascriptDisplayAnswer.innerHTML = `
    <textarea name="text" id="input">
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
        javascriptNextButton.innerHTML = `<button id = "javascriptNextButton" onclick=javascriptBtn()>Next</button>`;
        javascriptRemoveValue.innerHTML = "";



    } else if (javascriptRandomValue == 53 && javascriptInputAnswer == javascriptAnswerArr[53].A53) {
        javascriptCorrectValue.innerHTML = "Correct..";
        javascriptDisplayAnswer.innerHTML = `
        <textarea name="text" id="input">Good Job :) </textarea>`;
        javascriptNextButton.innerHTML = `<button id = "javascriptNextButton" onclick=javascriptBtn()>Next</button>`;
        javascriptRemoveValue.innerHTML = "";

    } else if (javascriptRandomValue == 53 && javascriptInputAnswer !== javascriptAnswerArr[53].A53) {
        javascriptDisplayAnswer.innerHTML = `
    <textarea name="text" id="input">
        function welcomeToBooleans() {
            return true; 
            }
          </textarea>`;
        javascriptIncorrectValue.innerHTML = "Incorrect..";
        javascriptNextButton.innerHTML = `<button id = "javascriptNextButton" onclick=javascriptBtn()>Next</button>`;
        javascriptRemoveValue.innerHTML = "";



    } else if (javascriptRandomValue == 54 && javascriptInputAnswer == javascriptAnswerArr[54].A54) {
        javascriptCorrectValue.innerHTML = "Correct..";
        javascriptDisplayAnswer.innerHTML = `
        <textarea name="text" id="input">Good Job :) </textarea>`;
        javascriptNextButton.innerHTML = `<button id = "javascriptNextButton" onclick=javascriptBtn()>Next</button>`;
        javascriptRemoveValue.innerHTML = "";

    } else if (javascriptRandomValue == 54 && javascriptInputAnswer !== javascriptAnswerArr[54].A54) {
        javascriptDisplayAnswer.innerHTML = `
    <textarea name="text" id="input">
        function trueOrFalse(wasThatTrue) {
            if (wasThatTrue) 
             {
              return "Yes, that was true";
              }
            return "No, that was false";
            
           }
          </textarea>`;
        javascriptIncorrectValue.innerHTML = "Incorrect..";
        javascriptNextButton.innerHTML = `<button id = "javascriptNextButton" onclick=javascriptBtn()>Next</button>`;
        javascriptRemoveValue.innerHTML = "";



    } else if (javascriptRandomValue == 55 && javascriptInputAnswer == javascriptAnswerArr[55].A55) {
        javascriptCorrectValue.innerHTML = "Correct..";
        javascriptDisplayAnswer.innerHTML = `
        <textarea name="text" id="input">Good Job :) </textarea>`;
        javascriptNextButton.innerHTML = `<button id = "javascriptNextButton" onclick=javascriptBtn()>Next</button>`;
        javascriptRemoveValue.innerHTML = "";

    } else if (javascriptRandomValue == 55 && javascriptInputAnswer !== javascriptAnswerArr[55].A55) {
        javascriptDisplayAnswer.innerHTML = `
    <textarea name="text" id="input">
        function testEqual(val) {
            if (val == 12) { 
              return "Equal";
            }
            return "Not Equal";
          }
          testEqual(10);
          </textarea>`;
        javascriptIncorrectValue.innerHTML = "Incorrect..";
        javascriptNextButton.innerHTML = `<button id = "javascriptNextButton" onclick=javascriptBtn()>Next</button>`;
        javascriptRemoveValue.innerHTML = "";



    } else if (javascriptRandomValue == 56 && javascriptInputAnswer == javascriptAnswerArr[56].A56) {
        javascriptCorrectValue.innerHTML = "Correct..";
        javascriptDisplayAnswer.innerHTML = `
        <textarea name="text" id="input">Good Job :) </textarea>`;
        javascriptNextButton.innerHTML = `<button id = "javascriptNextButton" onclick=javascriptBtn()>Next</button>`;
        javascriptRemoveValue.innerHTML = "";

    } else if (javascriptRandomValue == 56 && javascriptInputAnswer !== javascriptAnswerArr[56].A56) {
        javascriptDisplayAnswer.innerHTML = `
    <textarea name="text" id="input">
        function testStrict(val) {
            if (val === 7) { 
              return "Equal";
            }
            return "Not Equal";
          }
          testStrict(10);
          </textarea>`;
        javascriptIncorrectValue.innerHTML = "Incorrect..";
        javascriptNextButton.innerHTML = `<button id = "javascriptNextButton" onclick=javascriptBtn()>Next</button>`;
        javascriptRemoveValue.innerHTML = "";



    } else if (javascriptRandomValue == 57 && javascriptInputAnswer == javascriptAnswerArr[57].A57) {
        javascriptCorrectValue.innerHTML = "Correct..";
        javascriptDisplayAnswer.innerHTML = `
        <textarea name="text" id="input">Good Job :) </textarea>`;
        javascriptNextButton.innerHTML = `<button id = "javascriptNextButton" onclick=javascriptBtn()>Next</button>`;
        javascriptRemoveValue.innerHTML = "";

    } else if (javascriptRandomValue == 57 && javascriptInputAnswer !== javascriptAnswerArr[57].A57) {
        javascriptDisplayAnswer.innerHTML = `
    <textarea name="text" id="input">
        function compareEquality(a, b) {
            if (a === b) {
                return  "Equal";
            }
            return  "Not Equal";
        }
        compareEquality(10, "10");
          </textarea>`;
        javascriptIncorrectValue.innerHTML = "Incorrect..";
        javascriptNextButton.innerHTML = `<button id = "javascriptNextButton" onclick=javascriptBtn()>Next</button>`;
        javascriptRemoveValue.innerHTML = "";



    } else if (javascriptRandomValue == 58 && javascriptInputAnswer == javascriptAnswerArr[58].A58) {
        javascriptCorrectValue.innerHTML = "Correct..";
        javascriptDisplayAnswer.innerHTML = `
        <textarea name="text" id="input">Good Job :) </textarea>`;
        javascriptNextButton.innerHTML = `<button id = "javascriptNextButton" onclick=javascriptBtn()>Next</button>`;
        javascriptRemoveValue.innerHTML = "";

    } else if (javascriptRandomValue == 58 && javascriptInputAnswer !== javascriptAnswerArr[58].A58) {
        javascriptDisplayAnswer.innerHTML = `
    <textarea name="text" id="input">
        function testNotEqual(val) {
            if (val != 99) 
              return "Not Equal";
              
            return "Equal";
          }
          </textarea>`;
        javascriptIncorrectValue.innerHTML = "Incorrect..";
        javascriptNextButton.innerHTML = `<button id = "javascriptNextButton" onclick=javascriptBtn()>Next</button>`;
        javascriptRemoveValue.innerHTML = "";



    } else if (javascriptRandomValue == 59 && javascriptInputAnswer == javascriptAnswerArr[59].A59) {
        javascriptCorrectValue.innerHTML = "Correct..";
        javascriptDisplayAnswer.innerHTML = `
        <textarea name="text" id="input">Good Job :) </textarea>`;
        javascriptNextButton.innerHTML = `<button id = "javascriptNextButton" onclick=javascriptBtn()>Next</button>`;
        javascriptRemoveValue.innerHTML = "";

    } else if (javascriptRandomValue == 59 && javascriptInputAnswer !== javascriptAnswerArr[59].A59) {
        javascriptDisplayAnswer.innerHTML = `
    <textarea name="text" id="input">
        function testStrictNotEqual(val) {
            if (val !== 17) {
              return "Not Equal";
            }
            return "Equal";
          }
          testStrictNotEqual(10);</textarea>`;
        javascriptIncorrectValue.innerHTML = "Incorrect..";
        javascriptNextButton.innerHTML = `<button id = "javascriptNextButton" onclick=javascriptBtn()>Next</button>`;
        javascriptRemoveValue.innerHTML = "";



    } else if (javascriptRandomValue == 60 && javascriptInputAnswer == javascriptAnswerArr[60].A60) {
        javascriptCorrectValue.innerHTML = "Correct..";
        javascriptDisplayAnswer.innerHTML = `
        <textarea name="text" id="input">Good Job :) </textarea>`;
        javascriptNextButton.innerHTML = `<button id = "javascriptNextButton" onclick=javascriptBtn()>Next</button>`;
        javascriptRemoveValue.innerHTML = "";

    } else if (javascriptRandomValue == 60 && javascriptInputAnswer !== javascriptAnswerArr[60].A60) {
        javascriptDisplayAnswer.innerHTML = `
    <textarea name="text" id="input">
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
        javascriptNextButton.innerHTML = `<button id = "javascriptNextButton" onclick=javascriptBtn()>Next</button>`;
        javascriptRemoveValue.innerHTML = "";



    } else if (javascriptRandomValue == 61 && javascriptInputAnswer == javascriptAnswerArr[61].A61) {
        javascriptCorrectValue.innerHTML = "Correct..";
        javascriptDisplayAnswer.innerHTML = `
        <textarea name="text" id="input">Good Job :) </textarea>`;
        javascriptNextButton.innerHTML = `<button id = "javascriptNextButton" onclick=javascriptBtn()>Next</button>`;
        javascriptRemoveValue.innerHTML = "";

    } else if (javascriptRandomValue == 61 && javascriptInputAnswer !== javascriptAnswerArr[61].A61) {
        javascriptDisplayAnswer.innerHTML = `
    <textarea name="text" id="input">
        function testGreaterOrEqual(val) {
            if (val >= 20){
              return "20 or Over";
            }
            if (val >= 10){
              return "10 or Over";
            }
            return "Less than 10";
          }</textarea>`;
        javascriptIncorrectValue.innerHTML = "Incorrect..";
        javascriptNextButton.innerHTML = `<button id = "javascriptNextButton" onclick=javascriptBtn()>Next</button>`;
        javascriptRemoveValue.innerHTML = "";



    } else if (javascriptRandomValue == 62 && javascriptInputAnswer == javascriptAnswerArr[62].A62) {
        javascriptCorrectValue.innerHTML = "Correct..";
        javascriptDisplayAnswer.innerHTML = `
        <textarea name="text" id="input">Good Job :) </textarea>`;
        javascriptNextButton.innerHTML = `<button id = "javascriptNextButton" onclick=javascriptBtn()>Next</button>`;
        javascriptRemoveValue.innerHTML = "";

    } else if (javascriptRandomValue == 62 && javascriptInputAnswer !== javascriptAnswerArr[62].A62) {
        javascriptDisplayAnswer.innerHTML = `
    <textarea name="text" id="input">
        function testLessThan(val) {
            if (val < 25){
              return "Under 25";
            }
            if (val < 55){
              return "Under 55";
            }
            return "55 or Over";
          }</textarea>`;
        javascriptIncorrectValue.innerHTML = "Incorrect..";
        javascriptNextButton.innerHTML = `<button id = "javascriptNextButton" onclick=javascriptBtn()>Next</button>`;
        javascriptRemoveValue.innerHTML = "";



    } else if (javascriptRandomValue == 63 && javascriptInputAnswer == javascriptAnswerArr[63].A63) {
        javascriptCorrectValue.innerHTML = "Correct..";
        javascriptDisplayAnswer.innerHTML = `
        <textarea name="text" id="input">Good Job :) </textarea>`;
        javascriptNextButton.innerHTML = `<button id = "javascriptNextButton" onclick=javascriptBtn()>Next</button>`;
        javascriptRemoveValue.innerHTML = "";

    } else if (javascriptRandomValue == 63 && javascriptInputAnswer !== javascriptAnswerArr[63].A63) {
        javascriptDisplayAnswer.innerHTML = `
    <textarea name="text" id="input">
        function testLessOrEqual(val) {
            if (val <= 12){
              return "Smaller Than or Equal to 12";
            }
            if (val <= 24){
              return "Smaller Than or Equal to 24";
            }
            return "More Than 24";
          }</textarea>`;
        javascriptIncorrectValue.innerHTML = "Incorrect..";
        javascriptNextButton.innerHTML = `<button id = "javascriptNextButton" onclick=javascriptBtn()>Next</button>`;
        javascriptRemoveValue.innerHTML = "";



    } else if (javascriptRandomValue == 64 && javascriptInputAnswer == javascriptAnswerArr[64].A64) {
        javascriptCorrectValue.innerHTML = "Correct..";
        javascriptDisplayAnswer.innerHTML = `
        <textarea name="text" id="input">Good Job :) </textarea>`;
        javascriptNextButton.innerHTML = `<button id = "javascriptNextButton" onclick=javascriptBtn()>Next</button>`;
        javascriptRemoveValue.innerHTML = "";

    } else if (javascriptRandomValue == 64 && javascriptInputAnswer !== javascriptAnswerArr[64].A64) {
        javascriptDisplayAnswer.innerHTML = `
    <textarea name="text" id="input">
        function testLogicalAnd(val) {
            if (val <= 50 && val >= 25) {
                return "Yes";
            }
            return "No";
          }
          testLogicalAnd(10);
          </textarea>`;
        javascriptIncorrectValue.innerHTML = "Incorrect..";
        javascriptNextButton.innerHTML = `<button id = "javascriptNextButton" onclick=javascriptBtn()>Next</button>`;
        javascriptRemoveValue.innerHTML = "";



    } else if (javascriptRandomValue == 65 && javascriptInputAnswer == javascriptAnswerArr[65].A65) {
        javascriptCorrectValue.innerHTML = "Correct..";
        javascriptDisplayAnswer.innerHTML = `
        <textarea name="text" id="input">Good Job :) </textarea>`;
        javascriptNextButton.innerHTML = `<button id = "javascriptNextButton" onclick=javascriptBtn()>Next</button>`;
        javascriptRemoveValue.innerHTML = "";

    } else if (javascriptRandomValue == 65 && javascriptInputAnswer !== javascriptAnswerArr[65].A65) {
        javascriptDisplayAnswer.innerHTML = `
    <textarea name="text" id="input">
        function testLogicalOr(val) {
            if ( val < 10 || val > 20 ) {
                return "Outside";
            }
              return "Inside";
            }
            testLogicalOr(15);
            </textarea>`;
        javascriptIncorrectValue.innerHTML = "Incorrect..";
        javascriptNextButton.innerHTML = `<button id = "javascriptNextButton" onclick=javascriptBtn()>Next</button>`;
        javascriptRemoveValue.innerHTML = "";



    } else if (javascriptRandomValue == 66 && javascriptInputAnswer == javascriptAnswerArr[66].A66) {
        javascriptCorrectValue.innerHTML = "Correct..";
        javascriptDisplayAnswer.innerHTML = `
        <textarea name="text" id="input">Good Job :) </textarea>`;
        javascriptNextButton.innerHTML = `<button id = "javascriptNextButton" onclick=javascriptBtn()>Next</button>`;
        javascriptRemoveValue.innerHTML = "";

    } else if (javascriptRandomValue == 66 && javascriptInputAnswer !== javascriptAnswerArr[66].A66) {
        javascriptDisplayAnswer.innerHTML = `
    <textarea name="text" id="input">
        function testElse(val) {
            var result = "";
            if (val > 5) {
            return "Bigger than 5";
            
            } else {
            return "5 or Smaller";
            }
            return result;
            }
            testElse(4);</textarea>`;
        javascriptIncorrectValue.innerHTML = "Incorrect..";
        javascriptNextButton.innerHTML = `<button id = "javascriptNextButton" onclick=javascriptBtn()>Next</button>`;
        javascriptRemoveValue.innerHTML = "";



    } else if (javascriptRandomValue == 67 && javascriptInputAnswer == javascriptAnswerArr[67].A67) {
        javascriptCorrectValue.innerHTML = "Correct..";
        javascriptDisplayAnswer.innerHTML = `
        <textarea name="text" id="input">Good Job :) </textarea>`;
        javascriptNextButton.innerHTML = `<button id = "javascriptNextButton" onclick=javascriptBtn()>Next</button>`;
        javascriptRemoveValue.innerHTML = "";

    } else if (javascriptRandomValue == 67 && javascriptInputAnswer !== javascriptAnswerArr[67].A67) {
        javascriptDisplayAnswer.innerHTML = `
    <textarea name="text" id="input">
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
          testElseIf(7);</textarea>`;
        javascriptIncorrectValue.innerHTML = "Incorrect..";
        javascriptNextButton.innerHTML = `<button id = "javascriptNextButton" onclick=javascriptBtn()>Next</button>`;
        javascriptRemoveValue.innerHTML = "";



    } else if (javascriptRandomValue == 68 && javascriptInputAnswer == javascriptAnswerArr[68].A68) {
        javascriptCorrectValue.innerHTML = "Correct..";
        javascriptDisplayAnswer.innerHTML = `
        <textarea name="text" id="input">Good Job :) </textarea>`;
        javascriptNextButton.innerHTML = `<button id = "javascriptNextButton" onclick=javascriptBtn()>Next</button>`;
        javascriptRemoveValue.innerHTML = "";

    } else if (javascriptRandomValue == 68 && javascriptInputAnswer !== javascriptAnswerArr[68].A68) {
        javascriptDisplayAnswer.innerHTML = `
    <textarea name="text" id="input">
        function orderMyLogic(val) {
            if (val < 5) {
            return "Less than 5";
            } else if (val < 10) {
            return "Less than 10";
            } else {
            return "Greater than or equal to 10";
            }
            }</textarea>`;
        javascriptIncorrectValue.innerHTML = "Incorrect..";
        javascriptNextButton.innerHTML = `<button id = "javascriptNextButton" onclick=javascriptBtn()>Next</button>`;
        javascriptRemoveValue.innerHTML = "";



    } else if (javascriptRandomValue == 69 && javascriptInputAnswer == javascriptAnswerArr[69].A69) {
        javascriptCorrectValue.innerHTML = "Correct..";
        javascriptDisplayAnswer.innerHTML = `
        <textarea name="text" id="input">Good Job :) </textarea>`;
        javascriptNextButton.innerHTML = `<button id = "javascriptNextButton" onclick=javascriptBtn()>Next</button>`;
        javascriptRemoveValue.innerHTML = "";

    } else if (javascriptRandomValue == 69 && javascriptInputAnswer !== javascriptAnswerArr[69].A69) {
        javascriptDisplayAnswer.innerHTML = `
    <textarea name="text" id="input">
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
          testSize(7);</textarea>`;
        javascriptIncorrectValue.innerHTML = "Incorrect..";
        javascriptNextButton.innerHTML = `<button id = "javascriptNextButton" onclick=javascriptBtn()>Next</button>`;
        javascriptRemoveValue.innerHTML = "";



    } else if (javascriptRandomValue == 70 && javascriptInputAnswer == javascriptAnswerArr[70].A70) {
        javascriptCorrectValue.innerHTML = "Correct..";
        javascriptDisplayAnswer.innerHTML = `
        <textarea name="text" id="input">Good Job :) </textarea>`;
        javascriptNextButton.innerHTML = `<button id = "javascriptNextButton" onclick=javascriptBtn()>Next</button>`;
        javascriptRemoveValue.innerHTML = "";

    } else if (javascriptRandomValue == 70 && javascriptInputAnswer !== javascriptAnswerArr[70].A70) {
        javascriptDisplayAnswer.innerHTML = `
    <textarea name="text" id="input">
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
          golfScore(5, 4);</textarea>`;
        javascriptIncorrectValue.innerHTML = "Incorrect..";
        javascriptNextButton.innerHTML = `<button id = "javascriptNextButton" onclick=javascriptBtn()>Next</button>`;
        javascriptRemoveValue.innerHTML = "";



    } else if (javascriptRandomValue == 71 && javascriptInputAnswer == javascriptAnswerArr[71].A71) {
        javascriptCorrectValue.innerHTML = "Correct..";
        javascriptDisplayAnswer.innerHTML = `
        <textarea name="text" id="input">Good Job :) </textarea>`;
        javascriptNextButton.innerHTML = `<button id = "javascriptNextButton" onclick=javascriptBtn()>Next</button>`;
        javascriptRemoveValue.innerHTML = "";

    } else if (javascriptRandomValue == 71 && javascriptInputAnswer !== javascriptAnswerArr[71].A71) {
        javascriptDisplayAnswer.innerHTML = `
    <textarea name="text" id="input">
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
          caseInSwitch(1);</textarea>`;
        javascriptIncorrectValue.innerHTML = "Incorrect..";
        javascriptNextButton.innerHTML = `<button id = "javascriptNextButton" onclick=javascriptBtn()>Next</button>`;
        javascriptRemoveValue.innerHTML = "";



    } else if (javascriptRandomValue == 72 && javascriptInputAnswer == javascriptAnswerArr[72].A72) {
        javascriptCorrectValue.innerHTML = "Correct..";
        javascriptDisplayAnswer.innerHTML = `
        <textarea name="text" id="input">Good Job :) </textarea>`;
        javascriptNextButton.innerHTML = `<button id = "javascriptNextButton" onclick=javascriptBtn()>Next</button>`;
        javascriptRemoveValue.innerHTML = "";

    } else if (javascriptRandomValue == 72 && javascriptInputAnswer !== javascriptAnswerArr[72].A72) {
        javascriptDisplayAnswer.innerHTML = `
    <textarea name="text" id="input">
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
          switchOfStuff(1);</textarea>`;
        javascriptIncorrectValue.innerHTML = "Incorrect..";
        javascriptNextButton.innerHTML = `<button id = "javascriptNextButton" onclick=javascriptBtn()>Next</button>`;
        javascriptRemoveValue.innerHTML = "";



    } else if (javascriptRandomValue == 73 && javascriptInputAnswer == javascriptAnswerArr[73].A73) {
        javascriptCorrectValue.innerHTML = "Correct..";
        javascriptDisplayAnswer.innerHTML = `
        <textarea name="text" id="input">Good Job :) </textarea>`;
        javascriptNextButton.innerHTML = `<button id = "javascriptNextButton" onclick=javascriptBtn()>Next</button>`;
        javascriptRemoveValue.innerHTML = "";

    } else if (javascriptRandomValue == 73 && javascriptInputAnswer !== javascriptAnswerArr[73].A73) {
        javascriptDisplayAnswer.innerHTML = `
    <textarea name="text" id="input">
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
          sequentialSizes(1);</textarea>`;
        javascriptIncorrectValue.innerHTML = "Incorrect..";
        javascriptNextButton.innerHTML = `<button id = "javascriptNextButton" onclick=javascriptBtn()>Next</button>`;
        javascriptRemoveValue.innerHTML = "";



    } else if (javascriptRandomValue == 74 && javascriptInputAnswer == javascriptAnswerArr[74].A74) {
        javascriptCorrectValue.innerHTML = "Correct..";
        javascriptDisplayAnswer.innerHTML = `
        <textarea name="text" id="input">Good Job :) </textarea>`;
        javascriptNextButton.innerHTML = `<button id = "javascriptNextButton" onclick=javascriptBtn()>Next</button>`;
        javascriptRemoveValue.innerHTML = "";

    } else if (javascriptRandomValue == 74 && javascriptInputAnswer !== javascriptAnswerArr[74].A74) {
        javascriptDisplayAnswer.innerHTML = `
    <textarea name="text" id="input">
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
          chainToSwitch(7);</textarea>`;
        javascriptIncorrectValue.innerHTML = "Incorrect..";
        javascriptNextButton.innerHTML = `<button id = "javascriptNextButton" onclick=javascriptBtn()>Next</button>`;
        javascriptRemoveValue.innerHTML = "";



    } else if (javascriptRandomValue == 75 && javascriptInputAnswer == javascriptAnswerArr[75].A75) {
        javascriptCorrectValue.innerHTML = "Correct..";
        javascriptDisplayAnswer.innerHTML = `
        <textarea name="text" id="input">Good Job :) </textarea>`;
        javascriptNextButton.innerHTML = `<button id = "javascriptNextButton" onclick=javascriptBtn()>Next</button>`;
        javascriptRemoveValue.innerHTML = "";

    } else if (javascriptRandomValue == 75 && javascriptInputAnswer !== javascriptAnswerArr[75].A75) {
        javascriptDisplayAnswer.innerHTML = `
    <textarea name="text" id="input">
        function isLess(a, b) {
            return a <= b;
          }
          isLess(10, 15);</textarea>`;
        javascriptIncorrectValue.innerHTML = "Incorrect..";
        javascriptNextButton.innerHTML = `<button id = "javascriptNextButton" onclick=javascriptBtn()>Next</button>`;
        javascriptRemoveValue.innerHTML = "";



    } else if (javascriptRandomValue == 76 && javascriptInputAnswer == javascriptAnswerArr[76].A76) {
        javascriptCorrectValue.innerHTML = "Correct..";
        javascriptDisplayAnswer.innerHTML = `
        <textarea name="text" id="input">Good Job :) </textarea>`;
        javascriptNextButton.innerHTML = `<button id = "javascriptNextButton" onclick=javascriptBtn()>Next</button>`;
        javascriptRemoveValue.innerHTML = "";

    } else if (javascriptRandomValue == 76 && javascriptInputAnswer !== javascriptAnswerArr[76].A76) {
        javascriptDisplayAnswer.innerHTML = `
    <textarea name="text" id="input">
        function abTest(a, b) {
            if (a < 0 || b < 0) return undefined;
          
          return Math.round(Math.pow(Math.sqrt(a) + Math.sqrt(b), 2));
          }
          abTest(2,2);</textarea>`;
        javascriptIncorrectValue.innerHTML = "Incorrect..";
        javascriptNextButton.innerHTML = `<button id = "javascriptNextButton" onclick=javascriptBtn()>Next</button>`;
        javascriptRemoveValue.innerHTML = "";



    } else if (javascriptRandomValue == 77 && javascriptInputAnswer == javascriptAnswerArr[77].A77) {
        javascriptCorrectValue.innerHTML = "Correct..";
        javascriptDisplayAnswer.innerHTML = `
        <textarea name="text" id="input">Good Job :) </textarea>`;
        javascriptNextButton.innerHTML = `<button id = "javascriptNextButton" onclick=javascriptBtn()>Next</button>`;
        javascriptRemoveValue.innerHTML = "";

    } else if (javascriptRandomValue == 77 && javascriptInputAnswer !== javascriptAnswerArr[77].A77) {
        javascriptDisplayAnswer.innerHTML = `
    <textarea name="text" id="input">
        var count = 0;
        
        function cc(card) {
          var regex = /[JQKA]/;
          if (card > 1 && card < 7){count++;}
          else if (card === 10 || String(card).match(regex)){count--;}
          
          if (count > 0) return count + " Bet";
          return count + " Hold";
          
        }
        cc(2); cc(3); cc(7); cc('K'); cc('A');</textarea>`;
        javascriptIncorrectValue.innerHTML = "Incorrect..";
        javascriptNextButton.innerHTML = `<button id = "javascriptNextButton" onclick=javascriptBtn()>Next</button>`;
        javascriptRemoveValue.innerHTML = "";



    } else if (javascriptRandomValue == 78 && javascriptInputAnswer == javascriptAnswerArr[78].A78) {
        javascriptCorrectValue.innerHTML = "Correct..";
        javascriptDisplayAnswer.innerHTML = `
        <textarea name="text" id="input">Good Job :) </textarea>`;
        javascriptNextButton.innerHTML = `<button id = "javascriptNextButton" onclick=javascriptBtn()>Next</button>`;
        javascriptRemoveValue.innerHTML = "";

    } else if (javascriptRandomValue == 78 && javascriptInputAnswer !== javascriptAnswerArr[78].A78) {
        javascriptDisplayAnswer.innerHTML = `
    <textarea name="text" id="input">
        var myDog = {
            "name": "Camper",
          "legs": 4,
          "tails": 1,
          "friends": ["everything!"]
        };</textarea>`;
        javascriptIncorrectValue.innerHTML = "Incorrect..";
        javascriptNextButton.innerHTML = `<button id = "javascriptNextButton" onclick=javascriptBtn()>Next</button>`;
        javascriptRemoveValue.innerHTML = "";



    } else if (javascriptRandomValue == 79 && javascriptInputAnswer == javascriptAnswerArr[79].A79) {
        javascriptCorrectValue.innerHTML = "Correct..";
        javascriptDisplayAnswer.innerHTML = `
        <textarea name="text" id="input">Good Job :) </textarea>`;
        javascriptNextButton.innerHTML = `<button id = "javascriptNextButton" onclick=javascriptBtn()>Next</button>`;
        javascriptRemoveValue.innerHTML = "";

    } else if (javascriptRandomValue == 79 && javascriptInputAnswer !== javascriptAnswerArr[79].A79) {
        javascriptDisplayAnswer.innerHTML = `
    <textarea name="text" id="input">
        var testObj = {
            "hat": "ballcap",
            "shirt": "jersey",
            "shoes": "cleats"
          };
          var hatValue = testObj.hat;  
          var shirtValue = testObj.shirt;</textarea>`;
        javascriptIncorrectValue.innerHTML = "Incorrect..";
        javascriptNextButton.innerHTML = `<button id = "javascriptNextButton" onclick=javascriptBtn()>Next</button>`;
        javascriptRemoveValue.innerHTML = "";



    } else if (javascriptRandomValue == 80 && javascriptInputAnswer == javascriptAnswerArr[80].A80) {
        javascriptCorrectValue.innerHTML = "Correct..";
        javascriptDisplayAnswer.innerHTML = `
        <textarea name="text" id="input">Good Job :) </textarea>`;
        javascriptNextButton.innerHTML = `<button id = "javascriptNextButton" onclick=javascriptBtn()>Next</button>`;
        javascriptRemoveValue.innerHTML = "";

    } else if (javascriptRandomValue == 80 && javascriptInputAnswer !== javascriptAnswerArr[80].A80) {
        javascriptDisplayAnswer.innerHTML = `
    <textarea name="text" id="input">
        var testObj = {
            "an entree": "hamburger",
            "my side": "veggies",
            "the drink": "water"
          };
          var entreeValue = testObj["an entree"];  
          var drinkValue = testObj["the drink"];</textarea>`;
        javascriptIncorrectValue.innerHTML = "Incorrect..";
        javascriptNextButton.innerHTML = `<button id = "javascriptNextButton" onclick=javascriptBtn()>Next</button>`;
        javascriptRemoveValue.innerHTML = "";



    } else if (javascriptRandomValue == 81 && javascriptInputAnswer == javascriptAnswerArr[81].A81) {
        javascriptCorrectValue.innerHTML = "Correct..";
        javascriptDisplayAnswer.innerHTML = `
        <textarea name="text" id="input">Good Job :) </textarea>`;
        javascriptNextButton.innerHTML = `<button id = "javascriptNextButton" onclick=javascriptBtn()>Next</button>`;
        javascriptRemoveValue.innerHTML = "";

    } else if (javascriptRandomValue == 81 && javascriptInputAnswer !== javascriptAnswerArr[81].A81) {
        javascriptDisplayAnswer.innerHTML = `
    <textarea name="text" id="input">
        var testObj = {
            12: "Namath",
            16: "Montana",
            19: "Unitas"
          };
          var playerNumber = 16; 
          var player = testObj[playerNumber]; </textarea>`;
        javascriptIncorrectValue.innerHTML = "Incorrect..";
        javascriptNextButton.innerHTML = `<button id = "javascriptNextButton" onclick=javascriptBtn()>Next</button>`;
        javascriptRemoveValue.innerHTML = "";



    } else if (javascriptRandomValue == 82 && javascriptInputAnswer == javascriptAnswerArr[82].A82) {
        javascriptCorrectValue.innerHTML = "Correct..";
        javascriptDisplayAnswer.innerHTML = `
        <textarea name="text" id="input">Good Job :) </textarea>`;
        javascriptNextButton.innerHTML = `<button id = "javascriptNextButton" onclick=javascriptBtn()>Next</button>`;
        javascriptRemoveValue.innerHTML = "";

    } else if (javascriptRandomValue == 82 && javascriptInputAnswer !== javascriptAnswerArr[82].A82) {
        javascriptDisplayAnswer.innerHTML = `
    <textarea name="text" id="input">
        var myDog = {
            "name": "Coder",
            "legs": 4,
            "tails": 1,
            "friends": ["freeCodeCamp Campers"]
          };
          myDog.name = "Happy Coder";</textarea>`;
        javascriptIncorrectValue.innerHTML = "Incorrect..";
        javascriptNextButton.innerHTML = `<button id = "javascriptNextButton" onclick=javascriptBtn()>Next</button>`;
        javascriptRemoveValue.innerHTML = "";



    } else if (javascriptRandomValue == 83 && javascriptInputAnswer == javascriptAnswerArr[83].A83) {
        javascriptCorrectValue.innerHTML = "Correct..";
        javascriptDisplayAnswer.innerHTML = `
        <textarea name="text" id="input">Good Job :) </textarea>`;
        javascriptNextButton.innerHTML = `<button id = "javascriptNextButton" onclick=javascriptBtn()>Next</button>`;
        javascriptRemoveValue.innerHTML = "";

    } else if (javascriptRandomValue == 83 && javascriptInputAnswer !== javascriptAnswerArr[83].A83) {
        javascriptDisplayAnswer.innerHTML = `
    <textarea name="text" id="input">
        var myDog = {
            "name": "Happy Coder",
            "legs": 4,
            "tails": 1,
            "friends": ["freeCodeCamp Campers"]
          };
          myDog.bark = "woof";</textarea>`;
        javascriptIncorrectValue.innerHTML = "Incorrect..";
        javascriptNextButton.innerHTML = `<button id = "javascriptNextButton" onclick=javascriptBtn()>Next</button>`;
        javascriptRemoveValue.innerHTML = "";



    } else if (javascriptRandomValue == 84 && javascriptInputAnswer == javascriptAnswerArr[84].A84) {
        javascriptCorrectValue.innerHTML = "Correct..";
        javascriptDisplayAnswer.innerHTML = `
        <textarea name="text" id="input">Good Job :) </textarea>`;
        javascriptNextButton.innerHTML = `<button id = "javascriptNextButton" onclick=javascriptBtn()>Next</button>`;
        javascriptRemoveValue.innerHTML = "";

    } else if (javascriptRandomValue == 84 && javascriptInputAnswer !== javascriptAnswerArr[84].A84) {
        javascriptDisplayAnswer.innerHTML = `
    <textarea name="text" id="input">
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
        javascriptNextButton.innerHTML = `<button id = "javascriptNextButton" onclick=javascriptBtn()>Next</button>`;
        javascriptRemoveValue.innerHTML = "";



    } else if (javascriptRandomValue == 85 && javascriptInputAnswer == javascriptAnswerArr[85].A85) {
        javascriptCorrectValue.innerHTML = "Correct..";
        javascriptDisplayAnswer.innerHTML = `
        <textarea name="text" id="input">Good Job :) </textarea>`;
        javascriptNextButton.innerHTML = `<button id = "javascriptNextButton" onclick=javascriptBtn()>Next</button>`;
        javascriptRemoveValue.innerHTML = "";

    } else if (javascriptRandomValue == 85 && javascriptInputAnswer !== javascriptAnswerArr[85].A85) {
        javascriptDisplayAnswer.innerHTML = `
    <textarea name="text" id="input">
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
            
            phoneticLookup("charlie");</textarea>`;
        javascriptIncorrectValue.innerHTML = "Incorrect..";
        javascriptNextButton.innerHTML = `<button id = "javascriptNextButton" onclick=javascriptBtn()>Next</button>`;
        javascriptRemoveValue.innerHTML = "";



    } else if (javascriptRandomValue == 86 && javascriptInputAnswer == javascriptAnswerArr[86].A86) {
        javascriptCorrectValue.innerHTML = "Correct..";
        javascriptDisplayAnswer.innerHTML = `
        <textarea name="text" id="input">Good Job :) </textarea>`;
        javascriptNextButton.innerHTML = `<button id = "javascriptNextButton" onclick=javascriptBtn()>Next</button>`;
        javascriptRemoveValue.innerHTML = "";

    } else if (javascriptRandomValue == 86 && javascriptInputAnswer !== javascriptAnswerArr[86].A86) {
        javascriptDisplayAnswer.innerHTML = `
    <textarea name="text" id="input">
        // Setup
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
        checkObj("gift");</textarea>`;
        javascriptIncorrectValue.innerHTML = "Incorrect..";
        javascriptNextButton.innerHTML = `<button id = "javascriptNextButton" onclick=javascriptBtn()>Next</button>`;
        javascriptRemoveValue.innerHTML = "";



    } else if (javascriptRandomValue == 87 && javascriptInputAnswer == javascriptAnswerArr[87].A87) {
        javascriptCorrectValue.innerHTML = "Correct..";
        javascriptDisplayAnswer.innerHTML = `
        <textarea name="text" id="input">Good Job :) </textarea>`;
        javascriptNextButton.innerHTML = `<button id = "javascriptNextButton" onclick=javascriptBtn()>Next</button>`;
        javascriptRemoveValue.innerHTML = "";

    } else if (javascriptRandomValue == 87 && javascriptInputAnswer !== javascriptAnswerArr[87].A87) {
        javascriptDisplayAnswer.innerHTML = `
    <textarea name="text" id="input">
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
           ];</textarea>`;
        javascriptIncorrectValue.innerHTML = "Incorrect..";
        javascriptNextButton.innerHTML = `<button id = "javascriptNextButton" onclick=javascriptBtn()>Next</button>`;
        javascriptRemoveValue.innerHTML = "";



    } else if (javascriptRandomValue == 88 && javascriptInputAnswer == javascriptAnswerArr[88].A88) {
        javascriptCorrectValue.innerHTML = "Correct..";
        javascriptDisplayAnswer.innerHTML = `
        <textarea name="text" id="input">Good Job :) </textarea>`;
        javascriptNextButton.innerHTML = `<button id = "javascriptNextButton" onclick=javascriptBtn()>Next</button>`;
        javascriptRemoveValue.innerHTML = "";

    } else if (javascriptRandomValue == 88 && javascriptInputAnswer !== javascriptAnswerArr[88].A88) {
        javascriptDisplayAnswer.innerHTML = `
    <textarea name="text" id="input">
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
        javascriptNextButton.innerHTML = `<button id = "javascriptNextButton" onclick=javascriptBtn()>Next</button>`;
        javascriptRemoveValue.innerHTML = "";



    } else if (javascriptRandomValue == 89 && javascriptInputAnswer == javascriptAnswerArr[89].A89) {
        javascriptCorrectValue.innerHTML = "Correct..";
        javascriptDisplayAnswer.innerHTML = `
        <textarea name="text" id="input">Good Job :) </textarea>`;
        javascriptNextButton.innerHTML = `<button id = "javascriptNextButton" onclick=javascriptBtn()>Next</button>`;
        javascriptRemoveValue.innerHTML = "";

    } else if (javascriptRandomValue == 89 && javascriptInputAnswer !== javascriptAnswerArr[89].A89) {
        javascriptDisplayAnswer.innerHTML = `
    <textarea name="text" id="input">
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
          
          var secondTree = myPlants[1].list[1];</textarea>`;
        javascriptIncorrectValue.innerHTML = "Incorrect..";
        javascriptNextButton.innerHTML = `<button id = "javascriptNextButton" onclick=javascriptBtn()>Next</button>`;
        javascriptRemoveValue.innerHTML = "";



    } else if (javascriptRandomValue == 90 && javascriptInputAnswer == javascriptAnswerArr[90].A90) {
        javascriptCorrectValue.innerHTML = "Correct..";
        javascriptDisplayAnswer.innerHTML = `
        <textarea name="text" id="input">Good Job :) </textarea>`;
        javascriptNextButton.innerHTML = `<button id = "javascriptNextButton" onclick=javascriptBtn()>Next</button>`;
        javascriptRemoveValue.innerHTML = "";

    } else if (javascriptRandomValue == 90 && javascriptInputAnswer !== javascriptAnswerArr[90].A90) {
        javascriptDisplayAnswer.innerHTML = `
    <textarea name="text" id="input">
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
        javascriptNextButton.innerHTML = `<button id = "javascriptNextButton" onclick=javascriptBtn()>Next</button>`;
        javascriptRemoveValue.innerHTML = "";



    } else if (javascriptRandomValue == 91 && javascriptInputAnswer == javascriptAnswerArr[91].A91) {
        javascriptCorrectValue.innerHTML = "Correct..";
        javascriptDisplayAnswer.innerHTML = `
        <textarea name="text" id="input">Good Job :) </textarea>`;
        javascriptNextButton.innerHTML = `<button id = "javascriptNextButton" onclick=javascriptBtn()>Next</button>`;
        javascriptRemoveValue.innerHTML = "";

    } else if (javascriptRandomValue == 91 && javascriptInputAnswer !== javascriptAnswerArr[91].A91) {
        javascriptDisplayAnswer.innerHTML = `
    <textarea name="text" id="input">
        var myArray = [];
        var i = 0;
        while (i <= 4){
            myArray.push(i);
            i++;
        }</textarea>`;
        javascriptIncorrectValue.innerHTML = "Incorrect..";
        javascriptNextButton.innerHTML = `<button id = "javascriptNextButton" onclick=javascriptBtn()>Next</button>`;
        javascriptRemoveValue.innerHTML = "";



    } else if (javascriptRandomValue == 92 && javascriptInputAnswer == javascriptAnswerArr[92].A92) {
        javascriptCorrectValue.innerHTML = "Correct..";
        javascriptDisplayAnswer.innerHTML = `
        <textarea name="text" id="input">Good Job :) </textarea>`;
        javascriptNextButton.innerHTML = `<button id = "javascriptNextButton" onclick=javascriptBtn()>Next</button>`;
        javascriptRemoveValue.innerHTML = "";

    } else if (javascriptRandomValue == 92 && javascriptInputAnswer !== javascriptAnswerArr[92].A92) {
        javascriptDisplayAnswer.innerHTML = `
    <textarea name="text" id="input">
        var myArray = [];
        for(var i=1; i<=5; i++){
        myArray.push(i);
        }</textarea>`;
        javascriptIncorrectValue.innerHTML = "Incorrect..";
        javascriptNextButton.innerHTML = `<button id = "javascriptNextButton" onclick=javascriptBtn()>Next</button>`;
        javascriptRemoveValue.innerHTML = "";



    } else if (javascriptRandomValue == 93 && javascriptInputAnswer == javascriptAnswerArr[93].A93) {
        javascriptCorrectValue.innerHTML = "Correct..";
        javascriptDisplayAnswer.innerHTML = `
        <textarea name="text" id="input">Good Job :) </textarea>`;
        javascriptNextButton.innerHTML = `<button id = "javascriptNextButton" onclick=javascriptBtn()>Next</button>`;
        javascriptRemoveValue.innerHTML = "";

    } else if (javascriptRandomValue == 93 && javascriptInputAnswer !== javascriptAnswerArr[93].A93) {
        javascriptDisplayAnswer.innerHTML = `
    <textarea name="text" id="input">
        var myArray = [];
        for (var i = 1; i < 10; i += 2) {
        myArray.push(i);
        }</textarea>`;
        javascriptIncorrectValue.innerHTML = "Incorrect..";
        javascriptNextButton.innerHTML = `<button id = "javascriptNextButton" onclick=javascriptBtn()>Next</button>`;
        javascriptRemoveValue.innerHTML = "";



    } else if (javascriptRandomValue == 94 && javascriptInputAnswer == javascriptAnswerArr[94].A94) {
        javascriptCorrectValue.innerHTML = "Correct..";
        javascriptDisplayAnswer.innerHTML = `
        <textarea name="text" id="input">Good Job :) </textarea>`;
        javascriptNextButton.innerHTML = `<button id = "javascriptNextButton" onclick=javascriptBtn()>Next</button>`;
        javascriptRemoveValue.innerHTML = "";

    } else if (javascriptRandomValue == 94 && javascriptInputAnswer !== javascriptAnswerArr[94].A94) {
        javascriptDisplayAnswer.innerHTML = `
    <textarea name="text" id="input">
        var myArray = [];
        
        for (var i = 9; i > 0; i-=2){
          myArray.push(i)
        }</textarea>`;
        javascriptIncorrectValue.innerHTML = "Incorrect..";
        javascriptNextButton.innerHTML = `<button id = "javascriptNextButton" onclick=javascriptBtn()>Next</button>`;
        javascriptRemoveValue.innerHTML = "";



    } else if (javascriptRandomValue == 95 && javascriptInputAnswer == javascriptAnswerArr[95].A95) {
        javascriptCorrectValue.innerHTML = "Correct..";
        javascriptDisplayAnswer.innerHTML = `
        <textarea name="text" id="input">Good Job :) </textarea>`;
        javascriptNextButton.innerHTML = `<button id = "javascriptNextButton" onclick=javascriptBtn()>Next</button>`;
        javascriptRemoveValue.innerHTML = "";

    } else if (javascriptRandomValue == 95 && javascriptInputAnswer !== javascriptAnswerArr[95].A95) {
        javascriptDisplayAnswer.innerHTML = `
    <textarea name="text" id="input">
        var myArr = [ 2, 3, 4, 5, 6];
        var total = 0;
        
        for (var i = 0; i < myArr.length; i++) {
          total += myArr[i];
        }</textarea>`;
        javascriptIncorrectValue.innerHTML = "Incorrect..";
        javascriptNextButton.innerHTML = `<button id = "javascriptNextButton" onclick=javascriptBtn()>Next</button>`;
        javascriptRemoveValue.innerHTML = "";



    } else if (javascriptRandomValue == 96 && javascriptInputAnswer == javascriptAnswerArr[96].A96) {
        javascriptCorrectValue.innerHTML = "Correct..";
        javascriptDisplayAnswer.innerHTML = `
        <textarea name="text" id="input">Good Job :) </textarea>`;
        javascriptNextButton.innerHTML = `<button id = "javascriptNextButton" onclick=javascriptBtn()>Next</button>`;
        javascriptRemoveValue.innerHTML = "";

    } else if (javascriptRandomValue == 96 && javascriptInputAnswer !== javascriptAnswerArr[96].A96) {
        javascriptDisplayAnswer.innerHTML = `
    <textarea name="text" id="input">
        function multiplyAll(arr) {
            var product = 1;
            for(var i=0; i < arr.length; i++){
              for (var j=0; j < arr[i].length; j++){
                product = product * arr[i][j];
              }
            }
            return product;
          }
          multiplyAll([[1,2],[3,4],[5,6,7]]);</textarea>`;
        javascriptIncorrectValue.innerHTML = "Incorrect..";
        javascriptNextButton.innerHTML = `<button id = "javascriptNextButton" onclick=javascriptBtn()>Next</button>`;
        javascriptRemoveValue.innerHTML = "";



    } else if (javascriptRandomValue == 97 && javascriptInputAnswer == javascriptAnswerArr[97].A97) {
        javascriptCorrectValue.innerHTML = "Correct..";
        javascriptDisplayAnswer.innerHTML = `
        <textarea name="text" id="input">Good Job :) </textarea>`;
        javascriptNextButton.innerHTML = `<button id = "javascriptNextButton" onclick=javascriptBtn()>Next</button>`;
        javascriptRemoveValue.innerHTML = "";

    } else if (javascriptRandomValue == 97 && javascriptInputAnswer !== javascriptAnswerArr[97].A97) {
        javascriptDisplayAnswer.innerHTML = `
    <textarea name="text" id="input">
        var myArray = [];
        var i = 10;
        do {
          myArray.push(i);
          i++;
        } while (i < 5)</textarea>`;
        javascriptIncorrectValue.innerHTML = "Incorrect..";
        javascriptNextButton.innerHTML = `<button id = "javascriptNextButton" onclick=javascriptBtn()>Next</button>`;
        javascriptRemoveValue.innerHTML = "";



    } else if (javascriptRandomValue == 98 && javascriptInputAnswer == javascriptAnswerArr[98].A98) {
        javascriptCorrectValue.innerHTML = "Correct..";
        javascriptDisplayAnswer.innerHTML = `
        <textarea name="text" id="input">Good Job :) </textarea>`;
        javascriptNextButton.innerHTML = `<button id = "javascriptNextButton" onclick=javascriptBtn()>Next</button>`;
        javascriptRemoveValue.innerHTML = "";

    } else if (javascriptRandomValue == 98 && javascriptInputAnswer !== javascriptAnswerArr[98].A98) {
        javascriptDisplayAnswer.innerHTML = `
    <textarea name="text" id="input">
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
          lookUpProfile("Akira", "likes");</textarea>`;
        javascriptIncorrectValue.innerHTML = "Incorrect..";
        javascriptNextButton.innerHTML = `<button id = "javascriptNextButton" onclick=javascriptBtn()>Next</button>`;
        javascriptRemoveValue.innerHTML = "";



    } else if (javascriptRandomValue == 99 && javascriptInputAnswer == javascriptAnswerArr[99].A99) {
        javascriptCorrectValue.innerHTML = "Correct..";
        javascriptDisplayAnswer.innerHTML = `
        <textarea name="text" id="input">Good Job :) </textarea>`;
        javascriptNextButton.innerHTML = `<button id = "javascriptNextButton" onclick=javascriptBtn()>Next</button>`;
        javascriptRemoveValue.innerHTML = "";

    } else if (javascriptRandomValue == 99 && javascriptInputAnswer !== javascriptAnswerArr[99].A99) {
        javascriptDisplayAnswer.innerHTML = `
    <textarea name="text" id="input">
        function randomFraction() {
            var result = 0;
            while (result === 0) {
              result = Math.random();
            }
            
            return result;  
            
          }</textarea>`;
        javascriptIncorrectValue.innerHTML = "Incorrect..";
        javascriptNextButton.innerHTML = `<button id = "javascriptNextButton" onclick=javascriptBtn()>Next</button>`;
        javascriptRemoveValue.innerHTML = "";



    } else if (javascriptRandomValue == 100 && javascriptInputAnswer == javascriptAnswerArr[100].A100) {
        javascriptCorrectValue.innerHTML = "Correct..";
        javascriptDisplayAnswer.innerHTML = `
        <textarea name="text" id="input">Good Job :) </textarea>`;
        javascriptNextButton.innerHTML = `<button id = "javascriptNextButton" onclick=javascriptBtn()>Next</button>`;
        javascriptRemoveValue.innerHTML = "";

    } else if (javascriptRandomValue == 100 && javascriptInputAnswer !== javascriptAnswerArr[100].A100) {
        javascriptDisplayAnswer.innerHTML = `
    <textarea name="text" id="input">
        var randomNumberBetween0and19 = Math.floor(Math.random() * 20);
        
        function randomWholeNum() {
            
          return Math.floor(Math.random() * 10);
        }</textarea>`;
        javascriptIncorrectValue.innerHTML = "Incorrect..";
        javascriptNextButton.innerHTML = `<button id = "javascriptNextButton" onclick=javascriptBtn()>Next</button>`;
        javascriptRemoveValue.innerHTML = "";



    } else if (javascriptRandomValue == 101 && javascriptInputAnswer == javascriptAnswerArr[101].A101) {
        javascriptCorrectValue.innerHTML = "Correct..";
        javascriptDisplayAnswer.innerHTML = `
        <textarea name="text" id="input">Good Job :) </textarea>`;
        javascriptNextButton.innerHTML = `<button id = "javascriptNextButton" onclick=javascriptBtn()>Next</button>`;
        javascriptRemoveValue.innerHTML = "";

    } else if (javascriptRandomValue == 101 && javascriptInputAnswer !== javascriptAnswerArr[101].A101) {
        javascriptDisplayAnswer.innerHTML = `
    <textarea name="text" id="input">
        function randomRange(myMin, myMax) {
            
            return Math.floor(Math.random() * (myMax - myMin + 1) + myMin);
            
          }
          var myRandom = randomRange(5, 15);</textarea>`;
        javascriptIncorrectValue.innerHTML = "Incorrect..";
        javascriptNextButton.innerHTML = `<button id = "javascriptNextButton" onclick=javascriptBtn()>Next</button>`;
        javascriptRemoveValue.innerHTML = "";



    } else if (javascriptRandomValue == 102 && javascriptInputAnswer == javascriptAnswerArr[102].A102) {
        javascriptCorrectValue.innerHTML = "Correct..";
        javascriptDisplayAnswer.innerHTML = `
        <textarea name="text" id="input">Good Job :) </textarea>`;
        javascriptNextButton.innerHTML = `<button id = "javascriptNextButton" onclick=javascriptBtn()>Next</button>`;
        javascriptRemoveValue.innerHTML = "";

    } else if (javascriptRandomValue == 102 && javascriptInputAnswer !== javascriptAnswerArr[102].A102) {
        javascriptDisplayAnswer.innerHTML = `
    <textarea name="text" id="input">
        function convertToInteger(str) {
            
            return parseInt(str);
            }
            
            convertToInteger("10011");</textarea>`;
        javascriptIncorrectValue.innerHTML = "Incorrect..";
        javascriptNextButton.innerHTML = `<button id = "javascriptNextButton" onclick=javascriptBtn()>Next</button>`;
        javascriptRemoveValue.innerHTML = "";



    } else if (javascriptRandomValue == 103 && javascriptInputAnswer == javascriptAnswerArr[103].A103) {
        javascriptCorrectValue.innerHTML = "Correct..";
        javascriptDisplayAnswer.innerHTML = `
        <textarea name="text" id="input">Good Job :) </textarea>`;
        javascriptNextButton.innerHTML = `<button id = "javascriptNextButton" onclick=javascriptBtn()>Next</button>`;
        javascriptRemoveValue.innerHTML = "";

    } else if (javascriptRandomValue == 103 && javascriptInputAnswer !== javascriptAnswerArr[103].A103) {
        javascriptDisplayAnswer.innerHTML = `
    <textarea name="text" id="input">
        function convertToInteger(str) {
            var radix = 2;
            return parseInt(str, radix);
            }
            
            convertToInteger("10011");</textarea>`;
        javascriptIncorrectValue.innerHTML = "Incorrect..";
        javascriptNextButton.innerHTML = `<button id = "javascriptNextButton" onclick=javascriptBtn()>Next</button>`;
        javascriptRemoveValue.innerHTML = "";



    } else if (javascriptRandomValue == 104 && javascriptInputAnswer == javascriptAnswerArr[104].A104) {
        javascriptCorrectValue.innerHTML = "Correct..";
        javascriptDisplayAnswer.innerHTML = `
        <textarea name="text" id="input">Good Job :) </textarea>`;
        javascriptNextButton.innerHTML = `<button id = "javascriptNextButton" onclick=javascriptBtn()>Next</button>`;
        javascriptRemoveValue.innerHTML = "";

    } else if (javascriptRandomValue == 104 && javascriptInputAnswer !== javascriptAnswerArr[104].A104) {
        javascriptDisplayAnswer.innerHTML = `
    <textarea name="text" id="input">
        function checkEqual(a, b) {
            return a === b ? true : false;
          }
          checkEqual(1, 2);</textarea>`;
        javascriptIncorrectValue.innerHTML = "Incorrect..";
        javascriptNextButton.innerHTML = `<button id = "javascriptNextButton" onclick=javascriptBtn()>Next</button>`;
        javascriptRemoveValue.innerHTML = "";



    } else if (javascriptRandomValue == 105 && javascriptInputAnswer == javascriptAnswerArr[105].A105) {
        javascriptCorrectValue.innerHTML = "Correct..";
        javascriptDisplayAnswer.innerHTML = `
        <textarea name="text" id="input">Good Job :) </textarea>`;
        javascriptNextButton.innerHTML = `<button id = "javascriptNextButton" onclick=javascriptBtn()>Next</button>`;
        javascriptRemoveValue.innerHTML = "";

    } else if (javascriptRandomValue == 105 && javascriptInputAnswer !== javascriptAnswerArr[105].A105) {
        javascriptDisplayAnswer.innerHTML = `
    <textarea name="text" id="input">
        function checkSign(num) {
            return (
              num > 0 ? "positive" :
              num < 0 ? "negative" :
              "zero"
            );
          }</textarea>`;
        javascriptIncorrectValue.innerHTML = "Incorrect..";
        javascriptNextButton.innerHTML = `<button id = "javascriptNextButton" onclick=javascriptBtn()>Next</button>`;
        javascriptRemoveValue.innerHTML = "";



    }

    else {
        javascriptIncorrectValue.innerHTML = "Incorrect..";
        javascriptNextButton.innerHTML = `<button id = "javascriptNextButton" onclick=javascriptBtn()>Next</button>`;
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
    document.getElementById("javascriptRemove").innerHTML = `<textarea name="text" cols="40" rows="5"id="input"></textarea></br>
      <button id = "javascriptStartButton"onclick="javascriptSubmit()">Submit</button>`;/* to create next text area and Submit button. */
    document.getElementById("javascriptCheckingAnswer").innerHTML = "";
    document.getElementById("javascriptShowingAnswer").innerHTML = "";
}
window.javascriptBtn = javascriptBtn;/* to make submit global*/

