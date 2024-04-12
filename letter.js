// script.js
document.querySelector('form').addEventListener('submit', function (e) {
  e.preventDefault();
  const email = document.getElementById('email').value;
  // You can send the email to your server or perform any other action here
  displaySuccessMessage();
});

function displaySuccessMessage() {
  const form = document.querySelector('.newsletter-form');
  form.innerHTML = '<p>Thank you for subscribing!</p>';
}
