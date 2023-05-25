import {Modal, Button, Form, Container, Row, Col, Stack, InputGroup} from 'react-bootstrap'



function DeleteModal({show, eventClose, rerenderEvent}){

    return (
        <Modal show={show} onHide={eventClose} size='lg'>
    
          <Modal.Header closeButton>
            <Modal.Title>Delete Item</Modal.Title>
          </Modal.Header>
    
          <Modal.Body>
            <p>You good?</p>
          </Modal.Body>
    
          <Modal.Footer>
  
            <Button variant="secondary" >
              Close
            </Button>
  
            <Button variant="primary" type = "submit">
              Delete
            </Button>
  
          </Modal.Footer>
        </Modal>
      );
}

export default DeleteModal;