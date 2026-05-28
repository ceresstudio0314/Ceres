export interface JobPosting {
  id: string;
  title: string;
  department: string;
  location: string;
  type: 'full-time' | 'part-time' | 'contract' | 'internship';
  remote: 'remote' | 'hybrid' | 'on-site';
  experience: string;
  salary?: string;
  description: string;
  responsibilities: string[];
  requirements: string[];
  niceToHave: string[];
  postedAt: string;
  featured: boolean;
}

export const departments = [
  'Engineering',
  'Art & Design',
  'Game Design',
  'Audio',
];

export const jobPostings: JobPosting[] = [
  {
    id: '1',
    title: '2D Game Developer',
    department: 'Engineering',
    location: 'Remote / India',
    type: 'full-time',
    remote: 'remote',
    experience: '1+ years',
    description: 'Help us build our debut 2D game. You will work closely with the founder to implement gameplay systems, mechanics, and bring the game world to life.',
    responsibilities: [
      'Implement 2D gameplay systems — movement, combat, and interactions',
      'Collaborate directly with the game designer on new mechanics',
      'Help optimize and polish the game for PC release',
      'Participate in playtesting and iteration cycles',
    ],
    requirements: [
      'Experience developing 2D games (any engine)',
      'Passion for indie games and hands-on craftsmanship',
      'Ability to work independently in a small team',
      'Strong communication skills',
    ],
    niceToHave: [
      'Experience with Godot or Unity',
      'Love for 2D platformers or action games',
      'Any shipped personal or jam projects',
    ],
    postedAt: '2026-05-28',
    featured: true,
  },
  {
    id: '2',
    title: '2D Artist / Pixel Artist',
    department: 'Art & Design',
    location: 'Remote / India',
    type: 'full-time',
    remote: 'remote',
    experience: '1+ years',
    description: 'Create the visuals that define our studio\'s first game. From character sprites to environment tiles and UI elements, your art will shape the entire look and feel of our world.',
    responsibilities: [
      'Design and animate 2D character sprites and environments',
      'Create UI elements, icons, and HUD assets',
      'Maintain visual consistency across the game\'s art style',
      'Collaborate with the developer on animation implementation',
    ],
    requirements: [
      'Strong portfolio of 2D game art or pixel art',
      'Experience with Aseprite, Photoshop, or similar tools',
      'Understanding of animation principles for games',
      'Passion for crafting beautiful, hand-made art',
    ],
    niceToHave: [
      'Experience creating art for shipped indie games',
      'Background in game jam participation',
      'Interest in storytelling through visual design',
    ],
    postedAt: '2026-05-28',
    featured: true,
  },
  {
    id: '3',
    title: 'Game Designer',
    department: 'Game Design',
    location: 'Remote / India',
    type: 'full-time',
    remote: 'remote',
    experience: '0–2 years',
    description: 'Help design the gameplay systems, level layouts, and player experience for our debut 2D title. This is an ideal role for a passionate designer who wants to grow with an early-stage studio.',
    responsibilities: [
      'Design and document core gameplay mechanics and systems',
      'Create level layouts and progression structures',
      'Conduct and analyze playtesting sessions',
      'Write game design documentation and system specs',
    ],
    requirements: [
      'Strong understanding of game design fundamentals',
      'Experience prototyping game ideas (any medium)',
      'Analytical mindset with attention to player experience',
      'Clear communication skills for design documentation',
    ],
    niceToHave: [
      'Experience with any game engine (Godot, Unity, etc.)',
      'Personal game projects or game jam entries',
      'Interest in 2D action or platformer games',
    ],
    postedAt: '2026-05-28',
    featured: false,
  },
  {
    id: '4',
    title: 'Sound Designer / Composer',
    department: 'Audio',
    location: 'Remote',
    type: 'contract',
    remote: 'remote',
    experience: '1+ years',
    description: 'Create the audio identity for our first game — from sound effects to background music. We want an audio experience that complements our visual style and immerses players in our world.',
    responsibilities: [
      'Design and implement sound effects for gameplay events',
      'Compose original music tracks for different game sections',
      'Integrate audio into the game engine',
      'Collaborate with the team to ensure audio fits the game\'s tone',
    ],
    requirements: [
      'Portfolio demonstrating game audio or music composition',
      'Experience with DAW software (FL Studio, Ableton, etc.)',
      'Understanding of looping music and adaptive audio for games',
      'Passion for crafting immersive audio experiences',
    ],
    niceToHave: [
      'Experience with Godot or Unity audio integration',
      'Background in chiptune or synth-based music styles',
      'Previous indie game audio credits',
    ],
    postedAt: '2026-05-28',
    featured: false,
  },
];

export const getJobsByDepartment = (dept: string) =>
  jobPostings.filter((j) => j.department === dept);
export const getFeaturedJobs = () => jobPostings.filter((j) => j.featured);
