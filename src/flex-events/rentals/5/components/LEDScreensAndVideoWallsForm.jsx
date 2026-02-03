import React from "react";
import { UniversalBookingForm } from "../../../../globalComps/UniversalBookingForm";

const LEDScreensAndVideoWallsForm = () => {
  return (
    <div className="max-w-7xl mx-auto my-6 px-4">
       <UniversalBookingForm 
          formTitle="LED Screen & Video Wall Booking"
          collectionName="rentals"
          fields={[
             { name: 'firstName', label: 'First Name', type: 'text', required: true, width: 'half', placeholder: 'Jane' },
             { name: 'lastName', label: 'Last Name', type: 'text', required: true, width: 'half', placeholder: 'Doe' },
             { name: 'phoneNumber', label: 'Phone', type: 'tel', required: true, width: 'half', placeholder: '+256 777 123456' },
             { name: 'email', label: 'Email', type: 'email', required: true, width: 'half', placeholder: 'jane@example.com' },
             { name: 'eventType', label: 'Event Type', type: 'select', options: ['Concert', 'Corporate Event', 'Wedding', 'Exhibition', 'Other'], required: true, width: 'half' },
             { name: 'targetEventDate', label: 'Event Date', type: 'date', required: true, width: 'half' },
             { name: 'venue', label: 'Venue', type: 'text', required: true, placeholder: 'Event Venue', width: 'half' },
             { name: 'screenSize', label: 'Screen Size', type: 'select', options: ['Small (3m x 2m)', 'Medium (6m x 4m)', 'Large (10m x 6m)'], required: true, width: 'half' },
             { name: 'screenType', label: 'Screen Type', type: 'select', options: ['LED Video Wall', 'LCD Display Panels', 'Projection Screens'], required: true, width: 'half' },
             { name: 'resolution', label: 'Resolution', type: 'select', options: ['HD (720p)', 'Full HD (1080p)', '4K Ultra HD'], required: true, width: 'half' },
             { name: 'indoorOutdoor', label: 'Indoor or Outdoor', type: 'select', options: ['Indoor', 'Outdoor'], required: true, width: 'half' },
             { name: 'additionalFeatures', label: 'Additional Features', type: 'checkbox-group', options: ['Live Streaming', 'Video Playback', 'Multi-Screen Setup'], width: 'full' },
             { name: 'additionalDetails', label: 'Additional Details', type: 'textarea', placeholder: 'Any specific requests...' }
          ]}
       />
    </div>
  );
};

export default LEDScreensAndVideoWallsForm;
