export interface NewsArticle {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  category: 'announcement' | 'dev-diary' | 'update' | 'award' | 'community' | 'event';
  author: {
    name: string;
    role: string;
    avatar: string;
  };
  publishedAt: string;
  readTime: number;
  coverImage: string;
  tags: string[];
  featured: boolean;
  gameRef?: string;
}

export const newsArticles: NewsArticle[] = [
  {
    id: '1',
    slug: 'ceres-studios-founded-2026',
    title: 'Ceres Studios Is Officially Live — Our Journey Begins',
    excerpt: 'Today marks the official launch of Ceres Studios. We are a brand-new indie game studio with one mission: craft unforgettable 2D gaming experiences.',
    content: `Today is a big day for us. Ceres Studios is officially live.

We are a small, passionate indie game studio founded in 2026. What started as an ambitious idea is now becoming real — and we couldn't be more excited to share it with the world.

Our first game is already in active development. It's a 2D game — handcrafted with love, built with precision, and designed to leave a lasting impression. We're not ready to reveal the full details yet, but we promise: it's worth the wait.

We believe in the power of immersive storytelling, the excitement of perfectly crafted gameplay, and the wonder of exploring worlds that feel truly alive. Every pixel, every frame, every mechanic — it all matters to us.

Stay with us. Subscribe to our newsletter to be the first to hear about our game reveal, development updates, and everything in between.

This is just the beginning.

— The Ceres Studios Team`,
    category: 'announcement',
    author: {
      name: 'Ceres Studios',
      role: 'Studio Founder',
      avatar: '',
    },
    publishedAt: '2026-05-28',
    readTime: 3,
    coverImage: 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=1600&auto=format&fit=crop',
    tags: ['Studio Launch', 'Announcement', 'Indie', 'New Studio'],
    featured: true,
  },
  {
    id: '2',
    slug: 'first-game-in-development',
    title: 'Our First Game Is In Development — A 2D Adventure',
    excerpt: 'We are building our first game — a handcrafted 2D experience. Here\'s a glimpse into what we\'re making and why it matters to us.',
    content: `We're making a 2D game. And we're incredibly proud of it.

In a world of sprawling open worlds and photorealistic graphics, we chose to go back to something that we love deeply — 2D. Not because it's easier (it isn't), but because we believe 2D games have a unique power to tell stories and create moments that 3D simply can't replicate.

Our first game is currently deep in development. We're a small team, and every decision — from art style to gameplay mechanics to the story we're telling — has been made with intention.

We're not ready to share the full reveal just yet. But we will be soon.

What we can tell you:
- It's a 2D game built for PC
- It's a genre we love deeply
- The story is something we're personally connected to
- The art style is unique and carefully crafted

Follow us on social media and subscribe to our newsletter to be the first to know when we're ready to show the world what we've been building.

The reveal is coming.`,
    category: 'dev-diary',
    author: {
      name: 'Ceres Studios',
      role: 'Game Director',
      avatar: '',
    },
    publishedAt: '2026-05-28',
    readTime: 4,
    coverImage: 'https://images.unsplash.com/photo-1511512578047-dfb367046420?q=80&w=1600&auto=format&fit=crop',
    tags: ['2D Game', 'Dev Diary', 'First Project', 'In Development'],
    featured: false,
    gameRef: 'untitled-2d-game',
  },
  {
    id: '3',
    slug: 'why-we-started-ceres-studios',
    title: 'Why We Started Ceres Studios',
    excerpt: 'Every studio has a story. Here\'s ours — why we decided to build an indie game studio from the ground up, and what drives us forward.',
    content: `Every game studio starts somewhere. Ours started with a simple belief: that games can be more than entertainment. They can be art. They can be transformative experiences that stay with you for years.

We started Ceres Studios because we couldn't find the games we wanted to play. Games that felt handcrafted. Games that respected the player. Games with real stories to tell.

So we decided to build them ourselves.

Starting a game studio is not easy. It requires enormous amounts of passion, patience, and persistence. There are days when it's hard. But there are also days when you see something come to life on screen that didn't exist before — something you made — and those days make everything worth it.

We named our studio Ceres after the dwarf planet in our solar system. Small, often overlooked, but significant. We like that.

We are building something significant. Something that will surprise people.

We hope you'll follow along on this journey. It's going to be a great one.`,
    category: 'community',
    author: {
      name: 'Ceres Studios',
      role: 'Studio Founder',
      avatar: '',
    },
    publishedAt: '2026-05-28',
    readTime: 3,
    coverImage: 'https://images.unsplash.com/photo-1493711662062-fa541adb3fc8?q=80&w=1600&auto=format&fit=crop',
    tags: ['Studio Story', 'Indie Development', 'Community', 'Behind the Scenes'],
    featured: false,
  },
];

export const getFeaturedArticles = () => newsArticles.filter((a) => a.featured);
export const getArticleBySlug = (slug: string) => newsArticles.find((a) => a.slug === slug);
export const getArticlesByCategory = (category: string) =>
  newsArticles.filter((a) => a.category === category);
