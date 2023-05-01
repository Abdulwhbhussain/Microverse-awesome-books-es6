
const listSection = () => {
    document.querySelector('#list-link').style.textDecoration = 'underline';
    document.querySelector('.book-list-container').style.display = 'Block';
    document.querySelector('#add-link').style.textDecoration = 'none';
    document.querySelector('#contact-link').style.textDecoration = 'none';
    document.querySelector('.book-form').style.display = 'none';
    document.querySelector('#contact-info').style.display = 'none';
}

export { listSection };