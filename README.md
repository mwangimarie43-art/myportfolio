# Data Analyst & Scientist Portfolio

A modern, responsive React-based portfolio website designed specifically for data analysts and scientists.

## ✨ Features

- **About Section** - Bio, introduction, and key statistics
- **Projects Gallery** - Showcase your data projects with descriptions and technologies used
- **Skills** - Organized skills by category (Programming, Visualization, Machine Learning, etc.)
- **Experience** - Professional timeline with roles, companies, and responsibilities
- **Testimonials** - Client/colleague testimonials and endorsements
- **Contact Form** - Get in touch form with contact information
- **Responsive Design** - Works perfectly on desktop, tablet, and mobile devices
- **Modern Styling** - Clean, professional design with smooth animations

## 🚀 Quick Start

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Navigate to the portfolio directory:
```bash
cd portfolio
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and visit `http://localhost:5173`

## 📝 Customization

### Update Your Information

Edit `src/data.js` to add your personal information, projects, skills, and experience:

```javascript
const portfolioData = {
  personal: {
    name: "Your Name",
    title: "Data Analyst & Scientist",
    bio: "Your bio...",
    email: "your.email@example.com",
    phone: "+1 (555) 123-4567",
    location: "Your City, State"
  },
  // ... rest of your data
}
```

### Add/Edit Projects

Add new projects to the `projects` array in `src/data.js`:

```javascript
{
  id: 7,
  title: "Your Project Title",
  description: "Project description...",
  technologies: ["Python", "SQL", "Tableau"],
  icon: "📊"
}
```

### Customize Colors

Edit the CSS variables in `index.html` within the `<style>` tag:

```css
:root {
  --primary: #0066cc;
  --secondary: #004fa3;
  --accent: #00a3e0;
  --light-bg: #f5f7fa;
}
```

## 🏗️ Project Structure

```
portfolio/
├── src/
│   ├── components/          # React components
│   │   ├── Header.jsx
│   │   ├── Navigation.jsx
│   │   ├── About.jsx
│   │   ├── Projects.jsx
│   │   ├── Skills.jsx
│   │   ├── Experience.jsx
│   │   ├── Testimonials.jsx
│   │   ├── Contact.jsx
│   │   └── Footer.jsx
│   ├── App.jsx             # Main app component
│   ├── data.js             # Portfolio data
│   └── main.jsx            # React entry point
├── static/                 # Static assets
├── index.html              # HTML template
├── package.json            # Project dependencies
├── vite.config.js          # Vite configuration
└── README.md               # This file
```

## 🎨 Sections Explained

### Header
Displays your name and professional title with a gradient background.

### Navigation
Sticky navigation bar with smooth scrolling to different sections.

### About
Introduces you with a bio and key statistics about your career.

### Projects
Gallery of your data projects with cards showing:
- Project title and description
- Technologies used
- Emoji icon for visual appeal

### Skills
Organized skills by category:
- Programming & Tools
- Data Visualization
- Machine Learning
- Big Data & Cloud
- Databases
- Statistical Analysis

### Experience
Timeline of your professional positions with:
- Job title and company
- Duration
- Description of responsibilities

### Testimonials
Client or colleague testimonials showcasing your impact.

### Contact
Contact form and contact information for visitors to reach out.

## 📦 Build for Production

To build your portfolio for deployment:

```bash
npm run build
```

This creates a `dist/` folder with optimized production files.

## 🚢 Deployment Options

### GitHub Pages
1. Build your project: `npm run build`
2. Push the `dist` folder to your GitHub repository
3. Enable GitHub Pages in repository settings

### Netlify
1. Connect your GitHub repository to Netlify
2. Set build command: `npm run build`
3. Set publish directory: `dist`

### Vercel
1. Connect your GitHub repository to Vercel
2. Vercel will auto-detect your Vite config
3. Deploy with one click

### Traditional Hosting
1. Build your project: `npm run build`
2. Upload the `dist` folder to your web hosting

## 💡 Tips for Best Results

1. **Use High-Quality Descriptions** - Clearly describe your projects and impact
2. **Add Relevant Keywords** - Include technologies and methodologies relevant to your field
3. **Quantify Achievements** - Use metrics and percentages (e.g., "Improved accuracy by 25%")
4. **Keep It Updated** - Regularly add new projects and experiences
5. **Personalize the Colors** - Match your brand or professional style
6. **Add Links** - Include links to GitHub, LinkedIn, and project demos

## 🔧 Advanced Customization

### Add More Sections
Create new component files in `src/components/` and import them in `App.jsx`.

### Add Images
Place images in the `static/` folder and reference them in your components:
```javascript
<img src="/images/your-image.png" alt="Description" />
```

### Add Blog Section
Create a `Blog.jsx` component and add blog posts to `src/data.js`.

### Add Dark Mode
Add CSS variables for dark theme and toggle functionality.

## 📄 License

Feel free to use this template for your portfolio.

## ❓ Need Help?

- Review the React documentation: https://react.dev
- Vite documentation: https://vitejs.dev
- Check existing component implementations for examples

---

**Good luck with your portfolio! 🎉
