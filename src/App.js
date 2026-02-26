import { Routes, Route } from "react-router-dom";
import { useState } from "react";
import Navbar from "./Components/Navbar/Navbar";
import Home from "./Components/Home/Home";
import Footer from "./Components/Footer/Footer";
import LoveLetter from "./Components/LoveLetter/LoveLetter";
import Memories from "./Components/Memories/Memories";
import Birthday from "./Components/Birthday/Birthday";
import OurStory from "./Components/Story/Story";
import Splash from "./Components/Splash/Splash";
import Login from "./Components/Login/Login";
import OTP from "./Components/OTP/OTP";

function App() {
  const [step, setStep] = useState("splash"); // splash -> login -> otp -> main
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  if (step === "splash") {
    return <Splash onFinish={() => setStep("login")} />;
  }

  if (step === "login") {
    return <Login onLogin={() => setStep("otp")} />;
  }

  if (step === "otp") {
    return (
      <OTP
        onVerify={() => {
          setIsLoggedIn(true);
          setStep("main");
        }}
      />
    );
  }

  if (step === "main" && isLoggedIn) {
    return (
      <div className="App">
        <Navbar />
        <div className="mt-20">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/letter" element={<LoveLetter />} />
            <Route path="/memories" element={<Memories />} />
            <Route path="/birthday" element={<Birthday />} />
            <Route path="/story" element={<OurStory />} />
          </Routes>
        </div>
        <Footer />
      </div>
    );
  }

  return null;
}

export default App;