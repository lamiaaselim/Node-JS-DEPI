// // case 01 without alias
// import { x, arr, testFunc } from "./file.js";

// import {x, arr, testFunc } from "./file.js"
// console.log(arr);
// console.log(x);
// testFunc()

// console.log(arr);
// testFunc();

// // case 02 with alias
// import { x, arr, testFunc as t } from "./file.js";

// console.log(x);
// console.log(arr);
// t();

// // // case 03 with named exports
// import { arr, testFunc, myNum } from "./file.js";
// console.log(myNum);

// // case 04 Don't put defualt export with named exports
// import { sayWelcom ,x, arr } from "./file.js"; // Error

// // Correct
// import sayWelcom, { x, arr } from "./file.js"; // Error
// sayWelcom();


// // any name
// import a, { x, arr } from "./file.js"; 

// a()


// // // Import all
import * as all from "./file.js"; 

console.log(all)

// console.log(all.x)