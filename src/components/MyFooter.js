import React from "react"
import { Link } from 'react-router-dom';
import './MyFooter.css';
import 'animate.css';


export default function MyFooter(){
    return(
    <>
      <div className="foot" id="Contact">
       <div className="foot2">
        <div className="frow1">
        <div className="contft">
          <img className="ftlogo" src="images/footlogo.png" height={200}></img>
          </div>
        </div>
        <div className="frow2">
          <h4>Quick Links</h4>
          <div className="footions">
            <p><Link to="/" className="footlink">Home</Link></p>
            <p id="link">About</p>
            <p id="Services">Services</p>
            <p><Link to="/CaseStudy" className="footlink">Case Studies</Link></p>
            <p id="Prices">Prices</p>
            </div>
        </div>
        <div className="frow3">
        <h4>Contact Us</h4>
        <div className="footions">
        <p><strong>Email:</strong> r.dredhart@clearskysoftware.net</p>
        <p><strong>Phone:</strong> 1-705-274-9564</p>
        </div>
        </div>
       </div>
      </div>
      <div className="foot3">
          <p>© clearskysoftware. All Right Reserved 2024.</p>
       </div>
    </>
    )
}
