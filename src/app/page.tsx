import { WorkSamplesContainer } from '@/components/work-samples-container';
import { workSamplesArray } from '@/content/work-samples';
import './work-samples.css';

export default function Home() {
	return (
		<div>
			{/* Lead-in Section */}
			<section style={{ marginBottom: '160px' }}>
				<img
					src="/images/emoji-wave.svg"
					alt="Waving emoji"
					style={{
						width: '36px',
						height: '36px',
						marginBottom: '19px',
						display: 'block',
					}}
				/>
				<h2
					style={{
						color: '#1F2033',
						fontFamily: 'Bricolage Grotesque',
						fontSize: '45px',
						fontStyle: 'normal',
						fontWeight: '500',
						lineHeight: '48px',
						marginBottom: '19px',
						margin: '0 0 19px 0',
					}}
				>
					I design
					<br />
					transformative products.
				</h2>
				<p
					style={{
						color: '#43435B',
						fontFamily: 'Inter',
						fontSize: '14px',
						fontStyle: 'normal',
						fontWeight: '500',
						lineHeight: '142.857%',
						letterSpacing: '0.1px',
						margin: '0',
					}}
				>
					A few projects I&apos;ve contributed to include:
				</p>
			</section>

			{/* Work Samples Section */}
			<section>
				<WorkSamplesContainer samples={workSamplesArray} />
			</section>
		</div>
	);
}
