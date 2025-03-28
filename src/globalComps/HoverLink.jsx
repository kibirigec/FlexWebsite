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

  return (
    <div>
      <div className='my-auto'>
      <p className='text-2xl font-bold md:text-4xl lg:text-3xl text-[#86868B] mb-8 text-center'>
        Other Services
      </p>

      </div>
      {/* Separating 'Other Services' text from the grid */}
      
      {/* Grid Container */}
      <div className="grid grid-cols-2 md:grid-cols-3 gap-6 p-8">
        {services.map((service, index) => (
          <Link 
            to={`/services/${index + 1}`} 
            key={service.name}
            className="group relative h-64 overflow-hidden rounded-lg shadow-lg"
          >
            {/* Background Image and Hover Effects */}
            <div 
              className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10"
              style={{ backgroundImage: `url(${service.imageUrl})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
            ></div>
            
            {/* Content Section */}
            <div className="relative h-full w-full bg-gray-200 grayscale group-hover:grayscale-0 transition-all duration-300 ease-in-out transform group-hover:-translate-y-4">
              <div className="absolute inset-0 flex items-center justify-center p-4 text-center">
                <h3 className="text-xl font-semibold text-gray-800 group-hover:text-white transition-colors duration-300">
                  {service.name}
                </h3>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default HoverLink;
