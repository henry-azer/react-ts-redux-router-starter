import { createElement } from 'react';
import {
  Navigate,
  RouterProvider,
  createBrowserRouter,
} from 'react-router-dom';
import { MainLayout, RootError } from '../components';

export const router = createBrowserRouter([
  {
    path: '',
    element: <MainLayout />,
    errorElement: <RootError />,
    children: [
      { index: true, element: <Navigate to="/" replace /> },
      { path: '/profile', lazy: () => import('../views/profile/Profile') },
    ],
  },
  {
    path: '/login',
    errorElement: <RootError />,
    lazy: () => import('../views/login/Login'),
  },
]);

export function Router(): JSX.Element {
  return createElement(RouterProvider, { router });
}
