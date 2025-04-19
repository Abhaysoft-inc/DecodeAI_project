import React from "react";

const resources = [
    {
        title: "FreeCodeCamp",
        description: "Learn to code for free with interactive lessons and projects.",
        link: "https://www.freecodecamp.org/",
        image: "https://upload.wikimedia.org/wikipedia/commons/3/39/FreeCodeCamp_logo.png",
    },
    {
        title: "GeeksforGeeks",
        description: "Comprehensive tutorials and coding problems for all levels.",
        link: "https://www.geeksforgeeks.org/",
        image: "https://upload.wikimedia.org/wikipedia/commons/4/43/GeeksforGeeks.svg",
    },
    {
        title: "LeetCode",
        description: "Practice coding problems and prepare for technical interviews.",
        link: "https://leetcode.com/",
        image: "https://upload.wikimedia.org/wikipedia/commons/1/19/LeetCode_logo_black.png",
    },
    {
        title: "HackerRank",
        description: "Solve coding challenges and compete with developers worldwide.",
        link: "https://www.hackerrank.com/",
        image: "https://upload.wikimedia.org/wikipedia/commons/6/65/HackerRank_logo.png",
    },
    {
        title: "W3Schools",
        description: "Learn web development with easy-to-follow tutorials.",
        link: "https://www.w3schools.com/",
        image: "https://upload.wikimedia.org/wikipedia/commons/3/3d/W3Schools_logo.png",
    },
    {
        title: "Codeforces",
        description: "Participate in competitive programming contests and improve your skills.",
        link: "https://codeforces.com/",
        image: "https://sta.codeforces.com/s/73599/images/codeforces-logo-with-telegram.png",
    },
];

const ResourcesSection = () => {
    return (
        <section className="py-16 bg-gradient-to-br from-gray-900 to-black text-white">
            <div className="container mx-auto px-4">
                <h2 className="text-4xl font-bold text-center mb-8 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600">
                    Coding Resources
                </h2>
                <p className="text-center text-gray-400 mb-12">
                    Explore these amazing platforms to enhance your coding skills and prepare for your next challenge.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {resources.map((resource, index) => (
                        <div
                            key={index}
                            className="bg-gray-800 rounded-lg shadow-lg overflow-hidden hover:scale-105 transition-transform duration-300"
                        >
                            <img
                                src={resource.image}
                                alt={resource.title}
                                className="w-full h-40 object-contain bg-gray-900 p-4"
                            />
                            <div className="p-6">
                                <h3 className="text-xl font-bold mb-2">{resource.title}</h3>
                                <p className="text-gray-400 mb-4">{resource.description}</p>
                                <a
                                    href={resource.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-block px-4 py-2 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg text-white font-medium hover:shadow-lg hover:shadow-blue-500/25 transition duration-300"
                                >
                                    Visit
                                </a>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ResourcesSection;