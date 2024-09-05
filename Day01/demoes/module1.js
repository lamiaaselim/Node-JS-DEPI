// // // // case 01  => See Module Object
// let projectName = "MERN";
// let myName = "Lamiaa"
// module.exports.projectName = projectName;
// module.exports.projectHours = 40;
// console.log(module);
// console.log(projectName)
// console.log(myName)


// // // case 02
// let projectName = "MERN";
// module.exports.projectName=projectName;
// exports.projectHours = 30;
// exports.number = 35;
// console.log(module);

// // // // case 03
// // //defult export with commonJS syntax
module.exports = function () {
  console.log("main fucntion claled from module 1");
};

let projectName = "MERN"; 
module.exports.projectName=projectName;
module.exports.projectHours = 30;
module.exports.number = 35;
// console.log(module);


// //---------------- section2
// // //short cut for exports  without default export
// module.exports = function () {
//   console.log("main fucntion claled from module 1");
// };

// exports.projectName="MERN";
// exports.projectHours = 30;
// exports.number = 35;
// console.log(module);