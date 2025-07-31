import { Header } from './header';
import { Footer } from './footer';

interface LayoutProps {
	children: React.ReactNode;
}

export function Layout({ children }: LayoutProps) {
	return (
		<div style={{ minHeight: '100vh', display: 'flex' }}>
			{/* Left Sidebar */}
			<div
				style={{
					width: '213px',
					display: 'flex',
					flexDirection: 'column',
					height: '100vh',
					position: 'relative',
				}}
			>
				<Header />
				<div style={{ flex: 1, marginTop: '350px' }}></div>
				<Footer />
			</div>

			{/* Main Content Area */}
			<main
				style={{
					flex: 1,
					marginLeft: '40px',
					maxWidth: '925px',
					width: '100%',
					padding: '2rem',
					paddingTop: '72px',
				}}
			>
				{children}
			</main>
		</div>
	);
}
