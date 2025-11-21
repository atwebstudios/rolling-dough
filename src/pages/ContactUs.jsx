import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    eventDate: '',
    guestCount: '',
    message: ''
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    setIsSubmitted(true);
    
    // Reset form after 3 seconds
    setTimeout(() => {
      setFormData({
        name: '',
        email: '',
        phone: '',
        eventDate: '',
        guestCount: '',
        message: ''
      });
      setIsSubmitted(false);
    }, 3000);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1 bg-white pt-16 sm:pt-20 lg:pt-24">
        {/* Page Header */}
        <section className="px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20 border-b border-gray-200">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-green-800 mb-4" style={{ fontFamily: 'Delius' }}>
              Get In Touch
            </h1>
            <p className="text-base sm:text-lg text-gray-600">
              Have questions about our catering services? We'd love to hear from you! Reach out and let's make your event unforgettable.
            </p>
          </div>
        </section>

        {/* Contact Section */}
        <section className="px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-24">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
              {/* Contact Information */}
              <div className="lg:col-span-1">
                <div className="space-y-8">
                  {/* Phone */}
                  <div className="flex gap-4">
                    <div className="shrink-0">
                      <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-green-100">
                        <svg className="h-6 w-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                        </svg>
                      </div>
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-gray-800" style={{ fontFamily: 'Delius' }}>Phone</h3>
                      <p className="text-gray-600 mt-1">(08) XXXX XXXX</p>
                      <p className="text-gray-600">Mon-Fri: 9am - 5pm</p>
                    </div>
                  </div>

                  {/* Email */}
                  <div className="flex gap-4">
                    <div className="shrink-0">
                      <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-green-100">
                        <svg className="h-6 w-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                        </svg>
                      </div>
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-gray-800" style={{ fontFamily: 'Delius' }}>Email</h3>
                      <p className="text-gray-600 mt-1">info@rollingdough.com</p>
                      <p className="text-gray-600">We'll respond within 24 hours</p>
                    </div>
                  </div>

                  {/* Location */}
                  <div className="flex gap-4">
                    <div className="shrink-0">
                      <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-green-100">
                        <svg className="h-6 w-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                      </div>
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-gray-800" style={{ fontFamily: 'Delius' }}>Location</h3>
                      <p className="text-gray-600 mt-1">Perth, Western Australia</p>
                      <p className="text-gray-600">Service area: All of Perth</p>
                    </div>
                  </div>

                  {/* Hours */}
                  <div className="flex gap-4">
                    <div className="shrink-0">
                      <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-green-100">
                        <svg className="h-6 w-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                      </div>
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-gray-800" style={{ fontFamily: 'Delius' }}>Available</h3>
                      <p className="text-gray-600 mt-1">7 Days a Week</p>
                      <p className="text-gray-600">Including weekends & holidays</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Contact Form */}
              <div className="lg:col-span-2">
                <div className="bg-gray-50 rounded-lg p-8 border border-gray-200">
                  <h2 className="text-2xl font-bold text-gray-800 mb-6" style={{ fontFamily: 'Delius' }}>
                    Send us a Message
                  </h2>

                  {isSubmitted ? (
                    <div className="bg-green-50 border border-green-200 rounded-lg p-6 text-center">
                      <div className="mb-4">
                        <svg className="h-12 w-12 text-green-600 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                      </div>
                      <h3 className="text-lg font-bold text-green-800 mb-2">Thank You!</h3>
                      <p className="text-green-700">We've received your message and will get back to you soon.</p>
                    </div>
                  ) : (
                    <form onSubmit={handleSubmit} className="space-y-6">
                      {/* Name */}
                      <div>
                        <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2">
                          Full Name *
                        </label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                          placeholder="Your name"
                        />
                      </div>

                      {/* Email */}
                      <div>
                        <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                          Email Address *
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                          placeholder="your@email.com"
                        />
                      </div>

                      {/* Phone */}
                      <div>
                        <label htmlFor="phone" className="block text-sm font-semibold text-gray-700 mb-2">
                          Phone Number *
                        </label>
                        <input
                          type="tel"
                          id="phone"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                          placeholder="(08) XXXX XXXX"
                        />
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                        {/* Event Date */}
                        <div>
                          <label htmlFor="eventDate" className="block text-sm font-semibold text-gray-700 mb-2">
                            Event Date
                          </label>
                          <input
                            type="date"
                            id="eventDate"
                            name="eventDate"
                            value={formData.eventDate}
                            onChange={handleChange}
                            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                          />
                        </div>

                        {/* Guest Count */}
                        <div>
                          <label htmlFor="guestCount" className="block text-sm font-semibold text-gray-700 mb-2">
                            Number of Guests
                          </label>
                          <input
                            type="number"
                            id="guestCount"
                            name="guestCount"
                            value={formData.guestCount}
                            onChange={handleChange}
                            min="50"
                            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                            placeholder="Minimum 50 guests"
                          />
                        </div>
                      </div>

                      {/* Message */}
                      <div>
                        <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-2">
                          Message *
                        </label>
                        <textarea
                          id="message"
                          name="message"
                          value={formData.message}
                          onChange={handleChange}
                          required
                          rows="6"
                          className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent resize-none"
                          placeholder="Tell us about your event and any special requirements..."
                        ></textarea>
                      </div>

                      {/* Submit Button */}
                      <button
                        type="submit"
                        className="w-full bg-[#d4634d] hover:bg-[#c55540] text-white font-semibold py-3 rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl"
                      >
                        Send Message
                      </button>

                      <p className="text-sm text-gray-600 text-center">
                        We'll get back to you as soon as possible. We typically respond within 24 hours.
                      </p>
                    </form>
                  )}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-24 bg-gray-50 border-t border-gray-200">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl sm:text-3xl font-bold text-green-800 text-center mb-12" style={{ fontFamily: 'Delius' }}>
              Quick Answers
            </h2>

            <div className="space-y-4">
              {/* FAQ 1 */}
              <div className="bg-white rounded-lg border border-gray-200 overflow-hidden">
                <details className="cursor-pointer">
                  <summary className="flex justify-between items-center p-6 hover:bg-gray-50 font-semibold text-gray-800">
                    <span>What's the minimum guest count?</span>
                    <span className="text-2xl text-green-600">+</span>
                  </summary>
                  <div className="px-6 pb-6 border-t border-gray-200 text-gray-600">
                    Our minimum is 50 guests. This ensures we can provide the best service and experience for your event.
                  </div>
                </details>
              </div>

              {/* FAQ 2 */}
              <div className="bg-white rounded-lg border border-gray-200 overflow-hidden">
                <details className="cursor-pointer">
                  <summary className="flex justify-between items-center p-6 hover:bg-gray-50 font-semibold text-gray-800">
                    <span>How far in advance should I book?</span>
                    <span className="text-2xl text-green-600">+</span>
                  </summary>
                  <div className="px-6 pb-6 border-t border-gray-200 text-gray-600">
                    We recommend booking 2-4 weeks in advance. However, we do accommodate last-minute requests when our schedule allows.
                  </div>
                </details>
              </div>

              {/* FAQ 3 */}
              <div className="bg-white rounded-lg border border-gray-200 overflow-hidden">
                <details className="cursor-pointer">
                  <summary className="flex justify-between items-center p-6 hover:bg-gray-50 font-semibold text-gray-800">
                    <span>Do you cater to dietary requirements?</span>
                    <span className="text-2xl text-green-600">+</span>
                  </summary>
                  <div className="px-6 pb-6 border-t border-gray-200 text-gray-600">
                    Absolutely! We offer vegan, gluten-free, and other dietary options. Let us know your requirements and we'll create the perfect menu.
                  </div>
                </details>
              </div>

              {/* FAQ 4 */}
              <div className="bg-white rounded-lg border border-gray-200 overflow-hidden">
                <details className="cursor-pointer">
                  <summary className="flex justify-between items-center p-6 hover:bg-gray-50 font-semibold text-gray-800">
                    <span>What areas do you service?</span>
                    <span className="text-2xl text-green-600">+</span>
                  </summary>
                  <div className="px-6 pb-6 border-t border-gray-200 text-gray-600">
                    We service all areas of Perth. Contact us to confirm availability for your specific location.
                  </div>
                </details>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default ContactUs;