const dictionary = {
    "J. K. Rowling": [
      ["Harry Potter and the Philosopher's Stone", 223],
      ["Harry Potter and the Chamber of Secrets", 251],
      ["Harry Potter and the Prisoner of Azkaban", 317],
      ["Harry Potter and the Goblet of Fire", 636],
    ],
    "Neal Stephenson": [
      ["Cryptonomicon", 928],
      ["Anathem", 1008],
      ["Fall; or, Dodge in Hell", 896],
    ],
    "Malcolm Gladwell": [
      ["Outliers", 320],
      ["Blink", 287],
    ],
  };
  
  function booksByAuthor(dictionary) {
    // Your code here:

  let booksArray = [];
  let authors = Object.keys(dictionary);

  for (let author of authors) {
   for  (let book of dictionary[author]) {
    booksArray.push({
      title: book[0],
      pages: book[1],
      author: author
  });
   }
  }
  return booksArray;
  }
  
  console.log(booksByAuthor(dictionary));
  