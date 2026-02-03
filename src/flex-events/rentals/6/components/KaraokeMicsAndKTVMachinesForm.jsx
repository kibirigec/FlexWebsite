import React from "react";
import { UniversalBookingForm } from "../../../../globalComps/UniversalBookingForm";

const KaraokeMicsAndKTVMachinesForm = () => {
  return (
    <div className="max-w-7xl mx-auto my-6 px-4">
       <UniversalBookingForm 
          formTitle="Karaoke & KTV Booking"
          collectionName="rentals"
          fields={[
             { name: 'firstName', label: 'First Name', type: 'text', required: true, width: 'half', placeholder: 'Jane' },
             { name: 'lastName', label: 'Last Name', type: 'text', required: true, width: 'half', placeholder: 'Doe' },
             { name: 'phoneNumber', label: 'Phone', type: 'tel', required: true, width: 'half', placeholder: '+256 777 123456' },
             { name: 'email', label: 'Email', type: 'email', required: true, width: 'half', placeholder: 'jane@example.com' },
             { name: 'eventType', label: 'Event Type', type: 'select', options: ['Karaoke Night', 'Private Party', 'Corporate Event', 'Birthday Party', 'Other'], required: true, width: 'half' },
             { name: 'targetEventDate', label: 'Event Date', type: 'date', required: true, width: 'half' },
             { name: 'venue', label: 'Venue', type: 'text', required: true, placeholder: 'Event Venue', width: 'half' },
             { name: 'micQuantity', label: 'Number of Microphones', type: 'number', required: true, width: 'half' },
             { name: 'ktvMachineType', label: 'KTV Machine Type', type: 'select', options: ['Standard', 'Professional'], required: true, width: 'half' },
             { name: 'songLibrarySize', label: 'Song Library', type: 'select', options: ['500+ songs', '1000+ songs', 'Unlimited'], required: true, width: 'half' },
             { name: 'speakerSystem', label: 'Speaker System', type: 'select', options: ['Basic', 'Premium'], required: true, width: 'half' },
             { name: 'additionalFeatures', label: 'Additional Features', type: 'checkbox-group', options: ['Wireless Mics', 'Disco Lights', 'Live Recording'], width: 'full' },
             { name: 'additionalDetails', label: 'Additional Details', type: 'textarea', placeholder: 'Any specific requests...' }
          ]}
       />
    </div>
  );
};

export default KaraokeMicsAndKTVMachinesForm;
