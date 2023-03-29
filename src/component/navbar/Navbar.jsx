import { Component } from "react";
import { Link } from 'react-router-dom';

export class Navbar extends Component {

     render(){

        return<>
        <nav className="navbar navbar-expand-lg  ">
  <div className="container-fluid">
    <Link className="navbar-brand text-info" to="/navbar">START REACT
</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
        <li className="nav-item">
            
          <Link className="nav-link active text-info" aria-current="page" to="/home">HOME</Link>
        </li>
        <li className="nav-item">                  


<Link className= "nav-link text-info" to="/portfolio">PORTFOLIO</Link>
</li>
        <li className="nav-item">                  


          <Link className= "nav-link text-info" to="/about">ABOUT</Link>
        </li>
        <li className="nav-item">                  


<Link className= "nav-link text-info" to="/contact"> CONTACT</Link>
</li>
       
      </ul>
    </div>
  </div>
</nav>
        </>
    }
}