import { render } from "react-dom";
import { screen } from "@testing-library/react";

const customerTable = {
    "customer": [
    {"customerId": 1, "name": "test_1", "email": "test_1@example.com", "address": "test_1 address", "phoneNumber": "52498657"},
    {"customerId": 2, "name": "test_2", "email": "test_2@example.com", "address": "test_2 address", "phoneNumber": "64975216"},
    {"customerId": 3, "name": "test_3", "email": "test_3@example.com", "address": "test_3 address", "phoneNumber": "35216745"}

    ]
};

function sum(a, b) {
    return a + b;
}

function Component_1(){
    return (
        <h3>Hello world</h3>
    );
}

function componentTest(){

    render(<Component_1></Component_1>);

    const textElement = screen.getByText("Hello world");

    expect(textElement).toBeInTheDocument();
}







