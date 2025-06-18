const books =[
    {
        title:'java', published:'2000', genre:'programming'
    },
    {
        title:'python', published:'2005', genre:'programming', edition:'2019'
    },
    {
        title:'AI/ML', published:'2010', genre:'learnning'
    },
    {
        title:'Javascript', published:'2012', genre:'web development'
    },
    {
        title:'MongoDB', published:'2008', genre:'Database'
    },
    {
        title:'BigData', published:'2003', genre:'Database'
    },
    {
        title:'Html', published:'2015', genre:'web development'
    },
       
]

// let userBook= books.filter( (bk) => (bk.genre==="programming"));
// console.log(userBook);

userBook= books.filter ( (bk)=> { 
    return bk.published>=2010 && bk.genre==='learnning'
});
console.log(userBook);