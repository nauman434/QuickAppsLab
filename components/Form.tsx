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
        integrations: '',
        company: '',
        message: ''
    });

    const [errors, setErrors] = useState({
        fullName: '',
        email: '',
        phone: '',
        integrations: '',
        company: '',
        message: ''
    });

    const [isSubmitting, setIsSubmitting] = useState(false);

    const validate = () => {
        const newErrors = {
            fullName: '',
            email: '',
            phone: '',
            integrations: '',
            company: '',
            message: ''
        };

        if (!formData.fullName) newErrors.fullName = 'Full Name is required';
        if (!formData.email) {
            newErrors.email = 'Email is required';
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
            newErrors.email = 'Email address is invalid';
        }
        if (!formData.phone) {
            newErrors.phone = 'Phone number is required';
        } else if (!/^\d{10}$/.test(formData.phone)) {
            newErrors.phone = 'Phone number is invalid';
        }
        if (!formData.integrations) newErrors.integrations = 'Integration is required';
        if (!formData.company) newErrors.company = 'Company is required';
        if (!formData.message) newErrors.message = 'Message is required';

        setErrors(newErrors);

        return Object.values(newErrors).every(error => error === '');
    };

    const handleChange = (input: string, value: string) => {
        setFormData({ ...formData, [input]: value });
        setErrors({ ...errors, [input]: '' });
    };

    const handleSubmit = async () => {
        if (!validate()) {
            return;
        }

        setIsSubmitting(true);
        const response = await fetch('/api/mail', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData),
        });

        if (response.status === 200) {
            alert('Form submitted successfully');
            setFormData({
                fullName: '',
                email: '',
                phone: '',
                integrations: '',
                company: '',
                message: ''
            });
        } else {
            alert('There was an error submitting the form. Please try again.');
        }
        setIsSubmitting(false);
    }

    return (
        <div className="space-y-8 bg-secondary-navy p-6 rounded-[40px]">
            <div className="flex flex-col space-y-4">
                <div>
                    <Label className="block text-sm font-medium text-muted-stone mb-2">Full Name</Label>
                    <Input
                        type="text"
                        value={formData.fullName}
                        onChange={(e) => handleChange('fullName', e.target.value)}
                        className='bg-[#0F3541] border-gray-700 h-[50px] text-muted-stone rounded-[20px]'
                        placeholder='Full Name'
                    />
                    {errors.fullName && <p className="text-red-500">{errors.fullName}</p>}
                </div>
                <div>
                    <Label className="block text-sm font-medium text-gray-400 mb-2">Email</Label>
                    <Input
                        type="email"
                        value={formData.email}
                        onChange={(e) => handleChange('email', e.target.value)}
                        className='bg-[#0F3541] border-gray-700 h-[50px] text-muted-stone rounded-[20px]'
                        placeholder='Email'
                    />
                    {errors.email && <p className="text-red-500">{errors.email}</p>}
                </div>
                <div>
                    <Label className="block text-sm font-medium text-gray-400 mb-2">Phone</Label>
                    <Input
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => handleChange('phone', e.target.value)}
                        className='bg-[#0F3541] border-gray-700 h-[50px] text-muted-stone rounded-[20px]'
                        placeholder='Phone'
                    />
                    {errors.phone && <p className="text-red-500">{errors.phone}</p>}
                </div>
                <div>
                    <Label className="block text-sm font-medium text-muted-stone mb-2">Integration</Label>
                    <Input
                        type="text"
                        value={formData.integrations}
                        onChange={(e) => handleChange('integrations', e.target.value)}
                        className='bg-[#0F3541] border-gray-700 h-[50px] text-muted-stone rounded-[20px]'
                        placeholder='Integration'
                    />
                    {errors.integrations && <p className="text-red-500">{errors.integrations}</p>}
                </div>
                <div>
                    <Label className="block text-sm font-medium text-muted-stone mb-2">Company</Label>
                    <Input
                        type="text"
                        value={formData.company}
                        onChange={(e) => handleChange('company', e.target.value)}
                        className='bg-[#0F3541] border-gray-700 h-[50px] text-muted-stone rounded-[20px]'
                        placeholder='Company'
                    />
                    {errors.company && <p className="text-red-500">{errors.company}</p>}
                </div>
                <div>
                    <Label className="block text-sm font-medium text-gray-400 mb-2">Message</Label>
                    <Textarea
                        value={formData.message}
                        onChange={(e) => handleChange('message', e.target.value)}
                        className='bg-[#0F3541] border-gray-700 h-[150px] text-muted-stone rounded-[20px]'
                        placeholder='Message'
                    />
                    {errors.message && <p className="text-red-500">{errors.message}</p>}
                </div>
            </div>

            <div className="flex justify-end mt-4">
                <Button type="button" onClick={handleSubmit} disabled={isSubmitting} className='btn items-center justify-center'>
                    {isSubmitting ? 'Submitting...' : 'Submit'}
                </Button>
            </div>
        </div>
    );
};

export default Form;
