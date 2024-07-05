export default {
    name: 'blog',
    type: 'document',
    title: 'Blog',
    fields: [
        {
            name: 'title',
            type: 'string',
            title: 'Title'
        },
        {
            name: 'company',
            type: 'string',
            title: 'Company'
        },
        {
            name: 'slug',
            type: 'slug',
            title: 'Slug',
            options: {
                source: 'title',
            }
        },
        {
            name: 'image',
            type: 'image',
            title: 'Logo',
        },
        {
            name: 'smallDescription',
            type: 'text',
            title: 'Small Description',
        },
        {
            name: 'content',
            type: 'array',
            title: 'Content',
            of: [
                { type: 'block' },
            ]
        },
        {
            name: 'keyBenefits',
            type: 'array',
            title: 'Key Benefits',
            of: [
                {
                    type: 'object',
                    fields: [
                        {
                            name: 'heading',
                            type: 'string',
                            title: 'Heading'
                        },
                        {
                            name: 'description',
                            type: 'text',
                            title: 'Description'
                        }
                    ],
                    preview: {
                        select: {
                            title: 'heading',
                            subtitle: 'description'
                        }
                    }
                }
            ]
        },
        {
            name: 'offer',
            type: 'array',
            title: 'Offer',
            of: [
                {
                    type: 'object',
                    fields: [
                        {
                            name: 'heading',
                            type: 'string',
                            title: 'Heading'
                        },
                        {
                            name: 'description',
                            type: 'text',
                            title: 'Description'
                        }
                    ],
                    preview: {
                        select: {
                            title: 'heading',
                            subtitle: 'description'
                        }
                    }
                }
            ]
        },
        {
            name: 'steps',
            type: 'array',
            title: 'Steps',
            of: [
                {
                    type: 'object',
                    fields: [
                        {
                            name: 'heading',
                            type: 'string',
                            title: 'Heading'
                        },
                        {
                            name: 'description',
                            type: 'text',
                            title: 'Description'
                        }
                    ],
                    preview: {
                        select: {
                            title: 'heading',
                            subtitle: 'description'
                        }
                    }
                }
            ]
        },
        {
            name: 'chooseUs',
            type: 'array',
            title: 'Choose Us',
            of: [
                {
                    type: 'object',
                    fields: [
                        {
                            name: 'heading',
                            type: 'string',
                            title: 'Heading'
                        },
                        {
                            name: 'description',
                            type: 'text',
                            title: 'Description'
                        }
                    ],
                    preview: {
                        select: {
                            title: 'heading',
                            subtitle: 'description'
                        }
                    }
                }
            ]
        },
        {
            name: 'faqs',
            type: 'array',
            title: 'FAQs',
            of: [
                {
                    type: 'object',
                    fields: [
                        {
                            name: 'heading',
                            type: 'string',
                            title: 'Heading'
                        },
                        {
                            name: 'description',
                            type: 'text',
                            title: 'Description'
                        }
                    ],
                    preview: {
                        select: {
                            title: 'heading',
                            subtitle: 'description'
                        }
                    }
                }
            ]
        },
        {
            name: 'testimonial',
            type: 'array',
            title: 'Testimonial',
            of: [
                {
                    type: 'object',
                    fields: [
                        {
                            name: 'name',
                            type: 'string',
                            title: 'Name'
                        },
                        {
                            name: 'quote',
                            type: 'text',
                            title: 'Quote'
                        },
                        {
                            name: 'occupation',
                            type: 'string',
                            title: 'Occupation'
                        }
                    ],
                    preview: {
                        select: {
                            title: 'name',
                            subtitle: 'occupation',
                            description: 'quote'
                        }
                    }
                }
            ]
        }
    ]
}
