import { useEffect, useState } from 'react'
import React from 'react';

import { Button, Col, Container, Row, Stack } from 'react-bootstrap';
import { useTable } from 'react-table';
import ProductRepository from '../scripts/ProductRepository';
import DeleteModal from './DeleteModal';
import { Link, useLoaderData } from 'react-router-dom';

export async function rerender(){

  const products = await ProductRepository.readProduct();
  return products;

}

export async function loader(){

    const products = await ProductRepository.readProduct();
    return products;
    
}


function ProductTable(){

  const [isDeleteModalOpen, setModalOpen] = useState(false);
  const [deleteData, setDeleteData] = useState(null);

  const openDeleteModal = (data) => {
    setModalOpen(true);
    setDeleteData(data);
  };

  const closeDeleteModal = () => {
    setModalOpen(false);
  };

    
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
              <Link to= {'/updateForm/'.concat(row.original.productId)} className='btn btn-primary' role = 'button'>Update</Link>
              <Button onClick = {() => openDeleteModal(row.original)}>Delete</Button>
            </Stack>
          ),
  
        }
        ],[]
      );
  
    const productData = useLoaderData();

    
    
    const {
      headerGroups,
      rows,
      prepareRow,
    } = useTable({ columns, data: productData });


 
    function TableComponent(){

      return (
        <>
          <h1>Product table</h1>

          <hr></hr>

          <p>
            This is a dynamic data table component that connects the backend and frontend of a web application using RESTful APIs. It retrieves data from the server and presents it in a structured tabular format, allowing users to easily view and interact with the information.
          </p>

          {
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
                  <Link to= '/form' className='btn btn-primary' role = 'button' >Add Product</Link>
                </Col>
              </Row>
            </>
          }
        </>
      );
    }

    return (
    <>
      <TableComponent></TableComponent>

      <DeleteModal show={isDeleteModalOpen} eventClose={closeDeleteModal} targetData={deleteData}></DeleteModal>
    </>
    );
}

export default ProductTable;