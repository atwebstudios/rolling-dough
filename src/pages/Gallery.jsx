import React, { useState, memo, useEffect } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { updateMetaTags, scrollToTop } from '../utils/seoUtils';

// Memoized Gallery Item Component
const GalleryItem = memo(({ image, index }) => {
  const [isLoading, setIsLoading] = useState(true);

  // Enhanced alt text based on image src
  let altText = '';
  if (image.includes('hero')) altText = 'Rolling Dough woodfire pizza oven at event';
  else if (image.includes('1.webp')) altText = 'Woodfire pizza served at Perth wedding';
  else if (image.includes('2.webp')) altText = 'Rolling Dough catering at corporate event';
  else if (image.includes('3.webp')) altText = 'Fresh pizza being prepared by chef';
  else if (image.includes('4.webp')) altText = 'Guests enjoying pizza at outdoor party';
  else if (image.includes('5.webp')) altText = 'Woodfire oven in action';
  else if (image.includes('6.webp')) altText = 'Rolling Dough pizza menu display';
  else if (image.includes('7.webp')) altText = 'Family event with Rolling Dough catering';
  else if (image.includes('8.webp')) altText = 'Gluten-free pizza option';
  else if (image.includes('9.webp')) altText = 'Vegetarian pizza served at event';
  else if (image.includes('10.webp')) altText = 'Rolling Dough team at event';
  else if (image.includes('11.webp')) altText = 'Pizza oven setup at outdoor venue';
  else if (image.includes('12.webp')) altText = 'Pizza slices ready to serve';
  else if (image.includes('13.webp')) altText = 'Rolling Dough catering truck';
  else if (image.includes('14.webp')) altText = 'Kids enjoying pizza at birthday party';
  else if (image.includes('15.webp')) altText = 'Rolling Dough logo and branding';
  else if (image.includes('16.webp')) altText = 'Pizza chef preparing dough';
  else if (image.includes('17.webp')) altText = 'Event guests with pizza plates';
  else if (image.includes('18.webp')) altText = 'Woodfire pizza close-up';
  else if (image.includes('19.webp')) altText = 'Rolling Dough catering at night event';
  else altText = 'Rolling Dough event catering photo';

  return (
    <div className="group relative overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 bg-gray-100">
      {/* Image Container */}
      <div className="relative overflow-hidden w-full h-full">
        <img
          src={image}
          alt={altText}
          loading="lazy"
          className={`w-full h-full object-cover group-hover:scale-110 transition-transform duration-500 ease-out ${
            isLoading ? 'animate-pulse' : ''
          }`}
          onLoad={() => setIsLoading(false)}
        />
      </div>
    </div>
  );
});

GalleryItem.displayName = 'GalleryItem';

const Gallery = () => {
  // Update SEO meta tags on page load
  useEffect(() => {
    updateMetaTags({
      title: 'Event Gallery - Rolling Dough Woodfire Pizza Catering',
      description: 'Browse our portfolio of stunning events and delicious woodfire pizzas. See the quality and variety of our catering services in Perth.',
      url: 'https://rollingdough.com.au/gallery',
      image: 'https://rollingdough.com.au/hero.webp',
      keywords: 'pizza gallery, event photos, catering portfolio, woodfire pizza Perth, event photography'
    });
    scrollToTop();
  }, []);

  // Gallery images with orientation: 'landscape' or 'portrait'
  const galleryImages = [
    { src: '/1.webp', orientation: 'landscape' },
    { src: '/2.webp', orientation: 'landscape' },
    { src: '/3.webp', orientation: 'landscape' },
    { src: '/4.webp', orientation: 'portrait' },
    { src: '/5.webp', orientation: 'landscape' },
    { src: '/6.webp', orientation: 'landscape' },
    { src: '/7.webp', orientation: 'landscape' },
    { src: '/8.webp', orientation: 'portrait' },
    { src: '/9.webp', orientation: 'landscape' },
    { src: '/10.webp', orientation: 'landscape' },
    { src: '/11.webp', orientation: 'portrait' },
    { src: '/12.webp', orientation: 'landscape' },
    { src: '/13.webp', orientation: 'landscape' },
    { src: '/14.webp', orientation: 'portrait' },
    { src: '/15.webp', orientation: 'landscape' },
    { src: '/16.webp', orientation: 'landscape' },
    { src: '/17.webp', orientation: 'portrait' },
    { src: '/18.webp', orientation: 'landscape' },
    { src: '/19.webp', orientation: 'landscape' },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main id="main-content" className="flex-1 bg-white pt-16 sm:pt-20 lg:pt-20">
        {/* Gallery Header */}
        <section className="px-4 sm:px-6 lg:px-8 py-6 sm:py-8 lg:py-10 border-b border-gray-200">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-green-800 mb-4">
              Our Gallery
            </h1>
            <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto font-delius">
              Check out our amazing events and catering moments from around Perth
            </p>
          </div>
        </section>

        {/* Masonry Gallery Grid */}
        <section className="px-4 sm:px-6 lg:px-8 py-10 sm:py-12 lg:py-16">
          <div className="max-w-7xl mx-auto">
            {/* CSS columns masonry - natural height balancing */}
            <div className="columns-1 sm:columns-2 lg:columns-3 xl:columns-4 gap-4">
              {galleryImages.map((item, index) => (
                <div key={index} className="break-inside-avoid mb-4">
                  <GalleryItem image={item.src} index={index + 1} />
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Gallery;
