function fetchUserData() {
    return fetch('src/users.json')
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .catch(error => {
        console.error('There was a problem fetching the user data:', error);
      });
  }
  
  let usersData;
  
  fetchUserData()
    .then(data => {
      usersData = data;
    })
    .catch(error => {
      console.error('Error fetching user data:', error);
    });
  
  function checkUserInfo() {
    const inputUsername = document.getElementById('usernameInput').value;
    const userInfoDiv = document.getElementById('userInfo');
  
    if (!usersData) {
      alert('User data not loaded yet. Please try again.');
      return;
    }
  
    const foundUser = usersData.users.find(user => user.username === inputUsername);
  
    if (foundUser) {
      const userDescription = document.createElement('p');
      userDescription.textContent = `Name: ${foundUser.username}, Email: ${foundUser.email}`;
  
      userInfoDiv.innerHTML = ''; // Clear previous content
      userInfoDiv.appendChild(userDescription);
    } else {
      userInfoDiv.innerHTML = ''; // Clear previous content
      alert('User not found!');
    }
  }
  