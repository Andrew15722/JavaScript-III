
/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. Window binding is when the this keyword defaults to the window object.
* 2. Implicit binding is when this is implicitly bound to whatever is to the left of where its being invoked.
* 3. New binding is invoking a function with the new keyword. Which binds the this keyword from inside that function to a new object.
* 4. Explicit binding is when you use a this keyword outside of an object, maybe inside of a function instead and use that this keyword in the context of whatever object you pass into that function.
*
* write out a code example of each explanation above
*/

// Principle 1 
// code example for Window Binding
let color = function() {
    console.log(this.color);
}
// window.color = "blue";   
// color();

// Principle 2
// code example for Implicit Binding
let me = {
    name:'Andrew',
    age: 23,
    city:'Phoenix',
    sayAge: function () {
        console.log('implicit binding = '  + this.age); // <== implicit binding here 
    }
} 
// console.log(me.sayAge());
// console.log(me.name);

// Principle 3
// code example for New Binding
let Dog = function(breed, color, size) { //making a constructor function here. so the d in Dog is capitalized.
    this.breed = breed,
    this.color = color, 
    this.size = size
}   

let jack = new Dog('German Shepherd', 'Brown and Black', 'big')
// console.log(jack.breed)  //<== new binding here

// Principle 4
// code example for Explicit Binding
let sayAge = function (hobby1, hobby2, hobby3) {
    console.log(`I'm ${this.age} and I love ${hobby1}, ${hobby2}, ${hobby3} and I live in ${this.city}.`);
};

let hobbies =['running', 'lifting weights', 'coding']
sayAge.call(me, ...hobbies);  // <== explicit binding here 

