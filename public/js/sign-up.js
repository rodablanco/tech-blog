// define function to sign up
const signup = async (event) => {
  event.preventDefault();
  
  // collect inputs
  const username = document.querySelector("#signup-username").value.trim();
  const password = document.querySelector('#signup-password').value.trim();

  if (username && password) {
    const response = await fetch('/api/users', {
      method: 'POST',
      body: JSON.stringify({ username, password }),
      headers: { 'Content-Type': 'application/json' },
    });

    // redirect to dashboard if sign up is successful
    if (response.ok) {
      document.location.replace('/dashboard');
    } else {
      alert(response.statusText);
    }
  }
};

// listen for submit
document
  .querySelector('.signup-form')
  .addEventListener('submit', signup);