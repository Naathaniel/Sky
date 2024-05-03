import './Services.css';
import { Link } from 'react-router-dom';


export default function Checkout(){
    return(
   <>
      <div className="maingrow">
        <div className="leftefficiency">
        <h1>Operational Efficiency <br/>
        With ClearSky Software</h1>
        <p>Prior to rolling out business solutions that will make your business more efficient, we will need to better understand your business processes. We will be looking at how your business produces products and or services and the time and money needed to produce said product or service</p>
        </div>
        <div className="rightgrow">
          <img className="rgimg" src="images/Efficiency.png" height={600}></img>
        </div>
      </div>

      <div  className="sec2eff">
        <h4>Reducing Expenses & Increase Productivity</h4>
        <p>Any change to a business will be unique, there is not a one-size fits. Changes must suit a company’s needs. Our goal is that the business makes the most of its resources, resulting in higher profits.</p>
        <ol>
          <li>Document processes, create a written, process that clearly defines tasks. This will create standardization and the ability to measure effectiveness. </li>
          <li>When the tasks have been defined, understand what the key performance metrics would indicate. As we add changes we continuously measure the effectiveness of efficiency improvements. Ongoing monitoring will be required to ensure improvement.</li>
          <li>When we question optimizing technology, we assess the positive value to your business. We will look at quantifying the time and costs saved by adapting technology.</li>
          <li>Reviewing manual business processes that can be replaced with technology or outsourced staff</li>
          <li>Costs associated with production. </li>
          <ul>
            <li>Are you able to define unit costs or project costs?.</li>
            <li>Are you able to reduce input costs?</li>
          </ul>
          <li>Create a culture of Openness and transparency within the organization. </li>
          <li>Ensure customer interaction points are operating at the highest possible level.</li>
          <li>Profits levels required to be sustainable. work until the causes of the slowdown have been addressed and a longer-term plan created. This could also give managers time to retrain staff and seek feedback on the production processes to prevent further bottlenecks and fix existing issues.</li>
          <li>Workplace culture, and employee training by constantly iterating, improving operational efficiency over time the business will see the benefits. It's a task that is better done in incremental steps than waiting until the business is forced to do it all at one.</li>
        </ol>
      </div>


      <div className="banner">
        <div className="bannerdiv">
        <div className="bann1">
        <h3>Unlocking Success: <br/> <strong className="banwhite">A ClearSky Software Case Study</strong> </h3>
        <p>Discover how ClearSky Software transformed businesses through innovative solutions. </p>
        </div> 
        <div className="banbtn">
          <Link className="btnban" as={Link} to="/CaseStudy">Explore the Case Study</Link>
        </div>
        </div>
      </div>

   </>
 )
}