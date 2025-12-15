// sanity/schemas/article.js
import { defineField, defineType } from 'sanity';

export default defineType({
    name: 'article',
    title: 'Article',
    type: 'document',
    fields: [
        defineField({ name: 'title', title: 'Title', type: 'string' }),
        defineField({ name: 'coverImage', title: 'Cover Image', type: 'image' }),
        defineField({ name: 'body', title: 'Body Content', type: 'array', of: [{ type: 'block' }] }),
        defineField({ name: 'category', title: 'Category', type: 'string' }),
        defineField({ name: 'date', title: 'Date', type: 'datetime', options: { dateFormat: 'YYYY-MM-DD' }, initialValue: new Date().toISOString() }),
        defineField({ name: 'featured', title: 'Featured', type: 'boolean', initialValue: false }),
        defineField({ name: 'slug', title: 'Slug', type: 'slug', options: { source: 'title', maxLength: 96 } }),
        defineField({ name: 'shortDesc', title: 'Short Description', type: 'text', description: 'Optional: If empty, frontend can auto-generate.' }),
    ],
});
