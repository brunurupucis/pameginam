export var javascriptFunctionalProgrammingQuestionArr = [
  `0.In the code editor, the prepareTea and getTea functions are already defined for you. Call the getTea function to get 40 cups of tea for the team, and store them in the tea4TeamFCC variable.<br>
  /**<br>
 * A long process to prepare tea.<br>
 * @return {string} A cup of tea.<br>
 **/<br>
const prepareTea = () => 'greenTea';<br>
<br>
/**<br>
 * Get given number of cups of tea.<br>
 * @param {number} numOfCups Number of required cups of tea.<br>
 * @return {Array<string>} Given amount of tea cups.<br>
 **/<br>
const getTea = (numOfCups) => {<br>
  const teaCups = [];<br>
  <br>
  for(let cups = 1; cups <= numOfCups; cups += 1) {<br>
    const teaCup = prepareTea();<br>
    teaCups.push(teaCup);<br>
  }<br>
  <br>
  return teaCups;<br>
};<br>
<br>
// Add your code below this line<br>
<br>
const tea4TeamFCC = null; // :(<br>
<br>
// Add your code above this line<br>
<br>
console.log(tea4TeamFCC);`,

  `1.Prepare 27 cups of green tea and 13 cups of black tea and store them in tea4GreenTeamFCC and tea4BlackTeamFCC variables, respectively.<br> Note that the getTea function has been modified so it now takes a function as the first argument.<br>
  /**<br>
 * A long process to prepare green tea.<br>
 * @return {string} A cup of green tea.<br>
 **/<br>
const prepareGreenTea = () => 'greenTea';<br>
/**<br>
 * A long process to prepare black tea.<br>
 * @return {string} A cup of black tea.<br>
 **/<br>
const prepareBlackTea = () => 'blackTea';<br>
<br>
/**<br>
 * Get given number of cups of tea.<br>
 * @param {function():string} prepareTea The type of tea preparing function.<br>
 * @param {number} numOfCups Number of required cups of tea.<br>
 * @return {Array<string>} Given amount of tea cups.
 **/<br>
const getTea = (prepareTea, numOfCups) => {<br>
  const teaCups = [];<br>
  <br>
  for(let cups = 1; cups <= numOfCups; cups += 1) {<br>
    const teaCup = prepareTea();<br>
    teaCups.push(teaCup);<br>
  }<br>
  <br>
  return teaCups;<br>
};<br>
<br>
// Add your code below this line<br>
<br>
const tea4GreenTeamFCC = null; // :(<br>
const tea4BlackTeamFCC = null; // :(<br>
<br>
// Add your code above this line<br>
<br>
console.log(<br>
  tea4GreenTeamFCC,<br>
  tea4BlackTeamFCC<br>
);`,

  `2.Fill in the code for the function incrementer so it returns the value of the global variable fixedValue increased by one.<br>
  // the global variable<br>
var fixedValue = 4;<br>
<br>
function incrementer () {<br>
  // Add your code below this line<br>
  <br>
  <br>
  // Add your code above this line<br>
}<br>
<br>
var newValue = incrementer(); // Should equal 5<br>
console.log(fixedValue); // Should print 4`,

  `3.Let's update the incrementer function to clearly declare its dependencies.<br>
  <br>
  Write the incrementer function so it takes an argument, and then increases the value by one.<br>
  // the global variable<br>
var fixedValue = 4;<br>
<br>
// Add your code below this line<br>
function incrementer () {<br>
  <br>
  <br>
  // Add your code above this line<br>
}<br>
<br>
var newValue = incrementer(fixedValue); // Should equal 5<br>
console.log(fixedValue); // Should print 4`,

  `4.Refactor (rewrite) the code so the global array bookList is not changed inside either function. <br>The add function should add the given bookName to the end of an array. <br>The remove function should remove the given bookName from an array. Both functions should return an array, and any new parameters should be added before the bookName one.<br>
  // the global variable<br>
var bookList = ["The Hound of the Baskervilles", "On The Electrodynamics of Moving Bodies", "Philosophiæ Naturalis Principia Mathematica", "Disquisitiones Arithmeticae"];<br>
<br>
/* This function should add a book to the list and return the list */<br>
// New parameters should come before the bookName one<br>
<br>
// Add your code below this line<br>
function add (bookName) {<br>
  <br>
  return bookList.push(bookName);<br>
  <br>
  // Add your code above this line<br>
}<br>
<br>
/* This function should remove a book from the list and return the list */<br>
// New parameters should come before the bookName one<br>
<br>
// Add your code below this line<br>
function remove (bookName) {<br>
  if (bookList.indexOf(bookName) >= 0) {<br>
    <br>
    return bookList.splice(0, 1, bookName);<br>
    <br>
    // Add your code above this line<br>
    }<br>
}<br>
<br>
var newBookList = add(bookList, 'A Brief History of Time');<br>
var newerBookList = remove(bookList, 'On The Electrodynamics of Moving Bodies');<br>
var newestBookList = remove(add(bookList, 'A Brief History of Time'), 'On The Electrodynamics of Moving Bodies');<br>
<br>
console.log(bookList);<br>
`,



  `5.The watchList array holds objects with information on several movies. Use map to pull the title and rating from watchList and save the new array in the rating variable. <br>The code in the editor currently uses a for loop to do this, replace the loop functionality with your map expression.<br>
  // the global variable<br>
var watchList = [<br>
                 {  <br>
                   "Title": "Inception",<br>
                   "Year": "2010",<br>
                   "Rated": "PG-13",<br>
                   "Released": "16 Jul 2010",<br>
                   "Runtime": "148 min",<br>
                   "Genre": "Action, Adventure, Crime",<br>
                   "Director": "Christopher Nolan",<br>
                   "Writer": "Christopher Nolan",<br>
                   "Actors": "Leonardo DiCaprio, Joseph Gordon-Levitt, Ellen Page, Tom Hardy",<br>
                   "Plot": "A thief, who steals corporate secrets through use of dream-sharing technology, is given the inverse task of planting an idea into the mind of a CEO.",<br>
                   "Language": "English, Japanese, French",<br>
                   "Country": "USA, UK",<br>
                   "Awards": "Won 4 Oscars. Another 143 wins & 198 nominations.",<br>
                   "Poster": "http://ia.media-imdb.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_SX300.jpg",<br>
                   "Metascore": "74",<br>
                   "imdbRating": "8.8",<br>
                   "imdbVotes": "1,446,708",<br>
                   "imdbID": "tt1375666",<br>
                   "Type": "movie",<br>
                   "Response": "True"<br>
                },<br>
                {  <br>
                   "Title": "Interstellar",<br>
                   "Year": "2014",<br>
                   "Rated": "PG-13",<br>
                   "Released": "07 Nov 2014",<br>
                   "Runtime": "169 min",<br>
                   "Genre": "Adventure, Drama, Sci-Fi",<br>
                   "Director": "Christopher Nolan",<br>
                   "Writer": "Jonathan Nolan, Christopher Nolan",<br>
                   "Actors": "Ellen Burstyn, Matthew McConaughey, Mackenzie Foy, John Lithgow",<br>
                   "Plot": "A team of explorers travel through a wormhole in space in an attempt to ensure humanity's survival.",<br>
                   "Language": "English",<br>
                   "Country": "USA, UK",<br>
                   "Awards": "Won 1 Oscar. Another 39 wins & 132 nominations.",<br>
                   "Poster": "http://ia.media-imdb.com/images/M/MV5BMjIxNTU4MzY4MF5BMl5BanBnXkFtZTgwMzM4ODI3MjE@._V1_SX300.jpg",<br>
                   "Metascore": "74",<br>
                   "imdbRating": "8.6",<br>
                   "imdbVotes": "910,366",<br>
                   "imdbID": "tt0816692",<br>
                   "Type": "movie",<br>
                   "Response": "True"<br>
                },<br>
                {<br>
                   "Title": "The Dark Knight",<br>
                   "Year": "2008",<br>
                   "Rated": "PG-13",<br>
                   "Released": "18 Jul 2008",<br>
                   "Runtime": "152 min",<br>
                   "Genre": "Action, Adventure, Crime",<br>
                   "Director": "Christopher Nolan",<br>
                   "Writer": "Jonathan Nolan (screenplay), Christopher Nolan (screenplay), Christopher Nolan (story), David S. Goyer (story), Bob Kane (characters)",<br>
                   "Actors": "Christian Bale, Heath Ledger, Aaron Eckhart, Michael Caine",<br>
                   "Plot": "When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, the caped crusader must come to terms with one of the greatest psychological tests of his ability to fight injustice.",<br>
                   "Language": "English, Mandarin",<br>
                   "Country": "USA, UK",<br>
                   "Awards": "Won 2 Oscars. Another 146 wins & 142 nominations.",<br>
                   "Poster": "http://ia.media-imdb.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_SX300.jpg",<br>
                   "Metascore": "82",<br>
                   "imdbRating": "9.0",<br>
                   "imdbVotes": "1,652,832",<br>
                   "imdbID": "tt0468569",<br>
                   "Type": "movie",<br>
                   "Response": "True"<br>
                },<br>
                {  <br>
                   "Title": "Batman Begins",<br>
                   "Year": "2005",<br>
                   "Rated": "PG-13",<br>
                   "Released": "15 Jun 2005",<br>
                   "Runtime": "140 min",<br>
                   "Genre": "Action, Adventure",<br>
                   "Director": "Christopher Nolan",<br>
                   "Writer": "Bob Kane (characters), David S. Goyer (story), Christopher Nolan (screenplay), David S. Goyer (screenplay)",<br>
                   "Actors": "Christian Bale, Michael Caine, Liam Neeson, Katie Holmes",<br>
                   "Plot": "After training with his mentor, Batman begins his fight to free crime-ridden Gotham City from the corruption that Scarecrow and the League of Shadows have cast upon it.",<br>
                   "Language": "English, Urdu, Mandarin",<br>
                   "Country": "USA, UK",<br>
                   "Awards": "Nominated for 1 Oscar. Another 15 wins & 66 nominations.",<br>
                   "Poster": "http://ia.media-imdb.com/images/M/MV5BNTM3OTc0MzM2OV5BMl5BanBnXkFtZTYwNzUwMTI3._V1_SX300.jpg",<br>
                   "Metascore": "70",<br>
                   "imdbRating": "8.3",<br>
                   "imdbVotes": "972,584",<br>
                   "imdbID": "tt0372784",<br>
                   "Type": "movie",<br>
                   "Response": "True"<br>
                },<br>
                {<br>
                   "Title": "Avatar",<br>
                   "Year": "2009",<br>
                   "Rated": "PG-13",<br>
                   "Released": "18 Dec 2009",<br>
                   "Runtime": "162 min",<br>
                   "Genre": "Action, Adventure, Fantasy",<br>
                   "Director": "James Cameron",<br>
                   "Writer": "James Cameron",<br>
                   "Actors": "Sam Worthington, Zoe Saldana, Sigourney Weaver, Stephen Lang",<br>
                   "Plot": "A paraplegic marine dispatched to the moon Pandora on a unique mission becomes torn between following his orders and protecting the world he feels is his home.",<br>
                   "Language": "English, Spanish",<br>
                   "Country": "USA, UK",<br>
                   "Awards": "Won 3 Oscars. Another 80 wins & 121 nominations.",<br>
                   "Poster": "http://ia.media-imdb.com/images/M/MV5BMTYwOTEwNjAzMl5BMl5BanBnXkFtZTcwODc5MTUwMw@@._V1_SX300.jpg",<br>
                   "Metascore": "83",<br>
                   "imdbRating": "7.9",<br>
                   "imdbVotes": "876,575",<br>
                   "imdbID": "tt0499549",<br>
                   "Type": "movie",<br>
                   "Response": "True"<br>
                }<br>
];<br>
<br>
// Add your code below this line<br>
<br>
var rating = [];<br>
for(var i=0; i < watchList.length; i++){<br>
  rating.push({title: watchList[i]["Title"],  rating: watchList[i]["imdbRating"]});<br>
}<br>
<br>
// Add your code above this line<br>
<br>
console.log(rating); `,

  `6.Write your own Array.prototype.myMap(), which should behave exactly like Array.prototype.map(). You may use a for loop or the forEach method.<br>
  // the global Array<br>
var s = [23, 65, 98, 5];<br>
<br>
Array.prototype.myMap = function(callback){<br>
  var newArray = [];<br>
  // Add your code below this line<br>
  <br>
  // Add your code above this line<br>
  return newArray;<br>
  <br>
};<br>
<br>
var new_s = s.myMap(function(item){<br>
  return item * 2;<br>
});`,

  `7.The variable watchList holds an array of objects with information on several movies. Use a combination of filter and map to return a new array of objects with only title and rating keys, but where imdbRating is greater than or equal to 8.0.<br> Note that the rating values are saved as strings in the object and you may want to convert them into numbers to perform mathematical operations on them.<br>
  // the global variable<br>
var watchList = [<br>
                 {  <br>
                   "Title": "Inception",<br>
                   "Year": "2010",<br>
                   "Rated": "PG-13",<br>
                   "Released": "16 Jul 2010",<br>
                   "Runtime": "148 min",<br>
                   "Genre": "Action, Adventure, Crime",<br>
                   "Director": "Christopher Nolan",<br>
                   "Writer": "Christopher Nolan",<br>
                   "Actors": "Leonardo DiCaprio, Joseph Gordon-Levitt, Ellen Page, Tom Hardy",
                   "Plot": "A thief, who steals corporate secrets through use of dream-sharing technology, is given the inverse task of planting an idea into the mind of a CEO.",<br>
                   "Language": "English, Japanese, French",
                   "Country": "USA, UK",<br>
                   "Awards": "Won 4 Oscars. Another 143 wins & 198 nominations.",<br>
                   "Poster": "http://ia.media-imdb.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_SX300.jpg",<br>
                   "Metascore": "74",<br>
                   "imdbRating": "8.8",<br>
                   "imdbVotes": "1,446,708",<br>
                   "imdbID": "tt1375666",<br>
                   "Type": "movie",<br>
                   "Response": "True"<br>
                },<br>
                {  <br>
                   "Title": "Interstellar",<br>
                   "Year": "2014",<br>
                   "Rated": "PG-13",<br>
                   "Released": "07 Nov 2014",<br>
                   "Runtime": "169 min",<br>
                   "Genre": "Adventure, Drama, Sci-Fi",<br>
                   "Director": "Christopher Nolan",<br>
                   "Writer": "Jonathan Nolan, Christopher Nolan",<br>
                   "Actors": "Ellen Burstyn, Matthew McConaughey, Mackenzie Foy, John Lithgow",<br>
                   "Plot": "A team of explorers travel through a wormhole in space in an attempt to ensure humanity's survival.",<br>
                   "Language": "English",<br>
                   "Country": "USA, UK",<br>
                   "Awards": "Won 1 Oscar. Another 39 wins & 132 nominations.",<br>
                   "Poster": "http://ia.media-imdb.com/images/M/MV5BMjIxNTU4MzY4MF5BMl5BanBnXkFtZTgwMzM4ODI3MjE@._V1_SX300.jpg",<br>
                   "Metascore": "74",<br>
                   "imdbRating": "8.6",<br>
                   "imdbVotes": "910,366",<br>
                   "imdbID": "tt0816692",<br>
                   "Type": "movie",<br>
                   "Response": "True"<br>
                },<br>
                {<br>
                   "Title": "The Dark Knight",<br>
                   "Year": "2008",<br>
                   "Rated": "PG-13",<br>
                   "Released": "18 Jul 2008",<br>
                   "Runtime": "152 min",<br>
                   "Genre": "Action, Adventure, Crime",<br>
                   "Director": "Christopher Nolan",<br>
                   "Writer": "Jonathan Nolan (screenplay), Christopher Nolan (screenplay), Christopher Nolan (story), David S. Goyer (story), Bob Kane (characters)",<br>
                   "Actors": "Christian Bale, Heath Ledger, Aaron Eckhart, Michael Caine",<br>
                   "Plot": "When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, the caped crusader must come to terms with one of the greatest psychological tests of his ability to fight injustice.",<br>
                   "Language": "English, Mandarin",<br>
                   "Country": "USA, UK",<br>
                   "Awards": "Won 2 Oscars. Another 146 wins & 142 nominations.",<br>
                   "Poster": "http://ia.media-imdb.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_SX300.jpg",<br>
                   "Metascore": "82",<br>
                   "imdbRating": "9.0",<br>
                   "imdbVotes": "1,652,832",<br>
                   "imdbID": "tt0468569",<br>
                   "Type": "movie",<br>
                   "Response": "True"<br>
                },<br>
                {  <br>
                   "Title": "Batman Begins",<br>
                   "Year": "2005",<br>
                   "Rated": "PG-13",<br>
                   "Released": "15 Jun 2005",<br>
                   "Runtime": "140 min",<br>
                   "Genre": "Action, Adventure",<br>
                   "Director": "Christopher Nolan",<br>
                   "Writer": "Bob Kane (characters), David S. Goyer (story), Christopher Nolan (screenplay), David S. Goyer (screenplay)",<br>
                   "Actors": "Christian Bale, Michael Caine, Liam Neeson, Katie Holmes",<br>
                   "Plot": "After training with his mentor, Batman begins his fight to free crime-ridden Gotham City from the corruption that Scarecrow and the League of Shadows have cast upon it.",<br>
                   "Language": "English, Urdu, Mandarin",<br>
                   "Country": "USA, UK",<br>
                   "Awards": "Nominated for 1 Oscar. Another 15 wins & 66 nominations.",<br>
                   "Poster": "http://ia.media-imdb.com/images/M/MV5BNTM3OTc0MzM2OV5BMl5BanBnXkFtZTYwNzUwMTI3._V1_SX300.jpg",<br>
                   "Metascore": "70",<br>
                   "imdbRating": "8.3",<br>
                   "imdbVotes": "972,584",<br>
                   "imdbID": "tt0372784",<br>
                   "Type": "movie",<br>
                   "Response": "True"<br>
                },<br>
                {<br>
                   "Title": "Avatar",<br>
                   "Year": "2009",<br>
                   "Rated": "PG-13",<br>
                   "Released": "18 Dec 2009",<br>
                   "Runtime": "162 min",<br>
                   "Genre": "Action, Adventure, Fantasy",<br>
                   "Director": "James Cameron",<br>
                   "Writer": "James Cameron",<br>
                   "Actors": "Sam Worthington, Zoe Saldana, Sigourney Weaver, Stephen Lang",<br>
                   "Plot": "A paraplegic marine dispatched to the moon Pandora on a unique mission becomes torn between following his orders and protecting the world he feels is his home.",<br>
                   "Language": "English, Spanish",<br>
                   "Country": "USA, UK",<br>
                   "Awards": "Won 3 Oscars. Another 80 wins & 121 nominations.",<br>
                   "Poster": "http://ia.media-imdb.com/images/M/MV5BMTYwOTEwNjAzMl5BMl5BanBnXkFtZTcwODc5MTUwMw@@._V1_SX300.jpg",<br>
                   "Metascore": "83",<br>
                   "imdbRating": "7.9",<br>
                   "imdbVotes": "876,575",<br>
                   "imdbID": "tt0499549",<br>
                   "Type": "movie",<br>
                   "Response": "True"<br>
                }<br>
];<br>
<br>
// Add your code below this line<br>
<br>
var filteredList;<br>
<br>
// Add your code above this line<br>
<br>
console.log(filteredList); 
  `,

  `8.Write your own Array.prototype.myFilter(), which should behave exactly like Array.prototype.filter(). You may use a for loop or the Array.prototype.forEach() method.<br>
  // the global Array<br>
var s = [23, 65, 98, 5];<br>
<br>
Array.prototype.myFilter = function(callback){<br>
  var newArray = [];<br>
  // Add your code below this line<br>
  <br>
  // Add your code above this line<br>
  return newArray;<br>
  <br>
};<br>
<br>
var new_s = s.myFilter(function(item){<br>
  return item % 2 === 1;<br>
});<br>
`,

  `9.Use the slice method in the sliceArray function to return part of the anim array given the provided beginSlice and endSlice indices. The function should return an array.<br>
  function sliceArray(anim, beginSlice, endSlice) {<br>
    // Add your code below this line<br>
    <br>
    <br>
    // Add your code above this line<br>
  }<br>
  var inputAnim = ["Cat", "Dog", "Tiger", "Zebra", "Ant"];
  sliceArray(inputAnim, 1, 3);`,

  `10.Rewrite the function nonMutatingSplice by using slice instead of splice. It should limit the provided cities array to a length of 3, and return a new array with only the first three items.<br>
  <br>
  Do not mutate the original array provided to the function.<br>
  function nonMutatingSplice(cities) {<br>
    // Add your code below this line<br>
    return cities.splice(3);<br>
    <br>
    // Add your code above this line<br>
  }<br>
  var inputCities = ["Chicago", "Delhi", "Islamabad", "London", "Berlin"];<br>
  nonMutatingSplice(inputCities);<br>
  `,

  `11.Use the concat method in the nonMutatingConcat function to concatenate attach to the end of original. The function should return the concatenated array.<br>
  function nonMutatingConcat(original, attach) {<br>
    // Add your code below this line<br>
    <br>
    <br>
    // Add your code above this line<br>
  }<br>
  var first = [1, 2, 3];<br>
  var second = [4, 5];<br>
  nonMutatingConcat(first, second);`,
  
  `12.Change the nonMutatingPush function so it uses concat to add newItem to the end of original instead of push. The function should return an array.<br>
  function nonMutatingPush(original, newItem) {<br>
    // Add your code below this line<br>
    return original.push(newItem);<br>
    <br>
    // Add your code above this line<br>
  }<br>
  var first = [1, 2, 3];<br>
  var second = [4, 5];<br>
  nonMutatingPush(first, second);`,

  `13.The variable watchList holds an array of objects with information on several movies. Use reduce to find the average IMDB rating of the movies directed by Christopher Nolan. <br>Recall from prior challenges how to filter data and map over it to pull what you need. You may need to create other variables, but save the final average into the variable averageRating.<br> Note that the rating values are saved as strings in the object and need to be converted into numbers before they are used in any mathematical operations.<br>
  // the global variable<br>
var watchList = [<br>
                 {  <br>
                   "Title": "Inception",<br>
                   "Year": "2010",<br>
                   "Rated": "PG-13",<br>
                   "Released": "16 Jul 2010",<br>
                   "Runtime": "148 min",<br>
                   "Genre": "Action, Adventure, Crime",<br>
                   "Director": "Christopher Nolan",<br>
                   "Writer": "Christopher Nolan",<br>
                   "Actors": "Leonardo DiCaprio, Joseph Gordon-Levitt, Ellen Page, Tom Hardy",<br>
                   "Plot": "A thief, who steals corporate secrets through use of dream-sharing technology, is given the inverse task of planting an idea into the mind of a CEO.",<br>
                   "Language": "English, Japanese, French",<br>
                   "Country": "USA, UK",<br>
                   "Awards": "Won 4 Oscars. Another 143 wins & 198 nominations.",<br>
                   "Poster": "http://ia.media-imdb.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_SX300.jpg",<br>
                   "Metascore": "74",<br>
                   "imdbRating": "8.8",<br>
                   "imdbVotes": "1,446,708",<br>
                   "imdbID": "tt1375666",<br>
                   "Type": "movie",<br>
                   "Response": "True"<br>
                },<br>
                {  <br>
                   "Title": "Interstellar",<br>
                   "Year": "2014",<br>
                   "Rated": "PG-13",<br>
                   "Released": "07 Nov 2014",<br>
                   "Runtime": "169 min",<br>
                   "Genre": "Adventure, Drama, Sci-Fi",<br>
                   "Director": "Christopher Nolan",<br>
                   "Writer": "Jonathan Nolan, Christopher Nolan",<br>
                   "Actors": "Ellen Burstyn, Matthew McConaughey, Mackenzie Foy, John Lithgow",<br>
                   "Plot": "A team of explorers travel through a wormhole in space in an attempt to ensure humanity's survival.",<br>
                   "Language": "English",<br>
                   "Country": "USA, UK",<br>
                   "Awards": "Won 1 Oscar. Another 39 wins & 132 nominations.",<br>
                   "Poster": "http://ia.media-imdb.com/images/M/MV5BMjIxNTU4MzY4MF5BMl5BanBnXkFtZTgwMzM4ODI3MjE@._V1_SX300.jpg",<br>
                   "Metascore": "74",<br>
                   "imdbRating": "8.6",<br>
                   "imdbVotes": "910,366",<br>
                   "imdbID": "tt0816692",<br>
                   "Type": "movie",<br>
                   "Response": "True"<br>
                },<br>
                {<br>
                   "Title": "The Dark Knight",<br>
                   "Year": "2008",<br>
                   "Rated": "PG-13",<br>
                   "Released": "18 Jul 2008",<br>
                   "Runtime": "152 min",<br>
                   "Genre": "Action, Adventure, Crime",<br>
                   "Director": "Christopher Nolan",<br>
                   "Writer": "Jonathan Nolan (screenplay), Christopher Nolan (screenplay), Christopher Nolan (story), David S. Goyer (story), Bob Kane (characters)",<br>
                   "Actors": "Christian Bale, Heath Ledger, Aaron Eckhart, Michael Caine",<br>
                   "Plot": "When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, the caped crusader must come to terms with one of the greatest psychological tests of his ability to fight injustice.",<br>
                   "Language": "English, Mandarin",<br>
                   "Country": "USA, UK",<br>
                   "Awards": "Won 2 Oscars. Another 146 wins & 142 nominations.",<br>
                   "Poster": "http://ia.media-imdb.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_SX300.jpg",<br>
                   "Metascore": "82",<br>
                   "imdbRating": "9.0",<br>
                   "imdbVotes": "1,652,832",<br>
                   "imdbID": "tt0468569",<br>
                   "Type": "movie",<br>
                   "Response": "True"<br>
                },<br>
                {  <br>
                   "Title": "Batman Begins",<br>
                   "Year": "2005",<br>
                   "Rated": "PG-13",<br>
                   "Released": "15 Jun 2005",<br>
                   "Runtime": "140 min",<br>
                   "Genre": "Action, Adventure",<br>
                   "Director": "Christopher Nolan",<br>
                   "Writer": "Bob Kane (characters), David S. Goyer (story), Christopher Nolan (screenplay), David S. Goyer (screenplay)",<br>
                   "Actors": "Christian Bale, Michael Caine, Liam Neeson, Katie Holmes",<br>
                   "Plot": "After training with his mentor, Batman begins his fight to free crime-ridden Gotham City from the corruption that Scarecrow and the League of Shadows have cast upon it.",<br>
                   "Language": "English, Urdu, Mandarin",<br>
                   "Country": "USA, UK",<br>
                   "Awards": "Nominated for 1 Oscar. Another 15 wins & 66 nominations.",<br>
                   "Poster": "http://ia.media-imdb.com/images/M/MV5BNTM3OTc0MzM2OV5BMl5BanBnXkFtZTYwNzUwMTI3._V1_SX300.jpg",<br>
                   "Metascore": "70",<br>
                   "imdbRating": "8.3",<br>
                   "imdbVotes": "972,584",<br>
                   "imdbID": "tt0372784",<br>
                   "Type": "movie",<br>
                   "Response": "True"<br>
                },<br>
                {<br>
                   "Title": "Avatar",<br>
                   "Year": "2009",<br>
                   "Rated": "PG-13",<br>
                   "Released": "18 Dec 2009",<br>
                   "Runtime": "162 min",<br>
                   "Genre": "Action, Adventure, Fantasy",<br>
                   "Director": "James Cameron",<br>
                   "Writer": "James Cameron",<br>
                   "Actors": "Sam Worthington, Zoe Saldana, Sigourney Weaver, Stephen Lang",<br>
                   "Plot": "A paraplegic marine dispatched to the moon Pandora on a unique mission becomes torn between following his orders and protecting the world he feels is his home.",<br>
                   "Language": "English, Spanish",<br>
                   "Country": "USA, UK",<br>
                   "Awards": "Won 3 Oscars. Another 80 wins & 121 nominations.",<br>
                   "Poster": "http://ia.media-imdb.com/images/M/MV5BMTYwOTEwNjAzMl5BMl5BanBnXkFtZTcwODc5MTUwMw@@._V1_SX300.jpg",<br>
                   "Metascore": "83",<br>
                   "imdbRating": "7.9",<br>
                   "imdbVotes": "876,575",<br>
                   "imdbID": "tt0499549",<br>
                   "Type": "movie",<br>
                   "Response": "True"<br>
                }<br>
];<br>
<br>
// Add your code below this line<br>
<br>
var averageRating;<br>
<br>
// Add your code above this line<br>
<br>
console.log(averageRating); `,

  `14.Use the sort method in the alphabeticalOrder function to sort the elements of arr in alphabetical order.<br>
  function alphabeticalOrder(arr) {<br>
    // Add your code below this line<br>
    <br>
    <br>
    // Add your code above this line<br>
  }<br>
  alphabeticalOrder(["a", "d", "c", "a", "z", "g"]);`,

  `15.Use the sort method in the nonMutatingSort function to sort the elements of an array in ascending order. The function should return a new array, and not mutate the globalArray variable.<br>
  var globalArray = [5, 6, 3, 2, 9];<br>
function nonMutatingSort(arr) {<br>
  // Add your code below this line<br>
  <br>
  <br>
  // Add your code above this line<br>
}<br>
nonMutatingSort(globalArray);`,

  `16.Use the split method inside the splitify function to split str into an array of words. The function should return the array. Note that the words are not always separated by spaces, and the array should not contain punctuation.<br>
  function splitify(str) {<br>
    // Add your code below this line<br>
    <br>
    <br>
    // Add your code above this line<br>
  }<br>
  splitify("Hello World,I-am code");`,

  `17.Use the join method (among others) inside the sentensify function to make a sentence from the words in the string str. <br>The function should return a string. For example, "I-like-Star-Wars" would be converted to "I like Star Wars". For this challenge, do not use the replace method.<br>
  function sentensify(str) {<br>
    // Add your code below this line<br>
    <br>
    <br>
    // Add your code above this line<br>
  }<br>
  sentensify("May-the-force-be-with-you");`,

  `18.Fill in the urlSlug function so it converts a string title and returns the hyphenated version for the URL. You can use any of the methods covered in this section, and don't use replace. Here are the requirements:<br>
  <br>
  The input is a string with spaces and title-cased words<br>
  <br>
  The output is a string with the spaces between words replaced by a hyphen (-)<br>
  <br>
  The output should be all lower-cased letters<br>
  <br>
  The output should not have any spaces<br>
  // the global variable<br>
var globalTitle = "Winter Is Coming";<br>
<br>
// Add your code below this line<br>
function urlSlug(title) {<br>
  <br>
  <br>
}<br>
// Add your code above this line<br>
<br>
var winterComing = urlSlug(globalTitle); // Should be "winter-is-coming"`,

  `19.Use the every method inside the checkPositive function to check if every element in arr is positive. The function should return a Boolean value.<br>
  function checkPositive(arr) {<br>
    // Add your code below this line<br>
    <br>
    <br>
    // Add your code above this line<br>
  }<br>
  checkPositive([1, 2, 3, -4, 5]);`,

  `20.Use the some method inside the checkPositive function to check if any element in arr is positive. The function should return a Boolean value.<br>
  function checkPositive(arr) {<br>
    // Add your code below this line<br>
    <br>
    <br>
    // Add your code above this line<br>
  }<br>
  checkPositive([1, 2, 3, -4, 5]);`,

  `21.Fill in the body of the add function so it uses currying to add parameters x, y, and z.<br>
  function add(x) {<br>
    // Add your code below this line<br>
    <br>
    <br>
    // Add your code above this line<br>
  }<br>
  add(10)(20)(30);`
];
