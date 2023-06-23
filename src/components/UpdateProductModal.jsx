import { useEffect, useState} from 'react';
import {Modal, Button, Form, Container, Row, Col, Stack, InputGroup} from 'react-bootstrap'
import ProductRepository from '../scripts/ProductRepository';
import {useFormik} from 'formik';
import * as Yup from 'yup'; 
import ProductForm from './ProductForm';


const categoryData = [

  {categoryId: 1, categoryName: 'Paper flower', categoryValue: 'PAPER_FLOWER'},
  {categoryId: 2, categoryName: 'Balloon', categoryValue: 'BALLONS'},
  {categoryId: 3, categoryName: 'Glassware', categoryValue: 'GLASSWARE'},

];

function UpdateCustomerModal({show, eventClose, targetData, rerenderEvent}){

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

  useEffect(
    () => {
      formik.setValues(emptyProductForm)
    },
    []
  )

  const handleFormClose = (values) => {
    formik.resetForm();
    formik.setErrors({});
    eventClose();
  }

  const handleFormSubmit = async (values) => {

    const productId = targetData.productId;

    try {

      const response = await ProductRepository.updateProduct(productId, values);
      formik.resetForm();
      formik.setErrors({});
      eventClose();
      rerenderEvent();
    } catch (error) {
      console.error(error);
    }

    
  }

  const formik = useFormik({
    initialValues: targetData,
    enableReinitialize: true,
    validationSchema: original_productSchema,
    onSubmit: handleFormSubmit
  })

  


    return (
      <Modal show={show} onHide={handleFormClose} size='lg'>
  
        <Modal.Header closeButton>
          <Modal.Title>Update Product</Modal.Title>
        </Modal.Header>

        <Form noValidate onSubmit={formik.handleSubmit}>

          <Modal.Body>

          <ProductForm values={formik.values} errors={formik.errors} handleChange={formik.handleChange} touched={formik.touched} categoryData={categoryData} ></ProductForm>



            
          
    
          </Modal.Body>
  
          <Modal.Footer>
            <Button variant="secondary" onClick={eventClose}>
              Close
            </Button>
            <Button variant="primary" onClick={formik.handleSubmit}>
              Save Changes
            </Button>
          </Modal.Footer>
        </Form>
      </Modal>
    );
  
    
}

function renderOptions(categoryItem){
  return (
    <option key={categoryItem.categoryId} value = {categoryItem.categoryValue}>{categoryItem.categoryName}</option>
  )
}


export default UpdateCustomerModal;