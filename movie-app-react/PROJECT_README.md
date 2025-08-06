# Movie App React - Converted to React.js

This is a React.js conversion of the original vanilla JavaScript movie app with enhanced routing functionality.

## Features

### ✨ New Features Added
- **React Router Navigation**: Navigate between home page and movie details
- **Movie Details Page**: Dedicated page for each movie with description and trailer
- **Enhanced Movie Data**: Each movie now includes description and trailer information
- **Responsive Design**: Optimized for both desktop and mobile devices
- **React Components**: Modular component architecture

### 🎬 Core Features
- **Movie Browsing**: Browse popular movies from The Movie Database (TMDb)
- **Search Functionality**: Search for specific movies
- **Movie Cards**: Interactive movie cards with ratings and overviews
- **Theme Toggle**: Switch between dark and light themes
- **Authentication Modals**: Login and signup functionality (demo)

## Project Structure

```
src/
├── components/
│   ├── HomePage.js          # Main page with movie grid
│   ├── MovieDetails.js      # Movie details page with trailer
│   ├── MovieCard.js         # Individual movie card component
│   ├── Header.js            # Navigation header with search
│   └── AuthModal.js         # Login/signup modal component
├── styles/
│   ├── HomePage.css         # Home page styles
│   ├── MovieDetails.css     # Movie details page styles
│   ├── MovieCard.css        # Movie card styles
│   ├── Header.css           # Header component styles
│   └── AuthModal.css        # Modal styles
├── App.js                   # Main app with routing
├── App.css                  # Global styles
└── index.js                 # App entry point
```

## Routes

- `/` - Home page with movie grid
- `/movie/:id` - Movie details page with description and trailer

## Usage

### Navigation
1. **Browse Movies**: The home page displays popular movies in a grid layout
2. **Search Movies**: Use the search bar to find specific movies
3. **View Details**: Click on any movie card to navigate to its details page
4. **Watch Trailer**: View embedded trailers on the movie details page
5. **Go Back**: Use the "Back to Home" button to return to the main page

### Theme Switching
- Click the theme toggle button (🌙/☀️) in the header to switch between dark and light themes
- Theme preference is saved in localStorage

## API Integration

The app uses The Movie Database (TMDb) API:
- **API Key**: `4176c9e03582a720c587f104ad3b113e`
- **Popular Movies**: `/movie/popular`
- **Search Movies**: `/search/movie`
- **Movie Details**: `/movie/{id}`
- **Movie Videos**: `/movie/{id}/videos`

## Sample Data

If the API is unavailable, the app falls back to sample movie data including:
- The Shawshank Redemption
- The Godfather
- The Dark Knight

Each sample movie includes complete details, descriptions, and trailer links.

## Installation & Setup

1. **Clone/Navigate** to the project directory
2. **Install dependencies**:
   ```bash
   npm install
   ```
3. **Start the development server**:
   ```bash
   npm start
   ```
4. **Open** [http://localhost:3000](http://localhost:3000) in your browser

## Technologies Used

- **React.js**: Frontend framework
- **React Router Dom**: Client-side routing
- **CSS3**: Styling with animations and responsive design
- **TMDb API**: Movie data source
- **Modern JavaScript (ES6+)**: Arrow functions, async/await, destructuring

## Key Improvements from Vanilla JS Version

1. **Component Architecture**: Modular, reusable components
2. **State Management**: React hooks for state management
3. **Routing**: Clean URLs and navigation history
4. **Enhanced UX**: Dedicated movie details pages
5. **Better Code Organization**: Separation of concerns
6. **Performance**: React's virtual DOM optimization

## Development

### Available Scripts

- `npm start` - Runs the app in development mode
- `npm test` - Launches the test runner
- `npm run build` - Builds the app for production
- `npm run eject` - Ejects from Create React App (one-way operation)

### Adding New Features

1. **New Components**: Add to `src/components/`
2. **New Styles**: Add corresponding CSS files to `src/styles/`
3. **New Routes**: Update `App.js` routing configuration
4. **API Integration**: Extend existing API calls in components

## Responsive Design

The app is fully responsive with breakpoints for:
- **Desktop**: Full layout with side-by-side movie details
- **Tablet**: Adapted grid layouts
- **Mobile**: Stacked layouts and optimized interactions

---

*Created by converting the original vanilla JavaScript movie app to React.js with enhanced routing and user experience.*
