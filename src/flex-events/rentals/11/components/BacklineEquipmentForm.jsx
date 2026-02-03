import React from "react";
import { UniversalBookingForm } from "../../../../globalComps/UniversalBookingForm";

const BacklineEquipmentForm = () => {
  return (
    <div className="max-w-7xl mx-auto my-6 px-4">
       <UniversalBookingForm 
          formTitle="Backline Equipment Rental"
          collectionName="rentals"
          fields={[
             { name: 'firstName', label: 'First Name', type: 'text', required: true, width: 'half', placeholder: 'Jane' },
             { name: 'lastName', label: 'Last Name', type: 'text', required: true, width: 'half', placeholder: 'Doe' },
             { name: 'phoneNumber', label: 'Phone', type: 'tel', required: true, width: 'half', placeholder: '+256 777 123456' },
             { name: 'email', label: 'Email', type: 'email', required: true, width: 'half', placeholder: 'jane@example.com' },
             { name: 'eventType', label: 'Event Type', type: 'select', options: ['Concert', 'Festival', 'Private Event', 'Corporate Event', 'Other'], required: true, width: 'half' },
             { name: 'targetEventDate', label: 'Event Date', type: 'date', required: true, width: 'half' },
             { name: 'venue', label: 'Venue', type: 'text', required: true, placeholder: 'Event Venue', width: 'half' },
             { name: 'equipmentNeeded', label: 'Equipment Needed', type: 'select', options: ['Full Band Setup', 'Amplifiers Only', 'Drum Kit', 'Guitars & Basses', 'Custom Setup'], required: true, width: 'full' },
             { name: 'additionalServices', label: 'Additional Services', type: 'checkbox-group', options: ['Delivery Service Required', 'Setup Service Required', 'On-site Technician Required'], width: 'full' },
             { name: 'additionalDetails', label: 'Additional Details', type: 'textarea', placeholder: 'Any specific requests...' }
          ]}
       />
    </div>
  );
};

export default BacklineEquipmentForm;