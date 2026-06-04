const books = [
  {
    title: "Healing Scriptures",
    authorName: "Tope Olu'Daramola",
    releaseYear: 2014
  },
  {
    title: "Run, Watchman Run!",
    authorName: "Bayo Famonure",
    releaseYear: 2021
  },
  {
    title: "The Empowered Leader",
    authorName: "Toye Ademola",
    releaseYear: 2021
  },
  {
    title: "Spiritual Man",
    authorName: "Omodiagbe Daniel Onosetale",
    releaseYear: 1947
  }

];

function sortByYear (book1, book2) {
  if ((book1.releaseYear - book2.releaseYear) < 0) {
    return -1;
  }
  else if ((book1.releaseYear - book2.releaseYear) > 0) {
    return 1;
  }
  else {
    return 0;
  }
}

const filteredBooks = books.filter(book => book.releaseYear <= 1950);
filteredBooks.sort(sortByYear);
