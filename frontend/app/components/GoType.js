// pages/index.js
'use client';

import { useState, useRef, useEffect } from 'react';
import { FaPlay } from 'react-icons/fa';
import Script from 'next/script';

export default function GoType() {
    const apiTexts = {
        '30s':
            "The quick brown fox jumps over the lazy dog. The sun rises in the east. A stitch in time saves nine. The early bird catches the worm.",
        '1m':
            "In the heart of the ancient forest, a wise old owl perched on a branch, its eyes scanning the moonlit landscape. Below, a family of deer moved silently through the undergrowth, their movements a graceful dance of survival. The wind whispered through the leaves, carrying the scent of pine and damp earth.",
        '2m':
            "The digital revolution has transformed nearly every aspect of human life. From communication and commerce to entertainment and education, technology has opened up new possibilities and challenges. The internet, in particular, has become an indispensable tool, connecting people across the globe and providing instant access to an unprecedented amount of information. However, this progress also raises important questions about privacy, security, and the impact on social interactions. As we continue to innovate, it is crucial to consider the ethical implications and work towards a future where technology serves to empower and unite humanity. The evolution of artificial intelligence, machine learning, and quantum computing promises even more dramatic changes on the horizon, shaping a future we can only begin to imagine."
    };

    const typingAreaRef = useRef(null);
    const textDisplayRef = useRef(null);
    const progressRef = useRef(null);

    const [timeSelected, setTimeSelected] = useState(null);
    const [timeLeft, setTimeLeft] = useState(0);
    const [totalTime, setTotalTime] = useState(0);
    const [textToType, setTextToType] = useState('');
    const [userInput, setUserInput] = useState('');
    const [mistakes, setMistakes] = useState(0);
    const [wpm, setWpm] = useState(0);
    const [accuracy, setAccuracy] = useState(100);
    const [gameStarted, setGameStarted] = useState(false);
    const [finalResult, setFinalResult] = useState(null);

    const intervalRef = useRef(null);
    const startTimeRef = useRef(0);

    const handleTimeSelection = (time) => {
        setTimeSelected(time);
        let duration = time === '30s' ? 30 : parseInt(time.replace('m', '')) * 60;
        setTotalTime(duration);
        setTimeLeft(duration);
        setTextToType(apiTexts[time]);
        setUserInput('');
        setMistakes(0);
        setWpm(0);
        setAccuracy(100);
        setFinalResult(null);
        setGameStarted(false);

        if (typingAreaRef.current) {
            typingAreaRef.current.disabled = false;
            typingAreaRef.current.focus();
        }
        if (progressRef.current) progressRef.current.style.width = '0%';
    };

    const startGame = () => {
        if (!timeSelected) return;
        setGameStarted(true);
        startTimeRef.current = Date.now();
        setUserInput('');
        setMistakes(0);
        setWpm(0);
        setAccuracy(100);

        if (typingAreaRef.current) typingAreaRef.current.disabled = false;

        if (intervalRef.current) clearInterval(intervalRef.current);
        intervalRef.current = setInterval(() => {
            setTimeLeft((prev) => {
                const newTime = prev - 1;
                if (progressRef.current) {
                    const progressPercentage = ((totalTime - newTime) / totalTime) * 100;
                    progressRef.current.style.width = progressPercentage + '%';
                }
                if (newTime <= 0) {
                    clearInterval(intervalRef.current);
                    endGame();
                    return 0;
                }
                return newTime;
            });
        }, 1000);
    };

    const endGame = () => {
        setGameStarted(false);
        if (typingAreaRef.current) typingAreaRef.current.disabled = true;
        const finalWPM = calculateWpmAndAccuracy(true);
        setFinalResult(finalWPM);
    };

    const handleInputChange = (e) => setUserInput(e.target.value);

    const calculateWpmAndAccuracy = (final = false) => {
        const typedText = userInput.trim();
        const originalText = textToType;
        let correctChars = 0;
        let currentMistakes = 0;

        for (let i = 0; i < typedText.length; i++) {
            if (originalText[i] && typedText[i] === originalText[i]) {
                correctChars++;
            } else {
                currentMistakes++;
            }
        }

        if (!final) {
            setMistakes(currentMistakes);
            const acc =
                typedText.length > 0
                    ? Math.round((correctChars / typedText.length) * 100)
                    : 100;
            setAccuracy(acc);

            const timeElapsedInMinutes =
                (Date.now() - startTimeRef.current) / 60000;
            const calculatedWpm =
                timeElapsedInMinutes > 0
                    ? Math.round(typedText.split(' ').length / timeElapsedInMinutes)
                    : 0;
            setWpm(calculatedWpm);
        } else {
            const correctWords = typedText
                .split(/\s+/)
                .filter(
                    (word, index) => word === originalText.split(/\s+/)[index]
                ).length;
            const timeElapsedInMinutes =
                (Date.now() - startTimeRef.current) / 60000;
            return timeElapsedInMinutes > 0
                ? Math.round(correctWords / timeElapsedInMinutes)
                : 0;
        }
    };

    useEffect(() => {
        if (!textDisplayRef.current) return;
        let html = '';
        if (!textToType) {
            html = '<span class="text-gray-400">Select a time to begin the game.</span>';
        } else {
            for (let i = 0; i < textToType.length; i++) {
                let className = 'text-gray-400';
                if (i < userInput.length) {
                    className =
                        userInput[i] === textToType[i]
                            ? 'text-green-500'
                            : 'text-red-500 underline';
                }
                html += `<span class="${className}">${textToType[i]}</span>`;
            }
            if (userInput.length < textToType.length && gameStarted)
                html += '<span class="cursor-blink"></span>';
        }
        textDisplayRef.current.innerHTML = html;
        calculateWpmAndAccuracy();
    }, [userInput, textToType, gameStarted]);

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-200 p-4">
            <Script src="https://cdn.tailwindcss.com" />
            <div className="bg-black text-white p-6 sm:p-8 rounded-3xl shadow-lg w-full max-w-4xl">
                {/* Title */}
                <h2 className="text-2xl font-bold text-center mb-6">
                    Test Your Typing Skill..
                </h2>

                {/* Timer buttons */}
                <div className="flex justify-center gap-3 mb-4">
                    {['30s', '1m', '2m'].map((t) => (
                        <button
                            key={t}
                            className={`px-4 py-1 rounded-full text-sm font-semibold ${timeSelected === t
                                    ? 'bg-red-600 text-white'
                                    : 'bg-gray-700 text-white'
                                }`}
                            onClick={() => handleTimeSelection(t)}
                        >
                            {t === '30s' ? '30sec' : t === '1m' ? '1min' : '2min'}
                        </button>
                    ))}
                </div>

                {/* Time Remaining */}
                <div className="text-center mb-2">
                    Time Remaining:{' '}
                    <span className="text-red-500">{timeLeft}s</span>
                </div>

                {/* Progress Bar */}
                <div className="w-full h-1 bg-gray-700 rounded-full mb-5">
                    <div
                        ref={progressRef}
                        className="h-1 bg-red-500 rounded-full"
                        style={{ width: '0%' }}
                    ></div>
                </div>

                {/* Text Display */}
                <div
                    ref={textDisplayRef}
                    className="bg-black border border-gray-700 p-4 rounded-lg mb-4 text-lg h-32 overflow-y-auto"
                >
                    <span className="text-gray-400">
                        Select a time to begin the game.
                    </span>
                </div>

                {/* Typing Area */}
                <textarea
                    ref={typingAreaRef}
                    className="w-full h-24 p-3 rounded-lg bg-black border border-gray-700 text-white placeholder-gray-500 resize-none mb-5 focus:outline-none"
                    placeholder="Start typing here.."
                    disabled
                    value={userInput}
                    onChange={handleInputChange}
                ></textarea>

                {/* Stats */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
                    <div className="bg-white text-black p-4 rounded-lg text-center">
                        <h3 className="font-semibold">WPM</h3>
                        <p className="text-red-600 font-bold text-xl">{wpm}</p>
                    </div>
                    <div className="bg-white text-black p-4 rounded-lg text-center">
                        <h3 className="font-semibold">Accuracy</h3>
                        <p className="text-red-600 font-bold text-xl">{accuracy}%</p>
                    </div>
                    <div className="bg-white text-black p-4 rounded-lg text-center">
                        <h3 className="font-semibold">Mistakes</h3>
                        <p className="text-red-600 font-bold text-xl">{mistakes}</p>
                    </div>
                </div>

                {/* Final Result */}
                {finalResult && (
                    <div className="text-center font-bold mb-4">
                        Time&apos;s up! Your final speed is{' '}
                        <span className="text-red-500">{finalResult}</span> WPM.
                    </div>
                )}

                {/* Start Button */}
                <div className="flex justify-center">
                    <button
                        className={`flex items-center gap-2 px-6 py-2 bg-red-600 text-white font-semibold rounded-full ${!timeSelected ? 'opacity-50 cursor-not-allowed' : ''
                            }`}
                        onClick={startGame}
                        disabled={!timeSelected}
                    >
                        <FaPlay size={14} /> Start
                    </button>
                </div>
            </div>

            {/* Cursor Blink */}
            <style jsx>{`
        .cursor-blink {
          display: inline-block;
          width: 2px;
          height: 1.2em;
          background-color: white;
          animation: blink 1s steps(2, start) infinite;
          vertical-align: middle;
          margin-left: 1px;
        }
        @keyframes blink {
          to {
            visibility: hidden;
          }
        }
      `}</style>
        </div>
    );
}
