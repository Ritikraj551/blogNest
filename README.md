# BlogNest

 BlogNest is a modern blog web application built with React and Vite that uses Appwrite as its backend. It allows users to sign up, log in, and create, edit, or delete blog posts with rich text content and featured images. The app includes authentication-based page protection, state management with Redux, and a clean UI powered by Tailwind CSS, making it a full-stack blogging platform with secure data storage and media handling.
.

## What this app does

- User signup and login with Appwrite
- Add, edit, view, and delete blog posts
- Upload featured images to Appwrite storage
- Show published blog posts on the home page
- Protect pages using authentication state

## Technologies used

- React 19
- Vite
- Redux Toolkit
- React Router DOM 7
- React Hook Form
- Appwrite SDK
- TinyMCE editor for rich text content
- Tailwind CSS

## Setup

1. Install dependencies:

```bash
npm install
```

2. Create a `.env` file in the project root and add Appwrite values:

```env
VITE_APPWRITE_URL=https://[YOUR_APPWRITE_ENDPOINT]
VITE_APPWRITE_PROJECT_ID=[PROJECT_ID]
VITE_APPWRITE_DATABASE_ID=[DATABASE_ID]
VITE_APPWRITE_COLLECTION_ID=[COLLECTION_ID]
VITE_APPWRITE_BUCKET_ID=[BUCKET_ID]
```

3. Start the development server:

```bash
npm run dev
```

4. Open the local URL printed by Vite in the browser.

## Important pages

- `/` - Home page with post list or empty state message
- `/login` - Sign in for existing users
- `/signup` - Create a new account
- `/add-post` - Add a new post (requires login)
- `/all-posts` - View all posts (requires login)
- `/edit-post/:slug` - Edit a post (requires login)
- `/post/:slug` - View a single post

## Project structure

- `src/App.jsx` - main app shell and routing wrapper
- `src/main.jsx` - app entry and router setup
- `src/components/` - shared UI components
- `src/pages/` - page views for home, auth, posts
- `src/appwrite/` - Appwrite service helpers
- `src/store/` - Redux store and auth slice
- `src/conf/conf.js` - Appwrite env config

## Scripts

- `npm run dev` - start development server
- `npm run build` - build production bundle
- `npm run preview` - preview production build locally
- `npm run lint` - run ESLint checks

## Notes

- The app uses Appwrite for both authentication and file storage.
- `userData` is stored in Redux after login.
- The post form uploads images and saves the returned file ID.
