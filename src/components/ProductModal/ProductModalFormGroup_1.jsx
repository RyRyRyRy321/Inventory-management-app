import { Col, Form} from "react-bootstrap";


function ProductModalFormGroup_1(){
    return (
        <>
            <Col col={6}>
                <Form.Label>Product Name</Form.Label>

                <Form.Control 
                    type = 'text' 
                    name = 'productName' 
                    id = 'productName'
                    ></Form.Control>

                <Form.Control.Feedback type = "invalid">
                    
                </Form.Control.Feedback>

            </Col>     
        </>    
    )
}

export default ProductModalFormGroup_1;