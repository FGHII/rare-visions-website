const contactLink = document.getElementById('contact-link');
const squish = document.getElementById('squish')


contactLink.addEventListener('mouseenter', () => {
    squish.classList.toggle('fade')
  });

contactLink.addEventListener('mouseleave', () => {
    squish.classList.toggle('fade');
});