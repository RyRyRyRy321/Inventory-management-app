import { useState} from 'react';
import {Modal, Button, Form, Container, Row, Col, Stack, InputGroup} from 'react-bootstrap'


function UpdateCustomerModal({show, eventClose, targetData}){

  const productForm = {
    productName:'',
    category:'',
    productDesc:'',
    quantity:'',
    stockAlertQuantity:'',
    productPrice:'',
    unitPrice:'',
    discount:'',
    productImage:''
  }

    const [productFormData, setProductFormData] = useState(productForm);
  
    return (
      <Modal show={show} onHide={eventClose} size='lg'>
  
        <Modal.Header closeButton>
          <Modal.Title>Update Product</Modal.Title>
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

export default UpdateCustomerModal;