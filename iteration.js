const greeting= "Hello World";

for (const element of greeting) {
      if(element==' ') {
        continue 
    }
    console.log(`each char is ${element}`);
}

const arr= [11,12,13,115,113];
for (const element of arr) {
    console.log(element);
}