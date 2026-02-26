import { useState } from "react";
import "../Login/Login.css"; // reuse login CSS

export default function OTP({ onVerify }) {
  const [otp, setOtp] = useState("");

  const handleVerify = () => {
    if (otp === "2711") {
      onVerify();
    } else {
      alert("Incorrect OTP 😢");
    }
  };

  return (
    <div className="login-container">
      <div className="login-card">
        <h2 className="login-title">💌 Enter OTP 💌</h2>
        <input
          type="text"
          placeholder="OTP"
          value={otp}
          onChange={(e) => setOtp(e.target.value)}
          className="login-input"
        />
        <button className="login-btn" onClick={handleVerify}>
          Verify
        </button>
      </div>
    </div>
  );
}