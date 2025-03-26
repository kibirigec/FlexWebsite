import React from "react";
import { Footer3 } from "../../../globalComps/Footer3";
import { Link } from "react-router-dom";
import Slider from "react-slick"; // Importing the slider
import "slick-carousel/slick/slick.css"; // Carousel styles
import "slick-carousel/slick/slick-theme.css";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import WeddingDecorBookingForm from "./components/WeddingDecorBookingForm";

function App() {
  // Using images from the public folder
  const heroImage = "/weddingmain.jpeg";

  const carouselImages = [
    "/weddingmain.jpeg",
    "/weddingmainside.jpeg",
    "/weddingoutside.jpeg",
    "/weddingblue2.jpeg",
    "/wedding-decor.jpeg",
  ];

  // Custom Left Arrow
  const CustomPrevArrow = (props) => {
    const { onClick } = props;
    return (
      <div
        className="absolute left-0 z-10 p-3 bg-gray-800 text-white rounded-full cursor-pointer hover:bg-gray-600"
        style={{ top: "50%", transform: "translateY(-50%)", left: "10px" }}
        onClick={onClick}
      >
        <FaChevronLeft size={24} />
      </div>
    );
  };

  // Custom Right Arrow
  const CustomNextArrow = (props) => {
    const { onClick } = props;
    return (
      <div
        className="absolute right-0 z-10 p-3 bg-gray-800 text-white rounded-full cursor-pointer hover:bg-gray-600"
        style={{ top: "50%", transform: "translateY(-50%)", right: "10px" }}
        onClick={onClick}
      >
        <FaChevronRight size={24} />
      </div>
    );
  };
  // Slider settings
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    prevArrow: <CustomPrevArrow />,
    nextArrow: <CustomNextArrow />,
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative bg-gray-900 text-white">
        <div className="absolute inset-0 z-0">
          <img
            src={heroImage}
            alt="Wedding & Corporate Decor"
            className="w-full h-full object-cover opacity-40"
          />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-6 py-32 md:py-48  ">
          <div className="absolute bg-gradient-to-r from-[#9BAB3C]/40 to-[#9BAB3C]/0 h-[250px] w-full left-[-50px] lg:w-full lg:left-[-100px] -z-50 " />

          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight z-[100000px]">
            Wedding & Corporate Decor
          </h1>
          <p className="text-xl md:text-2xl mb-6 max-w-2xl ">
            Transform Your Vision into Stunning Reality
          </p>
          <Link to="/contact">
            <button className="px-4 py-2 text-white border-white border-1 z-50">
              Get Started
            </button>
          </Link>
        </div>
      </section>

      {/* Intro Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-3xl mx-auto text-center px-6">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-800">
            Let’s create a space that tells your unique story.
          </h2>
          <p className="text-lg text-gray-600">
            From intimate weddings to large corporate events, Flex Events brings
            your decor dreams to life. Our team specializes in creating
            beautiful, custom-designed decorations that fit your theme, style,
            and budget. Whether it’s elegant floral arrangements, trendy
            backdrops, or sophisticated table settings, we provide the perfect
            touches that elevate your event and leave a lasting impression on
            your guests.
          </p>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-10 md:mb-0 md:pr-10">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-800">
                Our Decor Services
              </h2>

              <ul className="space-y-4 mb-6">
                {[
                  "Elegant floral arrangements that enhance your venue’s beauty.",
                  "Custom backdrops and stage decor tailored to your event theme.",
                  "Luxurious table settings, centerpieces, and fine linens.",
                  "Ambient lighting to create the perfect atmosphere.",
                  "Unique corporate branding elements for business events.",
                ].map((text, index) => (
                  <li key={index} className="flex items-start">
                    <div className="flex-shrink-0 mt-0.5">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6 text-[#9BA3BC]"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth={2}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <div className="ml-3">
                      <h3 className="text-lg font-medium text-gray-800">
                        {text}
                      </h3>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
            <div className="md:w-1/2">
              <img
                src="/wedding-decor.jpeg"
                alt="Wedding & Corporate Decor"
                className="rounded-lg shadow-lg w-full h-auto object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Image Carousel Section */}
      <section className="py-20 bg-gray-100">
        <div className="max-w-5xl mx-auto">
          <Slider {...settings}>
            {carouselImages.map((image, index) => (
              <div key={index}>
                <img
                  src={image}
                  alt={`Event decor ${index + 1}`}
                  className="w-full h-[500px] object-cover rounded-lg shadow-lg"
                />
              </div>
            ))}
          </Slider>
        </div>
      </section>
      <WeddingDecorBookingForm />  
      {/* Footer */}
      <Footer3 />
    </div>
  );
}

export default App;
