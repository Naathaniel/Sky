import {  Navbar,  Nav, Container } from 'react-bootstrap';
import {  Link } from 'react-router-dom';



export default function MyNavbar(){
    return(
        <>

      <Navbar expand="lg">
      <Container>
      <Navbar.Brand href="/">
        <img className='logogo' src='images/logo4.png'></img>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse  className="navvv" id="basic-navbar-nav">
          <Nav>
            <Nav.Link className='navtext' href="/">Home</Nav.Link >
            <Nav.Link className='navtext' href="#link">About</Nav.Link>
            <Nav.Link className='navtext' href="#Services">Services</Nav.Link>
            <Nav.Link className='navtext' as={Link} to="/CaseStudy">Case Studies</Nav.Link>
            <Nav.Link className='navtext' href="#Prices">Prices</Nav.Link>
            <Nav.Link className='navtext' href="#Contact">Contact Us</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>

      </>
    )
}  

