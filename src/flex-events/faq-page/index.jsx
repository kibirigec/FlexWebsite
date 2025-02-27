"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@relume_io/relume-ui";
import React from "react";
import { Link } from "react-router-dom";
import { useFadeIn } from "../../hooks/useFadeIn";

export default function FAQ() {
  useFadeIn();
  return (
    <section id="relume" className="px-[5%] py-8 md:py-24 lg:py-28">
      <div className="container max-w-lg mx-auto">
        <div className="rb-12 mb-12 text-center md:mb-18 lg:mb-20">
          <h2 className=" rb-5 mb-5 text-5xl font-bold md:mb-6 md:text-7xl lg:text-8xl">
            FAQs
          </h2>
          <p className="md:text-md">
            Here are answers to some common questions about our event management services.
          </p>
        </div>
        <Accordion type="multiple" className="w-full">
          <AccordionItem value="item-0">
            <AccordionTrigger className="md:py-5 md:text-md">
              What types of events do you manage?
            </AccordionTrigger>
            <AccordionContent className="md:pb-6">
              We specialize in corporate events, weddings, private parties, product launches, exhibitions, and large-scale conferences. Our team customizes every event to match your unique vision.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-1">
            <AccordionTrigger className="md:py-5 md:text-md">
              How do I book your services?
            </AccordionTrigger>
            <AccordionContent className="md:pb-6">
              You can book our services by filling out our online inquiry form or contacting us directly. We’ll schedule a consultation to discuss your event needs and provide a tailored proposal.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger className="md:py-5 md:text-md">
              Do you offer full-service event management?
            </AccordionTrigger>
            <AccordionContent className="md:pb-6">
              Yes! We handle everything from venue selection, décor, catering, entertainment, logistics, and guest management to ensure a seamless event experience.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-3">
            <AccordionTrigger className="md:py-5 md:text-md">
              Can you help with last-minute event planning?
            </AccordionTrigger>
            <AccordionContent className="md:pb-6">
              Absolutely! While we recommend planning in advance for the best results, our team is equipped to handle urgent event requests and deliver a high-quality experience within tight timelines.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-4">
            <AccordionTrigger className="md:py-5 md:text-md">
              Do you provide event venues or just planning services?
            </AccordionTrigger>
            <AccordionContent className="md:pb-6">
              We offer both! We work with various partner venues and can recommend locations based on your event size and style. Alternatively, we can plan your event at a venue of your choice.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-5">
            <AccordionTrigger className="md:py-5 md:text-md">
              What is your pricing structure?
            </AccordionTrigger>
            <AccordionContent className="md:pb-6">
              Our pricing depends on the scale, complexity, and specific services required for your event. We provide custom quotes based on your budget and event goals.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-6">
            <AccordionTrigger className="md:py-5 md:text-md">
              Do you offer event decoration and styling?
            </AccordionTrigger>
            <AccordionContent className="md:pb-6">
              Yes, we provide complete event styling, including floral arrangements, theme-based décor, lighting, and staging to create a stunning and immersive experience.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-7">
            <AccordionTrigger className="md:py-5 md:text-md">
              Can you handle catering and entertainment for events?
            </AccordionTrigger>
            <AccordionContent className="md:pb-6">
              Yes! We collaborate with top-tier caterers and entertainers to provide customized food menus, live performances, DJs, and other entertainment options for your event.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-8">
            <AccordionTrigger className="md:py-5 md:text-md">
              What is your cancellation policy?
            </AccordionTrigger>
            <AccordionContent className="md:pb-6">
              Cancellations made at least 30 days before the event receive a full refund. For cancellations within 30 days, we offer partial refunds based on costs incurred. We also provide options to reschedule your event.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-9">
            <AccordionTrigger className="md:py-5 md:text-md">
              Do you offer on-site event coordination?
            </AccordionTrigger>
            <AccordionContent className="md:pb-6">
              Yes! Our team is present on-site to manage all logistics, ensure smooth execution, and handle any last-minute adjustments so you can enjoy your event stress-free.
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
              <button className="px-4 py-2 text-black border-black border-1">
                Contact Us
              </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
