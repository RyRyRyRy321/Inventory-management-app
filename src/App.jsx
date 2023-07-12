import 'bootstrap/dist/css/bootstrap.min.css';
import ProductTable from './components/ProductTable';
import { Button, Col, Container, Row, Stack, Nav, Navbar } from 'react-bootstrap';
import './styles/App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

function App() {

  const router = createBrowserRouter([
    {
      path: "/",
      element: <h1>Hello world</h1>,
      children: [
        {

        }
      ]
    }
  ])

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
                  <Nav.Link>Products</Nav.Link>
                </Nav>
              </Navbar.Collapse>
            </Navbar>
          </Col>

          <Col>
            <main>
              <h1>Product table</h1>

              <hr></hr>

              <p>
                This is a dynamic data table component that connects the backend and frontend of a web application using RESTful APIs. It retrieves data from the server and presents it in a structured tabular format, allowing users to easily view and interact with the information.
              </p>

              <ProductTable></ProductTable>
            </main>
          </Col>
        </Row>

      </Container>
    </div>

  )

}

export default App;