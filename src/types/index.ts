// Navigation types
export interface NavigationItem {
	name: string;
	href: string;
	description?: string;
}

// Social media types
export interface SocialLink {
	name: string;
	href: string;
	icon: React.ComponentType<{ className?: string }>;
}

// Project types
export interface Project {
	id: string;
	title: string;
	description: string;
	image: string;
	technologies: string[];
	githubUrl?: string;
	liveUrl?: string;
	featured?: boolean;
}

// Experience types
export interface Experience {
	id: string;
	company: string;
	position: string;
	startDate: string;
	endDate?: string;
	description: string;
	technologies: string[];
	achievements: string[];
}

// Skill types
export interface Skill {
	name: string;
	category: 'frontend' | 'backend' | 'database' | 'devops' | 'other';
	proficiency: 'beginner' | 'intermediate' | 'advanced' | 'expert';
}

// Contact form types
export interface ContactForm {
	name: string;
	email: string;
	subject: string;
	message: string;
}

// Theme types
export type Theme = 'light' | 'dark' | 'system';

// SEO types
export interface SEOProps {
	title: string;
	description: string;
	keywords?: string[];
	image?: string;
	url?: string;
}
