import React, { useState, useEffect, useRef } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import CustomDatePicker from '../components/CustomDatePicker';
import CustomDropdown from '../components/CustomDropdown';
import FAQSection from '../components/FAQSection';
import { validateName, validateEmail, validatePhone, validateGuestCount } from '../utils/validations';

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    eventDate: '',
    guestCount: '',
    package: '',
    addOns: [],
    message: ''
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const [fieldErrors, setFieldErrors] = useState({});

  useEffect(() => {
    const handleWheel = (e) => {
      if (e.target.type === 'number') e.target.blur();
    };

    document.addEventListener('wheel', handleWheel, { passive: true });
    return () => document.removeEventListener('wheel', handleWheel);
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));

    let error = '';
    if (name === 'name') error = validateName(value);
    else if (name === 'email') error = validateEmail(value);
    else if (name === 'phone') error = validatePhone(value);
    else if (name === 'guestCount') error = validateGuestCount(value);

    setFieldErrors((prev) => ({ ...prev, [name]: error }));
  };

  const handleAddOnsChange = (e) => {
    const { value, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      addOns: checked
        ? [...prev.addOns, value]
        : prev.addOns.filter((item) => item !== value)
    }));
  };

  // Get today's date in YYYY-MM-DD format for minimum date
  const getTodayDate = () => {
    const today = new Date();
    const year = today.getFullYear();
    const month = String(today.getMonth() + 1).padStart(2, '0');
    const day = String(today.getDate()).padStart(2, '0');
    return `${year}-${month}-${day}`;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newErrors = {};
    
    if (!formData.name) newErrors.name = 'Name is required';
    else {
      const nameError = validateName(formData.name);
      if (nameError) newErrors.name = nameError;
    }

    if (!formData.email) newErrors.email = 'Email is required';
    else {
      const emailError = validateEmail(formData.email);
      if (emailError) newErrors.email = emailError;
    }

    if (!formData.phone) newErrors.phone = 'Phone number is required';
    else {
      const phoneError = validatePhone(formData.phone);
      if (phoneError) newErrors.phone = phoneError;
    }

    if (!formData.eventDate) newErrors.eventDate = 'Event date is required';
    if (!formData.guestCount) newErrors.guestCount = 'Guest count is required';
    else {
      const guestError = validateGuestCount(formData.guestCount);
      if (guestError) newErrors.guestCount = guestError;
    }
    if (!formData.package) newErrors.package = 'Please select a package';
    if (!formData.message) newErrors.message = 'Message is required';

    if (Object.keys(newErrors).length > 0) {
      setFieldErrors(newErrors);
      setError('Please fix the errors below');
      return;
    }

    setIsLoading(true);
    setError('');
    setFieldErrors({});

    try {
      const response = await fetch(`/api/send-email`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok) {
        if (response.status === 429) {
          throw new Error(data.message || 'You have submitted too many inquiries. Please wait an hour before submitting another inquiry.');
        }
        throw new Error(data.error || 'Failed to send email');
      }

      setIsSubmitted(true);
      setFormData({ name: '', email: '', phone: '', eventDate: '', guestCount: '', package: '', addOns: [], message: '' });
      setFieldErrors({});

      setTimeout(() => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }, 100);

      const timeout = window.innerWidth < 768 ? 5000 : 3000;
      setTimeout(() => setIsSubmitted(false), timeout);
    } catch (err) {
      setError(err.message || 'Failed to send your message. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main id="main-content" className="flex-1 bg-white pt-20 sm:pt-24 lg:pt-28">
        <section className="px-4 sm:px-6 lg:px-8 py-6 sm:py-8 lg:py-10 border-b border-gray-200">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-green-800 mb-4">
              Get In Touch
            </h1>
            <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto font-delius">
              Have questions about our catering services? We'd love to hear from you! Reach out and let's make your event unforgettable.
            </p>
          </div>
        </section>

        <section className="px-4 sm:px-6 lg:px-8 py-6 sm:py-8 lg:py-10">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
              <div className="lg:col-span-1">
                <div className="space-y-6">
                  <div className="flex gap-4">
                    <div className="shrink-0">
                      <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-green-100">
                        <svg className="h-6 w-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                        </svg>
                      </div>
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-gray-800">Phone</h3>
                      <div className="mt-1 font-delius">
                        <a
                          href="tel:0478540160"
                          className="text-green-600 hover:text-green-700 hover:underline cursor-pointer font-semibold transition-colors duration-200 inline-block"
                        >
                          0478 540 160
                        </a>
                        <p className="text-gray-600 text-sm">(Call only)</p>
                      </div>
                      <div className="mt-2">
                        <a
                          href="tel:0433770065"
                          className="text-green-600 hover:text-green-700 hover:underline cursor-pointer font-semibold transition-colors duration-200 inline-block"
                        >
                          0433 770 065
                        </a>
                        <p className="text-gray-600 text-sm">(Call & WhatsApp)</p>
                      </div>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="shrink-0">
                      <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-green-100">
                        <svg className="h-6 w-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                        </svg>
                      </div>
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-gray-800">Email</h3>
                      <a
                        href="mailto:rollingdoughpizza5@gmail.com"
                        className="text-green-600 hover:text-green-700 hover:underline cursor-pointer font-semibold transition-colors duration-200 mt-1 inline-block font-delius"
                      >
                        rollingdoughpizza5@gmail.com
                      </a>
                      <p className="text-gray-600 text-sm">We'll respond within 24 hours</p>
                    </div>
                  </div>

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
                      <h3 className="text-lg font-bold text-gray-800">Location</h3>
                      <p className="text-gray-600 mt-1 font-delius">Perth, Western Australia</p>
                      <p className="text-gray-600 text-sm font-delius">Service area: All of Perth</p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="shrink-0">
                      <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-green-100">
                        <svg className="h-6 w-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                      </div>
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-gray-800">Available</h3>
                      <p className="text-gray-600 mt-1 font-delius">7 Days a Week</p>
                      <p className="text-gray-600 text-sm font-delius">Including weekends & holidays</p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="shrink-0">
                      <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-green-100">
                        <svg className="h-6 w-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21H5a2 2 0 01-2-2V5a2 2 0 012-2h11l5 5v11a2 2 0 01-2 2z" />
                          <polyline points="17 21 17 13 7 13 7 21" />
                          <polyline points="7 3 7 8 15 8" />
                        </svg>
                      </div>
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-gray-800">ABN</h3>
                      <p className="text-gray-600 mt-1 font-delius">40 680 206 366</p>
                      <p className="text-gray-600 text-sm font-delius">Australian Business Number</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="lg:col-span-2">
                {/* Important Notes */}
                <div className="mb-6 bg-amber-50 border-l-4 border-r-4 border-amber-500 p-4 rounded">
                  <p className="text-sm text-gray-700"><span className="font-semibold text-amber-700">Minimum Event Size:</span> We cater to events with a minimum of 30 guests.</p>
                  <p className="text-sm text-gray-700 mt-2"><span className="font-semibold text-amber-700">Public Holiday Surcharge:</span> A 15% surcharge applies to bookings on public holidays.</p>
                </div>

                <div className="bg-gray-50 rounded-lg p-8 border border-gray-200" >
                  <h2 className="text-2xl font-bold text-gray-800 mb-6">
                    Send us a Message
                  </h2>

                  {isSubmitted ? (
                    <div 
                      className="bg-green-50 border border-green-200 rounded-lg p-4 sm:p-6 text-center animate-fade-in"
                      role="alert"
                      aria-live="polite"
                      aria-atomic="true"
                    >
                      <div className="mb-4">
                        <svg className="h-12 w-12 sm:h-14 sm:w-14 text-green-600 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                      </div>
                      <h3 className="text-lg sm:text-xl font-bold text-green-800 mb-2">Thank You!</h3>
                      <p className="text-green-700 text-sm sm:text-base mb-3">We've received your message and will get back to you soon.</p>
                      <p className="text-green-600 text-xs sm:text-sm font-medium">Auto-closing in a moment...</p>
                    </div>
                  ) : (
                    <form onSubmit={handleSubmit} className="space-y-4">
                      <div>
                        <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-1.5">
                          Full Name *
                        </label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          required
                          autoComplete="name"
                          className={`w-full px-3 py-2.5 rounded-lg border focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-colors ${
                            fieldErrors.name
                              ? 'border-red-500 focus:ring-red-500'
                              : 'border-gray-300'
                          }`}
                          placeholder="Your name"
                        />
                        {fieldErrors.name && (
                          <p className="mt-1 text-sm text-red-500">
                            {fieldErrors.name}
                          </p>
                        )}
                      </div>

                      <div>
                        <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-1.5">
                          Email Address *
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                          autoComplete="email"
                          className={`w-full px-3 py-2.5 rounded-lg border focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-colors ${
                            fieldErrors.email
                              ? 'border-red-500 focus:ring-red-500'
                              : 'border-gray-300'
                          }`}
                          placeholder="your@email.com"
                        />
                        {fieldErrors.email && (
                          <p className="mt-1 text-sm text-red-500">
                            {fieldErrors.email}
                          </p>
                        )}
                      </div>

                      <div>
                        <label htmlFor="phone" className="block text-sm font-semibold text-gray-700 mb-1.5">
                          Phone Number *
                        </label>
                        <input
                          type="number"
                          id="phone"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          required
                          autoComplete="tel"
                          className={`w-full px-3 py-2.5 rounded-lg border focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-colors ${
                            fieldErrors.phone
                              ? 'border-red-500 focus:ring-red-500'
                              : 'border-gray-300'
                          }`}
                          placeholder="0412345678"
                        />
                        {fieldErrors.phone && (
                          <p className="mt-1 text-sm text-red-500">
                            {fieldErrors.phone}
                          </p>
                        )}
                      </div>

                      <CustomDropdown
                        id="package"
                        name="package"
                        value={formData.package}
                        onChange={handleChange}
                        label="Package Type *"
                        error={fieldErrors.package}
                        options={[
                          { value: '', label: 'Select a package' },
                          { value: 'Classic Package - $22/Person (+ GST)', label: 'Classic Package - $22/Person (+ GST)' },
                          { value: 'Unlimited Pizza - $25/Person (+ GST)', label: 'Unlimited Pizza - $25/Person (+ GST)' },
                          { value: 'Event Special - Pricing upon request', label: 'Event Special - Pricing upon request' }
                        ]}
                      />

                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-3">
                          Add-ons
                        </label>
                        <div className="flex gap-4">
                          <div className="flex items-center">
                            <input
                              type="checkbox"
                              id="garlicBread"
                              name="addOns"
                              value="Garlic Bread"
                              checked={formData.addOns.includes('Garlic Bread')}
                              onChange={handleAddOnsChange}
                              className="w-4 h-4 rounded border-gray-300 text-green-600 focus:ring-green-500 cursor-pointer"
                            />
                            <label htmlFor="garlicBread" className="ml-3 text-sm text-gray-700 cursor-pointer">
                              Garlic Bread
                            </label>
                          </div>
                          <div className="flex items-center">
                            <input
                              type="checkbox"
                              id="bruschetta"
                              name="addOns"
                              value="Bruschetta"
                              checked={formData.addOns.includes('Bruschetta')}
                              onChange={handleAddOnsChange}
                              className="w-4 h-4 rounded border-gray-300 text-green-600 focus:ring-green-500 cursor-pointer"
                            />
                            <label htmlFor="bruschetta" className="ml-3 text-sm text-gray-700 cursor-pointer">
                              Bruschetta
                            </label>
                          </div>
                          <div className="flex items-center">
                            <input
                              type="checkbox"
                              id="Vegan"
                              name="addOns"
                              value="Vegan"
                              checked={formData.addOns.includes('Vegan')}
                              onChange={handleAddOnsChange}
                              className="w-4 h-4 rounded border-gray-300 text-green-600 focus:ring-green-500 cursor-pointer"
                            />
                            <label htmlFor="Vegan" className="ml-3 text-sm text-gray-700 cursor-pointer">
                              Vegan
                            </label>
                          </div>
                          <div className="flex items-center">
                            <input
                              type="checkbox"
                              id="glutenFree"
                              name="addOns"
                              value="Gluten Free"
                              checked={formData.addOns.includes('Gluten Free')}
                              onChange={handleAddOnsChange}
                              className="w-4 h-4 rounded border-gray-300 text-green-600 focus:ring-green-500 cursor-pointer"
                            />
                            <label htmlFor="glutenFree" className="ml-3 text-sm text-gray-700 cursor-pointer">
                              Gluten Free
                            </label>
                          </div>
                        </div>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                          <label htmlFor="eventDate" className="block text-sm font-semibold text-gray-700 mb-1.5">
                            Event Date *
                          </label>
                          <CustomDatePicker
                            value={formData.eventDate}
                            onChange={handleChange}
                            name="eventDate"
                            id="eventDate"
                            min={getTodayDate()}
                          />
                          {fieldErrors.eventDate && (
                            <p className="mt-1 text-sm text-red-500">
                              {fieldErrors.eventDate}
                            </p>
                          )}
                        </div>

                        <div>
                          <label htmlFor="guestCount" className="block text-sm font-semibold text-gray-700 mb-1.5">
                            Number of Guests *
                          </label>
                          <input
                            type="number"
                            id="guestCount"
                            name="guestCount"
                            value={formData.guestCount}
                            onChange={handleChange}
                            min="30"
                            max="500"
                            autoComplete="off"
                            className={`w-full px-3 py-2.5 rounded-lg border focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-colors ${
                              fieldErrors.guestCount
                                ? 'border-red-500 focus:ring-red-500'
                                : 'border-gray-300'
                            }`}
                            placeholder="Minimum 30 guests"
                          />
                          {fieldErrors.guestCount && (
                            <p className="mt-1 text-sm text-red-500">
                              {fieldErrors.guestCount}
                            </p>
                          )}
                        </div>
                      </div>

                      <div>
                        <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-1.5">
                          Message *
                        </label>
                        <textarea
                          id="message"
                          name="message"
                          value={formData.message}
                          onChange={handleChange}
                          required
                          rows="5"
                          autoComplete="off"
                          className={`w-full px-3 py-2.5 rounded-lg border focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent resize-none transition-colors ${
                            fieldErrors.message
                              ? 'border-red-500 focus:ring-red-500'
                              : 'border-gray-300'
                          }`}
                          placeholder="Tell us about your event and any special requirements..."
                        ></textarea>
                        {fieldErrors.message && (
                          <p className="mt-1 text-sm text-red-500">
                            {fieldErrors.message}
                          </p>
                        )}
                      </div>

                      {/* Error Message */}
                      {error && (
                        <div className="bg-red-50 border border-red-200 rounded-lg p-4 text-red-700">
                          {error}
                        </div>
                      )}

                      <button
                        type="submit"
                        disabled={isLoading}
                        className="w-full bg-orange-400 hover:bg-orange-500 text-white font-semibold py-3 rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed"
                      >
                        {isLoading ? 'Sending...' : 'Send Message'}
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

        <FAQSection variant="contact" />
      </main>
      <Footer />
    </div>
  );
};

export default ContactUs;