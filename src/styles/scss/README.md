# SCSS Structure

This folder contains all SCSS files that compile to `src/app/globals.css`.

## 📁 File Structure

```
src/styles/scss/
├── _variables.scss      # SCSS variables (fonts, spacing, etc.)
├── _colors.scss         # Color variables and theme maps
├── _typography.scss     # Typography mixins and utilities
├── _mixins.scss         # Reusable SCSS mixins
├── main.scss           # Main file that imports all partials
└── README.md           # This file
```

## 🎨 How to Use

### **Variables (`_variables.scss`)**

Define all your SCSS variables here:

```scss
$font-size-base: 1rem;
$spacing-md: 1rem;
$radius-md: 0.375rem;
```

### **Colors (`_colors.scss`)**

Manage your color system:

```scss
// Light theme colors
$colors-light: (
	background: oklch(1 0 0),
	foreground: oklch(0.129 0.042 264.695),
	// ... more colors
);

// Dark theme colors
$colors-dark: (
	background: oklch(0.129 0.042 264.695),
	foreground: oklch(0.984 0.003 247.858),
	// ... more colors
);
```

### **Typography (`_typography.scss`)**

Typography mixins and utilities:

```scss
@mixin heading-1 {
	font-family: $font-bricolage-grotesque;
	font-size: $font-size-6xl;
	font-weight: $font-weight-bold;
}

// Usage in components:
.my-heading {
	@include heading-1;
}
```

### **Mixins (`_mixins.scss`)**

Reusable SCSS mixins:

```scss
@mixin flex-center {
	display: flex;
	align-items: center;
	justify-content: center;
}

// Usage:
.my-component {
	@include flex-center;
}
```

## 🔧 Compilation

### **Development (Watch Mode)**

```bash
npm run dev
```

This runs `sass --watch` in the background, automatically compiling SCSS to CSS on save.

### **Build**

```bash
npm run build
```

This compiles SCSS to CSS before building the Next.js app.

### **Manual Compilation**

```bash
# Build once
npm run scss:build

# Watch for changes
npm run scss:watch
```

## 📝 Workflow

1. **Edit SCSS files** in `src/styles/scss/`
2. **Save the file** - it automatically compiles to `src/app/globals.css`
3. **Use the compiled CSS** - Next.js will use the compiled `globals.css`

## 🎯 Best Practices

- **Variables**: Define all values in `_variables.scss`
- **Colors**: Use the color maps in `_colors.scss`
- **Typography**: Use the typography mixins in `_typography.scss`
- **Mixins**: Create reusable mixins in `_mixins.scss`
- **Organization**: Keep related styles together in appropriate partials

## 🔄 Integration with Tailwind

The SCSS system works alongside Tailwind CSS:

- **SCSS**: For custom styles, mixins, and complex layouts
- **Tailwind**: For utility classes and rapid prototyping
- **Both**: Can be used together in the same component

## 📱 Responsive Design

Use the responsive mixins:

```scss
.my-component {
	@include mobile {
		// Mobile styles
	}

	@include desktop {
		// Desktop styles
	}
}
```
