import 'bootstrap/dist/css/bootstrap.min.css';
import ProductTable from './components/ProductTable';
import AdminNavBar from './components/AdminNavBar';
import SideNavBar from './components/SideNavBar';
import { Col, Container, Row } from 'react-bootstrap';
import ExampleForm from './components/ExampleForm';

function App() {

    return (

      <div className="App">

        <header>
          <AdminNavBar></AdminNavBar>
        </header>


        <Container fluid>
          <Row>
            <Col className='m-1' xs = {2}>
              <SideNavBar></SideNavBar>
            </Col>

            <Col className='m-1'>
              <ProductTable></ProductTable>
            </Col>
            
          </Row>
        </Container>

      </div>
    )
  
  }

export default App;