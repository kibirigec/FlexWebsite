import React from "react";
import { UniversalBookingForm } from "../../../globalComps/UniversalBookingForm";

const PASystemAndDiscoForm = () => {
  return (
    <div className="max-w-7xl mx-auto my-8 px-4">
       <UniversalBookingForm 
          formTitle="P.A System & Music Booking"
          collectionName="rentals"
          fields={[
             { name: 'firstName', label: 'First Name', type: 'text', required: true, width: 'half', placeholder: 'Jane' },
             { name: 'lastName', label: 'Last Name', type: 'text', required: true, width: 'half', placeholder: 'Doe' },
             { name: 'email', label: 'Email', type: 'email', required: true, width: 'half', placeholder: 'jane@example.com' },
             { name: 'phoneNumber', label: 'Phone', type: 'tel', required: true, width: 'half', placeholder: '+256 777 123456' },
             { name: 'eventType', label: 'Event Type', type: 'select', options: ['Wedding', 'Corporate Event', 'Birthday Party', 'Concert', 'Other'], required: true, width: 'half' },
             { name: 'eventDate', label: 'Event Date', type: 'date', required: true, width: 'half' },
             { name: 'venue', label: 'Venue', type: 'text', placeholder: 'e.g. Serena Hotel', width: 'half' },
             { name: 'attendeeCount', label: 'Guest Count', type: 'text', placeholder: 'e.g. 500', width: 'half' },
             { name: 'soundSystemSize', label: 'Sound System Size', type: 'select', options: ['Small (50–1000)', 'Medium (1000–3000)', 'Large (3000–10,000)', 'Very Large (10,000+)'], required: true, width: 'half' },
             { name: 'djService', label: 'Do you need a DJ?', type: 'select', options: ['Yes', 'No'], required: true, width: 'half' },
             { name: 'additionalFeatures', label: 'Additional Features', type: 'checkbox-group', options: ['lighting', 'smokeMachine', 'specialEffects'], width: 'full' },
             { name: 'additionalDetails', label: 'Additional Details', type: 'textarea', placeholder: 'Any specific requirements...' }
          ]}
       />
    </div>
  );
};

export default PASystemAndDiscoForm;
