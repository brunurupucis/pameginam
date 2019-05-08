export var javascriptIntermedAlgScrAnswerArr = [
  {
    A0: `function sumAll(arr) {
      var max = Math.max(arr[0], arr[1]);
      var min = Math.min(arr[0], arr[1]);
      var temp = 0;
      for (var i=min; i <= max; i++){
          temp += i;
      }
    return(temp);
  }
  
  sumAll([1, 4]);
  `.replace(/\s+/g, "")
  },

  {
    A1: `function sumAll(arr) {

      var sortedArr = arr.sort((a,b) => a-b);
      var firstNum = arr[0];
      var lastNum = arr[1];
    
      var sum = (lastNum - firstNum + 1) * (firstNum + lastNum) / 2;
      return sum;
    }`.replace(/\s+/g, "")
  },

  { A2: `function sumAll(arr) {
    var sum = 0;
    for (var i = Math.min(...arr); i <= Math.max(...arr); i++){
        sum += i;
    }
  return sum;
}

sumAll([1, 4]);`.replace(/\s+/g, "") },

  {
    A3: `function diffArray(arr1, arr2) {
      var newArr = [];

      function onlyInFirst(first, second) {
        for (var i=0;i<first.length;i++) {
          if (second.indexOf(first[i]) === -1) {
            newArr.push(first[i]);
          }
        }
      }

      onlyInFirst(arr1, arr2);
      onlyInFirst(arr2, arr1);

      return newArr;
    }

    diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]);
`.replace(/\s+/g, "")
  },

  {
    A4: `function diffArray(arr1, arr2) {
      return arr1
        .concat(arr2)
        .filter(
            item => !arr1.includes(item) || !arr2.includes(item)
        )
    }

    diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]); `.replace(/\s+/g, "")
  },

  {
    A5: `function diffArray(arr1, arr2) {
      return arr1
        .filter(el => !arr2.includes(el))
        .concat(
          arr2.filter(el => !arr1.includes(el))
        )
  }
  
  diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]);
`.replace(/\s+/g, "")
  },

  {
    A6: `function diffArray(arr1, arr2) {
      return [
        ...diff(arr1, arr2),
        ...diff(arr2, arr1)
      ]
      
      function diff(a, b) {
        return a.filter(item => b.indexOf(item) === -1);
      }
    }
`.replace(/\s+/g, "")
  },

  {
    A7: `function destroyer(arr) {
      var args = Array.prototype.slice.call(arguments);
    
      for (var i = 0; i < arr.length; i++) {
        for (var j = 0; j < args.length; j++) {
          if (arr[i] === args[j]) {
            delete arr[i];
          }
        }
      }
      return arr.filter(Boolean);
    } 
`.replace(/\s+/g, "")
  },

  {
    A8: `function destroyer(arr) {
      var args = Array.from(arguments).slice(1);
      return arr.filter(function(val) {
        return !args.includes(val);
      });
    }
`.replace(/\s+/g, "")
  },

  {
    A9: `const destroyer = (arr, ...args) => arr.filter(i => !args.includes(i)); `.replace(/\s+/g, "")
  },


  
  {
    A10: `function whatIsInAName(collection, source) {
      var srcKeys = Object.keys(source);
    
      return collection.filter(function (obj) {
        for(var i = 0; i < srcKeys.length; i++) {
          if(!obj.hasOwnProperty(srcKeys[i]) || obj[srcKeys[i]] !== source[srcKeys[i]]) {
            return false;
          }
        }
        return true;
      });
    }
    whatIsInAName([{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], { last: "Capulet" }); `.replace(/\s+/g, "")
  },


  { A11: `function whatIsInAName(collection, source) {
    var srcKeys = Object.keys(source);
  
    return collection.filter(function (obj) {
      return srcKeys.every(function (key) {
        return obj.hasOwnProperty(key) && obj[key] === source[key];
      });
    });
  }
  whatIsInAName([{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], { last: "Capulet" });`.replace(/\s+/g, "") },

  
  { A12: `function whatIsInAName(collection, source) {
    var srcKeys = Object.keys(source);
  
    return collection.filter(function (obj) {
      return srcKeys
        .map(function(key) {
          return obj.hasOwnProperty(key) && obj[key] === source[key];
        })
        .reduce(function(a, b) {
          return a && b;
        });
    });
  }
  whatIsInAName([{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], { last: "Capulet" });`.replace(/\s+/g, "") },

  { A13: `function spinalCase(str) {
    var regex = /\s+|_+/g;
  
    str = str.replace(/([a-z])([A-Z])/g, '$1 $2');
    return str.replace(regex, '-').toLowerCase();
  }
  spinalCase('This Is Spinal Tap');`.replace(/\s+/g, "") },

  { A14: `function spinalCase(str) {
    str = str.replace(/([a-z])([A-Z])/g, '$1 $2');
    return str.toLowerCase().split(/(?:_| )+/) .join('-');
  }
  spinalCase('This Is Spinal Tap');`.replace(/\s+/g, "") },

  {
    A15: `function spinalCase(str) {
      return str.split(/\s|_|(?=[A-Z])/).join('-').toLowerCase()
    }`.replace(/\s+/g, "")
  },

  {
    A16: `function translatePigLatin(str) {
      var pigLatin = '';
      var regex = /[aeiou]/gi;
      if (str[0].match(regex)) {
        pigLatin = str + 'way';
    
      } else if(str.match(regex) === null) {
        pigLatin = str + 'ay';
      } else {
        var vowelIndice = str.indexOf(str.match(regex)[0]);
        pigLatin = str.substr(vowelIndice) + str.substr(0, vowelIndice) + 'ay';
      }
    
      return pigLatin;
    }
    translatePigLatin("consonant");
    `.replace(/\s+/g, "")
  },

  {
    A17: `function myReplace(str, before, after) {
      var index = str.indexOf(before);
    
      if (str[index] === str[index].toUpperCase()) {
        after = after.charAt(0).toUpperCase() + after.slice(1);
      }
      str = str.replace(before, after);
    
      return str;
    }
    myReplace("A quick brown fox jumped over the lazy dog", "jumped", "leaped");
`.replace(/\s+/g, "")
  },

  {
    A18: `
    function myReplace(str, before, after) {

      var re = new RegExp(before,"gi");
    
      if(/[A-Z]/.test(before[0])){
    
        after = after.charAt(0).toUpperCase()+after.slice(1);
         }
      var  newStr =  str.replace(re,after);
    
     return newStr;
    }
    myReplace("A quick brown fox jumped over the lazy dog", "jumped", "leaped");
`.replace(/\s+/g, "")
  },

  {
    A19: `function myReplace(str, before, after) {

      function applyCasing(source, target) {
          var targetArr = target.split("");
          var sourceArr = source.split("");
         
          for (var i = 0; i < Math.min(targetArr.length, sourceArr.length); i++){
              if (/[A-Z]/.test(sourceArr[i])) {
                  targetArr[i] = targetArr[i].toUpperCase();
              }
              
              else targetArr[i] = targetArr[i].toLowerCase();
          }
          return (targetArr.join(""));
      }
      return str.replace(before, applyCasing(before, after));
  }
  myReplace("A quick brown fox jumped over the lazy dog", "jumped", "leaped");
    
`.replace(/\s+/g, "")
  },

  {
    A20: `function pairElement(str) {

      var paired = [];
      var search = function(char) {
        switch (char) {
          case 'A':
            paired.push(['A', 'T']);
            break;
          case 'T':
            paired.push(['T', 'A']);
            break;
          case 'C':
            paired.push(['C', 'G']);
            break;
          case 'G':
            paired.push(['G', 'C']);
            break;
        }
      };
      for (var i = 0; i < str.length; i++) {
        search(str[i]);
      }

      return paired;
    }
    pairElement("GCG");
    `.replace(
      /\s+/g,
      ""
    )
  },

  {
    A21: `function pairElement(str) {
      var pairs = {
        "A": "T",
        "T": "A",
        "C": "G",
        "G": "C"
      }
      var arr = str.split("");
      return arr.map(x => [x,pairs[x]]);
    }
    pairElement("GCG");`.replace(
      /\s+/g,
      ""
    )
  },

  {
    A22: `function fearNotLetter(str) {

      for(var i = 0; i < str.length; i++) {
    
        var code = str.charCodeAt(i);
    
        if (code !== str.charCodeAt(0) + i) {
          return String.fromCharCode(code - 1);
        }  
      }
      return undefined;
    }
    fearNotLetter("abce");
    `.replace(
      /\s+/g,
      ""
    )
  },

  {
    A23: `

    function fearNotLetter(str) {
      var compare = str.charCodeAt(0), missing;
    
      str.split('').map(function(letter,index) {
        if (str.charCodeAt(index) == compare) {
          ++compare;
        } else {
          missing = String.fromCharCode(compare);
        }
      });
    
      return missing;
    }
    fearNotLetter("abce");
    `.replace(
      /\s+/g,
      ""
    )
  },

  {
    A24: `function fearNotLetter(str) {
      for (let i = 1; i < str.length; ++i) {
        if (str.charCodeAt(i) - str.charCodeAt(i-1) > 1) {
          return String.fromCharCode(str.charCodeAt(i - 1) + 1);
        }
      }
    }`.replace(/\s+/g, "")
  },

  {
    A25: `function fearNotLetter(str) {
      var allChars = '';
      var notChars = new RegExp('[^'+str+']','g');
    
      for (var i = 0; allChars[allChars.length-1] !== str[str.length-1] ; i++)
        allChars += String.fromCharCode(str[0].charCodeAt(0) + i);
    
      return allChars.match(notChars) ? allChars.match(notChars).join('') : undefined;
    }
    fearNotLetter("abce");`.replace(/\s+/g, "")
  },

  {
    A26: `function uniteUnique(arr1, arr2, arr3) {

      var finalArray = [];
    
      for (var i = 0; i < arguments.length; i++) {
        var arrayArguments = arguments[i];
    
        for (var j = 0; j < arrayArguments.length; j++) {
          var indexValue = arrayArguments[j];
    
          if (finalArray.indexOf(indexValue) < 0) {
            finalArray.push(indexValue);
          }
        }
      }
    
      return finalArray;
    }
    uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]);`.replace(/\s+/g, "")
  },

  {
    A27: `
    function uniteUnique(arr) {
      var args = [...arguments];
      var result = [];
      for(var i = 0; i < args.length; i++) {
        for(var j = 0; j < args[i].length; j++) {
           if(!result.includes(args[i][j])) {
            result.push(args[i][j]);
          }
        }
      }
      return result;
    }
    
    uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]);
    `.replace(/\s+/g, "")
  },

  {
    A28: `function uniteUnique(arr1, arr2, arr3) {
      var newArr;
       var args = Array.prototype.slice.call(arguments);
       newArr = args.reduce(function(arrA,arrB){
         return arrA.concat(arrB.filter(function(i){
           return arrA.indexOf(i) === -1;
         }));
       });
     
        return newArr;                    
     }
     uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]);`.replace(/\s+/g, "")
  },

  {
    A29: `
    function uniteUnique(...arrays) {
    
      const flatArray = [].concat(...arrays);
    
      return [...new Set(flatArray)];
    }
    uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]);`.replace(/\s+/g, "")
  },

  {
    A30: `  function convertHTML(str) {

      var temp = str.split('');


      for (var i = 0; i < temp.length; i++) {
        switch (temp[i]) {
          case '<':
            temp[i] = '&lt;';
            break;
          case '&':
            temp[i] = '&amp;';
            break;
          case '>':
            temp[i] = '&gt;';
            break;
          case '"':
            temp[i] = '&quot;';
            break;
          case "'":
            temp[i] = "&apos;";
            break;
        }
      }

      temp = temp.join('');
      return temp;
    }
    convertHTML("Dolce & Gabbana");`.replace(/\s+/g, "")
  },

  {
    A31: `function convertHTML(str) {

      str = str.replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;').replace(/'/g,"&apos;");
    return str;
    }
    convertHTML("Dolce & Gabbana"); `.replace(/\s+/g, "")
  },

  {
    A32: `function sumFibs(num) {
      var prevNumber = 0;
      var currNumber = 1;
      var result = 0;
      while (currNumber <= num) {
          if (currNumber % 2 !== 0) {
              result += currNumber;
          }
  
          currNumber += prevNumber;
          prevNumber = currNumber - prevNumber;
      }
  
      return result;
  }
  sumFibs(4); `.replace(/\s+/g, "")
  },

  {
    A33: `function sumPrimes(num) {
      var res = 0;
    
      function getPrimes(max) {
        var sieve = [];
        var i;
        var j;
        var primes = [];
        for (i = 2; i <= max; ++i) {
          if (!sieve[i]) {
            primes.push(i);
            for (j = i << 1; j <= max; j += i) {
              sieve[j] = true;
            }
          }
        }
    
        return primes;
      }
      var primes = getPrimes(num);
      for (var p = 0; p < primes.length; p++) {
        res += primes[p];
      }
    
      return res;
    }
    sumPrimes(10); `.replace(/\s+/g, "")
  },

  {
    A34: `function sumPrimes(num) {

      let arr = Array.from({length: num+1}, (v, k) => k).slice(2); 
    
      let onlyPrimes = arr.filter( (n) => { 
        let m = n-1;
        while (m > 1 && m >= Math.sqrt(n)) { 
          if ((n % m) === 0) 
            return false;
            m--;
        }
          return true;
      });
    
      return onlyPrimes.reduce((a,b) => a+b); 
    }
    sumPrimes(977); `.replace(/\s+/g, "")
  },

  {
    A35: `function smallestCommons(arr) {
      arr.sort(function(a, b) {
        return b - a;
      });
      var newArr = [];
      for (var i = arr[0]; i >= arr[1]; i--) {
        newArr.push(i);
      }
      var quot = 0;
      var loop = 1;
      var n;
      do {
        quot = newArr[0] * loop * newArr[1];
        for (n = 2; n < newArr.length; n++) {
          if (quot % newArr[n] !== 0) {
            break;
          }
        }
    
        loop++;
      } while (n !== newArr.length);
    
      return quot;
    }
    smallestCommons([1,5]); `.replace(/\s+/g, "")
  },

  {
    A36: `function smallestCommons(arr) {
      var range = [];
      for (var i = Math.max(arr[0], arr[1]); i >= Math.min(arr[0], arr[1]); i--) {
      range.push(i);
      }
      var lcm = range[0];
      for (i = 1; i < range.length; i++) {
      var GCD = gcd(lcm, range[i]);
      lcm = (lcm * range[i]) / GCD;
      }
      return lcm;
  
      function gcd(x, y) { 
      if (y === 0)
          return x;
      else
          return gcd(y, x%y);
      }
  }
  smallestCommons([1,5]); `.replace(/\s+/g, "")
  },

  {
    A37: `function smallestCommons(arr) {

      let min = Math.min.apply(null, arr);
      let max = Math.max.apply(null, arr);
    
      let smallestCommon = lcm(min, min + 1);
    
      while(min < max) {
        min++;
        smallestCommon = lcm(smallestCommon, min);
      }
    
      return smallestCommon;
    }
    
    function gcd(a, b) {
      while (b > 0) {
        let tmp = a;
        a = b;
        b = tmp % b;
      }
      return a;
    }
    function lcm(a, b) {
      return (a * b / gcd(a, b));
    }
    smallestCommons([1,5]);`.replace(/\s+/g, "")
  },

  {
    A38: `function dropElements(arr, func) {
      var times = arr.length;
      for (var i = 0; i < times; i++) {
        if (func(arr[0])) {
          break;
        } else {
          arr.shift();
        }
      }
      return arr;
    }
    dropElements([1, 2, 3, 4], function(n) {return n >= 3;}); `.replace(/\s+/g, "")
  },

  {
    A39: `function dropElements(arr, func) {
      return arr.slice(arr.findIndex(func) >= 0 ? arr.findIndex(func): arr.length, arr.length);
    }
    dropElements([1, 2, 3, 4], function(n) {return n >= 3;}); `.replace(/\s+/g, "")
  },

  {
    A40: `function dropElements(arr, func) {
      while(arr.length > 0 && !func(arr[0])) {
        arr.shift();
      }
      return arr;
    }
    dropElements([1, 2, 3, 4], function(n) {return n >= 3;}); `.replace(/\s+/g, "")
  },

  {
    A41: `function steamrollArray(arr) {
      var flattenedArray = [];
    
      var flatten = function(arg) {
        if (!Array.isArray(arg)) {
          flattenedArray.push(arg);
        } else {
          for (var a in arg) {
            flatten(arg[a]);
          }
        }
      };
      arr.forEach(flatten);
      return flattenedArray;
    }
    steamrollArray([1, [2], [3, [[4]]]]); `.replace(/\s+/g, "")
  },

  {
    A42: `function steamrollArray(arr) {
      return arr.toString()
        .replace(',,', ',') 
        .split(',')   
        .map(function(v) {
          if (v == '[object Object]') { 
            return {};
          } else if (isNaN(v)) { 
            return v;
          } else {
            return parseInt(v); 
          }
        });
    }`.replace(/\s+/g, "")
  },

  {
    A43: `function binaryAgent(str) {
      str = str.split(' ');
      var power;
      var decValue = 0;
      var sentence = '';
      for (var s = 0; s < str.length; s++) {
        for (var t = 0; t < str[s].length; t++) {
          if (str[s][t] == 1) {
            power = Math.pow(2, +str[s].length - t - 1);
            decValue += power;
          }
        }
        sentence += (String.fromCharCode(decValue));
        decValue = 0;
      }

      return sentence;
    }
    binaryAgent("01000001 01110010 01100101 01101110 00100111 01110100 00100000 01100010 01101111 01101110 01100110 01101001 01110010 01100101 01110011 00100000 01100110 01110101 01101110 00100001 00111111"); `.replace(/\s+/g, "")
  },

  {
    A44: `function binaryAgent(str) {
      return String.fromCharCode(...str.split(" ").map(function(char){ return parseInt(char, 2); }));
    }
    binaryAgent("01000001 01110010 01100101 01101110 00100111 01110100 00100000 01100010 01101111 01101110 01100110 01101001 01110010 01100101 01110011 00100000 01100110 01110101 01101110 00100001 00111111"); `.replace(/\s+/g, "")
  },

  {
    A45: `function truthCheck(collection, pre) {
      var counter = 0;
      for (var c in collection) {
        if (collection[c].hasOwnProperty(pre) && Boolean(collection[c][pre])) {
          counter++;
        }
      }
      return counter == collection.length;
    }
    truthCheck([{"user": "Tinky-Winky", "sex": "male"}, {"user": "Dipsy", "sex": "male"}, {"user": "Laa-Laa", "sex": "female"}, {"user": "Po", "sex": "female"}], "sex"); `.replace(/\s+/g, "")
  },

  {
    A46: `function truthCheck(collection, pre) {
      return collection.every(function (element) {
        return element.hasOwnProperty(pre) && Boolean(element[pre]);
      });
    }
    truthCheck([{"user": "Tinky-Winky", "sex": "male"}, {"user": "Dipsy", "sex": "male"}, {"user": "Laa-Laa", "sex": "female"}, {"user": "Po", "sex": "female"}], "sex");`.replace(/\s+/g, "")
  },

  {
    A47: `function truthCheck(collection, pre) {
      return collection.every(obj => obj[pre]);
    }
    
    truthCheck([{"user": "Tinky-Winky", "sex": "male"}, {"user": "Dipsy", "sex": "male"}, {"user": "Laa-Laa", "sex": "female"}, {"user": "Po", "sex": "female"}], "sex"); `.replace(/\s+/g, "")
  },

  {
    A48: ` function addTogether() {
      var checkNum = function(num) {
        if (typeof num !== 'number') {
          return undefined;
        } else
          return num;
      };
      if (arguments.length > 1) {
        var a = checkNum(arguments[0]);
        var b = checkNum(arguments[1]);
        if (a === undefined || b === undefined) {
          return undefined;
        } else {
          return a + b;
        }
      } else {
        var c = arguments[0];
        if (checkNum(c)) {
          return function(arg2) {
            if (c === undefined || checkNum(arg2) === undefined) {
              return undefined;
            } else {
              return c + arg2;
            }
          };
        }
      }
    }

    addTogether(2,3);`.replace(/\s+/g, "")
  },

  {
    A49: `
    function addTogether() {
      var args = Array.from(arguments);
      return args.some(n => typeof n !== 'number') ? 
        undefined: 
        args.length > 1 ?
          args.reduce((acc, n) => acc += n, 0):
          (n) => typeof n === "number" ? 
            n + args[0]:
            undefined;
    }
    addTogether(2,3);`.replace(/\s+/g, "")
  },

  {
    A50: `var Person = function(firstAndLast) {
      var fullName = firstAndLast;
    
      this.getFirstName = function() {
        return fullName.split(" ")[0];
      };
    
      this.getLastName = function() {
        return fullName.split(" ")[1];
      };
    
      this.getFullName = function() {
        return fullName;
      };
    
      this.setFirstName = function(name) {
        fullName = name + " " + fullName.split(" ")[1];
      };
    
      this.setLastName = function(name) {
        fullName = fullName.split(" ")[0] + " " + name;
      };
    
      this.setFullName = function(name) {
        fullName = name;
      };
    };
    
    var bob = new Person('Bob Ross');
    bob.getFullName();`.replace(/\s+/g, "")
  },

  {
    A51: `function orbitalPeriod(arr) {
      var GM = 398600.4418;
      var earthRadius = 6367.4447;
      var a = 2 * Math.PI;
      var newArr = [];
      var getOrbPeriod = function(obj) {
        var c = Math.pow(earthRadius + obj.avgAlt, 3);
        var b = Math.sqrt(c / GM);
        var orbPeriod = Math.round(a * b);
        delete obj.avgAlt;
        obj.orbitalPeriod = orbPeriod;
        return obj;
      };
    
      for (var elem in arr) {
        newArr.push(getOrbPeriod(arr[elem]));
      }
    
      return newArr;
    }
    orbitalPeriod([{name : "sputnik", avgAlt : 35873.5553}]); `.replace(/\s+/g, "")
  },

  {
    A52: `function orbitalPeriod(arr) {
      var GM = 398600.4418;
      var earthRadius = 6367.4447;
    
      for(var prop in arr) {
        var orbitalPer = Math.round(2 * Math.PI * Math.sqrt(Math.pow(arr[prop].avgAlt + earthRadius, 3) / GM));
        delete arr[prop].avgAlt;
        arr[prop].orbitalPeriod = orbitalPer;
      }
    
      return arr;
    }
    orbitalPeriod([{name : "sputnik", avgAlt : 35873.5553}]); `.replace(/\s+/g, "")
  },

  {
    A53: `function orbitalPeriod(arr) {
      var GM = 398600.4418;
      var earthRadius = 6367.4447;
    
      arr.forEach(function(item) {
        var tmp = Math.round(2 * Math.PI * Math.sqrt(Math.pow(earthRadius + item.avgAlt, 3) / GM));
        delete item.avgAlt;
        item.orbitalPeriod = tmp;
      });
      return arr;
    }
    orbitalPeriod([{name : "sputnik", avgAlt : 35873.5553}]); `.replace(/\s+/g, "")
  }
];
