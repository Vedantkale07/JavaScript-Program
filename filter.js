
// The filter() method is used to create a new array containing
//  only those elements from the original array that 
//  satisfy a given condition (return true in the callback function).

// ✅ Returns a new array – does not modify the original array.
// ✅ Uses a callback function – keeps elements where callback returns true.
// ✅ Works well with other array methods like map() and reduce() for chaining.

const books = [
  {
    title: "java",
    published: "2000",
    genre: "programming",
  },
  {
    title: "python",
    published: "2005",
    genre: "programming",
    edition: "2019",
  },
  {
    title: "AI/ML",
    published: "2010",
    genre: "learnning",
  },
  {
    title: "Javascript",
    published: "2012",
    genre: "web development",
  },
  {
    title: "MongoDB",
    published: "2008",
    genre: "Database",
  },
  {
    title: "BigData",
    published: "2003",
    genre: "Database",
  },
  {
    title: "Html",
    published: "2015",
    genre: "web development",
  },
];

let userrBook = books.filter((bk) => bk.genre === "programming");
console.log(userrBook);

userBook = books.filter((bk) => {
  return bk.published >= 2010 && bk.genre === "learnning";
});
console.log(userBook);

userBookk = books.filter((bkk) => {
  return bkk.title == "python";
});
console.log(userBookk);
