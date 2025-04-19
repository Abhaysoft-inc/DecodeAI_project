"use client"
import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import TerminalSection from "@/components/terminalSection";
import EventsSection from "@/components/eventsSection";
import TeamsSection from "@/components/teamsSection";

import { motion } from "framer-motion"; // For animations, install framer-motion
import ContactSection from "@/components/contactSection";
import Footer from "@/components/footerSection";


export default function Home() {

  return (

    <>




      <div className="relative flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white text-center p-6">
        {/* Navigation Bar */}
        <div className="fixed top-0 left-0 w-full bg-gray-800 bg-opacity-90 text-white py-4 px-8 flex justify-between items-center shadow-lg z-50">
          <div className="text-lg font-bold">KNIT Programming Club</div>
          <div className="flex space-x-6">
            <a href="#about" className="hover:text-cyan-400 transition-colors">
              About
            </a>
            <a href="#events" className="hover:text-cyan-400 transition-colors">
              Events
            </a>
            <a href="#resources" className="hover:text-cyan-400 transition-colors">
              Resources
            </a>
            <a href="#contact" className="hover:text-cyan-400 transition-colors">
              Contact
            </a>
          </div>
        </div>

        {/* Club Logo */}
        <motion.div
          className="mt-20 mb-6" // Added margin to avoid overlap with navbar
          initial={{ opacity: 0, scale: 0.8, rotateY: 90 }}
          animate={{ opacity: 1, scale: 1.2, rotateY: 0 }}
          transition={{ duration: 1.5, ease: "easeInOut" }}
        >
          <Image
            src="/images/logo.jpg" // Path to your logo
            alt="KNIT Programming Club Logo"
            width={250} // Increased size
            height={250}
            className="rounded-full shadow-2xl"
          />
        </motion.div>

        {/* Club Name and Tagline */}
        <motion.h1
          className="text-5xl font-bold text-cyan-400 mb-4"
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          KNIT Programming Club
        </motion.h1>
        <motion.p
          className="text-xl text-gray-400 mb-8"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.8 }}
        >
          "Code. Innovate. Inspire."
        </motion.p>

        {/* Club Vision and Mission */}
        <motion.div
          id="about"
          className="max-w-2xl text-gray-300 mb-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
        >
          <p>
            Welcome to the KNIT Programming Club! Our mission is to foster a
            community of passionate coders, innovators, and problem-solvers. We
            aim to empower students with the skills and knowledge to excel in the
            world of technology.
          </p>
        </motion.div>

        {/* Call-to-Action Button */}
        <motion.button
          className="bg-cyan-500 text-gray-900 px-8 py-4 rounded-lg font-medium hover:bg-cyan-400 transition-transform transform hover:scale-110 active:scale-95"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={() => alert("Welcome to the club!")}
        >
          Join Us
        </motion.button>
      </div>




      <TeamsSection />
      <TerminalSection />
      <EventsSection />
      <ContactSection />
      <Footer />


    </>
  );
}
