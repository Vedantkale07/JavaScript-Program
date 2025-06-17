//singlton ->

const obj1= {1:"a", 2:"b", 3:"c"}
const obj2= {4:"d", 5:"e", 6:"f"}

// const obj3= Object.assign({},obj1,obj2)
// console.log(obj3)

const obj3={...obj1, ...obj2}
console.log(obj3)

const course = {
    courseName:"javascript",
    price:"999",
    duration:"3 months"
}

const {duration}=course
console.log(duration)

// const {courseName}=course
// console.log(courseName)

// destructure the object
const {CourseName: cName}=course
console.log(cName)