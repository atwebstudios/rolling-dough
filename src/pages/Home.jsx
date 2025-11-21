import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const Home = () => {
  const navigate = useNavigate();
  
  // Hero images array
  const heroImages = [
    '/hero.png',
    '/hero copy.png',
    '/hero copy 2.png'
  ];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [openFAQs, setOpenFAQs] = useState({});

  // Auto-switch images every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setIsTransitioning(true);
      
      setTimeout(() => {
        setCurrentImageIndex((prevIndex) => 
          prevIndex === heroImages.length - 1 ? 0 : prevIndex + 1
        );
        setIsTransitioning(false);
      }, 300); // Half transition duration
    }, 5000);

    return () => clearInterval(interval);
  }, [heroImages.length]);

  const toggleFAQ = (index) => {
    setOpenFAQs((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1 bg-white pt-16 sm:pt-20 lg:pt-24">
        {/* Hero Section */}
        <section className="relative w-full h-[80vh] overflow-hidden mt-0 sm:mt-2 lg:mt-6">
          <div className="relative w-full h-full">
            {/* Background Overlay */}
            <div className="absolute inset-0 bg-black/40 z-20"></div>
            
            {/* Background Images */}
            <div className="absolute inset-0 z-10">
              {heroImages.map((image, index) => (
                <div
                  key={index}
                  className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
                    index === currentImageIndex && !isTransitioning 
                      ? 'opacity-100' 
                      : 'opacity-0'
                  }`}
                >
                  <img
                    src={image}
                    alt={`Hero ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                </div>
              ))}
            </div>

            {/* Hero Content */}
            <div className="relative z-30 h-full flex items-end justify-start px-4 sm:px-8 lg:px-16 pb-12 sm:pb-20">
              <div className="text-left max-w-2xl">
                {/* Main Heading */}
                <h1 className="text-xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-2 sm:mb-3 leading-tight">
                  <span className="block text-white">Artisan Wood-Fired</span>
                  <span className="block text-white">Pizza On Wheels</span>
                  <span className="block text-white">Serving Your Events</span>
                </h1>

                {/* Subtitle */}
                <p className="text-xs sm:text-base text-white/90 mb-1 sm:mb-2 font-light font-delius">
                  Fresh ingredients, authentic flavors, and memorable experiences.
                </p>
                <p className="text-xs sm:text-base text-white/90 mb-4 sm:mb-6 font-light font-delius">
                  Bringing the heat to your celebrations since 2020
                </p>

                {/* CTA Buttons */}
                <div className="flex flex-col sm:flex-row gap-2 sm:gap-4 w-full sm:w-auto">
                  <button
                    onClick={() => navigate('/contactus')}
                    className="bg-[#d4634d] hover:bg-[#c55540] text-white font-semibold px-4 sm:px-6 py-2 sm:py-3 rounded-md transition-all duration-300 shadow-lg hover:shadow-xl text-sm sm:text-base"
                  >
                    Book Your Event
                  </button>
                  <button
                    onClick={() => navigate('/gallery')}
                    className="bg-white/90 hover:bg-white text-[#2d4a3e] font-semibold px-4 sm:px-6 py-2 sm:py-3 rounded-md transition-all duration-300 shadow-lg hover:shadow-xl text-sm sm:text-base"
                  >
                    View Gallery
                  </button>
                </div>
              </div>
            </div>

            {/* Image Indicators */}
            <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-30">
              <div className="flex space-x-2">
                {heroImages.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => {
                      setIsTransitioning(true);
                      setTimeout(() => {
                        setCurrentImageIndex(index);
                        setIsTransitioning(false);
                      }, 300);
                    }}
                    className={`w-2 h-2 rounded-full transition-all duration-300 ${
                      index === currentImageIndex 
                        ? 'bg-[#d4a574] scale-105' 
                        : 'bg-white/50 hover:bg-white/75'
                    }`}
                    aria-label={`Go to image ${index + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Separator */}
        <div className="h-px bg-gray-200 mx-4 sm:mx-6 lg:mx-8"></div>

        {/* Dietary Options Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-bold text-green-600 text-center mb-12 font-delius">
              We Cater to All Tastes
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              {/* Option 1 */}
              <div className="bg-green-50 rounded-2xl shadow-sm p-8 text-center hover:shadow-md transition-all">
                <div className="text-3xl mb-3">🌱</div>
                <h3 className="font-bold text-gray-800 mb-2">Vegan Options</h3>
                <p className="text-sm text-gray-600">Delicious plant-based pizzas crafted with fresh vegetables and dairy-free alternatives</p>
              </div>

              {/* Option 2 */}
              <div className="bg-amber-50 rounded-2xl shadow-sm p-8 text-center hover:shadow-md transition-all">
                <div className="text-3xl mb-3">🌾</div>
                <h3 className="font-bold text-gray-800 mb-2">Gluten-Free</h3>
                <p className="text-sm text-gray-600">Gluten-free crusts available for guests with dietary restrictions</p>
              </div>

              {/* Option 3 */}
              <div className="bg-blue-50 rounded-2xl shadow-sm p-8 text-center hover:shadow-md transition-all">
                <div className="text-3xl mb-3">🧄</div>
                <h3 className="font-bold text-gray-800 mb-2">Custom Add-ons</h3>
                <p className="text-sm text-gray-600">Garlic bread, salads, and other delicious sides to complete your menu</p>
              </div>
            </div>
          </div>
        </section>

        {/* Separator */}
        <div className="h-px bg-gray-200 mx-4 sm:mx-6 lg:mx-8"></div>

        {/* Packages Section */}
        <section className="py-12 px-4 sm:px-6 lg:px-8 bg-white">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-bold text-green-600 text-center mb-12 font-delius">
              Our Event Packages
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* The Crowd Pleaser Card */}
              <div className="bg-linear-to-br from-green-50 to-green-100 border-0 p-8 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 hover:scale-105 hover:-translate-y-2 cursor-pointer group text-center font-delius">
                <h3 className="text-2xl font-bold mb-2 text-gray-800 transition-all duration-300 group-hover:text-green-700">The Crowd Pleaser</h3>
                <p className="text-4xl font-bold mb-1 text-green-600 transition-all duration-300 group-hover:text-green-700">$25 <span className="text-lg font-normal text-gray-600">per head</span></p>
                <h4 className="text-lg font-semibold mb-3 text-gray-700 transition-all duration-300 group-hover:text-green-600">Unlimited Feast</h4>
                <p className="text-sm leading-relaxed text-gray-600 transition-all duration-300 group-hover:text-gray-700">
                  All-you-can-eat wood-fire pizza. Perfect for weddings and large parties.
                </p>
              </div>

              {/* Standard Package Card */}
              <div className="bg-linear-to-br from-green-50 to-green-100 border-0 p-8 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 hover:scale-105 hover:-translate-y-2 cursor-pointer group text-center font-delius">
                <h3 className="text-2xl font-bold mb-2 text-gray-800 transition-all duration-300 group-hover:text-green-700">Standard Package</h3>
                <p className="text-4xl font-bold mb-1 text-green-600 transition-all duration-300 group-hover:text-green-700">$20 <span className="text-lg font-normal text-gray-600">per head</span></p>
                <h4 className="text-lg font-semibold mb-3 text-gray-700 transition-all duration-300 group-hover:text-green-600">Limited Selection</h4>
                <p className="text-sm text-gray-600 leading-relaxed transition-all duration-300 group-hover:text-gray-700">
                  Limited pizza quantity per person. Great for corporate lunches or smaller events.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Separator */}
        <div className="h-px bg-gray-200 mx-4 sm:mx-6 lg:mx-8"></div>

        {/* What's Included Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-bold text-green-600 text-center mb-12 font-delius">
              Perfect For Every Occasion
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {/* Event Type 1 */}
              <div className="text-center p-6 font-delius">
                <div className="text-4xl mb-3">💍</div>
                <h3 className="font-bold text-gray-800 mb-2 font-delius">Weddings</h3>
                <p className="text-sm text-gray-600">Unlimited pizza catering for your special day</p>
              </div>

              {/* Event Type 2 */}
              <div className="text-center p-6 font-delius">
                <div className="text-4xl mb-3">🎂</div>
                <h3 className="font-bold text-gray-800 mb-2 font-delius">Birthday Parties</h3>
                <p className="text-sm text-gray-600">Make celebrations memorable with wood-fired pizza</p>
              </div>

              {/* Event Type 3 */}
              <div className="text-center p-6 font-delius">
                <div className="text-4xl mb-3">💼</div>
                <h3 className="font-bold text-gray-800 mb-2 font-delius">Corporate Events</h3>
                <p className="text-sm text-gray-600">Team building and client entertainment catering</p>
              </div>

              {/* Event Type 4 */}
              <div className="text-center p-6 font-delius">
                <div className="text-4xl mb-3">👯‍♀️</div>
                <h3 className="font-bold text-gray-800 mb-2 font-delius">Hens & Bucks</h3>
                <p className="text-sm text-gray-600">Pre-wedding celebrations with a modern vibe</p>
              </div>
            </div>
          </div>
        </section>

        {/* Separator */}
        <div className="h-px bg-gray-200 mx-4 sm:mx-6 lg:mx-8"></div>

        {/* Ready to Book Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white text-center">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-bold text-green-600 mb-4 font-delius">
              Ready to Book Your Event?
            </h2>
            <p className="text-lg text-gray-600">
              Check availability and get instant pricing for your perfect pizza catering experience.
            </p>
            <button
              onClick={() => navigate('/contactus')}
              className="mt-6 bg-[#d4634d] hover:bg-[#c55540] text-white font-bold px-16 py-3 rounded-2xl transition-all duration-300 shadow-md hover:shadow-lg w-full sm:w-auto"
            >
              Check Availability 
            </button>
          </div>
        </section>

        {/* Separator */}
        <div className="h-px bg-gray-200 mx-4 sm:mx-6 lg:mx-8"></div>

        {/* Why Choose Us Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-bold text-green-800 text-center mb-4" style={{ fontFamily: 'Delius' }}>
              Why Choose Rolling Dough?
            </h2>
            <p className="text-center text-gray-600 mb-16 max-w-2xl mx-auto">
              Perth's most trusted pizza food truck for unforgettable catering experiences
            </p>

            {/* Stats Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
              {/* Stat 1 */}
              <div className="text-center p-6 rounded-lg bg-linear-to-br from-blue-50 to-blue-100 hover:shadow-lg transition-shadow duration-300">
                <p className="text-5xl sm:text-6xl font-bold text-green-600 mb-2">5+</p>
                <p className="text-gray-700 font-semibold">Years Experience</p>
                <p className="text-sm text-gray-600 mt-1">Serving Perth with excellence</p>
              </div>

              {/* Stat 2 */}
              <div className="text-center p-6 rounded-lg bg-linear-to-br from-amber-50 to-amber-100 hover:shadow-lg transition-shadow duration-300">
                <p className="text-5xl sm:text-6xl font-bold text-orange-600 mb-2">500+</p>
                <p className="text-gray-700 font-semibold">Happy Customers</p>
                <p className="text-sm text-gray-600 mt-1">Events successfully catered</p>
              </div>

              {/* Stat 3 */}
              <div className="text-center p-6 rounded-lg bg-linear-to-br from-green-50 to-green-100 hover:shadow-lg transition-shadow duration-300">
                <p className="text-5xl sm:text-6xl font-bold text-emerald-600 mb-2">7 Days</p>
                <p className="text-gray-700 font-semibold">Availability</p>
                <p className="text-sm text-gray-600 mt-1">Including weekends & holidays</p>
              </div>

              {/* Stat 4 */}
              <div className="text-center p-6 rounded-lg bg-linear-to-br from-rose-50 to-rose-100 hover:shadow-lg transition-shadow duration-300">
                <p className="text-5xl sm:text-6xl font-bold text-rose-600 mb-2">100%</p>
                <p className="text-gray-700 font-semibold">Satisfaction Rate</p>
                <p className="text-sm text-gray-600 mt-1">Your event, our priority</p>
              </div>
            </div>

            {/* Why Choose Features */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Feature 1 */}
              <div className="flex gap-4 p-6 rounded-lg border border-green-200 hover:border-green-400 hover:shadow-md transition-all duration-300">
                <div className="shrink-0">
                  <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-green-100">
                    <svg className="h-6 w-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-gray-800" style={{ fontFamily: 'Delius' }}>Fresh Quality</h3>
                  <p className="text-gray-600 text-sm mt-1">Made-to-order pizzas with premium ingredients</p>
                </div>
              </div>

              {/* Feature 2 */}
              <div className="flex gap-4 p-6 rounded-lg border border-green-200 hover:border-green-400 hover:shadow-md transition-all duration-300">
                <div className="shrink-0">
                  <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-green-100">
                    <svg className="h-6 w-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
                    </svg>
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-gray-800" style={{ fontFamily: 'Delius' }}>Customizable</h3>
                  <p className="text-gray-600 text-sm mt-1">Vegan, gluten-free & dietary options</p>
                </div>
              </div>

              {/* Feature 3 */}
              <div className="flex gap-4 p-6 rounded-lg border border-green-200 hover:border-green-400 hover:shadow-md transition-all duration-300">
                <div className="shrink-0">
                  <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-green-100">
                    <svg className="h-6 w-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-gray-800" style={{ fontFamily: 'Delius' }}>Professional Service</h3>
                  <p className="text-gray-600 text-sm mt-1">Trained crew for seamless execution</p>
                </div>
              </div>

              {/* Feature 4 */}
              <div className="flex gap-4 p-6 rounded-lg border border-green-200 hover:border-green-400 hover:shadow-md transition-all duration-300">
                <div className="shrink-0">
                  <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-green-100">
                    <svg className="h-6 w-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-gray-800" style={{ fontFamily: 'Delius' }}>Affordable Pricing</h3>
                  <p className="text-gray-600 text-sm mt-1">Transparent rates from $25/head</p>
                </div>
              </div>

              {/* Feature 5 */}
              <div className="flex gap-4 p-6 rounded-lg border border-green-200 hover:border-green-400 hover:shadow-md transition-all duration-300">
                <div className="shrink-0">
                  <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-green-100">
                    <svg className="h-6 w-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-gray-800" style={{ fontFamily: 'Delius' }}>Perth-Wide Coverage</h3>
                  <p className="text-gray-600 text-sm mt-1">Service all areas of Perth</p>
                </div>
              </div>

              {/* Feature 6 */}
              <div className="flex gap-4 p-6 rounded-lg border border-green-200 hover:border-green-400 hover:shadow-md transition-all duration-300">
                <div className="shrink-0">
                  <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-green-100">
                    <svg className="h-6 w-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-gray-800" style={{ fontFamily: 'Delius' }}>Unforgettable Experience</h3>
                  <p className="text-gray-600 text-sm mt-1">Creates lasting memories for your guests</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Separator */}
        <div className="h-px bg-gray-200 mx-4 sm:mx-6 lg:mx-8"></div>

        {/* FAQ Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-bold text-green-600 text-center mb-12 font-delius">
              Frequently Asked Questions
            </h2>

            <div className="space-y-4">
              {/* FAQ Item 1 */}
              <div className="bg-gray-50 rounded-2xl overflow-hidden transition-all duration-500 hover:shadow-md">
                <button
                  onClick={() => toggleFAQ(0)}
                  className="w-full p-6 text-left flex justify-between items-center hover:bg-gray-100 transition-all duration-500 ease-in-out"
                >
                  <h3 className="text-lg font-bold text-gray-800 font-delius transition-colors duration-500">How far in advance should I book?</h3>
                  <span className={`text-2xl text-green-600 transition-all duration-300 ease-out transform ${openFAQs[0] ? 'rotate-45 scale-110' : 'scale-100'}`}>+</span>
                </button>
                <div className={`overflow-hidden transition-all duration-300 ease-in-out ${openFAQs[0] ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
                  <div className="px-6 pt-6 pb-6 border-t border-gray-200 animate-in fade-in slide-in-from-top-2 duration-500">
                    <p className="text-gray-600">We recommend booking at least 2-4 weeks in advance to ensure availability. However, we do accommodate last-minute requests when possible.</p>
                  </div>
                </div>
              </div>

              {/* FAQ Item 2 */}
              <div className="bg-gray-50 rounded-2xl overflow-hidden transition-all duration-500 hover:shadow-md">
                <button
                  onClick={() => toggleFAQ(1)}
                  className="w-full p-6 text-left flex justify-between items-center hover:bg-gray-100 transition-all duration-500 ease-in-out"
                >
                  <h3 className="text-lg font-bold text-gray-800 font-delius transition-colors duration-500">What's the minimum guest count?</h3>
                  <span className={`text-2xl text-green-600 transition-all duration-300 ease-out transform ${openFAQs[1] ? 'rotate-45 scale-110' : 'scale-100'}`}>+</span>
                </button>
                <div className={`overflow-hidden transition-all duration-300 ease-in-out ${openFAQs[1] ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
                  <div className="px-6 pt-6 pb-6 border-t border-gray-200 animate-in fade-in slide-in-from-top-2 duration-500">
                    <p className="text-gray-600">Our minimum is 50 guests. We offer both unlimited ($25 per head) and limited selection ($20 per head) packages to suit your event.</p>
                  </div>
                </div>
              </div>

              {/* FAQ Item 3 */}
              <div className="bg-gray-50 rounded-2xl overflow-hidden transition-all duration-500 hover:shadow-md">
                <button
                  onClick={() => toggleFAQ(2)}
                  className="w-full p-6 text-left flex justify-between items-center hover:bg-gray-100 transition-all duration-500 ease-in-out"
                >
                  <h3 className="text-lg font-bold text-gray-800 font-delius transition-colors duration-500">Do you cater to dietary requirements?</h3>
                  <span className={`text-2xl text-green-600 transition-all duration-300 ease-out transform ${openFAQs[2] ? 'rotate-45 scale-110' : 'scale-100'}`}>+</span>
                </button>
                <div className={`overflow-hidden transition-all duration-300 ease-in-out ${openFAQs[2] ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
                  <div className="px-6 pt-6 pb-6 border-t border-gray-200 animate-in fade-in slide-in-from-top-2 duration-500">
                    <p className="text-gray-600">Absolutely! We offer vegan, gluten-free, and custom pizzas. Please let us know your dietary needs when booking.</p>
                  </div>
                </div>
              </div>

              {/* FAQ Item 4 */}
              <div className="bg-gray-50 rounded-2xl overflow-hidden transition-all duration-500 hover:shadow-md">
                <button
                  onClick={() => toggleFAQ(3)}
                  className="w-full p-6 text-left flex justify-between items-center hover:bg-gray-100 transition-all duration-500 ease-in-out"
                >
                  <h3 className="text-lg font-bold text-gray-800 font-delius transition-colors duration-500">What areas do you service?</h3>
                  <span className={`text-2xl text-green-600 transition-all duration-300 ease-out transform ${openFAQs[3] ? 'rotate-45 scale-110' : 'scale-100'}`}>+</span>
                </button>
                <div className={`overflow-hidden transition-all duration-300 ease-in-out ${openFAQs[3] ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
                  <div className="px-6 pt-6 pb-6 border-t border-gray-200 animate-in fade-in slide-in-from-top-2 duration-500">
                    <p className="text-gray-600">We service Perth and surrounding areas. Contact us to confirm if your location is within our service radius.</p>
                  </div>
                </div>
              </div>

              {/* FAQ Item 5 */}
              <div className="bg-gray-50 rounded-2xl overflow-hidden transition-all duration-500 hover:shadow-md">
                <button
                  onClick={() => toggleFAQ(4)}
                  className="w-full p-6 text-left flex justify-between items-center hover:bg-gray-100 transition-all duration-500 ease-in-out"
                >
                  <h3 className="text-lg font-bold text-gray-800 font-delius transition-colors duration-500">What's your deposit policy?</h3>
                  <span className={`text-2xl text-green-600 transition-all duration-300 ease-out transform ${openFAQs[4] ? 'rotate-45 scale-110' : 'scale-100'}`}>+</span>
                </button>
                <div className={`overflow-hidden transition-all duration-300 ease-in-out ${openFAQs[4] ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
                  <div className="px-6 pt-6 pb-6 border-t border-gray-200 animate-in fade-in slide-in-from-top-2 duration-500">
                    <p className="text-gray-600">We require a 20% deposit to secure your booking date. The remaining balance is due one week before your event.</p>
                  </div>
                </div>
              </div>

              {/* FAQ Item 6 */}
              <div className="bg-gray-50 rounded-2xl overflow-hidden transition-all duration-500 hover:shadow-md">
                <button
                  onClick={() => toggleFAQ(5)}
                  className="w-full p-6 text-left flex justify-between items-center hover:bg-gray-100 transition-all duration-500 ease-in-out"
                >
                  <h3 className="text-lg font-bold text-gray-800 font-delius transition-colors duration-500">Can you provide add-ons like salads and garlic bread?</h3>
                  <span className={`text-2xl text-green-600 transition-all duration-300 ease-out transform ${openFAQs[5] ? 'rotate-45 scale-110' : 'scale-100'}`}>+</span>
                </button>
                <div className={`overflow-hidden transition-all duration-300 ease-in-out ${openFAQs[5] ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
                  <div className="px-6 pt-6 pb-6 border-t border-gray-200 animate-in fade-in slide-in-from-top-2 duration-500">
                    <p className="text-gray-600">Yes! We offer custom add-ons including garlic bread, salads, and other sides to complement your pizza catering.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Home;
