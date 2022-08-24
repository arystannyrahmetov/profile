import {Navbar, Nav, NavDropdown, Container} from 'react-bootstrap';
import {Link} from "react-router-dom";

function TopMenu() {

    return(
        <Navbar bg="light" expand="lg">
            <Container>
                <Navbar.Brand>
                    <Link to="/profile" className="link-secondary">arystannyrahmetov</Link>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link>
                            <Link to="/profile" className="link-secondary">Главное</Link>
                        </Nav.Link>
                        <Nav.Link>
                            <Link to="/profile" className="link-secondary">Ссылка</Link>
                        </Nav.Link>
                        <NavDropdown title="Статьи" id="basic-nav-dropdown">
                            <NavDropdown.Item>
                                <Link to="/profile/articles" className="link-secondary">Статьи</Link>
                            </NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item>
                                <Link to={'/profile/write_article'} className="link-secondary">Написать статью</Link>
                            </NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>)
}

export default TopMenu;