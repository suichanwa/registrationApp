document.addEventListener('DOMContentLoaded', function () {
    const loginButton = document.querySelector('.button-log');
    loginButton.addEventListener('click', function () {
      const email = document.getElementById('email').value;
      const password = document.getElementById('password').value;
  
      fetch('/src/users.json')
        .then(response => response.json())
        .then(data => {
          const users = data.users;
          const foundUser = users.find(user => user.email === email && user.password === password);
          if (foundUser) {
            window.location.href = 'admin/admin.html';
          } else {
            alert('Invalid email or password. Please try again.');
          }
        })
        .catch(error => {
          console.error('Error fetching or parsing users data:', error);
        });
    });
  });
  