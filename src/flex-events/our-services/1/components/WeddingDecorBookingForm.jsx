import React from "react";
import { UniversalBookingForm } from "../../../../globalComps/UniversalBookingForm";

const EventProposalForm = () => {
  return (
    <div className="max-w-7xl mx-auto my-6 px-4">
       <UniversalBookingForm 
          formTitle="Request Proposal"
          collectionName="services"
          fields={[
             { name: 'firstName', label: 'First Name', type: 'text', required: true, width: 'half', placeholder: 'Jane' },
             { name: 'lastName', label: 'Last Name', type: 'text', required: true, width: 'half', placeholder: 'Doe' },
             { name: 'phoneNumber', label: 'Phone', type: 'tel', required: true, width: 'half', placeholder: '+256 777 123456' },
             { name: 'email', label: 'Email', type: 'email', required: true, width: 'half', placeholder: 'jane@example.com' },
             { name: 'targetEventDate', label: 'Event Date', type: 'date', required: true, width: 'half' },
             { name: 'eventBudget', label: 'Event Budget', type: 'select', options: ['Below 1M', '1M - 5M', '5M - 12M', '12M - 20M', '20M+'], required: true, width: 'half' },
             { name: 'expectedGuestCount', label: 'Expected Guest Count', type: 'text', placeholder: 'e.g. 300', width: 'half' },
             { name: 'eventCity', label: 'Location', type: 'text', required: true, placeholder: 'e.g. Kampala', width: 'half' },
             { name: 'additionalEventDetails', label: 'Event Details', type: 'textarea', placeholder: 'Tell us more about your event needs and timeline...' }
          ]}
       />
    </div>
  );
};

export default EventProposalForm;
