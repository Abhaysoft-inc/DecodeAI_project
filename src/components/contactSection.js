import React from "react";

const ContactSection = () => {
    return (
        <section className="py-16 bg-gradient-to-br from-gray-900 to-black text-white">
            <div className="container mx-auto px-4">
                <h2 className="text-4xl font-bold text-center mb-8 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600">
                    Get in Touch
                </h2>
                <p className="text-center text-gray-400 mb-12">
                    Have questions or want to collaborate? We'd love to hear from you!
                </p>

                <form className="max-w-2xl mx-auto bg-gray-800 p-8 rounded-lg shadow-lg">
                    <div className="mb-6">
                        <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                            Your Name
                        </label>
                        <input
                            type="text"
                            id="name"
                            className="w-full p-3 rounded-lg bg-gray-700 text-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                            placeholder="Enter your name"
                        />
                    </div>
                    <div className="mb-6">
                        <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                            Your Email
                        </label>
                        <input
                            type="email"
                            id="email"
                            className="w-full p-3 rounded-lg bg-gray-700 text-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                            placeholder="Enter your email"
                        />
                    </div>
                    <div className="mb-6">
                        <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                            Your Message
                        </label>
                        <textarea
                            id="message"
                            rows="5"
                            className="w-full p-3 rounded-lg bg-gray-700 text-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                            placeholder="Enter your message"
                        ></textarea>
                    </div>
                    <button
                        type="submit"
                        className="w-full py-3 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg text-white font-medium hover:shadow-lg hover:shadow-blue-500/25 transition duration-300"
                    >
                        Send Message
                    </button>
                </form>
            </div>
        </section>
    );
};

export default ContactSection;