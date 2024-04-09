"use client"
import React, { useState,useRef } from 'react';
import { FaAngleDown } from 'react-icons/fa';
import useClickOutside from '@/hooks/useClickOutside';

const Dropdown = () => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);
  useClickOutside(dropdownRef, () => setIsOpen(false));

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="dropdown" ref={dropdownRef} >
      <button className="px-3 py-3 text-sm bg-blue-600 text-white rounded-lg m-4 shadow-sm hover:bg-blue-950 drop-shadow-sm" onClick={toggleDropdown}>
        Toggle Dropdown
        <FaAngleDown className="inline-block ml-2" />
      </button>
      {isOpen && (
        <ul className="px-3 py-4 bg-white shadow-lg ring-2 ring-slate-900/5 ms-9 text-sm font-medium space-y-3 rounded-lg">
          <li className='hover:bg-slate-200 cursor-pointer'>Option 1</li>
          <li className='hover:bg-slate-200 cursor-pointer'>Option 2</li>
          <li className='hover:bg-slate-200 cursor-pointer'>Option 3</li>
        </ul>
      )}
    </div>
  );
};

export default Dropdown;


