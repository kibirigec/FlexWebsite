import React from "react";
import { UniversalBookingForm } from "../../../../globalComps/UniversalBookingForm";

const AudioVisualLightingForm = () => {
  return (
    <div className="max-w-7xl mx-auto my-6 px-4">
       <UniversalBookingForm 
          formTitle="Request AV & Lighting Services"
          collectionName="services"
          fields={[
             { name: 'firstName', label: 'First Name', type: 'text', required: true, width: 'half', placeholder: 'Jane' },
             { name: 'lastName', label: 'Last Name', type: 'text', required: true, width: 'half', placeholder: 'Doe' },
             { name: 'phoneNumber', label: 'Phone', type: 'tel', required: true, width: 'half', placeholder: '+256 777 123456' },
             { name: 'email', label: 'Email', type: 'email', required: true, width: 'half', placeholder: 'jane@example.com' },
             { name: 'eventType', label: 'Event Type', type: 'select', options: ['Wedding', 'Corporate', 'Concert', 'Conference', 'Seminar', 'Other'], required: true, width: 'half' },
             { name: 'targetEventDate', label: 'Event Date', type: 'date', required: true, width: 'half' },
             { name: 'venue', label: 'Venue', type: 'text', required: true, placeholder: 'Event Venue', width: 'half' },
             { name: 'expectedGuestCount', label: 'Expected Guests', type: 'text', required: true, placeholder: 'e.g. 500', width: 'half' },
             { name: 'serviceType', label: 'Services Required', type: 'checkbox-group', options: ['Sound System', 'Stage Lighting', 'LED Screens', 'Projectors', 'Microphones', 'DJ Equipment'], width: 'full' },
             { name: 'additionalDetails', label: 'Additional Details', type: 'textarea', placeholder: 'Any specific requirements...' }
          ]}
       />
    </div>
  );
};

export default AudioVisualLightingForm;