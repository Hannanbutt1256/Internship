import React, { useState, useCallback } from "react";
import "./App.css";

// Child component to toggle the theme
const ThemeToggler = React.memo(
  ({ toggleTheme }: { toggleTheme: () => void }) => {
    console.log("ThemeToggler component rendered");
    return (
      <button
        onClick={toggleTheme}
        className="bg-yellow-500 hover:bg-yellow-600 text-black font-bold py-2 px-4 rounded mt-6"
      >
        Toggle Theme
      </button>
    );
  }
);

function App() {
  const [name, setName] = useState("");
  const [counter, setCounter] = useState(0); // Unrelated state
  const [isDarkMode, setIsDarkMode] = useState(true);

  // useCallback to memoize the theme toggling function
  const toggleTheme = useCallback(() => {
    setIsDarkMode((prev) => !prev);
  }, []);

  return (
    <div
      className={`flex items-center justify-center h-screen ${
        isDarkMode ? "bg-black text-white" : "bg-white text-black"
      }`}
    >
      <div
        className={`text-center p-6 rounded-lg shadow-lg ${
          isDarkMode ? "bg-gray-800 text-white" : "bg-gray-200 text-black"
        }`}
      >
        <h1 className="text-3xl font-bold mb-6">Dynamic Greeting with Memo</h1>

        {/* Input to update the name */}
        <input
          type="text"
          placeholder="Enter your name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full p-2 rounded mb-4 text-black"
        />

        {/* Greeting Component */}
        <p className="text-lg mt-4">
          {name ? `Hello, ${name}!` : "Welcome, guest!"}
        </p>

        {/* Button to update unrelated state */}
        <button
          onClick={() => setCounter(counter + 1)}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4"
        >
          Increment Counter
        </button>

        <p className="mt-4">Counter: {counter}</p>

        {/* Theme Toggler */}
        <ThemeToggler toggleTheme={toggleTheme} />
      </div>
    </div>
  );
}

export default App;
