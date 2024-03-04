import { Navbar, Nav, Form, FormControl, Button, Row, Col, Container, NavDropdown } from 'react-bootstrap';


function Navigationbar() {
    return (
        <Navbar bg="dark">
        <Navbar.Brand href ="#">Navbar</Navbar.Brand>
    <Nav className="me-auto">
        <Nav.Link href="#home">Home</Nav.Link>
        <Nav.Link href="#info">Info</Nav.Link>
        <Nav.Link href="#help">Help</Nav.Link>
    </Nav>
    <Form>
        <Row>
            <Col xs="auto">
                <FormControl
                style={{background: "white"}}
                type="search"
                placeholder="search"
                className="me-2"
                aria-label="search"
                />
            </Col>
            <Col xs="auto">
                <Button variant="outline-success" type="submit">Search</Button>
            </Col>
        </Row>
    </Form>
  </Navbar>
    );
  }
  
  export default Navigationbar;
  