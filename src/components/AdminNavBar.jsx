import { Button, Col, Form, Row, Stack } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link, Outlet } from 'react-router-dom';



export function AdminNavBar(){
    return (
    <Navbar expand="lg" className="bg-body-tertiary">
        <Container fluid>
            <Col md = {2}>
            <Navbar.Brand className='ms-2'>Inventory Management</Navbar.Brand>

            </Col>

            <Col>

                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">

                    <Form className='mx-auto d-flex flex-row w-25'> 
                        <Form.Control placeholder='Search'></Form.Control>
                        <Button type = 'submit' className='ms-1'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-search" viewBox="0 0 16 16">
                                <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/>
                            </svg>
                        </Button>
                    </Form>
           
                </Navbar.Collapse>
            </Col>

            <Col md = {2}>
                <Stack className='justify-content-end' direction='horizontal'>
                    <Button className='btn btn-primary m-1' role='button'>
                        Login
                    </Button>

                    <Button className='btn btn-primary m-1' role='button'>
                        Register
                    </Button>
                </Stack>
            </Col>


            
        </Container>
  </Navbar>
  );
}