var javascriptFunctionalProgrammingRandomValue = Math.floor(Math.random() * javascriptFunctionalProgrammingQuestionArr.length); /* taking random question from htmlQuestionArr*/


function javascriptFunctionalProgrammingSubmit() { /* function for html submit button*/

    var javascriptFunctionalProgrammingInputAnswer = input.value.replace(/\s+/g, ``); /*replace(/\s+/g, `` is removing all spaces. Avoid checking all the spaces to compare text*/
    var javascriptFunctionalProgrammingCorrectValue = document.getElementById("javascriptFunctionalProgrammingCheckingAnswer"); /* making getElementById code shorter*/
    var javascriptFunctionalProgrammingIncorrectValue = document.getElementById("javascriptFunctionalProgrammingCheckingAnswer");
    var javascriptFunctionalProgrammingDisplayAnswer = document.getElementById("javascriptFunctionalProgrammingShowingAnswer");
    var javascriptFunctionalProgrammingNextButton = document.getElementById("javascriptFunctionalProgrammingElementButton");
    var javascriptFunctionalProgrammingRemoveValue = document.getElementById("javascriptFunctionalProgrammingRemove");

    if (javascriptFunctionalProgrammingRandomValue == 0 && javascriptFunctionalProgrammingInputAnswer == javascriptFunctionalProgrammingAnswerArr[0].A0) { /* checking if javascriptFunctionalProgrammingRandomValue is 0 and if putting answer the same as javascriptFunctionalProgrammingAnswerArr*//*A0 is just that I can track answer numbers when adding questions and answers*/
        javascriptFunctionalProgrammingCorrectValue.innerHTML = "Correct..";
        javascriptFunctionalProgrammingDisplayAnswer.innerHTML = `
        <textarea name="text" class="answer_textarea" id="input">Good Job :) </textarea>`;
        javascriptFunctionalProgrammingNextButton.innerHTML = `<button class="nextButton javascriptColor1" onclick=javascriptFunctionalProgrammingBtn()>Next</button>`; /* creating next button with javascriptFunctionalProgrammingBtn()function*/
        javascriptFunctionalProgrammingRemoveValue.innerHTML = "";/* removing in html answer*/



    } else if (javascriptFunctionalProgrammingRandomValue == 0 && javascriptFunctionalProgrammingInputAnswer !== javascriptFunctionalProgrammingAnswerArr[0].A0) {/*  if random value not == then giving then display the answere.*/
        javascriptFunctionalProgrammingDisplayAnswer.innerHTML = `
    <textarea name="text" class="answer_textarea" id="input">
let yourArray = ["a", 2, true, "c", null, {name: "john"}];
        </textarea>`;
        javascriptFunctionalProgrammingIncorrectValue.innerHTML = "Incorrect..";
        javascriptFunctionalProgrammingNextButton.innerHTML = `<button class="nextButton javascriptColor1" onclick=javascriptFunctionalProgrammingBtn()>Next</button>`;
        javascriptFunctionalProgrammingRemoveValue.innerHTML = "";



    } else if (javascriptFunctionalProgrammingRandomValue == 1 && javascriptFunctionalProgrammingInputAnswer == javascriptFunctionalProgrammingAnswerArr[1].A1) {
        javascriptFunctionalProgrammingCorrectValue.innerHTML = "Correct..";
        javascriptFunctionalProgrammingDisplayAnswer.innerHTML = `
        <textarea name="text" class="answer_textarea" id="input">Good Job :) </textarea>`;
        javascriptFunctionalProgrammingNextButton.innerHTML = `<button class="nextButton javascriptColor1" onclick=javascriptFunctionalProgrammingBtn()>Next</button>`;
        javascriptFunctionalProgrammingRemoveValue.innerHTML = "";

    } else if (javascriptFunctionalProgrammingRandomValue == 1 && javascriptFunctionalProgrammingInputAnswer !== javascriptFunctionalProgrammingAnswerArr[1].A1) {
        javascriptFunctionalProgrammingDisplayAnswer.innerHTML = `
        <textarea name="text" class="answer_textarea" id="input">
let myArray = ["a", "b", "c", "d"];
myArray[1] = "anything we want";
console.log(myArray);
          </textarea>`;
        javascriptFunctionalProgrammingIncorrectValue.innerHTML = "Incorrect..";
        javascriptFunctionalProgrammingNextButton.innerHTML = `<button class="nextButton javascriptColor1" onclick=javascriptFunctionalProgrammingBtn()>Next</button>`;
        javascriptFunctionalProgrammingRemoveValue.innerHTML = "";



    } else if (javascriptFunctionalProgrammingRandomValue == 2 && javascriptFunctionalProgrammingInputAnswer == javascriptFunctionalProgrammingAnswerArr[2].A2) {
        javascriptFunctionalProgrammingCorrectValue.innerHTML = "Correct..";
        javascriptFunctionalProgrammingDisplayAnswer.innerHTML = `
        <textarea name="text" class="answer_textarea" id="input">Good Job :) </textarea>`;
        javascriptFunctionalProgrammingNextButton.innerHTML = `<button class="nextButton javascriptColor1" onclick=javascriptFunctionalProgrammingBtn()>Next</button>`;
        javascriptFunctionalProgrammingRemoveValue.innerHTML = "";

    } else if (javascriptFunctionalProgrammingRandomValue == 2 && javascriptFunctionalProgrammingInputAnswer !== javascriptFunctionalProgrammingAnswerArr[2].A2) {
        javascriptFunctionalProgrammingDisplayAnswer.innerHTML = `
    <textarea name="text" class="answer_textarea" id="input">
function mixedNumbers(arr) {
arr.unshift('I',2,'three');
arr.push(7,'VIII', 9);
    return arr;
}
console.log(mixedNumbers(['IV', 5, 'six']));
          </textarea>`;
        javascriptFunctionalProgrammingIncorrectValue.innerHTML = "Incorrect..";
        javascriptFunctionalProgrammingNextButton.innerHTML = `<button class="nextButton javascriptColor1" onclick=javascriptFunctionalProgrammingBtn()>Next</button>`;
        javascriptFunctionalProgrammingRemoveValue.innerHTML = "";



    } else if (javascriptFunctionalProgrammingRandomValue == 3 && javascriptFunctionalProgrammingInputAnswer == javascriptFunctionalProgrammingAnswerArr[3].A3) {
        javascriptFunctionalProgrammingCorrectValue.innerHTML = "Correct..";
        javascriptFunctionalProgrammingDisplayAnswer.innerHTML = `
        <textarea name="text" class="answer_textarea" id="input">Good Job :) </textarea>`;
        javascriptFunctionalProgrammingNextButton.innerHTML = `<button class="nextButton javascriptColor1" onclick=javascriptFunctionalProgrammingBtn()>Next</button>`;
        javascriptFunctionalProgrammingRemoveValue.innerHTML = "";

    } else if (javascriptFunctionalProgrammingRandomValue == 3 && javascriptFunctionalProgrammingInputAnswer !== javascriptFunctionalProgrammingAnswerArr[3].A3) {
        javascriptFunctionalProgrammingDisplayAnswer.innerHTML = `
    <textarea name="text" class="answer_textarea" id="input">
function popShift(arr) {
    let popped = arr.pop();
    let shifted = arr.shift();
    return [shifted, popped];
}

console.log(popShift(['challenge', 'is', 'not', 'complete']));
        </textarea>`;
        javascriptFunctionalProgrammingIncorrectValue.innerHTML = "Incorrect..";
        javascriptFunctionalProgrammingNextButton.innerHTML = `<button class="nextButton javascriptColor1" onclick=javascriptFunctionalProgrammingBtn()>Next</button>`;
        javascriptFunctionalProgrammingRemoveValue.innerHTML = "";
        


    } else if (javascriptFunctionalProgrammingRandomValue == 4 && javascriptFunctionalProgrammingInputAnswer == javascriptFunctionalProgrammingAnswerArr[4].A4) {
        javascriptFunctionalProgrammingCorrectValue.innerHTML = "Correct..";
        javascriptFunctionalProgrammingDisplayAnswer.innerHTML = `
        <textarea name="text" class="answer_textarea" id="input">Good Job :) </textarea>`;
        javascriptFunctionalProgrammingNextButton.innerHTML = `<button class="nextButton javascriptColor1" onclick=javascriptFunctionalProgrammingBtn()>Next</button>`;
        javascriptFunctionalProgrammingRemoveValue.innerHTML = "";

    } else if (javascriptFunctionalProgrammingRandomValue == 4 && javascriptFunctionalProgrammingInputAnswer !== javascriptFunctionalProgrammingAnswerArr[4].A4) {
        javascriptFunctionalProgrammingDisplayAnswer.innerHTML = `
    <textarea name="text" class="answer_textarea" id="input">
function sumOfTen(arr) {
    arr.splice(1,2);
    return arr.reduce((a, b) => a + b);
}
console.log(sumOfTen([2, 5, 1, 5, 2, 1]));
        </textarea>`;
        javascriptFunctionalProgrammingIncorrectValue.innerHTML = "Incorrect..";
        javascriptFunctionalProgrammingNextButton.innerHTML = `<button class="nextButton javascriptColor1" onclick=javascriptFunctionalProgrammingBtn()>Next</button>`;
        javascriptFunctionalProgrammingRemoveValue.innerHTML = "";



    } else if (javascriptFunctionalProgrammingRandomValue == 5 && javascriptFunctionalProgrammingInputAnswer == javascriptFunctionalProgrammingAnswerArr[5].A5) {
        javascriptFunctionalProgrammingCorrectValue.innerHTML = "Correct..";
        javascriptFunctionalProgrammingDisplayAnswer.innerHTML = `
        <textarea name="text" class="answer_textarea" id="input">Good Job :) </textarea>`;
        javascriptFunctionalProgrammingNextButton.innerHTML = `<button class="nextButton javascriptColor1" onclick=javascriptFunctionalProgrammingBtn()>Next</button>`;
        javascriptFunctionalProgrammingRemoveValue.innerHTML = "";

    } else if (javascriptFunctionalProgrammingRandomValue == 5 && javascriptFunctionalProgrammingInputAnswer !== javascriptFunctionalProgrammingAnswerArr[5].A5) {
        javascriptFunctionalProgrammingDisplayAnswer.innerHTML = `
    <textarea name="text" class="answer_textarea" id="input">
function htmlColorNames(arr) {
    arr.splice(0, 2, "DarkSalmon", "BlanchedAlmond");
    return arr;
} 
console.log(htmlColorNames(['DarkGoldenRod', 'WhiteSmoke', 'LavenderBlush', 'PaleTurqoise', 'FireBrick']));
        </textarea>`;
        javascriptFunctionalProgrammingIncorrectValue.innerHTML = "Incorrect..";
        javascriptFunctionalProgrammingNextButton.innerHTML = `<button class="nextButton javascriptColor1" onclick=javascriptFunctionalProgrammingBtn()>Next</button>`;
        javascriptFunctionalProgrammingRemoveValue.innerHTML = "";



    } else if (javascriptFunctionalProgrammingRandomValue == 6 && javascriptFunctionalProgrammingInputAnswer == javascriptFunctionalProgrammingAnswerArr[6].A6) {
        javascriptFunctionalProgrammingCorrectValue.innerHTML = "Correct..";
        javascriptFunctionalProgrammingDisplayAnswer.innerHTML = `
        <textarea name="text" class="answer_textarea" id="input">Good Job :) </textarea>`;
        javascriptFunctionalProgrammingNextButton.innerHTML = `<button class="nextButton javascriptColor1" onclick=javascriptFunctionalProgrammingBtn()>Next</button>`;
        javascriptFunctionalProgrammingRemoveValue.innerHTML = "";

    } else if (javascriptFunctionalProgrammingRandomValue == 6 && javascriptFunctionalProgrammingInputAnswer !== javascriptFunctionalProgrammingAnswerArr[6].A6) {
        javascriptFunctionalProgrammingDisplayAnswer.innerHTML = `
    <textarea name="text" class="answer_textarea" id="input">
function forecast(arr) {
    return arr.slice(2,4);
}
console.log(forecast(['cold', 'rainy', 'warm', 'sunny', 'cool', 'thunderstorms']));
        </textarea>`;
        javascriptFunctionalProgrammingIncorrectValue.innerHTML = "Incorrect..";
        javascriptFunctionalProgrammingNextButton.innerHTML = `<button class="nextButton javascriptColor1" onclick=javascriptFunctionalProgrammingBtn()>Next</button>`;
        javascriptFunctionalProgrammingRemoveValue.innerHTML = "";



    } else if (javascriptFunctionalProgrammingRandomValue == 7 && javascriptFunctionalProgrammingInputAnswer == javascriptFunctionalProgrammingAnswerArr[7].A7) {
        javascriptFunctionalProgrammingCorrectValue.innerHTML = "Correct..";
        javascriptFunctionalProgrammingDisplayAnswer.innerHTML = `
        <textarea name="text" class="answer_textarea" id="input">Good Job :) </textarea>`;
        javascriptFunctionalProgrammingNextButton.innerHTML = `<button class="nextButton javascriptColor1" onclick=javascriptFunctionalProgrammingBtn()>Next</button>`;
        javascriptFunctionalProgrammingRemoveValue.innerHTML = "";

    } else if (javascriptFunctionalProgrammingRandomValue == 7 && javascriptFunctionalProgrammingInputAnswer !== javascriptFunctionalProgrammingAnswerArr[7].A7) {
        javascriptFunctionalProgrammingDisplayAnswer.innerHTML = `
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
        javascriptFunctionalProgrammingIncorrectValue.innerHTML = "Incorrect..";
        javascriptFunctionalProgrammingNextButton.innerHTML = `<button class="nextButton javascriptColor1" onclick=javascriptFunctionalProgrammingBtn()>Next</button>`;
        javascriptFunctionalProgrammingRemoveValue.innerHTML = "";



    } else if (javascriptFunctionalProgrammingRandomValue == 8 && javascriptFunctionalProgrammingInputAnswer == javascriptFunctionalProgrammingAnswerArr[8].A8) {
        javascriptFunctionalProgrammingCorrectValue.innerHTML = "Correct..";
        javascriptFunctionalProgrammingDisplayAnswer.innerHTML = `
        <textarea name="text" class="answer_textarea" id="input">Good Job :) </textarea>`;
        javascriptFunctionalProgrammingNextButton.innerHTML = `<button class="nextButton javascriptColor1" onclick=javascriptFunctionalProgrammingBtn()>Next</button>`;
        javascriptFunctionalProgrammingRemoveValue.innerHTML = "";

    } else if (javascriptFunctionalProgrammingRandomValue == 8 && javascriptFunctionalProgrammingInputAnswer !== javascriptFunctionalProgrammingAnswerArr[8].A8) {
        javascriptFunctionalProgrammingDisplayAnswer.innerHTML = `
    <textarea name="text" class="answer_textarea" id="input">
function spreadOut() {
    let fragment = ['to', 'code'];
    let sentence = ["learning", ...fragment, "is", "fun"]; 
    return sentence;
}
console.log(spreadOut());
        </textarea>`;
        javascriptFunctionalProgrammingIncorrectValue.innerHTML = "Incorrect..";
        javascriptFunctionalProgrammingNextButton.innerHTML = `<button class="nextButton javascriptColor1" onclick=javascriptFunctionalProgrammingBtn()>Next</button>`;
        javascriptFunctionalProgrammingRemoveValue.innerHTML = "";



    } else if (javascriptFunctionalProgrammingRandomValue == 9 && javascriptFunctionalProgrammingInputAnswer == javascriptFunctionalProgrammingAnswerArr[9].A9) {
        javascriptFunctionalProgrammingCorrectValue.innerHTML = "Correct..";
        javascriptFunctionalProgrammingDisplayAnswer.innerHTML = `
        <textarea name="text" class="answer_textarea" id="input">Good Job :) </textarea>`;
        javascriptFunctionalProgrammingNextButton.innerHTML = `<button class="nextButton javascriptColor1" onclick=javascriptFunctionalProgrammingBtn()>Next</button>`;
        javascriptFunctionalProgrammingRemoveValue.innerHTML = "";

    } else if (javascriptFunctionalProgrammingRandomValue == 9 && javascriptFunctionalProgrammingInputAnswer !== javascriptFunctionalProgrammingAnswerArr[9].A9) {
        javascriptFunctionalProgrammingDisplayAnswer.innerHTML = `
    <textarea name="text" class="answer_textarea" id="input">
