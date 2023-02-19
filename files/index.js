const path = require("path");
const fs = require("fs/promises");

// console.log(__dirname);
// console.log(__filename);

const booksPath = path.join(__dirname, "..", "db", "books.json");

// console.log(booksPath);

class FileOperations {
  constructor(booksPath) {
    this.booksPath = booksPath;
  }

  async read() {
    return await fs.readFile(this.booksPath, "utf-8");
  }
  async display() {
    console.log(await this.read());
  }
  async create(library) {
    await fs.writeFile(this.booksPath, JSON.stringify(library, null, 2));
  }

  async update(book) {
    const oldBooks = JSON.parse(await this.read());
    const newBooks = [...oldBooks, book];
    this.create(newBooks);
  }
  async remove() {
    await fs.unlink(this.booksPath);
  }

  async updateBook(id, book) {
    const books = JSON.parse(await this.read());
    const bookToUpdate = books.find((item) => item.id === id);
    const idx = books.indexOf(bookToUpdate);
    books[idx] = book;
    await this.create(books);
  }
}

async function asyncHandler(func) {
  try {
    return await func;
  } catch (error) {
    console.log(error.message);
  }
}

const file = new FileOperations(booksPath);
// file.display();

const books = [
  {
    id: "10",
    author: "J. Rouling",
    title: "Harry Potter",
  },
  {
    id: "11",
    author: "V. Guggo",
    title: "Smile Man",
  },
  {
    id: "12",
    author: "G. Ford",
    title: "Auto",
  },
];

const newBook = {
  id: "12",
  author: "Unknown Artirs",
  title: "Track01",
};

// file.create(books);
// file.display();

asyncHandler(file.updateBook("12", newBook));
