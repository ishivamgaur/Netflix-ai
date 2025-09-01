## Netflix-GPT

- npm create vite@latest
- configure tailwind css

# Implemented

- Header
- Routing
- Login form
- Signup form
- Form validation
- npm i firebase --> then added firebase config file.
- For Sign-Up used createUserWithEmailAndPassword(auth, email, password) api.
  - Implmented Sign-Up using email and pass
- For Sign-In used signInWithEmailAndPassword(auth, email, password) api.

  - Implmented Sign-In using email and pass

- Installed npm i reduxjs/toolkit
- Installed npm i react-redux
- build the store and userSlice
- Stores the login user data
- Checking userAuth with onAuthStateChanged(API) and storing in store
- Added React-hot-toast for pop-up messages
- Implemented Signout feature
- BugFix: Sign up user displayName and profile picture update
- BugFix: If user is not authenticated Redirect "/browse" to Login page and vice-versa.
- Added all constants in constants.js file

- fetched Data from TMDB now playing movies list API
- Custom hook for Now playing Movies
- Created MovieSlice
- Update store with movies data
- Made a MainContainer & secondary container in Browse Page
- fetched Data For trailer video with now playing movie slice
- Embedded the youtube video and make it mute and autoplay and loop infinity

- Added Poppines Font & installed React-icons for look awesome
- Made Secondary Container with MoviesList and showing Now Playing Movies
- Made a movieCard
- Made a Hook of fetching Popular Movies, Top Rated, Up Comming from different APIs
- Made a Toggle AiSearch slice to the store to toggle between main page and Ai search page
- Initializing working on AiSearchComponent page
- Rename AiSearchComponent to AiSearchPage
- Implemented toggle between Browse and AiSearchPage with the help of toggleAiSearchView action form Ai Store
- For Implmenting AI Need Backend/Server side environment
- Re-structure application with the root of frontend/backend folder
- Now I have backend with Gemini Ai Movie Suggestions API. Lets do further
- Added backend url (http://localhost:3000/api/gemini/movie-suggestions) in constants.js for Ai suggestions.
- # Implemented Ai Fetching suggestions function
- # Converted Ai response movie title to array of movie title
- # Fetched One by one movie with title from TMBD
- # TMBD API gives multiple movie list in results of one Title. It gives all movie that includes that title string
- # We want only the Genuinue movie that Ai suggest so we only takes results[0] means first movie that includes the real title.
- # Created a action (addAiSuggestions) in ai slice to add Ai response in store.
- Implemented Error handling to backend ai response errors in aiSuggestion.js and in AiSearchBar
- Made MovieCardShimmer component
- Added Shimmer effect to the Fetch loading.

## Backend Implementation

- npm i expess, cors, dotenv
- npm i @google/genai --> for gemini setup
- Made api key for Gemini API
- Made a Health-check api && gemini-api (url/api/gemini/movie-suggestion) for suggestions response
- Added a PrePromte for AI to give context ex: Act as You are a movie suggestion AI.
- Added some error handling
- Added Strong prePromte for movie suggestion and anything or dirty thing it will say "noMovies" response
- Error handling for API limit exceeds per day
- Changed 5 movie result to 10 movie result && Proper error message response

# Features

- Login/Sign Up
  - Sign In/ Sign Up page
  - redirect to browse Page
- Browse (after authentication)
  - Header
  - Main movie
    - Trailer in Background
    - Title & Description
    - Movie Suggestions
      - MovieLists \* N
- Netflix-GPT
  - Search bar
  - Movie suggestions
