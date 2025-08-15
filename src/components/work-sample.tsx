'use client';

import React, { useState } from 'react';

export interface WorkSampleProps {
	id: string;
	title: string;
	subtitle: string;
	description: string;
	images: string[];
}

export const WorkSample: React.FC<WorkSampleProps> = ({ id, title, subtitle, description, images }) => {
	const [currentImageIndex, setCurrentImageIndex] = useState(0);
	const [isModalOpen, setIsModalOpen] = useState(false);
	const [modalImageIndex, setModalImageIndex] = useState(0);

	const nextImage = () => {
		setCurrentImageIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
	};

	const prevImage = () => {
		setCurrentImageIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
	};

	const openModal = (index: number) => {
		setModalImageIndex(index);
		setIsModalOpen(true);
	};

	const closeModal = () => {
		setIsModalOpen(false);
	};

	const nextModalImage = () => {
		setModalImageIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
	};

	const prevModalImage = () => {
		setModalImageIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
	};

	return (
		<>
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
								<div
									style={{
										position: 'relative',
										width: '100%',
										height: '100%',
										overflow: 'hidden',
									}}
								>
									<div
										style={{
											display: 'flex',
											width: `${images.length * 100}%`,
											height: '100%',
											transform: `translateX(-${(currentImageIndex * 100) / images.length}%)`,
											transition: 'transform 0.3s ease-in-out',
											gap: '8px',
										}}
									>
										{images.map((image, index) => (
											<div
												key={index}
												style={{
													width: `${100 / images.length}%`,
													height: '100%',
													boxSizing: 'border-box',
												}}
											>
												<img
													src={image}
													alt={`${title} - Image ${index + 1}`}
													style={{
														width: '100%',
														height: '100%',
														objectFit: 'cover',
														border: '4px solid #1F2033',
														borderRadius: '8px',
														cursor: 'pointer',
														transition: 'transform 0.2s ease-in-out',
														boxSizing: 'border-box',
													}}
													onClick={() => openModal(index)}
													onMouseEnter={(e) => {
														e.currentTarget.style.transform = 'scale(1.02)';
													}}
													onMouseLeave={(e) => {
														e.currentTarget.style.transform = 'scale(1)';
													}}
												/>
											</div>
										))}
									</div>
								</div>

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
														background: index === currentImageIndex ? 'white' : 'rgba(255, 255, 255, 0.5)',
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

			{/* Modal for full-size image viewing */}
			{isModalOpen && (
				<div
					style={{
						position: 'fixed',
						top: 0,
						left: 0,
						right: 0,
						bottom: 0,
						background: 'rgba(0, 0, 0, 0.9)',
						display: 'flex',
						alignItems: 'center',
						justifyContent: 'center',
						zIndex: 1000,
						padding: '20px',
					}}
					onClick={closeModal}
				>
					<div
						style={{
							position: 'relative',
							maxWidth: '90vw',
							maxHeight: '90vh',
						}}
						onClick={(e) => e.stopPropagation()}
					>
						<img
							src={images[modalImageIndex]}
							alt={`${title} - Image ${modalImageIndex + 1}`}
							style={{
								maxWidth: '100%',
								maxHeight: '100%',
								objectFit: 'contain',
								borderRadius: '8px',
							}}
						/>

						{/* Close button */}
						<button
							onClick={closeModal}
							style={{
								position: 'absolute',
								top: '-40px',
								right: '0',
								background: 'rgba(255, 255, 255, 0.2)',
								color: 'white',
								border: 'none',
								borderRadius: '50%',
								width: '32px',
								height: '32px',
								display: 'flex',
								alignItems: 'center',
								justifyContent: 'center',
								fontSize: '1.2rem',
								cursor: 'pointer',
								transition: 'all 0.2s ease-in-out',
							}}
							aria-label="Close modal"
						>
							×
						</button>

						{/* Navigation arrows in modal */}
						{images.length > 1 && (
							<>
								<button
									onClick={prevModalImage}
									style={{
										position: 'absolute',
										top: '50%',
										left: '-50px',
										transform: 'translateY(-50%)',
										background: 'rgba(255, 255, 255, 0.2)',
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
									}}
									aria-label="Previous image"
								>
									‹
								</button>
								<button
									onClick={nextModalImage}
									style={{
										position: 'absolute',
										top: '50%',
										right: '-50px',
										transform: 'translateY(-50%)',
										background: 'rgba(255, 255, 255, 0.2)',
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
									}}
									aria-label="Next image"
								>
									›
								</button>

								{/* Image counter */}
								<div
									style={{
										position: 'absolute',
										bottom: '-40px',
										left: '50%',
										transform: 'translateX(-50%)',
										color: 'white',
										fontSize: '14px',
										background: 'rgba(0, 0, 0, 0.5)',
										padding: '8px 16px',
										borderRadius: '20px',
									}}
								>
									{modalImageIndex + 1} of {images.length}
								</div>
							</>
						)}
					</div>
				</div>
			)}
		</>
	);
};
