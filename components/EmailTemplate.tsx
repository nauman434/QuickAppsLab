import * as React from 'react';

interface EmailTemplateProps {
  formData: {
    fullName: string,
    email: string,
    phone: string,
    integrations: string,
    company: string,
    message: string,
  }
}

export const EmailTemplate: React.FC<Readonly<EmailTemplateProps>> = ({
  formData,
}) => (
  <div className="p-6 bg-white shadow-lg rounded-lg">
    <h1 className="text-2xl font-bold mb-4">Contact Information</h1>
    <div className="mb-2">
      <span className="font-semibold text-gray-700 ">Full Name: </span>
      <span className="ml-2 text-gray-900">{formData.fullName}</span>
    </div>
    <div className="mb-2">
      <span className="font-semibold text-gray-700 ">Email: </span>
      <span className="ml-2 text-gray-900">{formData.email}</span>
    </div>
    <div className="mb-2">
      <span className="font-semibold text-gray-700 ">Phone: </span>
      <span className="ml-2 text-gray-900">{formData.phone}</span>
    </div>
    <div className="mb-2">
      <span className="font-semibold text-gray-700 ">Integration: </span>
      <span className="ml-2 text-gray-900">{formData.integrations}</span>
    </div>
    <div className="mb-2">
      <span className="font-semibold text-gray-700 ">Company: </span>
      <span className="ml-2 text-gray-900">{formData.company}</span>
    </div>
    <div className="mb-2">
      <span className="font-semibold text-gray-700 ">Message: </span>
      <span className="ml-2 text-gray-900">{formData.message}</span>
    </div>
  </div>
);
