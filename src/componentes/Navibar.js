import { Button, Nav, Navbar, NavLink } from "react-bootstrap";
import { Container } from 'react-bootstrap';
import { Link } from "react-router-dom";
import './App.css';

let Navibar=()=> {
  return (
    <div className="">
  <Navbar collapseOnSelect expand="sm" bg="dark" variant="dark">
    <Container>
    <Navbar.Toggle aria-controls="navbarScroll" data-bs-toggle="collapse" data-bs-target="#navbarScroll" />
    <Navbar.Collapse id="navbarScroll">
        <Nav>
            <NavLink eventKey="1" as={Link} to="/" width="120" height="50" className="letrasBarra">Lenguajes de Programacion</NavLink>
            <NavLink eventKey="2" as={Link} to="/segundacategoria" width="120" height="50" className="letrasBarra">Curiosidades</NavLink>
     </Nav>
    </Navbar.Collapse>  
    <Nav className="Letrasbarra">
    <Nav.Link ><Button>Iniciar Sesion</Button></Nav.Link>
    </Nav>
    </Container> 
</Navbar>
</div>
  );
}

export default Navibar;