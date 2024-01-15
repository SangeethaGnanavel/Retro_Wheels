const loginFormHandler = async (event) => {
  event.preventDefault();

  const email = document.querySelector("#email-login").value.trim();
  const password = document.querySelector("#password-login").value.trim();

  if (email && password) {
    const response = await fetch("/api/users/login", {
      method: "POST",
      body: JSON.stringify({ email, password }),
      headers: { "Content-Type": "application/json" },
    });

    if (response.ok) {
      console.log("Load All Handler");
      document.location.replace("/all");
    } else {
      alert("Failed to log in.");
    }
  }
};

const signupFormHandler = async (event) => {
  event.preventDefault();

  const username = document.querySelector("#name-signup").value.trim();
  const email = document.querySelector("#email-signup").value.trim();
  const password = document.querySelector("#password-signup").value.trim();
  try {
    if (username && email && password) {
      const response = await fetch("/api/users", {
        method: "POST",
        body: JSON.stringify({ username, email, password }),
        headers: { "Content-Type": "application/json" },
      });

      if (response.ok) {
        document.location.replace("/");
      } else {
        alert("Failed to sign up.");
      }
    }
  } catch (error) {
    if (error.status == 500) {
      throw new HttpError("Something went wrong", jsonError);
    }
  }
};

document
  .querySelector(".login-form")
  .addEventListener("submit", loginFormHandler);

document
  .querySelector(".signup-form")
  .addEventListener("submit", signupFormHandler);
