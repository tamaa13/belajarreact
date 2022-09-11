import { Navbar, Container, Nav, NavDropdown} from "react-bootstrap";

const Navigation = () => {
    return (
        <Navbar bg="dark"  variant="dark" expand="lg">
        <Container>
          <Navbar.Brand>Arif Novrian Pratama
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="/home">Home</Nav.Link>
              <Nav.Link href="/albums">Albums</Nav.Link>
              <Nav.Link href="/posts">Post</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    )
}

export default Navigation