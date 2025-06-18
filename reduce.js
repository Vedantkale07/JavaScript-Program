const arr= [1,2,3,4];

// const total= arr.reduce(function (accumulator, currentValue) {
//         console.log(`accumulator: ${accumulator} currentValue: ${currentValue}`);
//         return accumulator + currentValue;
// }, 0);

// console.log("total:",total);

// by using arrow functions
// const noTotal= arr.reduce((acc, current)=>(acc+current));
// console.log(noTotal);

const shopping =[
    {
        item:'java',
        price:2999
    },
    {
        item:'javaScript',
        price:4999
    },
    {
        item:'python',
        price:9999
    },
    {
        item:'SAP',
        price:12999
    }
]

const totalPrice= shopping.reduce((acc, item)=> (acc+item.price),0);
console.log(totalPrice);