function quickCheck(arr, elem) {
    return arr.indexOf(elem) >= 0 ? true : false;
}
console.log(quickCheck(['squash', 'onions', 'shallots'], 'mushrooms')); 
        </textarea>`;
        javascriptFunctionalProgrammingIncorrectValue.innerHTML = "Incorrect..";
        javascriptFunctionalProgrammingNextButton.innerHTML = `<button class="nextButton javascriptColor1" onclick=javascriptFunctionalProgrammingBtn()>Next</button>`;
        javascriptFunctionalProgrammingRemoveValue.innerHTML = "";



    } else if (javascriptFunctionalProgrammingRandomValue == 10 && javascriptFunctionalProgrammingInputAnswer == javascriptFunctionalProgrammingAnswerArr[10].A10) {
        javascriptFunctionalProgrammingCorrectValue.innerHTML = "Correct..";
        javascriptFunctionalProgrammingDisplayAnswer.innerHTML = `
        <textarea name="text" class="answer_textarea" id="input">Good Job :) </textarea>`;
        javascriptFunctionalProgrammingNextButton.innerHTML = `<button class="nextButton javascriptColor1" onclick=javascriptFunctionalProgrammingBtn()>Next</button>`;
        javascriptFunctionalProgrammingRemoveValue.innerHTML = "";

    } else if (javascriptFunctionalProgrammingRandomValue == 10 && javascriptFunctionalProgrammingInputAnswer !== javascriptFunctionalProgrammingAnswerArr[10].A10) {
        javascriptFunctionalProgrammingDisplayAnswer.innerHTML = `
    <textarea name="text" class="answer_textarea" id="input">
