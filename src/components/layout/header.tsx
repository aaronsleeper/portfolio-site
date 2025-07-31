'use client';

import Link from 'next/link';

export function Header() {
	return (
		<header className="site-header">
			<img
				src="/images/logo-aaron-sleeper.svg"
				alt="Aaron Sleeper Logo"
				className="logo mb-4"
			/>
			<h1>
				<span className="name">Aaron Sleeper</span>
				<span className="role">Product Designer</span>
				<span className="location">San Diego, CA</span>
			</h1>
		</header>
	);
}
