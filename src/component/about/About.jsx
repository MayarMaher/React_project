import { Component } from "react";

import'./about.css'
export class About extends Component{

    render(){

        return< >
        <section className ="page-section about vh-100 text-white mb-0" id="about">
            <div className="container">
               
                <h2 className ="page-section-heading text-center text-uppercase text-white">About</h2>
                <div className="divider-custom divider-light d-flex  justify-content-center align-items-center position-relative mb-3 mt-3">
                    <div  className="divider-custom-line "></div>
                    <div  className="divider-custom-icon">
                     <i  className="fas fa-star fs-5"></i> </div>
                  <div  className="divider-custom-line-be"></div> 
                </div>
              
                <div class="row">
                    <div className="col-lg-6 ml-auto "><p class="lead">Freelancer is a free bootstrap theme created by Route. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.Freelancer is a free bootstrap theme created by Route. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.</p></div>
                    <div className="col-lg-6 mr-auto"><p class="lead">You can create your own custom avatar for the masthead, change the icon in the dividers, and add your email address to the contact form to make it fully functional!You can create your own custom avatar for the masthead, change the icon in the dividers, and add your email address to the contact form to make it fully functional!</p></div>
                </div>
              
            
            </div>
        </section>
        </>
    }
}