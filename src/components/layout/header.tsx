'use client';

import React from 'react';
import { ThemeToggle } from '@/components/theme/theme-toggle';

export const Header: React.FC = () => {
	return (
		<header
			style={{
				position: 'fixed',
				top: '0',
				left: '40px',
				width: '213px',
				background: 'var(--sidebar)',
				paddingTop: '72px',
				paddingLeft: '0',
				paddingRight: '0',
				paddingBottom: '64px',
				borderRadius: '0 0 5px 5px',
				color: 'var(--sidebar-foreground)',
				zIndex: '10',
			}}
		>
			<div
				style={{
					position: 'absolute',
					bottom: '0',
					left: '0',
					right: '0',
					height: '8px',
					background: 'var(--gradient-spectrum-050)',
					borderRadius: '0 0 5px 5px',
				}}
			/>
			<div
				style={{
					position: 'absolute',
					bottom: '-8px',
					left: '0',
					right: '0',
					height: '8px',
					background: 'var(--gradient-spectrum-050)',
					borderRadius: '0 0 5px 5px',
					filter: 'blur(4px)',
					opacity: '0.6',
				}}
			/>
			<img
				src="/portfolio-site/images/logo-aaron-sleeper.svg"
				alt="Aaron Sleeper Logo"
				style={{
					width: '32px',
					height: '32px',
					marginBottom: '16px',
					marginLeft: '16px',
				}}
			/>
			<h1 style={{ textAlign: 'left', margin: '0', padding: '0' }}>
				<span
					style={{
						display: 'block',
						color: 'var(--sidebar-foreground)',
						fontFamily: 'Bricolage Grotesque',
						fontSize: '45px',
						fontStyle: 'normal',
						fontWeight: '500',
						lineHeight: '106.667%',
						marginBottom: '24px',
						marginLeft: '16px',
						marginRight: '16px',
					}}
				>
					Aaron Sleeper
				</span>
				<span
					style={{
						display: 'block',
						color: 'var(--sidebar-foreground-secondary)',
						fontFamily: 'Inter',
						fontSize: '14px',
						fontStyle: 'normal',
						fontWeight: '500',
						lineHeight: '142.857%',
						letterSpacing: '0.1px',
						marginBottom: '8px',
						marginLeft: '16px',
						marginRight: '16px',
					}}
				>
					Product Designer
				</span>
				<span
					style={{
						display: 'block',
						color: 'var(--sidebar-foreground-tertiary)',
						fontFamily: 'Inter',
						fontSize: '12px',
						fontStyle: 'normal',
						fontWeight: '500',
						lineHeight: '133.333%',
						letterSpacing: '0.5px',
						marginLeft: '16px',
						marginRight: '16px',
					}}
				>
					San Diego, CA
				</span>
			</h1>
		</header>
	);
};
