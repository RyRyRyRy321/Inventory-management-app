import {Form, Container, Row, Col, InputGroup} from 'react-bootstrap'


function ProductForm({values, errors, touched, handleChange, categoryData}){

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


export default ProductForm;