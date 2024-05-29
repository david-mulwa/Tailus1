
import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom';
import Header  from './components/Header'
import Footer from './components/Footer'
import Home from './Pages/Home';
import About from './Pages/About';

import Contact from './Pages/Contact';

import Prices from './Pages/Prices';



function Layout(){
  return (
    <>
    <Header/>
    <Outlet />
    <Footer />

   
    
    </>
    
  )
}

const router = createBrowserRouter([
  {
    element: <Layout />,
    children:[
      {
        path:'/',
        element:<Home/>,
      },
      {
        path:'/About',
        element:<About />,
      },

      {
        path:'/Contact',
        element:<Contact/>,
      },
      

      {
        path:'/Prices',
        element:<Prices/>,

      },


    ]
  },

]);

const App = () => {
  return <RouterProvider router={router} />;
};
export default App; 