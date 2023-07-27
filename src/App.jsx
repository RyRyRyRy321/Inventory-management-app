import 'bootstrap/dist/css/bootstrap.min.css';
import ProductTable from './components/ProductTable';
import { Button, Col, Container, Row, Stack, Nav, Navbar } from 'react-bootstrap';
import './styles/App.css';
import { Link, Outlet } from 'react-router-dom';
import { SideBar } from './components/SideBar';
import { AdminNavBar } from './components/AdminNavBar';



function App() {

  return (

    <div className="App">

      <Container className='tableContainer' fluid>
      <AdminNavBar></AdminNavBar>
      
        <Row>
          <Col md = {2}>
            <SideBar></SideBar>
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