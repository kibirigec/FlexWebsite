import React from "react";
import { UniversalBookingForm } from "../../../../globalComps/UniversalBookingForm";

const DLPProjectorsAndScreensForm = () => {
  return (
    <div className="max-w-7xl mx-auto my-6 px-4">
       <UniversalBookingForm 
          formTitle="Projector & Screen Booking"
          collectionName="rentals"
          fields={[
             { name: 'firstName', label: 'First Name', type: 'text', required: true, width: 'half', placeholder: 'Jane' },
             { name: 'lastName', label: 'Last Name', type: 'text', required: true, width: 'half', placeholder: 'Doe' },
             { name: 'phoneNumber', label: 'Phone', type: 'tel', required: true, width: 'half', placeholder: '+256 777 123456' },
             { name: 'email', label: 'Email', type: 'email', required: true, width: 'half', placeholder: 'jane@example.com' },
             { name: 'eventType', label: 'Event Type', type: 'select', options: ['Conference', 'Wedding', 'Business Presentation', 'Movie Night', 'Other'], required: true, width: 'half' },
             { name: 'targetEventDate', label: 'Event Date', type: 'date', required: true, width: 'half' },
             { name: 'venue', label: 'Venue', type: 'text', required: true, placeholder: 'Event Venue', width: 'half' },
             { name: 'projectorType', label: 'Projector Type', type: 'select', options: ['Standard', 'HD', '4K'], required: true, width: 'half' },
             { name: 'screenSize', label: 'Screen Size', type: 'select', options: ['Small (50 inches)', 'Medium (100 inches)', 'Large (150 inches)'], required: true, width: 'half' },
             { name: 'resolution', label: 'Resolution', type: 'select', options: ['720p', '1080p', '4K'], required: true, width: 'half' },
             { name: 'additionalFeatures', label: 'Additional Features', type: 'checkbox-group', options: ['HDMI Support', 'Wireless Connectivity', 'Sound Integration'], width: 'full' },
             { name: 'additionalDetails', label: 'Additional Details', type: 'textarea', placeholder: 'Any specific requests...' }
          ]}
       />
    </div>
  );
};

export default DLPProjectorsAndScreensForm;
