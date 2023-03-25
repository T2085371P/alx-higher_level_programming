#!/usr/bin/node
const myObject = {
<<<<<<< HEAD
	  type: 'object',
	  value: 12
};
console.log(myObject);
myObject.incr = function () {
	  this.value++;
=======
  type: 'object',
  value: 12
};
console.log(myObject);
myObject.incr = function () {
  this.value++;
>>>>>>> e40e274cee17ac00a5acd16876e98cc4a5d9dfa9
};
myObject.incr();
console.log(myObject);
myObject.incr();
console.log(myObject);
myObject.incr();
console.log(myObject);
