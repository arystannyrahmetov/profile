import {Navbar, Nav, NavDropdown, Container} from 'react-bootstrap';

function TopMenu() {

    return(
        <Navbar bg="light" expand="lg">
            <Container>
                <Navbar.Brand href="#home">arystannyrahmetov</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="#home">Главное</Nav.Link>
                        <Nav.Link href="#link">Ссылка</Nav.Link>
                        <NavDropdown title="Меню" id="basic-nav-dropdown">
                            <NavDropdown.Item href="#action/3.1">Пункт 1</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">Пункт 2</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">Пункт 3</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action/3.4">Пункт 4</NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>)
}

export default TopMenu;