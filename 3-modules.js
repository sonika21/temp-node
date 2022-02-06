//CommonJS(NOde uses this library), every file in node is module(by default)
//Modules - encapsulated Code (only sharing minimum)
//always start with './' for modules

const names = require('./4-names')
const sayHi = require('./5-utils')
const data = require('./6-alternative-flavor')
require('./7-mind-grenade')

sayHi('Susan')
sayHi(names.john)
sayHi(names.peter)