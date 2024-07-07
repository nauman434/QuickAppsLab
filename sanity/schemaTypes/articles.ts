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
        name: 'smallImage',
        type: 'image',
        title: 'Small Image',
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
        name: 'trending',
        type: 'boolean',
        title: 'Trending',
        description: 'Mark this article as trending',
      },
      {
        name: 'categories',
        type: 'array',
        title: 'Categories',
        of: [
          {
            type: 'reference',
            to: [{ type: 'category' }]
          }
        ]
      }
    ]
  }
  