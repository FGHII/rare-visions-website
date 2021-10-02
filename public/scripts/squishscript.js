const contactLink = document.getElementById('contact-link');
const submitButton = document.getElementById('submit-button');
const squishContact = document.getElementById('squish-contact')
const squishSubmit = document.getElementById('squish-submit')


contactLink.addEventListener('mouseenter', () => {
    squishContact.classList.toggle('fade');
  });

contactLink.addEventListener('mouseleave', () => {
    squishContact.classList.toggle('fade');
});

submitButton.addEventListener('mouseenter', () => {
  squishSubmit.classList.toggle('fade');
});

submitButton.addEventListener('mouseleave', () => {
  squishSubmit.classList.toggle('fade');
});