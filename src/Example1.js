import axios from 'axios';

function activate(){

    axios.get('customers', {baseURL: "http://localhost:8080/client/"})
    .then(function (response) {
        // handle success
        return response.data;
    })
    .catch(function (error) {
        // handle error
        console.log(error);
        return null;
    })
    .finally(function () {


    });
}

function getCustomers(){
    const customers = axios.get('customers', {baseURL: "http://localhost:8080/client/"}).then(response => {
        return customers.data;
    });
}



export {activate}