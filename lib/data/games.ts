export interface Game {
  id: string;
  slug: string;
  title: string;
  tagline: string;
  description: string;
  longDescription: string;
  genre: string[];
  platforms: string[];
  releaseDate: string;
  status: 'released' | 'coming-soon' | 'in-development';
  rating: number;
  coverImage: string;
  heroImage: string;
  screenshots: string[];
  trailerUrl: string;
  developer: string;
  publisher: string;
  awards: string[];
  tags: string[];
  featured: boolean;
  metacritic?: number;
}

export const games: Game[] = [
  {
    id: '1',
    slug: 'monkey-skate-escape',
    title: 'Monkey Skate Escape',
    tagline: 'Our first adventure — coming soon.',
    description: 'Monkey Skate Escape is a handcrafted 2D game currently in development at Ceresstudio. Details coming soon.',
    longDescription: `Our debut 2D title is currently in active development. 
    Stay tuned for more details, screenshots, and an official reveal. 
    This is our first project and we're pouring everything into it.`,
    genre: ['2D', 'Action', 'Adventure'],
    platforms: ['PC'],
    releaseDate: 'TBA',
    status: 'coming-soon',
    rating: 0,
    coverImage: '/images/zoo-upcoming-2d-game.png',
    heroImage: '',
    screenshots: [],
    trailerUrl: '',
    developer: 'Ceresstudio',
    publisher: 'Ceresstudio',
    awards: [],
    tags: ['2D', 'Singleplayer', 'Indie', 'Coming Soon'],
    featured: true,
    metacritic: undefined,
  },
];

export const getFeaturedGames = () => games.filter((g) => g.featured);
export const getGameBySlug = (slug: string) => games.find((g) => g.slug === slug);
export const getReleasedGames = () => games.filter((g) => g.status === 'released');
