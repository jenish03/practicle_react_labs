import { useState } from "react";
import { Button } from "./ui/button";

function Counter() {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    setCount(count - 1);
  };

  const reset = () => {
    setCount(0);
  };

  /** Use a Bezier curve-like interpolation to calculate background color based on count */
  const calculateBackgroundColor = () => {
    const t = count / 100; // Normalized count value between 0 and 1
    const red = Math.round(255 * (Math.pow(1 - t, 2) + 0.5 * (1 - t) * t)); // Red component
    const green = Math.round(
      255 * (1 - Math.pow(1 - t, 2) - 0.5 * (1 - t) * t)
    ); // Green component
    const blue = 100; // Blue component remains constant
    return `rgb(${red}, ${green}, ${blue})`;
  };

  return (
    <div className="mx-auto grid w-full max-w-6xl gap-2">
      <div
        className="h-screen flex justify-center items-center"
        style={{ backgroundColor: calculateBackgroundColor() }}
      >
        <div className="text-center">
          <h1 className="text-4xl mb-8">Count: {count}</h1>
          <Button
            variant="outline"
            className="shrink-0 px-4 py-2 rounded-md mr-2"
            onClick={increment}
          >
            Increment
          </Button>
          <Button
            variant="outline"
            className="shrink-0 px-4 py-2 rounded-md mr-2"
            onClick={decrement}
          >
            Decrement
          </Button>
          <Button
            variant="outline"
            className="shrink-0 px-4 py-2 rounded-md mr-2"
            onClick={reset}
          >
            Reset
          </Button>
        </div>
      </div>
    </div>
  );
}

export default Counter;
