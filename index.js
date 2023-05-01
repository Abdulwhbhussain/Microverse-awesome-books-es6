// import { displayTime } from "./modules/display-time";
import { DateTime } from './node_modules/luxon/src/luxon.js';

document.addEventListener('DOMContentLoaded', () => {
  // A collection that keeps a list of books.
  const bookList = document.querySelector('#book-list');
  let collectionOfBooks = [];

  // Display Real-time Date and time on web page.
  setInterval(() => {
    let completeDateAndTime = '';

    const month = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

    completeDateAndTime += month[DateTime.now().c.month - 1];
    completeDateAndTime += ' ';
    if (DateTime.now().c.day > 3) {
      completeDateAndTime += `${DateTime.now().c.day}th`;
    }
    if (DateTime.now().c.day === 3) {
      completeDateAndTime += `${DateTime.now().c.day}rd`;
    }
    if (DateTime.now().c.day === 2) {
      completeDateAndTime += `${DateTime.now().c.day}nd`;
    }
    if (DateTime.now().c.day === 1) {
      completeDateAndTime += `${DateTime.now().c.day}st`;
    }
    completeDateAndTime += ' ';
    completeDateAndTime += DateTime.now().c.year;
    completeDateAndTime += ',  ';
    completeDateAndTime += DateTime.now().c.hour;
    completeDateAndTime += ':';
    if (DateTime.now().c.minute < 10) {
      completeDateAndTime += '0';
    }
    completeDateAndTime += DateTime.now().c.minute;
    completeDateAndTime += ':';
    if (DateTime.now().c.second < 10) {
      completeDateAndTime += '0';
    }
    completeDateAndTime += DateTime.now().c.second;
    completeDateAndTime += ' ';
    completeDateAndTime += DateTime.now().c.hour > 12 ? 'pm' : 'am';

    document.getElementById('date-container').innerText = completeDateAndTime;
  }, 1000);   
  document.querySelector('#list-link').style.textDecoration = 'underline';
  document.querySelector('.book-list-container').style.display = 'Block';
  document.querySelector('#add-link').style.textDecoration = 'none';
  document.querySelector('#contact-link').style.textDecoration = 'none';
  document.querySelector('.book-form').style.display = 'none';
  document.querySelector('#contact-info').style.display = 'none';

  document.querySelector('#list-link').addEventListener('click', () => {
    document.querySelector('#list-link').style.textDecoration = 'underline';
    document.querySelector('.book-list-container').style.display = 'Block';
    document.querySelector('#add-link').style.textDecoration = 'none';
    document.querySelector('#contact-link').style.textDecoration = 'none';
    document.querySelector('.book-form').style.display = 'none';
    document.querySelector('#contact-info').style.display = 'none';
  });

  document.querySelector('#add-link').addEventListener('click', () => {
    document.querySelector('#add-link').style.textDecoration = 'underline';
    document.querySelector('.book-form').style.display = 'flex';
    document.querySelector('#list-link').style.textDecoration = 'none';
    document.querySelector('#contact-link').style.textDecoration = 'none';
    document.querySelector('.book-list-container').style.display = 'none';
    document.querySelector('#contact-info').style.display = 'none';
  });

  document.querySelector('#contact-link').addEventListener('click', () => {
    document.querySelector('#contact-link').style.textDecoration = 'underline';
    document.querySelector('#contact-info').style.display = 'Block';
    document.querySelector('#list-link').style.textDecoration = 'none';
    document.querySelector('#add-link').style.textDecoration = 'none';
    document.querySelector('.book-list-container').style.display = 'none';
    document.querySelector('.book-form').style.display = 'none';
  });

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