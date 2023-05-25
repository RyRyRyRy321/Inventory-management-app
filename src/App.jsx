import { useEffect, useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';


import axios from 'axios';
import React from 'react';
import AdminNavBar from './components/AdminNavBar';
import SideNavBar from './components/SideNavBar';
import { Button, Col, Container, Row } from 'react-bootstrap';
import { useTable } from 'react-table';
import ProductRepository from './scripts/ProductRepository';
import UpdateCustomerModal from './components/UpdateProductModal';
import AddCustomerModal from './components/AddProductModal';

function App() {

    const columns = React.useMemo(() => [

      {
        Header: 'Product Id',
        accessor: 'productId'
      },
      {
        Header: 'Product name',
        accessor: 'productName'
      },
      {
        Header: 'Category',
        accessor: 'category'
      },
      {
        Header: 'Product Description',
        accessor: 'productDesc'
      },
      {
        Header: 'Quantity',
        accessor: 'quantity'
      }
      ],[]
    );
    
    const [data, setProductData] = useState([]);
    const [modalOpen, setModalOpen] = useState(false);
    

    const openModal = () => {
      setModalOpen(true);
    };
  
    const closeModal = () => {
      setModalOpen(false);
    };

    async function fetchData(){
      try {
        const productData = await ProductRepository.getProduct();
        setProductData(productData);
      } catch (error) {
        console.log(error);
        setProductData(productData);
      }
    }
  
    useEffect(() => {fetchData()},[]);
  
    
    const {
      headerGroups,
      rows,
      prepareRow,
    } = useTable({ columns, data })



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
            <table className = "table table-bordered">
              <thead>
                {// Loop over the header rows
                headerGroups.map(headerGroup => (
                  // Apply the header row props
                  <tr {...headerGroup.getHeaderGroupProps()}>
                    {// Loop over the headers in each row
                    headerGroup.headers.map(column => (
                      // Apply the header cell props
                      <th {...column.getHeaderProps()}>
                        {// Render the header
                        column.render('Header')}
                      </th>
                    ))}
                  </tr>
                ))}
              </thead>

              <tbody>
                {// Loop over the table rows
                rows.map(row => {
                  // Prepare the row for display
                  prepareRow(row)

                  return (
                    <tr>
                      {// Loop over the rows cells
                      row.cells.map(cell => {
                        // Apply the cell props
                        return (
                          <td>
                            {// Render the cell contents
                            cell.render('Cell')}
                          </td>
                        )
                      })}
                    </tr>
                  )
                })}
              </tbody>
            </table>

              <Row>
                <Col>
                  <Button onClick = {openModal}>Add Product</Button>
                </Col>
              </Row>
            </Col>
            
          </Row>

          
        <AddCustomerModal show={modalOpen} eventClose={closeModal} rerenderEvent={fetchData}></AddCustomerModal>
          
        </Container>

      </div>
    )
  
  }

export default App
