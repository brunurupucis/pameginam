export var javascriptFunctionalProgrammingAnswerArr = [
  {
    A0: `
    const prepareTea = () => 'greenTea';
    
    
    const getTea = (numOfCups) => {
      const teaCups = [];
      
      for(let cups = 1; cups <= numOfCups; cups += 1) {
        const teaCup = prepareTea();
        teaCups.push(teaCup);
      }
    
      return teaCups;
    };
    const tea4TeamFCC = getTea(40); 
    console.log(tea4TeamFCC);
  `.replace(/\s+/g, "")
  },

  {
    A1: `
    const prepareGreenTea = () => 'greenTea';
    
    const prepareBlackTea = () => 'blackTea';
    
    
    const getTea = (prepareTea, numOfCups) => {
      const teaCups = [];
    
      for(let cups = 1; cups <= numOfCups; cups += 1) {
        const teaCup = prepareTea();
        teaCups.push(teaCup);
      }
    
      return teaCups;
    };
    const tea4GreenTeamFCC = getTea(prepareGreenTea,27); 
    const tea4BlackTeamFCC = getTea(prepareBlackTea,13); 
    
    console.log(
      tea4GreenTeamFCC,
      tea4BlackTeamFCC
    );
    `.replace(/\s+/g, "")
  },

  { A2: `var fixedValue = 4;
  function incrementer () {
    return fixedValue + 1;
  }
  var newValue = incrementer(); 
  console.log(fixedValue); `.replace(/\s+/g, "") },

  {
    A3: `
    var fixedValue = 4;
    
    function incrementer (value) {
      return value + 1;
    }
    
    var newValue = incrementer(fixedValue);
    console.log(fixedValue); 
`.replace(/\s+/g, "")
  },

  {
    A4: `var bookList = ["The Hound of the Baskervilles", "On The Electrodynamics of Moving Bodies", "Philosophiæ Naturalis Principia Mathematica", "Disquisitiones Arithmeticae"];
    function add (bookName) {
      
      return bookList.push(bookName);
      
    }
    function add (arr, bookName) {
      let newArr = [...arr];  
      newArr.push(bookName);  
      return newArr; 
    }
    function remove (arr, bookName) {
      let newArr = [...arr];  
      if (newArr.indexOf(bookName) >= 0) {  
        newArr.splice(newArr.indexOf(bookName), 1); 
        return newArr; 
        }
    }
    var newBookList = add(bookList, 'A Brief History of Time');
    var newerBookList = remove(bookList, 'On The Electrodynamics of Moving Bodies');
    var newestBookList = remove(add(bookList, 'A Brief History of Time'), 'On The Electrodynamics of Moving Bodies');
    
    console.log(bookList);
    `.replace(/\s+/g, "")
  },

  {
    A5: `
    var watchList = [
                     {
                       "Title": "Inception",
                       "Year": "2010",
                       "Rated": "PG-13",
                       "Released": "16 Jul 2010",
                       "Runtime": "148 min",
                       "Genre": "Action, Adventure, Crime",
                       "Director": "Christopher Nolan",
                       "Writer": "Christopher Nolan",
                       "Actors": "Leonardo DiCaprio, Joseph Gordon-Levitt, Ellen Page, Tom Hardy",
                       "Plot": "A thief, who steals corporate secrets through use of dream-sharing technology, is given the inverse task of planting an idea into the mind of a CEO.",
                       "Language": "English, Japanese, French",
                       "Country": "USA, UK",
                       "Awards": "Won 4 Oscars. Another 143 wins & 198 nominations.",
                       "Poster": "http://ia.media-imdb.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_SX300.jpg",
                       "Metascore": "74",
                       "imdbRating": "8.8",
                       "imdbVotes": "1,446,708",
                       "imdbID": "tt1375666",
                       "Type": "movie",
                       "Response": "True"
                    },
                    {
                       "Title": "Interstellar",
                       "Year": "2014",
                       "Rated": "PG-13",
                       "Released": "07 Nov 2014",
                       "Runtime": "169 min",
                       "Genre": "Adventure, Drama, Sci-Fi",
                       "Director": "Christopher Nolan",
                       "Writer": "Jonathan Nolan, Christopher Nolan",
                       "Actors": "Ellen Burstyn, Matthew McConaughey, Mackenzie Foy, John Lithgow",
                       "Plot": "A team of explorers travel through a wormhole in space in an attempt to ensure humanity's survival.",
                       "Language": "English",
                       "Country": "USA, UK",
                       "Awards": "Won 1 Oscar. Another 39 wins & 132 nominations.",
                       "Poster": "http://ia.media-imdb.com/images/M/MV5BMjIxNTU4MzY4MF5BMl5BanBnXkFtZTgwMzM4ODI3MjE@._V1_SX300.jpg",
                       "Metascore": "74",
                       "imdbRating": "8.6",
                       "imdbVotes": "910,366",
                       "imdbID": "tt0816692",
                       "Type": "movie",
                       "Response": "True"
                    },
                    {
                       "Title": "The Dark Knight",
                       "Year": "2008",
                       "Rated": "PG-13",
                       "Released": "18 Jul 2008",
                       "Runtime": "152 min",
                       "Genre": "Action, Adventure, Crime",
                       "Director": "Christopher Nolan",
                       "Writer": "Jonathan Nolan (screenplay), Christopher Nolan (screenplay), Christopher Nolan (story), David S. Goyer (story), Bob Kane (characters)",
                       "Actors": "Christian Bale, Heath Ledger, Aaron Eckhart, Michael Caine",
                       "Plot": "When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, the caped crusader must come to terms with one of the greatest psychological tests of his ability to fight injustice.",
                       "Language": "English, Mandarin",
                       "Country": "USA, UK",
                       "Awards": "Won 2 Oscars. Another 146 wins & 142 nominations.",
                       "Poster": "http://ia.media-imdb.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_SX300.jpg",
                       "Metascore": "82",
                       "imdbRating": "9.0",
                       "imdbVotes": "1,652,832",
                       "imdbID": "tt0468569",
                       "Type": "movie",
                       "Response": "True"
                    },
                    {
                       "Title": "Batman Begins",
                       "Year": "2005",
                       "Rated": "PG-13",
                       "Released": "15 Jun 2005",
                       "Runtime": "140 min",
                       "Genre": "Action, Adventure",
                       "Director": "Christopher Nolan",
                       "Writer": "Bob Kane (characters), David S. Goyer (story), Christopher Nolan (screenplay), David S. Goyer (screenplay)",
                       "Actors": "Christian Bale, Michael Caine, Liam Neeson, Katie Holmes",
                       "Plot": "After training with his mentor, Batman begins his fight to free crime-ridden Gotham City from the corruption that Scarecrow and the League of Shadows have cast upon it.",
                       "Language": "English, Urdu, Mandarin",
                       "Country": "USA, UK",
                       "Awards": "Nominated for 1 Oscar. Another 15 wins & 66 nominations.",
                       "Poster": "http://ia.media-imdb.com/images/M/MV5BNTM3OTc0MzM2OV5BMl5BanBnXkFtZTYwNzUwMTI3._V1_SX300.jpg",
                       "Metascore": "70",
                       "imdbRating": "8.3",
                       "imdbVotes": "972,584",
                       "imdbID": "tt0372784",
                       "Type": "movie",
                       "Response": "True"
                    },
                    {
                       "Title": "Avatar",
                       "Year": "2009",
                       "Rated": "PG-13",
                       "Released": "18 Dec 2009",
                       "Runtime": "162 min",
                       "Genre": "Action, Adventure, Fantasy",
                       "Director": "James Cameron",
                       "Writer": "James Cameron",
                       "Actors": "Sam Worthington, Zoe Saldana, Sigourney Weaver, Stephen Lang",
                       "Plot": "A paraplegic marine dispatched to the moon Pandora on a unique mission becomes torn between following his orders and protecting the world he feels is his home.",
                       "Language": "English, Spanish",
                       "Country": "USA, UK",
                       "Awards": "Won 3 Oscars. Another 80 wins & 121 nominations.",
                       "Poster": "http://ia.media-imdb.com/images/M/MV5BMTYwOTEwNjAzMl5BMl5BanBnXkFtZTcwODc5MTUwMw@@._V1_SX300.jpg",
                       "Metascore": "83",
                       "imdbRating": "7.9",
                       "imdbVotes": "876,575",
                       "imdbID": "tt0499549",
                       "Type": "movie",
                       "Response": "True"
                    }
    ];
    
    var rating = watchList.map(function(movie) {
      return {
        title: movie["Title"],
        rating: movie["imdbRating"]
      }
    });
    
`.replace(/\s+/g, "")
  },

  {
    A6: `
    var s = [23, 65, 98, 5];
    Array.prototype.myMap = function(callback){
      var newArray = [];
      this.forEach(a => newArray.push(callback(a)));
      return newArray;
    };
    var new_s = s.myMap(function(item){
      return item * 2;
    });
`.replace(/\s+/g, "")
  },

  {
    A7: `
    var watchList = [
                     {  
                       "Title": "Inception",
                       "Year": "2010",
                       "Rated": "PG-13",
                       "Released": "16 Jul 2010",
                       "Runtime": "148 min",
                       "Genre": "Action, Adventure, Crime",
                       "Director": "Christopher Nolan",
                       "Writer": "Christopher Nolan",
                       "Actors": "Leonardo DiCaprio, Joseph Gordon-Levitt, Ellen Page, Tom Hardy",
                       "Plot": "A thief, who steals corporate secrets through use of dream-sharing technology, is given the inverse task of planting an idea into the mind of a CEO.",
                       "Language": "English, Japanese, French",
                       "Country": "USA, UK",
                       "Awards": "Won 4 Oscars. Another 143 wins & 198 nominations.",
                       "Poster": "http://ia.media-imdb.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_SX300.jpg",
                       "Metascore": "74",
                       "imdbRating": "8.8",
                       "imdbVotes": "1,446,708",
                       "imdbID": "tt1375666",
                       "Type": "movie",
                       "Response": "True"
                    },
                    {  
                       "Title": "Interstellar",
                       "Year": "2014",
                       "Rated": "PG-13",
                       "Released": "07 Nov 2014",
                       "Runtime": "169 min",
                       "Genre": "Adventure, Drama, Sci-Fi",
                       "Director": "Christopher Nolan",
                       "Writer": "Jonathan Nolan, Christopher Nolan",
                       "Actors": "Ellen Burstyn, Matthew McConaughey, Mackenzie Foy, John Lithgow",
                       "Plot": "A team of explorers travel through a wormhole in space in an attempt to ensure humanity's survival.",
                       "Language": "English",
                       "Country": "USA, UK",
                       "Awards": "Won 1 Oscar. Another 39 wins & 132 nominations.",
                       "Poster": "http://ia.media-imdb.com/images/M/MV5BMjIxNTU4MzY4MF5BMl5BanBnXkFtZTgwMzM4ODI3MjE@._V1_SX300.jpg",
                       "Metascore": "74",
                       "imdbRating": "8.6",
                       "imdbVotes": "910,366",
                       "imdbID": "tt0816692",
                       "Type": "movie",
                       "Response": "True"
                    },
                    {
                       "Title": "The Dark Knight",
                       "Year": "2008",
                       "Rated": "PG-13",
                       "Released": "18 Jul 2008",
                       "Runtime": "152 min",
                       "Genre": "Action, Adventure, Crime",
                       "Director": "Christopher Nolan",
                       "Writer": "Jonathan Nolan (screenplay), Christopher Nolan (screenplay), Christopher Nolan (story), David S. Goyer (story), Bob Kane (characters)",
                       "Actors": "Christian Bale, Heath Ledger, Aaron Eckhart, Michael Caine",
                       "Plot": "When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, the caped crusader must come to terms with one of the greatest psychological tests of his ability to fight injustice.",
                       "Language": "English, Mandarin",
                       "Country": "USA, UK",
                       "Awards": "Won 2 Oscars. Another 146 wins & 142 nominations.",
                       "Poster": "http://ia.media-imdb.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_SX300.jpg",
                       "Metascore": "82",
                       "imdbRating": "9.0",
                       "imdbVotes": "1,652,832",
                       "imdbID": "tt0468569",
                       "Type": "movie",
                       "Response": "True"
                    },
                    {  
                       "Title": "Batman Begins",
                       "Year": "2005",
                       "Rated": "PG-13",
                       "Released": "15 Jun 2005",
                       "Runtime": "140 min",
                       "Genre": "Action, Adventure",
                       "Director": "Christopher Nolan",
                       "Writer": "Bob Kane (characters), David S. Goyer (story), Christopher Nolan (screenplay), David S. Goyer (screenplay)",
                       "Actors": "Christian Bale, Michael Caine, Liam Neeson, Katie Holmes",
                       "Plot": "After training with his mentor, Batman begins his fight to free crime-ridden Gotham City from the corruption that Scarecrow and the League of Shadows have cast upon it.",
                       "Language": "English, Urdu, Mandarin",
                       "Country": "USA, UK",
                       "Awards": "Nominated for 1 Oscar. Another 15 wins & 66 nominations.",
                       "Poster": "http://ia.media-imdb.com/images/M/MV5BNTM3OTc0MzM2OV5BMl5BanBnXkFtZTYwNzUwMTI3._V1_SX300.jpg",
                       "Metascore": "70",
                       "imdbRating": "8.3",
                       "imdbVotes": "972,584",
                       "imdbID": "tt0372784",
                       "Type": "movie",
                       "Response": "True"
                    },
                    {
                       "Title": "Avatar",
                       "Year": "2009",
                       "Rated": "PG-13",
                       "Released": "18 Dec 2009",
                       "Runtime": "162 min",
                       "Genre": "Action, Adventure, Fantasy",
                       "Director": "James Cameron",
                       "Writer": "James Cameron",
                       "Actors": "Sam Worthington, Zoe Saldana, Sigourney Weaver, Stephen Lang",
                       "Plot": "A paraplegic marine dispatched to the moon Pandora on a unique mission becomes torn between following his orders and protecting the world he feels is his home.",
                       "Language": "English, Spanish",
                       "Country": "USA, UK",
                       "Awards": "Won 3 Oscars. Another 80 wins & 121 nominations.",
                       "Poster": "http://ia.media-imdb.com/images/M/MV5BMTYwOTEwNjAzMl5BMl5BanBnXkFtZTcwODc5MTUwMw@@._V1_SX300.jpg",
                       "Metascore": "83",
                       "imdbRating": "7.9",
                       "imdbVotes": "876,575",
                       "imdbID": "tt0499549",
                       "Type": "movie",
                       "Response": "True"
                    }
    ];
    
    var filteredList = watchList.map(function(e) {
      return {title: e["Title"], rating: e["imdbRating"]}
    }).filter((e) => e.rating >= 8);
    
    console.log(filteredList); 
    
    
    console.log(filteredList); 
`.replace(/\s+/g, "")
  },

  {
    A8: `
    var s = [23, 65, 98, 5];
    
    Array.prototype.myFilter = function(callback){
      var newArray = [];
      for (let i=0; i<this.length;i++){
        if(callback(this[i])=== true ){
     newArray.push(this[i]);
        }
      }
      return newArray;
    
    };
    
    var new_s = s.myFilter(function(item){
      return item % 2 === 1;
    });
`.replace(/\s+/g, "")
  },

  {
    A9: `function sliceArray(anim, beginSlice, endSlice) {
      return anim.slice(beginSlice, endSlice);
    }
    var inputAnim = ["Cat", "Dog", "Tiger", "Zebra", "Ant"];
    sliceArray(inputAnim, 1, 3);`.replace(/\s+/g, "")
  },

  {
    A10: `
    function nonMutatingSplice(cities) {
      return cities.slice(0, 3); 
    }
    var inputCities = ["Chicago", "Delhi", "Islamabad", "London", "Berlin"];
    nonMutatingSplice(inputCities);`.replace(/\s+/g, "")
  },

  { A11: `function nonMutatingConcat(original, attach) {
    return original.concat(attach); 
    
  }
  var first = [1, 2, 3];
  var second = [4, 5];
  nonMutatingConcat(first, second); `.replace(/\s+/g, "") },

  
  { A12: `function nonMutatingPush(original, newItem) {
    return original.concat(newItem);
  }
  
  var first = [1, 2, 3];
  var second = [4, 5];
  nonMutatingPush(first, second);`.replace(/\s+/g, "") },

  { A13: `
  var watchList = [
                   {  
                     "Title": "Inception",
                     "Year": "2010",
                     "Rated": "PG-13",
                     "Released": "16 Jul 2010",
                     "Runtime": "148 min",
                     "Genre": "Action, Adventure, Crime",
                     "Director": "Christopher Nolan",
                     "Writer": "Christopher Nolan",
                     "Actors": "Leonardo DiCaprio, Joseph Gordon-Levitt, Ellen Page, Tom Hardy",
                     "Plot": "A thief, who steals corporate secrets through use of dream-sharing technology, is given the inverse task of planting an idea into the mind of a CEO.",
                     "Language": "English, Japanese, French",
                     "Country": "USA, UK",
                     "Awards": "Won 4 Oscars. Another 143 wins & 198 nominations.",
                     "Poster": "http://ia.media-imdb.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_SX300.jpg",
                     "Metascore": "74",
                     "imdbRating": "8.8",
                     "imdbVotes": "1,446,708",
                     "imdbID": "tt1375666",
                     "Type": "movie",
                     "Response": "True"
                  },
                  {  
                     "Title": "Interstellar",
                     "Year": "2014",
                     "Rated": "PG-13",
                     "Released": "07 Nov 2014",
                     "Runtime": "169 min",
                     "Genre": "Adventure, Drama, Sci-Fi",
                     "Director": "Christopher Nolan",
                     "Writer": "Jonathan Nolan, Christopher Nolan",
                     "Actors": "Ellen Burstyn, Matthew McConaughey, Mackenzie Foy, John Lithgow",
                     "Plot": "A team of explorers travel through a wormhole in space in an attempt to ensure humanity's survival.",
                     "Language": "English",
                     "Country": "USA, UK",
                     "Awards": "Won 1 Oscar. Another 39 wins & 132 nominations.",
                     "Poster": "http://ia.media-imdb.com/images/M/MV5BMjIxNTU4MzY4MF5BMl5BanBnXkFtZTgwMzM4ODI3MjE@._V1_SX300.jpg",
                     "Metascore": "74",
                     "imdbRating": "8.6",
                     "imdbVotes": "910,366",
                     "imdbID": "tt0816692",
                     "Type": "movie",
                     "Response": "True"
                  },
                  {
                     "Title": "The Dark Knight",
                     "Year": "2008",
                     "Rated": "PG-13",
                     "Released": "18 Jul 2008",
                     "Runtime": "152 min",
                     "Genre": "Action, Adventure, Crime",
                     "Director": "Christopher Nolan",
                     "Writer": "Jonathan Nolan (screenplay), Christopher Nolan (screenplay), Christopher Nolan (story), David S. Goyer (story), Bob Kane (characters)",
                     "Actors": "Christian Bale, Heath Ledger, Aaron Eckhart, Michael Caine",
                     "Plot": "When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, the caped crusader must come to terms with one of the greatest psychological tests of his ability to fight injustice.",
                     "Language": "English, Mandarin",
                     "Country": "USA, UK",
                     "Awards": "Won 2 Oscars. Another 146 wins & 142 nominations.",
                     "Poster": "http://ia.media-imdb.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_SX300.jpg",
                     "Metascore": "82",
                     "imdbRating": "9.0",
                     "imdbVotes": "1,652,832",
                     "imdbID": "tt0468569",
                     "Type": "movie",
                     "Response": "True"
                  },
                  {  
                     "Title": "Batman Begins",
                     "Year": "2005",
                     "Rated": "PG-13",
                     "Released": "15 Jun 2005",
                     "Runtime": "140 min",
                     "Genre": "Action, Adventure",
                     "Director": "Christopher Nolan",
                     "Writer": "Bob Kane (characters), David S. Goyer (story), Christopher Nolan (screenplay), David S. Goyer (screenplay)",
                     "Actors": "Christian Bale, Michael Caine, Liam Neeson, Katie Holmes",
                     "Plot": "After training with his mentor, Batman begins his fight to free crime-ridden Gotham City from the corruption that Scarecrow and the League of Shadows have cast upon it.",
                     "Language": "English, Urdu, Mandarin",
                     "Country": "USA, UK",
                     "Awards": "Nominated for 1 Oscar. Another 15 wins & 66 nominations.",
                     "Poster": "http://ia.media-imdb.com/images/M/MV5BNTM3OTc0MzM2OV5BMl5BanBnXkFtZTYwNzUwMTI3._V1_SX300.jpg",
                     "Metascore": "70",
                     "imdbRating": "8.3",
                     "imdbVotes": "972,584",
                     "imdbID": "tt0372784",
                     "Type": "movie",
                     "Response": "True"
                  },
                  {
                     "Title": "Avatar",
                     "Year": "2009",
                     "Rated": "PG-13",
                     "Released": "18 Dec 2009",
                     "Runtime": "162 min",
                     "Genre": "Action, Adventure, Fantasy",
                     "Director": "James Cameron",
                     "Writer": "James Cameron",
                     "Actors": "Sam Worthington, Zoe Saldana, Sigourney Weaver, Stephen Lang",
                     "Plot": "A paraplegic marine dispatched to the moon Pandora on a unique mission becomes torn between following his orders and protecting the world he feels is his home.",
                     "Language": "English, Spanish",
                     "Country": "USA, UK",
                     "Awards": "Won 3 Oscars. Another 80 wins & 121 nominations.",
                     "Poster": "http://ia.media-imdb.com/images/M/MV5BMTYwOTEwNjAzMl5BMl5BanBnXkFtZTcwODc5MTUwMw@@._V1_SX300.jpg",
                     "Metascore": "83",
                     "imdbRating": "7.9",
                     "imdbVotes": "876,575",
                     "imdbID": "tt0499549",
                     "Type": "movie",
                     "Response": "True"
                  }
  ];
  
  var averageRating = watchList.filter(x => x.Director === "Christopher Nolan").map(x => Number(x.imdbRating)).reduce((x1, x2) => x1 + x2) / watchList.filter(x => x.Director === "Christopher Nolan").length;
  
  
  console.log(averageRating);`.replace(/\s+/g, "") },

  { A14: `function alphabeticalOrder(arr) {
    return arr.sort(function(a, b) {
      return a === b ? 0 : a > b ? 1 : -1;
    });
  }
  alphabeticalOrder(["a", "d", "c", "a", "z", "g"]);`.replace(/\s+/g, "") },

  {
    A15: `var globalArray = [5, 6, 3, 2, 9];
    function nonMutatingSort(arr) {
      // Add your code below this line
      return [].concat(arr).sort(function(a, b) {
        return a - b;
      });
    }
    nonMutatingSort(globalArray); `.replace(/\s+/g, "")
  },

  {
    A16: `function splitify(str) {
      return str.split(/\W/);
    }
    splitify("Hello World,I-am code");`.replace(/\s+/g, "")
  },

  {
    A17: `function sentensify(str) {
      return str.split(/\W/).join(' '); 
    }
    sentensify("May-the-force-be-with-you");
`.replace(/\s+/g, "")
  },

  {
    A18: `
    
var globalTitle = "Winter Is Coming";

function urlSlug(title) {
  return title.toLowerCase().trim().split(/\s+/).join('-');
}
var winterComing = urlSlug(globalTitle); 
`.replace(/\s+/g, "")
  },

  {
    A19: `function checkPositive(arr) {
      return arr.every(function(value) {
          return value > 0;
      });
  }
  checkPositive([1, 2, 3, -4, 5]);
`.replace(/\s+/g, "")
  },

  {
    A20: `function checkPositive(arr) {
      return arr.some((elem) => elem > 0);
    }
    checkPositive([1, 2, 3, -4, 5]);`.replace(
      /\s+/g,
      ""
    )
  },

  {
    A21: `function add(x) {
      return function(y) {
        return function(z) {
          return x + y + z;
        }
      }
    }
    add(10)(20)(30);`.replace(
      /\s+/g,
      ""
    )
  }
];
