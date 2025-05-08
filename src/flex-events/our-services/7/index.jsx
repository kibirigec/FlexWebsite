import React from "react";
import { Footer3 } from "../../../globalComps/Footer3";
import { Link } from "react-router-dom";
import Slider from "react-slick"; // Importing the slider
import "slick-carousel/slick/slick.css"; // Carousel styles
import "slick-carousel/slick/slick-theme.css";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import WeddingDecorBookingForm from "./components/WeddingDecorBookingForm";
import HoverLink from "../../../globalComps/HoverLink";
import { motion } from "framer-motion";


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
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <img
            src={heroImage}
            alt="Wedding & Corporate Decor"
            className="w-full h-full object-cover opacity-40"
          />
        </div>
        <div
          className="absolute  h-full inset-x-0 md:top-40 lg:top-40 w-full 
                   md:h-[218px] lg:h-[300px] 
                  bg-gradient-to-r from-[#9BAB3C]/50 to-transparent z-0 
                  my-auto
                  "
        ></div>

        {/* Green Gradient - Covers Entire Section */}
        <div className="relative z-10 max-w-7xl mx-auto px-6 py-32 md:py-48">
          <h1 className="text-[30px]/7 md:text-[32px] lg:text-[40px] font-bold mb-2">
            Wedding & Corporate Decor
          </h1>
          <p className="text-[17px]/6 mb-8 max-w-2xl">
            Transform Your Vision into Stunning Reality
          </p>
          <Link to="/contact">
            <button className="px-4 py-2 text-white border border-white">
              Get Started
            </button>
          </Link>
        </div>
      </section>

      {/* Intro Section */}
      <section className="py-12 bg-[#F2F2F2]">
        <div className="max-w-3xl mx-auto text-center px-6">
          <h2 className="text-[28px]/7 md:text-[32px] lg:text-[30px] font-bold mb-4 text-[#1d1d1f]">
            Let’s create a space that tells your <br /> unique story.{" "}
          </h2>
          <p className="text-[17px]/6 text-[#86868b] ">
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
      <section className="bg-[#333] text-white py-16">
        <div className="max-w-7xl mx-auto px-8">
          <div className="flex flex-col md:flex-row-reverse items-center gap-8">
            {/* Left Side - Image */}
            <div className="md:w-1/2">
              <img
                src="/wedding-decor.jpeg"
                alt="Service feature"
                className="w-full aspect-[16/9] object-cover rounded-lg shadow-lg"
              />
            </div>

            {/* Right Side - Content */}
            <div className="md:w-1/2 space-y-6">
              <h2 className="text-[24px]/6 md:text-[30px]/8 font-bold uppercase">
                Our Decor Services
              </h2>

              <div className="h-1 w-24 bg-[#9BAB3C]"></div>

              <ul className="space-y-1 text-[17px]/5 text-`[#E0E0E0]">
                <li className="flex items-start gap-2">
                  <span className="text-[#9BAB3C]">•</span>Vibrant and
                  professional lighting for any occasion.
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#9BAB3C]">•</span>Customizable effects
                  to fit the theme of your event.
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#9BAB3C]">•</span> Affordable rates and
                  easy payment options like Visa and Mobile Money. Let us
                  brighten your event today with our pro lighting solutions!
                </li>
                {/* <li className="flex items-start gap-2">
                  <span className="text-[#9BAB3C]">•</span> Unique corporate
                  branding elements for business events.
                </li> */}
              </ul>
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
      <section className="bg-[#333] py-6 md:px-28 mx-auto ">
        {/* <div className="bg-[#9BAB3C] min-h-[2px] mx-auto w-full md:mb-20 hidden-sm" /> */}

        <WeddingDecorBookingForm />
      </section>
      <HoverLink />
      {/* Footer */}
      <Footer3 />
    </div>
  );
}

export default App;
