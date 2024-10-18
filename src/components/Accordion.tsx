// Accordion.js
import React, { useState } from "react";
import { RiArrowDownWideLine } from "react-icons/ri";

type ItemProps = {
  title: string;
  children: React.ReactNode;
  isOpen: boolean;
  onToggle: () => void;
};

const AccordionItem = ({ title, children, isOpen, onToggle }: ItemProps) => (
  <div
    className={`border-b ${
      isOpen ? "bg-gray-50" : "bg-white"
    } transition-all duration-300`}
  >
    <div
      className={`flex justify-between items-center p-4 cursor-pointer hover:bg-gray-100 ${
        isOpen ? "text-blue-600 font-semibold" : "text-gray-800"
      }`}
      onClick={onToggle}
    >
      <h2 className="text-lg">{title}</h2>
      <span
        className={`transform transition-transform ${
          isOpen ? "rotate-180" : "rotate-0"
        }`}
      >
        <RiArrowDownWideLine />
      </span>
    </div>
    {isOpen && (
      <div className="p-4 text-gray-700 bg-gray-100 border-t">{children}</div>
    )}
  </div>
);

type Props<T> = {
  items: T[];
  renderTitle: (item: T) => string;
  renderContent: (item: T) => React.ReactNode;
};

const Accordion = <T,>({ items, renderTitle, renderContent }: Props<T>) => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const handleToggle = (i: number) => {
    setOpenIndex(openIndex === i ? null : i);
  };

  return (
    <div className="w-3/6 mx-auto bg-white shadow-md rounded-lg overflow-hidden">
      {items.map((item, i: number) => (
        <AccordionItem
          key={i}
          title={renderTitle(item)}
          isOpen={openIndex === i}
          onToggle={() => handleToggle(i)}
        >
          {renderContent(item)}
        </AccordionItem>
      ))}
    </div>
  );
};

export default Accordion;
