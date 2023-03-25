#!/usr/bin/node
<<<<<<< HEAD
const sizeOfSquare = process.argv[2];
const square = parseInt(sizeOfSquare);
if (typeof square !== 'number' || isNaN(square)) {
	  console.log('Missing size');
} else {
	  for (let i = 0; i < sizeOfSquare; i++) {
		      console.log('X'.repeat(sizeOfSquare));
		    }
=======
const size = parseInt(process.argv[2]);
if (Number.isNaN(size)) {
  console.log('Missing size');
} else {
  for (let i = 0, s; i < size; i++) {
    s = '';
    for (let j = 0; j < size; j++) {
      s += 'X';
    }
    console.log(s);
  }
>>>>>>> e40e274cee17ac00a5acd16876e98cc4a5d9dfa9
}