function filteredArray(arr, elem) {
    let newArr = [];
    // change code below this line

    for (let i = 0; i < arr.length; i++) { 
        if (arr[i].indexOf(elem)==-1){ 
            newArr.push(arr[i]); 
                };
            };
    return newArr;
};
console.log(filteredArray([[3, 2, 3], [1, 6, 3], [3, 13, 26], [19, 3, 9]], 3));
        </textarea>`;
        javascriptFunctionalProgrammingIncorrectValue.innerHTML = "Incorrect..";
        javascriptFunctionalProgrammingNextButton.innerHTML = `<button class="nextButton javascriptColor1" onclick=javascriptFunctionalProgrammingBtn()>Next</button>`;
        javascriptFunctionalProgrammingRemoveValue.innerHTML = "";



    } else if (javascriptFunctionalProgrammingRandomValue == 11 && javascriptFunctionalProgrammingInputAnswer == javascriptFunctionalProgrammingAnswerArr[11].A11) {
        javascriptFunctionalProgrammingCorrectValue.innerHTML = "Correct..";
        javascriptFunctionalProgrammingDisplayAnswer.innerHTML = `
        <textarea name="text" class="answer_textarea" id="input">Good Job :) </textarea>`;
        javascriptFunctionalProgrammingNextButton.innerHTML = `<button class="nextButton javascriptColor1" onclick=javascriptFunctionalProgrammingBtn()>Next</button>`;
        javascriptFunctionalProgrammingRemoveValue.innerHTML = "";

    } else if (javascriptFunctionalProgrammingRandomValue == 11 && javascriptFunctionalProgrammingInputAnswer !== javascriptFunctionalProgrammingAnswerArr[11].A11) {
        javascriptFunctionalProgrammingDisplayAnswer.innerHTML = `
    <textarea name="text" class="answer_textarea" id="input">
