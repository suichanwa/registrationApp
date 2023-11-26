document.addEventListener("DOMContentLoaded", function() {
    const form = document.querySelector("form");

    form.addEventListener("submit", function(event) {
        event.preventDefault();

        const userData = {
            username: document.getElementById("nickname").value,
            password: document.getElementById("password").value,
            email: document.getElementById("email").value
        };

        let users = JSON.parse(localStorage.getItem("users")) || [];

        users.push(userData);

        localStorage.setItem("users", JSON.stringify(users));

        console.log('User registered successfully');
        console.log(users);

        exportUsersToJson(users);
    });

    async function exportUsersToJson(users) {
    const usersJson = JSON.stringify(users, null, 2);

    try {
        const handle = await window.showSaveFilePicker({
            suggestedName: "users.json",
            types: [{
                description: 'JSON Files',
                accept: {
                    'application/json': ['.json'],
                },
            }],
        });

        const writable = await handle.createWritable();

        await writable.write(usersJson);
        await writable.close();

        console.log('users.json updated successfully');
    } catch (error) {
        console.error('Error updating users.json:', error);
    }
}


});

