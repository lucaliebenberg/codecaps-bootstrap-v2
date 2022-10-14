import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

function NavbarComponent() {
  return (
    <Navbar expand="lg" variant="dark" style={{ backgroundColor: "#141B25" }}>
      <Container>
        <img
          src="https://i.ibb.co/HTLZ6yY/Code-Capsules-logo-dark-Mode.png"
          width="50"
          height="100%"
          alt="Code Capsules logo"
          style={{
            paddingRight: 4
          }}
        />
        <Navbar.Brand href="#home" className="text-white">
          Code Capsules
        </Navbar.Brand>
        <Navbar.Toggle
          className="text-white"
          aria-controls="basic-navbar-nav"
        />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto text-white">
            <Nav.Link href="#home" className=" text-white">
              All Capsules
            </Nav.Link>
            <Nav.Link href="#community" className=" text-white">
              Community
            </Nav.Link>
            <Nav.Link href="#status" className=" text-white">
              Status
            </Nav.Link>
            <Nav.Link href="#hosting" className=" text-white">
              Hosting
            </Nav.Link>
            <Nav.Link href="#cloud" className=" text-white">
              Cloud
            </Nav.Link>
            <Nav.Link href="#technology" className=" text-white">
              Technology
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavbarComponent;
