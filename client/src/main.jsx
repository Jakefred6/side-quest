import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { ContentProvider } from './providers/ContentContext';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Dashboard, Login, Logout, NotFound, Profile, Quest, QuestInfo } from "./pages";
const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <NotFound />,
    children: [
      {
        index: true,
        element: <Dashboard />
      },
      {
        path: '/info',
        element: <QuestInfo />
      },
      {
        path: '/quest',
        element: <Quest />
      },
      {
        path: '/profile',
        element: <Profile />
      },
      // {
      //   path: '/logout',
      //   element: <Logout />
      // },
      // {
      //   path: '/signup',
      //   element: <Signup />
      // },
      {
        path: '/login',
        element: <Login />
      },
      {
        path: '/dashboard',
        element: <Dashboard />
      },
    ]
  }
]);
ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
)
