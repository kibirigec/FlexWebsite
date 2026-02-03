import React from "react";
import { UniversalBookingForm } from "../../../../globalComps/UniversalBookingForm";

const FullEventPlanningForm = () => {
  return (
    <div className="max-w-7xl mx-auto my-6 px-4">
       <UniversalBookingForm 
          formTitle="Event Planning Consultation"
          collectionName="services"
          fields={[
             { name: 'firstName', label: 'First Name', type: 'text', required: true, width: 'half', placeholder: 'Jane' },
             { name: 'lastName', label: 'Last Name', type: 'text', required: true, width: 'half', placeholder: 'Doe' },
             { name: 'phoneNumber', label: 'Phone', type: 'tel', required: true, width: 'half', placeholder: '+256 777 123456' },
             { name: 'email', label: 'Email', type: 'email', required: true, width: 'half', placeholder: 'jane@example.com' },
             { name: 'eventType', label: 'Event Type', type: 'select', options: ['Wedding', 'Corporate Event', 'Birthday Party', 'Conference', 'Concert', 'Other'], required: true, width: 'half' },
             { name: 'venuePreference', label: 'Preferred Venue', type: 'text', placeholder: 'Venue name or location', width: 'half' },
             { name: 'guestCount', label: 'Expected Guests', type: 'text', required: true, placeholder: 'e.g. 100', width: 'half' },
             { name: 'budgetRange', label: 'Budget Range', type: 'select', options: ['UGX 500,000 - 1,000,000', 'UGX 1,000,000 - 5,000,000', 'UGX 5,000,000 - 10,000,000', 'UGX 10,000,000+'], required: true, width: 'half' },
             { name: 'requiredServices', label: 'Required Services', type: 'checkbox-group', options: ['Catering', 'Photography', 'Videography', 'Décor', 'Entertainment', 'Other'], width: 'full' },
             { name: 'additionalDetails', label: 'Additional Details', type: 'textarea', placeholder: 'Any special requests...' }
          ]}
       />
    </div>
  );
};

export default FullEventPlanningForm;
