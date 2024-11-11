let arr = ["a", "b", "c", "d"];
let newArr = [];
// arr.forEach((e) => {
//   newArr = e + "atullya";
//   console.log(newArr);
// });

// arr.filter((e) => {
//   if (!e.includes("a")) {
//     console.log(2 + 4);
//   } else {
//     console.log("Your are bro");
//   }
// });

let categories = [
  "apple",
  "ball",
  "cat",
  "cat",
  "apple",
  "apple",
  "ball",
  "ball",
  "cat",
  "ball",
  "apple",
  "ball",
  "apple",
];
let newarr = [];
newarr = categories.map((e) => {
  return e + "hello";
});
console.log(newarr);

let numbers = [1, 2, 3, 4];
numbers.forEach((num) => {
  newArr = num * 2;
  console.log(newArr); // Output: [2, 4, 6, 8]
});
