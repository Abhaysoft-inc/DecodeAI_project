"use client"
import { useState, useRef, useEffect } from "react";


export default function TerminalSection() {
    const [input, setInput] = useState("");
    const [history, setHistory] = useState([
        { text: "Welcome to DecodeAI Terminal. Type 'help' to see available commands.", type: "system" }
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
                return "DecodeAI is a cutting-edge platform for AI experimentation and learning.";
            }
        },
        clear: {
            description: "Clear the terminal",
            action: () => {
                setHistory([]);
                return null;
            }
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!input.trim()) return;

        const userInput = input.trim().toLowerCase();
        setHistory(prev => [...prev, { text: `$ ${input}`, type: "input" }]);
        setInput("");

        // Process command
        if (commands[userInput]) {
            const result = commands[userInput].action();
            if (result !== null) {
                setHistory(prev => [...prev, { text: result, type: "output" }]);
            }
        } else {
            setHistory(prev => [...prev, {
                text: `Command not found: ${userInput}. Type 'help' to see available commands.`,
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
            <h1 className="text-3xl font-bold mb-8">DecodeAI Terminal</h1>

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
