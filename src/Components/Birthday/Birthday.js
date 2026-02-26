import React, { useState } from "react";
import KingImage from "../../Assets/birthday.jpeg";

export default function Birthday() {
  const wishes = [
    "👑 My Dearest King, you are my forever hero and my greatest blessing 💖",
    "🌹 Every heartbeat of mine whispers your name with love 💓",
    "✨ With you, even ordinary days feel magical and golden 🌟",
    "💞 Your smile is my favorite place in the world",
    "🛡️ You protect my heart like a true King",
    "💘 Loving you is the easiest and sweetest thing in my life",
    "🌈 You color my world with happiness and warmth",
    "🙏 I thank God every single day for giving me YOU",
    "🔥 Your love gives me strength and courage",
    "🎶 My heart sings happily whenever I think of you",
    "💎 You are rare, precious, and priceless to me",
    "🌙 Even the moon feels jealous of your glow",
    "💖 I fall in love with you more and more every day",
    "🎂 Happy Birthday My King 👑❤️ Forever Yours Always 💋"
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const nextWish = () => {
    if (currentIndex < wishes.length - 1) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const prevWish = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  return (
    <div className=" min-h-screen flex items-center justify-center bg-gradient-to-br from-pink-200 via-rose-100 to-red-200 p-4">

      {/* Outer Card */}
      <div className="bg-white shadow-2xl rounded-3xl p-6 w-full max-w-md text-center transition-all duration-500">

        {/* Inner Card */}
        <div className="bg-gradient-to-br from-pink-50 to-rose-100 border-2 border-red-300 rounded-2xl p-6 shadow-inner">

          <h2 className="md:text-3xl font-extrabold text-red-600 mb-6 tracking-wide">
            💌 Birthday Wishes 💌
          </h2>

          {/* Fancy Wish Text */}
          <p className="text-gray-800 text-xl font-serif italic leading-relaxed min-h-[120px] flex items-center justify-center transition-all duration-500">
            {wishes[currentIndex]}
          </p>

          {/* Show image on last wish */}
          {currentIndex === wishes.length - 1 && (
            <div className="mt-6">
              <img
                src={KingImage}
                alt="My King"
                className="w-full h-full object-cover rounded-xl shadow-lg"
              />
            </div>
          )}

          {/* Buttons */}
          <div className="flex flex-col md:flex-row gap-4 items-center justify-center mt-8">

            <button
              onClick={prevWish}
              disabled={currentIndex === 0}
              className={`px-5 py-2 rounded-full shadow-md transition duration-300 ${currentIndex === 0
                  ? "bg-gray-300 cursor-not-allowed"
                  : "bg-pink-400 hover:bg-pink-500 text-white"
                }`}
            >
              ⬅ Previous
            </button>

            <button
              onClick={nextWish}
              disabled={currentIndex === wishes.length - 1}
              className={`px-5 py-2 rounded-full shadow-md transition duration-300 ${currentIndex === wishes.length - 1
                  ? "bg-gray-300 cursor-not-allowed"
                  : "bg-red-500 hover:bg-red-600 text-white"
                }`}
            >
              Next ➡ 💖
            </button>

          </div>

        </div>
      </div>
    </div>
  );
}