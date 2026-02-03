import React from "react";
import { UniversalBookingForm } from "../../../../globalComps/UniversalBookingForm";

const ProLightsAndEffectsForm = () => {
  return (
    <div className="max-w-7xl mx-auto my-6 px-4">
       <UniversalBookingForm 
          formTitle="Pro Lighting & Effects Booking"
          collectionName="rentals"
          fields={[
             { name: 'firstName', label: 'First Name', type: 'text', required: true, width: 'half', placeholder: 'Jane' },
             { name: 'lastName', label: 'Last Name', type: 'text', required: true, width: 'half', placeholder: 'Doe' },
             { name: 'phoneNumber', label: 'Phone', type: 'tel', required: true, width: 'half', placeholder: '+256 777 123456' },
             { name: 'email', label: 'Email', type: 'email', required: true, width: 'half', placeholder: 'jane@example.com' },
             { name: 'eventType', label: 'Event Type', type: 'select', options: ['Concert', 'Corporate Event', 'Wedding', 'Festival', 'Club Party', 'Other'], required: true, width: 'half' },
             { name: 'targetEventDate', label: 'Event Date', type: 'date', required: true, width: 'half' },
             { name: 'venue', label: 'Venue', type: 'text', required: true, placeholder: 'Event Venue', width: 'half' },
             { name: 'attendeeCount', label: 'Expected Audience', type: 'text', required: true, placeholder: 'e.g. 500', width: 'half' },
             { name: 'lightingPackage', label: 'Lighting Package', type: 'select', options: ['Basic (Small Event)', 'Advanced (Medium Event)', 'Pro (Large Event)'], required: true, width: 'full' },
             { name: 'additionalEffects', label: 'Additional Effects', type: 'checkbox-group', options: ['Moving Heads', 'LED Par Cans', 'Laser Effects', 'Strobe Lights', 'Fog Machine'], width: 'full' },
             { name: 'additionalDetails', label: 'Additional Details', type: 'textarea', placeholder: 'Any specific requests...' }
          ]}
       />
    </div>
  );
};

export default ProLightsAndEffectsForm;
