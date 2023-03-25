#!/usr/bin/node
<<<<<<< HEAD
const arg = process.argv[2];
const num = parseInt(arg);
if (typeof num !== 'number' || isNaN(num)) {
	  console.log('Not a number');
} else {
	  console.log('My number:', num);
=======
const number = parseInt(process.argv[2]);
if (Number.isNaN(number)) {
  console.log('Not a number');
} else {
  console.log('My number: ' + number);
>>>>>>> e40e274cee17ac00a5acd16876e98cc4a5d9dfa9
}
