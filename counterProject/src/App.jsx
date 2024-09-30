import { useState } from "react";

function App() {
  let [counterValue, setCounterValue] = useState(15);

  const addValue = () => {
    // console.log("value added");
    if (counterValue <= 19) {
      counterValue = counterValue + 1;
      setCounterValue(counterValue);
    } else {
      return;
    }

    // console.log(counterValue);
  };
  const removeValue = () => {
    // console.log("value removed");
    if (counterValue >= 1) {
      counterValue = counterValue - 1;
      setCounterValue(counterValue);
    } else {
      return;
    }

    // console.log(counterValue);
  };

  return (
    <>
      <h1>Counter Project</h1>
      <h3>Counter Value : {counterValue}</h3>
      <button onClick={addValue}>Add Value</button>
      <br />
      <button onClick={removeValue}>Remove Value</button>
    </>
  );
}

export default App;
