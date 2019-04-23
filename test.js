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
let yourArray = ["a", 2, true, "c", null, {name: "john"}];
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
let myArray = ["a", "b", "c", "d"];
myArray[1] = "anything we want";
console.log(myArray);
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
function mixedNumbers(arr) {
arr.unshift('I',2,'three');
arr.push(7,'VIII', 9);
    return arr;
}
console.log(mixedNumbers(['IV', 5, 'six']));
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
function popShift(arr) {
    let popped = arr.pop();
    let shifted = arr.shift();
    return [shifted, popped];
}

console.log(popShift(['challenge', 'is', 'not', 'complete']));
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
function sumOfTen(arr) {
    arr.splice(1,2);
    return arr.reduce((a, b) => a + b);
}
console.log(sumOfTen([2, 5, 1, 5, 2, 1]));
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
function htmlColorNames(arr) {
    arr.splice(0, 2, "DarkSalmon", "BlanchedAlmond");
    return arr;
} 
console.log(htmlColorNames(['DarkGoldenRod', 'WhiteSmoke', 'LavenderBlush', 'PaleTurqoise', 'FireBrick']));
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
function forecast(arr) {
    return arr.slice(2,4);
}
console.log(forecast(['cold', 'rainy', 'warm', 'sunny', 'cool', 'thunderstorms']));
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
function spreadOut() {
    let fragment = ['to', 'code'];
    let sentence = ["learning", ...fragment, "is", "fun"]; 
    return sentence;
}
console.log(spreadOut());
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
function quickCheck(arr, elem) {
    return arr.indexOf(elem) >= 0 ? true : false;
}
console.log(quickCheck(['squash', 'onions', 'shallots'], 'mushrooms')); 
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
let myNestedArray = [
    ['unshift', false, 1, 2, 3, 'complex', 'nested'],
    ['loop', 'shift', 6, 7, 1000, 'method'],
    ['concat', false, true, 'spread', 'array',["deep"]],
    ['mutate', 1327.98, 'splice', 'slice', 'push', [["deeper"]]],
    ['iterate', 1.3849, 7, '8.4876', 'arbitrary', 'depth', [[["deepest"]]] ]
];
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
        javascriptBasicAlgorithmIncorrectValue.innerHTML = "Incorrect..";
        javascriptBasicAlgorithmNextButton.innerHTML = `<button class="nextButton javascriptColor1" onclick=javascriptBasicAlgorithmBtn()>Next</button>`;
        javascriptBasicAlgorithmRemoveValue.innerHTML = "";



    } else {
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