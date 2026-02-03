import React from "react";
import { UniversalBookingForm } from "../../../../globalComps/UniversalBookingForm";

const SoundVisualForm = () => {
  return (
    <div className="max-w-7xl mx-auto my-6 px-4">
       <UniversalBookingForm 
          formTitle="Sound & Visual Installation"
          collectionName="services"
          fields={[
             { name: 'firstName', label: 'First Name', type: 'text', required: true, width: 'half', placeholder: 'Jane' },
             { name: 'lastName', label: 'Last Name', type: 'text', required: true, width: 'half', placeholder: 'Doe' },
             { name: 'phoneNumber', label: 'Phone', type: 'tel', required: true, width: 'half', placeholder: '+256 777 123456' },
             { name: 'email', label: 'Email', type: 'email', required: true, width: 'half', placeholder: 'jane@example.com' },
             { name: 'installationType', label: 'Installation Type', type: 'select', options: ['Bar&Lounge/Club Installations', 'Hall/Auditorium/Theatre', 'Church/Praise&Worship', 'Supermarkets/Shopping Malls'], required: true, width: 'half' },
             { name: 'roomSize', label: 'Room Size', type: 'select', options: ['Small (Under 150 sq ft)', 'Medium (150-300 sq ft)', 'Large (300-500 sq ft)', 'Extra Large (500+ sq ft)'], required: true, width: 'half' },
             { name: 'soundNeeds', label: 'Sound System Needs', type: 'checkbox-group', options: ['Surround Sound', 'Concert-Grade Speakers', 'Smart Audio', 'PA System', 'Wireless Audio'], width: 'full' },
             { name: 'visualPreferences', label: 'Visual Setup Preferences', type: 'checkbox-group', options: ['LED Video Wall', 'Projector', 'OLED TV', 'Interactive Whiteboard', 'Digital Signage'], width: 'full' },
             { name: 'screenType', label: 'Screen Type', type: 'select', options: ['Flat Screen', 'Curved Screen', 'Projection Screen'], required: true, width: 'half' },
             { name: 'resolutionPreference', label: 'Resolution Preference', type: 'select', options: ['4K', '8K', 'Full HD (1080p)'], required: true, width: 'half' },
             { name: 'additionalDetails', label: 'Additional Details', type: 'textarea', placeholder: 'Any specific requirements or comments...' }
          ]}
       />
    </div>
  );
};

export default SoundVisualForm;
