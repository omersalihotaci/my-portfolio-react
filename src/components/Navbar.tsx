import { useState } from "react";

function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <header>
            <nav className="pt-4">
                <div className="md:hidden flex justify-end">
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className="pt-2  "
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            fill="currentColor"
                            className="size-10 cursor-pointer"
                        >
                            <path
                                fillRule="evenodd"
                                d="M3 6.75A.75.75 0 0 1 3.75 6h16.5a.75.75 0 0 1 0 1.5H3.75A.75.75 0 0 1 3 6.75ZM3 12a.75.75 0 0 1 .75-.75h16.5a.75.75 0 0 1 0 1.5H3.75A.75.75 0 0 1 3 12Zm0 5.25a.75.75 0 0 1 .75-.75h16.5a.75.75 0 0 1 0 1.5H3.75a.75.75 0 0 1-.75-.75Z"
                                clipRule="evenodd"
                            />
                        </svg>
                    </button>
                </div>

                <div className="flex justify-center pt-3">
                    <div className=" hidden md:block">
                        <ul className="flex space-x-10">
                            <li>
                                <a
                                    href="#home"
                                    className="text-xl font-bold text-white hover:text-indigo-400 active:text-indigo-600 focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 focus-visible:ring-offset-2 focus-visible:ring-offset-black transition-colors"
                                >
                                    Home
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#about-me"
                                    className="text-xl font-bold text-white hover:text-indigo-400 active:text-indigo-600 focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 focus-visible:ring-offset-2 focus-visible:ring-offset-black transition-colors"
                                >
                                    About Me
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#projects"
                                    className="text-xl font-bold text-white hover:text-indigo-400 active:text-indigo-600 focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 focus-visible:ring-offset-2 focus-visible:ring-offset-black transition-colors"
                                >
                                    Projects
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#contact"
                                    className="text-xl font-bold text-white hover:text-indigo-400 active:text-indigo-600 focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 focus-visible:ring-offset-2 focus-visible:ring-offset-black transition-colors"
                                >
                                    Contact
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
                {isOpen && (
                    <div className="absolute inset-0 bg-black text-white flex flex-col items-center justify-center gap-8 text-2xl md:hidden">
                        <button
                            onClick={() => setIsOpen(false)}
                                    className="absolute top-4 right-4 p-2 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-black rounded cursor-pointer"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth="1.5"
                                stroke="currentColor"
                                className="w-8 h-8"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M6 18 18 6M6 6l12 12"
                                />
                            </svg>
                        </button>

                        <ul className="flex flex-col items-center gap-8 list-none">
                            <li>
                                <a
                                    href="#home"
                                    onClick={() => setIsOpen(false)}
                                    className="block font-bold text-white hover:text-indigo-300 active:text-indigo-500 focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-400 focus-visible:ring-offset-2 focus-visible:ring-offset-black transition-colors"
                                >
                                    Home
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#about-me"
                                    onClick={() => setIsOpen(false)}
                                    className="block font-bold text-white hover:text-indigo-300 active:text-indigo-500 focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-400 focus-visible:ring-offset-2 focus-visible:ring-offset-black transition-colors"
                                >
                                    About Me
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#projects"
                                    onClick={() => setIsOpen(false)}
                                    className="block font-bold text-white hover:text-indigo-300 active:text-indigo-500 focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-400 focus-visible:ring-offset-2 focus-visible:ring-offset-black transition-colors"
                                >
                                    Projects
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#contact"
                                    onClick={() => setIsOpen(false)}
                                    className="block font-bold text-white hover:text-indigo-300 active:text-indigo-500 focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-400 focus-visible:ring-offset-2 focus-visible:ring-offset-black transition-colors"
                                >
                                    Contact
                                </a>
                            </li>
                        </ul>
                    </div>
                )}
            </nav>
        </header>
    );
}

export default Navbar;
