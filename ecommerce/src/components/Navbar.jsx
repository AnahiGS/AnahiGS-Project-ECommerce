import React from "react";
import { Button, Container,Form,Nav,Navbar,NavDropdown, Stack} from "react-bootstrap";
import { useProductContext } from "../context/ProductContext";
import { useContext } from "react";
import {AuthContext} from '../context/AuthContext'
import icon from '../assets/cart-outline.svg'



const NavbarComponent = () => {
  const {isAuth, logout } =useContext(AuthContext)

  const context = useProductContext()
  const handleSearch = (event) => {
    context.setSearch(event.target.value)
  }

  return (
    
      <Navbar expand="lg" variant="light" bg="light" >
        <Container>
          <Navbar.Brand href="/">E-commerce</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="/">Home</Nav.Link>
              <Nav.Link href="#link">Link</Nav.Link>
              <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                  Another action
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">
                  Something
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">
                  Separated link
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
            
            <Stack direction="horizontal" gap={3} >
            <Form className="d-flex">
              <Form.Control
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
                onChange={handleSearch}
              />
              <Button variant="outline-success">Search</Button>
            </Form>
            {
              !isAuth
                ? (
                  <>
                    <div className="signUp" >
                      <Nav.Link href='/signup'>Sign up </Nav.Link>
                    </div>
                    <div className="Login" >
                      <Nav.Link href='/login'> Log in</Nav.Link>
                    </div>
                  </>
                  ) : (
                    <>
                      
                      <Nav.Link href='/carshopping'><img className='mb' src={icon} alt='shopping-car'  width='28' height='45'/> </Nav.Link> 
                      <div className="User" >
                      <Nav.Link href='/'>User </Nav.Link>
                      </div>
                      <div className="Log-out" >
                        <Nav.Link href='/' onClick={logout}> Log out</Nav.Link>
                      </div> 
                    </>
                  )
                  }
            </Stack>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    
  );
};

export default NavbarComponent;
