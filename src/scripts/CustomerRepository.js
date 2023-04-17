import axios from 'axios';



class CustomerRepository {

    static axiosInstance = axios.create({
        baseURL: "http://localhost:5000/client/"
    })
    
    static async getCustomers(){
        try {
            const response = await this.axiosInstance.get("customer");
            return response.data;
        } catch (error) {
          console.log(error);
          return [];
        }

    }

    static updateCustomers(id){

        this.axiosInstance.put("customer/" + id).then( response => {
          return response.data
        }).catch( error => {
          console.log(error);
        })

    }
      
    static deleteCustomers(id){ 

        this.axiosInstance.delete("customer/" + id).then( response => {
            updateData = response.data;
            return updateData;
        }).catch( error => {
        console.log(error);
        })

    }


}

export default CustomerRepository;