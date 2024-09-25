"use client"
import { useState, useEffect } from 'react';

const CountdownTimer: React.FC = () => {
  const [time, setTime] = useState<number>(0);
  const [isRunning, setIsRunning] = useState<boolean>(false);
  const [isPaused, setIsPaused] = useState<boolean>(false); // Added to track paused state

  useEffect(() => {
    let timer: NodeJS.Timeout;
    if (isRunning && time > 0) {
      timer = setInterval(() => {
        setTime((prevTime) => prevTime - 1);
      }, 1000);
    }
    return () => clearInterval(timer);
  }, [isRunning, time]);

  const handleStart = () => {
    setIsRunning(true);
    setIsPaused(false); // Reset pause state when started/resumed
  };

  const handlePause = () => {
    setIsRunning(false);
    setIsPaused(true); // Set pause state
  };

  const handleReset = () => {
    setIsRunning(false);
    setIsPaused(false);
    setTime(0);
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-r from-purple-400 via-pink-500 to-red-500">
      {/* Glass Effect Timer */}
      <div className="text-8xl font-bold text-white backdrop-blur-lg bg-white/10 p-6 rounded-3xl shadow-xl">
        {`${Math.floor(time / 60)
          .toString()
          .padStart(2, '0')}:${(time % 60).toString().padStart(2, '0')}`}
      </div>

      {/* Buttons */}
      <div className="flex space-x-6 mt-8 backdrop-blur-lg bg-white/20 p-4 rounded-lg">
        {/* Start/Resume Button */}
        <button
          onClick={handleStart}
          className="bg-green-400 text-white px-8 py-4 rounded-lg hover:bg-green-500 shadow-lg"
        >
          {isPaused ? 'Resume' : 'Start'}
        </button>

        {/* Pause Button (always visible) */}
        <button
          onClick={handlePause}
          className="bg-yellow-400 text-white px-8 py-4 rounded-lg hover:bg-yellow-500 shadow-lg"
        >
          Pause
        </button>

        <button
          onClick={handleReset}
          className="bg-red-400 text-white px-8 py-4 rounded-lg hover:bg-red-500 shadow-lg"
        >
          Reset
        </button>
      </div>

      {/* Time Input */}
      <input
        type="number"
        placeholder="Enter time"
        className="mt-8 p-4 w-64 text-center text-white bg-white/20 border-b-2 border-white focus:outline-none rounded-lg backdrop-blur focus:ring-4 focus:ring-white"
        onChange={(e) => setTime(parseInt(e.target.value) || 0)}
      />
    </div>
  );
};

export default CountdownTimer;
