import { displayTime } from './modules/display-time.js';
import { listSection, addSection, contactSection } from './modules/sections.js';

document.addEventListener('DOMContentLoaded', () => {
  // A collection that keeps a list of books.
  const bookList = document.querySelector('#book-list');
  let collectionOfBooks = [];

  // Display Real-time Date and time on web page.
  setInterval(displayTime, 1000);
  listSection();

  document.querySelector('#list-link').addEventListener('click', listSection);

  document.querySelector('#add-link').addEventListener('click', addSection);

  document.querySelector('#contact-link').addEventListener('click', contactSection);

  const bookOnHtmlPage = (books) => {
    books.forEach((book, id) => {
      const bookItem = document.createElement('li');
      bookItem.setAttribute('id', `book-item-${id}`);
      bookItem.setAttribute('class', 'book-item');
      bookItem.innerHTML = `<div class='book-item-div'>
      <div><span><b>'${book.title}'</b></span> <span> by </span>
      <span>${book.author}</span></div>
      <button id=remove-btn-${id} class='remove-btn'>Remove</button>
      </div>
      `;
      bookList.appendChild(bookItem);
    });
  };

  // Remove a book from the collection.
  const removeFunction = () => {
    if (collectionOfBooks.length > 0) {
      collectionOfBooks.forEach((book, id) => {
        document.querySelector(`#remove-btn-${id}`).addEventListener('click', (e) => {
          e.preventDefault();
          collectionOfBooks = collectionOfBooks.filter((bk) => bk !== book);
          localStorage.setItem('collectionOfBooks', JSON.stringify(collectionOfBooks));
          document.querySelector(`#book-item-${id}`).remove();
        });
      });
    }
  };

  const bookOnHtmlPageRemove = () => {
    document.querySelectorAll('.book-item').forEach((book) => {
      book.remove();
    });
  };

  if (!localStorage.getItem('collectionOfBooks')) {
    localStorage.setItem('collectionOfBooks', JSON.stringify(collectionOfBooks));
  } else {
    collectionOfBooks = JSON.parse(localStorage.getItem('collectionOfBooks'));
    bookOnHtmlPage(collectionOfBooks);
  }

  removeFunction();

  // Add a new book to the collection with title and author.
  document.querySelector('#submit-btn').addEventListener('click', (e) => {
    e.preventDefault();
    const title = document.querySelector('#title').value;
    document.querySelector('#title').value = '';
    const author = document.querySelector('#author').value;
    document.querySelector('#author').value = '';
    collectionOfBooks.push({ title, author });
    localStorage.setItem('collectionOfBooks', JSON.stringify(collectionOfBooks));
    bookOnHtmlPageRemove();
    bookOnHtmlPage(collectionOfBooks);
    removeFunction();
  });
});