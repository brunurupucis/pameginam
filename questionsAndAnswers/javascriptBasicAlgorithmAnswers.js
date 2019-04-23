export var javascriptBasicAlgorithmAnswerArr = [
  {
    A0: `function convertToF(celsius) {
      var fahrenheit = (celsius * (9/5)) + 32;

      if ( typeof fahrenheit !== 'undefined' ) {
      return fahrenheit;
      } else {
        return 'fahrenheit not defined';
      }
    }
    convertToF(30);
  `.replace(/\s+/g, "")
  },

  {
    A1: `function reverseString(str) {
      return str.split('').reverse().join('');
    }
    
    reverseString("hello");`.replace(/\s+/g, "")
  },

  { A2: `function factorialize(num) {
    if (num === 0) { return 1; }
    return num * factorialize(num-1);
  }
  
  factorialize(5);`.replace(/\s+/g, "") },

  {
    A3: `function findLongestWordLength(str) {

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
`.replace(/\s+/g, "")
  },

  {
    A4: `function findLongestWordLength(s) {
      return s.split(' ')
        .reduce(function(x, y) {
          return Math.max(x, y.length)
        }, 0);
    }

findLongestWordLength("The quick brown fox jumped over the lazy dog");`.replace(/\s+/g, "")
  },

  {
    A5: `function findLongestWordLength(str) {
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
`.replace(/\s+/g, "")
  },

  {
    A6: `function largestOfFour(arr) {
      return arr.map(Function.apply.bind(Math.max, null));
    }
    
    largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);
`.replace(/\s+/g, "")
  },

  {
    A7: `function largestOfFour(arr) {
      return arr.map(function(group){
        return group.reduce(function(prev, current) {
          return (current > prev) ? current : prev;
        });
      });
    }
    
    largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);
`.replace(/\s+/g, "")
  },

  {
    A8: `function largestOfFour(arr) {
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
`.replace(/\s+/g, "")
  },

  {
    A9: `function confirmEnding(str, target) {
      return str.slice(str.length - target.length) === target;
    }
    
    confirmEnding("He has to give me a new name", "name");`.replace(/\s+/g, "")
  },

  {
    A10: `function repeatStringNumTimes(str, num) {
      if(num < 0){
        return "";
        }
      if(num === 1){
        return str;
      }
      else{
        return str + repeatStringNumTimes(str, num - 1);  }
}
    
repeatStringNumTimes("abc", 3); `.replace(/\s+/g, "")
  },


  { A11: `function repeatStringNumTimes(str, num) {
    var accumulatedStr = '';
  
    while (num > 0) {
      accumulatedStr += str;
      num--;
    }
  
    return accumulatedStr;
  }
  
  repeatStringNumTimes("abc", 3);`.replace(/\s+/g, "") },

  
  { A12: `function truncateString(str, num) {
    if (str.length > num && num > 3) {
    return str.slice(0, (num)) + '...';
    } else if (str.length > num && num <= 3) {
    return str.slice(0, num) + '...';
    } else {
    return str;
    }
    }
    
    truncateString("A-tisket a-tasket A green and yellow basket", 8);`.replace(/\s+/g, "") },

  { A13: `function findElement(arr, func) {
    let num = 0;
    
    for(var i = 0; i < arr.length; i++) {
      num = arr[i];
      if (func(num)) {
        return num;
      }
    }
    
    return undefined;
  }
  
  findElement([1, 2, 3, 4], num => num % 2 === 0);`.replace(/\s+/g, "") },

  
  { A14: `function booWho(bool) {
    return typeof bool === 'boolean';
  }
  booWho(null);`.replace(/\s+/g, "") },

  {
    A15: `function titleCase(str) {
      return str.toLowerCase().replace(/(^|\s)\S/g, (L) => L.toUpperCase());
    }
    
    titleCase("I'm a little tea pot");`.replace(/\s+/g, "")
  },

  {
    A16: `function titleCase(str) {
      var convertToArray = str.toLowerCase().split(" ");
      var result = convertToArray.map(function(val){
          return val.replace(val.charAt(0), val.charAt(0).toUpperCase());
      });
      return result.join(" ");
    }
    
    titleCase("I'm a little tea pot");
    `.replace(/\s+/g, "")
  },

  {
    A17: `String.prototype.replaceAt = function(index, character) {
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
`.replace(/\s+/g, "")
  },

  {
    A18: `
    function frankenSplice(arr1, arr2, n) {
      let localArray = arr2.slice();
      for (let i = 0; i < arr1.length; i++) {
        localArray.splice(n, 0, arr1[i]);
        n++;
      }
      return localArray;
    }
    
    frankenSplice([1, 2, 3], [4, 5, 6], 1);
    
`.replace(/\s+/g, "")
  },

  {
    A19: `function bouncer(arr) {
      return arr.filter(Boolean);
    }
    
    bouncer([7, "ate", "", false, 9]);
`.replace(/\s+/g, "")
  },

  {
    A20: `function getIndexToIns(arr, num) {

      return arr.concat(num).sort((a,b) => a-b).indexOf(num);
      
      }
      
      getIndexToIns([40, 60], 50);
    `.replace(
      /\s+/g,
      ""
    )
  },

  {
    A21: `function getIndexToIns(arr, num) {
      arr.push(num);
      arr.sort(function(a, b){return a-b});
      return arr.indexOf(num);
    }
    
    getIndexToIns([40, 60], 50);`.replace(
      /\s+/g,
      ""
    )
  },

  {
    A22: `function getIndexToIns(arr, num) {
      var times = arr.length; 
      var count = 0; 
      for (var i=0;i<times;i++){
        if(num>arr[i]){count++;} }
        return count; 
    }
    
    getIndexToIns([40, 60], 50);
    `.replace(
      /\s+/g,
      ""
    )
  },

  {
    A23: `function mutation(arr) {
      var test = arr[1].toLowerCase();
      var target = arr[0].toLowerCase();
      for (var i=0;i<test.length;i++) {
        if (target.indexOf(test[i]) < 0)
          return false;
      }
      return true;
     }
    
    mutation(["hello", "hey"]);
    `.replace(
      /\s+/g,
      ""
    )
  },

  {
    A24: `function mutation(arr) {
      return arr[1].toLowerCase()
        .split('')
        .every(function(letter) {
          return arr[0].toLowerCase()
            .indexOf(letter) != -1;
        });
    }
    
    mutation(["hello", "hey"]);`.replace(/\s+/g, "")
  },

  {
    A25: `function chunkArrayInGroups(arr, size) {
      if (arr.length <= size){
        return [arr];
      }
      else {
        return [arr.slice(0,size)].concat(chunkArrayInGroups(arr.slice(size),size));
      }
    }

chunkArrayInGroups(["a", "b", "c", "d"], 2);`.replace(/\s+/g, "")
  },

  {
    A26: `function chunkArrayInGroups(arr, size) {
      var newArr = [];
      while (arr.length) {
        newArr.push(arr.splice(0,size));
      }
      return newArr;
    }
chunkArrayInGroups(["a", "b", "c", "d"], 2);`.replace(/\s+/g, "")
  },

  {
    A27: `
    function chunkArrayInGroups(arr, size) {
      var arr2 = [];
      for (var i = 0; i < arr.length; i+=size) {
    	arr2.push(arr.slice(i , i+size));
      }
      return arr2;
    }
chunkArrayInGroups(["a", "b", "c", "d"], 2);
    `.replace(/\s+/g, "")
  },

  {
    A28: `function chunkArrayInGroups(arr, size) {

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
chunkArrayInGroups(["a", "b", "c", "d"], 2);`.replace(/\s+/g, "")
  }
];
