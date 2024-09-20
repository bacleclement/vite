import { StrictMode } from 'react';
import App from './App.tsx';
import './index.css';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './views/Home.tsx';
import About from './views/About.tsx';
import Movies from './views/Movies.tsx';
import Movie from './views/Movie.tsx';
import { Provider } from 'react-redux';
import { store } from './services/store.tsx'
import Todo from './views/Todo.tsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      { index: true, element: <Home /> },
      { path: 'about', element: <About /> },
      { path: 'movies', element: <Movies />},
      { path: 'movies/:id', element: <Movie /> },
      { path: 'todo', element: <Todo />},
    ]
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root')!);
root.render(
  <StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </StrictMode>
);