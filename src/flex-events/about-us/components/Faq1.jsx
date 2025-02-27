"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
  
} from "@relume_io/relume-ui";
import React from "react";
import { Link } from "react-router-dom"

export function Faq1() {
  return (
    <section id="relume" className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container max-w-lg mx-auto">
        <div className="rb-12 mb-12 text-center md:mb-18 lg:mb-20">
          <h2 className="rb-5 mb-5 text-5xl font-bold md:mb-6 md:text-7xl lg:text-8xl">
            FAQs
          </h2>
          <p className="md:text-md">
            Here are answers to some common questions about Flex Events and our
            services.
          </p>
        </div>
        <Accordion type="multiple" className="w-full">
          <AccordionItem value="item-0">
            <AccordionTrigger className="md:py-5 md:text-md">
              What services do you offer?
            </AccordionTrigger>
            <AccordionContent className="md:pb-6">
              Flex Events specializes in a variety of services including event
              management, equipment hire, and bespoke decor solutions. We cater
              to corporate events, weddings, concerts, and more. Our team
              ensures every detail is meticulously planned and executed.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-1">
            <AccordionTrigger className="md:py-5 md:text-md">
              How do I book?
            </AccordionTrigger>
            <AccordionContent className="md:pb-6">
              Booking with Flex Events is simple! You can reach out through our
              contact form or call us directly. Our team will guide you through
              the process and help you plan your event.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger className="md:py-5 md:text-md">
              Do you offer rentals?
            </AccordionTrigger>
            <AccordionContent className="md:pb-6">
              Yes, we provide a wide range of equipment for hire, including
              sound systems, lighting, and staging. Our equipment is top-notch
              and tailored to meet the needs of your event. You can choose from
              our extensive inventory to find what suits you best.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-3">
            <AccordionTrigger className="md:py-5 md:text-md">
              Can you handle decor?
            </AccordionTrigger>
            <AccordionContent className="md:pb-6">
              Absolutely! Our decor services are designed to create stunning and
              unique environments for your events. We work closely with clients
              to understand their vision and bring it to life with bespoke
              solutions.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-4">
            <AccordionTrigger className="md:py-5 md:text-md">
              What is event consultancy?
            </AccordionTrigger>
            <AccordionContent className="md:pb-6">
              Event consultancy involves strategic planning and evaluation to
              ensure your event's success. Our experts help with concept
              creation, budgeting, and logistics. We provide insights that can
              enhance your overall event experience.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
        <div className="mx-auto mt-12 max-w-md text-center md:mt-18 lg:mt-20">
          <h4 className="mb-3 text-2xl font-bold md:mb-4 md:text-3xl md:leading-[1.3] lg:text-4xl">
            Still have questions?
          </h4>
          <p className="md:text-md">We're here to help you!</p>
          <div className="mt-6 md:mt-8">
            <Link to="/contact">
              <button className="px-4 py-2 text-black border-black border-1 ">
                Contact Us
              </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
