// npm = global command, comes with node
// npm --version

// local dependency - use it in this particular object
// npm i <packageName>

// global dependency - use it in any object
// npm install -g <packageName>
// sudo install -g <packageName> (mac)

// package.json - manifest file (stores important info about project/package)
// 1st way manual approach )create package.json in the root, create properties etc)
// 2nd way npm init ( step by step, press enter to skip)
// 3rd way npm init -y (everything in default)


const _ = require('lodash');

const items = [1,[2,[3,[4]]]];
const newItems = _.flattenDeep(items);
console.log(newItems);