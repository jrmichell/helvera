"use client";

import { useState } from "react";
import { RiArrowDropDownLine, RiArrowDropUpLine } from "react-icons/ri";

interface FAQProps {
  question: string;
  answer: string;
}

const FAQ: React.FC<FAQProps> = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="flex justify-center items-center m-8">
      <div className="flex flex-col justify-center items-center p-6 shadow-md rounded-xl duration-300 hover:shadow-primary hover:scale-105">
        <h2
          className="flex font-bold text-primary text-center text-xl cursor-pointer"
          onClick={toggleAccordion}
        >
          {question}
          <div className="text-dark">
            {(!isOpen && <RiArrowDropUpLine size={30} />) || (
              <RiArrowDropDownLine size={30} />
            )}
          </div>
        </h2>
        {isOpen && (
          <p className="text-dark text-md mt-5 text-center">{answer}</p>
        )}
      </div>
    </div>
  );
};

export default FAQ;
