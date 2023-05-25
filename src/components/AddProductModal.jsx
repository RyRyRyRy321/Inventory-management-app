import { useState} from 'react';
import {Modal, Button, Form, Container, Row, Col, Stack, InputGroup} from 'react-bootstrap'
import axios from 'axios';

function AddCustomerModal({show, eventClose}){

  const emptyProductForm = {
    productName:'',
    category:'NONE',
    productDesc:'',
    quantity:'',
    stockAlertQuantity:'',
    productPrice:'',
    unitPrice:'',
    discount:'',
  }

  const [productFormData, setProductFormData] = useState(emptyProductForm);
  
  const categoryData = [

    {categoryId: 1, categoryName: 'Paper flower', categoryValue: 'PAPER_FLOWER'},
    {categoryId: 2, categoryName: 'Balloon', categoryValue: 'BALLON'},
    {categoryId: 3, categoryName: 'Glassware', categoryValue: 'GLASSWARE'},
  ];

  const handleChange = (e) => {
    setProductFormData({ ...productFormData, [e.target.name]: e.target.value });
  };
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    debugger;

    try {
      const response = await axios.post('http://localhost:5000/client/product', productFormData);
      console.log(response.data); // Handle the response data
      setProductFormData(emptyProductForm);
    } catch (error) {
      console.error(error);
    }

    debugger;
  };




    return (
      <Modal show={show} onHide={eventClose} size='lg'>
  
        <Modal.Header closeButton>
          <Modal.Title>Add Product</Modal.Title>
        </Modal.Header>
  
        <Modal.Body>
        <Form>
          <Container>
            <Row className='mb-2'>
              <Col col={6}>
                <Form.Label>Product Name</Form.Label>
                <Form.Control type = 'text' name = 'productName' value={productFormData.productName} onChange={handleChange}></Form.Control>
              </Col>
              <Col col={6}>
                <Form.Label>Category</Form.Label>
                <Form.Select aria-label="Default select example" name = 'category' value = {productFormData.category} onChange={handleChange}>
                  <option>Open this select menu</option>
                  {
                    categoryData.map((categoryItem) => renderOptions(categoryItem))
                  }
                </Form.Select>
              </Col>
            </Row>
            <Row className='mb-2'>
              <Col>
                <Form.Label>Product description</Form.Label>
                <Form.Control as ="textarea" rows={5} name = 'productDesc' placeholder='Maximum of 300 characters' value = {productFormData.productDesc} onChange={handleChange}></Form.Control>
              </Col>
            </Row>
            <Row className='mb-2'>
              <Col col={6}>
                <Form.Label>Quantity</Form.Label>
                <Form.Control type = 'number' name = 'quantity' value={productFormData.quantity} onChange={handleChange}></Form.Control>
              </Col>
  
              <Col col={6}>
                <Form.Label>Stock alert</Form.Label>
                <Form.Control type='number' name = 'stockAlertQuantity' value = {productFormData.stockAlertQuantity} onChange={handleChange}></Form.Control>
              </Col>
  
            </Row>
            <Row className='mb-2'>
              <Col col={6}>
                <Form.Label>Product price</Form.Label>
  
                <InputGroup>
                  <InputGroup.Text>₱</InputGroup.Text>
                  <Form.Control type = 'number' name = 'productPrice' value = {productFormData.productPrice} onChange={handleChange}></Form.Control>
                </InputGroup>
        
              </Col>
              <Col col={6}>
                <Form.Label>Unit price</Form.Label>
  
                <InputGroup>
                  <InputGroup.Text>₱</InputGroup.Text>
                  <Form.Control type = 'number' name = 'unitPrice' value = {productFormData.unitPrice} onChange={handleChange}></Form.Control>
                </InputGroup>
                
              </Col>
            </Row>
            <Row className='mb-2'>
              <Col col={1}>
                <Form.Label>Discount</Form.Label>
                <Form.Control type='number' name = 'discount' value = {productFormData.discount} onChange={handleChange}></Form.Control>
              </Col>
              
              {/* <Col>
                <Form.Label>Product Image</Form.Label>
                <Form.Control type='file'></Form.Control>
              </Col> */}
            </Row>
          </Container>
        </Form>
  
        </Modal.Body>
  
        <Modal.Footer>

          <Button variant="secondary" onClick={eventClose}>
            Close
          </Button>

          <Button variant="primary" type = "submit" onClick={handleSubmit}>
            Submit
          </Button>

        </Modal.Footer>
      </Modal>
    );
  
    
}

function renderOptions(categoryItem){
  return (
    <option key={categoryItem.categoryId} value = {categoryItem.categoryValue}>{categoryItem.categoryName}</option>
  )
}


export default AddCustomerModal;