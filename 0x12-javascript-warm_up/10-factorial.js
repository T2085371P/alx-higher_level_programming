#!/usr/bin/node
function factorial (a) {
<<<<<<< HEAD
	  if ((Number.isNaN(a)) || (a === 1)) {
		      return 1;
		    }
	  return factorial(a - 1) * a;
=======
  if ((Number.isNaN(a)) || (a === 1)) {
    return 1;
  }
  return factorial(a - 1) * a;
>>>>>>> e40e274cee17ac00a5acd16876e98cc4a5d9dfa9
}

console.log(factorial(parseInt(process.argv[2])));
