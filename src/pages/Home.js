import { Link} from 'react-router-dom';
  import 'animate.css';



export default function Home(){
    return(
      <>
      <div className='fsMain text-center'>
        <div className='conthero'>
        <h1 className='sampsubt'>Growth through Innovation</h1>
          <p className='samppara'>Achieving 3 Outcomes:Growing Sales - Saving Time - Reduce Expenses</p>
        </div>
        <div className='contlogo'>
        <img className='imgcont' src='./images/clear.png' height={390}></img>
        </div>
      </div>

      
      <div className='bodymarg'>

      {/* ------------------------------------- ABOUT SOFTWARE ---------------------------------- */}
      <div className='secsec' id="link">
        <div className='left22'>
          <h2>Who is ClearSky Software?</h2>
          <p>ClearSky Software is a  technology company. We specialize in developing and integrating software solutions that increase sales and or reduce operating costs.  We are focused on achieving measurable results  that improve the bottom line of your business. </p>
          <h5>Our solutions will address three challenges</h5>
          <ul>
            <li>Attract more customers.</li>
            <li>Customers will book more appointments or seek more quotes.</li>
            <li>Optimize operational efficiency. Integrate technology when appropriate.</li>
          </ul>
          <p>At the end of the day it is our job of leveraging technology that will bring additional opportunities to your business, improve efficiency, and achieve more profit.</p>

          <h5>We understand Small Business</h5>
          <p>All of our clients are small businesses and we understand our solutions have no room for error. No two businesses are identical and the solutions that are recommended will be unique to your circumstance based on your input and expectations.</p>

          <p>Once we understand your business challenges, we'll assess if we can help your business. We understand that our expertise may not always match your needs, but if your goals and our expertise align we will be committed to delivering a solution that will meet with your goals. </p>

          <h5>Our Promise</h5>
          <p>We become fully vested in our clients' success and become a partner of your business. When we make a commitment to work with your business we will include performance based guarantees as part of our agreement. When you succeed we succeed. </p>
        </div>
        <div className='right22'>
          <img className='rightimg' src='./images/i_about_us.png' height={580}></img>
        </div>
      </div>

      {/* ------------------------------------- 2 CATEGORIES ---------------------------------- */}

      <div className='pinakacateg'>
        <div className='categtitle' id="Services">
          <h2>How do we impact your business?  </h2>
          <p> Our solutions focus on,  Growing Revenue, and improving Operating Efficiency.</p>
        </div>
        <div className='categ'>
          <div className='categ1'>
            <img className='cagimg' src='/images/categ1.png'></img>
            <h3>Growing Revenues</h3>
            <p>We are committed to accelerating your sales growth. Partner with us to transform your business and achieve unparalleled success in today's competitive market.</p>
            <Link className='btnlearn1' as={Link} to="/GrowingRevenues">Learn More</Link>
          </div>
          <div className='categ2'>
          <img className='cagimg' src='/images/categ2.png'></img>
          <h3>Operational Efficiency</h3>
            <p>Today’s businesses optimize all steps in the production of revenue through the adoption of technology and analysis.</p>
            <Link className='btnlearn2' as={Link} to="/OperationalEfficiency">Learn More</Link>
          </div>
        </div>
      </div>

      </div>

      {/* ------------------------------------- BANNER------------------------------------------------ */}

      <div className='bgbanns'>
        <div className='categtitle11'>
          <div className='cndlogo'> <img src='./images/canadalogo.png' height={40}></img></div>
          <h2>Canada Digital Adoption Plan <br/> Transform your Business Today!</h2> 
          <p>For a limited time, the Government of Canada is providing $4 billion towards Canada’s Digital Adoption Plan.</p>
          <p>The program is set up to benefit 2 Types of Businesses:</p>
        </div>
        <div className='contban'>
          <div className='contban1'>
            <h2>Manufacturers/Contractors with Sales 	&gt; $500,000</h2>
            <div className='bancomp'>
            <h6>Do I qualify?</h6>
            <h5>You Need the following 4 conditions:</h5>
            <ul>
              <li>Be incorporated federally or provincially, or be a Canadian resident sole proprietor</li>
              <li>Be a for-profit, privately owned business</li>
              <li>Have between 1 – 499 full time equivalent employees</li>
              <li>Have at least $500,000 of annual revenues in one of the previous three tax years</li>
            </ul>
            <h6>Benefits:</h6>
            <p> <strong>Digital Needs Assessment </strong>
            Assess your current use of technology and identify your business needs. Take advantage of an industry leading questionnaire to measure your business' current use of technology. Based on your input, you will receive a customized report that you can use to compare your business with others in the same industry, and get advice on how adopting new technology can help you boost your busines</p>
            <p> <strong>BDC 0% interest free loan.</strong>
            When you are ready to move forward with your digital adoption plan, apply for a 0% loan of up to $100,000 from the Business Development Bank to implement the plan.</p>
            <p> <strong>Funded Work Placement</strong>
            You can receive up to $7,300 as a wage subsidy to hire a talented youth with the skills your business needs to achieve its digital adoption goals.</p>
            </div>
            <p className='notavail'>NO LONGER AVAILABLE</p>
          </div>
          <div className='contban1'>
          <h3 className='ban2'>Manufacturers/Contractors with Sales	&gt; $30,000 or 1+ Employee</h3>
          <div className='bancomp'>
            <h6>Do I qualify? <strong className='NAQY'> (Not Available in Quebec and Yukon.)</strong> </h6>
            <h5>You Need the following 4 conditions:</h5>
            <ul>
              <li>Must be a for-profit business (including for-profit social enterprises and co-operatives) in Ontario</li>
              <li>Must be a registered or incorporated business</li>
              <li>Must be a consumer-facing business, meaning be able to be accessed by consumer or provide in person services to consumers. </li>
              <li>Must commit to maintaining a digital adoption strategy for six months after participation in the program</li>
              <li>Must consent to participating in follow-up surveys, sharing information with the Government of Canada (ISED and Statistics Canada), and having the name of the business published as a recipient of funding</li>
            </ul>
            <h6>Benefits:</h6>
            <p>Through this program, small business owners can receive a micro-grant worth up to $2,400 to help get their business online, give their e-commerce presence a boost, or digitalize business operations. The CDAP program is a reimbursement grant. Successfully grant recipients must incur costs upfront after they have received conditional approval. Funds are paid out to the recipient after they are able to provide the OCC with the required proof of payment documentation. Grant recipients must commit to maintaining their digital adoption strategy for at least six months.</p>
            </div>
            <button className='ban2b'>BOOK AN APPOINTMENT</button>
          </div>
        </div>
        </div>

        {/* ---------------------------------- PRICE PLAN ------------------------------------------ */}

        <div  className='mainplan'>
          <div className='plantitle' id="Prices">
          <h3>Unlock the full potential of your contracting business</h3>
          <p> Take advantage of our special 1 time unique offer by partnering with us today!</p>
          </div>
          <div className='plans'>
            <div className='plan1'>
              <div>
              <h1>Basic Plan</h1>
              <h4>What’s Included?</h4>
              <div className='plancont'>
                <div className='colni'>
                <img src='/images/check.png' height={20}></img><p>Advising potential customers how to apply for Canada Digital Adoption micro grant.</p>
                </div>
                <div className='colni'>
                <img src='/images/check.png' height={20}></img><p>Website Design and Content creation 6-10 unique pages. </p>
                </div>
                <div className='colni'>
                <img src='/images/check.png' height={20}></img><p>Content management System, includes loading content, and training. </p>
                </div>
                <div className='colni'>
                <img src='/images/check.png' height={20}></img><p>VPS, SSL, CDN, Domain Name</p>
                </div>
                <div className='colni'>
                <img src='/images/check.png' height={20}></img><p>Email (2) </p>
                </div>
                <div className='colni'>
                <img src='/images/check.png' height={20}></img><p>Local Seo package </p>
                </div>
                <div className='colni'>
                <img src='/images/check.png' height={20}></img><p>Analytics Package </p>
                </div>
                <div className='colni'>
                <img src='/images/check.png' height={20}></img><p>Dedicated Support</p>
                </div>
                <div className='colni'>
                <img src='/images/check.png' height={20}></img><p>Ongoing updates and support. </p>
                </div>
                </div>
              </div>
              <div className='paraprice'>
              <p>Price for all services is included for the first year, starting 2nd year service charges of $40 per month.  </p>
              
              
              
              <h5 className='priceni'>$2500/mo* plus HST</h5>
              <button>Book An Appointment</button>
              </div>
            </div>
            <div className='plan2'>
              <div className='werepro'>
              <div className='spro'><h2 className='wereco'>Special Promotions</h2></div>
              <img className='promos' src='/images/promo.png' height={130}></img>
              </div>
              <div>
            <h1>Special Unique One Time Only Offer (first 100 signups)</h1>
              <h4>What’s Included?</h4>
              <div className='plancont2'>

              <div className='colni'>
                <img src='/images/check.png' height={20}></img><p>All of the Basic Plan plus </p>
              </div>
              <div>
                <p className='pricepara'>Our first 100 signups will have access to all of the enhanced modules free of charge for 12months.
                This <strong className='strongp'>Special Unique Offer</strong>   allows your business the opportunity to evaluate our process and the  impact it will have on the growth of your business, without incurring any financial commitments.</p>
                <p className='pricepara1'>For all subsequent years we will extend to you minimum 50% savings on any enhanced modules  beyond the basic plan in perpetuity.</p>
              </div>
              <h5>Enhanced Modules </h5>
              <h4 id='priceplan'>Marketing Tools</h4>
              <div className='colni'>
                <img src='/images/check.png' height={20}></img><p>Demo Room</p><Link className='colnilink' as={Link} to="/MoreInfo">more info</Link>
              </div>
              <div className='colni'>
                <img src='/images/check.png' height={20}></img><p>Local SEO</p><Link className='colnilink' as={Link} to="/MoreInfo">more info</Link>
              </div>
              <div className='colni'>
                <img src='/images/check.png' height={20}></img><p>Email</p><Link className='colnilink' as={Link} to="/MoreInfo">more info</Link>
              </div>
              <div className='colni'>
                <img src='/images/check.png' height={20}></img><p>Link Building</p><Link className='colnilink' as={Link} to="/MoreInfo">more info</Link>
              </div>
              <div className='colni'>
                <img src='/images/check.png' height={20}></img><p>Importance of the RIGHT WORDS</p><Link className='colnilink' as={Link} to="/MoreInfo">more info</Link>
              </div>
              <div className='colni'>
                <img src='/images/check.png' height={20}></img><p>Right Infrastructure</p><Link className='colnilink' as={Link} to="/MoreInfo">more info</Link>
              </div>
              <div className='colni'>
                <img src='/images/check.png' height={20}></img><p>Lead Generating Directory</p><Link className='colnilink' as={Link} to="/MoreInfo">more info</Link>
              </div>
              <h4>Social Media Management </h4>
              <div className='colni'>
                <img src='/images/check.png' height={20}></img><p>create or manage social platform(s)  </p><Link className='colnilink' as={Link} to="/MoreInfo">more info</Link>
              </div>
              <div className='colni'>
                <img src='/images/check.png' height={20}></img><p>content creation</p><Link className='colnilink' as={Link} to="/MoreInfo">more info</Link>
              </div>
              <div className='colni'>
                <img src='/images/check.png' height={20}></img><p>curate applicable content </p><Link className='colnilink' as={Link} to="/MoreInfo">more info</Link>
              </div>
              <div className='colni'>
                <img src='/images/check.png' height={20}></img><p>engagement </p><Link className='colnilink' as={Link} to="/MoreInfo">more info</Link>
              </div>
              <h4>Project Management Application Software </h4>
              <div className='colni'>
                <img src='/images/check.png' height={20}></img><p>Real-time visibility of project</p><Link className='colnilink' as={Link} to="/MoreInfo">more info</Link>
              </div>
              <div className='colni'>
                <img src='/images/check.png' height={20}></img><p>Invoice Management</p><Link className='colnilink' as={Link} to="/MoreInfo">more info</Link>
              </div>
              <div className='colni'>
                <img src='/images/check.png' height={20}></img><p>Design Coordination </p><Link className='colnilink' as={Link} to="/MoreInfo">more info</Link>
              </div>
              <div className='colni'>
                <img src='/images/check.png' height={20}></img><p>Project Financials</p><Link className='colnilink' as={Link} to="/MoreInfo">more info</Link>
              </div>
              </div>
              </div>
              <div>
              <h4>Customize your plan</h4>
              <p>Customizing your plan enables us to tailor strategies to your unique needs, ensuring optimal results. Each company receives 8 hours of dedicated resources with our digital expert, allowing flexibility in how these hours are utilized.</p>
              <h5>$4800/12mo* plus HST</h5>
              <button>Book An Appointment</button>
              </div>
            </div>
            
          </div>
        </div>

     
      </>
    )
}