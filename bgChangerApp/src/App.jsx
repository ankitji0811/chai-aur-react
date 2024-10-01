import { useState } from "react";

function App() {
  const [color, setColor] = useState("black");
  return (
    <div
      className="w-full h-screen duration-200"
      style={{ backgroundColor: color }}
    >
      <div className="fixed flex flex-wrap justify-center bottom-9 inset-x-0 px-2">
        <div className="flex flex-wrap gap-4 shadow-md rounded bg-white px-3 py-2">
          <button
            className="outline-none border-none px-3 py-1 font-semibold rounded"
            style={{ backgroundColor: "red" }}
            onClick={() => setColor("red")}
          >
            Red
          </button>
          <button
            className="outline-none border-none px-3 py-1 font-semibold rounded"
            style={{ backgroundColor: "black", color: "white" }}
            onClick={() => setColor("black")}
          >
            Black
          </button>
          <button
            className="outline-none border-none px-3 py-1 font-semibold rounded"
            style={{ backgroundColor: "yellow" }}
            onClick={() => setColor("yellow")}
          >
            yellow
          </button>
          <button
            className="outline-none border-none px-3 py-1 font-semibold rounded"
            style={{ backgroundColor: "green" }}
            onClick={() => setColor("green")}
          >
            green
          </button>
          <button
            className="outline-none border-none px-3 py-1 font-semibold rounded"
            style={{ backgroundColor: "pink" }}
            onClick={() => setColor("pink")}
          >
            pink
          </button>
          <button
            className="outline-none border-none px-3 py-1 font-semibold rounded"
            style={{ backgroundColor: "orange" }}
            onClick={() => setColor("orange")}
          >
            orange
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
