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
let yourArray = ["a", 2, true, "c", null, {name: "john"}];
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
let myArray = ["a", "b", "c", "d"];
myArray[1] = "anything we want";
console.log(myArray);
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
function mixedNumbers(arr) {
arr.unshift('I',2,'three');
arr.push(7,'VIII', 9);
    return arr;
}
console.log(mixedNumbers(['IV', 5, 'six']));
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
function popShift(arr) {
    let popped = arr.pop();
    let shifted = arr.shift();
    return [shifted, popped];
}

console.log(popShift(['challenge', 'is', 'not', 'complete']));
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
function sumOfTen(arr) {
    arr.splice(1,2);
    return arr.reduce((a, b) => a + b);
}
console.log(sumOfTen([2, 5, 1, 5, 2, 1]));
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
function htmlColorNames(arr) {
    arr.splice(0, 2, "DarkSalmon", "BlanchedAlmond");
    return arr;
} 
console.log(htmlColorNames(['DarkGoldenRod', 'WhiteSmoke', 'LavenderBlush', 'PaleTurqoise', 'FireBrick']));
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
function forecast(arr) {
    return arr.slice(2,4);
}
console.log(forecast(['cold', 'rainy', 'warm', 'sunny', 'cool', 'thunderstorms']));
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
function spreadOut() {
    let fragment = ['to', 'code'];
    let sentence = ["learning", ...fragment, "is", "fun"]; 
    return sentence;
}
console.log(spreadOut());
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
function quickCheck(arr, elem) {
    return arr.indexOf(elem) >= 0 ? true : false;
}
console.log(quickCheck(['squash', 'onions', 'shallots'], 'mushrooms')); 
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
let myNestedArray = [
    ['unshift', false, 1, 2, 3, 'complex', 'nested'],
    ['loop', 'shift', 6, 7, 1000, 'method'],
    ['concat', false, true, 'spread', 'array',["deep"]],
    ['mutate', 1327.98, 'splice', 'slice', 'push', [["deeper"]]],
    ['iterate', 1.3849, 7, '8.4876', 'arbitrary', 'depth', [[["deepest"]]] ]
];
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