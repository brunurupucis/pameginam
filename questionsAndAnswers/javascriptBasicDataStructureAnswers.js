export var javascriptBasicDataStructureAnswerArr = [
  {
    A0: `let yourArray = ["a", 2, true, "c", null, {name: "john"}];
  `.replace(/\s+/g, "")
  },

  {
    A1: `let myArray = ["a", "b", "c", "d"];
    myArray[1] = "anything we want";
    console.log(myArray);
    `.replace(/\s+/g, "")
  },

  { A2: `function mixedNumbers(arr) {
  arr.unshift('I',2,'three');
  arr.push(7,'VIII', 9);
    return arr;
  }
  console.log(mixedNumbers(['IV', 5, 'six']));`.replace(/\s+/g, "") },

  {
    A3: `function popShift(arr) {
      let popped = arr.pop();
      let shifted = arr.shift();
      return [shifted, popped];
    }
    
    console.log(popShift(['challenge', 'is', 'not', 'complete']));
`.replace(/\s+/g, "")
  },

  {
    A4: `function sumOfTen(arr) {
      arr.splice(1,2);
      return arr.reduce((a, b) => a + b);
    }
    console.log(sumOfTen([2, 5, 1, 5, 2, 1]));`.replace(/\s+/g, "")
  },

  {
    A5: `function htmlColorNames(arr) {
      arr.splice(0, 2, "DarkSalmon", "BlanchedAlmond");
      return arr;
    } 
    console.log(htmlColorNames(['DarkGoldenRod', 'WhiteSmoke', 'LavenderBlush', 'PaleTurqoise', 'FireBrick']));
`.replace(/\s+/g, "")
  },

  {
    A6: `function forecast(arr) {
      return arr.slice(2,4);
      }
      console.log(forecast(['cold', 'rainy', 'warm', 'sunny', 'cool', 'thunderstorms']));
`.replace(/\s+/g, "")
  },

  {
    A7: `function copyMachine(arr, num) {
      let newArr = [];
      while (num >= 1) {
        newArr.push([...arr]);
        num--;
      }
      return newArr;
    }
    console.log(copyMachine([true, false, true], 2));
`.replace(/\s+/g, "")
  },

  {
    A8: `function spreadOut() {
      let fragment = ['to', 'code'];
      let sentence = ["learning", ...fragment, "is", "fun"]; 
      return sentence;
    }
    console.log(spreadOut());
`.replace(/\s+/g, "")
  },

  {
    A9: `function quickCheck(arr, elem) {
      return arr.indexOf(elem) >= 0 ? true : false;
      }
      console.log(quickCheck(['squash', 'onions', 'shallots'], 'mushrooms')); `.replace(/\s+/g, "")
  },

  {
    A10: `function filteredArray(arr, elem) {
      let newArr = [];
     for (let i = 0; i < arr.length; i++) { 
        if (arr[i].indexOf(elem)==-1){ 
              newArr.push(arr[i]); 
                };
              };
      return newArr;
    };
    console.log(filteredArray([[3, 2, 3], [1, 6, 3], [3, 13, 26], [19, 3, 9]], 3)); `.replace(/\s+/g, "")
  },


  { A11: `let myNestedArray = [
    ['unshift', false, 1, 2, 3, 'complex', 'nested'],
    ['loop', 'shift', 6, 7, 1000, 'method'],
    ['concat', false, true, 'spread', 'array',["deep"]],
    ['mutate', 1327.98, 'splice', 'slice', 'push', [["deeper"]]],
    ['iterate', 1.3849, 7, '8.4876', 'arbitrary', 'depth', [[["deepest"]]] ]
  ];`.replace(/\s+/g, "") },

  
  { A12: `let foods = {
    apples: 25,
    oranges: 32,
    plums: 28
  };
  foods['bananas'] = 13;
  foods['grapes'] = 35;
  foods['strawberries'] = 27;
  console.log(foods);`.replace(/\s+/g, "") },

  { A13: `let userActivity = {
    id: 23894201352,
    date: 'January 1, 2017',
    data: {
      totalUsers: 51,
      online: 42
    }
  };
  userActivity.data.online = 45;
  
  console.log(userActivity);`.replace(/\s+/g, "") },

  { A14: `let foods = {
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
  console.log(checkInventory("apples"));`.replace(/\s+/g, "") },

  {
    A15: `let foods = {
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
    console.log(foods);`.replace(/\s+/g, "")
  },

  {
    A16: `let users = {
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
    
    `.replace(/\s+/g, "")
  },

  {
    A17: `let users = {
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
`.replace(/\s+/g, "")
  },

  {
    A18: `
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
    
`.replace(/\s+/g, "")
  },

  {
    A19: `let user = {
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
`.replace(/\s+/g, "")
  }
];
