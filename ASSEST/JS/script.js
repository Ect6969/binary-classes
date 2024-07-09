document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    if (username === 'binary469' && password === 'BINARY441') {
        // Redirect to the home page
        window.location.href = 'home.html';
    } else {
        alert('Invalid username or password');
    }
});
