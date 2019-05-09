

var javascriptProjectsRandomValue = Math.floor(Math.random() * javascriptProjectsQuestionArr.length); /* taking random question from htmlQuestionArr*/


function javascriptProjectsSubmit() { /* function for html submit button*/

    var javascriptProjectsInputAnswer = input.value.replace(/\s+/g, ``); /*replace(/\s+/g, `` is removing all spaces. Avoid checking all the spaces to compare text*/
    var javascriptProjectsCorrectValue = document.getElementById("javascriptProjectsCheckingAnswer"); /* making getElementById code shorter*/
    var javascriptProjectsIncorrectValue = document.getElementById("javascriptProjectsCheckingAnswer");
    var javascriptProjectsDisplayAnswer = document.getElementById("javascriptProjectsShowingAnswer");
    var javascriptProjectsNextButton = document.getElementById("javascriptProjectsElementButton");
    var javascriptProjectsRemoveValue = document.getElementById("javascriptProjectsRemove");

    if (javascriptProjectsRandomValue == 0 && javascriptProjectsInputAnswer == javascriptProjectsAnswerArr[0].A0) { /* checking if javascriptProjectsRandomValue is 0 and if putting answer the same as javascriptProjectsAnswerArr*//*A0 is just that I can track answer numbers when adding questions and answers*/
        javascriptProjectsCorrectValue.innerHTML = "Correct..";
        javascriptProjectsDisplayAnswer.innerHTML = `
        <textarea name="text" class="answer_textarea" id="input">Good Job :) </textarea>`;
        javascriptProjectsNextButton.innerHTML = `<button class="nextButton javascriptColor1" onclick=javascriptProjectsBtn()>Next</button>`; /* creating next button with javascriptProjectsBtn()function*/
        javascriptProjectsRemoveValue.innerHTML = "";/* removing in html answer*/



    } else if (javascriptProjectsRandomValue == 0 && javascriptProjectsInputAnswer !== javascriptProjectsAnswerArr[0].A0) {/*  if random value not == then giving then display the answere.*/
        javascriptProjectsDisplayAnswer.innerHTML = `
    <textarea name="text" class="answer_textarea" id="input">
function palindrome(str) {
    return str.replace(/[\W_]/g, '').toLowerCase() ===
            str.replace(/[\W_]/g, '').toLowerCase().split('').reverse().join('');
}
        </textarea>`;
        javascriptProjectsIncorrectValue.innerHTML = "Incorrect..";
        javascriptProjectsNextButton.innerHTML = `<button class="nextButton javascriptColor1" onclick=javascriptProjectsBtn()>Next</button>`;
        javascriptProjectsRemoveValue.innerHTML = "";



    } else if (javascriptProjectsRandomValue == 1 && javascriptProjectsInputAnswer == javascriptProjectsAnswerArr[1].A1) {
        javascriptProjectsCorrectValue.innerHTML = "Correct..";
        javascriptProjectsDisplayAnswer.innerHTML = `
        <textarea name="text" class="answer_textarea" id="input">Good Job :) </textarea>`;
        javascriptProjectsNextButton.innerHTML = `<button class="nextButton javascriptColor1" onclick=javascriptProjectsBtn()>Next</button>`;
        javascriptProjectsRemoveValue.innerHTML = "";

    } else if (javascriptProjectsRandomValue == 1 && javascriptProjectsInputAnswer !== javascriptProjectsAnswerArr[1].A1) {
        javascriptProjectsDisplayAnswer.innerHTML = `
        <textarea name="text" class="answer_textarea" id="input">
function palindrome(str) {
    str = str.toLowerCase().replace(/[\W_]/g, '');
    for(var i = 0, len = str.length - 1; i < len/2; i++) {
        if(str[i] !== str[len-i]) {
        return false;
        }
    }
    return true;
}
          </textarea>`;
        javascriptProjectsIncorrectValue.innerHTML = "Incorrect..";
        javascriptProjectsNextButton.innerHTML = `<button class="nextButton javascriptColor1" onclick=javascriptProjectsBtn()>Next</button>`;
        javascriptProjectsRemoveValue.innerHTML = "";



    } else if (javascriptProjectsRandomValue == 2 && javascriptProjectsInputAnswer == javascriptProjectsAnswerArr[2].A2) {
        javascriptProjectsCorrectValue.innerHTML = "Correct..";
        javascriptProjectsDisplayAnswer.innerHTML = `
        <textarea name="text" class="answer_textarea" id="input">Good Job :) </textarea>`;
        javascriptProjectsNextButton.innerHTML = `<button class="nextButton javascriptColor1" onclick=javascriptProjectsBtn()>Next</button>`;
        javascriptProjectsRemoveValue.innerHTML = "";

    } else if (javascriptProjectsRandomValue == 2 && javascriptProjectsInputAnswer !== javascriptProjectsAnswerArr[2].A2) {
        javascriptProjectsDisplayAnswer.innerHTML = `
    <textarea name="text" class="answer_textarea" id="input">
function palindrome(str) {
    let front = 0
    let back = str.length - 1

    while (back > front) {
        if ( str[front].match(/[\W_]/) ) {
        front++
        continue
        }
        if ( str[back].match(/[\W_]/) ) {
        back--
        continue
        }
        if ( str[front].toLowerCase() !== str[back].toLowerCase() ) return false
        front++
        back--
    }
    return true

}
          </textarea>`;
        javascriptProjectsIncorrectValue.innerHTML = "Incorrect..";
        javascriptProjectsNextButton.innerHTML = `<button class="nextButton javascriptColor1" onclick=javascriptProjectsBtn()>Next</button>`;
        javascriptProjectsRemoveValue.innerHTML = "";



    } else if (javascriptProjectsRandomValue == 3 && javascriptProjectsInputAnswer == javascriptProjectsAnswerArr[3].A3) {
        javascriptProjectsCorrectValue.innerHTML = "Correct..";
        javascriptProjectsDisplayAnswer.innerHTML = `
        <textarea name="text" class="answer_textarea" id="input">Good Job :) </textarea>`;
        javascriptProjectsNextButton.innerHTML = `<button class="nextButton javascriptColor1" onclick=javascriptProjectsBtn()>Next</button>`;
        javascriptProjectsRemoveValue.innerHTML = "";

    } else if (javascriptProjectsRandomValue == 3 && javascriptProjectsInputAnswer !== javascriptProjectsAnswerArr[3].A3) {
        javascriptProjectsDisplayAnswer.innerHTML = `
    <textarea name="text" class="answer_textarea" id="input">
var convertToRoman = function(num) {

    var decimalValue = [ 1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1 ];
    var romanNumeral = [ 'M', 'CM', 'D', 'CD', 'C', 'XC', 'L', 'XL', 'X', 'IX', 'V', 'IV', 'I' ];

    var romanized = '';

    for (var index = 0; index < decimalValue.length; index++) {
        while (decimalValue[index] <= num) {
        romanized += romanNumeral[index];
        num -= decimalValue[index];
        }
    }

    return romanized;
}
convertToRoman(36);

        </textarea>`;
        javascriptProjectsIncorrectValue.innerHTML = "Incorrect..";
        javascriptProjectsNextButton.innerHTML = `<button class="nextButton javascriptColor1" onclick=javascriptProjectsBtn()>Next</button>`;
        javascriptProjectsRemoveValue.innerHTML = "";
        


    } else if (javascriptProjectsRandomValue == 4 && javascriptProjectsInputAnswer == javascriptProjectsAnswerArr[4].A4) {
        javascriptProjectsCorrectValue.innerHTML = "Correct..";
        javascriptProjectsDisplayAnswer.innerHTML = `
        <textarea name="text" class="answer_textarea" id="input">Good Job :) </textarea>`;
        javascriptProjectsNextButton.innerHTML = `<button class="nextButton javascriptColor1" onclick=javascriptProjectsBtn()>Next</button>`;
        javascriptProjectsRemoveValue.innerHTML = "";

    } else if (javascriptProjectsRandomValue == 4 && javascriptProjectsInputAnswer !== javascriptProjectsAnswerArr[4].A4) {
        javascriptProjectsDisplayAnswer.innerHTML = `
    <textarea name="text" class="answer_textarea" id="input">
function convertToRoman(num) {
    var romans = [
        ["I", "V"], 
        ["X", "L"], 
        ["C", "D"], 
        ["M"] 
    ],
        digits = num.toString()
            .split('')
            .reverse()
            .map(function(item, index) {
            return parseInt(item);
            }),
        numeral = "";
    for (var i=0; i<digits.length; i++) {
        numeral = romans[i][0].repeat(digits[i]) + numeral;
        if (romans[i][1]) {
        numeral = numeral
            .replace(romans[i][0].repeat(5), romans[i][1])
            .replace(romans[i][1] + romans[i][0].repeat(4), romans[i][0] + romans[i+1][0])
            .replace(romans[i][0].repeat(4), romans[i][0] + romans[i][1]);
        }
    }

    return numeral;
}
convertToRoman(36);
        </textarea>`;
        javascriptProjectsIncorrectValue.innerHTML = "Incorrect..";
        javascriptProjectsNextButton.innerHTML = `<button class="nextButton javascriptColor1" onclick=javascriptProjectsBtn()>Next</button>`;
        javascriptProjectsRemoveValue.innerHTML = "";



    } else if (javascriptProjectsRandomValue == 5 && javascriptProjectsInputAnswer == javascriptProjectsAnswerArr[5].A5) {
        javascriptProjectsCorrectValue.innerHTML = "Correct..";
        javascriptProjectsDisplayAnswer.innerHTML = `
        <textarea name="text" class="answer_textarea" id="input">Good Job :) </textarea>`;
        javascriptProjectsNextButton.innerHTML = `<button class="nextButton javascriptColor1" onclick=javascriptProjectsBtn()>Next</button>`;
        javascriptProjectsRemoveValue.innerHTML = "";

    } else if (javascriptProjectsRandomValue == 5 && javascriptProjectsInputAnswer !== javascriptProjectsAnswerArr[5].A5) {
        javascriptProjectsDisplayAnswer.innerHTML = `
    <textarea name="text" class="answer_textarea" id="input">
function rot13(str) {
    var rotCharArray = [];
    var regEx = /[A-Z]/ ;
    str = str.split("");
    for (var x in str) {
        if (regEx.test(str[x])) {
        rotCharArray.push((str[x].charCodeAt() - 65 + 13) % 26 + 65);
        } else {
        rotCharArray.push(str[x].charCodeAt());
        }
    }
    str = String.fromCharCode.apply(String, rotCharArray);
    return str;
}
rot13("LBH QVQ VG!");
        </textarea>`;
        javascriptProjectsIncorrectValue.innerHTML = "Incorrect..";
        javascriptProjectsNextButton.innerHTML = `<button class="nextButton javascriptColor1" onclick=javascriptProjectsBtn()>Next</button>`;
        javascriptProjectsRemoveValue.innerHTML = "";



    } else if (javascriptProjectsRandomValue == 6 && javascriptProjectsInputAnswer == javascriptProjectsAnswerArr[6].A6) {
        javascriptProjectsCorrectValue.innerHTML = "Correct..";
        javascriptProjectsDisplayAnswer.innerHTML = `
        <textarea name="text" class="answer_textarea" id="input">Good Job :) </textarea>`;
        javascriptProjectsNextButton.innerHTML = `<button class="nextButton javascriptColor1" onclick=javascriptProjectsBtn()>Next</button>`;
        javascriptProjectsRemoveValue.innerHTML = "";

    } else if (javascriptProjectsRandomValue == 6 && javascriptProjectsInputAnswer !== javascriptProjectsAnswerArr[6].A6) {
        javascriptProjectsDisplayAnswer.innerHTML = `
    <textarea name="text" class="answer_textarea" id="input">
function rot13(str) { 
    return str.replace(/[A-Z]/g, L => String.fromCharCode((L.charCodeAt(0) % 26) + 65));
}
        </textarea>`;
        javascriptProjectsIncorrectValue.innerHTML = "Incorrect..";
        javascriptProjectsNextButton.innerHTML = `<button class="nextButton javascriptColor1" onclick=javascriptProjectsBtn()>Next</button>`;
        javascriptProjectsRemoveValue.innerHTML = "";



    } else if (javascriptProjectsRandomValue == 7 && javascriptProjectsInputAnswer == javascriptProjectsAnswerArr[7].A7) {
        javascriptProjectsCorrectValue.innerHTML = "Correct..";
        javascriptProjectsDisplayAnswer.innerHTML = `
        <textarea name="text" class="answer_textarea" id="input">Good Job :) </textarea>`;
        javascriptProjectsNextButton.innerHTML = `<button class="nextButton javascriptColor1" onclick=javascriptProjectsBtn()>Next</button>`;
        javascriptProjectsRemoveValue.innerHTML = "";

    } else if (javascriptProjectsRandomValue == 7 && javascriptProjectsInputAnswer !== javascriptProjectsAnswerArr[7].A7) {
        javascriptProjectsDisplayAnswer.innerHTML = `
    <textarea name="text" class="answer_textarea" id="input">
function telephoneCheck(str) {
    var regex = /^(1\s?)?(\(\d{3}\)|\d{3})[\s\-]?\d{3}[\s\-]?\d{4}$/;
    return regex.test(str);
}
telephoneCheck("555-555-5555"); 

        </textarea>`;
        javascriptProjectsIncorrectValue.innerHTML = "Incorrect..";
        javascriptProjectsNextButton.innerHTML = `<button class="nextButton javascriptColor1" onclick=javascriptProjectsBtn()>Next</button>`;
        javascriptProjectsRemoveValue.innerHTML = "";



    } else if (javascriptProjectsRandomValue == 8 && javascriptProjectsInputAnswer == javascriptProjectsAnswerArr[8].A8) {
        javascriptProjectsCorrectValue.innerHTML = "Correct..";
        javascriptProjectsDisplayAnswer.innerHTML = `
        <textarea name="text" class="answer_textarea" id="input">Good Job :) </textarea>`;
        javascriptProjectsNextButton.innerHTML = `<button class="nextButton javascriptColor1" onclick=javascriptProjectsBtn()>Next</button>`;
        javascriptProjectsRemoveValue.innerHTML = "";

    } else if (javascriptProjectsRandomValue == 8 && javascriptProjectsInputAnswer !== javascriptProjectsAnswerArr[8].A8) {
        javascriptProjectsDisplayAnswer.innerHTML = `
    <textarea name="text" class="answer_textarea" id="input">
var denom = [
    { name: 'ONE HUNDRED', val: 100.00},
    { name: 'TWENTY', val: 20.00},
    { name: 'TEN', val: 10.00},
    { name: 'FIVE', val: 5.00},
    { name: 'ONE', val: 1.00},
    { name: 'QUARTER', val: 0.25},
    { name: 'DIME', val: 0.10},
    { name: 'NICKEL', val: 0.05},
    { name: 'PENNY', val: 0.01}
];

function checkCashRegister(price, cash, cid) {
    var output = { status: null, change: [] };
    var change = cash - price;
    var register = cid.reduce(function(acc, curr) {
        acc.total += curr[1];
        acc[curr[0]] = curr[1];
        return acc;
    }, { total: 0 });

    if (register.total === change) {
        output.status = 'CLOSED';
        output.change = cid;
        return output;
    }

    if (register.total < change) {
        output.status = 'INSUFFICIENT_FUNDS';
        return output;
    }

    var change_arr = denom.reduce(function(acc, curr) {
        var value = 0;
        while (register[curr.name] > 0 && change >= curr.val) {
        change -= curr.val;
        register[curr.name] -= curr.val;
        value += curr.val;

        change = Math.round(change * 100) / 100;
        }
        if (value > 0) {
            acc.push([ curr.name, value ]);
        }
        return acc;
    }, []); 
    if (change_arr.length < 1 || change > 0) {
        output.status = 'INSUFFICIENT_FUNDS';
        return output;
    }

    output.status = 'OPEN';
    output.change = change_arr;
    return output;
}

checkCashRegister(19.50, 20.00, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.10], ["QUARTER", 4.25], ["ONE", 90.00], ["FIVE", 55.00], ["TEN", 20.00], ["TWENTY", 60.00], ["ONE HUNDRED", 100.00]]);
        </textarea>`;
        javascriptProjectsIncorrectValue.innerHTML = "Incorrect..";
        javascriptProjectsNextButton.innerHTML = `<button class="nextButton javascriptColor1" onclick=javascriptProjectsBtn()>Next</button>`;
        javascriptProjectsRemoveValue.innerHTML = "";



    } else {
        javascriptProjectsIncorrectValue.innerHTML = "Incorrect..";
        javascriptProjectsNextButton.innerHTML = `<button class="nextButton javascriptColor1" onclick=javascriptProjectsBtn()>Next</button>`;
        javascriptProjectsRemoveValue.innerHTML = "";
    }

}
window.javascriptProjectsSubmit = javascriptProjectsSubmit; /* to make submit global*/

