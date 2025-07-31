# Work Samples Content System

This directory contains individual work sample content files that can be easily edited and managed.

## How to Use

### 1. Adding New Work Samples

To add a new work sample:

1. Create a new file in this directory (e.g., `sample-4.ts`)
2. Import the `WorkSampleProps` interface
3. Export your work sample data following this pattern:

```typescript
import { WorkSampleProps } from '@/components/work-sample';

export const sample4: WorkSampleProps = {
	id: 'sample-4',
	title: 'Your Project Title',
	subtitle: 'Brief project description',
	description: 'Detailed description of your project and its features.',
	images: [
		'/images/projects/your-project-1.webp',
		'/images/projects/your-project-2.webp',
		'/images/projects/your-project-3.webp',
	],
};
```

### 2. Updating the Index File

After creating a new work sample file, update `index.ts` to include it:

```typescript
import { sample4 } from './sample-4';

export const workSamples = {
	sample1,
	sample2,
	sample3,
	sample4, // Add your new sample
};

export { sample1, sample2, sample3, sample4 };

export const workSamplesArray = [sample1, sample2, sample3, sample4];
```

### 3. Displaying Work Samples

You can display work samples in several ways:

#### Method 1: Display all samples

```tsx
import { WorkSamplesContainer } from '@/components/work-samples-container';
import { workSamplesArray } from '@/content/work-samples';

<WorkSamplesContainer samples={workSamplesArray} />;
```

#### Method 2: Display individual samples

```tsx
import { WorkSample } from '@/components/work-sample';
import { sample1 } from '@/content/work-samples';

<WorkSample {...sample1} />;
```

#### Method 3: Custom ordering

```tsx
import { WorkSample } from '@/components/work-sample';
import { sample1, sample2, sample3 } from '@/content/work-samples';

<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
	<WorkSample {...sample3} />
	<WorkSample {...sample1} />
	<WorkSample {...sample2} />
</div>;
```

## File Structure

```
src/content/work-samples/
├── index.ts              # Exports all work samples
├── sample-1.ts           # Individual work sample content
├── sample-2.ts           # Individual work sample content
├── sample-3.ts           # Individual work sample content
└── README.md            # This documentation
```

## WorkSampleProps Interface

```typescript
interface WorkSampleProps {
	id: string; // Unique identifier
	title: string; // Project title
	subtitle: string; // Brief project description
	description: string; // Detailed project description
	images: string[]; // Array of image URLs for the carousel
}
```

## Features

- **Image Carousel**: Each work sample includes a horizontal image carousel with navigation buttons and indicators
- **Responsive Design**: Components adapt to different screen sizes
- **Accessibility**: Carousel includes proper ARIA labels and keyboard navigation
- **Smooth Transitions**: Images transition smoothly with hover effects

## Benefits of This System

1. **Individual File Management**: Each work sample is in its own file, making it easy to edit content
2. **Type Safety**: TypeScript ensures all required fields are provided
3. **Flexible Display**: Multiple ways to display and order work samples
4. **Scalable**: Easy to add new work samples without touching existing code
5. **Maintainable**: Clear separation between content and presentation
