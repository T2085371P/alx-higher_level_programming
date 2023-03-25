#!/usr/bin/node
<<<<<<< HEAD
const argument = process.argv.slice(2);
if (argument.length === 0) {
	  console.log('No argument');
} else if (argument.length === 1) {
	  console.log('Argument found');
} else {
	  console.log('Arguments found');
=======
const noArg = process.argv[2];
if (noArg === undefined) {
  console.log('No argument found');
} else {
  console.log(`${noArg}`);
>>>>>>> e40e274cee17ac00a5acd16876e98cc4a5d9dfa9
}
