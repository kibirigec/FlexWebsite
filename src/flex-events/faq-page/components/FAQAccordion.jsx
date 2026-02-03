"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { PlusIcon, MinusIcon } from "@heroicons/react/24/outline";

const FAQS = [
  {
    question: "What types of events do you manage?",
    answer: "We specialize in corporate events, weddings, private parties, product launches, exhibitions, and large-scale conferences. Our team customizes every event to match your unique vision."
  },
  {
    question: "How do I book your services?",
    answer: "You can book our services by filling out our online inquiry form or contacting us directly via phone or email. We’ll schedule a free consultation to discuss your event needs and provide a tailored proposal."
  },
  {
    question: "Do you offer full-service event management?",
    answer: "Yes! We handle everything from venue selection, décor, catering, entertainment, logistics, and guest management to ensure a seamless event experience from start to finish."
  },
  {
    question: "Can you help with last-minute event planning?",
    answer: "Absolutely! While we recommend planning in advance for the best results, our team is equipped to handle urgent event requests and deliver a high-quality experience within tight timelines."
  },
  {
    question: "Do you provide event venues or just planning services?",
    answer: "We offer both! We work with various partner venues and can recommend top-tier locations based on your event size and style. Alternatively, we can plan your event at a venue of your choice."
  },
  {
    question: "What is your pricing structure?",
    answer: "Our pricing depends on the scale, complexity, and specific services required for your event. We provide custom quotes based on your budget and event goals to ensure transparency and value."
  },
  {
    question: "Do you offer event decoration and styling?",
    answer: "Yes, we provide complete event styling, including floral arrangements, theme-based décor, lighting, and staging to create a stunning and immersive atmosphere."
  },
  {
    question: "Can you handle catering and entertainment for events?",
    answer: "Yes! We collaborate with top-tier caterers and entertainers to provide customized food menus, live performances, DJs, professional sound systems, and other entertainment options."
  },
  {
    question: "What is your cancellation policy?",
    answer: "Cancellations made at least 30 days before the event receive a full refund. For cancellations within 30 days, we offer partial refunds based on costs incurred. We also provide flexible options to reschedule your event."
  },
  {
    question: "Do you offer on-site event coordination?",
    answer: "Yes! Our team is present on-site to manage all logistics, ensure smooth execution, and handle any last-minute adjustments so you can enjoy your event stress-free."
  }
];

export function FAQAccordion() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section className="py-20 bg-surface-subtle">
      <div className="max-w-3xl mx-auto px-6">
        <div className="space-y-4">
          {FAQS.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              className={`bg-white rounded-2xl overflow-hidden transition-all duration-300 border ${openIndex === index ? 'border-primary/30 shadow-md' : 'border-black/5 hover:border-black/10'}`}
            >
              <button
                onClick={() => setOpenIndex(index === openIndex ? null : index)}
                className="w-full flex items-center justify-between p-6 md:p-8 text-left"
              >
                <span className={`text-lg md:text-xl font-semibold transition-colors ${openIndex === index ? 'text-primary' : 'text-content-prominent'}`}>
                  {faq.question}
                </span>
                <span className={`ml-4 flex-shrink-0 transition-transform duration-300 ${openIndex === index ? 'rotate-180 text-primary' : 'text-content-muted'}`}>
                  {openIndex === index ? <MinusIcon className="w-6 h-6" /> : <PlusIcon className="w-6 h-6" />}
                </span>
              </button>
              
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                  >
                    <div className="px-6 md:px-8 pb-8 pt-0">
                      <p className="text-content-subtle leading-relaxed">
                        {faq.answer}
                      </p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
