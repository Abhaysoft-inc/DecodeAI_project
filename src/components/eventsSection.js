"use client";
import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Stars } from "@react-three/drei";

const EventsSection = () => {
    const [events, setEvents] = useState([
        {
            id: 1,
            title: "AI Conference 2025",
            date: "May 15-17, 2025",
            location: "San Francisco, CA",
            description:
                "Join industry leaders for the latest in artificial intelligence innovations and networking opportunities.",
            imageUrl: "/images/ai-conference.jpg",
        },
        {
            id: 2,
            title: "Machine Learning Workshop",
            date: "June 5, 2025",
            location: "Virtual Event",
            description:
                "Hands-on workshop covering advanced ML techniques and practical applications.",
            imageUrl: "/images/ml-workshop.jpg",
        },
        {
            id: 3,
            title: "DecodeAI Hackathon",
            date: "July 10-12, 2025",
            location: "New York, NY",
            description:
                "48-hour coding challenge with prizes for the most innovative AI solutions.",
            imageUrl: "/images/hackathon.jpg",
        },
    ]);

    const [activeEvent, setActiveEvent] = useState(0);
    const intervalRef = useRef(null);

    // Auto-rotate through events
    useEffect(() => {
        intervalRef.current = setInterval(() => {
            setActiveEvent((prev) => (prev + 1) % events.length);
        }, 5000);

        return () => clearInterval(intervalRef.current);
    }, [events.length]);

    // Reset interval when manually changing event
    const handleEventChange = (index) => {
        clearInterval(intervalRef.current);
        setActiveEvent(index);
        intervalRef.current = setInterval(() => {
            setActiveEvent((prev) => (prev + 1) % events.length);
        }, 5000);
    };

    return (
        <section className="relative py-16 bg-black text-white">
            {/* 3D Background */}
            <div className="absolute inset-0 -z-10">
                <Canvas>
                    <Stars radius={100} depth={50} count={5000} factor={4} />
                    <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={0.5} />
                </Canvas>
            </div>

            <div className="container mx-auto px-4">
                <motion.h2
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}
                    className="text-4xl font-bold text-center mb-12 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600"
                >
                    Upcoming Events
                </motion.h2>

                <div className="relative">
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={activeEvent}
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.9 }}
                            transition={{ duration: 0.8 }}
                            className="flex flex-col lg:flex-row items-center gap-8 bg-gray-800 bg-opacity-50 rounded-2xl p-6 backdrop-blur-sm shadow-2xl"
                        >
                            {/* 3D Rotating Card */}
                            <motion.div
                                className="lg:w-1/2 relative aspect-video overflow-hidden rounded-xl"
                                whileHover={{ rotateY: 15, rotateX: 15 }}
                                transition={{ type: "spring", stiffness: 200 }}
                            >
                                <div className="absolute inset-0 bg-gradient-to-tr from-blue-600 to-purple-600 opacity-70 mix-blend-multiply" />
                                <img
                                    src={events[activeEvent].imageUrl}
                                    alt={events[activeEvent].title}
                                    className="w-full h-full object-cover rounded-xl"
                                />
                            </motion.div>

                            <div className="lg:w-1/2">
                                <motion.div
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ duration: 0.8 }}
                                    className="flex items-center mb-4"
                                >
                                    <svg
                                        className="w-5 h-5 text-blue-400 mr-2"
                                        fill="currentColor"
                                        viewBox="0 0 20 20"
                                    >
                                        <path
                                            fillRule="evenodd"
                                            d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
                                            clipRule="evenodd"
                                        />
                                    </svg>
                                    <span className="text-lg">{events[activeEvent].date}</span>
                                </motion.div>

                                <motion.div
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ duration: 0.8, delay: 0.2 }}
                                    className="flex items-center mb-6"
                                >
                                    <svg
                                        className="w-5 h-5 text-blue-400 mr-2"
                                        fill="currentColor"
                                        viewBox="0 0 20 20"
                                    >
                                        <path
                                            fillRule="evenodd"
                                            d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                                            clipRule="evenodd"
                                        />
                                    </svg>
                                    <span className="text-lg">{events[activeEvent].location}</span>
                                </motion.div>

                                <motion.p
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ duration: 0.8, delay: 0.4 }}
                                    className="text-gray-300 mb-8"
                                >
                                    {events[activeEvent].description}
                                </motion.p>

                                <motion.button
                                    whileHover={{ scale: 1.1 }}
                                    whileTap={{ scale: 0.9 }}
                                    className="px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg font-medium hover:shadow-lg hover:shadow-blue-500/25 transition duration-300"
                                >
                                    Register Now
                                </motion.button>
                            </div>
                        </motion.div>
                    </AnimatePresence>

                    <div className="flex justify-center mt-8">
                        {events.map((_, index) => (
                            <button
                                key={index}
                                onClick={() => handleEventChange(index)}
                                className={`w-3 h-3 mx-1 rounded-full transition-all duration-300 ${index === activeEvent
                                        ? "bg-blue-500 w-8"
                                        : "bg-gray-500 hover:bg-gray-400"
                                    }`}
                                aria-label={`Go to event ${index + 1}`}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default EventsSection;