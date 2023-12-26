"use client";

import React, { useState } from "react";

// Define the props type
interface SliderProps {
  min: number;
  max: number;
  step: number;
  initialValue: number;
  description: string;
  onChange: (value: number) => void;
}

// Define the component
const Slider: React.FC<SliderProps> = ({
  min,
  max,
  step,
  initialValue,
  description,
  onChange,
}) => {
  // Define the state
  const [value, setValue] = useState(initialValue);

  function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
    // The new value is the value of the input element
    const newValue = parseInt(event.target.value, 10);
    setValue(newValue);
    onChange(newValue);
  }

  return (
    <div className="mb-4 flex flex-col items-star w-full">
      <div className="flex flex-col items-center justify-center">
        <p className="text-lg font-bold m-2 text-center">{description}</p>
      </div>
      <div className="flex justify-between my-2">
        <div className="flex justify-start">{min}</div>
        <div className="flex justify-end">{max}</div>
      </div>
      <div className="flex flex-grow">
        <input
          type="range"
          min={min}
          max={max}
          step={step}
          value={value}
          onChange={handleChange}
          className="w-full bg-gray-300 appearance-none h-2 rounded-full slider-thumb:focus:outline-none"
        />
      </div>
      <p className="text-gray-600 m-2 text-center">{value}</p>
    </div>
  );
};

export default Slider;
