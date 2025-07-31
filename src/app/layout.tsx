import type { Metadata } from 'next';
import { Inter, Bricolage_Grotesque } from 'next/font/google';
import './globals.css';
import { ThemeProvider } from '@/components/theme/theme-provider';
import { Layout } from '@/components/layout/layout';

const inter = Inter({
	variable: '--font-inter',
	subsets: ['latin'],
	display: 'swap',
});

const bricolageGrotesque = Bricolage_Grotesque({
	variable: '--font-bricolage-grotesque',
	subsets: ['latin'],
	display: 'swap',
});

export const metadata: Metadata = {
	title: 'Portfolio',
	description: 'A modern portfolio site',
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html
			lang="en"
			suppressHydrationWarning
		>
			<body
				className={`${inter.variable} ${bricolageGrotesque.variable} antialiased`}
			>
				<ThemeProvider
					defaultTheme="system"
					storageKey="portfolio-theme"
				>
					<Layout>{children}</Layout>
				</ThemeProvider>
			</body>
		</html>
	);
}
