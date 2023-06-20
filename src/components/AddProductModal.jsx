import {useState} from 'react';
import {Modal, Button, Form, Container, Row, Col, Stack, InputGroup} from 'react-bootstrap'
import ProductRepository from '../scripts/ProductRepository';
import {useFormik, useFormikContext} from 'formik';
import * as Yup from 'yup';


const categoryData = [
  {categoryId: 1, categoryName: 'Paper flower', categoryValue: 'PAPER_FLOWER'},
  {categoryId: 2, categoryName: 'Balloon', categoryValue: 'BALLONS'},
  {categoryId: 3, categoryName: 'Glassware', categoryValue: 'GLASSWARE'},
];

function AddProductModal({show, eventClose, rerenderEvent}){

  const original_productSchema = Yup.object().shape({
    productName: Yup.string().min(8, "Product name is too short").max(20, "Product name is too long").required("Product name is required"),
    category: Yup.string().required("Select a category"),
    productDesc: Yup.string().max(300, "Maximum characters of 300").required("Product description is required"),
    quantity: Yup.number().test('maxDigits','Quantity can have a maximum of 9 digits',value => value.toString().length <= 9
    ).required('Quantity is required').moreThan(-1,"Quantity cannot have negative value"),
    stockAlertQuantity: Yup.number().test('maxDigits','Stock alert quantity can have a maximum of 9 digits',value => value.toString().length <= 9
    ).required('Stock alert quantity is required').moreThan(-1,"Stock alert quantity cannot have negative value"),
    productPrice: Yup.number().test('maxDigits','Product price can have a maximum of 9 digits',value => value.toString().length <= 9
    ).required('Product price is required').moreThan(-1,"Product price cannot have negative value"),
    unitPrice: Yup.number().test('maxDigits','Unit price can have a maximum of 9 digits',value => value.toString().length <= 9
    ).required('Unit price is required').moreThan(-1,"Unit price cannot have negative value"),
    discount: Yup.number().min(0,"Yes").max(1,"No")
  })
  
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

  const handleFormClose = (values) => {
    formik.resetForm();
    formik.setErrors({});
    eventClose();
  }

  const handleFormSubmit = async (values) => {

    try {
      const response = await ProductRepository.createProduct(values);
      formik.resetForm();
      formik.setErrors({});
      eventClose();
      rerenderEvent();
    } catch (error) {
      console.error(error);
    }

    
  };
  
  const formik = useFormik({
    initialValues: emptyProductForm, 
    validationSchema: original_productSchema, 
    onSubmit: handleFormSubmit
  })
  
  

  return(
        // Showing is not working, and I don't know why
        <Modal show={show} onHide={handleFormClose} size='lg'>

          <Modal.Header closeButton>
            <Modal.Title>Add Product</Modal.Title>
          </Modal.Header>

            <Form noValidate onSubmit={formik.handleSubmit}>

              <Modal.Body>
                <Bootstrapform values={formik.values} errors={formik.errors} handleChange={formik.handleChange} touched={formik.touched} ></Bootstrapform>
              </Modal.Body>
        
              <Modal.Footer>

                <Button variant="secondary" onClick={handleFormClose}>
                  Close
                </Button>

                <Button variant="primary" type = "submit">
                  Submit
                </Button>

              </Modal.Footer>
            </Form>
            
      </Modal>
    
  );


}

