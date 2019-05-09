export var javascriptProjectsAnswerArr = [
  {
    A0: `function palindrome(str) {
      return str.replace(/[\W_]/g, '').toLowerCase() ===
             str.replace(/[\W_]/g, '').toLowerCase().split('').reverse().join('');
}
  `.replace(/\s+/g, "")
  },

  {
    A1: ` function palindrome(str) {
      str = str.toLowerCase().replace(/[\W_]/g, '');
      for(var i = 0, len = str.length - 1; i < len/2; i++) {
        if(str[i] !== str[len-i]) {
          return false;
        }
      }
      return true;
    }`.replace(/\s+/g, "")
  },

  { A2: ` 
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

  }`.replace(/\s+/g, "") },

  {
    A3: `var convertToRoman = function(num) {

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
`.replace(/\s+/g, "")
  },

  {
    A4: `function convertToRoman(num) {
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
     `.replace(/\s+/g, "")
  },

  {
    A5: `
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
`.replace(/\s+/g, "")
  },

  {
    A6: `function rot13(str) { 
      return str.replace(/[A-Z]/g, L => String.fromCharCode((L.charCodeAt(0) % 26) + 65));
    }
`.replace(/\s+/g, "")
  },

  {
    A7: `function telephoneCheck(str) {
      var regex = /^(1\s?)?(\(\d{3}\)|\d{3})[\s\-]?\d{3}[\s\-]?\d{4}$/;
      return regex.test(str);
   }
   telephoneCheck("555-555-5555"); 
`.replace(/\s+/g, "")
  },

  {
    A8: `
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
`.replace(/\s+/g, "")
  }
];
