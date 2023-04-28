function Dog(name, breed, weight) {
    this.name = name;
    this.breed = breed;
    this.weight = weight;
}

let fido = new Dog('Fido', 'Mixed', 38);
let fluffy = new Dog('Fluffy', 'Poodle', 30);
let sport = new Dog('Spot', 'Chihuahua', 10);

let dogs = [fido, fluffy, sport];

for (let i = 0; i < dogs.length; i++) {
    let size = 'small';

    if (dogs[i].weight > 10) {
        size = 'large';
    }
    console.log('Dog: ' + dogs[i].name + ' is a ' + size + ' ' + dogs[i].breed);
}

// Fido is a large Mixed;
// Fluffy is a large Poodle;
// Spot is a small Chihuahua;

// 1. operator new creates a new empty object;
// 2. new adds the link to the new object to this;
// 3. arguments are provided to parametrs;
// 4. functon is called,the body of a function is executed;
// 5. after function is called, new returns this (link to a new created object);