import { Component } from "react";
import './contact.css'

export class Contact extends Component{

    render(){
           return<> 
             <div className=" container">
            
             <h2 className ="page-section-heading text-center text-uppercase ">CONTACT ME</h2>
                
             <div className="divider-custom divider-light d-flex  justify-content-center align-items-center position-relative mb-3 mt-3">
                    <div  className="divider-custom-line ms-3"></div>
                    <div  className="divider-custom-icon">
                     <i  className="fas fa-star fs-5 text-info"></i> </div>
                  <div  className="divider-custom-line-be "></div> 
                  </div> 
             <div className="row">
                    <div className="col-lg-8 mx-auto">
                        <form id="contactForm" name="sentMessage" novalidate="novalidate">
                            <div className="control-group">
                                <div className="form-group floating-label-form-group controls mb-0 pb-2">
                                    <label>Name</label>
                                    <input className="form-control" id="name" type="text" placeholder="Name"  />
                                    <p className="help-block text-danger"></p>
                                </div>
                            </div>
                            <div class="control-group">
                                <div className="form-group floating-label-form-group controls mb-0 pb-2">
                                    <label>Email Address</label>
                                    <input className="form-control" id="email" type="email" placeholder="Email Address"   />  
                                    <p className="help-block text-danger"></p>
                                </div>
                            </div>
                            <div className="control-group">
                                <div className="form-group floating-label-form-group controls mb-0 pb-2">
                                    <label>Phone Number</label>
                                    <input className="form-control" id="phone" type="tel" placeholder="Phone Number" />
                                    <p className="help-block text-danger"></p>
                                </div>
                            </div>
                            <div className="control-group">
                                <div className="form-group floating-label-form-group controls mb-0 pb-2">
                                    <label>Message</label>
                                    <textarea className="form-control" id="message" rows="5" placeholder="Message"></textarea>
                                    <p className="help-block text-danger"></p>
                                </div>
                            </div>
                            <br/>
                            <div id="success"></div>
                            <div className=" form-group"><button class="btn btn-primary btn-xl" id="sendMessageButton" type="submit">Send</button></div>
                        </form>
                    </div>
                </div>
                </div>
                
           
           </>
           
    }
}

