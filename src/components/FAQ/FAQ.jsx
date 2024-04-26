import { useState } from "react";

const FAQ = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isOpen2, setIsOpen2] = useState(false);
    const [isOpen3, setIsOpen3] = useState(false);

    const toggleAnswer = () => {
        setIsOpen(!isOpen);
    };
    const toggleAnswer2 = () => {
        setIsOpen2(!isOpen2);
    };
    const toggleAnswer3 = () => {
        setIsOpen3(!isOpen3);
    };
    return (
        <div className="my-24">
            <h1 className="text-[#273080] text-4xl font-bold mt-5 ml-9">FAQ</h1>

            <div className="px-4 sm:px-6 lg:px-8 max-w-7xl">

                <div className="max-w-3xl space-y-4 md:mt-8">

                    <div className="transition-all rounded-lg duration-200 bg-white border border-gray-200 shadow-lg cursor-pointer hover:bg-gray-50">
                        <button
                            type="button"
                            id="question1"
                            className="flex items-center justify-between w-full px-4 py-5 sm:p-6"
                            onClick={toggleAnswer}
                        >
                            <span className="flex text-lg font-semibold text-black">
                                Can education flashcards be used for all age groups?
                            </span>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                className="w-6 h-6 text-gray-400 transform transition duration-200 ease-in-out { isOpen ? 'rotate-180' : '' }"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M19 9l-7 7-7-7"
                                />
                            </svg>
                        </button>
                        {isOpen && (
                            <div id="answer1" className="px-4 pb-5 sm:px-6 sm:pb-6">
                                <p>
                                    Getting started is easy! Sign up for an account, and you will have access
                                    to our platforms features. No credit card required for the initial
                                    signup.
                                </p>
                            </div>
                        )}
                    </div>

                    <div className="transition-all rounded-lg duration-200 bg-white border border-gray-200 shadow-lg cursor-pointer hover:bg-gray-50">
                        <button
                            type="button"
                            id="question1"
                            className="flex items-center justify-between w-full px-4 py-5 sm:p-6"
                            onClick={toggleAnswer2}
                        >
                            <span className="flex text-lg font-semibold text-black">
                                How do education flashcards work?
                            </span>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                className="w-6 h-6 text-gray-400 transform transition duration-200 ease-in-out { isOpen ? 'rotate-180' : '' }"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M19 9l-7 7-7-7"
                                />
                            </svg>
                        </button>
                        {isOpen2 && (
                            <div id="answer1" className="px-4 pb-5 sm:px-6 sm:pb-6">
                                <p>
                                    Getting started is easy! Sign up for an account, and you will have access
                                    to our platforms features. No credit card required for the initial
                                    signup.
                                </p>
                            </div>
                        )}
                    </div>

                    <div className="transition-all rounded-lg duration-200 bg-white border border-gray-200 shadow-lg cursor-pointer hover:bg-gray-50">
                        <button
                            type="button"
                            id="question1"
                            className="flex items-center justify-between w-full px-4 py-5 sm:p-6"
                            onClick={toggleAnswer3}
                        >
                            <span className="flex text-lg font-semibold text-black">
                                Can education flashcards be used for test preparation?
                            </span>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                className="w-6 h-6 text-gray-400 transform transition duration-200 ease-in-out { isOpen ? 'rotate-180' : '' }"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M19 9l-7 7-7-7"
                                />
                            </svg>
                        </button>
                        {isOpen3 && (
                            <div id="answer1" className="px-4 pb-5 sm:px-6 sm:pb-6">
                                <p>
                                    Getting started is easy! Sign up for an account, and you will have access
                                    to our platforms features. No credit card required for the initial
                                    signup.
                                </p>
                            </div>
                        )}
                    </div>


                </div>
            </div>


        </div>
    );
};

// eslint-disable-next-line react-refresh/only-export-components
export default FAQ;