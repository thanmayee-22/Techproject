document.getElementById('forgotPasswordForm').addEventListener('submit', function(event) {
    event.preventDefault();
    // Add your logic for handling form submission and password update here
    // Example code for demonstration purposes:
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;
    var confirmPassword = document.getElementById('confirmPassword').value;
    
    if (password !== confirmPassword) {
        alert("Passwords do not match!");
        return;
    }else{
        alert("Password updated!");
    }
    
    // Password update logic...
});
