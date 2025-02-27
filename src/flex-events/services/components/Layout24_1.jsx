import { Link } from "react-router-dom";
import { useFadeIn } from "../../../hooks/useFadeIn";
import { use } from "react";

export function Layout24_1() {
  useFadeIn();
  return (
    <section id="relume" className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="grid grid-cols-1 gap-y-12 md:grid-cols-2 md:items-center md:gap-x-12 lg:gap-x-20">
          <div>
            <p className="fade-in3 mb-3 text-[#86868B] font-semibold md:mb-4">
              5. Consultancy
            </p>
            <h3 className="fade-in3 mb-5 text-3xl font-bold leading-[1.2] md:mb-6 md:text-4xl lg:text-5xl">
              Expert Guidance for Unforgettable Events: Your Vision, Our
              Expertise
            </h3>
            <p className="fade-in2 md:text-md text-[#86868B]">
            Need expert advice? Our event consultancy service helps you create a roadmap for your event, ensuring it is successful, efficient, and aligned with your objectives
            </p>
            <div className="mt-6  self-center">
              <p className="font-semibold text-black">What we offer:</p>
              <ul className="list-disc list-inside text-[#86868B] font-semibold mt-2">
                <li>Event strategy development.</li>
                <li>Budgeting and resource allocation.</li>
                <li>Post-event evaluation and feedback to improve future events.</li>
              </ul>
            </div>
            <div className="mt-6">
            <Link to="/consultancy">
                <button className="px-4 py-2 text-black border-black border-1 ">
                  Book your event
                </button>
              </Link>
            </div>
          </div>
          <div>
            <img
              src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg"
              className="w-full object-cover"
              alt="Relume placeholder image"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
