import React from "react";
import { UniversalBookingForm } from "../../../../globalComps/UniversalBookingForm";

const CustomSpeakerForm = () => {
  return (
    <div className="max-w-7xl mx-auto my-6 px-4">
       <UniversalBookingForm 
          formTitle="Request a Custom Speaker"
          collectionName="speaker_requests"
          fields={[
             { name: 'firstName', label: 'First Name', type: 'text', required: true, width: 'half', placeholder: 'Jane' },
             { name: 'lastName', label: 'Last Name', type: 'text', required: true, width: 'half', placeholder: 'Doe' },
             { name: 'phoneNumber', label: 'Phone', type: 'tel', required: true, width: 'half', placeholder: '+256 777 123456' },
             { name: 'email', label: 'Email', type: 'email', required: true, width: 'half', placeholder: 'jane@example.com' },
             { name: 'speakerType', label: 'Speaker Type', type: 'select', options: ['Home Audio', 'Event PA System', 'Studio Monitors', 'Custom Build'], required: true, width: 'half' },
             { name: 'usageScenario', label: 'Intended Use', type: 'select', options: ['Home Entertainment', 'Outdoor Events', 'Professional Studio', 'Church/Worship Center'], required: true, width: 'half' },
             { name: 'budgetRange', label: 'Budget Range', type: 'select', options: ['UGX 500,000 - 1,000,000', 'UGX 1,000,000 - 2,500,000', 'UGX 2,500,000 - 5,000,000', 'UGX 5,000,000+'], required: true, width: 'half' },
             { name: 'quantity', label: 'Quantity', type: 'text', required: true, placeholder: 'e.g. 2, 1 pair', width: 'half' },
             { name: 'additionalDetails', label: 'Custom Specifications', type: 'textarea', placeholder: 'Describe your power requirements or other details...' }
          ]}
       />
    </div>
  );
};

export default CustomSpeakerForm;
