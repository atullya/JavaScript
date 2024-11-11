// let a = [
//   "apple",
//   "ball",
//   "cat",
//   "apple",
//   "apple",
//   "ball",
//   "cat",
//   "cat",
//   "ball",
//   "apple",
//   "apple",
// ];
// let b = [];
// console.log(a);
// console.log(b);

// a.forEach((element) => {
//   if (!b.includes(element)) {
//     b.push(element);
//   }
// });
// console.log(b);

let n = [2, 31, 2, 3, 4, 54, 65, 6, 67, 8, 789, 56, 56, 34, 34, 23, 43, 34, 34];

let filteredData = n.filter((e) => {
  return e % 2 == 0;
});
console.log(filteredData);
