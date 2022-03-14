import { Button, Col, Container, Nav, Navbar, Row } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';

import styled from 'styled-components';

const Logo = styled.span`
  color: white;
  font-weight: 500;
`;

const Header = () => {
  return (
    <Navbar bg="brand-primary" expand="lg" className="py-3">
      <Container fluid="lg">
        <Navbar.Brand href="#home">
          <Logo>{'<tiago-guatierri />'}</Logo>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link href="#projects">Projetos</Nav.Link>
            <Nav.Link href="#aboutMe">Me conheça</Nav.Link>
            <Nav.Link href="#contact">Contato</Nav.Link>
            <Button
              variant="outline-light"
              className="ms-3"
              href="https://api.whatsapp.com/send?phone=5544999861308&text=Fala%20Tiago%2C%20tudo%20bem%3F"
            >
              <FontAwesomeIcon icon={faWhatsapp} /> Solicitar orçamento
            </Button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
