import React from "react";
import { UniversalBookingForm } from "../../../../globalComps/UniversalBookingForm";

const InvitationCardDesignForm = () => {
  return (
    <div className="max-w-7xl mx-auto my-6 px-4">
       <UniversalBookingForm 
          formTitle="Invitation Card Design Request"
          collectionName="invitationCardRequests"
          fields={[
             { name: 'firstName', label: 'First Name', type: 'text', required: true, width: 'half', placeholder: 'Jane' },
             { name: 'lastName', label: 'Last Name', type: 'text', required: true, width: 'half', placeholder: 'Doe' },
             { name: 'phoneNumber', label: 'Phone', type: 'tel', required: true, width: 'half', placeholder: '+256 777 123456' },
             { name: 'email', label: 'Email', type: 'email', required: true, width: 'half', placeholder: 'jane@example.com' },
             { name: 'eventType', label: 'Event Type', type: 'select', options: ['Wedding', 'Birthday', 'Corporate', 'Graduation', 'Other'], required: true, width: 'half' },
             { name: 'targetEventDate', label: 'Event Date', type: 'date', required: true, width: 'half' },
             { name: 'expectedGuestCount', label: 'No. of Invitations', type: 'text', required: true, placeholder: 'e.g. 150', width: 'half' },
             { name: 'cardStyle', label: 'Card Style', type: 'select', options: ['Classic', 'Modern', 'Rustic', 'Elegant', 'Minimalist'], required: true, width: 'half' },
             { name: 'colorTheme', label: 'Color Theme', type: 'text', placeholder: 'e.g. Gold & White', width: 'half' },
             { name: 'paperType', label: 'Paper Type', type: 'select', options: ['Matte', 'Glossy', 'Textured', 'Pearlescent'], width: 'half' },
             { name: 'printingOption', label: 'Printing Option', type: 'select', options: ['Digital', 'Letterpress', 'Foil Stamping', 'Embossed'], width: 'full' },
             { name: 'additionalDetails', label: 'Additional Details', type: 'textarea', placeholder: 'Any specific requests?' }
          ]}
       />
    </div>
  );
};

export default InvitationCardDesignForm;
