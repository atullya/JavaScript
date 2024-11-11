let a = [5, 3, 2, 1, 2, 123, 34, 45, 67, 78, 89, 34, 234];
let n = a.length;
for (let i = 0; i < n - 1; i++) {
  for (let j = 0; j < n - 1 - i; j++) {
    if (a[j + 1] <= a[j]) {
      let temp = a[j];
      a[j] = a[j + 1];
      a[j + 1] = temp;
    }
  }
}
console.log(a);
