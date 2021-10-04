//squish animation - eventually refactor get element by ID to queryselectorAll to reduce repetition
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

//contact form
const contactForm = document.querySelector('.contact-form');
let submitterName = document.getElementById('name');
let email = document.getElementById('email');
let date = document.getElementById('date');
let message = document.getElementById('message');

contactForm.addEventListener('submit', (e) => {
  e.preventDefault();

  let formData = {
    name: submitterName.value,
    email: email.value,
    date: date.value,
    message: message.value
  }

  let xhr = new XMLHttpRequest();
  xhr.open('POST', '/');
  xhr.setRequestHeader('content-type', 'application/json');
  xhr.onload = () => {
    if(xhr.responseText == 'success') {
      alert('Thank you for your message, will respond soon!');
      submitterName.value = '';
      email.value = '';
      date.value = '';
      message.value = '';
    } else {
      alert('Error: email not sent');
    }
  }
  xhr.send(JSON.stringify(formData));

});