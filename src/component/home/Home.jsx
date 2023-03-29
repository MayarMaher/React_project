import { Component } from "react";
import { Navbar } from "../navbar/Navbar";
import './home.css';
import myImag from "../images/avataaars.svg"
 export class Home extends Component{

    state={}


    render(){

        return<>
        <Navbar/>
        < div className="home vh-100 w-100 text-white text-center">
        <div className ="container d-flex align-items-center flex-column pt-5">
            
        <img className=" masthead-avatar mb-5  " src={myImag} alt="profil"/>
                
                <h1 className="masthead-heading text-uppercase mb-0">Start React</h1>
                
                <div className="divider-custom divider-light d-flex position-relative mb-3 mt-3">
                    <div  className="divider-custom-line ms-3"></div>
                    <div  className="divider-custom-icon">
                     <i  className="fas fa-star fs-5"></i> </div>
                  <div  className="divider-custom-line-be "></div> 
                </div>
            
                <p  className="masthead-subheading font-weight-light mb-0">Graphic Artist - Web Designer - Illustrator</p>
            </div>
    

        </div>
        </>
}}