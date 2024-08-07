document.addEventListener('DOMContentLoaded', () => {
    const usernameField = document.getElementById('username');
    const passwordField = document.getElementById('password');
    const loginForm = document.getElementById('loginForm');
    const loginBox = document.getElementById('loginBox');
    const accessGranted = document.getElementById('accessGranted');
    const randomPassword = Math.random().toString(36).slice(-15);
    const loginButton = document.getElementById('loginButton');

    // Function to auto-fill the form
    function autoFill() {
        let username = 'UNGOCPinewood';
        let index = 0;

        const usernameInterval = setInterval(() => {
            if (index < username.length) {
                usernameField.value += username[index];
                index++;
            } else {
                clearInterval(usernameInterval);
                let passwordIndex = 0;
                const passwordInterval = setInterval(() => {
                    if (passwordIndex < randomPassword.length) {
                        passwordField.value += randomPassword[passwordIndex];
                        passwordIndex++;
                    } else {
                        clearInterval(passwordInterval);
                        loginButton.disabled = false; // Enable the login button
                    }
                }, 100);
            }
        }, 100);
    }

    // Reset the form
    function resetForm() {
        usernameField.value = ''; // Clear the username field
        passwordField.value = ''; // Clear the password field
        loginButton.disabled = true; // Disable the login button
    }

    // Trigger the auto-fill function
    autoFill();

    // Reset the form when the page is reset
    window.addEventListener('beforeunload', resetForm);

    // Submit the form
    // Submit the form
    loginForm.addEventListener('submit', (event) => {
        event.preventDefault();
        loginBox.style.transition = 'transform 0.5s ease-in'; // Add transition property
        loginBox.style.transform = 'scale(0)';
        accessGranted.style.display = 'flex';
        accessGranted.querySelector('.dossier').style.transform = 'scale(1)';
        setTimeout(() => {
            accessGranted.querySelector('.dossier').style.transform = 'scale(0)';
            setTimeout(() => {
                // Redirect to hub after flashing
                window.location.href = 'hub.html';
            }, 1000);
        }, 4000);

        // Flash the access-granted box green 3 times
        let flashCount = 0;
        const flashInterval = setInterval(() => {
            if (flashCount < 3) {
                accessGranted.style.backgroundColor = 'green';
                setTimeout(() => {
                    accessGranted.style.backgroundColor = '';
                }, 500);
                flashCount++;
            } else {
                clearInterval(flashInterval);
            }
        }, 1000);
    });

    // Disable password saving by the browser
    passwordField.setAttribute('autocomplete', 'off');
});