function Bootstrapform({values, errors, touched, handleChange}){

  return (
    <Container>
      <Row className='mb-2'>
        <Col col={6}>
          <Form.Label>Product Name</Form.Label>

          <Form.Control type = 'text' 
          name = 'productName' 
          id = 'productName' 
          value={values.productName} 
          onChange={handleChange} 
          isInvalid={touched.productName && errors.productName}
          autoComplete='off'
          >

          </Form.Control>

        <Form.Control.Feedback type="invalid">
          {errors.productName}
        </Form.Control.Feedback>

        </Col>
        
        <Col col={6}>
          <Form.Label>Category</Form.Label>
          <Form.Select 
          name = 'category' 
          onChange={handleChange}
          value={values.category}
          isInvalid={touched.category && errors.category}
          autoComplete='off'
          >
            <option key={0} value = {"NONE"}>{"None"}</option>
            {
              categoryData.map((categoryItem) => renderOptions(categoryItem))
            }
          </Form.Select>

          <Form.Control.Feedback type="invalid">
            {errors.category}
          </Form.Control.Feedback>
        </Col>
      </Row>
      
      <Row className='mb-2'>
        <Col>
          <Form.Label>Product description</Form.Label>
          <Form.Control 
          as ="textarea" 
          name = 'productDesc' 
          rows={5} 
          placeholder='Maximum of 300 characters'
          value={values.productDesc}
          onChange={handleChange}
          isInvalid={touched.productDesc && errors.productDesc}
          autoComplete='off'
          >
          </Form.Control>

          <Form.Control.Feedback type="invalid">
            {errors.productDesc}
          </Form.Control.Feedback>

        </Col>
      </Row>

      <Row className='mb-2'>
        <Col col={6}>
          <Form.Label>Quantity</Form.Label>
          <Form.Control 
          type = 'number' 
          name = 'quantity' 
          onChange={handleChange}
          value={values.quantity}
          isInvalid={touched.quantity && errors.quantity}
          autoComplete='off'
          >

          </Form.Control>

          <Form.Control.Feedback type="invalid">
              {errors.quantity}
          </Form.Control.Feedback>
        </Col>

        

        <Col col={6}>
          <Form.Label>Stock alert</Form.Label>
          <Form.Control 
          type='number' 
          name = 'stockAlertQuantity' 
          onChange={handleChange}
          value={values.stockAlertQuantity}
          isInvalid={touched.stockAlertQuantity && errors.stockAlertQuantity}
          autoComplete='off'>

          </Form.Control>

          <Form.Control.Feedback type="invalid">
              {errors.stockAlertQuantity}
          </Form.Control.Feedback>
        </Col>
      </Row>

      <Row className='mb-2'>
              <Col col={6}>
                <Form.Label>Product price</Form.Label>
  
                <InputGroup>
                  <InputGroup.Text>₱</InputGroup.Text>
                  <Form.Control 
                  type = 'number' 
                  name = 'productPrice' 
                  onChange={handleChange}
                  value={values.productPrice}
                  isInvalid={touched.productPrice && errors.productPrice}
                  autoComplete='off'
                  >

                  </Form.Control>

                  <Form.Control.Feedback type="invalid">
                    {errors.productPrice}
                  </Form.Control.Feedback>
                </InputGroup>

                
        
              </Col>
              <Col col={6}>
                <Form.Label>Unit price</Form.Label>
  
                <InputGroup>
                  <InputGroup.Text>₱</InputGroup.Text>
                  <Form.Control 
                    type = 'number' 
                    name = 'unitPrice' 
                    onChange={handleChange}
                    value={values.unitPrice}
                    isInvalid={touched.unitPrice && errors.unitPrice}
                    autoComplete='off'>

                    </Form.Control>

                  <Form.Control.Feedback type="invalid">
                    {errors.unitPrice}
                  </Form.Control.Feedback>
                </InputGroup>

                
              </Col>
            </Row>

            <Row className='mb-2'>
              <Col col={1}>
                <Form.Label>Discount</Form.Label>
                <Form.Control 
                type='number' 
                name = 'discount' 
                onChange={handleChange}
                value={values.discount}
                isInvalid={touched.discount && errors.discount}
                autoComplete='off'>
                  
                </Form.Control>

              <Form.Control.Feedback type="invalid">
                  {errors.discount}
                </Form.Control.Feedback>
              </Col>
            
            </Row>

    </Container>
      
  );
}

function renderOptions(categoryItem){
  return (
    <option key={categoryItem.categoryId} value = {categoryItem.categoryValue}>{categoryItem.categoryName}</option>
  )
}


export default AddProductModal;