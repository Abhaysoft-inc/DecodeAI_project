import React from "react";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";

const Footer = () => {
    return (
        <footer className="bg-gray-900 text-gray-400 py-8">
            <div className="container mx-auto px-4 text-center">
                <h3 className="text-xl font-bold text-white mb-4">DecodeAI</h3>
                <p className="text-sm mb-6">
                    Empowering the next generation of tech enthusiasts. Join us to learn, grow, and innovate.
                </p>

                <div className="flex justify-center space-x-6 mb-6">
                    <a
                        href="https://facebook.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-400 hover:text-blue-500 transition"
                    >
                        <FaFacebook size={24} />
                    </a>
                    <a
                        href="https://twitter.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-400 hover:text-blue-400 transition"
                    >
                        <FaTwitter size={24} />
                    </a>
                    <a
                        href="https://instagram.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-400 hover:text-pink-500 transition"
                    >
                        <FaInstagram size={24} />
                    </a>
                    <a
                        href="https://linkedin.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-400 hover:text-blue-600 transition"
                    >
                        <FaLinkedin size={24} />
                    </a>
                </div>

                <p className="text-sm">
                    &copy; {new Date().getFullYear()} DecodeAI. All rights reserved.
                </p>
            </div>
        </footer>
    );
};

export default Footer;