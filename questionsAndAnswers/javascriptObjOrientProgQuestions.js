export var javascriptObjOrientProgQuestionArr = [
  `0.Create a dog object with name and numLegs properties, and set them to a string and a number, respectively.<br>
  let dog = {<br>
    <br>
  };`,

  `1.Print both properties of the dog object below to your console.<br>
  let dog = {<br>
    name: "Spot",<br>
    numLegs: 4<br>
  };<br>
  // Add your code below this line<br>
  
  `,

  `2.Using the dog object, give it a method called sayLegs. The method should return the sentence "This dog has 4 legs."<br>
  let dog = {<br>
    name: "Spot",<br>
    numLegs: 4,<br>
    <br>
  };<br>
  <br>
  dog.sayLegs();`,

  `3.Modify the dog.sayLegs method to remove any references to dog. Use the duck example for guidance.<br>
  let dog = {<br>
    name: "Spot",<br>
    numLegs: 4,<br>
    sayLegs: function() {return "This dog has " + dog.numLegs + " legs.";}<br>
  };<br>
  <br>
  dog.sayLegs();`,

  `4.Create a constructor, Dog, with properties name, color, and numLegs that are set to a string, a string, and a number, respectively.<br>

`,

  `5.Use the Dog constructor from the last lesson to create a new instance of Dog, assigning it to a variable hound.<br>
  function Dog() {<br>
    this.name = "Rupert";<br>
    this.color = "brown";<br>
    this.numLegs = 4;<br>
  }<br>
  // Add your code below this line<br>
  
  `,

  `6.Create another Dog constructor. This time, set it up to take the parameters name and color, and have the property numLegs fixed at 4. <br>Then create a new Dog saved in a variable terrier. Pass it two strings as arguments for the name and color properties.<br>
  function Dog() {<br>
    <br>
  }<br>
  
  
  `,

  `7.Create a new instance of the House constructor, calling it myHouse and passing a number of bedrooms. <br>Then, use instanceof to verify that it is an instance of House.<br>
  /* jshint expr: true */<br>
  <br>
function House(numBedrooms) {<br>
  this.numBedrooms = numBedrooms;<br>
}<br>
<br>
// Add your code below this line<br>

  `,

  `8.Add the own properties of canary to the array ownProps.<br>
  function Bird(name) {<br>
    this.name = name;<br>
    this.numLegs = 2;<br>
  }<br>
  <br>
  let canary = new Bird("Tweety");<br>
  let ownProps = [];<br>
  // Add your code below this line<br>
  
  
  
`,

  `9.Add a numLegs property to the prototype of Dog<br>
  function Dog(name) {<br>
    this.name = name;<br>
  }<br>
  
  <br>
  
  // Add your code above this line<br>
  let beagle = new Dog("Snoopy");`,

  `10.Add all of the own properties of beagle to the array ownProps.<br> Add all of the prototype properties of Dog to the array prototypeProps.<br>
  function Dog(name) {<br>
    this.name = name;<br>
  }<br>
  <br>
  Dog.prototype.numLegs = 4;<br>
  <br>
  let beagle = new Dog("Snoopy");<br>
  <br>
  let ownProps = [];<br>
  let prototypeProps = [];<br>
  <br>
  // Add your code below this line 
  `,

  `11.Write a joinDogFraternity function that takes a candidate parameter and, using the constructor property, return true if the candidate is a Dog, otherwise return false.<br>
  function Dog(name) {<br>
    this.name = name;<br>
  }<br>
  <br>
  // Add your code below this line<br>
  function joinDogFraternity(candidate) {<br>
    <br>
  }
  `,
  
  `12.Add the property numLegs and the two methods eat() and describe() to the prototype of Dog by setting the prototype to a new object.<br>
  function Dog(name) {<br>
    this.name = name; <br>
  }<br>
  <br>
  Dog.prototype = {<br>
    // Add your code below this line<br>
    <br>
  };`,

  `13.Define the constructor property on the Dog prototype.<br>
  function Dog(name) {<br>
    this.name = name; <br>
  }<br>
  <br>
  // Modify the code below this line<br>
  Dog.prototype = {<br>
    <br>
    numLegs: 2, <br>
    eat: function() {<br>
      console.log("nom nom nom"); <br>
    }, <br>
    describe: function() {<br>
      console.log("My name is " + this.name); <br>
    }<br>
  };`,

  `14.Use isPrototypeOf to check the prototype of beagle.<br>
  function Dog(name) {<br>
    this.name = name;<br>
  }<br>
  <br>
  let beagle = new Dog("Snoopy");<br>
  <br>
  // Add your code below this line<br>
  
  `,

  `15.Modify the code to show the correct prototype chain.<br>
  function Dog(name) {<br>
    this.name = name;<br>
  }<br>
  <br>
  let beagle = new Dog("Snoopy");<br>
  <br>
  Dog.prototype.isPrototypeOf(beagle);  // => true<br>
  <br>
  // Fix the code below so that it evaluates to true<br>
  ???.isPrototypeOf(Dog.prototype);<br>
  `,

  `16.The eat method is repeated in both Cat and Bear. Edit the code in the spirit of DRY by moving the eat method to the Animal supertype.<br>
  function Cat(name) {<br>
    this.name = name; <br>
  }<br>
  <br>
  Cat.prototype = {<br>
    constructor: Cat, <br>
    eat: function() {<br>
      console.log("nom nom nom");<br>
    }<br>
  };<br>
  <br>
  function Bear(name) {<br>
    this.name = name; <br>
  }<br>
  <br>
  Bear.prototype = {<br>
    constructor: Bear, <br>
    eat: function() {<br>
      console.log("nom nom nom");<br>
    }<br>
  };<br>
  <br>
  function Animal() { }<br>
  <br>
  Animal.prototype = {<br>
    constructor: Animal,<br>
    <br>
  };`,

  `17.Use Object.create to make two instances of Animal named duck and beagle.<br>
  function Animal() { }<br>
  <br>
Animal.prototype = {<br>
  constructor: Animal, <br>
  eat: function() {<br>
    console.log("nom nom nom");<br>
  }<br>
};<br>
<br>
// Add your code below this line<br>
<br>
let duck; // Change this line<br>
let beagle; // Change this line<br>
<br>
duck.eat(); // Should print "nom nom nom"<br>
beagle.eat(); // Should print "nom nom nom" `,

  `18.Modify the code so that instances of Dog inherit from Animal.<br>
  function Animal() { }<br>
  <br>
Animal.prototype = {<br>
  constructor: Animal,<br>
  eat: function() {<br>
    console.log("nom nom nom");<br>
  }<br>
};<br>
<br>
function Dog() { }<br>
<br>
// Add your code below this line<br>

<br>
let beagle = new Dog();<br>
beagle.eat();  // Should print "nom nom nom"`,

  `19.Fix the code so duck.constructor and beagle.constructor return their respective constructors.<br>
  function Animal() { }<br>
function Bird() { }<br>
function Dog() { }<br>
<br>
Bird.prototype = Object.create(Animal.prototype);<br>
Dog.prototype = Object.create(Animal.prototype);<br>
<br>
// Add your code below this line<br>
<br>
<br>

let duck = new Bird();<br>
let beagle = new Dog();`,

  `20.Add all necessary code so the Dog object inherits from Animal and the Dog's prototype constructor is set to Dog. <br> Then add a bark() method to the Dog object so that beagle can both eat() and bark(). <br>The bark() method should print "Woof!" to the console.<br>
  function Animal() { }<br>
Animal.prototype.eat = function() { console.log("nom nom nom"); };<br>
<br>
function Dog() { }<br>
<br>
// Add your code below this line<br>

<br>
<br>

// Add your code above this line<br>
<br>
let beagle = new Dog();<br>
<br>
beagle.eat(); // Should print "nom nom nom"<br>
beagle.bark(); // Should print "Woof!"`,

  `21.Override the fly() method for Penguin so that it returns "Alas, this is a flightless bird."<br>
  function Bird() { }<br>
  <br>
Bird.prototype.fly = function() { return "I am flying!"; };<br>
<br>
function Penguin() { }<br>
Penguin.prototype = Object.create(Bird.prototype);<br>
Penguin.prototype.constructor = Penguin;<br>
<br>
// Add your code below this line<br>
<br>

<br>
// Add your code above this line<br>
<br>
let penguin = new Penguin();<br>
console.log(penguin.fly());`,

  `22.Create a mixin named glideMixin that defines a method named glide. <br>Then use the glideMixin to give both bird and boat the ability to glide.<br>
  let bird = {<br>
    name: "Donald",<br>
    numLegs: 2<br>
  };<br>
  <br>
  let boat = {<br>
    name: "Warrior",<br>
    type: "race-boat"<br>
  };<br>
  <br>
  // Add your code below this line<br>
  <br>
  `,

  `23.Change how weight is declared in the Bird function so it is a private variable.<br> Then, create a method getWeight that returns the value of weight.<br>
  function Bird() {<br>
    this.weight = 15;<br>
    <br>
    <br>
  }`,

  `24.Rewrite the function makeNest and remove its call so instead it's an anonymous immediately invoked function expression (IIFE).<br>
  function makeNest() {<br>
    console.log("A cozy nest is ready");<br>
  }<br>
  <br>
  makeNest(); `,

  `25.Create a module named funModule to wrap the two mixins isCuteMixin and singMixin. funModule should return an object.<br>
  let isCuteMixin = function(obj) {<br>
    obj.isCute = function() {<br>
      return true;<br>
    };<br>
  };<br>
  let singMixin = function(obj) {<br>
    obj.sing = function() {<br>
      console.log("Singing to an awesome tune");<br>
    };<br>
  };`
];
