import { useState, useEffect } from "react";
import letter1 from "../../Assets/letter.jpeg";
import letter2 from "../../Assets/letter1.jfif";
import letter3 from "../../Assets/letter2.jfif";
import bgImage from "../../Assets/bgimage.jpg";

export default function LoveLetterPage() {

  const [seconds, setSeconds] = useState(10);
  const [showButton, setShowButton] = useState(false);
  const [showLetters, setShowLetters] = useState(false);
  const [selectedLetter, setSelectedLetter] = useState(null);

  const letters = [letter1, letter2, letter3];

  useEffect(() => {
    if (seconds > 0) {
      const timer = setTimeout(() => {
        setSeconds(seconds - 1);
      }, 1000);
      return () => clearTimeout(timer);
    }

    if (seconds === 0) {
      setShowButton(true);
    }
  }, [seconds]);

  return (
    <div className="min-h-screen relative overflow-hidden bg-pink-100">

      {/* ❤️ Floating Hearts */}
      {[...Array(20)].map((_, i) => (
        <div
          key={i}
          className="heart"
          style={{
            left: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 8}s`,
            fontSize: `${20 + Math.random() * 20}px`
          }}
        >
          ❤️
        </div>
      ))}

      {/* ❤️ Countdown Screen */}
      {!showLetters && (
        <div
          className="absolute inset-0 bg-cover bg-center flex items-center justify-center"
          style={{ backgroundImage: `url(${bgImage})` }}
        >
          <div className="absolute inset-0 bg-pink-900/60"></div>

          <div className="relative z-10 bg-white/90 backdrop-blur-md p-10 rounded-3xl shadow-2xl text-center">

            <h1 className="md:text-3xl text-[20px] font-bold text-pink-600 mb-6">
              💖 A Special Love Letter 💖
            </h1>

            {!showButton ? (
              <>
                <p className="text-gray-700 mb-4">Unlocking in...</p>
                <div className="text-6xl font-bold text-red-500 animate-bounce">
                  {seconds}
                </div>
              </>
            ) : (
              <button
                onClick={() => setShowLetters(true)}
                className="bg-pink-500 hover:bg-pink-600 text-white px-8 py-3 rounded-full text-lg shadow-lg transition duration-300"
              >
                💌 Open The Letters
              </button>
            )}

          </div>
        </div>
      )}

      {/* 💌 Letters Grid */}
      {showLetters && !selectedLetter && (
        <div className="p-6 md:pt-20 relative z-10">

          <h2 className="md:text-3xl font-bold text-center text-pink-600 mb-10">
            💌 Choose Your Letter 💌
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">

            {letters.map((letter, index) => (
              <div
                key={index}
                onClick={() => setSelectedLetter(letter)}
                className="bg-white shadow-xl rounded-2xl p-4 hover:scale-105 transition duration-300 cursor-pointer"
              >
                <img
                  src={letter}
                  alt={`Letter ${index + 1}`}
                  className="w-full h-80 object-contain rounded-lg"
                />
              </div>
            ))}

          </div>
        </div>
      )}

      {/* 📜 Opened Letter */}
      {selectedLetter && (
        <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 p-4">

          <div className="bg-white p-6 rounded-2xl shadow-2xl relative max-w-md w-full">

            <button
              onClick={() => setSelectedLetter(null)}
              className="absolute top-3 right-3 bg-pink-500 text-white px-4 py-1 rounded-full"
            >
              ✖
            </button>

            <img
              src={selectedLetter}
              alt="Opened Letter"
              className="w-full h-auto object-contain rounded-lg"
            />

          </div>

        </div>
      )}

    </div>
  );
}