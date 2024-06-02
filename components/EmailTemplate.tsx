import * as React from 'react';

interface EmailTemplateProps {
    formData: {
        fullName: string,
        email: string,
        phone: string,
        message: string,
    }
}

export const EmailTemplate: React.FC<Readonly<EmailTemplateProps>> = ({
    formData,
  }) => (
    <div>
    <h1>Full Name: {formData.fullName}</h1>
    <h2>Email: {formData.email}</h2>
    <h2>Phone: {formData.phone}</h2>
    <p>Message: {formData.message}</p>
    
  </div>
  )