
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import Main from './Components/Layout/Main';
import LoginBootstrap from './Components/LoginBootstrap';
import RegisterReactBootstrap from './Components/RegisterReactBootstrap';
import app from './firebase/firebase.init';


const router = createBrowserRouter([
  {
    path: '/',
    element: <Main></Main>,
    children: [
      {
        path: '/',
        element: <RegisterReactBootstrap></RegisterReactBootstrap>
      },
      {
        path: '/register',
        element: <RegisterReactBootstrap></RegisterReactBootstrap>
      },
      {
        path: '/login',
        element: <LoginBootstrap></LoginBootstrap>
      }
    ]
  }
])
function App() {
  return (
    <div className="">

      <RouterProvider router={router}></RouterProvider>
    </div >
  );
}

export default App;
