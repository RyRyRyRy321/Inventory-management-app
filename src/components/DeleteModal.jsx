import {Modal, Button, Container, Row, Col, Stack, InputGroup} from 'react-bootstrap'
import ProductRepository from '../scripts/ProductRepository';
import { Form, useNavigate } from 'react-router-dom';


function DeleteModal({show, eventClose, targetData}){

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const productId = targetData.productId
    
    try {
      await ProductRepository.deleteProduct(productId);
      eventClose();
      navigate("/");
    } catch (error) {
      console.error(error);
    }
    


  };

    return (
        <Modal show={show} onHide={eventClose} size='lg'>
    
          <Modal.Header closeButton>
            <Modal.Title>Delete Item</Modal.Title>
          </Modal.Header>
    
          <Modal.Body>
            <p>Are you sure you want to delete this item?</p>
          </Modal.Body>
    
          <Modal.Footer>
  
            <Button variant="secondary" onClick={eventClose}>
              Close
            </Button>

            <Form onSubmit={handleSubmit}>
              <Button variant="danger" type = "submit" >
                Delete
              </Button>
            </Form>

  
          </Modal.Footer>
        </Modal>
      );
}

export default DeleteModal;