//https://www.youtube.com/watch?v=W6NZfCO5SIk&t=1001s
// Logging something on a console
//Script is kept a the bottom of the HTML so that browser does not get busy rendering the js at the top
console.log('Hello World');
let name1 = 'Abhi';
console.log(name);

//To declare a constant
const interestRate = 0.3;
console.log(interestRate);

//Primitive Types - Strings, Numbers, Boolean, Undefined, Null

let myName2 = "Abhi"; //String Literal
let age1 = 30; //Number Literal
              //There are no floats in JS, all numbers are just numbers
let isApproved = false //Boolean Literal
let firstName = undefined; //Not very common
let selectedColor = null //Used to explicitly to clear the value of a variable

//JS is a dynamic language
//Static language the type of a variable cannot be changed

//Reference Types - Objects, Arrays, Functions

//OBJECTS
//This is called an object literal, this is how you define a object. You assign a key value pairs to it

let person = {
    name: 'Abhi',
    age: 30
};

console.log(person);

//we want to change the name of the person, 2 ways

//Dot Notation
person.name = 'John';
console.log(person.name);

//Bracket Notation
person["name"] = 'Mary';
console.log(person.name);

//Which is better, Dot or Bracket ?
//Dot is more concise and shorter so default.
//Bracket is used when we don't know the name of target property. When user selects the property, hence can be changed in runtime

let selection = "name";
person[selection] = "Mary"

//ARRAYS - When we are dealing with a list of objects (Items in a shopping cart)
//It is a kind of data structure that is used to represent a list of items
let selectedColors = ['red','blue']; //How to declare an array
console.log(selectedColors);

//Arrays have index so can be accessed like that as well
console.log(selectedColors[1])

//Javascript is a dynamic language so the length of this array "selectedColors" ans also the type of the object can be changed
selectedColors[2] = 'green';
console.log(selectedColors);

//We can also change the type of objects in an array
selectedColors[2] = 3;
console.log(selectedColors);

//Properties of array
console.log(selectedColors.length)

//FUNCTIONS - Is a type of select statement that performs tasks
function greet(name,lastName){
    //This is the body of the function
    console.log('Hello '+ name+" "+lastName+' from the function');
}

greet('John');
greet('Mary','Smith');

function square(number){
    return number * number;
}

console.log(square(7));

//OBJECT ORIENTED PROGRAMMMING IN JS
//https://www.youtube.com/watch?v=PFmuCDHHpwk&list=PLTjRvDozrdlxEIuOBZkMAK5uiqp8rHUax&index=3

//Encapsulation - Reduce complexity, increase reusability
//Abstraction - Reduce complexity, isolate impact of change
//Inheritence - Eliminate redundant code
//Polymorphism - Refactor ugly switch/case statements

//ENCAPSULATION

let baseSalary = 30000;
let overtime = 10;
let rate = 20;

function getWage(baseSalary, overtime, rate){
    return baseSalary + (overtime * rate)
}

//Below is an example of encapsulation
//Benefit is that functions have fewers and fewers parameters
let employee = {
    baseSalary: 30000,
    overtime: 10,
    rate: 20,
    getWage: function(){
        return this.baseSalary + (this.overtime * this.rate)
    }
};

console.log(employee.getWage());

//ABSTRACTION

//ADD MORE STUFF

//----------------------------------------------------------

//OBJECTS

//VIMP
//Circle is an object
//It has 3 members radius, location, draw
//It a member is a function then it is a method
//It has 2 properties radius and location
//Property is used to hold values, function is used to hold logic
/*
const circle = {
    radius: 1,
    location: {
        x: 1,
        y: 1
    },
    draw: function(){
        console.log('draw');
    }
};

circle.draw();
console.log(circle.radius);
*/
//If an object has 1 more methods they are referred as behaviour

//Above is an object literal which is a simple way to define an object but we can also define using factories and constructors

//How to create a factory function

function createCircle(radius){
    return {
        radius,
        draw: function(){
            console.log('draw')
        }
    }
}

const circle = createCircle(1);
circle.draw();
