import { useEffect, useState } from 'react'
import React from 'react';

import { Button, Col, Container, Row, Stack } from 'react-bootstrap';
import { useTable } from 'react-table';
import ProductRepository from '../scripts/ProductRepository';
import UpdateCustomerModal from './UpdateProductModal';
import AddProductModal from './AddProductModal';
import DeleteModal from './DeleteModal';
import AddProductForm from './AddProductModal';


function ProductTable(){

    
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
        },
        {
          Header: 'Actions',
          Cell: ({row}) => (
            <Stack direction='horizontal' gap = {1}>
              <Button onClick={() => openModalUpdate(row)}>Update</Button>
              <Button onClick={() => openModalDelete(row)}>Delete</Button>
            </Stack>
          ),
  
        }
        ],[]
      );
      const [deleteData, setDeleteData] = useState([]);
      const [updateData, setUpdateData] = useState([]);
      const [data, setProductData] = useState([]);
      const [modalOpen, setModalOpen] = useState(false);
      const [modalOpenUpdate, setModalOpenUpdate] = useState(false);
      const [modalOpenDelete, setModalOpenDelete] = useState(false);
      
  
      const openModal = () => {
        setModalOpen(true);
      };
    
      const closeModal = () => {
        setModalOpen(false);
      };
  
      const openModalUpdate = (row) => {
        setModalOpenUpdate(true);
        setUpdateData(row.original);
      };
    
      const closeModalUpdate = () => {
        setModalOpenUpdate(false);
      };
  
      const openModalDelete = (row) => {
        setModalOpenDelete(true);
        setDeleteData(row.original);
      };
    
      const closeModalDelete = () => {
        setModalOpenDelete(false);
      };
  
      async function fetchData(){
        try {
          const productData = await ProductRepository.readProduct();
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
        <>
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
                })
                }

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

        <AddProductForm show={modalOpen} eventClose={closeModal} rerenderEvent={fetchData}></AddProductForm>
        <UpdateCustomerModal show={modalOpenUpdate} eventClose={closeModalUpdate} targetData={updateData} rerenderEvent={fetchData}></UpdateCustomerModal>
        <DeleteModal show={modalOpenDelete} eventClose={closeModalDelete} targetData={deleteData} rerenderEvent={fetchData}></DeleteModal>
        </>
    );
}

export default ProductTable;