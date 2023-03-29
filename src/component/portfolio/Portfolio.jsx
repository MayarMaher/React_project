import { Component } from "react";
import './portfolio.css';
import Imag1 from "../images/cabin.png";
import Imag2 from "../images/cake.png";
import Imag3 from "../images/circus.png";
import Imag4 from "../images/safe.png";
import Imag5 from "../images/game.png";
import Imag6 from "../images/submarine.png";
import { Details } from "../details/Details";

export class Portfolio extends Component{
 showDetails(){
    <Details/>
 }    
    render(){

        return <div className=" container d-flex align-items-center justify-content-center flex-column">
        <h3>PORTFOLIO</h3>
        <div className="divider-custom divider-light d-flex position-relative mb-5 mt-3">
                    <div  className="divider-custom-line "></div>
                    <div  className="divider-custom-icon">
                     <i  className="fas fa-star fs-5 text-info"></i> </div>
                  <div  className="divider-custom-line-be"></div> 
                </div>
                <div className=" row">
                  <div className="col-md-6 col-lg-4 mb-5 ">
                        <div className="portfolio-item mx-auto" >
                            <div className="portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100">
                                <div className="portfolio-item-caption-content text-center text-white">

                                </div>


                 <div className="item  w-100 position-relative">
                <div className="image ">
                <div className="overflow-hidden">

                <img className=" w-100" src={Imag1} alt="home" />
               </div>
               <div  onClick={ this.showDetails}  className="layer   position-absolute w-100 h-100  top-0 d-flex justify-content-center align align-items-center">
                 <i className="fa fa-plus fa-w-14 fa-3x text-white "  i/>
                
            </div>
                    
            </div>
                    
            </div>
                                 </div>
                                  </div>
                            

                    </div>
                    <div class="col-md-6 col-lg-4 mb-5">
                        <div class="portfolio-item mx-auto" >
                            <div class="portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100">
                                <div class="portfolio-item-caption-content text-center text-white">
                                </div>
                            </div>
                            <div className="item  w-100 position-relative">
                <div className="image ">
                <div className="overflow-hidden">

                
                <img className=" w-100" src={Imag2} alt="cake" />
               </div>
               <div className="layer position-absolute w-100 h-100  top-0 d-flex justify-content-center align align-items-center">
                 <i className="fa fa-plus fa-w-14 fa-3x text-white "  i/>
                
            </div>
                    
            </div>
                    
            </div>
                            
                        </div>
                        </div>
                  <div class="col-md-6 col-lg-4 mb-5">
                        <div class="portfolio-item mx-auto" >
                            <div class="portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100">
                                <div class="portfolio-item-caption-content text-center text-white">
                                </div>
                            </div>
                            <div className="item  w-100 position-relative">
                <div className="image ">
                <div className="overflow-hidden">

                
             
                <img className=" w-100" src={Imag3} alt="circus" />
               </div>
               <div className="layer position-absolute w-100 h-100  top-0 d-flex justify-content-center align align-items-center">
                 <i className="fa fa-plus fa-w-14 fa-3x text-white "  i/>
                
            </div>
                    
            </div>
                    
            </div>
                        </div>
                    </div>
                    <div class="col-md-6 col-lg-4 mb-5">
                        <div class="portfolio-item mx-auto" >
                            <div class="portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100">
                                <div class="portfolio-item-caption-content text-center text-white">
                                </div>
                            </div>
                            <div className="item  w-100 position-relative">
                <div className="image ">
                <div className="overflow-hidden">

                
             
                <img className=" w-100" src={Imag4} alt="safe" />
               </div>
               <div className="layer position-absolute w-100 h-100  top-0 d-flex justify-content-center align align-items-center">
                 <i className="fa fa-plus fa-w-14 fa-3x text-white "  i/>
                
            </div>
                    
            </div>
                    
            </div>
                        </div>
                    </div>
                    <div class="col-md-6 col-lg-4 mb-5">
                        <div class="portfolio-item mx-auto" >
                            <div class="portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100">
                                <div class="portfolio-item-caption-content text-center text-white">
                                </div>
                            </div>                 <div className="item  w-100 position-relative">
                <div className="image ">
                <div className="overflow-hidden">

                
             
                <img className=" w-100" src={Imag5} alt="game" />
               </div>
               <div className="layer position-absolute w-100 h-100  top-0 d-flex justify-content-center align align-items-center">
                 <i className="fa fa-plus fa-w-14 fa-3x text-white "  i/>
                
            </div>
                    
            </div>
                    
            </div>
                        </div>
                    </div>
                    <div class="col-md-6 col-lg-4 mb-5">
                        <div class="portfolio-item mx-auto" >
                            <div class="portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100">
                                <div class="portfolio-item-caption-content text-center text-white">
                                </div>
                            </div>
                            <div className="item  w-100 position-relative">
                <div className="image ">
                <div className="overflow-hidden">

                
             
                <img className=" w-100" src={Imag6} alt="submar" />
               </div>
               <div className="layer position-absolute w-100 h-100  top-0 d-flex justify-content-center align align-items-center">
                 <i className="fa fa-plus fa-w-14 fa-3x text-white "  i/>
                
            </div>
                    
            </div>
                    
            </div>
                        </div>
                    </div>
                    </div>
                
      </div>
    }}