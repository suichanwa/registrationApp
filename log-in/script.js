document.addEventListener('DOMContentLoaded', function () {
    const loginButton = document.querySelector('.button-log');
    loginButton.addEventListener('click', function () {
      const email = document.getElementById('email').value;
      const password = document.getElementById('password').value;
  
      // Fetch the users.json data
      fetch('/src/users.json')
        .then(response => response.json())
        .then(data => {
          const users = data.users;
          const foundUser = users.find(user => user.email === email && user.password === password);
          if (foundUser) {
            // If user is found, redirect to admin.html
            window.location.href = '/admin.html';
          } else {
            // If user credentials are incorrect, display an error message or handle it as needed
            alert('Invalid email or password. Please try again.');
          }
        })
        .catch(error => {
          console.error('Error fetching or parsing users data:', error);
        });
    });
  });
  