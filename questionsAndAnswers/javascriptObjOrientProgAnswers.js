export var javascriptObjOrientProgAnswerArr = [
  {
    A0: `let dog = {
      name: "George",
      numLegs: 4
    };
  `.replace(/\s+/g, "")
  },

  {
    A1: `let dog = {
      name: "Spot",
      numLegs: 4
    };
    console.log(dog.name);
    console.log(dog.numLegs);`.replace(/\s+/g, "")
  },

  { A2: `let dog = {
    name: "Spot",
    numLegs: 4,
    sayLegs: function() {
      return "This dog has " + dog.numLegs + " legs.";
    }
  };
  
  dog.sayLegs();`.replace(/\s+/g, "") },

  {
    A3: `let dog = {
      name: "Spot",
      numLegs: 4,
      sayLegs: function() {return "This dog has " + this.numLegs + " legs.";}
    };
    
    dog.sayLegs();
`.replace(/\s+/g, "")
  },

  {
    A4: `function Dog() {
      this.name = "Geogre",
      this.color = "White",
      this.numLegs = 4;
    }`.replace(/\s+/g, "")
  },

  {
    A5: `function Dog() {
      this.name = "Rupert";
      this.color = "brown";
      this.numLegs = 4;
    }
    let hound = new Dog();
`.replace(/\s+/g, "")
  },

  {
    A6: `function Dog(name, color) {
      this.name = name;
      this.color = color;
      this.numLegs = 4;
    }
    let terrier = new Dog("George","White");
`.replace(/\s+/g, "")
  },

  {
    A7: `
    function House(numBedrooms) {
      this.numBedrooms = numBedrooms;
    }
    let myHouse = new House(5);
    myHouse instanceof House;
`.replace(/\s+/g, "")
  },

  {
    A8: `function Bird(name) {
      this.name = name;
      this.numLegs = 2;
    }
    let canary = new Bird("Tweety");
    let ownProps = [];
    for(let property in canary) {
      if(canary.hasOwnProperty(property)) {
        ownProps.push(property);
      }
    }
`.replace(/\s+/g, "")
  },

  {
    A9: `function Dog(name) {
      this.name = name;
    }
    
    Dog.prototype.numLegs = 4;
    
    let beagle = new Dog("Snoopy");`.replace(/\s+/g, "")
  },

  {
    A10: `function Dog(name) {
      this.name = name;
    }
    
    Dog.prototype.numLegs = 4;
    
    let beagle = new Dog("Snoopy");
    
    let ownProps = [];
    let prototypeProps = [];
    
    for (let property in beagle) {
      if(Dog.hasOwnProperty(property)) {
        ownProps.push(property)
      }
      else {
        prototypeProps.push(property)
      }
    }`.replace(/\s+/g, "")
  },

  { A11: `function Dog(name) {
    this.name = name;
  }
  function joinDogFraternity(candidate) {
    if(candidate.constructor === Dog) {
      return true;
    }
    else {
      return false;
    }
  }`.replace(/\s+/g, "") },

  
  { A12: `function Dog(name) {
    this.name = name; 
  }
  
  Dog.prototype = {
    numLegs: 2,
    eat(){
      console.log('nom nom nom');
    },
    describe(){
      console.log("My name is " + this.name);
    }
  };`.replace(/\s+/g, "") },

  { A13: `function Dog(name) {
    this.name = name; 
  }
  Dog.prototype = {
  
    constructor: Dog, 
  
    numLegs: 2, 
    eat: function() {
      console.log("nom nom nom"); 
    }, 
    describe: function() {
      console.log("My name is " + this.name); 
    }
  };`.replace(/\s+/g, "") },

  { A14: `function Dog(name) {
    this.name = name;
  }
  let beagle = new Dog("Snoopy");
  Dog.prototype.isPrototypeOf(beagle);
  `.replace(/\s+/g, "") },

  {
    A15: `function Dog(name) {
      this.name = name;
    }
    
    let beagle = new Dog("Snoopy");
    
    Dog.prototype.isPrototypeOf(beagle);
    Object.prototype.isPrototypeOf(Dog.prototype); `.replace(/\s+/g, "")
  },
  {
    A16: `function Cat(name) {
      this.name = name; 
    };
    
    Cat.prototype = {
      constructor: Cat
    };
    
    function Bear(name) {
      this.name = name; 
    };
    
    Bear.prototype = {
      constructor: Bear
    };
    
    function Animal() { };
    
    Animal.prototype = {
      constructor: Animal,
      eat: function() {
        console.log("nom nom nom");
      }
    };`.replace(/\s+/g, "")
  },

  {
    A17: `function Animal() { }

    Animal.prototype = {
      constructor: Animal, 
      eat: function() {
        console.log("nom nom nom");
      }
    };
    
    let duck = Object.create(Animal.prototype); 
    let beagle = Object.create(Animal.prototype);; 
    
    duck.eat(); 
    beagle.eat(); 
`.replace(/\s+/g, "")
  },

  {
    A18: `
    function Animal() { }

Animal.prototype = {
  constructor: Animal,
  eat: function() {
    console.log("nom nom nom");
  }
};

function Dog() { }
Dog.prototype = Object.create(Animal.prototype);

let beagle = new Dog();
beagle.eat();  
`.replace(/\s+/g, "")
  },

  {
    A19: `function Animal() { }
    function Bird() { }
    function Dog() { }
    
    Bird.prototype = Object.create(Animal.prototype);
    Dog.prototype = Object.create(Animal.prototype);
    Bird.prototype.constructor = Bird;
    Dog.prototype.constructor = Dog;
    
    let duck = new Bird();
    let beagle = new Dog();
`.replace(/\s+/g, "")
  },

  {
    A20: `function Animal() { }
    Animal.prototype.eat = function() { console.log("nom nom nom"); };
    
    function Dog() { }
    Dog.prototype = Object.create(Animal.prototype);
    Dog.prototype.constructor = Dog;
    Dog.prototype.bark = function() {
        console.log("Woof woof!");
    };
    
    let beagle = new Dog();
    
    beagle.eat(); 
    beagle.bark(); `.replace(
      /\s+/g,
      ""
    )
  },

  {
    A21: `function Bird() { }

    Bird.prototype.fly = function() { return "I am flying!"; };
    
    function Penguin() { }
    Penguin.prototype = Object.create(Bird.prototype);
    Penguin.prototype.constructor = Penguin;
    Penguin.prototype.fly = function() {
        return  "Alas, this is a flightless bird.";
    };
    let penguin = new Penguin();
    console.log(penguin.fly());`.replace(
      /\s+/g,
      ""
    )
  },

  {
    A22: `let bird = {
      name: "Donald",
      numLegs: 2
    };
    
    let boat = {
      name: "Warrior",
      type: "race-boat"
    };
    let glideMixin = function(obj) {
        obj.glide = function() {
            console.log("Gliding!");
        }
    };
    glideMixin(bird);
    glideMixin(boat);`.replace(
      /\s+/g,
      ""
    )
  },

  {
    A23: `function Bird() {
      let weight = 15;
      
      this.getWeight = function() {
        return weight;
      };
      
    }`.replace(
      /\s+/g,
      ""
    )
  },

  {
    A24: `(function() {
      console.log("A cozy nest is ready");
    })();`.replace(/\s+/g, "")
  },

  {
    A25: `let funModule = (function() {
      return {
        isCuteMixin: function(obj) {
          obj.isCute = function() {
            return true;
          };
        },
        singMixin: function(obj) {
          obj.sing = function() {
             console.log("Singing to an awesome tune");
          };
        }
      }
    })();`.replace(/\s+/g, "")
  }
];
