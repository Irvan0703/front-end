import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import './index.css';
import { Link } from 'react-router-dom';

const Header = () => {
  return(
    <div className='main'>
            <div > 
              <Navbar bg="primary" variant="dark" expand="lg">
                    <Container fluid>
                      <Navbar.Brand href="#">POS</Navbar.Brand>
                      <Navbar.Toggle aria-controls="navbarScroll" />
                      <Navbar.Collapse id="navbarScroll">
                        <Nav
                          className="me-auto my-2 my-lg-0"
                          style={{ maxHeight: '100px' }}
                          navbarScroll
                        >
                          <NavDropdown title="Kategori" id="navbarScrollingDropdown">
                            <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
                            <NavDropdown.Item href="#action4">
                              Another action
                            </NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action5">
                              Something else here
                            </NavDropdown.Item>
                          </NavDropdown>
                        </Nav>
                        <div className="container h-100">
                          <div className="d-flex justify-content-center h-100">
                            <div className="searchbar">
                              <input className="search_input" type="text" name="" placeholder="Search..."/>
                              <a href="#" className="search_icon"><i className="fa fa-search"></i></a>
                            </div>
                          </div>
                        </div>
                        <Link to="/Login"><i className='fa fa-user fa-2x'></i></Link>  
                          <i className='fa fa-shopping-cart fa-2x'></i>
                      </Navbar.Collapse>
                    </Container>
                  </Navbar>
                <br/>
            </div>
      </div>
  )
}

export default Header;