let myNestedArray = [
    ['unshift', false, 1, 2, 3, 'complex', 'nested'],
    ['loop', 'shift', 6, 7, 1000, 'method'],
    ['concat', false, true, 'spread', 'array',["deep"]],
    ['mutate', 1327.98, 'splice', 'slice', 'push', [["deeper"]]],
    ['iterate', 1.3849, 7, '8.4876', 'arbitrary', 'depth', [[["deepest"]]] ]
];
        </textarea>`;
        javascriptFunctionalProgrammingIncorrectValue.innerHTML = "Incorrect..";
        javascriptFunctionalProgrammingNextButton.innerHTML = `<button class="nextButton javascriptColor1" onclick=javascriptFunctionalProgrammingBtn()>Next</button>`;
        javascriptFunctionalProgrammingRemoveValue.innerHTML = "";



    } else if (javascriptFunctionalProgrammingRandomValue == 12 && javascriptFunctionalProgrammingInputAnswer == javascriptFunctionalProgrammingAnswerArr[12].A12) {
        javascriptFunctionalProgrammingCorrectValue.innerHTML = "Correct..";
        javascriptFunctionalProgrammingDisplayAnswer.innerHTML = `
        <textarea name="text" class="answer_textarea" id="input">Good Job :) </textarea>`;
        javascriptFunctionalProgrammingNextButton.innerHTML = `<button class="nextButton javascriptColor1" onclick=javascriptFunctionalProgrammingBtn()>Next</button>`;
        javascriptFunctionalProgrammingRemoveValue.innerHTML = "";

    } else if (javascriptFunctionalProgrammingRandomValue == 12 && javascriptFunctionalProgrammingInputAnswer !== javascriptFunctionalProgrammingAnswerArr[12].A12) {
        javascriptFunctionalProgrammingDisplayAnswer.innerHTML = `
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
        javascriptFunctionalProgrammingIncorrectValue.innerHTML = "Incorrect..";
        javascriptFunctionalProgrammingNextButton.innerHTML = `<button class="nextButton javascriptColor1" onclick=javascriptFunctionalProgrammingBtn()>Next</button>`;
        javascriptFunctionalProgrammingRemoveValue.innerHTML = "";



    } else if (javascriptFunctionalProgrammingRandomValue == 13 && javascriptFunctionalProgrammingInputAnswer == javascriptFunctionalProgrammingAnswerArr[13].A13) {
        javascriptFunctionalProgrammingCorrectValue.innerHTML = "Correct..";
        javascriptFunctionalProgrammingDisplayAnswer.innerHTML = `
        <textarea name="text" class="answer_textarea" id="input">Good Job :) </textarea>`;
        javascriptFunctionalProgrammingNextButton.innerHTML = `<button class="nextButton javascriptColor1" onclick=javascriptFunctionalProgrammingBtn()>Next</button>`;
        javascriptFunctionalProgrammingRemoveValue.innerHTML = "";

    } else if (javascriptFunctionalProgrammingRandomValue == 13 && javascriptFunctionalProgrammingInputAnswer !== javascriptFunctionalProgrammingAnswerArr[13].A13) {
        javascriptFunctionalProgrammingDisplayAnswer.innerHTML = `
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
        javascriptFunctionalProgrammingIncorrectValue.innerHTML = "Incorrect..";
        javascriptFunctionalProgrammingNextButton.innerHTML = `<button class="nextButton javascriptColor1" onclick=javascriptFunctionalProgrammingBtn()>Next</button>`;
        javascriptFunctionalProgrammingRemoveValue.innerHTML = "";



    } else if (javascriptFunctionalProgrammingRandomValue == 14 && javascriptFunctionalProgrammingInputAnswer == javascriptFunctionalProgrammingAnswerArr[14].A14) {
        javascriptFunctionalProgrammingCorrectValue.innerHTML = "Correct..";
        javascriptFunctionalProgrammingDisplayAnswer.innerHTML = `
        <textarea name="text" class="answer_textarea" id="input">Good Job :) </textarea>`;
        javascriptFunctionalProgrammingNextButton.innerHTML = `<button class="nextButton javascriptColor1" onclick=javascriptFunctionalProgrammingBtn()>Next</button>`;
        javascriptFunctionalProgrammingRemoveValue.innerHTML = "";

    } else if (javascriptFunctionalProgrammingRandomValue == 14 && javascriptFunctionalProgrammingInputAnswer !== javascriptFunctionalProgrammingAnswerArr[14].A14) {
        javascriptFunctionalProgrammingDisplayAnswer.innerHTML = `
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
        javascriptFunctionalProgrammingIncorrectValue.innerHTML = "Incorrect..";
        javascriptFunctionalProgrammingNextButton.innerHTML = `<button class="nextButton javascriptColor1" onclick=javascriptFunctionalProgrammingBtn()>Next</button>`;
        javascriptFunctionalProgrammingRemoveValue.innerHTML = "";



    } else if (javascriptFunctionalProgrammingRandomValue == 15 && javascriptFunctionalProgrammingInputAnswer == javascriptFunctionalProgrammingAnswerArr[15].A15) {
        javascriptFunctionalProgrammingCorrectValue.innerHTML = "Correct..";
        javascriptFunctionalProgrammingDisplayAnswer.innerHTML = `
        <textarea name="text" class="answer_textarea" id="input">Good Job :) </textarea>`;
        javascriptFunctionalProgrammingNextButton.innerHTML = `<button class="nextButton javascriptColor1" onclick=javascriptFunctionalProgrammingBtn()>Next</button>`;
        javascriptFunctionalProgrammingRemoveValue.innerHTML = "";

    } else if (javascriptFunctionalProgrammingRandomValue == 15 && javascriptFunctionalProgrammingInputAnswer !== javascriptFunctionalProgrammingAnswerArr[15].A15) {
        javascriptFunctionalProgrammingDisplayAnswer.innerHTML = `
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
        javascriptFunctionalProgrammingIncorrectValue.innerHTML = "Incorrect..";
        javascriptFunctionalProgrammingNextButton.innerHTML = `<button class="nextButton javascriptColor1" onclick=javascriptFunctionalProgrammingBtn()>Next</button>`;
        javascriptFunctionalProgrammingRemoveValue.innerHTML = "";



    } else if (javascriptFunctionalProgrammingRandomValue == 16 && javascriptFunctionalProgrammingInputAnswer == javascriptFunctionalProgrammingAnswerArr[16].A16) {
        javascriptFunctionalProgrammingCorrectValue.innerHTML = "Correct..";
        javascriptFunctionalProgrammingDisplayAnswer.innerHTML = `
        <textarea name="text" class="answer_textarea" id="input">Good Job :) </textarea>`;
        javascriptFunctionalProgrammingNextButton.innerHTML = `<button class="nextButton javascriptColor1" onclick=javascriptFunctionalProgrammingBtn()>Next</button>`;
        javascriptFunctionalProgrammingRemoveValue.innerHTML = "";

    } else if (javascriptFunctionalProgrammingRandomValue == 16 && javascriptFunctionalProgrammingInputAnswer !== javascriptFunctionalProgrammingAnswerArr[16].A16) {
        javascriptFunctionalProgrammingDisplayAnswer.innerHTML = `
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
        javascriptFunctionalProgrammingIncorrectValue.innerHTML = "Incorrect..";
        javascriptFunctionalProgrammingNextButton.innerHTML = `<button class="nextButton javascriptColor1" onclick=javascriptFunctionalProgrammingBtn()>Next</button>`;
        javascriptFunctionalProgrammingRemoveValue.innerHTML = "";



    } else if (javascriptFunctionalProgrammingRandomValue == 17 && javascriptFunctionalProgrammingInputAnswer == javascriptFunctionalProgrammingAnswerArr[17].A17) {
        javascriptFunctionalProgrammingCorrectValue.innerHTML = "Correct..";
        javascriptFunctionalProgrammingDisplayAnswer.innerHTML = `
        <textarea name="text" class="answer_textarea" id="input">Good Job :) </textarea>`;
        javascriptFunctionalProgrammingNextButton.innerHTML = `<button class="nextButton javascriptColor1" onclick=javascriptFunctionalProgrammingBtn()>Next</button>`;
        javascriptFunctionalProgrammingRemoveValue.innerHTML = "";

    } else if (javascriptFunctionalProgrammingRandomValue == 17 && javascriptFunctionalProgrammingInputAnswer !== javascriptFunctionalProgrammingAnswerArr[17].A17) {
        javascriptFunctionalProgrammingDisplayAnswer.innerHTML = `
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
        javascriptFunctionalProgrammingIncorrectValue.innerHTML = "Incorrect..";
        javascriptFunctionalProgrammingNextButton.innerHTML = `<button class="nextButton javascriptColor1" onclick=javascriptFunctionalProgrammingBtn()>Next</button>`;
        javascriptFunctionalProgrammingRemoveValue.innerHTML = "";



    } else if (javascriptFunctionalProgrammingRandomValue == 18 && javascriptFunctionalProgrammingInputAnswer == javascriptFunctionalProgrammingAnswerArr[18].A18) {
        javascriptFunctionalProgrammingCorrectValue.innerHTML = "Correct..";
        javascriptFunctionalProgrammingDisplayAnswer.innerHTML = `
        <textarea name="text" class="answer_textarea" id="input">Good Job :) </textarea>`;
        javascriptFunctionalProgrammingNextButton.innerHTML = `<button class="nextButton javascriptColor1" onclick=javascriptFunctionalProgrammingBtn()>Next</button>`;
        javascriptFunctionalProgrammingRemoveValue.innerHTML = "";

    } else if (javascriptFunctionalProgrammingRandomValue == 18 && javascriptFunctionalProgrammingInputAnswer !== javascriptFunctionalProgrammingAnswerArr[18].A18) {
        javascriptFunctionalProgrammingDisplayAnswer.innerHTML = `
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
        javascriptFunctionalProgrammingIncorrectValue.innerHTML = "Incorrect..";
        javascriptFunctionalProgrammingNextButton.innerHTML = `<button class="nextButton javascriptColor1" onclick=javascriptFunctionalProgrammingBtn()>Next</button>`;
        javascriptFunctionalProgrammingRemoveValue.innerHTML = "";



    } else if (javascriptFunctionalProgrammingRandomValue == 19 && javascriptFunctionalProgrammingInputAnswer == javascriptFunctionalProgrammingAnswerArr[19].A19) {
        javascriptFunctionalProgrammingCorrectValue.innerHTML = "Correct..";
        javascriptFunctionalProgrammingDisplayAnswer.innerHTML = `
        <textarea name="text" class="answer_textarea" id="input">Good Job :) </textarea>`;
        javascriptFunctionalProgrammingNextButton.innerHTML = `<button class="nextButton javascriptColor1" onclick=javascriptFunctionalProgrammingBtn()>Next</button>`;
        javascriptFunctionalProgrammingRemoveValue.innerHTML = "";

    } else if (javascriptFunctionalProgrammingRandomValue == 19 && javascriptFunctionalProgrammingInputAnswer !== javascriptFunctionalProgrammingAnswerArr[19].A19) {
        javascriptFunctionalProgrammingDisplayAnswer.innerHTML = `
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
        javascriptFunctionalProgrammingIncorrectValue.innerHTML = "Incorrect..";
        javascriptFunctionalProgrammingNextButton.innerHTML = `<button class="nextButton javascriptColor1" onclick=javascriptFunctionalProgrammingBtn()>Next</button>`;
        javascriptFunctionalProgrammingRemoveValue.innerHTML = "";



    } else {
        javascriptFunctionalProgrammingIncorrectValue.innerHTML = "Incorrect..";
        javascriptFunctionalProgrammingNextButton.innerHTML = `<button class="nextButton javascriptColor1" onclick=javascriptFunctionalProgrammingBtn()>Next</button>`;
        javascriptFunctionalProgrammingRemoveValue.innerHTML = "";
    }

}
window.javascriptFunctionalProgrammingSubmit = javascriptFunctionalProgrammingSubmit; /* to make submit global*/

function javascriptFunctionalProgrammingButton() {
    javascriptFunctionalProgrammingTest = document.getElementById("javascriptFunctionalProgrammingAddedQuestion").innerHTML = javascriptFunctionalProgrammingQuestionArr[javascriptFunctionalProgrammingRandomValue]; /* giving random question to html */

    return javascriptFunctionalProgrammingTest;
}
window.javascriptFunctionalProgrammingButton = javascriptFunctionalProgrammingButton;

function javascriptFunctionalProgrammingShowTest() {
    var javascriptFunctionalProgrammingInputBox = document.getElementById("javascriptFunctionalProgrammingRemove").style.display = "block";
    return javascriptFunctionalProgrammingInputBox;
}
window.javascriptFunctionalProgrammingShowTest = javascriptFunctionalProgrammingShowTest;

function javascriptFunctionalProgrammingBtn() {
    javascriptFunctionalProgrammingRandomValue = Math.floor(Math.random() * javascriptFunctionalProgrammingQuestionArr.length); /* buton next in html to make a next random question*/
    document.getElementById("javascriptFunctionalProgrammingAddedQuestion").innerHTML = javascriptFunctionalProgrammingQuestionArr[javascriptFunctionalProgrammingRandomValue]; /* giving random question to html */
    document.getElementById("javascriptFunctionalProgrammingElementButton").innerHTML = "";/* to clean javascriptFunctionalProgrammingElementButton*/
    document.getElementById("javascriptFunctionalProgrammingRemove").innerHTML = `<textarea name="text" class="answer_textarea" id="input"></textarea></br>
      <button class="answer_submit javascriptColor1" id = "javascriptFunctionalProgrammingStartButton" onclick="javascriptFunctionalProgrammingSubmit()">Submit</button>`;/* to create next text area and Submit button. */
    document.getElementById("javascriptFunctionalProgrammingCheckingAnswer").innerHTML = "";
    document.getElementById("javascriptFunctionalProgrammingShowingAnswer").innerHTML = "";
}
window.javascriptFunctionalProgrammingBtn = javascriptFunctionalProgrammingBtn;/* to make submit global*/