document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission
  
    // Get form values
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;
  
    // Perform login validation (you can replace this with your authentication logic)
    if (email === 'admin@example.com' && password === 'password') {
      // Successful login, redirect to the dashboard
      window.location.href = 'dashboard.html';
    } else {
      // Invalid login, display an error message
      alert('Invalid email or password');
    }
  });
  
  document.getElementById('registerForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission
  
    // Get form values
    var companyName = document.getElementById('companyName').value;
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;
  
    // Perform registration logic (you can replace this with your registration process)
    // Example: Send the registration data to the server using AJAX or fetch API
  
    // Reset form fields
    document.getElementById('companyName').value = '';
    document.getElementById('email').value = '';
    document.getElementById('password').value = '';
  
    alert('Registration successful! Please login to access the app.');
  });
  