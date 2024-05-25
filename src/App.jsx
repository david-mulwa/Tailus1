
import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom';
import Header  from './components/Header'
import Footer from './components/Footer'
import Home from './Pages/Home';
import About from './Pages/About';
import Blog from './Pages/Blog';
import Contact from './Pages/Contact';
import Features from './Pages/Features';
import Prices from './Pages/Prices';
import signin from './Pages/signin';
import signup from './Pages/signup';
import ButtonGradient from'./assets/svg/ButtonGradient'

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
        path:'/Blog',
        element:<Blog/>,
      },
      {
        path:'/Contact',
        element:<Contact/>,
      },
      {
        path:'/Features',
        element:<Features/>,
      },
      {
        path:'/Prices',
        element:<Prices/>,

      },
      {
        path:'/signin',
        element:<signin/>,
      },
      {
        path:'/signup',
        element:<signup/>,
      }
      
    ]
  },

]);

const App = () => {
  return <RouterProvider router={router} />;
};
export default App; 