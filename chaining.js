const number=[1, 2, 3, 4, 5, 6, 7, 8, 9];

const newNo= number.map((no)=>(no*10)).map((n) =>(n+5));
console.log(newNo);

newNum= number
            .map((no)=> (no*100))
            .map((no)=> (no+5))
            .filter((no)=>(no>500));
console.log(newNum);


let name= "hello world!!";

const newName= name.trim().toUpperCase().replace('!!','.');
console.log(newName);