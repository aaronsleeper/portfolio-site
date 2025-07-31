# Image Assets

This directory contains all image assets for the portfolio site.

## 📁 Directory Structure

```
public/images/
├── content/          # General content images (hero, features, etc.)
├── projects/         # Project screenshots and thumbnails
├── about/           # About page images (profile, team, etc.)
├── blog/            # Blog post images
└── README.md        # This file
```

## 🖼️ Image Guidelines

### **File Formats**

- **WebP**: Preferred for web (smaller file sizes)
- **PNG**: For images requiring transparency
- **JPG**: For photographs and complex images
- **SVG**: For icons and simple graphics

### **Naming Convention**

Use kebab-case for file names:

```
hero-background.webp
project-thumbnail-1.png
profile-photo.jpg
```

### **Image Optimization**

- **Hero images**: 1920x1080px max
- **Project thumbnails**: 600x400px
- **Profile photos**: 400x400px
- **Blog images**: 800x600px

## 📝 Usage Examples

### **1. Using Next.js Image Component (Recommended)**

```tsx
import Image from 'next/image';

// In your component
<Image
	src="/images/content/hero-background.webp"
	alt="Hero background image"
	width={1920}
	height={1080}
	priority
	className="w-full h-auto"
/>;
```

### **2. Using in CSS/SCSS**

```scss
.hero-section {
	background-image: url('/images/content/hero-background.webp');
	background-size: cover;
	background-position: center;
}
```

### **3. Using in Tailwind CSS**

```tsx
<div
	className="bg-cover bg-center bg-no-repeat"
	style={{ backgroundImage: "url('/images/content/hero-background.webp')" }}
>
	{/* Content */}
</div>
```

### **4. Responsive Images**

```tsx
import Image from 'next/image';

<Image
	src="/images/projects/project-thumbnail.webp"
	alt="Project thumbnail"
	width={600}
	height={400}
	sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
	className="w-full h-auto rounded-lg"
/>;
```

## 🎯 Best Practices

### **Performance**

- Use Next.js `Image` component for automatic optimization
- Specify `width` and `height` to prevent layout shift
- Use `priority` for above-the-fold images
- Use `sizes` attribute for responsive images

### **Accessibility**

- Always provide meaningful `alt` text
- Use descriptive file names
- Consider loading states for large images

### **Organization**

- Keep images organized by purpose
- Use consistent naming conventions
- Optimize images before adding to the project

## 📦 Adding New Images

1. **Place the image** in the appropriate directory
2. **Optimize the image** (compress, resize if needed)
3. **Use descriptive names** following the naming convention
4. **Update this README** if adding new directories

## 🔧 Image Optimization Tools

- **Online**: TinyPNG, Squoosh.app
- **CLI**: `imagemin`, `sharp`
- **Next.js**: Built-in optimization with `next/image`
