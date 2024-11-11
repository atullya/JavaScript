const arr = [
  { id: 1, name: "atullya" },
  { id: 2, name: "Karl" },
  { id: 3, name: "hari" },
];

const newarr=arr.filter((el)=>el.id!==2)
console.log(newarr)
