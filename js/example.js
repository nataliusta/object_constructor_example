function Cat (name, breed, weight) {
    this.name = name;
    this.breed = breed;
    this.weight = weight;
}

let meow = new Cat('Meow', 'Siamese', 10);
let whiskers = new Cat('Whiskers', 'Mixed', 12);


function Dog(name, breed, weight) { // object constructor
    this.name = name;
    this.breed = breed;
    this.weight = weight;
    this.bark = function() { // method 
        if (this.weight > 25) {
            alert(this.name + ' says Woof!');
        } else { 
            alert(this.name + ' says Yıp!');
        }
    };
}

let fido = new Dog('Fido', 'Mixed', 38);
let fluffy = new Dog('Fluffy', 'Poodle', 30);
let sport = new Dog('Spot', 'Chihuahua', 10);

let dogs = [meow, whiskers, fido, fluffy, sport];

for (let i = 0; i < dogs.length; i++) {
    let size = 'small';

    if (dogCatcher(dogs[i])) {
        console.log(dogs[i].name + ' is a dog!');
    }
}

function dogCatcher(obj) {
    if (obj instanceof Dog) { // return (obj instanceof Dog)
        return true;
    } else {
        return false;
    }
}

// Fido is a large Mixed;
// Fluffy is a large Poodle;
// Spot is a small Chihuahua;

// 1. operator new creates a new empty object;
// 2. new adds the link to the new object to this;
// 3. arguments are provided to parametrs;
// 4. functon is called,the body of a function is executed;
// 5. after function is called, new returns this (link to a new created object);