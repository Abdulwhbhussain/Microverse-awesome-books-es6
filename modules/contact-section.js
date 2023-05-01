

const contactSection = () => {
    document.querySelector('#contact-link').style.textDecoration = 'underline';
    document.querySelector('#contact-info').style.display = 'Block';
    document.querySelector('#list-link').style.textDecoration = 'none';
    document.querySelector('#add-link').style.textDecoration = 'none';
    document.querySelector('.book-list-container').style.display = 'none';
    document.querySelector('.book-form').style.display = 'none';
  }

    export { contactSection };