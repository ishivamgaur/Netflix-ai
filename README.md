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
