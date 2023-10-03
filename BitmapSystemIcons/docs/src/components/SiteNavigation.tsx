import { Navbar, Container, Nav } from "react-bootstrap"
import { Github } from "react-bootstrap-icons"

const SiteNavigation: React.FC = () => {
    return (
        <Navbar expand="lg" bg="dark" data-bs-theme="dark" sticky="top">
        <Container fluid={true}>
          <Navbar.Brand href="#intro">
            BitmapSystemIcons Docs
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="site-nav">
            <Nav className="me-auto">
              <Nav.Link href={"#intro"}>Introduction</Nav.Link>
              <Nav.Link href={"#usage"}>Usage</Nav.Link>
              <Nav.Link href={"#methods"}>Methods</Nav.Link>
              <Nav.Link href={"#icons"}>Icons</Nav.Link>
            </Nav>
            <Nav>
              <Nav.Link href={"https://github.com/medhursta/BitmapSystemIcons"}>
                <Github />
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    )
}

export default SiteNavigation;