document.addEventListener('DOMContentLoaded', () => {
    const usernameField = document.getElementById('username');
    const passwordField = document.getElementById('password');
    const loginForm = document.getElementById('loginForm');
    const loginBox = document.querySelector('.login-box');
    const accessGranted = document.getElementById('accessGranted');
    const randomPassword = Math.random().toString(36).slice(-15);

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
                        setTimeout(() => {
                            loginForm.submit();
                        }, 1000);
                    }
                }, 100);
            }
        }, 100);
    }

    // Submit the form
    loginForm.addEventListener('submit', (event) => {
        event.preventDefault();
        loginBox.style.transform = 'translateX(-100vw)';
        setTimeout(() => {
            accessGranted.style.display = 'flex';
        }, 1000);
    });

    // Trigger the auto-fill function
    setTimeout(autoFill, 1000);
});
