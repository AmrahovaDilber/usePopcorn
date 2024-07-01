import { useState } from "react";

function Box({ children }) {
  const [isOpen, setIsOpen] = useState(true);
  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="absolute top-2 right-2 size-[40px] rounded-full text-lg text-white flex center justify-center bg-gray-700"
      >
        {isOpen ? "-" : "+"}
      </button>
      {isOpen && children}
    </div>
  );
}

export default Box;
