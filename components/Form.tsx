'use client';

import React, { useState } from 'react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';

const Form: React.FC = () => {
    const [formData, setFormData] = useState({
        fullName: '',
        email: '',
        phone: '',
        message: ''
    });

    const handleChange = (Input: string, value: string | boolean) => {
        setFormData({ ...formData, [Input]: value });
    };

    const handleSubmit = () => {
        console.log('Form Data:', formData);

    };

    const sendEmail = async () => {
        const response = await fetch('/api/mail', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData),
        });

        if (response.status === 200) {
            console.log('Email sent successfully');
        }
    }

    return (
        <div className="space-y-8 bg-secondary-navy p-6 rounded-[40px]">
            <div className="flex flex-col space-y-4">
                <div>
                    <label className="block text-sm font-medium text-muted-stone mb-2">Full Name</label>
                    <Input
                        type="text"
                        value={formData.fullName}
                        onChange={(e) => handleChange('fullName', e.target.value)}
                        className='bg-[#0F3541] border-gray-700 h-[50px] text-muted-stone rounded-[20px]'
                        placeholder='Full Name'
                    />
                </div>
                <div>
                    <label className="block text-sm font-medium text-gray-400 mb-2">Email</label>
                    <Input
                        type="email"
                        value={formData.email}
                        onChange={(e) => handleChange('email', e.target.value)}
                        className='bg-[#0F3541] border-gray-700 h-[50px] text-muted-stone rounded-[20px]'
                        placeholder='Email'
                    />
                </div>
                <div>
                    <label className="block text-sm font-medium text-gray-400 mb-2">Phone</label>
                    <Input
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => handleChange('phone', e.target.value)}
                        className='bg-[#0F3541] border-gray-700 h-[50px] text-muted-stone rounded-[20px]'
                        placeholder='Phone'
                    />
                </div>
                <div>
                    <label className="block text-sm font-medium text-gray-400 mb-2">Message</label>
                    <Textarea
                        value={formData.message}
                        onChange={(e) => handleChange('message', e.target.value)}
                        className='bg-[#0F3541] border-gray-700 h-[50px] text-muted-stone rounded-[20px]'
                        placeholder='Message'
                    />
                </div>
            </div>

            <div className="flex justify-end mt-4">
                <Button type="button" onClick={sendEmail} className='btn items-center justify-center'>
                    Submit
                </Button>

            </div>
        </div>
    );
};

export default Form;
