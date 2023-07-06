import 'bootstrap/dist/css/bootstrap.min.css';
import ProductTable from './components/ProductTable';
import { Col, Container, Row } from 'react-bootstrap';
import './styles/App.css';

function App() {

    return (

      <div className="App">
        <Container className='tableContainer'>
          <h1>REST table</h1>

          <hr></hr>
          
          <p>
            This is a dynamic data table component that connects the backend and frontend of a web application using RESTful APIs. It retrieves data from the server and presents it in a structured tabular format, allowing users to easily view and interact with the information.
          </p>

          <ProductTable></ProductTable>
        </Container>
      </div>

    )
  
  }

export default App;