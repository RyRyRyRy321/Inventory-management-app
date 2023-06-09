import {Modal, Button, Form, Container, Row, Col, Stack, InputGroup} from 'react-bootstrap'
import axios from 'axios';



function DeleteModal({show, eventClose, targetData, rerenderEvent}){

  const handleSubmit = async (e) => {
    e.preventDefault();

    
    try {
      const response = await axios.delete('http://localhost:5000/client/product/'.concat(targetData.productId));
      console.log("Product deleted"); // Handle the response data
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
            <p>You good?</p>
          </Modal.Body>
    
          <Modal.Footer>
  
            <Button variant="secondary" onClick={eventClose}>
              Close
            </Button>
  
            <Button variant="primary" type = "submit" onClick={handleSubmit}>
              Delete
            </Button>
  
          </Modal.Footer>
        </Modal>
      );
}

export default DeleteModal;