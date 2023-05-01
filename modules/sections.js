const listSection = () => {
  document.querySelector('#list-link').style.textDecoration = 'underline';
  document.querySelector('.book-list-container').style.display = 'Block';
  document.querySelector('#add-link').style.textDecoration = 'none';
  document.querySelector('#contact-link').style.textDecoration = 'none';
  document.querySelector('.book-form').style.display = 'none';
  document.querySelector('#contact-info').style.display = 'none';
};

const addSection = () => {
  document.querySelector('#add-link').style.textDecoration = 'underline';
  document.querySelector('.book-form').style.display = 'flex';
  document.querySelector('#list-link').style.textDecoration = 'none';
  document.querySelector('#contact-link').style.textDecoration = 'none';
  document.querySelector('.book-list-container').style.display = 'none';
  document.querySelector('#contact-info').style.display = 'none';
};

const contactSection = () => {
  document.querySelector('#contact-link').style.textDecoration = 'underline';
  document.querySelector('#contact-info').style.display = 'Block';
  document.querySelector('#list-link').style.textDecoration = 'none';
  document.querySelector('#add-link').style.textDecoration = 'none';
  document.querySelector('.book-list-container').style.display = 'none';
  document.querySelector('.book-form').style.display = 'none';
};

export { listSection, addSection, contactSection };
