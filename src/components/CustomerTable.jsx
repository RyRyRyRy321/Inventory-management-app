import { useState, useEffect } from 'react';
import {Modal, Button, Form, Container, Row, Col, Stack, InputGroup} from 'react-bootstrap'

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

function UpdateCustomerModal({show, eventClose, targetData}){

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    address: '',
    phoneNumber: ''
  });

  return (
    <Modal show={show} onHide={eventClose} size='lg'>

      <Modal.Header closeButton>
        <Modal.Title>Update Customer</Modal.Title>
      </Modal.Header>

      <Modal.Body>
      <Form>
        <Container>
          <Row className='mb-2'>
            <Col col={6}>
              <Form.Label>Product Name</Form.Label>
              <Form.Control type = 'text'></Form.Control>
            </Col>
            <Col col={6}>
              <Form.Label>Category</Form.Label>
              <Form.Select aria-label="Default select example">
                <option value="test_1">option 1</option>
                <option value="test_2">option 2</option>
                <option value="test_3">option 3</option>
              </Form.Select>
            </Col>
          </Row>
          <Row className='mb-2'>
            <Col>
              <Form.Label>Product description</Form.Label>
              <Form.Control as ="textarea" rows={5} placeholder='Maximum of 300 characters'></Form.Control>
            </Col>
          </Row>
          <Row className='mb-2'>
            <Col col={6}>
              <Form.Label>Quantity</Form.Label>
              <Form.Control type = 'number'></Form.Control>
            </Col>

            <Col col={6}>
              <Form.Label>Stock alert</Form.Label>
              <Form.Control type='number'></Form.Control>
            </Col>

          </Row>
          <Row className='mb-2'>
            <Col col={6}>
              <Form.Label>Product price</Form.Label>

              <InputGroup>
                <InputGroup.Text>₱</InputGroup.Text>
                <Form.Control type = 'number'></Form.Control>
              </InputGroup>
      
            </Col>
            <Col col={6}>
              <Form.Label>Unit price</Form.Label>

              <InputGroup>
                <InputGroup.Text>₱</InputGroup.Text>
                <Form.Control type = 'number'></Form.Control>
              </InputGroup>
              
            </Col>
          </Row>
          <Row className='mb-2'>
            <Col col={1}>
              <Form.Label>Discount</Form.Label>
              <Form.Control type='number'></Form.Control>
            </Col>
            
            <Col>
              <Form.Label>Product Image</Form.Label>
              <Form.Control type='file'></Form.Control>
            </Col>
          </Row>
        </Container>
      </Form>

        {/* <Form.Label>Name</Form.Label>
        <Form.Control name='name' type = "text" placeholder={targetData.name} value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} ></Form.Control>

        <Form.Label>Email</Form.Label>
        <Form.Control name='email' type = "email" placeholder={targetData.email} value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} ></Form.Control>

        <Form.Label>Address</Form.Label>
        <Form.Control name='address' type = "text" placeholder={targetData.address} value={formData.address} onChange={(e) => setFormData({ ...formData, address: e.target.value })} ></Form.Control>

        <Form.Label>Phone Number</Form.Label>
        <Form.Control name='phoneNumber' type = "text" placeholder={targetData.phoneNumber} value={formData.phoneNumber} onChange={(e) => setFormData({ ...formData, phoneNumber: e.target.value })} ></Form.Control> */}
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

function LoadingComponent(props){
  return (
    <p>Loading...</p>
  );
}

export default CustomerTable;