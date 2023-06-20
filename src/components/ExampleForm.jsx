import { Form, Row, Button } from "react-bootstrap";
import { Formik, Field } from 'formik';
import * as yup from 'yup';

const validationSchema = yup.object().shape({
    email: yup.string().email('Invalid email').required('Email is required'),
    password: yup.string().required('Password is required').min(8, "Password is too short"),
  });

function ExampleForm(){

    const handleFormSubmit = (values) => {
        // Handle form submission
        console.log(values);
      };
    
      return (
        <Formik
          initialValues={{
            email: '',
            password: '',
          }}
          validationSchema={validationSchema}
          onSubmit={handleFormSubmit}
        >
          {FormContent}
        </Formik>
      );
    
}

function FormContent({
    values,
    errors,
    touched,
    handleChange,
    handleBlur,
    handleSubmit
  }) {

    
    return (
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="email">
          <Form.Label>Email</Form.Label>
          <Form.Control
            type="email"
            name="email"
            placeholder="Enter your email"
            value={values.email}
            onChange={handleChange}
            onBlur={handleBlur}
            isInvalid={touched.email && !!errors.email}
          />
          <Form.Control.Feedback type="invalid">
            {errors.email}
          </Form.Control.Feedback>
        </Form.Group>
  
        <Form.Group controlId="password">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            name="password"
            placeholder="Enter your password"
            value={values.password}
            onChange={handleChange}
            onBlur={handleBlur}
            isInvalid={touched.password && !!errors.password}
          />
          <Form.Control.Feedback type="invalid">
            {errors.password}
          </Form.Control.Feedback>
        </Form.Group>
  
        <Button type="submit">Submit</Button>
      </Form>
    );
  }
  

export default ExampleForm;