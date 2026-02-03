import React from "react";
import { UniversalBookingForm } from "../../../../globalComps/UniversalBookingForm";

const PowerGeneratorsForm = () => {
  return (
    <div className="max-w-7xl mx-auto my-6 px-4">
       <UniversalBookingForm 
          formTitle="Power Generator Rental"
          collectionName="rentals"
          fields={[
             { name: 'firstName', label: 'First Name', type: 'text', required: true, width: 'half', placeholder: 'Jane' },
             { name: 'lastName', label: 'Last Name', type: 'text', required: true, width: 'half', placeholder: 'Doe' },
             { name: 'phoneNumber', label: 'Phone', type: 'tel', required: true, width: 'half', placeholder: '+256 777 123456' },
             { name: 'email', label: 'Email', type: 'email', required: true, width: 'half', placeholder: 'jane@example.com' },
             { name: 'eventType', label: 'Event Type', type: 'select', options: ['Wedding', 'Corporate Event', 'Outdoor Concert', 'Exhibition', 'Other'], required: true, width: 'half' },
             { name: 'targetEventDate', label: 'Event Date', type: 'date', required: true, width: 'half' },
             { name: 'venue', label: 'Venue', type: 'text', required: true, placeholder: 'Event Venue', width: 'half' },
             { name: 'generatorSize', label: 'Generator Size', type: 'select', options: ['5kVA (Small events)', '10kVA (Medium events)', '20kVA (Large events)', '50kVA+ (Major events & concerts)'], required: true, width: 'full' },
             { name: 'additionalServices', label: 'Additional Services', type: 'checkbox-group', options: ['Fuel Included', 'Technician Required', 'Backup Generator'], width: 'full' },
             { name: 'additionalDetails', label: 'Additional Details', type: 'textarea', placeholder: 'Any specific requests...' }
          ]}
       />
    </div>
  );
};

export default PowerGeneratorsForm;
