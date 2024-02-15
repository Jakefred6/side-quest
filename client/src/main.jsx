import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Dashboard, Login, Logout, Signup, NotFound, Profile, Quest, QuestInfo } from "./pages";
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
      {
        path: '/dashboard',
        element: <Dashboard />
      },
    ],
  },
  {
    path: '/login',
    element: <Login />
  },    
  {    
  path: '/signup',
  element: <Signup />
  }
]);
ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
)
