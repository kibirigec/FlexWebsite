"use client";

import React, { useState, useEffect } from "react";
import { collection, addDoc } from "firebase/firestore";
import { db } from "../utils/firebaseConfig";
import { motion, AnimatePresence } from "framer-motion";
import { CheckCircleIcon } from "@heroicons/react/24/outline";

export function UniversalBookingForm({ 
  formTitle = "Request a Booking", 
  collectionName = "inquiries", 
  fields = [] 
}) {
  const [formData, setFormData] = useState({});
  const [isDesktop, setIsDesktop] = useState(false);
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState(null); // 'success' | 'error' | null

  // Initialize form state
  useEffect(() => {
    const initial = {};
    fields.forEach(field => {
       if (field.type === 'checkbox-group') {
          initial[field.name] = [];
       } else if (field.type === 'checkbox') {
          initial[field.name] = false;
       } else {
          initial[field.name] = "";
       }
    });
    setFormData(initial);
  }, [fields]);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    
    if (type === 'checkbox') {
        setFormData(prev => ({ ...prev, [name]: checked }));
    } else {
        setFormData(prev => ({ ...prev, [name]: value }));
    }
  };

  const handleCheckboxGroupChange = (fieldName, optionValue) => {
    setFormData(prev => {
        const currentValues = prev[fieldName] || [];
        const newValues = currentValues.includes(optionValue)
            ? currentValues.filter(v => v !== optionValue)
            : [...currentValues, optionValue];
        return { ...prev, [fieldName]: newValues };
    });
  };

  useEffect(() => {
    const checkDesktop = () => setIsDesktop(window.innerWidth >= 768);
    checkDesktop();
    window.addEventListener('resize', checkDesktop);
    return () => window.removeEventListener('resize', checkDesktop);
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus(null);

    try {
      // 1. Save to Firestore (Database Record)
      await addDoc(collection(db, collectionName), {
        ...formData,
        submittedAt: new Date(),
        origin: isDesktop ? 'desktop_web' : 'mobile_web'
      });
      
      if (isDesktop) {
         // 2. Send Email via Netlify Function (Desktop Only)
         const response = await fetch('/.netlify/functions/send-email', {
             method: 'POST',
             headers: { 'Content-Type': 'application/json' },
             body: JSON.stringify(formData)
         });

         if (!response.ok) {
             throw new Error("Failed to send email notification");
         }

         setStatus('success');
      } else {
         // Mobile: Redirect to WhatsApp
         const message = `*New Inquiry via Website*\n\n` +
             Object.entries(formData)
             .map(([key, value]) => {
                 if (!value || (Array.isArray(value) && value.length === 0)) return null;
                 const label = key.replace(/([A-Z])/g, ' $1').replace(/^./, str => str.toUpperCase());
                 const displayValue = Array.isArray(value) ? value.join(', ') : value;
                 return `*${label}:* ${displayValue}`;
             })
             .filter(Boolean)
             .join('\n');
         
         const encodedMessage = encodeURIComponent(message);
         window.open(`https://wa.me/256772406122?text=${encodedMessage}`, '_blank');
         setStatus('success'); // Also show success in case they come back
      }

    } catch (error) {
      console.error("Error submitting form:", error);
      // If only email fails but DB works, we might still want to show success or a specific warning.
      // For now, simpler to show error if anything major breaks.
      setStatus('error');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-white rounded-3xl shadow-sm border border-black/5 overflow-hidden font-sans">
      <div className="grid lg:grid-cols-[1fr_1.5fr] min-h-[600px]">
        {/* Left Side - Brand Info (Kept minimal but functional) */}
        <div className="bg-gray-50 p-8 md:p-12 border-b lg:border-b-0 lg:border-r border-black/5 flex flex-col justify-between">
           <div>
              <div className="w-12 h-12 bg-black rounded-full flex items-center justify-center mb-8 shadow-md">
                 <img src="/NewFlexLogo1.png" alt="Logo" className="w-6 brightness-0 invert" />
              </div>
              <h2 className="text-3xl/7 font-bold tracking-tight text-gray-900 mb-4">
                 Let's Plan Your <br/><span className="text-[#9BAB3C]">Perfect Event</span>
              </h2>
              <p className="text-[#86868b] leading-tight mb-8">
                 Fill in the details and our team will get back to you with a tailored plan.
              </p>
           </div>
           
           <div className="space-y-6 text-sm">
              <ContactItem icon="map" text={<>Plot 2973, Kisaasi-Kyanja Road<br/>Kyanja, Kampala</>} />
              <ContactItem icon="phone" text="+256 772 406 122" href="tel:+256772406122" />
              <ContactItem icon="mail" text="flexbrandug@gmail.com" href="mailto:flexbrandug@gmail.com" />
           </div>
        </div>

        {/* Right Side - Form */}
        <div className="p-8 md:p-12 lg:p-16 relative bg-white">
          <AnimatePresence>
             {status === 'success' ? (
                <motion.div 
                   initial={{ opacity: 0, scale: 0.95 }}
                   animate={{ opacity: 1, scale: 1 }}
                   className="absolute inset-0 flex flex-col items-center justify-center bg-white z-10 p-8 text-center"
                >
                   <CheckCircleIcon className="w-20 h-20 text-[#9BAB3C] mb-6" />
                   <h3 className="text-2xl font-bold text-gray-900 mb-2">{isDesktop ? 'Inquiry Received!' : 'Redirecting to WhatsApp...'}</h3>
                   <p className="text-gray-500 max-w-md">
                      {isDesktop 
                        ? "Thank you for contacting us. We have received your details and will be in touch shortly via email." 
                        : "If WhatsApp didn't open, please click the button below."}
                   </p>
                   {isDesktop ? (
                       <button 
                          onClick={() => setStatus(null)}
                          className="mt-8 text-[#9BAB3C] font-medium hover:underline"
                       >
                          Send another request
                       </button>
                   ) : (
                       <button 
                          onClick={() => window.open(`https://wa.me/256772406122`, '_blank')}
                          className="mt-8 inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-[#25D366] hover:bg-[#128C7E]"
                       >
                          Open WhatsApp
                       </button>
                   )}
                </motion.div>
             ) : (
                <form onSubmit={handleSubmit} className="space-y-8 max-w-xl mx-auto">
                    {/* <h3 className="text-2xl font-semibold text-gray-900 mb-8">{formTitle}</h3> */}
                    {/* Form title removed for cleaner 'Vantara' simplicity if desired, or kept subtle. User asked for simplicity. */}
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-8">
                        {fields.map((field, idx) => {
                            const isFullWidth = field.width === 'full' || !field.width || field.type === 'textarea' || field.type === 'checkbox-group';
                            const colSpan = isFullWidth ? 'md:col-span-2' : 'md:col-span-1';

                            return (
                                <div key={field.name} className={colSpan}>
                                    <FieldInput 
                                        field={field} 
                                        value={formData[field.name]} 
                                        onChange={handleChange}
                                        onCheckboxGroupChange={handleCheckboxGroupChange}
                                    />
                                </div>
                            );
                        })}
                    </div>

                    <div className="pt-8">
                        <button
                            type="submit"
                            disabled={loading}
                            className={`w-full text-white font-medium py-4 rounded-full shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition-all duration-300 text-sm tracking-wide uppercase flex items-center justify-center gap-2 ${
                                isDesktop ? 'bg-primary text-black hover:bg-primary/90' : 'bg-black hover:bg-gray-800'
                            }`}
                        >
                            {loading ? (
                                <span>Processing...</span>
                            ) : (
                                <>
                                    {isDesktop ? (
                                        <>
                                            Submit Inquiry
                                        </>
                                    ) : (
                                        <>
                                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 448 512"><path d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7.9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.2 53.7 21.8 57.4 2.6 3.7 37.8 59 91.8 80.8 53.8 21.9 53.8 14.6 63.9 13.6 10.1-1 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z"/></svg>
                                            Chat on WhatsApp
                                        </>
                                    )}
                                </>
                            )}
                        </button>
                    </div>
                </form>
             )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}

const FieldInput = ({ field, value, onChange, onCheckboxGroupChange }) => {
    // Vantara style: Clean, border-bottom, no background, minimal placeholders
    // User requested "outlined boxes" with "border-2" and "theme green".
    const baseInputStyles = "w-full py-3 px-4 bg-white border-2 border-primary focus:border-black focus:ring-1 focus:ring-black/5 text-gray-900 placeholder:text-gray-400 transition-all outline-none rounded-lg shadow-sm";
    
    // Label display logic: Show label above only for accessibility/clarity if needed, 
    // or rely on placeholder if it's a simple text input. 
    // The Vantara screenshot looks like standard inputs with labels. 
    // We will render a very subtle label above.
    const renderLabel = () => (
        <label className="block text-xs font-semibold uppercase tracking-wider text-gray-500 mb-1">
            {field.label} {field.required ? "" : <span className="float-right text-[10px] text-gray-400 normal-case tracking-normal">Optional</span>}
        </label>
    );

    switch (field.type) {
        case 'textarea':
            return (
                <div className="relative group">
                    {renderLabel()}
                    <textarea
                        name={field.name}
                        value={value || ""}
                        onChange={onChange}
                        placeholder={field.placeholder || field.label}
                        required={field.required}
                        className={`${baseInputStyles} min-h-[100px] resize-y`}
                    />
                </div>
            );
        case 'select':
            return (
                <div className="relative group">
                    {renderLabel()}
                    <div className="relative">
                        <select
                            name={field.name}
                            value={value || ""}
                            onChange={onChange}
                            required={field.required}
                            className={`${baseInputStyles} appearance-none cursor-pointer pr-8`}
                        >
                            <option value="" disabled>{field.placeholder || "Select an option"}</option>
                            {field.options.map(opt => (
                                <option key={opt} value={opt}>{opt}</option>
                            ))}
                        </select>
                        <div className="absolute right-0 top-1/2 -translate-y-1/2 pointer-events-none text-gray-400">
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 9l-7 7-7-7" /></svg>
                        </div>
                    </div>
                </div>
            );
        case 'checkbox':
             // Should rarely be used per "no consent" request, but good to have styled cleanly
             return (
                 <label className="flex items-center space-x-3 cursor-pointer py-2 hover:opacity-80 transition-opacity">
                     <input
                         type="checkbox"
                         name={field.name}
                         checked={!!value}
                         onChange={onChange}
                         className="w-4 h-4 rounded border-gray-300 text-black focus:ring-black accent-black"
                     />
                     <span className="text-sm text-gray-600">{field.label}</span>
                 </label>
             );
        case 'checkbox-group':
            return (
                <div className="space-y-3">
                    {renderLabel()}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        {field.options.map(opt => (
                            <label key={opt} className={`flex items-center space-x-3 cursor-pointer group`}>
                                <input
                                    type="checkbox"
                                    checked={value?.includes(opt) || false}
                                    onChange={() => onCheckboxGroupChange(field.name, opt)}
                                              className="w-4 h-4 rounded border-2 border-primary text-primary focus:ring-primary accent-primary"
                                />
                                <span className={`text-sm ${value?.includes(opt) ? 'text-black' : 'text-gray-500'} group-hover:text-black transition-colors`}>
                                    {opt.replace(/([A-Z])/g, " $1").replace(/^./, str => str.toUpperCase())}
                                </span>
                            </label>
                        ))}
                    </div>
                </div>
            );
        default:
            return (
                <div className="relative group">
                    {renderLabel()}
                    <input
                        type={field.type || "text"}
                        name={field.name}
                        value={value || ""}
                        onChange={onChange}
                        placeholder={field.placeholder || field.label}
                        required={field.required}
                        className={baseInputStyles}
                    />
                </div>
            );
    }
};

const ContactItem = ({ icon, text, href }) => {
    const icons = {
        map: <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/></svg>,
        phone: <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/></svg>,
        mail: <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/></svg>
    };

    return (
        <div className="flex items-start gap-4 text-gray-500 group">
            <div className="mt-1 text-[#9BAB3C]">{icons[icon]}</div>
            {href ? (
                <a href={href} className="hover:text-[#9BAB3C] transition-colors">{text}</a>
            ) : (
                <span>{text}</span>
            )}
        </div>
    );
};
