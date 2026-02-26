import { useState } from "react";
import "./Login.css";

export default function Login({ onLogin }) {
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    if (password === "2711") {
      onLogin();
    } else {
      alert("Incorrect password 😢");
    }
  };

  return (
    <div className="login-container">
      <div className="login-card">
        <h2 className="login-title fancy">💖 Enter Secret Password 💖</h2>
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="login-input"
        />
        <button className="login-btn" onClick={handleLogin}>
          Next
        </button>
      </div>
    </div>
  );
}