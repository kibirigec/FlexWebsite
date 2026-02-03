import React from "react";
import { UniversalBookingForm } from "../../../../globalComps/UniversalBookingForm";

const DJEquipmentForm = () => {
  return (
    <div className="max-w-7xl mx-auto my-6 px-4">
       <UniversalBookingForm 
          formTitle="DJ Equipment Booking"
          collectionName="rentals"
          fields={[
             { name: 'firstName', label: 'First Name', type: 'text', required: true, width: 'half', placeholder: 'Jane' },
             { name: 'lastName', label: 'Last Name', type: 'text', required: true, width: 'half', placeholder: 'Doe' },
             { name: 'phoneNumber', label: 'Phone', type: 'tel', required: true, width: 'half', placeholder: '+256 777 123456' },
             { name: 'email', label: 'Email', type: 'email', required: true, width: 'half', placeholder: 'jane@example.com' },
             { name: 'eventType', label: 'Event Type', type: 'select', options: ['Wedding', 'Corporate Event', 'Birthday Party', 'Concert', 'Other'], required: true, width: 'half' },
             { name: 'targetEventDate', label: 'Event Date', type: 'date', required: true, width: 'half' },
             { name: 'venue', label: 'Venue', type: 'text', required: true, placeholder: 'Event Venue', width: 'half' },
             { name: 'equipmentPackage', label: 'Equipment Package', type: 'select', options: ['Basic (Mixer + Speakers)', 'Standard (Mixer + Speakers + Subwoofers)', 'Professional (Full DJ Setup)'], required: true, width: 'half' },
             { name: 'mixerType', label: 'Mixer Type', type: 'select', options: ['Analog', 'Digital', 'Controller'], required: true, width: 'half' },
             { name: 'additionalEquipment', label: 'Additional Equipment', type: 'checkbox-group', options: ['Turntables', 'Speakers', 'Subwoofers', 'Microphones', 'Lighting Effects'], width: 'full' },
             { name: 'additionalDetails', label: 'Additional Details', type: 'textarea', placeholder: 'Any specific requests...' }
          ]}
       />
    </div>
  );
};

export default DJEquipmentForm;
