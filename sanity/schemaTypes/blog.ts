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
        
    ]
}