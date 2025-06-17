<<<<<<< HEAD
// arrow function syntax
() =>{}

const addTwo=(no1, no2) => {
    return no1+no2
}
const result=addTwo(2,2)
console.log(result)

//implisite return : means dont need to write return keyword its do itself
const addtion=(no1,no2)=> no1+no2

console.log(addtion(3,3))

// when you try to return object it should be in the parenthesis 

const add= (no1, no2) => ({username: "vedant kale"})
console.log(add(5,5))



// function chai(){
//     console.log(this)
// }

=======
// arrow function syntax
() =>{}

//implisite return : means dont need to write return keyword its do itself
// when you try to return object it should be in the parenthesis ({"object"})


const addTwo=(no1, no2) => {
    return no1+no2
}
const result=addTwo(2,2)
console.log(result)

//implisite return : means dont need to write return keyword its do itself
const addtion=(no1,no2)=> no1+no2

console.log(addtion(3,3))

// when you try to return object it should be in the parenthesis 

const add= (no1, no2) => ({username: "vedant kale"})
console.log(add(5,5))

const multi=() => ({result:"pass", percentage:"99.88"})
console.log(multi())


// function chai(){
//     console.log(this)
// }

>>>>>>> 7d45c78 ( 2 program is added)
// chai()