import { render } from 'react-dom';
import './App.css';
import { Home } from './component/home/Home';
import { Navbar } from './component/navbar/Navbar';
import { About } from './component/about/About';
import { Contact } from './component/contact/Contact';
import { Portfolio} from './component/portfolio/Portfolio';
import { createBrowserRouter } from 'react-router-dom';
import {RouterProvider  } from 'react-router-dom';
import { Footer } from './component/footer/Footer';
import { Details } from './component/details/Details';
import { Link } from 'react-router';

const router= createBrowserRouter ([
  {Path:'/' , element:<><Home/><Footer/></>},
  {Path:'navbar' , element:<Navbar/>},
  { path:'home',element:<><Home/><Footer/></>},
  {path:'about',element:<><Navbar/><About/><Footer/></>},
  {path:'portfolio',element:<><Navbar/><Portfolio/><Footer/></>},
   {path:'contact',element:<><Navbar/><Contact/> <Footer/></>},
  {path:'*',element:<><Navbar/>
  <div className=' vh-100 bg-info d-flex justify-content-centern align-items-center text-center text-lg-center'>
     
    <h3>Error 404</h3>
   
    </div></>},
   
])

function App() {

  return <RouterProvider router={router}/>
  
}

export default App;
