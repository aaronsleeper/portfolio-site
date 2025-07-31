# Modern Portfolio Site

A modern, responsive portfolio website built with Next.js 15+, TypeScript, Tailwind CSS, and Shadcn UI. Features a themeable design with dark/light mode support and a clean, professional layout.

## 🚀 Features

- **Modern Tech Stack**: Next.js 15+ with App Router, TypeScript, and Tailwind CSS
- **Theme System**: Dark/light mode with system preference detection
- **Responsive Design**: Mobile-first approach with beautiful responsive layouts
- **Component Library**: Shadcn UI components for consistent design
- **Performance Optimized**: Built with performance and accessibility in mind
- **SEO Ready**: Optimized meta tags and structured data
- **Type Safe**: Full TypeScript support with proper type definitions

## 🛠️ Tech Stack

- **Framework**: Next.js 15+ with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Components**: Shadcn UI
- **Icons**: Lucide React
- **Fonts**: Geist Sans & Geist Mono

## 📁 Project Structure

```
src/
├── app/
│   ├── layout.tsx          # Root layout with theme provider
│   ├── page.tsx            # Home page
│   └── globals.css         # Global styles and theme variables
├── components/
│   ├── ui/                 # Shadcn UI components
│   ├── layout/
│   │   ├── header.tsx      # Navigation header
│   │   ├── footer.tsx      # Site footer
│   │   └── layout.tsx      # Main layout wrapper
│   └── theme/
│       ├── theme-provider.tsx  # Theme context provider
│       └── theme-toggle.tsx    # Theme toggle component
├── lib/
│   └── utils.ts            # Utility functions
└── types/
    └── index.ts            # TypeScript type definitions
```

## 🚀 Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn

### Installation

1. **Clone the repository**

   ```bash
   git clone <your-repo-url>
   cd portfolio-site
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Run the development server**

   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 🎨 Customization

### Theme Customization

The theme system uses CSS variables defined in `src/app/globals.css`. You can customize:

- **Colors**: Modify the CSS variables in the `:root` and `.dark` selectors
- **Typography**: Update font variables and sizes
- **Spacing**: Adjust the radius and spacing values

### Adding New Components

1. **Shadcn UI Components**

   ```bash
   npx shadcn@latest add <component-name>
   ```

2. **Custom Components**
   Create new components in the appropriate directory under `src/components/`

### Content Management

- **Home Page**: Edit `src/app/page.tsx`
- **Navigation**: Update `src/components/layout/header.tsx`
- **Footer**: Modify `src/components/layout/footer.tsx`
- **SEO**: Update metadata in `src/app/layout.tsx`

## 📱 Responsive Design

The site is built with a mobile-first approach using Tailwind CSS breakpoints:

- **Mobile**: Default styles (320px+)
- **Tablet**: `md:` prefix (768px+)
- **Desktop**: `lg:` prefix (1024px+)
- **Large Desktop**: `xl:` prefix (1280px+)

## 🎯 Performance

- **Image Optimization**: Next.js Image component for optimized images
- **Font Loading**: Optimized font loading with `next/font`
- **Code Splitting**: Automatic code splitting with Next.js
- **SEO**: Optimized meta tags and structured data

## 🔧 Development

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

### Adding New Pages

1. Create a new directory in `src/app/`
2. Add a `page.tsx` file
3. Update navigation in `src/components/layout/header.tsx`

### Styling Guidelines

- Use Tailwind CSS utility classes
- Follow the established color scheme
- Maintain consistent spacing using Tailwind's spacing scale
- Use semantic HTML elements
- Ensure accessibility with proper ARIA labels

## 🚀 Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Connect your repository to Vercel
3. Deploy automatically

### Other Platforms

The site can be deployed to any platform that supports Next.js:

- Netlify
- Railway
- DigitalOcean App Platform
- AWS Amplify

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

## 📞 Support

If you have any questions or need help, please open an issue on GitHub.

---

Built with ❤️ using Next.js, TypeScript, and Tailwind CSS
