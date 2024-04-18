import React from 'react'
import ReactDOM from 'react-dom/client'
// import App from './App.tsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import ErrorPage from "./pages/ErrorPage"
import MainLayout from './layouts/MainLayout.tsx'
import Home from './pages/Home.tsx'
import Login from './pages/Login.tsx'
import Register from './pages/Register.tsx'
import PostDetails from './pages/PostDetails.tsx'
import Authors from './pages/Authors.tsx'
import CreatePost from './pages/CreatePost.tsx'
import UserProfile from './pages/UserProfile.tsx'
import Dashboard from './pages/Dashboard.tsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <Home /> },
      { path: 'posts/:id', element: <PostDetails /> },
      { path: 'register', element: <Register /> },
      { path: 'login', element: <Login /> },
      { path: 'profile/:id', element: <UserProfile /> },
      { path: 'authors', element: <Authors /> },
      { path: 'create', element: <CreatePost /> },
      { path: 'myposts/:id', element: <Dashboard /> },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>
)
