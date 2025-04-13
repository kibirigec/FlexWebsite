// App.jsx
import React from "react";
import { Footer3 } from "../../../globalComps/Footer3";
import { Link } from "react-router-dom";
import InvitationCardDesignForm from "./components/InvitationCardDesignForm";
import HoverLink from "../../../globalComps/HoverLink";
import { motion } from "framer-motion";

// Animation variants
const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

const scaleIn = {
  hidden: { scale: 0.95, opacity: 0 },
  visible: { scale: 1, opacity: 1 }
};

function App() {
  // Using images from the public folder
  const heroImage = "/7984652.jpg";
  const inviteImage = "/7984652.jpg";

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section with CTA */}
      <section className="relative bg-gray-900 text-white">
        {/* Background Image */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="absolute inset-0 z-0"
        >
          <img
            src={heroImage}
            alt="Invitation backdrop"
            className="w-full h-full object-cover opacity-40"
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="absolute h-full inset-x-0 md:top-40 lg:top-40 w-full 
                     md:h-[218px] lg:h-[300px] 
                    bg-gradient-to-r from-[#9BAB3C]/50 to-transparent z-0 
                    my-auto"
        ></motion.div>

        {/* Green Gradient Overlay */}
        <motion.div 
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
          className="relative z-10 max-w-7xl mx-auto px-6 py-32 md:py-48"
        >
          <motion.h1 variants={fadeInUp} className="text-[30px]/7 md:text-[32px] lg:text-[40px] font-bold mb-2">
            Invitation Cards
          </motion.h1>
          <motion.p variants={fadeInUp} className="text-[17px]/6 mb-8 max-w-2xl">
            Set the Tone with Personalized Invitations
          </motion.p>
          <motion.div variants={fadeInUp}>
            <Link to="/contact">
              <motion.button 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-4 py-2 text-white border border-white"
              >
                Get Started
              </motion.button>
            </Link>
          </motion.div>
        </motion.div>
      </section>

      {/* Centered Text Section */}
      <motion.section 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={staggerContainer}
        className="py-12 bg-[#F2F2F2]"
      >
        <div className="max-w-3xl mx-auto text-center px-6">
          <motion.h2 variants={fadeInUp} className="text-[28px]/7 md:text-[32px] lg:text-[30px] font-bold mb-4 text-[#1d1d1f]">
            Your special occasion deserves a special invite – and we're here to
            make it happen.
          </motion.h2>
          <motion.p variants={fadeInUp} className="text-[17px]/6 text-[#86868b]">
            Your invitation is the first impression guests will have of your
            event – let it reflect the elegance and excitement to come! At Flex
            Events, we specialize in creating personalized, high-quality
            invitation cards for all types of events. Whether it's for a
            wedding, corporate event, or birthday celebration, we offer stylish
            designs, custom printing, and attention to detail that matches your
            event's theme. Choose from a wide variety of styles – from classic
            and elegant to modern and creative – and get an invitation that
            excites your guests before they even arrive.
          </motion.p>
        </div>
      </motion.section>

      {/* Text and Image Section */}
      <motion.section 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={staggerContainer}
        className="bg-[#333] text-white py-16"
      >
        <div className="max-w-7xl mx-auto px-8">
          <div className="flex flex-col md:flex-row-reverse items-center gap-8">
            {/* Left Side - Image */}
            <motion.div variants={scaleIn} className="md:w-1/2">
              <motion.img
                whileHover={{ scale: 1.02 }}
                src="/7984652.jpg"
                alt="Service feature"
                className="w-full aspect-[16/9] object-cover rounded-lg shadow-lg"
              />
            </motion.div>

            {/* Right Side - Content */}
            <motion.div variants={fadeInUp} className="md:w-1/2 space-y-6">
              <h2 className="text-[24px]/6 md:text-[30px]/8 font-bold uppercase">
                Our Decor Services
              </h2>

              <motion.div 
                initial={{ width: 0 }}
                whileInView={{ width: "100px" }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="h-1 bg-[#9BAB3C]"
              ></motion.div>

              <motion.ul variants={staggerContainer} className="space-y-1 text-[17px]/5 text-[#E0E0E0]">
                <motion.li variants={fadeInUp} className="flex items-start gap-2">
                  <span className="text-[#9BAB3C]">•</span> Custom-designed
                  invitations to match your event theme and style.
                </motion.li>
                <motion.li variants={fadeInUp} className="flex items-start gap-2">
                  <span className="text-[#9BAB3C]">•</span>Premium quality
                  printing with various finishes including matte, glossy, and
                  foil-stamped.
                </motion.li>
                <motion.li variants={fadeInUp} className="flex items-start gap-2">
                  <span className="text-[#9BAB3C]">•</span> Digital invitation
                  options for easy sharing via email and social media.
                </motion.li>
              </motion.ul>
            </motion.div>
          </div>
        </div>
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="relative h-[2px] w-full mt-16 overflow-hidden"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#9BAB3C] to-transparent animate-gradient-x"></div>
        </motion.div>
      </motion.section>

      <motion.section 
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="bg-[#333] py-6 md:px-28 mx-auto"
      >
        <InvitationCardDesignForm />
      </motion.section>

      <HoverLink />

      {/* Footer */}
      <Footer3 />
      <style jsx>{`
        @keyframes gradient-x {
          0% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
          100% {
            background-position: 0% 50%;
          }
        }
        .animate-gradient-x {
          background-size: 200% 200%;
          animation: gradient-x 3s ease infinite;
        }
      `}</style>
    </div>
  );
}

export default App;
