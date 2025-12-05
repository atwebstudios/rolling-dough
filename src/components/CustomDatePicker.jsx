import React, { useState, useRef, useEffect } from 'react';
import PropTypes from 'prop-types';

const CustomDatePicker = ({ value, onChange, name, min, id }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [currentMonth, setCurrentMonth] = useState(new Date());
  const containerRef = useRef(null);

  // Parse date string in local timezone without offset issues
  const parseLocalDate = (dateString) => {
    if (!dateString) return null;
    const [year, month, day] = dateString.split('-').map(Number);
    return new Date(year, month - 1, day);
  };

  // Parse the min date to ensure we don't show past dates (using local timezone)
  const minDate = min ? parseLocalDate(min) : new Date();

  // Get days in month
  const getDaysInMonth = (date) => {
    return new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate();
  };

  // Get first day of month (0 = Sunday, 1 = Monday, etc.)
  const getFirstDayOfMonth = (date) => {
    return new Date(date.getFullYear(), date.getMonth(), 1).getDay();
  };

  // Format date to YYYY-MM-DD (local timezone)
  const formatDate = (date) => {
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    return `${year}-${month}-${day}`;
  };

  // Display value (readable format, local timezone)
  const displayValue = value ? parseLocalDate(value).toLocaleDateString('en-AU', { 
    year: 'numeric', 
    month: 'long', 
    day: 'numeric' 
  }) : 'Select date';

  // Handle date selection
  const handleSelectDate = (day) => {
    const selectedDate = new Date(currentMonth.getFullYear(), currentMonth.getMonth(), day);
    if (selectedDate >= minDate) {
      onChange({
        target: {
          name: name,
          value: formatDate(selectedDate)
        }
      });
      setIsOpen(false);
    }
  };

  // Previous month
  const handlePrevMonth = () => {
    setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() - 1));
  };

  // Next month
  const handleNextMonth = () => {
    const newDate = new Date(currentMonth.getFullYear(), currentMonth.getMonth() + 1);
    if (newDate >= new Date(minDate.getFullYear(), minDate.getMonth())) {
      setCurrentMonth(newDate);
    }
  };

  // Close on outside click
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (containerRef.current && !containerRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isOpen]);

  // Generate calendar days
  const generateCalendarDays = () => {
    const daysInMonth = getDaysInMonth(currentMonth);
    const firstDay = getFirstDayOfMonth(currentMonth);
    const days = [];

    // Empty cells for days before month starts
    for (let i = 0; i < firstDay; i++) {
      days.push(null);
    }

    // Days of the month
    for (let day = 1; day <= daysInMonth; day++) {
      days.push(day);
    }

    return days;
  };

  const calendarDays = generateCalendarDays();
  const monthYear = currentMonth.toLocaleDateString('en-AU', { month: 'long', year: 'numeric' });

  // Check if date is disabled
  const isDateDisabled = (day) => {
    if (!day) return true;
    const checkDate = new Date(currentMonth.getFullYear(), currentMonth.getMonth(), day);
    return checkDate < minDate;
  };

  return (
    <div ref={containerRef} className="relative w-full">
      <button
        id={id}
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent cursor-pointer bg-white hover:bg-gray-50 transition-colors flex items-center justify-between"
      >
        <span className="text-gray-700">{displayValue}</span>
        <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h18M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
        </svg>
      </button>

      {isOpen && (
        <div className="absolute bottom-full mb-2 left-0 bg-white border border-gray-300 rounded-lg shadow-lg z-50 p-4 w-full sm:w-80 h-90 flex flex-col">
          {/* Month/Year Header */}
          <div className="flex items-center justify-between mb-4">
            <button
              onClick={handlePrevMonth}
              className="p-1 hover:bg-gray-100 rounded text-gray-600"
              type="button"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <h3 className="font-semibold text-gray-800">{monthYear}</h3>
            <button
              onClick={handleNextMonth}
              className="p-1 hover:bg-gray-100 rounded text-gray-600"
              type="button"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>

          {/* Weekday Headers */}
          <div className="grid grid-cols-7 gap-1 mb-2">
            {['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'].map((day) => (
              <div key={day} className="text-center text-xs font-semibold text-gray-500 py-2">
                {day}
              </div>
            ))}
          </div>

          {/* Calendar Days */}
          <div className="grid grid-cols-7 gap-1 flex-1">
            {calendarDays.map((day, index) => (
              <button
                key={index}
                onClick={() => day && handleSelectDate(day)}
                disabled={isDateDisabled(day)}
                className={`
                  p-2 text-sm rounded transition-colors
                  ${!day ? 'bg-transparent' : ''}
                  ${isDateDisabled(day) ? 'text-gray-300 bg-gray-50 cursor-not-allowed' : ''}
                  ${day && !isDateDisabled(day) ? 'hover:bg-green-100 text-gray-700 cursor-pointer' : ''}
                  ${value === formatDate(new Date(currentMonth.getFullYear(), currentMonth.getMonth(), day || 1)) ? 'bg-green-600 text-white hover:bg-green-700' : ''}
                `}
                type="button"
              >
                {day}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

CustomDatePicker.propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
  min: PropTypes.string,
  id: PropTypes.string,
};

export default CustomDatePicker;
