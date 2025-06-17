<<<<<<< HEAD
//singleton  -> 

// object literals 

const mysym= Symbol("key")
const jsUser= {
    name:"javascript",
    age:23,
    [mysym]: "symkey1",
    location:"pune",
    email:"vedantkale0707@gmail.com",
    isLogginedId:false,
    lastLoginDay:["monday","friday"]
}

// access values of object
console.log(typeof jsUser[mysym])
// console.log(jsUser.age)
// console.log(jsUser.isLogginedId)
console.log(jsUser.email)

console.log(jsUser["email"])


//change value of object (override)

jsUser.name="gaurav kale"

console.log(jsUser.name)


//doesnt allow to override the object values

jsUser.age=20;
// Object.freeze(jsUser)
// jsUser.age=30
console.log(jsUser.age)
console.log(jsUser)

//funtion in object

jsUser.greeting= function(){
    console.log("hello JS users")
}

jsUser.greetingTwo= function(){
    console.log(`Hollo Js User, ${this.name}`)
}

jsUser.addNumber= function(){
    console.log(3+3)
    console.log(5*3)
}

console.log(jsUser.greeting())
console.log(jsUser.greetingTwo())
=======
//singleton  -> 

// object literals 

const mysym= Symbol("key")
const jsUser= {
    name:"javascript",
    age:23,
    [mysym]: "symkey1",
    location:"pune",
    email:"vedantkale0707@gmail.com",
    isLogginedId:false,
    lastLoginDay:["monday","friday"]
}

// access values of object
console.log(typeof jsUser[mysym])
// console.log(jsUser.age)
// console.log(jsUser.isLogginedId)
console.log(jsUser.email)

console.log(jsUser["email"])


//change value of object (override)

jsUser.name="gaurav kale"

console.log(jsUser.name)


//doesnt allow to override the object values

jsUser.age=20;
// Object.freeze(jsUser)
// jsUser.age=30
console.log(jsUser.age)
console.log(jsUser)

//funtion in object

jsUser.greeting= function(){
    console.log("hello JS users")
}

jsUser.greetingTwo= function(){
    console.log(`Hollo Js User, ${this.name}`)
}

jsUser.addNumber= function(){
    console.log(3+3)
    console.log(5*3)
}

console.log(jsUser.greeting())
console.log(jsUser.greetingTwo())
>>>>>>> 7d45c78 ( 2 program is added)
console.log(jsUser.addNumber())