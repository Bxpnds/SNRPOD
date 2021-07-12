
import { Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import "./NavBar2.css"

function NavBar2() {
    const handleSelect = (eventKey) => console.log(`selected ${eventKey}`);
  
    return (
      <Nav variant="pills" activeKey="1" onSelect={handleSelect}>
          <Nav.Item>
          <a>
              <img src="/images/Snr_Logo2.png" />
          </a>
        </Nav.Item>
   
        <Nav.Item>
         <Nav.Link eventKey="3"><Link to="/"><h3>Snackin "N"</h3></Link></Nav.Link> 
        </Nav.Item>
    
        
        <NavDropdown id="nav-dropdown" className="match" title="Rappin" id="nav-dropdown">
          <NavDropdown.Item eventKey="4.1"><Link to="/Rappin/0">Episode 1</Link> </NavDropdown.Item>
          <NavDropdown.Item eventKey="4.2"><Link to="/Rappin/1">Episode 2</Link></NavDropdown.Item>
          <NavDropdown.Item eventKey="4.3"><Link to="/Rappin/2">Episode 3</Link></NavDropdown.Item>
          <NavDropdown.Divider />
        </NavDropdown>
        
      </Nav>
    
    );
  }

  export default NavBar2;