// define function to login
const login = async (event) => {
  event.preventDefault();

  // collect inputs
  const username = document.querySelector("#login-username").value.trim();
  const password = document.querySelector("#login-password").value.trim();

  if (username && password) {
    const response = await fetch("/api/users/login", {
      method: "POST",
      body: JSON.stringify({ username, password }),
      headers: { "Content-Type": "application/json" },
    });

    // redirect to dashboard if sign up is successful
    if (response.ok) {
      document.location.replace("/dashboard");
    } else {
      alert(response.statusText);
    }
  }
};

// listen for submit
document
  .querySelector(".login-form")
  .addEventListener("submit", login);