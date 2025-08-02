import { Container, Nav, Navbar } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import Tab from "./Tab";

const Header = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState(null);

  useEffect(() => {
    const loggedInUser = localStorage.getItem("loggedInUser");
    if (loggedInUser) {
      setUsername(JSON.parse(loggedInUser).username);
    }
  }, []);

  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand onClick={() => navigate('/')}>CoryDocs</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link onClick={() => navigate('docs')}>Docs</Nav.Link>
            <Nav.Link onClick={() => navigate('register')}>Sign up</Nav.Link>
            <Nav.Link onClick={() => navigate('sign')}>Sign in</Nav.Link>
          </Nav>
          <Nav className="ms-auto">
            <Tab />
            {username && <Nav.Link disabled className="fw-bold">{username}님</Nav.Link>}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
