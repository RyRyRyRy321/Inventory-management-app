import axios from 'axios';

class ProductRepository {

    static axiosInstance = axios.create({
        baseURL: "http://localhost:5000/client/"
    })
    
    static async getProduct(){
        try {
            const response = await this.axiosInstance.get("customer");
            return response.data;
        } catch (error) {
          console.log(error);
          return [];
        }

    }

}

export default CustomerRepository;