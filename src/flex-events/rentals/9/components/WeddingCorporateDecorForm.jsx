import React from "react";
import { UniversalBookingForm } from "../../../../globalComps/UniversalBookingForm";

const WeddingCorporateDecorForm = () => {
  return (
    <div className="max-w-7xl mx-auto my-6 px-4">
       <UniversalBookingForm 
          formTitle="Decor Rental Booking"
          collectionName="rentals"
          fields={[
             { name: 'firstName', label: 'First Name', type: 'text', required: true, width: 'half', placeholder: 'Jane' },
             { name: 'lastName', label: 'Last Name', type: 'text', required: true, width: 'half', placeholder: 'Doe' },
             { name: 'phoneNumber', label: 'Phone', type: 'tel', required: true, width: 'half', placeholder: '+256 777 123456' },
             { name: 'email', label: 'Email', type: 'email', required: true, width: 'half', placeholder: 'jane@example.com' },
             { name: 'eventType', label: 'Event Type', type: 'select', options: ['Wedding', 'Corporate Event', 'Gala Dinner', 'Product Launch', 'Other'], required: true, width: 'half' },
             { name: 'targetEventDate', label: 'Event Date', type: 'date', required: true, width: 'half' },
             { name: 'venue', label: 'Venue', type: 'text', required: true, placeholder: 'Event Venue', width: 'half' },
             { name: 'decorPackage', label: 'Decor Package', type: 'select', options: ['Basic (Tables & Chairs + Simple Setup)', 'Standard (Floral + Drapery + Lighting)', 'Premium (Full Luxury Setup)'], required: true, width: 'full' },
             { name: 'additionalFeatures', label: 'Additional Decor Features', type: 'checkbox-group', options: ['Floral Decor', 'Table Centerpieces', 'Drapery', 'Stage Design', 'Lighting Decor'], width: 'full' },
             { name: 'additionalDetails', label: 'Additional Details', type: 'textarea', placeholder: 'Any specific requests...' }
          ]}
       />
    </div>
  );
};

export default WeddingCorporateDecorForm;
