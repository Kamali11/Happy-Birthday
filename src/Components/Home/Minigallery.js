import { useState } from "react";
import m1 from '../../Assets/memories/m15.jpeg'
import m2 from '../../Assets/memories/m16.jpeg'
import m3 from '../../Assets/memories/m20.jpeg'
import m4 from '../../Assets/memories/m26.jpeg'
import m5 from '../../Assets/memories/m30.jpeg'
import m6 from '../../Assets/memories/m35.jpeg'
import m7 from '../../Assets/memories/m36.jpeg'
import m8 from '../../Assets/memories/m40.jpeg'


export default function Minigallery() {
    const [selected, setSelected] = useState(null);

    const images = [
        { id: 1, src: m1, title: "Cute Smile 💕", position: "object-top" },
        { id: 2, src: m2, title: "Happiness 💕", position: "object-top" },
        { id: 3, src: m3, title: "Addiction 💕", position: "object-cover" },
        { id: 4, src: m4, title: "Beautiful Day 💕", position: "object-cover" },
        { id: 5, src: m5, title: "Fight 💕", position: "object-cover" },
        { id: 6, src: m6, title: "Mine 💕", position: "object-contain" },
        { id: 7, src: m7, title: "Rugged 💕", position: "object-top" },
        { id: 8, src: m8, title: "Gethu 💕", position: "object-cover" },


    ];

    return (
        <div className="relative min-h-screen bg-gradient-to-br from-pink-100 via-rose-100 to-purple-100 overflow-hidden">

            {/* 💖 Floating Hearts Background */}
            <div className="hearts-container">
                {[...Array(25)].map((_, i) => (
                    <span
                        key={i}
                        className="heart"
                        style={{
                            left: `${Math.random() * 100}%`,
                            animationDuration: `${6 + Math.random() * 6}s`,
                            animationDelay: `${Math.random() * 5}s`,
                            fontSize: `${14 + Math.random() * 20}px`
                        }}
                    >
                        ❤️
                    </span>
                ))}
            </div>

            <div className="relative z-10 p-6 md:pt-20">

                {/* Title */}
                <h1 className="md:text-4xl font-extrabold text-center text-pink-600 fancy mb-8">
                    Love Mini Gallery 💕
                </h1>

                {/* 💎 FIXED GRID */}
                <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4">

                    {images.map((img) => (
                        <div
                            key={img.id}
                            onClick={() => setSelected(img)}
                            className="group relative overflow-hidden rounded-2xl shadow-lg cursor-pointer"
                        >
                            <div className="aspect-square">
                                <img
                                    src={img.src}   // ✅ FIXED
                                    alt="cute"
                                    className={`w-full h-full object-cover ${img.position || "object-center"} transition duration-500 group-hover:scale-110`}
                                />
                            </div>

                            <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition flex items-center justify-center">
                                <p className="text-white font-bold">{img.title}</p>
                            </div>
                        </div>
                    ))}

                </div>
            </div>

            {/* Popup */}
            {selected && (
                <div className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-50 p-4">
                    <div className="bg-white rounded-3xl p-6 max-w-md w-full animate-popup relative">
                        <button
                            onClick={() => setSelected(null)}
                            className="absolute top-3 right-4 text-gray-600 text-xl"
                        >
                            ✖
                        </button>

                        <div className="aspect-[3/4] mb-4">
                            <img
                                src={selected.src}
                                alt=""
                                className="w-full h-full object-cover rounded-xl"
                            />
                        </div>
                        

                        <h2 className="text-center font-bold text-pink-600">
                            Sweet Memories 💕
                        </h2>
                    </div>
                </div>
            )}

        </div>
    );
}