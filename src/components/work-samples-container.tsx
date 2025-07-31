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
			<div
				style={{
					display: 'flex',
					flexDirection: 'column',
					gap: '160px',
					width: '100%',
				}}
			>
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
