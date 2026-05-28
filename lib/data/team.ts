export interface TeamMember {
  id: string;
  name: string;
  role: string;
  department: string;
  bio: string;
  image: string;
  social: {
    twitter?: string;
    linkedin?: string;
  };
}

export interface Award {
  year: number;
  title: string;
  organization: string;
  game?: string;
}

export interface TimelineEvent {
  year: number;
  title: string;
  description: string;
  milestone: boolean;
}

export const leadershipTeam: TeamMember[] = [];

export const studioTimeline: TimelineEvent[] = [
  {
    year: 2026,
    title: 'Ceres Studios Founded',
    description: 'Ceres Studios is born from a passion for creating unforgettable 2D gaming experiences. Our journey begins.',
    milestone: true,
  },
  {
    year: 2026,
    title: 'First Game Enters Development',
    description: 'Our debut 2D game enters active development. A handcrafted experience built with love — more details coming soon.',
    milestone: true,
  },
];

export const studioAwards: Award[] = [];
