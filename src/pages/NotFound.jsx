import React from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const NotFound = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main id="main-content" className="flex-1 bg-white pt-20 sm:pt-24 lg:pt-28">
        {/* 404 Hero Section */}
        <section className="px-4 sm:px-6 lg:px-8 py-6 sm:py-10 lg:py-12">
          <div className="max-w-4xl mx-auto text-center">

            {/* Main 404 Message */}
            <h1 className="text-6xl sm:text-7xl md:text-8xl font-bold mb-4">
              <span style={{ color: 'var(--color-primary)' }}>4</span>
              <span style={{ color: 'var(--color-dark-green)' }}>0</span>
              <span style={{ color: 'var(--color-accent)' }}>4</span>
            </h1>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-800 mb-4">
              Oops! Order Not Found
            </h2>

            <p className="text-lg sm:text-xl text-gray-600 mb-6 max-w-2xl mx-auto leading-relaxed font-delius">
              Looks like the page you're looking for got lost in the wood-fired oven! 🔥 
              It's probably as rare as finding a perfectly cooked pizza crust.
            </p>

            
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 mb-4">
              {/* Fact 1 */}
              <div className="bg-linear-to-br from-red-50 to-red-100 rounded-lg p-6">
                <div className="text-4xl mb-2">🔥</div>
                <p className="text-gray-700 font-semibold mb-1">Wood-Fired</p>
                <p className="text-sm text-gray-600 font-delius">Baked to perfection at 900°F</p>
              </div>

              {/* Fact 2 */}
              <div className="bg-linear-to-br from-green-50 to-green-100 rounded-lg p-6">
                <div className="text-4xl mb-2">🌱</div>
                <p className="text-gray-700 font-semibold mb-1">Fresh Ingredients</p>
                <p className="text-sm text-gray-600">Only the finest local produce</p>
              </div>

              {/* Fact 3 */}
              <div className="bg-linear-to-br from-yellow-50 to-yellow-100 rounded-lg p-6">
                <div className="text-4xl mb-2">⭐</div>
                <p className="text-gray-700 font-semibold mb-1">5-Star Quality</p>
                <p className="text-sm text-gray-600">500+ happy events catered</p>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <button
                onClick={() => navigate('/')}
                style={{ backgroundColor: 'var(--color-primary)' }}
                className="text-white font-semibold py-3 px-8 rounded-lg hover:opacity-90 transition-all duration-300 shadow-lg hover:shadow-xl text-lg"
              >
                🏠 Back to Home
              </button>
              <button
                onClick={() => navigate('/contactus')}
                className="bg-gray-200 text-gray-800 font-semibold py-3 px-8 rounded-lg hover:bg-gray-300 transition-all duration-300 shadow-lg hover:shadow-xl text-lg"
              >
                📞 Book an Event
              </button>
            </div>
          </div>
        </section>

        {/* Bottom Message */}
        <section className="px-4 sm:px-6 lg:px-8 py-3 bg-gray-50 text-center">
          <p className="text-gray-600 max-w-2xl mx-auto">
            If you believe this is a mistake, please <a href="/contactus" className="font-semibold hover:underline" style={{ color: 'var(--color-primary)' }}>contact us</a> and we'll help you find what you're looking for!
          </p>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default NotFound;
