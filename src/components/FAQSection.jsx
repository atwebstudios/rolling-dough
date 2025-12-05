import React, { useState } from 'react';

const FAQSection = ({ variant = 'contact' }) => {
  const [openFAQs, setOpenFAQs] = useState({});
  const [isSectionOpen, setIsSectionOpen] = useState(variant === 'home' ? false : true);

  const toggleFAQ = (index) => {
    setOpenFAQs((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };

  const toggleSection = () => {
    setIsSectionOpen(!isSectionOpen);
  };

  const faqData = [
    {
      question: "How far in advance should I book?",
      answer: "We recommend booking at least 2-4 weeks in advance to ensure availability. However, we do accommodate last-minute requests when our schedule allows."
    },
    {
      question: "What's the minimum guest count for catering?",
      answer: "We require a minimum of 30 guests for catering events. This ensures we can provide the best wood-fired pizza experience for your celebration."
    },
    {
      question: "Do you cater to dietary requirements?",
      answer: "Absolutely! We offer gluten-free, vegan, and other dietary options. Let us know your requirements and we'll create the perfect custom menu."
    },
    {
      question: "What areas do you service?",
      answer: "We service all areas of Perth, Western Australia. Our wood-fired pizza truck can travel throughout Perth to bring authentic catering to your event."
    },
    {
      question: "What's your deposit policy?",
      answer: "We require a 50% deposit to secure your booking. The remaining balance is due one week before your event. We accept both bank transfers and card payments."
    },
    {
      question: "What add-ons do you offer?",
      answer: "We offer delicious add-ons including Garlic Bread and Bruschetta to complement your pizza catering. You can select these options when booking your event."
    },
    {
      question: "Is there a surcharge for public holidays?",
      answer: "Yes, we apply a 15% surcharge on public holidays to ensure premium service and coverage. This helps us manage our team's availability during peak demand periods."
    }
  ];

  // Determine which FAQs to show based on variant
  const displayFAQs = variant === 'home' ? faqData : faqData.slice(0, 4);
  const sectionTitle = variant === 'home' ? 'Frequently Asked Questions' : 'Quick Answers';
  const sectionStyles = variant === 'home' 
    ? 'py-16 px-4 sm:px-6 lg:px-8 bg-white'
    : 'px-4 sm:px-6 lg:px-8 py-6 sm:py-8 lg:py-10 bg-gray-50 border-t border-gray-200';
  const titleStyles = variant === 'home'
    ? 'text-3xl sm:text-4xl font-bold text-green-600 text-center mb-12 font-delius'
    : 'text-2xl sm:text-3xl font-bold text-green-800 text-center mb-6';

  return (
    <section className={sectionStyles}>
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center justify-between gap-4 mb-8">
          <h2 className={`${titleStyles} mb-0 mt-7 flex-1`}>
            {sectionTitle}
          </h2>
          {variant === 'home' && (
            <button
              onClick={toggleSection}
              className="px-5 py-1  rounded-lg bg-white border-2 border-green-600 text-green-600 font-semibold text-sm hover:bg-(--color-dark-green) hover:text-white hover:font-bold transition-all duration-300 whitespace-nowrap"
              title={isSectionOpen ? "Collapse FAQs" : "Expand FAQs"}
            >
              {isSectionOpen ? 'Hide' : 'Show'}
            </button>
          )}
        </div>

        <div
          className={`overflow-hidden transition-all duration-500 ease-in-out ${
            isSectionOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'
          }`}
        >
          <div className="space-y-4">
          {displayFAQs.map((faq, index) => (
            <div key={index} className="bg-gray-50 rounded-2xl overflow-hidden transition-all duration-500 hover:shadow-md">
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full p-6 text-left flex justify-between items-center hover:bg-gray-100 transition-all duration-500 ease-in-out"
              >
                <h3 className="text-lg font-bold text-gray-800 font-delius transition-colors duration-500">
                  {faq.question}
                </h3>
                <span
                  className={`text-2xl text-green-600 transition-all duration-300 ease-out transform ${
                    openFAQs[index] ? 'rotate-45 scale-110' : 'scale-100'
                  }`}
                >
                  +
                </span>
              </button>
              <div
                className={`overflow-hidden transition-all duration-300 ease-in-out ${
                  openFAQs[index] ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                }`}
              >
                <div className="px-6 pt-6 pb-6 border-t border-gray-200 animate-in fade-in slide-in-from-top-2 duration-500">
                  <p className="text-gray-600">{faq.answer}</p>
                </div>
              </div>
            </div>
          ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
