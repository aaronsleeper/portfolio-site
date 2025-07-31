import { WorkSamplesContainer } from '@/components/work-samples-container';
import { workSamplesArray } from '@/content/work-samples';

export default function Home() {
	return (
		<div className="container mx-auto px-4 py-16">
			{/* Lead-in Section */}
			<section className="mb-16 text-center">
				<img
					src="/images/emoji-wave.svg"
					alt="Waving emoji"
					className="w-16 h-16 mx-auto mb-6"
				/>
				<h2 className="text-3xl font-bold mb-4">
					I design transformative products.
				</h2>
				<p className="text-lg text-muted-foreground">
					A few projects I've contributed to include:
				</p>
			</section>

			{/* Work Samples Section */}
			<section>
				<WorkSamplesContainer samples={workSamplesArray} />
			</section>
		</div>
	);
}
