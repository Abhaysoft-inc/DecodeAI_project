"use client";
import { useState, useRef, useEffect } from "react";

export default function TerminalSection() {
    const [input, setInput] = useState("");
    const [history, setHistory] = useState([
        { text: "Welcome to PTSC Terminal. Type 'help' to see available commands.", type: "system" }
    ]);
    const inputRef = useRef(null);
    const terminalRef = useRef(null);

    const commands = {
        help: {
            description: "Show available commands",
            action: () => {
                return Object.entries(commands).map(([cmd, info]) =>
                    `${cmd} - ${info.description}`
                ).join('\n');
            }
        },
        contact: {
            description: "Display contact information",
            action: () => {
                return "Email: contact@decodeai.com\nPhone: +1 (555) 123-4567\nTwitter: @decodeai";
            }
        },
        about: {
            description: "Show information about DecodeAI",
            action: () => {
                return `  
                    The Programming and Tech Skill Club at KNIT Sultanpur is a vibrant
                    community of students who share a common love for programming.   
                    Our club brings together individuals across all skill levels—whether you're a beginner or a seasoned coder—to explore the world of competitive programming, web development, machine learning, app development and beyond. Through regular coding contests, hackathons, workshops, and peer-to-peer learning, we aim to cultivate problem-solving skills that are essential for success in the tech world.`;
            }
        },
        clear: {
            description: "Clear the terminal",
            action: () => {
                setHistory([]);
                return null;
            }
        },
        ask: {
            description: "Ask a question and get an answer from Google Gemini API",
            action: async (question) => {
                if (!question) {
                    return "Please provide a question. Usage: ask <your question>";
                }

                try {
                    const response = await fetch("https://api.google.com/gemini/v1/ask", {
                        method: "POST",
                        headers: {
                            "Content-Type": "application/json",
                            "Authorization": `Bearer ${process.env.NEXT_PUBLIC_GEMINI_API_KEY}` // Use env variable
                        },
                        body: JSON.stringify({ query: question })
                    });

                    if (!response.ok) {
                        throw new Error("Failed to fetch the answer. Please try again.");
                    }

                    const data = await response.json();
                    return data.answer || "No answer found.";
                } catch (error) {
                    return `Error: ${error.message}`;
                }
            }
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!input.trim()) return;

        const userInput = input.trim();
        const [command, ...args] = userInput.split(" ");
        const argument = args.join(" ");

        setHistory(prev => [...prev, { text: `$ ${userInput}`, type: "input" }]);
        setInput("");

        // Process command
        if (commands[command]) {
            const result = await commands[command].action(argument);
            if (result !== null) {
                setHistory(prev => [...prev, { text: result, type: "output" }]);
            }
        } else {
            setHistory(prev => [...prev, {
                text: `Command not found: ${command}. Type 'help' to see available commands.`,
                type: "error"
            }]);
        }
    };

    // Auto-scroll to bottom when history updates
    useEffect(() => {
        if (terminalRef.current) {
            terminalRef.current.scrollTop = terminalRef.current.scrollHeight;
        }
    }, [history]);

    // Focus input when clicking on terminal
    const focusInput = () => {
        if (inputRef.current) {
            inputRef.current.focus();
        }
    };

    return (
        <div className="min-h-screen bg-gray-900 text-white p-4 flex flex-col items-center">
            <h1 className="text-3xl font-bold mb-8">PTSC Terminal</h1>

            <div
                className="w-full max-w-3xl bg-black rounded-lg shadow-2xl overflow-hidden"
                onClick={focusInput}
            >
                {/* macOS-style Header */}
                <div className="flex items-center bg-gray-800 px-4 py-2">
                    <div className="flex space-x-2">
                        <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                        <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                        <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                    </div>
                    <div className="flex-grow text-center text-gray-400 text-sm">
                        DecodeAI Terminal
                    </div>
                </div>

                {/* Terminal Body */}
                <div
                    ref={terminalRef}
                    className="h-80 p-4 overflow-y-auto font-mono text-sm"
                >
                    {history.map((entry, index) => (
                        <div
                            key={index}
                            className={`mb-2 whitespace-pre-wrap ${entry.type === "error" ? "text-red-400" :
                                entry.type === "input" ? "text-green-400" :
                                    entry.type === "system" ? "text-blue-400" :
                                        "text-gray-300"
                                }`}
                        >
                            {entry.text}
                        </div>
                    ))}
                </div>

                {/* Input Section */}
                <form onSubmit={handleSubmit} className="border-t border-gray-700 p-2 flex">
                    <span className="text-green-400 mr-2">$</span>
                    <input
                        ref={inputRef}
                        type="text"
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                        className="flex-grow bg-transparent outline-none"
                        autoFocus
                    />
                </form>
            </div>

            <div className="mt-8 text-gray-400 text-sm">
                Click on the terminal and start typing a command
            </div>
        </div>
    );
}
