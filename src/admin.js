 fetch('src/users.json')
        .then(response => response.json())
        .then(data => {
            const users = data.users;
            const container = document.querySelector('.continerPersons');
            users.forEach(user => {
                const personDiv = document.createElement('div');
                personDiv.className = 'person';

                const profilePhoto = document.createElement('img');
                profilePhoto.src = 'img/person.png'; 
                profilePhoto.alt = '';
                profilePhoto.className = 'profilePhoto';

                const nickname = document.createElement('p');
                nickname.className = 'nickname';
                nickname.textContent = user.username;

                const email = document.createElement('p');
                email.className = 'email';
                email.textContent = user.email;

                const addFriendButton = document.createElement('button');
                addFriendButton.className = 'addFriend';
                addFriendButton.textContent = 'Add Friend';

                personDiv.appendChild(profilePhoto);
                personDiv.appendChild(nickname);
                personDiv.appendChild(email);
                personDiv.appendChild(addFriendButton);

                container.appendChild(personDiv);
            });
        })
        .catch(error => console.error('Error fetching JSON:', error));
