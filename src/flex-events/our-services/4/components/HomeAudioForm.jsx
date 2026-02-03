import React from "react";
import { UniversalBookingForm } from "../../../../globalComps/UniversalBookingForm";

const HomeAudioForm = () => {
  return (
    <div className="max-w-7xl mx-auto my-6 px-4">
       <UniversalBookingForm 
          formTitle="Home Audio Consultation"
          collectionName="services"
          fields={[
             { name: 'firstName', label: 'First Name', type: 'text', required: true, width: 'half', placeholder: 'Jane' },
             { name: 'lastName', label: 'Last Name', type: 'text', required: true, width: 'half', placeholder: 'Doe' },
             { name: 'phoneNumber', label: 'Phone', type: 'tel', required: true, width: 'half', placeholder: '+256 777 123456' },
             { name: 'email', label: 'Email', type: 'email', required: true, width: 'half', placeholder: 'jane@example.com' },
             { name: 'homeType', label: 'Home Type', type: 'select', options: ['Apartment', 'House', 'Condo', 'Villa', 'Other'], required: true, width: 'half' },
             { name: 'roomSize', label: 'Room Size', type: 'select', options: ['Small (up to 150 sq ft)', 'Medium (150-300 sq ft)', 'Large (300-500 sq ft)', 'Extra Large (500+ sq ft)'], required: true, width: 'half' },
             { name: 'audioInterests', label: 'Audio Interests', type: 'checkbox-group', options: ['Stereo System', 'Surround Sound', 'Home Theater', 'Multi-Room Audio', 'Smart Speakers', 'Vinyl Setup'], width: 'full' },
             { name: 'budgetRange', label: 'Budget Range', type: 'select', options: ['UGX 500,000 - 1,000,000', 'UGX 1,000,000 - 2,500,000', 'UGX 2,500,000 - 5,000,000', 'UGX 5,000,000+'], required: true, width: 'half' },
             { name: 'installationType', label: 'Installation Type', type: 'select', options: ['Wireless', 'Wired', 'Hybrid', 'Need Consultation'], required: true, width: 'half' },
             { name: 'additionalDetails', label: 'Additional Details', type: 'textarea', placeholder: 'Any specific acoustic concerns or room challenges...' }
          ]}
       />
    </div>
  );
};

export default HomeAudioForm;
