//const fs = require('fs');
const {readFileSync, writeFileSync} = require('fs'); //destructure both of them
console.log('start');
const first = readFileSync('./content/first.txt', 'utf8');
const second = readFileSync('./content/second.txt', 'utf8');

//console.log(first,second);

writeFileSync('./content/result-sync.txt', `Here is the result ${first},${second}`, {flag:'a'});
//a for append

console.log('done with this tast');
console.log('starting the next one');

