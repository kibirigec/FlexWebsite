import React from "react";
import { UniversalBookingForm } from "../../../../globalComps/UniversalBookingForm";

const LineArrayBookingForm = () => {
  return (
    <div className="max-w-7xl mx-auto my-6 px-4">
       <UniversalBookingForm 
          formTitle="Line Array Sound System Booking"
          collectionName="rentals"
          fields={[
             { name: 'firstName', label: 'First Name', type: 'text', required: true, width: 'half', placeholder: 'Jane' },
             { name: 'lastName', label: 'Last Name', type: 'text', required: true, width: 'half', placeholder: 'Doe' },
             { name: 'phoneNumber', label: 'Phone', type: 'tel', required: true, width: 'half', placeholder: '+256 777 123456' },
             { name: 'email', label: 'Email', type: 'email', required: true, width: 'half', placeholder: 'jane@example.com' },
             { name: 'eventType', label: 'Event Type', type: 'select', options: ['Concert', 'Corporate Event', 'Wedding', 'Festival', 'Other'], required: true, width: 'half' },
             { name: 'targetEventDate', label: 'Event Date', type: 'date', required: true, width: 'half' },
             { name: 'venue', label: 'Venue', type: 'text', required: true, placeholder: 'Event Venue', width: 'half' },
             { name: 'attendeeCount', label: 'Expected Audience', type: 'text', required: true, placeholder: 'e.g. 500', width: 'half' },
             { name: 'systemSize', label: 'System Size', type: 'select', options: ['Small (100–500 people)', 'Medium (500–2000 people)', 'Large (2000+ people)'], required: true, width: 'full' },
             { name: 'additionalEquipment', label: 'Additional Equipment', type: 'checkbox-group', options: ['Stage Monitors', 'Subwoofers', 'Wireless Microphones'], width: 'full' },
             { name: 'additionalDetails', label: 'Additional Details', type: 'textarea', placeholder: 'Any specific requests...' }
          ]}
       />
    </div>
  );
};

export default LineArrayBookingForm;
