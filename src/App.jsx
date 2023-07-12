import 'bootstrap/dist/css/bootstrap.min.css';
import ProductTable from './components/ProductTable';
import { Button, Col, Container, Row, Stack, Nav, Navbar } from 'react-bootstrap';
import './styles/App.css';
import { Link, Outlet } from 'react-router-dom';



function App() {

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
                  <Link to = "/dashboard">Dashboard</Link>
                  <Link to = "/product">Products</Link>
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

export default App;