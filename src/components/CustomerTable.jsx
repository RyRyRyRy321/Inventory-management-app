import { useState, useEffect } from 'react';
import {Modal, Button, Form, Container, Row, Col, Stack, InputGroup} from 'react-bootstrap'
import UpdateCustomerModal from './UpdateProductModal';
import "../styles/customer_table.css"

function CustomerTable({customerData}){

  return (

      <table className="product-table table table-striped table-bordered">
        <thead className="text-center table-dark">
          <tr>
            <th scope="col">Id</th>
            <th scope="col">Name</th>
            <th scope="col">Email</th>
            <th scope="col">Address</th>
            <th scope="col">Phone number</th>
            <th scope="col">Actions</th>
          </tr>
        </thead>
        <tbody className="text-start align-middle">
          {
            customerData.map((item) => displayCustomerData(item))
          }
        </tbody>
      </table>
    
  );

}

function displayCustomerData(item, eventDelete){

  if (item === null){
      return (<LoadingComponent></LoadingComponent>);
  }
  
  return(
    <CustomerRow key = {item.customerId} customerItem = {item} eventDelete = {eventDelete}></CustomerRow>
  );
  
}

function CustomerRow({customerItem, eventDelete}){

  const [show, setShow] = useState(false);


  const handleShowUpdateModal = (event) => {
    setShow(true);
  };

  const handleDontShowUpdateModal = (event) => {
    setShow(false);
  };

  return(
    <>
      <tr>
        <td>{customerItem.customerId}</td>
        <td>{customerItem.name}</td>
        <td>{customerItem.email}</td>
        <td>{customerItem.address}</td>
        <td>{customerItem.phoneNumber}</td>

        <td>
            <button className='btn btn-outline-primary m-1' onClick = {handleShowUpdateModal}>Update</button>
            <button className='btn btn-outline-danger m-1' onClick = {eventDelete}>Delete</button>
        </td>

      </tr>

      <UpdateCustomerModal show={show} eventClose={handleDontShowUpdateModal} targetData={customerItem}></UpdateCustomerModal>
    </>
  );

}


function LoadingComponent(props){
  return (
    <p>Loading...</p>
  );
}

export default CustomerTable;