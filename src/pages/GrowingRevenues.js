import React from "react"
import './Services.css';
import { Link } from 'react-router-dom';


export default function GrowingRevenues(){
    return(
   <>
      <div className="maingrow">
        <div className="leftgrow">
        <h1>Growing Revenues <br/>
        With ClearSky Software</h1>
        <h4>Our First step</h4>
        <p>Prior to rolling out business solutions that Grow Revenues, it is imperative that we better understand your business. We would be considering the following:</p>
        <li>SWOT Analysis, outlining Strengths, Weaknesses, Opportunities, and Threats.</li>
        <li>Online Presence, understand the business environment. </li>
        <li>Identify Competitors, direct and indirect competitors within your industry or niche.</li>
        <li>Marketing and Positioning, unique selling propositions.</li>
        <li>Pricing Strategy, pricing strategy of competitors in comparison to your business.</li>
        </div>
        <div className="rightgrow">
          <img className="rgimg" src="images/grow.png" height={600}></img>
        </div>
      </div>

      <div className='AARRRtitle'>
          <h2>Moving Forward</h2>
          <p>ClearSky Software process can be broken down into 5 components: Each component is unique, and with each component there will be programmatic and manual solutions. The exact composition of the component will come from the metrics and what defines "best results". The best process is ever changing and requires constant monitoring.</p>
      </div>

      <div className="AArrrcontent">
        <div>
        <img className="aarrr" src="images/AARRR.png" height={400}></img>
        </div>
      </div>
 
      <div className="banner">
        <div className="bannerdiv">
        <div className="bann1">
        <h3>Unlocking Success: <br/> <strong className="banwhite">ClearSky Software Case Studies</strong> </h3>
        <p>Discover how ClearSky Software transformed businesses through innovative solutions. </p>
        </div> 
        <div className="banbtn">
          <Link className="btnban" as={Link} to="/CaseStudy">Explore the Case Studies</Link>
        </div>
        </div>
      </div>

   </>
 )
}