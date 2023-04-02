import { useState, useEffect } from 'react';
import {Modal, Button, Form} from 'react-bootstrap'

function CustomerTable({customerData}){

    return (
      <div>
        <table className="table table-striped">
          <thead className="text-center">
            <tr>
              <th scope="col">Name</th>
              <th scope="col">Email</th>
              <th scope="col">Address</th>
              <th scope="col">Phone number</th>
              <th scope="col">Actions</th>
            </tr>
          </thead>

          <tbody className="text-start align-middle">
            {
              customerData.map(displayCustomerData)
            }
          </tbody>
        </table>

        <UpdateCustomerModal show={show}></UpdateCustomerModal>
      </div>
    );

}

function displayCustomerData(item){

  if (item === null){
      return (<LoadingComponent></LoadingComponent>);
  }
  
  return(
    <CustomerRow key = {item.customerId} customerItem = {item}></CustomerRow>
  );
  
}

function CustomerRow({customerItem, eventShow, eventDelete}){

    return(
      <tr>
        <td>{customerItem.name}</td>
        <td>{customerItem.email}</td>
        <td>{customerItem.address}</td>
        <td>{customerItem.phoneNumber}</td>

        <td>
            <button className='btn btn-outline-primary m-1' onClick = {eventShow}>Update</button>
            <button className='btn btn-outline-danger m-1' onClick = {eventDelete}>Delete</button>
        </td>

      </tr>
    );
}

function LoadingComponent(props){
  return (
    <p>Loading...</p>
  );
}

function UpdateCustomerModal({show, eventClose}){

    return (
      <Modal show={show} onHide={eventClose}>
        <Modal.Header closeButton>
          <Modal.Title>Update Customer</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <Form.Label>Name</Form.Label>
          <Form.Control type = "text" placeholder='Enter username'></Form.Control>

          <Form.Label>Email</Form.Label>
          <Form.Control type = "email" placeholder='Enter email'></Form.Control>

          <Form.Label>Address</Form.Label>
          <Form.Control type = "text" placeholder='Enter address'></Form.Control>

          <Form.Label>Phone Number</Form.Label>
          <Form.Control type = "text" placeholder='Enter phone number'></Form.Control>
        </Modal.Body>

        <Modal.Footer>
          <Button variant="secondary" onClick={eventClose}>
            Close
          </Button>
          <Button variant="primary" onClick={eventClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    );

    
}

export default CustomerTable;