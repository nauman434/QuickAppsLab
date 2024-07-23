import { client } from '@/lib/sanity';

async function getBlogSlugs(): Promise<string[]> {
    const query = `
    *[_type == 'blog'] {
        "slug": slug.current
    }
    `;

    const data = await client.fetch(query);

    return data.map((item: { slug: string }) => item.slug);
}

export default async function sitemap() {
    const baseUrl = 'https://QuickAppsLab.com';

    const blogSlugs = await getBlogSlugs();

    const blogUrls = blogSlugs.map(slug => ({
        url: `${baseUrl}/integrations/${slug}`,
        lastModified: new Date()
    }));

    const staticUrls = [
        {
            url: baseUrl,
            lastModified: new Date()
        }
    ];

    return [...staticUrls, ...blogUrls];
}
