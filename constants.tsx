import { 
  Mic, 
  Youtube, 
  Twitter, 
  Instagram, 
  Facebook, 
  MessageCircle, 
  Send,
  Headphones
} from 'lucide-react';
import { Host, Episode, SocialLink } from './types';

// Colors based on user request
export const COLORS = {
  accent: '#cc191a',
  bg: '#1a1c1b',
  bgAlt: '#272928',
  text: '#f1f1f1',
};

export const LINKS: SocialLink[] = [
  // Platforms
  { name: 'Spotify', url: 'https://open.spotify.com/show/248DTJayGh73lX1bXAhBRa?si=_0FgvHnURdC3mEz-g8RrBQ', icon: Headphones, category: 'platform' },
  { name: 'Apple Podcast', url: 'https://podcasts.apple.com/de/podcast/starting-grid/id1058868792', icon: Mic, category: 'platform' },
  { name: 'YouTube', url: 'https://www.youtube.com/@startinggrid_f1', icon: Youtube, category: 'platform' },
  { name: 'MeinSportPodcast', url: 'https://meinsportpodcast.de/motorsport/starting-grid/', icon: Headphones, category: 'platform' },
  // Socials
  { name: 'Instagram', url: 'https://instagram.com/startinggrid_f1', icon: Instagram, category: 'social' },
  { name: 'Twitter / X', url: 'https://twitter.com/startinggrid_f1', icon: Twitter, category: 'social' },
  { name: 'Facebook', url: 'https://www.facebook.com/MSPGrid', icon: Facebook, category: 'social' },
  // Community
  { name: 'Discord', url: 'https://discord.gg/aRaNvy9Qch', icon: MessageCircle, category: 'community' },
  { name: 'Telegram', url: 'https://t.me/StartingGrid', icon: Send, category: 'community' },
];

export const HOSTS: Host[] = [
  {
    name: 'Kevin Scheuren',
    role: 'Podcast Host & Videohost',
    image: 'https://picsum.photos/seed/kevin/400/600', // Placeholder
    socials: {
      twitter: 'kevin_scheuren',
      instagram: 'kevin_scheuren'
    }
  },
  {
    name: 'Dennis Lewandowski',
    role: 'Podcast Host & Videohost',
    image: 'https://picsum.photos/seed/dennis/400/600', // Placeholder
    socials: {
      twitter: 'dennis_lewan92',
      instagram: 'dennis_lewandowski'
    }
  }
];

export const EPISODES: Episode[] = [
  {
    id: '1',
    title: 'Neue Podcastfolge: Ordentlich durchgeschüttelt',
    date: '10. März 2024',
    duration: '1h 12m',
    description: 'Eine Analyse der turbulenten Ereignisse des letzten Rennwochenendes. Wir diskutieren die Strategien und die überraschenden Ausfälle.',
    image: 'https://picsum.photos/seed/ep1/600/400',
    tags: ['Rennanalyse', 'Drama']
  },
  {
    id: '2',
    title: 'Fahrerrankings 2025 - Wer holt den Titel?',
    date: '03. März 2024',
    duration: '58m',
    description: 'Kevin und Dennis werfen einen Blick in die Zukunft. Wie sehen die Fahrerkombinationen für 2025 aus und wer hat die besten Karten?',
    image: 'https://picsum.photos/seed/ep2/600/400',
    tags: ['Silly Season', '2025']
  },
  {
    id: '3',
    title: 'Watch2Gether: Rennen Abu Dhabi',
    date: '26. Februar 2024',
    duration: '2h 05m',
    description: 'Das große Saisonfinale im Re-Live. Unsere Live-Kommentare und Reaktionen zum Rennen in Abu Dhabi.',
    image: 'https://picsum.photos/seed/ep3/600/400',
    tags: ['Watchalong', 'Finale']
  }
];