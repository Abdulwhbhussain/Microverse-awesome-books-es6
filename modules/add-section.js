
const addSection = () => {
    document.querySelector('#add-link').style.textDecoration = 'underline';
    document.querySelector('.book-form').style.display = 'flex';
    document.querySelector('#list-link').style.textDecoration = 'none';
    document.querySelector('#contact-link').style.textDecoration = 'none';
    document.querySelector('.book-list-container').style.display = 'none';
    document.querySelector('#contact-info').style.display = 'none';
  }

    export { addSection };