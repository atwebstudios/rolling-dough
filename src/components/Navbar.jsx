import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const navLinks = [
  { label: 'Home', path: '/' },
  { label: 'Gallery', path: '/gallery' },
  { label: 'About Us', path: '/about' },
  { label: 'Contact Us', path: '/contactus' },
];

const Navbar = () => {
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleNavigation = (path) => {
    navigate(path);
    setIsMenuOpen(false);
  };

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 bg-[#2d4a3e] px-4 lg:px-8 py-4 flex items-center justify-between shadow-lg">
        <div className="flex items-center gap-3">
          <div className="shrink-0 cursor-pointer" onClick={() => handleNavigation('/')}>
            <img src="/logo.png" alt="Rolling Dough Logo" className="h-auto max-h-14 mt-[-15px] w-auto object-contain transition-transform" />
          </div>
        </div>

        <div className="hidden lg:flex space-x-8 items-center">
          {navLinks.map(({ label, path }) => (
            <span
              key={label}
              onClick={() => handleNavigation(path)}
              className="text-[#f5f1e8] font-delius hover:text-[#d4a574] font-bold uppercase tracking-wide cursor-pointer border-b-2 border-transparent hover:border-[#d4a574] pb-1 transition-all duration-300"
            >
              {label}
            </span>
          ))}
        </div>

        <button
          type="button"
          className="lg:hidden text-[#f5f1e8] hover:text-[#d4a574] transition-colors focus:outline-none cursor-pointer p-1"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label={isMenuOpen ? "Close navigation menu" : "Open navigation menu"}
        >
          {isMenuOpen ? (
            <svg
              className="w-6 h-6 transition-all duration-300 ease-out transform rotate-90"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              className="w-6 h-6 transition-all duration-300 ease-out transform rotate-0"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          )}
        </button>
      </nav>

      <div
        className={`fixed inset-0 bg-[#1a2922]/60 transition-opacity duration-300 lg:hidden z-40 top-[72px] ${
          isMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
        onClick={() => setIsMenuOpen(false)}
      />

      <aside
        className={`fixed top-[72px] right-0 h-[calc(100vh-72px)] w-64 bg-green-50 shadow-2xl lg:hidden transform transition-all duration-300 ease-out z-50 ${
          isMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <nav className="flex flex-col px-6 pt-8 space-y-6">
          {navLinks.map(({ label, path }) => (
            <span
              key={`mobile-${label}`}
              onClick={() => handleNavigation(path)}
              className="text-green-800 hover:text-green-600 font-semibold text-base uppercase tracking-wide cursor-pointer border-b-2 border-transparent hover:border-green-600 pb-3 transition-all duration-300"
            >
              {label}
            </span>
          ))}
        </nav>
      </aside>
    </>
  );
};

export default Navbar;
