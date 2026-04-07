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
      <nav className="fixed top-0 left-0 right-0 z-50 px-4 lg:px-8 py-3 flex items-center justify-between shadow-lg bg-(--color-dark-green)" style={{minHeight: '64px'}}>
        <div
          className="shrink-0 cursor-pointer"
          onClick={() => handleNavigation('/')}
        >
          <img
            src="/logo.png"
            alt="Rolling Dough Logo"
            className="h-auto max-h-14 w-auto object-contain transition-transform"
          />
        </div>

        <div className="hidden lg:flex space-x-8 items-center pr-4">
          {navLinks.map(({ label, path }) => (
            <button
              key={label}
              onClick={() => handleNavigation(path)}
              className="font-delius text-(--color-light) hover:text-(--color-accent) px-3 py-2 font-bold uppercase tracking-wide cursor-pointer border-b-2 border-transparent hover:border-(--color-accent) pb-1 transition-all duration-300"
              type="button"
            >
              {label}
            </button>
          ))}
        </div>

        <button
          type="button"
          className="lg:hidden text-(--color-light) hover:opacity-70 active:opacity-60 transition-all duration-200 cursor-pointer p-2 "
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label={isMenuOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={isMenuOpen}
          aria-controls="mobile-nav-menu"
        >
          {isMenuOpen ? (
            <svg
              className="w-7 h-7 transition-all duration-300 ease-out transform rotate-90"
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
              className="w-7 h-7 transition-all duration-300 ease-out transform rotate-0"
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
        className={`fixed inset-0 bg-[#1a2922]/60 transition-opacity duration-300 lg:hidden z-40 top-16 ${
          isMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
        onClick={() => setIsMenuOpen(false)}
      />

      <aside
        className={`fixed top-16 right-0 h-[calc(100vh-64px)] w-48 bg-linear-to-b from-green-50 to-green-100 shadow-2xl lg:hidden transform transition-all duration-300 ease-out z-50 ${
          isMenuOpen ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0'
        }`}
        id="mobile-nav-menu"
      >
        <nav className="flex flex-col px-4 pt-6 pb-4 space-y-1 h-full overflow-y-auto">
          {navLinks.map(({ label, path }, index) => (
            <button
              key={`mobile-${label}`}
              onClick={() => handleNavigation(path)}
              className="w-full text-left text-(--color-dark-green) hover:text-(--color-accent) px-4 py-3.5 font-semibold text-base uppercase tracking-wide cursor-pointer border-b-2 border-transparent hover:border-(--color-accent) transition-all duration-300 "
              type="button"
            >
              {label}
            </button>
          ))}
        </nav>
      </aside>
      
      <style>{`
        @keyframes slideInLeft {
          from {
            opacity: 0;
            transform: translateX(20px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
      `}</style>
    </>
  );
};

export default Navbar;
