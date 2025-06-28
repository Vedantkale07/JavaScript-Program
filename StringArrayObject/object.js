let car ={
    brand:"BMW",
    speed:"400 kmph",
    color:"blue",
    start:()=>{
        console.log(" car will start ")
    }
}

console.log(car.start())

let obj={
    name:"vedant",
    age:23,
    weight:"50kg"
}

let key=Object.keys(obj)
console.log(key)

let value= Object.values(obj)
console.log(value)

for (const key in obj) {
    console.log(key)
}

let entries = Object.entries(obj)
console.log(entries)


obj2={
    ...obj
}
console.log(obj2)