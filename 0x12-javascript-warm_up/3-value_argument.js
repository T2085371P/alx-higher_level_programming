#!/usr/bin/node
const noArg = process.argv[2];
if (noArg === undefined) {
  console.log('No argument found');
} else {
  console.log(`${noArg}`);
}
