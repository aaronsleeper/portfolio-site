import React from 'react';
import { WorkSample, WorkSampleProps } from './work-sample';

interface WorkSamplesContainerProps {
	samples: WorkSampleProps[];
	title?: string;
	className?: string;
}

export const WorkSamplesContainer: React.FC<WorkSamplesContainerProps> = ({
	samples,
	title = 'Work Samples',
	className = '',
}) => {
	return (
		<section className={`work-samples-container ${className}`}>
			{title && (
				<h2 className="text-3xl font-bold text-center mb-8">{title}</h2>
			)}
			<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
				{samples.map((sample) => (
					<WorkSample
						key={sample.id}
						{...sample}
					/>
				))}
			</div>
		</section>
	);
};
