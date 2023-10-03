import { useState } from "react";

export function DynamicCounter() {
  const [count, setCount] = useState(0);
  const [intervalId, setIntervalId] = useState(null);

  const startToggle = () => {
    setCount(count + 1);

    const id = setInterval(() => {
      setCount((prevCount) => prevCount + 1);
    }, 4);

    setIntervalId(id);
  };

  const stopToggle = () => {
    if (intervalId !== null) {
      clearInterval(intervalId);
      setIntervalId(null);
    }
  };

  return (
    <>
    <button onMouseDown={startToggle} onMouseUp={stopToggle}>
      {count}
    </button>
    <h4
    style = {{color: 'green'}}
    
    >Here is the code for that:</h4>
    <pre style={{ whiteSpace: "pre-wrap" }}>{code}</pre>
    </>
  );
}
const code = `import { useState } from "react";

export function DynamicCounter() {
  const [count, setCount] = useState(0);
  const [intervalId, setIntervalId] = useState(null);

  const startToggle = () => {
    setCount(count + 1);

    const id = setInterval(() => {
      setCount((prevCount) => prevCount + 1);
    }, 4);

    setIntervalId(id);
  };

  const stopToggle = () => {
    if (intervalId !== null) {
      clearInterval(intervalId);
      setIntervalId(null);
    }
  };

  return (
    <button onMouseDown={startToggle} onMouseUp={stopToggle}>
      {count}
    </button>
  );
}


`;


