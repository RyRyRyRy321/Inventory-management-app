import {Modal, Button, Form, Container, Row, Col, Stack, InputGroup} from 'react-bootstrap'
import ProductRepository from '../scripts/ProductRepository';


function DeleteModal({show, eventClose, targetData, rerenderEvent}){

  const handleSubmit = async (e) => {
    e.preventDefault();

    const productId = targetData.productId
    
    try {
      await ProductRepository.deleteProduct(productId);
      rerenderEvent();
      eventClose();
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
  
            <Button variant="danger" type = "submit" onClick={handleSubmit}>
              Delete
            </Button>
  
          </Modal.Footer>
        </Modal>
      );
}

export default DeleteModal;