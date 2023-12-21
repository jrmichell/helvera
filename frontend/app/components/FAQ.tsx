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
      <div className={`flex flex-col p-6 border shadow-md rounded-xl`}>
        <h2
          className="flex justify-between items-center font-bold text-primary text-xl cursor-pointer md:w-[750px] w-[300px]"
          onClick={toggleAccordion}
        >
          <div className="flex justify-start items-start">{question}</div>
          <div className="text-dark">
            {isOpen ? (
              <RiArrowDropUpLine size={30} />
            ) : (
              <RiArrowDropDownLine size={30} />
            )}
          </div>
        </h2>
        {isOpen && (
          <p className="text-dark text-md mt-5 md:w-[750px] w-[300px]">
            {answer}
          </p>
        )}
      </div>
    </div>
  );
};

export default FAQ;
