const program = ["js", "python", "java", "html"];

// program.forEach( function (value){
//         console.log(value);
// } );

// program.forEach ( (item) =>{
//     console.log(item)
// } )

const arr = [
  {
    language: "JS",
    version: "11",
  },
  {
    language: "Java",
    version: "21",
  },
  {
    language: "Python",
    version: "9",
  },
];

arr.forEach((item) => {
  console.log(item.language);
});

arr.forEach((item) => {
  console.log(item.version);
});

const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const newNo = nums.filter((no) => {
  return no % 2 == 0;
});
console.log(newNo);

console.log("\n\n");
