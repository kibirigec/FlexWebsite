import React from 'react';
import { Link } from 'react-router-dom';

const HoverLink = () => {
  const services = [
    { name: "Invitation Cards", imageUrl: "/7984652.jpg" },
    { name: "Pro-Audio & Visual/Lighting", imageUrl: "/night-lights.jpeg" },
    { name: "Home Audio", imageUrl: "/home1.jpg" },
    { name: "Systems Installations", imageUrl: "/lineraynight.jpeg" },
    { name: "Flex Audio Brand", imageUrl: "/audio1.jpg" },
    { name: "Full Event Management and Planning", imageUrl: "/path/to/image6.jpg" }
  ];

  const scrollRef = React.useRef(null);
  const scrollLeft = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: -350, behavior: 'smooth' });
    }
  };
  const scrollRight = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: 350, behavior: 'smooth' });
    }
  };

  return (
    <div className="px-4 md:px-12 lg:px-24 py-12 md:py-20 my-8 md:my-16">
      <div className='my-auto'>
        <p className='text-xl font-bold md:text-4xl lg:text-xl text-[#86868B] mb-8 '>
          All Services
        </p>
      </div>
      {/* Horizontal Scroll Container with Arrow Buttons */}
      <div className="relative">
        {/* Left Arrow Button */}
        <button
          onClick={scrollLeft}
          className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white border border-[#9BAB3C] text-[#9BAB3C] rounded-full w-12 h-12 flex items-center justify-center shadow hover:bg-[#9BAB3C] hover:text-white transition"
          aria-label="Scroll left"
          type="button"
          style={{ boxShadow: '0 2px 8px rgba(0,0,0,0.08)' }}
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        {/* Right Arrow Button */}
        <button
          onClick={scrollRight}
          className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white border border-[#9BAB3C] text-[#9BAB3C] rounded-full w-12 h-12 flex items-center justify-center shadow hover:bg-[#9BAB3C] hover:text-white transition"
          aria-label="Scroll right"
          type="button"
          style={{ boxShadow: '0 2px 8px rgba(0,0,0,0.08)' }}
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
          </svg>
        </button>
        <div ref={scrollRef} className="overflow-x-auto">
          <div className="flex space-x-8 px-0 max-w-7xl mx-auto pb-4">
            {services.map((service, index) => (
              <Link 
                to={`/services/${index + 1}`} 
                key={service.name}
                className="bg-white rounded-xl shadow-lg flex flex-col justify-between transition-transform hover:-translate-y-1 hover:shadow-2xl group"
                style={{ minWidth: 320, maxWidth: 350 }}
              >
                {/* Image */}
                <div className="h-48 w-full overflow-hidden rounded-t-xl">
                  <img
                    src={service.imageUrl}
                    alt={service.name}
                    className="object-cover w-full h-full"
                  />
                </div>
                {/* Colored line */}
                <div className="h-1 w-full" style={{ backgroundColor: '#9BAB3C' }} />
                {/* Title */}
                <div className="flex-1 flex items-center justify-center px-4 py-4">
                  <h3 className="text-2xl font-semibold text-center text-[#23235B]">{service.name}</h3>
                </div>
                {/* View link */}
                <div className="px-4 pb-4 flex items-center">
                  <span className="text-lg text-[#23235B] font-medium group-hover:underline group-hover:text-[#9BAB3C] transition-colors duration-200">View</span>
                  <svg className="ml-2 w-5 h-5 text-[#23235B] group-hover:text-[#9BAB3C] transition-colors duration-200" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HoverLink;
