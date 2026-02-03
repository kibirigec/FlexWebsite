import React from "react";
import { UniversalBookingForm } from "../../../../globalComps/UniversalBookingForm";

const AluminiumTrussAndStagesForm = () => {
  return (
    <div className="max-w-7xl mx-auto my-6 px-4">
       <UniversalBookingForm 
          formTitle="Truss & Stage Booking"
          collectionName="rentals"
          fields={[
             { name: 'firstName', label: 'First Name', type: 'text', required: true, width: 'half', placeholder: 'Jane' },
             { name: 'lastName', label: 'Last Name', type: 'text', required: true, width: 'half', placeholder: 'Doe' },
             { name: 'phoneNumber', label: 'Phone', type: 'tel', required: true, width: 'half', placeholder: '+256 777 123456' },
             { name: 'email', label: 'Email', type: 'email', required: true, width: 'half', placeholder: 'jane@example.com' },
             { name: 'eventType', label: 'Event Type', type: 'select', options: ['Concert', 'Corporate Event', 'Wedding', 'Exhibition', 'Other'], required: true, width: 'half' },
             { name: 'targetEventDate', label: 'Event Date', type: 'date', required: true, width: 'half' },
             { name: 'venue', label: 'Venue', type: 'text', placeholder: 'Event Venue', width: 'half' },
             { name: 'stageSize', label: 'Stage Size', type: 'select', options: ['Small', 'Medium', 'Standard', 'Large', 'Other'], required: true, width: 'half' },
             { name: 'trussType', label: 'Truss Type', type: 'select', options: ['Goal Post Truss', 'Goal Post Truss & Stage', 'Box Truss & Stage', 'Custom Design'], required: true, width: 'half' },
             { name: 'additionalFeatures', label: 'Additional Features', type: 'checkbox-group', options: ['Roof Cover', 'LED Screen Support', 'Banner Holders'], width: 'full' },
             { name: 'additionalDetails', label: 'Additional Details', type: 'textarea', placeholder: 'Any specific requests...' }
          ]}
       />
    </div>
  );
};

export default AluminiumTrussAndStagesForm;
