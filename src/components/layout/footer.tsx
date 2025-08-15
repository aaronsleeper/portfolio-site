export const Footer: React.FC = () => {
	return (
		<footer
			style={{
				position: 'fixed',
				bottom: '40px',
				left: '40px',
				width: '213px',
				display: 'flex',
				flexDirection: 'column',
			}}
		>
			<div
				style={{
					height: '56px',
					borderRadius: '5px',
					background: 'var(--sidebar)',
					display: 'flex',
					alignItems: 'center',
					paddingLeft: '0.5rem',
					boxShadow: '0 2px 7px 0 rgba(0, 0, 0, 0.15), 0 5px 17px 0 rgba(0, 0, 0, 0.20)',
					position: 'relative',
				}}
			>
				<img
					src="/portfolio-site/images/icon-component-instance.svg"
					alt="Contact icon"
					style={{
						width: '24px',
						height: '24px',
						marginRight: '0.5rem',
					}}
				/>
				<span
					style={{
						display: '-webkit-box',
						WebkitBoxOrient: 'vertical',
						WebkitLineClamp: '2',
						flex: '1 0 0',
						overflow: 'hidden',
						color: 'var(--sidebar-foreground)',
						textOverflow: 'ellipsis',
						fontFamily: 'Inter',
						fontSize: '11px',
						fontStyle: 'normal',
						fontWeight: '450',
						lineHeight: '145.455%',
						letterSpacing: '0.055px',
					}}
				>
					Reach me at{' '}
					<a
						href="mailto:aaronsleeper@gmail.com"
						style={{
							color: 'var(--sidebar-foreground)',
							textDecoration: 'none',
						}}
					>
						aaronsleeper@gmail.com
					</a>
				</span>
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
			</div>
		</footer>
	);
};
