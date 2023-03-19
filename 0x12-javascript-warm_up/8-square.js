#!/usr/bin/node
const sizeOfSquare = process.argv[2];
const square = parseInt(sizeOfSquare);
if (typeof square !== 'number' || isNaN(square)) {
	  console.log('Missing size');
} else {
	  for (let i = 0; i < sizeOfSquare; i++) {
		      console.log('X'.repeat(sizeOfSquare));
		    }
}
