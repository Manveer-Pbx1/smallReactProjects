import React, { useState } from 'react';

function ToggleButton() {
  const [isOn, setIsOn] = useState(false);
  const [intervalId, setIntervalId] = useState(null);

  const startToggle = () => {
    // Toggle the state immediately when starting to hold the click.
    setIsOn(!isOn);

    // Start a continuous toggle using setInterval.
    const id = setInterval(() => {
      setIsOn((prevIsOn) => !prevIsOn);
    }, 200); // Change the interval time as needed.

    setIntervalId(id);
  };

  const stopToggle = () => {
    // Clear the interval when releasing the click.
    if (intervalId !== null) {
      clearInterval(intervalId);
      setInterval(null);
    }
  };

  return (
    <div>
      <button onMouseDown={startToggle} onMouseUp={stopToggle}>
      {isOn ? 'On' : 'Off '}
      </button>
      <h3
      style={{color: 'green'}}>The code is: </h3>
      <pre>{code}</pre>
    </div>
  );
}

export default ToggleButton;

const code = `import React, { useState } from 'react';

function ToggleButton() {
  const [isOn, setIsOn] = useState(false);
  const [intervalId, setIntervalId] = useState(null);

  const startToggle = () => {
    // Toggle the state immediately when starting to hold the click.
    setIsOn(!isOn);

    // Start a continuous toggle using setInterval.
    const id = setInterval(() => {
      setIsOn((prevIsOn) => !prevIsOn);
    }, 200); // Change the interval time as needed.

    setIntervalId(id);
  };

  const stopToggle = () => {
    // Clear the interval when releasing the click.
    if (intervalId !== null) {
      clearInterval(intervalId);
      setInterval(null);
    }
  };

  return (
    <div>
      <button onMouseDown={startToggle} onMouseUp={stopToggle}>
      {isOn ? 'On' : 'Off '}
      </button>
    </div>
  );
}

export default ToggleButton;
`