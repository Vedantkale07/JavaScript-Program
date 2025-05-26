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

// chai()