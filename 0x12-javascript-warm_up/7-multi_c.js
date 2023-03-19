#!/usr/bin/node
const myVar = 'C is fun';
const x = process.argv[2];
const num = parseInt(x);
if (typeof num !== 'number' || isNaN(num)) {
	  console.log('Missing number of occurrences');
} else {
	  for (let i = 0; i < num; i++) {
		      console.log(myVar);
		    }
}
