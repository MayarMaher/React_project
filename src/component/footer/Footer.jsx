import { Component } from "react";

import'./Footer.css'
export class Footer extends Component{

    render(){
        
        return<>
        
        <footer  className="footer text-center text-white pt-3">
            <div  className="container">
                <div class="row">
                  
                    <div className="col-lg-4 mb-5 mb-lg-0">
                        <h4 className="text-uppercase mb-4">Location</h4>
                        <p className="lead mb-0">
                            2215 John Daniel Drive
                            <br/>
                            Clark, MO 65243
                        </p>
                    </div>
                
                    <div className="col-lg-4 mb-5 mb-lg-0">
                        <h4 className="text-uppercase mb-4">Around the Web</h4>
                        <div className="d-flex ms-5 ">
         <span><i className="  icons fs-4  fa-brands fa-facebook-f"></i></span>
         <span>  <i className="icons fs-4  fa-brands fa-instagram-square"></i> </span>
         <span> <i className="icons fs-4  fa-brands fa-twitter"></i></span>
         <span> <i className="icons fs-4  fa-brands fa-linkedin-in"></i></span>
        </div>
                    </div>
                  
                    <div className="col-lg-4">
                        <h4 className="text-uppercase mb-4">About Freelancer</h4>
                        <p className="lead mb-0">
                            Freelance is a free to use, MIT licensed Bootstrap theme created by Route
                        </p>
                    </div>
                </div>
      
            </div>
            <div className="layer pt-5">
     <div className="  pb-1">
     <div className=" container text-center text-white ">
     <h3>© Copyright DevFolio. All Rights Reserved
     </h3>
     <p>Designed by BootstrapMade</p>
    </div>
    </div>
   </div>
        </footer>
        </>
    }
}