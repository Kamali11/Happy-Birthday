import { useEffect } from "react";
import "./Splash.css";

export default function Splash({ onFinish }) {
  useEffect(() => {
    const timer = setTimeout(() => onFinish(), 10000); // 10 seconds
    return () => clearTimeout(timer);
  }, [onFinish]);

  return (
    <div className="splash-container">
      <h1 className="floating-text fancy">💕 Happy Birthday En Anbey 💕</h1>
    </div>
  );
}