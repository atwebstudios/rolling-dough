import React, { useEffect } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { updateMetaTags, scrollToTop } from '../utils/seoUtils';

const About = () => {
  // Update SEO meta tags on page load
  useEffect(() => {
    updateMetaTags({
      title: 'About Rolling Dough - Our Story & Mission',
      description: 'Discover Rolling Dough\'s story. 20+ years of woodfire pizza expertise bringing authentic Italian flavors to Perth events since 2019.',
      url: 'https://rollingdough.com.au/about',
      image: 'https://rollingdough.com.au/hero.png',
      keywords: 'about rolling dough, woodfire pizza chef, Perth catering, pizza artisan, event catering Perth'
    });
    scrollToTop();
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main id="main-content" className="flex-1 bg-white pt-16 sm:pt-20 lg:pt-20">
        {/* Hero Section */}
        <section className="px-4 sm:px-6 lg:px-8 py-6 sm:py-8 lg:py-10 border-b border-gray-200">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-green-800 mb-6">
              About Rolling Dough
            </h1>
            <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto font-delius">
              Bringing authentic woodfire pizza to Perth's best events since 2019
            </p>
          </div>
        </section>

        {/* Our Story Section */}
        <section className="px-4 sm:px-6 lg:px-8 py-8 sm:py-10 lg:py-12">
          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-center">
              {/* Text Content */}
              <div>
                <h2 className="text-3xl sm:text-4xl font-bold text-green-800 mb-6">
                  Our Story
                </h2>
                <div className="space-y-4 text-gray-700 text-base leading-relaxed font-delius">
                  <p>
                    With over 20 years of experience in making wood-fired pizza, I've always received wonderful feedback from my customers. This passion inspired me to start Rolling Dough, and I'm proud to have been successfully running it for the last four years. At the beginning, I worked in different restaurants to gain experience and perfect my craft.
                  </p>
                  <p>
                    Rolling Dough started with a simple mission: bringing authentic, delicious wood-fired pizza to Perth's vibrant events community. Over the past 4 years, we've catered hundreds of events across Perth, from intimate backyard gatherings to large corporate functions. Every event is an opportunity to create lasting memories through exceptional food and service.
                  </p>
                  <p>
                    My goal is to give the best memorable taste and experience to every customer and see the smile on their face. Our success comes from a simple philosophy: premium ingredients, expert craftsmanship, and genuine care for every guest. We're not just serving pizza—we're creating moments.
                  </p>
                </div>
              </div>

              {/* Image */}
              <div className="rounded-lg h-80 overflow-hidden shadow-lg">
                <img src="/hero.png" alt="Rolling Dough event catering" className="w-full h-full object-cover" />
              </div>
            </div>
          </div>
        </section>

        {/* Mission & Values Section */}
        <section className="px-4 sm:px-6 lg:px-8 py-8 sm:py-10 lg:py-12 bg-gray-50 border-y border-gray-200">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-bold text-green-800 text-center mb-8">
              Our Mission & Values
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {/* Mission Card */}
              <div className="bg-white rounded-lg p-8 border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
                <div className="mb-4">
                  <svg className="w-12 h-12 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-lg font-bold text-gray-800 mb-4">Our Mission</h3>
                <p className="text-gray-600 text-sm leading-relaxed font-delius">
                  To deliver exceptional woodfire pizza experiences that bring people together and make every event memorable through quality, service, and passion.
                </p>
              </div>

              {/* Quality Value */}
              <div className="bg-white rounded-lg p-8 border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
                <div className="mb-4">
                  <svg className="w-12 h-12 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-lg font-bold text-gray-800 mb-2">Quality First</h3>
                <p className="text-gray-600 text-sm leading-relaxed font-delius">
                  We source premium ingredients and use traditional woodfire techniques to ensure every pizza exceeds expectations. Quality is never compromised.
                </p>
              </div>

              {/* Community Value */}
              <div className="bg-white rounded-lg p-8 border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
                <div className="mb-4">
                  <svg className="w-12 h-12 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 4.354a4 4 0 110 5.292M15 21H3v-2a6 6 0 0112 0v2zm0 0h6v-2a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                  </svg>
                </div>
                <h3 className="text-lg font-bold text-gray-800 mb-2">Community</h3>
                <p className="text-gray-600 text-sm leading-relaxed font-delius">
                  We believe in bringing people together. Whether corporate or casual, we're committed to creating inclusive, welcoming experiences for all guests.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Why Choose Us Section */}
        <section className="px-4 sm:px-6 lg:px-8 py-8 sm:py-10 lg:py-12">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-bold text-green-800 text-center mb-8">
              Why Choose Rolling Dough
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              {/* Feature 1 */}
              <div className="flex gap-4">
                <div className="shrink-0">
                  <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-green-100">
                    <svg className="h-6 w-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                </div>
                <div>
                  <h3 className="text-base font-bold text-gray-800 mb-2">5+ Years Experience</h3>
                  <p className="text-gray-600 text-sm font-delius">Trusted by Perth's best events with consistent 5-star experiences since 2019.</p>
                </div>
              </div>

              {/* Feature 2 */}
              <div className="flex gap-4">
                <div className="shrink-0">
                  <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-green-100">
                    <svg className="h-6 w-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                </div>
                <div>
                  <h3 className="text-base font-bold text-gray-800 mb-2">Authentic Woodfire</h3>
                  <p className="text-gray-600 text-sm font-delius">Traditional Italian techniques with modern flair. Every pizza is crafted to perfection in our signature wood-fired oven.</p>
                </div>
              </div>

              {/* Feature 3 */}
              <div className="flex gap-4">
                <div className="shrink-0">
                  <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-green-100">
                    <svg className="h-6 w-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m7-1a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                </div>
                <div>
                  <h3 className="text-base font-bold text-gray-800 mb-2">Custom Menus</h3>
                  <p className="text-gray-600 text-sm font-delius">Fully customizable options including gluten-free, vegan, and dietary accommodations for all guests.</p>
                </div>
              </div>

              {/* Feature 4 */}
              <div className="flex gap-4">
                <div className="shrink-0">
                  <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-green-100">
                    <svg className="h-6 w-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                </div>
                <div>
                  <h3 className="text-base font-bold text-gray-800 mb-2">Competitive Pricing</h3>
                  <p className="text-gray-600 text-sm font-delius">Premium quality at great value. $25 per head (unlimited) or $20 per head (limited selection), with $800 minimum.</p>
                </div>
              </div>

              {/* Feature 5 */}
              <div className="flex gap-4">
                <div className="shrink-0">
                  <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-green-100">
                    <svg className="h-6 w-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    </svg>
                  </div>
                </div>
                <div>
                  <h3 className="text-base font-bold text-gray-800 mb-2">Perth-Wide Service</h3>
                  <p className="text-gray-600 text-sm font-delius">We cover all areas of Perth. Whether it's your backyard or a large venue, we'll bring the magic to you.</p>
                </div>
              </div>

              {/* Feature 6 */}
              <div className="flex gap-4">
                <div className="shrink-0">
                  <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-green-100">
                    <svg className="h-6 w-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                </div>
                <div>
                  <h3 className="text-base font-bold text-gray-800 mb-2">Professional Team</h3>
                  <p className="text-gray-600 text-sm font-delius">Friendly, experienced staff who handle setup, service, and cleanup so you can focus on your guests.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="px-4 sm:px-6 lg:px-8 py-12 sm:py-14 lg:py-18">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl sm:text-4xl font-bold text-green-800 mb-6">
              Ready to Experience Rolling Dough?
            </h2>
            <p className="text-base text-gray-600 mb-8 font-delius">
              Let's make your next event unforgettable with authentic woodfire pizza and exceptional service.
            </p>
            <a
              href="/contactus"
              className="inline-block bg-orange-400 hover:bg-orange-500 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              Book Your Event
            </a>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default About;