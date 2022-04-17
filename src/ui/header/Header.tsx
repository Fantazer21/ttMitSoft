import 'bootstrap/dist/css/bootstrap.css'
import {Nav, Navbar, Container, Offcanvas} from 'react-bootstrap'
import {NavLink} from "react-router-dom";

import s from './styles.module.css'
import {routePath} from "../../bll/routePaths";

export function Header() {
    return (
        <>
            <Navbar bg='dark' variant='dark' expand={false} fixed='top'>
                <Container fluid>
                    <Navbar.Brand href='#'>Logo</Navbar.Brand>
                    <Navbar.Toggle  aria-controls='offcanvasNavbar' />
                    <Navbar.Offcanvas
                        id='offcanvasNavbar'
                        aria-labelledby='offcanvasNavbarLabel'
                        placement='start'
                        backdrop={false}>
                        <Offcanvas.Body>
                            <Nav className='justify-content-end flex-grow-1 pe-3'>
                                <NavLink className={s.navLink} to={routePath.ABOUT_ME}>About me</NavLink>
                                <NavLink className={s.navLink} to={routePath.GALLERY}>Gallery</NavLink>
                            </Nav>
                        </Offcanvas.Body>
                    </Navbar.Offcanvas>
                </Container>
            </Navbar>
        </>
    );
}