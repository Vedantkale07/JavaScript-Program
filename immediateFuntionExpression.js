// immediately Invoked funtion Expression (IIFE)
// ->()()    global scope ke polution se problem hotiye kayi bar 
// to global scope ke variables are decleration se hatane ke liye IIFE ka use kiya
//  SOME Time you need termirate the funtion by using semicolone (;)


(function chai(){
    console.log("database connected!!!!!")
})();


//arrow function
( () => {
    console.log("DATABASE CONNECTION BY ARROW FUNTION")
} )();

//parameter funtion

( (name)=>{
    console.log(`${name}, welcome to coding world`)
} )("vedant")