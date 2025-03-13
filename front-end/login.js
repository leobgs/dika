document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("loginForm");
  const errorMessage = document.getElementById("errorMessage");
  const usernameError = document.getElementById("usernameError");
  const passwordError = document.getElementById("passwordError");
  const usernamePasswordError = document.getElementById(
    "usernamePasswordError"
  );

  form.addEventListener("submit", async (event) => {
    event.preventDefault();

    const username = document.getElementById("username").value.trim();
    const password = document.getElementById("password").value.trim();

    usernameError.textContent = "";
    passwordError.textContent = "";
    errorMessage.textContent = "";
    if (!username || !password) {
      errorMessage.textContent = "Username dan password harus diisi.";
      return;
    }

    if (username.length > 8 || password.length > 8) {
      if (username.length > 8) {
        usernameError.textContent =
          "Username tidak boleh lebih dari 8 karakter.";
      }
      if (password.length > 8) {
        passwordError.textContent =
          "Password tidak boleh lebih dari 8 karakter.";
      }
      if (username.length > 8 && password.length > 8) {
        usernamePasswordError.textContent =
          "Username dan Password tidak boleh lebih dari 8 karakter.";
      }
      return;
    }

    try {
      const response = await fetch("http://localhost:3000/api/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ username, password }),
      });

      const result = await response.json();

      if (response.ok) {
        alert("Login berhasil!");
      } else {
        errorMessage.textContent = result.message;
      }
    } catch (error) {
      errorMessage.textContent = "Terjadi kesalahan. Silakan coba lagi.";
    }
  });
});
