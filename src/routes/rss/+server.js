import { fetchMarkdownPosts } from '$lib/utils';
import { json } from '@sveltejs/kit';

export const GET = async () => {
  const res = await fetchMarkdownPosts();
  const data = res;
  console.log(data);
  const xml = render(data);
  
  const headers = {
    'Cache-Control': `max-age=0, s-max-age=${600}`,
    'Content-Type': 'application/xml',
  };

  return new Response(xml,
    {
        headers: headers,
    }
    );
};

const render = (/** @type {any[]} */ posts) => `<?xml version="1.0" encoding="UTF-8" ?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <atom:link href="http://blog.lucasgover.com/rss" rel="self" type="application/rss+xml" />
    <title>Lucas's Blog</title>
    <link>https://blog.lucasgover.com</link>
    <description>This is where I write my sittle little thoughts</description>
    ${posts
      .map(
        (post) => `<item>
          <guid>https://blog.lucasgover.com${post.path}</guid>
          <title>${post.meta.title}</title>
          <link>https://blog.lucasgover.com${post.path}</link>
          <pubDate>${new Date(post.meta.date).toUTCString()}</pubDate>
        </item>`
      )
      .join('')}
  </channel>
</rss>`.trim();