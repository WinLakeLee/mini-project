import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const Header = () => {

  const navigate = useNavigate()
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand onClick={() => navigate('/')}>CoryDocs</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link onClick={() => {
              navigate('docs')
            }}>Docs</Nav.Link>
            <Nav.Link onClick={() => {
              navigate('register')
            }}>Sign up</Nav.Link>
            <Nav.Link onClick={() => {
              navigate('sign')
            }}>Sign in</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header