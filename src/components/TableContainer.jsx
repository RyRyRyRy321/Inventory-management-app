import { Button, Col, Container, Form, FormControl, Row } from "react-bootstrap";
import CustomerTable from "./CustomerTable";


function TableContainer({customerData}){

    return (

        <Container flex className="customer-control">
            <Row>
                <Col style = {{ height: '10%'}}>
                    <Button className="m-1">Print</Button>
                    <Button className="m-1">View in Pdf</Button>
                </Col>

                <Col xs = {3} style = {{ height: '10%'}}>
                    <Form className="d-flex">
                        <FormControl className="m-1" type = "text"></FormControl>
                        <Button className="m-1" variant = "outline-secondary" type = "submit">Search</Button>
                    </Form>
                </Col>
            </Row>

            <Row>
                <Col>
                    <CustomerTable customerData = {customerData}></CustomerTable>
                </Col>
            </Row>
        </Container>



    );

}

export default TableContainer;