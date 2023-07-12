
export default function Root(){


    return (

        <div className="App"> 
          <Container className='tableContainer' fluid>
    
            <Row>
    
              <Col md = {2}>
                <Navbar bg="light" variant="light" className="d-flex flex-column">
                  <Navbar.Brand className='d-flex flex-column align-items-center'>Inventory Management</Navbar.Brand>
                  <Navbar.Toggle aria-controls="basic-navbar-nav" />
    
                  <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="flex-column align-items-start ">
                      <Nav.Link>Dashboard</Nav.Link>
                      <Nav.Link><Link to>Products</Link></Nav.Link>
                    </Nav>
                  </Navbar.Collapse>
                </Navbar>
              </Col>
    
              <Col>
                <main>
                  <Outlet></Outlet>
                </main>
              </Col>
            </Row>
    
          </Container>
        </div>
    
      )
}