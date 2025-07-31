'use client';

import React, { useState } from 'react';

export interface WorkSampleProps {
	id: string;
	title: string;
	subtitle: string;
	description: string;
	images: string[];
}

export const WorkSample: React.FC<WorkSampleProps> = ({
	id,
	title,
	subtitle,
	description,
	images,
}) => {
	const [currentImageIndex, setCurrentImageIndex] = useState(0);

	const nextImage = () => {
		setCurrentImageIndex((prevIndex) =>
			prevIndex === images.length - 1 ? 0 : prevIndex + 1
		);
	};

	const prevImage = () => {
		setCurrentImageIndex((prevIndex) =>
			prevIndex === 0 ? images.length - 1 : prevIndex - 1
		);
	};

	return (
		<div
			className="work-sample"
			data-id={id}
		>
			<div className="work-sample-layout">
				{/* Text Content Column */}
				<div className="work-sample-content">
					<h3 className="work-sample-title">{title}</h3>
					<h4 className="work-sample-subtitle">{subtitle}</h4>
					<p className="work-sample-description">{description}</p>
				</div>

				{/* Image Carousel Column */}
				{images.length > 0 && (
					<div className="work-sample-carousel">
						<div className="carousel-container">
							<img
								src={images[currentImageIndex]}
								alt={`${title} - Image ${currentImageIndex + 1}`}
								className="carousel-image"
							/>

							{images.length > 1 && (
								<>
									<button
										onClick={prevImage}
										className="carousel-button carousel-button-prev"
										aria-label="Previous image"
									>
										‹
									</button>
									<button
										onClick={nextImage}
										className="carousel-button carousel-button-next"
										aria-label="Next image"
									>
										›
									</button>

									<div className="carousel-indicators">
										{images.map((_, index) => (
											<button
												key={index}
												onClick={() => setCurrentImageIndex(index)}
												className={`carousel-indicator ${
													index === currentImageIndex ? 'active' : ''
												}`}
												aria-label={`Go to image ${index + 1}`}
											/>
										))}
									</div>
								</>
							)}
						</div>
					</div>
				)}
			</div>
		</div>
	);
};
