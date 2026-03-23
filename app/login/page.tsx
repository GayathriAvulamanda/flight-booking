"use client";
import { useState } from "react";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e: any) => {
    e.preventDefault();

    if (!email || !password) {
      alert("Please enter email and password");
      return;
    }

    if (password.length < 6) {
      alert("Password must be at least 6 characters");
      return;
    }

    alert("Login Successful ✅");
  };

  return (
    <div style={styles.container}>
      {/* Overlay */}
      <div style={styles.overlay}></div>

      {/* Login Box */}
      <div style={styles.box}>
        <h2 style={styles.title}>✈️ Flight Login</h2>

        <form onSubmit={handleLogin} style={styles.form}>
          {/* Email */}
          <input
            type="email"
            placeholder="Enter Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            style={styles.input}
          />

          {/* Password */}
          <input
            type="password"
            placeholder="Enter Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            style={styles.input}
          />

          {/* Options */}
          <div style={styles.options}>
            <label>
              <input type="checkbox" /> Remember
            </label>
            <span style={styles.forgot}>Forgot?</span>
          </div>

          {/* Button */}
          <button type="submit" style={styles.button}>
            Login
          </button>
        </form>
      </div>
    </div>
  );
}

const styles = {
  container: {
    height: "100vh",
    backgroundImage:
      "url('https://images.unsplash.com/photo-1436491865332-7a61a109cc05')",
    backgroundSize: "cover",
    backgroundPosition: "center",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    position: "relative" as const,
  },

  overlay: {
    position: "absolute" as const,
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: "rgba(0,0,0,0.4)",
  },

  box: {
    position: "relative" as const,
    width: "350px",
    backgroundColor: "#fff",
    padding: "25px",
    borderRadius: "12px",
    boxShadow: "0 10px 25px rgba(0,0,0,0.3)",
  },

  title: {
    textAlign: "center" as const,
    marginBottom: "15px",
  },

  form: {
    display: "flex",
    flexDirection: "column" as const,
    gap: "12px", // ✅ spacing fix
  },

  input: {
    padding: "10px",
    borderRadius: "6px",
    border: "1px solid #ccc",
    fontSize: "14px",
  },

  options: {
    display: "flex",
    justifyContent: "space-between",
    fontSize: "14px",
  },

  forgot: {
    color: "blue",
    cursor: "pointer",
  },

  button: {
    padding: "10px",
    borderRadius: "6px",
    border: "none",
    backgroundColor: "#4f46e5",
    color: "#fff",
    cursor: "pointer",
  },
};