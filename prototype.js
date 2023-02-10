// # 3. Prototype

// Create a Protype class for books creation for a library system.

class Book {
  constructor(title, genre, year) {
    this.title = title,
    this.genre = genre,
    this.year = year
  }

  setYear(year) {
    return this.year = year;
  }

  setTitle(title) {
    return this.title = title;
  }

  setGenre(genre) {
    return this.genre = genre;
  }

  clone() {
    return new Book(this.title, this.genre, this.year);
  }
}

