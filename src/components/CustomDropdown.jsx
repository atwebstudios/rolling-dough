import React, { useState, useRef, useEffect } from 'react';

const CustomDropdown = ({ id, name, value, onChange, options, error, label }) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);
  const selectedOption = options.find(opt => opt.value === value);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleSelect = (optionValue) => {
    onChange({
      target: {
        name,
        value: optionValue
      }
    });
    setIsOpen(false);
  };

  return (
    <div className="relative" ref={dropdownRef}>
      {label && (
        <label htmlFor={id} className="block text-sm font-semibold text-gray-700 mb-1.5">
          {label}
        </label>
      )}
      
      <button
        id={id}
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className={`w-full px-3 py-2.5 rounded-lg border flex items-center justify-between bg-white focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-colors text-left ${
          error ? 'border-red-500 focus:ring-red-500' : 'border-gray-300'
        }`}
      >
        <span className={selectedOption ? 'text-gray-900' : 'text-gray-500'}>
          {selectedOption ? selectedOption.label : 'Select a package'}
        </span>
        <svg
          className={`h-5 w-5 text-gray-400 transition-transform ${isOpen ? 'rotate-180' : ''}`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </button>

      {isOpen && (
        <div className="absolute z-50 w-full mt-2 bg-white border border-gray-300 rounded-lg shadow-lg max-h-64 overflow-y-auto">
          {options.map((option) => (
            <button
              key={option.value}
              type="button"
              onClick={() => handleSelect(option.value)}
              className={`w-full px-4 py-3 text-left hover:bg-green-50 transition-colors flex items-center justify-between ${
                value === option.value ? 'bg-green-100 text-green-900 font-semibold' : 'text-gray-700'
              } ${option.value === '' ? 'border-b border-gray-200' : ''}`}
            >
              <span className="line-clamp-2">{option.label}</span>
              {value === option.value && (
                <svg className="h-5 w-5 text-green-600 shrink-0 ml-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
              )}
            </button>
          ))}
        </div>
      )}

      {error && (
        <p className="mt-1 text-sm text-red-500">
          {error}
        </p>
      )}
    </div>
  );
};

export default CustomDropdown;
