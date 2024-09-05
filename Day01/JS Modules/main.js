/* ============ Asynchronous vs Synchronous Programming ============= */
/*


  Asynchronous vs Synchronous Programming
  - Meaning

  Synchronous 1  - 2 - 3 - 4 - 5 - 6 - 7 - 8 - 9
  - Operations Runs in Sequence
  - Each Operation Must Wait For The Previous One To Complete
  - Real Example => Queue 

  Asynchronous
  - Operations Runs In Parallel
  - This Means That An Operation Can Occur while Another One Is Still Being Processed
  - Real Example => Resturant 

*/

// // // Synchronous
// console.log("1");
// console.log("2");
// window.alert("Operation");
// console.log("3");

//  Stack => LIFO => Last input First Out
// Asynchronous
function one () {
  console.log("one")
}
one();
setTimeout(()  => console.log("Operation"), 0);
console.log("1");
console.log("2");
console.log("3");
