export var javascriptEs6AnswerArr = [
  {
    A0: `let catName;
    let quote;
    function catTalk() {
      "use strict";

      catName = "Oliver";
      quote = catName + " says Meow!";

    }
    catTalk();
  `.replace(/\s+/g, "")
  },

  {
    A1: `function checkScope() {
      "use strict";
      let i = "function scope";
      if (true) {
        let i = "block scope";
        console.log("Block scope i is: ", i);
      }
    console.log("Function scope i is: ", i);
    return i;
    }`.replace(/\s+/g, "")
  },

  { A2: `function printManyTimes(str) {
    "use strict";
    const SENTENCE = str + " is cool!";
    for(let i = 0; i < str.length; i+=2) {
      console.log(SENTENCE);
    }
  }
  printManyTimes("JabaDabaDuuu");`.replace(/\s+/g, "") },

  {
    A3: `const s = [5, 7, 2];
    function editInPlace() {
      "use strict";
      s[0] = 2;
      s[1] = 5;
      s[2] = 7;
    }
    editInPlace();
`.replace(/\s+/g, "")
  },

  {
    A4: `function freezeObj() {
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
    
    const PI = freezeObj();`.replace(/\s+/g, "")
  },

  {
    A5: `const magic = () => {
      "use strict";
      return new Date();
    };
`.replace(/\s+/g, "")
  },

  {
    A6: `const myConcat = (arr1, arr2) => {
      "use strict";
      return arr1.concat(arr2);
    };
    console.log(myConcat([1, 2], [3, 4, 5]));

`.replace(/\s+/g, "")
  },

  {
    A7: `const realNumberArray = [4, 5.6, -9.8, 3.14, 42, 6, 8.34];
    const squareList = (arr) => {
      "use strict";
      const squaredIntegers = arr.filter(num => Number.isInteger(num)).map(square => square*square);
      return squaredIntegers;
    };
    const squaredIntegers = squareList(realNumberArray);
    console.log(squaredIntegers);

`.replace(/\s+/g, "")
  },

  {
    A8: `const increment = (function() {
      "use strict";
      return function increment(number, value = 1) {
        return number + value;
      };
    })();
    console.log(increment(5, 2));
    console.log(increment(5));
`.replace(/\s+/g, "")
  },

  {
    A9: `const sum = (function() {
      "use strict";
      return function sum(...args) {		
        return args.reduce((a, b) => a + b, 0);
      };
    })();
    console.log(sum(0, 1, 2));`.replace(/\s+/g, "")
  },

  {
    A10: `const arr1 = ['JAN', 'FEB', 'MAR', 'APR', 'MAY'];
    let arr2;
    
    arr2 = [...arr1];`.replace(/\s+/g, "")
  },

  { A11: `const AVG_TEMPERATURES = {
    today: 77.5,
    tomorrow: 79
  };
  function getTempOfTmrw(avgTemperatures) {
    "use strict";
    const {tomorrow:tempOfTomorrow} = avgTemperatures;
    return tempOfTomorrow;
  }
  
  console.log(getTempOfTmrw(AVG_TEMPERATURES)); `.replace(/\s+/g, "") },

  
  { A12: `const LOCAL_FORECAST = {
    today: { min: 72, max: 83 },
    tomorrow: { min: 73.3, max: 84.6 }
  };
  
  function getMaxOfTmrw(forecast) {
    "use strict";
    const { tomorrow : {max: maxOfTomorrow}} = forecast 
    return maxOfTomorrow;
  }
  
  console.log(getMaxOfTmrw(LOCAL_FORECAST));`.replace(/\s+/g, "") },

  { A13: `let a = 8, b = 6;
   [a,b] = [b,a];
  console.log(a);
  console.log(b);`.replace(/\s+/g, "") },

  { A14: `const source = [1,2,3,4,5,6,7,8,9,10];
  const [a, b, ...arr] = source;
  console.log(arr); 
  console.log(source);`.replace(/\s+/g, "") },

  {
    A15: `const stats = {
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
    console.log(half(stats)); `.replace(/\s+/g, "")
  },

  {
    A16: `const result = {
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
    const resultDisplayArray = makeList(result.failure);`.replace(/\s+/g, "")
  },

  {
    A17: `const createPerson = (name, age, gender) => {
      "use strict";
      return {
        name,
        age,
        gender
      };
    };
    console.log(createPerson("Zodiac Hasbro", 56, "male"));
`.replace(/\s+/g, "")
  },

  {
    A18: `
    const bicycle = {
      gear: 2,
      setGear(newGear) {
        "use strict";
        this.gear = newGear;
      }
    };
    bicycle.setGear(3);
    console.log(bicycle.gear);
`.replace(/\s+/g, "")
  },

  {
    A19: `function makeClass() {
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
`.replace(/\s+/g, "")
  },

  {
    A20: `function makeClass() {
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
    temp = thermos.temperature;`.replace(
      /\s+/g,
      ""
    )
  },

  {
    A21: `import { capitalizeString } from 'string_functions';
    capitalizeString("hello!");`.replace(
      /\s+/g,
      ""
    )
  },

  {
    A22: `"use strict";
    export const foo = "bar";
    export const bar = "foo";`.replace(
      /\s+/g,
      ""
    )
  },

  {
    A23: `"use strict";
    import * as str from "capitalize_strings";`.replace(
      /\s+/g,
      ""
    )
  },

  {
    A24: `"use strict";
    export default function subtract(x,y) {return x - y;}`.replace(/\s+/g, "")
  },

  {
    A25: `"use strict";
    import subtract from "math_functions";
    subtract(7,4);`.replace(/\s+/g, "")
  }
];
