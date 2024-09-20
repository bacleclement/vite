import { StrictMode } from 'react';
import App from './App.tsx';
import './index.css';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './views/Home.tsx';
import About from './views/About.tsx';
import Movies from './views/Movies.tsx';
import Movie from './views/Movie.tsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      { index: true, element: <Home /> },
      { path: 'about', element: <About /> },
      { path: 'movies', element: <Movies />},
      { path: 'movies/:id', element: <Movie /> },
    ]
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root')!);
root.render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);