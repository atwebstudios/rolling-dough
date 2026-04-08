import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import FAQSection from '../components/FAQSection';
import { updateMetaTags, scrollToTop } from '../utils/seoUtils';

const Home = () => {
  const navigate = useNavigate();

  // Update SEO meta tags on page load
  useEffect(() => {
    updateMetaTags({
      title: 'Rolling Dough - Premium Woodfire Pizza Catering in Perth',
      description: 'Premium woodfire pizza catering for events in Perth. Authentic Italian-inspired pizzas for weddings, corporate events, and celebrations. Book your event now!',
      url: 'https://rollingdough.com.au/',
      image: 'https://rollingdough.com.au/hero.webp',
      keywords: 'woodfire pizza catering, Perth events, pizza catering, wedding catering, corporate catering, event food'
    });
    scrollToTop();
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main id="main-content" className="flex-1 bg-white pt-16 sm:pt-20 lg:pt-20">
        {/* Hero Section */}
        <section 
          className="relative w-full h-[60vh] sm:h-[80vh] overflow-hidden mt-0 sm:mt-2 lg:mt-6 bg-cover bg-center"
          style={{ backgroundImage: "url('/hero.webp')" }}
        >
          <div className="relative w-full h-full">
            {/* Background Overlay */}
            <div className="absolute inset-0 bg-black/40 z-20"></div>

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
                  Bringing the heat to your celebrations since 2019
                </p>

                {/* CTA Buttons */}
                <div className="flex flex-col sm:flex-row gap-2 sm:gap-4 w-full sm:w-auto">
                  <button
                    onClick={() => navigate('/contactus')}
                    style={{backgroundColor: 'var(--color-primary)'}}
                    className="hover:opacity-90 text-white font-semibold px-2 sm:px-6 py-2 sm:py-3 rounded-md transition-all duration-300 shadow-lg hover:shadow-xl text-xs sm:text-base"
                  >
                    Book Your Event
                  </button>
                  <button
                    onClick={() => navigate('/gallery')}
                    style={{color: 'var(--color-dark-green)'}}
                    className="bg-white/90 hover:bg-white font-semibold px-2 sm:px-6 py-2 sm:py-3 rounded-md transition-all duration-300 shadow-lg hover:shadow-xl text-xs sm:text-base"
                  >
                    View Gallery
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Separator */}
        <div className="h-px bg-gray-200 mx-4 sm:mx-6 lg:mx-8"></div>

        {/* Dietary Options Section */}
        <section className="py-10 px-4 sm:px-6 lg:px-8 bg-white">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-2xl sm:text-3xl font-bold text-green-600 text-center mb-8 font-delius">
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
                <h3 className="font-bold text-gray-800 mb-2">Add-ons</h3>
                <p className="text-sm text-gray-600">Enhance your event with our signature Garlic Bread and Bruschetta. Perfect complements to your pizza experience</p>
              </div>
            </div>
          </div>
        </section>

        {/* Separator */}
        <div className="h-px bg-gray-200 mx-4 sm:mx-6 lg:mx-8"></div>

        {/* Packages Section */}
        <section className="py-8 px-4 sm:px-6 lg:px-8 bg-white">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-2xl sm:text-3xl font-bold text-green-600 text-center mb-6 font-delius">
              Our Event Packages
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Classic Package Card */}
              <div className="bg-linear-to-br from-green-50 to-green-100 border-0 p-8 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 hover:scale-105 hover:-translate-y-2 cursor-pointer group text-center font-delius">
                <h3 className="text-2xl font-bold mb-2 text-gray-800 transition-all duration-300 group-hover:text-green-700">Classic Package</h3>
                <p className="text-4xl font-bold mb-1 text-green-600 transition-all duration-300 group-hover:text-green-700">$26 <span className="text-lg font-normal text-gray-600">/ Person</span></p>
                <h4 className="text-lg font-semibold mb-3 text-gray-700 transition-all duration-300 group-hover:text-green-600">Personal Gourmet</h4>
                <p className="text-sm leading-relaxed text-gray-600 transition-all duration-300 group-hover:text-gray-700">
                  Our Classic Package allows each guest to savor their personal, gourmet pizza for just $26 (+ GST). Perfect for diverse gatherings where individual taste reigns supreme, ensuring every palate is delighted.
                </p>
                <a
                  href="/classic_pizza_menu.webp"
                  download="Rolling_Dough_Classic_Menu.webp"
                  onClick={(e) => e.stopPropagation()}
                  className="inline-flex items-center gap-2 mt-5 px-5 py-2.5 border-2 border-green-600 text-green-700 text-sm font-semibold rounded-full hover:bg-green-600 hover:text-white transition-all duration-300 hover:shadow-lg hover:scale-105 active:scale-95"
                >
                  <svg className="w-4 h-4 transition-transform duration-300 group-hover:animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                  </svg>
                  Download Menu
                </a>
              </div>

              {/* Unlimited Pizza Card */}
              <div className="bg-linear-to-br from-green-50 to-green-100 border-0 p-8 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 hover:scale-105 hover:-translate-y-2 cursor-pointer group text-center font-delius">
                <h3 className="text-2xl font-bold mb-2 text-gray-800 transition-all duration-300 group-hover:text-green-700">Unlimited Pizza</h3>
                <p className="text-4xl font-bold mb-1 text-green-600 transition-all duration-300 group-hover:text-green-700">$28 <span className="text-lg font-normal text-gray-600">/ Person</span></p>
                <h4 className="text-lg font-semibold mb-3 text-gray-700 transition-all duration-300 group-hover:text-green-600">Endless Indulgence</h4>
                <p className="text-sm text-gray-600 leading-relaxed transition-all duration-300 group-hover:text-gray-700">
                  For true pizza aficionados, the Unlimited Indulgence offers two hours of endless pizza delight, including our signature dessert pizzas. Priced at $28 per guest (+ GST), it's an invitation to revel in a grand feast of varied flavors.
                </p>
                <a
                  href="/unlimited_pizza_menu.webp"
                  download="Rolling_Dough_Unlimited_Menu.webp"
                  onClick={(e) => e.stopPropagation()}
                  className="inline-flex items-center gap-2 mt-5 px-5 py-2.5 border-2 border-green-600 text-green-700 text-sm font-semibold rounded-full hover:bg-green-600 hover:text-white transition-all duration-300 hover:shadow-lg hover:scale-105 active:scale-95"
                >
                  <svg className="w-4 h-4 transition-transform duration-300 group-hover:animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                  </svg>
                  Download Menu
                </a>
              </div>
            </div>

            {/* Important Notes */}
            <div className="mt-8 bg-amber-50 border-l-4 border-r-4 border-amber-500 p-4 rounded max-w-5xl mx-auto">
              <p className="text-sm text-gray-700 text-center"><span className="font-semibold text-amber-700">Minimum Event Size:</span> We cater to events with a minimum of 30 guests.</p>
              <p className="text-sm text-gray-700 mt-2 text-center"><span className="font-semibold text-amber-700">Public Holiday Surcharge:</span> A 15% surcharge applies to bookings on public holidays.</p>
            </div>
          </div>
        </section>

        {/* Separator */}
        <div className="h-px bg-gray-200 mx-4 sm:mx-6 lg:mx-8"></div>

        {/* What's Included Section */}
        <section className="py-10 px-4 sm:px-6 lg:px-8 bg-white">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-2xl sm:text-3xl font-bold text-green-600 text-center mb-8 font-delius">
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
        <section className="py-10 px-4 sm:px-6 lg:px-8 bg-white text-center">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-2xl sm:text-3xl font-bold text-green-600 mb-3 font-delius">
              Ready to Book Your Event?
            </h2>
            <p className="text-lg text-gray-600">
              Check availability and get instant pricing for your perfect pizza catering experience.
            </p>
            <button
              onClick={() => navigate('/contactus')}
              style={{backgroundColor: 'var(--color-primary)'}}
              className="mt-6 hover:opacity-90 text-white font-bold px-16 py-3 rounded-2xl transition-all duration-300 shadow-md hover:shadow-lg w-full sm:w-auto"
            >
              Check Availability 
            </button>
          </div>
        </section>

        {/* Separator */}
        <div className="h-px bg-gray-200 mx-4 sm:mx-6 lg:mx-8"></div>

        {/* Why Choose Us Section */}
        <section className="py-10 px-4 sm:px-6 lg:px-8 bg-white">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-2xl sm:text-3xl font-bold text-green-700 text-center mb-3">
              Why Choose Rolling Dough?
            </h2>
            <p className="text-center text-gray-600 mb-10 max-w-2xl mx-auto font-delius">
              Perth's most trusted pizza food truck for unforgettable catering experiences
            </p>

            {/* Stats Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
              {/* Stat 1 */}
              <div className="text-center p-6 rounded-lg bg-linear-to-br from-blue-50 to-blue-100 hover:shadow-lg transition-shadow duration-300">
                <p className="text-5xl sm:text-6xl font-bold text-green-600 mb-2">{new Date().getFullYear() - 2020}+</p>
                <p className="text-gray-700 font-semibold">Years Experience</p>
                <p className="text-sm text-gray-600 mt-1 font-delius">Serving Perth with excellence</p>
              </div>

              {/* Stat 2 */}
              <div className="text-center p-6 rounded-lg bg-linear-to-br from-amber-50 to-amber-100 hover:shadow-lg transition-shadow duration-300">
                <p className="text-5xl sm:text-6xl font-bold text-orange-600 mb-2">500+</p>
                <p className="text-gray-700 font-semibold">Happy Customers</p>
                <p className="text-sm text-gray-600 mt-1 font-delius">Events successfully catered</p>
              </div>

              {/* Stat 3 */}
              <div className="text-center p-6 rounded-lg bg-linear-to-br from-green-50 to-green-100 hover:shadow-lg transition-shadow duration-300">
                <p className="text-5xl sm:text-6xl font-bold text-emerald-600 mb-2">7 Days</p>
                <p className="text-gray-700 font-semibold">Availability</p>
                <p className="text-sm text-gray-600 mt-1 font-delius">Including weekends & holidays</p>
              </div>

              {/* Stat 4 */}
              <div className="text-center p-6 rounded-lg bg-linear-to-br from-rose-50 to-rose-100 hover:shadow-lg transition-shadow duration-300">
                <p className="text-5xl sm:text-6xl font-bold text-rose-600 mb-2">100%</p>
                <p className="text-gray-700 font-semibold">Satisfaction Rate</p>
                <p className="text-sm text-gray-600 mt-1 font-delius">Your event, our priority</p>
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
                  <h3 className="text-lg font-bold text-gray-800">Fresh Quality</h3>
                  <p className="text-gray-600 text-sm mt-1 font-delius">Made-to-order pizzas with premium ingredients</p>
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
                  <h3 className="text-lg font-bold text-gray-800">Customizable</h3>
                  <p className="text-gray-600 text-sm mt-1 font-delius">Vegan, gluten-free & dietary options</p>
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
                  <h3 className="text-lg font-bold text-gray-800">Professional Service</h3>
                  <p className="text-gray-600 text-sm mt-1 font-delius">Trained crew for seamless execution</p>
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
                  <h3 className="text-lg font-bold text-gray-800">Affordable Pricing</h3>
                  <p className="text-gray-600 text-sm mt-1 font-delius">Transparent rates from $28/head</p>
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
                  <h3 className="text-lg font-bold text-gray-800">Perth-Wide Coverage</h3>
                  <p className="text-gray-600 text-sm mt-1 font-delius">Service all areas of Perth</p>
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
                  <h3 className="text-lg font-bold text-gray-800">Unforgettable Experience</h3>
                  <p className="text-gray-600 text-sm mt-1 font-delius">Creates lasting memories for your guests</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Separator */}
        <div className="h-px bg-gray-200 mx-4 sm:mx-6 lg:mx-8"></div>

        {/* FAQ Section */}
        <FAQSection variant="home" />
      </main>
      <Footer />
    </div>
  );
};

export default Home;
