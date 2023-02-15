import axios from 'axios';

function activate(){

    axios.get('customers', {baseURL: "http://localhost:8080/client/"})
    .then(function (response) {
        // handle success
        console.log(response.data);
    })
    .catch(function (error) {
        // handle error
        console.log(error);
    })
    .finally(function () {
        // always executed
    });
}

export {activate}