import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { NavLink } from 'react-router-dom';

function NavBar() {
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container>
        <NavLink className='nav-link text-light' to="/">Mundo Pets</NavLink>
          <Nav className="justify-content-end">
            <NavLink className='nav-link' to="/dogs">Perros</NavLink>
            <NavLink className='nav-link' to="/cats">Gatos</NavLink>
            <NavLink className='nav-link'to="/contact">Contacto</NavLink>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}

export default NavBar;