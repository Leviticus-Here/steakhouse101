document.getElementById('contactForm').addEventListener('submit', function(e) {
  e.preventDefault(); // Stop default form submission

  // Get form values
  const name = document.getElementById('name').value.trim();
  const email = document.getElementById('email').value.trim();
  const message = document.getElementById('message').value.trim();
  const responseDiv = document.getElementById('responseMessage');

  // Simple validation
  if (name === '' || email === '' || message === '') {
    responseDiv.style.color = 'red';
    responseDiv.textContent = 'Please fill out all fields.';
    return;
  }

  // Show success message (you could also send data to a server here)
  responseDiv.style.color = 'green';
  responseDiv.textContent = `Thank you, ${name}! We'll get back to you soon.`;

  // Optionally clear form
  document.getElementById('contactForm').reset();
});
