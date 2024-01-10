import { createElement } from 'react';
import {
  Navigate,
  RouterProvider,
  createBrowserRouter,
} from 'react-router-dom';
import { BaseLayout, MainLayout, RootError } from '../components';

export const router = createBrowserRouter([
  {
    path: '',
    element: <BaseLayout />,
    errorElement: <RootError />,
    children: [{ path: '/login', lazy: () => import('../views/login/Login') }],
  },
  {
    path: '',
    element: <MainLayout />,
    errorElement: <RootError />,
    children: [
      { index: true, element: <Navigate to="/" replace /> },
      { path: '/profile', lazy: () => import('../views/profile/Profile') },
    ],
  },
]);

export function Router(): JSX.Element {
  return createElement(RouterProvider, { router });
}
