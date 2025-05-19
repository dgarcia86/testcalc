import { useState } from "react";

export default function Calculator() {
  const [input, setInput] = useState("");
  const [result, setResult] = useState("");

  const handleClick = (value) => setInput((prev) => prev + value);
  const handleClear = () => {
    setInput("");
    setResult("");
  };
  const handleEquals = () => {
    try {
      setResult(eval(input));
    } catch {
      setResult("Error");
    }
  };

  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <div className="w-80 bg-white p-4 rounded shadow space-y-2">
        <div className="bg-white p-3 rounded text-right text-xl font-mono min-h-[3rem]">
          {input || "0"}
          <div className="text-sm text-gray-500">= {result}</div>
        </div>
        <div className="grid grid-cols-4 gap-2">
          {["7","8","9","/","4","5","6","*","1","2","3","-","0",".","=","+"].map((btn) => (
            <button
              key={btn}
              onClick={() => (btn === "=" ? handleEquals() : handleClick(btn))}
              className="bg-gray-200 rounded p-2 hover:bg-gray-300"
            >
              {btn}
            </button>
          ))}
          <button
            onClick={handleClear}
            className="col-span-4 bg-red-400 text-white rounded p-2 hover:bg-red-500"
          >
            Limpiar
          </button>
        </div>
      </div>
    </div>
  );
}
