# Johnny's MovieApps

A modern React-based web application that displays movies with detailed information, trailers, and routing capabilities. Built with React Router for seamless navigation between movie listings and detailed movie pages.

## Features

- **Movie Browsing**: Grid-based movie cards with hover effects
- **Movie Details**: Dedicated pages with descriptions, trailers, and metadata
- **Client-side Routing**: Navigate between home page and movie detail pages
- **Search Functionality**: Real-time movie search
- **Theme Toggle**: Dark/Light theme switching
- **Authentication UI**: Login/Signup modals (demo implementation)
- **Responsive Design**: Mobile-friendly layout
- **Modern Footer**: Professional footer with app information and links

## Technologies Used

- **React.js 18.2.0** - UI library
- **React Router Dom 6.8.1** - Client-side routing
- **CSS3** - Modern styling with animations and themes
- **The Movie Database (TMDb) API** - Movie data source
- **Create React App** - Development environment

## Project Structure

```
movie-app-react/
├── src/
│   ├── components/
│   │   ├── HomePage.js          # Main page with movie grid
│   │   ├── MovieDetails.js      # Individual movie pages
│   │   ├── MovieCard.js         # Reusable movie card component
│   │   ├── Header.js            # Navigation header
│   │   ├── AuthModal.js         # Login/signup modals
│   │   └── Footer.js            # Footer component
│   ├── styles/
│   │   ├── HomePage.css
│   │   ├── MovieDetails.css
│   │   ├── MovieCard.css
│   │   ├── Header.css
│   │   ├── AuthModal.css
│   │   └── Footer.css
│   ├── App.js                   # Main app with routing
│   └── index.js                 # Entry point
└── package.json
```

## Setup and Installation

1. **Clone the repository**
   ```bash
   git clone [repository-url]
   cd AI-project/movie-app-react
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm start
   ```

4. **Open your browser**
   Navigate to `http://localhost:3000`

## API Configuration

This project uses The Movie Database (TMDb) API. The API key is included for demo purposes, but for production use, you should:

1. Get your free API key from [TMDb](https://www.themoviedb.org/settings/api)
2. Replace the API key in the component files
3. Consider using environment variables for security

## Available Scripts

- `npm start` - Start development server
- `npm run build` - Build for production
- `npm test` - Run tests
- `npm run eject` - Eject from Create React App (one-way operation)

## Features Overview

### Movie Cards
- Hover animations and effects
- Star ratings display
- Click to navigate to details page

### Movie Details Pages
- Full movie descriptions
- Embedded YouTube trailers
- Movie metadata (release date, runtime, genres)
- Back navigation to home page

### Theme System
- Toggle between dark and light themes
- Persistent theme selection
- Smooth transitions between themes

### Responsive Design
- Mobile-first approach
- Grid layouts that adapt to screen size
- Touch-friendly navigation

## Deployment

For production deployment:

1. **Build the project**
   ```bash
   npm run build
   ```

2. **Deploy the `build` folder** to your hosting service
   - GitHub Pages
   - Netlify
   - Vercel
   - Firebase Hosting

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request
