export default {
    name: 'articles',
    type: 'document',
    title: 'Articles',
    fields: [
        {
            name: 'title',
            type: 'string',
            title: 'Title'
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
            title: 'Main Image',
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