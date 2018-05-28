function myfunction() {
  console.log("Hello");
}

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

// remove item in the middle of the array
// let's remove the 4th item in the array
/*
  splice method takes two argument, position and number.
  The first argument (position) is the index of item you want to start from
  and the second argument (number) is the number of item you want to remove
*/
myFriends.splice(3, 1);
console.log('After removing the 4th item: ', myFriends);

// create a copy of the array
var newFriends;
newFriends = myFriends.slice();
console.log('Copy of friends list is: ', newFriends);
