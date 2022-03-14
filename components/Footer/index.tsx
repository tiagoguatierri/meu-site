import { Container, Nav, Navbar } from 'react-bootstrap';

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <footer className="py-4 text-center text-white bg-brand-primary">
      <Container fluid="lg">
        <p className="mb-0">
          &copy;{year} - Todos os direitos reservados para Tiago Guatierri.
        </p>
      </Container>
    </footer>
  );
};

export default Footer;
