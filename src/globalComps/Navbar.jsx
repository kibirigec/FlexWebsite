"use client";

import React, { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDownIcon, Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";

const rentalItems = [
  "P.A System & Music/Mobile Disco",
  "Line Array Sound System",
  "Pro-Lights & Effects",
  "Aluminum Truss & Stages",
  "LED Screens & Video Walls",
  "Karaoke Mics / KTv Machines",
  "DLP Projectors & Screens",
  "DJ Equipment",
  "Wedding & Corporate Decor Rentals",
  "Power / Generators",
  "Backline Equipment",
];

const serviceItems = [
  "Wedding & Corporate Decor",
  "Invitation Cards",
  "Pro-Audio & Visual/Lighting",
  "Home Audio",
  "Systems Installations",
  "Flex Audio Brand ",
  "Full Event Management and Planning",
  "Backline Equipment",
];

export default function NavBar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null); // 'rentals' | 'services' | null
  const [isVisible, setIsVisible] = useState(true);
  
  // Refs for smart scroll logic
  const lastScrollY = useRef(0);
  const lastDir = useRef("up"); // 'up' | 'down'
  const pivotY = useRef(0);
  
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const delta = currentScrollY - lastScrollY.current;
      const currentDir = delta > 0 ? "down" : "up";

      // If direction changes, reset the pivot point
      if (currentDir !== lastDir.current) {
        lastDir.current = currentDir;
        pivotY.current = currentScrollY;
      }

      // Always show if near the top
      if (currentScrollY < 50) {
        setIsVisible(true);
      } else {
         // Calculate distance from pivot (how far have we scrolled in this direction?)
         const diff = Math.abs(currentScrollY - pivotY.current);
         
         // Only toggle state if we've committed to this direction (>20px)
         if (diff > 20) { 
            if (currentDir === "down" && !mobileMenuOpen) {
               setIsVisible(false);
            } else if (currentDir === "up") {
               setIsVisible(true);
            }
         }
      }
      
      lastScrollY.current = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [mobileMenuOpen]);

  // ... (closeMenu, isRentalsPage logic unchanged) ...

  const closeMenu = () => {
    setMobileMenuOpen(false);
    setActiveDropdown(null);
  };

  const isRentalsPage = location.pathname.startsWith("/rentals");
  const isServicesPage = location.pathname.startsWith("/services");

  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [mobileMenuOpen]);

  return (
    <>
      <motion.nav
        initial={{ opacity: 0 }}
        animate={{ 
            opacity: isVisible ? 1 : 0,
        }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
        style={{
            backgroundColor: "color-mix(in srgb, rgb(30, 25, 22) 56%, transparent)",
            backdropFilter: "blur(12px)",
            pointerEvents: isVisible ? "auto" : "none"
        }}
        className={`fixed top-4 left-1/2 -translate-x-1/2 w-[90%] md:w-auto md:max-w-7xl rounded-full z-[1000] transition-colors duration-300 border border-white/10 shadow-lg`}
      >
        <div className="px-6 h-16 md:h-18 flex items-center justify-between lg:justify-center">
          
          {/* Mobile Logo (Left) */}
          <Link to="/" className="lg:hidden relative z-50 flex items-center gap-2 group" onClick={closeMenu}>
             <img
              src="/NewFlexLogo1.png"
              alt="Flex Events"
              className="h-8 w-auto transition-transform duration-300 group-hover:scale-105 mb-2 "
            />
          </Link>

          {/* Desktop Navigation - Centered Layout */}
          <div className="hidden lg:flex items-center gap-8">
             {/* Left Links */}
             <div className="flex items-center gap-6">
                <NavLink to="/" isActive={location.pathname === "/"}>Home</NavLink>
                
                <Dropdown 
                    title="Services" 
                    items={serviceItems} 
                    basePath="/services" 
                    isActive={isServicesPage}
                    isOpen={activeDropdown === 'services'}
                    onHover={(state) => setActiveDropdown(state ? 'services' : null)}
                    currentPath={location.pathname}
                />

                <Dropdown 
                    title="Flex Rentals" 
                    items={rentalItems} 
                    basePath="/rentals"
                    isActive={isRentalsPage} 
                    isOpen={activeDropdown === 'rentals'}
                    onHover={(state) => setActiveDropdown(state ? 'rentals' : null)}
                    currentPath={location.pathname}
                />
             </div>

             {/* Center Logo */}
             <Link to="/" className="relative z-50 flex items-center px-4 mb-4" onClick={closeMenu}>
                <img
                 src="/NewFlexLogo1.png"
                 alt="Flex Events"
                 className="h-12 w-auto transition-transform duration-300 hover:scale-105"
               />
             </Link>

             {/* Right Links */}
             <div className="flex items-center gap-6">
                <NavLink to="/portfolio" isActive={location.pathname === "/portfolio"}>Portfolio</NavLink>
                <NavLink to="/pricing" isActive={location.pathname === "/pricing"}>Pricing</NavLink>
                <NavLink to="/faq" isActive={location.pathname === "/faq"}>FAQ</NavLink>
                <NavLink to="/contact" isActive={location.pathname === "/contact"}>Contact</NavLink>
             </div>
          </div>

          {/* Desktop Actions (Removed in favor of inline Contact link) */}
          <div className="hidden lg:none"></div>

          {/* Mobile Menu Button (Right) */}
          <button 
            className={`lg:hidden relative z-50 p-2 -mr-2 text-white`}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <XMarkIcon className="w-8 h-8" /> : <Bars3Icon className="w-8 h-8" />}
          </button>
        </div>
      </motion.nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (

            <motion.div
                initial={{ opacity: 0, backdropFilter: "blur(0px)" }}
                animate={{ opacity: 1, backdropFilter: "blur(12px)" }}
                exit={{ opacity: 0, backdropFilter: "blur(0px)", transition: { delay: 0.4 } }} // Wait for items to stagger out
                transition={{ duration: 0.3 }}
                style={{
                    backgroundColor: "color-mix(in srgb, rgb(30, 25, 22) 98%, transparent)",
                }}
                className="fixed inset-0 z-40 pt-32 px-6 pb-6 lg:hidden overflow-y-auto"
            >
                <motion.div 
                  className="flex flex-col space-y-6"
                  variants={menuVariants}
                  initial="hidden"
                  animate="visible"
                  exit="hidden"
                >
                    <MobileLink to="/" onClick={closeMenu} isActive={location.pathname === "/"}>Home</MobileLink>
                    
                    <MobileDropdown 
                        title="Services" 
                        items={serviceItems} 
                        basePath="/services"
                        isActive={isServicesPage}
                        onClose={closeMenu}
                        currentPath={location.pathname}
                    />

                    <MobileDropdown 
                        title="Flex Rentals" 
                        items={rentalItems} 
                        basePath="/rentals"
                        isActive={isRentalsPage}
                        onClose={closeMenu}
                        currentPath={location.pathname}
                    />
                    
                    <MobileLink to="/portfolio" onClick={closeMenu} isActive={location.pathname === "/portfolio"}>Portfolio</MobileLink>
                    <MobileLink to="/pricing" onClick={closeMenu} isActive={location.pathname === "/pricing"}>Pricing</MobileLink>
                    <MobileLink to="/faq" onClick={closeMenu} isActive={location.pathname === "/faq"}>FAQ</MobileLink>
                    <MobileLink to="/contact" onClick={closeMenu} isActive={location.pathname === "/contact"}>Contact</MobileLink>
                </motion.div>
            </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

const NavLink = ({ to, children, isActive }) => {
  const baseColor = 'text-white/90';
  const hoverColor = 'hover:text-white';
  const activeColor = 'text-primary';

  return (
    <Link 
      to={to} 
      className={`text-sm font-medium transition-colors duration-200 ${isActive ? activeColor : `${baseColor} ${hoverColor}`}`}
    >
      {children}
    </Link>
  );
};

const Dropdown = ({ title, items, basePath, isActive, isOpen, onHover, currentPath }) => {
    const baseColor = 'text-white/90';
    const hoverColor = 'hover:text-white';
    
    return (
    <div 
        className="relative h-20 flex items-center"
        onMouseEnter={() => onHover(true)}
        onMouseLeave={() => onHover(false)}
    >
        <button 
            className={`flex items-center gap-1 text-sm font-medium transition-colors duration-200 ${isActive || isOpen ? 'text-primary' : `${baseColor} ${hoverColor}`}`}
        >
            {title}
            <ChevronDownIcon className={`w-4 h-4 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`} />
        </button>

        <AnimatePresence>
            {isOpen && (
                <motion.div
                    initial={{ opacity: 0, y: 10, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 10, scale: 0.95 }}
                    transition={{ duration: 0.2 }}
                    className="absolute top-full left-1/2 -translate-x-1/2 w-64 bg-[#1e1916]/95 backdrop-blur-xl border border-white/10 rounded-2xl shadow-xl py-2 overflow-hidden"
                >
                    {items.map((item, idx) => {
                        const itemPath = `${basePath}/${idx + 1}`;
                        const isItemActive = currentPath === itemPath;
                        return (
                             <Link 
                                key={idx} 
                                to={itemPath}
                                className={`block px-4 py-2.5 text-sm transition-colors ${
                                    isItemActive 
                                    ? 'text-primary bg-white/5 font-medium' 
                                    : 'text-white/70 hover:text-white hover:bg-white/5'
                                }`}
                            >
                                {item}
                            </Link>
                        );
                    })}
                </motion.div>
            )}
        </AnimatePresence>
    </div>
)};

const menuVariants = {
  hidden: { 
    opacity: 0,
    transition: { 
      when: "afterChildren",
      staggerChildren: 0.05, 
      staggerDirection: -1 
    }
  },
  visible: { 
    opacity: 1,
    transition: { 
      when: "beforeChildren",
      staggerChildren: 0.07, 
      delayChildren: 0.1 
    }
  }
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: { 
    y: 0, 
    opacity: 1,
    transition: { 
      duration: 0.5,
      ease: "easeOut"
    }
  }
};

const MobileLink = ({ to, children, onClick, isActive }) => (
    <motion.div variants={itemVariants}>
        <Link 
            to={to} 
            onClick={onClick} 
            className={`text-2xl font-display font-semibold block ${isActive ? 'text-primary' : 'text-white/90'}`}
        >
            {children}
        </Link>
    </motion.div>
);

const MobileDropdown = ({ title, items, basePath, isActive, onClose, currentPath }) => {
    const [isOpen, setIsOpen] = useState(isActive);

    return (
        <motion.div variants={itemVariants}>
            <button 
                onClick={() => setIsOpen(!isOpen)}
                className={`flex items-center justify-between w-full text-2xl font-display font-semibold ${isActive ? 'text-primary' : 'text-white/90'}`}
            >
                {title}
                <ChevronDownIcon className={`w-6 h-6 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
            </button>
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        className="overflow-hidden"
                    >
                        <motion.div 
                            className="pl-4 pt-4 flex flex-col space-y-3 border-l-2 border-white/10 ml-2 mt-2"
                            variants={menuVariants}
                            initial="hidden"
                            animate="visible"
                            exit="hidden"
                        >
                            {items.map((item, idx) => {
                                const itemPath = `${basePath}/${idx + 1}`;
                                const isItemActive = currentPath === itemPath;
                                return (
                                    <motion.div key={idx} variants={itemVariants}>
                                        <Link 
                                            to={itemPath}
                                            onClick={onClose}
                                            className={`text-lg transition-colors block ${
                                                isItemActive 
                                                ? 'text-primary font-medium' 
                                                : 'text-white/60 hover:text-white'
                                            }`}
                                        >
                                            {item}
                                        </Link>
                                    </motion.div>
                                );
                            })}
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.div>
    );
};