import rss, { pagesGlobToRssItems } from '@astrojs/rss';

export async function GET(context) {
  return rss({
    title: 'pixoul\'s personal website',
    description: 'My personal website including a blog, an overview of projects I\'m proud of, as well as various links.',
    site: context.site,
    items: await pagesGlobToRssItems(import.meta.glob('./**/*.md')),
    customData: `<language>en-us</language>`,
  });
}
