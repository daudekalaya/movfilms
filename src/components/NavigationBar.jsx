import { Navbar, Container, Nav } from "react-bootstrap";
import "../style/landingPage.css";

function NavigationBar() {
  return (
    <>
      <Navbar variant="dark">
        <Container>
          <Navbar.Brand>MOVFILMS</Navbar.Brand>
          <Nav>
            <Nav.Link href="#trending">TRENDING</Nav.Link>
            <Nav.Link href="#anime">ANIME</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}

export default NavigationBar;
