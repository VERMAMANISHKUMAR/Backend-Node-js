//how to  import a Es6 modules
//## Single function import in ES6 like this
// import * as arithematicModule from './arithematic.mjs'
// console.log(arithematicModule.sum(56,88))

//## multipal function export in ES6 like this

import  {sum,multiply} from './arithematic.mjs'
console.log("this is sum :- "+sum(7,8),"this is multiply :- "+ multiply(43,78));
