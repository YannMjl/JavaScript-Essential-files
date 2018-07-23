console.log("Hello World");

var date = new Date();
document.body.innerHTML = "<h1> Today's day is " + (date.getMonth() + 1) + "/" +
  date.getDate() + "/" + date.getFullYear() + "</h1>";

var a = 3;
var b = 5;
var sum = a + b;
var theNumbermatched;

var humanSum = "The value of a is: " + a + ". The value of b is: " + b +
  ". The Sum of a and b is equal to: " + sum + ".";

console.log(humanSum);

if (a == b) {
  theNumbermatched = true;
} else {
  theNumbermatched = false;
}

console.log('Do the numbers matched? ', theNumbermatched);

// tenary operator
a == b ? console.log('The number matched') : console.log("No Matched");

// array
var myFriends;
var myNumbers;
// initial array
myFriends = ['Marck', 'John', 'Paul', 'Lena', 'Erick', 'Franscine'];
// or
myNumbers = new Array(4, 6, 8, 2, 5, 7, 1, 3);

// retrieve value in the array from index
console.log('The first value of my numbers is: ', myNumbers[0]);

// properties and methods in arrays
/*
  Property: meta information about the object
  method: function that belong to the object
*/
console.log('My friends are: ', myFriends);

// get the property of an abject by name
console.log('The number of my Friends is: ', myFriends.length);

// reverse the array
myFriends.reverse();
console.log('Reverse array: ', myFriends);

// remove the first element in the array
myFriends.shift();
console.log('After removing the first item in the array:', myFriends);

// add items at the beginning of the arrays
myFriends.unshift('kelsey', 'Julia');
console.log('After adding items: ', myFriends);

// remove the last item of the array
myFriends.pop();
console.log('After removing the last item in the array: ', myFriends);

// add items at the end of the array
myFriends.push('Jeremy', 'Andrew');
console.log('After adding items at the end of the array: ', myFriends);

/*
  remove item in the middle of the array

  splice method takes two argument, position and number.
  The first argument (position) is the index of item you want to start from
  and the second argument (number) is the number of item you want to remove.

  let's remove the 4th item in the array
*/

myFriends.splice(3, 1);
console.log('After removing the 4th item: ', myFriends);

// create a copy of the array
var newFriends;
newFriends = myFriends.slice();
console.log('Copy of friends list is: ', newFriends);

// return the first item that match a search
// let's search for the name John on my friend list
var result = newFriends.indexOf('John', 0); // start the search at index 0
console.log('The result from the item searched is: ', newFriends[result]);

// output the item of an array in single string
var arrayString = newFriends.join(', '); // add separator in the join method
console.log('String from array is: ', arrayString);

/* --------------------------------------------------------------------------- *
 Functions in JavaScript
----------------------------------------------------------------------------- */
function helloWord() {
  console.log("Hello, this a javaScript function");
}

function multiply(a, b) {
  var result = a * b;
  console.log(result);
  return result;
}

//let call those Functions and run them on the JavaScript
helloWord();

// the return value from the function multiply is capture and saved in
// mutliplied variable
var multiplied = multiply(5, 3);

// anonymous functions are stored in a variable and invoked by calling
// the variable as a functions
var divided = function() {
  var result = 6 / 5;
  console.log("6 divided by 5 is: ", result);
};
divided();

// Immediatly invoked functions expression run as soon as the browser finds it
(function() {
  var result = 15 / 6.5;
  console.log("15 divided by 6.5 is: ", result);
}());

// return a value from a fucntion
function findBiggerFraction(a, b) {
  var result;
  a > b ? result = ["firstFraction", a] : result = ["secondFraction", b];
  return result;
}

var findBig = findBiggerFraction(7 / 15, 13 / 25);
console.log(findBig);

// make sense of object

// create an object
var myAddress = new Object();

myAddress.city = "Minneapolis";
myAddress.state = "Minnesota";
myAddress.country = "United States";
myAddress.zipcode = 58455;
console.log(myAddress);

// or, create myInfo object
var myInfo = {
  firstName: "Yann",
  lastName: "Mulonda",
  email: "example@email.com"
};
console.log(myInfo);
console.log("My first name is", myInfo.firstName);

// object constructor
function myCar(make, model, year, color) {
  this.make = make;
  this.model = model;
  this.year = year;
  this.color = color;
}
// now I can have more instances of the car
var myCollegeCar = new myCar("Ford", "Escape", 2004, "gray");
var myCurrentCar = new myCar("Dodge", "Challenger", 2017, "red");

console.log(myCollegeCar);
console.log(myCurrentCar);

// or create an array of myCar
var myFavoriteCars = [
  new myCar("Ford", "Shelby", 1960, "blue"),
  new myCar("Dodge", "Challenger Demon", 2018, "red"),
  new myCar("Dodge", "Charger", 2018, "blue"),
  new myCar("Land Rover", "Range Rover Sport", 2018, "black")
];

console.log(myFavoriteCars);

// Closures
function doSomeMath() {
  var firstNumber = 5;
  var secondNumber = 4;
  var sum = firstNumber + secondNumber;

  return sum;
}

var sumResult = doSomeMath();

console.log("The result is: ", sumResult);
