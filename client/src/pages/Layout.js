import { Outlet } from 'react-router-dom';
import { LinkContainer } from 'react-router-bootstrap';

import { Navbar, Container, Nav} from 'react-bootstrap/';

const brandStyle = {
    fontSize: "1.5em"
}

export default function Layout() {
    return (
        <>
            <Navbar fixed="top" bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand style={brandStyle} >Wavelength</Navbar.Brand>
                    <Nav className="me-auto">
                        <LinkContainer to="/">
                            <Nav.Link>Home</Nav.Link>
                        </LinkContainer>
                        <LinkContainer to="/skills">
                            <Nav.Link>Skills</Nav.Link>
                        </LinkContainer>
                    </Nav>
                </Container>
            </Navbar>
            <Outlet />
        </>
        
    );
}