#!/usr/bin/node
<<<<<<< HEAD
const myVar = 'C is fun';
const x = process.argv[2];
const num = parseInt(x);
if (typeof num !== 'number' || isNaN(num)) {
	  console.log('Missing number of occurrences');
} else {
	  for (let i = 0; i < num; i++) {
		      console.log(myVar);
		    }
=======
let i = parseInt(process.argv[2]);
if (Number.isNaN(i)) {
  console.log('Missing number of occurrences');
} else {
  while (i > 0) {
    console.log('C is fun');
    i--;
  }
>>>>>>> e40e274cee17ac00a5acd16876e98cc4a5d9dfa9
}