function javascriptProjectsButton() {
    javascriptProjectsTest = document.getElementById("javascriptProjectsAddedQuestion").innerHTML = javascriptProjectsQuestionArr[javascriptProjectsRandomValue]; /* giving random question to html */

    return javascriptProjectsTest;
}
window.javascriptProjectsButton = javascriptProjectsButton;

function javascriptProjectsShowTest() {
    var javascriptProjectsInputBox = document.getElementById("javascriptProjectsRemove").style.display = "block";
    return javascriptProjectsInputBox;
}
window.javascriptProjectsShowTest = javascriptProjectsShowTest;

function javascriptProjectsBtn() {
    javascriptProjectsRandomValue = Math.floor(Math.random() * javascriptProjectsQuestionArr.length); /* buton next in html to make a next random question*/
    document.getElementById("javascriptProjectsAddedQuestion").innerHTML = javascriptProjectsQuestionArr[javascriptProjectsRandomValue]; /* giving random question to html */
    document.getElementById("javascriptProjectsElementButton").innerHTML = "";/* to clean javascriptProjectsElementButton*/
    document.getElementById("javascriptProjectsRemove").innerHTML = `<textarea name="text" class="answer_textarea" id="input"></textarea></br>
      <button class="answer_submit javascriptColor1" id = "javascriptProjectsStartButton" onclick="javascriptProjectsSubmit()">Submit</button>`;/* to create next text area and Submit button. */
    document.getElementById("javascriptProjectsCheckingAnswer").innerHTML = "";
    document.getElementById("javascriptProjectsShowingAnswer").innerHTML = "";
}
window.javascriptProjectsBtn = javascriptProjectsBtn;/* to make submit global*/

