const express = require("express");
const cors = require("cors");

const app = express();
app.use(express.json());
app.use(cors()); // Izinkan request dari frontend

// Data dummy
const users = [
  { username: "admin", password: "1234" },
  { username: "user", password: "password" },
];

app.post("/api/login", (req, res) => {
  const { username, password } = req.body;

  const user = users.find(
    (u) => u.username === username && u.password === password
  );

  if (user) {
    res.json({ message: "Login berhasil!", username });
  } else {
    res.status(400).json({ message: "Username atau password salah!" });
  }
});

app.listen(3000, () =>
  console.log("✅ Server berjalan di http://localhost:3000")
);
