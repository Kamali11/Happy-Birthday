import { useState, useEffect } from "react";
import Logo from "../../Assets/Logo.png";
import bgImage from "../../Assets/bgimage.jpg";
import { Link } from "react-router-dom";
import { FaBarsStaggered } from "react-icons/fa6";
import { FaWindowClose } from "react-icons/fa";
import { NavLink } from "react-router-dom";

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    // Prevent background scroll when menu open
    useEffect(() => {
        document.body.style.overflow = isOpen ? "hidden" : "auto";
    }, [isOpen]);

    return (
        <>
            {/* ✅ Fixed Navbar */}
            <div className="fixed top-0 left-0 w-full bg-white flex md:justify-around justify-between items-center p-4 shadow-md z-40">

                {/* Logo */}
                <div className="md:w-28 w-16">
                    <img src={Logo} alt="Logo" />
                </div>

                {/* Desktop Menu */}
                <nav className="hidden md:flex fancy">
                    <ul className="text-[25px] font-bold flex gap-8 items-center">

                        <li>
                            <NavLink
                                to="/"
                                className={({ isActive }) =>
                                    isActive
                                        ? "bg-gradient-to-r from-pink-500 via-red-400 to-rose-500 text-white px-4 py-2 rounded-full shadow-lg transition"
                                        : "text-gray-700 hover:text-pink-500 transition"
                                }
                            >
                                Home
                            </NavLink>
                        </li>

                        <li>
                            <NavLink
                                to="/story"
                                className={({ isActive }) =>
                                    isActive
                                        ? "bg-gradient-to-r from-pink-500 via-red-400 to-rose-500 text-white px-4 py-2 rounded-full shadow-lg transition"
                                        : "text-gray-700 hover:text-pink-500 transition"
                                }
                            >
                                Our Story
                            </NavLink>
                        </li>

                        <li>
                            <NavLink
                                to="/memories"
                                className={({ isActive }) =>
                                    isActive
                                        ? "bg-gradient-to-r from-pink-500 via-red-400 to-rose-500 text-white px-4 py-2 rounded-full shadow-lg transition"
                                        : "text-gray-700 hover:text-pink-500 transition"
                                }
                            >
                                Memories
                            </NavLink>
                        </li>

                        <li>
                            <NavLink
                                to="/birthday"
                                className={({ isActive }) =>
                                    isActive
                                        ? "bg-gradient-to-r from-purple-500 via-pink-400 to-red-400 text-white px-4 py-2 rounded-full shadow-lg transition"
                                        : "text-gray-700 hover:text-pink-500 transition"
                                }
                            >
                                BirthDay Wishes
                            </NavLink>
                        </li>

                        <li>
                            <NavLink to="/letter">
                                {({ isActive }) => (
                                    <button
                                        className={`px-8 py-3 rounded-full text-xl shadow-lg transition duration-300 ${isActive
                                                ? "bg-gradient-to-r from-red-500 via-pink-500 to-rose-500 text-white"
                                                : "bg-pink-500 hover:bg-pink-600 text-white"
                                            }`}
                                    >
                                        💌 Love Letter
                                    </button>
                                )}
                            </NavLink>
                        </li>

                    </ul>
                </nav>
                {/* Mobile Hamburger */}
                <div
                    className="md:hidden text-2xl cursor-pointer"
                    onClick={() => setIsOpen(true)}
                >
                    <FaBarsStaggered color="#9E182B" />
                </div>
            </div>

            {/* ✅ Mobile Full Screen Menu */}
            {isOpen && (
                <div
                    className="fixed inset-0 w-full h-screen bg-cover bg-center flex items-center justify-center z-50 md:hidden"
                    style={{ backgroundImage: `url(${bgImage})` }}
                >
                    {/* Dark Overlay */}
                    <div className="absolute inset-0 bg-black/10"></div>

                    {/* Close Button */}
                    <button
                        className="absolute top-6 right-6 text-3xl text-white z-50"
                        onClick={() => setIsOpen(false)}
                    >
                        <FaWindowClose color="#9E182B" />
                    </button>

                    {/* Menu Items */}
                    <ul className="relative flex flex-col gap-8 text-white text-3xl font-bold fancy text-center">
                        <li><Link to="/" onClick={() => setIsOpen(false)}>Home</Link></li>
                        <li><Link to="/story" onClick={() => setIsOpen(false)}>Our Story</Link></li>
                        <li><Link to="/memories" onClick={() => setIsOpen(false)}>Memories</Link></li>

                        <li><Link to="/birthday" onClick={() => setIsOpen(false)}>BirthDay</Link></li>
                        <li>
                            <Link to="/letter" onClick={() => setIsOpen(false)}>
                                <button className="bg-pink-500 hover:bg-pink-600 text-white px-8 py-3 rounded-full text-xl shadow-lg transition duration-300">
                                    💌 Love Letter
                                </button> </Link>
                        </li>
                    </ul>
                </div>
            )}
        </>
    );
}