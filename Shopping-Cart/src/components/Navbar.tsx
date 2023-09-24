import {Container, Navbar as NavBs, NavLink,Nav} from "react-bootstrap";

export function Navbar(){
    return(
        <NavBs className="bg-white shadow-sm md-3">
            <Container>
                <Nav>
                    <Nav.Link to="/home" as={NavLink}></Nav.Link>
                </Nav>
            </Container>
        </NavBs>
    )
}