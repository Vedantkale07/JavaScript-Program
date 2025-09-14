// for in loop used for Object in js

const myObject = {
  js: " javaScript",
  vs: " visual studio ",
  py: " python",
  html: " hytext markup language",
};

// print keys
// for (const key in myObject) {
//   console.log(key);
// }

// for (const key in myObject) {
//   console.log(`${key} shortcut for ${myObject[key]}`);
// }

for (const key in myObject) {
  console.log(`${key} shortcut for ${myObject[key]}`);
}
