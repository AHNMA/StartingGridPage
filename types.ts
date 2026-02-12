import React from 'react';

export interface Host {
  name: string;
  role: string;
  image: string;
  socials: {
    twitter?: string;
    instagram?: string;
  };
}

export interface Episode {
  id: string;
  title: string;
  date: string;
  duration: string;
  description: string;
  image: string;
  tags: string[];
}

export interface SocialLink {
  name: string;
  url: string;
  icon: React.FC<any>; // Using lucide-react types broadly
  category: 'platform' | 'social' | 'community';
}