import React, { memo } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

// Memoized Gallery Item Component
const GalleryItem = memo(({ item, index }) => {
  const rowSpan = index % 5 === 0 ? 2 : 1;

  return (
    <div
      className="group relative overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 cursor-pointer bg-gray-100"
      style={{ gridRow: `span ${rowSpan}` }}
    >
      {/* Image Container */}
      <div className="relative overflow-hidden w-full h-full">
        <img
          src={item.image}
          alt={item.title}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500 ease-out"
        />
        
        {/* Overlay on hover */}
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-colors duration-300 flex items-end justify-start p-4">
          <div className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <h3 className="text-lg sm:text-xl font-bold">
              {item.title}
            </h3>
            <p className="text-sm sm:text-base text-gray-200">
              {item.category}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
});

GalleryItem.displayName = 'GalleryItem';

const Gallery = () => {
  // Sample gallery items with different aspect ratios for masonry
  const galleryItems = [
    {
      id: 1,
      image: '/hero.png',
      title: 'Fresh Pizza',
      category: 'Main'
    },
    {
      id: 2,
      image: '/hero copy.png',
      title: 'Delicious Setup',
      category: 'Setup'
    },
    {
      id: 3,
      image: '/hero copy 2.png',
      title: 'Event Catering',
      category: 'Event'
    },
    {
      id: 4,
      image: '/hero.png',
      title: 'Pizza Making',
      category: 'Process'
    },
    {
      id: 5,
      image: '/hero copy.png',
      title: 'Our Truck',
      category: 'Fleet'
    },
    {
      id: 6,
      image: '/hero copy 2.png',
      title: 'Outdoor Event',
      category: 'Event'
    },
    {
      id: 7,
      image: '/hero.png',
      title: 'Gourmet Pizza',
      category: 'Main'
    },
    {
      id: 8,
      image: '/hero copy.png',
      title: 'Party Setup',
      category: 'Setup'
    },
    {
      id: 9,
      image: '/hero copy 2.png',
      title: 'Corporate Event',
      category: 'Event'
    },
    {
      id: 10,
      image: '/hero.png',
      title: 'Wood Fired Pizza',
      category: 'Main'
    },
    {
      id: 11,
      image: '/hero copy.png',
      title: 'Wedding Catering',
      category: 'Event'
    },
    {
      id: 12,
      image: '/hero copy 2.png',
      title: 'Street Food',
      category: 'Fleet'
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main id="main-content" className="flex-1 bg-white pt-20 sm:pt-24 lg:pt-28">
        {/* Gallery Header */}
        <section className="px-4 sm:px-6 lg:px-8 py-6 sm:py-8 lg:py-10 border-b border-gray-200">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-green-800 mb-4">
              Our Gallery
            </h1>
            <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto font-delius">
              Explore our amazing events and catering moments from across Perth
            </p>
          </div>
        </section>

        {/* Masonry Gallery */}
        <section className="px-4 sm:px-6 lg:px-8 pb-12 sm:pb-16 lg:pb-20">
          <div 
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))',
              gap: '1.5rem',
              gridAutoRows: '250px'
            }}
            className="sm:gap-4 lg:gap-6"
          >
            {galleryItems.map((item, index) => (
              <GalleryItem key={item.id} item={item} index={index} />
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Gallery;
