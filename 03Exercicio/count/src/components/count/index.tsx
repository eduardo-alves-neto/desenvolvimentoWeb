import { useState, useEffect, useReducer } from "react";

export default function Contador() {
  const [count, setCount] = useState(0);
  const [isRunning, setIsRunning] = useReducer((prev) => !prev, false);

  useEffect(() => {
    let intervalId: number | null = null;

    if (isRunning) {
      intervalId = setInterval(() => {
        setCount((prevCount) => prevCount + 1);
      }, 1000);
    }

    return () => {
      if (intervalId) clearInterval(intervalId);
    };
  }, [isRunning]);

  const handleToggle = () => {
    setIsRunning();
  };

  return (
    <div className="w-[400px] rounded-lg border-2">
      <div className="flex flex-col items-center justify-center gap-4 p-6">
        <h2 className="text-2xl font-bold">Contador</h2>
        <div className="text-6xl font-bold ">{count}</div>
        <button
          onClick={handleToggle}
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
        >
          {isRunning ? "Parar" : "Iniciar"}
        </button>
      </div>
    </div>
  );
}
