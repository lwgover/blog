export const get = async () => {
    const res = await fetch(import.meta.env.VITE_BASE_ENDPOINT + '/posts/posts.json');
    const data = await res.json();
    const body = render(data.posts);
    const headers = {
      'Cache-Control': `max-age=0, s-max-age=${600}`,
      'Content-Type': 'application/xml',
    };
    return {
      body,
      headers,
    };
  };
  
  const render = (posts) => `<?xml version="1.0" encoding="UTF-8" ?>
  <rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
  <atom:link href="http://blog.lucasgover.com/rss" rel="self" type="application/rss+xml" />
  <title>Lucas Gover</title>
  <link>https://www.lucasgover.com</link>
  <description></description>
  ${posts
    .map(
      (post) => `<item>
  <guid>https://www.davidwparker.com/posts/${post.slug}</guid>
  <title>${post.title}</title>
  <link>https://www.davidwparker.com/posts/${post.slug}</link>
  <description>${post.description}</description>
  <pubDate>${new Date(post.published).toUTCString()}</pubDate>
  </item>`
    )
    .join('')}
  </channel>
  </rss>
  `;