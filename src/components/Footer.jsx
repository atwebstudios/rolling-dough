import React from 'react';
import { useNavigate } from 'react-router-dom';

const Footer = () => {
  const navigate = useNavigate();

  return (
    <footer style={{backgroundColor: 'var(--color-dark-green)', color: 'var(--color-light)'}} className="py-4">
      <div className="mx-8 px-4 lg:px-8">
        <div className="flex flex-col md:flex-row  justify-between items-center">

          {/* Logo Section - Left (Hidden below tablet) */}
          <div className="hidden md:flex lg:justify-start justify-center">
            <img
              src="/logo.png"
              alt="Rolling Dough Logo"
              className="h-20 w-auto object-contain cursor-pointer hover:opacity-80 transition-opacity"
              onClick={() => navigate('/')}
            />
          </div>

          {/* Social Media - Center on desktop, Left on mobile */}
          <div className="flex justify-center md:justify-start lg:justify-center space-x-8 py-2">
            <a
              href="https://www.facebook.com/p/Rolling-Dough-Woodfired-Pizza-61567309387876/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-[#3a7ed7] transition-colors duration-300"
              aria-label="Facebook"
            >
              <svg className="size-12" fill="currentColor" viewBox="0 0 24 24">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
              </svg>
            </a>
            <a
              href="https://www.instagram.com/rollingdough.perth/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-white transition-all duration-300 group"
              aria-label="Instagram"
            >
              {/* Default SVG */}
              <svg className="size-12 group-hover:hidden" fill="currentColor" viewBox="0 0 24 24">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5" fill="none" stroke="currentColor" strokeWidth="2"/>
                <circle cx="12" cy="12" r="4" fill="none" stroke="currentColor" strokeWidth="2"/>
                <circle cx="17.5" cy="6.5" r="1.5" fill="currentColor"/>
              </svg>
              
              {/* Hover SVG - Instagram gradient effect */}
              <svg className="size-12 hidden group-hover:block" fill="url(#instagramGradient)" viewBox="0 0 24 24">
                <defs>
                  <linearGradient id="instagramGradient" x1="0%" y1="100%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#FD5949"/>
                    <stop offset="35%" stopColor="#D6249F"/>
                    <stop offset="75%" stopColor="#285AEB"/>
                  </linearGradient>
                </defs>
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5" fill="none" stroke="url(#instagramGradient)" strokeWidth="2"/>
                <circle cx="12" cy="12" r="4" fill="none" stroke="url(#instagramGradient)" strokeWidth="2"/>
                <circle cx="17.5" cy="6.5" r="1.5" fill="url(#instagramGradient)"/>
              </svg>
            </a>
            <a
              href="https://wa.me/61433770065?text=Hi%20Rolling%20Dough%2C%20I%27d%20like%20to%20inquire%20about%20your%20catering%20services"
              target="_blank"
              rel="noopener noreferrer"
              style={{color: 'var(--color-light)'}}
              className="hover:text-[#25D366] transition-colors duration-300 group"
              aria-label="WhatsApp"
            >
              {/* Default SVG */}
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" className="size-12 group-hover:hidden">
                <path fill="#FFFFFF" d="M128 0C57.3 0 0 55.5 0 124c0 22 6 42.7 17.3 60.8L0 256l74.2-16.5C94 246.7 110.7 252 128 252c70.7 0 128-55.5 128-124S198.7 0 128 0z" />
                <circle cx="128" cy="124" r="112" fill="#FFFFFF" />
                <circle cx="128" cy="124" r="104" fill="#FFFFFF" />
                <path fill="#25D366" d="M180.7 148.6c-3.3-1.7-19.8-9.8-22.9-11-3.1-1.2-5.3-1.7-7.5 1.7-2.2 3.3-8.6 11-10.5 13-1.9 2.2-3.9 2.5-7.3.8-3.3-1.7-14.1-5.2-26.9-16.6-10-8.9-16.6-19.8-18.5-23-2-3.3-.2-5.1 1.5-6.8 1.5-1.5 3.3-3.9 5-5.8 1.7-1.9 2.5-3.3 3.3-5.8.8-2.2.3-4-.3-5.6-.8-1.7-7.5-18-10.3-24.6-2.7-6.5-5.5-5.6-7.6-5.8-2-.1-4.2-.1-6.5-.1-2.2 0-5.8.8-8.8 4.3-3 3.3-11.6 11.3-11.6 27.6 0 16.3 11.8 32 13.5 34.3 1.7 2.2 23.4 35.7 56.7 50.1 7.9 3.4 14.1 5.5 18.9 7 8 2.5 15.3 2.2 21 .6 6.4-1 19.8-7.9 22.6-15.5 2.8-7.6 2.8-14.2 2-15.5-.7-1.3-3-2.2-6.2-3.9z" />
              </svg>
              {/* Hover SVG */}
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" className="size-12 hidden group-hover:block">
                <path fill="#FFFFFF" d="M128 0C57.3 0 0 55.5 0 124c0 22 6 42.7 17.3 60.8L0 256l74.2-16.5C94 246.7 110.7 252 128 252c70.7 0 128-55.5 128-124S198.7 0 128 0z" />
                <circle cx="128" cy="124" r="112" fill="#FFFFFF" />
                <circle cx="128" cy="124" r="104" fill="#25D366" />
                <path fill="#FFFFFF" d="M180.7 148.6c-3.3-1.7-19.8-9.8-22.9-11-3.1-1.2-5.3-1.7-7.5 1.7-2.2 3.3-8.6 11-10.5 13-1.9 2.2-3.9 2.5-7.3.8-3.3-1.7-14.1-5.2-26.9-16.6-10-8.9-16.6-19.8-18.5-23-2-3.3-.2-5.1 1.5-6.8 1.5-1.5 3.3-3.9 5-5.8 1.7-1.9 2.5-3.3 3.3-5.8.8-2.2.3-4-.3-5.6-.8-1.7-7.5-18-10.3-24.6-2.7-6.5-5.5-5.6-7.6-5.8-2-.1-4.2-.1-6.5-.1-2.2 0-5.8.8-8.8 4.3-3 3.3-11.6 11.3-11.6 27.6 0 16.3 11.8 32 13.5 34.3 1.7 2.2 23.4 35.7 56.7 50.1 7.9 3.4 14.1 5.5 18.9 7 8 2.5 15.3 2.2 21 .6 6.4-1 19.8-7.9 22.6-15.5 2.8-7.6 2.8-14.2 2-15.5-.7-1.3-3-2.2-6.2-3.9z" />
              </svg>
            </a>
          </div>

          <div className="flex justify-center md:justify-end mt-4">
            <div className="text-center md:text-left">
              <p style={{color: 'var(--color-light)', opacity: 0.9}} className="text-sm my-1">
                © 2025 Rolling Dough. All rights reserved.
              </p>
              {/* <p style={{color: 'var(--color-light)', opacity: 0.9}} className="text-sm mt-2">
                Made with ❤️ by{' '}
                <span style={{color: 'var(--color-accent)'}} className="hover:opacity-80 cursor-pointer transition-colors">
                  AtWebStudios
                </span>
              </p> */}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
