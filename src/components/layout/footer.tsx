import { ThemeToggle } from '@/components/theme/theme-toggle';

export function Footer() {
	return (
		<footer className="border-t">
			<div className="container py-8">
				<div className="flex items-center justify-between">
					<p className="text-sm text-muted-foreground">
						© {new Date().getFullYear()} Portfolio
					</p>
					<ThemeToggle />
				</div>

				<div className="flex items-center justify-center mt-6">
					<img
						src="/images/icon-component-instance.svg"
						alt="Contact icon"
						className="w-5 h-5 mr-2"
					/>
					<a
						href="mailto:aaronsleeper@gmail.com"
						className="text-sm text-muted-foreground hover:text-foreground transition-colors"
					>
						Reach me at aaronsleeper@gmail.com
					</a>
				</div>
			</div>
		</footer>
	);
}
