import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import 'bootstrap/dist/css/bootstrap.min.css';

import axios from 'axios';
import React from 'react';
import './App.css'
  

function App() {


  return (

    <div className="App">

      <CustomerHeader></CustomerHeader>
      <CustomerTable></CustomerTable>
      
    </div>

  )
  

  function ExampleForm(){

    const [userName, setUserName] = useState("");

    function eventChanged(event){
      setUserName(event.target.value);
    }

    function submitForm(event){
      event.preventDefault();
      console.log("The username is " + userName);
    }

    return (

      <form onSubmit={submitForm}>
        <label htmlFor='userName' className="form-label">Name</label>
        <input className="form-control" type= "text" name = "userName" value={userName} onChange={eventChanged}></input>
        <button className="btn btn-primary" type='submit'>Submit</button> 
      </form>

    );

      
  }

  function ExampleForm_2(){

    const [formData, setFormData] = useState({userName: "", email: ""});

    function eventChanged(event){
      setFormData({...formData, [event.target.name]: event.target.value});
    }

    function submitForm(event){
      event.preventDefault();

      console.table(formData);

    }

    return (

      <form onSubmit={submitForm}>
        <label htmlFor='userName' className="form-label">Name</label>
        <input className="form-control" type= "text" name = "userName" value={formData.userName} onChange={eventChanged} required></input>
        
        <label htmlFor='email' className="form-label">Email</label>
        <input className="form-control" type= "email" name = "email" value={formData.email} onChange={eventChanged} required></input>
        
        
        <button className="btn btn-primary" type='submit'>Submit</button> 
      </form>

    );

      
  }

  function CustomerHeader(props){
    return (
      <h2>Customer table</h2>
    );
  }

  function CustomerTable(props){

    const [customerData, setCustomerData] = useState([]);

    useEffect(getCustomers,[]);

    return (
      <table className="table table-striped">
        <thead className="text-center">
          <tr>
            <th scope="col">Name</th>
            <th scope="col">Email</th>
            <th scope="col">Address</th>
            <th scope="col">Phone number</th>
          </tr>
        </thead>

        <tbody className="text-start">
          {customerData.map(displayCustomerTable)}
        </tbody>
      </table>
    );

    function getCustomers(){
      
      const axiosInstance = axios.create({
        baseURL: "http://localhost:5000/client/"
      })

      axiosInstance.get("customer").then( response => {
        setCustomerData(response.data);
      }).catch( error => {
        console.log(error);
      })

    }

    function displayCustomerTable(item){

      if (customerData === null){
        return (<p>Loading..</p>);
      }
  
      return(
        <tr key={item.customerId}>
          <td>{item.name}</td>
          <td>{item.email}</td>
          <td>{item.address}</td>
          <td>{item.phoneNumber}</td>
        </tr>
      );
    }

  }

  function CustomerForm(props){

      const [formData, setFormData] = useState({name: "", email: "", address: "", phoneNumber: ""})

    return (
      <form onSubmit={submitForm} method='post'>

        <div className="mb-3">
          <label htmlFor="name" className="form-label">Name</label>
          <input type="text" name="name" className="form-control" value={formData.name} onChange = {handleChange}  />
        </div>

        <div className="mb-3">
          <label htmlFor="email" className="form-label">Email</label>
          <input type="email" className="form-control" value={formData.email} onChange = {handleChange} name="email"/>
        </div>

        <div className="mb-3">
          <label htmlFor="address" className="form-label">Address</label>
          <input type="text" className="form-control" value={formData.address} onChange = {handleChange} name="address"/>
        </div>

        <div className="mb-3">
          <label htmlFor="phone_number" className="form-label">Phone Number</label>
          <input type="number" className="form-control" value={formData.phoneNumber} onChange = {handleChange} name="phoneNumber"/>
        </div>

        <button type="submit" className="btn btn-primary">Submit</button>
    </form>
    );

    function submitForm(event){
      event.preventDefault();
  
      axios.post('http://localhost:5000/client/customer', formData).then(
        response => {
          console.log(response.data);
        }
      ).catch(error => {
        console.log(error);
      })
    }

    function handleChange(event){
      setFormData({...formData, [event.target.name]: event.target.value});
    }


  }

}

export default App
