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
			style={{
				background: 'var(--card)',
				transition: 'all 0.2s ease-in-out',
				height: '100%',
				display: 'flex',
				flexDirection: 'column',
			}}
			data-id={id}
		>
			<div
				style={{
					display: 'grid',
					gridTemplateColumns: '1fr 2fr',
					gap: '40px',
					height: '100%',
				}}
			>
				{/* Text Content Column */}
				<div
					style={{
						display: 'flex',
						flexDirection: 'column',
						justifyContent: 'center',
					}}
				>
					<h3
						style={{
							color: '#0D0E17',
							fontFamily: 'Bricolage Grotesque',
							fontSize: '22px',
							fontStyle: 'normal',
							fontWeight: '400',
							lineHeight: '127.273%',
							marginBottom: '0.5rem',
							margin: '0 0 0.5rem 0',
						}}
					>
						{title}
					</h3>
					<h4
						style={{
							color: '#5E5E73',
							fontFamily: 'Inter',
							fontSize: '14px',
							fontStyle: 'normal',
							fontWeight: '500',
							lineHeight: '142.857%',
							letterSpacing: '0.1px',
							marginBottom: '1rem',
							margin: '0 0 1rem 0',
						}}
					>
						{subtitle}
					</h4>
					<p
						style={{
							color: '#43435B',
							fontFamily: 'Inter',
							fontSize: '14px',
							fontStyle: 'normal',
							fontWeight: '400',
							lineHeight: '142.857%',
							letterSpacing: '0.25px',
							marginBottom: '0',
							flex: '1',
							margin: '0',
						}}
					>
						{description}
					</p>
				</div>

				{/* Image Carousel Column */}
				{images.length > 0 && (
					<div
						style={{
							display: 'flex',
							alignItems: 'center',
							justifyContent: 'center',
						}}
					>
						<div
							style={{
								position: 'relative',
								width: '100%',
								height: '300px',
								borderRadius: '0.375rem',
								overflow: 'hidden',
								background: '#f3f4f6',
							}}
						>
							<img
								src={images[currentImageIndex]}
								alt={`${title} - Image ${currentImageIndex + 1}`}
								style={{
									width: '100%',
									height: '100%',
									objectFit: 'cover',
									transition: 'opacity 0.3s ease-in-out',
								}}
							/>

							{images.length > 1 && (
								<>
									<button
										onClick={prevImage}
										style={{
											position: 'absolute',
											top: '50%',
											left: '10px',
											transform: 'translateY(-50%)',
											background: 'rgba(0, 0, 0, 0.5)',
											color: 'white',
											border: 'none',
											borderRadius: '50%',
											width: '40px',
											height: '40px',
											display: 'flex',
											alignItems: 'center',
											justifyContent: 'center',
											fontSize: '1.5rem',
											fontWeight: 'bold',
											cursor: 'pointer',
											transition: 'all 0.2s ease-in-out',
											zIndex: '10',
										}}
										aria-label="Previous image"
									>
										‹
									</button>
									<button
										onClick={nextImage}
										style={{
											position: 'absolute',
											top: '50%',
											right: '10px',
											transform: 'translateY(-50%)',
											background: 'rgba(0, 0, 0, 0.5)',
											color: 'white',
											border: 'none',
											borderRadius: '50%',
											width: '40px',
											height: '40px',
											display: 'flex',
											alignItems: 'center',
											justifyContent: 'center',
											fontSize: '1.5rem',
											fontWeight: 'bold',
											cursor: 'pointer',
											transition: 'all 0.2s ease-in-out',
											zIndex: '10',
										}}
										aria-label="Next image"
									>
										›
									</button>

									<div
										style={{
											position: 'absolute',
											bottom: '10px',
											left: '50%',
											transform: 'translateX(-50%)',
											display: 'flex',
											gap: '8px',
											zIndex: '10',
										}}
									>
										{images.map((_, index) => (
											<button
												key={index}
												onClick={() => setCurrentImageIndex(index)}
												style={{
													width: '8px',
													height: '8px',
													borderRadius: '50%',
													background:
														index === currentImageIndex
															? 'white'
															: 'rgba(255, 255, 255, 0.5)',
													border: 'none',
													cursor: 'pointer',
													transition: 'all 0.2s ease-in-out',
												}}
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
